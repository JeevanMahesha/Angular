import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
	IFireBaseResponse,
	IPostData,
	IPostDataAPIResponse,
} from "./app.model";

@Injectable({ providedIn: "root" })
export class PostService {
	fireBaseURL =
		"https://angulardemoapi-4fa31-default-rtdb.asia-southeast1.firebasedatabase.app/";
	jsonFileName = ".json";

	constructor(private http: HttpClient) {}

	private getUrl(path: string): string {
		return this.fireBaseURL + path + this.jsonFileName;
	}

	createNewPost(newPost: IPostData): Observable<{ name: string }> {
		const url = this.getUrl("posts");
		return this.http.post<{ name: string }>(url, newPost);
	}

	fetchAllPosts(): Observable<IPostDataAPIResponse[]> {
		return this.http.get<IFireBaseResponse>(this.getUrl("posts")).pipe(
			map((response): IPostDataAPIResponse[] => {
				return Object.entries(response).map(([id, value]) => ({
					id,
					...value,
				}));
			})
		);
	}
}

import { React } from 'https://deno.land/x/pagic@v1.3.1/mod.ts';

const style = `
h2 {
  font-weight: normal;
}
.main_article {
  width: 960px;
  max-width: 960px;
  padding-bottom: 0;
}
.cards {
  display: flex;
  justify-content: center;
  margin: 3rem -1rem 0 -1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.cards > div {
  width: 20rem;
  padding: 0 1rem;
}
.cards ul {
  color: var(--color-text-muted);
}
.btn {
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: 0;
  cursor: pointer;
  opacity: 0.9;
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-border);
  color: var(--color-text);
}
.btn:hover {
  text-decoration: none;
}
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
}
.btn:hover {
  opacity: 1;
}
@media screen and (max-width: 44rem) {
  h2 {
    text-align: center;
  }
  .cards {
    flex-direction: column;
  }
  .cards > div {
    width: 100vw;
  }
  .cards ul {
    text-align: center;
    padding-left: 0;
    list-style: none;
  }
  pre {
    margin-left: -1rem;
    margin-right: -1rem;
  }
}
`;

const IndexPage = () => (
	<>
		<div>
			<style dangerouslySetInnerHTML={{ __html: style }} />
			<h1
				style={{
					marginTop: '3.5rem',
					textAlign: 'center',
					fontSize: '64px',
					color: 'hsl(210, 70%, 50%)',
				}}
			>
				DEX
			</h1>
			<p
				style={{
					fontSize: '28px',
					marginTop: '2rem',
					textAlign: 'center',
					color: 'var(--color-text-muted)',
				}}
			>
				一个库
			</p>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '2rem',
				}}
			>
				<a className="btn btn-primary" href="/docs/">
					开始阅读
				</a>
				<a
					className="btn"
					target="_blank"
					href="https://github.com/wxinll/pagic-site"
				>
					源码仓库
				</a>
			</div>
		</div>
		<div className="cards">
			<div>
				<h2>1111</h2>
				<ul>
					<li>2222</li>
				</ul>
			</div>
			<div>
				<h2>222</h2>
				<ul>
					<li>3333</li>
				</ul>
			</div>
			<div>
				<h2>444</h2>
				<ul>
					<li>555</li>
				</ul>
			</div>
		</div>
		<h2>推荐你的文章？快来一起建设吧</h2>
		<pre
			style={{
				fontSize: '1rem',
			}}
		>
			<code
				dangerouslySetInnerHTML={{
					__html: `http`,
				}}
			/>
		</pre>
	</>
);

export default IndexPage;

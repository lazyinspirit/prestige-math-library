---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-terminal-weak-limit-does-not-imply-path-weak-limit.json
  precheck: pass
id: cex-terminal-weak-limit-does-not-imply-path-weak-limit
kind: counterexample
title: A terminal weak limit does not imply a path-space weak limit
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [def-convergence-in-distribution-of-random-elements, thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement

Let $\mathcal C=C([0,1];H)$ with the supremum norm, choose a unit vector
$e\in H$, and define deterministic paths
$$w_{2r}(t)=0,\qquad w_{2r+1}(t)=\sin(\pi t)e\quad(0\le t\le1).$$
Every terminal value is zero, so the laws of $w_n(1)$ converge to the point
mass at $0$ in $H$. The laws of the paths do not converge weakly on
$\mathcal C$. This illustrates why the sample-sum CLT in
[[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]] is not a
time-indexed process CLT.

## Facts & Assumptions

**Given:** The metric space $\mathcal C$ with
$d(w,v)=\sup_{t\in[0,1]}\|w(t)-v(t)\|_H$ and the deterministic paths in
the Statement.

[F1] Weak convergence of Borel probability laws entails convergence of
integrals of bounded continuous real functions ([[def-convergence-in-distribution-of-random-elements]]).

[F2] The preceding Hilbert-valued theorem concerns normalized sample sums
as single $H$-valued random elements, not paths indexed by $t\in[0,1]$
([[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]]).

## Proof

**Given:** The paths $w_n$ and their point-mass laws.

1.1 Since $\sin(0)=\sin(\pi)=0$, both even and odd paths satisfy $w_n(1)=0$. Thus their terminal laws are all the point mass $\delta_0$ and in particular converge weakly to $\delta_0$ in $H$. [given, F1, algebra]

1.2 Define $\Phi:\mathcal C\to\mathbb R$ by $\Phi(w)=\min\{1,\sup_{0\le t\le1}\|w(t)\|_H\}$. The supremum norm inequality gives $$|\sup_t\|w(t)\|_H-\sup_t\|v(t)\|_H| \le\sup_t\|w(t)-v(t)\|_H=d(w,v),$$ and truncation by $x\mapsto\min(1,x)$ is 1-Lipschitz on $[0,\infty)$. Hence $\Phi$ is bounded and continuous. It equals $0$ on every even path and $1$ on every odd path, so its expectations under the path laws alternate between $0$ and $1$ and do not converge. By [F1], those path laws cannot converge weakly. [F1, algebra]

2.1 The example has convergence only after applying the terminal evaluation map; the bounded continuous path functional in step 1.2 detects the missing path-space convergence. Therefore endpoint convergence alone supplies no functional CLT conclusion, consistently with the scope in [F2]. [F2, step 1.1, step 1.2] ∎

## Remarks

Writing each path as $w_n(t)=a_n(t)e$, the following plot shows its real
coefficient $a_n(t)$. Both paths end at $0$, so terminal evaluation
$\mathrm{ev}_1:\mathcal C\to H$, $w\mapsto w(1)$, sends both to $0$.
Their supremum distance is nevertheless $1$, attained at $t=1/2$.
The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[->] (-0.3,0) -- (5.7,0) node[right] {$t$};
\draw[->] (0,-0.4) -- (0,2.6) node[above] {$a_n(t)$};
\draw[blue,very thick] (0,0) -- (5,0);
\draw[orange,very thick,domain=0:1,samples=41,smooth]
  plot ({5*\x},{2*sin(180*\x)});
\draw[dashed] (2.5,0) -- (2.5,2);
\draw[dashed] (2.5,2) -- (5.45,2);
\draw[<->] (5.45,0.08) -- (5.45,1.92)
  node[midway,right] {$d(w_{2r},w_{2r+1})=1$};
\fill (0,0) circle (2pt);
\fill (5,0) circle (2pt);
\fill[orange] (2.5,2) circle (2pt);
\node[below left] at (0,0) {$0$};
\node[below] at (2.5,0) {$1/2$};
\node[below] at (5,0) {$1$};
\draw (-0.08,2) -- (0.08,2);
\node[left] at (0,2) {$1$};
\node[orange,above] at (2.5,2.15) {$a_{2r+1}(t)=\sin(\pi t)$};
\node[blue,below] at (2.5,-0.55) {$a_{2r}(t)=0$};
\end{tikzpicture}
```

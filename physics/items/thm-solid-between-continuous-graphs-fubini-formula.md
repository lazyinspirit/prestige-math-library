---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-solid-between-continuous-graphs-fubini-formula.json
  precheck: pass
id: thm-solid-between-continuous-graphs-fubini-formula
kind: theorem
title: 'A solid between continuous graphs over a compact Jordan base is Jordan measurable and integrates by vertical sections'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-solid-between-continuous-graphs-over-a-jordan-base, lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero, thm-jordan-boundary-criterion, thm-heine-borel-rn, thm-extreme-value-metric, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-jordan-fubini-by-sections]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, Theorem 3.1.9"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R^m$ be compact and Jordan measurable, let $\alpha,\beta:D\to\mathbb R$ be continuous with $\alpha\le\beta$, and put $K:=\{(u,t):u\in D,\alpha(u)\le t\le\beta(u)\}$. The solid $K$ is compact and Jordan measurable, and every continuous $H:K\to\mathbb R$ satisfies $\int_KH=\int_D\left(\int_{\alpha(u)}^{\beta(u)}H(u,t)\,dt\right)du$.

## Facts & Assumptions

**Given:** The data in the Statement, with integrals understood in the multidimensional Riemann sense.

[F1] The boundary of $K$ has content zero ([[lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero]]).

[F2] Every continuous real function on a compact Jordan measurable set is Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[F3] If $E\subseteq\mathbb R^{p+q}$ is bounded Jordan, $g:E\to\mathbb R$ is integrable, and outside a content-zero parameter set the sections $E_x$ are Jordan measurable and the restrictions $g_x$ are integrable, then the completed section-integral function is integrable and $\int_Eg=\int(\int_{E_x}g_x)\,dx$; the symmetric coordinate order also holds ([[thm-jordan-fubini-by-sections]]).

[F4] Continuous real functions on a nonempty compact metric space attain finite extrema and are bounded ([[thm-extreme-value-metric]]).

[F5] A Euclidean set is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $D=\varnothing$, every assertion and both integrals are zero. Otherwise [F4] bounds $\alpha$ and $\beta$; the defining weak inequalities make $K$ closed, so it is closed and bounded and therefore compact by [F5]. [given, F4, F5, algebra]

2.1 By [F1] the boundary of the bounded set $K$ has content zero, so the Jordan boundary criterion makes $K$ Jordan measurable. [step 1.1, F1]

3.1 By [F2], $H$ is integrable on $K$. For each $u\in D$, the vertical section is exactly $[\alpha(u),\beta(u)]$, and the restriction $t\mapsto H(u,t)$ is continuous and integrable; [F3] therefore gives the displayed iterated formula. [step 2.1, F2, F3]

4.1 If $\alpha(u)=\beta(u)$, the corresponding section is a singleton and its integral is zero. Thus coincident graphs, whether at isolated points or everywhere, require no exceptional convention. [step 3.1, algebra] ∎

## Remarks

The picture illustrates the case $m=1$ with an interval base $D$; a general compact Jordan base need not be an interval. The highlighted vertical fibre is $K_{u_0}=\{t:(u_0,t)\in K\}=[\alpha(u_0),\beta(u_0)]$. Its endpoints are included, and the inner integral in the Statement integrates $t\mapsto H(u_0,t)$ over this interval. If the endpoints coincide, the fibre is a singleton, as in proof step 4.1. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=1.15]
\fill[blue,opacity=0.18] (0.7,0.7) -- (4.3,1.1) -- (4.3,3) -- (0.7,2.5) -- cycle;
\draw[->] (0,0) -- (5.2,0) node[right] {$u$};
\draw[->] (0,0) -- (0,3.5) node[above] {$t$};
\draw[thick] (0.7,0.7) -- (4.3,1.1) node[right] {$t=\alpha(u)$};
\draw[thick] (0.7,2.5) -- (4.3,3) node[right] {$t=\beta(u)$};
\draw (0.7,0.7) -- (0.7,2.5);
\draw (4.3,1.1) -- (4.3,3);
\node at (1.4,1.6) {$K$};
\draw[dashed] (2.5,0) -- (2.5,0.9);
\draw[orange,very thick] (2.5,0.9) -- (2.5,2.75);
\fill[orange] (2.5,0.9) circle (2pt);
\fill[orange] (2.5,2.75) circle (2pt);
\node[right] at (2.6,1.8) {$K_{u_0}$};
\node[below] at (2.5,0) {$u_0$};
\draw[very thick] (0.7,-0.65) -- (4.3,-0.65);
\fill (0.7,-0.65) circle (1.5pt);
\fill (4.3,-0.65) circle (1.5pt);
\node[below] at (2.5,-0.65) {$D$};
\end{tikzpicture}
```


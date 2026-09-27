---
id: lem-expander-walk-violated-edge-collision-bound
kind: lemma
title: "Violated-edge positions have controlled collisions"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-powering, def-constraint-graph-and-labeling-value, def-regular-multigraph-and-normalized-adjacency, lem-expander-walk-contraction, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Claim 18.33, printed p. 376."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6.2 Proposition 6.5 and Lemma 6.3, printed pp. 23-24."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $G$ be a binary constraint graph over $\Sigma$ in the convention of [[def-constraint-graph-and-labeling-value]] whose underlying graph is a finite $d$-regular adjacency-slot multigraph on $n\ge1$ vertices with normalized adjacency $M$ and normalized second eigenvalue bound $\alpha=\lVert M|_{\mathbf1^\perp}\rVert<1$ (for $n=1$ put $\alpha:=0$), as in [[def-regular-multigraph-and-normalized-adjacency]]. Let $F$ be a set of ordinary edges of $G$ (loops allowed), put $\varepsilon:=\lvert F\rvert/\lvert E\rvert$, let $k\ge1$, and consider a uniformly random lazy-walk pattern of length $k$ read from a uniformly random start vertex, in the lazy-walk convention of [[def-constraint-graph-powering]]. Let $A_i$ be the event that the $i$-th lazy step of this pattern traverses an edge of $F$. Then
$$\sum_{1\le i<j\le k}\Pr[A_i\cap A_j]\ \le\ \sqrt{\tfrac d2}\left(k^2\varepsilon^2+\frac{k\varepsilon}{1-\alpha}\right).$$
Consequently, on the small-gap range $k\varepsilon\le c$ for an absolute constant $c$,
$$\sum_{1\le i<j\le k}\Pr[A_i\cap A_j]\ \le\ \sqrt{\tfrac d2}\left(c+\frac1{1-\alpha}\right)k\varepsilon\ =\ O(k\varepsilon),$$
the constant depending only on $d$, $\alpha$ and $c$. Both bounds are uniform in $F$; for $\varepsilon=0$ both sides vanish.

## Facts & Assumptions

**Given:** a $d$-regular binary constraint graph $G$ with $M,\alpha$ as above, a set $F$ of ordinary edges, including possible loops, with $\varepsilon=\lvert F\rvert/\lvert E\rvert$, an integer $k\ge1$, and the events $A_1,\dots,A_k$ of the random lazy-walk pattern.

[F1] A lazy step at a vertex chooses uniformly among the $2d$ options consisting of the $d$ hold options and the $d$ slots at that vertex, the steps are independent, and the transition matrix of one lazy step is $P=(I+M)/2$, for which the uniform distribution on $V$ is stationary; a lazy-walk pattern of length $k$ read from a start vertex is a uniformly random element of $\mathcal P_k$ ([[def-constraint-graph-powering]]).

[F2] The underlying graph has $nd$ slots and $\lvert E\rvert=nd/2$ ordinary edges, uniform directed-slot sampling induces the uniform distribution on the ordinary edges, and each vertex has exactly $d$ outgoing slots; a nonloop ordinary edge contributes one slot at each of its two endpoints, and loops have two slots at the same vertex ([[def-regular-multigraph-and-normalized-adjacency]]).

[F3] Any ordinary edge of $G$ is a relation $R_e\subseteq\Sigma^2$ in a specified endpoint order; fractions of satisfied or violated edges are computed with respect to the ordinary edges ([[def-constraint-graph-and-labeling-value]]).

[L1] For any initial probability vector $p$ and integer $t\ge0$, $\lVert M^tp-u\rVert_2\le\alpha^t\lVert p-u\rVert_2$ with $u=\mathbf1/n$, in the ordinary Euclidean norm ([[lem-expander-walk-contraction]]).

[L2] For vectors $u,v$ in a real or complex inner product space, $\lvert\langle u,v\rangle\rvert\le\lVert u\rVert\lVert v\rVert$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the start vertex is uniform and every lazy step preserves the uniform law, so the position before the $i$-th step is uniform for every $i$, and $\Pr[A_i]=\tfrac12\cdot\tfrac{2\lvert F\rvert}{nd}=\varepsilon/2$: with probability $\tfrac12$ the step is a hold, and otherwise it uses one of the $nd$ directed slots with uniform marginal law, of which $2\lvert F\rvert$ belong to $F$, by [F2]. [F1, F2, F3, algebra]

2.1 If $F=\varnothing$, every event $A_i$ is empty and both bounds in the statement are zero, so assume $\lvert F\rvert>0$. Fix $i<j$ and let $x\in\mathbb R^n$ be the law of the position after step $i$ conditioned on $A_i$, and let $f\in\mathbb R^n$ have $f(w)=\Pr[\text{a lazy step at }w\text{ traverses an edge of }F]$, so that $\Pr[A_j\mid A_i]=\langle P^{j-i-1}x,f\rangle$ in the ordinary Euclidean inner product. In the stationary walk each of the $2\lvert F\rvert$ slots of $F$ is traversed with the same probability, so the traversed slot under $A_i$ is equally likely to be any of them. Thus $x_v\le d_F(v)/(2\lvert F\rvert)\le d/(2\lvert F\rvert)$, with $d_F$ the number of slots of $F$ at $v$. Since $\sum_vx_v=1$, $\lVert x-u\rVert_2^2=\sum_vx_v^2-1/n\le d/(2\lvert F\rvert)$. Also $f(w)=d_F(w)/(2d)\le\tfrac12$ and $\sum_wf(w)=\lvert F\rvert/d$, so in the same Euclidean norm $\lVert f\rVert_2^2=\sum_w f(w)^2\le\tfrac12\sum_wf(w)=\lvert F\rvert/(2d)$. Consequently $\lVert x-u\rVert_2\lVert f\rVert_2\le1/2$. [F1, F2, step 1.1, algebra]

3.1 Since $P=(I+M)/2$ and $M$ leaves the mean-zero subspace invariant with operator norm $\alpha$ by [L1], expanding $P^h=2^{-h}\sum_{t=0}^h\binom htM^t$ gives $\lVert P^h(x-u)\rVert_2\le\bigl(\tfrac{1+\alpha}2\bigr)^h\lVert x-u\rVert_2$ for every $h\ge0$; here $\tfrac{1+\alpha}2<1$ and $\bigl(1-\tfrac{1+\alpha}2\bigr)^{-1}=2/(1-\alpha)$. Splitting $\langle P^hx,f\rangle=\langle u,f\rangle+\langle P^h(x-u),f\rangle$ and applying [L2] in the ordinary Euclidean norm with step 2.1 yields $\Pr[A_j\mid A_i]\le\varepsilon/2+\tfrac12\bigl(\tfrac{1+\alpha}2\bigr)^{j-i-1}\le\varepsilon/2+\sqrt{d/2}\,\bigl(\tfrac{1+\alpha}2\bigr)^{j-i-1}$, since $d\ge1$. [L1, L2, step 2.1, algebra]

4.1 Multiplying by $\Pr[A_i]=\varepsilon/2$ and summing over $i<j$ gives $\sum_{i<j}\Pr[A_i\cap A_j]\le\frac{k^2}2\cdot\frac{\varepsilon^2}4+\frac{\varepsilon}2\sqrt{\frac d2}\sum_{i<j}\bigl(\frac{1+\alpha}2\bigr)^{j-i-1}\le\frac{k^2\varepsilon^2}8+\frac{k\varepsilon}2\sqrt{\frac d2}\cdot\frac2{1-\alpha}$, which is at most $\sqrt{d/2}\,(k^2\varepsilon^2+k\varepsilon/(1-\alpha))$ because $\sqrt{d/2}\ge1/8$ for $d\ge1$. For $k\varepsilon\le c$ the term $k^2\varepsilon^2$ is at most $ck\varepsilon$, so the sum is at most $\sqrt{d/2}\,(c+1/(1-\alpha))\,k\varepsilon$, and for $\varepsilon=0$ all the events are empty and both displays vanish. [step 3.1, algebra] ∎

## Remarks

- **What is counted.** $A_i$ is the event that the $i$-th lazy step *traverses* an edge of $F$ (a move, never a hold option); the collision estimate therefore also bounds the overlaps of the smaller events $B_{j,f}$ of [[lem-powering-amplifies-small-gaps]], which require in addition that the two endpoint views report the decoded labels of the edge. Loop edges are allowed in $F$: a loop has two slots at its vertex, so $\sum_vd_F(v)=2\lvert F\rvert$ and the incidence bounds of step 2.1 remain correct, and a loop step keeps the walk at its vertex while still testing the relation on the two claims of the two endpoint views.
- **Where the small-gap hypothesis enters.** The term $k^2\varepsilon^2$ is dominated by $k\varepsilon$ exactly when $k\varepsilon$ is bounded, which is the range $\varepsilon=O(1/\sqrt t)$ of the powering analysis; the other term $\sqrt{d/2}\,k\varepsilon/(1-\alpha)$ is the spectral contribution and is already $O(k\varepsilon)$ for fixed spectral gap. The dependence on the spectral gap is through $1/(1-\alpha)$ only, and not through any power of $n$.
- **The lazy convention halves the first moment** but leaves the collision structure intact: the ratio $\Pr[A_j\mid A_i]\lesssim\varepsilon/2+\alpha_L^{j-i-1}$ has the same shape as the walk-return bound of the published expander items for the non-lazy walk, with $\alpha_L=(1+\alpha)/2$; the argument above re-derives it for $P$ because the published contraction lemma is stated for $M$.
- The bound is uniform in $F$: no lower bound on $\lvert F\rvert$ is used beyond $\lvert F\rvert\ge1$ in the case $\varepsilon>0$, and the case $F=\varnothing$ is the vanishing case $\varepsilon=0$.

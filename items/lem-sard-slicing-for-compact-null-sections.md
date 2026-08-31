---
id: lem-sard-slicing-for-compact-null-sections
kind: lemma
title: "Compact null sections imply a compact set is null"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn,
       thm-lebesgue-number-lemma,
       prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $n\ge 1$, let $a\le b$, and let $K\subseteq [a,b]\times\mathbb R^n$ be compact. For each
$t\in[a,b]$, write

$$ K_t:=\{y\in\mathbb R^n:(t,y)\in K\}. $$

If every section $K_t$ is a null subset of $\mathbb R^n$, then $K$ is a null
subset of $\mathbb R^{n+1}$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, real numbers $a\le b$, and a compact set $K\subseteq [a,b]\times\mathbb R^n$ whose sections $K_t$ are null for every $t\in[a,b]$.

[F1] Euclidean nullity means that for every $\varepsilon>0$ the set can be covered by countably many closed cubes of total volume below $\varepsilon$ ([[def-null-and-content-zero-in-rn]]).

[L1] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

[L2] The image of a lower-dimensional $C^1$ manifold is null ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

## Proof
**Proof technique:** direct.

1.1 If $a=b$, then $K$ is contained in the hyperplane $\{a\}\times\mathbb R^n$, which is the image of the smooth map $y\mapsto(a,y)$ from $\mathbb R^n$ to $\mathbb R^{n+1}$; [L2] makes that hyperplane null, and hence $K$ is null. Assume henceforth that $a<b$. [L2, given, cases]

1.2 Fix $\varepsilon>0$ and put $L:=b-a+1$. For each $t\in[a,b]$, [F1] supplies the following covers. [F1, given, choose]
There are finitely many closed $n$-cubes $Q_{t,1},\ldots,Q_{t,m_t}$ covering the
compact section $K_t$ with total $n$-volume below $\varepsilon/(2^{n+3}L)$.
Enlarge them slightly to open $n$-cubes
$\widetilde Q_{t,\ell}\supseteq Q_{t,\ell}$ so that, with
$$ O_t:=\bigcup_{\ell=1}^{m_t}\widetilde Q_{t,\ell}, $$
one still has
$$ \sum_{\ell=1}^{m_t}\operatorname{vol}_n(\widetilde Q_{t,\ell}) <\frac{\varepsilon}{2^{n+2}L}. $$
Thus each section has an open finite cube cover with the stated uniform volume budget. [F1, given, choose]

2.1 Since $K_t\subseteq O_t$ and $O_t$ is open, compactness of $K$ gives the following interval. [step 1.2, given, contradiction]
There is an open interval $I_t$ about $t$ such that
$$ K\cap(I_t\times\mathbb R^n)\subseteq I_t\times O_t. $$
Otherwise one could find $(t_j,y_j)\in K$ with $t_j\to t$ and
$y_j\notin O_t$; passing to a convergent subsequence inside the compact set $K$
yields a limit point $(t,y)\in K$ with $y\in K_t\setminus O_t$,
contradiction. [step 1.2, given, contradiction]

3.1 By [L1], the cover $\{I_t:t\in[a,b]\}$ has a Lebesgue number. Choose a finite partition of $[a,b]$ into closed intervals $J_1,\ldots,J_r$ of positive length smaller than that number, and for each $j$ choose $t_j$ with $J_j\subseteq I_{t_j}$. Then $\sum_j|J_j|=b-a<L$. For each prism $J_j\times\widetilde Q_{t_j,\ell}$, use the following subdivision. [L1, step 2.1, choose]
Let $\lambda_j:=|J_j|$ and let $s_{j,\ell}$ be the side length of
$\widetilde Q_{t_j,\ell}$. If $\lambda_j\ge s_{j,\ell}$, partition the
interval direction into at most $\lceil \lambda_j/s_{j,\ell}\rceil$ pieces of
length at most $s_{j,\ell}$; if $\lambda_j\le s_{j,\ell}$, partition each of
the $n$ base directions into at most $\lceil s_{j,\ell}/\lambda_j\rceil$
pieces of length at most $\lambda_j$. In either case the prism is covered by
finitely many closed $(n+1)$-cubes of total volume at most
$$ 2^n\lambda_j s_{j,\ell}^n =2^n|J_j|\,\operatorname{vol}_n(\widetilde Q_{t_j,\ell}). $$
These cubes cover $K$, and their total volume is at most
$$ 2^n\sum_{j=1}^r |J_j| \sum_{\ell=1}^{m_{t_j}}\operatorname{vol}_n(\widetilde Q_{t_j,\ell}) <2^nL\cdot \frac{\varepsilon}{2^{n+2}L}<\varepsilon. $$
By [F1], $K$ is null. [F1, L1, step 2.1, algebra]

4.1 Therefore compact null sections imply the whole compact set is null. [step 1.1, step 3.1] ∎

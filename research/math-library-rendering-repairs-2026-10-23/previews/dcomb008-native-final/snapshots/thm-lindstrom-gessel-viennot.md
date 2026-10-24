---
id: thm-lindstrom-gessel-viennot
kind: theorem
title: "$\\det\\bigl(\\lvert\\mathcal{M}(A_i,E_j)\\rvert\\bigr)_{i,j}=\\sum_{\\pi\\in S_r}\\operatorname{sgn}(\\pi)\\cdot\\#\\{\\text{non-intersecting }\\pi\\text{-systems}\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-path-system-and-non-intersecting-path-system, lem-sign-reversing-involution-on-intersecting-path-systems, def-determinant-of-a-square-matrix, def-matrices-over-a-commutative-ring, thm-sign-is-a-homomorphism, thm-product-rule, thm-sum-rule, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.13'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Fix a natural number $r\ge1$, start points $(A_i)_{i<r}$ and end points
$(E_i)_{i<r}$ in $\mathbb{Z}^2$. Put

$$m_{i,j}:=\lvert\mathcal{M}(A_i,E_j)\rvert,$$

the number of monotone lattice paths from $A_i$ to $E_j$. Then

$$\det(m_{i,j})_{0\le i,j<r}=\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\cdot \#\mathcal{N}_\pi(A,E),$$

where $\mathcal{N}_\pi(A,E)$ is the set of non-intersecting $\pi$-systems
([[def-path-system-and-non-intersecting-path-system]]).

If the configuration is **compatible**, meaning that every monotone path
$A_i\to E_j$ meets every monotone path $A_k\to E_\ell$ whenever $i<k$ and
$j>\ell$, then only the identity permutation contributes and

$$\det(m_{i,j})_{0\le i,j<r}=\#\mathcal{N}_{\mathrm{id}}(A,E).$$

## Facts & Assumptions

**Given:** a natural number $r\ge1$, start points $(A_i)_{i<r}$, end points $(E_i)_{i<r}$, and the matrix $M=(m_{i,j})_{0\le i,j<r}$ with $m_{i,j}:=\lvert\mathcal{M}(A_i,E_j)\rvert$.

[F1] For $r\ge1$, the determinant is $$\det(M)=\sum_{\sigma\in S_r}\operatorname{sgn}(\sigma)\prod_{i<r}m_{\sigma(i),i}$$ ([[def-determinant-of-a-square-matrix]]).

[F2] For each permutation $\pi$, the set of $\pi$-systems is finite, and its cardinality is the product $\prod_{i<r}m_{i,\pi(i)}$ ([[def-path-system-and-non-intersecting-path-system]], [[thm-product-rule]]).

[L1] There is a sign-reversing involution on the intersecting systems ([[lem-sign-reversing-involution-on-intersecting-path-systems]]).

[F3] The sign is multiplicative, so $1=\operatorname{sgn}(\sigma\sigma^{-1})=\operatorname{sgn}(\sigma)\operatorname{sgn}(\sigma^{-1})$ and hence $\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)$ ([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Expanding by [F1] and reindexing the finite sum by $\pi=\sigma^{-1}$ gives $$\det(M)=\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\prod_{i<r}m_{i,\pi(i)}.$$ Indeed [F3] gives $\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)$ and, after putting $j=\sigma(i)$, the product $\prod_{i<r}m_{\sigma(i),i}$ becomes $\prod_{j<r}m_{j,\sigma^{-1}(j)}$. [F1, F3, algebra]

2.1 For each permutation $\pi$, the product $\prod_{i<r}m_{i,\pi(i)}$ is exactly the number of $\pi$-systems by [F2], so $$\det(M)=\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\cdot\#\mathcal{S}_\pi(A,E).$$ [F2, step 1.1]

3.1 Split each finite set $\mathcal{S}_\pi(A,E)$ into its non-intersecting part and its intersecting part. The intersecting systems cancel in pairs under the involution of [L1], because paired terms carry opposite signs and equal absolute values. Therefore the sum of step 2.1 reduces to $$\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\cdot\#\mathcal{N}_\pi(A,E).$$ [L1, step 2.1]

4.1 In the compatible case, every non-identity permutation $\pi$ has an inversion $i<k$ with $\pi(i)>\pi(k)$, and the compatibility hypothesis says that every path $A_i\to E_{\pi(i)}$ meets every path $A_k\to E_{\pi(k)}$; so every $\pi$-system is intersecting and $\mathcal{N}_\pi(A,E)=\varnothing$. Only the identity permutation remains, and the determinant counts the non-intersecting systems joining $A_i$ to $E_i$. [given, step 3.1] ∎

## Remarks

- This is the lattice-path form of the Lindstrom-Gessel-Viennot lemma. The general acyclic-digraph statement needs digraph machinery that this page does not build, so the theorem is stated exactly in the form the page uses.

For a concrete cancellation pair, take $r=2$, $A_0=(0,0)$,
$A_1=(0,2)$, $E_0=(3,2)$ and $E_1=(3,4)$. In each panel below,
blue denotes the path starting at $A_0$ and orange the path starting at
$A_1$; arrows point along the east and north steps. The only common vertex
is $x=(1,2)$, so it is the intersection selected by the involution in [L1].
Swapping the tails at $x$ changes the endpoint permutation from
$\mathrm{id}$ to $(0\,1)$ and back. These two intersecting systems have
contributions $+1$ and $-1$ to the sum in proof step 2.1 and cancel.
Every path is counted with unit weight; no weighted-digraph extension is
being asserted. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=0.8cm,y=0.8cm,>=stealth]
\begin{scope}
\node at (1.5,5) {$\pi=\mathrm{id},\quad +1$};
\draw[step=1,gray!20,very thin] (0,0) grid (3,4);
\draw[blue!70!black,very thick,->] (0,0)--(1,0)--(1,1)--(1,2)--(2,2)--(3,2);
\draw[orange!85!black,very thick,->] (0,2)--(1,2)--(1,3)--(1,4)--(2,4)--(3,4);
\foreach \p in {(0,0),(1,0),(1,1),(1,2),(2,2),(3,2),(0,2),(1,3),(1,4),(2,4),(3,4)}
  \fill \p circle (1.8pt);
\node[left] at (0,0) {$A_0$};
\node[left] at (0,2) {$A_1$};
\node[right] at (3,2) {$E_0$};
\node[right] at (3,4) {$E_1$};
\node at (0.65,1.6) {$x$};
\end{scope}
\node at (5,2) {$\longleftrightarrow$};
\node at (5,1.35) {tail swap};
\begin{scope}[xshift=8cm]
\node at (1.5,5) {$\pi'=(0\,1),\quad -1$};
\draw[step=1,gray!20,very thin] (0,0) grid (3,4);
\draw[blue!70!black,very thick,->] (0,0)--(1,0)--(1,1)--(1,2)--(1,3)--(1,4)--(2,4)--(3,4);
\draw[orange!85!black,very thick,->] (0,2)--(1,2)--(2,2)--(3,2);
\foreach \p in {(0,0),(1,0),(1,1),(1,2),(2,2),(3,2),(0,2),(1,3),(1,4),(2,4),(3,4)}
  \fill \p circle (1.8pt);
\node[left] at (0,0) {$A_0$};
\node[left] at (0,2) {$A_1$};
\node[right] at (3,2) {$E_0$};
\node[right] at (3,4) {$E_1$};
\node at (0.65,1.6) {$x$};
\end{scope}
\end{tikzpicture}
```

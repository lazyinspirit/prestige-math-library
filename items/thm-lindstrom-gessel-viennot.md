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

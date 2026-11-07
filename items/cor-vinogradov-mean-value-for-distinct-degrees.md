---
id: cor-vinogradov-mean-value-for-distinct-degrees
kind: corollary
title: "Vinogradov Mean-Value Bound for Distinct Degrees"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-nested-efficient-congruencing-general-polynomial-family
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "Corollary 1.2 and its proof, printed pp. 943–944"
    - title: "J. Bourgain, C. Demeter, and L. Guth, Proof of the Main Conjecture in Vinogradov's Mean Value Theorem for Degrees Higher Than Three"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "Theorem 1.1, only for the standard degree sequence 1,2,...,k, with the new decoupling proof for k≥4"
verification: {}
---

## Statement

Let $k\ge1$ and let $d_1,\ldots,d_k$ be distinct positive integers. For every real $s$ with $0<s\le k(k+1)/2$, every $\varepsilon>0$, and every real $X\ge1$,

$$\int_{[0,1)^k}\left|\sum_{1\le n\le X}e\!\left(\sum_{j=1}^k\alpha_j n^{d_j}\right)\right|^{2s}\,d\boldsymbol\alpha\ll_{\varepsilon,s,d_1,\ldots,d_k}X^{s+\varepsilon},$$

where $j(u)=u+0i$ is the real embedding into $\mathbb C$, $e(u)=\exp(2\pi i j(u))$, and $d\boldsymbol\alpha$ is product Lebesgue measure on $[0,1)^k$. The degrees need not be consecutive, so omitted powers are allowed.

## Statement references

[Wooley, Corollary 1.2](https://arxiv.org/pdf/1708.01220v2)

[Bourgain, Demeter, and Guth, Theorem 1.1, standard consecutive degrees only](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** Distinct positive integers $d_1,\ldots,d_k$, $0<s\le k(k+1)/2$, $\varepsilon>0$, and $X\ge1$. Prove the displayed bound.

[F1] [[thm-nested-efficient-congruencing-general-polynomial-family]]: the theorem defines $W(t;\boldsymbol\phi)=\det(\phi_j^{(i)}(t))_{1\le i,j\le k}$ and bounds the weighted mean value by $C_{\varepsilon,s,k,\boldsymbol\phi}X^\varepsilon(\sum_{|n|\le X}|a_n|^2)^s$ when this Wronskian is nonzero and $0<s\le k(k+1)/2$.

## Proof

1.1 Put $\phi_j(t)=t^{d_j}$ and $(d)_i=d(d-1)\cdots(d-i+1)$. Every nonzero determinant term in the Wronskian has the same power $t^D$, where $D=\sum_jd_j-k(k+1)/2\ge0$. Hence $W(t;\boldsymbol\phi)=t^D\det((d_j)_i)_{1\le i,j\le k}$. Factoring $d_j$ from column $j$ leaves monic polynomials of degrees $0,1,\ldots,k-1$ evaluated at the distinct $d_j$, so the remaining determinant is the Vandermonde product $\prod_{a<b}(d_b-d_a)$. Thus $W$ is nonzero. [given, F1, algebra]

2.1 In [F1], take these $\phi_j$, and choose $a_n=1$ for $1\le n\le X$ and $a_n=0$ otherwise. Then the integral is exactly the one in the statement and $\sum_{|n|\le X}|a_n|^2=\lfloor X\rfloor\le X$. Therefore the integral is $\ll X^{s+\varepsilon}$. [given, F1, step 1.1, algebra] ∎


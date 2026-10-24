---
id: lem-bounded-finite-length-complex-euler-identities
kind: lemma
title: "bounded finite length complex euler identities"
status: published
origin: pipeline
deps: [def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences, thm-long-exact-sequence-in-homology]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Statement

For a bounded homological complex $D$ of finite-length $R$-modules,
$$\sum_i(-1)^i\ell_R(D_i)=\chi(D).$$
If $0\to A\to B\to C\to0$ is a short exact sequence of bounded complexes whose homology modules all have finite length, then $\chi(B)=\chi(A)+\chi(C)$. In this second assertion the terms need not have finite length. The shift $D[1]_i=D_{i-1}$ with differential $-d_D$ satisfies $\chi(D[1])=-\chi(D)$.

## Facts & Assumptions

**Given:** A bounded complex $D$ of finite-length $R$-modules; independently, a short exact sequence $0\to A\to B\to C\to0$ of bounded complexes with finite-length homology. The shift convention is $D[1]_i=D_{i-1}$ with differential $-d_D$.

[F1] Euler characteristic is the alternating sum of homology lengths: [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F2] Finite length and length additivity in short exact sequences are supplied by [[cor-length-is-additive-in-short-exact-sequences]].

[F3] A short exact sequence of complexes gives a long exact homology sequence: [[thm-long-exact-sequence-in-homology]].

## Proof

**Proof technique:** direct.

1.1 Set $Z_i=\ker(d_i)$ and $B_i=\operatorname{im}(d_{i+1})$. There are short exact sequences $0\to Z_i\to D_i\to B_{i-1}\to0$ and $0\to B_i\to Z_i\to H_i(D)\to0$, with maps induced by the differential and quotient. Since $D_i$ has finite length, all these modules do. Additivity gives $\ell_R(D_i)=\ell_R(H_i(D))+\ell_R(B_i)+\ell_R(B_{i-1})$. [F2, given]

1.2 For any finite exact sequence $0\to E_0\to\cdots\to E_t\to0$ of finite-length modules, set $J_j$ to be the image in $E_j$, so $J_0=J_{t+1}=0$ and $0\to J_j\to E_j\to J_{j+1}\to0$ is exact. Hence $\ell_R(E_j)=\ell_R(J_j)+\ell_R(J_{j+1})$, and summation with alternating signs cancels every image length, yielding $\sum_j(-1)^j\ell_R(E_j)=0$. [F2, algebra]

2.1 Choose integers $a\leq b$ with $D_i=0$ outside $[a,b]$. Then $B_{a-1}=B_b=0$. In the alternating sum of the preceding equality, $\ell_R(B_j)$ has coefficient $(-1)^j+(-1)^{j+1}=0$. Only $\sum_{i=a}^b(-1)^i\ell_R(H_i(D))$ remains. This equals $\chi(D)$, including the zero complex and a complex with only one nonzero term. [F1, step 1.1]

2.2 The long exact sequence for $0\to A\to B\to C\to0$ has successive blocks $H_i(A),H_i(B),H_i(C),H_{i-1}(A)$. Boundedness permits cutting it between zero endpoints, and all its terms have finite length by hypothesis. The alternating signs on each block can be taken as $(-1)^i,-(-1)^i,(-1)^i$: the next block starts with $(-1)^{i-1}$, the opposite of the previous block's last sign. The exact-sequence cancellation therefore gives $\chi(A)-\chi(B)+\chi(C)=0$. [F1, F3, step 1.2]

3.1 The shift differential has the same kernels and images as $d_D$ in the corresponding degrees, so $H_i(D[1])=H_{i-1}(D)$. Reindexing the finite Euler sum gives $\chi(D[1])=\sum_j(-1)^{j+1}\ell_R(H_j(D))=-\chi(D)$. These establish all three assertions. [F1, step 2.1, step 2.2, algebra] ∎

## Remarks

Source locator: Hochster, Math 615, printed pp.104–105, the two cycle/boundary short exact sequences and their alternating cancellation. The short-exact-complex assertion is derived explicitly from the local homology LES. No convergence or finite-length-of-terms assumption is added to that assertion.

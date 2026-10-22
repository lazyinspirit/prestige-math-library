---
id: lem-tau-additive-for-filtered-tensor-products
kind: lemma
title: "The tau level adds under the filtered tensor product"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The proof uses only finite-dimensional linear algebra over F_2; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Proposition 3.2 and the filtered tensor-product argument for connected sums"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, connected-sum additivity of tau"
---

## Statement

Let $C$ and $D$ be finite integer-filtered chain complexes over $\mathbb F_2$, with increasing bounded exhaustive filtrations by subcomplexes and with $H(C)\cong H(D)\cong\mathbb F_2$. Give $C\otimes D$ the tensor differential and the convolution filtration
$$F_s(C\otimes D)=\sum_{p+q\le s}F_pC\otimes F_qD.$$
Then $H(C\otimes D)\cong\mathbb F_2$ and
$$\tau(C\otimes D)=\tau(C)+\tau(D).$$

## Statement references

[[def-knot-floer-filtration-and-tau|The first filtration level mapping nontrivially to total homology]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Proposition 3.2](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** The complexes $C,D$ and their filtrations as in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]]: $\tau(C)$ is the least integer $s$ for which $H(F_sC)\to H(C)$ has nonzero image, when $H(C)\cong\mathbb F_2$.

## Proof

1.1 Write $t=\tau(C)$ and $u=\tau(D)$. For each degree $n$, let $B_n=\operatorname{im}(\partial_{n+1})$ and $Z_n=\ker(\partial_n)$. Finite-dimensional linear algebra gives complements $H_n,L_n$ with $Z_n=B_n\oplus H_n$ and $C_n=Z_n\oplus L_n$; the differential maps $L_n$ isomorphically onto $B_{n-1}$. Thus each complex is the direct sum of homology representatives with contractible two-term complexes. If $h$ contracts one such summand $A$, then $h\otimes 1$ contracts $A\otimes E$: the two cross terms cancel by the graded tensor signs, while $(\partial h+h\partial)\otimes1=1$. Hence $H(C\otimes D)\cong H(C)\otimes H(D)\cong\mathbb F_2$. By [F1], choose cycles $x\in F_tC$ and $y\in F_uD$ representing the nonzero homology classes. Their tensor is a nonzero class in $H(C\otimes D)$ and lies in $F_{t+u}(C\otimes D)$, so $\tau(C\otimes D)\le t+u$. [F1, given, construct, algebra]

2.1 Let $n$ be the homological degree of $[x]$. The image of $H(F_{t-1}C)$ in $H(C)$ is zero by minimality of $t$, so every cycle in $F_{t-1}C_n$ is a boundary in $C$. The cycle $x$ cannot lie in $B_n+F_{t-1}C_n$; otherwise $x=b+v$ would make $v=x-b$ a cycle in $F_{t-1}C$ representing the same nonzero class. Extend the linear functional that is zero on $B_n+F_{t-1}C_n$ and one on $x$ to a functional $\lambda:C_n\to\mathbb F_2$. It vanishes on boundaries, so is a cocycle. Construct $\mu$ on the homological degree of $y$ in $D$ in the same way. The tensor cocycle $\lambda\otimes\mu$ evaluates to one on $x\otimes y$ and vanishes on every $F_{t+u-1}(C\otimes D)$: each summand $F_pC\otimes F_qD$ with $p+q\le t+u-1$ has either $p<t$ or $q<u$. Therefore no class in that lower filtration maps to the nonzero total homology class, and $\tau(C\otimes D)\ge t+u$. Together with step 1.1 this proves equality. [F1, step 1.1, given, construct, algebra] ∎

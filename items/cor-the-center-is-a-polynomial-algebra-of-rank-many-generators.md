---
id: cor-the-center-is-a-polynomial-algebra-of-rank-many-generators
kind: corollary
title: "The center of the enveloping algebra is polynomial on rank-many generators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-harish-chandra-isomorphism-for-the-center, thm-symmetric-invariants-restrict-to-weyl-invariants, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

If $\mathfrak g$ is a complex semisimple Lie algebra of rank $r$, then
$Z(U(\mathfrak g))$ is a polynomial algebra on $r$ algebraically independent
generators. They may be chosen with definite PBW filtration degrees.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra of rank $r$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-harish-chandra-isomorphism-for-the-center]], the center $Z(U(\mathfrak g))$ is isomorphic to the Weyl-invariant polynomial algebra $S(\mathfrak h)^W$. [given]

2.1 The Weyl group is a finite real reflection group on the rank-$r$ space $\mathfrak h^*$, so the Shephard-Todd-Chevalley theorem gives $S(\mathfrak h)^W\cong \mathbb C[f_1,\dots,f_r]$ for homogeneous algebraically independent generators. Thus step 1.1 already proves the polynomial-algebra assertion. [step 1.1]

3.1 To obtain the filtration degrees directly, use the PBW symmetrization map $$\operatorname{sym}(x_1\cdots x_m):=\frac1{m!}\sum_{\sigma\in S_m}x_{\sigma(1)}\cdots x_{\sigma(m)}.$$ The PBW basis in [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] makes this a filtration-preserving vector-space isomorphism whose associated graded map is the identity. The adjoint action is a derivation on both algebras, so $\operatorname{sym}$ is $\mathfrak g$-equivariant. It therefore restricts to a filtered vector-space isomorphism $$S(\mathfrak g)^{\mathfrak g}\xrightarrow{\sim}U(\mathfrak g)^{\mathfrak g}=Z(U(\mathfrak g)),$$ and gives $\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}$. [[thm-symmetric-invariants-restrict-to-weyl-invariants]] now lifts the homogeneous $f_i$ from step 2.1 to homogeneous algebraically independent $p_i\in S(\mathfrak g)^{\mathfrak g}$ of the same degrees. [step 2.1, algebra]

4.1 Put $z_i:=\operatorname{sym}(p_i)$. Then $z_i$ is central, has PBW filtration degree $\deg p_i=\deg f_i$, and has leading symbol $p_i$. Since the $p_i$ generate $\operatorname{gr}Z(U(\mathfrak g))$, subtracting a polynomial in the $z_i$ with the same leading symbol lowers the degree of any central element; induction on PBW degree shows that the $z_i$ generate the center. A polynomial relation among them would give, in its highest filtered degree, a relation among the algebraically independent $p_i$, so no such relation exists. Hence the $z_i$ are algebraically independent generators with the asserted definite PBW filtration degrees. [step 3.1, algebra] ∎

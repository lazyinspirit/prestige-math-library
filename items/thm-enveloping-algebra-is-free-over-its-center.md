---
id: thm-enveloping-algebra-is-free-over-its-center
kind: theorem
title: "The enveloping algebra is free over its center"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-symmetric-invariants-restrict-to-weyl-invariants, thm-harish-chandra-isomorphism-for-the-center, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For a complex semisimple Lie algebra $\mathfrak g$, the enveloping algebra $U(\mathfrak g)$ is a free left, hence also right, module over its center $Z(U(\mathfrak g))$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ and the PBW filtration on $U(\mathfrak g)$.

[F1] Kostant's harmonic decomposition gives a graded subspace
$H\subseteq S(\mathfrak g)$ for which multiplication is an isomorphism
$H\otimes S(\mathfrak g)^{\mathfrak g}\xrightarrow{\sim}S(\mathfrak g)$.

## Proof

**Proof technique:** direct.

1.1 The PBW theorem [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] identifies $\operatorname{gr}U(\mathfrak g)$ with $S(\mathfrak g)$. Its symmetrization map $$\operatorname{sym}(x_1\cdots x_m)=\frac1{m!}\sum_{\sigma\in S_m}x_{\sigma(1)}\cdots x_{\sigma(m)}$$ is a filtration-preserving vector-space isomorphism whose associated graded map is the identity. Because the adjoint action is a derivation on both sides, $\operatorname{sym}$ is $\mathfrak g$-equivariant. It therefore restricts to a filtered vector-space isomorphism $$S(\mathfrak g)^{\mathfrak g}\xrightarrow{\sim}U(\mathfrak g)^{\mathfrak g}=Z(U(\mathfrak g)),$$ where the last equality holds because $\mathfrak g$ generates $U(\mathfrak g)$. Consequently $$\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}\cong S(\mathfrak h)^W,$$ the last isomorphism being [[thm-symmetric-invariants-restrict-to-weyl-invariants]]. [given, algebra]

2.1 Choose PBW lifts of a homogeneous basis of the harmonic space $H$ from [F1] to a subspace $\widetilde H\subseteq U(\mathfrak g)$. [F1, step 1.1, choose]

3.1 The multiplication map $Z(U(\mathfrak g))\otimes \widetilde H\to U(\mathfrak g)$ has associated graded equal to the isomorphism in [F1], by step 1.1 and the chosen leading symbols in step 2.1. Filtered-graded comparison therefore makes multiplication an isomorphism of left $Z(U(\mathfrak g))$-modules. Since the center is central, the same basis gives a right-module isomorphism. Hence $U(\mathfrak g)$ is free on both sides over its center. [F1, step 1.1, step 2.1] ∎

---
id: thm-enveloping-algebra-is-free-over-its-center
kind: theorem
title: "The enveloping algebra is free over its center"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-kostant-harmonic-decomposition-of-the-symmetric-algebra, lem-filtered-freeness-lifts-from-associated-graded-algebras, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (thm-enveloping-algebra-is-free-over-its-center). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, the enveloping algebra $U(\mathfrak g)$ is a free left, hence also right, module over its center $Z(U(\mathfrak g))$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and the PBW filtration on $U(\mathfrak g)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and is inherited through [F1].

[F1] Under [A1], Kostant's harmonic decomposition gives a graded subspace $H\subseteq S(\mathfrak g)$ for which multiplication is an isomorphism $H\otimes S(\mathfrak g)^{\mathfrak g}\xrightarrow{\sim}S(\mathfrak g)$ ([[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The PBW theorem [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] identifies $\operatorname{gr}U(\mathfrak g)$ with $S(\mathfrak g)$. Its symmetrization map $$\operatorname{sym}(x_1\cdots x_m)=\frac1{m!}\sum_{\sigma\in S_m}x_{\sigma(1)}\cdots x_{\sigma(m)}$$ is a filtration-preserving vector-space isomorphism whose associated graded map is the identity. Because the adjoint action is a derivation on both sides, $\operatorname{sym}$ is $\mathfrak g$-equivariant. It therefore restricts to a filtered vector-space isomorphism $$S(\mathfrak g)^{\mathfrak g}\xrightarrow{\sim}U(\mathfrak g)^{\mathfrak g}=Z(U(\mathfrak g)),$$ where the last equality holds because $\mathfrak g$ generates $U(\mathfrak g)$. Consequently $$\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}.$$ [given, algebra]

2.1 Fix a finite ordered basis of $\mathfrak g$ and order its monomials degree by degree. In each finite-dimensional space $H_d\subseteq S^d(\mathfrak g)$, row reduction in this fixed monomial order specifies a basis; taking the union over $d\geq0$ gives a homogeneous basis $(h_j)$ of $H$ without a simultaneous choice. Define its PBW lifts by $a_j=\operatorname{sym}(h_j)$. The PBW filtration is nonnegative and exhaustive, as is its restriction $F_nZ=Z\cap F_nU$ to the center. The symmetrization in step 1.1 places $a_j$ in filtration degree $d_j=\deg h_j$ and gives it leading symbol $h_j$. [F1, step 1.1, construct]

3.1 By [A1, F1] and step 1.1, the symbols $(h_j)$ are a homogeneous free basis of $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$ over $\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}$. The filtrations and specified lifts in step 2.1 meet the hypotheses of [[lem-filtered-freeness-lifts-from-associated-graded-algebras]]. Its finite-degree induction lifts the graded expansion of each element of $U(\mathfrak g)$, while its highest-degree argument proves independence; it follows that $(a_j)$ is a left and right basis over the center. [A1, F1, step 1.1, step 2.1] ∎

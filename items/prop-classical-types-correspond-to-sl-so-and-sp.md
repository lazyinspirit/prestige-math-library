---
id: prop-classical-types-correspond-to-sl-so-and-sp
kind: proposition
title: Classical types correspond to sl, so and sp
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-killing-classification-of-complex-simple-lie-algebras, prop-root-systems-of-the-classical-complex-lie-algebras, thm-isomorphism-theorem-for-complex-semisimple-lie-algebras, def-axiom-of-choice, ex-classical-simple-lie-algebras-and-their-killing-forms]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111; Remark 23.18, printed p. 125"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50), printed pp. 150 and 155"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. The simple Lie algebras of classical type are
$A_n: \mathfrak{sl}_{n+1}(\mathbb C)$ for $n\ge1$,
$B_n: \mathfrak{so}_{2n+1}(\mathbb C)$ for $n\ge2$,
$C_n: \mathfrak{sp}_{2n}(\mathbb C)$ for $n\ge3$, and
$D_n: \mathfrak{so}_{2n}(\mathbb C)$ for $n\ge4$. The low-rank
coincidences are $\mathfrak{so}_3\cong\mathfrak{sl}_2$ and
$\mathfrak{sp}_2\cong\mathfrak{sl}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$,
$\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$, and
$\mathfrak{so}_6\cong\mathfrak{sl}_4$.

## Facts & Assumptions

**Given:** The classical matrix Lie algebras and their diagonal Cartan subalgebras, with the root systems computed in [[prop-root-systems-of-the-classical-complex-lie-algebras]].

[A1] AC is assumed and is used through the isomorphism theorem ([[def-axiom-of-choice]]).

[L1] The root systems of $\mathfrak{sl}_n,\mathfrak{sp}_{2n},\mathfrak{so}_{2n},\mathfrak{so}_{2n+1}$ with respect to the diagonal Cartan subalgebra are the standard coordinate models of types $A_{n-1},C_n,D_n,B_n$, with one-dimensional root spaces ([[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L2] In the simple ranges, the Killing forms of $\mathfrak{sl}_m$, $\mathfrak{so}_m$ and $\mathfrak{sp}_{2m}$ are respectively the nonzero multiples $2m\operatorname{tr}(XY)$, $(m-2)\operatorname{tr}(XY)$ and $2(m+1)\operatorname{tr}(XY)$, and are nondegenerate ([[ex-classical-simple-lie-algebras-and-their-killing-forms]]).

[L3] Two finite-dimensional complex semisimple Lie algebras with isomorphic based root systems are isomorphic, and the connected classical diagrams occur in the ranges $A_n$ for $n\ge1$, $B_n$ for $n\ge2$, $C_n$ for $n\ge3$, and $D_n$ for $n\ge4$ ([[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]], [[thm-cartan-killing-classification-of-complex-simple-lie-algebras]]).

[L4] Remark 23.18 of the cited Etingof notes records the root-system coincidences $D_2\cong A_1\sqcup A_1$, $D_3\cong A_3$, and $B_2\cong C_2$; the rank-one coordinate models give $B_1=C_1=A_1$.

## Proof

**Proof technique:** direct.

1.1 In the ranges $n\ge1$ for $A_n$, $n\ge2$ for $B_n$, $n\ge3$ for $C_n$, and $n\ge4$ for $D_n$, the algebras in the Statement have the asserted root systems by [L1], are semisimple by [L2], and have connected diagrams by [L3]; hence they are simple and have the asserted classical types. [L1, L2, L3, algebra]

1.2 The algebras $\mathfrak{so}_3,\mathfrak{sp}_2,\mathfrak{so}_5,\mathfrak{sp}_4,\mathfrak{so}_6$ and $\mathfrak{sl}_4$ are in the nondegenerate Killing-form ranges of [L2]. Their based root systems agree in the pairs prescribed by [L4], so [L3] gives $\mathfrak{so}_3\cong\mathfrak{sl}_2\cong\mathfrak{sp}_2$, $\mathfrak{so}_5\cong\mathfrak{sp}_4$, and $\mathfrak{so}_6\cong\mathfrak{sl}_4$. [L1, L2, L3, L4, A1, algebra]

1.3 For the remaining $D_2$ case, let $V,W$ be two-dimensional complex vector spaces with nondegenerate alternating forms. Their product defines a nondegenerate symmetric form on $V\otimes W$. Since $\mathfrak{sl}(V)=\mathfrak{sp}(V)$ and likewise for $W$, the map $(A,B)\mapsto A\otimes I+I\otimes B$ is a homomorphism $\mathfrak{sl}(V)\oplus\mathfrak{sl}(W)\to\mathfrak{so}(V\otimes W)$. It is injective: taking the partial trace over $W$ in $A\otimes I+I\otimes B=0$ gives $2A=0$, and similarly $2B=0$. Both sides have dimension $6$, so it is an isomorphism $\mathfrak{sl}_2\oplus\mathfrak{sl}_2\cong\mathfrak{so}_4$. [algebra]

2.1 For each type in the stable ranges, the complex simple Lie algebra with that based root system is unique up to isomorphism by [L3]. Thus $\mathfrak{sl}_{n+1}(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ and $\mathfrak{so}_{2n}(\mathbb C)$ realize $A_n,B_n,C_n,D_n$, respectively. [L3, step 1.1, algebra]

3.1 Apart from the coincidences in [L4], the connected classical diagrams in [L3] are distinct. Therefore the classification gives no further isomorphisms among these four classical families. [L3, L4, step 2.1, step 1.2, step 1.3, algebra] ∎

---
id: def-graded-adjustment-polynomials-in-positive-characteristic
kind: definition
title: "The graded adjustment polynomials in positive characteristic"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 44
deps: [lem-reduction-of-characteristic-zero-simple-modules-modulo-p,
       thm-graded-specht-heads-classify-the-graded-simple-modules,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.6-5.7, printed pp. 54-57: the adjustment matrices, Theorem 5.17 and its factorization, and the source's comparison with James's adjustment matrix at q=1. Complete passages read."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapters 3-5, printed pp. 25-65: the adjustment matrix of the finite type-A Hecke algebra and its dominance unitriangularity. Complete relevant passages read."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the
crystal-label comparison and transported global-basis suppliers below.

In branch (CP) of the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], with the reduced
modules $J(\nu)$ of
[[lem-reduction-of-characteristic-zero-simple-modules-modulo-p]] and the
normalized simples $D(\lambda)$ with crystal label $\lambda\in RP_\alpha$ of the
general-field normalization/crystal clauses of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] and
[[lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree]]
(in branch (C0) these are the heads of the graded Specht modules by
[[thm-graded-specht-heads-classify-the-graded-simple-modules]] (3)), define the
**graded adjustment polynomials** $a_{\lambda,\nu}(q)\in\mathbb Z[q,q^{-1}]$
for $\lambda,\nu\in RP_\alpha$ by
$$[J(\nu)]=\sum_{\lambda\in RP_\alpha}a_{\lambda,\nu}(q)[D(\lambda)]\qquad\Longleftrightarrow\qquad a_{\lambda,\nu}(q)=[J(\nu):D(\lambda)]_q .$$
Then the matrix $(a_{\lambda,\nu})$ is the graded adjustment matrix; its
entries are bar-invariant, have nonnegative integer coefficients, satisfy
$a_{\nu,\nu}(q)=1$ and vanish unless $\lambda\unlhd\nu$ (dominance);
equivalently $a_{\lambda,\nu}$ is the coefficient of $[D(\lambda)]$ in
$(\Psi_{\rm can}^{\rm Hecke})^{-1}(D_\nu)$.

**Source comparison (recorded, not used).** For level one and $\xi=1$ the
source states that this adjustment matrix specializes at $q=1$ to the
adjustment matrix of James; that degenerate comparison lies outside the
nondegenerate branch of this page and is deferred (see the batch coverage
record). The finite multiplicity expansion uses no additional choice.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. Branch (CP) of the regime, a content $\alpha$, the reduced modules $J(\nu)$ and the normalized positive-characteristic simples $D(\lambda)$ for $\lambda,\nu\in RP_\alpha$.

[F1] The reduced modules $J(\nu)=F\otimes_{\mathbb Z}L(\nu)$ have field-independent $q$-characters and well-defined classes in $G_0^{\rm gr}(H^\Lambda_\alpha(F))$ ([[lem-reduction-of-characteristic-zero-simple-modules-modulo-p]]).

[F2] The normalized simples $D(\lambda)$ have crystal labels in $RP_\alpha$ and their labels agree with the cellular head labels in positive characteristic. The reduction $J(\nu)$ contains $D(\nu)$ once, has no constituents with labels not dominated by $\nu$, and its class is fixed by finite-module diagram duality ([[lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree]]). The normalized simples are fixed by this duality in both field branches ([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]); in branch (C0) they are the graded Specht heads ([[thm-graded-specht-heads-classify-the-graded-simple-modules]] (3)).

[F3] The graded Grothendieck group has the shift-orbit basis of the normalized simples, so expansions in that basis are unique ([[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]).

[F4] The dominance-unitriangularity of the transition data is that of [[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]] and [[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]]; the Specht classes realize the standard Fock vectors ([[thm-graded-specht-classes-realize-standard-fock-vectors]]), and the graded Specht modules are those of [[def-graded-specht-module-by-homogeneous-standard-tableaux]].

## Proof

**Proof technique:** direct.

1.1 **The defining expansion is unique with nonnegative integral coefficients.** By [F1] each $J(\nu)$ is a finite-dimensional graded module in a finite block, and by [F3] the normalized simples form a shift-orbit basis of $G_0^{\rm gr}$; therefore the coefficients $a_{\lambda,\nu}(q)$ are uniquely determined Laurent polynomials, and being multiplicities of graded composition factors they have nonnegative integer coefficients [F1, F3]. [F1, F3]

1.2 **Diagonal one and dominance support.** The local positive-characteristic comparison identifies $J(\nu)$ with $D(\nu)$ plus terms whose labels are strictly smaller in the dominance order (the labels agreeing with the cellular heads by [F2]); hence $a_{\nu,\nu}=1$ and $a_{\lambda,\nu}=0$ unless $\lambda\unlhd\nu$ [F2, F4]. [F2, F4]

2.1 **Bar invariance.** By [F2], $[D_\psi J(\nu)]=[J(\nu)]$ and $D_\psi D(\lambda)\cong D(\lambda)$. Applying finite graded duality to the defining expansion inverts grading shifts, giving $[J(\nu)]=\sum_\lambda a_{\lambda,\nu}(q^{-1})[D(\lambda)]$. Uniqueness in step 1.1 therefore gives $a_{\lambda,\nu}(q)=a_{\lambda,\nu}(q^{-1})$. [F2, F3, step 1.1]

3.1 **The equivalent description and the recorded comparison.** By [F1], $\Psi_{\rm can}^{\rm Hecke}([J(\nu)])=D_\nu$; therefore $a_{\lambda,\nu}$ is the coefficient of $[D(\lambda)]$ in $(\Psi_{\rm can}^{\rm Hecke})^{-1}(D_\nu)$. The recorded comparison at $\xi=1$ lies outside this branch. AC is inherited through the crystal-label comparison in [F2] and the transported global-basis identification in [F1, F4]; the finite expansion and duality calculation use no additional choice. [given, F1, F2, F3, F4] ∎

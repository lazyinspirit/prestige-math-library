---
id: thm-graded-specht-heads-classify-the-graded-simple-modules
kind: theorem
title: "Graded Specht heads classify the graded simple modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [def-nondegenerate-root-of-unity-level-one-hecke-regime,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group,
       thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       def-cellular-algebra-basis-and-cell-module,
       def-e-regular-and-e-restricted-partitions,
       def-dominance-order-on-partitions,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-cyclotomic-klr-induction-and-restriction-functors,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary,
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
      locator: "Section 5.2-5.5, printed pp. 47-55: Theorems 5.10 and 5.13 with their proofs; the cellular head classification, the restricted distinguished shapes and the head/crystal label comparison. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 6.6-7, printed pp. 27-33: graded branching rules; Section 9.1-9.5, printed pp. 39-46: the graded canonical-basis and decomposition-number statements. Complete passages read."
verification:
  precheck: pass
---

## Statement

In the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], for
$\lambda\in RP_\alpha$ the graded Specht module $S(\lambda)$ of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]] has irreducible
head, denoted $\dot D(\lambda)$, and
$\dot D(\lambda)^\circledast\cong\dot D(\lambda)$. Moreover:

1. the modules $\{\dot D(\lambda)\langle m\rangle:\lambda\in RP_\alpha,\ m\in\mathbb Z\}$
are a complete set of pairwise non-isomorphic graded simple
$R^\Lambda_\alpha$-modules (equivalently, of $H^\Lambda_\alpha$ with the
transported grading);

2. in $G_0^{\rm gr}(H^\Lambda_\alpha)$ one has
$[S(\lambda)]=[\dot D(\lambda)]+(\ast)$ if $\lambda$ is restricted and
$[S(\lambda)]=(\ast)$ otherwise, where $(\ast)$ is an $A$-linear combination of
$[\dot D(\mu)]$'s with $\mu\lhd\lambda$; consequently
$[S(\mu):\dot D(\lambda)]_q\ne0$ implies $\lambda\unlhd\mu$, and
$[S(\lambda):\dot D(\lambda)]_q=1$;

3. in branch (C0), $\dot D(\lambda)\cong D(\lambda)$, the normalized simple
with crystal label $\lambda$ of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (4);
separately, after forgetting the grading and converting the ordinary right
modules through star, $\dot D(\lambda)\cong(D_{\rm DJ}^{\lambda'})^{\theta}$ by
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`. Thus the
conjugate $e$-regular ordinary label occurs with the explicit
sign-automorphism pullback, which reflects residue content and is not an
untwisted same-block identification. The ordinary module dictionary and radical
comparison hold in both field branches; the crystal-label comparison in this
part is the stated (C0) assertion.

Parts (1) and (2) hold in both branches (C0) and (CP); part (3) is stated in
branch (C0), the branch of the decomposition theorem it consumes. The branch
(CP) analogue of (3) is the identification [BK 2009, Theorem 5.18] and is NOT
asserted here. Choice is inherited only through the cited transported
global-basis suppliers, as recorded in the contract.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime, the cellular structure of the
Hecke algebra with the cell modules $S(\mu)$, the restricted labels $RP_\alpha$
and the dominance order on partitions.

[F1] The Hecke algebra is cellular with cell modules the ungraded $S(\mu)$ of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]
(`thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`); the local
finite-cell classification of nonzero-form heads, purity and strictly smaller
shared factors is
[[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]],
with the general cellular definitions of
[[def-cellular-algebra-basis-and-cell-module]].

[F2] The graded structure of $S(\mu)$ is the one of
[[thm-graded-specht-module-has-homogeneous-tableau-basis]]; the restricted and
regular labels are as declared in
[[def-e-regular-and-e-restricted-partitions]], and dominance is the order of
[[def-dominance-order-on-partitions]].

[F3] The classes of the restricted Specht modules are linearly independent and
form an $A$-basis of $G_0^{\rm gr}(H^\Lambda_\alpha)$
([[cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group]]),
the transition polynomials are dominance-unitriangular with restricted diagonal
$1$ ([[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]),
and the Specht classes realize the standard Fock vectors
([[thm-graded-specht-classes-realize-standard-fock-vectors]],
[[lem-standard-fock-vectors-expand-in-the-upper-global-basis]]).

[F4] In branch (C0) the canonical-basis and decomposition theorems identify the
simple classes with the upper global basis and the graded multiplicities with
the transition polynomials
([[thm-ariki-canonical-basis-theorem-in-characteristic-zero]],
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]]);
in both branches the normalized self-dual representatives and their crystal
labels are supplied by the duality and crystal clauses of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] and the
diagram duality of `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`.

[F5] The ordinary Specht-form dictionary and its unit-scaled form identity are
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`, with the
sign automorphism and star compatibility of
[[lem-dj-bridge-sign-automorphism-and-star-dual]]; the specialization at
$\xi=1$ is `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`.

[C1] Choice is inherited through the transported QG-8 global-basis suppliers
([[def-axiom-of-choice]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

## Proof

**Proof technique:** direct.

1.1 **Cellular heads and the complete simple list.** By [F1] the algebra $H^\Lambda_d$ is cellular with cell modules the ungraded $S(\mu)$, so the finite-cell classification produces an irreducible head $\dot D(\mu)$ for every cell module with nonzero form, a complete set of graded simples up to shift, purity of the heads, and the dominance-ordered expansion of every cell module in the head basis; the graded refinement of [F2] re-introduces the grading and the shift orbits [F1, F2]. [F1, F2]

1.2 **The distinguished shapes are the restricted ones (2).** By [F3] every standard coordinate functional has an upper expansion supported on restricted $\nu\unlhd\mu$ for its standard shape $\mu$. The restricted coefficient minor is unitriangular; its finite triangular inverse expresses each restricted upper vector as a combination of restricted standard functionals with labels no larger than its own. Consequently, for an unrestricted $\mu$, the class $[S(\mu)]$ is an $A$-combination of restricted Specht classes with labels strictly dominated by $\mu$. By the cellular purity of [F1], the nonzero-form head at label $\mu$, if it existed, could not occur in any of those smaller cell modules, whereas it occurs once in its own cell class; coefficient comparison in the simple-class basis excludes that head. Thus all distinguished cell labels are restricted. Their number is the rank of the simple-class Grothendieck basis, which equals the number of restricted labels by the restricted Specht basis in [F3], so every restricted label is distinguished. The diagonal-one and strictly smaller-factor clauses for these nonzero heads now follow from [F1], yielding (2). [F1, F3]

1.3 **The crystal-label comparison (3).** In branch (C0) the class of $S(\mu)$ expands in the crystal-labelled simple basis as $[S(\mu)]=\sum_{\lambda\unlhd\mu}d_{\lambda,\mu}(q)[D(\lambda)]$ with $d_{\lambda,\lambda}=1$ [F4], and in the head-labelled basis as $[S(\mu)]=[\dot D(\mu)]+\sum_{\nu\lhd\mu}c_\nu[\dot D(\nu)]$ by (2) [F1]. Both families consist of normalized self-dual simples, so the two bases differ by a permutation of labels; inducting on dominance and equating the two expansions forces the permutation to be the identity, hence $[\dot D(\lambda)]=[D(\lambda)]$ and, both representatives being normalized, $\dot D(\lambda)\cong D(\lambda)$ [F4]. The ordinary dictionary follows independently from the unit-scaled form identity of [F5]: the form radicals and quotients correspond after every field specialization, including the zero case, and applying $\theta$ again identifies the intrinsic Murphy head with $(D_{\rm DJ}^{\lambda'})^{\theta}$; conversion through star is compatible with $\theta$ by [F5]. This comparison is ungraded, and no (CP) head/crystal identification is asserted. [F4, F5]

2.1 **Self-duality (1).** The difference $[S(\lambda)]-[S(\lambda)^\circledast]$ is, by the transported dual Fock statement, an $A$-combination of classes of strictly smaller restricted shapes [F3, F4]. Writing the same difference in the head-labelled basis of (2) and comparing the leading coefficient forces the duality shift of $\dot D(\lambda)$ to satisfy $1-q^m=0$, hence $m=0$; therefore $\dot D(\lambda)^\circledast\cong\dot D(\lambda)$ and the modules $\{\dot D(\lambda)\langle m\rangle\}$ form the complete set of pairwise non-isomorphic graded simples, proving (1) [F1, F4]. [F1, F3, F4, step 1.2]

3.1 **Choice.** Parts (1) and (2) use finite-dimensional algebra and the dominance induction; part (3) uses the inherited global-basis and form-dictionary suppliers. The only choice is inherited through the QG-8 suppliers, as recorded in [C1]. [C1, F4, given] ∎

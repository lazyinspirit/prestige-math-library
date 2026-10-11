---
id: cex-k-zero-categorification-alone-does-not-identify-a-global-basis
kind: counterexample
title: "$K_0$ categorification alone does not identify the global basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-divided-power-klr-idempotents-and-projectives,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.2, Example 3 and Section 3.1, Example 3.23: NH_m = P_m^{[m]_{q_i}!}, the divided-power projectives and the identification gamma(theta_i^{(m)})=[P_{i(m)}]."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the K_0 isomorphism and the generation by the vacuum, which identify classes only up to the lattice operations used in the proof."
---

## Statement refuted

Once the isomorphism $[\mathrm{Proj}(R^\Lambda)]\cong V_A(\Lambda)$ of
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]]
is known, the classes of the word projectives $R^\Lambda(\beta)e(\nu)$ are
automatically lower global basis vectors; in particular the K_0-level
categorification alone identifies the global basis.

## Facts & Assumptions

**Given:** The rank-one datum $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, $\Lambda=2\Lambda_1$, and the rank-two block $R^\Lambda(2\alpha_i)=NH_2/(x_1^2)$ of [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]].

[F1] The nil-Hecke computation: $NH_2\cong P_{i,2}^{\oplus[2]_{q_i}!}$ with $[2]_{q_i}!=(q+q^{-1})$, and the cyclotomic quotient acts on the finitely many surviving PBW classes, so the decomposition persists in $R^\Lambda(2\alpha_i)$ with the fixed centering shift of the divided-power projective ([[def-divided-power-klr-idempotents-and-projectives]], [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]]).

[F2] In $U^-_A(\mathfrak{sl}_2)$ one has $F_i^2=[2]_{q_i}F_i^{(2)}$ and the lower global basis vector in weight $2\alpha_i$ is $F_i^{(2)}v_{2\Lambda_1}$ ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Counterexample

**(rank two, $\Lambda=2\Lambda_1$).** Let $I=\{i\}$,
$(\alpha_i\mid\alpha_i)=2$, and $\Lambda=2\Lambda_1$. In weight
$2\alpha_i$ the word projective is $R^\Lambda(2\alpha_i)=NH_2/(x_1^2)$,
which is not indecomposable: by the rank-one case of
[[def-divided-power-klr-idempotents-and-projectives]] it is a direct sum of
$[2]_{q_i}!=(q+q^{-1})$ copies of the self-dual divided-power projective
$P_{i,2}$, so its class is
$$[R^\Lambda(2\alpha_i)]=(q+q^{-1})[P_{i,2}].$$
Under $[\mathrm{Proj}(R^\Lambda)]\cong V_A(2\Lambda_1)$ the class
$[R^\Lambda(2\alpha_i)]$ is the ordinary product $F_i^2v_{2\Lambda_1}$, while
the lower global basis vector in weight $2\alpha_i$ is the divided power
$F_i^{(2)}v_{2\Lambda_1}=F_i^2v_{2\Lambda_1}/[2]_{q_i}$; the two differ by the
scalar $q+q^{-1}\notin\{\pm q^n\}$, so no K_0-level statement that only names
the module $R^\Lambda(2\alpha_i)$ and its class can decide between them. The
lower global basis is picked out only by the additional structure: the
self-dual shift normalization of
[[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]], bar invariance,
and the positivity of the divided-power coefficients, none of which is part of
the bare $K_0\cong V_A(\Lambda)$ statement. The example also shows the true
positive claim: the lower global class in weight $2\alpha_i$ is the class of
the *indecomposable* projective $P_{i,2}$, not of the word projective.

1.1 The word class. By [F1] the word projective decomposes as $(q+q^{-1})$ copies of $P_{i,2}$, so $[R^\Lambda(2\alpha_i)]=(q+q^{-1})[P_{i,2}]$; under the K_0 isomorphism of the integral projective theorem this is the class of the ordinary product $F_i^2v_{2\Lambda_1}$. [F1]

2.1 The divided power and the scalar. By [F2], $F_i^2v_{2\Lambda_1}=[2]_{q_i}F_i^{(2)}v_{2\Lambda_1}$ with $[2]_{q_i}=q+q^{-1}$, and the lower global basis vector is $F_i^{(2)}v_{2\Lambda_1}$; the scalar $q+q^{-1}$ is not of the form $\pm q^n$, so rescaling by it is not a unit change of $A$-basis and the word class cannot be the global basis element in that weight. [step 1.1, F2]

3.1 Conclusion. No purely K_0-theoretic identification can produce the divided power without dividing by $[2]_{q_i}$; the missing input is exactly the self-dual shift normalization and the positivity of the extension-of-scalars theorem, which are additional structures on top of the bare isomorphism $K_0\cong V_A(\Lambda)$. This refutes the stated claim, and the rank-two comparison is a finite computation using no choice. [step 2.1, F1, F2] ∎

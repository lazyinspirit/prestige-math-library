---
id: cex-k-zero-categorification-alone-does-not-identify-a-global-basis
kind: counterexample
title: "Word projectives need not give lower global basis vectors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-divided-power-klr-idempotents-and-projectives,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-kashiwara-lattices-lambda-and-infinity,
       def-kashiwara-crystal-operators,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module,
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
automatically lower global basis vectors.

## Facts & Assumptions

**Given:** The rank-one datum $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, $\Lambda=2\Lambda_1$, and the rank-two block $R^\Lambda(2\alpha_i)=NH_2/(x_1^2)$ of [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]].

[F1] At $\lambda_i=n=2$, the exact matrix calculation of [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]] identifies $R^\Lambda(2\alpha_i)=\operatorname{End}_k(S_2)$, where $S_2=C\{-1\}$ has degrees $-1,1$ and is the normalized divided-power projective $P_{i,2}$. Thus its regular module is $P_{i,2}\{1\}\oplus P_{i,2}\{-1\}$. The divided-power construction is [[def-divided-power-klr-idempotents-and-projectives]].

[F2] $F_i^2=[2]_iF_i^{(2)}$ with $[2]_i=q+q^{-1}$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]). The module string operators are defined in [[def-kashiwara-crystal-operators]]. The lower global lift is characterized by the integral, zero and bar-chart intersection in [[def-lower-global-basis-of-a-quantum-highest-weight-module]]; the charts are defined in [[def-kashiwara-lattices-lambda-and-infinity]] and [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]].

## Counterexample

At root $2\alpha_i$ the regular word projective has the graded decomposition
$$R^\Lambda(2\alpha_i)\cong P_{i,2}\{1\}\oplus P_{i,2}\{-1\},\qquad [R^\Lambda(2\alpha_i)]=(q+q^{-1})[P_{i,2}].$$

Under the vacuum-normalized identification the word class is $F_i^2v_{2\Lambda_1}$, whereas the lower global vector is $F_i^{(2)}v_{2\Lambda_1}$. Their ratio $q+q^{-1}$ is a nonunit of $A=\mathbb Z[q,q^{-1}]$. The normalized indecomposable divided-power projective gives the lower vector in this weight; the ordinary word projective does not.

1.1 The word class. By [F1] the word projective decomposes as $(q+q^{-1})$ copies of $P_{i,2}$, so $[R^\Lambda(2\alpha_i)]=(q+q^{-1})[P_{i,2}]$; under the K_0 isomorphism of the integral projective theorem this is the class of the ordinary product $F_i^2v_{2\Lambda_1}$. [F1]

1.2 In the rank-one module $V(2\Lambda_1)$, the Kashiwara string is $v,F_iv,F_i^{(2)}v$. These vectors generate its zero chart; they are bar fixed and generate the corresponding infinity chart. In weight $2\alpha_i$ the divided-power integral lattice is $AF_i^{(2)}v$: any divided word of that weight is an $A$-multiple of $F_i^{(2)}v$, since $F_i^2v=[2]_iF_i^{(2)}v$. Since an integral Laurent polynomial regular at both $0$ and infinity is an integer constant, the balanced intersection in that weight is $\mathbb ZF_i^{(2)}v$, and its positive string residue selects $F_i^{(2)}v$ as the lower global lift. [F2, algebra]

2.1 By [F2], $F_i^2v=[2]_iF_i^{(2)}v$. The coefficient $[2]_i=q+q^{-1}$ is a nonunit: evaluation at $q=1$ sends it to $2$, while an invertible Laurent polynomial must evaluate to a unit of $\mathbb Z$. Hence the word class cannot be the lower global vector identified in step 1.2. [step 1.1, step 1.2, F2, algebra]

3.1 This refutes the assertion that word-projective classes are automatically lower global vectors. Here the integral divided-power class $[P_{i,2}]$ gives $F_i^{(2)}v$ directly, whereas the regular word class has the nonunit coefficient $q+q^{-1}$. The finite example makes no general impossibility claim about extracting a basis from additional categorical or quantum-module structure. [step 1.1, step 1.2, step 2.1] ∎

---
id: lem-the-vacuum-projective-is-a-highest-weight-generator
kind: lemma
title: "The vacuum projective is a highest-weight generator"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-cyclotomic-klr-induction-and-restriction-functors,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-divided-power-klr-idempotents-and-projectives,
       lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-klr-categorification-of-the-negative-quantum-half]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the generation of [Proj(R^Lambda)] by the vacuum under the normalized operators and the identification with the integral highest-weight module."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 3.1, Example 3.23: the divided-power projectives and the identification of the negative half with the projective Grothendieck group."
---

## Statement

For the standard graded quotient, $1_\Lambda=[k]\in K_0(R^\Lambda(0))$ is a
nonzero highest-weight vector of weight $\Lambda$ for the normalized action.
Every finite projective is a finite retract of a sum of shifted word
projectives $P_\nu=R^\Lambda(\beta)e(\nu)$, and
$[P_\nu]=F_{\nu_n}\cdots F_{\nu_1}1_\Lambda$ for right append. The stronger
integral generation statement is by DIVIDED words: the classes
$F_{i_r}^{(a_r)}\cdots F_{i_1}^{(a_1)}1_\Lambda$ span $K_0(R^\Lambda)$ over
$A$. Thus $U_A^-1_\Lambda=K_0(R^\Lambda)$. The retract statement alone is not
claimed to make ordinary word classes an $A$-spanning set.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$ and the normalized action of [[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]].

[F1] The rank-zero algebra is $R^\Lambda(0)=k$ and restriction from root zero has zero target, so the vacuum class is nonzero and killed by every $E_i$; its weight is $\Lambda$ ([[def-cyclotomic-klr-quotient-at-a-dominant-weight]], [[def-cyclotomic-klr-induction-and-restriction-functors]]).

[F2] The finitely many word idempotents sum to the unit of each finite root block, and every finite projective is a retract of finitely many shifted copies of their principal projectives; the append bimodule sends the word $\nu$ to $\nu i$, so composition acts from the rightmost functor first ([[def-divided-power-klr-idempotents-and-projectives]]).

[F3] The quotient-cover lemma ([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]) says every cyclotomic indecomposable cover is the extension of its normalized generic cover, so extension of scalars is surjective on split $K_0$; the generic negative-half categorification ([[thm-klr-categorification-of-the-negative-quantum-half]]) identifies generic $K_0$ with $U_A^-$, generated as an $A$-module by products of the actual divided-power projectives.

## Proof

**Proof technique:** check the vacuum's highest-weight property directly, realise every finite projective as a retract of word projectives, and transfer divided generation from the generic negative half through the quotient.

1.1 The vacuum is a nonzero highest-weight vector. The rank-zero block is $R^\Lambda(0)=k$, so $1_\Lambda=[k]$ is nonzero; restriction from root zero has zero target, so $E_i1_\Lambda=0$ for every $i$; and the torus acts on the root-zero component by $q^{\langle a,\Lambda\rangle}$, so its weight is $\Lambda$. [F1]

2.1 Word projectives and retracts. The finitely many word idempotents of a root block sum to its unit, so the regular module is the sum of the corresponding word projectives and every finite projective is a retract of a finite sum of shifted copies. The append bimodule sends the word $\nu$ to $\nu i$, and since operators in a composite act from right to left, $[P_\nu]=F_{\nu_n}\cdots F_{\nu_1}1_\Lambda$. This is a statement about retracts of ordinary word projectives; it does not by itself make ordinary word classes an $A$-spanning set. [step 1.1, F2]

3.1 Divided generation. The quotient-cover lemma [F3] makes extension of scalars surjective on split $K_0$, so it suffices to generate the generic $K_0$ by extensions of divided words. The generic negative-half categorification identifies generic $K_0$ with $U_A^-$ and its divided-power projectives with the divided generators; their extensions are the cyclotomic divided functors applied to the vacuum, so the classes $F_{i_r}^{(a_r)}\cdots F_{i_1}^{(a_1)}1_\Lambda$ span $K_0(R^\Lambda)$ over $A$. This does not divide by a quantum factorial: $F_i^a=[a]_{q_i}!F_i^{(a)}$ has a generally nonunit coefficient, which is exactly why the stronger generation statement must use divided words. Combining this generation with the independent normalized-action result of [[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]] gives $U_A^-1_\Lambda=K_0(R^\Lambda)$ without a circular appeal to the integral highest-weight theorem. [step 2.1, F3] ∎

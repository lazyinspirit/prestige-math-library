---
id: "cor-clifford-ramification-squares-sum-to-inertia-index"
kind: "corollary"
title: "Ramification indices account for the inertia quotient"
status: "draft"
origin: "pipeline"
deps: ["thm-clifford-correspondence", "def-clifford-ramification-index", "cor-normal-subgroup-induction-irreducibility-criterion", "cor-frobenius-reciprocity-for-complex-characters", "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product", "cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Theorem 4.2.4(4), equation (4.7), pp.55–56"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$. List the distinct characters in $\operatorname{Irr}(G\mid\theta)$ as $\chi_1,\ldots,\chi_r$, and set $e_j=e(\chi_j,\theta)$. Then
$$ \operatorname{Ind}_N^G\theta=\sum_{j=1}^r e_j\chi_j,\qquad \sum_{j=1}^r e_j^2=[I_G(\theta):N]. $$

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] Finite-dimensional complex representations of a finite group are completely reducible. ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] Character induction and restriction satisfy Frobenius reciprocity for finite groups. ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F3] The multiplicity of an irreducible in a complex representation is the character inner product. ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F4] For a character lying over $\theta$, its ramification index is the multiplicity of $\theta$ in its normal restriction. ([[def-clifford-ramification-index]]).

[F5] The self-inner-product of $\operatorname{Ind}_N^G\theta$ equals $[I_G(\theta):N]$. ([[cor-normal-subgroup-induction-irreducibility-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Decompose the nonzero induced module into simple $G$-modules by complete reducibility. The coefficient of an irreducible character $\psi$ is $\langle\operatorname{Ind}_N^G\theta,\psi\rangle_G=\langle\theta,\operatorname{Res}_N^G\psi\rangle_N$. The latter is the nonnegative integer multiplicity of $\theta$: conjugate symmetry of the inner product does not change that real integer. It is zero exactly outside the lying-over set and equals $e_j$ for $\psi=\chi_j$. This proves the first identity and also that the finite list is nonempty. [F1, F2, F3, F4, given]

2.1 Applying the multiplicity formula to each simple module itself gives $\langle\chi_j,\chi_k\rangle_G=\delta_{jk}$. Taking the norm of the finite sum in step 1.1 therefore gives $\sum_j e_j^2$. The normal-induction norm formula identifies this with $[I_G(\theta):N]$. If the index is one there is exactly one term with e=1; the formula also includes N=1 and N=G. [F3, F5, step 1.1, algebra] ∎

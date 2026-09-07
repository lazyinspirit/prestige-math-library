---
id: "cor-normal-subgroup-induction-irreducibility-criterion"
kind: "corollary"
title: "Normal subgroup induction criterion"
status: "draft"
origin: "pipeline"
deps: ["def-conjugate-representation-and-inertia-group", "prop-induced-module-decomposes-over-a-left-transversal", "cor-frobenius-reciprocity-for-complex-characters", "cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one", "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars", "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product"]
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
    - title: "Tammo tom Dieck, Representation Theory — Proposition 4.2.3 and equations (4.4)–(4.5) pp.54–55"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$. Then
$$ \left\langle\operatorname{Ind}_N^G\theta,\operatorname{Ind}_N^G\theta\right\rangle_G=[I_G(\theta):N]. $$
In particular, $\operatorname{Ind}_N^G\theta$ is irreducible if and only if $I_G(\theta)=N$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] $I_G(\theta)$ is the stabilizer of $\theta$ for left conjugation and contains $N$. ([[def-conjugate-representation-and-inertia-group]]).

[F2] The induced function module is a vector-space direct sum of copies of its inducing module, one supported on each left coset. ([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F3] For finite groups and complex characters, $\langle\operatorname{Ind}_H^G\alpha,\beta\rangle_G=\langle\alpha,\operatorname{Res}_H^G\beta\rangle_H$. ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F4] The multiplicity of a simple constituent in a finite-dimensional complex representation is its character inner product with the representation character. ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F5] A complex character of a finite group is irreducible if and only if its self-inner-product is one. ([[cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]]).

## Proof

**Proof technique:** direct.

1.1 Let $S$ afford $\theta$ and let $T$ meet the left cosets of $N$. On the functions supported on $tN$, evaluation satisfies $(nf)(t)=(t^{-1}nt)f(t)$. Therefore restriction of induction has character $\sum_{t\in T}{}^t\theta$, by taking traces on this finite direct sum. [F2, given, algebra]

2.1 Applying the multiplicity formula to a simple module shows that two irreducible characters have inner product one when equal and zero otherwise. Conjugate characters are irreducible. Thus reciprocity gives $\langle\operatorname{Ind}\theta,\operatorname{Ind}\theta\rangle_G=\sum_{t\in T}\langle\theta,{}^t\theta\rangle_N$. Exactly the cosets $tN$ in $I_G(\theta)/N$ contribute one, giving the asserted index. [F1, F3, F4, step 1.1, algebra]

3.1 The induced character is an actual nonzero character. If it is irreducible its norm is one, hence $[I_G(\theta):N]=1$ and $I_G(\theta)=N$. Conversely that equality makes its norm one, hence it is irreducible. This includes $N=G$, when induction is identity, and $N=1$, when the norm is $|G|$. [F5, step 2.1, algebra] ∎

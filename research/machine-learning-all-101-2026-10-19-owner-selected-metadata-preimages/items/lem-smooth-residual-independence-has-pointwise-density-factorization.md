---
id: lem-smooth-residual-independence-has-pointwise-density-factorization
kind: lemma
title: "A smooth independent residual gives a pointwise density factorization"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.15"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
---

## Statement

Let $C$ be a finite-dimensional real random vector, let $(Y,C)$ have a
strictly positive $C^3$ joint density $p(y,c)$, and let
$m:\mathbb R^d\to\mathbb R$ be $C^3$. If $R=Y-m(C)$ is independent of $C$, then there are
strictly positive $C^3$ Lebesgue density versions $q_R$ and $p_C$ such that
$$p(y,c)=q_R(y-m(c))p_C(c)$$
for every $(y,c)\in\mathbb R\times\mathbb R^d$.

## Statement references

[[def-independent-random-elements|Independence of the residual and predictors]]

[[thm-independent-random-elements-have-product-joint-law|The independent joint law is the product of its marginals]]

[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant|Sectionwise translations preserve Lebesgue measure]]

## Facts & Assumptions

**Given:** The random vector, density, function and independence assumption in the Statement.

[F1] Translation preserves Lebesgue measure and Lebesgue measurability. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F2] Independent random elements have product joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F3] Nonnegative product-measurable functions can be integrated by iterated sections in any finite coordinate order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 The coordinate change $(y,c)\mapsto(r,c)=(y-m(c),c)$ is a translation in each fixed $c$-section. By [F1] and iterated integration [F3], the law of $(R,C)$ has density $h(r,c)=p(r+m(c),c)$. Since $p$ and $m$ are $C^3$ and $p>0$, $h$ is a strictly positive $C^3$ function. [given, F1, F3, construct]

2.1 Independence and [F2] make the law with density $h(r,c)$ from step 1.1 the product of the marginal laws of $R$ and $C$. Tonelli [F3] gives marginal density versions, and therefore $h(r,c)=q_R(r)p_C(c)$ almost everywhere. Choose $c_0$ for which $0<p_C(c_0)<\infty$ and this equality holds for almost every $r$. Then $q_R(r)=h(r,c_0)/p_C(c_0)$ almost everywhere, so this formula supplies a strictly positive $C^3$ version of $q_R$. [step 1.1, given, F2, F3, construct]

3.1 By Fubini choose $r_0$ with $q_R(r_0)>0$ such that $h(r_0,c)=q_R(r_0)p_C(c)$ for almost every $c$. Set $p_C^*(c)=h(r_0,c)/q_R(r_0)$. This is a strictly positive $C^3$ function and equals $p_C$ almost everywhere. Thus $h(r,c)=q_R(r)p_C^*(c)$ almost everywhere; both sides are continuous, so the equality holds everywhere. [step 1.1, step 2.1, F2, F3, algebra]

4.1 Substituting $r=y-m(c)$ into step 3.1 yields $p(y,c)=q_R(y-m(c))p_C^*(c)$ for every $(y,c)$. Renaming $p_C^*$ as $p_C$ proves the Statement. [step 1.1, step 3.1, algebra] ∎
## References

[Peters et al., JMLR (2014), Appendix A.15, proof of Theorem 34](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)


---
id: lem-density-translation-factorization
kind: lemma
title: A translated conditional density factorizes after subtraction
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 0
deps:
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Lemma 4"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $m,r\ge1$, and let $A\in\mathbb R^m$ and $B,C\in\mathbb R^r$ have a joint Lebesgue density. Suppose this joint density factors as
$$p_{A,B,C}(a,b,c)=p_A(a)f(b-c)p_C(c)$$
almost everywhere, where $p_A$, $f$, and $p_C$ are probability densities on $\mathbb R^m$, $\mathbb R^r$, and $\mathbb R^r$, respectively. Then $D=B-C$ is independent of $A$, has density $f$, and the joint density of $(A,D)$ is $p_A(a)f(d)$.

## Statement references

[Anderson, Lemma 4, printed pp. 320–321](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): states the subtraction factorization used to prove independence of a reverse-noise increment.

## Facts & Assumptions

**Given:** Countable Choice, the joint-density factorization in the statement, translation invariance of Lebesgue measure, and Tonelli's theorem.

[F1] Translation by a fixed vector preserves Lebesgue measure, hence the change of variables $b=d+c$ has Jacobian one. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F2] The nonnegative density can be integrated in successive variables, and the resulting section integrals are measurable. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] Countable Choice is the foundational hypothesis of the Lebesgue change-of-variables and completed-product suppliers below; no stronger choice principle is used. [[def-countable-choice]]

[F3] A $C^1$ diffeomorphism satisfies change of variables for nonnegative Lebesgue measurable functions. Euclidean Lebesgue measure is the completion of the product of its factor Lebesgue measures. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]

## Proof

**Given:** the hypotheses of the Statement. Write $q$ for the given joint density and $S(a,d,c)=(a,d+c,c)$.

1.1 For each fixed $a,c$, the change $b=d+c$ is the translation in [F1]; the full map $S$ is invertible linear with determinant one. Let $E$ be a Lebesgue null set outside which the given factorization holds. Applying [F3] to $1_E$ shows that $S^{-1}E$ is null, so $q(S(a,d,c))=p_A(a)f(d)p_C(c)$ almost everywhere. For a nonnegative Borel test $\Phi$, the function $(a,b,c)\mapsto\Phi(a,b-c,c)q(a,b,c)$ is Lebesgue measurable. Change of variables [F3] gives $E\Phi(A,B-C,C)=\int\Phi(a,d,c)q(S(a,d,c))\,da\,dd\,dc=\int\Phi(a,d,c)p_A(a)f(d)p_C(c)\,da\,dd\,dc$. In this last integral the factors depend on separate coordinates, and $\Phi$ is measurable for the product Borel sigma-algebra. The integrand is therefore measurable for the product of the factor Lebesgue sigma-algebras; the completed-product identification in [F3] identifies its Euclidean integral with the product integral to which [F2] applies. This establishes the transformed joint density without assuming product measurability of $f(b-c)$. [A1, F1, F2, F3]

2.1 Integrating this joint density over $c$ and using $\int p_C(c)dc=1$, Tonelli [F2] yields $p_{A,D}(a,d)=p_A(a)f(d)$. Its marginals are $p_A$ and $f$, so the product identity proves independence and identifies the density of $D$. [F2, step 1.1] ∎

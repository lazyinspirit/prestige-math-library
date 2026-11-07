---
id: lem-gts-morimura-ample-power-intermediate-ext-vanishing
kind: lemma
title: Intermediate Ext vanishing for powers of a sufficiently positive Calabi–Yau line bundle
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-strict-calabiyau-variety-in-the-morimura-source-convention
  - thm-serre-vanishing
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - def-axiom-of-choice
dependency_roles:
  def-gts-strict-calabiyau-variety-in-the-morimura-source-convention: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Cohomology of Schemes, Section 30.17
      url: https://stacks.math.columbia.edu/tag/02Y0
      locator: Serre vanishing as proved by the local published supplier; the statement here combines it with strict Calabi–Yau vanishing and Serre duality.
    - title: The Stacks Project, Duality for Schemes
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: Section 27, smooth proper duality; the local published locally-free Serre-duality supplier is used at its exact hypotheses.
verification:
  precheck: pass
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth projective strict Calabi–Yau $k$-scheme of pure dimension $d>2$, and let $L$ be an ample invertible sheaf. There is an integer $N>0$ such that, with $M=L^{\otimes N}$,
$$H^q(X,M^{\otimes n})=0\qquad(n\in\mathbb Z,\quad 0<q<d).$$
Consequently every finite sum $E=\bigoplus_{i=1}^sM^{\otimes n_i}$, with arbitrary integer exponents, satisfies $\operatorname{Ext}^q_X(E,E)=0$ for $0<q<d$, including $q=1,2$. This assertion supplies the vanishing for a proposed sum of ample powers; it does not assert that a particular finite sum is a generator or that it lifts through a categorical deformation.

## Statement references

[[def-gts-strict-calabiyau-variety-in-the-morimura-source-convention]]

[[thm-serre-vanishing]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $X$, $d$, $L$, and the Axiom of Choice.

[F1] [[def-gts-strict-calabiyau-variety-in-the-morimura-source-convention]] gives $\omega_X\cong\mathcal O_X$ and $H^q(X,\mathcal O_X)=0$ for $0<q<d$.

[F2] [[thm-serre-vanishing]] gives a single threshold $m_0$ such that $H^q(X,L^{\otimes m})=0$ for all $q>0$ and all $m\ge m_0$.

[F3] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] identifies $H^q(X,F)$ with the dual of $H^{d-q}(X,F^\vee\otimes\omega_X)$ for a locally free $F$ and $0\le q\le d$.

[A1] [[def-axiom-of-choice]] is inherited from [F2] and [F3].

## Proof

**Given:** [F1]–[F3] and [A1].

1.1 Choose $N\ge\max(1,m_0)$ and put $M=L^{\otimes N}$. For every positive integer $n$, the exponent $Nn$ is at least $m_0$, so $H^q(X,M^{\otimes n})=0$ for $q>0$. For $n=0$ the asserted intermediate-degree vanishing is precisely [F1]. [F1, F2, A1, choose]

2.1 If $n<0$ and $0<q<d$, apply [F3] to $F=M^{\otimes n}$. Its dual twisted by $\omega_X$ is $M^{\otimes(-n)}$ by [F1], and $d-q>0$. Step 1.1 makes $H^{d-q}(X,M^{\otimes(-n)})=0$, so perfectness of the duality pairing gives $H^q(X,M^{\otimes n})=0$. This proves the displayed assertion for every integer $n$. [F1, F3, A1, step 1.1]

3.1 Since each summand of $E$ is invertible, the sheaf functor $\mathcal H om(E,-)=E^\vee\otimes-$ is exact and its global derived Hom is $\mathbf R\Gamma(E^\vee\otimes-)$. For example, this follows by applying it to an injective sheaf resolution: it preserves injectives, being right adjoint to the exact functor $E\otimes-$. Hence $\operatorname{Ext}^q_X(E,E)=H^q(X,E^\vee\otimes E)$. The tensor $E^\vee\otimes E$ is the finite sum of $M^{\otimes(n_j-n_i)}$, whose intermediate cohomology groups all vanish by steps 1.1 and 2.1. Thus the Ext groups vanish. Since $d>2$, degrees one and two are among those intermediate degrees. [F1, step 1.1, step 2.1, algebra] ∎

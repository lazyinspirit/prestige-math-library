---
id: cex-spectrum-can-shrink-in-a-larger-banach-algebra
kind: counterexample
title: Spectrum can shrink in a larger Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, thm-goursat-triangle-theorem, thm-uniform-limit-continuous-complex-functions, thm-uniform-limit-interchanges-complex-line-integrals, thm-morera-triangle-theorem, thm-boundary-maximum-modulus-principle, ex-continuous-functions-form-a-commutative-banach-algebra, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 and §5.2.1 (the disc algebra), printed pp. 209–214 and 219–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement refuted

Let $\mathbb D = \{|z| < 1\}$ and let

$$A(\overline{\mathbb D}) := \{\,f : \overline{\mathbb D} \to \mathbb C : f \text{ continuous on } \overline{\mathbb D},\ f \text{ holomorphic on } \mathbb D\,\}$$

be the **disc algebra** with the supremum norm, and let
$\rho : A(\overline{\mathbb D}) \to C(\mathbb T)$ be restriction to the unit
circle $\mathbb T$. Then $A(\overline{\mathbb D})$ is a unital commutative
complex Banach algebra, $\rho$ is an isometric unital algebra homomorphism, and
for the coordinate function $z$ one has

$$\sigma_{A(\overline{\mathbb D})}(z) = \overline{\mathbb D}, \qquad \sigma_{C(\mathbb T)}(\rho(z)) = \mathbb T ,$$

so the spectrum strictly shrinks when the element is regarded in the larger
algebra $C(\mathbb T)$. Here $C(\mathbb T)$ is the algebra of
[[ex-continuous-functions-form-a-commutative-banach-algebra]] and spectra are
taken as in [[def-spectrum-and-resolvent-set-in-a-banach-algebra]] with the
algebra indicated.

## Facts & Assumptions

**Given:** The disc $\mathbb D$, its closure $\overline{\mathbb D}$, the circle $\mathbb T$, the disc algebra $A(\overline{\mathbb D})$ with the supremum norm, the restriction map $\rho$, and the coordinate function $z$.

[L1] A continuous complex-valued function on an open set is holomorphic if and only if its integral around the boundary of every filled triangle in the set vanishes; uniform limits of continuous functions are continuous ([[thm-morera-triangle-theorem]], [[thm-uniform-limit-continuous-complex-functions]]).

[L2] Uniformly convergent sequences of continuous functions on a contour may be integrated term by term ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L3] A continuous function on the closure of a bounded domain that is holomorphic in the domain attains its maximum modulus on the boundary ([[thm-boundary-maximum-modulus-principle]]).

[L6] If $f$ is holomorphic on an open set $U$ and a filled triangle lies in $U$, then the integral of $f$ around its boundary vanishes ([[thm-goursat-triangle-theorem]]).

[L4] On the compact Hausdorff space $\mathbb T$ the algebra $C(\mathbb T)$ is a unital commutative Banach algebra with spectrum of $g$ equal to $g[\mathbb T]$ ([[ex-continuous-functions-form-a-commutative-banach-algebra]]).

[L5] $A^{\times}$ consists of the elements with a two-sided inverse; $\lambda \notin \sigma(a)$ exactly when $\lambda1 - a$ is invertible ([[def-unital-banach-algebra]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Counterexample

**Proof technique:** direct.

1.1 $A(\overline{\mathbb D})$ is complete: if $(f_n)$ is uniformly Cauchy on $\overline{\mathbb D}$, then it converges uniformly to a continuous $f$ by [L1]; for every filled triangle contained in $\mathbb D$, its boundary integral of $f$ is the limit of the corresponding integrals of the holomorphic $f_n$ by [L2], and those integrals vanish by [L6]. Hence $f$ is holomorphic on $\mathbb D$ by [L1] and $A(\overline{\mathbb D})$ is closed under uniform limits. [L1, L2, L6]

2.1 Pointwise operations make $A(\overline{\mathbb D})$ a commutative complex algebra with unit $1$, and the supremum norm is submultiplicative with $\|1\|_\infty = 1$; by [step 1.1] the algebra is a unital commutative Banach algebra, and the restriction map $\rho$ is a unital algebra homomorphism. [step 1.1, L5, algebra]

3.1 The restriction map is isometric by the maximum modulus principle: $\|\rho(f)\|_\infty = \sup_{\mathbb T}|f| = \sup_{\overline{\mathbb D}}|f| = \|f\|_\infty$ for every $f \in A(\overline{\mathbb D})$, using [L3] and continuity. [step 2.1, L3, algebra]

3.2 Spectrum in the disc algebra: if $|\lambda| > 1$ then $1/(\lambda - z)$ is holomorphic on a neighbourhood of $\overline{\mathbb D}$, so $\lambda - z$ is invertible in $A(\overline{\mathbb D})$; if $|\lambda| \le 1$ then $\lambda = z(\lambda)$ with $\lambda \in \overline{\mathbb D}$, and evaluating the identity $g\cdot(\lambda - z) = 1$ at $z = \lambda$ gives $g(\lambda)\cdot 0 = 1$, impossible; hence $\sigma_{A(\overline{\mathbb D})}(z) = \overline{\mathbb D}$. [step 2.1, L5, algebra]

3.3 Spectrum in $C(\mathbb T)$: the restriction $\rho(z)$ is the function $\zeta \mapsto \zeta$ on the circle, whose image is $\mathbb T$; by [L4], $\sigma_{C(\mathbb T)}(\rho(z)) = \mathbb T$. [step 2.1, L4, algebra]

4.1 Comparing the two computations: $\sigma_{A(\overline{\mathbb D})}(z) = \overline{\mathbb D} \supsetneq \mathbb T = \sigma_{C(\mathbb T)}(\rho(z))$, so the spectrum of the same element of the smaller algebra (identified with its image under the isometric embedding $\rho$ of [step 3.1]) is strictly larger than in the ambient algebra $C(\mathbb T)$. [step 3.1, step 3.2, step 3.3, algebra] ∎

## Remarks

- **Why the two spectra differ.** In $A(\overline{\mathbb D})$ the inverse of $\lambda - z$ for $|\lambda| \le 1$ would have to be a function continuous on the closed disc and holomorphic inside, and no such function exists because the value would have to blow up at the point $\lambda$ of the closed disc. In $C(\mathbb T)$ the same element is invertible as soon as $|\lambda| \ne 1$, because the circle avoids the zero $\lambda$. The homomorphism is isometric, so the difference is not a norm effect.

- **The larger algebra need not be an extension of the element's algebra.** The example embeds $A(\overline{\mathbb D})$ isometrically into $C(\mathbb T)$ and compares spectra there; the containment $\sigma_{C(\mathbb T)}(\rho(z)) \subseteq \sigma_{A(\overline{\mathbb D})}(z)$ is the general inclusion for a closed subalgebra with the same unit, as the isometric image $\rho(A(\overline{\mathbb D}))$ is here, and it is strict here.

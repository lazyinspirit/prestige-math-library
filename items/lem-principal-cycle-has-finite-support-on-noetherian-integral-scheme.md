---
id: lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme
kind: lemma
title: "A rational function has a finite principal cycle on a Noetherian integral scheme"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-field-of-fractions
  - def-integral-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-localisation-at-a-prime-ideal
  - lem-order-function-one-dimensional-local-domain
  - thm-noetherian-ring-has-finitely-many-minimal-primes
  - thm-prime-spectrum-of-a-quotient-bijection
  - thm-noetherian-ring-quotients-and-localisations
  - thm-stalk-structure-sheaf-prime-localization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Section 10.60, Lemma 10.60.11"
      url: "https://stacks.math.columbia.edu/tag/00FM"
      locator: "Lemma 10.31.6; finite minimal primes over Noetherian quotients"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Intersection Theory, Class 2"
      url: "https://math.stanford.edu/~vakil/245/245class2.pdf"
      locator: "§2 zeros and poles, printed pp. 2–3; codimension-one order convention"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. Let $W$ be a quasi-compact Noetherian integral scheme with generic point $\eta$, and define its function field by $K(W)=\mathcal O_{W,\eta}$. For $f\in K(W)^\times$ and each codimension-one point $\eta_V$ of $W$, let $\operatorname{ord}_{\mathcal O_{W,\eta_V}}(f)$ be the length-defined order on the one-dimensional Noetherian local domain $\mathcal O_{W,\eta_V}$. Then
$$\operatorname{div}_W(f):=\sum_{V\subset W,\;\operatorname{codim}_W V=1}\operatorname{ord}_{\mathcal O_{W,\eta_V}}(f)[V]$$
has finite support and is an algebraic cycle.

## Statement references

[The Stacks Project, Lemma 10.31.6](https://stacks.math.columbia.edu/tag/00FM)

[Vakil, Intersection Theory, Class 2, §2](https://math.stanford.edu/~vakil/245/245class2.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a quasi-compact Noetherian integral scheme $W$, its generic point $\eta$, and $f\in K(W)^\times$.

[A1] The Axiom of Choice is assumed by the length-defined local-order supplier and implies dependent choice used by the finite-minimal-prime supplier ([[def-axiom-of-choice]], [[lem-order-function-one-dimensional-local-domain]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-noetherian-ring-has-finitely-many-minimal-primes]]).

[F1] Since $W$ is Noetherian, every affine open $U=\operatorname{Spec}A$ has a Noetherian coordinate ring. Since it is integral, each nonempty affine open contains its generic point and $A$ is a domain; the generic stalk is $\mathcal O_{W,\eta}=A_{(0)}=\operatorname{Frac}(A)$ ([[def-locally-noetherian-and-noetherian-scheme]], [[def-integral-scheme]], [[thm-stalk-structure-sheaf-prime-localization]], [[def-localisation-at-a-prime-ideal]], [[def-field-of-fractions]]).

[F2] A quotient of a Noetherian ring is Noetherian; a Noetherian ring has finitely many minimal primes, and primes containing an ideal correspond order-preservingly to primes of its quotient ([[thm-noetherian-ring-quotients-and-localisations]], [[thm-noetherian-ring-has-finitely-many-minimal-primes]], [[thm-prime-spectrum-of-a-quotient-bijection]]).

[F3] In a one-dimensional Noetherian local domain, the length-defined order is zero exactly on units ([[lem-order-function-one-dimensional-local-domain]]).

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Since $W$ is quasi-compact, choose a finite affine open cover $U_i=\operatorname{Spec}A_i$. Each nonempty $U_i$ contains $\eta$, and [F1] identifies $K(W)$ with $\operatorname{Frac}(A_i)$. Write $f=a_i/b_i$ with nonzero $a_i,b_i\in A_i$ on each chart. [F1, given, choose]

1.2 Let $\eta_V\in U_i$ be a codimension-one point, corresponding to a height-one prime $P\subset A_i$. If $\operatorname{ord}_{\mathcal O_{W,\eta_V}}(f)\ne0$, then [F3] says $f$ is not a unit in $(A_i)_P$. Therefore $a_i\in P$ or $b_i\in P$, since otherwise both become units in $(A_i)_P$ and their ratio is a unit. [A1, F1, F3, step 1.1, given]

2.1 Suppose $a_i\in P$. If a prime $Q\subsetneq P$ contained $a_i$, then $(0)\subsetneq Q\subsetneq P$ would be a strict chain of length two, contradicting $\operatorname{ht}P=1$. Hence $P$ is minimal over $(a_i)$. The same argument applies if $b_i\in P$. By [F2], each quotient $A_i/(a_i)$ and $A_i/(b_i)$ is Noetherian and has finitely many minimal primes; the prime-quotient correspondence identifies these with the primes of $A_i$ minimal over $(a_i)$ and $(b_i)$. Thus every codimension-one point with nonzero order lies in a finite set on this chart. [A1, F1, F2, step 1.1, step 1.2, given, algebra]

3.1 There are finitely many charts, and step 2.1 puts the support on each chart inside a finite set. Hence only finitely many codimension-one points have nonzero order, so the displayed sum is a finite integral linear combination of codimension-one subvarieties and is an algebraic cycle. [step 1.1, step 2.1, algebra] ∎

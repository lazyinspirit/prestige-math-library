---
title: Regularity and dimensions for finite-type cycle arguments
status: published
research_item: thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
dependency_level: 0
sources:
  references:
    - title: Stacks Project, smooth schemes over fields
      url: https://stacks.math.columbia.edu/tag/056S
      locator: Lemma 33.25.3 (tag 056S), statement and displayed proof; live tag
        checked in this repair
      statement: Smoothness of X over a field implies that X is a regular scheme.
      hypotheses: X to Spec k smooth, k any field; no quasi-compactness or
        separatedness hypothesis.
      reading_limits: Read the complete statement and displayed proof. The cited
        algebraic regularity criterion and the scheme regularity criterion were
        not reconstructed.
    - title: Stacks Project, regular local rings
      url: https://stacks.math.columbia.edu/tag/00NN
      locator: Section 10.106, Lemma 10.106.2, statement and displayed proof (tag
        00NN); live text checked in this repair
      statement: A regular local ring is an integral domain.
      hypotheses: A nonzero commutative Noetherian local ring satisfying the
        regularity condition.
      reading_limits: Read Lemma 10.106.2 and its displayed proof. Its
        associated-graded-ring and intersection-theorem inputs were not
        reconstructed.
    - title: Stacks Project, finite-type dimension formulas
      url: https://stacks.math.columbia.edu/tag/07NB
      locator: Section 10.116, Lemmas 10.116.1–10.116.3 (tag 07NB), statements and
        displayed proofs; live text checked in this repair
      statement: For a finite-type domain S over k, dim S is trdeg_k Frac(S). Strict
        specialization lowers residue-field transcendence degree. For a prime p
        in a finite-type k-algebra S, the local topological dimension at p is
        dim S_p plus trdeg_k kappa(p).
      hypotheses: Any field k; S a finite-type k-algebra, and S a domain for the first
        identity. The third identity uses local topological dimension, not the
        dimension of the stalk alone.
      reading_limits: Read the three statements and displayed proofs. Noether
        normalization and the cited maximal-chain and
        local-topological-dimension results were not reconstructed. The
        affine-to-scheme application is recorded in External input.
    - title: Stacks Project, dimension formula for a proper dominant map
      url: https://stacks.math.columbia.edu/tag/02JX
      locator: Lemma 29.53.4 (tag 02JX), including its proper-morphism footnote; also
        Lemma 29.53.1 (tag 02JU); live text checked in this repair
      statement: A dominant locally finite-type morphism X to Y of integral schemes
        with Y locally Noetherian satisfies dim X at most dim Y plus
        trdeg_{k(Y)} k(X), with equality if the morphism is closed.
      hypotheses: Integral source and target; locally Noetherian target; dominant
        locally finite-type morphism; closedness for equality. Proper morphisms
        satisfy the latter requirements.
      reading_limits: Read the complete statement and displayed proof of 02JX and the
        statement and short proof of 02JU. The cited algebraic dimension
        formula, generic-fibre facts and specialization-lifting facts were not
        reconstructed.
    - title: Stacks Project, dimensions of Cartier divisor components
      url: https://stacks.math.columbia.edu/tag/02RK
      locator: Lemma 42.16.1(2) (tag 02RK), statement and displayed proof; live text
        checked in this repair
      statement: An irreducible component of an effective Cartier divisor on an
        integral locally finite-type scheme over a base in Situation 42.7.1 has
        delta-dimension one less than the ambient scheme.
      hypotheses: The base is locally Noetherian and universally catenary with a
        dimension function. Apply only to the field-base instance of Example
        42.7.2, with base dimension function zero.
      reading_limits: Read the complete lemma and displayed proof. The cited
        principal-ideal dimension theorem was not reconstructed. The field-base
        setup and conversion from delta-dimension to ordinary dimension are
        supplied by the separate setup reference.
    - title: Stacks Project, finite-type morphisms preserve Noetherianity
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, statement and short proof; live tag checked in this repair
      statement: A locally finite-type morphism with locally Noetherian target has
        locally Noetherian source; a finite-type morphism with Noetherian target
        has Noetherian source.
      hypotheses: A morphism of schemes with the respective local or global finiteness
        and Noetherian assumptions. Apply over Spec k.
      reading_limits: Read the complete statement and short proof. The invoked
        algebraic Hilbert basis theorem was not reconstructed.
    - title: Stacks Project, field-base cycle dimension conventions
      url: https://stacks.math.columbia.edu/tag/02QK
      locator: Section 42.7, Situation 42.7.1, following formula for delta_{X/S},
        Example 42.7.2, Lemma 42.7.5 and Definition 42.7.6; live text checked in
        this repair
      statement: Spec k with dimension function zero satisfies the cycle-theory setup.
        On a locally finite-type k-scheme the induced function at x is trdeg_k
        kappa(x). Delta-dimension of an integral closed subscheme is the value
        at its generic point and equals its ordinary dimension in this
        field-base situation.
      hypotheses: Any field k; schemes locally of finite type over Spec k. For the
        ordinary-dimension identification the base is Jacobson with dimension
        function zero at closed points, as holds for Spec k.
      reading_limits: Read the setup, induced-function formula, field example, Lemma
        42.7.5 with its displayed proof, and Definition 42.7.6. Their cited
        universal-catenarity and Jacobson-theory prerequisites were not
        reconstructed.
external_input: true
---

PDF p. 13: Proof of Proposition 6.1: ordinary CH3 identification and degree-seven vanishing

## Prerequisites

- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)
- [math:def-algebraically-independent-finite-tuples-over-a-field](https://alphabetamath.cc/item/def-algebraically-independent-finite-tuples-over-a-field)
- [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)
- [math:thm-effective-cartier-divisor-closed-immersion](https://alphabetamath.cc/item/thm-effective-cartier-divisor-closed-immersion)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [` Stacks Project, smooth schemes over fields · Lemma 33.25.3 (tag 056S), statement and displayed proof; live tag checked in this repair `](https://stacks.math.columbia.edu/tag/056S)
- [` Stacks Project, regular local rings · Section 10.106, Lemma 10.106.2, statement and displayed proof (tag 00NN); live text checked in this repair `](https://stacks.math.columbia.edu/tag/00NN)
- [` Stacks Project, finite-type dimension formulas · Section 10.116, Lemmas 10.116.1–10.116.3 (tag 07NB), statements and displayed proofs; live text checked in this repair `](https://stacks.math.columbia.edu/tag/07NB)
- [` Stacks Project, dimension formula for a proper dominant map · Lemma 29.53.4 (tag 02JX), including its proper-morphism footnote; also Lemma 29.53.1 (tag 02JU); live text checked in this repair `](https://stacks.math.columbia.edu/tag/02JX)
- [` Stacks Project, dimensions of Cartier divisor components · Lemma 42.16.1(2) (tag 02RK), statement and displayed proof; live text checked in this repair `](https://stacks.math.columbia.edu/tag/02RK)
- [` Stacks Project, finite-type morphisms preserve Noetherianity · Lemma 29.15.6, statement and short proof; live tag checked in this repair `](https://stacks.math.columbia.edu/tag/01T6)
- [` Stacks Project, field-base cycle dimension conventions · Section 42.7, Situation 42.7.1, following formula for delta_{X/S}, Example 42.7.2, Lemma 42.7.5 and Definition 42.7.6; live text checked in this repair `](https://stacks.math.columbia.edu/tag/02QK)


## Statement

Here a $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; smoothness and finite type refer to that morphism. A regular scheme means a locally Noetherian scheme all of whose local rings are regular local rings, in the Noetherian convention. For an integral finite-type $k$-scheme $T$ with generic point $\eta_T$, write $k(T)=\mathcal O_{T,\eta_T}$ for its function field; its canonical identification with the fraction field of any nonempty affine chart is part of the supplied function-field interface. For the field extensions $L/K$ occurring here, $\operatorname{trdeg}_K L$ is the supremum of the sizes of finite algebraically independent subsets of $L$ over $K$.

Dimension means the chain dimension of the underlying topological space: the supremum of lengths of strict chains of nonempty irreducible closed subsets. For an integral closed subscheme $D\subset T$, $\operatorname{codim}_T D$ means the supremum of lengths $m$ of chains $|D|=Z_0\subsetneq\cdots\subsetneq Z_m=|T|$ of irreducible closed subsets. This definition does not assume the dimension-difference formula asserted below. A morphism is dominant when its image is dense in its target. For a dominant morphism between integral schemes, the function-field extension uses the pullback at the generic points. Components of an effective Cartier divisor mean the irreducible components of its associated closed subscheme: on a chart $\operatorname{Spec}A$ with local nonzerodivisor equation $f$, this subscheme is $\operatorname{Spec}(A/(f))$; the closed-immersion supplier establishes that these charts glue independently of the equations. A unit equation gives the empty divisor, for which the component assertion is vacuous.

Let $k$ be a field. A smooth $k$-scheme is regular, and every regular local ring is a domain. If $T$ is an integral finite-type $k$-scheme and $D\subset T$ is integral and closed, then $\dim T=\operatorname{trdeg}_k k(T)$ and $\operatorname{codim}_T D=\dim T-\dim D$. Every nonempty open of $T$ has the same dimension as $T$. Every irreducible component of an effective Cartier divisor on $T$ has dimension $\dim T-1$.

If $p:P\to Q$ is a proper dominant morphism of integral finite-type $k$-schemes, then $\dim P=\dim Q+\operatorname{trdeg}_{k(Q)}k(P)$. None of these assertions requires separatedness over $k$.

## Statement references

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:def-algebraically-independent-finite-tuples-over-a-field](https://alphabetamath.cc/item/def-algebraically-independent-finite-tuples-over-a-field)

[math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)

[math:thm-effective-cartier-divisor-closed-immersion](https://alphabetamath.cc/item/thm-effective-cartier-divisor-closed-immersion)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

## External input

The regularity and regular-local-domain assertions are imported from Stacks tags 056S and 00NN. Their formulation uses [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring) and [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme). The finite-type schemes used for the dimension assertions are Noetherian by tag 01T6, applied to their structure maps to the spectrum of a field; thus the chain-dimension convention of [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) applies.

Tags 07NB, Lemmas 10.116.1–10.116.3, supply the affine dimension, specialization and local dimension formulas. Apply them on affine neighbourhoods of the relevant generic points. The canonical function-field identifications in [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field) identify the fraction fields of all nonempty affine charts with the same $k(T)$. Only that supplier's function-field and finite-generation clauses are used, not its geometric-integrality clause or that clause's choice assumption. The affine formulas give the stated dimensions, invariance on nonempty opens and codimension formula; the chain definition of codimension is the usual scheme codimension, not a classical-variety convention.

Tag 02JX supplies the dimension formula for the proper dominant map. Properness in [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism) includes finite type and universal closedness, hence gives the closedness required by that cited equality; the target is locally Noetherian by tag 01T6. Dominance sends the source generic point to the target generic point, so generic-stalk pullback is a unital homomorphism of fields and hence injective. This specifies the field extension in the formula.

Tag 02RK supplies the Cartier-component assertion. The associated closed subscheme is the construction in [math:thm-effective-cartier-divisor-closed-immersion](https://alphabetamath.cc/item/thm-effective-cartier-divisor-closed-immersion), applied to [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor). For this citation use precisely the field-base setup of Section 42.7, Example 42.7.2: $S=\operatorname{Spec}k$ with base dimension function zero. The induced function on a finite-type $k$-scheme is $\delta(x)=\operatorname{trdeg}_k\kappa(x)$, where $\kappa(x)$ is the residue field of its local ring. Definition 42.7.6 and Lemma 42.7.5 identify the source's $\delta$-dimension of an integral component with ordinary chain dimension, giving exactly the stated drop by one. No separatedness over $k$ is imposed by any of these inputs; properness is a condition on the displayed morphism, not on the structure maps to $\operatorname{Spec}k$.

The seven source records specify the imported premises and the scope actually checked in this repair. The indicated statements and displayed proofs were read as recorded in their reading limits; their deeper prerequisites were not reconstructed. These are external inputs and scope checks, not a claimed local proof of the imported results. The checked versions are live tag texts, without a pinned repository commit.

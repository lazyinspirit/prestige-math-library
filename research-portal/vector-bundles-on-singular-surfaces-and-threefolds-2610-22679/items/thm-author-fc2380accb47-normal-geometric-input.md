---
id: thm-author-fc2380accb47-normal-geometric-input
kind: theorem
title: External normality and perfect-field smooth-locus inputs
status: published
domain: mathematics
deps:
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-normal-surface-modification-and-normalized-point-blowup
  - math:def-integral-scheme
  - math:def-irreducible-component-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-perfect-field
  - math:def-regular-local-ring-geometric-point
  - math:def-smooth-morphism-schemes
  - math:def-krull-dimension-of-a-ring
  - math:def-generic-point-irreducible-closed-subset
dependency_roles:
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-normal-surface-modification-and-normalized-point-blowup: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-generic-point-irreducible-closed-subset: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, normal components and Serre normality criterion
      url: https://stacks.math.columbia.edu/tag/0357
      locator: Lemma28.7.5 (0357), complete statement/proof; also Section28.12,
        Lemma28.12.5, https://stacks.math.columbia.edu/tag/033P
      statement: A normal scheme whose quasi-compact opens have finitely many
        irreducible components is a disjoint union of integral normal schemes. A
        locally Noetherian normal scheme has Serre condition(R1).
      hypotheses: The component decomposition needs the stated local finiteness of
        components, satisfied by a Noetherian scheme; the Serre criterion is
        locally Noetherian. No characteristic restriction.
      reading_limits: Checked Lemma 28.7.5 in full, including its printed proof;
        checked Definition 28.12.1, the following codimension convention, and
        Lemma 28.12.5 with its printed proof reference in Section 28.12 (033P).
        These checks establish the stated interfaces; the commutative-algebra
        proof referenced by the criterion was not reconstructed.
    - title: The Stacks Project, regular and smooth loci over perfect fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemma33.25.8 and its complete proof; Lemmas33.25.3–33.25.4 for
        smoothness/regularity context.
      statement: For a reduced locally algebraic scheme over a perfect field, its
        smooth and regular loci coincide and form a dense open subscheme.
      hypotheses: The field is perfect and the scheme is reduced and locally of finite
        type over it (locally algebraic). Finite type is a special case. No
        assertion over imperfect fields is imported.
      reading_limits: Checked Lemma 33.25.8 and its entire printed proof, as well as
        Lemmas 33.25.3 and 33.25.4 and the positive-characteristic and
        nonperfect-field warning in Section 33.25. The subordinate algebra and
        geometric-regularity results cited there were not independently
        reconstructed.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Section 28.5, Lemma 28.5.2 (last assertion), Lemma 28.5.6, and Lemma
        28.5.7.
      statement: An open subscheme of a locally Noetherian scheme is locally
        Noetherian. A locally closed subscheme of a Noetherian scheme is
        Noetherian. A Noetherian scheme has finitely many irreducible
        components.
      hypotheses: Locally Noetherian for the first assertion; Noetherian for the
        second and third. A quasi-compact open in a locally Noetherian scheme is
        Noetherian by definition.
      reading_limits: Checked the indicated statements and printed arguments in
        Section 28.5. The proof of Lemma 28.5.6 is explicitly omitted in the
        source and only its hint is printed; that assertion is imported, not
        locally proved. Did not independently reconstruct the topology and
        commutative-algebra results referenced by Lemmas 28.5.2 and 28.5.7.
dependency_level: 0
---

## Statement
Import the two source results recorded above: Noetherian normal schemes decompose into their finitely many clopen integral normal components and satisfy $(R_1)$; reduced finite-type schemes over a perfect field have identical regular and smooth loci, and that locus is open. Here codimension of an irreducible closed subset with generic point $x$ is $\dim\mathcal O_{X,x}$, as in the cited Serre-condition convention.

Reduced means that in every local ring $a^n=0$ for an integer $n\geq1$ implies $a=0$. The regular locus is the set of points with regular local ring, and the smooth locus is the set where the structure morphism to $\operatorname{Spec}k$ is smooth. In the locally Noetherian setting, $(R_1)$ means that every point $x$ with $\dim\mathcal O_{X,x}\leq1$ is regular. Locally algebraic over $k$ means locally of finite type over $k$.

## Statement references
[[math:def-locally-noetherian-and-noetherian-scheme|Noetherian scheme conventions]]

[[math:def-normal-surface-modification-and-normalized-point-blowup|Normality: only the local-ring definition in the Normal schemes paragraph]]

[[math:def-integral-scheme|Integral schemes]]

[[math:def-irreducible-component-scheme|Irreducible components with reduced induced structure]]

[[math:def-locally-finite-type-and-finite-type-morphism|Locally finite type and finite type]]

[[math:def-perfect-field|Perfect fields]]

[[math:def-regular-local-ring-geometric-point|Regular points]]

[[math:def-smooth-morphism-schemes|Smoothness at a point]]

[[math:def-krull-dimension-of-a-ring|Krull dimension of a local ring]]

[[math:def-generic-point-irreducible-closed-subset|Generic points of irreducible closed subsets]]

## Source contract
**Given:** A Noetherian normal scheme; for the smooth-locus assertion a reduced locally algebraic scheme over a perfect field.

**Goal:** Import the exact geometric consequences of normality used before constructing parameters.

[F1] Stacks Lemma 28.7.5 and Lemma 28.12.5 give decomposition and $(R_1)$. Lemmas 28.5.2, 28.5.6 and 28.5.7 verify the Noetherian finiteness hypotheses: quasi-compact opens of a Noetherian scheme are Noetherian and have finitely many irreducible components, including the whole scheme. Definition 28.12.1 supplies the $(R_1)$ convention stated above.

[F2] Stacks Lemma 33.25.8 gives the equality and openness for the reduced locally algebraic scheme over the perfect field, hence for the finite-type case in the Statement.

## External input
Import [F1] from the normality/Serre-condition and Noetherian-scheme references, and [F2] from the perfect-field reference, with precisely the hypotheses and reading limits recorded in those references. Normality is used only in its local-ring sense; no normalization or blowup construction from the definition supplier is invoked. These are cited premises, with no local proof claimed. Their consumers must retain the Noetherian, reducedness and perfect-field hypotheses at the respective applications.

---
id: thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
kind: theorem
title: Regularity and dimensions for finite-type cycle arguments
status: published
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Stacks Project, smooth schemes over fields
      url: https://stacks.math.columbia.edu/tag/056S
      locator: Lemma 33.25.3; live tag text inspected 2026-11-09
      statement: A smooth scheme over a field is regular.
      hypotheses: Any field; no separatedness assumption.
      reading_limits: Read the complete statement and its short proof; the referenced
        algebraic regularity criterion was not reconstructed.
    - title: Stacks Project, regular local rings
      url: https://stacks.math.columbia.edu/tag/00NN
      locator: Lemma 10.106.2; live section text inspected 2026-11-09
      statement: Every regular local ring is a domain.
      hypotheses: Regular local means noetherian regular local.
      reading_limits: Read the lemma and its displayed proof; the associated-graded
        and intersection prerequisites were not reconstructed.
    - title: Stacks Project, finite-type dimension formulas
      url: https://stacks.math.columbia.edu/tag/07NB
      locator: Lemmas 10.116.1-10.116.3; live section text inspected 2026-11-09
      statement: For finite-type domains over a field, dimension is transcendence
        degree; specialization strictly lowers it, and the local dimension
        formula identifies codimension with the dimension difference.
      hypotheses: Finite-type algebras over any field.
      reading_limits: Read these three statements and proofs; their normalization and
        maximal-chain prerequisites were not reconstructed.
    - title: Stacks Project, dimension formula for a proper dominant map
      url: https://stacks.math.columbia.edu/tag/02JX
      locator: Lemma 29.53.4; live tag text inspected 2026-11-09
      statement: For a closed dominant locally finite-type morphism of integral
        schemes with locally noetherian target, dimension equals target
        dimension plus function-field transcendence degree.
      hypotheses: Proper maps in the application are closed; all schemes are finite
        type over a field.
      reading_limits: Read the complete statement and proof and the statement and
        short proof of its cited Lemma 29.53.1 (02JU); deeper algebraic
        dimension prerequisites were not reconstructed.
    - title: Stacks Project, dimensions of Cartier divisor components
      url: https://stacks.math.columbia.edu/tag/02RK
      locator: Lemma 42.16.1; live tag text inspected 2026-11-09
      statement: Components of an effective Cartier divisor on an integral scheme have
        dimension one less in the base dimension function.
      hypotheses: Situation 42.7.1, applied to Spec k with dimension function zero;
        finite-type integral schemes.
      reading_limits: Read the complete lemma and proof; the principal ideal dimension
        theorem remains an imported prerequisite.
dependency_level: 0
---

## Statement
Let $k$ be a field. A smooth $k$-scheme is regular, and every regular local ring is a domain. If $T$ is an integral finite-type $k$-scheme and $D\subset T$ is integral and closed, then $\dim T=\operatorname{trdeg}_k k(T)$ and $\operatorname{codim}_T D=\dim T-\dim D$. Every nonempty open of $T$ has the same dimension as $T$. Every irreducible component of an effective Cartier divisor on $T$ has dimension $\dim T-1$.

If $p:P\to Q$ is a proper dominant morphism of integral finite-type $k$-schemes, then $\dim P=\dim Q+\operatorname{trdeg}_{k(Q)}k(P)$. None of these assertions requires separatedness over $k$.

## External input
Import the stated regularity, domain and dimension results from the specified Stacks lemmas. The affine dimension and local codimension formulas apply on affine neighbourhoods of the relevant generic points; all nonempty affine charts of an integral scheme have the same function field. Their formulas therefore retain their scope on nonseparated schemes. The field base satisfies Situation 42.7.1. The application uses only finite-type schemes. The cited source statements and indicated proofs were read; their deeper prerequisites are accepted external inputs, not reconstructed local proofs. The version is the live tag text retrieved on 2026-11-09; no pinned repository commit is asserted.

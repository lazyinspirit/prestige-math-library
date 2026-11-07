---
id: def-etale-brauer-set
kind: definition
title: "Étale–Brauer set of adelic points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-global-field
  - def-adelic-points-of-variety-over-global-field
  - def-twist-of-torsor-by-field-torsor-class
  - def-brauer-manin-set
  - def-nonabelian-fppf-h1-as-torsors
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
  - def-group-scheme-over-a-field
  - def-finite-morphism-schemes
  - def-etale-morphism-schemes
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-smooth-morphism-schemes
  - def-affine-morphism-schemes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.5.2"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Definition of the étale–Brauer set as an intersection over finite étale torsors and their twists."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§2.2–2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Descent torsors and Brauer–Manin subsets."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice
(AC$_\omega$), as in the global adelic and Brauer–Manin conventions. Let $K$ be
a global field and let $X$ be a separated finite-type
$K$-scheme. For each finite étale $K$-group scheme $G$, each right
$G$-torsor $f:Z\to X$, and each class $\tau\in H^1(K,G)$, let
$f^\tau:Z^\tau\to X$ be its twist. The **étale–Brauer set** is
$$X(\mathbb A_K)^{\mathrm{et},\mathrm{Br}}:=
\bigcap_{G,f}\ \bigcup_{\tau\in H^1(K,G)}
f^\tau\bigl(Z^\tau(\mathbb A_K)^{\operatorname{Br}}\bigr),$$
where the intersection ranges over isomorphism classes of such $G$ and $f$,
and the Brauer–Manin set
of every twist is formed from its cohomological Brauer group with the same
global-field convention. A nonempty étale–Brauer set is not asserted to
contain a rational point.

## Definition references

[[def-global-field|Global field]]

[[def-adelic-points-of-variety-over-global-field|Adelic points]]

[[def-descent-set-and-selmer-set|Torsor twists and descent sets]]

[[def-twist-of-torsor-by-field-torsor-class|Twists by torsor classes]]

[[def-brauer-manin-set|Brauer–Manin sets]]

[[def-nonabelian-fppf-h1-as-torsors|Nonabelian torsor classes]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-group-scheme-over-a-field|Group schemes over a field]]

[[def-finite-morphism-schemes|Finite morphisms]]

[[def-etale-morphism-schemes|Étale morphisms]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[[def-smooth-morphism-schemes|Smooth morphisms]]

[[def-affine-morphism-schemes|Affine morphisms]]

[Poonen, §8.5.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.2–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, a global field $K$, a separated
finite-type $K$-scheme $X$, and its adelic points.

[A1] AC and AC$_\omega$ are required by the current global adelic
restricted-product convention; DC is used by the Brauer–Manin convention.
[[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F1] A torsor class in $H^1(K,G)$ gives a twist $Z^\tau\to X$, and changing
the class representative gives an isomorphic twisted torsor.
[[def-twist-of-torsor-by-field-torsor-class]]
[[def-nonabelian-fppf-h1-as-torsors]]

[F2] Each twisted variety has a Brauer–Manin subset defined by local
cohomological evaluation and normalized invariant sums.
[[def-brauer-manin-set]]

[F3] A finite étale morphism is smooth and affine; thus each $G$ in this
intersection belongs to the smooth affine algebraic groups used by the
descent-set convention. [[def-finite-morphism-schemes]]
[[def-etale-morphism-schemes]] [[def-smooth-morphism-schemes]]
[[def-affine-morphism-schemes]]

## Proof

**Proof technique:** form the union of Brauer–Manin images for each torsor,
then intersect those subsets over all finite étale torsors.

**Given:** The data above.

1.1 By [A1, F1], for each pair $(G,f)$ and each torsor class $\tau$ the twisted
map $f^\tau$ is defined up to isomorphism. Its map on adelic points therefore
has an unambiguous image subset of $X(\mathbb A_K)$. [A1, F1, given]

1.2 By [A1, F2], the subset $Z^\tau(\mathbb A_K)^{\operatorname{Br}}$ is defined
for each twist. Taking its image under $f^\tau$, then the union over all
$\tau$, and then the intersection over all finite étale torsors produces the
displayed subset. The Definition makes no assertion that it is nonempty or
that it contains a $K$-point. [A1, F1, F2, F3, step 1.1, given] ∎

---
id: def-twist-of-torsor-by-field-torsor-class
kind: definition
title: "Twist of a torsor by a field torsor class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-nonabelian-fppf-h1-as-torsors
  - def-group-scheme-over-a-field
  - def-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
  - def-affine-morphism-schemes
  - lem-nonaffine-effective-affine-algebra-descent
  - lem-nonaffine-affine-and-finite-morphism-fppf-descent
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§6.5.6.1–6.5.6.4 and Example 6.5.12"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Inner twists, inverse torsors, contracted products, and the twisted-torsor construction."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Full §§2.2–2.3 on torsors, descent, and the Brauer group; the contracted-product formula itself is sourced to Poonen §§6.5.6.1–6.5.6.4."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC). Let $K$ be a field, let $G$ be a finite-type affine group scheme over $K$,
and let $T\to\operatorname{Spec}K$ be a right $G$-torsor representing
$\tau\in H^1(K,G)$. The **inner form** $G^\tau$ is the group scheme of
$G$-equivariant automorphisms of $T$. The commuting left $G^\tau$-action and
right $G$-action make $T$ a $G^\tau$-$G$ bitorsor; write $T^{-1}$ for the
same scheme with these actions reversed. Let $X$ be a finite-type
$K$-scheme and let $Z\to X$ be a represented finite-type right
$G_X$-torsor. Its **twist by $\tau$** is the contracted product
$$Z^\tau:=Z\times^{G_X}T_X^{-1}\longrightarrow X,$$
where $T_X^{-1}=T^{-1}\times_KX$ and the contracted product is the fppf
sheaf quotient of $Z\times_XT_X^{-1}$ by the diagonal $G_X$-action. Its
right structure group is $G^\tau_X$, and the projection defines
$f^\tau:Z^\tau\to X$.

## Definition references

[[def-nonabelian-fppf-h1-as-torsors|Torsor classes in nonabelian $H^1$]]

[[def-group-scheme-over-a-field|Group schemes over a field]]

[[def-scheme-over-base|Schemes over a base]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-affine-morphism-schemes|Affine morphisms]]

[[lem-nonaffine-effective-affine-algebra-descent|Effective descent for affine schemes]]

[[lem-nonaffine-affine-and-finite-morphism-fppf-descent|Affineness descends under fppf covers]]

[[def-axiom-of-choice|Axiom of Choice]]

[Poonen, §§6.5.6.1–6.5.6.4 and Example 6.5.12](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.2–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** The field $K$, an affine finite-type group scheme $G/K$, the
right $G$-torsor $T$ representing $\tau$, a finite-type $K$-scheme $X$, and
a represented finite-type right $G_X$-torsor $Z\to X$, with AC.

[A1] AC is inherited by the available affine-descent construction.
[[def-axiom-of-choice]]

[F1] A class in $H^1(K,G)$ is represented by an isomorphism class of right
$G$-torsors. [[def-nonabelian-fppf-h1-as-torsors]]

[F2] A faithfully flat descent datum on affine algebras is effective, and
the descended algebra recovers the original algebra after base change.
[[lem-nonaffine-effective-affine-algebra-descent]]

[F3] Affineness of a morphism descends under the stated faithfully flat,
quasi-compact, locally finite-presentation cover of noetherian finite-type
schemes. [[lem-nonaffine-affine-and-finite-morphism-fppf-descent]]

[F4] A morphism is affine when its inverse image over every affine target
open is affine. [[def-affine-morphism-schemes]]

[F5] The finite-type hypotheses make $X$ and $Z$ Noetherian, as required by
the affineness-descent supplier. [[def-scheme-over-base]]
[[def-locally-finite-type-and-finite-type-morphism]]

## Proof

**Proof technique:** trivialize $T$ fppf-locally, identify the contracted
product with $Z$, and descend the resulting affine torsor structure.

**Given:** AC and the data above.

1.1 On an fppf cover trivializing $T$, choose a section $t_0$. The torsor
action identifies $T$ with $G$ on this cover. Conjugation by the transition
functions of $T$ is the descent datum on $G$ defining $G^\tau$; the same
transition functions, acting on the right and left, give the bitorsor $T$
and its inverse $T^{-1}$. Thus locally $G^\tau\cong G$ and
$T^{-1}\cong G$ with its regular left action. [F1, given]

1.2 On this cover, the quotient defining $Z^\tau$ is
$Z\times^G G\cong Z$, by $[z,g]\mapsto zg$. This map is invariant under
the diagonal action and has inverse $z\mapsto[z,1]$. Consequently the
quotient is locally represented by a scheme and is a right $G^\tau_X$-torsor
there. [F1, step 1.1, construct]

2.1 The torsor $Z\to X$ is fppf-locally isomorphic to $G_X$, hence affine
locally on the target and therefore affine by [F3]. Its local contracted
products are affine over $X$. Their overlap
identifications are the descent datum from $T$. On each affine open of $X$,
[F2] descends the coordinate algebras effectively and glues their
restrictions. The descended scheme represents the fppf quotient, and the
locally defined group action and torsor isomorphism descend with it. Hence
$Z^\tau\to X$ is a represented right $G^\tau_X$-torsor as asserted.
[A1, F2, F3, F4, step 1.2] ∎

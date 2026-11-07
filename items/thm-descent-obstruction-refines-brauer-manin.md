---
id: thm-descent-obstruction-refines-brauer-manin
kind: theorem
title: "Descent obstruction refines the Brauer–Manin obstruction under stated hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-global-field
  - def-descent-set-and-selmer-set
  - lem-torsor-twist-fiber-identifies-global-class
  - def-brauer-manin-set
  - def-cohomological-brauer-group-of-a-variety
  - def-azumaya-algebra-on-a-variety
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-global-function-field-brauer-hasse-sequence
  - thm-gabber-cohomological-brauer-group-equals-azumaya-for-regular-quasiprojective-schemes
  - thm-pgl-torsors-classify-azumaya-algebras
  - thm-cohomological-brauer-classes-spread-out-over-finite-set-of-places
  - lem-henselian-finite-residue-cohomological-brauer-vanishes
  - thm-number-field-brauer-classes-have-finite-local-support
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-quasi-projective-morphism
  - def-group-scheme-over-a-field
  - def-smooth-morphism-schemes
  - def-affine-morphism-schemes
  - def-projective-linear-group-scheme
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§8.5.1–8.5.3, Proposition 8.5.3"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Descent set is contained in the PGL descent set, which equals the Brauer–Manin set for a regular quasi-projective variety."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Torsor evaluations and the descent/Brauer comparison."
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice (AC$_\omega$). Let $K$ be a global field
and let $X$ be a regular quasi-projective $K$-variety, meaning that its local
rings are regular and its structure morphism factors through a quasi-compact
immersion into some finite-dimensional projective space over $K$. Then the descent set is
contained in the Brauer–Manin set:
$$X(\mathbb A_K)^{\mathrm{desc}} \subseteq X(\mathbb A_K)^{\operatorname{Br}}.$$
Here the descent set intersects the local constraints from every torsor under
a smooth affine algebraic $K$-group, and the Brauer–Manin set uses the full
cohomological Brauer group of $X$.

## Statement references

[[def-global-field|Global field]]

[[def-descent-set-and-selmer-set|Descent set]]

[[lem-torsor-twist-fiber-identifies-global-class|Twisted-fiber evaluation criterion]]

[[def-brauer-manin-set|Brauer–Manin set]]

[[def-azumaya-algebra-on-a-variety|Azumaya algebra]]

[[def-embedding-dimension-and-regular-local-ring|Regular local rings]]

[[def-quasi-projective-morphism|Quasi-projective morphisms]]

[[thm-gabber-cohomological-brauer-group-equals-azumaya-for-regular-quasiprojective-schemes|Required Azumaya/cohomological comparison; not currently authored]]

[[thm-pgl-torsors-classify-azumaya-algebras|Required projective-linear torsor classification; not currently authored]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[Poonen, §§8.5.1–8.5.3](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, a global field $K$, a regular quasi-projective
$K$-variety $X$, and an adelic point in the descent set.

[A1] AC and DC are inherited by the global-field and Brauer invariant
conventions; AC$_\omega$ is required by the adelic restricted-product
convention. [[def-axiom-of-choice]] [[def-dependent-choice]]
[[def-countable-choice]]

[F1] The descent set imposes the torsor lifting condition for every smooth
affine algebraic group. [[def-descent-set-and-selmer-set]]

[F2] A group scheme of finite type with smooth and affine structure map is
within the class of groups in the descent-set definition.
[[def-group-scheme-over-a-field]] [[def-smooth-morphism-schemes]]
[[def-affine-morphism-schemes]]

[F3] For a torsor $Z\to X$ and a class $\tau$ represented by $T$, a point
$P\in X(K)$ lifts to $Z^\tau(K)$ exactly when the fiber torsor $Z_P$
represents $\tau$. [[lem-torsor-twist-fiber-identifies-global-class]]

[L1] The projective linear group scheme $\operatorname{PGL}_n$ is smooth,
affine and of finite presentation over the base field. [[def-projective-linear-group-scheme]]

[F4] A degree-$n$ Azumaya algebra gives a $\operatorname{PGL}_n$-torsor of
local trivializations, and its torsor class maps to the Brauer class under
pullback by the recorded PGL classification.
[[thm-pgl-torsors-classify-azumaya-algebras]]

[F5] Every cohomological Brauer class on a regular quasi-projective variety
is represented by an Azumaya algebra by Gabber's theorem. The exact
comparison theorem is not currently authored.
[[thm-gabber-cohomological-brauer-group-equals-azumaya-for-regular-quasiprojective-schemes]]

[F6] The recorded number-field and function-field Brauer–Hasse sequences
give finite local support and zero sum of normalized local invariants for
every global Brauer class.
[[thm-global-brauer-hasse-noether-exact-sequence-number-field]]
[[thm-global-function-field-brauer-hasse-sequence]]

[L2] Every cohomological Brauer class spreads to a model over a ring of
$S$-integers, including characteristic-primary classes over function fields.
The Brauer group of every finite-residue Henselian valuation ring vanishes.
[[thm-cohomological-brauer-classes-spread-out-over-finite-set-of-places]]
[[lem-henselian-finite-residue-cohomological-brauer-vanishes]]

## Proof

**Proof technique:** restrict to projective-linear torsors and identify their
evaluation obstruction with the Brauer–Manin pairing.

**Given:** The data above.

1.1 Let $x\in X(\mathbb A_K)^{\mathrm{desc}}$. By [L1], each
$\operatorname{PGL}_n$ is smooth affine, so the defining descent intersection
imposes the lifting condition for every $\operatorname{PGL}_n$-torsor. By
[F3], membership in a twisted image identifies each local fiber class with
the localization of the global twisting class. The diagram below records
naturality of this evaluation and its Brauer class; the proof depends on the
cohomological identifications in [F4] and [F5], not on the diagram.
[F1, F2, F3, F4, F5, L1, given]



1.2 For every $\alpha\in\operatorname{Br}(X)$, [F5] supplies an Azumaya
representative, and [F4] supplies a corresponding torsor under some
$\operatorname{PGL}_n$. The descent condition on $x$ then says its local
torsor classes come from one global torsor class; [F4] maps that class to a
global $\beta\in\operatorname{Br}(K)$ whose localizations are
$\alpha(x_v)$. [F3, F4, F5, step 1.1]

2.1 By [F6], the localizations of $\beta$ have finite support and their
invariants sum to zero; [L2] is also needed to ensure the standard
finite-support convention for arbitrary Brauer evaluations. Hence $x$ lies
in the Brauer–Manin set. However, [F5] remains a missing supplier. This source theorem is therefore escalated with the original
hypotheses and conclusion intact. [A1, L1, F4, F5, F6, L2, step 1.2] ∎

## Torsor-evaluation diagram

The horizontal maps associate a Brauer class to a projective-linear torsor; the vertical maps pull back along a local point. Naturality makes the square commute, conditional on the missing identifications [F4] and [F5].

\begin{center}
\begin{tikzcd}
H^1(X,\operatorname{PGL}_n) \arrow[r] \arrow[d,"x_v^*"'] & \operatorname{Br}(X) \arrow[d,"x_v^*"] \\
H^1(K_v,\operatorname{PGL}_n) \arrow[r] & \operatorname{Br}(K_v)
\end{tikzcd}
\end{center}

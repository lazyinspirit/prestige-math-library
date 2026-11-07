---
id: def-brauer-manin-set
kind: definition
title: "Brauer–Manin set of adelic points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-global-field
  - def-adelic-points-of-variety-over-global-field
  - def-cohomological-brauer-group-of-a-variety
  - def-local-invariant-map-of-the-brauer-group
  - thm-archimedean-brauer-groups-and-invariant-maps
  - def-brauer-group-as-galois-cohomology
  - thm-classic-brauer-group-is-h2-galois-cohomology
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.2"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.2.1 Proposition 8.2.1 proves finite support of evaluations; Definition 8.2.5 defines the Brauer set."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§2.1–2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Evaluation, local invariants, and Brauer–Manin obstruction."
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Complete global-field Brauer sequence proof for a curve over a finite field and the general quasi-finite constant-field sequence."
    - title: "Werner Hürlimann, A short proof of the Albert–Brauer–Hasse–Noether theorem"
      url: "https://www.numdam.org/item/AST_1992__209__215_0.pdf"
      locator: "Complete number-field Brauer–Hasse–Noether proof via class formations and Tate–Nakayama input."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice (AC$_\omega$). Let $K$ be a global field,
let $X$ be a separated finite-type $K$-scheme, and let
$x=(x_v)_v\in X(\mathbb A_K)$. For $\alpha\in\operatorname{Br}(X)$, its
evaluation at $x_v:\operatorname{Spec}K_v\to X$ is the pullback
$$\alpha(x_v):=x_v^*\alpha\in\operatorname{Br}(K_v),$$
using the canonical field comparison from cohomological to classical Brauer
classes. The normalized local invariant is
$\operatorname{inv}_v(\alpha(x_v))\in\mathbb Q/\mathbb Z$. The
**Brauer–Manin set** is
$$X(\mathbb A_K)^{\operatorname{Br}}:=\left\{x\in X(\mathbb A_K):
\begin{array}{l}
\text{for every }\alpha\in\operatorname{Br}(X),\text{ the values }\operatorname{inv}_v(\alpha(x_v))\\
\text{are nonzero at only finitely many places and }\displaystyle\sum_v
\operatorname{inv}_v(\alpha(x_v))=0\text{ in }\mathbb Q/\mathbb Z
\end{array}\right\}.$$
The finite-support clause makes each sum an ordinary finite sum. For a
finite-type variety over a global field, the usual Brauer–Manin pairing has
this finite-support property when a cohomological class spreads out over an
integral model and the Brauer group of the remaining valuation rings vanishes.
A **Brauer–Manin obstruction to the local-global
principle** occurs when $X(\mathbb A_K)\ne\varnothing$ but
$X(\mathbb A_K)^{\operatorname{Br}}=\varnothing$.

## Definition references

[[def-global-field|Global field]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-adelic-points-of-variety-over-global-field|Adelic points]]

[[def-cohomological-brauer-group-of-a-variety|Cohomological Brauer group]]

[[def-local-invariant-map-of-the-brauer-group|Local invariant maps]]

[[thm-archimedean-brauer-groups-and-invariant-maps|Archimedean invariant maps]]

[[def-brauer-group-as-galois-cohomology|Field Brauer group convention]]

[[thm-classic-brauer-group-is-h2-galois-cohomology|Field cohomology comparison]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field|Number-field global invariant sequence]]

[[thm-global-function-field-brauer-hasse-sequence|Function-field global invariant sequence]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[Poonen, §8.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.1–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

[Milne, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Hürlimann, full article](https://www.numdam.org/item/AST_1992__209__215_0.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, a global field $K$, a separated finite-type
$K$-scheme $X$, an adelic point $x=(x_v)_v$, and a cohomological Brauer
class $\alpha$.

[A1] AC and DC are the hypotheses of the local invariant and current field
cohomology-comparison conventions; AC$_\omega$ is required by the
adelic restricted-product convention. [[def-axiom-of-choice]]
[[def-dependent-choice]] [[def-countable-choice]]

[F1] The cohomological Brauer group is the torsion subgroup of
$H^2_{\mathrm{et}}(X,\mathbb G_m)$. [[def-cohomological-brauer-group-of-a-variety]]

[F2] Pullback along a point $x_v$ sends the class to its local cohomological
Brauer class; under [A1]'s AC/DC assumptions the current comparison proof
identifies it with the classical field Brauer group. The broader unqualified
supplier Statement remains held.
[[thm-classic-brauer-group-is-h2-galois-cohomology]]

[F3] Nonarchimedean local classes have the normalized invariant map to
$\mathbb Q/\mathbb Z$; real and complex places use the archimedean maps.
[[def-local-invariant-map-of-the-brauer-group]]
[[thm-archimedean-brauer-groups-and-invariant-maps]]

[L1] For arbitrary $x\in X(\mathbb A_K)$ and $\alpha\in\operatorname{Br}(X)$,
finite support of $\alpha(x_v)$ requires spreading out $X$ and $\alpha$ and
the vanishing of the cohomological Brauer group of $\mathcal O_v$. No current
proved carriers for these inputs were found. The exact proposed suppliers are
`thm-cohomological-brauer-classes-spread-out-over-finite-set-of-places` and
`thm-cohomological-brauer-group-of-henselian-dvr-is-zero`.

## Proof

**Proof technique:** define local evaluation by functorial pullback, then
intersect its normalized invariant-sum zero loci.

**Given:** The data above.

1.1 Pullback of cohomology along $x_v$ is defined because it is a morphism
$\operatorname{Spec}K_v\to X$. By [F2], its value is interpreted in the
classical local Brauer group; [F3] then assigns an element of
$\mathbb Q/\mathbb Z$. [A1, F1, F2, F3, given]

1.2 The condition in the Definition explicitly requires finite support, so
the sum is independent of the order of the finite set of nonzero terms. Taking
the intersection of these zero-sum conditions over all $\alpha$ defines a
subset of $X(\mathbb A_K)$. [step 1.1, given, algebra]

2.1 [L1] is the separate proof obligation that every adelic evaluation has
finite support and that the explicit finite-support definition agrees with
the standard unrestricted formulation. The required cohomological suppliers
are not authored in the current library, so this identification remains open;
the Definition itself is well-defined as written. [L1, step 1.2] ∎

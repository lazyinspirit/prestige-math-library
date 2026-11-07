---
id: def-unramified-galois-representation-at-a-place
title: "Unramified Galois representation at a place"
kind: definition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - def-continuous-l-adic-galois-representation
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §2.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, §8.14"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC and Countable Choice for the global-place completion and local
absolute-group conventions. Let $F$ be a global field, let $v$ be a finite
place with finite residue field, and let $\rho:G_F\to
\operatorname{GL}_{\mathbb Q_\ell}(V)$ be a continuous finite-dimensional
$\ell$-adic Galois representation. Choose an extension $\bar v$ of $v$ to a
separable closure $F^{\mathrm{sep}}$. Its **decomposition subgroup** is
$$D_{\bar v}=\{\sigma\in G_F:\sigma(\bar v)=\bar v\},$$
identified through the place completion with the absolute Galois group of
$F_v$. Its **inertia subgroup** $I_{\bar v}$ is the kernel of the action on
the separable closure of the residue field. The representation is
**unramified at $v$** when $\rho(I_{\bar v})=\{1\}$. Replacing $\bar v$ by a
Galois-conjugate extension conjugates $I_{\bar v}$, so this condition is
independent of that choice.

## Definition references

[[def-continuous-l-adic-galois-representation]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §2.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, §8.14](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice, a global field $F$, a finite place $v$,
an extension $\bar v$ to $F^{\mathrm{sep}}$, and a continuous representation
$\rho$ of $G_F$.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the
planned global absolute-Galois-group construction.

[A2] [[def-countable-choice]]: Countable Choice is selected choice from a
countable family of nonempty sets; the local-place completion route declares
this requirement.

[F1] [[def-continuous-l-adic-galois-representation]]: $\rho$ is a continuous
homomorphism from the absolute Galois group of $F$ to a finite-dimensional
$\ell$-adic automorphism group.

[F2] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: the
completion at a finite place is a complete discretely valued field with finite
residue field. Its current Remark says AC is used for place classification and
Countable Choice for the metric completion, without a separate DC use in that
definition.

[F3] [[def-absolute-galois-group-of-a-local-field]]: the local absolute Galois
group is the inverse limit of the finite Galois groups of a separable closure,
with inverse-limit topology. The current item body is present and draft.

[F4] [[def-local-inertia-subgroup-of-absolute-galois-group]]: local inertia is
defined as the inverse limit of the finite local groups $G_0(E/F_v)$, which
act trivially on the residue field of $E$. The current item body is present
and draft.

[F12] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: under AC, the global decomposition group at every finite place is the local absolute Galois group; the identification preserves residue kernels, and all prolongations are conjugate with residue maps commuting with arithmetic Frobenius.

[F13] [[thm-local-absolute-galois-group-residue-exact-sequence]]: under AC the local residue action is surjective and has kernel absolute inertia.

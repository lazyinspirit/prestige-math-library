---
id: ex-global-flat-duality-on-a-finite-field-curve
kind: example
title: "A finite-flat duality pairing on a proper curve over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-global-flat-duality-finite-constant-field-curves
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-pontryagin-dual-and-compact-open-topology
  - def-finite-field-and-its-order
justified_by: []
proof_strategy: direct
axiom_use: "The curve, coefficient, and pairing computations add no axiom beyond the stated global duality supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §8, Theorem 8.2"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §4"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Example

Let $C=\mathbb P^1_{\mathbb F_q}$ and let $G=\mu_p$ over $C$, where
$q=p^f$; here $\mu_p$ is the group scheme
$\operatorname{Spec}(\mathbb F_q[T]/(T^p-1))$ with multiplicative group law.
Its Cartier dual is the constant group scheme
$\underline{\mathbb Z/p\mathbb Z}$. The evaluation pairing gives, for every
integer $r$, the finite-flat duality pairing
$$H^r_{\mathrm{fppf}}(C,\underline{\mathbb Z/p\mathbb Z})\times
H^{3-r}_{\mathrm{fppf}}(C,\mu_p)\longrightarrow\mathbb Q/\mathbb Z,$$
which identifies either group with the Pontryagin dual of the other under the
global curve theorem.

## Example references

[[thm-global-flat-duality-finite-constant-field-curves]]

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-pontryagin-dual-and-compact-open-topology]]

[[def-finite-field-and-its-order]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §8](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §4](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of characteristic $p$ and the proper
curve $C=\mathbb P^1_{\mathbb F_q}$.

[F1] [[def-finite-flat-group-scheme-and-cartier-dual]]: $\mu_p$ is finite
flat and its Cartier dual is $\underline{\mathbb Z/p\mathbb Z}$.

[F2] [[def-pontryagin-dual-and-compact-open-topology]] defines the continuous
character group used in the perfect pairing.

[F3] [[def-finite-field-and-its-order]] defines the finite base field.

[F4] [[thm-global-flat-duality-finite-constant-field-curves]]: a finite flat
group scheme and its Cartier dual on a smooth proper curve over a finite field
have perfect compact-support pairings in complementary degrees.

## Proof

**Proof technique:** specialize the global curve duality theorem.

**Given:** [F1]–[F4] and $C=\mathbb P^1_{\mathbb F_q}$.

1.1 The projective line is smooth, proper, and geometrically integral over
$\mathbb F_q$, and its full constant field is $\mathbb F_q$. The group scheme
$\mu_p$ is finite flat on $C$ and has dual
$\underline{\mathbb Z/p\mathbb Z}$ by [F1]. [F1, algebra]

1.2 Apply [F4] with $U=C$ and $G=\mu_p$. Since $C$ is proper, the compact
support groups in the pairing are the ordinary fppf cohomology groups. The
result is exactly the displayed complementary-degree Pontryagin duality.
[F2, F3, F4, step 1.1, algebra] ∎

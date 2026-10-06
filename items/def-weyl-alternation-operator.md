---
id: def-weyl-alternation-operator
kind: definition
title: The Weyl alternation operator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-completed-formal-character-ring-for-downward-cones, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-root-reflections-and-the-weyl-group-action, prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system, lem-finite-weyl-positive-roots-and-simple-reflections, lem-weyl-length-parity-is-multiplicative]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed p. 139 (the sign character w ↦ det(w|_h) = (−1)^{ℓ(w)} and anti-invariance of the Weyl denominator)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93 (the completion X and the W-action (wf)(λ) = f(w^{-1}λ))"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--2 (the alternation A_e(ν) = Σ_σ det(σ)e^{σν})"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $W$ be the Weyl group of the root system of $\mathfrak g$, acting on
$\mathfrak h^*$ by the root reflections of
[[def-root-reflections-and-the-weyl-group-action]]; by
[[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]] and
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]], $W$ is a
finite group and it permutes the roots, hence preserves the root lattice $Q$
and the weight lattice $P$
([[lem-finite-weyl-positive-roots-and-simple-reflections]]).

**Action on finite support.** Every $w\in W$ maps the finite subsets of
$\mathfrak h^*$ to finite subsets, so the assignment $w\cdot e^\mu:=e^{w\mu}$
extends uniquely to a $\mathbb Z$-algebra automorphism $f\mapsto w\cdot f$ of
the group ring of finite-support elements of the completed character ring
$\mathcal R$ ([[def-completed-formal-character-ring-for-downward-cones]]),
with inverse $w^{-1}\cdot(-)$; it restricts to a $\mathbb Z$-algebra
automorphism of $\mathbb Z[P]$, because $W$ preserves the weight lattice $P$.
**Caveat.** If $\Phi\ne\varnothing$, this formula does not define an
action on all of $\mathcal R$. For a simple root $\alpha_i$, the series
$\sum_{k\ge0}e^{-k\alpha_i}$ lies in $\mathcal R$, whereas its image under
$s_i$ has support $\{k\alpha_i:k\ge0\}$, outside every finite union of
downward cones: in each cone the $i$th simple-root coordinate is bounded
above. If $\Phi=\varnothing$, then $Q_+=\{0\}$, every cone is a point,
$\mathcal R$ has only finite-support elements and $W=\{1\}$ acts trivially.
Only finite-support elements are acted on below.

**The alternation operator.** For $\nu\in\mathfrak h^*$ define the **Weyl
alternation operator** by
$$A(\nu):=\sum_{w\in W}(-1)^{\ell(w)}e^{w\nu},$$
the sum being finite because $W$ is finite; here $\ell$ is the length function
of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]] turned into
the sign homomorphism of [[lem-weyl-length-parity-is-multiplicative]]. By
[[lem-weyl-length-parity-is-multiplicative]] the coefficients
$(-1)^{\ell(w)}$ define the determinant sign of $w$ acting on the real span
$E=\operatorname{span}_{\mathbb R}\Phi$ of the roots. Since the sum is finite,
$A(\nu)$ is a finite-support element of $\mathcal R$ for every $\nu$, and
when $\nu\in P$ it lies in $\mathbb Z[P]\subseteq\mathcal R$.

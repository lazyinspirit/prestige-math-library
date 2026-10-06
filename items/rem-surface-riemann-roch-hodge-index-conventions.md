---
id: rem-surface-riemann-roch-hodge-index-conventions
kind: remark
title: "Conventions and hypothesis bookkeeping for surface Riemann-Roch and Hodge index"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - cor-negative-definiteness-of-primitive-numerical-divisors
  - def-axiom-of-choice
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-numerical-equivalence-and-neron-severi-space
  - def-smooth-morphism-to-field-classical
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - thm-riemann-roch-for-smooth-projective-surfaces
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Remark

Assume the Axiom of Choice where the cited cohomology, Euler-characteristic and
duality suppliers do ([[def-axiom-of-choice]]). The following conventions
govern the items of this page.

**Base field and smoothness.** The theorems
[[thm-riemann-roch-for-smooth-projective-surfaces]],
[[thm-hodge-index-theorem-for-smooth-projective-surfaces]] and
[[cor-negative-definiteness-of-primitive-numerical-divisors]] are stated for an
integral smooth projective surface over an arbitrary field $k$, following
Vakil's Theorem 20.2.13 and Exercise 20.2.B. Smoothness over $k$
([[def-smooth-morphism-to-field-classical]]) is used through the dualizing line
bundle $\omega_X=\bigwedge^2\Omega^1_{X/k}$ and Serre duality
([[def-smooth-projective-dualizing-line-bundle-and-trace]],
[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]); over an
imperfect field it is strictly stronger than regularity, and no claim is made
here for regular non-smooth surfaces. A smooth surface over a field is regular,
so all intersection-theoretic items of
[[def-divisor-intersection-number-on-smooth-projective-surface]] apply.

**Numerical versus linear equivalence.** Numerical equivalence is defined by
vanishing of all intersection numbers
([[def-numerical-equivalence-and-neron-severi-space]]); it is coarser than
linear equivalence, and the equality case in the Hodge index theorem is
numerical triviality, not linear triviality. The real Neron-Severi space
$\operatorname{N}^1_{\mathbb R}(X)$ is finite-dimensional by the
Neron-Severi theorem, which is not proved or used on this page. Accordingly,
the signature statement in
[[cor-negative-definiteness-of-primitive-numerical-divisors]] is conditional on
finiteness of $\rho(X)$ while its negative-definiteness statement is
unconditional.

**Positive-square hypothesis, and tools not used.** The Hodge index theorem
assumes $H\cdot H>0$, not ampleness of $H$; this generality is used in the
companion example on the blowup, where the class $H=\pi^*\mathcal O(1)$ of the
blowup $\pi:X'\to\mathbb P^2$ of a rational point has $H\cdot H=1>0$ yet is
not ample, since $H\cdot E=0$ for the exceptional curve $E$. Positivity of
ample divisors against nonzero effective divisors is supplied by
[[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]] and
rests on the Hilbert-polynomial leading coefficient, not on any resolution or
Bertini input. No Bertini theorem, no resolution of singularities and no
Nakai-Moishezon criterion is invoked anywhere on this page: surface
Riemann-Roch and both Hodge index statements are derived here from the cited
duality, intersection and cohomology suppliers alone.

---
id: def-fourier-transform-on-an-lca-group
kind: definition
title: The Fourier transform on an LCA group
dependency_level: 0
deps:
- def-pontryagin-dual-and-compact-open-topology
- def-left-haar-integral-and-left-haar-measure
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- lem-character-evaluation-pairing-is-jointly-continuous
- thm-composition-with-borel-functions-preserves-measurability
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-complex-conjugation-and-modulus-laws
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
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: draft
origin: pipeline
---

## Definition

Let $G$ be a locally compact Hausdorff abelian group, written additively, let
$m_G$ be a fixed left Haar measure on $G$
([[def-left-haar-integral-and-left-haar-measure]]), and let $\widehat G$ be
the Pontryagin dual with the compact-open topology
([[def-pontryagin-dual-and-compact-open-topology]]).

For $f\in L^1(G,m_G)$ ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]) the
**Fourier transform** of $f$ is the function $\widehat f:\widehat G\to\mathbb C$
defined at $\gamma\in\widehat G$ by
$$\widehat f(\gamma):=\int_G f(x)\,\overline{\gamma(x)}\,dm_G(x).$$

**Well-definedness.** The evaluation pairing $(\gamma,x)\mapsto\gamma(x)$ is
jointly continuous ([[lem-character-evaluation-pairing-is-jointly-continuous]])
and every character takes values in the unit circle
$\mathbb T=\{z\in\mathbb C:|z|=1\}$
([[lem-unit-circle-is-a-compact-metrizable-topological-group]]), so for fixed
$\gamma$ the function $x\mapsto\overline{\gamma(x)}$ is Borel measurable with
modulus $1$ ([[thm-composition-with-borel-functions-preserves-measurability]],
[[lem-complex-conjugation-and-modulus-laws]]). Hence the integrand
$x\mapsto f(x)\overline{\gamma(x)}$ is Borel measurable and dominated by
$|f|$, so the integral converges absolutely and
$$|\widehat f(\gamma)|\le\int_G|f|\,dm_G=\|f\|_1\qquad\text{for every }\gamma.$$
Replacing $f$ by an $m_G$-a.e. equal representative changes the integrand only
on an $m_G$-null set, so no value $\widehat f(\gamma)$ changes: the transform
is well defined on the quotient $L^1(G,m_G)$ and not merely on representatives,
and $f\mapsto\widehat f$ is a linear map $L^1(G,m_G)\to\ell^\infty(\widehat G)$
with $\|\widehat f\|_\infty\le\|f\|_1$.

**Convention.** This is the conjugate-phase convention. On $G=\mathbb R^n$ with
Lebesgue measure, where the characters are $\gamma_\xi(x)=e^{2\pi i x\cdot\xi}$,
it reads $\widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi i x\cdot\xi}\,dx$.
No dual Haar measure is used in the definition: the compatible scale on
$\widehat G$ is fixed only by the compatible dual Haar normalisation proved on
this page.

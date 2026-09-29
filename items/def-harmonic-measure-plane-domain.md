---
id: def-harmonic-measure-plane-domain
kind: definition
title: "Harmonic measure on a bounded regular plane domain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-barrier-and-regular-boundary-point
  - def-borel-sigma-algebra
  - def-complex-domain
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-radon-measure-on-an-lch-space
  - thm-heine-borel-rn
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed pp. 169-171: harmonic measure from the Perron solution operator"
    - title: "Boris Khoruzhenko, Potential Theory LTCC lecture notes, Section 4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 36-39: definition of harmonic measure and the disc density"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain
([[def-complex-domain]]) every boundary point of which is regular in the sense
of [[def-barrier-and-regular-boundary-point]], and let $z\in\Omega$. The
Euclidean boundary $\partial\Omega$ is closed and, $\Omega$ being bounded, also
bounded, hence compact ([[thm-heine-borel-rn]]), and it carries the Borel
$\sigma$-algebra ([[def-borel-sigma-algebra]]).

For every real continuous function $\varphi:\partial\Omega\to\mathbb R$, let
$H_\varphi$ denote the regularized Perron envelope of the bounded plane
Dirichlet problem with boundary datum $\varphi$
([[def-perron-envelope-for-the-plane-dirichlet-problem]]).

A **harmonic measure for $\Omega$ at $z$** is a Radon Borel probability measure
$\omega_\Omega^z$ on $\partial\Omega$, in the sense of
[[def-radon-measure-on-an-lch-space]], such that

$$H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$$
for every real continuous $\varphi:\partial\Omega\to\mathbb R$.

The measure is written in the superscript slot $z$ because it is a measure
attached to the point $z$; for a fixed Borel set $E\subseteq\partial\Omega$ the
assignment $z\mapsto\omega_\Omega^z(E)$ is a scalar function on $\Omega$, a
distinct object from the measure itself.

## Remarks

- **Existence and uniqueness are not part of this definition.** A harmonic
  measure for $\Omega$ at $z$ is a Radon probability measure satisfying the
  displayed identity for all continuous data. Existence and uniqueness are
  proved later on this page, for every bounded regular plane domain and every
  $z\in\Omega$; this item only fixes the object and its test identity.
- **No probabilistic interpretation is used.** This library defines no Brownian
  motion and no hitting distribution, and none is invoked: the defining
  property above is the totality of what "harmonic measure" means here.
- **The test identity is linear and normalized.** Taking $\varphi\equiv1$ in the
  defining identity and using that the constant function $1$ solves its own
  Dirichlet problem gives $\int1\,d\omega_\Omega^z=1$ for every candidate
  measure, which is why probability measures rather than arbitrary finite
  measures are used.

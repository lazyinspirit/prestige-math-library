---
id: def-poisson-modification-of-a-subharmonic-function
kind: definition
title: "Poisson modification on a compactly contained disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-conformal-invariance-of-plane-harmonicity]
justified_by: [thm-poisson-modification-preserves-subharmonicity-and-majorizes]
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Definition

Let $u$ be subharmonic on a complex domain $\Omega$, and let
$D=D(a,r)\Subset\Omega$ be an open disc. A **boundary approximation** for $u$ on
$\partial D$ is a decreasing sequence of continuous functions
$\phi_n:\partial D\to\mathbb R$ with $\phi_n\downarrow u|_{\partial D}$; such
sequences exist because the circle data are upper semicontinuous by
[[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]].

For each $n$, let $h_n$ be the harmonic function on $D$, continuous on
$\overline D$, with boundary values $\phi_n$, obtained by transporting the
unit-disc Poisson solution of
[[thm-poisson-integral-solves-the-disc-dirichlet-problem]] across the affine map
$z\mapsto (z-a)/r$ and using
[[thm-conformal-invariance-of-plane-harmonicity]].

The **Poisson modification** of $u$ on $D$ is the function $P_Du$ defined by
$$P_Du(z)=\begin{cases}\inf_n h_n(z),& z\in D,\\ u(z),& z\in\Omega\setminus D.\end{cases}$$

## Remarks

The next theorem proves that the inside function $\inf_n h_n$ is harmonic,
independent of the chosen boundary approximation, and no smaller than the
original subharmonic function on $D$.

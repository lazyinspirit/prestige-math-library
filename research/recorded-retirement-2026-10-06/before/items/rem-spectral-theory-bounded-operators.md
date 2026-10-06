---
id: rem-spectral-theory-bounded-operators
kind: remark
title: "Spectral theory of bounded operators and the spectral theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "spectra, spectral radius, spectral theorem"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Spectral theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Spectral_theory"
    - title: "Spectral theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Spectral_theorem"
    - title: "Spectral radius (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Spectral_radius"
    - title: "Continuous functional calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_functional_calculus"
pipeline_run: null
---

## Statement

Let $X$ be a nonzero complex Banach space and $T$ a bounded operator on $X$. The **spectrum**
$\sigma(T) = \{ \lambda \in \mathbb{C} : \lambda I - T \text{ is not invertible in } B(X) \}$ is a
nonempty compact subset of $\{ |\lambda| \le \lVert T \rVert \}$, and the spectral radius is given by
$$r(T) = \max \{ |\lambda| : \lambda \in \sigma(T) \} = \lim_{n \to \infty} \lVert T^n \rVert^{1/n}.$$

**Spectral theorem.** Let $T$ be a bounded normal operator on a complex Hilbert space $H$, so
$T^{*}T = TT^{*}$. Then there is a unique projection valued measure $E$ on the Borel subsets of
$\sigma(T)$, with values orthogonal projections on $H$, such that
$$T = \int_{\sigma(T)} \lambda \, dE(\lambda).$$
Equivalently, $T$ is unitarily equivalent to a multiplication operator $f \mapsto \varphi f$ on some
$L^2(\Omega, \mu)$ with $\varphi$ bounded measurable. In particular a bounded self-adjoint operator
has real spectrum and admits a continuous functional calculus $f \mapsto f(T)$ which is an isometric
$*$-homomorphism from $C(\sigma(T))$ into $B(H)$.

## Remarks

**Not proved in this library.** Recorded with a citation; the measure-theoretic form additionally
needs the measure and integration track.

**What would prove it.** Non-emptiness and compactness of the spectrum come from a Liouville
argument applied to the resolvent $\lambda \mapsto (\lambda I - T)^{-1}$, which is analytic off the
spectrum, together with the Neumann series for $\lVert \lambda \rVert > \lVert T \rVert$. The
spectral radius formula is Hadamard's formula for the radius of convergence of that series. The
spectral theorem itself is built from the continuous functional calculus, obtained from the
Stone-Weierstrass theorem on $\sigma(T)$ and the $C^{*}$ identity, followed by the Riesz-Markov
representation of the resulting positive functionals as measures.

**Why it matters here.** It is the infinite-dimensional replacement for diagonalisation, and the
statement that makes "operator" a geometric rather than a formal notion. Everything recorded in the
next two items is a refinement of it for special classes of operators.

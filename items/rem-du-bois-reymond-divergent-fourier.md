---
id: rem-du-bois-reymond-divergent-fourier
kind: remark
title: "du Bois-Reymond: a continuous function whose Fourier series diverges at a point"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Continuity does not imply pointwise convergence of the Fourier series"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Convergence of Fourier series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_of_Fourier_series"
    - title: "Fourier series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fourier_series"
pipeline_run: null
---

## Statement

There is a continuous $2\pi$-periodic function $f : \mathbb{R} \to \mathbb{R}$
whose Fourier series diverges at a point: writing

$$S_N f(x) = \sum_{|n| \le N} \hat{f}(n) e^{inx}, \qquad \hat{f}(n) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) e^{-int} \, dt,$$

there is $x_0$ with $\limsup_{N} |S_N f(x_0)| = +\infty$. du Bois-Reymond gave
the first such example in 1876. The set of points of divergence can be taken to
be any prescribed set of measure zero, and by Carleson's theorem it can be no
larger than that: the Fourier series of a continuous, indeed of any $L^2$,
function converges almost everywhere.

## Remarks

**Not proved in this library, for now.** Unlike most of this page, this result is
probably reachable here, and it is recorded rather than proved only because the
page that would carry it has not been written.

**What would prove it.** Two routes. The explicit one is du Bois-Reymond's
lacunary construction, a sum of blocks of conjugate Dirichlet kernels with
rapidly increasing frequencies, which is elementary but intricate. The soft one
is the uniform boundedness principle applied to the functionals
$f \mapsto S_N f(0)$ on $C(\mathbb{T})$, whose norms are the Lebesgue constants
$\|D_N\|_{L^1} \sim (4/\pi^2)\log N \to \infty$; the Baire category theorem then
gives a comeagre set of continuous functions whose Fourier series diverge at $0$.
The Baire category theorem for complete metric spaces is in scope in this
library, and uniform boundedness is flagged in the deferral list as borderline,
since its proof is Baire plus linearity. So the soft route becomes available as
soon as normed spaces and the Lebesgue constants exist.

**Which page it serves.** A Fourier series page in the analysis track, which is
not yet planned, and the approximation and compactness page, where the positive
results live: Fejer's theorem gives uniform convergence of the Cesaro means for
every continuous function, and Weierstrass approximation follows. The correct
reading of the pair is that summability, not convergence, is the right notion
for continuous functions.

**Contrast.** This is the continuous, pointwise, Baire-reachable failure. The
$L^1$ failure recorded in [[rem-kolmogorov-divergent-fourier]] is of a different
order: it is everywhere and it needs the Lebesgue theory even to state.

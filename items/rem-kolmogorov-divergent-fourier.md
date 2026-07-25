---
id: rem-kolmogorov-divergent-fourier
kind: remark
title: "Kolmogorov 1926: an $L^1$ function whose Fourier series diverges everywhere"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Integrability in L^1 gives no pointwise convergence anywhere"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Kolmogoroff, Une serie de Fourier-Lebesgue divergente presque partout, Fund. Math. 4 (1923) 324-328"
      url: "https://eudml.org/doc/213617"
    - title: "Convergence of Fourier series (Wikipedia); Kolmogorov, Une serie de Fourier-Lebesgue divergente partout, C. R. Acad. Sci. Paris 183 (1926) 1327-1329"
      url: "https://en.wikipedia.org/wiki/Convergence_of_Fourier_series"
pipeline_run: null
---

## Statement

There is $f \in L^{1}(\mathbb{T})$ whose Fourier series diverges at **every**
point: for every $x \in \mathbb{T}$,

$$\limsup_{N \to \infty} \big| S_N f(x) \big| = +\infty, \qquad S_N f(x) = \sum_{|n| \le N} \hat{f}(n) e^{inx}.$$

Kolmogorov proved almost everywhere divergence in 1923 and everywhere divergence
in 1926. The result is sharp in the scale of $L^p$ spaces: by Carleson's theorem
(1966) and Hunt's extension (1968), the Fourier series of a function in
$L^{p}(\mathbb{T})$ with $1 < p \le \infty$ converges almost everywhere, so
$p = 1$ is exactly where everywhere divergence becomes possible.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The construction is a lacunary sum of concentrated
kernels, and it is genuinely hard: the difficulty is in arranging the partial
sums to blow up at every point simultaneously, not merely on a large set. Beyond
the construction, the statement itself cannot even be made here, since it
quantifies over $L^{1}(\mathbb{T})$ and uses Fourier coefficients defined by a
Lebesgue integral ([[rem-lebesgue-measure-and-integral]]).

**Which page it serves.** The same future Fourier series page as
[[rem-du-bois-reymond-divergent-fourier]], and any future $L^p$ page. The two
results are the boundary markers of the subject: continuity does not give
pointwise convergence anywhere in particular, and $L^{1}$ membership does not
give it anywhere at all, while $L^p$ for $p > 1$ gives it almost everywhere.

**Attribution.** The 1923 paper in Fundamenta Mathematicae gives divergence
almost everywhere, and the 1926 note in the Comptes Rendus gives it everywhere.
Both are Kolmogorov's, and the everywhere result is the one recorded above; only
the 1923 paper has a freely readable scan, which is the link given.

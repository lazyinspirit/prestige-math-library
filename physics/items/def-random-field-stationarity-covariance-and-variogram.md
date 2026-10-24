---
id: def-random-field-stationarity-covariance-and-variogram
kind: definition
title: "Random fields, stationarity, covariance, and variograms"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-stochastic-process-and-finite-dimensional-distributions
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Evgeny Spodarev, Random Fields I: Lecture Notes (Draft, 2009)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf"
    - title: "Hermine Biermé, Introduction to random fields and scale invariance: Lecture I (2016)"
      url: "https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf"
---

## Definition

Let $T\subseteq\mathbb R^d$, $d\ge1$, have its relative Borel sigma-algebra, and
let $(\Omega,\mathcal F,\mathbb P)$ be one probability space. A **real random
field** indexed by $T$ is a family $X=(X(s))_{s\in T}$ of real random variables
$X(s):\Omega\to\mathbb R$ on that space. This is coordinate measurability:
each map $(s,\omega)\mapsto X(s,\omega)$ with $s$ fixed is measurable in
$\omega$. The field is **jointly measurable** when the map
$(s,\omega)\mapsto X(s,\omega)$ from
$(T\times\Omega,\mathcal B(T)\otimes\mathcal F)$ to
$(\mathbb R,\mathcal B(\mathbb R))$ is measurable. Joint measurability is an
additional hypothesis when a spatial Lebesgue integral is used; it is not part
of coordinate measurability.

Write $\mathcal L(X(s_1),\ldots,X(s_n))$ for the pushforward law of a finite
coordinate tuple ([[def-stochastic-process-and-finite-dimensional-distributions]],
[[def-law-or-distribution-of-a-random-element]]). The field is **strictly stationary** on $T$ when, for every
finite tuple $s_1,\ldots,s_n\in T$ and every $u\in\mathbb R^d$ for which
$s_i+u\in T$ for all $i$, these joint laws are invariant under the common
translation $s_i\mapsto s_i+u$. This extends the integer-shift convention for
time series in [[def-strict-and-weak-stationarity-for-time-series]] to spatial
indices.

Write $T-T:=\{t-s:s,t\in T\}$ for the set of displacements realized by pairs
of sites.

The field is **wide stationary** when every $X(s)$ is square-integrable, its
mean is one constant $m$, and there is a function $C:T-T\to\mathbb R$ such
that
$$\operatorname{Cov}(X(s),X(t))=C(t-s)\qquad(s,t\in T).$$
For a wide-stationary field on all of $\mathbb R^d$, it is **wide isotropic**
when $C(h)$ depends only on the Euclidean norm $\|h\|$.

For $h\in T-T$ and any $s$ with $s,s+h\in T$, put
$\Delta_hX(s):=X(s+h)-X(s)$. The field is **intrinsically stationary of order
two** when for each $h\in T-T$ the first and second raw moments of
$\Delta_hX(s)$ are finite and independent of the admissible starting site
$s$. Here these moments are $\mathbb E[\Delta_hX(s)]$ and
$\mathbb E[(\Delta_hX(s))^2]$. The common second moment defines the
**variogram**
$$\gamma(h):=\frac12\mathbb E[(\Delta_hX(s))^2].$$
The mean increment may depend on $h$ and need not be zero; no finite second
moment of the field levels themselves is required by this definition.

## Source notes

Spodarev's 2024 notes, §§1.1–1.2, state strict and wide invariance and define
wide intrinsic stationarity through displacement-dependent increment first
and second moments. The 2009 draft, §§1.3–1.4, uses a narrower zero-mean
increment clause for intrinsic stationarity of order two; that extra
restriction is not adopted. Both sources distinguish wide from strict
stationarity. The covariance and variogram consequences proved on the A page
are not supplied by this definition alone.

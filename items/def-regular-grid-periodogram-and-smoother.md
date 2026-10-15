---
id: def-regular-grid-periodogram-and-smoother
kind: definition
title: "Regular-grid spatial periodogram and smoothed estimator"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-lattice-covariance-and-variogram-estimators
  - lem-dual-of-zd-is-torus
  - def-product-measure-on-sigma-finite-spaces
justified_by:
  - thm-regular-grid-smoothed-periodogram-bias-vanishes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3, Definitions 2.9–2.11"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
    - title: "Oxford Mathematical Institute, Harmonic Analysis lecture notes, characters of Z^d, pp. 17–18"
      url: "https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $Y=(Y_j)_{j\in\mathbb Z^d}$ satisfy the constant-mean,
lag-dependent-covariance conditions from
[[def-lattice-covariance-and-variogram-estimators]], with known mean $\mu$
(set $\mu=0$ for a centered field), and use the frequency torus $\mathbb T^d$
identified with $\widehat{\mathbb Z^d}$ by
[[lem-dual-of-zd-is-torus]]. Represent frequency coordinates
$\lambda\in[-\pi,\pi)^d$ by the circle tuple
$(e^{i\lambda_1},\ldots,e^{i\lambda_d})$; coordinates and integration are
periodic modulo $2\pi$ in each coordinate. For $n\ge1$, set
$$\Lambda_n:=\{0,1,\ldots,n-1\}^d,\qquad N_n:=n^d,$$
and let the $n^d$ Fourier-grid frequencies be
$$\lambda_{n,q}:=2\pi q/n\pmod{2\pi},\qquad q\in\Lambda_n.$$
The known-mean **regular-grid periodogram** is
$$I_n(\lambda):=\frac1{(2\pi)^dN_n} \left|\sum_{j\in\Lambda_n}(Y_j-\mu)e^{-i j\cdot\lambda}\right|^2, \qquad \lambda\in\mathbb T^d.$$
Integration over $\mathbb T^d$ uses product angular Lebesgue measure on the
fundamental cube $[-\pi,\pi)^d$
([[def-product-measure-on-sigma-finite-spaces]]).

For smoothing, let $K:\mathbb R^d\to[0,\infty)$ be continuous, even,
compactly supported, and satisfy $K(0)>0$. For $b>0$, periodize the rescaled
kernel by
$$K_b^{\mathrm{per}}(x):=\sum_{m\in\mathbb Z^d}b^{-d}K((x+2\pi m)/b).$$
Because $K$ has compact support, only finitely many summands are nonzero for
each fixed $x$, so this periodization is well-defined.
For $\lambda\in\mathbb T^d$, when the denominator is positive, set
$$w_{n,q,b}(\lambda):= \frac{K_b^{\mathrm{per}}(\lambda-\lambda_{n,q})} {\sum_{r\in\Lambda_n}K_b^{\mathrm{per}}(\lambda-\lambda_{n,r})}, \qquad \widetilde f_{n,b}(\lambda):= \sum_{q\in\Lambda_n}w_{n,q,b}(\lambda)I_n(\lambda_{n,q}).$$
The smoother is undefined when that denominator vanishes. Its target, when a
spectral density exists, is the density of the **lattice-sampled field on the
dual torus**; no unaliased continuous-space spectral-density target is part of
this definition.

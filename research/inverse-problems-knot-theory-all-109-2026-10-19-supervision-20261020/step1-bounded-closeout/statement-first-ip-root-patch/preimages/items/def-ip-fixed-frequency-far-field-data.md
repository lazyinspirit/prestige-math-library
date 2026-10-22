---
id: def-ip-fixed-frequency-far-field-data
kind: definition
title: Fixed-frequency far-field data on the small-norm volume branch
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-essential-supremum-with-respect-to-a-measure
  - def-euclidean-inner-product
  - def-fourier-transform-on-l-one-of-rn
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-metric-bounded-diameter
  - def-operator-norm
  - def-volume-integral-scattering-model
  - lem-volume-far-field-map-is-bounded
  - lem-volume-integral-operator-well-defined-and-bounded
  - thm-volume-integral-scattering-born-neumann-error
justified_by: []
proof_strategy: not-applicable
axiom_use: "Countable Choice is assumed through the L2 volume model and its Neumann-series existence result. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 7–12: outgoing Helmholtz model, Lippmann–Schwinger equation, far-field pattern, and first Born formula; §1.2.2, pp. 18–19, nonlinear far-field map"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: contrast convention, volume potential, and Lippmann–Schwinger equation"
    - title: "Semyon Dyatlov, MIT 18.155 Lecture Notes: Distributions, Elliptic Regularity, and Applications to PDEs"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.1, Definition 11.1, printed p. 119: L1 Fourier transform; rescale the frequency by 2π to match the library convention"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $D\subset\mathbb R^3$ be a bounded Lebesgue-measurable set with $0<M:=|D|<\infty$, and let $k>0$. Write $S^2:=\{v\in\mathbb R^3:|v|=1\}$ and $C_D:=\sqrt{M\,\operatorname{diam}(D)/(4\pi)}$. For $q\in L^\infty(D;\mathbb C)$, extended by zero off $D$, set $G_k(z):=e^{ik|z|}/(4\pi|z|)$ for $z\ne0$ and $G_k(0):=0$, and let
$$K_{q,k}v(x):=\int_D G_k(x-y)q(y)v(y)\,dy,\qquad \rho_k(q):=\|K_{q,k}\|_{L^2(D)\to L^2(D)}.$$
The **small-norm contrast class** is
$$\mathcal U_{D,k}:=\{q\in L^\infty(D;\mathbb C):\rho_k(q)<1\}.$$
For $d\in S^2$, put $f_{k,d}(x):=e^{ikd\cdot x}$ on $D$. For $q\in\mathcal U_{D,k}$, let $u_{q,k,d}\in L^2(D;\mathbb C)$ denote the unique solution of $u=f_{k,d}+K_{q,k}u$. For $q\in\mathcal U_{D,k}$, define the exact far-field data family by
$$\mathcal S_k(q)(\theta,d):=\frac1{4\pi}\int_D e^{-ik\theta\cdot y}q(y)u_{q,k,d}(y)\,dy,\qquad (\theta,d)\in S^2\times S^2.$$

For $h\in L^\infty(D;\mathbb C)$, define its first Born data by
$$\mathcal B_k h(\theta,d):=\frac1{4\pi}\int_D e^{-ik\theta\cdot y}h(y)e^{ikd\cdot y}\,dy=\frac1{4\pi}\widehat{h_0}\!\left(\frac{k}{2\pi}(\theta-d)\right),$$
where $h_0$ is the zero extension of $h$ to $\mathbb R^3$ and $\widehat g(\xi):=\int_{\mathbb R^3}g(y)e^{-2\pi i y\cdot\xi}\,dy$ for $g\in L^1(\mathbb R^3;\mathbb C)$. No uniqueness or stability outside $\mathcal U_{D,k}$ is asserted.

## Definition references


[[def-metric-bounded-diameter|The diameter is $\operatorname{diam}(D)=\sup\{|x-y|:x,y\in D\}$.]]

[[def-euclidean-inner-product|The norm and dot product on $\mathbb R^3$ are the Euclidean ones.]]

[[def-l-p-space-as-a-quotient-by-null-functions|The spaces $L^2$ and $L^\infty$ consist of measurable functions modulo equality almost everywhere.]]

[[def-essential-supremum-with-respect-to-a-measure|The $L^\infty$ norm is the essential supremum with respect to Lebesgue measure.]]

[[def-operator-norm|The operator norm is the least bound on a bounded linear map between normed spaces.]]

[[def-volume-integral-scattering-model|The outgoing volume model fixes $G_k(z)=e^{ik|z|}/(4\pi|z|)$ and the far-field convention $e^{-ik\theta\cdot y}q(y)v(y)/(4\pi)$.]]

[[lem-volume-integral-operator-well-defined-and-bounded|The displayed volume kernel defines a bounded operator on complex $L^2(D)$.]]

[[lem-volume-far-field-map-is-bounded|The far-field map is continuous and is the uniform outgoing limit of the exterior volume potential.]]

[[def-fourier-transform-on-l-one-of-rn|The library Fourier transform uses $\widehat g(\xi)=\int g(y)e^{-2\pi i y\cdot\xi}\,dy$, giving the frequency $k(\theta-d)/(2\pi)$.]]

[[thm-volume-integral-scattering-born-neumann-error|For the strict operator norm bound, the volume equation has a unique L2 solution, which supplies the field used here.]]

[[def-countable-choice|Countable Choice is the declared axiom branch for the L2 volume model and its Neumann result.]]


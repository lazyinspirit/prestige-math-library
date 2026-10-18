---
id: alg-na-filon-nodal-moment-quadrature
kind: algorithm
title: Filon quadrature from nodal interpolation and phase moments
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-lagrange-interpolation-on-distinct-nodes
  - alg-na-fourier-polynomial-moments
  - alg-na-nonstationary-moment-expansion
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Input $a<b$, $\omega\in\mathbb R\setminus\{0\}$, continuous $f:[a,b]\to\mathbb C$, continuous real $g:[a,b]\to\mathbb R$, an integer $n\ge1$, distinct nodes $a=c_0<\cdots<c_n=b$, and for each Lagrange basis polynomial $\ell_j$ a complex moment estimate $\widehat\mu_j\in\mathbb C$ with real error bound $\epsilon_j\ge0$ satisfying $|\widehat\mu_j-\int_a^b\ell_j(x)e^{i\omega g(x)}dx|\le\epsilon_j$. Put $f_j=f(c_j)$. Form $p_n=\sum_{j=0}^nf_j\ell_j$ using [[lem-na-lagrange-interpolation-on-distinct-nodes]], then return
$$Q_n=\sum_{j=0}^nf_j\widehat\mu_j,\qquad \eta_n=\sum_{j=0}^n|f_j|\epsilon_j.$$
For $g(x)=x$, expand each real-node Lagrange polynomial as $\ell_j(x)=\sum_{k=0}^n a_{jk}x^k$, run [[alg-na-fourier-polynomial-moments]] through $k=n$, and set $\widehat\mu_j=\sum_{k=0}^na_{jk}\mu_k$ and $\epsilon_j=0$. For general nonstationary $g$, a user may obtain bounded moments by applying [[alg-na-nonstationary-moment-expansion]] to each $\ell_j$ with a certified derivative bound. The exact-moment branch for a general phase is conditional on supplied exact moments; no general exact moment solver for arbitrary nonlinear $g$ is asserted here.

---
id: def-fd-solenoidal-reduced-ode
kind: definition
title: Finite solenoidal Galerkin coefficient dynamics
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-fourier-sobolev-spaces, def-countable-choice]
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Emil Wiedemann, Lecture Notes: Navier-Stokes Equations, edited by Jack Skipper, Universität Ulm, Winter 2018/19"
      url: "https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf"
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2019, Stanford University"
      url: "https://virtualmath1.stanford.edu/~ryzhik/STANFORD/STANF256B-19/notes-256B-19.pdf"
---

## Definition

Assume the Axiom of Countable Choice: for every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ on $\mathbb N$ such that $f(n)\in X_n$. For $d\in\{1,2,3\}$, let $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ carry the probability measure $d\mu=(2\pi)^{-d}dx$. For $k\in\mathbb Z^d$ define $e_k(x)=e^{ik\cdot x}$; for $q:Q_d\to\mathbb R^N$, define its componentwise Fourier coefficients by $\widehat q(k)=\int_{Q_d}q(x)e^{-ik\cdot x}\,d\mu(x)$. The supplied space $H^0(Q_d;\mathbb R^N)$ is the completion of finite real trigonometric polynomials in the norm $\|q\|_{H^0}^2=\sum_{k\in\mathbb Z^d}|\widehat q(k)|^2$, identified with its unique $L^2$ representative; real classes satisfy $\widehat q(-k)=\overline{\widehat q(k)}$. For vector fields with these representatives, set $\langle v,w\rangle_2=\int_{Q_d}v\cdot w\,d\mu$. For an integer $r\ge1$, an admissible finite solenoidal family consists of classes $v_1,\ldots,v_r\in H^0(Q_d;\mathbb R^d)$ whose representatives are smooth $2\pi$-periodic fields satisfying $\operatorname{div}v_i=\sum_{m=1}^d\partial_{x_m}v_i^m=0$ and $\langle v_i,v_j\rangle_2=\delta_{ij}$. Given such a family, a parameter $\nu\ge0$, and a coefficient vector $a=(a_1,\ldots,a_r)\in\mathbb R^r$, put $u_a=\sum_{i=1}^r a_i v_i$ and define

$$A_{ij}=\int_{Q_d}\sum_{\ell,m=1}^d(\partial_{x_m}v_j^\ell)(\partial_{x_m}v_i^\ell)\,d\mu,\qquad c_{ijk}=\int_{Q_d}\sum_{\ell,m=1}^d v_j^m(\partial_{x_m}v_k^\ell)v_i^\ell\,d\mu.$$

The unforced finite solenoidal Galerkin coefficient dynamics is the initial-value system for $a:[0,T)\to\mathbb R^r$,

$$a_i'(t)+\sum_{j,k=1}^r c_{ijk}a_j(t)a_k(t)+\nu\sum_{j=1}^r A_{ij}a_j(t)=0,\qquad a_i(0)=a_i^0,\quad i=1,\ldots,r,$$

where $T>0$ is the interval on which a solution is defined and $a^0\in\mathbb R^r$ is the initial coefficient vector. The displayed integrals are finite because their integrands are smooth on the compact torus. This is a finite-dimensional polynomial ODE; this definition asserts no convergence to a solution of the infinite-dimensional PDE.

## Definition references

[[def-fd-periodic-fourier-sobolev-spaces|Periodic fluid Fourier Sobolev spaces]]

[[def-countable-choice|Axiom of Countable Choice]]

[Wiedemann, §3.1.2, Definition 3.1 and §3.2, Theorem 3.4 proof Steps 1–2](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf)

[Ryzhik, §5, equations (5.24)–(5.35)](https://virtualmath1.stanford.edu/~ryzhik/STANFORD/STANF256B-19/notes-256B-19.pdf)

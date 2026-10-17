---
id: ex-distributed-delay-midpoint-history-error
kind: example
title: "Distributed-delay midpoint quadrature separates two history errors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-distributed-delay-equation-and-window-integral
  - alg-distributed-delay-composite-midpoint-rule
  - lem-distributed-delay-midpoint-error-split
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
    - title: "Roland Pulch, Equivalent Systems for Differential Equations with Polynomially Distributed Delay, version 3"
      url: "https://arxiv.org/pdf/2408.09861v3"
---

## Example

Take a scalar delay window of length $\tau$, constant kernel $K(\theta)=1$,
and continuous path $y(t)=t^2$ on $[-\tau,T]$, so its history is
$\phi(s)=s^2$. At query time $t=0$, let $h=\tau/m$ and refine
the composite midpoint rule with $r=qm$ cells, where $m,q\ge1$ are integers
and $\Delta=\tau/r=h/q$. The exact integral is $\tau^3/3$. The exact-history
midpoint remainder is $\tau\Delta^2/12$, while using the piecewise-linear
stored history adds a distinct node-history term. The stored-history rule
returns an error of $\tau h^2/6$ in this example; the two terms are separated
in [[lem-distributed-delay-midpoint-error-split]].

## Facts & Assumptions

**Given:** A scalar history $\phi(s)=s^2$ on $[-\tau,0]$, the constant kernel
on $[0,\tau]$, an aligned state mesh $h=\tau/m$, and midpoint refinement
$\Delta=h/q$.

[F1] The distributed-delay integral is
$\mathcal I_K[y](t)=\int_0^\tau K(\theta)y(t-\theta)\,d\theta$
([[def-distributed-delay-equation-and-window-integral]]).

[F2] The composite midpoint rule samples the stored piecewise-linear history
at $\theta_j=(j+1/2)\Delta$
([[alg-distributed-delay-composite-midpoint-rule]]).

[F3] The error bound splits into a stored-history node term and an
exact-history quadrature remainder
([[lem-distributed-delay-midpoint-error-split]]).

## Proof

1.1 At $t=0$, [F1] gives $I=\int_0^\tau\theta^2d\theta=\tau^3/3$. Put
$Q_{\rm ex}=\Delta\sum_{j=0}^{r-1}\theta_j^2$, the midpoint sum using the
exact history. On a cell centered at $c_j$, write $\theta=c_j+u$ with
$-\Delta/2\le u\le\Delta/2$. Then
$\int_{-\Delta/2}^{\Delta/2}(c_j+u)^2du=c_j^2\Delta+\Delta^3/12$.
Summing the cells gives $I-Q_{\rm ex}=r\Delta^3/12=\tau\Delta^2/12$.
[F1, given, algebra]

2.1 On the history cell $[\ell h,(\ell+1)h]$ in the variable
$\theta=-s$, the stored chord of $\phi$ satisfies
$$\widehat\phi_h(-\theta)-\theta^2
=(\theta-\ell h)((\ell+1)h-\theta).$$
Its maximum is $h^2/4$, so the uniform history interpolation error is
$E_h=h^2/4$. Since $\Delta=h/q$, every midpoint subcell is contained in one
such chord cell. [F2, given, algebra]

2.2 The stored chord is affine on each width-$h$ cell, and the midpoint rule
is exact for an affine function on each of its $q$ equal subcells: the centered
linear term integrates to zero. Therefore the stored-history midpoint sum
$Q_{\rm st}$ equals the integral of the chord. The area between the chord and
$\theta^2$ on one width-$h$ cell is
$\int_0^h v(h-v)dv=h^3/6$. Summing $m$ cells gives
$Q_{\rm st}-I=mh^3/6=\tau h^2/6$. Combining with step 1.1 yields
$Q_{\rm st}-Q_{\rm ex}=\tau h^2/6+\tau\Delta^2/12$.
[step 1.1, step 2.1, algebra]

3.1 For the exact integrand $g(\theta)=\theta^2$, $g''=2$, so the second
term in [F3] is $2\tau\Delta^2/24=\tau\Delta^2/12$. Its history term is
bounded by $E_h\Delta\sum_j|K(\theta_j)|=\tau h^2/4$. The actual node-history
term from step 2.2 is at most this bound because
$\tau h^2/6+\tau\Delta^2/12\le\tau h^2/4$ when $\Delta\le h$. Thus [F3]
applies, while the combined signed error is the smaller value
$|Q_{\rm st}-I|=\tau h^2/6$ due to cancellation between the midpoint
underestimate and the chord overestimate. [F3, given, step 1.1, step 2.1,
step 2.2, algebra] ∎

---
id: ex-sr-four-momentum-boost-to-rest
kind: example
title: "A passive boost that brings a moving particle to rest"
status: draft
origin: pipeline
domain: mathematics
deps:
  - ex-sr-four-momentum-at-beta-three-fifths
  - lem-sr-four-momentum-in-inertial-frame
  - lem-sr-energy-momentum-observer-identities
  - def-lorentz-boost
  - lem-boost-is-proper-orthochronous-with-inverse
  - thm-sr-tensor-and-current-transformation
  - def-inertial-frame-and-inertial-chart
  - def-sr-four-velocity-and-four-acceleration
  - def-lorentz-form-and-inertia
dependency_roles:
  ex-sr-four-momentum-at-beta-three-fifths: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.1 p. 89 (the energy-momentum four-vector transforms as the position-time four-vector)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.100)-(1.101) (Lorentz transformation of p^mu)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

In the setting of [[ex-sr-four-momentum-at-beta-three-fifths]], let
$B(\beta)$ be the passive boost of [[def-lorentz-boost]] with parameter
$\beta=3/5$ along $e_1$, and let $P'$ be the components of $P$ after the
coordinate change $x'=B(\beta)x$ with $v=3c/5$. Then
$P'=(mc,0,0,0)$: the energy becomes $E'=mc^2$ and the spatial momentum
vanishes, and the mass shell gives $E'^2-c^2|\mathbf p'|^2=m^2c^4$. The
observer energy of the same particle thus changes from $5mc^2/4$ to $mc^2$
while the invariant mass stays $m$; in particular $T_{e'_0}(P)=0$ in the new
frame, the frame of the particle's rest.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$; the
inertial frame and particle of the $\beta=3/5$ example, so that
$w=(3c/5,0,0)$; the passive boost $B(\beta)$ with $\beta=3/5$ along $e_1$ and
$v=3c/5$.

[F1] ([[ex-sr-four-momentum-at-beta-three-fifths]], Example): in the original
frame $P=mU$ with $U=\gamma_w(c,w)$, $\gamma_w=5/4$, and $P$ has components
$(5mc/4,3mc/4,0,0)$, observer energy $5mc^2/4$ and spatial momentum
$(3mc/4,0,0)$.

[F2] ([[def-lorentz-boost]] and
[[lem-boost-is-proper-orthochronous-with-inverse]]): the boost with parameter
$\beta=(v/c)s$, $|v|<c$, has $\gamma_v=(1-v^2/c^2)^{-1/2}$ and matrix
$B^0{}_0=\gamma_v$, $B^0{}_i=B^i{}_0=-\gamma_v(v/c)s_i$; it is a proper
orthochronous Lorentz map and is invertible.

[F3] ([[thm-sr-tensor-and-current-transformation]], clause (i)): under a
coordinate change $x'=\Lambda x+b$ the components of a vector transform as
$P'^a=\Lambda^a{}_bP^b$; applied to $\Lambda=B(\beta)$ this gives
$E'=\gamma_v(E-vp_\parallel)$, $p'_\parallel=\gamma_v(p_\parallel-vE/c^2)$,
$p'_\perp=p_\perp$ with $p_\parallel$ the component of $\mathbf p$ along $s$.

[F4] ([[lem-sr-four-momentum-in-inertial-frame]], clauses (a) and (c)): in an
inertial frame with stationary observer $e_0$ the components are
$(E_{e_0}(P)/c,q^1,q^2,q^3)$, and the combination
$E^2-c^2|\mathbf p|^2$ is invariant with value $m(P)^2c^4$ for future timelike
$P$.

[F5] ([[lem-sr-energy-momentum-observer-identities]], Statement (b)): for
$P=mU$ with $m>0$, $U$ future timelike with $\eta(U,U)=-c^2$, and $n$ future
unit, $T_n(P)=mc^2(\gamma-1)$ with $\gamma=-\eta(U/c,n)\ge1$, and
$T_n(P)=0$ if and only if $U=cn$.

## Verification

1.1 By [F1], $E=E_{e_0}(P)=5mc^2/4$ and $\mathbf p=(3mc/4,0,0)$, so with the boost direction $s=e_1$ the parallel component is $p_\parallel=3mc/4$ and $\mathbf p_\perp=0$; by [F2], $\beta=3/5$ gives $v=3c/5$ and $\gamma_v=(1-9/25)^{-1/2}=5/4$. [F1, F2]

2.1 Apply [F3]: $E'=\gamma_v(E-vp_\parallel)=\frac54\bigl(\frac{5mc^2}{4}-\frac{3c}{5}\cdot\frac{3mc}{4}\bigr)=\frac54\bigl(\frac{25mc^2-9mc^2}{20}\bigr)=\frac54\cdot\frac{16mc^2}{20}=\frac54\cdot\frac{4mc^2}{5}=mc^2$, and $p'_\parallel=\gamma_v(p_\parallel-vE/c^2)=\frac54\bigl(\frac{3mc}{4}-\frac{3c}{5}\cdot\frac{5mc^2}{4c^2}\bigr)=\frac54\bigl(\frac{3mc}{4}-\frac{3mc}{4}\bigr)=0$, while $\mathbf p'_\perp=\mathbf p_\perp=0$; hence $P'=(mc,0,0,0)$. [F3, step 1.1]

3.1 The mass shell in the new frame: by [F4] applied in the primed inertial frame, $E'^2-c^2|\mathbf p'|^2=m^2c^4$; substituting $E'=mc^2$, $\mathbf p'=0$ by [step 2.1] gives $m^2c^4-0=m^2c^4$, and $m(P)=m$ since the invariant combination is unchanged. [F4, step 2.1]

4.1 The observer energy of the particle in the new frame is $E_{e'_0}(P)=cP'^0=mc^2$ by [F4] and [step 2.1], so the kinetic energy $T_{e'_0}(P)=E_{e'_0}(P)-mc^2=0$; by [F5], $T_{e'_0}(P)=0$ if and only if $U=ce'_0$, so the particle is at rest in the new frame, whose time vector is the particle's four-velocity up to $c$; in particular the observer energy changed from $5mc^2/4$ to $mc^2$ while the invariant mass stayed $m$. [F4, F5, step 2.1, step 3.1]

5.1 All claims of the example are verified: the boost with parameter $3/5$ along $e_1$ sends $P=(5mc/4,3mc/4,0,0)$ to $P'=(mc,0,0,0)$ with $E'=mc^2$ and vanishing spatial momentum, the mass shell reads $m^2c^4$ in both frames, and the new frame is the particle's rest frame. [step 2.1, step 3.1, step 4.1] ∎

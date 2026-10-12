---
id: def-gr-observer-and-rest-space
kind: definition
title: "Observers, rest spaces and the spatial projection at an event"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-lorentz-orthogonality-and-orthogonal-complement, def-causal-classification-of-lorentz-vectors, def-rational-power]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
justified_by: [lem-gr-observer-projection-decomposition]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'the metric' and 'Lorentz transformations' (printed pp. 4-6; PDF pp. 11-13), 'worldlines' and 'proper time' (printed pp. 25-26; PDF pp. 32-33) and 'four-velocity' (printed pp. 26-27; PDF pp. 33-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.3 on the metric, orthonormal bases, timelike vectors and the 4-velocity (2.9)-(2.14), printed pp. 24-28 (PDF pp. 25-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.2 Lorentzian manifolds: timelike, null and spacelike vectors and the light cone (printed p. 93; PDF p. 100), section 3.1.3 the metric isomorphism and inverse metric (printed pp. 94-95; PDF pp. 101-102)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$p\in M$ ([[def-gr-smooth-lorentzian-objects]]).

**(a) Observers.** An **observer at $p$** is a tangent vector
$n\in T_pM$ such that $g_p(n,n)=-1$ and $n$ is future-directed in the sense of
[[def-gr-smooth-lorentzian-objects]], that is, $g_p(n,N_p)<0$. Because
$g_p(n,n)=-1\neq0$, an observer is timelike and in particular nonzero
([[def-causal-classification-of-lorentz-vectors]]). Observers at $p$ exist:
the vector $N_p$ is timelike, and
$n:=N_p/\sqrt{-g_p(N_p,N_p)}$ satisfies $g_p(n,n)=-1$ and
$g_p(n,N_p)=-\sqrt{-g_p(N_p,N_p)}<0$, where the square root is the
nonnegative root of [[def-rational-power]]; then $-n$ is a unit timelike
vector with $g_p(-n,N_p)>0$, so it is not an observer, and the two vectors
$n,-n$ point in opposite time directions.

**(b) Rest space.** For an observer $n$ at $p$, the **rest space** of $n$ is
the $g_p$-orthogonal complement of the line $\mathbb Rn$,

$$n^{\perp}=\{v\in T_pM: g_p(v,n)=0\},$$

in the sense of [[def-lorentz-orthogonality-and-orthogonal-complement]]. It is
a linear subspace of $T_pM$. The further facts that $\dim n^{\perp}=3$ and
that the restriction of $g_p$ to $n^{\perp}$ is positive definite are proved
in [[lem-gr-observer-projection-decomposition]]; they are consequences, not
part of the definition.

**(c) Spatial projection.** The **spatial projection** of the observer $n$ is
the map

$$h_n:T_pM\longrightarrow T_pM,\qquad h_n(v):=v+g_p(n,v)\,n .$$

The map is linear because $g_p$ is bilinear, its image is contained in
$n^{\perp}$, and it fixes $n^{\perp}$ pointwise; that it is the
$g_p$-orthogonal projection onto $n^{\perp}$ with kernel $\mathbb Rn$ is
proved in [[lem-gr-observer-projection-decomposition]].

**(d) Scope.** An observer at $p$ is a single tangent vector. It is not an
ordered basis or frame of $T_pM$, not a chart, not a field of observers such as
the congruences defined later on this page, and not a curve or a worldline: no
parametrized curve, clock reading, proper time or measurement is attached to
$n$ by this definition. The physical reading of an observer as the direction
of an ideal clock's worldline, and the measurement interpretation of the
observer-relative quantities introduced later on this page, belong to the
physical postulates and unit conventions of the framework and are not asserted
here.

## Remarks

**Both conditions are used.** The condition $g_p(n,n)=-1$ makes $n$ a unit
timelike vector of a fixed normalization and forces $n\neq0$; the condition
$g_p(n,N_p)<0$ selects one of the two time directions and is not implied by the
first, since replacing $n$ by $-n$ preserves $g_p(n,n)=-1$ and reverses the
sign of $g_p(n,N_p)$ ([[def-gr-smooth-lorentzian-objects]]). No positivity of
any observer-relative energy is asserted or used in this definition.

---
id: def-gr-observer-relative-energy-and-momentum
kind: definition
title: "Observer-relative energy, spatial momentum and rest mass of a tangent vector"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-rational-power]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 on four-momentum, energy and the mass shell, printed pp. 26-28 (PDF pp. 33-35)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.3 on four-momentum, mass and observer energy, printed pp. 63-65 (PDF pp. 64-66)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, let $n$ be an observer at $p$, and let $c>0$ be a real parameter
([[def-gr-observer-and-rest-space]],
[[def-gr-smooth-lorentzian-objects]]).

**(a) Observer energy and spatial momentum.** For every $P\in T_pM$ define the
**observer energy** and the **spatial momentum** of $P$ relative to $n$ by

$$E_n(P):=-c\,g_p(P,n),\qquad q_n(P):=h_n(P),$$

where $h_n$ is the spatial projection of the observer $n$. Both maps are
$\mathbb R$-linear in $P$: the first because $g_p$ is bilinear, the second by
[[lem-gr-observer-projection-decomposition]]. The second takes values in the
rest space $n^{\perp}$, and by the rest-space decomposition of that lemma every
$P$ has the unique decomposition

$$P=\frac{E_n(P)}{c}\,n+q_n(P),\qquad \frac{E_n(P)}{c}\in\mathbb R,\quad q_n(P)\in n^{\perp}.$$

Equivalently $E_n(P)=c\,\lambda$ and $q_n(P)=w$ for the unique pair
$(\lambda,w)$ with $P=\lambda n+w$, $\lambda\in\mathbb R$, $w\in n^{\perp}$.

**(b) Rest mass and four-velocity normalization.** For $P\in T_pM$ with
$g_p(P,P)\le0$ define the **rest mass**

$$m(P):=\frac{\sqrt{-g_p(P,P)}}{c}\ge0,$$

where the square root is the nonnegative root of [[def-rational-power]]. By
strict positivity of the square root of a positive number, $m(P)=0$ exactly
when $P=0$ or $P$ is null, and $m(P)>0$ exactly when $P$ is timelike
([[def-causal-classification-of-lorentz-vectors]]). When $m(P)>0$, define the
**normalized four-velocity direction**

$$U(P):=\frac{P}{m(P)},$$

so that $g_p(U(P),U(P))=g_p(P,P)/m(P)^2=-c^2$. Conversely, if $m>0$ and
$U\in T_pM$ satisfy $g_p(U,U)=-c^2$, then $P:=mU$ has $g_p(P,P)=-m^2c^2$ and
$m(P)=m$, $U(P)=U$; the pair $(m,U)$ with $U$ future-directed determines and
is determined by its future timelike $P=mU$.

**(c) Scope and reading.** $E_n$ and $q_n$ depend on the observer $n$: for the
same nonzero $P$, different observers $n,n'$ generally give different values,
and no observer-independent splitting of $P$ into "energy" and "momentum" is
defined by this item. The identities above are algebraic; this definition
asserts no positivity of $E_n$ (that is proved separately), no conservation,
no dynamics and no measurement. The names observer energy, spatial momentum
and rest mass, and their physical units and interpretation, belong to the
physical reading of the framework's unit conventions and postulates and are
not asserted here; this item fixes only the mathematical dependence on the
objects $P$, $n$, $g_p$ and the parameter $c$.

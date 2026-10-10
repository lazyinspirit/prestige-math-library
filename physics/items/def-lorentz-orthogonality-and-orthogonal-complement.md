---
id: def-lorentz-orthogonality-and-orthogonal-complement
kind: definition
title: "eta-orthogonality and orthogonal complements in a Lorentz vector space"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "K. Conrad, Bilinear Forms (orthogonality, radicals, inertia)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $(V,\eta)$ be a Lorentz vector space of signature $(-,+,+,+)$
([[def-lorentz-form-and-inertia]]). Two vectors $u,v\in V$ are
**$\eta$-orthogonal**, written $u\perp v$, when $\eta(u,v)=0$. For a subset
$S\subseteq V$ the **orthogonal complement** of $S$ is

$$S^{\perp}:=\{v\in V:\eta(v,s)=0\text{ for every }s\in S\},$$

and for a vector $u$ one writes $u^{\perp}:=\{u\}^{\perp}$.

**Elementary properties.** For every subset $S\subseteq V$:

- $S^{\perp}$ is a linear subspace of $V$: if $v,w\in S^{\perp}$ and
  $\lambda\in\mathbb R$, then for every $s\in S$ bilinearity gives
  $\eta(v+\lambda w,s)=\eta(v,s)+\lambda\eta(w,s)=0$, so $v+\lambda w\in S^{\perp}$.
  In particular the zero vector lies in $S^{\perp}$ and $S^{\perp}$ is never
  empty.
- $S\subseteq (S^{\perp})^{\perp}$: if $s\in S$, then $\eta(v,s)=0$ for every
  $v\in S^{\perp}$ by the definition of $S^{\perp}$, and symmetry of $\eta$
  gives $\eta(s,v)=0$ for every $v\in S^{\perp}$, that is,
  $s\in(S^{\perp})^{\perp}$.
- $S^{\perp}=(\operatorname{span}S)^{\perp}$: the inclusion
  $S\subseteq\operatorname{span}S$ gives
  $(\operatorname{span}S)^{\perp}\subseteq S^{\perp}$; conversely, if
  $v\in S^{\perp}$ and $u=\sum_i\lambda_i s_i$ is a finite linear combination
  with $s_i\in S$, then linearity in the second argument gives
  $\eta(v,u)=\sum_i\lambda_i\eta(v,s_i)=0$, so $v\in(\operatorname{span}S)^{\perp}$.

In particular, for every $u\in V$ one has $u\in u^{\perp}$ exactly when
$\eta(u,u)=0$, that is, exactly when $u$ is null or $u=0$
([[def-causal-classification-of-lorentz-vectors]]).

**A nonzero vector can be orthogonal to itself.** Take a basis
$e_0,e_1,e_2,e_3$ of $V$ in which the matrix of $\eta$ is diagonal with
diagonal entries $-1,1,1,1$; such a basis exists by clause 2 of the definition
of a Lorentz form. Then $v:=e_0+e_1$ is nonzero while
$\eta(v,v)=\eta(e_0,e_0)+2\eta(e_0,e_1)+\eta(e_1,e_1)=-1+0+1=0$, so
$v\in v^{\perp}$ with $v\neq 0$. This is exactly what fails for a
positive-definite inner product and is why orthogonal complements in a Lorentz
vector space need not be positive definite.

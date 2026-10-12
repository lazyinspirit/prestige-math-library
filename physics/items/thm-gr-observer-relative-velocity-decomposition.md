---
id: thm-gr-observer-relative-velocity-decomposition
kind: theorem
title: "Relative velocity decomposition of a future unit timelike vector"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'Lorentz transformations' and the Lorentz factor (printed pp. 4-6; PDF pp. 11-13) and 'four-velocity' U^mu = dx^mu/dtau with eta_mu nu U^mu U^nu = -1 (1.98)-(1.99), printed pp. 26-27 (PDF pp. 33-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.3: the 4-velocity as the unit tangent of a timelike curve, g_ab u^a u^b = -1 (2.14), printed p. 28 (PDF p. 29), and section 6.3: the observer energy E = -g_ab(p) v^a(p) P^b(p) (6.19), printed p. 64 (PDF p. 65)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 5, section 5.3: the orthogonal decomposition u = Gamma(n + U) of a 4-velocity with respect to an observer, with n.U = 0 and Gamma = (1 - U.U)^-1/2 (5.29)-(5.36), printed pp. 76-77"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, let $n$ be an observer at $p$, let $c>0$ be a real parameter, and let
$u\in T_pM$ be future unit timelike, $g_p(u,u)=-1$
([[def-gr-observer-and-rest-space]]). Put

$$\gamma:=-g_p(n,u),\qquad w:=\frac{c\,h_n(u)}{\gamma},$$

where $h_n$ is the spatial projection. Then:

1. $\gamma\ge1$, with $\gamma=1$ if and only if $u=n$; in particular
   $w$ is well defined.
2. $w\in n^{\perp}$, $g_p(w,w)=c^2(1-\gamma^{-2})<c^2$, and

   $$u=\gamma\left(n+\frac{w}{c}\right).$$

3. **Uniqueness.** If $u=\lambda(n+v/c)$ with $\lambda\in\mathbb R$ and
   $v\in n^{\perp}$, then $\lambda=\gamma$ and $v=w$.
4. **Converse.** Conversely, if $\lambda\ge1$ and $v\in n^{\perp}$ satisfy
   $g_p(v,v)=c^2(1-\lambda^{-2})$, then $u':=\lambda(n+v/c)$ is future unit
   timelike, $-g_p(n,u')=\lambda$ and $h_n(u')=\lambda v/c$; the maps
   $u\mapsto(\gamma,w)$ and $(\lambda,v)\mapsto u'$ are mutually inverse
   bijections between the future unit timelike vectors and the pairs
   $(\lambda,v)$ with $\lambda\ge1$, $v\in n^{\perp}$ and
   $g_p(v,v)=c^2(1-\lambda^{-2})$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p$, an observer $n$ at $p$, a real $c>0$ and a future unit timelike $u\in T_pM$.

[L1] An observer is a vector $n$ with $g_p(n,n)=-1$ and $g_p(n,N_p)<0$; the spatial projection is $h_n(v)=v+g_p(n,v)n$, and a future unit timelike vector is a future-directed vector $u$ with $g_p(u,u)=-1$ ([[def-gr-observer-and-rest-space]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L2] $h_n$ is linear, $\ker h_n=\mathbb Rn$, $\operatorname{im}h_n=n^{\perp}$, $T_pM=\mathbb Rn\oplus n^{\perp}$ with $h_n(v)=v$ for $v\in n^{\perp}$, the projection identity $g_p(h(v),h(v'))=g_p(v,v')+g_p(v,n)g_p(n,v')$ holds, and $g_p$ is positive definite on $n^{\perp}$ ([[lem-gr-observer-projection-decomposition]]).

[L3] If $z$ is nonzero future causal then $-g_p(n,z)>0$; if $z$ is unit timelike then $z$ is future-directed exactly when $g_p(n,z)<0$ ([[lem-gr-observer-pairing-with-future-causal-vectors]]).

## Proof

**Proof technique:** direct.

1.1 The vector $u$ is nonzero and future causal, so [L3] gives $\gamma=-g_p(n,u)>0$; thus $w=c\,h_n(u)/\gamma$ is well defined and belongs to $n^{\perp}$ because $h_n(u)$ does by [L2]. [L2, L3, given]

1.2 Conversely let $\lambda\ge1$ and $v\in n^{\perp}$ with $g_p(v,v)=c^2(1-\lambda^{-2})$, and set $u':=\lambda(n+v/c)$. Then $g_p(u',u')=\lambda^2\bigl(g_p(n,n)+2g_p(n,v)/c+g_p(v,v)/c^2\bigr)=\lambda^2\bigl(-1+0+1-\lambda^{-2}\bigr)=-1$, so $u'$ is unit timelike, and $g_p(n,u')=\lambda g_p(n,n)=-\lambda<0$, so $u'$ is future-directed by [L3]. Moreover $-g_p(n,u')=\lambda$ and $h_n(u')=\lambda h_n(v)/c=\lambda v/c$ by [L2]. [L1, L2, L3, algebra]

2.1 By the projection identity of [L2] applied to $v=v'=u$, and using $g_p(u,u)=-1$, we get $g_p(h_n(u),h_n(u))=\gamma^2-1$; the left-hand side is $\ge0$ because it is the square of the $g_p$-norm of $h_n(u)\in n^{\perp}$ and $g_p$ is positive definite on $n^{\perp}$, with equality if and only if $h_n(u)=0$. Since $\gamma>0$ by step 1.1, $\gamma^2\ge1$ gives $\gamma\ge1$, and $\gamma=1$ holds exactly when $h_n(u)=0$, i.e. $u\in\ker h_n=\mathbb Rn$ by [L2], which for future unit timelike $u$ means $u=n$. This proves claim 1. [step 1.1, L1, L2, algebra]

2.2 By the decomposition $u=-g_p(u,n)n+h_n(u)$ of [L2] and $\gamma=-g_p(n,u)$, we have $u=\gamma n+h_n(u)=\gamma\bigl(n+h_n(u)/\gamma\bigr)=\gamma(n+w/c)$, which is the formula of claim 2. [step 1.1, L2, algebra]

2.3 Suppose $u=\lambda(n+v/c)$ with $\lambda\in\mathbb R$ and $v\in n^{\perp}$. Pairing with $n$ gives $g_p(u,n)=\lambda\bigl(g_p(n,n)+g_p(n,v)/c\bigr)=-\lambda$, hence $\lambda=-g_p(n,u)=\gamma$. Applying $h_n$ and using linearity, $h_n(n)=0$ and $h_n(v)=v$ [L2] gives $h_n(u)=\lambda h_n(v)/c=\lambda v/c$, hence $v=c\,h_n(u)/\lambda=c\,h_n(u)/\gamma=w$. This proves claim 3. [step 1.1, L2, algebra]

3.1 From $w=c\,h_n(u)/\gamma$ and step 2.1, $g_p(w,w)=c^2\gamma^{-2}g_p(h_n(u),h_n(u))=c^2\gamma^{-2}(\gamma^2-1)=c^2(1-\gamma^{-2})<c^2$, because $\gamma$ is a finite real number with $\gamma\ge1$ by step 2.1, so $\gamma^{-2}>0$ and $c^2>0$. This strict bound also holds when $u=n$, in which case $\gamma=1$ and $w=0$. This completes claim 2. [step 1.1, step 2.1, algebra]

4.1 Steps 1.1-2.2 prove claims 1 and 2; step 2.3 proves claim 3; and step 1.2 together with steps 1.1-2.2 shows that the two assignments are mutually inverse on the stated sets, completing claim 4. [step 3.1, step 2.3, step 1.2] ∎

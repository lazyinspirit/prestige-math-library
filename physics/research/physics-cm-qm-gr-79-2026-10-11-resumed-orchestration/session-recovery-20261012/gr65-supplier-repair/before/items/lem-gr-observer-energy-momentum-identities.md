---
id: lem-gr-observer-energy-momentum-identities
kind: lemma
title: "Positivity, relative-velocity identities and the mass shell of observer-relative energy and momentum"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-relative-energy-and-momentum, lem-gr-observer-projection-decomposition, lem-gr-observer-pairing-with-future-causal-vectors, thm-gr-observer-relative-velocity-decomposition, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, def-rational-power]
dependency_roles:
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  thm-gr-observer-relative-velocity-decomposition: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1, equations (1.98)-(1.102) on four-momentum, energy and the mass shell, printed pp. 26-28 (PDF pp. 33-35)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.3, equations (6.17)-(6.19) on P = m u, g(P,P) = -m^2 and observer energy, printed pp. 63-65 (PDF pp. 64-66)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, let $n$ be an observer at $p$, let $c>0$, and for
$P\in T_pM$ write $E:=E_n(P)$, $q:=q_n(P)$ and $m:=m(P)$ as in
[[def-gr-observer-relative-energy-and-momentum]]. Then:

1. **Master identity.** $E^2=c^2\bigl(g_p(q,q)-g_p(P,P)\bigr)$.
2. **Positivity.** If $P$ is nonzero future causal, then $E>0$.
3. **Mass shell.** If $P$ is future timelike, then $m>0$ and, with
   $U:=P/m$, $u:=U/c$ and $\gamma:=-g_p(n,u)$, one has $\gamma\ge1$,
   $E=mc^2\gamma$, $q=m\gamma w$ where $w:=c\,h_n(u)/\gamma$,
   $g_p(q,q)=m^2c^2(\gamma^2-1)$ and

   $$E^2=m^2c^4+c^2g_p(q,q).$$
4. **Null case.** If $P$ is future null and nonzero, then $E>0$,
   $E=c\sqrt{g_p(q,q)}$ and $E^2=c^2g_p(q,q)$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p$, an observer $n$ at $p$, a real $c>0$, and $P\in T_pM$ with $E=E_n(P)$, $q=q_n(P)$, $m=m(P)$.

[L1] $E=-c\,g_p(P,n)$, $q=h_n(P)\in n^{\perp}$, and $P=(E/c)n+q$ ([[def-gr-observer-relative-energy-and-momentum]]).

[L2] $T_pM=\mathbb Rn\oplus n^{\perp}$ is an orthogonal direct sum with $g_p(n,n)=-1$, and $g_p$ is positive definite on $n^{\perp}$ ([[lem-gr-observer-projection-decomposition]]).

[L3] If $z$ is nonzero future causal then $-g_p(n,z)>0$; if $z$ is unit timelike then $\gamma_z:=-g_p(n,z)\ge1$ ([[lem-gr-observer-pairing-with-future-causal-vectors]]).

[L4] For future unit timelike $u$, with $\gamma=-g_p(n,u)$ and $w=c\,h_n(u)/\gamma$, one has $u=\gamma(n+w/c)$ and $g_p(w,w)=c^2(1-\gamma^{-2})$ ([[thm-gr-observer-relative-velocity-decomposition]]).

[L5] A vector is timelike, null or spacelike according to the sign of $g_p(P,P)$, with the null case excluding $P=0$ ([[def-causal-classification-of-lorentz-vectors]]), and a positive multiple of a future-directed vector is future-directed ([[def-gr-smooth-lorentzian-objects]]).

[L6] For $a\ge0$ the nonnegative real $\sqrt a$ satisfies $\sqrt a\ge0$ and $(\sqrt a)^2=a$, and $\sqrt a>0$ for $a>0$ ([[def-rational-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $P=(E/c)n+q$ with $q\in n^{\perp}$; since $g_p(n,q)=0$ and $g_p(n,n)=-1$ by [L2], bilinearity gives $g_p(P,P)=(E/c)^2g_p(n,n)+2(E/c)g_p(n,q)+g_p(q,q)=-(E/c)^2+g_p(q,q)$. Multiplying by $c^2$ gives $E^2=c^2(g_p(q,q)-g_p(P,P))$, the master identity of claim 1. [L1, L2, algebra]

1.2 If $P$ is nonzero future causal, then $-g_p(n,P)>0$ by [L3], so $E=-c\,g_p(P,n)=c\,(-g_p(n,P))>0$ because $c>0$. This proves claim 2. [L1, L3, algebra]

1.3 Let $P$ be future timelike; then $g_p(P,P)=-m^2c^2$ with $m>0$. The vector $u=U/c=P/(mc)$ satisfies $g_p(u,u)=g_p(P,P)/(m^2c^2)=-1$, so $u$ is unit timelike, and it is future-directed as a positive multiple of $P$ by [L5]; hence $\gamma:=-g_p(n,u)\ge1$ by [L3] and $u=\gamma(n+w/c)$ with $w=c\,h_n(u)/\gamma$ and $g_p(w,w)=c^2(1-\gamma^{-2})$ by [L4]. [L1, L3, L4, L5, algebra]

2.1 With $u=P/(mc)$, the definitions give $E=-c\,g_p(P,n)=-c\,g_p(mcu,n)=-mc^2g_p(u,n)=mc^2\gamma$. Moreover $q=h_n(P)=h_n(mcu)=mc\,h_n(u)=mc\,(\gamma w/c)=m\gamma w$ by linearity of $h_n$ [L2] and [L4], so $g_p(q,q)=m^2\gamma^2g_p(w,w)=m^2\gamma^2c^2(1-\gamma^{-2})=m^2c^2(\gamma^2-1)$. [step 1.3, L1, L2, L4, algebra]

2.2 Let $P$ be future null and nonzero; then $g_p(P,P)=0$ by [L5], so the master identity gives $E^2=c^2g_p(q,q)$ with $g_p(q,q)\ge0$ by [L2]. By claim 2, $E>0$; hence $E=c\sqrt{g_p(q,q)}$ by [L6] and $c>0$. This proves claim 4. [step 1.1, step 1.2, L2, L5, L6, algebra]

3.1 Substituting $g_p(P,P)=-m^2c^2$ and $g_p(q,q)=m^2c^2(\gamma^2-1)$ of step 2.1 into the master identity gives $E^2=c^2\bigl(m^2c^2(\gamma^2-1)+m^2c^2\bigr)=m^2c^4\gamma^2=m^2c^4+c^2g_p(q,q)$, the mass shell. This proves claim 3. [step 1.1, step 1.3, step 2.1, L1, algebra]

4.1 Claims 1-4 are steps 1.1, 1.2, 3.1 and 2.2. [step 1.1, step 1.2, step 3.1, step 2.2] ∎

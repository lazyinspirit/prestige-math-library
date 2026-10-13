---
id: lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors
kind: lemma
title: "The reversed Cauchy-Schwarz inequality for future timelike vectors"
status: published
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, lem-lorentz-form-has-orthonormal-basis, def-inertial-frame-and-inertial-chart, lem-future-oriented-inertial-frames-exist, def-spatial-euclidean-structure-of-an-inertial-frame, thm-cauchy-schwarz-finite, thm-of-square-roots, lem-of-square-monotone, def-rational-power, lem-of-sign-rules, lem-of-add-order, def-ordered-field]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-rational-power: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  lem-of-add-order: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): sections 1.3.3 'The gamma factor' pp. 25-27 and 1.5 'Triangle and Cauchy-Schwarz inequalities' pp. 36-37; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 6
aliases: []
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space and
let $v,w\in V$ be future timelike vectors. Put
$a:=\sqrt{-\eta(v,v)}>0$ and $b:=\sqrt{-\eta(w,w)}>0$, the timelike lengths of
$v$ and $w$. Then:

**(i)** $-\eta(v,w)\ge ab>0$.

**(ii)** Equality $-\eta(v,w)=ab$ holds if and only if $v$ and $w$ are
positive proportional, that is $w=tv$ for some real $t>0$, or $v=tw$ for some
real $t>0$.

**(iii)** Consequently $-\eta(v,w)>ab$ whenever $v$ and $w$ are not positive
proportional, and $\eta(v,w)<0$ in every case.

**(iv)** For two past timelike vectors $v,w$ the same inequality
$-\eta(v,w)\ge\sqrt{-\eta(v,v)}\,\sqrt{-\eta(w,w)}$ holds, with equality if and
only if they are positive proportional, because $-v$ and $-w$ are future
timelike and $\eta(-v,-w)=\eta(v,w)$.

The statement uses only $\eta$ and the future cone $C^+$ and involves no chart,
frame or choice principle.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and future timelike vectors $v,w\in V$, with $a:=\sqrt{-\eta(v,v)}>0$ and $b:=\sqrt{-\eta(w,w)}>0$.

[F1] Inertial frames and charts: at every event $o\in A$ there is an inertial frame $(o;e_0,e_1,e_2,e_3)$; its ordered basis is $\eta$-orthonormal with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, its first vector $e_0$ lies in $C^+$, and $E(u):=\sum_a u^ae_a$ is a linear isomorphism $E:\mathbb{R}^4\to V$, so every vector $u\in V$ has unique coordinates $u=u^0e_0+u_s$ with $u_s=u^1e_1+u^2e_2+u^3e_3$ ([[lem-future-oriented-inertial-frames-exist]], [[def-inertial-frame-and-inertial-chart]]).

[F2] Cone coordinates: in an $\eta$-orthonormal basis whose first vector is timelike the timelike set is the disjoint union $T=T_+\cup T_-$ with $T_+=\{u:u^0>|u_s|\}$ and $T_-=\{u:u^0<-|u_s|\}$, and $T_+$, $T_-$ are exactly the two connected components of $T$; the time orientation selects one component $C^+$ and $C^-:=T\setminus C^+$ is the other, so with the basis of [F1], where $e_0\in C^+$, one has $C^+=T_+$ and $C^-=T_-=-C^+$; hence $u$ is future timelike if and only if $u^0>|u_s|$, and $u$ is past timelike if and only if $-u$ is future timelike ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]]).

[F3] Spatial and bilinear structure: for a frame of [F1], the spatial three-space $S:=\operatorname{span}(e_1,e_2,e_3)=\{z\in V:\eta(e_0,z)=0\}$ carries the restriction $\delta:=\eta|_S$, which is positive definite, and $|z|:=\sqrt{\delta(z,z)}$ is a norm on $S$ with $(e_1,e_2,e_3)$ a $\delta$-orthonormal basis; since $\eta$ is bilinear, for all $u=u^0e_0+u_s$ and $u'=u'^0e_0+u'_s$ one has $\eta(u,u')=-u^0u'^0+\delta(u_s,u'_s)$, and in particular $\eta(u,u)=-(u^0)^2+|u_s|^2$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-lorentz-form-and-inertia]]).

[L4] Finite Cauchy-Schwarz inequality: for reals $a_0,\dots,a_{n-1}$ and $b_0,\dots,b_{n-1}$ one has $\big(\sum_{k<n}a_kb_k\big)^2\le\big(\sum_{k<n}a_k^2\big)\big(\sum_{k<n}b_k^2\big)$ and $\big|\sum_{k<n}a_kb_k\big|\le\sqrt{\sum_{k<n}a_k^2}\,\sqrt{\sum_{k<n}b_k^2}$; equality holds in the first display if and only if the two lists are proportional in the sense that there is a pair $(\lambda,\mu)\neq(0,0)$ of reals with $\lambda a_k=\mu b_k$ for every $k<n$ ([[thm-cauchy-schwarz-finite]]).

[L5] Square roots and monotonicity of squaring: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$ ([[thm-of-square-roots]]); for $x,y\ge0$ one has $x\le y\iff x^2\le y^2$ and $x<y\iff x^2<y^2$ ([[lem-of-square-monotone]]); for $c>0$ the root notation is the rational power $c^{1/2}$ ([[def-rational-power]]).

[L6] Order arithmetic of $\mathbb{R}$: a product of two positive reals is positive and a product of a positive and a negative real is negative ([[lem-of-sign-rules]]); inequalities may be added, and a constant may be added to both sides of an inequality ([[lem-of-add-order]]); and for reals $x,y$ exactly one of $x<y$, $x=y$, $x>y$ holds, a product of reals vanishes only if a factor vanishes, and $x\ge0$ means $x>0$ or $x=0$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Fix an event $o\in A$ and an inertial frame $(o;e_0,e_1,e_2,e_3)$ with its basis and chart, and write $v=v^0e_0+v_s$, $w=w^0e_0+w_s$ with spatial parts $v_s,w_s\in S$; the coordinates are unique by [F1] and the spatial parts lie in $S$ by the definition of $S$ in [F3]. [given, F1, F3, choose]

2.1 Since $v$ and $w$ are future timelike, [F2] gives $v^0>|v_s|$ and $w^0>|w_s|$; as $|v_s|,|w_s|\ge0$ by [F3], this yields $v^0>0$, $w^0>0$, and by strict monotonicity of squaring on the nonnegatives $(v^0)^2>|v_s|^2$ and $(w^0)^2>|w_s|^2$, so $a^2=(v^0)^2-|v_s|^2>0$ and $b^2=(w^0)^2-|w_s|^2>0$, whence $a=\sqrt{(v^0)^2-|v_s|^2}>0$ and $b=\sqrt{(w^0)^2-|w_s|^2}>0$ by uniqueness of the nonnegative root. [step 1.1, F2, F3, L5, L6]

2.2 By bilinearity [F3], $-\eta(v,w)=v^0w^0-\delta(v_s,w_s)$; applying the finite Cauchy-Schwarz inequality [L4] to the coordinates of $v_s$ and $w_s$ in the $\delta$-orthonormal basis $(e_1,e_2,e_3)$ gives $|\delta(v_s,w_s)|\le|v_s|\,|w_s|$, hence $\delta(v_s,w_s)\le|v_s|\,|w_s|$ and $-\eta(v,w)\ge x$ for $x:=v^0w^0-|v_s|\,|w_s|$. [step 1.1, F3, L4, algebra]

3.1 The algebraic identity $x^2-\big((v^0)^2-|v_s|^2\big)\big((w^0)^2-|w_s|^2\big)=\big(v^0|w_s|-w^0|v_s|\big)^2\ge0$ holds by expansion, so $x^2\ge a^2b^2$; moreover $x=w^0\,(v^0-|v_s|)+|v_s|\,(w^0-|w_s|)$ is a sum of a positive real and a nonnegative real, so $x>0$ and in particular $x\ge0$. [step 2.1, L6, algebra]

4.1 Since $x\ge0$ and $ab>0$ with $x^2\ge(ab)^2$, monotonicity of squaring on the nonnegatives [L5] gives $x\ge ab$, and with step 2.2 this yields $-\eta(v,w)\ge ab>0$, which is (i); equivalently $\eta(v,w)\le-ab<0$. [step 2.1, step 2.2, step 3.1, L5, L6]

5.1 Assume now $-\eta(v,w)=ab$. Then the chain $ab=-\eta(v,w)\ge x\ge ab$ of steps 2.2 and 4.1 is equality at both places, so $\delta(v_s,w_s)=|v_s|\,|w_s|$, and from $x=ab$ and the identity of step 3.1 we get $\big(v^0|w_s|-w^0|v_s|\big)^2=x^2-(ab)^2=0$, that is $v^0|w_s|=w^0|v_s|$. [step 2.2, step 3.1, step 4.1, algebra]

6.1 Case $v_s=0$: then $v^0|w_s|=w^0|v_s|=0$ by step 5.1, and $v^0>0$, so $|w_s|=0$ and hence $w_s=0$; therefore $v=v^0e_0$ and $w=w^0e_0$ with $v^0,w^0>0$, and $v=(v^0/w^0)w$ exhibits $v$ as a positive multiple of $w$. [step 2.1, step 5.1, L6]

6.2 Case $w_s=0$: symmetrically $w^0|v_s|=v^0|w_s|=0$ with $w^0>0$ gives $v_s=0$, and $v^0>0$ gives $w=(w^0/v^0)v$, so $w$ is a positive multiple of $v$. [step 2.1, step 5.1, L6]

6.3 Case $v_s\neq0$ and $w_s\neq0$: the equality $\delta(v_s,w_s)=|v_s|\,|w_s|>0$ of step 5.1 is the equality case of the finite Cauchy-Schwarz inequality [L4] for two nonzero lists, so there are reals $(\lambda,\mu)\neq(0,0)$ with $\lambda v_s=\mu w_s$; here $\lambda\neq0$ (otherwise $w_s=0$) and $\mu\neq0$ (otherwise $v_s=0$), so $v_s=cw_s$ with $c:=\mu/\lambda$, and then $\delta(v_s,w_s)=c\,|w_s|^2$ while $|v_s|=|c|\,|w_s|$, so $c\,|w_s|^2=|c|\,|w_s|^2$ with $|w_s|^2=\delta(w_s,w_s)>0$; hence $c=|c|\ge0$, and $c>0$ because $c\,|w_s|^2=|v_s|\,|w_s|>0$; finally $v^0|w_s|=w^0|v_s|=w^0c|w_s|$ with $|w_s|>0$ gives $v^0=cw^0$, so $v=v^0e_0+cw_s=c\,(w^0e_0+w_s)=cw$ with $c>0$. [step 5.1, L4, L5, L6, algebra]

7.1 The three cases of steps 6.1-6.3 exhaust the possibilities, so equality $-\eta(v,w)=ab$ forces $v$ and $w$ to be positive proportional; this is the forward implication of (ii). [step 6.1, step 6.2, step 6.3]

8.1 Conversely, if $v=tw$ with $t>0$, then bilinearity gives $-\eta(v,w)=-t\,\eta(w,w)=tb^2$ and $-\eta(v,v)=-t^2\eta(w,w)=t^2b^2$, so $a=tb$ by uniqueness of the nonnegative square root, whence $-\eta(v,w)=tb\cdot b=ab$; the case $w=tv$ is identical, and together with step 7.1 this proves (ii). [step 2.1, F3, L5, algebra]

9.1 For (iii): if $v$ and $w$ are not positive proportional then equality fails by (ii), so $-\eta(v,w)>ab$ by step 4.1, while $\eta(v,w)<0$ holds in every case again by step 4.1. [step 4.1, step 7.1, step 8.1]

10.1 For (iv): if $v,w$ are past timelike then $-v,-w$ are future timelike by [F2], with $-\eta(-v,-v)=-\eta(v,v)$, $-\eta(-w,-w)=-\eta(w,w)$ and $\eta(-v,-w)=\eta(v,w)$ by bilinearity [F3]; steps 4.1, 7.1 and 8.1 applied to $-v,-w$ therefore give $-\eta(v,w)=-\eta(-v,-w)\ge ab$, with equality exactly when $-v,-w$ are positive proportional, that is exactly when $v,w$ are positive proportional. [step 4.1, step 7.1, step 8.1, F2, F3] ∎

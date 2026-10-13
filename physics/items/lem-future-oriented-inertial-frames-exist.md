---
id: lem-future-oriented-inertial-frames-exist
kind: lemma
title: "Existence of future-oriented inertial frames at every event"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [lem-lorentz-form-has-orthonormal-basis, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-orientation-of-a-finite-dimensional-real-vector-space, thm-determinant-sign-detects-orientation-change, def-lorentz-form-and-inertia, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  thm-determinant-sign-detects-orientation-change: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

In every oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and for
every event $o\in A$ there exists an inertial frame with origin $o$; consequently
inertial charts are defined at every event. Explicitly: start from any
$\eta$-orthonormal ordered basis $(f_0,f_1,f_2,f_3)$ of $V$; if $f_0$ is not in
$C^+$ then replacing $f_0$ by $-f_0$ makes the first vector future, because the
timelike set is the disjoint union of $C^+$ and $C^-$ and
$\eta(-f_0,-f_0)=\eta(f_0,f_0)$; the resulting ordered basis has some orientation
class, and if that class is not the positive class selected by the fixed
orientation of $V$, then replacing $e_1$ by $-e_1$ (or interchanging $e_1$ and
$e_2$) produces a positively oriented ordered basis, without destroying
$\eta$-orthonormality and without changing the first, future vector.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and
an event $o\in A$.

[L1] There is an ordered basis $(f_0,f_1,f_2,f_3)$ of $V$ with
$\eta(f_a,f_b)=\operatorname{diag}(-1,1,1,1)_{ab}$
([[lem-lorentz-form-has-orthonormal-basis]]).

[L2] The timelike set $T$ is the disjoint union $T=C^+\sqcup C^-$, and a vector
is future timelike exactly when it lies in $C^+$
([[def-time-orientation-and-future-causal-sets]]).

[L3] For a finite-dimensional real vector space of dimension at least $1$ there
are exactly two orientations, described as equivalence classes of ordered bases
under the relation $\det P>0$; a basis in the chosen class is positively
oriented ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[L4] An inertial frame is a tuple $(o;e_0,e_1,e_2,e_3)$ with $o\in A$ and an
ordered basis that is $\eta$-orthonormal, future and positively oriented
([[def-inertial-frame-and-inertial-chart]]).

[L5] If $T:V\to V$ is a linear isomorphism of an oriented real vector space with
$\dim V=n\ge1$, then $\det T>0$ means that $T$ carries every positively oriented
basis to a positively oriented basis, and $\det T<0$ means that it carries every
positively oriented basis to a negatively oriented one; the sign of $\det T$ is
exactly whether $T$ preserves or reverses the orientation
([[thm-determinant-sign-detects-orientation-change]]).

[L6] $\eta$ is a symmetric bilinear form, so
$\eta(-u,-w)=\eta(u,w)$ and $\eta(-u,w)=-\eta(u,w)$ for all $u,w\in V$
([[def-lorentz-form-and-inertia]]).

[L7] The two components $C^+$ and $C^-$ of the timelike set are convex and
satisfy $T=C^+\sqcup C^-$ and $0\notin T$
([[lem-timelike-cone-has-two-convex-components]]).

## Proof

1.1 By [L1] choose an $\eta$-orthonormal ordered basis $(f_0,f_1,f_2,f_3)$ of $V$. [L1, choose]

2.1 By [L6], $\eta(-f_0,-f_0)=\eta(f_0,f_0)=-1<0$, so both $f_0$ and $-f_0$ lie in the timelike set $T$; by [L2] the set $T$ is the disjoint union of $C^+$ and $C^-$, so exactly one of $f_0$, $-f_0$ lies in $C^+$: if both lay in the same component, its convexity [L7] would put $0=\tfrac12f_0+\tfrac12(-f_0)$ in that component, contradicting $0\notin T$, and if one lay in each component then $-f_0$ is the required future vector. Define $g_0:=f_0$ if $f_0\in C^+$ and $g_0:=-f_0$ otherwise, and $g_i:=f_i$ for $i=1,2,3$. Then $g_0\in C^+$, and $(g_0,g_1,g_2,g_3)$ is $\eta$-orthonormal: $g_0$ contributes $\eta(g_0,g_0)=\eta(f_0,f_0)=-1$ by [L6], the remaining diagonal entries are $\eta(f_i,f_i)=1$, and each off-diagonal entry is either $\eta(f_a,f_b)=0$ or $-\eta(f_a,f_b)=0$. [step 1.1, L1, L2, L6, L7, algebra]

3.1 By [L3] the basis $(g_0,g_1,g_2,g_3)$ lies in exactly one of the two orientation classes of $V$: either it is positively oriented or it is not. [step 2.1, L3]

4.1 Suppose first that $(g_0,g_1,g_2,g_3)$ is positively oriented. Then $(o;g_0,g_1,g_2,g_3)$ is $\eta$-orthonormal, its first vector is future, and its basis is positively oriented, so it is an inertial frame with origin $o$ by [L4]. [step 2.1, step 3.1, L4]

4.2 Suppose instead that $(g_0,g_1,g_2,g_3)$ is not positively oriented. Put $e_0:=g_0$, $e_1:=-g_1$, $e_2:=g_2$, $e_3:=g_3$. Orthonormality is preserved exactly as in step 2.1, and $e_0=g_0\in C^+$ is still future. The change-of-basis linear map carrying $(g_0,g_1,g_2,g_3)$ to $(e_0,e_1,e_2,e_3)$ has matrix $\operatorname{diag}(1,-1,1,1)$, of determinant $-1$; by [L5] it carries the positive class onto the negative class, and since it is a bijection of the set of ordered bases and there are exactly two classes by [L3], it carries the negative class, in which $(g_a)$ lies, onto the positive class; hence $(e_0,e_1,e_2,e_3)$ is positively oriented. Therefore $(o;e_0,e_1,e_2,e_3)$ is an inertial frame with origin $o$ by [L4]. (Interchanging the two basis vectors $g_1,g_2$ would also reverse the orientation and preserve orthonormality and the first vector.) [step 2.1, step 3.1, L3, L5, L6, algebra]

5.1 In either case an inertial frame with origin $o$ exists. The origin is arbitrary in $A$, so taking $o$ any event gives an inertial frame at that event, and the construction uses at most the replacement of $f_0$ by $-f_0$ and one further reversal of orientation; both operations preserve $\eta$-orthonormality and the future character of the first vector. [step 4.1, step 4.2, L4] ∎

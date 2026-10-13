---
id: lem-sr-finite-future-causal-sums
kind: lemma
title: "Finite sums of future causal vectors and additivity of observer energy and momentum"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - def-sr-total-four-momentum-and-invariant-mass
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-causal-classification-of-lorentz-vectors
  - def-lorentz-form-and-inertia
  - def-finite-sum-in-a-commutative-monoid
  - thm-induction-principle
  - thm-sr-proper-time-and-observer-decomposition
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - thm-cauchy-schwarz-finite
  - def-linear-map
  - lem-lorentz-form-has-orthonormal-basis
  - lem-future-oriented-inertial-frames-exist
  - def-sr-affine-minkowski-model
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  thm-induction-principle: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-linear-map: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 14
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (two future-directed timelike momentum vectors and the reversed triangle equality M >= m1 + m2)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 30 (local stress-energy conservation, contextual only; finite collision balance is separately adopted)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]) and $c>0$.

**(a)** If $v,w\in\mathrm{cl}(C^+)$, then $v+w\in\mathrm{cl}(C^+)$; if in
addition $v\in C^+$ or $w\in C^+$, then $v+w\in C^+$. Moreover
$-\eta(v,w)\ge0$ for $v,w\in\mathrm{cl}(C^+)$, with equality if and only if
$v=0$, or $w=0$, or both $v$ and $w$ are nonzero future null and
$w=\lambda v$ for some $\lambda>0$.

**(b)** If $P_1,\dots,P_N$ with $N\ge1$ are nonzero future causal vectors,
then $P_{\mathrm{tot}}=\sum_{i=1}^{N}P_i$
([[def-sr-total-four-momentum-and-invariant-mass]]\,(a)) is a nonzero future
causal vector; if at least one $P_i$ is future timelike, then
$P_{\mathrm{tot}}$ is future timelike. The converse implication does not
hold: two future null vectors that are not parallel have a future timelike
sum.

**(c)** For every future unit $n$ ([[def-lorentz-form-and-inertia]]) and all
$P_1,\dots,P_N\in\mathrm{cl}(C^+)$,

$$E_n\Bigl(\sum_{i=1}^{N}P_i\Bigr)=\sum_{i=1}^{N}E_n(P_i),\qquad q_n\Bigl(\sum_{i=1}^{N}P_i\Bigr)=\sum_{i=1}^{N}q_n(P_i),$$

where $E_n,q_n$ are the observer quantities of
[[def-sr-observed-energy-momentum-and-kinetic-energy]]; if the $P_i$ are
nonzero future causal, then $E_n(P_{\mathrm{tot}})>0$.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; vectors $v,w\in\mathrm{cl}(C^+)$ for (a); nonzero future causal $P_1,\dots,P_N\in\mathrm{cl}(C^+)$, $N\ge1$, for (b) and (c); a future unit $n$ for (c).

[F1] ([[lem-timelike-cone-has-two-convex-components]], Statement): in an $\eta$-orthonormal ordered basis whose first vector is timelike, writing $v=v^0e_0+v_s$ with $v_s\in S=\mathrm{span}(e_1,e_2,e_3)$ and $|v_s|=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$, one has $\eta(v,v)=-(v^0)^2+|v_s|^2$, and the timelike set is the disjoint union of the convex cones $T_+=\{v:v^0>|v_s|\}$ and $T_-=\{v:v^0<-|v_s|\}$; the time orientation names $C^+$ as one of $T_\pm$, so $\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$ for the appropriate naming, and the two closed cones meet only at $0$.

[F2] ([[def-time-orientation-and-future-causal-sets]], Statement): the closed cones $\mathrm{cl}(C^+)$ and $\mathrm{cl}(C^-)$ are convex cones meeting only at $0$, a causal vector is future or past but not both, and a nonzero vector has exactly one causal character.

[F3] ([[def-causal-classification-of-lorentz-vectors]], Definition): $v$ is timelike when $\eta(v,v)<0$, null when $v\ne0$ and $\eta(v,v)=0$, spacelike when $\eta(v,v)>0$, and causal when it is timelike or null.

[F4] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is symmetric and bilinear, so $\eta(v+w,v+w)=\eta(v,v)+2\eta(v,w)+\eta(w,w)$ and $\eta(\lambda v,w)=\lambda\eta(v,w)$ for real $\lambda$.

[F5] ([[thm-cauchy-schwarz-finite]], Statement): for real $a_i,b_i$, $|\sum_{i=1}^3a_ib_i|\le(\sum_{i=1}^3a_i^2)^{1/2}(\sum_{i=1}^3b_i^2)^{1/2}$, with $(\sum_{i=1}^3a_ib_i)^2=(\sum_{i=1}^3a_i^2)(\sum_{i=1}^3b_i^2)$ if and only if the two lists are proportional, that is there is a pair $(\lambda,\mu)\ne(0,0)$ of reals with $\lambda a_i=\mu b_i$ for every $i$; consequently $|v_s+w_s|\le|v_s|+|w_s|$ for the Euclidean norm on $S$.

[F6] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): $E_n(P)=-c\,\eta(P,n)$ and $q_n(P)=h(P)$, the restrictions to $\mathrm{cl}(C^+)$ of a linear map and of $h$, for $P\in\mathrm{cl}(C^+)$.

[F7] ([[thm-sr-proper-time-and-observer-decomposition]], clause (c)): $h$ is linear with image $n^\perp$ and kernel $\mathrm{span}(n)$.

[F8] ([[lem-sr-energy-momentum-observer-identities]], Statement (a)): if $P$ is nonzero future causal and $n$ is future unit, then $E_n(P)>0$.

[F9] ([[def-finite-sum-in-a-commutative-monoid]]) and ([[thm-induction-principle]]): the finite sum $\sum_{i=1}^{N}P_i$ of the abelian group $(V,+)$ is defined by recursion, so $\sum_{i=1}^{N}P_i=\sum_{i=1}^{N-1}P_i+P_N$, and a statement about all $N\ge1$ follows from the base case $N=1$ and the induction step.

[F10] ([[lem-lorentz-form-has-orthonormal-basis]] and [[lem-future-oriented-inertial-frames-exist]]): there is an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with $e_0\in C^+$.

## Proof

**Proof technique:** fix an orthonormal basis with future first vector, prove the two pointwise inequalities by Cauchy-Schwarz, then close (b) by induction and (c) by linearity.

1.1 Choose by [F10] an $\eta$-orthonormal basis with $e_0\in C^+$, so that $C^+$ is the set $T_+$ of [F1] and $\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$. For $v,w\in\mathrm{cl}(C^+)$ one has $v^0\ge|v_s|\ge0$ and $w^0\ge|w_s|\ge0$, hence $v^0w^0\ge|v_s||w_s|$ and, by [F5], $v_s\cdot w_s\le|v_s||w_s|$; therefore $-\eta(v,w)=v^0w^0-v_s\cdot w_s\ge|v_s||w_s|-v_s\cdot w_s\ge0$ by [F4]. If $v=0$ or $w=0$ equality is clear. Conversely, suppose $v,w\ne0$ and $-\eta(v,w)=0$; then both inequalities above are equalities, so $v^0w^0=|v_s||w_s|$ and $v_s\cdot w_s=|v_s||w_s|$. Equality in Cauchy-Schwarz [F5] makes $v_s,w_s$ collinear with a nonnegative factor, and since $v^0w^0=|v_s||w_s|$ with $v^0\ge|v_s|$, $w^0\ge|w_s|$ and $v^0,w^0>0$, one gets $v^0=|v_s|$ and $w^0=|w_s|$; hence $v$ and $w$ are future null, $w_s=\mu v_s$ with $\mu=|w_s|/|v_s|>0$, and $w=\mu v$. Thus equality holds exactly in the three cases listed in (a). [F1, F4, F5, F10]

1.2 Under the same choice of basis, for $v,w\in\mathrm{cl}(C^+)$ the first coordinate of $v+w$ satisfies $(v+w)^0=v^0+w^0\ge|v_s|+|w_s|\ge|(v+w)_s|$ by [F5], so $v+w\in\mathrm{cl}(C^+)$; if $v\in C^+$ then $v^0>|v_s|$ and the first inequality is strict, giving $(v+w)^0>|(v+w)_s|$, that is $v+w\in C^+$, and symmetrically for $w\in C^+$. [F1, F5, F10]

1.3 By [F9] the finite sums of (b) and (c) are defined recursively with $\sum_{i=1}^{N}P_i=\sum_{i=1}^{N-1}P_i+P_N$ for $N\ge2$, so a claim for all $N\ge1$ may be proved by induction on $N$ with base case $N=1$ and the recursive step. [F9]

1.4 Base case of the induction for (b): for $N=1$ one has $P_{\mathrm{tot}}=P_1\ne0$ by hypothesis, $P_1$ is future causal, and $P_{\mathrm{tot}}$ is future timelike if $P_1$ is; the assertion of (b) therefore holds for $N=1$. [F2, F3, base]

2.1 Inductive step for (b): assume as induction hypothesis that for every list of $N-1\ge1$ nonzero future causal vectors the sum is nonzero future causal, and future timelike if at least one entry is; given nonzero future causal $P_1,\dots,P_N$, put $S:=\sum_{i=1}^{N-1}P_i$ with $N\ge2$, so $S\ne0$ is future causal and future timelike if some $P_i$, $i<N$, is timelike. By [step 1.2] applied to $S$ and $P_N$, $P_{\mathrm{tot}}=S+P_N\in\mathrm{cl}(C^+)$, and $P_{\mathrm{tot}}\in C^+$ if $S\in C^+$ or $P_N\in C^+$. If $P_{\mathrm{tot}}$ were $0$, then $S=-P_N\in-\mathrm{cl}(C^+)$ while $S\in\mathrm{cl}(C^+)$, so [F2] gives $S=0$, contradicting $S\ne0$; hence $P_{\mathrm{tot}}\ne0$. This proves the assertion for lists of length $N$, and [F9]'s induction principle closes the proof of (b) except its final sentence. [F2, F9, step 1.2, ih]

2.2 For any two nonparallel future null vectors $P_1,P_2$, step 1.1 gives $\eta(P_1,P_2)<0$. Hence $\eta(P_1+P_2,P_1+P_2)=2\eta(P_1,P_2)<0$ by [F4], and their sum is future by step 1.2, so it is future timelike. Such pairs exist: in the basis of step 1.1 take $P_1=e_0+e_1$ and $P_2=e_0+e_2$. Their coordinates show that they are future null and nonparallel by [F1] and [F3], while $\eta(P_1+P_2,P_1+P_2)=-2$. This proves the final sentence of (b) and witnesses the failure of the converse. [F1, F3, F4, step 1.1, step 1.2]

3.1 Prove (c): by [F6] and [F7], $E_n$ and $q_n$ agree on $\mathrm{cl}(C^+)$ with linear maps into $\mathbb R$ and $n^\perp$, so additivity over the recursive sums [step 1.3] gives $E_n(\sum_{i=1}^{N}P_i)=\sum_{i=1}^{N}E_n(P_i)$ and $q_n(\sum_{i=1}^{N}P_i)=\sum_{i=1}^{N}q_n(P_i)$ for all $P_i\in\mathrm{cl}(C^+)$, again by induction on $N$; if the $P_i$ are nonzero future causal, then [step 2.1] makes $P_{\mathrm{tot}}$ nonzero future causal and [F8] gives $E_n(P_{\mathrm{tot}})>0$. [F6, F7, F8, step 1.3, step 2.1]

4.1 Clause (a) is [step 1.1] together with [step 1.2], clause (b) is the induction of [step 1.4] and [step 2.1] together with the counterexample of [step 2.2], and clause (c) is [step 3.1]; hence all the assertions of the lemma hold, the induction hypothesis of [step 2.1] having been discharged by its proof of the successor case. [step 1.1, step 1.2, step 1.4, step 2.1, step 2.2, step 3.1, discharge-induction: step 2.1] ∎

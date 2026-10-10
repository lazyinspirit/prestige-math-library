---
id: ex-sr-constructing-an-oriented-inertial-frame
kind: example
title: "Worked construction of a future-oriented inertial frame from an arbitrary orthonormal basis"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-lorentz-form-has-orthonormal-basis, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart, lem-future-oriented-inertial-frames-exist, def-lorentz-form-and-inertia, def-orientation-of-a-finite-dimensional-real-vector-space, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
---

## Example

Worked example of the sign and orientation adjustments. Let
$(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space, fix any
origin $o\in A$, and let
$(f_0,f_1,f_2,f_3)$ be any $\eta$-orthonormal ordered basis of $V$. Its first
vector is timelike. Set $g_0:=f_0$ if $f_0\in C^+$ and $g_0:=-f_0$ if
$f_0\in C^-$, and set $g_i:=f_i$ for $i=1,2,3$. This makes $g_0$ future while
preserving orthonormality. The time-axis reversal, when needed, has
change-of-basis matrix $\operatorname{diag}(-1,1,1,1)$ and determinant $-1$,
so it flips the orientation class; retaining $f_0$ leaves that class unchanged.

If $(g_0,g_1,g_2,g_3)$ is positively oriented, retain it. Otherwise replace
$g_1$ by $-g_1$ (or interchange $g_1$ and $g_2$); this flips the orientation
class, preserves orthonormality and leaves the future vector $g_0$ unchanged.
Together with $o$, the resulting basis is an inertial frame. In particular, a
past-directed, negatively oriented starting basis needs only the time-axis
reversal, giving $(o;-f_0,f_1,f_2,f_3)$. This is the explicit construction of
[[lem-future-oriented-inertial-frames-exist]].

**Two-dimensional illustration.** In the two-dimensional analogue with
$A=V=\mathbb R^2$ with its translation action, $o=(0,0)$,
$\eta(v,w)=-v^0w^0+v^1w^1$, standard orientation (a basis is positive when
its coordinate determinant is positive), and future timelike set
$C^+=\{v:v^0>|v^1|\}$, take
$f_0=(-1,0)$ (past timelike) and $f_1=(0,1)$ (spacelike). Then
$-f_0=(1,0)$ satisfies $\eta(-f_0,-f_0)=-1$, $\eta(f_1,f_1)=+1$ and
$\eta(-f_0,f_1)=0$, and $-f_0$ is future; so $(-f_0,f_1)$ is an
$\eta$-orthonormal basis with future first vector, and the change of basis has
determinant $-1$. If the original pair was the negatively oriented one, the
pair $(-f_0,f_1)$ is positively oriented and is an inertial frame of the
two-dimensional analogue of the model.

## Facts & Assumptions

**Given:** An arbitrary $\eta$-orthonormal ordered basis $(f_0,f_1,f_2,f_3)$ in the oriented time-oriented affine Minkowski model, an origin $o\in A$, and the two-dimensional illustration of the Example.

[L1] An $\eta$-orthonormal ordered basis satisfies $\eta(f_a,f_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L2] The timelike set is the disjoint union $T=C^+\sqcup C^-$, and a vector in $C^+$ is future timelike while a vector in $C^-$ is past timelike ([[def-time-orientation-and-future-causal-sets]]); the components are convex, and in orthonormal coordinates whose time-axis basis vector is future, the future timelike vectors are exactly those with $v^0>\lvert v_{\mathrm{vec}}\rvert$ ([[lem-timelike-cone-has-two-convex-components]]).

[L3] $\eta$ is bilinear and symmetric, so $\eta(-u,-w)=\eta(u,w)$, $\eta(-u,w)=-\eta(u,w)$ ([[def-lorentz-form-and-inertia]]).

[L4] In a finite-dimensional real vector space of positive dimension, the change of basis between two ordered bases has $\det>0$ exactly when they lie in the same orientation class, and $\det<0$ exactly when they lie in different classes. There are exactly two such classes; an orientation chooses one as positive, and bases in the other are negatively oriented ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[L5] An inertial frame is a tuple with an $\eta$-orthonormal, future, positively oriented ordered basis, and such frames with arbitrary origin exist ([[def-inertial-frame-and-inertial-chart]], [[lem-future-oriented-inertial-frames-exist]]).

## Verification

**Proof technique:** direct sign computation.

1.1 By [L1] and [L3], $\eta(f_0,f_0)=\eta(-f_0,-f_0)=-1$, so $f_0,-f_0\in T$. They lie in opposite components: if both lay in the same component, its convexity [L2] would put $0=\tfrac12f_0+\tfrac12(-f_0)$ in $T$, contradicting $\eta(0,0)=0$. Thus $g_0:=f_0$ when $f_0\in C^+$ and $g_0:=-f_0$ otherwise is always future. Set $g_i:=f_i$ for $i=1,2,3$. Retaining $f_0$ retains the basis, while negating it preserves its norm and all vanishing off-diagonal pairings, since $\eta(-f_0,f_i)=-\eta(f_0,f_i)=0$; hence $(g_0,g_1,g_2,g_3)$ is $\eta$-orthonormal. Its change-of-basis matrix is the identity when $f_0$ is future and $\operatorname{diag}(-1,1,1,1)$ when $f_0$ is past. Their determinants are $1$ and $-1$, respectively, so [L4] shows that the orientation is retained in the first case and reversed in the second. In particular, past-directed negative input becomes future-directed positive input. [L1, L2, L3, L4, algebra]

1.2 In the two-dimensional illustration, $f_0=(-1,0)$ has $\eta(f_0,f_0)=-1<0$ and $f_0^0=-1<0$, so $f_0$ is past timelike by the explicit two-dimensional convention in the Example; $-f_0=(1,0)$ has $\eta(-f_0,-f_0)=-1$ by [L3], $(-f_0)^0=1>0=\lvert(-f_0)_{\mathrm{vec}}\rvert$, so $-f_0$ is future timelike by that same convention; and $\eta(-f_0,f_1)=0$, $\eta(f_1,f_1)=1$ are direct evaluations. Hence $(-f_0,f_1)$ is an $\eta$-orthonormal pair with future first vector and with change-of-basis determinant $-1$, so it is positively oriented exactly when the original pair was negatively oriented. [given, L3, L4, algebra]

2.1 If $(g_0,g_1,g_2,g_3)$ is positively oriented, retain it. Otherwise replacing $g_1$ by $-g_1$ preserves $\eta$-orthonormality by the sign computation of step 1.1, leaves the future first vector $g_0$ unchanged, and has change-of-basis matrix $\operatorname{diag}(1,-1,1,1)$ of determinant $-1$. There are exactly two orientation classes by [L4], so reversing the negative class gives the positive class. Interchanging $g_1$ and $g_2$ also has determinant $-1$ and preserves orthonormality and $g_0$, giving the same alternative correction. [step 1.1, L1, L3, L4, algebra]

3.1 In every initial time-orientation and orientation case, steps 1.1 and 2.1 produce an $\eta$-orthonormal, future, positively oriented ordered basis, which together with the chosen origin $o$ is an inertial frame by [L5]. Step 1.2 verifies the displayed two-dimensional illustration. Thus the recipe realizes the construction of [[lem-future-oriented-inertial-frames-exist]] from arbitrary orthonormal input, including the past-directed negative example. [step 1.1, step 1.2, step 2.1, L5, algebra] ∎

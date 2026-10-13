---
id: ex-sr-parallel-null-displacements-compose-to-null
kind: example
title: "Parallel future null displacements compose to a future null displacement"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-euclidean-inner-product, def-spatial-euclidean-structure-of-an-inertial-frame, cor-triangle-inequality-for-inner-product-norm]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
dependency_level: 10
aliases: []
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation in the chart $x$ of an inertial frame
([[def-inertial-frame-and-inertial-chart]]). Let $v:=(1,1,0,0)$ and
$w:=(2,2,0,0)$ be coordinate columns with respect to the basis of the frame.

**(a)** Both vectors are future null: $\eta(v,v)=-1+1=0$ and
$\eta(w,w)=-4+4=0$ with positive time components, and $w=2v$, so the two
directions are parallel ([[def-causal-classification-of-lorentz-vectors]]).

**(b)** The sum $v+w=(3,3,0,0)$ is again future null, since
$\eta(v+w,v+w)=-9+9=0$ and its time component is positive, and the endpoint
$q:=x^{-1}(3,3,0,0)$ lies in $J^+(p)$ for $p:=x^{-1}(0,0,0,0)$ but not in
$I^+(p)$, by the coordinate criterion
([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]],
[[def-sr-causal-reachability-in-affine-minkowski-space]]); the straight path
$s\mapsto p+s(q-p)$ has constant tangent $v+w$, so it is a straight future null
path from $p$ to $q$.

**(c)** This is the boundary case of the sum clause of the same lemma: for
nonzero future causal vectors $u$ and $z$ the sum $u+z$ is future causal, and it
is future null exactly when $u$ and $z$ are both future null and positive
multiples of one another, as here. By contrast the explicit nonparallel future
null pair $(1,1,0,0)$ and $(1,-1,0,0)$ has sum $(2,0,0,0)$, whose squared norm
is $-4$: the sum of two future null displacements is null only in the parallel
case.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, the vectors $v=(1,1,0,0)$ and $w=(2,2,0,0)$, the events $p=x^{-1}(0,0,0,0)$ and $q=x^{-1}(3,3,0,0)$, and the pair $u_0=(1,1,0,0)$, $z_0=(1,-1,0,0)$.

[L1] Coordinate criterion and cone description: for a vector $v=(v^0,v_s)$ with spatial norm $|v_s|$, $v\in\overline{C^+}$ iff $v^0\ge|v_s|$, $v\in C^+$ iff $v^0>|v_s|$, and $v$ is future null exactly when $|v_s|=v^0>0$; for events $r,s$ with $D=x(s)-x(r)$, $s\in J^+(r)$ iff $D^0\ge|D_s|$ and $s\in I^+(r)$ iff $D^0>|D_s|$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

[L2] Causal classification: $\eta(v,v)=-(v^0)^2+|v_s|^2$ in the inertial basis; $v$ is null exactly when $v\ne 0$ and $\eta(v,v)=0$, and timelike when $\eta(v,v)<0$ ([[def-causal-classification-of-lorentz-vectors]]); the sum of two elements of $\overline{C^+}$ lies in $\overline{C^+}$, and if one of them lies in $C^+$ the sum lies in $C^+$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

[L3] Euclidean structure: for spatial coordinate vectors $p,q$ the norm satisfies $|p|^2=\sum_i(p^i)^2$, $|p|=0$ implies $p=0$, the triangle inequality $|p+q|\le|p|+|q|$ holds, and $|p+q|^2=|p|^2+2p\cdot q+|q|^2$ with the Euclidean scalar product $p\cdot q$ ([[def-euclidean-inner-product]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[cor-triangle-inequality-for-inner-product-norm]]).

[L4] Chart linearity: coordinate differences of events are the coordinates of their displacement ([[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct.

1.1 The evaluations $\eta(v,v)=-1+1=0$, $\eta(w,w)=-4+4=0$ and the displayed $w=2v$ hold by the diagonal form of [L2]; both vectors are nonzero with positive time components, so [L1] makes them future null; this is (a). [given, L1, L2, algebra]

2.1 The sum is $v+w=(3,3,0,0)$ with $\eta(v+w,v+w)=-9+9=0$ and time component $3>0$, so it is future null by [L1]; by [L4] the displacement $q-p$ has coordinates $(3,3,0,0)$, so the criterion gives $3\ge 3$, that is $q\in J^+(p)$, while $3>3$ is false, that is $q\notin I^+(p)$. The straight path $s\mapsto p+s(q-p)$ has constant tangent $q-p$ with coordinates $v+w$, a future null vector, so it is a straight future null path from $p$ to $q$; this is (b). [given, step 1.1, L1, L2, L4, algebra]

2.2 For the characterization let $u=(a,p)$ and $z=(b,q)$ be nonzero future causal vectors written in the inertial basis, so that $a\ge|p|$, $b\ge|q|$ and $a,b>0$ because a future causal vector with vanishing time component has vanishing spatial part. If $u+z$ is null then $(a+b)^2=|p+q|^2$, so by [L3] $a+b=|p+q|\le|p|+|q|\le a+b$ and every inequality is an equality; in particular $|p|=a$, $|q|=b$ and $|p+q|=|p|+|q|$. Expanding with [L3], $|p+q|^2=|p|^2+2p\cdot q+|q|^2$ equals $(|p|+|q|)^2=|p|^2+2|p||q|+|q|^2$, hence $p\cdot q=|p||q|$; since $a=|p|>0$, the vector $q-\frac{b}{a}p$ has squared norm $|q|^2-2\frac{b}{a}p\cdot q+\frac{b^2}{a^2}|p|^2=b^2-2b^2+b^2=0$, so $q=\frac{b}{a}p$ by positive definiteness of the norm and $z=\frac{b}{a}u$ with $\frac{b}{a}>0$; moreover $u$ and $z$ are future null because $|p|=a$ and $|q|=b$ with $a,b>0$. Conversely, if $z=\lambda u$ with $\lambda>0$ and $u$ future null, then $u+z=(1+\lambda)u$ has $\eta((1+\lambda)u,(1+\lambda)u)=(1+\lambda)^2\eta(u,u)=0$ and positive time component, so it is future null; this proves the characterization of (c). [step 1.1, L1, L2, L3, algebra]

3.1 For the nonparallel pair, $u_0=(1,1,0,0)$ and $z_0=(1,-1,0,0)$ are future null by [L1] since $|(1)|=1=|(1)|$ and $|(-1)|=1$ with time component $1>0$, while their sum is $(2,0,0,0)$ with $\eta=-4<0$, a future timelike vector by [L2]: the sum of two future null displacements is therefore null exactly in the parallel case established in step 2.2, which is the boundary case of the sum clause illustrated by $v$ and $w$ in steps 1.1 and 2.1; all computations are exact integer evaluations and no choice principle is used. [step 2.1, step 2.2, L1, L2, algebra] ∎

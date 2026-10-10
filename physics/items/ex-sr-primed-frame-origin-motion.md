---
id: ex-sr-primed-frame-origin-motion
kind: example
title: Worked motion of the primed frame's origin under a passive boost
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart, def-euclidean-inner-product,
       lem-inertial-chart-transitions-are-affine-lorentz]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation. Let $B=B(\beta e_1)$ be a passive boost with parameter
$\beta\in(-1,1)$ along the first spatial direction of an inertial frame with
coordinates $(x^0,x^1)$ ([[def-lorentz-boost]]); in matrix expressions write $B_x:=E^{-1}\circ B\circ E$ and $x\prime=B_xx$ for the
transformed coordinates. Then:

(i) the locus $x'^1=0$ of the primed coordinates (with $x'^2,x'^3$ fixed) is,
in the unprimed chart, $x^1=\beta x^0$ with $x^2,x^3$ fixed constants. The primed spatial origin is the case $x^2=x^3=0$; arbitrary fixed transverse coordinates give parallel loci:
indeed $x'^1=\gamma(x^1-\beta x^0)=0$ forces $x^1=\beta x^0$, and the
transverse coordinates are unchanged because $B$ fixes them. With $x^0=ct$
this is uniform motion with coordinate velocity $\beta c$ along $e_1$;

(ii) conversely the unprimed origin $x^1=0$ satisfies
$x'^1=\gamma(0-\beta x^0)=-\beta\gamma x^0=-\beta x'^0$, since
$x'^0=\gamma x^0$ when $x^1=0$; so the unprimed frame moves with parameter
$-\beta$ in the primed chart, consistent with
$B^{-1}=B(-\beta)$;

(iii) for $\beta=3/5$ the concrete values are $x^1=(3/5)x^0$ in the first
chart and $x'^1=-(3/5)x'^0$ in the second; the locus $x'^1=0$ passes through
the event $(x^0,x^1)=(0,0)$ and through $(5,3)$ (choosing $x^0=5$), which the
boost maps to
$(x'^0,x'^1)=\bigl((5/4)(5-(3/5)3),(5/4)(3-(3/5)5)\bigr)=(4,0)$,
confirming $x'^1=0$.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ with coordinates $x=(x^0,x^1,x^2,x^3)$, a parameter $\beta\in(-1,1)$, and the boost $B:=B(\beta e_1)$; write $x\prime=B_xx$.

[L1] For $\boldsymbol\beta=\beta e_1$ the boost acts by $x'^0=\gamma(x^0-\beta x^1)$ and $x'^1=\gamma(x^1-\beta x^0)$, with $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}=(1-\beta^2)^{-1/2}>0$, and it fixes the transverse coordinates: $x'^2=x^2$, $x'^3=x^3$; the Euclidean norm $|\boldsymbol\beta|$ is that of the frame's spatial coordinates ([[def-lorentz-boost]], [[def-euclidean-inner-product]]).

[L2] $B(\beta e_1)$ is a proper orthochronous Lorentz map and $B(\beta e_1)^{-1}=B(-\beta e_1)$; the maps $B(\beta e_1)$ are injective in $\beta$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L3] An inertial frame has $\eta$-orthonormal basis with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and its chart $x(p)=E^{-1}(p-o)$ is affine ([[def-inertial-frame-and-inertial-chart]]).

[L4] Fix a real constant $c>0$ and define the reparametrized temporal coordinate $t:=x^0/c$, so $x^0=ct$. Coordinate velocity means the derivative $\mathrm dx^1/\mathrm dt$ with respect to this coordinate. This rescaling makes no assertion about physical clock readings or the empirical value or SI units of $c$.

[L5] For every proper orthochronous linear Lorentz map $L:V\to V$ and every $c_0\in A$ the tuple $(c_0;Le_0,Le_1,Le_2,Le_3)$ is an inertial frame whose chart $x_L$ satisfies $x_L(p)=M_L^{-1}(x(p)-x(c_0))$, where $M_L=E^{-1}\circ L\circ E$ ([[lem-inertial-chart-transitions-are-affine-lorentz]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], $x'^1=\gamma(x^1-\beta x^0)$ and $\gamma>0$, so $x'^1=0$ holds exactly when $x^1=\beta x^0$; the equations $x'^2=x^2$, $x'^3=x^3$ of [L1] show that the transverse coordinates are arbitrary constants, unchanged by the boost. Under the convention $x^0=ct$ of [L4], the locus is $x^1=\beta ct$, that is, uniform motion along $e_1$ with coordinate velocity $\mathrm dx^1/\mathrm dt=\beta c$. [L1, L4, algebra]

1.2 For the unprimed origin set $x^1=0$ (with $x^2=x^3=0$). [L1] gives $x'^0=\gamma x^0$ and $x'^1=-\gamma\beta x^0=-\beta x'^0$, so in the primed coordinates the unprimed origin moves along the locus $x'^1=-\beta x'^0$. This is consistent with [L2]: applying the inverse boost $B(-\beta e_1)$ to a point with $x'^1=-\beta x'^0$ gives $x^1=\gamma\bigl(x'^1+\beta x'^0\bigr)=\gamma(-\beta x'^0+\beta x'^0)=0$, so the inverse map sends that locus to the unprimed origin, as $B^{-1}=B(-\beta)$ requires. [L1, L2, algebra]

1.3 Finally, the transformed coordinates $x\prime=B_xx$ are the coordinates of an inertial chart of the model: by [L2] the map $L:=B(-\beta e_1)$ is proper orthochronous, so [L5] applied with $c_0:=o$ provides an inertial frame whose chart is $x_L(p)=M_L^{-1}(x(p)-x(o))=B_x(\beta e_1)x(p)=x\prime(p)$, where $B_x$ denotes the boost matrix and $M_L=B_x(-\beta e_1)$ for every event $p$, using $x(o)=0$ and $L^{-1}=B(\beta e_1)$. Thus the worked motion is the motion of the primed inertial chart's spatial origin in the unprimed chart, and conversely; the computation uses only the $1+1$ boost formulas and the affine chart structure. [L1, L2, L3, L5, algebra]

2.1 For $\beta=3/5$ one has $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$; step 1.1 gives the locus $x^1=(3/5)x^0$ and step 1.2 gives $x'^1=-(3/5)x'^0$. The event $(x^0,x^1)=(5,3)$ satisfies $3=(3/5)\cdot5$, so it lies on the locus, and [L1] gives $x'^0=(5/4)(5-(3/5)3)=(5/4)(5-9/5)=(5/4)(16/5)=4$ and $x'^1=(5/4)(3-(3/5)5)=(5/4)(3-3)=0$; the origin $(0,0)$ is fixed because the boost is linear. Hence the displayed values of clause (iii) are correct. [L1, step 1.1, step 1.2, algebra]

3.1 Steps 1.1-1.2 and 2.1 verify clauses (i)-(iii) of the Example and step 1.3 identifies the primed coordinates with an inertial chart; every assertion is a finite computation with the displayed rational values. [step 1.1, step 1.2, step 2.1, step 1.3] ∎

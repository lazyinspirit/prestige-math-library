---
id: ex-sr-two-leg-itinerary-versus-straight-clock
kind: example
title: "Worked two-leg itinerary against the straight clock at speed 3c/5"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [thm-sr-endpoint-proper-time-bound-and-flat-maximum, def-sr-piecewise-proper-time, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-sr-inertial-and-piecewise-inertial-worldline, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-lorentz-form-and-inertia, thm-of-square-roots, lem-of-square-monotone, def-rational-power, thm-ftc-second-part, def-oriented-integral, def-ordered-field]
dependency_roles:
  thm-sr-endpoint-proper-time-bound-and-flat-maximum: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-inertial-and-piecewise-inertial-worldline: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-rational-power: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-ordered-field: mathematical-premise
dependency_level: 11
aliases: []
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' p. 25 (figure s and its metric computation of the two spacetime displacements of the twin diagram, giving proper time t for the earthbound twin and t sqrt(1-v^2) for the traveling twin); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 71-72 (timelike geodesics maximize proper time; the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Worked computation in the inertial chart $x$ with metric
$\operatorname{diag}(-1,1,1,1)$. Fix a real $c>0$. Let $T>0$, let $v$ with $0<|v|<c$ and put
$\gamma:=(1-v^2/c^2)^{-1/2}$; let $p:=x^{-1}(0,0,0,0)$,
$r:=x^{-1}(cT,vT,0,0)$ and $q:=x^{-1}(2cT,0,0,0)$, the parameter in each
coordinate being the laboratory time $t$ in seconds, so that the coordinate
columns displayed are those of the events in the chart with $x^0=ct$.

**(a)** The straight worldline from $p$ to $q$ has displacement
$d:=(2cT,0,0,0)$, with $-\eta(d,d)=4c^2T^2$ and elapsed proper time
$c^{-1}2cT=2T$.

**(b)** The two-leg itinerary $p\to r\to q$, with the parameter on each leg in
$[0,T]$, has first-leg displacement $(cT,vT,0,0)$ with
$-\eta=c^2T^2(1-v^2/c^2)$, hence proper time
$c^{-1}cT\sqrt{1-v^2/c^2}=T/\gamma$, and second-leg displacement
$(cT,-vT,0,0)$ with the same value; its two-leg total proper time is
$2T/\gamma$.

**(c)** Comparison: $2T/\gamma<2T$ for every $v$ with $0<|v|<c$, in agreement
with the endpoint bound and with its strictness clause, since the image of the
two-leg itinerary contains the event $r$, which is not on the straight segment
from $p$ to $q$. Numerical specialization $v=3c/5$ (so $\gamma=5/4$): the
readings are $8T/5$ and $2T$, with difference $2T/5$.

**(d)** Equality without affine parametrization: on $[0,1]$ let
$\mu(s):=(s^2+s)/2$, a strictly increasing $C^1$ surjection of $[0,1]$ onto
itself with $\mu'(s)=s+1/2>0$; the worldline
$y(s):=x^{-1}(2cT\mu(s),0,0,0)$ has the straight segment $pq$ as image and
elapsed proper time $c^{-1}\int_0^1 2cT\mu'(s)\,\mathrm ds=2T$: equality in the
endpoint bound does not require the affine parametrization, only a
future-directed strictly increasing one.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$; a duration $T>0$ in seconds and a speed $v$ with $0<|v|<c$; $\gamma=(1-v^2/c^2)^{-1/2}$; the events $p=x^{-1}(0,0,0,0)$, $r=x^{-1}(cT,vT,0,0)$, $q=x^{-1}(2cT,0,0,0)$; the two-leg coordinate itinerary $p\to r\to q$ and the reparametrized straight worldline $y(s)=x^{-1}(2cT\mu(s),0,0,0)$ with $\mu(s)=(s^2+s)/2$ ([[def-inertial-frame-and-inertial-chart]]).

[L1] Pairing in the frame: $\eta(r,r')=-r^0r'^0+r^1r'^1+r^2r'^2+r^3r'^3$ for coordinate columns, by the diagonal form and bilinearity; coordinate differences of events are the coordinates of their displacements ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] Cone coordinates ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]]): a vector $(w^0,w_s)$ with $w^0>|w_s|$ is future timelike.

[L3] Straight and piecewise straight proper times ([[def-sr-proper-time]], [[def-sr-piecewise-proper-time]], [[def-sr-regular-causal-curve-and-worldline]], [[def-sr-inertial-and-piecewise-inertial-worldline]]): a straight worldline with constant tangent $w$ over a parameter interval of length $L$ has proper time $c^{-1}L\sqrt{-\eta(w,w)}$; the two-legged piecewise inertial itinerary has total proper time the sum of its leg values; and in the globally $C^1$ case the proper time is $c^{-1}\int\sqrt{-\eta(x',x')}$ in the oriented convention of [[def-oriented-integral]].

[L4] Endpoint bound and strictness ([[thm-sr-endpoint-proper-time-bound-and-flat-maximum]]): $c\Delta\tau(x)\le\sqrt{-\eta(q-p,q-p)}$ for weak piecewise future timelike worldlines from $p$ to $q$, with strict inequality whenever the image is not contained in the straight segment; equality holds for every strictly increasing reparametrization of the straight segment.

[L5] Roots, powers and monotonicity ([[thm-of-square-roots]], [[lem-of-square-monotone]], [[def-rational-power]]): every $a\ge0$ has a unique $\sqrt a\ge0$ with $(\sqrt a)^2=a$; for $x,y\ge0$, $x\le y\iff x^2\le y^2$; and $\gamma>0$ satisfies $\gamma^2=(1-v^2/c^2)^{-1}$.

[L6] Riemann calculus ([[thm-ftc-second-part]], [[def-oriented-integral]]): if $g$ is continuous on $[0,1]$ with $G'=g$, then $\int_0^1g=G(1)-G(0)$.

[L7] Order arithmetic ([[def-ordered-field]]): the order is transitive and $0<1$; and $0<|v|<c$ gives $0<v^2/c^2<1$.

## Verification

**Proof technique:** direct.

1.1 By [L1] the displacement columns are $d=q-p=(2cT,0,0,0)$, $r-p=(cT,vT,0,0)$ and $q-r=(cT,-vT,0,0)$; their interval values are $\eta(d,d)=-4c^2T^2$, $\eta(r-p,r-p)=-c^2T^2+v^2T^2=-c^2T^2(1-v^2/c^2)$, $\eta(q-r,q-r)=-c^2T^2(1-v^2/c^2)$; since $0<|v|<c$ gives $c-|v|>0$, hence $c>|v|$, the time component of each of the three columns strictly dominates the Euclidean norm of its spatial part, and all three displacements are future timelike by [L2]. [given, L1, L2, L7, algebra]

2.1 For (a): the straight worldline from $p$ to $q$ runs over a parameter interval of length $2T$ with constant tangent $(c,0,0,0)$, whose interval value is $-c^2$, so by [L3] its elapsed proper time is $c^{-1}\cdot2T\cdot\sqrt{c^2}=2T$, agreeing with the value $c^{-1}\sqrt{-\eta(d,d)}=c^{-1}2cT$ computed from the displacement. [step 1.1, L3, L5, algebra]

2.2 For (b): each leg runs over a parameter interval of length $T$ with constant tangent $(c,\pm v,0,0)$, whose interval value is $-c^2+v^2=-c^2(1-v^2/c^2)$; by [L3] each leg has proper time $c^{-1}T\sqrt{c^2-v^2}=T\sqrt{1-v^2/c^2}=T/\gamma$, the last equality because $\gamma=(1-v^2/c^2)^{-1/2}>0$; the two-leg total is the sum $2T/\gamma$ by the additivity clause of [L3]. [step 1.1, L3, L5, algebra]

2.3 For (d): $\mu(0)=0$, $\mu(1)=1$ and $\mu'(s)=s+1/2>0$ on $[0,1]$. For $0\le s<t\le1$, $\mu(t)-\mu(s)=(t-s)(t+s+1)/2>0$, proving strict increase; and for each $\lambda\in[0,1]$ the value $s=(-1+\sqrt{1+8\lambda})/2$ lies in $[0,1]$ and satisfies $\mu(s)=\lambda$, proving surjectivity by [L5]. Thus $\mu$ is a strictly increasing $C^1$ surjection of $[0,1]$ onto itself; the worldline $y(s)=x^{-1}(2cT\mu(s),0,0,0)$ has parameter path $(2cT\mu(s),0,0,0)$ with tangent $(2cT\mu'(s),0,0,0)$, whose time component $2cT\mu'(s)$ is positive and whose interval value is $-(2cT\mu'(s))^2$, so $y$ is a future timelike worldline by [L2] with $\sqrt{-\eta(y',y')}=2cT\mu'(s)$; its image is $\{x^{-1}(2cT\lambda,0,0,0):\lambda\in[0,1]\}$, the straight segment from $p$ to $q$. [step 1.1, L1, L2, L5, algebra]

3.1 For (c): by [L7] $0<v^2/c^2<1$, so $0<1-v^2/c^2<1$ and strict monotonicity of squaring on the nonnegatives gives $\sqrt{1-v^2/c^2}<1$; hence $1/\gamma=\sqrt{1-v^2/c^2}<1$ and $2T/\gamma<2T$. This agrees with [L4]: the displacement $r-p=(cT,vT,0,0)$ has second coordinate $vT\ne0$ because $v\ne0$ and $T>0$, so $r$ is not on the straight segment from $p$ to $q$ (all of whose events have vanishing second coordinate), and the strictness clause of [L4] applies to the two-leg itinerary. [step 1.1, step 2.2, L4, L5, L7, algebra]

3.2 Its elapsed proper time is $c^{-1}\int_0^1 2cT\mu'(s)\,\mathrm ds=2T(\mu(1)-\mu(0))=2T$ by [L6] applied to the continuous derivative $\mu'$, so equality in the endpoint bound is attained although $\mu$ is not affine; by [L4] this is consistent with the equality characterization, since $\mu$ is a strictly increasing future-directed reparametrization of the straight segment. [step 2.1, step 2.3, L4, L6, algebra]

4.1 Clauses (a)-(d) are verified in steps 2.1, 2.2, 3.1, 3.2: the readings $2T$ (straight) and $2T/\gamma<2T$ (two-leg), the strict comparison, the numerical values $8T/5$ and $2T$ at $v=3c/5$, and the non-affine equality case of (d) are all finite evaluations of the model's definitions. [step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, L4] ∎

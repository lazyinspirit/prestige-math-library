---
id: ex-sr-rest-frame-of-a-timelike-displacement-worked
kind: example
title: "Worked rest frame of the future timelike displacement (5,3,0,0)"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-sr-rest-frame-of-a-future-timelike-displacement, def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-lorentz-form-and-inertia, def-lorentz-map-and-lorentz-group, thm-of-square-roots, lem-of-square-monotone, def-ordered-field]
dependency_roles:
  lem-sr-rest-frame-of-a-future-timelike-displacement: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
dependency_level: 9
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): sections 1.3.3 'The gamma factor' pp. 25-27 and 1.5 pp. 36-37; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.1-2.3 pp. 25-30 (inertial frames and their bases; straight lines in inertial frames); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Worked computation in an inertial frame $(o;e_0,e_1,e_2,e_3)$ with
$\eta_0=\operatorname{diag}(-1,1,1,1)$. Let $d:=(5,3,0,0)$, a future timelike
coordinate vector with $-\eta(d,d)=25-9=16$, so
$T:=\sqrt{-\eta(d,d)}=4$ and $n:=d/T=(5/4,3/4,0,0)$.

**(a)** $n$ is future unit timelike: $\eta(n,n)=-25/16+9/16=-1$ and
$n^0=5/4>3/4=|n_s|$.

**(b)** The boost parameter $\beta:=n_s/n^0=(3/5,0,0)$ has
$|\beta|=3/5<1$ and $\gamma=(1-|\beta|^2)^{-1/2}=5/4$, and the passive boost
$B(\beta)$ of [[def-lorentz-boost]] sends $n$ to $e_0$, as clause (iv) of
[[lem-boost-is-proper-orthochronous-with-inverse]] requires, since
$\gamma(1,3/5,0,0)=(5/4,3/4,0,0)=n$.

**(c)** The basis
$(e'_0,e'_1,e'_2,e'_3):=\bigl(n,\ B(-\beta)e_1,\ B(-\beta)e_2,\ B(-\beta)e_3\bigr)$
has coordinate columns
$e'_0=(5/4,3/4,0,0)$, $e'_1=(3/4,5/4,0,0)$, $e'_2=(0,0,1,0)$,
$e'_3=(0,0,0,1)$; the checks
$\eta(e'_0,e'_0)=-1$, $\eta(e'_1,e'_1)=-9/16+25/16=1$,
$\eta(e'_0,e'_1)=-(5/4)(3/4)+(3/4)(5/4)=0$,
$\eta(e'_2,e'_2)=\eta(e'_3,e'_3)=1$ and $\eta(e'_i,e'_j)=0$ for the remaining
pairs show that $(o;e'_0,e'_1,e'_2,e'_3)$ is an inertial frame with first
vector $n$.

**(d)** Its chart $x'$ assigns to $d$ the coordinates $(4,0,0,0)$: indeed
$d=4n=4e'_0$, so $E'^{-1}(d)=4E'^{-1}(e'_0)=(4,0,0,0)$; in particular the two
endpoints of any displacement $4n$ have equal spatial coordinates in $x'$ and
time coordinates differing by $4$.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$, $\eta_0=\operatorname{diag}(-1,1,1,1)$, the coordinate vector $d=(5,3,0,0)$, $T=\sqrt{-\eta(d,d)}$, $n=d/T$, and the boost parameter $\beta=n_s/n^0$ of [[def-lorentz-boost]] ([[def-inertial-frame-and-inertial-chart]]).

[L1] Pairing in the frame: $\eta(r,r')=-r^0r'^0+r^1r'^1+r^2r'^2+r^3r'^3$ for coordinate vectors $r,r'$, and $\eta$ is symmetric and bilinear ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] Causal classification and cone: $r$ is timelike when $\eta(r,r)<0$ and future timelike exactly when $r^0>|r_s|$ in a frame with future first vector ([[def-causal-classification-of-lorentz-vectors]], [[lem-timelike-cone-has-two-convex-components]]).

[L3] Rest-frame lemma: for a future timelike displacement $d$ with $T=\sqrt{-\eta(d,d)}$ and $n=d/T$, the vector $n$ is future unit timelike, and for every event $o$ there is an inertial frame with first vector $n$; in any such frame the chart assigns to $d$ the coordinates $(T,0,0,0)$ ([[lem-sr-rest-frame-of-a-future-timelike-displacement]]).

[L4] Boosts: for $\beta\in\mathbb{R}^3$ with $0<|\beta|<1$ the passive boost $B(\beta)$ acts on coordinates by $x'^0=\gamma(x^0-\beta\cdot x)$, $x'=x+\frac{\gamma-1}{|\beta|^2}(\beta\cdot x)\beta-\gamma\beta x^0$, with $\gamma=(1-|\beta|^2)^{-1/2}$; for $\beta=0$ set $B(0)=\operatorname{id}_V$; for every $|\beta|<1$, $B(\beta)$ is a proper orthochronous Lorentz map with inverse $B(-\beta)$, and if $u$ is future unit timelike with coordinates $(u^0,u_s)$ then $B(u_s/u^0)u=e_0$; for $\beta\cdot x=0$ and $x^0=0$ the formula returns $x$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-map-and-lorentz-group]]).

[L5] Square roots and monotonicity: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$, so $\sqrt{16}=4$ and $\sqrt{9}=3$; for $x,y\ge0$, $x<y\iff x^2<y^2$ ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L6] Order arithmetic: the order is trichotomous and transitive, and multiplication by a positive real preserves inequalities ([[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\eta(d,d)=-25+9=-16$, so $-\eta(d,d)=16>0$ and $T=\sqrt{16}=4$ by [L5]; hence $n=d/T=(5/4,3/4,0,0)$ and $n_s=(3/4,0,0)$. [given, L1, L5, algebra]

2.1 For (a): $\eta(n,n)=-(5/4)^2+(3/4)^2=-25/16+9/16=-1$ by [L1], so $n$ is timelike, and $n^0=5/4>3/4=|n_s|$, so $n$ is future unit timelike by [L2] and [L3]. [step 1.1, L1, L2, L3, algebra]

3.1 For (b): $\beta=n_s/n^0=(3/5,0,0)$ with $|\beta|=3/5$ and $|\beta|^2=9/25<1$, so $B(\beta)$ is defined; $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$, because $(5/4)^2=25/16$ and $5/4>0$ by [L5]; and $\gamma(1,3/5,0,0)=(5/4)(1,3/5,0,0)=(5/4,3/4,0,0)=n$, which is the displayed application of clause (iv) of [L4] to the future unit timelike vector $n$. [step 2.1, L4, L5, L6, algebra]

4.1 For (c): the coordinate action of [L4] with parameter $-\beta$ gives $B(-\beta)e_1$ the column $(3/4,5/4,0,0)$: from $-\beta=(-3/5,0,0)$ and $x=e_1$, with spatial part $x_{\mathrm{vec}}=(1,0,0)$, one gets $x'^0=\gamma(x^0-(-\beta)\cdot x_{\mathrm{vec}})=\gamma(0+\frac35)=\frac54\cdot\frac35=\frac34$ and $x'_{\mathrm{vec}}=x_{\mathrm{vec}}+\frac{\gamma-1}{|\beta|^2}((-\beta)\cdot x_{\mathrm{vec}})(-\beta)-\gamma(-\beta)x^0=(1,0,0)+\frac{1/4}{9/25}\cdot\bigl(-\frac35\bigr)\cdot\bigl(-\frac35,0,0\bigr)=(1,0,0)+(\frac14,0,0)=(\frac54,0,0)$, that is $B(-\beta)e_1=(3/4,5/4,0,0)$; for $x=e_2$ and $x=e_3$ one has $\beta\cdot x=0$ and $x^0=0$, so the formula returns $x$, giving $B(-\beta)e_2=e_2$ and $B(-\beta)e_3=e_3$; and for $x=e_0=(1,0,0,0)$ it gives $x'^0=\gamma=5/4$ and $x'_{\mathrm{vec}}=-\gamma(-\beta)x^0=\gamma\beta=(3/4,0,0)$, so $B(-\beta)e_0=(5/4,3/4,0,0)=n=e'_0$; these are the coordinate columns of the basis of the example, and $e'_a=B(-\beta)e_a$ for every $a=0,1,2,3$. [step 3.1, L4, L6, algebra]

5.1 For the orthonormality checks of (c): $\eta(e'_0,e'_0)=-25/16+9/16=-1$, $\eta(e'_1,e'_1)=-9/16+25/16=1$, $\eta(e'_0,e'_1)=-(5/4)(3/4)+(3/4)(5/4)=0$, $\eta(e'_2,e'_2)=1$, $\eta(e'_3,e'_3)=1$, and the remaining cross pairings vanish by the diagonal form [L1]; since by step 4.1 the basis $(e'_0,\dots,e'_3)$ is the image of the inertial basis $(e_0,\dots,e_3)$ under the proper orthochronous Lorentz map $B(-\beta)$ of [L4], orthonormality also follows from metric preservation, the first vector $e'_0=n$ is future timelike by step 2.1, and the basis is positively oriented because $B(-\beta)$ is proper and preserves the oriented volume form and the orientation class; therefore $(o;e'_0,e'_1,e'_2,e'_3)$ is an inertial frame with first vector $n$, as [L3] predicts. [step 4.1, L1, L2, L3, L4, algebra]

6.1 For (d): $d=Tn=4e'_0$ by step 1.1 and step 4.1, so for the chart $x'=E'^{-1}(\cdot-o)$ of the frame of step 5.1 linearity gives $x'(o+\lambda d)=E'^{-1}(\lambda d)=\lambda\,E'^{-1}(d)=\lambda(4,0,0,0)$ because $E'^{-1}(e'_0)=(1,0,0,0)$; in particular $x'$ assigns to $d$ the coordinates $(4,0,0,0)$, and the two endpoints of any displacement $4n$ have equal spatial coordinates and time coordinates differing by $4$. [step 5.1, L3, algebra]

7.1 Steps 2.1, 3.1, 5.1 and 6.1 verify (a), (b), (c) and (d) respectively: the example is the concrete instance $d=(5,3,0,0)$, $T=4$, $n=(5/4,3/4,0,0)$, $\beta=(3/5,0,0)$ of [[lem-sr-rest-frame-of-a-future-timelike-displacement]], and the displayed basis is exactly the basis $e'_a=B(-\beta)e_a$ constructed in step 4.1 and certified inertial in step 5.1. [step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, L3] ∎

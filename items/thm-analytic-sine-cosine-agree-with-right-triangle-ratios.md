---
id: thm-analytic-sine-cosine-agree-with-right-triangle-ratios
kind: theorem
title: "Analytic sine and cosine agree with right-triangle ratios"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radian-angle-by-unit-circle-arc-length, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-intermediate-value, def-pi-via-first-positive-cosine-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two, cor-trigonometric-parity-and-pythagorean-identity, def-p-norms-on-rn, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-14
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, §11.4.3, The unit circle and polar coordinates"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
    - title: "OpenStax, Algebra and Trigonometry 2e, §7.2, Right Triangle Trigonometry"
      url: "https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry"
    - title: "OpenStax, Algebra and Trigonometry 2e, §7.3, Unit Circle"
      url: "https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle"
pipeline_run: null
---

## Statement

Given $A,O>0$, put

$$H=\sqrt{A^2+O^2},\qquad P=(A,O).$$

There is a unique $\theta\in(0,\pi/2)$ such that

$$\left(\frac A H,\frac O H\right)=(\cos\theta,\sin\theta).$$

The counterclockwise unit-circle arc from $(1,0)$ to
$(A/H,O/H)$ has radian measure $\theta$. The coordinate right triangle with
vertices $(0,0)$, $(A,0)$, and $P$ therefore satisfies

$$\cos\theta=\frac A H,\qquad \sin\theta=\frac O H.$$

## Facts & Assumptions

**Given:** Positive real numbers $A$ and $O$, with $H=\sqrt{A^2+O^2}$ and $P=(A,O)$.

[F1] Every nonnegative real $a$ has a unique nonnegative square root $\sqrt a$ satisfying $(\sqrt a)^2=a$ ([[thm-of-square-roots]]).

[F2] For $(x,y)\in\mathbb R^2$, the Euclidean norm is $\lVert(x,y)\rVert_2=\sqrt{x^2+y^2}$ ([[def-p-norms-on-rn]]).

[F3] Sine and cosine are differentiable on $\mathbb R$, with $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin0=0$, and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[F4] A real function differentiable on a set is continuous at every point of that set ([[cor-differentiable-implies-continuous]]).

[F5] If $f:[a,b]\to\mathbb R$ is continuous and $y$ lies between $f(a)$ and $f(b)$, then $f(c)=y$ for some $c\in[a,b]$ ([[thm-intermediate-value]]).

[F6] The number $\pi/2$ is the smallest positive zero of cosine, and $\pi>0$ ([[def-pi-via-first-positive-cosine-zero]]).

[F7] For $0<x\le2$, one has $\sin x\ge x-x^3/6\ge x/3>0$; also $\cos2\le-1/3$, and cosine is strictly decreasing on $[0,2]$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[F8] For every real $x$, $\sin^2x+\cos^2x=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F9] If $\gamma(t)=(\cos t,\sin t)$ and $0\le t\le2\pi$, then the counterclockwise angle swept from $\gamma(0)=(1,0)$ to $\gamma(t)$ has radian measure $L(\gamma\!\upharpoonright_{[0,t]})=t$ ([[def-radian-angle-by-unit-circle-arc-length]]).

## Proof

**Proof technique:** direct.

1.1 Since $A,O>0$, the number $A^2+O^2$ is positive. Hence [F1] gives $H\ge0$ with $H^2=A^2+O^2>0$, so in fact $H>0$. [given, F1, algebra]

1.2 By [F3], cosine is differentiable on $\mathbb R$, so [F4] makes it continuous there and hence on every closed subinterval. [F3, F4]

2.1 From $H^2=A^2+O^2>A^2$ and $H,A>0$ one gets $H>A$; similarly $H>O$. Thus $0<A/H<1$, $0<O/H<1$, and $$(A/H)^2+(O/H)^2=1.$$ [step 1.1, given, algebra]

2.2 Since $\cos0=1$ and $\cos2\le-1/3<0$, [F5] applied on $[0,2]$ gives a $c\in(0,2)$ with $\cos c=0$. [step 1.2, F3, F5, F7, choose]

2.3 By [F2] and [F1], the three side vectors $(A,0)$, $(0,O)$, and $(A,O)$ have Euclidean lengths $A$, $O$, and $H$, respectively. [given, step 1.1, F1, F2, algebra]

3.1 By [F6], $\pi/2$ is the smallest positive zero of cosine. Step 2.2 therefore gives $$0<\pi/2\le c<2,$$ and in particular $\pi/2<2$. [step 2.2, F6, algebra]

4.1 Thus $[0,\pi/2]\subset[0,2)$, and [F7] shows that cosine is strictly decreasing on $[0,\pi/2]$. [step 3.1, F7]

4.2 On $[0,\pi/2]$, cosine is continuous by step 1.2 and has endpoint values $\cos0=1$ and $\cos(\pi/2)=0$ by [F3] and [F6]. Since $0<A/H<1$, [F5] gives a $\theta\in(0,\pi/2)$ with $\cos\theta=A/H$. [step 1.2, step 2.1, step 3.1, F3, F5, F6, choose]

5.1 If $\varphi\in(0,\pi/2)$ also satisfies $\cos\varphi=A/H$, then strict decrease from step 4.1 forces $\varphi=\theta$. Hence the angle in step 4.2 is unique. [step 4.1, step 4.2, algebra]

5.2 The Pythagorean identity gives $$\sin^2\theta=1-\cos^2\theta=1-(A/H)^2=(O/H)^2.$$ [step 1.1, step 4.2, F8, algebra]

6.1 Step 3.1 and $0<\theta<\pi/2$ place $\theta$ in $(0,2)$, so [F7] gives $\sin\theta>0$; step 2.1 gives $O/H>0$. These two positive numbers have the same square by step 5.2, and uniqueness in [F1] yields $\sin\theta=O/H$. [step 2.1, step 3.1, step 4.2, step 5.2, F1, F7]

7.1 Since $\pi>0$ and $0<\theta<\pi/2<2\pi$, [F9] applies. Steps 4.2 and 6.1 identify its endpoint as $\gamma(\theta)=(A/H,O/H)$, so the counterclockwise unit-circle arc from $(1,0)$ to $(A/H,O/H)$ has radian measure $\theta$. [step 4.2, step 6.1, F6, F9, algebra]

8.1 The horizontal and vertical legs of the coordinate triangle meet at a right angle at $(A,0)$. By step 2.3 their lengths are $A$ and $O$, while the hypotenuse from $(0,0)$ to $P$ has length $H$; moreover steps 4.2 and 6.1 give $P=H(\cos\theta,\sin\theta)$, so $P$ is the positive multiple $H$ of the unit-circle point $\gamma(\theta)=(A/H,O/H)$ at which the arc of step 7.1 ends. The triangle's leg-to-hypotenuse ratios are therefore exactly the two coordinates of $\gamma(\theta)$: adjacent over hypotenuse is $A/H=\cos\theta$, and opposite over hypotenuse is $O/H=\sin\theta$. [step 2.3, step 4.2, step 6.1, step 7.1, algebra]

9.1 Therefore the parameter $\theta$ of step 4.2 is the unique element of $(0,\pi/2)$ with $(A/H,O/H)=(\cos\theta,\sin\theta)$, the counterclockwise unit-circle arc from $(1,0)$ to $(A/H,O/H)$ has radian measure $\theta$, and in the stated coordinate right triangle adjacent over hypotenuse is $A/H=\cos\theta$ and opposite over hypotenuse is $O/H=\sin\theta$. [step 5.1, step 7.1, step 8.1] ∎

## Remarks

The strict hypotheses $A,O>0$ make the triangle nondegenerate and place $\theta$
in the acute range $(0,\pi/2)$. If one of the legs is zero, the normalized point
lies on a coordinate axis and the radian definition still supplies the
corresponding unit-circle value, but the resulting configuration is not a
nondegenerate right triangle; the theorem does not impose an acute-triangle
side-ratio convention on those axis or quadrantal cases.

**What is measured, and what is not.** The library assigns radian measure only
to a counterclockwise unit-circle arc starting at $(1,0)$
([[def-radian-angle-by-unit-circle-arc-length]]); it defines no interior angle
of a triangle, and no invariance of an angle under scaling. So the theorem
identifies $\theta$ as the radian measure of the arc ending at
$(A/H,O/H)$ — the unit-circle point of which the hypotenuse vertex
$P=H(\cos\theta,\sin\theta)$ is the positive multiple $H$ — and asserts the two
side ratios of the triangle. It does not assert that the triangle's interior
angle at the origin equals $\theta$, which would need a notion of angle the
library has not built.

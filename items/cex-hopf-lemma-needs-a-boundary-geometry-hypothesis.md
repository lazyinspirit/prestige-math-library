---
id: cex-hopf-lemma-needs-a-boundary-geometry-hypothesis
kind: counterexample
title: "Hopf lemma needs a boundary geometry hypothesis"
status: draft
origin: pipeline
deps: [def-interior-sphere-condition-and-sphere-normal, thm-hopf-boundary-point-lemma-for-the-laplacian]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Example 2.20, p.29"
---

## Statement refuted

An accessible outward directional derivative at a strict boundary maximum need not be positive when there is no interior tangent ball. In the plane, for $x>0$ put $r=(x^2+y^2)^{1/2}$, $\theta=\arctan(y/x)$, and
$$u(x,y)=\frac{x\log r+y\theta}{(\log r)^2+\theta^2},\qquad \Omega=\{(x,y):x>0,\ 0<r<1/2,\ u(x,y)<0\}.$$
Then $\Omega$ is a domain, $u$ is harmonic there and extends continuously to its closure with $u(0,0)=0$. It is strictly negative inside, its outward derivative along $-e_1$ at zero is zero, and no interior tangent ball exists there.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] An interior tangent ball at a boundary point has positive radius, is contained in the open set, and has the boundary point on its sphere. ([[def-interior-sphere-condition-and-sphere-normal]]).

[F2] Hopf’s positive outward derivative conclusion assumes an interior tangent ball, strict interior inequality, continuity on the ball closure and existence of the finite derivative. ([[thm-hopf-boundary-point-lemma-for-the-laplacian]]).

## Counterexample

**Proof technique:** direct.

1.1 For a direct real differentiation check, use pairs written as complex numbers only for algebra: $z=x+iy$, $L=\log r+i\theta$, and $F=z/L=u+iv$ with $v=(y\log r-x\theta)/((\log r)^2+\theta^2)$. The derivatives $(\log r)_x=x/r^2$, $(\log r)_y=y/r^2$, $\theta_x=-y/r^2$, $\theta_y=x/r^2$ give $L_x=1/z$, $L_y=i/z$. The quotient rule gives $F_x=(L-1)/L^2$, $F_y=i(L-1)/L^2$. Equating real and imaginary parts yields $u_x=v_y$, $u_y=-v_x$. All functions are smooth for $x>0$, $r<1/2$, so commuting mixed real derivatives gives $\Delta u=v_{yx}-v_{xy}=0$. No theorem about holomorphic functions is used. [given, algebra]

1.2 In polar coordinates the sign condition is $\theta\tan\theta<-\log r$ for $|\theta|<\pi/2$. The function $\theta\tan\theta$ is even and strictly increasing from zero to infinity as $\theta$ runs from zero to $\pi/2$. Thus at each radius the permitted angles form an interval containing zero. Moving the angle to zero at fixed radius, and then moving along the positive axis, joins any two points by a path in $\Omega$. In particular the open nonempty set is connected. [given, algebra]

2.1 The bound $|u|\le |F|=r/\sqrt{(\log r)^2+\theta^2}\le r/|\log r|$ gives the continuous value zero at the origin. Away from the origin the formula is continuous on the closure; its other points cannot lie on $x=0$, since there the limiting numerator is $|y|\pi/2>0$ for $y\ne0$. Thus the full extension is continuous, and closure values are at most zero. Along the positive axis $u(t,0)=t/\log t<0$, so $(u(0,0)-u(t,0))/t=-1/\log t\to0$. [step 1.1, step 1.2, algebra]

3.1 Any ball in $\Omega\subset\{x>0\}$ tangent at zero must have center $(b,0)$ and radius $b>0$: containment in the half-plane forces its center’s first coordinate to be at least its radius, while passage through zero makes that radius equal to the center’s Euclidean norm. For small $y>0$, the point $(y^2/b,y)$ is in this ball because its squared distance to $(b,0)$ is $b^2-y^2+y^4/b^2<b^2$. But at these points $(x\log r+y\theta)/y\to\pi/2>0$, since $x\log r/y=(y/b)\log r\to0$ and $\theta\to\pi/2$. For sufficiently small $y$ they have $r<1/2$ and $u>0$, so are not in $\Omega$. This rules out every such ball. [F1, step 2.1, algebra]

4.1 The local zero-level boundary has angles $\pm\beta(r)$ determined by $\beta\tan\beta=-\log r$, so $\beta\to\pi/2$ and $x/|y|=\beta/(-\log r)\to0$. Its tangent at zero is therefore the vertical line, with outward side $-e_1$ because $\Omega$ lies to the right. Step 2.1 computes the accessible derivative in precisely that direction as zero, despite the strict interior inequality. The interior sphere hypothesis in Hopf is the missing one. [F2, step 1.2, step 2.1, step 3.1] ∎

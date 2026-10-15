---
id: pthm-rpm-schwarzschild-null-scattering
kind: physics-theorem
title: "Null scattering, the critical impact parameter, and capture in the Schwarzschild exterior model"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-gr-schwarzschild-vacuum-model
  - post-gr-ideal-clocks-and-free-fall
  - lem-rpm-schwarzschild-null-geodesic-reduction
  - thm-gr-local-geodesics-and-exponential-map
  - thm-cm-compact-continuation-for-locally-lipschitz-odes
  - def-gr-kruskal-model-data
  - lem-gr-kruskal-causal-escape-and-trapping
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  lem-rpm-schwarzschild-null-geodesic-reduction: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-gr-kruskal-model-data: mathematical-premise
  lem-gr-kruskal-causal-escape-and-trapping: mathematical-premise
physical_scope: "Conditional geodesic predictions for ideal rays in the adopted Schwarzschild exterior model. Capture beyond r=s is asserted only conditionally in the named Kruskal extension. The statement excludes finite wavelength, wave optics, source/apparatus modelling, plasma, rotation, self-gravity, and empirical shadow or lensing claims."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 176–179"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification: {}
---

## Statement

Adopt the Schwarzschild exterior vacuum model with $s>0$ and the ideal-light rule that rays are future null geodesics. For an equatorial incoming ray with constants $E>0$, $L\ge0$, impact parameter $b=L/E$, and

$$H(r)=\frac{1-s/r}{r^2},\qquad b_{\rm c}=\frac{3\sqrt3}{2}s,\qquad r_{\rm ph}=\frac32s,$$

the radial first integral is $\dot r^2=E^2[1-b^2H(r)]$ as in [[lem-rpm-schwarzschild-null-geodesic-reduction]], where dot denotes affine-parameter derivative. Then:

1. If $b>b_{\rm c}$, there is a unique outer turning point $r_*(b)>r_{\rm ph}$, which is reached in finite affine parameter; the ray from infinity turns and returns to infinity. Its total azimuthal advance is

   $$\Delta\varphi=2\int_{r_*}^{\infty}\frac{b\,dr}{r^2\sqrt{1-b^2H(r)}}.$$

   This integral converges at both endpoints.
2. If $b=b_{\rm c}$, the incoming branch from infinity approaches $r_{\rm ph}$ only as affine parameter tends to $+\infty$; its azimuthal advance diverges logarithmically.
3. If $0\le b<b_{\rm c}$, the inward branch has no exterior turning point and reaches the boundary $r=s$ of the Schwarzschild exterior in finite affine parameter. Only if the ray is continued in the specified Kruskal model, once it lies in the region $U\ge0$, does the causal escape result imply that it cannot return to the right exterior.

These are geodesic-model deductions. The impact threshold is not by itself an observable shadow radius.

## Facts & Assumptions

**Given:** The Schwarzschild exterior with $s>0$, the ideal-light postulate, an equatorial incoming future-null geodesic with $E>0$ and $L\ge0$, and the Kruskal model only for the conditional continuation in clause 3.

[A1] In the adopted Schwarzschild vacuum model, ideal light rays are future null geodesics; this is an adopted model rule ([[pthm-gr-schwarzschild-vacuum-model]], [[post-gr-ideal-clocks-and-free-fall]] clause (iii)).

[F1] For an equatorial affinely parametrized null geodesic, $E=f\,dx^0/d\lambda$ and $L=r^2d\varphi/d\lambda$ are constant, and $\dot r^2=E^2(1-b^2f/r^2)$; $H=f/r^2$ has its unique maximum $4/(27s^2)$ at $3s/2$ ([[lem-rpm-schwarzschild-null-geodesic-reduction]]).

[F2] The smooth geodesic equation has a unique local geodesic through each initial event and tangent, and compact containment in its open coordinate-state domain permits continuation by the local ODE continuation theorem ([[thm-gr-local-geodesics-and-exponential-map]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F3] The Kruskal datum is the smooth extension specified by [[def-gr-kruskal-model-data]]. In that model every future-directed causal curve has nondecreasing $U,V$, and points with $U\ge0$ cannot reach the right exterior ([[lem-gr-kruskal-causal-escape-and-trapping]] clauses (b), (d)).

## Proof

**Proof technique:** construct a null ray from large radius, classify the radial first integral by the maximum of $H$, integrate at the simple and double roots, and use Kruskal causality only for the stated conditional continuation.

1.1 Choose $R>r_{\rm ph}$ so $b^2H(R)<1$. At $r=R$, set $\theta=\pi/2$, $\dot x^0=E/f(R)$, $\dot r=-E\sqrt{1-b^2H(R)}$, $\dot\theta=0$, and $\dot\varphi=L/R^2$. The null condition in [F1] is satisfied, the tangent is future directed because $\dot x^0>0$, and [F2] gives a local geodesic. On the past branch $\dot r\to-E$ as $r\to\infty$, so $\int_R^\infty dr/[E\sqrt{1-b^2H(r)}]=\infty$; compact continuation on finite radial intervals supplies an incoming ray from infinity for every $b\ge0$. [given, A1, F1, F2, algebra]

2.1 By [F1], $H$ increases on $(s,r_{\rm ph})$, decreases on $(r_{\rm ph},\infty)$, and vanishes at both exterior ends. If $b>b_{\rm c}$, then $b^2H(r_{\rm ph})>1$, so there is one root $r_-\in(s,r_{\rm ph})$ and one simple outer root $r_*>r_{\rm ph}$. The affine time from any finite large radius to $r_*$ is finite because near the simple root $[E\sqrt{1-b^2H(r)}]^{-1}=O((r-r_*)^{-1/2})$. [step 1.1, F1, algebra, algebra]

2.2 If $b=b_{\rm c}$, direct factorization gives $1-b_{\rm c}^2H(r)=(2r-3s)^2(r+3s)/(4r^3)$. The incoming radial speed vanishes linearly as $r\downarrow r_{\rm ph}$; hence the affine integral diverges like $\int dr/(r-r_{\rm ph})$. The angular integrand has the same simple-pole behavior, so the ray approaches the photon sphere only at infinite affine parameter and accumulates logarithmically divergent azimuth. [step 1.1, F1, algebra, algebra]

2.3 If $0\le b<b_{\rm c}$, then $b^2H(r)<1$ for every $r>s$ by [F1]. The inward branch has no turning point and reaches the exterior boundary $r=s$ in finite affine parameter because $1-b^2H(r)\to1$ there. The exterior calculation ends at that boundary. If a future continuation is placed in the Kruskal model and enters $U\ge0$, [F3] prevents it from returning to the right exterior. [step 1.1, F1, F3, algebra, algebra]

3.1 For $b>b_{\rm c}$, [F2] extends the incoming ray through the outer turn: the radial first integral gives $\ddot r=-E^2b^2H'(r)/2>0$ at $r_*$, so it leaves with $\dot r>0$. On every finite segment with $r\ge r_*$, the conserved quantities bound $|\dot r|$, $|\dot x^0|=E/f(r)$ and $|\dot\varphi|=L/r^2$; the state stays in a compact subset of the smooth exterior tangent domain and cannot end at a finite affine parameter. On the outgoing branch $\dot r\to E>0$, while $|\dot r|\le E$, so it reaches arbitrarily large radii only at infinite affine parameter. Also $|d\varphi/dr|=b/[r^2\sqrt{1-b^2H(r)}]$ is $O((r-r_*)^{-1/2})$ at the turn and $O(r^{-2})$ at infinity; integrating both halves gives the convergent formula in clause 1. [step 1.1, step 2.1, F1, F2, algebra, algebra]

4.1 The simple outer root, critical double root and no-turn regimes in 2.1–2.3 give all three clauses. Only the last clause uses the separate Kruskal continuation, and no observation or apparatus model is used. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, A1, F3, given] ∎
## Remarks

- At $b=b_{\rm c}$ the circular null orbit is an unstable separatrix; the logarithmic divergence describes the ideal ray geodesic, not a finite-resolution image.
- The capture statement beyond $r=s$ depends on the stated Kruskal continuation. Schwarzschild exterior coordinates alone stop at their boundary and do not prove nonreturn in an extension.

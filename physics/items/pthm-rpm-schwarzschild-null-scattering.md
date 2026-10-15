---
id: pthm-rpm-schwarzschild-null-scattering
kind: physics-theorem
title: "Schwarzschild null scattering and critical impact, with conditional Kruskal capture"
status: published
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
  - def-gr-schwarzschild-exterior-model
  - post-gr-ideal-clocks-and-free-fall
  - lem-rpm-schwarzschild-null-geodesic-reduction
  - thm-gr-local-geodesics-and-exponential-map
  - thm-cm-compact-continuation-for-locally-lipschitz-odes
  - def-gr-kruskal-model-data
  - lem-gr-kruskal-causal-escape-and-trapping
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-gr-parallel-transport-and-geodesic-speed
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-result
  def-gr-schwarzschild-exterior-model: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  lem-rpm-schwarzschild-null-geodesic-reduction: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-gr-kruskal-model-data: mathematical-premise
  lem-gr-kruskal-causal-escape-and-trapping: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
physical_scope: "Conditional geodesic predictions for ideal rays in the adopted Schwarzschild exterior model. Capture beyond r=s is asserted only conditionally in the named Kruskal extension. The statement excludes finite wavelength, wave optics, source/apparatus modelling, plasma, rotation, self-gravity, and empirical shadow or lensing claims."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 176–179"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
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

[F4] The exterior metric has the global product form $g=-f\,d(x^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$, where $\gamma_{S^2}$ is the round metric induced from $\mathbb R^3$ ([[def-gr-schwarzschild-exterior-model]]); its metric-selected connection is the unique torsion-free, metric-compatible connection ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F5] Along an affinely parametrized geodesic, the squared tangent norm is constant: metric compatibility and $D_\lambda\eta'=0$ give $\frac{d}{d\lambda}g(\eta',\eta')=2g(D_\lambda\eta',\eta')=0$ ([[lem-gr-parallel-transport-and-geodesic-speed]] clause 3).

## Proof

**Proof technique:** construct a null ray from large radius, classify the radial first integral by the maximum of $H$, integrate at the simple and double roots, and use Kruskal causality only for the stated conditional continuation.

1.1 Choose $R>r_{\rm ph}$ so $b^2H(R)<1$. At $r=R$, set $\vartheta=\pi/2$, $\dot x^0=E/f(R)$, $\dot r=-E\sqrt{1-b^2H(R)}$, $\dot\vartheta=0$, and $\dot\varphi=L/R^2$, with $L=bE$. Substitution into the diagonal Schwarzschild metric gives
$$g(\dot\eta,\dot\eta)=-\frac{E^2}{f(R)}+\frac{E^2}{f(R)}\bigl(1-b^2H(R)\bigr)+\frac{L^2}{R^2}=0.$$
Also $g(\dot\eta,\partial_0)=-E<0$, so the initial tangent is future directed, and [F2] gives a unique local geodesic. It remains equatorial: define the sphere reflection $S(y_1,y_2,y_3)=(y_1,y_2,-y_3)$ and $\Psi(x^0,r,\omega)=(x^0,r,S\omega)$. The reflection is orthogonal, so it preserves the induced round metric; [F4] therefore makes $\Psi$ an isometry of the exterior metric. Pulling back the metric-selected connection by $\Psi$ gives another torsion-free, metric-compatible connection, hence the same connection by uniqueness in [F4]; thus $\Psi\circ\eta$ is an affinely parametrized geodesic. At the initial event $y_3=0$, and $\dot\vartheta=0$ makes the initial tangent lie in the fixed tangent plane of $S$, so $\Psi$ fixes both initial data. Geodesic uniqueness [F2] gives $\Psi\circ\eta=\eta$ on the connected maximal interval, and its image lies in the fixed set $y_3=0$, the equatorial plane. Finally [F5] preserves the initial null norm along the geodesic, so it is null throughout. [given, A1, F2, F4, F5, algebra]

2.1 By [F1], along the equatorial null geodesic $\dot r^2=E^2(1-b^2H(r))$. For $r\ge R$, $H$ is decreasing and $b^2H(r)<1$, so the past-directed parameter branch has $\dot r<0$ and extends through every finite radial interval $[R,R']$: the first integral bounds $\dot r$, while $f(r)\ge f(R)>0$ bounds $\dot x^0=E/f(r)$ and $\dot\varphi=L/r^2$; compact continuation [F2] excludes a finite-parameter endpoint there. As $r\to\infty$, $H(r)\to0$ and $\dot r\to-E$, so the affine distance to infinity is $\int_R^\infty dr/[E\sqrt{1-b^2H(r)}]=\infty$. Hence the constructed solution supplies an incoming ray from infinity for every $b\ge0$. [step 1.1, F1, F2, algebra]

3.1 By [F1], $H$ increases on $(s,r_{\rm ph})$, decreases on $(r_{\rm ph},\infty)$, and vanishes at both exterior ends. If $b>b_{\rm c}$, then $b^2H(r_{\rm ph})>1$, so there is one root $r_-\in(s,r_{\rm ph})$ and one simple outer root $r_*>r_{\rm ph}$. The affine time from any finite large radius to $r_*$ is finite because near the simple root $[E\sqrt{1-b^2H(r)}]^{-1}=O((r-r_*)^{-1/2})$. [step 2.1, F1, algebra]

3.2 If $b=b_{\rm c}$, direct factorization gives $1-b_{\rm c}^2H(r)=(2r-3s)^2(r+3s)/(4r^3)$. The incoming radial speed vanishes linearly as $r\downarrow r_{\rm ph}$; hence the affine integral diverges like $\int dr/(r-r_{\rm ph})$. The angular integrand has the same simple-pole behavior, so the ray approaches the photon sphere only at infinite affine parameter and accumulates logarithmically divergent azimuth. [step 2.1, F1, algebra]

3.3 If $0\le b<b_{\rm c}$, then $b^2H(r)<1$ for every $r>s$ by [F1]. The inward branch has no turning point and reaches the exterior boundary $r=s$ in finite affine parameter because $1-b^2H(r)\to1$ there. The exterior calculation ends at that boundary. If a future continuation is placed in the Kruskal model and enters $U\ge0$, [F3] prevents it from returning to the right exterior. [step 2.1, F1, F3, algebra]

4.1 For $b>b_{\rm c}$, [F2] extends the incoming ray through the outer turn. Away from $r_*$, differentiating the radial first integral and dividing by $\dot r\ne0$ gives $\ddot r=-E^2b^2H'(r)/2$; smoothness of the geodesic makes $\ddot r$ continuous at the simple root, so this identity holds there as a limit. Since $H'(r_*)<0$, the acceleration is positive and the ray leaves the turn with $\dot r>0$. On every finite segment with $r\ge r_*$, the conserved quantities bound $|\dot r|$, $|\dot x^0|=E/f(r)$ and $|\dot\varphi|=L/r^2$; the state stays in a compact subset of the smooth exterior tangent domain and cannot end at a finite affine parameter by [F2]. On the outgoing branch $\dot r\to E>0$, while $|\dot r|\le E$, so it reaches arbitrarily large radii only at infinite affine parameter. Also $|d\varphi/dr|=b/[r^2\sqrt{1-b^2H(r)}]$ is $O((r-r_*)^{-1/2})$ at the turn and $O(r^{-2})$ at infinity; integrating both halves gives the convergent formula in clause 1. [step 2.1, step 3.1, F1, F2, algebra]

5.1 The simple outer root, critical double root and no-turn regimes in 3.1–3.3 give all three clauses. Only the last clause uses the separate Kruskal continuation, and no observation or apparatus model is used. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, A1, F3, given] ∎

## Remarks

- At $b=b_{\rm c}$ the circular null orbit is an unstable separatrix; the logarithmic divergence describes the ideal ray geodesic, not a finite-resolution image.
- The capture statement beyond $r=s$ depends on the stated Kruskal continuation. Schwarzschild exterior coordinates alone stop at their boundary and do not prove nonreturn in an extension.

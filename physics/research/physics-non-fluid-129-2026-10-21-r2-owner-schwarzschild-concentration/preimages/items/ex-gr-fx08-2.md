---
id: ex-gr-fx08-2
kind: example
title: "Wave energy and black-hole perturbation interfaces — model 2"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "A conditional implication from trapped-ray concentration to failure of a uniform unweighted local-energy bound on a fixed Schwarzschild exterior; the concentration theorem remains a local authoring obligation."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-fx-nondegenerate-local-energy-estimate
  - lem-gr-fx-scalar-dominant-energy
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-nondegenerate-local-energy-estimate: mathematical-premise
  lem-gr-fx-scalar-dominant-energy: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, Characterisation of the Energy of Gaussian Beams on Lorentzian Manifolds with Applications to Black Hole Spacetimes, arXiv:1311.2477 (2015), §§2.1–2.2 and 3.1.1, PDF pp. 9–18 and 24–25"
      url: "https://arxiv.org/pdf/1311.2477"
    - title: "J. Marzuola, J. Metcalfe, D. Tataru, and M. Tohaneanu, Strichartz Estimates on Schwarzschild Black Hole Backgrounds, arXiv:0802.3942 (2010), §§1 and 3.1, PDF pp. 1–3 and 19–21"
      url: "https://arxiv.org/pdf/0802.3942"
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §4.1, PDF pp. 45–48"
      url: "https://arxiv.org/pdf/0811.0354"
verification:
  precheck: pass
---

## Example

Fix $s>0$ and $0<\delta<s/2$. Suppose that for every $T>0$ there is a smooth
finite-energy solution $\psi_T$ of $\Box_g\psi_T=0$ with
$E_T[\psi_T](0)=1$ and
$E_{T,\delta}[\psi_T](x^0)\geq1/2$ throughout $0\leq x^0\leq T$, as a
Gaussian-beam concentration theorem along the Schwarzschild photon-sphere
orbit would supply. Then no constant $C$ can satisfy the nondegenerate
integrated local energy estimate of
[[def-gr-fx-nondegenerate-local-energy-estimate]] for all such solutions.
The concentration premise is not proved in this batch, so this example makes
no unconditional no-loss estimate obstruction claim.

## Example references

[[def-gr-fx-nondegenerate-local-energy-estimate]]

[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]]

## Facts & Assumptions

**Given:** The Schwarzschild exterior with $s>0$, the compact trapping
neighborhood $K_\delta$ around $r=3s/2$, and the conditional concentration
property in the Example.

[F1] [[def-gr-fx-nondegenerate-local-energy-estimate]]: the proposed estimate is $\int_0^\infty E_{T,\delta}[\psi](x^0)\,dx^0\leq C E_T[\psi](0)$ with one constant $C$ for all smooth finite-energy solutions.

[F2] [[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]]: the future null circular geodesic has $r=3s/2$ and $x^0(\tau)=x^0_0+e_0\tau/f(3s/2)$ with $e_0/f(3s/2)>0$, so it crosses each exterior static time slice.

[F3] [[lem-gr-fx-scalar-dominant-energy]]: $Q(n,T)\geq0$ wherever the static slice normal $n$ and $T$ are future causal.

[A1] $\mathrm{AC}_\omega$ is the only choice principle in the smooth Schwarzschild and tangent-bundle conventions ([[def-countable-choice]]).

[A2] Missing local mathematical input proposed for a future A-page supplier: on the globally hyperbolic Schwarzschild exterior with Cauchy slices $\Sigma_{x^0}$ and timelike stationary multiplier $T=\partial_0$, normalize the affine trapped null geodesic of [F2] so $-g(T,\dot\gamma)=1$. For every finite $T_0>0$ and every $\epsilon\in(0,1)$, the proposed result asserts an exact smooth global solution $\psi_{T_0}$ of $\Box_g\psi=0$ with finite $E_T[\psi_{T_0}](0)=1$ and $E_{T,\delta}[\psi_{T_0}](x^0)\geq1-\epsilon$ on every slice $0\leq x^0\leq T_0$. A Gaussian-beam theorem with the required regularity and energy bounds could supply this statement; no current item supplies its proof.

## Verification

1.1 By [F2], the null geodesic has constant radius $r=3s/2$, and $x^0(\tau)$ increases strictly through every real value. Because $\delta>0$, each static slice segment of this orbit lies inside $K_\delta$, the integration region defining $E_{T,\delta}$. [given, A1, F2, algebra]

2.1 Use [A2] with $\epsilon=1/2$. For every finite $T>0$ it supplies a wave $\psi_T$ with unit initial stationary energy and $E_{T,\delta}[\psi_T](x^0)\geq1/2$ on $[0,T]$. By [F3], the local energy density is nonnegative on the whole Schwarzschild annulus, so
$\int_0^\infty E_{T,\delta}[\psi_T](x^0)\,dx^0\geq\int_0^T\tfrac12\,dx^0=T/2$. [given, A2, F3, step 1.1, algebra]

3.1 If a uniform estimate constant $C<\infty$ existed, choose $T>2C$. Step 2.1 gives a left side greater than $C$, while the proposed estimate and $E_T[\psi_T](0)=1$ bound it by $C$, a contradiction. Thus the no-loss estimate fails conditional on [A2]; proving [A2] remains the prerequisite for the unconditional photon-sphere obstruction. [F1, A2, step 2.1, algebra] ∎

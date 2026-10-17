---
id: ex-csm-ideal-isobaric
kind: example
title: "Exact finite ideal-gas volume fluctuations"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-isobaric-response-identities
  - post-csm-isobaric-preparation
  - thm-gaussian-integral
  - def-td-si-quantities
  - def-cm01-units
dependency_roles:
  pthm-csm-isobaric-response-identities: physical-result
  post-csm-isobaric-preparation: physical-assumption
  thm-gaussian-integral: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
physical_scope: "Fixed-N ideal gas in the declared dV/V0 isothermal-isobaric preparation with positive external pressure; excludes alternative piston priors and experimental claims."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Concordia, CHEM 630P Statistical Mechanics Part 1, complete lecture notes, NPT ensemble section"
      url: "https://mypage.concordia.ca/faculty/glamoure/pdfs/statmech_part1.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Example

Let $N\ge1$, $d\ge1$, $n=dN$, $m>0$, $a_0>0$, $V_0>0$, $T>0$ and
$P_{\rm ext}>0$. Use the unit-Lebesgue-volume shape $Q_1\subset\mathbb R^d$
and scaled coordinates $y\in Q_1^N$, $p\in\mathbb R^n$ of
[[post-csm-isobaric-preparation]], with physical positions
$q_i=V^{1/d}y_i$. Define the kinetic energy and Hamiltonian by
$$K(p):=\sum_{j=1}^n\frac{p_j^2}{2m},\qquad H_N(V,y,p):=K(p).$$
In the adopted joint reference $dV/V_0$ times the scaled
position-momentum reference, the weight is $V^N e^{-\beta(K+P_{\rm ext}V)}$.
Its normalization is
$$\Delta_N=\frac{1}{V_0a_0^n} \left(\frac{2\pi m}{\beta}\right)^{n/2} \frac{1}{(\beta P_{\rm ext})^{N+1}}.$$
The volume mean and variance and mean enthalpy are
$$\langle V\rangle=\frac{N+1}{\beta P_{\rm ext}},\qquad \operatorname{Var}(V)=\frac{N+1}{(\beta P_{\rm ext})^2},\qquad \langle K+P_{\rm ext}V\rangle=\frac{n/2+N+1}{\beta}.$$
The extra one in the finite-$N$ volume factor follows from the stated
$dV/V_0$ prior; it is not a universal piston correction.

## Facts & Assumptions

**Given:** The ideal-gas Hamiltonian, shape-scaled volume domain, adopted $dV/V_0$ preparation and positive finite parameters.

[A1] The volume density is proportional to $V^Ne^{-\beta(K+P_{\rm ext}V)}$ under the adopted preparation ([[post-csm-isobaric-preparation]], inherited by [[pthm-csm-isobaric-response-identities]]).

[A2] $\beta>0$, $P_{\rm ext}>0$, and the spatial reference shape has unit dimensionless volume; $V_0$ is a fixed positive volume scale. Energy and action units follow [[def-cm01-units]]; temperature and $k_B$ follow [[def-td-si-quantities]]. The adopted preparation fixes $V,V_0$ in m$^d$ and $P_{\rm ext}$ in J m$^{-d}$, so $P_{\rm ext}V$ is an energy.

[F1] [[thm-gaussian-integral]] gives the unit integral $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$. For $a=\beta/(2m)>0$, the linear substitution $y=\sqrt a\,p$ gives $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$; applying it in each of the $n$ momentum coordinates yields $(2\pi m/\beta)^{n/2}$.

[F2] The isobaric response identities apply under their local moment envelopes ([[pthm-csm-isobaric-response-identities]]).

## Verification

**Given:** [A1]–[A2] and the Gaussian and isobaric-response facts [F1]–[F2].

1.1 Integrating the momentum factors gives [F1]; integrating the unit shape coordinates gives one, while the configuration scaling contributes $V^N$. Hence $$\Delta_N=\frac{1}{N!V_0a_0^n}\left(\frac{2\pi m}{\beta}\right)^{n/2} \int_0^\infty V^Ne^{-sV}dV,\qquad s=\beta P_{\rm ext}>0.$$ Let $I_j(s)=\int_0^\infty V^je^{-sV}dV$. Direct integration gives $I_0=1/s$; integration by parts, with $V^je^{-sV}\to0$ at infinity and vanishing lower boundary for $j\ge1$, gives $I_j=jI_{j-1}/s$. Thus $I_j=j!/s^{j+1}$, and $I_N=N!/s^{N+1}$ cancels the $N!$ in the reference; the displayed finite positive normalizer follows. [A1, A2, F1, algebra]

2.1 The normalized volume density is $V^Ne^{-sV}/I_N(s)$. Applying the same integral formula to $I_{N+1}$ and $I_{N+2}$ gives $\langle V\rangle=(N+1)/s$ and $\langle V^2\rangle=(N+1)(N+2)/s^2$. Subtracting the square of the mean gives $\operatorname{Var}(V)=(N+1)/s^2$. Since $s=\beta P_{\rm ext}$, these are the claimed volume moments. [A1, A2, step 1.1, algebra]

2.2 To check [F2], first use fixed sufficient statistics $(K,V)$ with coefficients $(-\beta,-\beta P_{\rm ext})$. On a compact positive $(\beta,P_{\rm ext})$ set, choose lower bounds $\beta_0,P_0>0$. For $K,V\ge0$, absorbing the quadratic polynomial into half of each exponential gives $$e^{-\beta(K+P_{\rm ext}V)}(1+K^2+V^2)\le C e^{-\beta_0K/2-\beta_0P_0V/2}.$$ This is integrable against the full reference $\nu_N$: the momentum integral is Gaussian by [F1] and the volume integral is $I_N(\beta_0P_0/2)<\infty$ by step 1.1. At any fixed pressure $P_*>0$, the statistics $(B_*,V)=(K+P_*V,V)$ satisfy $uB_*+vV=uK+(uP_*+v)V$. In a small compact neighborhood of $(u,v)=(-\beta,0)$ both coefficients are bounded strictly below zero; $1+B_*^2+V^2\le C_*(1+K^2+V^2)$ gives the same Gaussian-volume majorant. Thus the exact local exponential envelopes for [F2] hold, including the kinetic-energy factor. [A2, F1, F2, step 1.1, algebra]

3.1 The momentum factors are independent of $V$. For $a=\beta/(2m)>0$, the boundary term $p e^{-ap^2}$ vanishes at both infinities, and integration of $(p e^{-ap^2})'=e^{-ap^2}-2ap^2e^{-ap^2}$ gives $\int p^2e^{-ap^2}dp=(2a)^{-1}\int e^{-ap^2}dp$. Dividing by the positive Gaussian normalizer [F1] and summing the $n$ components gives $\langle K\mid V\rangle=n/(2\beta)$. Step 2.1 gives $P_{\rm ext}\langle V\rangle=(N+1)/\beta$; adding the two finite means proves $\langle K+P_{\rm ext}V\rangle=(n/2+N+1)/\beta$. The envelope check in step 2.2 also licenses the response identities [F2] for this preparation. [A2, F1, F2, step 2.1, step 2.2, algebra] ∎


## Remarks

If $P_{\rm ext}=0$, the normalization contains $\int_0^\infty V^N dV$ and diverges. If $P_{\rm ext}<0$, its integrand grows exponentially at large $V$ and also diverges. Thus the positive-pressure condition is essential.

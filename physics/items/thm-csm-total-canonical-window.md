---

id: thm-csm-total-canonical-window
kind: theorem
title: Total-energy concentration and controlled canonical windows
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-csm-full-marked-model
  - def-csm-stable-superstable-continuum-interaction
  - def-hahn-banach-extension-principle-relative
  - def-tdmath-superstable-regular-interaction
  - def-ultrafilter-extension-principle
  - lem-csm-gaussian-mark-moments
  - thm-tdmath-periodic-fixed-n-limit
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  lem-csm-gaussian-mark-moments: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 2–3, printed pp.172–178 / PDF pp.2–8, canonical energy and pressure conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "§§4.2 and 4.4, printed pp.192–198 and 205–210 / PDF viewer pp.220–226 and 233–238: phase-space shells and canonical partition functions."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB. Use the model and dimensionless energy $\mathcal H_{L,\mathrm{per}}$ of [[def-csm-full-marked-model]]. Let $L_n\to\infty$, $V_n=L_n^d$, and integers $N_n$ satisfy $N_n/V_n\to\rho>0$, where $\rho$ is an interior attainable density for the positional canonical rate. Fix $b>0$. Assume $F_b(\rho)$ is the periodic exact-particle log-partition rate supplied by [[thm-tdmath-periodic-fixed-n-limit]] for every $b'$ in a neighborhood of $b$, and is differentiable at $b$. Write $C_n^{\rm ph}$ for the full fixed-$N_n$ canonical law, and define
$$e_b(\rho)=-\partial_bF_b(\rho)+\frac{d\rho}{2b}.$$
Then, for each fixed $\varepsilon>0$, there exist $c_\varepsilon>0$ and $n_0$ such that
$$C_n^{\rm ph}\!\left(\left|\mathcal H_{L_n,\mathrm{per}}/V_n-e_b(\rho)\right|>\varepsilon\right)\le 2e^{-c_\varepsilon V_n}\quad(n\ge n_0).$$
Consequently there is a nonincreasing sequence $\delta_n\downarrow0$ for which the full phase band
$$A_n=\{N=N_n,\ |\mathcal H_{L_n,\mathrm{per}}/V_n-e_b(\rho)|\le\delta_n\}$$
has $C_n^{\rm ph}(A_n)\to1$. It has positive finite phase-reference measure for all sufficiently large $n$. This constructs a controlled shrinking window; it makes no claim about every prescribed shell width or an exact energy surface.

## Facts & Assumptions

**Given:** The interaction assumptions in [[def-csm-full-marked-model]], $b>0$, the exact-$N_n$ sequence, the interior-density condition, and differentiability of $F_b(\rho)$ at the selected $b$.

[A1] Differentiability at $b$ is an additional hypothesis of this item; it is not inferred from stability or from the existence of the partition limit.

[A2] AC, the ultrafilter extension principle, DC, and HB are the exact choice hypotheses of the periodic fixed-particle supplier ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F1] [[thm-tdmath-periodic-fixed-n-limit]]: at an interior attainable density, the periodic exact-$N$ positional log partition divided by volume tends to $F_{b'}(\rho)$ for every sequence $N_n/V_n\to\rho$ and every fixed $b'>0$; its hypotheses include the four choice principles in [A2].

[F2] [[lem-csm-gaussian-mark-moments]] and [[def-csm-full-marked-model]]: the momentum integral is $\kappa_{b'}^{N_n}$ and $\log\kappa_{b'}=\frac d2\log(2\pi mE_0/(b'p_*^2))$.

[F3] [[def-csm-stable-superstable-continuum-interaction]] and [[def-tdmath-superstable-regular-interaction]]: stability gives $U_{L,\mathrm{per}}\ge-BN_n$ and makes the phase band finite in the finite region when its total energy is bounded above.

## Proof

**Given:** The hypotheses and exact conventions in Facts & Assumptions.

1.1 Integrating the marks in [[def-csm-full-marked-model]] gives the canonical marked partition as $\kappa_{b'}^{N_n}Z^{\rm pos}_{L_n,N_n,\mathrm{per}}(b')$. The exact-$N_n$ positional sector of the unit-intensity Poisson reference contributes the common factor $e^{-V_n}$ relative to the Lebesgue $1/N_n!$ partition; it cancels in the ratio of marked partition functions. By [F1], for each fixed $t$ with $b-t>0$,
$$\lim_{n\to\infty}V_n^{-1}\log E_{C_n^{\rm ph}}e^{t\mathcal H}=\Lambda(t):=F_{b-t}(\rho)-F_b(\rho)+\rho\log(\kappa_{b-t}/\kappa_b),$$
by [F1, F2]. Differentiability and the explicit Gaussian factor give $\Lambda(0)=0$ and $\Lambda'(0)=-F_b'(\rho)+d\rho/(2b)=e_b(\rho)$. [A1, A2, F1, F2, algebra]

2.1 Fix $\varepsilon>0$. By the derivative at zero, choose a sufficiently small fixed $t>0$ so $\Lambda(t)-t(e_b+\varepsilon)<0$. On the upper event, $1\le e^{t(\mathcal H-V_n(e_b+\varepsilon))}$, so integrating this pointwise inequality gives
$$C_n^{\rm ph}(\mathcal H/V_n\ge e_b+\varepsilon)\le e^{-tV_n(e_b+\varepsilon)}E_{C_n^{\rm ph}}e^{t\mathcal H};$$
its logarithm divided by $V_n$ tends to that strictly negative number, so it is at most $-c_+V_n$ in the exponent for some $c_+>0$ and all large $n$. Choose a sufficiently small fixed $t<0$ instead; on $\{\mathcal H/V_n\le e_b-\varepsilon\}$ one has $e^{t\mathcal H}\ge e^{tV_n(e_b-\varepsilon)}$, so integrating this lower-tail pointwise bound gives an exponent with limit $\Lambda(t)-t(e_b-\varepsilon)<0$. Taking the smaller positive decay constant proves the two-sided bound. [step 1.1, algebra]

3.1 For each integer $j\ge1$, the fixed-width conclusion of step 2.1 supplies an integer $n_j$ increasing strictly such that for all $n\ge n_j$ the probability outside width $1/j$ is at most $1/j$. Let $j(n)=\max\{j:n_j\le n\}$ for $n\ge n_1$, and put $\delta_n=1/j(n)$; assign any positive nonincreasing values before $n_1$. Then $j(n)\to\infty$, so $\delta_n\downarrow0$, and the probability outside $A_n$ tends to zero. Since the canonical density is strictly positive at every finite-energy point, $C_n^{\rm ph}(A_n)>0$ for large $n$ implies positive reference measure. On $A_n$, $0\le\sum K(p_x)\le V_n(e_b+\delta_n)+BN_n$ by stability [F3]; the momenta thus lie in a bounded Euclidean ball, while positions lie in a finite cube. The sigma-finite product reference in [[def-csm-full-marked-model]] assigns finite measure to that bounded sector, so the band has finite reference measure. [F3, step 2.1, construct] ∎

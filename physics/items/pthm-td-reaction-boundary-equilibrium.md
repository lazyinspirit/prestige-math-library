---
id: pthm-td-reaction-boundary-equilibrium
kind: physics-theorem
title: Reaction equilibrium conditions at interior and boundary amounts
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Local C1 constrained Gibbs-potential charts for a declared internal reaction network at fixed positive reservoir temperature and pressure; interior conclusions use the admitted process-record model, while boundary conclusions require the explicit boundary-inclusive entropy and auxiliary extension stated here.
dependency_level: 9
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-td-legendre-potentials
  - def-td-process-and-protocol
  - pthm-td-fixed-tp-reaction-potential-minimum
  - pthm-td-potential-differentials
  - lem-tdmath-stoichiometric-tangent-cone
  - def-td-equilibrium-state-domain
  - post-td-concave-fundamental-entropy
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-legendre-potentials: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  pthm-td-fixed-tp-reaction-potential-minimum: physical-result
  pthm-td-potential-differentials: physical-result
  lem-tdmath-stoichiometric-tangent-cone: mathematical-premise
  def-td-equilibrium-state-domain: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §4.4"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S4
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
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

Fix $C\ge1$ species and $R\ge1$ declared internal reaction extents. Let $\nu\in\mathbb R^{C\times R}$ be the dimensionless stoichiometric matrix, let $n^0\in[0,\infty)^C$ have units mol, and let $\xi\in\mathbb R^R$ have units mol. The amount vector is $n(\xi)=n^0+\nu\xi$, and the nonnegative-amount feasible extent set is
$$
\mathcal F_\nu:=\{\xi\in\mathbb R^R:n^0+\nu\xi\in[0,\infty)^C\}.
$$
Assume the exact local reaction-feasible extent set is $\mathcal F_\nu\cap U$; no additional local constraint removes any direction in its tangent cone.
Fix $T_0>0$ and $p_0>0$ in a declared natural-variable chart. On an open neighborhood $U$ of a candidate endpoint $\xi_*$, let $\Phi:U\to\mathbb R$ be a finite $C^1$ constrained Gibbs-potential extension, in joules, satisfying
$$
D\Phi(\xi)[h]=\sum_{j=1}^C\mu_j(\xi)(\nu h)_j=(\nu^{\mathsf T}\mu(\xi))\cdot h,
$$
where every $\mu_j$ is in $\mathrm{J\,mol^{-1}}$. At positive amounts, require $\Phi(\xi)=U_c(x(\xi))+p_0V_c(x(\xi))-T_0S_c(x(\xi))$ for the system state $x(\xi)$, with $U_c,V_c,S_c$ from [[def-td-equilibrium-state-domain]] and [[post-td-concave-fundamental-entropy]]; its derivative is that of the local Gibbs chart supplied by [[def-td-legendre-potentials]] and [[pthm-td-potential-differentials]].

If all amounts at $\xi_*$ are positive, assume $\xi_*$ is the system endpoint of a closed system process record and its admitted isolated-compound extension exactly as in [[pthm-td-fixed-tp-reaction-potential-minimum]], is a global entropy-maximizing endpoint on that extension's exact feasible set, and the record's system projection contains every state $x(\xi)$ for $\xi\in\mathcal F_\nu\cap U$. If at least one amount is zero, it is outside [[def-td-equilibrium-state-domain]]; in that boundary case, assume instead that the model supplies a boundary-inclusive state domain with finite $C^1$ maps $\bar U_c,\bar V_c,\bar S_c:U\to\mathbb R$ in joules, $\mathrm{m^3}$, and $\mathrm{J\,K^{-1}}$, respectively, that $\Phi(\xi)=\bar U_c(\xi)+p_0\bar V_c(\xi)-T_0\bar S_c(\xi)$, and that its exact isolated-compound model has fixed total energy, an ideal reservoir with $S_R(E_R)=S_{R,0}+E_R/T_0$, a constant-entropy pressure store satisfying $E_B-p_0\bar V_c(\xi)=C_B$, and a feasible-set projection equal to $\mathcal F_\nu\cap U$. Assume $\xi_*$ is an attained global entropy maximum on that boundary-inclusive set. This additional boundary model premise is not supplied by the positive-mole state chart or by [[pthm-td-fixed-tp-reaction-potential-minimum]].

Under the relevant interior or boundary assumptions above, $\xi_*$ locally minimizes $\Phi$ on $\mathcal F_\nu\cap U$. Let $J_*:=\{j:n^0_j+(\nu\xi_*)_j=0\}$ be the active species set. Then the first-order necessary condition is
$$
(\nu^{\mathsf T}\mu(\xi_*))\cdot h\ge0\qquad\text{for every }h\in T_{\mathcal F_\nu}(\xi_*),
$$
where
$$
T_{\mathcal F_\nu}(\xi_*):=\{h\in\mathbb R^R:(\nu h)_j\ge0\text{ for every }j\in J_*\}.
$$
If $\xi_*$ is interior to $\mathcal F_\nu$, this reduces to $\nu^{\mathsf T}\mu(\xi_*)=0$. If, in addition, $\Phi$ is convex and differentiable on a convex neighborhood containing the relevant feasible set, the same tangent inequality is sufficient for global minimization there.

## Facts & Assumptions

**Given:** The finite species list, stoichiometric matrix, nonnegative-amount feasible set, fixed $T_0>0,p_0>0$, potential $\Phi$ and its C1 extension and gradient identity. In the interior case, $\xi_*$ is a positive-amount endpoint of the admitted process record used in the fixed-potential theorem. In the boundary case, use a separately declared boundary-inclusive state and auxiliary model as described in [A2]; zero-amount points are not in the positive-mole state chart.

[A1] Boundary-chart hypothesis: $\Phi$ is finite and C1 on an open subset $U\subseteq\mathbb R^R$ containing $\xi_*$, and its derivative along the affine extent map is the displayed stoichiometric chemical-potential expression throughout $U$. At positive amounts, the expression follows from the local Gibbs differential of [F2]; at zero amounts it is an added model extension.

[A2] Boundary-inclusive physical model: for the boundary route only, the model declares a state domain containing the zero-amount state at $\xi_*$ and finite C1 maps $\bar U_c,\bar V_c,\bar S_c:U\to\mathbb R$ with units J, $\mathrm{m^3}$, and $\mathrm{J\,K^{-1}}$, and $\Phi=\bar U_c+p_0\bar V_c-T_0\bar S_c$. Its isolated compound has an exact feasible set of tuples $(\xi,y_R,y_B)$ whose projection onto extents is $\mathcal F_\nu\cap U$, fixed total energy $\bar U_c(\xi)+E_R(y_R)+E_B(y_B)$, ideal-reservoir entropy $S_R(E_R)=S_{R,0}+E_R/T_0$, constant store entropy, and pressure-store relation $E_B(y_B)-p_0\bar V_c(\xi)=C_B$ throughout that feasible set. The endpoint corresponding to $\xi_*$ is an attained global maximum of the sum of system, reservoir, and store entropies on this exact set. These are explicit additional model premises, not consequences of the positive-mole state domain.

[F1] [[pthm-td-fixed-tp-reaction-potential-minimum]]: For an admitted closed process record with the specified ideal reservoir and pressure store, its system potential decreases on every record; an attained global entropy maximum on that exact isolated-compound feasible set gives a global minimum on the projected system state set. For this interior application, that projection contains the system states corresponding to every extent in $\mathcal F_\nu\cap U$. The supplier does not cover zero amounts outside $D_c$.

[F2] [[pthm-td-potential-differentials]]: On a valid single-phase energy-representation and Gibbs natural-variable chart, $dG=-S\,dT+V\,dp+\sum_j\mu_j\,dn_j$. The identity is used only at positive amounts; at the boundary, [A1] is the separate derivative premise.

[F3] [[lem-tdmath-stoichiometric-tangent-cone]]: For the nonnegative stoichiometric feasible polyhedron, the tangent cone consists exactly of $h$ with $(\nu h)_j\ge0$ for every active species. At a differentiable local minimum, the directional derivative is nonnegative on that cone; for a differentiable convex objective on a convex domain, this condition is sufficient for a global minimum.

## Proof

1.1 In the positive-amount case, [F1] gives a local minimum of $\Phi$ relative to the exact reaction-feasible states near $\xi_*$. [given, F1]

1.2 In the boundary case, fixed total energy and $E_B-p_0\bar V_c=C_B$ in [A2] give $E_R=C_1-\bar U_c(\xi)-p_0\bar V_c(\xi)$ for a constant $C_1$. Therefore the sum of system and reservoir entropies, plus the constant store entropy, is $S_{\rm tot}=C_0+\bar S_c(\xi)-(\bar U_c(\xi)+p_0\bar V_c(\xi))/T_0=C_0-\Phi(\xi)/T_0$ on the exact boundary-inclusive feasible set. Since $T_0>0$, an attained global entropy maximum at $\xi_*$ is a global, hence local, minimum of $\Phi$ there. [given, A2, algebra]

2.1 Thus in either case $\xi_*$ is a local minimum relative to $\mathcal F_\nu\cap U$. [step 1.1, step 1.2]

3.1 Apply [F3] at $\xi_*$. It identifies the feasible tangent directions as exactly those $h$ satisfying $(\nu h)_j\ge0$ for all $j\in J_*$. The differentiable local-minimum inequality gives $D\Phi(\xi_*)[h]\ge0$ on this cone; substituting [A1]'s gradient identity gives $(\nu^{\mathsf T}\mu(\xi_*))\cdot h\ge0$. [given, A1, F2, F3, step 2.1]

4.1 If $\xi_*$ is interior to $\mathcal F_\nu$, an open neighborhood of it lies in $\mathcal F_\nu$, so every direction is feasible for sufficiently small positive extent and $T_{\mathcal F_\nu}(\xi_*)=\mathbb R^R$. For each coordinate $k$, let $e_k$ be the $k$th standard basis vector and use the two directions $h=\pm(1\,\mathrm{mol})e_k$. Step 3.1 gives $\pm(1\,\mathrm{mol})(\nu^{\mathsf T}\mu(\xi_*))_k\ge0$, so each component vanishes and $\nu^{\mathsf T}\mu(\xi_*)=0$. [given, step 3.1, algebra]

5.1 If $\Phi$ is convex and differentiable on a convex neighborhood containing the relevant feasible set, the sufficiency clause of [F3] makes the tangent inequality sufficient for global minimization there. Without convexity this sufficiency conclusion is not asserted. [given, F3, step 3.1] ∎

## Remarks

For the interior route, the potential minimum follows from the admitted process record and its reservoir/store model. A boundary point with a zero species amount is not in the positive-mole chart. The boundary route therefore needs the explicitly extended entropy and endpoint model in [A2]; a finite C1 extension of $\Phi$ alone would not establish physical stable equilibrium.

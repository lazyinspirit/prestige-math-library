---
id: pthm-td-clapeyron-local
kind: physics-theorem
title: Local Clapeyron slope on a regular pure-phase coexistence branch
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A one-component, positive-temperature, C1 coexistence branch with bilateral energy, volume, and species exchange, nonzero molar-volume jump, and the explicit local same-tag homogeneity and reversible-heat assumptions stated here, with homogeneity either independently stipulated or supplied on each designated common-law bulk branch through the local Euler theorem; the slope formula requires nonzero molar-volume jump and C1 branch charts and is not asserted when either condition fails.
dependency_level: 2
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-si-quantities
  - def-td-legendre-potentials
  - pthm-td-intensive-coexistence-conditions
  - pthm-td-potential-differentials
  - pthm-td-euler-and-gibbs-duhem
  - thm-tdmath-local-implicit-rank
  - thm-chain-rule-for-total-derivatives
  - def-td-reversible-process
  - post-td-macroscopic-second-law
  - post-td-bulk-additivity
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-legendre-potentials: formulation-prerequisite
  pthm-td-intensive-coexistence-conditions: physical-result
  pthm-td-potential-differentials: physical-result
  pthm-td-euler-and-gibbs-duhem: physical-result
  thm-tdmath-local-implicit-rank: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-td-reversible-process: formulation-prerequisite
  post-td-macroscopic-second-law: physical-assumption
  post-td-bulk-additivity: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§4.3.3–4.4 and 5.1.1–5.1.2"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S4
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, Chapter 5, §§5.1.1–5.1.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
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

Let $\alpha,\beta$ be two one-component phase branches from *Phase branches and coexistence domains* on a common open chart $O\subset(0,\infty)\times\mathbb R$ with coordinates $(T,p)$. Assume each branch has a local $C^2$ energy representation $\mathcal U_i(s,V,n)$, $i\in\{\alpha,\beta\}$, and that within each fixed branch tag it satisfies the same-tag homogeneity
$$
\mathcal U_i(\lambda s,\lambda V,\lambda n)=\lambda\mathcal U_i(s,V,n)
$$
for all $\lambda$ in a neighborhood of $1$ for which the scaled state remains in the chart. This is a phase-branch hypothesis: the general tagged law of *Additive separated systems and tagged bulk scaling* does not imply it. It may be stipulated independently on each local branch, or supplied by the common-law bulk subclass of *Euler and Gibbs-Duhem identities under same-tag homogeneity* when each phase's local inverse states lie in its designated entropy cone with fixed species and intensive parameters and common SI units and energy/entropy reference conventions. That supplied subclass uses local inverse uniqueness and does not require a global energy inverse.

Suppose a state $(T_0,p_0)\in O$ is an attained interior coexistence equilibrium with bilateral energy, volume, and species exchange between the two branches, and both branches admit the valid local Gibbs charts of *Local thermodynamic Legendre potentials*. Write $g_i=G_i/n_i$, $s_i=S_i/n_i$, and $v_i=V_i/n_i$ in the units specified by *SI quantities and unit conventions*. If
$$
\Delta v(T_0,p_0):=v_\beta(T_0,p_0)-v_\alpha(T_0,p_0)\ne0,
$$
then, on some open interval about $T_0$, the equal-Gibbs-per-mole coexistence condition $g_\alpha(T,p(T))=g_\beta(T,p(T))$ defines a unique local $C^1$ curve and
$$
\frac{dp}{dT}=\frac{s_\beta-s_\alpha}{v_\beta-v_\alpha}.
$$
If, in addition, conversion from $\alpha$ to $\beta$ is admitted as a reversible process in contact with an ideal thermal reservoir at the same fixed $T$, and the full finite isolated compound (converted phases, reservoir, work stores and all auxiliaries) has equilibrium endpoints with additive component entropy, with every component other than the converted phases and that reservoir having zero entropy change, and the admitted forward and reverse complete-compound records have nonnegative total endpoint entropy changes for that same additive split with their full endpoint tuples interchanged, then its molar latent heat absorbed by the system is $\ell_{\alpha\to\beta}=T(s_\beta-s_\alpha)$. These are conditional model deductions. The slope conclusion is not asserted when $\Delta v=0$ or where the branch charts are not $C^1$.

## Statement references

[[def-td-phase-and-coexistence-domain]]

[[post-td-bulk-additivity]]

[[pthm-td-euler-and-gibbs-duhem]]

[[def-td-legendre-potentials]]

[[def-td-si-quantities]]

## Facts & Assumptions

**Given:** Two pure phase branches on a common open $(T,p)$ chart; positive one-component amounts; the C2 local energy and Gibbs maps and C1 phase-branch maps stated above; the same-tag homogeneity assumption for each phase; an attained interior maximum with bilateral energy, volume, and species exchange; $\Delta v(T_0,p_0)\ne0$; and, for the latent-heat clause, a reversible conversion with a fixed-temperature ideal reservoir. Use SI units: $T$ in kelvins, $p$ in pascals, $G$ in joules, $n$ in moles, $s$ in $\mathrm{J\,mol^{-1}K^{-1}}$, and $v$ in $\mathrm{m^3\,mol^{-1}}$.

[A1] Each phase's fixed-tag local C2 energy representation has the degree-one homogeneity stated in the Statement. This may be an independent local constitutive hypothesis or the supplied common-law bulk subclass of [[pthm-td-euler-and-gibbs-duhem]] under its exact inverse-chart and reference conventions. The general tagged-scaling postulate alone does not supply it.

[A2] The admitted reversible conversion and its reverse are records of the complete finite isolated compound with aggregate equilibrium endpoints represented by full constituent and auxiliary state tuples. Its components include the converted phases, the ideal thermal reservoir at fixed $T$, and every work store or auxiliary, with an adopted additive total endpoint entropy map $S_{\mathrm{tot}}$. Each other component has zero endpoint entropy change, and the reservoir contributes $-Q/T$ when heat $Q$ is absorbed by the system. The reverse record interchanges the two full endpoint tuples and reverses the signed transfer, as required by [[def-td-reversible-process]]. Adopt explicitly $\Delta S_{\mathrm{tot}}[P]\ge0$ and $\Delta S_{\mathrm{tot}}[P^{\mathrm{rev}}]\ge0$ for these two records. Since their entropy changes are negatives, $\Delta S_{\mathrm{tot}}[P]=0$. The postulate [[post-td-macroscopic-second-law]] supplies these inequalities when its admitted core-record, complete endpoint-association and additive-split hypotheses hold; without that additional discharge, the two inequalities are separate adopted model premises of this latent-heat clause. No entropy premise is needed for the slope-only clause.

[F1] [[def-td-phase-and-coexistence-domain]]: a one-component branch supplies $g=G/n$, $s=S/n$, and $v=V/n$ on its valid positive-temperature chart; the definition does not assert $g=\mu$ without same-tag homogeneity.

[F2] [[def-td-legendre-potentials]]: on its valid local natural-variable chart, $G=U-Ts+pV$.

[F3] [[pthm-td-intensive-coexistence-conditions]]: with energy, volume, and species transfer feasible in both directions at an attained interior entropy maximum, the two branches have equal positive temperatures, equal pressures, and equal chemical potentials.

[F4] [[pthm-td-potential-differentials]]: Its current carrier is published and includes verification evidence. On a valid local $C^2$ energy-representation chart with the stated natural-coordinate inverse charts, its Statement gives $dG=-S\,dT+V\,dp+\sum_j\mu_j\,dn_j$. Its Proof derives this identity from the local energy conjugate identities, the Legendre-potential definitions, and the published $C^2$ partial-Legendre differential lemma; it does not assert that heat or work is an exact differential on process space.

[F5] [[pthm-td-euler-and-gibbs-duhem]]: if the same-tag homogeneity [A1] holds on a valid local C2 energy chart, its current Statement gives $U=Ts-pV+\mu n$, hence $G/n=\mu$. Its general conditional implication requires [A1], and its separately designated common-law bulk subclass derives that local premise from adopted entropy transport and local inverse uniqueness. Neither route silently equates distinct physical system tags.

[L1] [[thm-tdmath-local-implicit-rank]]: Its current mathematical carrier is published and has verification evidence. Its Statement gives a unique local $C^1$ graph of dimension $n-q$ for a $C^1$ map $F:U\subseteq\mathbb R^n\to\mathbb R^q$ with $F(x_*)=0$ and an invertible $q\times q$ derivative minor; when $q=n$, the zero is locally isolated. Its Proof reduces the nonsquare case by a coordinate permutation to the Euclidean implicit-function theorem and the square case to the inverse-function theorem. Here $F=g_\beta-g_\alpha$ is $C^1$ on the stated open chart and $F_p=v_\beta-v_\alpha\ne0$, so the required scalar minor is invertible.

[L2] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition of differentiable maps gives the composed derivative.

## Proof

1.1 By [F3], bilateral energy, volume, and species exchange give common $T_0,p_0$ and $\mu_\alpha=\mu_\beta$ at the attained interior coexistence point. Apply [F5] separately to the two phase branches using [A1]: $G_i/n_i=\mu_i$ for $i=\alpha,\beta$. Thus $F(T_0,p_0):=g_\beta(T_0,p_0)-g_\alpha(T_0,p_0)=0$. [given, A1, F3, F5, algebra]

1.2 On each branch, hold the amount $n_i$ fixed while varying $(T,p)$. By [F2] and [F4], $d(G_i/n_i)=-s_i\,dT+v_i\,dp$. Consequently $F_T=-(s_\beta-s_\alpha)$ and $F_p=v_\beta-v_\alpha$ at $(T_0,p_0)$. The nonzero-volume-jump hypothesis makes $F_p\ne0$. [given, F1, F2, F4, algebra]

2.1 Apply [L1] to $F=g_\beta-g_\alpha$ on $O$. It gives a unique local C1 graph $p=p(T)$ satisfying $F(T,p(T))=0$. Differentiating this identity using [L2] gives $0=F_T+F_p\,p'(T)$. Substitution of the derivatives from step 1.2 yields
$$
p'(T_0)=\frac{s_\beta-s_\alpha}{v_\beta-v_\alpha}.
$$
The same calculation applies at every point of the shrunken coexistence interval with nonzero $\Delta v$. [L1, L2, step 1.1, step 1.2, algebra]

3.1 For the reversible latent-heat clause, the system entropy change when $n$ moles are converted is $n(s_\beta-s_\alpha)$. By [A2], the full isolated compound has zero total entropy change; all other components have zero entropy change, and the reservoir contributes $-Q/T$, so $Q/T=n(s_\beta-s_\alpha)$. Dividing by $n>0$ gives $\ell_{\alpha\to\beta}:=Q/n=T(s_\beta-s_\alpha)$. This conclusion is conditional on the stated reversible operation and ideal reservoir; it is not a property of an arbitrary irreversible conversion path. [given, A2, F1, algebra] ∎

## Remarks

The statement's same-tag homogeneity is deliberately local to each branch. The Euler supplier preserves the general implication from independently stipulated local homogeneity and also supplies it on the separately adopted common-law bulk branch. The general tagged postulate still allows $c^{(\lambda)}\ne c$; neither constitutive route is a proof of exact extensivity for every finite body, surface-sensitive or long-range system, or gravitating system. Valid Gibbs charts, admitted bilateral exchanges, positive amounts, the nonzero molar-volume jump, and the reversible ideal-reservoir qualification remain essential.

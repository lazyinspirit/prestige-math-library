---
id: "pthm-td-controlled-thermodynamic-ensemble-duality"
kind: "physics-theorem"
title: "Controlled canonical–grand thermodynamic duality"
status: "published"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Stable regularly tempered classical positional Borel pair models at positive temperature in free cubes, for the closed concave extension of the attainable canonical rate; no local-observable equivalence is asserted."
deps: [def-axiom-of-choice, def-td-stable-tempered-continuum-preparation, post-td-equilibrium-ensemble-sampling, post-td-classical-indistinguishable-particle-measure, thm-tdmath-canonical-interior-density-limit, thm-tdmath-canonical-grand-duality]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  post-td-equilibrium-ensemble-sampling: physical-assumption
  post-td-classical-indistinguishable-particle-measure: physical-assumption
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans-Otto Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction, Probability Theory and Related Fields 99 (1994), 171–195"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    - title: "David Tong, Statistical Physics (author-hosted Cambridge lecture notes)"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Konstantin K. Likharev, Essential Graduate Physics, Part SM: Statistical Mechanics (2024 author-hosted lecture notes)"
      url: "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/02%3A_Principles_of_Physical_Statistics/2.07%3A_Grand_canonical_ensemble_and_distribution"
proof_strategy: direct
dependency_level: 7
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

Assume AC and $T>0$, with $\beta=(k_BT)^{-1}$, and take $z>0$ as in [[post-td-equilibrium-ensemble-sampling]]. Under the stable regularly tempered positional model of [[def-td-stable-tempered-continuum-preparation]] and the adopted ensemble weights of [[post-td-equilibrium-ensemble-sampling]], assume the dimensionless potential $\widehat\varphi=\varphi/E_0$ is Borel measurable as required by the current mathematical carriers. Set $E_0=1\,\mathrm J$ and $\widehat\beta=E_0\beta$; write $F(\rho,\beta)$ and $P(\alpha,\beta)$ for the mathematical rates evaluated at $\widehat\beta$. Use free-wall cubes $\Lambda_L=[0,L)^d$ with dimensionless volume $V_L=L^d$. Write $Z_L(N;\beta)=\int e^{-\beta H_N}\,d\mu_{\Lambda_L,N}$, extending the integrand by zero at infinite energy, for their canonical positional partitions. Let $F(\rho,\beta)$ be the canonical log-partition rate per dimensionless reference volume, defined on positive interior attainable densities by $V_L^{-1}\log Z_L(N_L;\beta)\to F(\rho,\beta)$ for every sequence $N_L/V_L\to\rho$ and extended to the closed effective density domain by the upper-semicontinuous concave extension specified in [[thm-tdmath-canonical-grand-duality]], with $F(\rho,\beta)=-\infty$ outside that closed domain. Let
$$P(\alpha,\beta)=\lim_{L\to\infty}V_L^{-1}\log\sum_{N\geq0}e^{\alpha N}Z_L(N;\beta),\qquad \alpha=\log z.$$
Then
$$P(\alpha,\beta)=\sup_{\rho\geq0}\{F(\rho,\beta)+\alpha\rho\},$$
and, for every $\rho$ in the closed effective density domain of $F$,
$$F(\rho,\beta)=\inf_{\alpha\in\mathbb R}\{P(\alpha,\beta)-\alpha\rho\}.$$
The density $\rho$ is particle count per dimensionless reference volume, corresponding to physical number density $\rho/\ell_0^d$ in $\mathrm{m}^{-d}$. In physical units, $p=(k_BT/\ell_0^d)P$ and the positional Helmholtz free-energy density is $f_{\mathrm{pos}}=-(k_BT/\ell_0^d)F$; both are per physical $d$-volume, in $\mathrm{J\,m^{-d}}$ (pascals when $d=3$). The fixed $1/N!$ reference normalization is that of [[post-td-classical-indistinguishable-particle-measure]]. This duality concerns limiting thermodynamic functions only. It does not imply local ensemble equivalence, uniqueness of a phase, or convergence at excluded density endpoints.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: if $B$ joules is a stability constant for $H_N$, then $\widehat B=B/E_0$ gives $\widehat H_N=H_N/E_0\geq-\widehat B N$ for the dimensionless potential; its Euclidean tail is bounded by a decreasing integrable envelope $\psi$ in joules. Set $\widehat\psi=\psi/E_0$; then $|\widehat\varphi(x)|\leq\widehat\psi(|x|_2)\leq\widehat\psi(|x|_\infty)$, so the mathematical suppliers' maximum-norm tail condition holds, with the weighted tail integral still finite. For the lower-regularity condition at all radii, two-particle stability gives $\widehat\varphi(x)\geq-2\widehat B$ for $x\ne0$. Choose a finite $M\geq\max(2\widehat B,\widehat\psi(R))$ also satisfying $\widehat\varphi(0)\geq-M$, possible because the potential never takes $-\infty$. Extend the maximum-norm envelope by $\widetilde\psi(r)=M$ for $0\leq r<R$ and $\widetilde\psi(r)=\widehat\psi(r)$ for $r\geq R$. It is nonnegative and nonincreasing with finite weighted integral, bounds $-\widehat\varphi$ everywhere, and bounds $|\widehat\varphi|$ for $|x|_\infty\geq R$. Thus both lower and upper regularity hold. Densities are measured per dimensionless reference volume.

[A1] [[post-td-equilibrium-ensemble-sampling]]: at exact $N$ the positional partition integrates the Boltzmann factor on finite-energy configurations and gives infinite-energy configurations zero weight; on the specified free cube the grand partition is $\sum_N z^N Z_L(N;\beta)$ with $\alpha=\log z$. In the mathematical comparison, extend $e^{-\widehat\beta\widehat H}$ by zero at $\widehat H=+\infty$; for finite energies $\widehat\beta\widehat H=\beta H$.

[F2] [[post-td-classical-indistinguishable-particle-measure]]: each canonical sector uses $\mu_{\Lambda,N}=dx_1\cdots dx_N/N!$, fixing the positional reference normalization.

[L1] [[thm-tdmath-canonical-interior-density-limit]]: the current statement gives $V_L^{-1}\log Z(L,N_L;\widehat\beta)\to F(\rho,\widehat\beta)$ for free cubes and every sequence $N_L/V_L\to\rho$ at positive interior attainable density, under its stable regular Borel convention; excluded endpoints are not asserted. The carrier and draft proof text are present and the scoped batch-18 proof-contract check passes, but current owner Step 1 proof-readiness is recorded and independent review remains pending, so this premise remains conditional.

[L2] [[thm-tdmath-canonical-grand-duality]]: the current statement defines the free-cube grand pressure rate and states both Legendre--Fenchel identities for the closed effective-domain extension, with pressure existence delegated to its decreasing-integrable-tail supplier. Its item and draft proof text are present and the scoped batch-18 proof-contract check passes, but current owner Step 1 proof-readiness is recorded and independent review remains pending; this result is used conditionally.

## Proof

**Given:** The stable tail, Borel and numerical-energy conventions, finite-volume sector definitions, exact canonical limits [L1], and the actual draft closed-concave duality statement [L2]. The chosen reference length, $E_0=1\,\mathrm J$, and $1/N!$ convention are fixed across all volumes.

1.1 By [A1] and [F2], the free-wall partition on $\Lambda_L=[0,L)^d$ is precisely the activity sum over the canonical positional sectors used in [L2], with $\alpha=\log z$; [F1] and [L1] supply the stable-tail hypotheses and the canonical rate $F$ on its interior. In the mathematical partition, $\widehat\beta=E_0\beta$ and $\widehat H=H/E_0$, so the Boltzmann factors agree. [given, F1, A1, F2, L1, L2, algebra]

2.1 The conditional mathematical conclusion [L2] gives both displayed Legendre–Fenchel identities, including only the stipulated closed concave endpoint extension. [given, L1, L2, step 1.1]

3.1 Multiplication by $k_BT/\ell_0^d$ converts the dimensionless log-partition rate to physical pressure, while multiplication of the canonical rate by $-k_BT/\ell_0^d$ gives the stated positional free-energy density; the common measure normalization is fixed by [F2]. Since [L2] is a statement about thermodynamic functions, it supplies no local convergence or phase-uniqueness claim. [given, F2, L2, step 2.1] ∎

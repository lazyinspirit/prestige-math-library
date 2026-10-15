---
id: thm-tdmath-van-hove-fixed-n-limit
kind: theorem
title: Exact canonical limit on arbitrary van Hove shapes
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-van-hove-sequence
  - thm-tdmath-canonical-interior-density-limit
  - thm-tdmath-canonical-grand-duality
  - thm-tdmath-superstable-van-hove-pressure
  - lem-tdmath-integrable-tail-diagonal-gap
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-van-hove-sequence: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
  thm-tdmath-superstable-van-hove-pressure: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 4 and 7, printed pp.181–195 / PDF pp.11–25: canonical density and shape boundary estimates."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–3, printed pp.131–145 / PDF pp.4–18: stability and summable interaction-tail estimates."
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

Assume superstability and regularity, let $(\Omega_k)$ be van Hove, and let $N_k/|\Omega_k|\to\rho$ for an interior attainable density $\rho>0$. Use the general-region free-wall convention of [[thm-tdmath-superstable-van-hove-pressure]], namely
$$Z(\Lambda,N;\beta)=\frac1{N!}\int_{\{q\in\Lambda^N:q_i\neq q_j\ (i\neq j)\}}\exp\!\left(-\beta\sum_{1\leq i<j\leq N}\phi(q_i-q_j)\right)dq_1\cdots dq_N\quad(N\geq1),$$
with $Z(\Lambda,0;\beta)=1$ and $e^{-\beta(+\infty)}=0$, for bounded Lebesgue-measurable $\Lambda\subset\mathbb R^d$. For the free-wall exact-$N_k$ positional partition with this $1/N_k!$ normalization,
$$|\Omega_k|^{-1}\log Z(\Omega_k,N_k;\beta)\longrightarrow F_\beta(\rho),$$
the free-cube canonical rate of [[thm-tdmath-canonical-interior-density-limit]]. Superstability is used for the arbitrary-shape pressure upper bound; no stability-only upper theorem is asserted.

## Facts & Assumptions

**Given:** The stated interaction, van Hove sequence, $\beta>0$, and interior density.

[F1] [[def-tdmath-superstable-regular-interaction]]: stability bounds canonical weights and the tail envelope is summable.

[F2] [[def-tdmath-van-hove-sequence]]: fixed-width geometric boundary layers have negligible volume.

[F3] [[thm-tdmath-canonical-interior-density-limit]]: free-cube exact-$N$ rates converge to finite concave $F_\beta$ on the attainable interior.

[F4] [[thm-tdmath-canonical-grand-duality]]: $F_\beta(\rho)=\inf_\alpha(P(\alpha,\beta)-\alpha\rho)$.

[F5] [[thm-tdmath-superstable-van-hove-pressure]]: the free grand pressure on $\Omega_k$ converges to the cube pressure.

[F6] [[lem-tdmath-integrable-tail-diagonal-gap]]: separated core lattice interactions have a vanishing diagonal gap bound.

## Proof

**Given:** The assumptions and suppliers in Facts & Assumptions.

1.1 For any $\alpha\in\mathbb R$, $e^{\alpha N_k}Z(\Omega_k,N_k)\leq\Xi_{\Omega_k}(e^\alpha,\beta)$. Divide by volume, use [F5], and take the infimum over $\alpha$. The duality [F4] gives $\limsup |\Omega_k|^{-1}\log Z(\Omega_k,N_k)\leq F_\beta(\rho)$. [F4, F5, algebra]

1.2 Choose $\delta>0$ so $\rho-\delta,\rho+\delta$ lie in the attainable interior. For large core side $\ell$, choose integers $n_-,n_+$ with $n_\pm/\ell^d\to\rho\pm\delta$. Put a central $\ell$-cube inside each $(\ell+g)$-cell, with $g=g(\ell)$ from [F6]. The effective densities $n_\pm/(\ell+g)^d$ still bracket $\rho$ when $\ell$ is large. [F2, F3, F6, choose]

2.1 At fixed $\ell,g$, pack every complete $(\ell+g)$-cell contained in $\Omega_k$. Its count $M_k$ satisfies $M_k/|\Omega_k|\to(\ell+g)^{-d}$ by [F2]. Assign $n_+$ particles to $j_k$ cores and $n_-$ to the remaining cores, except one correction core with remainder $r_k$ chosen to make the total exactly $N_k$. Bracketing ensures $0\leq j_k<M_k$ for large $k$; Euclidean division gives $0\leq r_k<n_+-n_- \leq n_+$. Every correction integral $Z(\ell,r)$, $0\leq r\leq n_+$, is positive: delete particles from a positive-measure finite-energy set realizing $Z(\ell,n_+)>0$. There are finitely many such $r$, so the correction contributes $O_\ell(1)$ to the log weight. [F1, F2, step 1.2, algebra]

3.1 Exact assignment of labels cancels the global $N_k!$, leaving the product of core canonical integrals. The core lattice shell estimate bounds cross-energy per volume by $C K^2(\ell/g)^d\eta(g)$, where $K\ell^d\geq n_+$. Let $k\to\infty$ first, then $\ell\to\infty$. The packing fraction tends one, the cross error tends zero, and the two rates tend $F_\beta(\rho-\delta)$ and $F_\beta(\rho+\delta)$. The bracketing proportions tend one half, so the lower rate is at least their average. Finally $\delta\downarrow0$; finite concavity makes $F_\beta$ continuous at the interior density. Combined with step 1.1 this proves the limit. [F1, F2, F3, F6, step 2.1, algebra] ∎

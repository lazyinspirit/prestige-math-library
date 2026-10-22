---
id: ex-ip-40-finite-time-invisible-perturbation
kind: example
title: A potential perturbation beyond the two-trip distance is invisible before
  time T
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-ip-variable-metric-domain-of-dependence
  - lem-ip-smooth-boundary-tests-separate-locally-integrable-traces
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - def-ip-hyperbolic-dirichlet-to-neumann-map
  - lem-ip-wave-alessandrini-identity
  - def-riemannian-distance-on-a-connected-manifold
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis (full
        author lecture notes, arXiv:2312.08123v1)
      url: https://arxiv.org/pdf/2312.08123v1
      locator: "Theorems 3.1–3.2 and Remark 3.3, PDF pp. 21–22: finite-time support
        threshold for the potential difference; local proof is reduced to the
        batch-40 domain-of-dependence and Green identities."
    - title: Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for
        hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)
      url: https://arxiv.org/pdf/2311.06020v2
      locator: "§3.2, PDF p. 16: higher-dimensional finite-speed statement; its proof
        is supplied in the batch-40 domain-of-dependence carrier."
proof_strategy: combine finite propagation, the Green identity, and separation by test traces
---

## Example

Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with nonempty smooth boundary, let $T>0$, and let $q_1,q_2\in C^\infty(M;\mathbb R)$ be time independent. Put $Q_0=\operatorname{supp}(q_1-q_2)$, the closure of the set on which $q_1-q_2$ is nonzero, and suppose $Q_0\ne\varnothing$ and $d_g(Q_0,\partial M)>T/2$, where $d_g$ is the intrinsic Riemannian distance. For every smooth Dirichlet input $h\in C_c^\infty((0,T)\times\partial M)$, the full time-dependent forward Dirichlet-to-Neumann maps satisfy
$$\Lambda_{q_1}^+h=\Lambda_{q_2}^+h\quad\text{in }L^2((0,T)\times\partial M,dS_gdt).$$
Thus a perturbation supported farther than half the observation time from the boundary cannot be detected by boundary measurements made before time $T$.

## Example references

[[lem-ip-variable-metric-domain-of-dependence]]

[[lem-ip-smooth-boundary-tests-separate-locally-integrable-traces]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[def-ip-hyperbolic-dirichlet-to-neumann-map]]

[[lem-ip-wave-alessandrini-identity]]

[[def-riemannian-distance-on-a-connected-manifold]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the compact Riemannian manifold, static real potentials with $d_g(Q_0,\partial M)>T/2$, and smooth boundary input $h$.

[A1] Countable Choice is used through the DN-map and energy-solution interfaces and the uniqueness of the locally integrable representative of a regular distribution. ([[def-countable-choice]])

[F1] For any forward solution for $q_1$ with boundary value $h$ and terminal solution for $q_2$ with boundary value $k$, the interior product pairing is zero when $d_g(Q_0,\partial M)>T/2$. ([[lem-ip-variable-metric-domain-of-dependence]])

[F2] The forward DN map is the outward normal trace of the zero-initial solution; the terminal map is the outward normal trace of the zero-terminal solution. Both are in $L^2$ for the stated classical solution class. ([[def-ip-hyperbolic-dirichlet-to-neumann-map]])

[F3] For these forward and terminal solutions,
$$\int_Q(q_1-q_2)uv\,dV_gdt=\int_\Sigma(k\Lambda_{q_1}^+h-h\Lambda_{q_2}^-k)\,dS_gdt.$$ ([[lem-ip-wave-alessandrini-identity]])

[F4] If a locally integrable function on the smooth boundary cylinder pairs to zero with every compactly supported smooth test, then it vanishes almost everywhere, by chart localization and regular-distribution uniqueness. ([[lem-ip-smooth-boundary-tests-separate-locally-integrable-traces]])

## Proof

1.1 Fix arbitrary $k\in C_c^\infty((0,T)\times\partial M)$. Let $u_1$ be the forward solution for $q_1$ with boundary input $h$, and let $v_2$ be the terminal solution for $q_2$ with boundary input $k$. By [F1], $$\int_Q(q_1-q_2)u_1v_2\,dV_gdt=0.$$ Using [F3] therefore gives $$\int_\Sigma(k\Lambda_{q_1}^+h-h\Lambda_{q_2}^-k)\,dS_gdt=0.$$ [A1, F1, F3, given]

1.2 Apply [F3] again with both potentials equal to $q_2$. Its interior term is then zero, so $$\int_\Sigma(k\Lambda_{q_2}^+h-h\Lambda_{q_2}^-k)\,dS_gdt=0.$$ [F3, given]

2.1 Subtract step 1.2 from step 1.1. The terminal terms cancel, yielding $$\int_\Sigma k(\Lambda_{q_1}^+h-\Lambda_{q_2}^+h)\,dS_gdt=0$$ for every smooth compactly supported $k$. The difference of the two traces belongs to $L^2(\Sigma)$ by [F2], hence is locally integrable. Its pairing with every $k$ is zero; [F4] implies that its $L^2$ class vanishes. This is the asserted equality of forward DN data. [A1, F2, F4, step 1.1, step 1.2, given] ∎

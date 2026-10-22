---
id: lem-ip-bv-test-field-characterization-and-lsc
kind: lemma
title: Test-field formula and L1 lower semicontinuity of spatial TV
status: draft
origin: pipeline
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - lem-ip-vector-radon-variation-is-radon
  - lem-ip-smooth-compact-support-dense-in-c0
  - thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement

For every open $\Omega\subseteq\mathbb R^n$ and real-valued $u\in BV(\Omega)$, $$TV(u;\Omega)=\sup\left\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\varphi\in C_c^\infty(\Omega;\mathbb R^n),\ |\varphi(x)|\le1\right\}.$$ If $u_k,u\in BV(\Omega)$ are real-valued and $u_k\to u$ in $L^1(\Omega)$, then $TV(u;\Omega)\le\liminf_kTV(u_k;\Omega)$. In addition, assuming Dependent Choice, for any real-valued $u\in L^1(\Omega)$ the displayed supremum is finite if and only if $u\in BV(\Omega)$, with equality to $TV(u;\Omega)$; under the same assumption, an $L^1$ limit of real-valued BV functions with bounded liminf total variation belongs to $BV(\Omega)$ and satisfies the same lower-semicontinuity inequality.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Spatial BV, its distributional derivative, and total variation.]]

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$, a real-valued $u\in BV(\Omega)$, and, for the lower-semicontinuity clause, real-valued $u_k\in BV(\Omega)$ with $u_k\to u$ in $L^1(\Omega)$.

[A1] Dependent Choice is assumed only for the finite-test-supremum characterization of arbitrary $L^1$ functions. ([[def-dependent-choice]])

[F1] The distributional derivative acts on a compactly supported smooth test function by the negative-transpose formula. ([[def-ip-spatial-bv-and-distributional-tv]])

[F2] The partition variation of a finite vector of signed Radon measures is a finite positive Radon measure and equals the supremum over compactly supported continuous vector fields of norm at most one. ([[lem-ip-vector-radon-variation-is-radon]])

[F3] $C_0(\Omega)$ is the space of continuous functions vanishing at infinity; compactly supported smooth functions are dense in it in the uniform norm. ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[lem-ip-smooth-compact-support-dense-in-c0]])

[F4] Under Dependent Choice, every bounded complex linear functional on $C_0(\Omega;\mathbb C)$ is integration against a unique finite regular complex measure; the proof includes the real signed-functional case. ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]])

## Proof

**Given:** The hypotheses listed above.

1.1 Suppose $u\in BV(\Omega)$ and write $\mu=Du$. The distributional derivative identity gives $\int_\Omega u\,\operatorname{div}\varphi\,dx=-\int_\Omega\varphi\cdot d\mu$. The continuous-field dual formula [F2] bounds the supremum over smooth fields by $|\mu|(\Omega)$. Conversely, for any $f\in C_c(\Omega;\mathbb R^n)$ with $|f|\le1$, density [F3] gives smooth compactly supported $f_j\to f$ uniformly; replacing $f_j$ by $f_j/\max(1,\|f_j\|_\infty)$ keeps the unit bound and preserves uniform convergence. The integrals against the finite vector measure converge, so the smooth supremum is at least the continuous-field supremum $|\mu|(\Omega)$. Thus $V(u)=TV(u;\Omega)$. [F1, F2, F3, given, choose]

1.2 Assume [A1], let real-valued $u\in L^1(\Omega)$, and suppose $M:=V(u)<\infty$. For each coordinate $i$, define $L_i(\psi):=-\int_\Omega u\,\partial_i\psi\,dx$ on real $C_c^\infty(\Omega)$. Taking the test vector with only its $i$th component equal to $\psi$ and also its negative shows $|L_i(\psi)|\le M\|\psi\|_\infty$. By density [F3], $L_i$ extends uniquely to a bounded real linear functional on real $C_0(\Omega)$. Complexify it by $L_i^{\mathbb C}(f):=L_i(\operatorname{Re}f)+iL_i(\operatorname{Im}f)$ and apply [F4] to obtain a finite complex Radon measure $\mu_i$. Its imaginary part integrates every real $C_0$ function to zero, so uniqueness in [F4] makes that part zero; thus $\mu_i$ is a finite signed Radon measure representing $D_i u$. Applying [F2] to $\mu=(\mu_1,\ldots,\mu_n)$ and using [F3] to pass between continuous and smooth unit fields gives $|\mu|(\Omega)=M$. Hence $u\in BV(\Omega)$ and $TV(u;\Omega)=M$. [A1, F2, F3, F4, given, construct]

2.1 If the $L^1$ limit $u$ is already in $BV(\Omega)$, boundedness of $\operatorname{div}\varphi$ gives $\int u\,\operatorname{div}\varphi=\lim_k\int u_k\,\operatorname{div}\varphi$ for each admissible $\varphi$. Each approximating integral is at most $TV(u_k;\Omega)$ by step 1.1, so taking the supremum gives $TV(u;\Omega)\le\liminf_kTV(u_k;\Omega)$; this branch uses no choice axiom. [given, step 1.1]

3.1 If only $L:=\liminf_kTV(u_k;\Omega)<\infty$ is known, choose a subsequence whose variations converge to $L$. The same test-integral limit gives $V(u)\le L$. Under [A1], step 1.2 implies $u\in BV(\Omega)$ and $TV(u;\Omega)=V(u)\le L$. If $L=+\infty$, the extended inequality is automatic. [A1, given, step 1.2, choose] ∎

---
id: thm-ip-wave-data-determine-light-ray-integrals
kind: theorem
title: Wave boundary data determine integrals along maximal geodesics shorter than T
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 5
deps:
  - lem-ip-wave-alessandrini-identity
  - lem-ip-simple-geometry-global-eikonal-geometric-optics
  - def-ip-hyperbolic-dirichlet-to-neumann-map
  - def-ip-simple-riemannian-background
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorem 3.1 and its proof, PDF pp. 21–22: equality of hyperbolic boundary data yields integrals of the static potential difference along nontrapped rays shorter than T."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§5.1, PDF pp. 22–23: high-frequency boundary solutions and the data-to-ray-integral limit; the local proof obligation is to give all beam error estimates."
proof_strategy: Alessandrini identity and proved finite-order simple-geometry geometric optics
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$, with smooth boundary, let $T>0$, and let $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$ be static interior potentials. Suppose the full time-dependent forward Dirichlet-to-Neumann maps for $\partial_t^2-\Delta_g+q_1$ and $\partial_t^2-\Delta_g+q_2$ agree for every smooth Dirichlet input compactly supported in $(0,T)\times\partial M$. Let $\gamma:[0,L]\to M$ be any unit-speed geodesic segment with $\gamma(0),\gamma(L)\in\partial M$, $\gamma((0,L))\subset M^\circ$, directed inward at $0$ and outward at $L$, and with length $0<L<T$. Then
$$\int_0^L(q_1-q_2)(\gamma(s))\,ds=0.$$

## Statement references

[[def-ip-simple-riemannian-background]]

[[def-ip-hyperbolic-dirichlet-to-neumann-map]]

[[lem-ip-wave-alessandrini-identity]]

[[lem-ip-simple-geometry-global-eikonal-geometric-optics]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The two real static interior potentials on the stated simple manifold, equal full forward DN maps on all smooth time-compact inputs, and a maximal unit-speed ray of length $L<T$.

[F1] [[lem-ip-wave-alessandrini-identity]] gives the bilinear forward/terminal identity with outward classical traces.

[F2] [[lem-ip-simple-geometry-global-eikonal-geometric-optics]] gives exact smooth forward and terminal waves with time-compact smooth boundary traces, uniformly bounded approximate $L^2$ norms, vanishing $L^2$ correction errors, and the unweighted ray-product limit.

[F3] [[def-ip-hyperbolic-dirichlet-to-neumann-map]] specifies equality on the entire smooth time-compact boundary input space and the terminal map convention.

## Proof

1.1 First use [F1] with both potentials equal to a single real $q$. Its left side is zero, so for every $h,k$ in the boundary input space $$\int_\Sigma k\Lambda_q^+h\,dS_gdt=\int_\Sigma h\Lambda_q^-k\,dS_gdt.$$ This is a bilinear transposition identity and uses exactly the classical forward and terminal solutions, whose endpoint terms vanish. Therefore the right side of [F1] for $q_1,q_2$ equals $\int_\Sigma k(\Lambda_{q_1}^+-\Lambda_{q_2}^+)h\,dS_gdt$, which is zero under the assumed equality of forward maps. Hence $\int_Q(q_1-q_2)uv\,dV_gdt=0$ for every admitted forward $q_1$ wave and terminal $q_2$ wave. [F1, F3, given, algebra]

2.1 Choose $t_0\in(0,T-L)$ and insert the exact waves of [F2] into step 1.1. Their boundary traces belong to the full input space for each $\lambda$, so the zero identity applies without a limit or density assumption on boundary data. The product convergence of [F2], with $A(t,x)=q_1(x)-q_2(x)$, gives $$0=\lim_{\lambda\to\infty}\int_Q(q_1-q_2)u_{1,\lambda}u_{2,\lambda}\,dV_gdt=\int_0^L(q_1-q_2)(\gamma(s))\,ds.$$ The test is legitimate either by [F2]'s closed-cylinder conclusion or by a temporal cutoff equal to one on all approximate packets; its omitted exact-product terms contain vanishing correction factors. Since the ray was arbitrary subject to $L<T$, every claimed ray integral is determined. [F2, step 1.1, given, algebra] ∎

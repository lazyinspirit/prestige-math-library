---
id: lem-ip-wave-alessandrini-identity
kind: lemma
title: Alessandrini identity for the time-dependent wave Dirichlet-to-Neumann maps
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 4
deps:
  - def-ip-hyperbolic-dirichlet-to-neumann-map
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-volume-density
  - def-countable-choice
proof_strategy: direct Green identity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis (full
        author lecture notes, arXiv:2312.08123v1)
      url: https://arxiv.org/pdf/2312.08123v1
      locator: "§3.1, complete proof of Lemma 3.4, PDF pp. 23–24: the forward-terminal
        Green pairing and potential difference identity."
    - title: Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for
        hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)
      url: https://arxiv.org/pdf/2311.06020v2
      locator: "§§2.4 and 3.3, PDF pp. 9 and 17–18: the hyperbolic boundary pairing
        and its normal-trace conventions."
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with smooth boundary, let $T>0$, and let $q_1,q_2\in C^\infty(M;\mathbb R)$ be independent of time. Write $Q=(0,T)\times M$, $\Sigma=(0,T)\times\partial M$, and $P=\partial_t^2-\Delta_g$. For $h,k\in C_c^\infty(\Sigma)$, let $u$ be the zero-initial-data solution for $P+q_1$ with boundary value $h$, and let $v$ be the zero-terminal-data solution for $P+q_2$ with boundary value $k$, in the classical solution classes used to define the forward map $\Lambda_{q_1}^+$ and terminal map $\Lambda_{q_2}^-$; thus $u,v\in C^2([0,T]\times M)$. Then
$$\int_0^T\!\int_M(q_1-q_2)u(t,x)v(t,x)\,dV_g(x)\,dt=\int_0^T\!\int_{\partial M}\big(k\,\Lambda_{q_1}^+h-h\,\Lambda_{q_2}^-k\big)\,dS_g\,dt.$$
The boundary factors are paired bilinearly, without complex conjugation, and each normal derivative is the outward classical normal trace.

## Statement references

[[def-ip-hyperbolic-dirichlet-to-neumann-map]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-volume-density]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the two real smooth static potentials, smooth compactly time-supported boundary data, and the stated forward and terminal classical solutions.

[A1] Countable Choice is the axiom base of the forward energy theorem used in the DN-map interfaces; the integral calculation itself is a choice-free application of Green's identity. ([[def-countable-choice]])

[F1] For $C^2$ functions $u,v$ on the time cylinder,
$$\int_Q((\partial_t^2-\Delta_g)u\,v-u(\partial_t^2-\Delta_g)v)\,dV_gdt=\int_\Sigma(u\partial_{\nu_{out}}v-v\partial_{\nu_{out}}u)\,dS_gdt+\int_M[\partial_tu\,v-u\partial_tv]_{t=0}^{t=T}\,dV_g.$$ ([[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]])

[F2] The forward map uses the unique zero-initial solution with Dirichlet value $h$ and returns its outward normal trace; the terminal map uses the unique zero-terminal solution with boundary value $k$ and returns its outward normal trace. ([[def-ip-hyperbolic-dirichlet-to-neumann-map]])

[F3] $P+q_j$ means $\partial_t^2-\Delta_g+q_j$, and the Riemannian density in the interior pairing is $dV_g$. ([[def-riemannian-volume-density]])

## Proof

1.1 Apply [F1] to $u$ and $v$. Since $(P+q_1)u=0$ and $(P+q_2)v=0$, one has $Pu=-q_1u$ and $Pv=-q_2v$. Thus the left side of [F1] is $$\int_Q((-q_1u)v-u(-q_2v))\,dV_gdt=-\int_Q(q_1-q_2)uv\,dV_gdt.$$ [A1, F1, F2, F3, given, algebra]

1.2 The temporal endpoint term in [F1] is zero. At $t=T$, $v(T)=v_t(T)=0$; at $t=0$, $u(0)=u_t(0)=0$. These are exactly the two endpoint products in the bracket. [F1, F2, given]

2.1 The boundary term in [F1] equals $$\int_\Sigma(h\,\Lambda_{q_2}^-k-k\,\Lambda_{q_1}^+h)\,dS_gdt$$ by the prescribed traces $u|_\Sigma=h$, $v|_\Sigma=k$ and [F2]. Combining this with steps 1.1–1.2 gives the stated identity after multiplying both sides by $-1$. [F1, F2, step 1.1, step 1.2, algebra] ∎

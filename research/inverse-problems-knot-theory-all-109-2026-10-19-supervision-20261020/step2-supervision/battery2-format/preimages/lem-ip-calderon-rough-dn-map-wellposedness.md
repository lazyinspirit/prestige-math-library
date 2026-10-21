---
id: lem-ip-calderon-rough-dn-map-wellposedness
kind: lemma
title: Well-posedness of the weak conductivity Dirichlet-to-Neumann map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hk-and-hk-zero-notation
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - def-wkp-zero-as-a-sobolev-closure
  - lem-ip-calderon-boundary-trace-quotient-identification
  - thm-lax-milgram
  - thm-poincare-inequality-for-w-one-p-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 1, printed pp. 1–2: existence, uniqueness and energy definition of the weak DN map for positive bounded conductivities."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 2.1, printed pp. 5–6: the weak Dirichlet problem and bounded energy-form DN map."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be a nonempty bounded connected $C^1$ domain, let $0<m\le M<\infty$, and let $\gamma\in L^\infty(\Omega;\mathbb R)$ satisfy $m\le\gamma\le M$ almost everywhere. Define $\mathcal D(\Omega):=H^1(\Omega;\mathbb C)/H_0^1(\Omega;\mathbb C)$ with its quotient norm. For every boundary trace class $f\in\mathcal D(\Omega)$ there is a unique $u_{\gamma,f}\in f$ such that
$$\int_\Omega\gamma\,\nabla u_{\gamma,f}\cdot\overline{\nabla z}\,dx=0\qquad\text{for every }z\in H_0^1(\Omega;\mathbb C).$$
For every $g\in\mathcal D(\Omega)$, the value $\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\overline{\nabla V_g}\,dx$ is independent of the representative $V_g\in g$ and defines a bounded linear map $\Lambda_\gamma:\mathcal D(\Omega)\to\mathcal D(\Omega)^*$. Constants are in its kernel and its range functionals annihilate constants.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The uniformly positive bounded conductivity class.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak energy-form DN map convention.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the domain and conductivity class of [[def-ip-calderon-admissible-conductivity-class]]; the trace quotient $\mathcal D(\Omega)=H^1(\Omega;\mathbb C)/H_0^1(\Omega;\mathbb C)$; and the weak DN map convention of [[def-ip-calderon-weak-dn-map-for-bounded-conductivities]].

[F1] Every $\gamma\in\Gamma_{m,M}(\Omega)$ is real measurable and satisfies $m\le\gamma\le M$ almost everywhere. ([[def-ip-calderon-admissible-conductivity-class]])

[F2] $\mathcal D(\Omega)$ is the quotient $H^1/H_0^1$ with the quotient norm; its elements are cosets with $H^1$ representatives, and $H_0^1$ is the closure of $C_c^\infty(\Omega)$. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-boundary-trace-quotient-identification]], [[def-hk-and-hk-zero-notation]], [[def-wkp-zero-as-a-sobolev-closure]])

[F3] Since $\Omega\subset(0,1)^d$, it is contained in the slab $0<x_1<1$; for $w\in H_0^1(\Omega)$ the Poincaré inequality gives $\|w\|_{L^2}\le\|\nabla w\|_{L^2}$. ([[thm-poincare-inequality-for-w-one-p-zero]])

[F4] On a Hilbert space, a bounded coercive sesquilinear form and a bounded conjugate-linear functional determine a unique weak solution, with solution norm bounded by the functional norm divided by the coercivity constant. ([[thm-lax-milgram]])

[A1] The Axiom of Choice is assumed at the zero-boundary Poincaré and trace-space interfaces. ([[def-axiom-of-choice]])

[A2] Countable Choice is assumed at the Poincaré and Lax–Milgram interfaces. ([[def-countable-choice]])

## Proof

**Given:** The Axiom of Choice and Countable Choice; $\Omega$ and $\gamma$ as in the statement; and the quotient trace classes $f,g\in\mathcal D(\Omega)$.

1.1 For $w\in H_0^1(\Omega)$, [F3] gives $\|w\|_{H^1}^2=\|w\|_2^2+\|\nabla w\|_2^2\le2\|\nabla w\|_2^2$. By [F1], the form $a_\gamma(w,z):=\int_\Omega\gamma\nabla w\cdot\overline{\nabla z}\,dx$ is bounded by $M\|w\|_{H^1}\|z\|_{H^1}$ and satisfies $a_\gamma(w,w)\ge(m/2)\|w\|_{H^1}^2$. Thus it is bounded and coercive on $H_0^1(\Omega)$. [F1, F3, given, algebra]

1.2 Choose any representative $U\in f$. The functional $z\mapsto-a_\gamma(U,z)$ is bounded and conjugate-linear on $H_0^1$, with norm at most $M\|U\|_{H^1}$. Lax–Milgram [F4] applied to step 1.1 gives a unique $w\in H_0^1$ satisfying $a_\gamma(w,z)=-a_\gamma(U,z)$ for every $z\in H_0^1$. Then $u:=U+w\in f$ satisfies the required weak equation. [A1, A2, F2, F4, step 1.1, choose]

1.3 If $u_1,u_2\in f$ both solve the weak equation, then $v:=u_1-u_2\in H_0^1$ by the quotient definition in [F2], and $a_\gamma(v,z)=0$ for every $z\in H_0^1$. Taking $z=v$ gives $m\|\nabla v\|_2^2\le a_\gamma(v,v)=0$; [F3] then gives $\|v\|_2=0$, so $v=0$. This proves uniqueness. [F1, F2, F3, step 1.2, algebra]

1.4 For $f_1,f_2\in\mathcal D(\Omega)$ and $c_1,c_2\in\mathbb C$, the function $c_1u_{\gamma,f_1}+c_2u_{\gamma,f_2}$ belongs to the trace class $c_1f_1+c_2f_2$. The weak equation is linear in its solution because the energy form is linear in its first argument, so this combination solves the weak problem for that class. Uniqueness from step 1.3 gives $u_{\gamma,c_1f_1+c_2f_2}=c_1u_{\gamma,f_1}+c_2u_{\gamma,f_2}$. The energy definition is also linear in this first argument, hence $\Lambda_\gamma$ is linear. [F1, F2, step 1.2, step 1.3, algebra]

2.1 If $V_g,V'_g\in g$, then $V_g-V'_g\in H_0^1$ by [F2], so the weak equation for $u_{\gamma,f}$ makes $a_\gamma(u_{\gamma,f},V_g)=a_\gamma(u_{\gamma,f},V'_g)$. Thus the defining functional is independent of the representative. [F2, step 1.2]

2.2 For a representative $U\in f$, the solution estimate in [F4] and step 1.1 give $\|u_{\gamma,f}\|_{H^1}\le(1+2M/m)\|U\|_{H^1}$. Taking the infimum over representatives gives $\|u_{\gamma,f}\|_{H^1}\le(1+2M/m)\|f\|_{\mathcal D}$. Applying the same representative bound to $g$ yields
$$|a_\gamma(u_{\gamma,f},V_g)|\le M(1+2M/m)^2\|f\|_{\mathcal D}\|g\|_{\mathcal D},$$
so $\Lambda_\gamma$ is bounded into $\mathcal D^*$. [F1, F2, F4, step 1.1, step 1.2, algebra]

3.1 For a constant input $c$, the constant function $u=c$ solves the weak equation and uniqueness gives $u_{\gamma,c}=c$, whose gradient is zero. For a constant test class $c$, its constant representative has zero gradient. The energy formula therefore vanishes on constant inputs and constant tests, so it induces the stated map on the quotient by constants. [F2, step 1.2, step 1.3, step 2.1, step 2.2, algebra] ∎

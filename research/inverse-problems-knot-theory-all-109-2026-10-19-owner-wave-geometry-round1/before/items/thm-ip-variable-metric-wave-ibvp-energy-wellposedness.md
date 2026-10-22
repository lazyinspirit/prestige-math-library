---
id: thm-ip-variable-metric-wave-ibvp-energy-wellposedness
kind: theorem
title: Energy well-posedness for the variable-metric wave equation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
axiom_base: Countable Choice
deps:
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-countable-choice
provenance:
  statement: literature-derived
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.1, forward wave problem and energy estimate preceding Lemma 3.4, PDF pp. 22–24; the well-posedness proof is referred to the standard wave-equation theory cited there."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§2.4 and 3.3, PDF pp. 9 and 17–18, for wave integration by parts and the energy method; no Galerkin proof for the stated compact-manifold energy class is supplied there."
proof_strategy: Galerkin construction followed by energy estimates
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with nonempty smooth boundary, let $T>0$, and let $q\in C^\infty(M;\mathbb R)$ be independent of time. Let $dV_g$ be Riemannian volume and $L^2(M)=L^2(M,dV_g)$. A weak coordinate derivative $D_iw$ is defined by $\int w\,\partial_i\psi=-\int D_iw\,\psi$ for every smooth compactly supported coordinate test $\psi$. Let $H^1(M)$ be the space of $L^2$ functions whose weak coordinate first derivatives are locally $L^2$ in smooth charts and whose weak differential has finite metric $L^2$ norm; write $\nabla_gu$ for the metric dual of that weak differential. Give it norm
$$\|w\|_{H^1(M)}^2=\int_M(|w|^2+|\nabla_gw|_g^2)\,dV_g,$$
and let $H_0^1(M)$ be the closure of $C_c^\infty(M^\circ)$ in this norm. For $u_0\in H_0^1(M)$, $u_1\in L^2(M)$, and $F\in L^1((0,T);L^2(M))$, there is a unique energy solution of the homogeneous Dirichlet problem
$$u_{tt}-\Delta_gu+q(x)u=F,\qquad u|_{(0,T)\times\partial M}=0,\qquad (u(0),u_t(0))=(u_0,u_1),$$
where energy solution means
$$u\in C([0,T];H_0^1(M))\cap C^1([0,T];L^2(M)),$$
and, for every $\phi\in H_0^1(M)$ and every $\zeta\in C_c^\infty(0,T)$, the weak equation is
$$\int_0^T(u(t),\phi)_{L^2}\zeta''(t)\,dt+\int_0^T\!\int_M\big(\langle\nabla_gu(t),\nabla_g\phi\rangle_g+q\,u(t)\phi\big)\zeta(t)\,dV_gdt=\int_0^T(F(t),\phi)_{L^2}\zeta(t)\,dt.$$
There is a constant $C=C(M,g,q,T)<\infty$ such that
$$\sup_{0\le t\le T}\big(\|u(t)\|_{H^1(M)}+\|u_t(t)\|_{L^2(M)}\big)\le C\big(\|u_0\|_{H^1(M)}+\|u_1\|_{L^2(M)}+\|F\|_{L^1((0,T);L^2(M))}\big).$$
In particular, the solution $w$ with zero initial data satisfies the correction estimate
$$\sup_{0\le t\le T}\big(\|w(t)\|_{H^1(M)}+\|w_t(t)\|_{L^2(M)}\big)\le C\|F\|_{L^1((0,T);L^2(M))}.$$
The corresponding assertion for prescribed terminal data follows by time reversal. For smooth Dirichlet data compactly supported away from the time endpoints, the boundary lifting in the Riemannian Green-and-lifting lemma reduces the problem to this homogeneous-boundary assertion.

## Statement references

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-weak-derivative-of-a-locally-integrable-function]]

[[def-sobolev-space-wkp-and-its-norm]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[def-countable-choice]]

## Proof status

The full statement is retained. The Galerkin/semigroup existence and energy-class trace argument has not been completed, so this draft does not claim a proof or readiness. The exact missing proof obligations and proposed local supplier placement are recorded in the batch-40 notes and source-evidence file.

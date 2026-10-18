---
id: lem-na-ultraweak-poisson-bounded-load-lifting
kind: lemma
title: A topology-free bounded lifting of every ultraweak Poisson load
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-na-ultraweak-poisson-dpg-formulation, lem-na-ultraweak-poisson-skeleton-quotients, lem-na-hdiv-is-hilbert-and-h0div-closed, lem-w-one-two-is-a-hilbert-space, lem-na-hdiv-weak-normal-trace, lem-na-homogeneous-dirichlet-poincare, thm-riesz-representation-for-hilbert-space, thm-lax-milgram, def-na-hdiv-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {statement: ai-altered, proof: ai-altered}
sources:
  references:
    - title: Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method
      url: https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf
      locator: Section 3.2 gives the exact real ultraweak Poisson form and broken graph test norm; the arbitrary-load lifting is proved locally here.
    - title: Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation
      url: https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf
      locator: Sections 4.1–4.3 use a topological decomposition under simple connectivity; the present lifting does not use that route.
verification: {}
---

## Statement

Assume Countable Choice and the real spaces and signs of [[def-na-ultraweak-poisson-dpg-formulation]]. For every bounded connected Lipschitz polyhedron $Ω\subset\mathbb R^d$, $d\in\{2,3\}$, and every finite conforming shape-regular simplicial mesh, give $U$ the squared product norm from its two $L^2$ factors and two global trace lift-infimum norms, and give $V$ its full broken graph norm. Define $B:U\to V'$ by $(Bx)(y)=b(x,y)$. There is a bounded linear map $R:V'\to U$ such that $BR=I_{V'}$ and $\|R\|\le C_*$. Choose any $C_P>0$ with $\|w\|_2\le C_P\|\nabla w\|_2$ for $w\in H^1_0(\Omega)$, put $a=(C_P^2+2)^{1/2}$, and set $$C_*^2=(1+a)^2+(1+C_Pa)^2+(1+C_P^2)a^2+(\sqrt2+a)^2+1.$$ The constant is independent of the mesh. No simple-connectivity or connected-boundary hypothesis is imposed.

## Facts & Assumptions

**Given:** Countable Choice, the stated domain and mesh, the real ultraweak spaces and bilinear form, a Poincaré constant $C_P$, and an arbitrary $F\in V'$.

[A1] Countable Choice is the stated axiom for the real Hilbert, Riesz, trace and Lax–Milgram interfaces. ([[def-countable-choice]])

[F1] The formulation fixes the real product spaces, the global trace ranges with lift-infimum norms, and all five signs in $b$. ([[def-na-ultraweak-poisson-dpg-formulation]], [[lem-na-ultraweak-poisson-skeleton-quotients]])

[F2] The finite broken products of $H(\operatorname{div})$ and $H^1$ are real Hilbert spaces, and $H^1_0(\Omega)$ is a real Hilbert space with its restricted $H^1$ inner product. ([[lem-na-hdiv-is-hilbert-and-h0div-closed]], [[lem-w-one-two-is-a-hilbert-space]])

[F3] On a real Hilbert space, Riesz represents every bounded linear functional by a unique vector and preserves its norm. ([[thm-riesz-representation-for-hilbert-space]])

[F4] A bounded coercive real bilinear form on a real Hilbert space has a unique solution for every bounded linear right-hand side under Countable Choice. ([[thm-lax-milgram]])

[F5] For bounded open $\Omega$, homogeneous Dirichlet Poincaré gives $\|w\|_2\le C_P\|\nabla w\|_2$ on $H^1_0(\Omega)$; a coordinate-slab width supplies such a constant. ([[lem-na-homogeneous-dirichlet-poincare]])

[F6] The weak normal trace of a global $H(\operatorname{div})$ field is defined by the cell Green functional, and an $L^2$ vector with $L^2$ distributional divergence belongs to $H(\operatorname{div})$. ([[lem-na-hdiv-weak-normal-trace]], [[def-na-hdiv-space]])

## Proof

1.1 By [F2] and [F3], there is a unique $(\rho,z)\in V$ such that $$F(\tau,v)=(\rho,\tau)+(\operatorname{div}_h\rho,\operatorname{div}_h\tau)+(z,v)+(\nabla_hz,\nabla_hv).$$ Set $g=\rho$, $r=\operatorname{div}_h\rho$, $f=z$, and $s=\nabla_hz$, viewed as global $L^2$ classes by the finite mesh partition. If $D=\|F\|_{V'}$, then $\|g\|_2^2+\|r\|_2^2+\|f\|_2^2+\|s\|_2^2=D^2$. [A1, F2, F3, given, algebra]

2.1 On $H^1_0(\Omega)$ use the form $\mathfrak a(w,\phi)=(\nabla w,\nabla\phi)$. It is bounded in the $H^1$ norm, and [F5] gives $\mathfrak a(w,w)\ge(1+C_P^2)^{-1}\|w\|_{H^1}^2$. The functional $\phi\mapsto(f,\phi)+(g+s,\nabla\phi)$ is bounded, since its absolute value is at most $(C_P\|f\|_2+\|g\|_2+\|s\|_2)\|\nabla\phi\|_2$. Thus [F4] gives a unique $w\in H^1_0(\Omega)$ satisfying $$(\nabla w,\nabla\phi)=(f,\phi)+(g+s,\nabla\phi)\qquad(\phi\in H^1_0(\Omega)).$$ Testing with $w$ and using Cauchy–Schwarz yields $\|\nabla w\|_2\le C_P\|f\|_2+\|g\|_2+\|s\|_2\le aD$, including the case $\nabla w=0$; hence $\|w\|_2\le C_PaD$. [A1, F2, F4, F5, step 1.1, algebra]

3.1 Set $\sigma=g-\nabla w$, $u=w-r$, and $q=g+s-\nabla w$. For every $\phi\in C_c^\infty(\Omega)$, step 2.1 gives $(q,\nabla\phi)=-(f,\phi)$, so $\operatorname{div}q=f$ distributionally and $q\in H(\operatorname{div};\Omega)$. Set $\widehat u=\Gamma_0w$ and $\widehat\sigma_n=\Gamma_nq$, using the elementwise scalar and weak normal traces. Since $w\in H^1_0(\Omega)$ and $q$ is one global $H(\operatorname{div})$ field, these traces lie in the exact global ranges of [F1], with homogeneous scalar boundary trace and conservative normal trace. Define $RF=(\sigma,u,\widehat u,\widehat\sigma_n)\in U$. [F1, F6, step 1.1, step 2.1, construct, algebra]

4.1 Cell Green identities give $\langle\widehat u,\tau\cdot n\rangle=(\nabla w,\tau)+(w,\operatorname{div}_h\tau)$ and $\langle\widehat\sigma_n,v\rangle=(q,\nabla_hv)+(f,v)$. Substitution into the five signed terms of the form gives $$b(RF,(\tau,v))=(g-\nabla w,\tau)-(w-r,\operatorname{div}_h\tau)+(\nabla w,\tau)+(w,\operatorname{div}_h\tau)-(g+s-\nabla w,\nabla_hv)+(q,\nabla_hv)+(f,v)=(g,\tau)+(r,\operatorname{div}_h\tau)+(s,\nabla_hv)+(f,v)=F(\tau,v).$$ Therefore $BR=I_{V'}$. [F1, F6, step 1.1, step 3.1, algebra]

5.1 From steps 1.1–3.1, $\|\sigma\|_2\le(1+a)D$, $\|u\|_2\le(1+C_Pa)D$, $\|\widehat u\|_{\widehat U}\le\|w\|_{H^1}\le\sqrt{1+C_P^2}\,aD$, and $\|\widehat\sigma_n\|_{\widehat Q_n}\le\|q\|_{H(\operatorname{div})}\le\sqrt{(\sqrt2+a)^2+1}\,D$, since $\|g+s\|_2\le\sqrt2D$ and $\operatorname{div}q=f$. Adding the four squared product components gives $\|RF\|_U\le C_*D$. Riesz and the unique weak solve depend linearly on $F$ (a linear combination solves the combined variational equation, and uniqueness identifies it), and the remaining field and trace maps are linear; hence $R$ is linear. Only $C_P$ enters the bound, so it is mesh-independent. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

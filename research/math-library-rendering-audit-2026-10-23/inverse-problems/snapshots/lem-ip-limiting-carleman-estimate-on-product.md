---
id: lem-ip-limiting-carleman-estimate-on-product
kind: lemma
title: "Limiting Carleman estimate and right solvability on a product domain"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-axiom-of-choice
  - def-countable-choice
  - def-riemannian-metric-and-riemannian-manifold
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - thm-complex-hahn-banach-norm-preserving-extension
  - thm-riesz-representation-for-hilbert-space
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dos Santos Ferreira, Kenig, Salo, and Uhlmann, Limiting Carleman weights and anisotropic inverse problems (2009)"
      url: "https://arxiv.org/pdf/0803.3508"
      locator: "Section 4, Theorem 4.1 and proof, PDF pp. 25-28."
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 5.1, Carleman estimates for test functions."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $(M,g)$ be a transversally anisotropic product domain, let $q\in C^\infty(\overline M,\mathbb R)$, and let $\varphi=\sigma x_1$ for $\sigma\in\{-1,1\}$. There exist constants $h_0>0$ and $C>0$, depending on $(M,g)$ and $q$ and valid for both signs, with the following properties. For $0<h\leq h_0$ define
$$P_{\varphi,h,q}=e^{\varphi/h}h^2(-\Delta_g+q)e^{-\varphi/h}.$$
Every $w\in C_c^\infty(M^\circ)$ satisfies
$$\|w\|_{L^2(M)}\leq Ch^{-1}\|P_{\varphi,h,q}w\|_{L^2(M)}.$$
Moreover, for every $F\in L^2(M)$ there is an $R\in L^2(M)$ solving $P_{\varphi,h,q}R=F$ in distributions on $M^\circ$ and satisfying
$$\|R\|_{L^2(M)}\leq Ch^{-1}\|F\|_{L^2(M)}.$$
No boundary trace is prescribed for $R$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product metric and distinguished coordinate]]

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Sobolev spaces and distributional interpretation]]

## Facts & Assumptions

**Given:** AC and Countable Choice, a compact product subdomain $(M,g)\Subset(\mathbb R\times M_0^\circ,dx_1^2\oplus g_0)$, a real smooth $q$, a sign $\sigma\in\{-1,1\}$, and $0<h\leq h_0$.

[F1] [[def-ip-transversally-anisotropic-product-domain]]: the metric is the product $dx_1^2\oplus g_0$, so its coefficients are independent of $x_1$ and $|\nabla_gx_1|=1$.

[F2] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: $L^2$ and $H^1$ are defined by the Riemannian density and fixed chartwise Sobolev norms; compactly supported interior smooth functions have no boundary terms in integration by parts.

[F3] [[def-laplace-beltrami-operator-as-trace-of-the-hessian]]: $\Delta_g=\operatorname{div}_g\nabla_g$.

[A1] [[def-axiom-of-choice]] is assumed through [[thm-complex-hahn-banach-norm-preserving-extension]] to extend the bounded complex functional from the range of the adjoint to all of $L^2(M)$.

[A2] [[def-countable-choice]] is assumed through [[thm-riesz-representation-for-hilbert-space]] to represent the extended bounded functional by an $L^2$ vector.

## Proof

**Given:** the data in the statement.

1.1 Put $s=\varphi$ and first set $q=0$. For a real smooth weight $\psi$, direct differentiation gives $$P_{\psi,h,0}=e^{\psi/h}(-h^2\Delta_g)e^{-\psi/h} =-h^2\Delta_g-|\nabla_g\psi|^2+2h\nabla_g\psi\cdot\nabla_g+h\Delta_g\psi.$$ For $\psi=s$, $|\nabla s|=1$ and $\Delta s=0$, so $P_{s,h,0}=A+C$ with $A=-h^2\Delta_g-1$ self-adjoint and $C=2h\partial_s$ skew-adjoint on compactly supported functions. [F1, F2, F3, given, algebra]

2.1 Convexify by $\psi=f(s)=s+\frac{h}{2\varepsilon}s^2$, where $\varepsilon>0$ is fixed small and then $h/\varepsilon$ is small. Since $M$ is compact, choose $h$ so $f'=1+hs/\varepsilon>1/2$ on $M$. The conjugated operator is $P_{\psi,h,0}=A_\varepsilon+C_\varepsilon$ with $$A_\varepsilon=-h^2\Delta_g-(f')^2,\qquad C_\varepsilon=2hf'\partial_s+hf'',\qquad f''=h/\varepsilon.$$ Here $A_\varepsilon$ is self-adjoint and $C_\varepsilon$ is skew-adjoint. Product independence of $s$ makes $-\Delta_g=-\partial_s^2-\Delta_{g_0}$, with $\Delta_{g_0}$ commuting with $C_\varepsilon$. Direct differentiation in the $s$ coordinate therefore gives the exact commutator $$[A_\varepsilon,C_\varepsilon]=4h(f')^2f''-4h^3f''\partial_s^2.$$ For compactly supported $w$, integration by parts yields $$\|P_{\psi,h,0}w\|_2^2 =\|A_\varepsilon w\|_2^2+\|C_\varepsilon w\|_2^2+ 4h f''\|(f')w\|_2^2+4h^3f''\|\partial_sw\|_2^2 \geq c h^2\varepsilon^{-1}\|w\|_2^2.$$ The same identity implies $\|A_\varepsilon w\|_2\leq\|P_{\psi,h,0}w\|_2$. Since $\|h\nabla w\|_2^2=\langle A_\varepsilon w,w\rangle+\|f'w\|_2^2$, the $L^2$ bound just obtained gives $\|w\|_2+\|h\nabla w\|_2\leq C_\varepsilon h^{-1}\|P_{\psi,h,0}w\|_2$. [F1, F2, step 1.1, algebra]

3.1 The convexified and unconvexified weights are related by multiplication with $m=e^{s^2/(2\varepsilon)}$: $P_{\psi,h,0}(mw)=mP_{s,h,0}w$. On compact $M$, $m$ and $m^{-1}$ are bounded, so step 2.1 yields $\|w\|_2\leq C h^{-1}\|P_{s,h,0}w\|_2$. Adding the potential changes the conjugated operator by $h^2q$. Its norm on $w$ is at most $h^2\|q\|_\infty\|w\|_2$, which is absorbed in the preceding estimate provided $C_0h\|q\|_\infty\leq1/2$, where $C_0$ is the bound for $q=0$. Choose $h_0>0$ below this threshold and the bound ensuring $h_0\max_M|x_1|/\varepsilon<1/2$ in step 2.1. Taking the smaller threshold and larger constant for the two signs proves the estimate uniformly for every $0<h\leq h_0$. [step 2.1, given, algebra]

4.1 Let $P=P_{\varphi,h,q}$ and apply the a priori estimate also to $P^*=P_{-\varphi,h,q}$, which has the same real potential and the opposite allowed sign. On $E=P^*(C_c^\infty(M^\circ))\subset L^2(M)$ define the complex-linear functional $\ell(P^*w)=\int_M\bar Fw\,dV_g$. The estimate makes this well-defined: $P^*w=0$ implies $w=0$. It also gives $|\ell(P^*w)|\leq\|F\|_2\|w\|_2\leq Ch^{-1}\|F\|_2\|P^*w\|_2$. By [A1] extend $\ell$ to $L^2(M)$ with the same bound; by [A2] there is $R\in L^2(M)$ with $\ell(z)=\int_Mz\bar R\,dV_g$ and $\|R\|_2\leq Ch^{-1}\|F\|_2$. Taking complex conjugates gives $\int_MR\overline{P^*w}\,dV_g=\int_MF\bar w\,dV_g$ for every test $w$, which is precisely $PR=F$ distributionally on $M^\circ$. [F2, A1, A2, given, step 3.1, algebra] ∎


---
id: thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error
kind: theorem
title: "Uniform mini-element stability through the incompressible limit"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-linear-elasticity-displacement-formulation-and-data, def-linear-elasticity-near-incompressible-mixed-mini-pair, lem-linear-elasticity-mixed-pressure-gauge-is-well-defined, thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound, lem-na-zero-mean-of-zero-boundary-divergence, lem-na-homogeneous-dirichlet-korn-identity, lem-na-homogeneous-dirichlet-poincare, lem-w-one-two-is-a-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, cor-cauchy-schwarz-inequality-for-l-two, thm-na-continuous-stokes-divergence-infsup, thm-na-babuska-brezzi-kernel-coercivity, thm-na-mini-element-fortin-stability]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§5.1, printed p. 13: the displacement-pressure equations and the limiting incompressibility constraint."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 8, §§8.2, 8.4.1–8.4.2, 8.6.1, 8.7.1, and 8.12.1, printed pp. 462–470, 487–492, and 519–520: pressure gauge, Fortin stability, MINI pair, and perturbed Stokes limit."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the model and mixed conventions of [[def-linear-elasticity-displacement-formulation-and-data]] and [[def-linear-elasticity-near-incompressible-mixed-mini-pair]]. Let $D$ be bounded, connected, and Lipschitz, $d\in\{2,3\}$, $0<\mu_0\le\mu\le\mu_1$, and $f\in V'$. For every $\lambda\in[0,\infty]$ the continuous problem has a unique solution; at $\lambda=0$ use the primal problem and set $p_0=0$, while at $\lambda=\infty$ impose $\operatorname{div}u=0$. If $D$ is polygonal or polyhedral and $\{\mathcal T_h\}$ is any conforming shape-regular affine simplicial mesh family with a common shape-regularity bound, the mini-element discrete problem has a unique solution for every $h$ and every $\lambda\in[0,\infty]$, with $p_{h,0}=0$. There is a constant $C$ depending only on $d,D,\mu_0,\mu_1$ and the common shape-regularity bound, but independent of $\lambda$ and $h$, such that
$$\|u_\lambda\|_V+\|p_\lambda\|_Q\le C\|f\|_{V'},\qquad \|u_\lambda-u_{h,\lambda}\|_V+\|p_\lambda-p_{h,\lambda}\|_Q\le C\inf_{v_h\in V_h,\,q_h\in Q_h}\bigl(\|u_\lambda-v_h\|_V+\|p_\lambda-q_h\|_Q\bigr).$$
At $\lambda=\infty$ the constraint is $\operatorname{div}u=0$. The estimate makes no heterogeneous-coefficient robustness claim beyond the displayed dependence.

## Facts & Assumptions

**Given:** Countable Choice; the real spaces $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$; $\mu_0,\mu_1$ and $\mu$; $f\in V'$; and, for the discrete conclusions, nonempty conforming shape-regular affine simplicial meshes and the mini-element spaces.

[A1] Countable Choice is assumed in the Hilbert-space completion, Lax–Milgram, and continuous Babuška–Brezzi branches; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The spaces, norms, strain, and sign convention are $V=H^1_0(D;\mathbb R^d)$, $Q=L^2_0(D)$, $\|v\|_V=\|\nabla v\|_2$, and $b(v,q)=-(q,\operatorname{div}v)$. ([[def-linear-elasticity-displacement-formulation-and-data]], [[def-linear-elasticity-near-incompressible-mixed-mini-pair]])

[F2] Every $v\in V$ has $\operatorname{div}v\in Q$. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

[F3] The homogeneous Dirichlet identity is $2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2$. ([[lem-na-homogeneous-dirichlet-korn-identity]])

[F4] The continuous inf-sup constant of $b$ is at least $C_{\rm div}(D)^{-1}>0$. ([[thm-na-continuous-stokes-divergence-infsup]])

[F5] For the mini-element family, $\beta_h\ge(C_FC_{\rm div}(D))^{-1}>0$ with $C_F$ depending only on dimension and the common shape-regularity bound. ([[thm-na-mini-element-fortin-stability]])

[F6] On real Hilbert spaces, bounded $a,b$, coercivity on $\ker B$, and a positive inf-sup constant give unique mixed solvability; when $Q\ne\{0\}$ the theorem also assumes $V\ne\{0\}$. ([[thm-na-babuska-brezzi-kernel-coercivity]])

[F7] For every finite $\lambda\ge0$, the primal problem has a unique solution and $\|u_\lambda\|_V\le\mu_0^{-1}\|f\|_{V'}$. ([[thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound]])

[F8] Under Countable Choice, $H^1(D)$ and $L^2(D)$ are Hilbert; $H^1_0(D)$ is closed, and Poincaré makes the gradient norm complete on it. ([[lem-w-one-two-is-a-hilbert-space]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-na-homogeneous-dirichlet-poincare]])

[F9] The $L^2$ Cauchy–Schwarz inequality gives $|(g,h)_{L^2}|\le\|g\|_2\|h\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F10] For finite $\lambda>0$, $p=-\lambda\operatorname{div}u$ lies in the mean-zero pressure space $Q$. ([[lem-linear-elasticity-mixed-pressure-gauge-is-well-defined]])

## Proof

1.1 The pointwise bounds $|\varepsilon(v)|_F\le|\nabla v|_F$ and $|\operatorname{div}v|\le\sqrt d|\nabla v|_F$, together with [F9], give $|a_\mu(u,v)|\le2\mu_1\|u\|_V\|v\|_V$ and $|b(v,q)|\le\sqrt d\|v\|_V\|q\|_Q$. By [F3], $a_\mu(v,v)\ge2\mu_0\|\varepsilon(v)\|_2^2\ge\mu_0\|v\|_V^2$. [given, F1, F3, F9, algebra]

1.2 The space $V$ is a closed subspace of $H^1(D;\mathbb R^d)$ and its gradient norm is equivalent to the $H^1$ norm by [F8]; $Q$ is the closed kernel of the bounded integral functional on $L^2(D)$. Thus both are real Hilbert spaces under [A1]. Also $Q\ne\{0\}$: two disjoint positive-measure balls inside $D$ give a nonzero difference of indicator functions with zero integral. And $V\ne\{0\}$: choose a ball $B(x_0,r)$ with closure in $D$ and set $\phi(x)=\exp(-1/(r^2-|x-x_0|^2))$ inside it and zero outside. Its derivatives vanish at the sphere, so $\phi\in C_c^\infty(D)$ is nonzero and $(\phi,0,\ldots,0)\in V$. [A1, F8, F9, given, construct]

1.3 For finite $\lambda>0$, take the primal solution from [F7] and set $p_\lambda=-\lambda\operatorname{div}u_\lambda$. By [F2, F10], $p_\lambda\in Q$. Then $a_\mu(u_\lambda,v)+b(v,p_\lambda)=a_\mu(u_\lambda,v)+\lambda(\operatorname{div}u_\lambda,\operatorname{div}v)=f(v)$, while $b(u_\lambda,q)-\lambda^{-1}(p_\lambda,q)=-(\operatorname{div}u_\lambda,q)+(\operatorname{div}u_\lambda,q)=0$. Conversely, any mixed solution has $s=\operatorname{div}u+\lambda^{-1}p\in Q$ by [F2]; its second equation gives $(s,q)=0$ for every $q\in Q$, hence $s=0$ by choosing $q=s$. It therefore solves the unique primal equation and has the same pressure. [A1, F2, F7, F10, given, algebra]

2.1 At $\lambda=0$, use the primal solution and set $p_0=0$ by convention. At $\lambda=\infty$, apply [F6] to $V,Q$, $a=a_\mu$, and $b$ with $G=0$: [F1] and step 1.1 give bounded forms, step 1.1 gives coercivity on all of $V$, [F4] gives the inf-sup bound, and step 1.2 gives real Hilbert spaces with both $V,Q$ nonzero. This yields a unique mean-zero pair $(u_\infty,p_\infty)$. [A1, F1, F4, F6, step 1.1, step 1.2]

2.2 For each discrete pair, [F5] supplies a positive $\beta_h$ bounded below independently of $h$. For finite $\lambda>0$ or $\lambda=\infty$, write $c=\lambda^{-1}\ge0$, with $c=0$ at infinity. A homogeneous discrete mixed solution $(w_h,r_h)$ satisfies $a_\mu(w_h,v_h)+b(v_h,r_h)=0$ and $b(w_h,q_h)-c(r_h,q_h)=0$. Test with $v_h=w_h$ and $q_h=r_h$ and subtract the second equality from the first to get $a_\mu(w_h,w_h)+c\|r_h\|_Q^2=0$. Step 1.1 forces $w_h=0$, and then discrete inf-sup forces $r_h=0$. The square finite-dimensional block matrix is injective, hence bijective, so the discrete system has a unique solution for every right-hand side. [A1, F5, step 1.1, given, algebra]

2.3 The same stability estimate applies to any solution of $a_\mu(w,v)+b(v,r)=F(v)$, $b(w,q)-c(r,q)=G(q)$ when the inf-sup constant is $\beta>0$. Put $U=\|w\|_V$, $P=\|r\|_Q$, $F_0=\|F\|_{V'}$, and $G_0=\|G\|_{Q'}$. Testing with $v=w$ and $q=r$ and subtracting gives $\mu_0U^2\le F_0U+G_0P$. The first equation and inf-sup give $\beta P\le F_0+2\mu_1U$. With $S=F_0+G_0$ and $A=1+2\mu_1/\beta$, substitution, using $F_0G_0\le S^2/4$, yields $\mu_0U^2\le ASU+S^2/(4\beta)$. Solving this quadratic gives $U\le C_US$, where $C_U=(A+\sqrt{A^2+\mu_0/\beta})/(2\mu_0)$; then $P\le C_PS$ with $C_P=\beta^{-1}(1+2\mu_1C_U)$. Thus $U+P\le C_*S$ for $C_*=C_U+C_P$, and these constants do not depend on $c$. [F4, F5, step 1.1, algebra]

3.1 For $0<\lambda\le\mu_0$, let $P_h:Q\to Q_h$ be the $L^2$-orthogonal projection. It exists uniquely: in a basis of the finite-dimensional $Q_h$, its defining normal equations have the positive-definite Gram matrix $((q_i,q_j))$, and orthogonality gives $\|p-P_hp\|_Q=\inf_{q_h\in Q_h}\|p-q_h\|_Q$. The second mixed equation gives $p_h=-\lambda P_h\operatorname{div}u_h$. Hence the first is the symmetric discrete equation $a_h(u_h,v_h)=f(v_h)$, where $a_h(w,v)=a_\mu(w,v)+\lambda(P_h\operatorname{div}w,P_h\operatorname{div}v)$. It is bounded by $M_0=2\mu_1+d\mu_0$ and coercive by $\mu_0$. [A1, F1, F2, F3, F9, step 1.3, step 2.2, construct]

4.1 For any $w_h\in V_h$, subtract the equation for $a_h(w_h,\cdot)$ from the continuous primal equation. For every $v_h\in V_h$ this gives $a_h(u_h-w_h,v_h)=a_h(u-w_h,v_h)+\lambda((I-P_h)\operatorname{div}u,(I-P_h)\operatorname{div}v_h)$. Since $p=-\lambda\operatorname{div}u$, $\lambda(I-P_h)\operatorname{div}u=-(I-P_h)p$; orthogonal projection gives $\|I-P_h\|\le1$, while $\|\operatorname{div}v_h\|_2\le\sqrt d\|v_h\|_V$, so Cauchy–Schwarz bounds the remainder by $\sqrt d\|p-P_hp\|_Q\|v_h\|_V$. Testing with $v_h=u_h-w_h$ and using coercivity yields the displacement estimate; if $u_h=w_h$ it is immediate, and otherwise divide by $\mu_0\|u_h-w_h\|_V$ and take the infimum over $w_h$: $\|u-u_h\|_V\le\left(1+\frac{M_0}{\mu_0}\right)\inf_{w_h\in V_h}\|u-w_h\|_V+\frac{\sqrt d}{\mu_0}\inf_{q_h\in Q_h}\|p-q_h\|_Q$. Moreover, $p-p_h=(I-P_h)p-\lambda P_h\operatorname{div}(u-u_h)$, so $\|p-p_h\|_Q\le\inf_{q_h\in Q_h}\|p-q_h\|_Q+\mu_0\sqrt d\|u-u_h\|_V$. Adding these bounds gives the claimed product-space best-approximation estimate with a constant depending only on $d,\mu_0,\mu_1$. [A1, F1, F2, F9, step 1.3, step 2.2, step 3.1, algebra]

4.2 Testing the continuous primal equation with $u$ and the equivalent discrete $a_h$ equation with $u_h$, coercivity gives $\|u\|_V,\|u_h\|_V\le\mu_0^{-1}\|f\|_{V'}$. The pressure identities and $\lambda\le\mu_0$ then give $\|p\|_Q\le\lambda\sqrt d\|u\|_V\le\sqrt d\|f\|_{V'}$ and $\|p_h\|_Q\le\lambda\sqrt d\|u_h\|_V\le\sqrt d\|f\|_{V'}$. [A1, F1, F2, F3, F9, step 1.3, step 2.2, step 3.1, algebra]

5.1 For $\lambda=0$, [F7] gives the solution bounds and the displacement estimate with constant $2\mu_1/\mu_0$; $p_0=p_{h,0}=0$. For $0<\lambda\le\mu_0$, step 4.2 gives uniform solution bounds and step 4.1 the uniform best-approximation estimate. For $\lambda\ge\mu_0$ or $\lambda=\infty$, step 2.3 with the continuous inf-sup bound [F4] and discrete bound [F5] gives uniform solution bounds. For the same upper range, $c=\lambda^{-1}\le\mu_0^{-1}$ and $|\mathcal A_\lambda((u,p),(v,q))|\le2\mu_1\|u\|_V\|v\|_V+\sqrt d\|v\|_V\|p\|_Q+\sqrt d\|u\|_V\|q\|_Q+\mu_0^{-1}\|p\|_Q\|q\|_Q$, so its product-space operator norm is at most $M=2\mu_1+2\sqrt d+\mu_0^{-1}$, independently of $\lambda$. [A1, F4, F5, F7, F9, step 2.3, step 4.1, step 4.2, algebra]

6.1 Write $\|(v,q)\|_{V\times Q}=\|v\|_V+\|q\|_Q$. Let $x=(u,p)$ be the continuous solution, $x_h=(u_h,p_h)$ its Galerkin solution, and fix $y_h=(v_h,q_h)\in V_h\times Q_h$. Galerkin orthogonality gives $\mathcal A_\lambda(x_h-y_h,z_h)=\mathcal A_\lambda(x-y_h,z_h)$ for every $z_h=(w_h,r_h)$. Thus $x_h-y_h$ solves the discrete mixed system with data $F_h(w_h)=\mathcal A_\lambda(x-y_h,(w_h,0))$ and $G_h(r_h)=\mathcal A_\lambda(x-y_h,(0,r_h))$. The bound on $\mathcal A_\lambda$ gives $\|F_h\|+\|G_h\|\le2M\|x-y_h\|_{V\times Q}$. Applying the stability bound of step 2.3 with $\beta\ge\min(C_{\rm div}(D)^{-1},\beta_*)>0$, then the triangle inequality and the infimum over $y_h$, gives the required estimate with a constant at most $1+2MC_*$. Combining this with steps 1.3–2.1, 2.2, 4.1–4.2, and 5.1 covers every $\lambda\in[0,\infty]$. [A1, F4, F5, step 1.3, step 2.1, step 2.2, step 2.3, step 4.1, step 4.2, step 5.1, algebra] ∎

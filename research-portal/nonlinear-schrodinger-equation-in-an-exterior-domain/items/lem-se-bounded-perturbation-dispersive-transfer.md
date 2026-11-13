---
id: lem-se-bounded-perturbation-dispersive-transfer
kind: lemma
domain: mathematics
title: Energy dispersive bounds under bounded trajectory perturbations
status: draft
deps:
  - lem-se-real-evolution-duhamel-bound
  - lem-se-shifted-l1-retarded-transfer
  - lem-se-spectral-cutoff-duality
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-strongly-measurable-banach-valued-function
formulation_deps:
  - lem-se-real-evolution-duhamel-bound
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-strongly-measurable-banach-valued-function
  - lem-se-spectral-cutoff-duality
argument_deps:
  - lem-se-real-evolution-duhamel-bound
  - lem-se-shifted-l1-retarded-transfer
  - lem-se-spectral-cutoff-duality
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-strongly-measurable-banach-valued-function
dependency_roles:
  lem-se-real-evolution-duhamel-bound: mathematical-premise
  lem-se-shifted-l1-retarded-transfer: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  lem-se-exterior-dirichlet-realization: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references: []
dependency_level: 7
---

## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Let $A=I-\Delta_D\ge I$ be the self-adjoint shifted Dirichlet Laplacian and let $H_D^s=D(A^{s/2})$ with norm $\|A^{s/2}\cdot\|_2$ for $s\in\{1,2\}$. In particular $H_D^1=H^1_0(\Omega)$ and $H_D^2=H^2(\Omega)\cap H^1_0(\Omega)$, with equivalent standard Sobolev norms. Write $W(t)=e^{it\Delta_D}$, a strongly continuous unitary group on each of these spaces.

Fix $0<T<\infty$. Suppose that, for some $C_T$, the scalar mixed-norm estimate $\|W(\cdot)h\|_{L^4(0,T;L^\infty(\Omega))}\le C_T\|h\|_{H_D^1}$ holds for every $h\in H_D^1$. Here the mixed norm is the $L^4$ norm in time of the spatial essential supremum; it does not require Bochner measurability into $L^\infty$.

Let $B:[0,T]\to\mathcal B_{\mathbb R}(H_D^1)$ be norm-continuous, where $\mathcal B_{\mathbb R}$ denotes bounded real-linear operators, and let $K=\sup_{t\in[0,T]}\|B(t)\|$. Let $S(t,r)$ be the real-linear evolution determined by $S(t,r)h=W(t-r)h+\int_r^tW(t-\rho)B(\rho)S(\rho,r)h\,d\rho$. For $0\le r\le b\le T$, put $I=[r,b]$ and $\|u\|_{X_I}=\|u\|_{C(I;H_D^1)}+\|u\|_{L^4(I;L^\infty)}$. Then, for every $h\in H_D^1$ and strongly measurable $f\in L^1(I;H_D^1)$, the function $u(t)=S(t,r)h+\int_r^tS(t,\rho)f(\rho)\,d\rho$ belongs to $X_I$ and satisfies $\|u\|_{X_I}\le C_{T,K}(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$, where one may take $C_{T,K}=e^{KT}+C_T(1+TK e^{KT})$. In particular the homogeneous perturbed orbit and the retarded perturbed forcing operator both obey this bound.

The analogous energy conclusion holds on $H_D^2$: if $B$ is also a norm-continuous bounded real-linear family on $H_D^2$, consistent with its action on $H_D^1$, and $K_2$ is its supremum norm there, then the same evolution restricted to $H_D^2$ satisfies $\|u\|_{C(I;H_D^2)}\le e^{K_2T}(\|h\|_{H_D^2}+\|f\|_{L^1(I;H_D^2)})$. This order-two assertion does not require an $L^4L^\infty$ estimate at order two.

For the trajectory form $B(t)z=i(V_1(t)z+V_2(t)\overline z)$, it is sufficient that each $V_j:[0,T]\to W^{2,\infty}(\Omega)$ be norm-continuous. Here $W^{2,\infty}$ consists of functions with essentially bounded weak derivatives through order two. The resulting multipliers preserve $H^1_0$ and hence the Dirichlet boundary condition. No global-in-time smoothing or unique-continuation estimate is asserted.

## Facts & Assumptions

[F1] The exterior realization identifies the self-adjoint operator, its form domain $H^1_0$ and its operator domain $H^2\cap H^1_0$ [[lem-se-exterior-dirichlet-realization]]. The positive spectral-scale contract supplies the scale and the consistent unitary group [[lem-se-positive-spectral-scale-contract]].

[F2] For a strongly continuous bounded free group and a norm-continuous bounded real-linear perturbation, the real evolution supplier constructs the unique evolution, its variation-of-constants formula and its energy bound [[lem-se-real-evolution-duhamel-bound]].

[F3] The shifted retarded-transfer lemma converts the assumed homogeneous bound into the causal $L^1_tH_D^1$ to $L^4_tL^\infty_x$ bound on every translated interval of length at most $T$, using its scalar $L^\infty$ convention [[lem-se-shifted-l1-retarded-transfer]].

[F4] The spectral multiplier lemma bounds multiplication by $a\in W^{2,\infty}$ on both $H_D^1$ and $H_D^2$, preserves the zero-boundary spaces, and identifies conjugation as an isometry [[lem-se-spectral-cutoff-duality]].

[F5] The Axiom of Choice supplies the choice hypotheses inherited by these scale, multiplier and evolution inputs [[math:def-axiom-of-choice]].

[F6] The complex integer Sobolev spaces use $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ with $\|u\|_{H^k}^2=\sum_{|\alpha|\le k}\|D^\alpha u\|_2^2$ for $k=1,2$. The coefficient norm is $\|a\|_{W^{2,\infty}}=\max_{|\alpha|\le2}\|D^\alpha a\|_\infty$, with $D^0a=a$, as in [[math:def-sobolev-space-wkp-and-its-norm]]. Its open-set, dimensional and scalar hypotheses hold here, and its Countable Choice hypothesis follows from [F5].

[F7] Strong measurability on $I$ means almost-everywhere convergence in the relevant $H_D^j$ norm, $j=1,2$, of measurable simple functions, with respect to Lebesgue measure on $I$ [[math:def-strongly-measurable-banach-valued-function]]. These Hilbert spaces are Banach spaces, so the definition applies to the forcing and integrands in the energy spaces; it imposes no strong measurability into spatial $L^\infty$.

## Proof

[F1] The exterior realization identifies the self-adjoint operator, its form domain $H^1_0$ and its operator domain $H^2\cap H^1_0$ [[lem-se-exterior-dirichlet-realization]]. The positive spectral-scale contract supplies the scale and the consistent unitary group [[lem-se-positive-spectral-scale-contract]].

[F2] For a strongly continuous bounded free group and a norm-continuous bounded real-linear perturbation, the real evolution supplier constructs the unique evolution, its variation-of-constants formula and its energy bound [[lem-se-real-evolution-duhamel-bound]].

[F3] The shifted retarded-transfer lemma converts the assumed homogeneous bound into the causal $L^1_tH_D^1$ to $L^4_tL^\infty_x$ bound on every translated interval of length at most $T$, using its scalar $L^\infty$ convention [[lem-se-shifted-l1-retarded-transfer]].

[F4] The spectral multiplier lemma bounds multiplication by $a\in W^{2,\infty}$ on both $H_D^1$ and $H_D^2$, preserves the zero-boundary spaces, and identifies conjugation as an isometry [[lem-se-spectral-cutoff-duality]].

[F5] The Axiom of Choice supplies the choice hypotheses inherited by these scale, multiplier and evolution inputs [[math:def-axiom-of-choice]].



**Given:** The domain, free homogeneous estimate and real-linear perturbation in the Statement.

**Goal:** Establish the finite-interval perturbed homogeneous and forcing estimates and the stated multiplier application.

1.1 By the exterior realization and spectral-scale contract, $H_D^1$ is a complex Hilbert space, $W$ is a strongly continuous unitary group on it, and its scalar realization embeds continuously into $L^2(\Omega)$. The real evolution result therefore gives the stated $S$ and, for the prescribed data and forcing, the Volterra identity $u(t)=W(t-r)h+\int_r^tW(t-\rho)(B(\rho)u(\rho)+f(\rho))\,d\rho$. It also gives $\|u\|_{C(I;H_D^1)}\le e^{K(b-r)}(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$. The integrand is strongly measurable because $B$ and $u$ are continuous and $f$ is strongly measurable. [F1, F2, F5, F7, given]

1.2 On $H_D^2$, the same real evolution theorem applies with the consistent unitary free group and bound $K_2$, giving the stated energy estimate. The $H_D^2$ solution also satisfies the $H_D^1$ Volterra equation because the embeddings, free groups and perturbation actions are consistent; uniqueness in $H_D^1$ identifies the evolutions. [F1, F2, F5, given]

2.1 Apply the shifted retarded-transfer lemma in its scalar convention to $g=Bu+f$. Its $L^\infty$ endpoint applies to the scalar mixed norm, and translation and restriction give the same $C_T$ on $I$. Since $\|g\|_{L^1(I;H_D^1)}\le TK\|u\|_{C(I;H_D^1)}+\|f\|_{L^1(I;H_D^1)}$, the free homogeneous and retarded estimates yield $\|u\|_{L^4(I;L^\infty)}\le C_T(1+TK e^{KT})(\|h\|_{H_D^1}+\|f\|_{L^1(I;H_D^1)})$. Combining this with step 1.1 gives the claimed $X_I$ estimate. Setting $f=0$ or $h=0$ gives the two separate operator estimates. [F3, step 1.1, given]

3.1 For the trajectory coefficients, the multiplier estimate gives $\|B(t)-B(s)\|_{\mathcal B_{\mathbb R}(H_D^j)}\le C\sum_{k=1}^2\|V_k(t)-V_k(s)\|_{W^{2,\infty}}$ for $j=1,2$, using the conjugation isometry and multiplication by $i$. Thus $B$ is norm-continuous and bounded on both levels, and its actions are consistent. The same multiplier result preserves $H^1_0$ and $H^2\cap H^1_0$, so the Dirichlet condition is retained. Applying the previous steps completes the proof. [F4, F6, step 2.1, step 1.2, given] ∎

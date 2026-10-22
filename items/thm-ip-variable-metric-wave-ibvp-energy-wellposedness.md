---
id: thm-ip-variable-metric-wave-ibvp-energy-wellposedness
kind: theorem
title: Energy well-posedness for the variable-metric wave equation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: Countable Choice
deps:
  - lem-ip-compact-manifold-dirichlet-spectrum-and-regularity
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis (full
        author lecture notes, arXiv:2312.08123v1)
      url: https://arxiv.org/pdf/2312.08123v1
      locator: §3.1, forward wave problem and energy estimate preceding Lemma 3.4, PDF
        pp. 22–24; the well-posedness proof is referred to the standard
        wave-equation theory cited there.
    - title: Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for
        hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)
      url: https://arxiv.org/pdf/2311.06020v2
      locator: §§2.4 and 3.3, PDF pp. 9 and 17–18, for wave integration by parts and
        the energy method; no Galerkin proof for the stated compact-manifold
        energy class is supplied there.
proof_strategy: Galerkin construction followed by energy estimates
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with nonempty smooth boundary, let $T>0$, and let $q\in C^\infty(M;\mathbb R)$ be independent of time. Let $dV_g$ be Riemannian volume, let $\mathbb K\in\{\mathbb R,\mathbb C\}$ be the scalar field, and set $L^2(M)=L^2(M,dV_g;\mathbb K)$. For complex scalars, the $L^2$ inner product is $(u,v)_{L^2}=\int_M u\overline v\,dV_g$, linear in its first argument; extend $g$ complex-bilinearly and set $|\nabla_gu|_g^2=\langle\nabla_gu,\nabla_g\overline u\rangle_g$. A weak coordinate derivative $D_iw$ is defined by $\int w\,\partial_i\psi=-\int D_iw\,\psi$ for every smooth compactly supported coordinate test $\psi$. Let $H^1(M;\mathbb K)$ be the space of $L^2(M;\mathbb K)$ functions whose weak coordinate first derivatives are locally $L^2$ in smooth charts and whose weak differential has finite metric $L^2$ norm; write $\nabla_gu$ for the metric dual of that weak differential. Give it norm
$$\|w\|_{H^1(M;\mathbb K)}^2=\int_M(|w|^2+|\nabla_gw|_g^2)\,dV_g,$$
and let $H_0^1(M;\mathbb K)$ be the closure of $C_c^\infty(M^\circ)$ in this norm. For $u_0\in H_0^1(M;\mathbb K)$, $u_1\in L^2(M;\mathbb K)$, and $F\in L^1((0,T);L^2(M;\mathbb K))$, there is a unique energy solution of the homogeneous Dirichlet problem
$$u_{tt}-\Delta_gu+q(x)u=F,\qquad u|_{(0,T)\times\partial M}=0,\qquad (u(0),u_t(0))=(u_0,u_1),$$
where energy solution means
$$u\in C([0,T];H_0^1(M;\mathbb K))\cap C^1([0,T];L^2(M;\mathbb K)),$$
and, for every $\phi\in H_0^1(M;\mathbb K)$ and every real-valued $\zeta\in C_c^\infty(0,T)$, the weak equation is
$$\int_0^T(u(t),\phi)_{L^2}\zeta''(t)\,dt+\int_0^T\!\int_M\big(\langle\nabla_gu(t),\nabla_g\overline{\phi}\rangle_g+q\,u(t)\overline{\phi}\big)\zeta(t)\,dV_gdt=\int_0^T(F(t),\phi)_{L^2}\zeta(t)\,dt.$$
There is a constant $C=C(M,g,q,T)<\infty$ such that
$$\sup_{0\le t\le T}\big(\|u(t)\|_{H^1(M;\mathbb K)}+\|u_t(t)\|_{L^2(M;\mathbb K)}\big)\le C\big(\|u_0\|_{H^1(M;\mathbb K)}+\|u_1\|_{L^2(M;\mathbb K)}+\|F\|_{L^1((0,T);L^2(M;\mathbb K))}\big).$$
In particular, the solution $w$ with zero initial data satisfies the correction estimate
$$\sup_{0\le t\le T}\big(\|w(t)\|_{H^1(M;\mathbb K)}+\|w_t(t)\|_{L^2(M;\mathbb K)}\big)\le C\|F\|_{L^1((0,T);L^2(M;\mathbb K))}.$$
The corresponding assertion for prescribed terminal data follows by time reversal. For smooth Dirichlet data compactly supported away from the time endpoints, the boundary lifting in the Riemannian Green-and-lifting lemma reduces the problem to this homogeneous-boundary assertion.

## Statement references

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-weak-derivative-of-a-locally-integrable-function]]

[[def-sobolev-space-wkp-and-its-norm]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the manifold, metric, static potential, initial data, and Bochner-integrable forcing in the statement.

[F1] [[lem-ip-compact-manifold-dirichlet-spectrum-and-regularity]] supplies the shifted form $b$, its equivalent $H^1_0$ norm, the $L^2$ eigenbasis $(e_j)$ with eigenvalues $\mu_j>0$, and convergence of its projections both in $L^2$ and in the form norm.

[F2] [[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]] supplies a smooth lift of smooth time-compact boundary data, zero near both temporal endpoints.


## Proof

1.1 Set $c=1+\|q\|_\infty$, $a(u,v)=b(u,v)-c(u,v)_{L^2}$, and let $P_J$ be projection on $e_1,\ldots,e_J$. Solve the scalar equations $d_j''+(\mu_j-c)d_j=(F,e_j)$ with the projected initial data, and put $u_J=\sum_{j\le J}d_je_j$. The scalar solutions exist for $L^1$ forcing by integration against the sine/hyperbolic-sine fundamental solution (at zero frequency use $t$); they have continuous first derivatives and absolutely continuous first derivatives on compact intervals. For $E_J=(\|u_J'\|_2^2+b(u_J,u_J))/2$, multiply each equation by $\bar d_j'$ and take real parts to obtain $$E_J'=\operatorname{Re}(P_JF+cu_J,u_J')\le C E_J+\sqrt{2E_J}\|F\|_2.$$ Apply this to $\sqrt{E_J+\eta}$ and let $\eta\downarrow0$ after integrating: multiplication by $e^{-Ct}$ gives $\sqrt{E_J(t)}\le C_T(\sqrt{E_J(0)}+\int_0^T\|F\|_2dt)$. This is exactly the asserted estimate, uniformly in $J$. [F1, given, construct, algebra]

2.1 For $J>K$, the same estimate for $u_J-u_K$ has data $(P_J-P_K)u_0,(P_J-P_K)u_1$ and forcing $(P_J-P_K)F$. These data tend to zero in $V\times H$ by [F1]. The forcing tends to zero in $L^1_tH$ because the projections converge pointwise in $H$ and are contractive, so dominated convergence applies. Hence $u_J$ is Cauchy in $C([0,T];V)$ and $u_J'$ in $C([0,T];H)$. Their limits $u,w$ satisfy $u(t)-u(s)=\int_s^t w(r)dr$, so $u\in C^1([0,T];H)$ with derivative $w$ and the exact strong initial traces. Pass to the limit in the integrated finite-dimensional equation first for a finite spectral test and then for every $\phi\in V$, using boundedness of $a$ and the form-density in [F1]. This gives precisely the displayed weak equation and energy bound. No weak-in-time limiting trace is substituted for a strong trace. [F1, step 1.1, given, algebra]

3.1 If two energy solutions have the same data and forcing, test their difference against $e_j$. The scalar coefficient is a distributional solution of $d_j''+(\mu_j-c)d_j=0$ with zero strong data. Its integral equation, or the scalar fundamental solution, gives $d_j=0$. Completeness in [F1] makes the difference zero for every time. The estimate of step 1.1 passes to the strong limit, including its zero-data version. Replacing $t$ by $T-t$ proves terminal well-posedness with the same bound. [F1, step 1.1, step 2.1, algebra]

4.1 We also establish the classical regularity needed by the last assertion and the DN interfaces. Let $h$ be smooth and zero near the temporal endpoints, take the smooth lift $H$ from [F2], and solve for $w=u-H$ with zero Dirichlet and initial data and forcing $G=-L_qH$. This $G$ is smooth and zero near $t=0$. For every integer $\ell\ge0$, solve the same zero-data energy problem with forcing $\partial_t^\ell G$. Integration in time and uniqueness in step 3.1 identify these solutions successively with $\partial_t^\ell w$: for example integrating the solution with forcing $G_t$ gives a solution with forcing $G-G(0)=G$ and zero data. Thus all time derivatives of $w$ are continuous in $V$. At every time, $Aw=G-w_{tt}$; the right side is continuous in $L^2$, so [F1]'s elliptic estimate gives continuity of $w$ in $H^2$, by applying the estimate to time differences. Apply this argument to every time derivative. Inductively if all time derivatives are continuous in $H^k$, the identity $A\partial_t^\ell w=\partial_t^\ell G-\partial_t^{\ell+2}w$ and [F1] give continuity in $H^{k+2}$. Thus all mixed derivatives have arbitrarily high spatial Sobolev regularity, and [F1]'s embedding gives a smooth representative on the closed cylinder, in particular $C^2$. Adding $H$ proves the stated smooth boundary reduction and actual classical forward solvability; time reversal gives the terminal version. [F1, F2, step 2.1, step 3.1, construct, algebra] ∎

---
id: lem-na-solenoidal-evolution-integrated-pressure-recovery
kind: lemma
title: "Integrated pressure recovery and MINI pressure-primitive convergence"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps:
  [
    def-na-solenoidal-energy-weak-ns-velocity,
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    def-na-evolutionary-skew-convective-form,
    lem-na-evolutionary-skew-convective-form-bound,
    thm-na-bounded-lipschitz-domain-divergence-right-inverse,
    lem-na-zero-mean-of-zero-boundary-divergence,
    lem-na-continuous-pressure-recovery-from-solenoidal-residual,
    thm-na-mini-navier-stokes-be-subsequential-limit,
    def-na-mini-navier-stokes-backward-euler-scheme,
    thm-na-mini-be-step-existence-energy,
    thm-na-mini-element-fortin-stability,
    lem-na-mini-fortin-l2-approximation,
    thm-na-discrete-helmholtz-projection-and-pressure-schur,
    lem-pe12-bochner-lp-mollification,
    lem-parabolic-weak-compactness-separable-bochner-hilbert,
    lem-l-two-with-the-integral-pairing-is-a-hilbert-space,
    thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn,
    thm-riesz-representation-for-hilbert-space,
    thm-orthogonal-decomposition-by-a-closed-subspace,
    thm-poincare-inequality-for-w-one-p-zero,
    cor-sobolev-inequality-for-w-one-p-zero,
    thm-holder-inequality-for-integrals,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    def-bochner-integrable-function,
    def-strongly-measurable-banach-valued-function,
    thm-bochner-integrability-criterion,
    lem-bochner-integral-norm-inequality,
    thm-bounded-linear-maps-commute-with-bochner-integration,
    cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives,
    thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions,
    thm-locally-integrable-functions-embed-in-distributions,
    def-distributional-derivative,
    thm-countable-union-of-null-is-null,
    def-separable-space,
    def-axiom-of-choice,
    def-countable-choice,
    lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element
        approximation of unsteady flows of implicitly constituted incompressible
        fluids"
      url: https://arxiv.org/pdf/1804.02264
      locator: "Definition 2.1 and following paragraph, PDF p.5; §§3.1–3.3, PDF
        pp.9–13. The paper motivates distributional pressure and describes
        MINI/Fortin and time reconstructions; the exact Newtonian primitive and
        convergence assertions are derived locally."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Lemma 53.9, Theorems 53.17–53.19 and Exercise 53.2: static divergence
        lifting and inf-sup pressure recovery. No time-dependent pressure
        estimate is imported."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and Chapter 8 MINI-element sections; these
        are static mixed-method context, not the claimed evolutionary
        estimates."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$ be nonempty, bounded, connected and Lipschitz, with $d\in\{2,3\}$, let $0<T<\infty$ and $\nu>0$. Use $V=H^1_0(D;\mathbb R^d)$, $Q=L^2_0(D)$, $V_\sigma=\ker(\operatorname{div}:V\to Q)$, $H_\sigma=\overline{V_\sigma}^{\,L^2(D)}$, the bilinear form $a_\nu(v,w)=2\nu\int_D\varepsilon(v):\varepsilon(w)$, the pressure form $b(v,q)=-(q,\operatorname{div}v)_{L^2}$, and the real skew convective form $c$ from [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[def-na-evolutionary-skew-convective-form]] and [[def-na-solenoidal-energy-weak-ns-velocity]]. Let $C_P$ be a Poincare constant, $C_{\rm div}$ a bounded divergence-right-inverse constant, and choose $C_c$ large enough that
$$|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V,\qquad \|c(a;a,\cdot)\|_{V^*}\le C_c\|a\|_{L^2}^{1/2}\|a\|_V^{3/2}.$$
For $f\in L^2(0,T;L^2(D)^d)$ and $u_0\in H_\sigma$, let $u$ be a solenoidal energy weak velocity. Put $U=\|u\|_{L^\infty L^2}$, $E=\|u\|_{L^2V}$ and $F=\|f\|_{L^2L^2}$. There is a unique $P\in L^\infty(0,T;Q)\cap C_w([0,T];Q)$ with $P(0)=0$ such that, for every $t\in[0,T]$ and $v\in V$,
$$ (u(t)-u_0,v)_{L^2}+\int_0^t\bigl(a_\nu(u(s),v)+c(u(s);u(s),v)\bigr)\,ds+b(v,P(t))=\int_0^t(f(s),v)_{L^2}\,ds.$$
Here $C_w$ means continuity when tested against every fixed element of the Hilbert space $Q$. Moreover,
$$\|P\|_{L^\infty Q}\le C_{\rm div}\bigl(C_P(U+\|u_0\|_{L^2})+C_P\sqrt T F+2\nu\sqrt T E+C_cT^{1/4}U^{1/2}E^{3/2}\bigr).$$
Define the $Q$-valued time distribution $p=\partial_tP$ by
$$\langle p,\eta\rangle=-\int_0^TP(t)\eta'(t)\,dt\qquad(\eta\in C_c^\infty(0,T)).$$
The bound $\|\langle p,\eta\rangle\|_Q\le\|P\|_{L^\infty Q}\|\eta'\|_{L^1}$ makes this a continuous linear map from scalar test functions to $Q$. Then $p$ is the unique mean-zero distributional pressure for $u$, and for every $\varphi\in C^1([0,T];V)$ vanishing near $T$,
$$-\int_0^T(u,\varphi')_{L^2}\,dt+\int_0^T\bigl(a_\nu(u,\varphi)+c(u;u,\varphi)\bigr)\,dt-\int_0^Tb(\varphi',P)\,dt=\int_0^T(f,\varphi)_{L^2}\,dt+(u_0,\varphi(0))_{L^2}.$$
This pressure is a distribution; the assertion does not place $p$ in $L^{4/3}(0,T;Q)$.

For the discrete assertions, further assume that $D$ is polyhedral. Let $\mathcal T_j$ be matching shape-regular MINI meshes with $h_j\to0$, and let $0=t_0^j<\cdots<t_{N_j}^j=T$ have maximum step $\tau_{\max,j}\to0$. On each mesh take $u_{h,j}^0=P_{Z_j}u_0$ and any actual scheme solution $(u_{h,j}^n,p_{h,j}^n)$. Write $\overline u_{h,j}(t)=u_{h,j}^n$ and $\overline p_{h,j}(t)=p_{h,j}^n$ on $(t_{n-1}^j,t_n^j]$. For any subsequence for which $\overline u_{h,j}$ converges to $u$ as in [[thm-na-mini-navier-stokes-be-subsequential-limit]], define $P_{h,j}^0=0$, $P_{h,j}^m=\sum_{n=1}^m\tau_n^jp_{h,j}^n$, and let $P_{h,j}$ be the continuous piecewise-affine interpolant of these nodal values. If $\max_n\|u_{h,j}^n\|_{L^2}\le U_j$ and $\|\overline u_{h,j}\|_{L^2V}\le E_j$, then the uniform MINI inf-sup lower bound $\beta>0$ gives
$$\sup_{t\in[0,T]}\|P_{h,j}(t)\|_{L^2}\le\beta^{-1}\bigl(2C_PU_j+C_P\sqrt T F+2\nu\sqrt T E_j+C_cT^{1/4}U_j^{1/2}E_j^{3/2}\bigr).$$
Along a further subsequence, $P_{h,j}\rightharpoonup P$ in $L^2(0,T;Q)$. The piecewise-constant pressures converge to $p$ as $Q$-valued time distributions: for every $q\in Q$ and $\eta\in C_c^\infty(0,T)$,
$$\int_0^T(\overline p_{h,j}(t),q)_{L^2}\eta(t)\,dt\longrightarrow(\langle p,\eta\rangle,q)_{L^2}.$$
No relation between mesh size and maximum time step is imposed. These conclusions give pressure primitives and time-distribution convergence, not an instantaneous pressure regularity estimate.

Finally, let $u_t^{\mathrm{full}}$ denote the distributional derivative of $u$ as a $V^*$-valued distribution, using the embedding $L^2(D)^d\hookrightarrow V^*$. For this $u$, the pressure-bearing $L^{4/3}(0,T;Q)$ clause holds if and only if $u_t^{\mathrm{full}}$ is represented by an $L^{4/3}(0,T;V^*)$ Bochner function. This criterion concerns the actual full derivative, not an extension of its restriction to $V_\sigma$.

## Facts & Assumptions
**Given:** The Axiom of Choice, the domain, viscosity and time interval in the Statement, a solenoidal energy weak velocity $u$, data $f,u_0$, and, for the discrete clauses, the stated mesh/time families and mixed MINI solutions.

[A1] The Axiom of Choice supplies Countable Choice and the dependent-choice interfaces used by the scalar absolutely-continuous, Bochner and Hilbert subsequence results below. ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]])

[F1] The solenoidal energy velocity has a representative weakly continuous in $H_\sigma$, with $u(0)=u_0$, $u\in L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$, and it satisfies the scalar time-tested equation on every fixed $v\in V_\sigma$. ([[def-na-solenoidal-energy-weak-ns-velocity]])

[F2] $V=H^1_0(D;\mathbb R^d)$ has norm $\|v\|_V=\|\nabla v\|_2$, $Q=L^2_0(D)$, $b(v,q)=-(q,\operatorname{div}v)$ and $a_\nu(v,w)=2\nu(\varepsilon(v),\varepsilon(w))$. Every $v\in V$ has $\operatorname{div}v\in Q$ and $\|v\|_2\le C_P\|v\|_V$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-zero-mean-of-zero-boundary-divergence]], [[thm-poincare-inequality-for-w-one-p-zero]])

[F3] The real skew form is trilinear and its two bounds in the Statement hold. In $d=3$ the $L^6$ estimate uses the zero-boundary Sobolev inequality at exponent $p=2$. In $d=2$ it uses that inequality at exponent $p=3/2$, whose Sobolev conjugate is $6$, followed by finite-measure Holder to bound the $L^{3/2}$ gradient norm by the $L^2$ gradient norm. Thus the same $V\hookrightarrow L^6$ bound is available in both dimensions; no $d=2,p=2$ critical-exponent formula is used. ([[def-na-evolutionary-skew-convective-form]], [[lem-na-evolutionary-skew-convective-form-bound]], [[cor-sobolev-inequality-for-w-one-p-zero]], [[thm-holder-inequality-for-integrals]])

[F4] There is a bounded linear $B:Q\to V$ with $\operatorname{div}Bq=q$ and $\|Bq\|_V\le C_{\rm div}\|q\|_2$; this applies to the stated bounded connected Lipschitz domain in dimensions two and three. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F5] Strongly measurable functions with integrable norm have Bochner integrals; the norm of an integral is at most the integral of the norm, bounded linear maps commute with integration, and scalar Fubini applies to the integrable functions used below. ([[def-bochner-integrable-function]], [[def-strongly-measurable-banach-valued-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F6] Scalar weak equations with an $L^1$ derivative have absolutely-continuous representatives and obey the fundamental theorem; locally integrable functions that define the zero distribution vanish almost everywhere. Distributional derivatives use the negative test-derivative convention. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distributional-derivative]], [[thm-countable-union-of-null-is-null]])

[F7] $L^2(D)$ is a separable real Hilbert space. Its closed mean-zero subspace $Q$ and the closed subspace $H_\sigma$ are Hilbert; a closed-subspace orthogonal projection exists, and Riesz represents bounded real-linear functionals on $Q$. The Hilbert space $Q$ and $L^2(0,T;Q)$ are separable, and bounded sequences in the latter have weakly convergent subsequences under Countable Choice. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]], [[def-separable-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-riesz-representation-for-hilbert-space]], [[lem-parabolic-weak-compactness-separable-bochner-hilbert]])

[F8] The mixed MINI scheme holds on all $V_h$ tests; its energy theorem gives uniform velocity and gradient bounds and a jump-square bound. The MINI Fortin map preserves the pressure pairing, is uniformly $V$-stable, approximates each fixed $V$ vector in $V$, and the discrete $L^2$ projector onto $Z_h$ is best-approximating. ([[def-na-mini-navier-stokes-backward-euler-scheme]], [[thm-na-mini-be-step-existence-energy]], [[thm-na-mini-element-fortin-stability]], [[lem-na-mini-fortin-l2-approximation]], [[thm-na-discrete-helmholtz-projection-and-pressure-schur]])

[F9] On the subsequence in the Statement, the piecewise-constant velocities converge strongly in $L^2(0,T;L^2)$ and weakly in $L^2(0,T;V)$ to $u$. The cell averages of $f$ converge strongly in $L^2(0,T;L^2)$. ([[thm-na-mini-navier-stokes-be-subsequential-limit]], [[lem-pe12-bochner-lp-mollification]])

[F10] An $L^{4/3}(0,T;V^*)$ residual that annihilates $V_\sigma$ outside one common null set has a unique representing pressure in $L^{4/3}(0,T;Q)$. ([[lem-na-continuous-pressure-recovery-from-solenoidal-residual]])

## Proof

**Proof technique:** direct.

1.1 The weakly continuous representative of $u$ obeys $\|u(t)\|_2\le U$ for every $t\in[0,T]$. Indeed, if $\|u(t_0)\|_2>U$, take $w=u(t_0)/\|u(t_0)\|_2\in H_\sigma$. Weak continuity makes $(u(t),w)$ continuous and greater than $U$ on a relative neighborhood of $t_0$ with positive time measure, contradicting the essential bound $U$. [A1, F1, given, choose]

1.2 Define $g(t)\in V^*$ by $g(t)(v)=(f(t),v)_2-a_\nu(u(t),v)-c(u(t);u(t),v)$. The first two terms are strongly measurable bounded linear images of Bochner functions; the last is a continuous quadratic map $V\to V^*$ by the trilinear bound in [F3], hence is strongly measurable. Poincare and [F3] give $\|g(t)\|_{V^*}\le C_P\|f(t)\|_2+2\nu\|u(t)\|_V+C_c\|u(t)\|_2^{1/2}\|u(t)\|_V^{3/2}.$ Holder makes $g\in L^{4/3}(0,T;V^*)\subset L^1(0,T;V^*)$ and yields $\|g\|_{L^1V^*}\le C_P\sqrt T F+2\nu\sqrt T E+C_cT^{1/4}U^{1/2}E^{3/2}$. [A1, F1, F2, F3, F5, given, construct]

1.3 For a mixed MINI solution define $\widehat u_h$ by affine interpolation of the velocity nodes and let bars denote right-constant reconstructions. On each time cell, $\partial_tP_h=\overline p_h$ and $\partial_t\widehat u_h=D_\tau u_h^n$. Integrating the discrete equation over complete or partial cells gives, for every $t$ and $v_h\in V_h$, $(\widehat u_h(t)-u_h^0,v_h)_2+\int_0^t\bigl(a_\nu(\overline u_h,v_h)+c(\overline u_h;\overline u_h,v_h)\bigr)\,ds+b(v_h,P_h(t))=\int_0^t(f_h,v_h)_2\,ds.$ Because $P_h(t)\in Q_h$, the uniform inf-sup estimate applies. Convexity gives $\|\widehat u_h(t)\|_2\le U_h$; [F2], Holder, and [F3] bound the mass, force, viscosity and convection terms by $2C_PU_h$, $C_P\sqrt T F$, $2\nu\sqrt T E_h$, and $C_cT^{1/4}U_h^{1/2}E_h^{3/2}$ times $\|v_h\|_V$. This proves the displayed uniform primitive bound. [F2, F3, F5, F8, given, algebra]

1.4 Let $u_{h,j}^0=P_{Z_j}u_0$. For any $\epsilon>0$, choose $v\in V_\sigma$ with $\|u_0-v\|_2<\epsilon$; the Fortin map satisfies $\Pi_jv\in Z_j$ and $\|\Pi_jv-v\|_2\to0$. Best approximation of the orthogonal projector gives $\|u_{h,j}^0-u_0\|_2\le\|\Pi_jv-u_0\|_2\le\|\Pi_jv-v\|_2+\epsilon$. Letting $j\to\infty$ and then $\epsilon\downarrow0$ proves $u_{h,j}^0\to u_0$ strongly. [A1, F8, given, choose]

2.1 Set $G(t)=\int_0^tg(s)\,ds$. By [F5], $G$ is norm-continuous in $V^*$, $G(0)=0$, and $\sup_t\|G(t)\|_{V^*}\le\|g\|_{L^1V^*}$. [F5, step 1.2, construct]

2.2 The energy theorem [F8] gives $\sum_n\|u_{h,j}^n-u_{h,j}^{n-1}\|_2^2\le C$ uniformly. Therefore $\|\widehat u_{h,j}-\overline u_{h,j}\|_{L^2L^2}^2=\frac13\sum_n\tau_n^j\|u_{h,j}^n-u_{h,j}^{n-1}\|_2^2\le C\tau_{\max,j}\longrightarrow0.$ The pressure bound in step 1.3 is uniform in $j$, so $(P_{h,j})$ is bounded in the separable Hilbert space $L^2(0,T;Q)$. By [A1] and [F7], a further subsequence converges weakly to some $P_*\in L^2(0,T;Q)$. If $K$ is the uniform $L^\infty Q$ bound and $A_\epsilon=\{t:\|P_*(t)\|_2>K+\epsilon\}$ had positive measure, testing weak convergence against $\mathbf1_{A_\epsilon}P_*$ gives $\int_{A_\epsilon}\|P_*(t)\|_2^2\,dt=\lim_j\int_{A_\epsilon}(P_{h,j}(t),P_*(t))_2\,dt\le K\int_{A_\epsilon}\|P_*(t)\|_2\,dt.$ The left side is at least $(K+\epsilon)\int_{A_\epsilon}\|P_*(t)\|_2\,dt$, a contradiction. Hence every $A_\epsilon$ is null and $P_*\in L^\infty Q$ with bound $K$. [A1, F7, F8, step 1.3, construct]

2.3 Conversely suppose the actual $u_t^{\mathrm{full}}$ is represented in $L^{4/3}(0,T;V^*)$ and set $r=g-u_t^{\mathrm{full}}$. For each $z\in V_\sigma$, the scalar weak equation [F1] gives $r(t)(z)=0$ as a time distribution. The space $V$ is separable: with its equivalent full $H^1$ norm it embeds isometrically into a finite product of scalar $L^2(D)$ spaces by listing each velocity component and its first derivatives; restricting rational-box step functions makes that product separable. The subspace $V_\sigma=\ker\operatorname{div}$ is closed, hence separable (a countable base for the ambient metric space restricts to a countable base on $V_\sigma$, and Countable Choice selects one point from each nonempty base member). For a countable dense family $(z_k)$ in $V_\sigma$, each scalar $r(\cdot)(z_k)\in L^1(0,T)$ is zero almost everywhere by [F6]; outside the countable union of these null sets, continuity of $r(t)\in V^*$ makes it vanish on all of $V_\sigma$. [A1, F1, F5, F6, F7, step 1.2, construct]

3.1 For every $t$, define the full-test residual $R(t)\in V^*$ by $R(t)(v)=G(t)(v)-(u(t)-u_0,v)_2$. This functional is bounded with $\|R(t)\|_{V^*}\le C_P(U+\|u_0\|_2)+\|g\|_{L^1V^*}$. For each fixed $v\in V$, the scalar map $t\mapsto R(t)(v)$ is continuous: orthogonally project $v$ onto the closed subspace $H_\sigma$; since $u(t)\in H_\sigma$, its pairing with $v$ equals its pairing with that projection and is continuous by [F1]. [F1, F2, F7, step 2.1, construct]

3.2 For the convergence of convection, use the separate Sobolev routes in [F3]: $H^1_0\hookrightarrow L^6$ by the $p=2$ Sobolev exponent in dimension three, and by the $p=3/2$ inequality plus finite-measure Holder in dimension two. Interpolation gives $\|w\|_{L^2L^3}\le\|w\|_{L^2L^2}^{1/2}\|w\|_{L^2L^6}^{1/2}$ and $\|w\|_{L^2L^4}\le\|w\|_{L^2L^2}^{1/4}\|w\|_{L^2L^6}^{3/4}$. The energy bounds give uniform $L^2L^6$ norms, while strong $L^2L^2$ convergence in [F9] therefore implies strong $L^2L^3$ and $L^2L^4$ convergence. For fixed $v\in V$, the gradient term in the skew form pairs weakly convergent gradients with $\overline u_{h,j}\otimes v$ converging strongly in $L^2L^2$; its other term pairs $\nabla v$ with $\overline u_{h,j}\otimes\overline u_{h,j}$ converging strongly in $L^1L^2$, since $\|\overline u_{h,j}\otimes\overline u_{h,j}-u\otimes u\|_{L^1L^2}\le(\|\overline u_{h,j}\|_{L^2L^4}+\|u\|_{L^2L^4})\|\overline u_{h,j}-u\|_{L^2L^4}\to0.$ Replacing $v$ by $\Pi_jv$ changes the integral by at most $C\|\Pi_jv-v\|_V\|\overline u_{h,j}\|_{L^2V}^2$, which tends to zero. No divergence-free property of the test $v$ is used. [F3, F8, F9, step 2.2, algebra]

4.1 Fix $z\in V_\sigma$. The scalar weak equation [F1] says that $(u(t),z)_2$ has distributional derivative $g(t)(z)$ and initial trace $(u_0,z)_2$. Since $g(z)\in L^1$, [F6] gives an absolutely-continuous representative equal to $(u_0,z)_2+G(t)(z)$. Weak continuity in [F1] identifies that representative with $(u(t),z)_2$ for every $t$. Hence $R(t)(z)=0$ for every $z\in V_\sigma$ and every $t$, and $R(0)=0$. [F1, F5, F6, step 1.2, step 3.1]

5.1 For each $t$, the map $q\mapsto-R(t)(Bq)$ is a bounded real-linear functional on $Q$ of norm at most $C_{\rm div}\|R(t)\|_{V^*}$. Riesz representation [F7] therefore defines a unique $P(t)\in Q$ by $(P(t),q)_2=-R(t)(Bq)$ for all $q\in Q$. The uniform bound from step 3.1 gives the stated $L^\infty Q$ estimate. For fixed $q$, $t\mapsto(P(t),q)_2=-R(t)(Bq)$ is continuous, so $P\in C_w([0,T];Q)$ and $P(0)=0$. Choose a countable orthonormal basis of the separable Hilbert space $Q$. Each finite-coordinate projection of $P$ is strongly measurable because its coordinates are continuous; the projections converge in norm to $P(t)$ at every $t$. Thus $P$ is strongly measurable and belongs to $L^\infty(0,T;Q)$. [F4, F5, F7, step 3.1, step 4.1, construct]

6.1 For $v\in V$, let $q=\operatorname{div}v\in Q$ by [F2]. Then $v-Bq\in V_\sigma$, so step 4.1 gives $R(t)(v)=R(t)(Bq)=-(P(t),q)_2=b(v,P(t))$. Substitution of the definition of $R$ proves the integrated identity for every $t$ and $v$. If $P_1,P_2$ both satisfy it, set $v=Bq$ for arbitrary $q\in Q$ to obtain $(P_1(t)-P_2(t),q)_2=0$ for every $q$, hence $P_1(t)=P_2(t)$. [F2, F4, step 4.1, step 5.1, algebra]

7.1 The formula $\langle p,\eta\rangle=-\int_0^TP(t)\eta'(t)\,dt$ defines a continuous $Q$-valued distribution because its norm is bounded by $\|P\|_{L^\infty Q}\|\eta'\|_{L^1}$. Differentiating step 6.1 against scalar tests gives $u_t+a_\nu(u,\cdot)+c(u;u,\cdot)+b(\cdot,p)=f$ in $V^*$-valued distributions. If another $Q$-valued distribution has this property, test the difference against $Bq$ for each $q\in Q$; since $\operatorname{div}Bq=q$, the $Q$ inner product of the difference with every $q$ vanishes, so the difference is zero. [F2, F5, step 6.1, construct]

7.2 Fix $v\in V$ and $\eta\in C_c^\infty(0,T)$. Test the integrated identity of step 1.3 with $\Pi_jv$ and integrate in $t$ against $\eta$. Scalar Fubini rewrites each primitive integral using the bounded weight $s\mapsto\int_s^T\eta(t)\,dt$. Strong convergence of $\widehat u_{h,j}$ from [F9] and step 2.2, strong convergence of initial projections from step 1.4, weak $L^2V$ convergence from [F9], convergence of force averages from [F9], Fortin convergence $\Pi_jv\to v$ in $V$, the convection convergence in step 3.2, and weak convergence $P_{h,j}\rightharpoonup P_*$ pass every term to the limit. In the pressure term, weak convergence of $P_{h,j}$ is paired with the strongly convergent tests $\eta\,\operatorname{div}\Pi_jv\to\eta\,\operatorname{div}v$ in $L^2(0,T;Q)$. The result is the continuous integrated identity of step 6.1 with $P_*$ in place of $P$, as a scalar time distribution. [F5, F7, F8, F9, step 6.1, step 1.3, step 1.4, step 2.2, step 3.2]

8.1 For fixed $v\in V$, step 6.1 says $(u(t),v)_2+b(v,P(t))=(u_0,v)_2+\int_0^tg(s)(v)\,ds$. The right side is absolutely continuous. Multiply this scalar identity by a $C^1$ time function vanishing near $T$ and integrate by parts; for a finite sum of tests $\varphi(t)=\sum_{k=1}^m\eta_k(t)v_k$ this gives the stated initial-trace formula. Such finite sums are dense in $C^1([0,T];V)$ for tests vanishing near $T$: since $\varphi$ vanishes on a terminal interval, so does $\varphi\prime$. On successively finer partitions, piecewise-linear interpolation of this uniformly continuous derivative has finite-dimensional range, converges uniformly to $\varphi\prime$, and remains zero on a terminal interval. Write an interpolant as $\sum_{k=1}^m\chi_k(t)v_k$ with fixed $v_k\in V$ and continuous piecewise-linear scalar functions $\chi_k$. Then $\varphi_m(t)=-\sum_{k=1}^m\left(\int_t^T\chi_k(s)\,ds\right)v_k$ is a finite sum with $C^1$ scalar coefficients, vanishes near $T$, and converges to $\varphi$ in $C^1$. Every term in the weak-form identity is continuous in that norm by [F1]–[F5], so the identity extends to every stated $\varphi$. [F1, F2, F5, F6, step 6.1, step 7.1, algebra]

8.2 Subtract step 6.1 from the limit identity in step 7.2 and set $v=Bq$ for each $q\in Q$. Then $(P_*-P,q)_2=0$ as a scalar time distribution. Since $P_*-P\in L^2(0,T;Q)$ and $Q$ has a countable dense subset, [F6] and the countable-union result make $P_*=P$ almost everywhere. For $\eta\in C_c^\infty(0,T)$, the identity $\partial_tP_{h,j}=\overline p_{h,j}$ gives $\int_0^T(\overline p_{h,j},q)_2\eta\,dt=-\int_0^T(P_{h,j},q)_2\eta'\,dt\longrightarrow-\int_0^T(P,q)_2\eta'\,dt=(\langle p,\eta\rangle,q)_2.$ This is the claimed weak convergence as $Q$-valued time distributions. [F4, F5, F6, F7, step 6.1, step 7.1, step 7.2, algebra]

8.3 To prove the forward direction of the instantaneous-pressure criterion, suppose $p\in L^{4/3}(0,T;Q)$. The full equation in step 7.1 gives $u_t^{\mathrm{full}}=g-b(\cdot,p)$ as a $V^*$-valued distribution. Since $|\operatorname{div}v|\le\sqrt d\,|\nabla v|$, the map $q\mapsto b(\cdot,q)$ is bounded from $Q$ to $V^*$; [F5] therefore makes $b(\cdot,p)$ Bochner $L^{4/3}V^*$. As $g\in L^{4/3}V^*$ by step 1.2, the actual full derivative has that same regularity. [F2, F5, step 1.2, step 7.1]

9.1 The continuous residual-recovery lemma [F10] applies to $r\in L^{4/3}(0,T;V^*)$ and gives $p_s\in L^{4/3}(0,T;Q)$ with $r(t)(v)=b(v,p_s(t))$ for all $v\in V$ almost everywhere. Thus $p_s$ is a full pressure distribution for $u$. Uniqueness in step 7.1 identifies $p_s$ with $p$, proving the reverse direction. Therefore the exact necessary-and-sufficient condition is the stated regularity of the actual full derivative. [F2, F4, F10, step 7.1, step 2.3] ∎

## Remarks

The source's pressure-free weak formulation and the primitive conclusions above do not establish the stronger PE06 instantaneous pressure regularity or instantaneous smooth pressure-error rate. The derivative criterion isolates the actual missing continuous input; an extension of $u_t$ known only on $V_\sigma$ is not that input.

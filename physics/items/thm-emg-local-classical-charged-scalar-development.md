---
id: thm-emg-local-classical-charged-scalar-development
kind: theorem
title: "Local classical Einstein–Maxwell–charged-scalar development"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 8
proof_strategy: direct
deps:
  - def-emg-classical-charged-scalar-finite-regularity-system
  - def-emg-trivial-potential-charged-scalar-system
  - lem-emg-temporal-scalar-positive-symmetric-reduction
  - lem-emg-charged-scalar-subsidiary-chain
  - def-emg-periodic-high-sobolev-state
  - thm-emg-symmetric-hyperbolic-research-supplier
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - thm-gr-local-geometric-development
  - thm-gr-constraint-equations-in-normal-frame
  - def-gr-harmonic-gauge-and-reduced-equations
  - def-gr-periodic-symmetric-hyperbolic-system
  - lem-gr-reduced-einstein-principal-part
  - lem-gr-periodic-sobolev-embedding
  - def-countable-choice
  - def-dependent-choice
  - lem-gr-periodic-sobolev-algebra
  - thm-gr-local-geometric-uniqueness
  - lem-gr-smooth-composition-and-commutator-estimates
  - thm-gronwall-integral-inequality
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
dependency_roles:
  def-emg-classical-charged-scalar-finite-regularity-system: mathematical-premise
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-emg-temporal-scalar-positive-symmetric-reduction: mathematical-premise
  lem-emg-charged-scalar-subsidiary-chain: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-symmetric-hyperbolic-research-supplier: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  thm-gr-local-geometric-uniqueness: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
sources:
  references:
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete arXiv text"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Complete 97-page PDF; §§2.4, 3.1 and 5.1, PDF pp. 12–16, 21–31 and 80–83: harmonic reduction, symmetric-hyperbolic local Cauchy theory, and conditional matter coupling. The charged blocks, constraints and subsidiary identities are checked locally here."
    - title: "Mathieu Colin and Tatsuya Watanabe, Cauchy problem for the nonlinear Klein–Gordon equation coupled with the Maxwell equation, Journal of Mathematical Analysis and Applications 443 (2016), full author-hosted PDF"
      url: "https://www.math.u-bordeaux.fr/~mcolin/cauchy_maxKG.pdf"
      locator: "Complete 23-page PDF; §§2 and 4.1–4.2, PDF pp. 3–20: charged-scalar current conventions and a flat-space Coulomb-gauge Cauchy comparison. Its elliptic scalar potential and fixed-background solution are not substituted for this coupled Einstein proof."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, §§4.5.1–4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Complete 290-page PDF; §§4.5.1–4.5.3, PDF pp. 187–193 (printed pp. 181–186): curved scalar action, Hilbert tensor and Maxwell tensor conventions. The charged conventions and all local PDE claims are proved or used conditionally here."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice $\mathrm{DC}$ ([[def-countable-choice]], [[def-dependent-choice]]). Fix an integer $s\ge5$, constants $c>0$, $G_N>0$, $\mu_0>0$, $K_\varphi>0$, $\lambda,\Lambda\in\mathbb R$, and a real $V\in C^\infty(\mathcal U)$ on an open $\mathcal U\subseteq\mathbb R$ containing the attained values of $|\varphi|^2$. Use the system and units of [[def-emg-trivial-potential-charged-scalar-system]] for smooth fields and its explicit classical extension [[def-emg-classical-charged-scalar-finite-regularity-system]] for the finite-Sobolev branch.

Write $\mathcal D_a\varphi:=\partial_a\varphi-i\lambda A_a\varphi$ and $\mathcal D_a\pi_b:=\nabla_a\pi_b-i\lambda A_a\pi_b$ for the charged derivatives of the model suppliers. In this item $D$ denotes only the spatial Levi-Civita derivative of $h$; thus $D_i\varphi=\partial_i\varphi$ on a scalar, while $\mathcal D_i\varphi=\partial_i\varphi-i\lambda A_i\varphi$.

For any initial three-manifold $\Sigma$ with Riemannian metric $h$ below, use the abstract initial Lorentzian bundle $\mathcal V_\Sigma:=\mathbb R n\oplus T\Sigma$ with metric $g_\Sigma(an+X,bn+Y):=-ab+h(X,Y)$ for $a,b\in\mathbb R$ and $X,Y\in T\Sigma$, as in [[thm-gr-local-geometric-development]]. Here $n$ is the distinguished future unit generator, realized as the future unit normal in any spacetime development; the data definition does not presuppose that development. For the periodic Cauchy result let $\Sigma=\mathbb T^3_{2\pi}$ and orient it by its ordered periodic coordinates, as in [[def-emg-periodic-high-sobolev-state]]. Prescribe a real symmetric metric $h\in H^{s+1}$ whose continuous representative satisfies $h\ge c_0I$ for some $c_0>0$, a symmetric tensor $K\in H^s$, spatial vector fields $e,b\in H^s$, a global real spatial one-form $A_\Sigma\in H^s$, a complex scalar $\varphi_0\in H^{s+1}$, and an independent complex datum $\pi_n\in H^s$ for the normal component of the charged derivative, realized by $\mathcal D_n\varphi|_\Sigma=\pi_n$. All Sobolev spaces are real componentwise spaces with complex fields split into real and imaginary parts, as in [[def-emg-periodic-high-sobolev-state]]. Let $(\mathfrak e_1,\mathfrak e_2,\mathfrak e_3)$ be any positively oriented $h$-orthonormal spatial frame. The associated initial two-form $F_\Sigma$ on $\mathcal V_\Sigma$ is defined invariantly by

$$F_\Sigma(X,n)=h(e,X),\qquad F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)\quad(X,Y\in T\Sigma).$$

Thus, writing $e_i=h(e,\mathfrak e_i)$ and $b_i=h(b,\mathfrak e_i)$, its frame components are $F_\Sigma(\mathfrak e_i,n)=e_i$ and $F_\Sigma(\mathfrak e_i,\mathfrak e_j)=\epsilon_{ijk}b_k$, with $\epsilon_{123}=+1$. Require $F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$, $\pi_i=(\mathcal D_i\varphi_0)=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$, and $A(n)=0$. Fix a smooth positive reference metric $\gamma$ and the product comparison metric $\bar g=-(dx^0)^2+\gamma$ near the initial slice. The harmonic-gauge vector is $H^a:=g^{bc}(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc})$; prescribe the following initial metric jet relative to this fixed smooth background:

$$g_{ij}=h_{ij},\quad g_{00}=-1,\quad g_{0i}=0,\quad \partial_0g_{ij}=2K_{ij},\quad \partial_0g_{00}=-2\operatorname{tr}_hK,\quad \partial_0g_{0i}=h_{ij}h^{k\ell}(\Gamma(h)^j{}_{k\ell}-\Gamma(\gamma)^j{}_{k\ell}).$$

Let $D$ be the Levi–Civita derivative of $h$, $\tau=\operatorname{tr}_hK$, and $T=T^{\mathrm{EM}}+T^\varphi$ be evaluated on the complete initial data. Define $j^0:=-n_aj^a$ in the normal frame and assume the sourced Maxwell and total-stress Einstein constraints

$$D_i b^i=0,\qquad D_i e^i=\mu_0j^0,\qquad R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T(n,n),\qquad (\operatorname{div}_hK)(X)-D_X\tau=\kappa T(n,X)\quad(X\in T\Sigma),$$

where $(\operatorname{div}_hK)(X)=h^{ij}(D_{\partial_i}K)(\partial_j,X)$, $\kappa=8\pi G_N/c^4$, and $K(X,Y)=g(\nabla_Xn,Y)$ in a spacetime realization. The constraint expressions are interpreted using their continuous representatives at the stated Sobolev orders. On the reduced coordinate domain require $g^{00}<0$ and the inverse spatial block $(g^{ij})$ to be positive definite. The real first-order state consists of the metric variables $(g_{ab},p_{ab},q_{abi})$ relative to a fixed smooth background, the six Maxwell variables $(e_i,b_i)$, the three potential components $A_i$, and the real and imaginary parts of $\varphi,\pi_0,\pi_i$. For fixed reference scales $L_0>0$ metres and $F_0>0$ tesla, replace each first metric derivative $v$ and each $\pi_a$ by $L_0v$ and $L_0\pi_a$, each $e_i,b_i$ by $e_i/F_0,b_i/F_0$, and each $A_i$ by $A_i/(L_0F_0)$; $g_{ab}$ and $\varphi$ are already dimensionless. These fixed invertible rescalings make the componentwise real Sobolev state dimensionless and add no equations. Let $u_0$ be the resulting state in the sense of [[def-emg-periodic-high-sobolev-state]], and suppose its continuous range is a compact $K_0$ contained in the interior of a compact $K_1$ inside an open admissible state set $O$, with $\|u_0\|_{H^s}\le R$ and $R\ge0$. On an open time interval $I\ni0$, the complete periodic coefficient maps are smooth jointly on $I\times\mathbb T^3_{2\pi}\times O$ as in [[def-gr-periodic-symmetric-hyperbolic-system]]; the potential range lies in $\mathcal U$, and the combined time matrix is positive definite throughout $O$.

Then there is $T_*>0$ and a local solution on $(-T_*,T_*)\times\mathbb T^3_{2\pi}$ of the full Einstein, sourced Maxwell, and classical charged-scalar equations. Its first-order metric and matter state has the $L^\infty H^s\cap C H^{s-1}$ regularity of [[thm-emg-symmetric-hyperbolic-research-supplier]]; the metric satisfies $g\in L^\infty H^{s+1}\cap C H^s$ and $\partial_0g\in L^\infty H^s\cap C H^{s-1}$, while $F,\pi,A_i\in L^\infty H^s\cap C H^{s-1}$ and $\varphi\in L^\infty H^{s+1}\cap C H^s$. The constraints and first-order metric, scalar, and potential compatibility conditions propagate. Smooth data give a smooth development on the same local interval.

More generally, let $\Sigma$ be any smooth oriented three-manifold without boundary. Prescribe a smooth positive-definite metric $h\in C^\infty(\Sigma;\operatorname{Sym}^2T^*\Sigma)$, a smooth symmetric covariant two-tensor $K\in C^\infty(\Sigma;\operatorname{Sym}^2T^*\Sigma)$, smooth spatial vector fields $e,b\in C^\infty(\Sigma;T\Sigma)$, a smooth global one-form $A_\Sigma\in C^\infty(\Sigma;T^*\Sigma)$, a complex scalar $\varphi_0\in C^\infty(\Sigma;\mathbb C)$, and an independent complex datum $\pi_n\in C^\infty(\Sigma;\mathbb C)$ realized by $\mathcal D_n\varphi|_\Sigma=\pi_n$ on $\mathcal V_\Sigma$. Define $F_\Sigma$ on $\mathcal V_\Sigma$ by the same $h,e,b$ convention in local positively oriented orthonormal frames, without requiring a global frame. Require $F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$, $\pi_i=\mathcal D_i\varphi_0$, $A(n)=0$, and the sourced Maxwell and total-stress Einstein constraints displayed above at every point of $\Sigma$. Restrict to neighborhoods where $|\varphi|^2\in\mathcal U$. Then the data have a smooth local development near each initial point. Any two developments of this same fixed model and complete data are related near the initial surface by a data-fixing, time-orientation-preserving isometry and a global-potential gauge transformation

$$A\mapsto A+d\chi,\qquad \varphi\mapsto e^{i\lambda\chi}\varphi,$$

for a smooth real $\chi$ with $\chi=0$ on the initial surface; under the formal units of [[def-emg-trivial-potential-charged-scalar-system]], $[\chi]=\mathrm{Wb}$ so $\lambda\chi$ is dimensionless. No nontrivial bundle sector, singular source, global-in-time existence, uniform noncompact time width, or geodesic completeness is asserted.

## Facts & Assumptions

**Given:** The parameters, smooth potential, finite-Sobolev periodic data or smooth general complete data, and compatibility, constraint, and admissible-state hypotheses in the Statement.

[F1] [[def-emg-trivial-potential-charged-scalar-system]] defines the global real-potential system, exact $F=dA$, charged derivative, current, scalar stress, and Maxwell stress; this is a mathematical system, not a physical postulate. [[def-emg-classical-charged-scalar-finite-regularity-system]] defines these same tensors and pointwise equations on a smooth underlying manifold with $g\in C^3$, $A,\varphi\in C^2$, the classical domain of the finite branch.

[L1] [[def-emg-periodic-high-sobolev-state]] defines the real componentwise periodic $H^s$ state class $\mathcal S_s(K,R)$ using the Fourier conventions and $\mathrm{AC}_\omega$. Only its stated function-space interface is used.

[L2] [[def-gr-periodic-symmetric-hyperbolic-system]] defines a smooth periodic first-order coefficient family with real symmetric matrices and positive time matrix. Only its coefficient definition is used here.

[L3] [[thm-emg-symmetric-hyperbolic-research-supplier]] gives common-time $H^s$ existence, uniqueness, $H^{s-1}$ stability and smooth persistence for a coefficient family already shown to meet [L2]. Its proof combines the exact periodic existence, uniqueness/stability and smooth-persistence suppliers; the present proof must first verify our blocks.

[L4] [[lem-emg-fieldstrength-positive-symmetric-reduction]] supplies the symmetric Maxwell field-strength principal block and positive time matrix. The metric principal block is the one stated in [L7], with the algebraic charged-scalar stress entering only as a zero-order source.

[L5] [[lem-emg-temporal-scalar-positive-symmetric-reduction]] gives the charged scalar block with positive time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$. The displayed coefficient matrices have been computed directly.

[L6] [[lem-emg-charged-scalar-subsidiary-chain]] propagates the metric derivative, scalar, potential, Maxwell, and Einstein-gauge constraints and establishes total-stress conservation before Einstein recovery. Its magnetic, potential, current, electric, stress and gauge recovery order is used here.

[L7] [[def-gr-harmonic-gauge-and-reduced-equations]] gives the trace-reversed reduced equation and harmonic vector. [[lem-gr-reduced-einstein-principal-part]] states that a smooth algebraic stress map leaves the metric principal matrices unchanged. The exact reduced metric operator and algebraic-source property are used.

[L8] [[lem-gr-smooth-composition-and-commutator-estimates]] supplies smooth composition on compact state ranges. [[lem-gr-periodic-sobolev-embedding]] gives $H^s\hookrightarrow C^m$ when $s-m>3/2$, and [[lem-gr-periodic-sobolev-algebra]] gives $H^s$ product control for $s\ge4$. These estimates are applied at the stated integer Sobolev orders and compact state ranges.

[L9] [[thm-gr-constraint-equations-in-normal-frame]] gives the stated normal Einstein projections for $K(X,Y)=g(\nabla_Xn,Y)$. The displayed identity is used under its stated hypotheses.

[L10] [[thm-gr-local-geometric-development]] gives a local-development and data-fixing uniqueness result for complete constrained data of a fixed covariant model whose exact first-order reduction propagates all auxiliaries and whose total stress is conserved before Einstein recovery. It assumes $\mathrm{AC}_\omega$ and $\mathrm{DC}$. Its complete-data, covariance and gauge-fixed reduction hypotheses are checked below.

[L11] [[thm-gr-local-geometric-uniqueness]] constructs physical wave-coordinate charts with the prescribed initial normal/tangential differential, compares identical positive symmetric reduced systems, and patches data-fixing metric isometry germs using injective normal collars. For an internally gauged model its same-system hypothesis must be verified after the internal gauge is fixed; that verification is supplied here before comparison.

[L12] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] and [[thm-gronwall-integral-inequality]] justify the shrinking-domain energy comparison and its zero-initial-energy conclusion.

[A1] The periodic state has finite real dimension after splitting complex variables into real and imaginary parts. The admissible open set is chosen so the metric inequalities hold, $|\varphi|^2\in\mathcal U$, and all coefficient maps are smooth with a positive time matrix. No full Axiom of Choice or empirical premise is assumed.

## Proof

**Proof technique:** verify the complete coupled principal block, apply the stated local Sobolev solver, recover the covariant equations by the subsidiary lemma, then verify the exact geometric-development interface and internal-gauge comparison for general smooth data.

1.1 For the periodic metric jet, put $Q^i:=h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})$. The continuous positive metric $h$ has range in a compact subset of the open cone of positive-definite matrices. Smooth composition with matrix inversion and the $H^s$ product estimate in [L8] give $h^{-1}\in H^{s+1}$ and, by the Christoffel formula, $\Gamma(h)^i{}_{jk}\in H^s$. Since $\gamma$ is smooth, $Q\in H^s$, $\tau=h^{ij}K_{ij}\in H^s$, and $h_{ij}Q^j\in H^s$. Thus all prescribed normal metric derivatives lie in $H^s$. The spatial derivatives of $h$ lie in $H^s$ as well, so $p_{ab}=\bar\nabla_0g_{ab}$ and $q_{abi}=\bar\nabla_i g_{ab}$, with the fixed smooth product background, have the required $H^s$ regularity. On the initial slice $g^{00}=-1$, $g^{0i}=0$, $g^{ij}=h^{ij}$. The Christoffel formula gives $\Gamma(g)^0{}_{00}=\tau$, $\Gamma(g)^0{}_{ij}=K_{ij}$, $\Gamma(g)^i{}_{00}=Q^i$, and $\Gamma(g)^i{}_{jk}=\Gamma(h)^i{}_{jk}$. The product background has $\bar\Gamma^0{}_{ab}=\bar\Gamma^i{}_{00}=\bar\Gamma^i{}_{0j}=0$ and $\bar\Gamma^i{}_{jk}=\Gamma(\gamma)^i{}_{jk}$. Therefore the definition of $H$ in [L7] gives $H^0=-\Gamma(g)^0{}_{00}+h^{ij}\Gamma(g)^0{}_{ij}=-\tau+\tau=0$ and $H^i=-\Gamma(g)^i{}_{00}+h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})=-Q^i+Q^i=0$. These equalities hold in $H^s$ and hence pointwise for the continuous representatives by [L8]. [given, L1, L7, L8, A1, algebra]

1.2 The prescribed normal/tangential two-form components determine the unique real two-form on $\mathbb R n\oplus T\Sigma$: $F(n,\mathfrak e_i)=-e_i$ and $F(\mathfrak e_i,\mathfrak e_j)=\epsilon_{ijk}b_k$. Exactness $F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$ and $\pi_i=\mathcal D_i\varphi_0$, together with $\pi_0=\pi_n$ in the initial temporal gauge, make all field and potential entries compatible. In the periodic coordinate trivialization, Gram–Schmidt applied to the global coordinate frame and the positive matrix $h$ gives an $h$-orthonormal frame whose coefficients are smooth functions of $h$; by [L8] its coefficients lie in $H^{s+1}$, so the frame components $e_i,b_i$ lie in $H^s$. Also $\partial_i\varphi_0\in H^s$ and $A_i\varphi_0\in H^s$ by the $H^s$ algebra estimate, hence $\pi_i=\partial_i\varphi_0-i\lambda A_i\varphi_0\in H^s$, while $\pi_0=\pi_n\in H^s$. The remaining matter components have the stated $H^s$ regularity. After the fixed invertible rescalings every state component is real and in the stipulated $H^s$ class; the compact range lies in $K_0\Subset K_1\Subset O$. [given, F1, L1, L8, A1, construct, algebra]

1.3 On the unscaled state, the metric block has the positive time matrix $\operatorname{diag}(I,-g^{00}I,(g^{ij})I)$ from [L7]; the total stress is algebraic in $(g,F,\varphi,\pi)$, so the scalar contribution changes only zero-order terms. The Maxwell block has time matrix $\alpha^{-1}I_6$ and symmetric spatial matrices by [L4]; the sourced current is algebraic in $(g,\varphi,\pi)$ and hence is lower order. The charged scalar block has time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$ on each real and imaginary part by [L5]. The $\varphi$ and $A_i$ transport equations add identity time blocks and zero spatial blocks. These blocks have no off-diagonal derivative couplings, so their direct sum has symmetric principal matrices and positive time matrix. Let $v$ denote that unscaled state, $u=Sv$ the stated dimensionless state, and $S$ the fixed positive diagonal rescaling. Substituting $v=S^{-1}u$ in $A^\mu(x^0,x,v)\partial_\mu v+B(x^0,x,v)=0$ and multiplying by $S^{-T}$ gives principal matrices $\widetilde A^\mu(x^0,x,u)=S^{-T}A^\mu(x^0,x,S^{-1}u)S^{-1}$ and source $\widetilde B(x^0,x,u)=S^{-T}B(x^0,x,S^{-1}u)$. Congruence preserves symmetry and positive definiteness of the time matrix, so the same coefficient properties hold for the actual dimensionless state. All coefficient maps are smooth jointly on $I\times\mathbb T^3_{2\pi}\times O$: the background and reference metric are smooth, and state dependence uses smooth inversion of $g$, smoothness of $V$, and the stipulated open range. These displayed coefficient identities are algebraic in the finite state and its first coordinate derivatives; their derivation does not require an evolved solution to be smooth. At a point the relevant finite jets of a classical field can equally be realized by smooth Taylor polynomials, so the same coordinate identities and explicit coefficient maps apply to the classical domain in [F1]. This transfers an identity, not a smooth solution or a smoothness claim. [given, F1, L2, L4, L5, L7, A1, algebra]

2.1 Apply [L3] to this verified coefficient family, the state $u_0\in\mathcal S_s(K_0,R)$, and compact sets $K_0\Subset K_1\Subset O$. The solver gives the common interval, values in $K_1$, $L^\infty H^s\cap C H^{s-1}$ state regularity, uniqueness and stability, and smooth persistence for smooth initial data. It asserts only a solution to the reduced first-order system at this step. [given, L1, L2, L3, step 1.1, step 1.2, step 1.3]

3.1 The reduced coefficient system writes $u_s=-(A^0)^{-1}(A^i\partial_i u+B)$ on a compact admissible range. Since $u\in C H^{s-1}$ and the coefficient maps are smooth, the algebra and composition estimates give $u_s\in C H^{s-2}$; differentiating this expression once gives $u_{ss}\in C H^{s-3}$. The metric derivative residual $q_i-\bar\nabla_i g$ satisfies the homogeneous background-commutator ODE and has zero initial value, independently of the matter constraints, so $q_i=\bar\nabla_i g$; also $p=\bar\nabla_0g$ by its evolution. Thus the same Fourier norm and time-derivative argument as for the electrovacuum block gives $g\in L^\infty H^{s+1}\cap C H^s$ and $g\in C^3$ as a spacetime metric at the base order $s=5$: third spatial derivatives come from two spatial derivatives of $q$, mixed third derivatives from spatial derivatives of $p_s$, and third time derivatives from $p_{ss}$, all continuous since $H^2\hookrightarrow C^0$. The algebraic reconstruction of $F$ from $(g,e,b)$ and the scalar component equations likewise give $F,A,\varphi,\pi\in C^2$ where needed. In particular the smooth coordinate time levels have a $C^1$ transverse normal, the normal residual-transport arguments are legitimate, and the subsidiary wave energy has Lipschitz principal coefficients and bounded lower-order coefficients. This verifies the finite-regularity applicability of [L6] before using its conclusion. [given, L4, L5, L6, L8, step 2.1, algebra]

4.1 The initial metric, scalar, potential, and Maxwell compatibilities and all Gauss and Einstein constraints are exactly those of [L6]. Applying that subsidiary result recovers $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$, $\pi=\mathcal D\varphi$, $F=dA$, both sourced Maxwell equations, total-stress conservation before Einstein recovery, and $H=0$. Therefore the reduced solution is a full solution of the classical mathematical system in [F1]: step 3.1 supplies $g\in C^3$, $A,\varphi\in C^2$, while the compatibility just recovered identifies its $F$ and $\pi$ with $dA$ and $\mathcal D\varphi$. Smooth persistence gives the original smooth system for smooth data. [given, F1, L6, step 1.1, step 2.1, step 3.1]

5.1 Since $q_i=\partial_i g$ up to the fixed smooth background connection, the periodic Fourier norm identity gives $\|g\|_{H^{s+1}}\asymp\|g\|_{H^s}+\sum_i\|\partial_i g\|_{H^s}$; similarly $p=\bar\nabla_0g$ gives the stated time-derivative regularity. From $\pi_i=\mathcal D_i\varphi$, one has $\partial_i\varphi=\pi_i+i\lambda A_i\varphi$. The $H^s$ algebra estimate in [L8] makes $A_i\varphi\in L^\infty H^s$, and the same estimate in $C H^{s-1}$ gives continuity of the spatial derivatives. The Fourier norm identity $\|f\|_{H^{r+1}}\asymp\|f\|_{H^r}+\sum_i\|\partial_i f\|_{H^r}$ then gives $\varphi\in L^\infty H^{s+1}\cap C H^s$. The field-strength, potential, and $\pi$ regularities are the corresponding components of the reduced state. The embedding in [L8] supplies the classical derivatives needed by the equations at $s\ge5$. [given, L6, L8, step 2.1, step 4.1, algebra]

5.2 For general smooth $\Sigma$, regard $\Psi=(A,\operatorname{Re}\varphi,\operatorname{Im}\varphi)$ as the fixed covariant matter fields; $F=dA$, $\pi=\mathcal D\varphi$, $j$, and $T$ are the fixed equations and tensorial expressions of [F1]. On each relatively compact initial chart choose a flat comparison metric $\bar g=-(dx^0)^2+\delta_{ij}dx^i dx^j$, set $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\partial_0g_{00}=-2\tau$, and $\partial_0g_{0i}=h_{ij}h^{k\ell}\Gamma(h)^j{}_{k\ell}$. The Christoffel formula gives $H^0=\tfrac12\partial_0g_{00}+\tau=0$ and $H^i=-h^{ij}\partial_0g_{0j}+h^{k\ell}\Gamma(h)^i{}_{k\ell}=0$ initially. Set $q_{abi}=\bar\nabla_i g_{ab}$, $p_{ab}=\bar\nabla_0g_{ab}$, reconstruct $F$ from $(e,b)$, and use $\pi_i=\mathcal D_i\varphi_0$, $\pi_0=\pi_n$, and $A_0=0$. Thus the complete data and all initial auxiliary constraints are specified; $A(n)=0$ fixes the initial temporal gauge. The equations and stress are covariant under local diffeomorphisms because $d$, the metric connection, contractions, and the oriented volume form commute with pullback. Steps 1.3 and 4.1 give the exact smooth symmetric-hyperbolic reduction, propagation of every auxiliary constraint, recovery of the matter equations, and $\nabla^aT_{ab}=0$ before Einstein recovery. The initial constraints are precisely the normal projections in [L9]. These are the explicit reduction, initialization, conservation, and constraint hypotheses of [L10], so the local construction in that theorem gives a development near each initial point; the internal-gauge comparisons and collar patching are verified in the final comparison paragraphs below. [given, F1, L4, L5, L6, L7, L9, L10, step 1.2, step 1.3, step 4.1, A1]

6.1 (Fix both coordinate and internal gauges before comparison.) Given two smooth developments of the same complete data, use the wave-coordinate construction in [[thm-gr-local-geometric-uniqueness]] on each relatively compact initial ball: solve $\Box_gx^\mu=0$ with $x^0=0$, $x^i=y^i$, $n(x^0)=1$, and $n(x^i)=0$ on the initial surface. Its proof constructs these scalar waves by the same positive symmetric wave reduction and local solver used here, and their initial differential is invertible. The resulting charts are harmonic relative to the same flat comparison metric and have the identical initialized metric jet in step 5.2. A pulled-back potential need not satisfy $A'_0=0$. On each product collar set $\chi(s,x)=-\int_0^s A'_0(\sigma,x)\,d\sigma$ and transform $A'\mapsto A'+d\chi$, $\varphi'\mapsto e^{i\lambda\chi}\varphi'$. Then $A'_0+\partial_s\chi=0$; direct differentiation gives $D_{\!A'+d\chi}(e^{i\lambda\chi}\varphi')=e^{i\lambda\chi}D_{\!A'}\varphi'$, while $F$, current and stress are unchanged. Since $\chi|_\Sigma=0$, tangential initial $A$, $\varphi_0$ and the covariant normal derivative are unchanged. Only after this temporal-gauge restoration do both developments extract to the identical coefficient system of step 1.3 with identical complete initial values. [given, F1, L4, L5, L10, L11, step 1.1, step 1.2, step 1.3, step 5.2, algebra]

7.1 (Local and whole-surface comparison.) On a smaller compact cylinder the two smooth states lie in a common convex admissible neighborhood. Subtract their equations; the coefficient mean-value formula puts their difference $v$ in $A^\mu(u_1)\partial_\mu v+C v=0$, with bounded $C$. If $A^0\ge aI$ and $b\ge\sup_{|\xi|=1}\|\xi_iA^i\|$, choose a shrinking ball with speed $\sigma>b/a$. Symmetry and spatial integration by parts give $E'\le CE$ for $E=\int v^{\mathsf T}A^0v$, since the side-flux matrix $\sigma A^0+\nu_iA^i$ is nonnegative. The zero initial difference gives $v=0$ in both time directions by Gronwall. This is the local coupled energy comparison in [L10], now applied after the internal gauge has actually been fixed. Undoing the gauges gives a local metric isometry and the stated matter-gauge equivalence. Future data-fixing metric isometries have unique germs: their differentials fix tangents and future normals, hence they agree along the normal geodesics from the initial patch. The injective variable-width normal collars and germ-patching construction of [[thm-gr-local-geometric-uniqueness]] therefore yield one metric isometry near the entire initial surface; no uniform width is imposed. For the existence/gluing argument of [L10], choose the common normal product collar and put each local potential into its temporal gauge there, with unchanged initial $A_\Sigma$. On overlaps the local isometry comparisons just proved identify the metrics and $F$; two temporal-gauge potentials with the same initial spatial restriction and same $F$ agree, since their difference has zero time component, zero exterior derivative and zero initial pullback. On the common smooth normal-coordinate metric, their temporal-gauge scalar/potential blocks have the same coefficients and complete data, so the scalar-block version of the local energy comparison gives equality of the scalar representatives; no harmonic-coordinate equation for that common metric is needed for this matter-only comparison. Thus the local fields patch on the literal collar, as required for the smooth-development application in step 5.2. [given, F1, L4, L5, L6, L10, L11, L12, step 4.1, step 5.2, step 6.1, algebra]

8.1 (One global real gauge near the initial surface.) Pull the second development back by the metric isometry from step 7.1, and write $B=A_2-A_1$ on a common product collar. The local comparisons give $dB=F_2-F_1=0$, and the common initial data give $B|_{T\Sigma}=0$. Define the global smooth real function $\chi(s,x)=-\int_0^s B_0(\sigma,x)\,d\sigma$. Then $\partial_s(B_i+\partial_i\chi)=\partial_sB_i-\partial_iB_0=0$ and $B_i+\partial_i\chi=0$ initially; also $B_0+\partial_s\chi=0$. Hence $A_2+d\chi=A_1$ on the collar. The local scalar gauge comparisons have this same differential and zero initial value, so their functions agree with $\chi$ and $e^{i\lambda\chi}\varphi_2=\varphi_1$. This gives the asserted global-potential gauge equivalence, with $\chi|_\Sigma=0$, without requiring a nontrivial bundle construction or assuming that a closed one-form on the entire spacetime is exact. [given, F1, L10, step 6.1, step 7.1, algebra] ∎

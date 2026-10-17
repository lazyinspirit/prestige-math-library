---
id: lem-emg-charged-scalar-subsidiary-chain
kind: lemma
title: "Charged-scalar compatibility, Maxwell constraints and Einstein gauge propagation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
proof_strategy: direct
deps:
  - def-emg-trivial-potential-charged-scalar-system
  - lem-emg-temporal-scalar-positive-symmetric-reduction
  - lem-emg-charged-scalar-variation
  - lem-emg-maxwell-stress-divergence
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-coupled-reduced-einstein-evolution
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-gr-einstein-residual-and-subsidiary-identity
  - thm-gr-constraint-equations-in-normal-frame
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - thm-gronwall-integral-inequality
  - def-gr-harmonic-gauge-and-reduced-equations
  - lem-gr-periodic-sobolev-embedding
  - lem-gr-reduced-einstein-principal-part
dependency_roles:
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-emg-temporal-scalar-positive-symmetric-reduction: mathematical-premise
  lem-emg-charged-scalar-variation: mathematical-premise
  lem-emg-maxwell-stress-divergence: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
sources:
  references:
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete arXiv text"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Complete 97-page PDF; §2.4, PDF pp. 12–16, and §3.1, PDF pp. 21–31: harmonic reduction, evolution/constraint splitting, and symmetric-hyperbolic energy framework. The sourced scalar identities are checked conditionally against local items."
    - title: "Mathieu Colin and Tatsuya Watanabe, Cauchy problem for the nonlinear Klein–Gordon equation coupled with the Maxwell equation, Journal of Mathematical Analysis and Applications 443 (2016), full author-hosted PDF"
      url: "https://www.math.u-bordeaux.fr/~mcolin/cauchy_maxKG.pdf"
      locator: "Complete 23-page PDF; §2, PDF pp. 3–5: charged Klein–Gordon–Maxwell action, current and conservation conventions. Its flat Coulomb-gauge system is only a sign comparison."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, §4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Complete 290-page PDF; §4.5.3, PDF pp. 191–193 (printed pp. 184–186): scalar and Maxwell Hilbert stress conventions. The charged stress exchange is supplied conditionally by the local variation lemma."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ for the imported Sobolev and finite-domain integration results. Let $\Sigma=\{s=0\}$ be a spacelike slice in a smooth time-coordinate region $U\subset I\times\mathbb T^3_{2\pi}$, with future unit normal $n$ and induced metric $h$. Use the global-potential system of [[def-emg-trivial-potential-charged-scalar-system]] in temporal gauge $A_0=0$, including $\partial_sA_i=F_{0i}$ and the scalar first-order equations of [[lem-emg-temporal-scalar-positive-symmetric-reduction]]. Treat $\pi_a$ and $F_{ab}$ as independent evolution variables. Fix a smooth background metric $\bar g$ and define

$$H^a:=g^{bc}\bigl(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc}\bigr)$$

as in [[def-gr-harmonic-gauge-and-reduced-equations]]. Let $D$ be the Levi–Civita derivative of $h$, let $K(X,Y)=g(\nabla_Xn,Y)$, and put $\tau=\operatorname{tr}_hK$. Define the scalar and magnetic-potential residuals

$$C_i:=\pi_i-\partial_i\varphi+i\lambda A_i\varphi,\qquad B_{ij}:=F_{ij}-(\partial_iA_j-\partial_jA_i).$$

Assume the reduced scalar, sourced Maxwell, and harmonic-reduced Einstein evolution equations hold on $U$. Write $T=\partial_s$ for the coordinate-time vector; the Maxwell evolution components are equivalently $\iota_T(dF)=0$ and $\iota_T(d\star_gF-\mu_0\iota_j\mathrm{vol}_g)=0$. Assume initially

$$C_i=0,\qquad B_{ij}=0,\qquad D_i b^i=0,\qquad D_i e^i=\mu_0j^0,\qquad H|_\Sigma=0,$$

where in a positively oriented future orthonormal frame $F_{0i}=-e_i$, $F_{ij}=\epsilon_{ijk}b_k$, $\epsilon_{123}=1$, and $j^0=-n_aj^a$. Assume also the total-stress Einstein constraints

$$R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T(n,n),\qquad D^jK_{ji}-D_i\tau=\kappa T(n,e_i).$$

For the metric first-order state $p_{ab}=\bar\nabla_0g_{ab}$ and $q_{abi}=\bar\nabla_i g_{ab}$, require their initial values to equal the corresponding metric derivatives.

Then on a neighborhood of every initial point:

1. $C_i=0$ and $B_{ij}=0$ persist, so $\pi_i=D_i\varphi$ and $F=dA$.
2. The scalar equation gives $\nabla_a j^a=0$, and the sourced Maxwell evolution together with the two initial Gauss constraints gives $dF=0$ and $d\star_gF=\mu_0\iota_j\mathrm{vol}_g$.
3. Before Einstein-equation recovery, $\nabla^a(T^{\mathrm{EM}}_{ab}+T^\varphi_{ab})=0$.
4. The metric first-order derivative variables remain derivatives of the metric, and harmonic gauge propagates; hence the reduced Einstein equation is the full Einstein equation.

These statements hold for smooth solutions. They also hold at the classical regularity supplied at periodic Sobolev order $s\ge5$.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, the smooth fields, foliation, temporal gauge, reduced equations, and initial compatibility, Maxwell, harmonic, and total-stress Einstein constraints in the Statement.

[L1] [[def-emg-trivial-potential-charged-scalar-system]] fixes $F=dA$, $\pi=D\varphi$, the sourced Maxwell sign $\nabla_aF^{ab}=-\mu_0j^b$, and $T=T^{\mathrm{EM}}+T^\varphi$. This is the assigned draft definition; its current supplier proofs remain unresolved.

[L2] [[lem-emg-temporal-scalar-positive-symmetric-reduction]] states the temporal-gauge evolution $\partial_s\varphi=\pi_0$, $\partial_sA_i=F_{0i}$, and $\partial_s\pi_i-\partial_i\pi_0=-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi$. It is an assigned draft with proof acceptance unresolved.

[L3] [[lem-emg-charged-scalar-variation]] gives, for $E_\varphi:=D_a\pi^a-V'(|\varphi|^2)\varphi$, the identities $\nabla_aj^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi E_\varphi)$ and $\nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}(\overline{E_\varphi}\pi_b)+F_{ba}j^a$. Its current carrier is a draft with proof acceptance unresolved.

[L4] [[lem-emg-maxwell-stress-divergence]] states that smooth fields satisfying $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ obey $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. Its current carrier is a draft with proof acceptance unresolved.

[L5] [[lem-emg-fieldstrength-positive-symmetric-reduction]] gives the source-free six-component Maxwell principal block, its evolution/constraint split, and positive time matrix. That assigned item is draft with verification precheck pending; the current term $j$ is an algebraic lower-order source in this use.

[L6] [[lem-emg-coupled-reduced-einstein-evolution]] gives the harmonic metric wave block with algebraic stress coupling, while [[lem-gr-reduced-einstein-principal-part]] gives the first-order metric variables $p_{ab}=\bar\nabla_0g_{ab}$, $q_{abi}=\bar\nabla_i g_{ab}$, the equation $\bar\nabla_0g_{ab}=p_{ab}$, and the relation $\bar\nabla_0q_{abi}-\bar\nabla_ip_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}=[\bar\nabla_0,\bar\nabla_i]g_{ab}$. The assigned coupled item is draft with precheck pending; the imported principal-part item is published with precheck pending. Both interfaces are used conditionally.

[L7] [[lem-emg-lorentz-hodge-calculus]] gives $({\star_gF})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ and $d^2=0$.

[L8] [[thm-gr-density-divergence-and-finite-chain-flux]] gives $d(\iota_j\mathrm{vol}_g)=(\nabla_aj^a)\mathrm{vol}_g$ for smooth $j$; this supplier is published with a current precheck pass.

[L9] [[def-gr-harmonic-gauge-and-reduced-equations]] defines $H$ and the reduced Einstein equation. It is published with verification precheck pending and is used at its current statement only.

[L10] [[lem-gr-einstein-residual-and-subsidiary-identity]] states that the reduced Einstein residual is $\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$ and, when $\nabla^aT_{ab}=0$, $H$ solves $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$. Its published carrier has verification precheck pending.

[L11] [[thm-gr-constraint-equations-in-normal-frame]] gives $G(n,n)=\tfrac12(R(h)+\tau^2-|K|_h^2)$ and $G(n,Y)=(\operatorname{div}_hK)(Y)-D_Y\tau$ under the stated $K$ convention. Its published carrier has verification precheck pending.

[L12] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] supplies the local integration-by-parts identity on finite piecewise-$C^1$ domains, and [[thm-gronwall-integral-inequality]] supplies uniqueness from a zero initial energy and $E'(t)\le CE(t)$. The former is audited; the latter has precheck pass and audit evidence.

[L13] [[lem-gr-periodic-sobolev-embedding]] states $H^s(\mathbb T^3_{2\pi})\hookrightarrow C^m$ when $s-m>3/2$, so $s\ge5$ supplies the classical derivatives used here. Its published carrier has verification precheck pending.

[A1] The fields and background are smooth; $\lambda$ is real; the range of $|\varphi|^2$ lies in the open domain of $V$; every displayed Maxwell and Einstein equation is assumed only for the reduced evolution until its constraint and gauge recovery is proved.

[A2] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$; it is required by the cited Sobolev embedding and finite-domain divergence theorem.

## Proof

**Proof technique:** propagate the first-order compatibility residuals, then the sourced Maxwell residuals, cancel the scalar and electromagnetic stress exchange, and finally solve the Einstein gauge subsidiary with its constraint-determined Cauchy data.

1.1 Differentiate $C_i$ in $s$ and group the compatibility equation from [L2]: $\partial_sC_i=(\partial_s\pi_i-\partial_i\pi_0)+i\lambda(\partial_sA_i)\varphi+i\lambda A_i\partial_s\varphi=(-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi)+i\lambda F_{0i}\varphi+i\lambda A_i\pi_0=0$. Thus $C_i=0$ on the initial slice implies $C_i=0$ throughout the local time region, and the definition of $\pi_i$ in [L1] gives $\pi_i=D_i\varphi$. [given, L1, L2, A1, algebra]

1.2 Let $R_{abi}:=q_{abi}-\bar\nabla_i g_{ab}$. The first-order metric equations in [L6] include $\bar\nabla_0g_{ab}=p_{ab}$ and $\bar\nabla_0q_{abi}-\bar\nabla_i p_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=[\bar\nabla_0,\bar\nabla_i]g_{ab}$. Therefore $\bar\nabla_0R_{abi}=\bar\nabla_i p_{ab}+\mathcal C_{abi}-\bar\nabla_0\bar\nabla_i g_{ab}=\bar\nabla_i\bar\nabla_0g_{ab}+[\bar\nabla_0,\bar\nabla_i]g_{ab}-\bar\nabla_0\bar\nabla_i g_{ab}=0$. The initial metric jet gives $R_{abi}=0$, so the first-order spatial metric variables remain the actual derivatives of $g$. [given, L6, A1, algebra]

2.1 The $(0,i,j)$ evolution component of $dF=0$ is $\partial_sF_{ij}-\partial_iF_{0j}+\partial_jF_{0i}=0$. Since $\partial_sA_i=F_{0i}$, this gives $\partial_sB_{ij}=0$. Therefore $B_{ij}=0$ persists from its initial value. Together with the initial equality $F_{ij}=\partial_iA_j-\partial_jA_i$ and $F_{0i}=\partial_sA_i-\partial_iA_0=\partial_sA_i$, all components satisfy $F=dA$. [given, L1, L5, A1, step 1.1, algebra]

2.2 With $\pi=D\varphi$, the reduced divergence equation is the actual scalar equation $E_\varphi=0$. Substituting it into [L3] gives $\nabla_aj^a=0$ and $\nabla_a(T^\varphi)^a{}_b=F_{ba}j^a$. To fix the sourced form sign, put $v^b:=\nabla_aF^{ab}$. Since $\nabla$ preserves the metric and oriented volume, it preserves the Hodge star, and torsion-freeness lets $d\star_gF$ be the antisymmetrized covariant derivative of $\star_gF$. In a positively oriented orthonormal frame, expanding the Hodge components in [L7] gives $(d\star_gF)_{123}=-v^0$ and $(d\star_gF)_{0ij}=\epsilon_{ijk}v^k$; the corresponding components of $\iota_v\mathrm{vol}_g$ are $v^0$ and $-\epsilon_{ijk}v^k$. These are all four independent components of the three-forms, so $d\star_gF=-\iota_v\mathrm{vol}_g$. Since $v=-\mu_0j$ by [L1], this is exactly $d\star_gF=\mu_0\iota_j\mathrm{vol}_g$. [given, L1, L3, L7, step 1.1, algebra]

3.1 Put $U:=dF$ and $W:=d\star_gF-\mu_0\iota_j\mathrm{vol}_g$. On $\Sigma$, $F_\Sigma=\iota_b\mathrm{vol}_h$, so $d_\Sigma F_\Sigma=(D_i b^i)\mathrm{vol}_h$ because $D\mathrm{vol}_h=0$. The Hodge formula in [L7] gives $(\star_gF)_{ij}=\epsilon_{ijk}e_k$ in the stated normal frame, hence $d_\Sigma(\star_gF)=(D_i e^i)\mathrm{vol}_h$; also $(\iota_j\mathrm{vol}_g)|_\Sigma=j^0\mathrm{vol}_h$. Thus the two Gauss constraints are exactly $U|_\Sigma=W|_\Sigma=0$. The evolution equations in the Statement give $\iota_TU=\iota_TW=0$. Decompose any three-form $Q$ on the product region as $Q=ds\wedge q_2(s)+q_3(s)$ with spatial forms $q_2,q_3$; then $\iota_TQ=q_2$, so $Q=q_3$. Since $dQ=0$, its product-coordinate exterior derivative is $ds\wedge\partial_sq_3+d_\Sigma q_3=0$; the second term vanishes because it is a spatial four-form on the three-dimensional slice. Hence $\partial_sq_3=0$. Apply this first to $U$, for which $dU=d^2F=0$, and then to $W$, for which $dW=-\mu_0(\nabla_aj^a)\mathrm{vol}_g=0$ by [L8] and step 2.2. Their initial spatial forms are zero, so $U=W=0$ on the local product region. At the stated Sobolev regularity these exterior-form identities hold distributionally, and the $H^s$, $s\ge5$, solution has continuous spatial representatives and initial traces, so the same zero-initial-value argument applies. This proves the full sourced Maxwell equations. [given, L5, L7, L8, A1, A2, step 2.2, algebra]

4.1 Combining the on-shell scalar identity from step 2.2 with [L4] gives $\nabla_aT^{a}{}_b=F_{ba}j^a-F_{ba}j^a=0$, equivalently $\nabla^aT_{ab}=0$ because $T$ is symmetric. This conservation holds before the Einstein equation is recovered. [L1, L3, L4, step 2.2, step 3.1, algebra]

5.1 Let $E_{ab}:=G_{ab}+\Lambda g_{ab}-\kappa T_{ab}$. By [L9]–[L10], $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$. Since $H|_\Sigma=0$, its tangential covariant derivatives vanish there. In an orthonormal frame $(n,e_i)$, $\nabla_cH^c=-\nabla_nH_n$ on $\Sigma$, so $E(n,n)=\tfrac12\nabla_nH_n$ and $E(n,e_i)=\tfrac12\nabla_nH_i$. The normal Einstein projections in [L11] and the assumed initial constraints set both residual components to zero. Therefore $H$ and its normal derivative vanish on $\Sigma$. [given, L9, L10, L11, step 4.1, algebra]

6.1 The homogeneous wave equation in [L10] is a linear wave system with smooth lower-order curvature coefficients. In a smaller spacelike coordinate cylinder, write its principal part as $g^{00}\partial_s^2H_b+2g^{0i}\partial_s\partial_iH_b+g^{ij}\partial_i\partial_jH_b$ and introduce $v_b=\partial_sH_b$ and $w_{bi}=\partial_iH_b$. The compatibility equations are $\partial_sw_{bi}-\partial_iv_b=0$; substituting them into the wave equation gives the symmetric matrices of a scalar wave reduction, with time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$ repeated over $b$. Thus the first-order state $Y=(H,v,w)$ has a positive time matrix and symmetric spatial matrices, while connection and curvature terms are bounded zero-order coefficients on a compact cylinder. Choose a ball shrinking at speed $\sigma$ greater than $\sup_{|\xi|=1}\|\xi_iA^i\|/\lambda_{\min}(A^0)$. For $E(s)=\int_{B_{r-\sigma s}}Y^{\mathsf T}A^0Y\,dx$, multiplying the system by $2Y^{\mathsf T}$ and using symmetry gives a divergence identity whose interior terms are bounded by $C E(s)$; the side flux is nonnegative because $\sigma A^0+\nu_iA^i$ is positive definite. The finite-domain divergence theorem [L12] therefore gives $E'(s)\le C E(s)$. The initial data from step 5.1 give $Y=0$ and $E(0)=0$, so Gronwall [L12] yields $E(s)=0$; reverse time for $s<0$. Hence $H=0$ near every initial point, and the reduced equation has $E_{ab}=0$, which is the full Einstein equation. For the stated Sobolev regularity, [L13] supplies the classical derivatives in these identities. [given, L9, L10, L12, L13, A2, step 5.1, algebra] ∎

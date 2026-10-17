---
id: lem-emg-charged-scalar-subsidiary-chain
kind: lemma
title: "Charged-scalar compatibility, Maxwell constraints and Einstein gauge propagation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
proof_strategy: direct
deps:
  - lem-emg-classical-charged-scalar-compact-variation
  - def-emg-classical-charged-scalar-finite-regularity-system
  - def-emg-trivial-potential-charged-scalar-system
  - lem-emg-temporal-scalar-positive-symmetric-reduction
  - lem-emg-charged-scalar-variation
  - lem-emg-maxwell-stress-divergence
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-gr-einstein-residual-and-subsidiary-identity
  - thm-gr-constraint-equations-in-normal-frame
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - thm-gronwall-integral-inequality
  - def-gr-harmonic-gauge-and-reduced-equations
  - lem-gr-periodic-sobolev-embedding
  - lem-gr-reduced-einstein-principal-part
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-c1-dependence-of-solutions-on-initial-data
dependency_roles:
  lem-emg-classical-charged-scalar-compact-variation: mathematical-premise
  def-emg-classical-charged-scalar-finite-regularity-system: mathematical-premise
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-emg-temporal-scalar-positive-symmetric-reduction: mathematical-premise
  lem-emg-charged-scalar-variation: mathematical-premise
  lem-emg-maxwell-stress-divergence: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-c1-dependence-of-solutions-on-initial-data: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ for the imported Sobolev and finite-domain integration results. Let $\Sigma=\{s=0\}$ be a spacelike slice in a smooth time-coordinate region $U\subset I\times\mathbb T^3_{2\pi}$, with future unit normal $n$ and induced metric $h$. Use the global-potential system of [[def-emg-trivial-potential-charged-scalar-system]] in temporal gauge $A_0=0$, including $\partial_sA_i=F_{0i}$ and the scalar first-order equations of [[lem-emg-temporal-scalar-positive-symmetric-reduction]]. Treat $\pi_a$ and $F_{ab}$ as independent evolution variables. Write $\mathcal D_a\varphi:=\partial_a\varphi-i\lambda A_a\varphi$ and $\mathcal D_a\pi_b:=\nabla_a\pi_b-i\lambda A_a\pi_b$ for the charged derivatives of the model suppliers. In this item $D$ denotes only the spatial Levi-Civita derivative of $h$; thus $D_i\varphi=\partial_i\varphi$ on a scalar, while $\mathcal D_i\varphi=\partial_i\varphi-i\lambda A_i\varphi$.

Fix a smooth background metric $\bar g$ and define

$$H^a:=g^{bc}\bigl(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc}\bigr)$$

as in [[def-gr-harmonic-gauge-and-reduced-equations]]. Let $D$ be the Levi–Civita derivative of $h$, let $K(X,Y)=g(\nabla_Xn,Y)$, and put $\tau=\operatorname{tr}_hK$. Define the scalar and magnetic-potential residuals

$$C_i:=\pi_i-\partial_i\varphi+i\lambda A_i\varphi,\qquad B_{ij}:=F_{ij}-(\partial_iA_j-\partial_jA_i).$$

Assume the reduced scalar, sourced Maxwell, and harmonic-reduced Einstein evolution equations hold on $U$. The metric is in the admissible region of [[lem-emg-temporal-scalar-positive-symmetric-reduction]], with $g^{00}<0$ and positive definite $(g^{ij})$. The Maxwell field-strength evolution equations are the normal contractions $\iota_n(dF)=0$ and $\iota_n(d\star_gF-\mu_0\iota_j\mathrm{vol}_g)=0$, with the algebraic current source added to the Maxwell block. If $\partial_s=\alpha n+\beta^i\partial_i$, their coordinate-time contractions can contain shift multiples of the all-spatial residuals; no coordinate-time residual is set to zero before those spatial constraints are recovered. Assume initially

$$C_i=0,\qquad B_{ij}=0,\qquad D_i b^i=0,\qquad D_i e^i=\mu_0j^0,\qquad H|_\Sigma=0,$$

where in a positively oriented future orthonormal frame $F_{0i}=-e_i$, $F_{ij}=\epsilon_{ijk}b_k$, $\epsilon_{123}=1$, and $j^0=-n_aj^a$. Assume also the total-stress Einstein constraints

$$R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T(n,n),\qquad (\operatorname{div}_hK)(X)-D_X\tau=\kappa T(n,X)\quad(X\in T\Sigma),$$

where $(\operatorname{div}_hK)(X):=h^{ij}(D_{\partial_i}K)(\partial_j,X)$. The momentum constraint is an equality of covectors, independent of the choice of spatial coordinates or orthonormal frame.

For the metric first-order state $p_{ab}=\bar\nabla_0g_{ab}$ and $q_{abi}=\bar\nabla_i g_{ab}$, require their initial values to equal the corresponding metric derivatives.

Then on a neighborhood of every initial point:

1. $C_i=0$ and $B_{ij}=0$ persist, so $\pi_i=\mathcal D_i\varphi$ and $F=dA$.
2. The scalar equation gives $\nabla_a j^a=0$, and the sourced Maxwell evolution together with the two initial Gauss constraints gives $dF=0$ and $d\star_gF=\mu_0\iota_j\mathrm{vol}_g$.
3. Before Einstein-equation recovery, $\nabla^a(T^{\mathrm{EM}}_{ab}+T^\varphi_{ab})=0$.
4. The metric first-order derivative variables remain derivatives of the metric, and harmonic gauge propagates; hence the reduced Einstein equation is the full Einstein equation.

These statements hold for smooth solutions. They also hold for the classical finite-regularity system of [[def-emg-classical-charged-scalar-finite-regularity-system]], with $g\in C^3$, $A,\varphi\in C^2$ and the evolved $F,\pi\in C^2$ supplied at periodic Sobolev order $s\ge5$. Smooth underlying coordinates and background are retained; smoothness of the physical fields is not inferred.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, the smooth or stated classical fields, foliation, temporal gauge, reduced equations, and initial compatibility, Maxwell, harmonic, and total-stress Einstein constraints in the Statement.

[L1] [[def-emg-trivial-potential-charged-scalar-system]] fixes $F=dA$, $\pi=\mathcal D\varphi$, the sourced Maxwell sign $\nabla_aF^{ab}=-\mu_0j^b$, and $T=T^{\mathrm{EM}}+T^\varphi$. These formulas specify the smooth model; [[def-emg-classical-charged-scalar-finite-regularity-system]] defines the identical equations and tensors on the stated classical field class to be recovered from the reduced equations.

[L2] [[lem-emg-temporal-scalar-positive-symmetric-reduction]] states the temporal-gauge evolution $\partial_s\varphi=\pi_0$, $\partial_sA_i=F_{0i}$, and $\partial_s\pi_i-\partial_i\pi_0=-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi$. These are the actual first-order evolution equations.

[L3] [[lem-emg-charged-scalar-variation]] gives, for $E_\varphi:=\mathcal D_a\pi^a-V'(|\varphi|^2)\varphi$, the identities $\nabla_aj^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi E_\varphi)$ and $\nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}(\overline{E_\varphi}\pi_b)+F_{ba}j^a$. For the finite class, [[lem-emg-classical-charged-scalar-compact-variation]] proves the identical scalar identities directly for $g\in C^3$, $A,\varphi\in C^2$. Both interfaces are used only after $F=dA$ and $\pi=\mathcal D\varphi$ have been established.

[L4] [[lem-emg-maxwell-stress-divergence]] states that smooth fields satisfying $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ obey $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. For the finite class, [[lem-emg-classical-charged-scalar-compact-variation]] proves $\nabla_a(T^{\mathrm{EM}})^a{}_b=\mu_0^{-1}F_{ba}\nabla_cF^{ca}$ directly for $F=dA\in C^1$; the sourced equation then gives the same exchange sign. The appropriate identity is used only after those field-compatibility and Maxwell hypotheses have been established.

[L5] [[lem-emg-fieldstrength-positive-symmetric-reduction]] gives the source-free six-component Maxwell principal block, its evolution/constraint split, and positive time matrix. The current term $j$ is an algebraic lower-order source in this use.

[L6] [[lem-gr-reduced-einstein-principal-part]] gives the first-order metric variables $p_{ab}=\bar\nabla_0g_{ab}$, $q_{abi}=\bar\nabla_i g_{ab}$, the equation $\bar\nabla_0g_{ab}=p_{ab}$, and the relation $\bar\nabla_0q_{abi}-\bar\nabla_ip_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}=[\bar\nabla_0,\bar\nabla_i]g_{ab}$. It also gives the harmonic metric principal block; a smooth algebraic stress substitution leaves those principal matrices unchanged. The metric derivative relations and principal matrices are used at these exact interfaces.

[L7] [[lem-emg-lorentz-hodge-calculus]] gives $({\star_gF})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ and $d^2=0$.

[L8] [[thm-gr-density-divergence-and-finite-chain-flux]] gives $d(\iota_j\mathrm{vol}_g)=(\nabla_aj^a)\mathrm{vol}_g$ for smooth $j$; at the stated classical regularity the same formula follows directly from $\partial_a(\sqrt{|\det g|}\,j^a)$ and the product rule, since $j$ is $C^1$.

[L9] [[def-gr-harmonic-gauge-and-reduced-equations]] defines $H$ and the reduced Einstein equation. Its stated gauge and reduced-equation conventions are used.

[L10] [[lem-gr-einstein-residual-and-subsidiary-identity]] states that the reduced Einstein residual is $\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$ and, when $\nabla^aT_{ab}=0$, $H$ solves $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$. The displayed identity is used under its stated hypotheses.

[L11] [[thm-gr-constraint-equations-in-normal-frame]] gives $G(n,n)=\tfrac12(R(h)+\tau^2-|K|_h^2)$ and $G(n,Y)=(\operatorname{div}_hK)(Y)-D_Y\tau$ under the stated $K$ convention. The displayed identity is used under its stated hypotheses.

[L12] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] supplies the local integration-by-parts identity on finite piecewise-$C^1$ domains, and [[thm-gronwall-integral-inequality]] supplies uniqueness from a zero initial energy and $E'(t)\le CE(t)$. Only their integration and zero-energy conclusions are used.

[L13] [[lem-gr-periodic-sobolev-embedding]] states $H^s(\mathbb T^3_{2\pi})\hookrightarrow C^m$ when $s-m>3/2$, so $s\ge5$ supplies the classical derivatives used here. The displayed identity is used under its stated hypotheses.

[L14] [[thm-picard-lindelof-local-existence-and-uniqueness]] and [[thm-c1-dependence-of-solutions-on-initial-data]] give the unique local $C^1$ flow of the $C^1$ normal field; transversality to $\Sigma$ gives local flow coordinates.

[A1] The background is smooth; the fields are smooth or have the explicitly stated classical regularity; $\lambda$ is real; the range of $|\varphi|^2$ lies in the open domain of $V$; every displayed Maxwell and Einstein equation is assumed only for the reduced evolution until its constraint and gauge recovery is proved.

[A2] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$; it is required by the cited Sobolev embedding and finite-domain divergence theorem.

## Proof

**Proof technique:** propagate the first-order compatibility residuals, then the sourced Maxwell residuals, cancel the scalar and electromagnetic stress exchange, and finally solve the Einstein gauge subsidiary with its constraint-determined Cauchy data.

1.1 Differentiate $C_i$ in $s$ and group the compatibility equation from [L2]: $\partial_sC_i=(\partial_s\pi_i-\partial_i\pi_0)+i\lambda(\partial_sA_i)\varphi+i\lambda A_i\partial_s\varphi=(-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi)+i\lambda F_{0i}\varphi+i\lambda A_i\pi_0=0$. Thus $C_i=0$ on the initial slice implies $C_i=0$ throughout the local time region, and the definition of $\pi_i$ in [L1] gives $\pi_i=\mathcal D_i\varphi$. [given, L1, L2, A1, algebra]

1.2 Let $R_{abi}:=q_{abi}-\bar\nabla_i g_{ab}$. The first-order metric equations in [L6] include $\bar\nabla_0g_{ab}=p_{ab}$ and $\bar\nabla_0q_{abi}-\bar\nabla_i p_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=[\bar\nabla_0,\bar\nabla_i]g_{ab}$. Therefore $\bar\nabla_0R_{abi}=\bar\nabla_i p_{ab}+\mathcal C_{abi}-\bar\nabla_0\bar\nabla_i g_{ab}=\bar\nabla_i\bar\nabla_0g_{ab}+[\bar\nabla_0,\bar\nabla_i]g_{ab}-\bar\nabla_0\bar\nabla_i g_{ab}=0$. The initial metric jet gives $R_{abi}=0$, so the first-order spatial metric variables remain the actual derivatives of $g$. [given, L6, A1, algebra]

1.3 First propagate the magnetic residual $U:=dF$, independently of the scalar equation and current. The normal evolution gives $\iota_nU=0$, so a three-form decomposition in an adapted frame gives $U=q\,\iota_n\mathrm{vol}_g$. Its pullback to the initial slice is $(D_ib^i)\mathrm{vol}_h=0$, hence $q=0$ initially. Since $dU=d^2F=0$, the coordinate volume formula gives $\nabla_a(qn^a)=n(q)+q\nabla_an^a=0$. On each normal integral curve the integrating factor $\exp(\int\nabla_an^a)$ makes $q$ constant times its initial value, so $q=0$ near the initial slice. Thus $dF=0$ before any current-conservation or Einstein inference. The normal is transverse to the time levels and its local flow exists with unique curves; at the stated finite Sobolev regularity it is at least $C^1$. [given, L5, L7, L8, L13, L14, A1, A2, algebra]

2.1 The full closedness now proved gives $\partial_sF_{ij}-\partial_iF_{0j}+\partial_jF_{0i}=0$ in coordinates. Since $\partial_sA_i=F_{0i}$, differentiating $B_{ij}=F_{ij}-(\partial_iA_j-\partial_jA_i)$ gives $\partial_sB_{ij}=0$. Its initial value is zero, so $B_{ij}=0$; also $A_0=0$ gives $F_{0i}=\partial_sA_i-\partial_iA_0$. Consequently every component satisfies $F=dA$. Step 1.1 gives $\pi_i=\mathcal D_i\varphi$, and $\partial_s\varphi=\pi_0$ with $A_0=0$ gives $\pi_0=\mathcal D_0\varphi$, so $\pi=\mathcal D\varphi$ in all slots. The reduced scalar divergence equation is therefore the actual scalar equation $E_\varphi=0$ in [L3]. [given, L1, L2, L3, step 1.1, step 1.3, algebra]

3.1 With $F=dA$, $\pi=\mathcal D\varphi$, and $E_\varphi=0$, the current and scalar-stress identities in [L3] now give $\nabla_aj^a=0$ and $\nabla_a(T^\varphi)^a{}_b=F_{ba}j^a$. The form/source sign is fixed independently: put $v^b:=\nabla_aF^{ab}$. Metric compatibility preserves the oriented volume and Hodge star, while torsion-freeness identifies exterior differentiation with antisymmetrized covariant differentiation. In a positively oriented orthonormal frame, [L7] gives $(d\star_gF)_{123}=-v^0$ and $(d\star_gF)_{0ij}=\epsilon_{ijk}v^k$; the corresponding components of $\iota_v\mathrm{vol}_g$ are $v^0$ and $-\epsilon_{ijk}v^k$. Hence $d\star_gF=-\iota_v\mathrm{vol}_g$ for any such $F$. In particular, $d\star_gF=\mu_0\iota_j\mathrm{vol}_g$ is equivalent to $v=-\mu_0j$; neither equation is assumed before the residual proof in the next step. [given, L1, L3, L7, step 2.1, algebra]

4.1 Put $W:=d\star_gF-\mu_0\iota_j\mathrm{vol}_g$. Its normal contraction vanishes by the sourced evolution, so $W=r\,\iota_n\mathrm{vol}_g$. Initially, the Hodge formula in [L7] gives $(\star_gF)|_\Sigma=\iota_e\mathrm{vol}_h$, while $(\iota_j\mathrm{vol}_g)|_\Sigma=j^0\mathrm{vol}_h$. Thus $W|_\Sigma=(D_ie^i-\mu_0j^0)\mathrm{vol}_h=0$. By [L8] and step 3.1, $dW=-\mu_0(\nabla_aj^a)\mathrm{vol}_g=0$. The same normal-volume computation as step 1.3 gives $n(r)+r\nabla_an^a=0$ with zero initial value, and the integrating factor proves $r=0$. Thus the full sourced Maxwell equation holds, with the divergence sign established in step 3.1. For the classical finite-Sobolev solutions, these identities also hold distributionally; the continuous residuals and their initial traces give the same zero solution in the $C^1$ normal flow coordinates. [given, L5, L7, L8, L13, A1, A2, step 1.3, step 3.1, algebra]

5.1 Combining the on-shell scalar identity from step 3.1 with [L4] gives $\nabla_aT^{a}{}_b=F_{ba}j^a-F_{ba}j^a=0$, equivalently $\nabla^aT_{ab}=0$ because $T$ is symmetric. This conservation holds before the Einstein equation is recovered. [L1, L3, L4, step 3.1, step 4.1, algebra]

6.1 Let $E_{ab}:=G_{ab}+\Lambda g_{ab}-\kappa T_{ab}$. By [L9]–[L10], $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$. Since $H|_\Sigma=0$, its tangential covariant derivatives vanish there. In an orthonormal frame $(n,e_i)$, $\nabla_cH^c=-\nabla_nH_n$ on $\Sigma$, so $E(n,n)=\tfrac12\nabla_nH_n$ and $E(n,e_i)=\tfrac12\nabla_nH_i$. The normal Einstein projections in [L11] and the assumed initial constraints set both residual components to zero. Therefore $H$ and its normal derivative vanish on $\Sigma$. [given, L9, L10, L11, step 5.1, algebra]

7.1 The identities in [L9]–[L11] remain classical at the stated regularity: their coordinate expressions depend on at most the third jet of $g$, the second jet of $H$ and the first jet of $T$. At any fixed point these jets are realized exactly by their finite Taylor polynomials in a smooth chart; the polynomial metric stays Lorentzian near that point by nondegeneracy. The unrestricted coordinate Bianchi identity and the divergence identity for the trace-adjusted symmetric derivative of an arbitrary covector therefore transfer pointwise from smooth fields with the same jets. Substituting the reduced residual and $\nabla^aT_{ab}=0$ gives the same homogeneous subsidiary wave equation. This finite-jet argument transfers a local differential identity only; it neither replaces the solution by a smooth one nor asserts smooth persistence for nonsmooth data. Its curvature and lower-order coefficients are continuous and bounded on compact subcylinders. The inherited inequalities $g^{00}<0$ and $(g^{ij})>0$ hold in the reduced region. In a smaller spacelike coordinate cylinder, write its principal part as $g^{00}\partial_s^2H_b+2g^{0i}\partial_s\partial_iH_b+g^{ij}\partial_i\partial_jH_b$ and introduce $v_b=\partial_sH_b$ and $w_{bi}=\partial_iH_b$. The compatibility equations are $\partial_sw_{bi}-\partial_iv_b=0$; substituting them into the wave equation gives the symmetric matrices of a scalar wave reduction, with time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$ repeated over $b$. Thus the first-order state $Y=(H,v,w)$ has a positive time matrix and symmetric spatial matrices, while connection and curvature terms are bounded zero-order coefficients on a compact cylinder. Choose a ball shrinking at speed $\sigma$ greater than $\sup_{|\xi|=1}\|\xi_iA^i\|/\lambda_{\min}(A^0)$. For $E(s)=\int_{B_{r-\sigma s}}Y^{\mathsf T}A^0Y\,dx$, multiplying the system by $2Y^{\mathsf T}$ and using symmetry gives a divergence identity whose interior terms are bounded by $C E(s)$; the side flux is nonnegative because $\sigma A^0+\nu_iA^i$ is positive definite. The finite-domain divergence theorem [L12] therefore gives $E'(s)\le C E(s)$. The initial data from step 6.1 give $Y=0$ and $E(0)=0$, so Gronwall [L12] yields $E(s)=0$; reverse time for $s<0$. Hence $H=0$ near every initial point, and the reduced equation has $E_{ab}=0$, which is the full Einstein equation. For the stated Sobolev regularity, [L13] supplies the classical derivatives in these identities. [given, L9, L10, L11, L12, L13, A2, step 6.1, algebra] ∎

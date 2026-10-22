---
id: lem-emg-fx-local-linear-wave-control
kind: lemma
title: Finite-slab energy control and subsidiary propagation for the linearized electrovacuum system
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-linearized-electrovac
  - def-gr-harmonic-gauge-and-reduced-equations
  - def-gr-periodic-torus-and-sobolev-spaces
  - lem-emg-fx-linearized-hodge
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-lorentz-hodge-calculus
  - lem-gr-contracted-commutator-identity
  - lem-gr-reduced-einstein-principal-part
  - thm-gr-second-bianchi-and-divergence-free-einstein
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-linearized-electrovac: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-emg-fx-linearized-hodge: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-gr-contracted-commutator-identity: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1, arXiv:gr-qc/0002074, Section 3.1"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "PDF pp. 22–31: symmetric first-order systems, the energy identity, higher-order commutator estimates, and the distinction between local energy control and existence/continuation conclusions. The inhomogeneous Duhamel estimate and the exact linearized constraints are proved locally here."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), Sections 1 and 6"
      url: "https://arxiv.org/pdf/1904.04926"
      locator: "PDF pp. 1–4 and 43–55: the coupled metric/electromagnetic perturbation system, pure-gauge and parameter modes, and the substantially stronger asymptotically flat decay theorem. Only the local perturbation conventions and its explicit limitations inform this finite-slab result."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $T>0$ and let $(g,\mathcal F)$ be a smooth exact geometric electrovacuum background on the product collar $[-T,T]\times\mathbb T^3_{2\pi}$, where $\mathbb T^3_{2\pi}:=(\mathbb R/2\pi\mathbb Z)^3$; exactness means $\operatorname{Ric}_{ab}[g]-\Lambda g_{ab}=2Q_{ab}(g,\mathcal F)$ and $d\mathcal F=d(\star_g\mathcal F)=0$, with $Q_{ab}(g,\mathcal F):=\mathcal F_{ac}\mathcal F_b{}^c-\tfrac14g_{ab}\mathcal F_{cd}\mathcal F^{cd}$. Here $x^0=t$ is a length coordinate, $n=\partial_t$ is the future unit normal, and
$$g=-dt^2+\gamma_{ij}(t,\theta)d\theta^i d\theta^j$$
with $\gamma$ a smooth positive spatial metric. The fixed cosmological parameter $\Lambda$ has units $\mathrm{m}^{-2}$. Fix the harmonic reference metric $\bar g$ to equal the background and define $H^a[g_\epsilon]:=g_\epsilon^{bc}(\Gamma^a{}_{bc}[g_\epsilon]-\bar\Gamma^a{}_{bc})$, with $H_b[g_\epsilon]:=g_{\epsilon bc}H^c[g_\epsilon]$. Thus the background gauge vector vanishes and the linearized reduced metric equation is the derivative of $\operatorname{Ric}[g_\epsilon]-\nabla^{g_\epsilon}_{(a}H_{b)}[g_\epsilon]-\Lambda g_{\epsilon ab}-2Q_{ab}(g_\epsilon,\mathcal F_\epsilon)=0$. Let $L_0>0$ be the fixed spatial length scale and, on the covering space $\mathbb R^3$, write $X^i=L_0\theta^i$. Use the global frame descended from the standard frame of $\mathbb R^3$ on $\mathbb T^3_{2\pi}$, denoted $\partial_{\theta^i}$, and let $(\mathsf e_1,\mathsf e_2,\mathsf e_3)$ be its Gram–Schmidt orthonormalization for $\gamma$, oriented so that $(n,\mathsf e_1,\mathsf e_2,\mathsf e_3)$ is positive for the spacetime orientation; write $\varepsilon_{123}=1$. For the geometric-normalized two-form perturbation $f=\dot{\mathcal F}_0$ from [[def-emg-fx-linearized-electrovac]], define
$$e_i:=f(\mathsf e_i,n),\qquad b_i:=\frac12\varepsilon_i{}^{jk}f(\mathsf e_j,\mathsf e_k),$$
where indices on $\varepsilon_{ijk}$ are raised with $\delta_{ij}$. The variation parameter is dimensionless, so these components have the geometric field-strength units of $\mathcal F$ (length-coordinate components have unit $\mathrm{m}^{-1}$). The first-order state is the $56$-component periodic array $u=(h_{ab},p_{ab},q_{abi},e_i,b_i)$, where $h$ is the metric perturbation, $p_{ab}=\bar\nabla_0h_{ab}$, and $q_{abi}=\bar\nabla_i h_{ab}$. For a periodic $56$-component array, define
$$\widehat u(\ell):=(2\pi)^{-3}\int_{[0,2\pi)^3}u(\theta)e^{-i\ell\cdot\theta}\,d\theta,\qquad \|u\|_{H^k}^2:=\sum_{\ell\in\mathbb Z^3}(1+|\ell|^2)^k|\widehat u(\ell)|^2.$$
Write $x=\theta$ in the system below and absorb the fixed factor $L_0^{-1}$ from $\partial_{X^i}=L_0^{-1}\partial_{\theta^i}$ into its spatial matrices. For a smooth linearized perturbation state $u:[-T,T]\times\mathbb T^3_{2\pi}\to\mathbb R^{56}$ and smooth source $s:[-T,T]\times\mathbb T^3_{2\pi}\to\mathbb R^{56}$, write the inhomogeneous first-order system in the chosen trivialization as
$$A^0(t,x)\partial_tu+\sum_{i=1}^3 A^i(t,x)\partial_i u+C(t,x)u=s(t,x),$$
where $A^0,A^1,A^2,A^3,C:[-T,T]\times\mathbb T^3_{2\pi}\to\mathbb R^{56\times56}$ are smooth periodic matrix fields, each $A^i$ and $A^0$ is symmetric, and constants $0<a\le b<\infty$ satisfy $aI\le A^0(t,x)\le bI$ throughout the slab. In the normal-flow chart, the harmonic metric reduction has time matrix $\operatorname{diag}(I,I,\gamma^{ij}I)$ and symmetric spatial matrices by [F1], while the six Maxwell field-strength variables have time matrix $I_6$ and symmetric spatial matrices by [F2]. When the Maxwell equations are linearized, derivatives of the perturbed lapse, frame and spatial metric occur through $p_{ab}$ and $q_{abi}$, which are components of the state and hence contribute to $C u$, not to spatial derivatives of the state. The variation of the Maxwell stress in the metric equation is algebraic in $(h,f)$ by [F3]. Thus the full principal matrices are the direct sums of the metric and Maxwell principal matrices, and the remaining couplings are smooth zeroth-order terms. Compactness of the slab then supplies uniform positive bounds for $A^0$.

For every integer $k\ge0$, define
$$\mathcal E_k(t):=\sum_{|\alpha|\le k}\int_{\mathbb T^3_{2\pi}}(\partial^\alpha u)^T A^0(t,x)\partial^\alpha u\,dx.$$
There is a constant $C_k$, depending only on $a,b,T$ and the coefficient derivatives through order $k+1$, such that
$$\|u(t)\|_{H^k}\le C_k e^{C_k|t|}\left(\|u(0)\|_{H^k}+\int_{\min(0,t)}^{\max(0,t)}\|s(\tau)\|_{H^k}\,d\tau\right),\qquad |t|\le T.$$
This is a finite-time conditional estimate, not an existence theorem or a global decay statement.

For the unforced linearized system, the Maxwell subsidiary constraints are the spatial restrictions of $df$ and $d\,\delta(\star\mathcal F)$ to a slice. If the normal-slot linearized Maxwell evolution equations hold and both initial restrictions vanish, they remain zero on the slab. Define $\dot H^a:=\left.\frac{d}{d\epsilon}\right|_0H^a[g_\epsilon]$ and $\dot H_b:=g_{bc}\dot H^c$ at the background; since $H^a[g]=0$, $\dot H_b$ is also the variation of $H_b[g_\epsilon]$. If the linearized reduced Einstein and Maxwell equations hold and $\dot H_b=\partial_t\dot H_b=0$ initially, then $\dot H^a=0$ throughout the slab. These are the Maxwell Gauss and harmonic-gauge subsidiary identities; no decay of the physical perturbation is asserted.

## Statement references

[[def-emg-fx-linearized-electrovac]]

[[def-gr-harmonic-gauge-and-reduced-equations]]

[[lem-emg-fieldstrength-positive-symmetric-reduction]]

[[lem-gr-contracted-commutator-identity]]

[[lem-gr-reduced-einstein-principal-part]]

[[thm-gr-second-bianchi-and-divergence-free-einstein]]

## Facts & Assumptions

**Given:** The smooth exact background, fixed spacelike torus foliation, harmonic and field-strength first-order reduction, symmetric matrices and uniform time-matrix bounds in the Statement, and smooth source $s$.

[F1] [[lem-gr-reduced-einstein-principal-part]]: the harmonic metric wave block has a symmetric first-order reduction with time matrix $\operatorname{diag}(I,-g^{00}I,(g^{ij})I)$ when $g^{00}<0$ and $(g^{ij})$ is positive definite; an algebraic stress map adds no metric principal-derivative block.

[F2] [[lem-emg-fieldstrength-positive-symmetric-reduction]]: the six field-strength Maxwell equations have symmetric spatial matrices and positive time matrix $\alpha^{-1}I_6$; the two remaining Maxwell equations are the electric and magnetic divergence constraints. A constant geometric field normalization leaves this principal block unchanged.

[F3] [[def-emg-fx-linearized-electrovac]] and [[lem-emg-fx-linearized-hodge]]: the linearized Maxwell two-form residuals are $df$ and $d\,\delta(\star\mathcal F)$ with $\delta(\star\mathcal F)=\star_g(f+\tfrac12(\operatorname{tr}_g h)\mathcal F-h^\sharp\!\cdot\mathcal F)$.

[F4] [[def-gr-harmonic-gauge-and-reduced-equations]] defines the harmonic vector and trace-adjusted reduced metric equation, and [[thm-gr-second-bianchi-and-divergence-free-einstein]] gives $\nabla^aG_{ab}=0$. [[lem-gr-contracted-commutator-identity]] states for a smooth vector field $Y^a$ that $\nabla_a\nabla_bY^a-\nabla_b\nabla_aY^a=\operatorname{Ric}_{ba}Y^a$ (its clause (b), written without the auxiliary $B$ notation). For a smooth covector $Z_a$, set $Y^a:=g^{ac}Z_c$. Metric compatibility gives $\nabla^a\nabla_bZ_a=\nabla_a\nabla_bY^a$ and $\nabla_b\nabla^aZ_a=\nabla_b\nabla_aY^a$, so the covector identity used below is $\nabla^a\nabla_bZ_a-\nabla_b\nabla^aZ_a=\operatorname{Ric}_{ba}Z^a$.

[F5] [[lem-emg-lorentz-hodge-calculus]]: in a positively oriented chart, $({\star_g\mathcal F})_{cd}=\tfrac12\varepsilon_{cdef}\mathcal F^{ef}$, where $\varepsilon$ is the oriented metric volume tensor. Proof 2.1 derives the divergence identity needed below from this formula and the metric-selected connection properties.

[F6] [[def-gr-periodic-torus-and-sobolev-spaces]] fixes the spatial domain $\mathbb T^3_{2\pi}$ and defines $H^k$ by the componentwise weak-derivative norm, with Fourier coefficients taken against normalized Haar measure and characters forming an orthonormal basis. The Fourier norm displayed in this item's Statement is its chosen convention; componentwise Parseval and step 3.1 prove its equivalence to that weak-derivative norm for smooth periodic arrays.

[A1] The oriented Lorentzian geometric suppliers carry $\mathrm{AC}_\omega$ as background. The finite integration-by-parts and energy argument below uses no choice beyond that recorded context. ([[def-countable-choice]])

## Proof


1.1 The metric principal block in [F1] is symmetric with positive time matrix on each spacelike slice. The Maxwell block in [F2] is symmetric with positive time matrix; conversion from the geometric field to the state variables is multiplication by a fixed nonzero scalar and leaves those matrices unchanged. The Maxwell stress is algebraic in $g^{-1}$ and $\mathcal F$, so its variation contributes only a zeroth-order term. The field-strength reduction [F2] puts derivatives of the metric and frame into lower-order terms; after linearization, derivatives of $h$ are represented by the state components $p,q$. Thus the full principal matrices are direct sums, the time matrix is positive, and the spatial matrices are symmetric. Smoothness on the compact slab gives uniform $a,b$ bounds and bounded coefficient derivatives. [given, F1, F2, F3, algebra]

1.2 Put $U:=df$ and $V:=d\,\delta(\star\mathcal F)$. Since the background Maxwell residuals vanish, variation of the normal-slot equations gives $\iota_nU=\iota_nV=0$; in the chosen chart $n=\partial_t$. Also $dU=d^2f=0$ and $dV=d^2\delta(\star\mathcal F)=0$. Hence each is spatial and has the form $U=\rho_U(t,\theta)\,d\theta^1\wedge d\theta^2\wedge d\theta^3,\qquad V=\rho_V(t,\theta)\,d\theta^1\wedge d\theta^2\wedge d\theta^3.$ Their exterior derivatives are $\partial_t\rho_U\,dt\wedge d\theta^1\wedge d\theta^2\wedge d\theta^3$ and $\partial_t\rho_V\,dt\wedge d\theta^1\wedge d\theta^2\wedge d\theta^3$. Closedness makes both coefficients constant in $t$; zero initial restrictions therefore give $U=V=0$ throughout, which propagates both linearized Gauss constraints. [F3, F6, given, algebra]

1.3 Put $\mathcal R_{ab}:=\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}-\Lambda g_{ab}-2Q_{ab}$ and $\mathscr E_{ab}:=G_{ab}+\Lambda g_{ab}-2Q_{ab}$. Direct contraction of $Q_{ab}$ gives $g^{ab}Q_{ab}=0$, so $g^{ab}\mathcal R_{ab}=S-\nabla_cH^c-4\Lambda$. Substituting $\operatorname{Ric}=\mathcal R+\nabla_{(a}H_{b)}+\Lambda g+2Q$ into $\mathscr E$ yields $\mathscr E_{ab}=\mathcal R_{ab}-\frac12g_{ab}g^{cd}\mathcal R_{cd} +\frac12\bigl(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c\bigr).$ At the background $\mathcal R=0$ and $H=0$, so the traced identity gives $S=4\Lambda$ and hence $\mathscr E=0$. The linearized reduced Einstein equation gives $\delta\mathcal R=0$. Differentiating this identity then gives $\delta\mathscr E_{ab}=\frac12\bigl(\nabla_a\dot H_b+\nabla_b\dot H_a-g_{ab}\nabla_c\dot H^c\bigr),$ since every variation multiplying a zero background residual vanishes. [F3, F4, algebra]

2.1 To derive the divergence identity, in a positively oriented chart put $\varepsilon_{abcd}:=(\mathrm{vol}_g)_{abcd}$. The Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ gives $\Gamma^a{}_{ae}=\tfrac12g^{ad}\partial_eg_{ad}$ after the first and third terms cancel; determinant differentiation gives $\Gamma^a{}_{ae}=\partial_e\log\sqrt{|\det g|}$. Torsion-freeness gives $\Gamma^p{}_{ep}=\Gamma^p{}_{pe}$, so writing $\varepsilon_{abcd}=\sqrt{|\det g|}\,\widetilde\varepsilon_{abcd}$ with constant alternating symbol $\widetilde\varepsilon_{0123}=1$ gives $\nabla_e\varepsilon_{abcd}=(\partial_e\log\sqrt{|\det g|}-\Gamma^p{}_{ep})\varepsilon_{abcd}=0$. Torsion-freeness also gives $(d\star_g\mathcal F)_{acd}=3\nabla_{[a}(\star_g\mathcal F)_{cd]}$. Using [F5] and $\varepsilon^{bacd}\varepsilon_{cdef}=-2(\delta^b_e\delta^a_f-\delta^b_f\delta^a_e)$ yields $\frac1{3!}\varepsilon^{bacd}(d\star_g\mathcal F)_{acd}=\frac14\varepsilon^{bacd}\varepsilon_{cdef}\nabla_a\mathcal F^{ef}=\nabla_a\mathcal F^{ab}$. The background equation $d\star_g\mathcal F=0$ thus gives $\nabla_a\mathcal F^{ab}=0$. Differentiating this identity at the background, the variation of $\varepsilon$ multiplies the zero background $d\star_g\mathcal F$, so $d\,\delta(\star\mathcal F)=0$ gives $\delta(\nabla_a\mathcal F^{ab})=0$. Metric compatibility and the product rule give $\nabla_aQ^{ab}=(\nabla_a\mathcal F^{ac})\mathcal F^b{}_c +\mathcal F^{ac}\nabla_a\mathcal F^b{}_c-\frac14\nabla^b(\mathcal F_{cd}\mathcal F^{cd}).$ Contracting $d\mathcal F_{adc}=\nabla_a\mathcal F_{dc}+\nabla_d\mathcal F_{ca}+\nabla_c\mathcal F_{ad}$ with $\mathcal F^{ac}$ gives $2\mathcal F^{ac}\nabla_a\mathcal F_{dc} -\frac12\nabla_d(\mathcal F_{ac}\mathcal F^{ac}) =\mathcal F^{ac}(d\mathcal F)_{adc}.$ Thus $\mathcal F^{ac}\nabla_a\mathcal F_{dc}=\frac12\mathcal F^{ac}(d\mathcal F)_{adc}+\frac14\nabla_d(\mathcal F_{ac}\mathcal F^{ac})$; raising $d$ cancels the final scalar-gradient term in the first display, leaving $\nabla_aQ^{ab}=(\nabla_a\mathcal F^{ac})\mathcal F^b{}_c +\frac12g^{bd}\mathcal F^{ac}(d\mathcal F)_{adc}.$ Since the background also has $d\mathcal F=0$, variation of this last display gives $\delta(\nabla_aQ^{ab})=0$. The background $\mathscr E$ vanishes by step 1.3, so [F4] and $\nabla^a\mathscr E_{ab}=-2\nabla^aQ_{ab}$ imply $\nabla^a\delta\mathscr E_{ab}=0$. [F3, F4, F5, algebra]

2.2 Fix a spatial multi-index $\alpha$ with $|\alpha|\le k$ and put $w_\alpha=\partial^\alpha u$. Differentiating the system gives $A^0\partial_tw_\alpha+\sum_iA^i\partial_iw_\alpha+Cw_\alpha=\partial^\alpha s-R_\alpha,$ where $R_\alpha=[\partial^\alpha,A^0]\partial_tu+\sum_i[\partial^\alpha,A^i]\partial_i u+[\partial^\alpha,C]u$ and $[P,A]v:=P(Av)-A(Pv)$. The equation and $\|(A^0)^{-1}\|\le a^{-1}$ give $\|\partial_tu\|_{H^{k-1}}\le C(\|u\|_{H^k}+\|s\|_{H^{k-1}})$ for $k\ge1$. Expanding the commutators by the finite product rule and using bounded coefficient derivatives yields $\sum_{|\alpha|\le k}\|R_\alpha\|_{L^2}\le C(\|u\|_{H^k}+\|s\|_{H^k})$; when $k=0$, every commutator is zero. [given, step 1.1, algebra]

3.1 Differentiate $\mathcal E_k$ and substitute the differentiated system from step 2.2. Symmetry and periodic integration by parts give $-2\int_{\mathbb T^3}w_\alpha^TA^i\partial_iw_\alpha\,dx =\int_{\mathbb T^3}w_\alpha^T(\partial_iA^i)w_\alpha\,dx,$ with no boundary term. All coefficient, lower-order, commutator and source terms are bounded by step 2.2 and Cauchy–Schwarz. For smooth $u$, classical derivatives are its weak derivatives in [F6]. Parseval with the normalized measure $d\mu=(2\pi)^{-3}dx$ gives $\sum_{|\alpha|\le k}\|\partial^\alpha u\|_{L^2(dx)}^2\asymp_k\|u\|_{H^k}^2$: at frequency $\ell$, the polynomial $\sum_{|\alpha|\le k}|\ell^\alpha|^2$ is bounded above by a constant times $(1+|\ell|^2)^k$; for $|\ell|\le1$ its $\alpha=0$ term gives a lower bound, and for $|\ell|>1$ choose $j$ with $|\ell_j|\ge|\ell|/\sqrt3$ and use the $\alpha_j=k$ term. Thus this proof establishes equivalence of the item's Fourier norm and the supplier's weak-derivative norm; the bounds $aI\le A^0\le bI$ therefore make $\mathcal E_k$ equivalent to the Fourier norm used in the Statement. The differentiated system now gives $\frac{d}{dt}\mathcal E_k(t)\le C\mathcal E_k(t) +C\mathcal E_k(t)^{1/2}\|s(t)\|_{H^k}.$ Here $C$ depends on $k$ and the stated coefficient bounds. [A1, given, F6, step 2.2, algebra]

4.1 Apply step 3.1 to $Y_\varepsilon(t)=(\mathcal E_k(t)+\varepsilon)^{1/2}$. Division by $2Y_\varepsilon$ gives $Y_\varepsilon'\le CY_\varepsilon+C\|s(t)\|_{H^k}$. Integrating between $0$ and $t$ and letting $\varepsilon\downarrow0$ yields $\mathcal E_k(t)^{1/2}\le e^{C|t|}\bigl(\mathcal E_k(0)^{1/2}+C\int_{\min(0,t)}^{\max(0,t)}\|s(\tau)\|_{H^k}\,d\tau\bigr)$. For $t<0$, reverse time and multiply the system by $-1$; symmetry and positivity of the time matrix are preserved. Norm equivalence proves the stated estimate after increasing $C_k$. [step 3.1, algebra]

5.1 Taking the divergence of step 1.3, using step 2.1 and the covector commutator identity derived in [F4], gives $\Box_g\dot H_b+\operatorname{Ric}_{ba}\dot H^a=0$, where $\Box_g Z_b:=g^{cd}\nabla_c\nabla_dZ_b$ is the rough wave operator on covector fields. Each of the four coordinate components has principal part $g^{cd}\partial_c\partial_d\dot H_b$; connection and curvature terms have at most first order and smooth coefficients. Introduce $v_b=\partial_t\dot H_b$ and $w_{bi}=\partial_i\dot H_b$, giving a 20-component first-order state. The wave reduction of [F1], repeated for these four scalar principal wave equations, has time matrix $\operatorname{diag}(I,I,\gamma^{ij}I)$ and symmetric spatial matrices; its curvature term is lower order. The source is zero. Initially $\dot H_b=0$, $v_b=0$, and $w_{bi}=0$ because $\dot H$ vanishes as a spatial function on the initial slice. The integration-by-parts estimate from steps 2.2–4.1 applies to this 20-component system by the same calculation, which uses only matrix symmetry and the positive time-matrix bounds; it forces this state to stay zero, so $\dot H=0$ throughout the slab. [F1, F4, given, step 1.3, step 2.1, step 2.2, step 4.1, algebra] ∎
## Remarks

The estimate is local in time and remains conditional on the smooth coefficient and positive-time-matrix hypotheses. It does not imply asymptotic decay on a black-hole exterior, uniform bounds as $T\to\infty$, nonlinear stability, or integrability of every linearized solution. Giorgi's cited theorem has distinct small-charge, asymptotically flat and gauge-normalization assumptions and is not used as a supplier for any of those claims.


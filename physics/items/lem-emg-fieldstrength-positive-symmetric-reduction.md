---
id: lem-emg-fieldstrength-positive-symmetric-reduction
kind: lemma
title: "Positive symmetric Maxwell field-strength reduction"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-emg-electrovacuum-cauchy-system
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-observer-field-decomposition
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II and §II.A, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $U\subseteq\mathbb R\times\Sigma$ be a coordinate neighborhood in an oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, foliated by spacelike $s$-levels. Write
$$g=-\alpha^2ds^2+h_{ij}(dx^i+\beta^i ds)(dx^j+\beta^j ds),\qquad \alpha>0,\qquad h=(h_{ij})>0,$$
and let $n=\alpha^{-1}(\partial_s-\beta^i\partial_i)$ be the future unit normal. On a smaller neighborhood choose a positively oriented orthonormal spatial frame $(\mathsf e_1,\mathsf e_2,\mathsf e_3)$ by Gram–Schmidt. Let $D$ be the Levi-Civita derivative of $h$, define $\operatorname{div}_h v:=D_iv^i$ and $(\operatorname{curl}_h v)_i:=\epsilon_i{}^{jk}D_jv_k$, and define the spatial cross product by $(u\times v)_i=\epsilon_{ijk}u_jv_k$ in this frame. For a smooth real two-form $F$, define the real spatial components $e_i:=F(\mathsf e_i,n)$ and $b_i:=\tfrac12\epsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k)$, with $\epsilon_{123}=1$; thus $F_{0i}=-e_i$ and $F_{ij}=\epsilon_{ijk}b_k$ in the adapted tetrad. Assume the source-free model of draft definition [[def-emg-electrovacuum-cauchy-system]], whose actual equations are $dF=0$ and $d\star_gF=0$; its draft status and manifest omission are recorded in [L1].

The six evolution equations for $(e,b)$ have principal part
$$n(e)-\operatorname{curl}_h b=\text{terms with no derivatives of }(e,b),\qquad n(b)+\operatorname{curl}_h e=\text{terms with no derivatives of }(e,b).$$
For a spatial covector $\xi$, let $C(\xi)v:=\xi^\sharp\times v$ in the oriented orthonormal frame. Set $\theta^0:=\alpha ds=-g(n,\cdot)$ and decompose any spacetime covector as $\zeta=\zeta(n)\theta^0+\zeta_\perp$, where $\zeta_\perp(n)=0$ and $|\zeta_\perp|_h$ is its spatial norm. The spatial principal block is the linear map on $\mathbb R^3\oplus\mathbb R^3$ defined by $S(\xi)(u,v)=(-C(\xi)v,C(\xi)u)$. It is real symmetric, has eigenvalues $0,0,|\xi|,|\xi|,-|\xi|,-|\xi|$, and satisfies $\|S(\xi)\|=|\xi|$. Therefore the principal symbol $P(\zeta)=\zeta(n)I_6+S(\zeta_\perp)$ is positive definite for every covector with $\zeta(n)>|\zeta_\perp|_h$. In the adapted coordinates its time matrix is $\alpha^{-1}I_6$, and every coordinate spatial matrix is symmetric. Derivatives of the frame and metric enter only as smooth lower-order coefficients depending on $(g,g^{-1},\partial g,e,b)$; in a first-order metric state they are zero-order terms. The remaining two Maxwell equations are the constraints $\operatorname{div}_h e=0$ and $\operatorname{div}_h b=0$.

## Facts & Assumptions

**Given:** The oriented, time-oriented Lorentzian structure, a smooth spacelike foliation, a positive lapse and spatial metric, and a smooth two-form $F$.

[F1] [[def-emg-lorentzian-forms]] distinguishes the observer, adapted chart, and tetrad. In a positively oriented future tetrad with $E_0=n$, its field convention is $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$; here $e_i=E_i/c$ and $b_i=B_i$ are the mathematical components.

[F2] [[lem-emg-observer-field-decomposition]] gives the pointwise reconstruction of the two-form from these six spatial components; [[lem-emg-lorentz-hodge-calculus]] defines $\star_g$ by the oriented Lorentzian volume form and gives $({\star_gF})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$.

[L1] Draft supplier [[def-emg-electrovacuum-cauchy-system]]: its actual Definition fixes a smooth oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, the source-free equations $dF=d\star_gF=0$, the SI constants, and the algebraic stress tensor. The item file is listed in the batch-6 manifest; its status is draft and its verification precheck is pending; this use remains conditional on that actual draft status.

## Proof

1.1 On a sufficiently small neighborhood the positive spatial metric makes each Gram–Schmidt denominator strictly positive. Hence the adapted orthonormal frame and its inverse coframe are smooth functions of $g$; differentiating the frame introduces only $g$ and $\partial g$. In that frame the six components of $dF$ and $d\star_gF$ with one normal slot are exactly the six evolution equations. On a slice with induced metric $h$ and orientation inherited from the oriented tetrad, let $\mathrm{vol}_h$ be the corresponding Riemannian volume form. The all-spatial restrictions are $F|_\Sigma=\iota_b\mathrm{vol}_h$ and $(\star_gF)|_\Sigma=\iota_e\mathrm{vol}_h$: in the oriented orthonormal tetrad their components are $F_{ij}=\epsilon_{ijk}b_k$ and $({\star_gF})_{ij}=\epsilon_{ijk}e_k$. Here $(\iota_v\mathrm{vol}_h)(X,Y):=\mathrm{vol}_h(v,X,Y)$. In oriented coordinates, $\mathrm{vol}_h=\sqrt{\det(h_{ij})}\,dx^1\wedge dx^2\wedge dx^3$, so $d_\Sigma(\iota_v\mathrm{vol}_h)=\partial_i(\sqrt{\det h}\,v^i)\,dx^1\wedge dx^2\wedge dx^3=(D_iv^i)\mathrm{vol}_h$, using $\Gamma^i{}_{ik}=\partial_k\log\sqrt{\det h}$ from the Levi-Civita formula and determinant differentiation. Thus their all-spatial components vanish exactly when the two Gauss divergences vanish. [given, F1, F2, L1, algebra]

2.1 Freeze the tetrad at a point and use its timelike vector as the time direction. To make the Hodge-to-divergence conversion explicit, set $\varepsilon_{abcd}:=(\mathrm{vol}_g)_{abcd}$ and raise its indices with $g^{-1}$. In a positively oriented chart $\varepsilon_{0123}=\sqrt{|\det g|}$; differentiating the determinant gives $\Gamma^a{}_{ac}=\partial_c\log\sqrt{|\det g|}$, and the covariant derivative formula for a top form then gives $\nabla_a\varepsilon_{bcde}=0$. The Hodge formula $({\star_gF})_{cd}=\tfrac12\varepsilon_{cdef}F^{ef}$, torsion-freeness and metric-compatibility, and $\varepsilon^{bacd}\varepsilon_{cdef}=-2(\delta^b_e\delta^a_f-\delta^b_f\delta^a_e)$ give the exact identity $$\nabla_aF^{ab}=\frac1{3!}\varepsilon^{bacd}(d\star_gF)_{acd}=\frac1{\sqrt{|\det g|}}\partial_a\bigl(\sqrt{|\det g|}F^{ab}\bigr).$$ For the first equality, expand $(d\star_gF)_{acd}=3\nabla_{[a}({\star_gF})_{cd]}$ and contract; the second follows from the same Christoffel trace identity and $\Gamma^b{}_{ac}F^{ac}=0$. Thus $d\star_gF=0$ is equivalent to $\nabla_aF^{ab}=0$, and the $(0,i,j)$ components of $dF=0$, with $F_{0i}=-e_i$ and $F_{ij}=\epsilon_{ijk}b_k$, give $n(b)+\operatorname{curl}e=0$, while the spatial components of this divergence equation give $n(e)-\operatorname{curl}b=0$. Hence the spatial symbol in the convention $n(U)+A^j\mathsf e_j(U)=0$ is $S(\xi)$. Since $C(\xi)^T=-C(\xi)$, its two off-diagonal blocks are transposes and $S(\xi)^T=S(\xi)$. Also $|C(\xi)v|^2=|\xi|^2|v|^2-(\xi\cdot v)^2$, so $\|C(\xi)\|=|\xi|$ and $\|S(\xi)\|=|\xi|$. [step 1.1, F1, F2, L1, algebra]

3.1 The identity $C(\xi)^2v=\xi(\xi\cdot v)-|\xi|^2v$ shows that $-C(\xi)^2$ has eigenvalues $0,|\xi|^2,|\xi|^2$. Squaring $S(\xi)$ therefore gives eigenvalues $0,0,|\xi|^2,|\xi|^2,|\xi|^2,|\xi|^2$; because $S$ is symmetric and has trace zero, its eigenvalues are $0,0,|\xi|,|\xi|,-|\xi|,-|\xi|$. For any $z\in\mathbb R^6$, $z^TP(\zeta)z\ge(\zeta(n)-|\zeta_\perp|_h)|z|^2$, proving positivity on the stated future covector cone. Taking $\zeta=ds$ gives $ds(n)=\alpha^{-1}$ and $\zeta_\perp=0$, hence the positive time matrix $\alpha^{-1}I_6$. The shift contributes only scalar multiples of $I_6$ to spatial matrices, so those matrices remain symmetric. [step 2.1, algebra]

4.1 The frame-derivative, Hodge-coefficient, and commutator terms contain at most first derivatives of $g$ and no derivatives of $(e,b)$; they are smooth on the open state set where $g$ is Lorentzian, $\alpha>0$, and $h>0$. This proves the claimed lower-order form and completes the conditional reduction proof. [step 1.1, step 3.1, given, L1, algebra] ∎

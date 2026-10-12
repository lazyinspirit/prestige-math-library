---
id: ex-gr-linearized-curvature-of-the-diagonal-perturbation
kind: example
title: "First-order curvature of the diagonal perturbation h_00 = -2 phi, h_ij = -2 phi delta_ij for the explicit potential phi = |x|^2/2"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-curvature-tensor-and-derived-tensors, def-gr-inverse-metric-and-musical-isomorphisms, def-laplacian-of-a-c2-function, lem-gr-lorentzian-perturbations-remain-lorentzian]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the linearized Ricci tensor for a diagonal metric perturbation and its use in the Newtonian limit, printed pp. 106-112 (PDF pp. 113-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1.1: the first-order curvature of the stationary diagonal weak-field metric, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Work on the flat model of [[def-gr-minkowski-model-and-inertial-chart]] with
its inertial chart $x$ and take for $\Omega$ the open unit ball of
$\mathbb R^4$ (identified with its image under $x$). Take the flat linearized
family of [[def-gr-flat-linearized-perturbation]] with normalized remainder
$q\equiv0$ and first-order perturbation

$$h_{00}=-2\varphi,\qquad h_{ij}=-2\varphi\,\delta_{ij},\qquad h_{0i}=0,\qquad \varphi(x):=\tfrac12\bigl((x^1)^2+(x^2)^2+(x^3)^2\bigr),$$

so that $g(\lambda)_{ab}=\eta_{ab}+\lambda\,h_{ab}$. Then
$(\varepsilon_1,h,q)$ with $\varepsilon_1:=1/8$ and $q\equiv0$ is a flat
linearized family over $\Omega$, and with all indices raised and lowered by
$\eta$:

1. $\Gamma^{(1)i}{}_{00}=x^i$,
   $\Gamma^{(1)i}{}_{0j}=\Gamma^{(1)i}{}_{j0}=0$ and
   $\Gamma^{(1)i}{}_{jk}=-\delta^i_k\,x_j-\delta^i_j\,x_k+\delta_{jk}\,x^i$,
   while $\Gamma^{(1)0}{}_{00}=\Gamma^{(1)0}{}_{ij}=0$ and
   $\Gamma^{(1)0}{}_{0i}=\Gamma^{(1)0}{}_{i0}=x_i$; here
   $x_j:=\delta_{jm}x^m$, and $i,j,k$ range over $1,2,3$.
2. $\operatorname{Ric}^{(1)}_{00}=3$,
   $\operatorname{Ric}^{(1)}_{0i}=0$,
   $\operatorname{Ric}^{(1)}_{ij}=3\delta_{ij}$ and $S^{(1)}=6$.
3. The trace-reversed perturbation is
   $\bar h_{00}=-4\varphi$, $\bar h_{0i}=0$, $\bar h_{ij}=0$, and the closed
   formula of [[thm-gr-flat-linearized-curvature-and-gauge]] clause (c)
   gives $G^{(1)}_{00}=2\Delta\varphi=6$ and
   $G^{(1)}_{0i}=G^{(1)}_{ij}=0$; these values satisfy
   $G^{(1)}_{ab}=\operatorname{Ric}^{(1)}_{ab}-\tfrac12\eta_{ab}S^{(1)}$ with
   the tensors of clause 2, as the first-order expansion of
   $G=\operatorname{Ric}-\tfrac12Sg$
   ([[def-gr-curvature-tensor-and-derived-tensors]]) requires.

## Facts & Assumptions

**Given:** The flat model $(M,g,N)$ with inertial chart $x$, the open unit ball $\Omega\subseteq M$, the potential $\varphi$ above, and the flat linearized family $(\varepsilon_1,h,q)$ with $\varepsilon_1=1/8$, $q\equiv0$ and the component fields $h_{00}=-2\varphi$, $h_{0i}=0$, $h_{ij}=-2\varphi\delta_{ij}$.

[L1] A flat linearized family over $\Omega$ consists of $\varepsilon_1>0$ and smooth fields $h$, $q$ such that for $0<|\lambda|<\varepsilon_1$ the field $g_{ab}(\lambda,p)=\eta_{ab}+\lambda h_{ab}(p)+\lambda^2q_{ab}(\lambda,p)$ is the component field of a smooth Lorentzian metric of signature $(-,+,+,+)$ on $\Omega$ ([[def-gr-flat-linearized-perturbation]] clause (a)).

[L2] Indices on first-order quantities are raised and lowered with $\eta$: $\partial^a=\eta^{ab}\partial_b$, $h^{ab}=\eta^{ac}\eta^{bd}h_{cd}$, $\Box=\eta^{ab}\partial_a\partial_b$, $h=\eta^{ab}h_{ab}$, $\bar h_{ab}=h_{ab}-\tfrac12\eta_{ab}h$ ([[def-gr-flat-linearized-perturbation]] clause (c), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] First-order formulas ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a)-(c)): $\Gamma^{(1)a}{}_{bc}=\tfrac12\eta^{ad}(\partial_bh_{cd}+\partial_ch_{bd}-\partial_dh_{bc})$; $\operatorname{Ric}^{(1)}_{ab}=\tfrac12(\partial_c\partial_ah^{c}{}_{b}+\partial_c\partial_bh^{c}{}_{a}-\Box h_{ab}-\partial_a\partial_bh)$; $S^{(1)}=\partial_a\partial_bh^{ab}-\Box h$; $G^{(1)}_{ab}=-\tfrac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\tfrac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$; here $h^{c}{}_{b}=\eta^{ca}h_{ab}$.

[L4] For $\varphi=\tfrac12((x^1)^2+(x^2)^2+(x^3)^2)$ on $\Omega$: $\partial_i\varphi=x_i$, $\partial_i\partial_j\varphi=\delta_{ij}$ and $\Delta\varphi=3$ ([[def-laplacian-of-a-c2-function]]). The field $\varphi$ has $x^0$-independent components, so for every component field $f$ that is stationary (independent of $x^0$) the d'Alembertian reduces to the Laplacian, $\Box f=\Delta f$; in particular $\Box\varphi=3$ and $\Box x^i=0$. The components of $h$ are stationary.

[L5] If a symmetric bilinear form on a four-dimensional real vector space has, in some basis, the matrix $\operatorname{diag}(-1,1,1,1)+E$ with $|E_{ij}|<1/8$ for all $i,j$, then it has inertia $(3,1,0)$ ([[lem-gr-lorentzian-perturbations-remain-lorentzian]] clause (a)).

## Verification
**Proof technique:** direct; verify that the family is admissible, insert the explicit components into the first-order formulas of [L3], and cross-check the Einstein tensor through the trace-reversed closed formula of [L3] and through the first-order expansion of $G=\operatorname{Ric}-\tfrac12Sg$.

1.1 (Admissibility.) In the coordinate frame the components of $\lambda h$ are $\lambda h_{00}=-2\lambda\varphi$, $\lambda h_{ij}=-2\lambda\varphi\delta_{ij}$ and $0$ otherwise, so the matrix of $g(\lambda)=\eta+\lambda h$ in the coordinate basis is $\operatorname{diag}(-1,1,1,1)+E(\lambda)$ with $E(\lambda)=-2\lambda\varphi\,I_4$, the entries of which satisfy $|E(\lambda)_{ij}|=2|\lambda|\,\varphi<2\cdot\tfrac18\cdot\tfrac12=\tfrac18$ on $\Omega$, because $\varphi<\tfrac12$ there; all components are stationary and smooth, so $g(\lambda)$ is a smooth symmetric component field. By [L5] $g(\lambda)$ has inertia $(3,1,0)$ for every $0<|\lambda|<\varepsilon_1$, and $q\equiv0$ is smooth; hence $(\varepsilon_1,h,q)$ satisfies clause (a) of [L1]. [L1, L5, algebra]

1.2 (First-order connection.) By [L2] and [L3], $\Gamma^{(1)i}{}_{00}=\tfrac12\eta^{ia}(2\partial_0h_{a0}-\partial_ah_{00})$. The time derivatives vanish and $\partial_ah_{00}=-2\partial_a\varphi$, so $\Gamma^{(1)i}{}_{00}=\eta^{ia}\partial_a\varphi=\partial^i\varphi=x^i$. Similarly $\Gamma^{(1)i}{}_{0j}=\tfrac12\eta^{ia}(\partial_0h_{aj}+\partial_jh_{a0}-\partial_ah_{0j})=0$ and $\Gamma^{(1)i}{}_{j0}=0$ because every component $h_{a0}=h_{0a}$ vanishes. For the spatial pairs $\Gamma^{(1)i}{}_{jk}=\tfrac12\eta^{ia}(\partial_jh_{ak}+\partial_kh_{aj}-\partial_ah_{jk}) =\tfrac12\delta^{ia}\bigl(-2\partial_j\varphi\,\delta_{ak}-2\partial_k\varphi\,\delta_{aj}+2\partial_a\varphi\,\delta_{jk}\bigr) =-\delta^i_kx_j-\delta^i_jx_k+\delta_{jk}x^i$. For the components with upper index $0$, $\Gamma^{(1)0}{}_{bc}=\tfrac12\eta^{0a}(\partial_bh_{ca}+\partial_ch_{ba}-\partial_ah_{bc}) =-\tfrac12\bigl(\partial_bh_{c0}+\partial_ch_{b0}-\partial_0h_{bc}\bigr)$, since $\eta^{0a}$ is nonzero only at $a=0$: for $(b,c)=(0,0)$ and for $b,c$ both spatial this vanishes ($h_{a0}=0$ and $\partial_0=0$ on all components), while $\Gamma^{(1)0}{}_{0i}=\Gamma^{(1)0}{}_{i0}=-\tfrac12\partial_ih_{00}=\partial_i\varphi=x_i$. [L2, L3, L4, algebra]

1.3 (Trace data.) By [L2], $h=\eta^{ab}h_{ab}=\eta^{00}h_{00}+\eta^{ij}h_{ij}=2\varphi-6\varphi=-4\varphi$, and the mixed components $h^{c}{}_{b}=\eta^{ca}h_{ab}$ are $h^{0}{}_{0}=\eta^{00}h_{00}=2\varphi$, $h^{i}{}_{j}=\eta^{ik}h_{kj}=-2\varphi\delta^i_j$, $h^{0}{}_{i}=\eta^{0a}h_{ai}=0$ and $h^{i}{}_{0}=\eta^{ik}h_{k0}=0$. [L2, algebra]

2.1 (First-order Ricci tensor.) By [L3] and step 1.3: for the $(00)$ component, $\partial_c\partial_0h^{c}{}_{0}=0$ because all components of $h^{c}{}_{0}$ are stationary, and $-\Box h_{00}-\partial_0\partial_0h=2\Box\varphi=2\Delta\varphi=6$ (the field $h$ is stationary), so $\operatorname{Ric}^{(1)}_{00}=\tfrac12(0+0+6+0)=3$. For the $(0i)$ component, $\partial_c\partial_0h^{c}{}_{i}=0$ and $\partial_c\partial_ih^{c}{}_{0}=0$ because the fields $h^{c}{}_{i}$ are stationary and $h^{c}{}_{0}$ vanishes for $c\ne0$ and is stationary for $c=0$; and $\Box h_{0i}=\partial_0\partial_ih=0$ because $h_{0i}=0$ and $h$ is stationary; so $\operatorname{Ric}^{(1)}_{0i}=0$. For the $(ij)$ component, $\partial_c\partial_ih^{c}{}_{j}=\partial_k\partial_i(-2\varphi\delta^k_j)=-2\delta_{ij}$, likewise $\partial_c\partial_jh^{c}{}_{i}=-2\delta_{ij}$, $-\Box h_{ij}=2\delta_{ij}\Delta\varphi=6\delta_{ij}$ and $-\partial_i\partial_jh=4\partial_i\partial_j\varphi=4\delta_{ij}$, so $\operatorname{Ric}^{(1)}_{ij}=\tfrac12(-2-2+6+4)\delta_{ij}=3\delta_{ij}$. [step 1.3, L2, L3, L4, algebra]

3.1 (Scalar curvature.) By [L3] and [L2], $\partial_a\partial_bh^{ab}=\partial_i\partial_jh^{ij}=\partial_i\partial_j(-2\varphi\delta^{ij})=-2\Delta\varphi=-6$, since $h^{00}=-2\varphi$, $h^{0i}=0$, $h^{ij}=-2\varphi\delta^{ij}$ and all time derivatives vanish; and $\Box h=\Box(-4\varphi)=-4\Delta\varphi=-12$. Hence $S^{(1)}=-6+12=6$. As an arithmetic check on the defining relation $S=g^{ab}\operatorname{Ric}_{ab}$ of [[def-gr-curvature-tensor-and-derived-tensors]], whose first-order expansion at $\lambda=0$ is $S^{(1)}=\eta^{ab}\operatorname{Ric}^{(1)}_{ab}$ because $\operatorname{Ric}(0)=0$: the values of step 2.1 give $-\operatorname{Ric}^{(1)}_{00}+\delta^{ij}\operatorname{Ric}^{(1)}_{ij}=-3+9=6$, in agreement. [step 2.1, L2, L3, L4, algebra]

4.1 (Einstein tensor and cross-check.) By [L2] the trace reversal of step 1.3 is $\bar h_{00}=h_{00}-\tfrac12\eta_{00}h=-2\varphi-\tfrac12(-1)(-4\varphi)=-4\varphi$, $\bar h_{ij}=-2\varphi\delta_{ij}-\tfrac12\delta_{ij}(-4\varphi)=0$ and $\bar h_{0i}=0$; that is, $\bar h_{ab}=-4\varphi\,\delta_{a0}\delta_{b0}$. The closed formula of [L3] then gives: for $(00)$, $\partial^c\partial^d\bar h_{cd}=\eta^{00}\eta^{00}\partial_0\partial_0\bar h_{00}=0$ and $\partial^c\partial_{(0}\bar h_{0)c}=0$ by stationarity, so $G^{(1)}_{00}=-\tfrac12\Box(-4\varphi)=2\Delta\varphi=6$; for $(0i)$ and $(ij)$ every term of the closed formula involves a component $\bar h_{0\cdot}$ or a time derivative, hence vanishes, so $G^{(1)}_{0i}=G^{(1)}_{ij}=0$. Finally, the values satisfy $G^{(1)}_{ab}=\operatorname{Ric}^{(1)}_{ab}-\tfrac12\eta_{ab}S^{(1)}$: $3-\tfrac12(-1)(6)=6$ for $(00)$, $3\delta_{ij}-\tfrac12\delta_{ij}\cdot6=0$ for $(ij)$ and $0-0=0$ for $(0i)$, which is the first-order expansion at $\lambda=0$ of the defining relation $G=\operatorname{Ric}-\tfrac12Sg$ of [[def-gr-curvature-tensor-and-derived-tensors]], using $S(0)=0$ and $g(0)=\eta$. [step 1.3, step 2.1, step 3.1, L2, L3, L4, algebra] ∎

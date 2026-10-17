---
id: def-emg-trivial-potential-charged-scalar-system
kind: definition
title: "Trivial-potential classical charged-scalar Einstein–Maxwell system"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
proof_strategy: direct
deps:
  - def-emg-lorentzian-forms
  - def-emg-electrovacuum-cauchy-system
  - def-emg-charged-scalar-functional
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-charged-scalar-functional: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
sources:
  references:
    - title: "David Tong, Gauge Theory, full author-hosted lecture notes, §7.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§7.2, PDF pp. 349–352: the U(1) Abelian–Higgs action with a complex scalar and Dμϕ=∂μϕ−iAμϕ. Only the local gauge-covariant derivative and action form are used; its two-dimensional quantum and phase claims are not imported."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, §§4.5.1–4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.1–4.5.3, PDF pp. 187–193 (printed pp. 181–186): scalar fields in curved spacetime, Hilbert variation, and the neutral scalar and Maxwell stress tensors. The charged terms and all local PDE claims are stated and proved separately here."
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

## Definition

Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, with its metric-selected Levi–Civita connection and independent orientation as in [[def-emg-lorentzian-forms]]. Use length coordinates $x^0=ct$ and the curvature and Hodge conventions of [[def-emg-electrovacuum-cauchy-system]] and [[lem-emg-lorentz-hodge-calculus]]. Fix $c>0$, $G_N>0$, $\mu_0>0$, $\Lambda\in\mathbb R$, and put $\kappa=8\pi G_N/c^4$.

The **trivial-potential sector** consists of a global smooth real one-form $A\in\Omega^1(M)$ and a global smooth complex scalar field $\varphi\in C^\infty(M;\mathbb C)$. It defines the exact real two-form $F:=dA$ and the charged derivative

$$\pi_a:=(D\varphi)_a:=\nabla_a\varphi-i\lambda A_a\varphi=\partial_a\varphi-i\lambda A_a\varphi,$$

where $\lambda\in\mathbb R$ is an arbitrary fixed coupling. Define $D_a\pi_b:=\nabla_a\pi_b-i\lambda A_a\pi_b$, with the conjugate derivative using $+i\lambda A_a$, and $D_a\pi^a:=g^{ab}D_a\pi_b$. Let $\mathcal U\subset\mathbb R$ be open with $|\varphi|^2(M)\subset\mathcal U$, let $V\in C^\infty(\mathcal U;\mathbb R)$, and fix $K_\varphi>0$. Define

$$L_\varphi:=g^{ab}\overline{\pi_a}\pi_b+V(|\varphi|^2),\qquad S_\varphi:=-\frac{K_\varphi}{2c}\int_M L_\varphi\,\mathrm{vol}_g,$$

where on a noncompact $M$ the integral is used when finite and otherwise only compactly supported action differences are used. The scalar equation, current vector, and scalar stress tensor are

$$D_a\pi^a-V'(|\varphi|^2)\varphi=0,\qquad j^a:=K_\varphi\lambda\operatorname{Im}(\overline\varphi\pi^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{\pi_a}\pi_b)-\frac{K_\varphi}{2}g_{ab}L_\varphi.$$

Put

$$T^{\mathrm{EM}}_{ab}:=\frac{1}{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),\qquad T_{ab}:=T^{\mathrm{EM}}_{ab}+T^\varphi_{ab}.$$

The associated **classical charged-scalar Einstein–Maxwell system** is

$$G_{ab}+\Lambda g_{ab}=\kappa T_{ab},\qquad dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,\qquad D_a\pi^a-V'(|\varphi|^2)\varphi=0.$$

Here $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Rg_{ab}$; all indices are raised with $g^{-1}$. This is a definition of a mathematical system, not an adopted physical postulate or a claim about nature. It is restricted to a trivial real-potential sector: $F$ is exact, no nontrivial $U(1)$ bundle is included, and $\lambda$ is not quantized. The scalar is classical, and neither $K_\varphi$ nor $\lambda$ is tied to a Planck constant.

For formal SI bookkeeping in length coordinates, assign $[g_{ab}]=1$, $[x^a]=\mathrm m$, $[c]=\mathrm{m\,s^{-1}}$, $[G_N]=\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $[\mu_0]=\mathrm{H\,m^{-1}}$, $[\Lambda]=\mathrm{m^{-2}}$, $[A_a]=\mathrm{Wb\,m^{-1}}$, $[F_{ab}]=\mathrm{Wb\,m^{-2}}$, $[\varphi]=1$, $[\lambda]=\mathrm{Wb^{-1}}$, $[\pi_a]=\mathrm{m^{-1}}$, $[V]=\mathrm{m^{-2}}$, and $[K_\varphi]=\mathrm{J\,m^{-1}}$. These give $[j^a]=\mathrm{A\,m^{-2}}$, $[T_{ab}]=\mathrm{J\,m^{-3}}$, $[\kappa T_{ab}]=\mathrm{m^{-2}}$, and $[S_\varphi]=\mathrm{J\,s}$. They are dimensions, not measured values.

## Facts & Assumptions

**Given:** The smooth oriented Lorentzian four-manifold, its metric-selected connection and volume form, global smooth fields $A,\varphi$, and the constants and smooth real function specified in the Definition.

[F1] [[def-emg-lorentzian-forms]] fixes signature $(-,+,+,+)$, the independent orientation, the metric-selected Levi–Civita connection, and length-coordinate dimensions for curvature.

[L1] [[def-emg-electrovacuum-cauchy-system]] fixes the curvature convention, $\kappa=8\pi G_N/c^4$, and the electromagnetic tensor $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$. Only these geometric and electromagnetic conventions are used here.

[L2] [[def-emg-charged-scalar-functional]] defines $D_a\varphi=\partial_a\varphi-i\lambda A_a\varphi$, the scalar density, and the global real-potential branch with arbitrary real $\lambda$. Only that stated global real-potential branch is used here.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines the Lorentzian Hodge star from the metric and orientation and gives $d^2=0$ on smooth forms.

[A1] $c,G_N,\mu_0,K_\varphi$ are positive, $\lambda,\Lambda$ are real, $V$ is real-valued and smooth on an open set containing every attained value of $|\varphi|^2$, and the fields have the stated global smoothness. No empirical premise is assumed.

## Proof

1.1 Since $A$ and $\varphi$ are global smooth fields, $F=dA$, $\pi=D\varphi$, and $D\pi$ are global smooth fields of the stated real or complex tensor types. The composition $V(|\varphi|^2)$ is smooth and real because $|\varphi|^2(M)\subset\mathcal U$ and $V$ is smooth and real-valued. The kinetic contraction $g^{ab}\overline{\pi_a}\pi_b$ is real: complex conjugation followed by exchanging the dummy indices $a,b$ leaves it unchanged because $g^{ab}=g^{ba}$. Thus $L_\varphi$ is a global smooth real scalar, and its product with $\mathrm{vol}_g$ is a real smooth four-form. On a compact set its integral is finite; on noncompact $M$ the Definition uses only finite integrals or compactly supported differences, so it assigns no divergent action value. [given, F1, F2, L2, A1, algebra]

1.2 The tensor $\operatorname{Re}(\overline{\pi_a}\pi_b)$ is symmetric because interchanging $a,b$ conjugates the scalar and real part is unchanged. The Maxwell bilinear $F_{ac}F_b{}^c$ is also symmetric: after lowering the contracted index it is $g^{cd}F_{ac}F_{bd}$, which is unchanged under $a\leftrightarrow b$ by symmetry of $g^{cd}$ and commutativity of scalar multiplication. Hence $T^\varphi$, $T^{\mathrm{EM}}$, and $T$ are smooth symmetric covariant two-tensors, while $j$ is a smooth vector field. The equations therefore compare tensors of the displayed types, with no variation or empirical assertion added to the definition. [given, F1, L1, L2, algebra]

2.1 In length coordinates, $[D_a\varphi]=[\pi_a]=\mathrm{m^{-1}}$, so both terms of $L_\varphi$ have units $\mathrm{m^{-2}}$ and $[S_\varphi]=(\mathrm{J\,s\,m^{-2}})(\mathrm{m^{-2}})(\mathrm{m^4})=\mathrm{J\,s}$. The scalar stress has units $[K_\varphi][\pi]^2=(\mathrm{J\,m^{-1}})(\mathrm{m^{-2}})=\mathrm{J\,m^{-3}}$. The electromagnetic stress has units $[F]^2/[\mu_0]=(\mathrm{Wb^2\,m^{-4}})/(\mathrm{H\,m^{-1}})=\mathrm{J\,m^{-3}}$, using $\mathrm{H}=\mathrm{Wb\,A^{-1}}$ and $\mathrm{Wb}=\mathrm{J\,A^{-1}}$. Also $[j^a]=(\mathrm{J\,m^{-1}})(\mathrm{Wb^{-1}})(\mathrm{m^{-1}})=\mathrm{A\,m^{-2}}$. Finally $[\kappa]=8\pi[G_N]/[c]^4=\mathrm{s^2\,kg^{-1}\,m^{-1}}$, hence $[\kappa T_{ab}]=\mathrm{m^{-2}}$, matching curvature and $\Lambda$. These are dimensional identities under the assigned SI bookkeeping. [given, A1, algebra] ∎


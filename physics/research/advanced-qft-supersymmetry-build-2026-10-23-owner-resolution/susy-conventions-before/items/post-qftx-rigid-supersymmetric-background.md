---
id: post-qftx-rigid-supersymmetric-background
kind: postulate
title: Adopted rigid N=4 Yang–Mills localization background on the round four-sphere
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds
deps:
  - def-qftx-susy-background-data
  - post-qftx-n4-super-yang-mills-model
  - def-torus-equivariant-cohomology-cartan-model
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  post-qftx-n4-super-yang-mills-model: physical-assumption
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
dependency_level: 8
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "§1, equations (1.3)–(1.4), and the noncommutative S4 regulator qualification; §2, equations (2.1)–(2.14), (2.26)–(2.30); §4.1–§4.3, equations (4.1)–(4.15)."
    - title: "Vasilis Peelaers, 4d N=2 Localization lecture notes"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
      locator: "§1.1, equations (19)–(23), and §1.2, equations (24)–(26), PDF pp. 3–4."
    - title: "Guido Festuccia and Nathan Seiberg, Rigid Supersymmetric Theories in Curved Superspace"
      url: "https://arxiv.org/pdf/1105.0689"
      locator: "§2, equations (2.9)–(2.11), for the general frozen-background/Killing-spinor procedure; their N=1 S4 reality result in §4 is not identified with this N=4 background."
physical_scope: "A source-qualified formal Euclidean N=4 Yang–Mills setup on the round S4. The regulator extension, gauge-fixed functional measure, and localization identity are adopted as conditional inputs; no continuum construction, regulator-removal theorem, empirical claim, or arbitrary-background existence claim is made."
verification:
  precheck: pending
---

## Postulate

Adopt the following Euclidean source model in the conventions stated here. Let $r>0$ have units of length and let
$$S^4_r=\{y\in\mathbb R^5:\sum_{j=1}^5 y_j^2=r^2\}$$
have its round metric, standard orientation, and scalar curvature $12/r^2$. In stereographic coordinates $x^\mu$ of length, $\mu=1,\dots,4$, the metric is
$$ds^2=\frac{\sum_{\mu=1}^4(dx^\mu)^2}{(1+x^2/(4r^2))^2},\qquad x^2=\sum_{\mu=1}^4(x^\mu)^2.$$
Use the standard spin structure, a trivial $SU(2)_R$ background bundle with zero connection, and the $SU(2)_R$ generator selected below. The global gauge group is $G=SU(2)$, not $SO(3)$; its Lie algebra consists of anti-Hermitian $2\times2$ traceless matrices and has positive invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, normalized by $\kappa(-i\sigma_a/2,-i\sigma_b/2)=\delta_{ab}$. Let $\Sigma$ be the declared set of isomorphism classes of smooth right principal $SU(2)$-bundles over $S^4_r$; each $P\in\Sigma$ is a separate gauge sector. The sector set and any sum over it are formal model inputs, not a classification or measure construction.

The matter content is the massless four-dimensional $\mathcal N=4$ vector multiplet: one gauge connection $A_\mu$, six real adjoint scalar fields $\Phi_A$ with $A\in\{0,5,6,7,8,9\}$, and four adjoint Weyl fermions. Equivalently, its flat-space component content is one $\mathcal N=1$ vector multiplet and three adjoint $\mathcal N=1$ chiral multiplets. Set the topological $\theta$-term to zero in this selected model. Use the ordinary trace $\operatorname{Tr}_2$ in the defining representation of $SU(2)$ and a positive dimensionless coupling $g_{\mathrm{YM}}$. The current N=4 model carrier uses the same global group, $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, the same dimensionless coupling, and connection-normalized adjoint chiral fields, with one vector and three adjoint chiral multiplets; this is an interface match for flat-space component content and normalization. This postulate separately adopts the source’s curved $S^4$ action, curvature coupling, selected-spinor algebra, gauge fixing, contour, and formal regulator inputs; it does not identify that curved action with the supplier’s flat Minkowski superspace action. For the dimensional-reduction notation, in a local gauge trivialization define the Lie-algebra-valued components $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$, $F_{\mu A}=D_\mu\Phi_A$, and $F_{AB}=[\Phi_A,\Phi_B]$, extended antisymmetrically to $F_{MN}$. Here $D_\mu X=\nabla_\mu^{\mathrm{LC}}X+[A_\mu,X]$ on adjoint tensor fields, with the supplied spin connection on spinor indices, and $D_A X=[\Phi_A,X]$; in the fermion term $D_\mu\Psi$ includes the spin and gauge connections. These $F_{MN}$ are Lie-algebra-valued matrices, so $\operatorname{Tr}_2$ is taken in the defining representation. Use $\eta_{MN}=\operatorname{diag}(-1,1,\dots,1)$ for $M,N=0,\dots,9$. With the seven localization auxiliaries included, the adopted classical action input is
$$S_{\mathrm{off}}=-\frac{1}{g_{\mathrm{YM}}^2}\int_{S^4_r}d^4x\,\sqrt g\,\operatorname{Tr}_2\left(\frac12\sum_{M,N}F_{MN}F^{MN}-\Psi\Gamma^M D_M\Psi+\frac{2}{r^2}\sum_A\Phi_A\Phi^A-\sum_{i=1}^7K_iK_i\right).$$
Here $\Psi$ is the adjoint ten-dimensional Majorana–Weyl fermion used to package the four-dimensional fields; after Euclidean continuation it is complex and has no independent conjugate field. The chiral gamma matrices obey $\Gamma_M\widetilde\Gamma_N+\Gamma_N\widetilde\Gamma_M=2\eta_{MN}I_{16}$, with $\widetilde\Gamma_0=-\Gamma_0$ and $\widetilde\Gamma_M=\Gamma_M$ for $M=1,\dots,9$; $\Gamma_{MN}:=\widetilde\Gamma_{[M}\Gamma_{N]}$. The four sphere directions have positive metric. The term with $2/r^2$ is the conformal curvature coupling of the six scalars. The Yang–Mills coupling is dimensionless, $[A_\mu]=[\Phi_A]=\mathrm{length}^{-1}$, $[K_i]=[F_{MN}]=\mathrm{length}^{-2}$, and $[\Psi]=\mathrm{length}^{-3/2}$.

Let $\widehat\epsilon_s=(0_8,1,0_7)^{\mathsf T}$ be the normalized sixteen-component chiral spinor in the source gamma convention, with $\Gamma_{5678}\widehat\epsilon_s=\widehat\epsilon_s$ and $\Gamma_{1234}\widehat\epsilon_s=-\widehat\epsilon_s$, and set $\widehat\epsilon_c=(2r)^{-1}\Gamma_{012}\widehat\epsilon_s$. With $\Omega(x)=1+x^2/(4r^2)$, adopt
$$\epsilon(x)=\Omega(x)^{-1/2}\bigl(\widehat\epsilon_s+x^i\widetilde\Gamma_i\widehat\epsilon_c\bigr),\qquad \widetilde\epsilon(x)=\Omega(x)^{-1/2}\left(\widehat\epsilon_c-\frac{x^i}{4r^2}\Gamma_i\widehat\epsilon_s\right),\quad i=1,\dots,4.$$
They solve the conformal Killing-spinor system
$$\nabla_\mu\epsilon=\widetilde\Gamma_\mu\widetilde\epsilon,\qquad \nabla_\mu\widetilde\epsilon=-\frac{1}{4r^2}\Gamma_\mu\epsilon.$$
The selected spinors obey the source's same-chirality conditions, in particular $\widetilde\epsilon\epsilon=0$, so the dilation term in the supercharge square vanishes. Their bilinear $v^\mu=\epsilon\Gamma^\mu\epsilon$ generates the $U(1)$ isometry rotating the $(x^1,x^2)$ and $(x^3,x^4)$ planes equally. The corresponding internal R-symmetry generator is $R_{AB}=2\widetilde\epsilon\Gamma_{AB}\epsilon$ on scalar fields and its induced spin representation on fermions.

For this single supercharge, introduce seven adjoint auxiliary scalars $K_i$, $i=1,\dots,7$, and seven spinors $\nu_i$ satisfying
$$\epsilon\Gamma_M\nu_i=0,\qquad \frac12(\epsilon\Gamma^N\epsilon)\widetilde\Gamma_{N,\alpha\beta}=\sum_{i=1}^7\nu_{i,\alpha}\nu_{i,\beta}+\epsilon_\alpha\epsilon_\beta,\qquad \nu_i\Gamma_M\nu_j=\delta_{ij}\epsilon\Gamma_M\epsilon.$$
Adopt the off-shell transformations
$$Q_\epsilon A_M=\Psi\Gamma_M\epsilon,\qquad Q_\epsilon\Psi=\frac12\Gamma^{MN}F_{MN}\epsilon+\frac12\Gamma^\mu\Gamma^A\Phi_A\nabla_\mu\epsilon+\sum_iK_i\nu_i,\qquad Q_\epsilon K_i=-\nu_i\Gamma^M D_M\Psi.$$
With $v^M=\epsilon\Gamma^M\epsilon$, their square is the source's off-shell symmetry
$$Q_\epsilon^2=-\mathcal L_v-\delta_{\mathrm{gauge}}(v^M A_M)-\delta_R-\delta_\Omega,$$
where $\mathcal L_v$ is the lifted Lie derivative along the spacetime part $v^\mu$, $\delta_{\mathrm{gauge}}(u)$ acts on an adjoint field $X$ by $[u,X]$ and on a connection by $-D_\mu u$, $\delta_R$ is the internal transformation generated by $R_{AB}$, and $\delta_\Omega$ is the dilation with parameter $2\widetilde\epsilon\epsilon=0$. This off-shell closure is for the selected generator; it is not a claim that the full hypermultiplet algebra closes with finitely many auxiliary fields.

In a trivialization chart use the Faddeev–Popov gauge slice $d^*A=0$, where $d^*$ is the metric adjoint of the exterior derivative. In a nontrivial bundle sector $P$, choose a background connection $A_*$ and fluctuations $a=A-A_*$ in $\Omega^1(S^4,\operatorname{ad}P)$; the supplied local slice is $d_{A_*}^*a=0$ and its Faddeev–Popov operator is $d_{A_*}^*D_A$ with stabilizer modes omitted. Introduce odd ghost and antighost fields $c,\widetilde c$, an even multiplier $b$, and the constant zero-mode fields $a_0,\widetilde a_0,b_0,c_0,\widetilde c_0$. In the trivialization chart the Faddeev–Popov operator is $d^*D_{A_{\mathrm{gauge}}}$ with its zero modes omitted; its determinant is denoted $\det'(d^*D_{A_{\mathrm{gauge}}})$. Take dimensionless gauge-fixing parameters $\xi_1,\xi_2>0$ and the BRST gauge-fixing functional
$$\delta\left((\widetilde c,\,i d^*A+\tfrac{\xi_1}{2}b+i b_0)-(c,\,\widetilde a_0-\tfrac{\xi_2}{2}a_0)\right).$$
The brackets are the integrated invariant pairing on adjoint-valued fields, and the prime removes the stabilizer/constant zero modes treated by the displayed auxiliary fields. Let $S^\delta_{\mathrm{gf}}$ denote the BRST variation of this functional. If $\psi$ is the fermionic one-form superpartner of $A$ and $\rho_{\mathrm{gh}}(\omega)$ is the infinitesimal action of the selected circle generator on ghosts, the source's $Q$-closed completion is
$$S^Q_{\mathrm{gf}}=S^\delta_{\mathrm{gf}}-(\widetilde c,d^*\psi+\tfrac{\xi_1}{2}\rho_{\mathrm{gh}}(\omega)\widetilde c)-(\phi,\widetilde a_0-\tfrac{\xi_2}{2}a_0).$$
The gauge-fixed functional integral is the formal expression
$$Z_{\mathrm{formal}}=\sum_{[P]\in\Sigma}\frac{1}{\operatorname{vol}(\mathcal G(P),g_{\mathrm{YM}})} \int_{\mathcal C_P}[D\Phi\,Dc\,D\widetilde c\,Db\,D(\text{zero modes})]\, e^{-S_{\mathrm{off}}[P]-S_{\mathrm{gf}}^Q[P]}.$$
Here $\mathcal G(P)$ is the smooth gauge-automorphism group of $P$, $\mathcal C_P$ is the declared contour in that sector, and $\operatorname{vol}(\mathcal G(P),g_{\mathrm{YM}})$ is the source's formal gauge-group volume with its invariant measure scaled by the gauge coupling; it is not an actual infinite-dimensional Haar measure. In the Euclidean contour, gauge fields and $\Phi_{5},\dots,\Phi_9$ lie in the real Lie algebra, $\Phi_0=i\Phi_0^E$ with $\Phi_0^E$ real, the seven localization auxiliaries satisfy $K_i=iK_i^E$ with $K_i^E$ real, and $a_0=i a_0^E$ with $a_0^E$ real.

Let $\delta_{\mathrm{gauge}}(u)$ denote the infinitesimal gauge action with parameter $u$, and let $\delta_{U(1)}(\omega)$ denote the lifted infinitesimal circle action. The supersymmetry differential acts by $sX=X'$, $sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$, $sc=\phi$, $s\phi=0$, $sa_0=0$, $s\widetilde c=s\widetilde a_0=sb_0=s\widetilde c_0=sc_0=0$, and $sb=\rho_{\mathrm{gh}}(\omega)\widetilde c$. The Faddeev–Popov differential acts on an adjoint-valued tensor field $X$ by $\delta X=-[c,X]$ and on its odd superpartner by $\delta X'=-[c,X']$. On the gauge connection it acts by $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$, using the earlier convention $\delta_{\mathrm{gauge}}(u)A_\mu=-D_\mu u$; the connection's one-form superpartner $\psi$ transforms as $\delta\psi=-[c,\psi]$. The remaining rules are $\delta c=-a_0-\tfrac12[c,c]$, $\delta a_0=0$, $\delta\phi=-[c,\phi]-\delta_{U(1)}(\omega)\phi$, $\delta\widetilde c=b$, $\delta b=[a_0,\widetilde c]$, $\delta\widetilde a_0=\widetilde c_0$, $\delta\widetilde c_0=[a_0,\widetilde a_0]$, $\delta b_0=c_0$, and $\delta c_0=[a_0,b_0]$. Here $X$ ranges over adjoint-valued physical and auxiliary tensor fields other than the connection, $X'$ is its odd superpartner, $c,\widetilde c,c_0,\widetilde c_0$ are odd, and $a_0,\widetilde a_0,b,b_0,\phi$ are even. The total localization differential is $Q=s+\delta$, with $s$ the supersymmetry differential and $\delta$ the Faddeev–Popov differential. These rules give, on adjoint-valued tensor fields and their superpartners,
$$s^2X'=\delta_{\mathrm{gauge}}(\phi)X'+\delta_{U(1)}(\omega)X',\qquad \delta^2X=\delta_{\mathrm{gauge}}(a_0)X,\qquad \{s,\delta\}X=-\delta_{\mathrm{gauge}}(\phi)X,$$
and the same graded algebra on the connection and its one-form superpartner when the gauge action on the connection is interpreted as $\delta_{\mathrm{gauge}}(u)A_\mu=-D_\mu u$. On ghosts, $\{s,\delta\}=\delta_{U(1)}(\omega)$ and $s^2=0$; the displayed ghost transformations give $\delta^2=\delta_{\mathrm{gauge}}(a_0)$. Thus $Q^2=\delta_{\mathrm{gauge}}(a_0)+\delta_{U(1)}(\omega)$ on fields and ghosts: a constant gauge transformation plus the $U(1)$ spacetime rotation. These are the finite-dimensional geometric symmetry data of the background; this assertion does not identify the infinite-dimensional field space with a smooth finite-dimensional manifold.

Adopt as a formal regulator the supersymmetry-compatible noncommutative deformation used by the source for gauge-field regularization on $\mathbb R^4$. Its $\Omega$-background is the $U(1)^2$ action rotating the two coordinate planes in $\mathbb R^4\cong\mathbb C^2$, with angular parameters $\varepsilon_1=\varepsilon_2=r^{-1}$, each of mass dimension one. For the four-sphere, assume an extension exists and agrees near the north and south poles with the stated $\mathbb R^4$ regulator. This extension is not explicitly constructed in the source and is an additional unresolved model assumption. The regulated measure, contour, and gauge-fixed action are likewise formal inputs; any use of $S_t=S+tQV$ is conditional on measure and contour invariance, no anomalous Jacobian, justified differentiation under the integral, and no uncontrolled boundary contribution. This postulate is a source-qualified modeling choice, not a proof of a continuum path integral or a result about nature.

## Postulate references

[Pestun, §§1–4 and Appendices B–C](https://arxiv.org/pdf/0712.2824)

[Peelaers, §1](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

[Festuccia and Seiberg, §2](https://arxiv.org/pdf/1105.0689)

## Facts & Assumptions

[A1] The current batch-31 carrier [[post-qftx-n4-super-yang-mills-model]] is a draft physical postulate whose statement fixes global group $SU(2)$, $T_a=-i\sigma_a/2$, $\kappa=-2\operatorname{Tr}_2$, positive dimensionless coupling $g$, connection-normalized adjoint chiral fields, and on-shell content of one vector, six real adjoint scalars, and four adjoint Weyl fermions (one vector plus three adjoint chiral multiplets). These group, normalization, and component interfaces match the inputs used here. Its current Step 1 readiness record is missing, so this dependency remains open for readiness; no Step 1 completion or independent proof approval is attributed to its draft status. Its flat Minkowski superspace action is not identified with the separately adopted curved $S^4$ action.

[F1] [[def-qftx-susy-background-data]]: the spin/R bundles, connection, model-specific Killing-spinor equation, off-shell $Q$ and its square, gauge fixing, contour, measure, and regulator are explicit data; their existence or analytic validity is not inferred.

[F2] [[def-torus-equivariant-cohomology-cartan-model]]: for a compact torus action on a finite-dimensional smooth manifold, the Cartan complex is $(\operatorname{Sym}(\mathfrak t^*)\otimes\Omega(M))^T$ with the specified degree-one differential; no identification with an infinite-dimensional field-space complex is part of that definition.

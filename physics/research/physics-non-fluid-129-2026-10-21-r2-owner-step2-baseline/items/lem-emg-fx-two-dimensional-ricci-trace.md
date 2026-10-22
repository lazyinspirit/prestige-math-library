---
id: lem-emg-fx-two-dimensional-ricci-trace
kind: lemma
title: Ricci tensor and volume form on a Lorentzian surface
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-fx-spherical-orbit-geometry
  - def-countable-choice
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-curvature-algebraic-symmetries
dependency_roles:
  def-emg-fx-spherical-orbit-geometry: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 3.4.1, printed pp. 130–131 (PDF pp. 137–138): the Ricci contraction and curvature symmetries."
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, arXiv:1205.6112v1 (2012)"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Section 5.3, PDF pp. 27–28: the local spherical electrovac Birkhoff scope; no two-dimensional curvature calculation is imported."
verification:
  precheck: pass
---

## Statement

Let $(U,q,\epsilon_2)$ be a connected, oriented, time-oriented smooth
two-dimensional Lorentzian manifold of signature $(-,+)$ with
$\mathrm{AC}_\omega$.
In local coordinates $y^0,y^1$, define
$$\Gamma^A{}_{BC}:=\frac12q^{AD} (\partial_Bq_{DC}+\partial_Cq_{BD}-\partial_Dq_{BC}),$$
and use the resulting metric-selected derivative $\nabla^q$ and the
curvature convention
$$R^A{}_{BCD}:=\partial_C\Gamma^A{}_{DB}-\partial_D\Gamma^A{}_{CB} +\Gamma^A{}_{CE}\Gamma^E{}_{DB}-\Gamma^A{}_{DE}\Gamma^E{}_{CB}.$$
Let $\operatorname{Ric}(q)_{BD}:=q^{AC}q_{AE}R^E{}_{BCD}$ and
$S_q:=q^{BD}\operatorname{Ric}(q)_{BD}$. Then
$$\nabla^q\epsilon_2=0,\qquad \operatorname{Ric}(q)=\frac12S_q\,q.$$
The only inherited choice assumption is $\mathrm{AC}_\omega$ from the
four-dimensional Levi-Civita supplier used below; no full axiom of choice is
used.

## Statement references

[[def-emg-fx-spherical-orbit-geometry]]

## Facts & Assumptions

**Given:** The smooth oriented, time-oriented Lorentzian surface $(U,q,\epsilon_2)$
and $\mathrm{AC}_\omega$.

[F1] [[def-emg-fx-spherical-orbit-geometry]] supplies a smooth
two-dimensional Lorentzian metric $q$ and its chosen metric volume form
$\epsilon_2$.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the
Christoffel formula, torsion freedom, metric compatibility and
$\mathrm{AC}_\omega$ for an oriented, time-oriented Lorentzian four-manifold.

[F3] [[def-gr-curvature-tensor-and-derived-tensors]] fixes
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
$\operatorname{Ric}_{BD}=q^{AC}R_{ABCD}$.

[F4] [[thm-gr-curvature-algebraic-symmetries]] gives antisymmetry in each
lowered curvature pair and exchange of the two pairs for the four-dimensional
product metric used in the proof.

[F5] [[thm-gr-curvature-tensoriality-and-coordinate-formula]] gives the
coordinate formula for that product metric's curvature; its coordinate
Christoffels determine the base curvature components.

[A1] [[def-countable-choice]]: assume only $\mathrm{AC}_\omega$, exactly the
choice strength required by [F2].

## Proof

1.1 Form the four-manifold $\widetilde M:=U\times\mathbb R^2$ with product
metric $\widetilde g:=q+(dx^2)^2+(dx^3)^2$, product orientation, and the lift
of the chosen future timelike field on $U$. This is a smooth
time-oriented Lorentzian four-manifold. By [F2], its metric-selected
connection has the displayed Christoffel formula. In product coordinates its
base Christoffels are exactly $\Gamma[q]^A{}_{BC}$, every Christoffel with a
flat-factor index is zero, and its curvature components with all indices in
the base are exactly $R[q]^A{}_{BCD}$ by [F5]. Thus the base Ricci contraction
in the product equals the two-dimensional contraction in the Statement.
Moreover, in an oriented base chart,
$\epsilon_{01}=\pm\sqrt{|\det q|}$ and
$\Gamma^C{}_{AC}=\frac12q^{CD}\partial_Aq_{CD}
=\partial_A\log\sqrt{|\det q|}$. Substituting these identities in
$\nabla_A\epsilon_{BC}=\partial_A\epsilon_{BC}
-\Gamma^D{}_{AB}\epsilon_{DC}-\Gamma^D{}_{AC}\epsilon_{BD}$ gives
$\nabla^q\epsilon_2=0$; the only independent component is $BC=01$, for which
the connection terms sum to $\Gamma^C{}_{AC}\epsilon_{01}$ and cancel the
partial derivative. [F1, F2, F5, A1, given, algebra]

2.1 At any point choose a $q$-orthonormal basis $(e_0,e_1)$ with
$q(e_0,e_0)=-1$ and $q(e_1,e_1)=1$. In the product four-manifold the
algebraic symmetries [F4] and antisymmetry in each pair force every base
component of $R_{ABCD}$ to vanish unless both pairs are $(0,1)$ up to order.
Write $K:=R_{0101}$. Pair exchange and the two antisymmetries give
$R_{1010}=K$ and all components with repeated entries in either pair vanish.
Using [F3], $\operatorname{Ric}_{00}=q^{11}R_{1010}=K$,
$\operatorname{Ric}_{11}=q^{00}R_{0101}=-K$, and
$\operatorname{Ric}_{01}=\operatorname{Ric}_{10}=0$. Hence
$\operatorname{Ric}(q)=-Kq$ and $S_q=-2K$, so
$\operatorname{Ric}(q)=\tfrac12S_q q$. The point was arbitrary; together
with step 1.1 this proves both identities. [F3, F4, step 1.1, algebra] ∎

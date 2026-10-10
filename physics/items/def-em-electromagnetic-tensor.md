---
id: def-em-electromagnetic-tensor
kind: definition
title: "The electromagnetic two-form, its observer decomposition and the four-current"
status: draft
origin: session
domain: physics
deps: [def-ck-tensor-field-on-minkowski-space, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-inertial-frame-and-inertial-chart, def-oriented-minkowski-volume-form, def-sr-affine-minkowski-model, lem-em-antisymmetric-tensor-contraction, thm-sr-antisymmetric-observer-decomposition, lem-sr-compact-variation-and-fundamental-lemma, thm-clairaut-schwarz-mixed-partials, def-divergence-and-curl-of-a-c1-vector-field]
dependency_roles:
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  thm-sr-antisymmetric-observer-decomposition: mathematical-premise
  lem-sr-compact-variation-and-fundamental-lemma: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The electromagnetic two-form of the classical framework, defined by its components in a named inertial chart from the electric and magnetic fields, with its observer decomposition, invariants, potential representation when a potential exists and the raised-index operator coupling to the four-current. The definition assumes no global potential, no constitutive law and no field equation; it is a model construction, not a measurement."
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§23 printed pp. 60-62 (eq. (23.3)-(23.4): F_ik = dA_k/dx^i - dA_i/dx^k, the field tensor and the four-dimensional equation of motion) and §26 printed pp. 66-67 (the first pair in terms of F), read in the stamped 387-page full text; the library's index and sign conventions are the SI (-+++) conventions of the framework, matched by the explicit component dictionary"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§7.3.3 printed pp. 325-327 (the Maxwell equations in SI and the psuedovector character of B) and §12.3.1 printed pp. 527-531 (the field tensor and its components in terms of E and B), read in the stamped scanned full text"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.3.1-§5.3.2, printed pp. 105-108 (PDF pp. 113-116), especially (5.15)-(5.16): potential and electromagnetic tensor. Tong uses (+---), A_lower=(phi/c,-A) and the negative of the present covariant tensor; both sign and metric conventions are converted explicitly here."
---

## Definition

Let the laboratory region, its inertial chart and the fields and sources be those
of [[def-em-lab-geometry]], [[def-em-fields]] and [[def-em-sources]], with the
units of [[def-em-si-conventions]]; fix the ordered basis
$(e_0,e_1,e_2,e_3)$ of the chart and the oriented volume form $\varepsilon$ of
[[def-oriented-minkowski-volume-form]], with $\varepsilon_{0123}=+1$ and
$\eta=\operatorname{diag}(-1,1,1,1)$.

(a) [Components] For a field pair $(E,B)$ of class $C^k$, $k\ge1$, define the
covariant components of the **electromagnetic two-form** $F$ in the chart by
$F_{00}=0$, $F_{0i}:=-E_i/c$, $F_{ij}:=\epsilon_{ijk}B_k$
($i,j,k\in\{1,2,3\}$) and $F_{ab}:=-F_{ba}$, the index-raised components being
$F^{0i}=E_i/c$, $F^{i0}=-E_i/c$ and $F^{ij}=\epsilon_{ijk}B_k$. Here
$\epsilon_{ijk}$ is the spatial permutation symbol of
[[def-oriented-minkowski-volume-form]]. Then $F$ is a $C^k$ type-$(0,2)$
tensor field on $U$ in the sense of
[[def-ck-tensor-field-on-minkowski-space]], alternating at every event, and the
components above are exactly its component functions: at $p\in U$ the tensor
$F(p)$ is the bilinear form $F(p)(u,w)=F_{ab}(p)u^aw^b$ on $V$ in the
coordinates $u^a,w^b$ of $u,w$ in $(e_0,e_1,e_2,e_3)$. Indeed each $F_{ab}$ is
a finite sum of products of the $C^k$ functions $E_i,B_k$ of the chart
coordinates with the constants $c,\epsilon_{ijk}$, hence a $C^k$ function of
$x(p)$, and the component criterion of
[[def-ck-tensor-field-on-minkowski-space]] applies.

(b) [Observer decomposition] Let $n:=e_0$ be the future unit timelike vector of
the chart and let $e_a:=F_{ab}n^b$, $b_a:=(*F)_{ab}n^b$ be the observer
components of [[thm-sr-antisymmetric-observer-decomposition]]; then
$e_i=+E_i/c$, $b_i=-B_i$ and $e_0=b_0=0$, and the invariants and square wedge
of that theorem read

$$\tfrac12F_{ab}F^{ab}=|B|^2-|E|^2/c^2,\qquad F_{ab}(*F)^{ab}=+4\,(E\cdot B)/c,\qquad F\wedge F=-2\,(E\cdot B)\,\varepsilon/c,$$

where $|\cdot|$ and $\cdot$ are the spatial Euclidean structure of the frame.
(For the same pair $(E,B)$, that theorem's optional clause (d) uses
$F_{\rm optional}^{i0}=E_i/c$ and $F_{\rm optional}^{ij}=-\epsilon_{ijk}B_k$, so
$F_{\rm optional}=-F$ in all six components, not only the magnetic block. This
framework fixes clause (a) and uses the theorem's general algebra; its optional
SI dictionary must be converted by negating the entire tensor.)

(c) [Potentials when they exist] If $\varphi$ and $A$ are $C^1$ with
$E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$, and
$A^\mu:=(\varphi/c,A)$, $A_\mu:=\eta_{\mu\nu}A^\nu$, then
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$; conversely, if a $C^1$
covector field $A_\mu$ on $U$ satisfies $F_{\mu\nu}=\partial_\mu A_\nu
-\partial_\nu A_\mu$, then $E,B$ recovered from $F$ by clause (a) obey
$E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ with
$\varphi:=-cA_0$ and the spatial potential vector $A:=(A_1,A_2,A_3)$. Here
$\nabla$ and $\operatorname{curl}$ are those of
[[def-divergence-and-curl-of-a-c1-vector-field]] in the spatial coordinates,
and the spatial cross-product conventions of [[def-cross-product-in-r3]] are
used. The definition does not assert that every field pair admits such a
potential; where a $C^1$ potential represents the $C^1$-or-better field of
clause (a), the field is closed in the explicit sense
$\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}
+\partial_\nu F_{\lambda\mu}=0$. This conclusion does not require second
classical derivatives of the potential: put
$H_{\lambda\mu\nu}:=\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}
+\partial_\nu F_{\lambda\mu}$, which is continuous because $F$ is $C^1$; for
every smooth compactly supported test $\psi$, substituting $F=dA$ and
integrating by parts twice, moving the derivatives first onto $\psi$
([[lem-sr-compact-variation-and-fundamental-lemma]] (b)) and then off the
potential factors after commuting only the smooth test derivatives
([[thm-clairaut-schwarz-mixed-partials]]), gives $\int H\psi=0$; the
fundamental lemma (a) of [[lem-sr-compact-variation-and-fundamental-lemma]]
then gives $H=0$. The framework's potential theorems establish existence only
under their stated hypotheses; [[def-directional-and-partial-derivatives]]
supplies the coordinate derivatives $\partial_\mu$ used throughout.

(d) [Four-current and index-raising operator] With the adopted four-current
$j=(c\rho,J)$ of [[def-em-sources]], the raised-index operator $\Phi$ of
[[lem-em-antisymmetric-tensor-contraction]], defined pointwise on $V$ by
$\eta(\Phi(u),w)=F(w,u)$, satisfies
$\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$; the components of $F$
carry the tesla (T), those of $j$ carry A m$^{-2}$, and those of a
four-potential $A^\mu$ carry T m.

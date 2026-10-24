---
id: def-qftx-susy-background-data
kind: definition
title: Rigid supersymmetric background and localization data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds
deps:
  - def-countable-choice
  - def-smooth-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-frame-bundle-of-a-smooth-manifold
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-smooth-principal-g-bundle
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-principal-connection-and-vertical-curvature
  - def-qftx-associated-covariant-derivative
  - thm-associated-vector-bundle-is-well-defined
  - thm-qftx-complex-associated-bundle-realification
  - thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-frame-bundle-of-a-smooth-manifold: mathematical-premise
  def-oriented-real-vector-bundle-and-oriented-frame-bundle: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-principal-connection-and-vertical-curvature: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  thm-associated-vector-bundle-is-well-defined: mathematical-premise
  thm-qftx-complex-associated-bundle-realification: mathematical-premise
  thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle: mathematical-premise
dependency_level: 2
axiom_base: "ZF + AC_omega, through the imported tangent-frame-bundle definition."
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Guido Festuccia and Nathan Seiberg, Rigid Supersymmetric Theories in
        Curved Superspace"
      url: "https://arxiv.org/pdf/1105.0689"
      locator: "§2, equations (2.9)–(2.11): the rigid limit, fixed supergravity
        backgrounds, and the gravitino/Killing-spinor equations; §4, equation
        (4.1), for the distinct N=1 S4 reality qualification."
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and
        Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "§2, equations (2.5)–(2.14), (2.26)–(2.30); §4.1–§4.3, equations
        (4.1)–(4.15)."
    - title: "Vasilis Peelaers, 4d N=2 Localization lecture notes"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-Lec\
        tureNotes.pdf"
      locator: "§1.1, equations (19)–(23), and §1.2, equations (24)–(26), PDF pp. 3–4."
physical_scope: "Euclidean four-dimensional rigid-supersymmetry and localization
  data. This is a definition of supplied inputs; it asserts no existence on an
  arbitrary manifold of a spin structure, Killing spinor, functional measure,
  regulator-removal limit, or continuum localization theorem."
verification:
  precheck: pending
---

## Definition

Use natural units $c=\hbar=1$. Let $M$ be a nonempty Hausdorff second-countable smooth four-manifold without boundary, let $g$ be a smooth positive-definite metric on $TM$, and choose an orientation $o$. Coordinates $x^\mu$ have units of length, the metric components in length coordinates are dimensionless, and the scalar curvature has units of inverse length squared. A concrete background may instead have a boundary, but then its boundary conditions and the vanishing or treatment of every boundary term are additional data.

Write $SO(4)=\{R\in M_4(\mathbb R):R^{\mathsf T}R=I,\ \det R=1\}$. For $x\in M$, an oriented $g$-orthonormal frame is an orientation-preserving linear isometry $e:\mathbb R^4\to T_xM$. The oriented orthonormal frame bundle $F_g^+(M)$ is the set of these frames, with projection to $M$ and right action $e\cdot R=e\circ R$. Its smooth principal $SO(4)$-bundle structure is part of the supplied geometry. A Euclidean spin structure is a smooth right principal $\operatorname{Spin}(4)$-bundle $\widetilde F\to M$ and a smooth equivariant map $\lambda:\widetilde F\to F_g^+(M)$ whose restriction to every fibre is a two-sheeted cover. Use $\operatorname{Spin}(4)=SU(2)_+\times SU(2)_-$, where $SU(2)=\left\{\begin{pmatrix}z&w\\-\bar w&\bar z\end{pmatrix}:z,w\in\mathbb C,\ |z|^2+|w|^2=1\right\}$ and the two factors act by their defining matrix representations on $\mathbb C^2$. Identify each factor with the unit quaternions by $\begin{pmatrix}z&w\\-\bar w&\bar z\end{pmatrix}\leftrightarrow z+w\mathbf j$, with $\mathbf j^2=-1$ and $\mathbf j z=\bar z\mathbf j$; write $\mathbb H=\operatorname{span}_{\mathbb R}\{1,i,\mathbf j,i\mathbf j\}\cong\mathbb R^4$. The fixed standard double-covering homomorphism $\rho:\operatorname{Spin}(4)\to SO(4)$ is $\rho(u_+,u_-)q=u_+qu_-^{-1}$; it is surjective with kernel $\{(1,1),(-1,-1)\}$. The chiral spinor bundles are the associated bundles $S_\pm=\widetilde F\times_{\pi_\pm}\mathbb C^2$, where $\pi_\pm$ are the defining representations of the two $SU(2)$ factors and the quotient convention is $(ps,z)\sim(p,\pi_\pm(s)z)$. Equip each real associated bundle with the complex structure $[p,z]\mapsto[p,iz]$, so $S_\pm$ has complex rank two. A spin connection is a principal connection on $\widetilde F$ projecting to the Levi-Civita connection of $g$; it induces covariant derivatives on $S_\pm$. A spin structure and its connection are supplied data, not conclusions that follow from the metric.

An R-symmetry background consists of a specified finite-dimensional Lie group $K_R$, a smooth right principal $K_R$-bundle $P_R\to M$, a principal connection $A_R$, and a declared smooth representation of $K_R$ on each field bundle. Gauge data consist of a specified compact Lie group $G$, a smooth right principal $G$-bundle $P_G\to M$, its gauge group of smooth bundle automorphisms over $\operatorname{id}_M$, and a principal connection $A$. Matter and auxiliary fields are smooth sections of explicitly declared vector bundles associated to $\widetilde F$, $P_R$, and $P_G$; bosonic and fermionic fields are assigned even and odd parity, respectively. The curvature, global form of $G$, representations, bundle sectors, and reality contours are part of the model data.

For a spinor that carries an R-symmetry representation, let $U$ be a finite-dimensional complex vector space and declare its smooth representation $\varrho:K_R\to\mathrm{GL}_{\mathbb C}(U)$ and its chiral spin representation $\pi_\pm:\operatorname{Spin}(4)\to\mathrm{GL}_{\mathbb C}(\mathbb C^2)$. The smooth product principal $(\operatorname{Spin}(4)\times K_R)$-bundle $\widetilde F\times_M P_R$ has right action $(\widetilde p,p_R)\cdot(s,k)=(\widetilde p s,p_Rk)$; its local charts are products of the spin and R charts, and its product connection is the pair of the supplied principal connections. Use the product representation $(s,k)\mapsto\pi_\pm(s)\otimes\varrho(k)$; the associated spinor/R bundle uses the quotient convention $[(\widetilde p s,p_Rk),z]=[(\widetilde p,p_R),(\pi_\pm(s)\otimes\varrho(k))z]$. In simultaneous local sections $(\widetilde s_i,r_i)$, let $A_i^S=\widetilde s_i^*\omega^S$ and $A_i^R=r_i^*A_R$ be the local forms of the supplied spin and R connections. The associated-covariant-derivative definition gives, for a section with local component $\epsilon_i:U_i\to\mathbb C^2\otimes U$,
$$\nabla_\mu\epsilon_i=\partial_\mu\epsilon_i+\left((d\pi_\pm)_e(A^S_{i,\mu})\otimes I_U+I_{\mathbb C^2}\otimes(d\varrho)_e(A^R_{i,\mu})\right)\epsilon_i.$$
The displayed sum is the differential of the product representation, since differentiating $\pi_\pm(\exp(tX))\otimes\varrho(\exp(tY))$ at $t=0$ gives $(d\pi_\pm)_e(X)\otimes I_U+I_{\mathbb C^2}\otimes(d\varrho)_e(Y)$. Here each differential is taken at the identity of its group. This is the local expression of the connection induced by the product principal connection and representation; for an R-neutral spinor, $\varrho$ is the trivial representation. The mathematical supplier states this formula for a smooth finite-dimensional complex representation of a finite-dimensional Lie group and proves the local expressions patch; the current associated-covariant-derivative supplier is draft and its proof has not yet received independent acceptance. In $\mathscr K(\nabla^S,A_R,\mathcal B)(\epsilon)$, $\nabla^S$ and $A_R$ therefore act with these declared representations and conventions, not by an unspecified ordinary derivative.

A rigid supersymmetric background datum is a fixed Riemannian metric, spin structure and spin connection, R-symmetry background, supergravity auxiliary background fields, and a nonzero smooth spinor section $\epsilon$ in a declared spinor/R-symmetry representation. It also supplies the exact first-order linear system $\mathscr K(\nabla^S,A_R,\mathcal B)(\epsilon)=0$ imposed on $\epsilon$, where $\mathcal B$ denotes the named auxiliary background fields and $\mathscr K$ is the operator obtained by setting the chosen supergravity fermion variation to zero. The equation, its signature, gamma-matrix convention, spinor reality conditions, and boundary conditions must be specified separately for each model; no universal Killing-spinor equation or existence statement is built into this definition. “Rigid” means the metric and supergravity fields are fixed external data and are not integrated over.

An off-shell multiplet is a specified $\mathbb Z_2$-graded collection of bosonic, fermionic, and auxiliary fields together with an odd transformation $Q$ on all of them. An isometry is a diffeomorphism preserving $g$ and $o$; its action on associated bundles must also be supplied. A flavor transformation is the action of a separately named global internal group on the declared field representations. The multiplet closes off shell when $Q^2$ equals an explicitly declared combination of lifted spacetime isometries, gauge transformations, R-symmetry transformations, and flavor transformations on every field, without using Euler–Lagrange equations. A localization package additionally specifies its field configuration space $\mathcal F$, action $S$, gauge group $\mathcal G$, a gauge-fixing slice (a locally transverse condition on gauge orbits), the associated Faddeev–Popov operator and determinant, and a ghost complex (graded ghost, antighost, and multiplier fields with an odd BRST differential). A Faddeev–Popov zero mode is a vector in the kernel of the specified gauge-fixing operator; stabilizer modes are infinitesimal gauge transformations that fix the chosen connection. The package also specifies its integration contour $\mathcal C$, boundary conditions, and either an actual measure or a regulator map from field configurations to regulated spaces $\mathcal F_\Lambda$ with measures $\mu_\Lambda$. If a measure is only written formally as $[D\Phi]$, this notation is not a constructed measure. Applying a $Q$-exact deformation $S_t=S+tQV$ further requires an explicit assumption or proof of $Q$-invariance of the regulated measure and contour, absence or treatment of anomalies, justified differentiation under the integral, and vanishing or controlled boundary terms. This definition supplies no such proof.

For a four-dimensional gauge model in these units, $g_{\mathrm{YM}}$ is dimensionless, $[A_\mu]=[\Phi]=\mathrm{length}^{-1}$, $[F_{\mu\nu}]=\mathrm{length}^{-2}$, and a fermion field has mass dimension $3/2$; the supercharge has mass dimension $1/2$ and its spinor parameter has mass dimension $-1/2$. Every additional mass, radius, equivariant parameter, and suppressed constant must be assigned dimensions in the concrete item. No metric is asserted to admit this data, and finite-dimensional equivariant identities alone do not construct a continuum field-space measure.

## Definition references

[Festuccia and Seiberg, §2 and §4](https://arxiv.org/pdf/1105.0689)

[Pestun, §§2 and 4.1–4.3](https://arxiv.org/pdf/0712.2824)

[Peelaers, §1](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

[[def-smooth-manifold]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-frame-bundle-of-a-smooth-manifold]]

[[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]

[[def-countable-choice]]

[[def-smooth-principal-g-bundle]]

[[def-principal-g-bundle-and-associated-fiber-bundle]]

[[def-principal-connection-and-vertical-curvature]]

[[def-qftx-associated-covariant-derivative|Associated covariant derivative and local representation formula]]

[[thm-associated-vector-bundle-is-well-defined]]

[[thm-qftx-complex-associated-bundle-realification]]

[[thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle]]


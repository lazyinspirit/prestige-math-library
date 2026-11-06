---
id: def-cft-r5-compact-wzw-model
kind: definition
title: Compact Wess–Zumino–Witten model and its left-right completion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-positive-energy-affine-module
  - def-sugawara-modes
  - def-untwisted-affine-central-extension
  - def-dual-coxeter-number-for-normalized-form
  - lem-cft-r5-restricted-affine-current-fields-are-local
  - lem-cft-r5-wzw-extension-phase-independent-at-integral-level
  - thm-universal-affine-vertex-algebra
  - thm-sugawara-modes-satisfy-virasoro
  - def-qftx-wzw-conformal-block-interface
  - def-vertex-algebra-module
  - def-residue-two-cocycle-on-a-loop-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-positive-energy-affine-module: mathematical-premise
  def-sugawara-modes: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  lem-cft-r5-restricted-affine-current-fields-are-local: mathematical-premise
  lem-cft-r5-wzw-extension-phase-independent-at-integral-level: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  def-qftx-wzw-conformal-block-interface: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-residue-two-cocycle-on-a-loop-algebra: mathematical-premise
  def-compact-real-form-of-a-complex-semisimple-lie-algebra: mathematical-premise
justified_by: []
physical_scope: Idealized two-dimensional Euclidean sigma-model and full local state-space/OPE data for a compact, connected, simply connected simple target group at positive integral level; no physical realization or nonperturbative path-integral construction is asserted. Wess–Zumino phases use supplied admissible fixed-end extension families with compact comparison data and integral compact periods; arbitrary absolutely integrable noncompact extensions are not all declared admissible.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§9.1, printed pp. 136–138: affine current OPE and mode conventions; §9.5, printed pp. 152–155: the algebraic coset interface."
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§2.1–2.2, printed pp. 2–6: kinetic and Wess–Zumino normalizations, extension ambiguity and chiral currents; §§3.1–3.4, printed pp. 7–14: current algebra and Sugawara normalization."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use a connected oriented smooth Riemann surface $\Sigma$ with dimensionless local coordinate $z=x+iy$, as in the chosen full local CFT data package. For the action data choose a smooth dimensionless Riemannian metric $h$ in that conformal class and a smooth field $g:\Sigma\to G$, where $G$ is a finite-dimensional smooth Lie group: multiplication and inversion are smooth, $G$ is compact, connected and simply connected, and its real Lie algebra $\mathfrak g_{\mathbb R}=T_eG$ is a compact real form of the nonabelian simple complex Lie algebra $\mathfrak g=\mathfrak g_{\mathbb R}\otimes_{\mathbb R}\mathbb C$. The Lie bracket on $T_eG$ is the bracket of the corresponding left-invariant vector fields. Compactness and simple connectivity here are topological properties of the group manifold. Include only fields for which the nonnegative kinetic integrand has finite integral; this is automatic for smooth fields on a closed compact worldsheet.

Let $B_0$ be the normalized invariant complex-bilinear form on $\mathfrak g$ used in def-residue-two-cocycle-on-a-loop-algebra and def-untwisted-affine-central-extension; its long roots have squared length $2$. Its restriction to the compact real form $\mathfrak g_{\mathbb R}$ is real, negative-definite by def-compact-real-form-of-a-complex-semisimple-lie-algebra, and invariant, with $B_0([x,y],z)=B_0(x,[y,z])$. Define the positive-definite real form $Q_0=-B_0|_{\mathfrak g_{\mathbb R}}$ for the kinetic metric. Let $C_{B_0}$ be the adjoint Casimir for $B_0$ and write $C_{B_0}=\gamma_{B_0}I_{\mathfrak g}$; the dual Coxeter number is $h^\vee=\gamma_{B_0}/2$, following def-dual-coxeter-number-for-normalized-form. The basic complex form $B_0$ is used for the affine current modes and Sugawara coefficient; the positive real form $Q_0$ is used in the Euclidean kinetic action.

Write $\vartheta_L$ for the left Maurer–Cartan form on $G$, defined at $g_0\in G$ by $(\vartheta_L)_{g_0}(v)=d(L_{g_0^{-1}})_{g_0}v$. For a smooth field $g$, put $J_\mu=(g^*\vartheta_L)(\partial_\mu)$, where $\partial_\mu$ is a coordinate tangent vector on $\Sigma$. At positive integer level $k$, the Euclidean kinetic action is
$$S_{\mathrm{kin}}[g;h]=\frac{k}{8\pi}\int_\Sigma d\mathrm{vol}_h\,h^{\mu\nu}Q_0(J_\mu,J_\nu).$$
Here $k$, $g$, and the worldsheet coordinates are dimensionless, and $\hbar=1$, so $S_{\mathrm{kin}}$ is dimensionless.

For each smooth field $g:\Sigma\to G$, let $\widetilde E_g$ be the set of quadruples $(B,\jmath,c_B,\widetilde g)$ where $B$ is an oriented smooth three-manifold, possibly noncompact, $\jmath:\Sigma\to\partial B$ is an orientation-preserving diffeomorphism, and $c_B:\partial B\times[0,\epsilon)\hookrightarrow B$ is a smooth boundary collar for some $\epsilon>0$. A boundary collar is a smooth embedding with $c_B(p,0)=p$ and image a neighborhood of $\partial B$. Require $\widetilde g\in C^\infty(B,G)$ to satisfy $\widetilde g\circ\jmath=g$ and $\widetilde g(c_B(\jmath(s),t))=g(s)$ for every $s\in\Sigma$ and $0\le t<\epsilon$.

Define the real Cartan three-form $H_{B_0}$ by its values on left-invariant vector fields: for $X,Y,Z\in\mathfrak g_{\mathbb R}$, $(H_{B_0})_e(X^L,Y^L,Z^L)=B_0(X,[Y,Z])$. Invariance of $B_0$ makes this alternating; the Maurer–Cartan equation and the Jacobi identity make it closed, and invariance under the adjoint action makes it bi-invariant. The Wess–Zumino three-form is $\eta_G=\lambda_G H_{B_0}$ for a scalar $\lambda_G\in i\mathbb R$. Let $I_g\subseteq\widetilde E_g$ consist of the extensions for which $\widetilde g^{\,*}\eta_G$ is absolutely integrable, meaning its associated absolute density has finite integral. The model supplies a nonempty **admissible extension family** $E_g\subseteq I_g$ for every included field $g$. Membership in $E_g$ is additional Wess–Zumino data; it is not defined by absolute integrability alone. For $e=(B,\jmath,c_B,\widetilde g)\in E_g$, put $\Gamma_g(e)=\int_B\widetilde g^{\,*}\eta_G$.

Specify the family's boundary collars and, for noncompact extensions, fixed end data and identifications under which the admissible extensions agree on those ends. For each pair $e_0,e_1\in E_g$, supply compact comparison data: finitely many compact boundaryless oriented smooth three-manifolds $N_a$, smooth maps $u_a:N_a\to G$, and integers $n_a$, with the comparison identity
$$\Gamma_g(e_1)-\Gamma_g(e_0)=\sum_a n_a\int_{N_a}u_a^*\eta_G.$$
The comparison is obtained by gluing along the common boundary and cancelling the identified matching ends; the displayed equality is part of the required comparison data. For compact extensions the ordinary collar gluing gives a compact closed comparison directly. A boundaryless noncompact component with a new unmatched end is not automatically admissible. Neither end cancellation nor the comparison identity follows from finite absolute integral alone.

Choose $\lambda_G$ and these data with the integral-period normalization $\int_Nu^*\eta_G\in2\pi i\mathbb Z$ for every compact boundaryless oriented smooth three-manifold $N$ and smooth map $u:N\to G$. Require an actual admissible pair for some included field to have difference exactly $2\pi i$. Consequently every difference within each supplied $E_g$ is in $2\pi i\mathbb Z$. The integral normalization, nonempty admissible families, fixed ends and primitive witness are requirements on the chosen model data, not a theorem that arbitrary finite-action fields or all absolutely integrable noncompact extensions have such data.

For each allowed smooth field choose a $U(1)$-valued phase $\chi_k(g)$ and, for every admissible extension $e=(B,\jmath,c_B,\widetilde g)$, require
$$\chi_k(g)=\exp\!\left(-k\int_B\widetilde g^{\,*}\eta_G\right).$$
The boundary orientation is the one induced from $B$. Since $\eta_G$ is imaginary-valued, $\chi_k(g)$ lies in $U(1)$ for real $k$. By the extension-phase lemma, the displayed phase is independent of the chosen extension exactly for integral $k$. The compact model selects $k\in\mathbb Z_{>0}$. The Euclidean weight is $e^{-S_{\mathrm{kin}}[g;h]}\chi_k(g)$; this notation specifies no measure on the space of fields.

Define the right Maurer–Cartan form by $(\vartheta_R)_{g_0}(v)=d(R_{g_0^{-1}})_{g_0}v$, where $R_a(g)=ga$, and retain the left Maurer–Cartan form $\vartheta_L$ defined above. Extend these one-forms complex-linearly when evaluating on complex tangent vectors. For $z=x+iy$, put $\partial=\tfrac12(\partial_x-i\partial_y)$ and $\bar\partial=\tfrac12(\partial_x+i\partial_y)$. The classical left and right action-current observables on the field space $C^\infty(\Sigma,G)$ are the $\mathfrak g$-valued maps
$$j_L[g](z)=-k(g^*\vartheta_R)(\partial),\qquad j_R[g](\bar z)=k(g^*\vartheta_L)(\bar\partial).$$
For $x\in\mathfrak g$, their components are the functions $\mathcal J_L^x[g](z)=B_0(x,j_L[g](z))$ and $\mathcal J_R^x[g](\bar z)=B_0(x,j_R[g](\bar z))$, using the complex-bilinear extension of $B_0$. In a matrix realization these reproduce $-k\,\partial g\,g^{-1}$ and $k\,g^{-1}\bar\partial g$, respectively.

Choose a full local two-dimensional CFT data package exactly as in def-cft-r5-full-local-cft-data, and denote its state space, common dense invariant domain, field-label space, state-field map, local fields, and Virasoro modes by $\mathcal H$, $\mathcal D$, $\mathcal F$, $\sigma$, $Y$, and $L_n^{\mathrm{loc}},\bar L_n^{\mathrm{loc}}$. As additional model data, choose linear assignments $Q_L,Q_R$ from the spans of $\{\mathcal J_L^x:x\in\mathfrak g\}$ and $\{\mathcal J_R^x:x\in\mathfrak g\}$ to labels $a_L^x,a_R^x\in\mathcal F$, linear in $x$, with $Q_L(\mathcal J_L^x)=a_L^x$ and $Q_R(\mathcal J_R^x)=a_R^x$. These assignments identify the classical current components with the corresponding quantum local fields. On $\mathcal D$, the local-field distributions and their radial mode expansions must be
$$Y(a_L^x;z,\bar z)=J^x(z)=\sum_{n\in\mathbb Z}J^x_nz^{-n-1},\qquad Y(a_R^x;z,\bar z)=\bar J^x(\bar z)=\sum_{n\in\mathbb Z}\bar J^x_n\bar z^{-n-1}.$$
The expansions have the weak distributional and radial-domain meaning required by the chosen full-local package. The correspondence from the classical current components to these local fields is adopted model data; it is not derived from a formal path integral.

In the Lie-algebra-valued affine convention, the specified current modes satisfy
$$[J^x_m,J^y_n]=J^{[x,y]}_{m+n}+mkB_0(x,y)\delta_{m+n,0}I,$$
and the antiholomorphic modes satisfy the same bracket. On the common invariant domain the left and right current modes commute, $[J^x_m,\bar J^y_n]=0$ for every $x,y\in\mathfrak g$ and $m,n\in\mathbb Z$. Use the central-generator convention $K_{\mathrm{aff}}=iK$ of the stated WZW/KZ interface, with $K_{\mathrm{aff}}$ acting as $kI$; this is the convention that identifies the compact-current cocycle with the normalized untwisted affine bracket. The corresponding formal current fields are $J^x(z)=\sum_{n\in\mathbb Z}J^x_nz^{-n-1}$ and $\bar J^x(\bar z)=\sum_{n\in\mathbb Z}\bar J^x_n\bar z^{-n-1}$; their singular OPE is $J^x(z)J^y(w)\sim kB_0(x,y)I/(z-w)^2+J^{[x,y]}(w)/(z-w)$, with the analogous barred OPE. The record includes an identification of these affine fields with the displayed action-current expressions as model data. It does not derive the quantum OPE from a formal path integral.

Choose restricted affine-current modules of level $k$ for the left and right copies on the common invariant dense domain $\mathcal D$. In addition, supply ordinary module structures for the universal affine vertex algebra of thm-universal-affine-vertex-algebra on each left and right sector used in the state-space pairing below, in the sense of def-vertex-algebra-module. The current-generator fields of these modules must coincide with the local fields $Y(a_L^x;z,\bar z)$ and $Y(a_R^x;z,\bar z)$ under the assignments above, and their mode actions on $\mathcal D$ must be exactly $J_n^x$ and $\bar J_n^x$. Thus the module, local-field, and current-mode data are required to agree; the algebraic current bracket alone does not assert that compatibility.

For each $B_0$-orthonormal basis $(e_a)$, the Sugawara modes are
$$L_n=\frac{1}{2(k+h^\vee)}\sum_{a,r}:J_{e_a}(r)J_{e_a}(n-r):,$$
where the normal-ordering split is $r<0$ versus $r\ge0$; define $\bar L_n$ from the barred modes in the same way. Since $k>0$ and $h^\vee>0$, the denominator is nonzero. On each restricted module the Sugawara theorem gives Virasoro central charge $c=k\dim\mathfrak g/(k+h^\vee)$. This algebraic consequence does not establish unitarity, integrability, or a left-right local theory.

The Virasoro modes $L_n^{\mathrm{loc}},\bar L_n^{\mathrm{loc}}$ in the chosen full-local package are required to be exactly these Sugawara modes on $\mathcal D$:
$$L_n^{\mathrm{loc}}=L_n,\qquad \bar L_n^{\mathrm{loc}}=\bar L_n\quad(n\in\mathbb Z).$$
In particular both package central charges equal $k\dim\mathfrak g/(k+h^\vee)$. The Sugawara theorem proves the mode relations under restrictedness and noncriticality; this equality with the selected full-local Virasoro actions is separate model data.

Specify the full state-space pairing as data. In the discrete case, give an index set $\Lambda$ of actual left and right restricted affine modules $M^L_\lambda,M^R_\mu$, the nonnegative integer multiplicities $N_{\lambda\mu}$, the unique vacuum pair with multiplicity one, the common domain, and the topology/completion in
$$\mathcal H=\widehat{\bigoplus}_{\lambda,\mu\in\Lambda}\left(\mathbb C^{N_{\lambda\mu}}\otimes M^L_\lambda\otimes\overline{M^R_\mu}\right).$$
If a different summation type is used, specify it completely. If integrability, unitarity, reflection positivity, rationality, or a particular modular invariant is claimed, supply its exact module/category and positivity data; none follows merely from compact $G$ or positive integer $k$. The selected $\mathcal H$, vacuum, local fields, convergent radial OPE domains, locality and crossed-channel equalities must satisfy the full local state-space/OPE package. Higher-genus sewing and factorization are separate data or theorems.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-positive-energy-affine-module]]

[[def-sugawara-modes]]

[[def-untwisted-affine-central-extension]]

[[def-residue-two-cocycle-on-a-loop-algebra]]

[[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]

[[def-dual-coxeter-number-for-normalized-form]]

[[lem-cft-r5-restricted-affine-current-fields-are-local]]

[[lem-cft-r5-wzw-extension-phase-independent-at-integral-level]]

[[thm-universal-affine-vertex-algebra]]

[[def-vertex-algebra-module]]

[[thm-sugawara-modes-satisfy-virasoro]]

[[def-qftx-wzw-conformal-block-interface]]

## Remarks

The Wess–Zumino phase, affine current module, and full left-right state-space/OPE data are explicit inputs of this model record. The action alone is not used to infer an affine vertex algebra, a state-space pairing, modular invariance, crossing, or a path-integral measure. The universal-affine theorem supplies only its stated chiral vertex-algebra structure, and the Sugawara theorem applies only to restricted modules at noncritical level. A KZ connection or a chiral current algebra does not by itself prove the existence of a full local WZW theory.

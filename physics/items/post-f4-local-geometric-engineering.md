---
id: post-f4-local-geometric-engineering
kind: postulate
title: "Local geometric engineering of gauge and matter sectors"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-sevenbrane-monodromy-and-codimension-one-gauge
  - def-dp-brane-worldvolume-fields
  - thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces
dependency_roles:
  post-f4-sevenbrane-monodromy-and-codimension-one-gauge: formulation-prerequisite
  def-dp-brane-worldvolume-fields: formulation-prerequisite
  thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces: formulation-prerequisite
physical_scope: "Adopted source-backed local F-theory dictionary for an explicitly specified local or noncompact base, elliptic geometry, singularity, and regime. The local gauge table is adopted separately from the projective transverse-surface classification, using supplied local fiber configurations and the algebraically realized function-field splitness tests. No projective completion is assumed. It makes no compact-vacuum, flux, tadpole, anomaly, moduli, or global gauge-group claim. The shared Dp field supplier is used only in its flat perturbative Type-II D7 patch scope."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Polchinski, Chaudhuri and Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.1, printed pp. 21–23 (PDF pp. 22–24), equations (3.4)–(3.11): massless NS vector, Ramond spinor and GSO chirality; used at the flat D7 scope of the declared worldvolume-field supplier."
    - title: "Sheldon Katz and Cumrun Vafa, Matter From Geometry, arXiv:hep-th/9606086v1"
      url: "https://arxiv.org/pdf/hep-th/9606086v1"
      locator: "§§1–2, printed pp. 1–3, local matter-from-enhancement examples; §5, p. 10, limitations on localization and non-exhaustiveness."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§4.1–4.3, printed pp. 22–31, especially Table 4.1, p. 24, and the local-fiber/monodromy distinction, pp. 25–27: adopted local gauge table. §§5.1–5.6, pp. 40–51, and §6.1, pp. 53–57: matter/Yukawa discussion and limitations."
    - title: "Sergio Cecotti, Clay Córdova, Jonathan J. Heckman and Cumrun Vafa, T-Branes and Monodromy, arXiv:1010.5780"
      url: "https://arxiv.org/pdf/1010.5780"
      locator: "§1, printed pp. 3–4, non-diagonalizable Higgs data; §2, pp. 6–7, twisted (2,0)-form and equations (2.1)–(2.3); §3.1.1, pp. 28–30, nilpotent example and adjoint commutator. Only these bounded passages were used for the local definition."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the following local geometric-engineering dictionary under the low-energy, large-radius assumptions stated for the chosen model. A **7-brane** is a Type-IIB object with seven spatial worldvolume directions and one time direction. In a four-dimensional compactification chart with smooth connected complex threefold base $B_3$, a D7-brane wraps a specified complex divisor $D\subset B_3$ (complex dimension two, hence four real internal directions) and fills the four noncompact spacetime directions; its worldvolume is locally $M^{3,1}\times D$. Here $M^{3,1}=\mathbb R^4$ is the local external Minkowski spacetime with smooth coordinates $(x^0,x^1,x^2,x^3)$ of length dimension, metric $-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$, standard orientation, and future direction $\partial_{x^0}$. This is the assumed local flat external-background approximation, not an assertion that the internal data construct a global Lorentzian vacuum.

The local gauge assignment is an additional physical adoption of the gauge table in the preceding codimension-one dictionary, with the following local inputs replacing its projective-slice requirement. Specify a holomorphic Weierstrass family with regular section over the chosen base neighbourhood: in a frame of a holomorphic line bundle $L$, its fibers are the projective cubics $y^2z=x^3+fxz^2+gz^3$, with $f$ and $g$ the local representatives of sections of $L^4$ and $L^6$, and section $[x:y:z]=[0:1:0]$. Require $\Delta=4f^3+27g^2$ not identically zero and take $D$ to be a smooth irreducible component of its zero divisor, after restricting to its smooth locus. At a general closed point $p\in D$, away from other discriminant components and enhancement loci, supply a holomorphic transverse disc $\jmath:\mathbb D\to B_3$, with $\jmath(0)=p$ and $d\jmath_0(T_0\mathbb D)\not\subset T_pD$. Here $\mathbb D=\{t\in\mathbb C:|t|<1\}$. Supply a smooth relatively minimal proper flat elliptic-surface model with section over this disc, birational over the disc to the pulled-back cubic family, together with its central fiber configuration $T$. Relative minimality means no fiber contains a smooth rational curve of self-intersection $-1$; the configurations $I_n$, II, III, IV, $I_n^*$, IV*, III*, II* mean exactly the component, intersection and multiplicity configurations defined in the Statement of the elliptic-surface classification cited below. The model and its asserted configuration must be checked in each application; their existence is not inferred here. The local short Weierstrass equation must be minimal, meaning its coefficients are not simultaneously divisible by $t^4$ and $t^6$.

For splitness retain exactly the preceding dictionary's algebraic-realization requirement, cover polynomials and factorization tests over $K=\mathbb C(D)$, using an identified algebraic model of the chosen divisor neighbourhood when the base is presented analytically. In particular, factorization over the residue field $\mathbb C$ at $p$ is insufficient. Given these local fiber and cover data, adopt the same complete table of complexified non-abelian Lie algebras and the same matrix/Serre definitions as in that dictionary; for example, split $I_n$ gives $\mathfrak{sl}_n(\mathbb C)$ for $n\ge2$, while non-split $I_n$ gives $\mathfrak{sp}_{\lfloor n/2\rfloor}(\mathbb C)$. Missing required data give no assignment. This local physical assumption is source-backed by Weigand's Table 4.1 and §§4.2–4.3; it does not invoke the projective elliptic-surface classification to establish local existence or classification. Neither the surface over $\mathbb D$ nor the base is required to have a projective completion. Applications invoking the preceding postulate's geometric theorem instead must satisfy all of that theorem's hypotheses. The assigned algebra describes the divisor sector before additional breaking by specified gauge or Higgs backgrounds, and determines neither a global gauge group nor normalizable four-dimensional modes on a noncompact divisor.

A **codimension-two enhancement curve** is a complex curve in $B_3$ where the singular-fiber data over $D$ enhance relative to their generic values. In the adopted local dictionary, specified matter representations of the divisor gauge algebra may be supported by localized modes on such curves. A **codimension-three enhancement point** is an isolated point in the complex threefold where enhancement curves or singularity data meet; such points may support cubic Yukawa interactions among modes whose representations admit a gauge-invariant trilinear. Here a Yukawa coupling means a cubic interaction in the four-dimensional effective action after reduction of the relevant modes. The chosen resolution, if one is used, is part of the local model input; no resolution is asserted to exist or to be unique. These statements are conditional on the actual local geometry, background, resolution choice, and mode content. A group-theoretically allowed invariant (a singlet in the tensor product of the three representations) does not prove a localized mode or a nonzero coupling at a point.

For a flat, perturbative Type-II D7 patch only, the leading massless open-string fields on a smooth flat worldvolume are the connection, two transverse scalars, and Ramond fermion $\Psi$ specified by the Dp-brane worldvolume-field definition cited below at $p=7$. In that definition, $\Psi$ is a smooth section of the trivial bundle with fiber the 16-real-dimensional chiral spinor module $S_{10}^{\chi}$ selected by the open-string GSO projection, with the free constraint $\Gamma^\alpha\partial_\alpha\Psi=0$ for tangent indices $\alpha=0,\ldots,7$; for coincident branes it also has the adjoint Chan–Paton transformation law defined there. This restricted open-string field content does not derive the generic curved or strongly coupled F-theory gauge algebra, matter representations, or Yukawa couplings. Other non-abelian gauge-background data may not be visible in a resolved fiber diagram alone. For the local topologically twisted seven-brane gauge-theory description, additionally specify a smooth Kähler patch $U\subset D$, a compact gauge group $G$, a principal $G$-bundle $P\to U$ with connection $A$, and the associated complex adjoint bundle $\operatorname{ad}P_{\mathbb C}$. The twisted Higgs background is a smooth section $\Phi\in\Omega^{2,0}(U,\operatorname{ad}P_{\mathbb C})$, equivalently a section of $K_U\otimes\operatorname{ad}P_{\mathbb C}$, independent of the external coordinates. In a holomorphic background $F_A^{0,2}=0$ and $\bar\partial_A\Phi=0$. A specified Hermitian metric (or compact real structure) defines $\Phi^\dagger$; locally $\Phi=\varphi\,dz^1\wedge dz^2$, and noncommutation means $[\varphi,\varphi^{\dagger}]\ne0$, equivalently the corresponding adjoint-valued $(2,2)$ bracket $[\Phi,\Phi^\dagger]$ is nonzero. This compares a field with its adjoint, not the automatically zero bracket of a matrix with itself. **T-brane data** retain the full non-abelian Higgs background, including loci where it cannot be conjugated into a Cartan subalgebra (a diagonal matrix in a matrix realization), rather than only its eigenvalues. For example, a nonzero nilpotent block $\varphi=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$ has $[\varphi,\varphi^\dagger]=\operatorname{diag}(1,-1)$ in the standard metric. In the convention of Cecotti–Córdova–Heckman–Vafa, an actual supersymmetric background must satisfy the metric-dependent D-term equation
$$
\omega\wedge F_A^{1,1}+\frac{i}{2}[\Phi^\dagger,\Phi]=0,
$$
where $\omega$ is the Kähler form on $U$ and $F_A^{1,1}$ is the $(1,1)$ curvature component of $A$; both terms are adjoint-valued $(2,2)$-forms. This equation supplements the two holomorphic equations above. The cited normalization is convention-dependent, and no existence or spectrum follows from the nilpotent matrix example.

The statement is local: every application must specify the local/noncompact base, fibration and singularity, resolution choice when one exists, and low-energy, source, flux, and backreaction assumptions. Global four-dimensional claims additionally require a compact completion and checks of gauge-group global form, flux quantization, tadpoles, anomalies, moduli stabilization, and omitted sectors. No local construction is asserted to admit such a completion.

## Postulate references

[[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]

[[def-dp-brane-worldvolume-fields]]

[[thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces]]

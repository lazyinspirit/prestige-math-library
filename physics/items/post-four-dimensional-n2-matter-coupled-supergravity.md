---
id: post-four-dimensional-n2-matter-coupled-supergravity
kind: postulate
title: Four-Dimensional $N=2$ Matter-Coupled Supergravity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - def-st-4d-n2-electric-frame-scalar-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-st-4d-n2-electric-frame-scalar-data: formulation-prerequisite
physical_scope: "Adopted local on-shell two-derivative four-dimensional N=2 matter-coupled supergravity in one regular electric frame; excludes tensor multiplets, dyonic embedding-tensor gaugings, higher derivatives, and any claim that a compactification realizes the chosen scalar geometry."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Andrianopoli et al., N=2 Supergravity and N=2 Super Yang-Mills Theory on General Scalar Manifolds: Symplectic Covariance, Gaugings and the Momentum Map"
      url: "https://arxiv.org/pdf/hep-th/9605032v1"
      locator: "§§4.1–4.3, 5.1, 7.3, 8, and 9; matter content, electric gauging, fermion shifts, and potential."
    - title: "L. Andrianopoli et al., General Matter Coupled N=2 Supergravity"
      url: "https://arxiv.org/pdf/hep-th/9603004v1"
      locator: "§5, equations (5.36)–(5.40), independent matter-coupled N=2 action and Ward-identity cross-check."
    - title: "L. Andrianopoli et al., Observations on BI from N=2 SUGRA and the General Ward Identity"
      url: "https://arxiv.org/pdf/1508.01474v2"
      locator: "§2, equations (2.22)–(2.36), general fermion shifts and the singlet/triplet Ward contraction; corrected gaugino-shift relative sign."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---
## Postulate

Adopt the two-derivative four-dimensional $N=2$ component framework with one gravity multiplet, $n_V$ vector multiplets whose scalar manifold is special Kähler, and $n_H$ hypermultiplets whose scalar manifold is quaternionic-Kähler; fix a selected electric frame and the local symplectic section $L^\Lambda$ and its covariant derivatives $f_i^\Lambda$. A gauging is specified by Killing vectors on both scalar factors and the corresponding moment maps; the action is the on-shell matter-coupled supergravity action in the source convention. This item does not cover tensor multiplets, dyonic embedding-tensor gaugings, or a universal off-shell action.

Use the source normalization $M_P=1$ and denote the gauge coupling by $g$. In the electric frame, $L^\Lambda$, $k_\Lambda^i,k_\Lambda^u$, and $P_\Lambda^x$ denote the electric section components, scalar Killing fields, and quaternionic triplet moment maps of the local scalar-data convention above. The adopted gauging-dependent fermion shifts are
$$S_{AB}=\frac{i}{2}(\sigma^x)_A{}^C\epsilon_{BC}P_\Lambda^xL^\Lambda,$$
$$W^{iAB}=\epsilon^{AB}k_\Lambda^i\overline{L^\Lambda}-i(\sigma^x)_C{}^B\epsilon^{CA}P_\Lambda^xg^{i\bar j}\bar f_{\bar j}^{\Lambda},\qquad N_\alpha{}^A=2\mathcal U^A{}_{u\alpha}k_\Lambda^u\overline{L^\Lambda}.$$
Here $A,B=1,2$ are $SU(2)$ indices, $\alpha$ is a hyperino-frame index, $\epsilon_{AB}$ is the antisymmetric $SU(2)$ invariant tensor with $\epsilon_{12}=+1$, and $\sigma^x$ are the Pauli matrices. The lowered hyperino frame is $\mathcal U^A{}_{u\alpha}=C_{\alpha\beta}\mathcal U_u^{A\beta}$ with conjugate $\overline{\mathcal U}^{\alpha}{}_{vB}=(\mathcal U^B{}_{v\alpha})^*$, using the scalar-data reality convention. The source raises and lowers $SU(2)$ indices by $v_A=\epsilon_{AB}v^B$ and $v^A=\epsilon^{BA}v_B$, with $\epsilon^{12}=\epsilon_{12}=+1$; its hyperino symplectic indices obey $v_\alpha=C_{\alpha\beta}v^\beta$ and $v^\alpha=C^{\beta\alpha}v_\beta$, with $C^{\alpha\beta}$ numerically the same canonical antisymmetric matrix as $C_{\alpha\beta}$. These are the index-order rules of source equation (2.27), footnote 3. Transformations contain $gS,gW,gN$. These are adopted source component conventions, not consequences of scalar geometry alone.

## Postulate references

[Andrianopoli et al., §§4–9](https://arxiv.org/pdf/hep-th/9605032v1)

[Andrianopoli et al., §5](https://arxiv.org/pdf/hep-th/9603004v1)

[Andrianopoli et al., §2](https://arxiv.org/pdf/1508.01474v2)

[[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]]

## Facts & Assumptions

**Given:** The local regular electric-frame scalar and gauging data of [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]], in four-dimensional Lorentzian Einstein frame, with the source normalization $M_P=1$, two derivatives, and the stated $N=2$ multiplet content.

[A1] [[def-supergravity-conventions-and-normalizations]] fixes four-dimensional Lorentzian Einstein frame, $\kappa_4^2=8\pi G_N=M_P^{-2}$, and the Einstein–Hilbert coefficient $M_P^2/2$. This item uses the source convention $M_P=1$.

[F1] [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]] defines $L^\Lambda$, $f_i^\Lambda$, $U^{\Lambda\Sigma}$, the real triplet moment maps, the electric polarization, and the $\lambda=-1$ quaternionic equivariance convention.

[A2] The displayed on-shell field content, shifts, kinetic normalizations, and local supersymmetry framework are adopted from the cited $N=2$ construction. No compactification, dyonic extension, tensor-multiplet completion, or universal off-shell action is inferred.

## Remarks

The printed $N=2$ gaugino shift in hep-th/9605032v1, equation (8.23), has a relative-sign typo. The shift above uses the corrected sign stated in arXiv:1508.01474v2, §2, equations (2.31)–(2.32); the scalar-potential normalization is independently checked against hep-th/9605032v1, equation (9.49). The resulting local claim remains in the electric frame and $M_P=1$ source convention.

The convention input is [[def-supergravity-conventions-and-normalizations]] at the exact four-dimensional Einstein-frame and Planck normalization used above. The result remains conditional on its adopted supergravity framework.

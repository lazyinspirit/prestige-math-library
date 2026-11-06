---
id: pthm-four-dimensional-n2-gauged-scalar-potential
kind: physics-theorem
title: Four-Dimensional $N=2$ Gauged Scalar Potential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n2-matter-coupled-supergravity
  - def-st-4d-n2-electric-frame-scalar-data
  - pthm-st-4d-n2-ward-shift-contraction
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n2-matter-coupled-supergravity: physical-assumption
  def-st-4d-n2-electric-frame-scalar-data: formulation-prerequisite
  pthm-st-4d-n2-ward-shift-contraction: physical-result
physical_scope: "Conditional two-derivative N=2 electric-frame scalar potential in the source convention M_P=1, for the stated vector and hypermultiplet matter content and admissible gauging; excludes dyonic, tensor-multiplet, higher-derivative, and compactification claims."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "L. Andrianopoli et al., N=2 Supergravity and N=2 Super Yang-Mills Theory on General Scalar Manifolds: Symplectic Covariance, Gaugings and the Momentum Map"
      url: "https://arxiv.org/pdf/hep-th/9605032v1"
      locator: "§9, equation (9.49), printed p. 43; source electric-frame potential in M_P=1 normalization."
    - title: "L. Andrianopoli et al., General Matter Coupled N=2 Supergravity"
      url: "https://arxiv.org/pdf/hep-th/9603004v1"
      locator: "§5, equations (5.36)–(5.40), independent matter-coupled N=2 potential and Ward-identity cross-check."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§§13.1–13.2, scalar-geometry background only; the electric potential is supplied by the Andrianopoli references, not a Louis equation (20.18)."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---
## Statement

In the electric-frame $N=2$ framework with special-Kähler coordinates $z^i$, hypermultiplet coordinates $q^u$, metrics $g_{i\bar j}$ and $h_{uv}$, Killing vectors $k^i_\Lambda$ and $k^u_\Lambda$, moment maps $P^x_\Lambda$, covariantly holomorphic section $L^\Lambda$, $f_i^\Lambda=D_iL^\Lambda$, and $U^{\Lambda\Sigma}=g^{i\bar j}f_i^\Lambda\bar f_{\bar j}^{\Sigma}$, the source convention $M_P=1$ gives
$$V=g^2\left[ (g_{i\bar j}k_\Lambda^i\overline{k_\Sigma^j}+4h_{uv}k_\Lambda^u k_\Sigma^v)\overline{L^\Lambda}L^\Sigma +(U^{\Lambda\Sigma}-3\overline{L^\Lambda}L^\Sigma)P_\Lambda^xP_\Sigma^x \right].$$
The statement is restricted to the source's matter content and electric gauging; it is not a general $N=2$ or dyonic-gauging formula.

## Statement references

[Andrianopoli et al., §9, equation (9.49)](https://arxiv.org/pdf/hep-th/9605032v1)

[Andrianopoli et al., §5](https://arxiv.org/pdf/hep-th/9603004v1)

[Louis, §§13.1–13.2 (scalar-geometry background)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

[[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]]

[[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]]

[[pthm-st-4d-n2-ward-shift-contraction|$N=2$ Fermion-Shift Ward Contraction]]

## Facts & Assumptions

**Given:** The electric-frame $N=2$ postulate and scalar data of [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] and [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]], with $M_P=1$, gauge coupling $g$, positive scalar metrics, and admissible moment maps.

[A1] [[def-supergravity-conventions-and-normalizations]] fixes four-dimensional Lorentzian Einstein frame, $\kappa_4^2=8\pi G_N=M_P^{-2}$, and the Einstein–Hilbert coefficient $M_P^2/2$. This item uses the source convention $M_P=1$.

[F1] [[pthm-st-4d-n2-ward-shift-contraction|$N=2$ Fermion-Shift Ward Contraction]] proves that the source-normalized $N=2$ shift contraction is a pure singlet with its potential equal to the electric specialization of $\mathcal V$.

[F2] [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]] defines $U^{\Lambda\Sigma}=g^{i\bar j}f_i^\Lambda\bar f_{\bar j}^{\Sigma}$, $f_i^\Lambda=D_iL^\Lambda$, and the electric index range $\Lambda=0,\ldots,n_V$.

[F3] [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] fixes the transformation normalization $g$ and the convention $M_P=1$.

## Proof

1.1 The local Ward contraction in [F1] equals $\mathcal V$ before the gauge-coupling factor is restored. The adopted supersymmetry transformations in [F3] multiply every shift by the same $g$, so each quadratic shift term in the Ward identity, and hence the scalar potential, acquires a common factor $g^2$. [given, F1, F3, algebra]

2.1 In the electric polarization of [F2], the magnetic components of the embedding tensor, and hence the magnetic gauging components, vanish; the section $\mathcal V^M=(L^\Lambda,M_\Lambda)$ still has both electric and magnetic components. Each section factor in the potential of [F1] is contracted against gauging data in its symplectic slot, so only its electric components $L^\Lambda$ occur. The contraction of $U^{MN}$ against the electric moment maps selects its electric block $U^{\Lambda\Sigma}$. Substitute $U^{\Lambda\Sigma}=g^{i\bar j}f_i^\Lambda\bar f_{\bar j}^{\Sigma}$ and relabel the dummy electric indices to obtain exactly the Statement. The $4h_{uv}k_\Lambda^u k_\Sigma^v$ factor is the hyperino contraction, $U^{\Lambda\Sigma}P_\Lambda^xP_\Sigma^x$ is the gaugino contribution, and $-3\overline{L^\Lambda}L^\Sigma P_\Lambda^xP_\Sigma^x$ is the gravitino contribution already separated in [F1]. [given, A1, F1, F2, F3, step 1.1, algebra] ∎

## Unresolved supplier

The convention input is [[def-supergravity-conventions-and-normalizations]] at the exact four-dimensional Einstein-frame and Planck normalization used above. The result remains conditional on its adopted supergravity framework.

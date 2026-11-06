---
id: pthm-st-4d-n2-ward-shift-contraction
kind: physics-theorem
title: "$N=2$ Fermion-Shift Ward Contraction"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n2-matter-coupled-supergravity
  - def-st-4d-n2-electric-frame-scalar-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n2-matter-coupled-supergravity: physical-assumption
  def-st-4d-n2-electric-frame-scalar-data: formulation-prerequisite
physical_scope: "Local algebraic contraction of the adopted two-derivative N=2 fermion shifts in one electric frame, under the source special-geometry locality and quaternionic equivariance hypotheses; it does not prove existence of a supergravity action or a global gauging."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "L. Andrianopoli et al., Observations on BI from N=2 SUGRA and the General Ward Identity"
      url: "https://arxiv.org/pdf/1508.01474v2"
      locator: "§2, equations (2.22)–(2.36), and Appendix B, equations (B.10)–(B.18); complete shift contraction and equivariance cancellation."
    - title: "L. Andrianopoli et al., N=2 Supergravity and N=2 Super Yang-Mills Theory on General Scalar Manifolds: Symplectic Covariance, Gaugings and the Momentum Map"
      url: "https://arxiv.org/pdf/hep-th/9605032v1"
      locator: "§§7.3, 8, and 9, source electric-frame shifts, Ward identity, and scalar potential; equation (8.23) has a corrected relative sign."
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

In the source-normalized $M_P=1$ two-derivative electric-frame $N=2$ model, let $W^{iAB}$, $N_\alpha{}^A$, and $S_{AB}$ be its gaugino, hyperino, and gravitino shifts. Define
$$\mathscr V=(g_{i\bar j}k_\Lambda^i k_\Sigma^{\bar j}+4h_{uv}k_\Lambda^u k_\Sigma^v)\overline{L^\Lambda}L^\Sigma +(U^{\Lambda\Sigma}-3\overline{L^\Lambda}L^\Sigma)P_\Lambda^xP_\Sigma^x,$$
$$Z^x=(-2X_{\Lambda\Sigma}{}^\Gamma P_\Gamma^x+2\epsilon^{xyz}P_\Lambda^yP_\Sigma^z+4K^x_{uv}k_\Lambda^u k_\Sigma^v)\overline{L^\Lambda}L^\Sigma.$$
Their algebraic contraction is
$$g_{i\bar j}W^{iAC}\bar W^{\bar j}{}_{BC} +2N_\alpha{}^A\bar N^\alpha{}_B -12\bar S^{AC}S_{CB} =\delta^A{}_B\,\mathscr V+i(\sigma^x)^A{}_B Z^x.$$
For the admissible $\lambda=-1$ quaternionic geometry satisfying the equivariance relation in the Facts & Assumptions below, $Z^x=0$. Thus this contraction is a pure $SU(2)$ singlet. The physical scalar potential in the transformation normalization of the $N=2$ model is $g^2\mathscr V$.

## Statement references

[Andrianopoli et al., §2 and Appendix B](https://arxiv.org/pdf/1508.01474v2)

[Andrianopoli et al., §§7–9](https://arxiv.org/pdf/hep-th/9605032v1)

[[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]]

[[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]]

## Facts & Assumptions

**Given:** The $N=2$ shifts and source normalizations of [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]], regular scalar data of [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]], $M_P=1$, and a closed admissible electric gauging.

[A1] [[def-supergravity-conventions-and-normalizations]] fixes four-dimensional Lorentzian Einstein frame, $\kappa_4^2=8\pi G_N=M_P^{-2}$, and the Einstein–Hilbert coefficient $M_P^2/2$. This item uses the source convention $M_P=1$.

[F1] [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] fixes the shift definitions, corrected gaugino-shift relative sign, $SU(2)$ and hyperino indices, and the common gauge coupling $g$.

[F2] [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]] fixes the special-Kähler $g,f,U$, quaternionic $h,K,\omega$, electric polarization, and $\lambda=-1$ convention. Its section retains both electric and magnetic components, while the gauging data used in this theorem have electric support.

[F3] [[def-st-4d-n2-electric-frame-scalar-data|Four-Dimensional $N=2$ Electric-Frame Scalar Data]] imposes the exact source special-Kähler mixed-shift identity, symplectic locality, gauge closure, quaternionic vielbein product, and equivariance condition $2K^x_{uv}k_\Lambda^uk_\Sigma^v+\epsilon^{xyz}P_\Lambda^yP_\Sigma^z=X_{\Lambda\Sigma}{}^\Gamma P_\Gamma^x$. These are hypotheses on the gauging used below.

## Proof

1.1 Expanding the two terms in $W^{iAB}$ from [F1], the $k_\Lambda^i\overline{L^\Lambda}$ product with its conjugate gives the singlet $\delta^A{}_B g_{i\bar j}k_\Lambda^i k_\Sigma^{\bar j}\overline{L^\Lambda}L^\Sigma$. Write $s_x$ for the ordinary row-first Pauli matrix in the source and $t_x=s_x^{\mathsf T}$ for its mixed-index component matrix, so $(t_x)^A{}_B=(\sigma^x)^A{}_B$ in [F3]. The source row-first identity is $s_xs_y=\delta^{xy}I+i\epsilon^{xyz}s_z$; hence the two distinct ordered identities are $t_yt_x=\delta^{xy}I+i\epsilon^{xyz}t_z$ and $t_xt_y=\delta^{xy}I-i\epsilon^{xyz}t_z$. To see the actual contraction order, put $E=(\epsilon_{AB})=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $a^i=k_\Lambda^i\overline{L^\Lambda}$ and $b_x^i=P_\Lambda^xg^{i\bar j}\bar f_{\bar j}^\Lambda$. Then the displayed shift is the matrix $W^i=E(a^iI+i s_xb_x^i)$, and $Es_xE^{\mathsf T}=-t_x$. Thus $g_{i\bar j}W^i\overline{W^j}^{\mathsf T}$ has a mixed term $i t_xg_{i\bar j}(a^i\overline{b_x^j}-b_x^i\overline{a^j})$ and a moment-map triplet $-i\epsilon^{xyz}t_zg_{i\bar j}b_x^i\overline{b_y^j}$. The latter coefficient is $g_{i\bar j}b_x^i\overline{b_y^j}=P_\Lambda^xP_\Sigma^yU^{\Sigma\Lambda}$. Relabeling $\Lambda,\Sigma$ and then $x,y$ converts its triplet to $+i\epsilon^{xyz}P_\Lambda^xP_\Sigma^yU^{\Lambda\Sigma}t_z$. This explicit relabeling is why the moment-map term written in the source coefficient order $U^{\Lambda\Sigma}$ uses $(s_xs_y)^{\mathsf T}=t_yt_x$. The singlet part is $U^{\Lambda\Sigma}P_\Lambda^xP_\Sigma^x$ by the definition of $U$. For the triplet part, the symmetric vector-coupling matrix in the identity of [F3] cancels after antisymmetrizing the moment-map indices; the canonical symplectic term vanishes by the electric locality constraint, and the remaining section term is $-\epsilon^{xyz}P_\Lambda^yP_\Sigma^z\overline{L^\Lambda}L^\Sigma$. The mixed $k$–$P$ terms reduce by the exact special-Kähler contraction identity in [F3] to $-2X_{\Lambda\Sigma}{}^\Gamma P_\Gamma^x\overline{L^\Lambda}L^\Sigma$. Collecting these coefficients yields $$g_{i\bar j}W^{iAC}\bar W^{\bar j}{}_{BC} =\delta^A{}_B\!\left(g_{i\bar j}k_\Lambda^i k_\Sigma^{\bar j}\overline{L^\Lambda}L^\Sigma +U^{\Lambda\Sigma}P_\Lambda^xP_\Sigma^x\right) +i(\sigma^x)^A{}_B\!\left(-2X_{\Lambda\Sigma}{}^\Gamma P_\Gamma^x-\epsilon^{xyz}P_\Lambda^yP_\Sigma^z\right)\overline{L^\Lambda}L^\Sigma.$$ The relative sign between the two terms in $W$ is the corrected sign in [F1], and is needed for these mixed terms. [given, F1, F2, F3, algebra]

1.2 By the typed vielbein identity and conjugate lower-hyperino frame in [F3], $\mathcal U^A{}_{u\alpha}\overline{\mathcal U}^{\alpha}{}_{vB}=\tfrac12h_{uv}\delta^A{}_B+\tfrac i2K^x_{uv}(\sigma^x)^A{}_B$. The corrected shift in [F1] is $N_\alpha{}^A=2\mathcal U^A{}_{u\alpha}k_\Lambda^u\overline{L^\Lambda}$, whose conjugate is $\bar N^\alpha{}_B=2\overline{\mathcal U}^{\alpha}{}_{vB}k_\Sigma^vL^\Sigma$; the Killing vectors are real on the quaternionic target. Each hyperino shift has coefficient 2 by [F1], so the product with the Ward factor 2 gives an overall coefficient $2\cdot2\cdot2\cdot\frac12=4$ in each contraction: $$2N_\alpha{}^A\bar N^\alpha{}_B =4\delta^A{}_B h_{uv}k_\Lambda^u k_\Sigma^v\overline{L^\Lambda}L^\Sigma +4i(\sigma^x)^A{}_B K^x_{uv}k_\Lambda^u k_\Sigma^v\overline{L^\Lambda}L^\Sigma.$$ This gives the hyperino singlet and triplet terms without using field equations. [given, F1, F2, F3, algebra]

2.1 Multiplying the electric gravitino shift of [F1] by its conjugate gives the ordinary mixed-index order $t_xt_y=\delta^{xy}I-i\epsilon^{xyz}t_z$ from step 1.1, with prefactor $-12(1/2)(1/2)=-3$. Electric support of the gauging selects $L^\Lambda$ in this contraction; it does not set the magnetic section components $M_\Lambda$ to zero. This order therefore gives a negative singlet and a positive triplet: $$-12\bar S^{AC}S_{CB} =-3\delta^A{}_B P_\Lambda^xP_\Sigma^x\overline{L^\Lambda}L^\Sigma +3i(\sigma^x)^A{}_B\epsilon^{xyz}P_\Lambda^yP_\Sigma^z\overline{L^\Lambda}L^\Sigma.$$ The factor $-3$ follows from $-12$ times the two shift coefficients $1/2$ and $1/2$. [given, F1, F2, algebra]

3.1 Adding the singlets in 1.1, 1.2, and 2.1 gives $\mathscr V$. Adding their triplets gives the displayed $Z^x$. By [F3], $2Kkk+\epsilon PP=XP$; hence its triplet coefficient is $-2XP+2\epsilon PP+4Kkk=-2XP+2(\epsilon PP+2Kkk)=-2XP+2XP=0$. Thus $Z^x=0$, leaving the singlet Ward contraction. [given, A1, F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra] ∎

## Unresolved supplier

The convention input is [[def-supergravity-conventions-and-normalizations]] at the exact four-dimensional Einstein-frame and Planck normalization used above. The result remains conditional on its adopted supergravity framework.

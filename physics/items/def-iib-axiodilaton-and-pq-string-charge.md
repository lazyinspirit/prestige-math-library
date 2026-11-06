---
id: def-iib-axiodilaton-and-pq-string-charge
kind: definition
title: Iib Axiodilaton And Pq String Charge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Conventions for the ten-dimensional classical type-IIB axion-dilaton, the ordered NS–NS/RR two-form source-charge doublet, and the source-reported constant-asymptotic-coupling (p,q)-string family. This defines the protected-sector interface only; it asserts no exact quantum S-duality."
sources:
  references:
    - title: "J. H. Schwarz, An SL(2,Z) Multiplet of Type IIB Superstrings, arXiv:hep-th/9508143v5"
      url: "https://arxiv.org/pdf/hep-th/9508143v5"
      locator: "§§2–4, equations (6)–(21), especially the two-form/charge transformation, the asymptotic modulus, and the (p,q)-string tension; PDF pp. 3–7. The source's final note corrects the charge action to be contragredient to the gauge-field doublet."
    - title: "Angel M. Uranga, Introduction to String Theory, full lecture notes"
      url: "https://members.ift.uam-csic.es/auranga/Lect.pdf"
      locator: "§14.3.1, printed pp. 290–291, and Appendix B.2, printed pp. 324–326: the IIB axiodilaton, classical SL(2,R) covariance, charge quantization, and conjectural full SL(2,Z) symmetry. Uranga's two-form-doublet convention differs from Schwarz's and is not used to fix the local charge-sign convention."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $M$ be an oriented smooth ten-dimensional manifold and $\mathcal W\ne\varnothing$ an oriented $C^2$ embedded two-dimensional source locus, closed as a subset of $M$. Write $U:=M\setminus\mathcal W$, an open smooth manifold. Apply the named supergravity supplier's spacetime conventions to $U$: $\hbar=c=1$ and a smooth Lorentzian Einstein-frame metric $G^{(E)}$ on $U$ of signature $(-,+,\ldots,+)$. Take smooth maps $C_0,\Phi:U\to\mathbb R$, where $C_0$ is the dimensionless type-IIB RR axion and $\Phi$ the dimensionless dilaton, and define $G^{(s)}=e^{\Phi/2}G^{(E)}$ on $U$. The idealized source worldsheet $\mathcal W$ labels the excluded string core; neither metric is required to extend across it, and no induced physical metric or pullback of the exterior potentials to $\mathcal W$ is assumed. Thus this convention includes singular string exteriors without asserting a regular core or a distributional solution of the coupled source equations. Closed as a subset does not require the worldsheet to be boundaryless.

Specify an end chart $(x^0,x^1,y^2,\ldots,y^9)$ identifying an open end $E\subset M\setminus\mathcal W$ with $\mathbb R^{1,1}\times\{y\in\mathbb R^8:|y|>R_0\}$ for some $R_0>0$, and put $r:=|y|$. Write $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$ in these coordinates and $\mathbb S^7:=\{z\in\mathbb R^8:|z|=1\}$. In this item, “flat asymptotic” means that $G^{(E)}_{\mu\nu}-\eta_{\mu\nu}$ and all its first and second coordinate derivatives tend to zero as $r\to\infty$, uniformly over $y/r\in\mathbb S^7$ and locally uniformly for $(x^0,x^1)$ in compact subsets of $\mathbb R^{1,1}$. Assume also that $C_0$ and $\Phi$ tend to constants $C_{0,\infty}\in\mathbb R$ and $\Phi_\infty\in\mathbb R$ in the same uniform and local-uniform sense. Define the asymptotic axiodilaton $\tau_\infty:=C_{0,\infty}+i e^{-\Phi_\infty}$ and the upper half-plane $\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$; then $\tau_\infty\in\mathbb H$.

Let $B^{(1)}_2$ and $B^{(2)}_2$ be the real NS–NS and RR two-form gauge potentials, respectively, smooth locally on $M\setminus\mathcal W$, with three-form field strengths $H^{(j)}_3:=dB^{(j)}_2$. A source's charge labels are the integer column $Q:=(p,q)^{\mathsf T}\in\mathbb Z^2\setminus\{0\}$ in this ordered basis: $p$ is its NS–NS charge and $q$ its RR charge, normalized so the unit F-string and D-string have labels $(1,0)$ and $(0,1)$. The formal source-charge pairing is the exterior two-form $Q^{\mathsf T}B_2$, where $B_2:=(B^{(1)}_2,B^{(2)}_2)^{\mathsf T}$. Call $Q$ primitive when $\gcd(|p|,|q|)=1$. A charge vector with a larger gcd is interpreted in the source family as the corresponding multiple-string threshold sector, not as a new elementary primitive string.

For $\Lambda=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}(2,\mathbb Z)$, where $a,b,c,d\in\mathbb Z$ and $ad-bc=1$, fix the convention $\tau'_\infty=(a\tau_\infty+b)/(c\tau_\infty+d)$ and $Q'=\Lambda Q$. In the same source basis the two-form column transforms as $B'_2=(\Lambda^{\mathsf T})^{-1}B_2$, so the source pairing $Q^{\mathsf T}B_2$ is unchanged. These transformation rules define the classical charge/background covariance convention; they do not assert an exact equivalence of the full quantum theory.

Let $T_F>0$ denote the fixed string-frame reference tension of the unit $(1,0)$ F-string, with dimension energy per length (length$^{-2}$ in the adopted units). Define the dimensionless normalized central-charge factor $\mathcal Z_{p,q}(\tau_\infty):=(p-q\tau_\infty)/\sqrt{\operatorname{Im}\tau_\infty}$, using the positive real square root. This algebraic factor is defined for every stated charge and asymptotic modulus; it assigns no physical energy to the arbitrary exterior data above.

The physical tension terminology refers only to the cited classical infinite straight-string family: take $M=\mathbb R^{1,1}\times\mathbb R^8$ and $\mathcal W=\mathbb R^{1,1}\times\{0\}$, with exterior fields independent of $x^0,x^1$, satisfying the exterior field equations of Schwarz's action (6), and with the self-dual five-form field strength $F_5$ and all fermionic fields identically zero. Here $T^{(E)}_{p,q}$ is the source-reported asymptotic Einstein-frame energy per longitudinal length: an interval of asymptotic proper length $L$ has energy $T^{(E)}_{p,q}L$ in this stationary translation-invariant idealization. Both energy and length use the asymptotic normalization $G^{(E)}\to\eta$; this definition requires no metric on the singular core and assigns no finite total energy to the infinite string. “BPS” means saturation of the adopted tension-charge bound $T^{(E)}_{p,q}\ge T_F|\mathcal Z_{p,q}|$, namely equality. Neither the bound nor the existence and energy of these classical solutions are derived here: the source-reported value $T^{(E)}_{p,q}=T_F|\mathcal Z_{p,q}|$ is a physical premise of the consuming theorem, restricted to this family (and its stated multiple-string threshold sectors), rather than a consequence of the preceding kinematic exterior conventions.

## Definition references

[[def-supergravity-conventions-and-normalizations]]

[Schwarz, §§2–4](https://arxiv.org/pdf/hep-th/9508143v5)

[Uranga, §14.3.1 and Appendix B.2](https://members.ift.uam-csic.es/auranga/Lect.pdf)

## Remarks

The source's fields, charge vector, and transformation law fix one sign convention. Uranga's lecture notes use a different two-form-doublet convention; their discussion supports the distinction between classical continuous covariance and conjectural discrete quantum duality, but does not override the explicit Schwarz charge convention used here.

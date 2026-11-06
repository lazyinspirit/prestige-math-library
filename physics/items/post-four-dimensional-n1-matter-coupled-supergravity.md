---
id: post-four-dimensional-n1-matter-coupled-supergravity
kind: postulate
title: Four-Dimensional $N=1$ Matter-Coupled Supergravity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - def-qftx-n1-kahler-target-data
  - def-st-4d-n1-kahler-hodge-line-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-qftx-n1-kahler-target-data: formulation-prerequisite
  def-st-4d-n1-kahler-hodge-line-data: formulation-prerequisite
physical_scope: "Adopted local two-derivative four-dimensional N=1 Einstein-frame old-minimal component EFT with chiral and vector multiplets; the displayed auxiliary polynomial is restricted to vanishing fermions and elimination of the real gravity-vector auxiliary. It determines the bosonic scalar potential, not the full fermionic auxiliary couplings; not a theorem that every four-dimensional theory has this form."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christian Hohl, Notes on the derivation of the general N=1 supergravity/matter/Yang-Mills Lagrangian for d=4 dimensions using superspace techniques"
      url: "https://arxiv.org/pdf/2005.09504v1"
      locator: "§5 opening matter-superfield discussion, equations (5.1)–(5.6), printed PDF pp. 45–46, for the Kähler-Hodge superpotential convention; §6.1.1, equation (6.41), for the local gauge Killing potential; §8.5.5, equations (8.223)–(8.230), for the component action, auxiliary-field redefinitions, and scalar potential. Source sets M_P=1."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§9.1, equations (9.1)–(9.4), matter-coupled N=1 supergravity, Kähler transformations, and scalar potential; full lecture notes."
    - title: "M. Ducrocq, M. Rausch de Traubenberg, and M. Valenzuela, A pedagogical discussion of N=1 four-dimensional supergravity in superspace"
      url: "https://arxiv.org/pdf/2104.06671v1"
      locator: "§§4.2, 5.1–5.2, Kähler transformations and chiral auxiliary elimination; the displayed final potential is nongauge only."
    - title: "Antoine Van Proeyen, Supergravity with Fayet-Iliopoulos terms and R-symmetry"
      url: "https://arxiv.org/pdf/hep-th/0410053v1"
      locator: "§2 (2.7)–(2.10), §3 (3.2)–(3.7), §4 (4.4)–(4.5): holomorphic action, Kähler variation, equivariance, superpotential transformation and FI/R-symmetry restrictions. The explicit sign and finite-lift admissibility conditions here are declared local conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---
## Gauging data

Use the smooth complex target $X$, positive metric $K_{i\bar j}$, and holomorphic line bundle $L\to X$ of `def-st-4d-n1-kahler-hodge-line-data`, with the patch smoothness and Wirtinger derivatives of `def-qftx-n1-kahler-target-data`. Set $\omega=iK_{i\bar j}dz^i\wedge d\bar z^{\bar j}$. An admissible gauging here includes a finite-dimensional real Lie group $G$ (a smooth group with smooth multiplication and inverse), its Lie algebra $\mathfrak g=T_1G$ (the tangent space at the identity, with bracket induced by left-invariant vector fields) with basis $T_A$ and $[T_A,T_B]=c_{AB}{}^CT_C$, and a smooth right action on $X$ by holomorphic isometries, or a smooth partial right action on an open subset of $X\times G$ containing $X\times\{1\}$, satisfying the identity and composition laws wherever defined. All subsequent finite-action conditions are imposed on these declared action domains. Write $\operatorname{Ad}_g$ for the differential at the group identity of $h\mapsto ghg^{-1}$. Its real infinitesimal fields are $X_A=k_A^i(z)\partial_i+\overline{k_A^i(z)}\partial_{\bar i}$, with holomorphic $k_A^i$; use the convention $[X_A,X_B]=c_{AB}{}^CX_C$, where $[X,Y]u=X(Yu)-Y(Xu)$ for smooth functions $u$. “Isometry” means preservation of the metric, and hence of $\omega$, by every action map. A spacetime patch $\mathcal O$ carries a smooth scalar map $z:\mathcal O\to X$ and smooth real gauge one-forms $A^A=A_\mu^A dx^\mu$. Define $D_\mu z^i=\partial_\mu z^i-A_\mu^Ak_A^i(z)$; gauge couplings are absorbed consistently into these generators and gauge fields. The gauge-kinetic datum is a holomorphic symmetric complex bilinear form $f_x$ on the complexified Lie algebra, with components $f_{AB}(x)=f_x(T_A,T_B)$, positive real part as required below, and covariance $f_{x\cdot g}(T_A,T_B)=f_x(\operatorname{Ad}_gT_A,\operatorname{Ad}_gT_B)$ on the action domains.

The gauging also supplies a smooth real map $P:X\to\mathfrak g^*$, with components $P_A(x)=P(x)(T_A)$, satisfying
$$dP_A=\iota_{X_A}\omega,\qquad \partial_{\bar j}P_A=iK_{i\bar j}k_A^i,\qquad \partial_iP_A=-iK_{i\bar j}\overline{k_A^j},\qquad X_A(P_B)=c_{AB}{}^CP_C.$$
Here $(\iota_X\omega)(Y)=\omega(X,Y)$ for real tangent vectors $Y$; the first identity is the Hamiltonian sign convention, and the last is the infinitesimal equivariance condition. Require also $P(x\cdot g)(T)=P(x)(\operatorname{Ad}_gT)$ for every admissible $g\in G$, $T\in\mathfrak g$; this includes disconnected group elements. Such a $P$ is the real moment map in the Postulate below. Its existence is supplied as part of the datum, not deduced from the existence of an isometry.

A compatible Kähler-line lift means a supplied right $G$ action on $L$ on the same declared action domains, linear on each fiber, holomorphic, covering the target action, and preserving the Hermitian norm $e^{K_\alpha/M_P^2}|w_\alpha|^2$. In local frames write its infinitesimal fiber change as $\delta_A w_\alpha=-r_{A,\alpha}w_\alpha/M_P^2$, with holomorphic $r_{A,\alpha}$. Require
$$X_AK_\alpha=r_{A,\alpha}+\bar r_{A,\alpha},\qquad P_A=i(k_A^i\partial_iK_\alpha-r_{A,\alpha}),\qquad k_A^i\partial_iW_\alpha=-\frac{r_{A,\alpha}}{M_P^2}W_\alpha.$$
The superpotential section is equivariant under the supplied finite lift, not merely under its infinitesimal action. On overlaps require $r_{A,\alpha}-r_{A,\beta}=k_A^i\partial_iF_{\alpha\beta}$, after coordinate pullback, and $X_Ar_{B,\alpha}-X_Br_{A,\alpha}=c_{AB}{}^Cr_{C,\alpha}$. These identities fix the lift and its relation to $P$ without division by $W$; zeros of $W$ are allowed. Use $[k_A^i]=1$, $[r_{A,\alpha}]=[P_A]=2$, and $[A_\mu^A]=1$ in the dimension-one scalar coordinates. A constant FI shift $P_A\mapsto P_A+\xi_A$ corresponds to $r_{A,\alpha}\mapsto r_{A,\alpha}+i\xi_A$, with real constants $\xi_A$ satisfying $c_{AB}{}^C\xi_C=0$. It is admitted only if these shifted data integrate on the declared domains to a finite norm-preserving line lift and the adopted local supersymmetry action includes the corresponding phase action on its supersymmetry parameter and gravitino (gauged $R$-symmetry). Here a phase action means a supplied smooth action on the complex parameter and gravitino bundles by fiberwise scalar multiplication in $U(1)=\{u\in\mathbb C:|u|=1\}$, with the conjugate action on the conjugate bundles; its charges and any required spinor lift are supplied by the adopted local supersymmetry formulation. No arbitrary real constants, global lift-existence assertion, or sufficiency claim for constructing a full supergravity theory is made. The ungauged case has $G=\{1\}$ and empty gauge-index sums; a spectator gauge group may instead have trivial target and line actions, $k_A=r_A=P_A=0$.

## Postulate

Adopt the two-derivative four-dimensional $N=1$ Einstein-frame component framework with a positive Kähler-Hodge scalar target, chiral coordinates $z^i$ of mass dimension 1, local Kähler potentials $K$ of mass dimension 2, a holomorphic superpotential $W$ of mass dimension 3 as a section of the Kähler line bundle, and a holomorphic gauge-kinetic matrix $f_{AB}$ of dimension 0. On overlaps $K$ transforms to $K+F+\bar F$ and $W$ to $\exp(-F/M_P^2)W$; the Kähler-covariant derivative is $D_iW=\partial_iW+(K_i/M_P^2)W$. The bosonic action contains $(M_P^2/2)R$, $-K_{i\bar j}D_\mu z^iD^\mu\bar z^{\bar j}$, gauge kinetic terms determined by $f_{AB}$, and a scalar potential. Use the old-minimal off-shell component formulation, whose chiral and vector auxiliaries have not yet been eliminated.

For the potential calculation, take $M_P>0$, $R_{AB}:=\operatorname{Re} f_{AB}$ symmetric and positive definite on the physical gauge sector, and real moment maps $P_A$ of mass dimension 2 in the declared gauging normalization. Restrict the component action to vanishing fermion fields. The real gravity-vector auxiliary $b_\mu$, a real one-form of mass dimension 1, has the bosonic term $(M_P^2/3)b_\mu b^\mu$ in this convention and is eliminated by its algebraic equation $b_\mu=0$. In this bosonic restriction, the remaining auxiliary-dependent part of the Lagrangian density in the unshifted variables $F^i$ (complex chiral scalars), $M$ (the complex old-minimal gravity auxiliary), and $D^A$ (real vector auxiliaries) is
$$\frac{\mathcal L_{\mathrm{aux}}}{\sqrt{-g}}= K_{i\bar j}F^i\bar F^{\bar j} +e^{K/(2M_P^2)}\!\left(F^iD_iW+\bar F^{\bar j}\overline{D_jW}\right) -\frac{M_P^2}{3}|M|^2-e^{K/(2M_P^2)}(M\bar W+\bar M W) +\frac12R_{AB}D^AD^B+D^AP_A.$$
Here $F^i$, $M$, and $D^A$ are smooth auxiliary fields on the spacetime patch, of the indicated complex or real scalar type in the chosen local frames. The displayed polynomial determines the bosonic scalar potential; the full action also contains auxiliary couplings to fermion bilinears. Here $D_iW$ uses the stated Kähler-covariant derivative, and $D_\mu z^i$ is the gauge-covariant derivative for the chosen Killing-vector action. Use $[F^i]=[D^A]=[P_A]=2$ and $[M]=1$, so each term in $\mathcal L_{\rm aux}/\sqrt{-g}$ has mass dimension four. A constant Fayet–Iliopoulos (FI) contribution is included in $P_A$ only if the gauged action has the compatible Kähler-line-bundle lift and gauged $R$-symmetry. This is an adopted local-SUSY EFT framework, not a theorem that every four-dimensional theory has this form.


## Postulate references

[Hohl, §5 opening (5.1)–(5.6), §6.1.1 (6.41)–(6.42), §8.5.5 (8.223)–(8.230)](https://arxiv.org/pdf/2005.09504v1)

[Louis, §9.1, equations (9.1)–(9.4)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

[Ducrocq, Rausch de Traubenberg, and Valenzuela, §§4.2 and 5](https://arxiv.org/pdf/2104.06671v1)

[Van Proeyen, §§2–4, equations (2.7)–(2.10), (3.2)–(3.7), (4.4)–(4.5)](https://arxiv.org/pdf/hep-th/0410053v1)

[[def-qftx-n1-kahler-target-data]]

[[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]]

## Facts & Assumptions

**Given:** A four-dimensional Lorentzian Einstein-frame local EFT patch with $M_P>0$, chiral fields $z^i$, positive Kähler metric $K_{i\bar j}$, holomorphic $W$ and $f_{AB}$, compatible line-bundle data, and an admissible gauging.

[A1] [[def-supergravity-conventions-and-normalizations]] fixes four-dimensional Lorentzian Einstein frame, $\kappa_4^2=8\pi G_N=M_P^{-2}$, and the Einstein–Hilbert coefficient $M_P^2/2$. The stated dimensionful $M_P>0$ convention is retained.

[F1] [[def-qftx-n1-kahler-target-data]] supplies the local smooth complex scalar patch, real Kähler potential, and positive Hermitian metric.

[F2] [[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]] fixes $K_\alpha-K_\beta=F_{\alpha\beta}+\bar F_{\alpha\beta}$, $W_\alpha=e^{-F_{\alpha\beta}/M_P^2}W_\beta$, and $D_iW=\partial_iW+K_iW/M_P^2$.

[A2] This item adopts the two-derivative old-minimal component EFT and the unshifted bosonic auxiliary Lagrangian displayed in its Postulate, with fermions set to zero and $b_\mu$ eliminated. Neither source citation nor the adopted formulation is a mathematical theorem that arbitrary data define a supergravity model.

## Remarks

The signs and coefficients in the bosonic auxiliary sector are the adopted Hohl-source convention after restoring $M_P$ by mass dimensions. Hohl (8.223) uses diagonalized auxiliaries: (8.224)–(8.229) shift $M$, $F^i$, and $D^A$ by superpotential, moment-map, and fermion terms. In the bosonic restriction, the shifted variables corresponding to this polynomial are $\widehat M=M+3e^{K/(2M_P^2)}W/M_P^2$, $\widehat F^i=F^i+e^{K/(2M_P^2)}K^{i\bar j}\overline{D_jW}$, and $\widehat D^A=D^A+(R^{-1})^{AB}P_B$, where $K^{i\bar j}$ and $(R^{-1})^{AB}$ denote the inverse matrices. Completing these squares recovers Hohl's diagonal bosonic form and the scalar contribution (8.230); the displayed unshifted polynomial does not replace the full fermionic action. This item separates the old-minimal auxiliary formulation from on-shell $N=1$ models, rigid supersymmetry, and other auxiliary conventions. No arbitrary constant FI term is admitted.

The gauging identities are explicit admissibility assumptions, not a new existence theorem. Their compatibility can be checked locally: $X_AK=r_A+\bar r_A$ makes $k_A^iK_i-r_A$ purely imaginary, so $P_A$ is real, and holomorphicity gives $\partial_{\bar j}P_A=iK_{i\bar j}k_A^i$; the conjugate derivative gives the displayed Hamiltonian relation. The overlap laws cancel in $k_A^iK_i-r_A$, so $P_A$ is independent of Kähler frame. The plus sign $dP_A=\iota_{X_A}\omega$ is the convention also used by the compactification EFT data; a source using the opposite moment-map sign requires reversing both $P$ and the vector auxiliary $D$ in the raw polynomial. This leaves its vector square and eliminated potential unchanged. Hohl's invariant-potential linear-action formula is a restricted source case, not a proof of the general finite line-lift assumptions above.

The convention input is [[def-supergravity-conventions-and-normalizations]] at the exact four-dimensional Einstein-frame and Planck normalization used above. The result remains conditional on its adopted supergravity framework.

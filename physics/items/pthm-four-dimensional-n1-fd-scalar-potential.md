---
id: pthm-four-dimensional-n1-fd-scalar-potential
kind: physics-theorem
title: Four-Dimensional $N=1$ F- and D-Term Scalar Potential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n1-matter-coupled-supergravity
  - def-qftx-n1-kahler-target-data
  - def-st-4d-n1-kahler-hodge-line-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  def-qftx-n1-kahler-target-data: formulation-prerequisite
  def-st-4d-n1-kahler-hodge-line-data: formulation-prerequisite
physical_scope: "Conditional algebraic elimination of the old-minimal chiral, gravity, and vector auxiliary fields in the adopted two-derivative four-dimensional N=1 Einstein-frame model, with no extra auxiliary-independent scalar-potential term; no higher-derivative or nonstandard auxiliary sectors."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Hohl, Notes on the derivation of the general N=1 supergravity/matter/Yang-Mills Lagrangian for d=4 dimensions using superspace techniques"
      url: "https://arxiv.org/pdf/2005.09504v1"
      locator: "§8.5.5, equations (8.223)–(8.230), especially (8.230), with auxiliary-field redefinitions (8.224)–(8.229); source uses M_P=1."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§9.1, equations (9.2)–(9.4), Kähler-covariant derivative, F-term, gravitino contribution, and D-term potential; full lecture notes."
    - title: "M. Ducrocq, M. Rausch de Traubenberg, and M. Valenzuela, A pedagogical discussion of N=1 four-dimensional supergravity in superspace"
      url: "https://arxiv.org/pdf/2104.06671v1"
      locator: "§§5.1–5.2, nongauge scalar potential and chiral auxiliary elimination; cross-check only for the nongauge sector."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---
## Statement

For the two-derivative $N=1$ framework with positive Kähler metric $K_{i\bar j}$, invertible positive gauge matrix $\operatorname{Re}f_{AB}$, and algebraically eliminated chiral auxiliary fields, the old-minimal gravity auxiliary field, and vector auxiliary fields, assume the zero-derivative scalar-potential term is generated only by this auxiliary sector, with no additional auxiliary-independent term. The Einstein-frame scalar potential is
$$V=e^{K/M_P^2}\left[K^{i\bar j}D_iW\,\overline{D_jW}-\frac{3|W|^2}{M_P^2}\right]+\frac12(\operatorname{Re}f)^{-1\,AB}P_AP_B.$$
Here $D_iW=\partial_iW+(K_i/M_P^2)W$, and $P_A$ is the real moment map in the declared gauging normalization. A constant Fayet–Iliopoulos (FI) contribution is permitted only when the Kähler-line-bundle lift gauges the appropriate $R$-symmetry. The result is conditional on the old-minimal off-shell matter content and does not include higher-derivative terms, nonstandard auxiliary sectors, or an unqualified FI term.

## Statement references

[Hohl, §8.5.5, equations (8.223)–(8.230)](https://arxiv.org/pdf/2005.09504v1)

[Louis, §9.1, equations (9.2)–(9.4)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

[Ducrocq, Rausch de Traubenberg, and Valenzuela, §5](https://arxiv.org/pdf/2104.06671v1)

[[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]]

[[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]]

## Facts & Assumptions

**Given:** The raw auxiliary Lagrangian and field conventions of [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]], $M_P>0$, positive $K_{i\bar j}$, positive symmetric $R_{AB}:=\operatorname{Re}f_{AB}$, and real $P_A$.

[A2] The zero-derivative scalar-potential term in this theorem is generated only by the displayed $F^i,M,D^A$ auxiliary sector; no independent $V_0(z,\bar z)$ is added.

[A1] [[def-supergravity-conventions-and-normalizations]] fixes four-dimensional Lorentzian Einstein frame, $\kappa_4^2=8\pi G_N=M_P^{-2}$, and the Einstein–Hilbert coefficient $M_P^2/2$. The stated dimensionful $M_P>0$ convention is retained.

[F1] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the old-minimal auxiliary density and the off-shell signs and normalizations displayed in its Statement.

[F2] [[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]] gives $D_iW=\partial_iW+K_iW/M_P^2$ and the Kähler-line-bundle transition convention. Its covariance makes the displayed F-term patch-independent.

## Proof

1.1 Write $A_i:=D_iW$, $E:=e^{K/(2M_P^2)}$, and $K^{i\bar j}$ for the inverse Kähler metric. Expanding the square gives
$$K_{i\bar j}\!\left(F^i+E K^{i\bar\ell}\overline{A_\ell}\right)\!\left(\bar F^{\bar j}+E K^{m\bar j}A_m\right) =K_{i\bar j}F^i\bar F^{\bar j}+E(F^iA_i+\bar F^{\bar j}\bar A_{\bar j})+E^2K^{i\bar j}A_i\bar A_{\bar j}.$$
Therefore the chiral auxiliary part of [F1] is this nonnegative square minus $e^{K/M_P^2}K^{i\bar j}D_iW\overline{D_jW}$. Positivity of $K$ makes the algebraic equation solvable and the square vanishes at its unique stationary value. [given, F1, F2, algebra]

1.2 Completing the real vector square gives
$$\frac12R_{AB}D^AD^B+D^AP_A =\frac12R_{AB}\!\left(D^A+(R^{-1})^{AC}P_C\right)\!\left(D^B+(R^{-1})^{BD}P_D\right)-\frac12(R^{-1})^{AB}P_AP_B.$$
Because $R$ is positive definite, its inverse exists and the unique algebraic solution removes the square. Thus this sector contributes $+\frac12(R^{-1})^{AB}P_AP_B$ to $V$. [given, F1, algebra]

2.1 Put $a=M_P^2/3>0$ and $b=E$. Then
$$-a|M|^2-b(M\bar W+\bar M W)=-a\left|M+\frac{b}{a}W\right|^2+\frac{b^2}{a}|W|^2.$$
Since $b^2/a=3e^{K/M_P^2}/M_P^2$, eliminating $M$ contributes $+3e^{K/M_P^2}|W|^2/M_P^2$ to $\mathcal L_{\rm aux}/\sqrt{-g}$, equivalently $-3e^{K/M_P^2}|W|^2/M_P^2$ to $V$ when the potential enters the Lagrangian as $-V$. [given, F1, step 1.1, algebra]

3.1 At the stationary auxiliary values the three squares vanish. By [A2], the remaining auxiliary Lagrangian is the entire zero-derivative scalar Lagrangian: $-e^{K/M_P^2}K^{i\bar j}D_iW\overline{D_jW}+3e^{K/M_P^2}|W|^2/M_P^2-\frac12(R^{-1})^{AB}P_AP_B=-V$. Rearranging yields the stated potential. By [F2], $D_iW$ transforms as the section $W$, so the two F-term contributions have cancelling Kähler weights; the D-term is invariant under the assumed compatible gauging. The FI qualification is part of [F1]'s admitted moment-map data, not an extra free constant. [given, A1, A2, F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎

## Unresolved supplier

The convention input is [[def-supergravity-conventions-and-normalizations]] at the exact four-dimensional Einstein-frame and Planck normalization used above. The result remains conditional on its adopted supergravity framework.

---
id: ex-qftx-s4-n2-partition-function
kind: example
title: The U(2) N=2* Round-S4 Matrix Integral and Its One-Instanton Term
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s4-partition-functions-examples
dependency_level: 6
axiom_base: ZF + full AC inherited from the stable ADHM core; the displayed one-box algebra itself is finite.
deps:
  - def-axiom-of-choice
  - post-qftx-s4-n2-localization-model
  - pthm-qftx-n2star-u2-regulated-ward-identity
  - lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character
  - thm-qftx-proper-fixed-locus-noncompact-localization
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qftx-s4-n2-localization-model: physical-assumption
  pthm-qftx-n2star-u2-regulated-ward-identity: physical-result
  lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character: mathematical-premise
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: A source-reported formal N=2* U(2) S4 localization integral and a conditional one-instanton ADHM coefficient. A local continuum derivation would require the stated Ward-identity, saddle-limit, and pole-matching inputs; it is not a continuum-existence theorem or an empirical claim.
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§1, equations (1.3)–(1.4); §4, equations (4.47) and (4.50); §5, equations (5.1), (5.11)–(5.12), and the noncommutative-regulator qualification."
    - title: "Vasilis Peelaers, 4d N=2 Localization"
      url: https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf
      locator: "Lecture 1, §1.2, equations (24)–(35), PDF pp. 4–6; the notes state Q-invariance and off-shell requirements but do not prove the continuum measure identity."
verification:
  precheck: pass
---
## Example

Use the adopted round-$S^4_r$ $\mathcal N=2^*$ $U(2)$ model with one adjoint hypermultiplet of real Euclidean mass $m_E$, dimensionless coupling $g_{\mathrm{YM}}>0$, theta angle $\theta$, and natural units $c=\hbar=1$. Thus $[r]=\mathrm{mass}^{-1}$, while $m_E$, Cartan parameters, and $\epsilon_i$ have mass dimension one; $\tau=4\pi i/g_{\mathrm{YM}}^2+\theta/(2\pi)$ and $q=e^{2\pi i\tau}$ are dimensionless. Put

The source continues its algebraic mass as $m=i m_E$ for real Euclidean $m_E$. Put

$$\epsilon_1=\epsilon_2=\epsilon=r^{-1},\qquad \widetilde m=i m_E+\frac{\epsilon_1+\epsilon_2}{2}.$$

For the fixed-point algebra below, first treat $\epsilon_1,\epsilon_2$ and the complexified Coulomb weights as generic equivariant variables. Sum the fixed-point terms as a rational function before imposing the round-sphere values; on the physical contour the source uses $\epsilon_1=\epsilon_2=r^{-1}$ and imaginary Nekrasov Coulomb weights. 

For $U(2)$ the nonzero roots are $\pm\alpha_{12}$, and the Weyl group is $S_2$. Use Pestun's full Lie-algebra integral convention $a\in\mathfrak u(2)$, $(a,a)=-\operatorname{tr}_{\mathbf 2}(a^2)$, measure $[da]$, and gauge-volume factor $\operatorname{vol}(U(2))$. Its Cartan rewrite uses the source's Weyl factor $\Delta(a)=\prod_{\alpha\in\mathrm{Roots}(U(2))}\alpha\cdot a$. The $\mathfrak u(2)$ expression below is the displayed convention, so no separate $1/|S_2|$ is inserted there. 

Write the real Cartan integration parameters in the source convention as $a_E=(a_1^E,a_2^E)$. The one-loop determinant is evaluated at the analytically continued argument $ia_E$, while the Nekrasov factor uses complexified Coulomb weights $a_\alpha^{\mathrm P}=i a_\alpha^E$, as in the source's continuation. Thus $\alpha_{12}(a_E)=a_1^E-a_2^E$ in the one-loop product and $\alpha_{12}(a^{\mathrm P})=i(a_1^E-a_2^E)$ in the instanton series. 

The source's regularized one-loop factor is

$$Z_{1\text{-loop}}^{\mathcal N=2^*}(i a_E;m_E)= \prod_{\alpha\in\mathrm{Roots}(U(2))}\prod_{n=1}^{\infty} \left[\frac{((\alpha\cdot a_E)^2+\epsilon^2n^2)^2} {((\alpha\cdot a_E+m_E)^2+\epsilon^2n^2) ((\alpha\cdot a_E-m_E)^2+\epsilon^2n^2)}\right]^{n/2}.$$

It is regularized by the source's Barnes-$G$ prescription after dropping the $a_E$-independent divergent factor. If the integral is rewritten on a Cartan, the Weyl factor is included once, separately from this root product. 

For a partition $Y$, use a finite downward-closed subset of $\mathbb Z_{\geq0}^2$ and write $|Y|$ for its box count. The source labels its boxes from $1$; translate $(i,j)$ to $(i-1,j-1)$ for the ADHM theorem, which does not change arm or leg lengths. If $s=(i,j)$ in the source's convention, let $\nu_i(Y)$ be the height of column $i$ and $\nu'_j(Y)$ the length of row $j$, and define $v_Y(s)=\nu_i(Y)-j$ and $h_Y(s)=\nu'_j(Y)-i$; these relative vertical and horizontal lengths may be negative when $s$ is outside $Y$. Let $\vec Y=(Y_1,Y_2)$, $|\vec Y|=|Y_1|+|Y_2|$, and let $a_\alpha^{\mathrm A}=c_1^T(e_\alpha)$ be the additive dual-framing weights in the ADHM convention. Let $a_\alpha^{\mathrm P}$ be Pestun's Coulomb weights in the Nekrasov factor. 

The exact convention match used here is $a_\alpha^{\mathrm A}=-a_\alpha^{\mathrm P}$: the ADHM framing representation has character $W=\sum_\alpha e_\alpha^{-1}$, whereas Pestun's Cartan element acts in the fundamental representation. 

In the source convention define

$$E_{\alpha\beta}(s)=-h_{Y_\beta}(s)\epsilon_1+(v_{Y_\alpha}(s)+1)\epsilon_2+a_\beta^{\mathrm P}-a_\alpha^{\mathrm P}.$$

The source's formal N=2* instanton factor is

$$Z_{\mathrm{inst}}^{\mathcal N=2^*}(a_1^{\mathrm P},a_2^{\mathrm P},\widetilde m;\epsilon_1,\epsilon_2,q)= \sum_{\vec Y}q^{|\vec Y|} \prod_{\alpha,\beta=1}^{2}\prod_{s\in Y_\alpha} \frac{(E_{\alpha\beta}(s)-\widetilde m) (\epsilon_1+\epsilon_2-E_{\alpha\beta}(s)-\widetilde m)} {E_{\alpha\beta}(s)(\epsilon_1+\epsilon_2-E_{\alpha\beta}(s))}.$$

Pestun reports the following formal partition-function expression:

$$Z_{S^4}^{\mathrm{formal}}= \frac{1}{\operatorname{vol}(U(2))}\int_{\mathfrak u(2)}[da]\, \exp\!\left[-\frac{8\pi^2r^2}{g_{\mathrm{YM}}^2}(a,a)\right] Z_{1\text{-loop}}^{\mathcal N=2^*}(ia;m_E) \left|Z_{\mathrm{inst}}^{\mathcal N=2^*} (ia,\widetilde m;\epsilon_1=r^{-1},\epsilon_2=r^{-1},q)\right|^2.$$

The absolute square denotes the north-pole instanton factor times the south-pole anti-instanton factor on the physical real slice; after complex continuation the two factors are kept independent. 

The charge-one coefficient of the mathematical ADHM localized Euler series is

$$C_1= \frac{(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m) (a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m) (a_1^{\mathrm P}-a_2^{\mathrm P}-\widetilde m)} {\epsilon_1\epsilon_2(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2) (a_1^{\mathrm P}-a_2^{\mathrm P})} + \frac{(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m) (a_2^{\mathrm P}-a_1^{\mathrm P}-\widetilde m) (\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)} {(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2) (a_2^{\mathrm P}-a_1^{\mathrm P})\epsilon_1\epsilon_2}.$$

This is a source-reported structural prescription with a locally derived mathematical one-instanton coefficient, not a locally proved continuum path-integral identity.

The charge-one partition tuples are exactly $((\Box),\varnothing)$ and $(\varnothing,(\Box))$. 

Each square below is one box $(0,0)$ in the color named beneath it; an empty color has no box. The two cases exhaust total size one and the algebraic verification does not rely on the diagram. 

~~~tikz
\begin{tikzpicture}[x=0.8cm,y=0.8cm]
  \draw[fill=blue!15] (0,0) rectangle (1,1);
  \draw (0,0) grid (1,1);
  \node[below] at (0.5,0) {$Y_1=\Box$};
  \node[below] at (2,0) {$Y_2=\varnothing$};
  \draw[fill=orange!20] (4,0) rectangle (5,1);
  \draw (4,0) grid (5,1);
  \node[below] at (4.5,0) {$Y_2=\Box$};
  \node[below] at (6,0) {$Y_1=\varnothing$};
\end{tikzpicture}
~~~

## Example references

[Pestun, Eq. (1.4), §§4–5, and the noncommutative-$S^4$ qualification](https://arxiv.org/pdf/0712.2824)

[Peelaers, Lecture 1 §1.2 and Lecture 2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

[[post-qftx-s4-n2-localization-model|Adopted N=2* U(2) S4 model]]

[[pthm-qftx-n2star-u2-regulated-ward-identity|Model-matched finite-regulator Ward identity]]

[[lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character|Stable ADHM fixed points and tangent character]]

[[thm-qftx-proper-fixed-locus-noncompact-localization|Proper-fixed-locus localized Borel–Moore pushforward]]

[[def-axiom-of-choice|Full Axiom of Choice]]

## Facts & Assumptions

**Given:** The adopted Euclidean $\mathcal N=2^*$ $U(2)$ model, its round $S^4_r$ source contour, its dimensionless instanton parameter, and the formal source formula above. For the fixed-point calculation assume full AC, positive ADHM stability $\zeta>0$, and algebraically independent generic equivariant variables; specialize only after summing the rational terms.

[F1] [[post-qftx-s4-n2-localization-model]]: the physical model is $U(2)$ with one adjoint hypermultiplet of Euclidean mass $m_E$, the source coupling and contour, $\epsilon_1=\epsilon_2=r^{-1}$, $q=e^{2\pi i\tau}$, and an assumed but unconstructed supersymmetric noncommutative $S^4$ regulator matching Nekrasov's regulator near both poles.

[F2] [[lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character]]: the stable positive-FI ADHM quotient is smooth, separated and finite-type, with a finite invariant affine cover, finite reduced partition fixed locus, and the stated dual-framing tangent character. It assumes full AC and asserts neither a sheaf/ASD dictionary nor an integration identity.

[F4] [[thm-qftx-proper-fixed-locus-noncompact-localization]]: for a smooth separated finite-type torus variety with finite invariant affine cover and proper fixed locus, the localized Borel–Moore pushforward of an equivariant insertion capped with the fundamental class is its fixed-locus Euler-denominator sum. This mathematical pushforward is not a continuum field-space integral.

[F3] [[def-axiom-of-choice]]: full AC means every family of nonempty sets indexed by an arbitrary set has a choice function. It is carried here only because the actual ADHM core Statement assumes it; the one-box algebra uses finite sets.

[A1] [[pthm-qftx-n2star-u2-regulated-ward-identity]]: for THIS N=2* U(2) model, a supplied fixed finite-dimensional regulator with exact Q-preservation, Q-closure, Q-square condition, anomaly-free measure/cycle identity, zero Q-exact boundary integral and compact-parameter L1-majorants gives finite-parameter constancy. Existence of that regulator remains model input; this result provides neither the large-parameter saddle nor the pole matching.

[A2] A local derivation of the adopted physical source prescription would additionally require a justified $t\to\infty$ saddle limit for the regulator in [A1], identifying its sector contribution with the mathematical localized pushforward in [F4]. That pushforward and its Euler formula are supplied mathematically here; its identification with a field-space saddle measure is not. Finite-parameter Ward constancy and the ADHM core do not supply this physical limit.

[A3] Assume a $T$-equivariant identification of the positive-FI ADHM fixed-point series with Pestun's Nekrasov pole factor, using the mass shift and framing-sign convention stated in the Example. The source's supersymmetry-compatible noncommutative deformation on $S^4$ and its agreement with the Nekrasov $\mathbb R^4$ regulator near each pole remain adopted assumptions, not constructions. No field-space measure or regulator-removal proof is used here.

## Verification
**Given:** [F1]–[F4]. Assumptions [A1]–[A3] qualify a possible local continuum derivation, rather than the act of reporting the adopted source prescription. The equation for $Z_{S^4}^{\mathrm{formal}}$ is source-reported in [F1]; this verification does not claim to derive it from a continuum measure.

1.1 For $k=1$ and $N=2$, the only partition pairs are $((\Box),\varnothing)$ and $(\varnothing,(\Box))$. Substituting their characters into [F2] gives the tangent characters $t_1+t_2+e_2/e_1+t_1t_2e_1/e_2$ and $t_1+t_2+e_1/e_2+t_1t_2e_2/e_1$, respectively. Their ADHM-convention weights have Euler products $$E_1^{\mathrm A}=\epsilon_1\epsilon_2(b_2-b_1)(\epsilon_1+\epsilon_2+b_1-b_2),\qquad E_2^{\mathrm A}=\epsilon_1\epsilon_2(b_1-b_2)(\epsilon_1+\epsilon_2+b_2-b_1),$$ where $b_\alpha=a_\alpha^{\mathrm A}=c_1^T(e_\alpha)$. Substituting $b_\alpha=-a_\alpha^{\mathrm P}$ gives $E_1^{\mathrm A}=\epsilon_1\epsilon_2(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2)(a_1^{\mathrm P}-a_2^{\mathrm P})$ and $E_2^{\mathrm A}=\epsilon_1\epsilon_2(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2)(a_2^{\mathrm P}-a_1^{\mathrm P})$, exactly the two source denominators in $C_1$. [given, F2, F3, algebra]

2.1 For the first one-box tuple, the contributing weights in the displayed Nekrasov factor are $E_{11}=\epsilon_2$ and $E_{12}=a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2$. Thus its hypermultiplet numerator is $(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m)(a_1^{\mathrm P}-a_2^{\mathrm P}-\widetilde m)$, and its vector denominator is $E_1^{\mathrm A}$ from step 1.1. For the second color the two Coulomb weights interchange and the denominator is $E_2^{\mathrm A}$. Adding these two fixed-point contributions gives exactly $C_1$ in the Example. This is the finite fixed-point evaluation of the mathematical tangent-twist insertion. [given, F2, step 1.1, algebra]

2.2 The exponent in the Lie-algebra integral is dimensionless because $[r]=\mathrm{mass}^{-1}$, $[a]=\mathrm{mass}$, and $g_{\mathrm{YM}}$ is dimensionless. The one-loop product uses only ratios of mass-squared terms; each N=2* instanton numerator and denominator has the same mass degree, and $q$ is dimensionless. The Haar-volume and matrix-measure normalization remains the source's stated convention. [given, F1, step 1.1, algebra]

3.1 Let $X_k$ be the stable $U(2)$ ADHM quotient in [F2], of complex dimension $4k$. Extend its torus by a flavor factor $\mathbb C^\times_f$ acting trivially on $X_k$, and let $L_{-\widetilde m}$ be its character line with additive first Chern class $-\widetilde m$. The global insertion is $\alpha_{\widetilde m}=e_{T\times\mathbb C^\times_f}(TX_k\otimes L_{-\widetilde m})$, capped with the complex-oriented fundamental class $[X_k]$. The finite invariant affine atlas remains invariant under this trivial base action; the fixed locus remains finite reduced, hence proper. Every hypothesis of [F4] therefore holds. A point with tangent weights $w_j$ contributes $\prod_j(w_j-\widetilde m)/\prod_jw_j$ to $p_*^{\mathrm{loc}}(\alpha_{\widetilde m}\cap[X_k])$. For $k=1$ these are the four weights at each of the two points in steps 1.1–2.1, giving exactly $C_1$. For $k=0$, $X_0$ is a point, both Euler products are empty and the coefficient is $1$. Thus the mathematical noncompact localized-pushforward coefficient is proved. Identifying this insertion with the physical hypermultiplet sector is the sourced pole prescription [A3], not a consequence of equivariant cohomology. [given, F2, F4, A3, step 1.1, step 2.1, algebra]

3.2 At $m_E=0$, one has $\widetilde m=(\epsilon_1+\epsilon_2)/2$; for the round-sphere specialization $\epsilon_1=\epsilon_2$, the charge-one numerator vanishes. This agrees with the source's $\mathcal N=4$ limit and does not assert a separate result for a non-round $\Omega$ background. [given, F1, step 2.1, algebra]

4.1 Under [A1]–[A3], the formal coefficient is identified with the charge-one contribution at each source pole. First add the generic fixed-point terms, then specialize to $\epsilon_1=\epsilon_2=r^{-1}$, $\widetilde m=i m_E+r^{-1}$, and $a_\alpha^{\mathrm P}=i a_\alpha^E$; this is Pestun's round-sphere N=2* convention. The south-pole anti-instanton uses $\bar q$ and the conjugate continued parameters. On the physical real slice this is the product represented by $|Z_{\mathrm{inst}}|^2$. Without these assumptions, the mathematical ADHM coefficient in step 3.1 remains established locally; the full $S^4$ expression itself remains source-reported. [given, A1, A2, A3, F1, step 3.1]

5.1 The local model-matched Ward theorem in [A1] supplies finite-parameter constancy under its exact finite-regulator conditions. The physical saddle-to-pushforward identification [A2] and pole/regulator matching [A3] remain explicit source-qualified inputs. The mathematical pushforward itself is established in step 3.1. Consequently the full sphere expression remains source-reported and conditional, not a locally constructed continuum partition function. [given, A1, A2, A3, step 3.1, step 4.1] ∎

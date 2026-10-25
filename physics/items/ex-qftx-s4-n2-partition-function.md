---
id: ex-qftx-s4-n2-partition-function
kind: example
title: 'The $U(2)$ $\mathcal N=2^*$ Round-$S^4$ Matrix Integral and Its One-Instanton Term'
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
      locator: "§1, equations (1.3)–(1.4); §4.1, equations (4.1)–(4.3), and §4.3, equations (4.47)–(4.50); §5, equations (5.1), (5.11)–(5.12), and the noncommutative-regulator qualification."
    - title: "Wolfger Peelaers (lectures), Bruno Le Floch (notes), 4d N=2 Localization"
      url: https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf
      locator: "Lecture 1, §1.2, equations (24)–(35), PDF pp. 4–6; the notes state Q-invariance and off-shell requirements but do not prove the continuum measure identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Example

Use the adopted round-$S^4_r$ $\mathcal N=2^*$ $U(2)$ model with one adjoint hypermultiplet of real Euclidean mass $m_E$, dimensionless coupling $g_{\mathrm{YM}}>0$, theta angle $\theta$, and natural units $c=\hbar=1$. Thus $[r]=\mathrm{mass}^{-1}$, while $m_E$, Cartan parameters, and $\epsilon_i$ have mass dimension one; $\tau=4\pi i/g_{\mathrm{YM}}^2+\theta/(2\pi)$ and $q=e^{2\pi i\tau}$ are dimensionless.

The source continues its algebraic mass as $m=i m_E$ for real Euclidean $m_E$. Put

$$\epsilon_1=\epsilon_2=\epsilon=r^{-1},\qquad \widetilde m=i m_E+\frac{\epsilon_1+\epsilon_2}{2}.$$

For the algebraic fixed-point calculation, work in $K_m=\mathbb Q(\epsilon_1,\epsilon_2,a_1^{\mathrm P},a_2^{\mathrm P},\mu)$, the rational function field in algebraically independent rotation, Coulomb, and additive flavor variables; the formal flavor weight has mass dimension one. Sum the fixed-point terms as rational functions before specializing $\mu$ to $\widetilde m$ and imposing the physical round-sphere values stated above.

For $U(2)$ the nonzero roots are $\pm\alpha_{12}$, and the Weyl group is $S_2$. The source's finite-dimensional integration contour is the real vector space of skew-Hermitian matrices $\mathfrak u(2)$. Its Cartan coordinates are real, with Weyl factor $\Delta(a_E)=\prod_{\alpha\in\mathrm{Roots}(U(2))}\alpha\cdot a_E$ in a Cartan reduction. The full Lie-algebra formula below has no separate Weyl factor; its measure and gauge-volume normalization are specified there.

Write the real Cartan coordinates as $a_E=(a_1^E,a_2^E)\in\mathbb R^2$. They parametrize the skew-Hermitian Cartan matrix $\mathsf a=i\operatorname{diag}(a_1^E,a_2^E)\in\mathfrak u(2)$ on the integration contour; $\mathsf a$ is the zero mode $\Phi_0^E$ of the continued scalar. The continued scalar coordinates used by the determinants are not the matrix $\mathsf a$: the one-loop factor has argument $i a_E$, and the Nekrasov factor has complexified Coulomb weights $a_\alpha^{\mathrm P}=i a_\alpha^E$. Thus $\alpha_{12}(a_E)=a_1^E-a_2^E$ in the one-loop product and $\alpha_{12}(a^{\mathrm P})=i(a_1^E-a_2^E)$ in the instanton series.

The source's unregularized one-loop product is

$$Z_{1\text{-loop}}^{\mathcal N=2^*}(i a_E;m_E)= \prod_{\alpha\in\mathrm{Roots}(U(2))}\prod_{n=1}^{\infty} \left[\frac{((\alpha\cdot a_E)^2+\epsilon^2n^2)^2} {((\alpha\cdot a_E+m_E)^2+\epsilon^2n^2) ((\alpha\cdot a_E-m_E)^2+\epsilon^2n^2)}\right]^{n/2}.$$

For its Barnes-$G$ regularization, define

$$G(1+z)=(2\pi)^{z/2}\exp\!\left(-\frac{(1+\gamma)z^2+z}{2}\right)\prod_{n=1}^{\infty}\left(1+\frac zn\right)^n\exp\!\left(\frac{z^2}{2n}-z\right),\qquad H(z)=G(1+z)G(1-z),$$

where $\gamma$ is Euler's constant. Pestun's Eq. (4.50) drops the complete $a_E$-independent divergent exponential and fixes the remaining factor to

$$Z_{1\text{-loop}}^{\mathcal N=2^*}(i a_E;m_E)=\prod_{\alpha\in\mathrm{Roots}(U(2))}\frac{H(i\alpha\cdot a_E/\epsilon)}{\left[H((i\alpha\cdot a_E+i m_E)/\epsilon)H((i\alpha\cdot a_E-i m_E)/\epsilon)\right]^{1/2}}.$$

On the stated real contour every argument of $H$ is imaginary, $H(iy)=|G(1+iy)|^2>0$, and the square root is the positive one. No additional $a_E$-independent finite factor is included. The Weyl factor is not part of this one-loop root product.

For a partition $Y$, use a finite downward-closed subset of $\mathbb Z_{\geq0}^2$ and write $|Y|$ for its box count. The source labels its boxes from $1$; translate $(i,j)$ to $(i-1,j-1)$ for the ADHM theorem, which does not change arm or leg lengths. If $s=(i,j)$ in the source's convention, let $\nu_i(Y)$ be the height of column $i$ and $\nu'_j(Y)$ the length of row $j$, and define $v_Y(s)=\nu_i(Y)-j$ and $h_Y(s)=\nu'_j(Y)-i$; these relative vertical and horizontal lengths may be negative when $s$ is outside $Y$. Let $\vec Y=(Y_1,Y_2)$, $|\vec Y|=|Y_1|+|Y_2|$, and let $a_\alpha^{\mathrm A}=c_1^T(e_\alpha)$ be the additive dual-framing weights in the ADHM convention. Let $a_\alpha^{\mathrm P}$ be Pestun's Coulomb weights in the Nekrasov factor. 

The exact convention match used here is $a_\alpha^{\mathrm A}=-a_\alpha^{\mathrm P}$: the ADHM framing representation has character $W=\sum_\alpha e_\alpha^{-1}$, whereas Pestun's Cartan element acts in the fundamental representation. 

In the source convention define

$$E_{\alpha\beta}(s)=-h_{Y_\beta}(s)\epsilon_1+(v_{Y_\alpha}(s)+1)\epsilon_2+a_\beta^{\mathrm P}-a_\alpha^{\mathrm P}.$$

The source's formal $\mathcal N=2^*$ instanton factor is

$$Z_{\mathrm{inst}}^{\mathcal N=2^*}(a_1^{\mathrm P},a_2^{\mathrm P},\widetilde m;\epsilon_1,\epsilon_2,q)= \sum_{\vec Y}q^{|\vec Y|} \prod_{\alpha,\beta=1}^{2}\prod_{s\in Y_\alpha} \frac{(E_{\alpha\beta}(s)-\widetilde m) (\epsilon_1+\epsilon_2-E_{\alpha\beta}(s)-\widetilde m)} {E_{\alpha\beta}(s)(\epsilon_1+\epsilon_2-E_{\alpha\beta}(s))}.$$

For the finite-dimensional matrix integral, let $d\mu_0(\mathsf a)$ be Lebesgue measure on the real vector space $\mathfrak u(2)$ induced by $(X,Y)=-\operatorname{tr}_{\mathbf2}(XY)$, and let $\operatorname{vol}_0(U(2))$ be Haar volume for the bi-invariant Riemannian metric induced by the same form. This fixes the normalization of both measures; since $[\mathsf a]=\mathrm{mass}$, $d\mu_0(\mathsf a)$ has mass dimension four. The full Lie-algebra integral has no separate Weyl factor. If it is rewritten on the Cartan, use the source's $\Delta(a_E)=\prod_{\alpha\in\mathrm{Roots}(U(2))}\alpha\cdot a_E$ and the Weyl-group quotient $|S_2|=2$ exactly once. In the gauge-fixing normalization of Pestun's Eq. (4.3), the group volume is instead written $\operatorname{vol}_{g_{\mathrm{YM}}}(U(2))=g_{\mathrm{YM}}^{\dim U(2)}\operatorname{vol}_0(U(2))=g_{\mathrm{YM}}^4\operatorname{vol}_0(U(2))$; Eq. (1.4)'s unscaled $\operatorname{vol}(U(2))$ is $\operatorname{vol}_0(U(2))$.

With these conventions, Pestun's source-reported formal partition-function expression is

$$Z_{S^4}^{\mathrm{formal}}=\frac{1}{\operatorname{vol}_0(U(2))}\int_{\mathfrak u(2)}d\mu_0(\mathsf a)\,\exp\!\left[-\frac{8\pi^2r^2}{g_{\mathrm{YM}}^2}(\mathsf a,\mathsf a)\right]Z_{1\text{-loop}}^{\mathcal N=2^*}(i a_E(\mathsf a);m_E)\left|Z_{\mathrm{inst}}^{\mathcal N=2^*}(a^{\mathrm P},\widetilde m;\epsilon_1=r^{-1},\epsilon_2=r^{-1},q)\right|^2,$$

where $a_E(\mathsf a)$ is the unordered real pair determined by unitary conjugation of $\mathsf a$ to $i\operatorname{diag}(a_1^E,a_2^E)$, $a_\alpha^{\mathrm P}=i a_\alpha^E$, and $(\mathsf a,\mathsf a)=-\operatorname{tr}_{\mathbf2}(\mathsf a^2)=\sum_{\alpha=1}^2(a_\alpha^E)^2$ on that Cartan. The source's $|Z_{\mathrm{inst}}|^2$ is the north-pole instanton factor times the south-pole anti-instanton factor on the physical real slice; after complex continuation these two factors are kept independent. This explicit finite-dimensional normalization does not construct the continuum functional measure.

In the positive-FI stable $U(2)$ ADHM quotient of the earlier item `lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character` (a smooth quotient whose torus-fixed points are indexed by partition tuples and whose tangent character is specified there), the charge-one fixed points are the two pairs $((\Box),\varnothing)$ and $(\varnothing,(\Box))$. Give a fixed point with tangent weights $w_1,\ldots,w_4$ the mass-twisted weight $\prod_{j=1}^4(w_j-\mu)/\prod_{j=1}^4w_j$, from the equivariant Euler insertion of the tangent bundle tensored with an inverse flavor-character line. After the specialization $\mu=\widetilde m$, the sum of the two charge-one terms is

$$C_1= \frac{(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m) (a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m) (a_1^{\mathrm P}-a_2^{\mathrm P}-\widetilde m)} {\epsilon_1\epsilon_2(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2) (a_1^{\mathrm P}-a_2^{\mathrm P})} + \frac{(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m) (a_2^{\mathrm P}-a_1^{\mathrm P}-\widetilde m) (\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)} {(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2) (a_2^{\mathrm P}-a_1^{\mathrm P})\epsilon_1\epsilon_2}.$$

This is a source-reported structural prescription with a locally derived mathematical one-instanton coefficient for the stated tangent-bundle insertion, not a locally proved continuum path-integral identity.

Each square below is one box $(0,0)$ in the color named beneath it; an empty color has no box. The two cases exhaust total size one and the algebraic verification does not rely on the diagram. 

```tikz
\begin{tikzpicture}[x=1.1cm,y=1.1cm]
  \draw[fill=blue!15] (0,0) rectangle (1,1);
  \draw[step=1.1cm] (0,0) grid (1,1);
  \node[below] at (0.5,0) {$Y_1=\Box$};
  \node[below] at (2,0) {$Y_2=\emptyset$};
  \draw[fill=orange!20] (4,0) rectangle (5,1);
  \draw[step=1.1cm] (4,0) grid (5,1);
  \node[below] at (4.5,0) {$Y_2=\Box$};
  \node[below] at (6,0) {$Y_1=\emptyset$};
\end{tikzpicture}
```

## Example references

[Pestun, Eq. (1.4), §§4–5, and the noncommutative-$S^4$ qualification](https://arxiv.org/pdf/0712.2824)

[Peelaers, Lecture 1 §1.2 and Lecture 2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

[[post-qftx-s4-n2-localization-model|Adopted $\mathcal N=2^*$ $U(2)$ $S^4$ model]]

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

[A1] [[pthm-qftx-n2star-u2-regulated-ward-identity]]: for THIS $\mathcal N=2^*$ $U(2)$ model, a supplied fixed finite-dimensional regulator with exact preservation of the source-ordered $R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon$ convention and the total square $Q^2=\delta_{\mathrm{gauge}}(a_0)+\omega$, where $\omega$ is the declared combined lifted spacetime/R/flavor operator with its auxiliary/ghost actions, Q-closure, Q-square condition, anomaly-free measure/cycle identity, zero Q-exact boundary integral, one common null set outside which the regulated coefficient $t\mapsto f_t(x)$ is differentiable throughout $J$, measurable derivatives for each $t$, and compact-parameter $L^1$ majorants gives finite-parameter constancy. Existence of that regulator remains model input; this result provides neither the large-parameter saddle nor the pole matching.

[A2] A local derivation of the adopted physical source prescription would additionally require a justified $t\to\infty$ saddle limit for the regulator in [A1], identifying its sector contribution with the mathematical localized pushforward in [F4]. That pushforward and its Euler formula are supplied mathematically here; its identification with a field-space saddle measure is not. Finite-parameter Ward constancy and the ADHM core do not supply this physical limit.

[A3] Assume that the source's Nekrasov pole factor is identified with the positive-FI ADHM fixed-point sum after insertion of the equivariant Euler class of the tangent bundle tensored with an inverse flavor-character line of independent additive weight $-\mu$, followed by the specialization $\mu=\widetilde m$ and the framing-sign convention stated in the Example. The source's supersymmetry-compatible noncommutative deformation on $S^4$ and its agreement with the Nekrasov $\mathbb R^4$ regulator near each pole remain adopted assumptions, not constructions. No field-space measure or regulator-removal proof is used here.

## Verification
**Given:** [F1]–[F4]. Assumptions [A1]–[A3] qualify a possible local continuum derivation, rather than the act of reporting the adopted source prescription. The equation for $Z_{S^4}^{\mathrm{formal}}$ is source-reported in [F1]; this verification does not claim to derive it from a continuum measure.

1.1 For $k=1$ and $N=2$, the only partition pairs are $((\Box),\varnothing)$ and $(\varnothing,(\Box))$. Substituting their characters into [F2] gives the tangent characters $t_1+t_2+e_2/e_1+t_1t_2e_1/e_2$ and $t_1+t_2+e_1/e_2+t_1t_2e_2/e_1$, respectively. Their ADHM-convention weights have Euler products $$E_1^{\mathrm A}=\epsilon_1\epsilon_2(b_2-b_1)(\epsilon_1+\epsilon_2+b_1-b_2),\qquad E_2^{\mathrm A}=\epsilon_1\epsilon_2(b_1-b_2)(\epsilon_1+\epsilon_2+b_2-b_1),$$ where $b_\alpha=a_\alpha^{\mathrm A}=c_1^T(e_\alpha)$. Substituting $b_\alpha=-a_\alpha^{\mathrm P}$ gives $E_1^{\mathrm A}=\epsilon_1\epsilon_2(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2)(a_1^{\mathrm P}-a_2^{\mathrm P})$ and $E_2^{\mathrm A}=\epsilon_1\epsilon_2(a_1^{\mathrm P}-a_2^{\mathrm P}+\epsilon_1+\epsilon_2)(a_2^{\mathrm P}-a_1^{\mathrm P})$, exactly the two source denominators in $C_1$. [given, F2, F3, algebra]

2.1 For the first one-box tuple, the contributing weights in the displayed Nekrasov factor are $E_{11}=\epsilon_2$ and $E_{12}=a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2$. Thus its hypermultiplet numerator is $(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)(a_2^{\mathrm P}-a_1^{\mathrm P}+\epsilon_1+\epsilon_2-\widetilde m)(a_1^{\mathrm P}-a_2^{\mathrm P}-\widetilde m)$, and its vector denominator is $E_1^{\mathrm A}$ from step 1.1. For the second color the two Coulomb weights interchange and the denominator is $E_2^{\mathrm A}$. Adding these two fixed-point contributions gives exactly $C_1$ in the Example. This is the finite fixed-point evaluation of the mathematical tangent-twist insertion. [given, F2, step 1.1, algebra]

2.2 The exponent in the Lie-algebra integral is dimensionless because $[r]=\mathrm{mass}^{-1}$, $[\mathsf a]=[a_E]=\mathrm{mass}$, and $g_{\mathrm{YM}}$ is dimensionless. The one-loop product uses only ratios of mass-squared terms; each $\mathcal N=2^*$ instanton numerator and denominator has the same mass degree, and $q$ is dimensionless. The measure is $d\mu_0$ from the stated trace pairing, the unscaled group volume is $\operatorname{vol}_0$, and the separate coupling-rescaled gauge-fixing volume is $g_{\mathrm{YM}}^4\operatorname{vol}_0$. Thus the displayed finite integral has mass dimension four under this literal Lebesgue convention; it does not claim an absolute continuum path-integral normalization. [given, F1, step 1.1, algebra]

3.1 Let $X_k$ be the stable $U(2)$ ADHM quotient in [F2], of complex dimension $4k$. Write its algebraic torus as $T_{\mathbb C}=(\mathbb C^\times)^2_{\mathrm{rot}}\times(\mathbb C^\times)^2_{\mathrm{fr}}$, acting by the complexification of the ADHM supplier's rotation and dual-framing action, and let $K=(S^1)^2_{\mathrm{rot}}\times(S^1)^2_{\mathrm{fr}}$ be its maximal compact subgroup. The Borel equivariant cohomology for $T_{\mathbb C}$ is $H^*_{K}(X_k;\mathbb Q)$. Add the algebraic flavor torus $\mathbb C^\times_f$ acting trivially on every point of $X_k$; then $T_{\mathbb C,m}=T_{\mathbb C}\times\mathbb C^\times_f$ acts algebraically and has maximal compact $K_m=K\times S^1_f$, which defines $H^*_{T_{\mathbb C,m}}(X_k;\mathbb Q)=H^*_{K_m}(X_k;\mathbb Q)$. Let $\eta$ be the coordinate character of $\mathbb C^\times_f$, let $u_f=c_1(L_\eta)$ be its independent degree-two class, and let $L_{\eta^{-1}}$ be the associated line of class $-u_f$. Since the flavor factor acts trivially on the base, $X_k^{T_{\mathbb C,m}}=X_k^{T_{\mathbb C}}$, and every $T_{\mathbb C}$-invariant affine open in the finite cover of [F2] remains invariant under $T_{\mathbb C,m}$. Thus the fixed locus remains the same finite reduced, hence proper, scheme. The global insertion is $\alpha_{u_f}=e_{T_{\mathbb C,m}}(TX_k\otimes L_{\eta^{-1}})$, capped with the complex-oriented fundamental class $[X_k]$. Every hypothesis of [F4] therefore holds for the algebraic torus $T_{\mathbb C,m}$ and its maximal compact $K_m$. A point with tangent weights $w_j$ contributes $\prod_j(w_j-u_f)/\prod_jw_j$ to $p_*^{\mathrm{loc}}(\alpha_{u_f}\cap[X_k])$. For $k=1$ these are the four weights at each of the two points in steps 1.1–2.1, giving the mass-twisted coefficient with $\mu=u_f$. The resulting expression has only tangent weights in its denominators, so it can be specialized after the rational sum by $u_f\mapsto\widetilde m$. For $k=0$, $X_0$ is a point, both Euler products are empty and the coefficient is $1$. Thus the mathematical noncompact localized-pushforward coefficient is proved. Identifying this insertion with the physical hypermultiplet sector is the sourced pole prescription [A3], not a consequence of equivariant cohomology. [given, F2, F4, A3, step 1.1, step 2.1, algebra]

3.2 At $m_E=0$, one has $\widetilde m=(\epsilon_1+\epsilon_2)/2$; for the round-sphere specialization $\epsilon_1=\epsilon_2$, the charge-one numerator vanishes. This agrees with the source's $\mathcal N=4$ limit and does not assert a separate result for a non-round $\Omega$ background. [given, F1, step 2.1, algebra]

4.1 Under [A1]–[A3], the source's Nekrasov pole factor is matched with the fixed-point sum after its tangent-bundle insertion. First add the generic fixed-point terms, then specialize the independent flavor weight $u_f$ to $\widetilde m$, then set $\epsilon_1=\epsilon_2=r^{-1}$, $\widetilde m=i m_E+r^{-1}$, and $a_\alpha^{\mathrm P}=i a_\alpha^E$; this is Pestun's round-sphere $\mathcal N=2^*$ convention. The south-pole anti-instanton uses $\bar q$ and the conjugate continued parameters. On the physical real slice this is the product represented by $|Z_{\mathrm{inst}}|^2$. Without these assumptions, the mathematical ADHM coefficient in step 3.1 remains established locally; the full $S^4$ expression itself remains source-reported. [given, A1, A2, A3, F1, step 3.1]

5.1 The local model-matched Ward theorem in [A1] supplies finite-parameter constancy under its exact finite-regulator conditions. The physical saddle-to-pushforward identification [A2] and pole/regulator matching [A3] remain explicit source-qualified inputs. The mathematical pushforward itself is established in step 3.1. Consequently the full sphere expression remains source-reported and conditional, not a locally constructed continuum partition function. [given, A1, A2, A3, step 3.1, step 4.1] ∎

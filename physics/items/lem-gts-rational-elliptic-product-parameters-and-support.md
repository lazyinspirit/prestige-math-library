---
id: lem-gts-rational-elliptic-product-parameters-and-support
kind: lemma
title: Rational elliptic product parameters and full intersection support
status: published
origin: pipeline
domain: mathematics
library: physics
axiom_use: ZF + AC
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-gts-bridgeland-stability-condition-with-support-property
  - lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry
  - lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance
  - thm-gts-local-structure-of-stability-condition-space
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
      url: https://arxiv.org/pdf/2601.22994v1
      locator: Definition1.5, Theorems5.1–5.2 and proof strategy; Sections 2–3 and 5–6 consulted for the present repair. Restricted uniqueness and the support enlargement are proved here, rather than importing Theorem5.1.
    - title: Yucheng Liu, Stability conditions on product varieties
      url: https://arxiv.org/abs/1907.09326v2
      locator: Provenance for the ordered AP/Liu construction already reconstructed in the local supplier. This proposal does not claim a new independent reading of Liu's full text.
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
category: string-theory
dependency_level: 5
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry: mathematical-premise
  lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance: mathematical-premise
  thm-gts-local-structure-of-stability-condition-space: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
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

Assume AC. Let $X=E_1\times\cdots\times E_n$ be a finite product of complex smooth projective elliptic curves. Choose degree-one numerical divisor classes $H_i$ and put $H=\sum_i H_i$. For each subset $I\subseteq\{1,\ldots,n\}$ put $c_I(F)=\int_X (\prod_{i\in I}H_i)\operatorname{ch}_{n-|I|}(F)$, including $c_\varnothing=\int_X\operatorname{ch}_n$. Put $M_n=n!$ (with $0!=1$) and $v(F)=M_n(c_I(F))_I$. Its image $\Lambda_n=\operatorname{im}v\subseteq\mathbb Z^{2^n}$ is a numerical finite-index lattice, equipped with the Euclidean norm inherited from $\mathbb R^{2^n}$.

For every $a\in\mathbb Q_{>0}$ and $b\in\mathbb Q$ there is a locally finite stability condition $\sigma_{a,b}$ with central charge $Z_{a,b}(F)=-\int_Xe^{-(b+ia)H}\operatorname{ch}(F)$ and support on this precise lattice: there is $C_{a,b,n}>0$ with $\|v(F)\|_2\leq C_{a,b,n}|Z_{a,b}(F)|$ for every semistable $F$. All skyscrapers are semistable of phase one. Its actual slicing is invariant under all degree-zero line twists and factor automorphisms, and, for identical factors, their permutations.

Among locally finite finite-lattice-support conditions with this charge, all skyscrapers semistable of phase one, and actual invariance under all finite-order degree-zero line twists, it is unique. This is restricted uniqueness; it does not assert injectivity for arbitrary charges or arbitrary conditions. For every rational $(a,b)$, sufficiently small rational changes of $b$ give the local deformation branch of $\sigma_{a,b}$ in the fixed $\Lambda_n$ stability space.

## Statement references

[[lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry]]

[[lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance]]

[[thm-gts-local-structure-of-stability-condition-space]]

## Facts & Assumptions

**Given:** The Statement's varieties, classes, rational parameters, and AC.

[F1] The actual proof of [[lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry]], steps1.1–18.1, constructs the noetherian local AP constant heart $B=A_C$ from a rational base condition $(A,Z)$, independently of the base ample line. Write $Z(Rp_*F(k))=Ak+B_0$, with $A=\alpha+i\gamma$ and $B_0=\beta+i\delta$. It proves $\gamma\geq0$; at $\gamma=0$, $\alpha\leq0,\delta\geq0$; at $\alpha=\gamma=\delta=0$, nonzero objects have $\beta<0$. Leading-semistable objects satisfy $\beta\gamma-\alpha\delta\geq0$, and their leading lattice vector is represented by a base-semistable fibre. Its steps17.1–23.1 give the explicit weak-HN, saturation, wall and quadratic-form calculations, not merely an existence citation. We use these calculations below with the new constant coefficient fully specified.

[F2] [[lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance]] constructs inverse-image slicings on every smooth product fibre of $f:Y\times C\to C$ under the following exact hypothesis: for every finite-order line $L\in\operatorname{Pic}^0(C)$ of every order, tensoring by $f^*L$ preserves the ambient charge and every phase category. A single fixed finite subgroup is insufficient. Under this hypothesis it constructs the inverse slicing, with finite HN filtrations, local finiteness, and coimage support. Its proof1.1 also proves that a complex fixed by all torsion lines from a curve base has support over finitely many base points. Its proof1.2–1.5 handles reduced-fibre objects and their HN maps; no derived full faithfulness of a closed immersion is assumed.

[F3] [[thm-gts-local-structure-of-stability-condition-space]] proves, in its proof2.1–11.1, existence of sufficiently small charge perturbations on a fixed finite-rank support lattice and uniqueness of equal-charge lifts at slicing distance less than one. We use that proved local assertion, not a global injectivity statement.

[F4] [[def-gts-bridgeland-stability-condition-with-support-property]] fixes slicing, HN, norm support and local-finiteness conventions. [[def-axiom-of-choice]] is inherited from F1's actual generator/minimal-model choices.

[F5] [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] supplies integral Chern classes and their naturality/Whitney identities on the CW-type complex elliptic product. Define $\operatorname{ch}_j=p_j(c_1,\ldots,c_j)/j!$ by the integral Newton polynomial $p_j$; extend by alternating sums of a finite locally free resolution, as in F1's smooth perfect-complex setting. The degree-one divisor sequence gives the Chern character of its point sheaf. No Riemann–Roch identity is used for lattice integrality.

## Proof

**Given:** F1–F5. In each AP step use a degree-one line on the new elliptic curve.

1.1 The Chern-character polynomial has $j!\operatorname{ch}_j$ integral when evaluated on integral Chern classes: by definition it is the integral Newton power-sum polynomial in the Chern classes, and $\operatorname{ch}_j=p_j/j!$. Therefore $M_nc_I$ is integral for every $I$; this argument uses no Euler-characteristic Riemann–Roch formula. For $S\subseteq\{1,\ldots,n\}$ the external product with $\mathcal O_{E_i}$ on $i\in S$ and a point sheaf on $i\notin S$ has $c_I=1$ for $I=S$ and zero otherwise: the divisor sequence gives $\operatorname{ch}(\mathcal O_p)=H_i$, while $H_i^2=0$ and $\int_X\prod_iH_i=1$. Thus the image contains $M_n\mathbb Z^{2^n}$ and is a full-rank finite-index subgroup of $\mathbb Z^{2^n}$. Numericality will be proved in step8.1 from the actual numerical recursive support maps; it is not inferred here from an unlisted Riemann–Roch theorem. [F1, F5, given, algebra]

1.2 We construct the rational parameter heart. Suppose the lower product has charge $Z_{a,b}$. In F1's AP heart replace $B_0$ by $B'_0=B_0-bA$ and write $\beta'=\beta-b\alpha$, $\delta'=\delta-b\gamma$. The desired next charge is
$$W=B'_0-iaA=\beta'+a\gamma+i(\delta'-a\alpha).$$
Put $I=\delta'-a\alpha$ and $\nu=I/(a\gamma)$, with infinity at $\gamma=0$. The weak function $-I+ia\gamma$ has the rational-HN property of F1, step17.1: its imaginary part is nonnegative discrete, and at zero imaginary part its real part $a\alpha-\delta$ is nonpositive. Its finite-slope ordering is exactly that of F1's $t=a$ weak function, translated by $-b/a$; therefore it has the same weak-semistable objects and finite weak HN filtrations. Take $T=\{\nu_{\min}>0\}$, $F=\{\nu_{\max}\leq0\}$, and the actual HRS heart $\langle T,F[1]\rangle$. Orthogonality follows by applying the weak see-saw inequality to images, and its truncations are the weak-HN cuts followed by the AP truncations. [F1, construct, algebra]

1.3 We prove restricted relative uniqueness, including the new cut. Suppose a condition $\tau$ on $Y\times C$ has the charge in step1.2 and its inverse slicing on every $Y$ fibre is the already constructed lower condition. Let $B=A_C$. The all-fibre AP bound test follows from the local parameter $u$: in $B$-cohomology its Koszul triangle gives
$$0\longrightarrow\operatorname{coker}(u:H_B^qK\to H_B^qK)\longrightarrow i_*H_A^q(Li^*K)\longrightarrow\ker(u:H_B^{q+1}K\to H_B^{q+1}K)\longrightarrow0.$$
A nonzero AP object has a fibre with nonzero displayed cokernel, by noetherian Nakayama: surjective $u$ has stabilized kernels and is injective; invertibility would force vanishing near that fibre by coherent derived Nakayama. Taking the highest or lowest bad AP cohomology proves that fibre bounds imply the corresponding AP bounds. [F1, F2, construct]

2.1 The determinant is unchanged: $\beta'\gamma-\alpha\delta'=\beta\gamma-\alpha\delta$. For a weak-semistable object with $\gamma>0$, order its leading HN factors by increasing $x_j=\alpha_j/\gamma_j$. Their prefix inequalities read $D'_j-aA_j\leq (D'-aA)C_j/C$. Abel summation gives
$$\beta'\geq a\sum_j\alpha_j^2/\gamma_j+((D'-aA)/C)A,$$
so $\beta'\gamma-\alpha\delta'\geq a\sum_{i<j}\gamma_i\gamma_j(x_i-x_j)^2$. If the base support form is $Q_0(w)=C_0^2|Z(w)|^2-\|w\|^2$, the polarization estimate on the base-semistable leading vectors gives
$$\beta'\gamma-\alpha\delta'+\eta Q_0(v_1)\geq0,\qquad 0\leq\eta\leq a/C_0^2.$$
Indeed $2Q_0(w_i,w_j)\geq2C_0^2(\alpha_i\alpha_j+\gamma_i\gamma_j-\sqrt{\alpha_i^2+\gamma_i^2}\sqrt{\alpha_j^2+\gamma_j^2})$, and $(x-y)^2\geq2(\sqrt{1+x^2}\sqrt{1+y^2}-xy-1)$. At $\gamma=0$ the signs in F1 show $-\alpha\delta'=-\alpha\delta\geq0$; its torsion-free fibre has negative real charge and is base-semistable, or vanishes when that charge is zero. This proves the same bound at the endpoint. [F1, step 1.2, algebra]

2.2 Every $E\in B$ has $\tau$-HN phases in $(-1,1]$. A highest factor $Q$ of phase $>1$ has $\operatorname{Hom}(Q,i_*G[k])=0$ for $G\in A,k\leq0$, since fibre phases lie in $(0,1]+k$. Left adjunction and step1.3 put $Q$ in $D_B^{\leq-1}$, contradicting its nonzero map to $E$. A lowest factor $R$ of phase $\leq-1$ has $\operatorname{Hom}(i_*G[k],R)=0$ for $k\geq-1$. The divisor right adjoint is $i^!=Li^*[-1]$ up to the constant one-dimensional normal fibre, so $Li^*R\in D_A^{\geq1}$ and $R\in D_B^{\geq1}$, contradicting the nonzero map $E\to R$. The first and last HN maps are nonzero by HN Hom vanishing. These arguments need only semistability of the fibre objects, not their simplicity. The two t-structures therefore differ by one HRS tilt: truncating $E\in B$ in the $\tau$ structure gives its torsion decomposition in $B$, and the $\tau$ heart is $\langle T_\tau,F_\tau[1]\rangle$. Positivity gives $I(T_\tau)\geq0$, with real charge negative at equality, and $I(F_\tau)\leq0$, with real charge positive at equality. [F1, F2, step 1.3, algebra]

3.1 The charge is strictly positive on the tilted heart. On $T$ its imaginary part is nonnegative. At $I=0$ all weak-HN factors in $T$ have $\gamma=0$; the boundary signs force $\alpha=\delta'=0$ and $\beta'=\beta<0$. Every nonzero object in $F$ has $\gamma>0$: otherwise $I\leq0$ and $\alpha\leq0,\delta'\geq0$ force $\alpha=\delta'=0$, putting it in the infinity torsion class. At $I=0$ its weak-HN factors all have slope zero; step2.1 gives $\beta'\geq a\alpha^2/\gamma$, whence $W(F)=\beta'+a\gamma>0$ and $W(F[1])<0$. Extensions give the required upper half-plane or strictly negative real ray for every nonzero object of the heart. [F1, step 1.2, step 2.1, algebra]

3.2 A nonzero $F_\tau$ object cannot have $\gamma=0$: the AP signs and $I\leq0$ force $\alpha=\delta'=0$, where its real charge is negative instead of positive. Positive finite weak-semistables have zero $F_\tau$ quotient, by the weak quotient inequality; the infinity case has $\gamma=0$ on every quotient and gives the same conclusion. Thus they lie in $T_\tau$. A negative weak-semistable has no $T_\tau$ subobject, by the weak subobject inequality. For slope zero a nonzero $T_\tau$ subobject must have $\gamma>0,I=0$ and itself be weak-semistable of slope zero; step2.1 gives $\beta'\geq a\alpha^2/\gamma$, contradicting its required negative real charge $\beta'+a\gamma$. Hence all nonpositive weak-semistables lie in $F_\tau$. Finite weak HN and torsion decompositions now force $T_\tau=T,F_\tau=F$. Equal heart and charge give equal semistable inequalities and equal slicings. [F1, step 2.1, step 2.2, algebra]

4.1 Here are the chain and support details for the changed cut. In a quotient chain in the tilted heart, the nonnegative discrete $I$ eventually stabilizes; rebase at that stage. AP cohomology stabilizes the quotient $H^0_B$ and the increasing $H^{-1}_B$ of its kernels. Successive kernels then have $I=0$; their negative AP cohomologies have $\gamma>0$, and their positive AP cohomologies lie in $C_0=\{\alpha=\gamma=\delta'=0\}$. The nonnegative discrete $\gamma$ of the cumulative $H^0_B$ decreases by the former contributions, so eventually only $C_0$ quotients remain. These have $\beta'=\beta<0$. For an increasing chain in $F$ with such quotients, saturate the first weak-HN term of its fixed reference object by the maximal $C_0$ subobject of the quotient. Each saturation is weak-semistable with fixed $\alpha,\gamma,\delta'$; step2.1 bounds its $\beta'$ below, whereas every proper $C_0$ enlargement decreases $\beta'$ by a fixed positive discrete amount. The saturations stabilize. Quotienting them removes one weak-HN term; finite induction proves the chain stabilizes. This is F1's saturation proof with the displayed changed coefficients, and proves noetherianity here. The rational stability function consequently has finite HN by F1's explicit maximal-slope argument: bounded-denominator weak slopes are bounded above by intersecting a hypothetical unbounded family of minimum positive denominator with one fixed subobject, taking sums and using noetherianity; discreteness gives a maximum, its largest subobject is semistable, and induction on the positive denominator finishes. [F1, step 1.2, step 2.1, step 3.1, algebra]

5.1 For completeness support is on the actual recursive lattice $u=(v_1,v_2\bmod\ker Z)$, not merely on $W$ itself. Vary the positive real coefficient $s$ in $W_s=\beta'+s\gamma+iI$, keeping this heart and the rational cut fixed. Put $Q_\eta=\beta'\gamma-\alpha\delta'+\eta Q_0(v_1)$. On $\ker W_s$,
$$Q_\eta\leq-(s-\eta C_0^2)\gamma^2-(a-\eta C_0^2)\alpha^2-\eta\|v_1\|^2,$$
which is negative definite on $u$ if $0<\eta<\min(s,a)/C_0^2$. A semistable object remaining semistable for arbitrarily large $s$ has either a weak-semistable positive AP term, or a shifted weak-semistable negative AP term with a $C_0$ positive term: compare the leading $s$ coefficients of slopes of its two AP terms and their first weak-HN terms. Step2.1 then gives $Q_\eta\geq0$, since a $C_0$ term adds $-\beta'(C_0)\gamma(F)\geq0$ in the second case. For other stable objects increase $s$ to the first wall. Such a wall exists if instability occurs at a later fixed endpoint: possible destabilizers have $0<I(A)\leq I(E)$ and bounded real endpoint charge, hence finitely many endpoint charge values in a discrete rational lattice. For each value retain the largest initial slope; affine slope differences give a least crossing. At that wall all same-ray stable factors have smaller positive $I$; phase-one factors cannot share a nonreal ray. Induction on discrete $I$ proves nonnegativity there and hence at the initial point, where the same quadratic inequality applies. At phase one and the least positive $I$ there is no smaller positive same-ray wall, giving the induction base. On a fixed positive $W$ ray, $Q_\eta\geq0$ is closed under sums: completing the square in the negative-definite kernel makes the cone the epigraph of a norm. Thus strictly semistable sums are covered. This proves norm support at $s=a$ by compactness of $Q_\eta\geq0$ on the unit sphere and its disjointness from $\ker W$. Local finiteness follows because nonzero lattice vectors have a positive minimum norm, support bounds all nonzero semistable masses below, and projection onto the centre of a phase interval of width less than one bounds the number of nonzero strict quotients in any chain. [F1, F4, step 2.1, step 3.1, step 4.1, algebra]

6.1 Induct from the point with charge $-\dim$ and phase one. At the first curve step this heart is simply $\operatorname{Coh}E$ and the charge is $-\deg+(b+ia)\operatorname{rk}$; ordinary slope inequalities give its slicing. At each next step the expansion $e^{-(b+ia)H_n}=1-(b+ia)H_n$ shows that $W=B_0-(b+ia)A$ is exactly the asserted product integral. The AP construction is local and independent of its degree-one ample line; factor automorphisms and all degree-zero line twists preserve it and the numerical coefficients. They preserve the weak-HN cut and the tilted heart, hence its full slicing. A point object belongs to the AP heart: its large-twist pushforward is the lower point object, which belongs to the base heart by induction. Its coefficients are $\alpha=\gamma=\delta'=0,\beta'=-1$, so its weak slope is infinity. Each of its weak-HN factors has $\gamma=0$, since these nonnegative leading imaginary parts add to zero; all their slopes are therefore infinity. Thus it belongs to $T$, hence to the constructed tilted heart. Its charge is $-1$. An object of a stability heart with negative real charge is semistable of phase one: in its finite HN filtration the factors have phases in $(0,1]$, their nonnegative imaginary charges sum to zero, and therefore every factor is on the negative real ray with phase one. This proves point semistability of phase one. No integrality of $\beta$ on the higher-dimensional $C_0$ category, and no simplicity of these rational-parameter point objects, is asserted. [F1, step 1.2, step 3.1, step 4.1, step 5.1, construct]

7.1 Global restricted uniqueness follows by induction using F2 on every coordinate fibre: torsion invariance gives its actual inverse slicing, coimage support and HN filtrations; it retains all point semistabilities of phase one and the remaining-factor torsion invariance. Its charge is the lower product charge, by $\operatorname{ch}(i_*G)=\operatorname{ch}(G)H_n$. Induction and steps1.3–3.2 apply. For $n=1$ the same phase-bound argument uses $B=\operatorname{Coh}E$ and point fibres. A nonzero $F_\tau$ would have imaginary charge $a\operatorname{rk}\leq0$, hence be positive-length torsion, with negative real charge, contradicting the required positive boundary. Thus its heart is $\operatorname{Coh}E$. The zero-dimensional base is the unique point slicing with point phase one: bounded complexes split into shifts of finite-dimensional vector spaces, whose nonzero inclusions/projections force their phases. Reordering the product gives a condition in this same restricted class with the same integral charge. Uniqueness identifies the actual conditions. For identical factors it also proves permutation invariance. [F1, F2, step 6.1, step 1.3, step 3.2, algebra]

8.1 We now enlarge support; no enlargement follows merely from equal charge. For each factor ordering $o$, keep the recursive support map $u_o$ actually constructed in step5.1, with its chosen Euclidean norm and bound $C_o$. All these bounds apply to the SAME slicing by step7.1. The combined map $u=(u_o)_o$ factors linearly through the intersection coordinates of step1.1: the leading map is the fibre class, whose coordinate indexed by $J$ is $c_{J\cup\{i\}}$ when the last factor is $i$; the constant coefficient is pushforward along that factor, with coordinates $c_J$. Conversely $u$ detects every coordinate. Inductively, all lower orderings in the leading components detect every $c_I$ with $i\in I$. Letting $i$ vary detects all nonempty $I$. Finally
$$Z_{a,b}=-\sum_I (-(b+ia))^{|I|}c_I$$
detects $c_\varnothing$ with coefficient $-1$. Thus $u$ is injective as a linear map on the full real intersection-coordinate space. Since every $u_o$ is numerical and the coordinates are reconstructed linearly from them, $v$ vanishes on numerical equivalences as claimed. Write this factorization as $u=T\circ v$ on $\Lambda_{n,\mathbb R}$, absorbing $M_n$ into $T$. Its inverse on its image has a finite operator norm $D$ (equivalently its minimum on the Euclidean unit sphere is positive). Every semistable object therefore satisfies
$$\|v(E)\|_2\leq D\|u(E)\|_2\leq D(\sum_o C_o^2)^{1/2}|Z_{a,b}(E)|.$$
This supplies the precise full-lattice support needed for deformation, separately from the earlier smaller recursive support. [F1, step 1.1, step 5.1, step 7.1, algebra]

9.1 Fix rational $(a,b)$. Step8.1 makes the polynomial charge path $b'\mapsto Z_{a,b'}$ a path in the finite-rank charge space with finite perturbation seminorm tending to zero. F3 constructs its nearby lifts $\tau_{b'}$ at slicing distance less than $1/4$ from $\sigma_{a,b}$. For each finite-order flat line on the whole product, tensoring acts trivially on $\Lambda_n$ and preserves the old slicing; it carries this lift to another equal-charge lift at distance less than $1/4$ from the old condition. Their mutual distance is less than $1/2$, so F3's local uniqueness makes the lift actually invariant under every such twist, of every order. This argument is applied separately to each torsion line with the same distance bound; it does not infer invariance under nontorsion Pic0 lines from density. Pullbacks of all torsion lines from each coordinate curve are among these lines, exactly meeting F2's hypothesis; the fibre condition retains the remaining-factor torsion invariance because those tensor functors commute with its pushforward. Apply F2 repeatedly to coordinate fibres down to a point. Its inverse slicing is a stability condition on that point, so each $\mathcal O_p$ is semistable at an odd integral phase. The distance bound to its old phase one makes that phase one. For rational $b'$ the restricted uniqueness in step7.1 identifies $\tau_{b'}=\sigma_{a,b'}$. This proves the required branch identification with all hypotheses checked; neither blanket global injectivity nor stable-point openness is used. [F2, F3, step 7.1, step 8.1, algebra] ∎

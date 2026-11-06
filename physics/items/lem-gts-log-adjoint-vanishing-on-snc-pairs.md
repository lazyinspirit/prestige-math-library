---
id: lem-gts-log-adjoint-vanishing-on-snc-pairs
kind: lemma
title: Log adjoint and nef big vanishing on smooth projective varieties
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-principalization-of-ideals
- thm-resolution-of-singularities-in-characteristic-zero
- thm-serre-vanishing
- thm-hilbert-polynomial-degree-support-dimension
- thm-serre-criterion-ampleness
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
- lem-gts-curve-nef-ample-perturbation-by-nakai-construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Demailly, Complex Analytic and Differential Geometry
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Chapter VII §§1–3, printed/PDF pp. 329–334: Theorems 1.1–1.4, basic inequality (2.1), Corollaries
      2.3 and 2.5, and Theorems 3.3 and 3.5. Only this range was read; complete-metric and singular-boundary arguments
      are reconstructed locally.'
  - title: Fujino, Fundamental theorems for the log minimal model program
    url: https://arxiv.org/abs/0909.4445
    locator: 'arXiv:0909.4445v3, §§12–13 printed pp. 34–40: Theorems 12.1 and 13.1, Lemmas 12.2–12.3 and 13.2, and
      their proofs. This is nonvanishing/base-point-free context, not an imported local proof.'
dependency_level: 1
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-resolution-of-singularities-in-characteristic-zero: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-hilbert-polynomial-degree-support-dimension: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
---

## Statement

Assume AC. Let X be a smooth complex projective variety. Let Gamma be an effective simple-normal-crossing rational divisor with every coefficient strictly less than one. If M is a Cartier divisor and $M−K_X−\Gamma$ is an ample rational divisor, then $H^q(X,O_X(M))=0$ for every $q>0$.

Also, if N is a curve-nef and big Cartier divisor on X, then $H^q(X,O_X(K_X+N))=0$ for every $q>0$. Curve-nef means nonnegative degree on EVERY integral curve. This second assertion uses the separately constructed curve-nef plus ample implies ample bridge, exposed in the Facts; it does not redefine nef as a closure convention.

## Facts & Assumptions

**Given:** The geometric data in the Statement, and the ordinary interfaces explicitly exposed here.

[F1] Smooth projective varieties have their Fubini–Study Kähler metric and local Dolbeault resolution. The untwisted Kähler Hodge supplier is [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]. For a line bundle, local holomorphic frames give the same Dolbeault resolution; its smooth-form sheaves are fine. The twisted Dolbeault Laplacian has scalar positive elliptic principal symbol, so [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] applies. Its compact selfadjoint resolvent gives the finite-dimensional smooth kernel and Green inverse by the spectral theorem; bar-partial commutes with that Laplacian because its square is zero. Thus a closed smooth form has a smooth harmonic representative, and a distributionally exact one has zero harmonic component by integration by parts. This derives the line-valued Hodge consequence used below; the untwisted public Statement is not silently extended to a positivity theorem. The proof below derives the complete-metric Bochner and Hilbert argument rather than importing Kawamata–Viehweg or Nadel vanishing.

[F2] Log resolutions may be chosen as finite compositions of blowups with smooth centers, with total divisor simple normal crossing. [[thm-principalization-of-ideals]], [[thm-resolution-of-singularities-in-characteristic-zero]].

[F3] [[thm-serre-criterion-ampleness]] supplies eventual global generation of coherent twists by an ample line bundle; [[thm-serre-vanishing]] supplies only positive-degree cohomology vanishing. [[thm-hilbert-polynomial-degree-support-dimension]] bounds the section growth of ample twists by the support dimension. These distinct inputs, and the explicit projective-space twisting-sheaf calculation, are used for the dominating twist, big decomposition and smooth-blowup computation below.

[F4] Attached geometric bridge [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]: a curve-nef rational divisor plus an ample rational divisor is ample on a smooth projective variety, with its actual Serre/Nakai construction. Its actual source Statement is the curve-nef ample-perturbation conclusion, together with the projective numerical ampleness criterion; it is not assumed to follow merely from the word nef. The first SNC-ample assertion does not use it. The second assertion does.

[F5] Full AC is used for Hilbert representation, weak compactness and the ordinary coherent-cohomology interfaces. [[def-axiom-of-choice]].

## Proof

1.1 Dimension zero is immediate, and degrees above the dimension vanish by the local Dolbeault resolution. In positive dimension we prove the analytic form that implies the first assertion. Suppose a holomorphic line bundle B has on X minus an SNC divisor D a smooth Hermitian metric h of curvature $i\Theta_h\ge b \omega$ for a fixed $b>0$, and locally along D has the form $h=h0 \prod_j |z_j|^{−2a_j}$, with h0 smooth positive and $0\le a_j<1$. Then $H^q(X,K_X \otimes B)=0$ for $q>0$. A smooth closed B-valued (n,q)-form f is square integrable for h, because every local integral of product $|z_j|^{−2a_j}$ is finite. All estimates below concern these top-holomorphic-degree forms; their metric-volume cancellation is important. [F1, F5, given, construct]

2.1 On X minus D construct a complete Kähler metric. Scale defining-section norms so $\log|s_j|^2<−1$, and add to a sufficiently large multiple of omega the forms $dd^c[−\log(−\log|s_j|^2)]$. Their leading normal term is a positive constant times $|dz_j|^2/(|z_j|^2 \log^2|z_j|)$, while their tangential negative terms are bounded by a fixed multiple of omega. The resulting metric $\omega_P$ is Kähler and complete, since the radial length integral int dr/(r|log r|) diverges. For each $\epsilon>0$ use the complete metric $\omega_{\epsilon}=\omega+\epsilon \omega_P$. Local metric coefficients and h are smooth on this open manifold. Distance cutoffs have compact support, tend to one, and have gradient bounded by 2/R; Lipschitz cutoffs suffice and may be smoothed in coordinate patches. Cutoff multiplication followed by local translation convolution approximates the joint graph domains of bar-partial and its formal adjoint. The error is the cutoff gradient term tending to zero and the local Friedrichs commutator: expand the smooth coefficients at the convolution center, subtract their constant part, and use the first derivative remainder to pass to zero in L2. Thus compactly supported smooth forms are a graph core. [F1, step 1.1, construct]

3.1 Here is the integration identity on that core. In Kähler normal coordinates and a line frame, expand bar-partial as alternating covariant bar derivatives and its adjoint as the negative contraction of covariant holomorphic derivatives. In the sum $\|\bar\partial v\|^2+\|\bar\partial_h^*v\|^2$, integrate mixed derivative terms once. Their commutator is line curvature plus tangent curvature; the tangent-curvature contractions cancel with the same contractions in the holomorphic adjoint square because torsion is zero. The remaining line-curvature operator is $[i\Theta_h,\Lambda]$. Thus $\|\bar\partial v\|^2+\|\bar\partial_h^*v\|^2 = \|D'_h{}^* v\|^2 +\int\langle[i\Theta_h,\Lambda]v,v\rangle$. If curvature is diagonal with eigenvalues $\lambda_j$ in a unitary frame, its action on the coefficient $dz_1$ wedge ... wedge $dz_n$ wedge $d\bar z_J$ is multiplication by $\sum_{j\in J}\lambda_j$: the wedge/contraction commutator has one contribution precisely for each antiholomorphic index present. The formula therefore has the claimed sign and is positive for $q>0$. Graph-core approximation extends the inequality to the maximal Hilbert domains. [F1, step 2.1, algebra]

4.1 Denote that positive curvature operator by $B_{\epsilon}$. The Hilbert-complex argument gives, for closed f with finite integral $<B_{\epsilon}^{-1}f,f>$, a solution $\bar\partial u=f$ with $\|u\|_{h,\omega_{\epsilon}}^2 \le \int\langle B_{\epsilon}^{-1}f,f\rangle_{h,\omega_{\epsilon}}$. Indeed let $T=\bar\partial$ in degrees q−1 to q and $S=\bar\partial$ in degrees q to q+1, closed on their maximal domains. Project a test vector v orthogonally to ker S. This projection remains in Dom T*, with the same T*, because Ran T is contained in ker S. On that kernel, the identity in step3.1 and weighted Cauchy–Schwarz bound the functional T*v $\mapsto  <f,v>$ by the square root of the displayed energy times ||T*v||. It is well-defined by the same estimate. Extend this bounded functional and apply Hilbert representation; the representing u satisfies $Tu=f$ against every test vector. This is an actual construction, including the closed-range-independent case. [F5, step 3.1, algebra, construct]

5.1 The estimate is uniform as epsilon tends to zero despite completeness blowing up near D. Diagonalize $\omega_{\epsilon}$ relative to omega, with eigenvalues $t_j\ge 1$. The (n,q) coefficient norm times the volume factor is $|f_J|^2/\prod_{j\in J}t_j$. Since $\text{curvature}\ge b \omega$, the inverse-curvature energy is bounded by $\sum_J |f_J|^2 /[b(\sum_{j\in J}1/t_j)\prod_{j\in J}t_j] \le b^{-1}\sum_J |f_J|^2$. The last inequality uses $q\ge 1$ and $t_j\ge 1$. It also follows for nondiagonal curvature by inverse-operator monotonicity. On every compact subset of X minus D the metrics tend smoothly to omega. Weak subsequences of the solutions, taken on a countable compact exhaustion and diagonally, give $\bar\partial u=f$ and $||u||_{h,\omega}^2\le b^{-1}||f||_{h,\omega}^2$. Fatou's inequality gives the global bound. [F5, step 1.1, step 2.1, step 4.1, algebra, construct]

6.1 This equation extends across D as a distributional equation on X. The singular metric dominates a fixed smooth line metric, so u is ordinary locally L2. Around each normal-crossing coordinate hyperplane take a logarithmic cutoff with transition |z| in $(r^2,r)$; its derivative is bounded by C/(|z||log r|), whose squared area integral is O(1/|log r|). Product cutoffs handle crossings. The boundary term in the distributional equation tends to zero by Cauchy–Schwarz with u in L2 and this vanishing cutoff-gradient norm. Hence $\bar\partial u=f$ globally. Smooth Dolbeault Hodge theory then implies vanishing of the class of f: pair the equation with its smooth harmonic representative and integrate by parts, or use the smooth Green resolution of the resulting distributional exact form. This proves the analytic assertion in step1.1. [F1, step 1.1, step 5.1, algebra]

7.1 For the first public assertion put $B=O_X(M−K_X)$. An ample rational divisor $A=M−K_X−\Gamma$ has a positive metric obtained by taking a root of the Fubini–Study metric on a sufficiently divisible very ample multiple. Tensor that rational metric with the canonical divisor metrics of Gamma. The result is a genuine metric on B, with strictly positive curvature on X minus Supp Gamma and precisely the singular exponents $a_j$ in [0,1). Steps1.1–6.1 apply. [F3, step 1.1, step 6.1, construct]

8.1 We give the big decomposition used for the second assertion. Choose a very ample divisor H. Bigness supplies a cubic, or in dimension n an n-th degree, lower bound for h0(rN) along sufficiently divisible r. On the fixed hyperplane $H, h0(H,rN|H)=O(r^{n−1})$: choose a large ample twist B on H with B−N|H globally generated by F3, and choose a section of B−N|H which is nonzero on every component and associated point of H. Its r-th power embeds $O_H(rN)$ into $O_H(rB)$. The ample Hilbert-polynomial bound and Serre vanishing in F3 give $h^{0}(H,rB)=O(r^{n−1})$, hence the required bound. The finitely many associated-point avoidance conditions can be satisfied over C. The restriction sequence therefore gives a section of rN−H for some r. Write $rN=H+G$ with G effective. Resolve G by smooth-center blowups $\pi:Y\to X$. A positive exceptional divisor F with −F relatively ample exists for this composition: at each blowup its negative exceptional divisor is relatively ample; multiply the pulled-back earlier choices by sufficiently large integers before adding the next one. For a sufficiently small positive rational $t, H_Y=\pi*H−tF$ is ample, because a relatively ample line bundle tensored with a sufficiently high pullback of an ample line bundle is ample by the relative projective embedding and Serre's criterion. Thus r pi*N $= H_Y + G_Y, G_Y=\pi*G+tF$ has an ample rational first term and an effective SNC second term. [F2, F3, step 7.1, construct]

9.1 Let $\omega_Y$ be a fixed projective Kähler metric. By the attached curve-nef/ample bridge, pi*N+delta $A_Y$ is ample for every rational $\delta>0$ and fixed ample $A_Y$. Positive metrics on these rational ample bundles, tensored with the negative delta-th power of the fixed $A_Y$ metric, give smooth metrics on pi*N with $\text{curvature}\ge −C\delta \omega_Y$. The big decomposition in step8.1 gives a metric on the same bundle with $\text{curvature}\ge b0 \omega_Y$ off $G_Y$ and logarithmic exponents equal to the coefficients of $G_Y/r$. Take a convex combination of the two metric potentials, of weights 1−s and s. First fix $s>0$ so small that every exponent $s \operatorname{coeff}(G_Y)/r$ is $<1$, then delta small enough that $s b0−(1−s)C\delta>0$. The combined metric satisfies exactly step1.1. Therefore $H^q(Y,K_Y+\pi*N)=0$ for $q>0$. This uses curve-nef, not an unmentioned metric-nef convention. [F1, F4, step 1.1, step 6.1, step 8.1, construct]

10.1 Finally $H^q(Y,K_Y+\pi*N)=H^q(X,K_X+N)$. Here is the required smooth-blowup calculation rather than a rational-singularity citation. For a blowup along a smooth center of codimension $r, K_Y=\pi*K_X+(r−1)E$: in a regular-center chart (z1,z1u2,...,z1ur), the Jacobian factor is $z1^{r−1}$. The standard affine charts of the regular-center Rees algebra have the projective-simplex monomial Cech contraction, giving $\pi*O_Y=O_X$ and $R^q \pi*O_Y=0$ for $q>0$. For $1\le a\le r−1$ use $0 \to  O_Y((a−1)E) \to  O_Y(aE) \to  O_E(−a) \to  0$. On the projective (r−1)-space fibres every cohomology of O(−a) vanishes in this range, by the standard homogeneous Laurent monomial computation. Relative local trivializations give the identical direct-image vanishing. Induction in a yields $\pi*O_Y((r−1)E)=O_X$ and all its higher direct images zero. Projection formula gives $\pi*\omega_Y=\omega_X$ and $R^q \pi*\omega_Y=0$ for $q>0$. The same holds for the finite composition by Leray; tensoring N and Leray prove the asserted equality. Step9.1 therefore proves the second public assertion. [F2, F3, step 8.1, step 9.1, algebra] ∎

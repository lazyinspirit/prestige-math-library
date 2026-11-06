---
id: thm-gts-limit-mixed-hodge-structure-and-nilpotent-orbit
kind: theorem
title: "Limit mixed Hodge structure and nilpotent orbit"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF plus the exact axiom strength inherited from the Hodge and monodromy suppliers."
deps:
  - def-gts-semistable-degeneration-and-limit-mixed-hodge-structure-data
  - thm-gts-quasi-unipotent-monodromy-for-geometric-polarized-vhs
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-rational-mixed-hodge-structure
  - lem-gts-horizontal-period-map-distance-decreasing
  - lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
dependency_roles:
  def-gts-semistable-degeneration-and-limit-mixed-hodge-structure-data: mathematical-premise
  thm-gts-quasi-unipotent-monodromy-for-geometric-polarized-vhs: mathematical-premise
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-rational-mixed-hodge-structure: mathematical-premise
  lem-gts-horizontal-period-map-distance-decreasing: mathematical-premise
  lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§§3.4.3–3.5, Theorems 3.21–3.22, printed pp. 50–52."
    - title: "Eduardo Cattani and Aroldo Kaplan, Degenerating Variations of Hodge Structure, Astérisque 179–180 (1989)"
      url: "https://numdam.org/item/AST_1989__179-180__67_0.pdf"
      locator: "Definition (1.16), printed p. 72: exact primitive polarization convention; §§2–4, printed pp. 72–86: canonical extensions, limit mixed Hodge structures and SL(2)-orbit asymptotics."
    - title: "Claude Sabbah and Christian Schnell, Degenerating complex variations of Hodge structure in dimension one, arXiv:2206.08166v1"
      url: "https://arxiv.org/pdf/2206.08166v1"
      locator: "§§113–128 (PDF pp. 53–58), §§132–142 (pp. 60–66) and §§239–241 (pp. 107–108): invariant-subspace recognition, invariant norm comparison, explicit models and graded limiting structure. The analytic extension argument is reconstructed directly below."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathbb V_{\mathbb Z}$ be a polarized integral variation of weight $k$ on $\Delta^*$ with unipotent monodromy $T$. Set $N=\log T$ and choose the coordinate $t=e^{2\pi iz}$ on the universal cover. In a flat marking, let $\Phi(z)$ be the horizontal period map and let $\Psi(t)=e^{-zN}\Phi(z)$, viewed in the compact dual of the period domain. Then $\Psi$ extends holomorphically to $t=0$ with limit $F_\infty$; the filtration $F_\infty$ together with the monodromy weight filtration $W(N)[-k]$ defines a polarized limit mixed Hodge structure. There is a holomorphic map $\Gamma(t)$ into a local Lie-algebra chart with $\Gamma(0)=0$ such that
$$\Phi(z)=e^{zN}e^{\Gamma(e^{2\pi iz})}F_\infty,$$
and the nilpotent orbit $e^{zN}F_\infty$ belongs to the period domain for $\operatorname{Im}z$ sufficiently large. The formula gives the precise local asymptotic: $\|\Gamma(t)\|=O(|t|)$ in that chart. The theorem does not assert global Torelli or a compactification of the entire moduli space.

## Statement references

[[def-gts-semistable-degeneration-and-limit-mixed-hodge-structure-data]]

[[thm-gts-quasi-unipotent-monodromy-for-geometric-polarized-vhs]]

[[def-rational-mixed-hodge-structure]]

[Voisin, Theorems 3.21–3.22](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

[Cattani–Kaplan, §§2–4](https://numdam.org/item/AST_1989__179-180__67_0.pdf)

## Facts & Assumptions

**Given:** The polarized integral variation, unipotent marking action and coordinate in the Statement. Write h for its Hodge metric and $\nabla =D+θ+θ\dagger$ for the flat-connection decomposition into its unitary and adjacent Hodge-degree components.

[F1] The horizontal Schwarz bound is ||θ(∂/∂z)||≤C/Im z, with C depending only on Hodge numbers ([[lem-gts-horizontal-period-map-distance-decreasing]]). We use this actual completed supplier, not a nilpotent-orbit theorem.

[F2] The definition of rational mixed Hodge structure and its polarization convention is [[def-rational-mixed-hodge-structure]]. The zero-centred monodromy-weight convention and shift are [[def-gts-semistable-degeneration-and-limit-mixed-hodge-structure-data]].

## Proof

**Proof technique:** direct.

1.1 (The flat canonical extension, without assuming extension of F.) Use the marked quotient convention (z,v)∼(z+1,Tv), which is the convention $Φ(z+1)=TΦ(z)$. The vectors $e^{zN}e_a$ form an equivariant holomorphic frame, where $(e_a)$ is a constant marked basis. Coefficients in this frame are obtained by $e^{-zN}$, so the Hodge filtration in this frame is exactly Ψ. Extend the frame freely across $t=0$. Differentiating $e^{zN}$ gives connection matrix N $dz=(N/(2πi))dt/t$; its residue is nilpotent. This fixes both the bundle convention and the scalar/sign without changing the stated period-map convention. [F1, F2, given, construct]

2.1 Here is uniqueness of the nilpotent-residue logarithmic lattice, not an assumption of regular singularity. The transition G(t) between two such logarithmic frames satisfies $tG'=A(t)G-GB(t)$, with A,B holomorphic and with nilpotent residues at zero. Integrating the norm inequality along radii gives $||G(t)||\le C|t|^{-b}$; the same equation for $G^{-1}$ gives its polynomial bound, uniformly in the angle on one fixed circle. Hence G and its inverse are meromorphic at zero, by multiplying by a sufficiently large integral power and applying the removable-singularity theorem entry by entry. [F1, F2, step 1.1, given, algebra]

3.1 Let a be the least integer with $t^aE_{1}\subset E_{2}$. The image of $t^aE_{1}$ in E₂/tE₂ is nonzero by minimality and is stable under the logarithmic operator. Its residue has the single eigenvalue a, because the original residue on E₁ is nilpotent, but also has eigenvalue zero, because it is a subquotient of the nilpotent residue on E₂. Therefore $a=0$. Interchanging the lattices gives both inclusions. This proves the uniqueness of the canonical logarithmic extension with nilpotent residue. It does not yet assert that its Hodge filtration extends. [F1, F2, step 2.1, given, algebra]

4.1 (Coarse Hodge norm bounds from the existing Schwarz root.) Use the decomposition $\nabla =D+θ+θ\dagger$ from the actual curvature supplier, and write $θ=A(z)dz$. That supplier proves ||A(z)||≤c/y. For a flat vector v, $\nabla v=0$ gives $D_zv=-Av$ and $D_{\bar z}v=-A\dagger v$. Metric compatibility of D, with h linear in its first argument, gives $\partial _z$ $h_z(v,v)=h_z(D_zv,v)+h_z(v,D_{\bar z}v)=-2h_z(Av,v)$ and $\partial _{\bar z}h_z(v,v)=-2h_z(A\dagger v,v)$. [F1, F2, step 3.1, given, algebra]

5.1 Since $\partial _y=i(\partial _z-\partial _{\bar z})$, Cauchy–Schwarz applied to the two identities in step 4.1 gives $|\partial _y$ log $h_z(v,v)|\le 4||A(z)||\le c_{1}/y$. [F1, F2, step 4.1, given, algebra]

6.1 Integrating on each vertical ray, and using compactness of 0≤x≤1 at $y=Y$, gives [F1, F2, step 5.1, given, algebra]

7.1 c $y^{-b}||v||_{0}^{2}\le h_z(v,v)\le C$ $y^b||v||_{0}^{2}$. [F1, F2, step 6.1, given, algebra]

8.1 The nilpotent matrices $e^{±zN}$ and their inverses have polynomial growth in y for bounded x. Consequently in the untwisted canonical frame the Hodge metric and its inverse are bounded by powers of y. Exterior-power metrics have the same property, with enlarged exponents. No sharp monodromy-weight asymptotic is being inferred from these coarse bounds. [F1, F2, step 7.1, given, algebra]

9.1 (Determinant Hodge lines have controlled scalar curvature.) Fix p and $r=\operatorname{rank}$ $F^p$. The Plücker line $ℓ_p=\det$ $F^p$ is a holomorphic line subbundle of $\wedge ^r$ of the canonical flat bundle on Δ*. Give it the determinant of the Hodge metric. Its scalar curvature coefficient in the z coordinate has absolute value at most $C_p/y^{2}$. [F1, F2, step 8.1, given, algebra]

10.1 To check this, the Chern connection of the holomorphic flat bundle with its Hodge metric is D−θ+θ†: its (0,1) part is the given holomorphic structure and its off-diagonal parts are opposite adjoints. Flatness and $D_{\bar z}A=0$ give curvature −2[A,A†]. The second fundamental form of $F^p$ is the boundary lowering block of −θ. The subbundle curvature formula is obtained by multiplying the two block connection matrices; taking its trace bounds the determinant curvature by a fixed dimension multiple of ||A||². Thus for any nonzero holomorphic local frame s of $ℓ_p$, [F1, F2, step 9.1, given, algebra]

11.1 $|Δ_z$ log $||s||_h^{2}|\le C_p/y^{2}$. [F1, F2, step 10.1, given, algebra]

12.1 This calculation only uses the finite-dimensional connection identities already established for the variation. It does not posit ambient period-domain curvature or positivity of this individual determinant line. [F1, F2, step 11.1, given, algebra]

13.1 (A scalar cylinder lemma.) Let u(x,y) be smooth and 1-periodic for $y>Y$, and suppose |Δu|≤C/y². Then [F1, F2, step 12.1, given, algebra]

14.1 $u(x,y)=a$ y+Re $H(e^{2πiz})+O(\log  y)$, [F1, F2, step 13.1, given, algebra]

15.1 where H is holomorphic on the punctured disk. More precisely there exists a smooth periodic $v=O(\log  y)$ with $Δv=Δu$; u−v is harmonic and has the displayed linear-plus-holomorphic form. [F1, F2, step 14.1, given, algebra]

16.1 Here is the construction. Let $f=Δu$ and $f_n(y)$ its Fourier coefficients. Its mean has |f₀(y)|≤C/y². Choose v₀ with $v_{0}''=f_{0}$ and $v_{0}'(y)=-\int _y^\infty f_{0}(s)ds$, so $v_{0}=O(\log  y)$. For n≠0 solve $v_n''-(2πn)^{2}v_n=f_n$ on the half-line with the decaying Green kernel [F1, F2, step 15.1, given, algebra]

17.1 $v_n(y)=-(4π|n|)^{-1}\int _Y^\infty e^{-2π|n||y-s|}$ $f_n(s)ds$. [F1, F2, step 16.1, given, algebra]

18.1 The series of nonzero modes converges uniformly, bounded by a constant times $y^{-2}+e^{-c(y-Y)}$, because the integral contributes another factor $|n|^{-1}$; split the s integral at y/2 to see the stated bound uniformly. Local elliptic regularity, or differentiating the locally rapidly convergent Fourier series of the smooth right side, makes v smooth and gives $Δv=f$. The harmonic periodic function u−v has a harmonic conjugate after subtracting its one real period, represented by a y term. The remaining conjugate is periodic, so it is the real part of a single-valued holomorphic H(t). This proves the lemma, including the possible essential harmonic terms; those are not being assumed absent. [F1, F2, step 17.1, given, algebra]

19.1 (Extension of each Hodge filtration.) A holomorphic line bundle on Δ* has a nowhere-zero holomorphic section. An elementary construction suffices here: choose a smooth nonzero frame on the cylinder, solve its scalar ∂bar equation, and multiply by the resulting exponential. The scalar ∂bar equation on Δ* can be solved by a locally finite annular decomposition and Cauchy transforms; subtract finite Laurent polynomials on earlier compact annuli so that the series converges there with all derivatives. This uses the ordinary Laurent expansion of a holomorphic function on an annulus, not a Hodge extension theorem. [F1, F2, step 18.1, given, algebra]

20.1 Choose such a frame s(t) of $ℓ_p$. Apply the scalar cylinder lemma in steps 13.1–18.1 to $u=\log ||s||_h^{2}$. Multiplying s by the nowhere-zero holomorphic gauge exp(−H(t)/2) removes the harmonic term. The resulting holomorphic frame satisfies [F1, F2, step 19.1, given, algebra]

21.1 $||s(t)||_h^{2}=e^{a y}$ $y^{O(1)}$. [F1, F2, step 20.1, given, algebra]

22.1 By the coarse norm bounds in steps 4.1–8.1 its coefficient vector in the trivial exterior-power canonical frame has Euclidean norm at most C $e^{a y/2}$ $y^b$. This is bounded by an integral power of $|t|^{-1}$. Every coefficient is therefore meromorphic at zero. Multiply by a common power of t, then remove their common zero of finite order, obtaining a holomorphic vector with a nonzero value at zero. Its line defines the holomorphic extension of the Plücker map. Decomposability is preserved because the Grassmannian is closed in its Plücker embedding. Thus $F^p$ extends as a holomorphic subbundle of the canonical extension. [F1, F2, step 21.1, given, algebra]

23.1 All incidences $F^{p+1}\subset F^p$ and Q-isotropy identities hold on the punctured disk and hence at zero by holomorphic continuation. The result is a holomorphic map Ψ:Δ→check D, with $F_\infty =Ψ(0)$. Logarithmic Griffiths transversality gives N $F_\infty ^p\subset F_\infty ^{p-1}$: multiply the connection equation by t, extend the holomorphic subbundles, and set $t=0$. The nonzero scalar 1/(2πi) in the residue does not affect this inclusion. [F1, F2, step 22.1, given, algebra]

24.1 (A polynomial lower bound for distance to the period-domain boundary.) The coarse metric bounds also control how near Φ(z) can lie to the boundary of D in the compact dual. Fix F₀∈D with Hodge metric h₀ and Weil operator C₀. For any F∈D, let S be defined by $h_F(u,v)=h_{0}(Su,v)$. It is positive self-adjoint and belongs to the real Q-isometry group: $S=C_{0}^{-1}C_F$, with the signs dictated by Q's parity. Also $C_{0}SC_{0}^{-1}=S^{-1}$. The positive square root gives $g=S^{-1/2}$ in that group and $gC_{0}g^{-1}=C_F$. Indeed in an h₀-orthogonal eigenbasis, Q pairs only reciprocal eigenvalues, so every real power of S preserves Q. [F1, F2, step 23.1, given, algebra]

25.1 Therefore $g^{-1}F$ has Weil operator C₀ and lies in the compact orbit K·F₀, where K is the h₀-unitary subgroup of the Q-isometry group. Its stabilizer is the compact product preserving the fixed Hodge blocks. The compact orbit lies entirely inside D. The coarse norm bounds in steps 4.1–8.1 bound ||g|| and $||g^{-1}||$ by powers of y for $F=Φ(z)$. [F1, F2, step 24.1, given, algebra]

26.1 For the fixed projective Plücker embedding, the Lipschitz constant of the action of a matrix g and of its inverse is bounded by a fixed power of $||g||+||g^{-1}||$. This follows by differentiating its exterior-power coordinate matrices and using the lower bound $||gv||\ge ||g^{-1}||^{-1}||v||$ in normalized projective coordinates. As g preserves D and its boundary, and K·F₀ has a positive distance from that boundary, there are constants $c,b>0$ with [F1, F2, step 25.1, given, algebra]

27.1 dist(Φ(z),∂D)≥c $y^{-b}$,   0≤x≤1, [F1, F2, step 26.1, given, algebra]

28.1 for the fixed compact-dual metric. This is a finite-dimensional metric calculation, not an SL₂-orbit estimate. [F1, F2, step 27.1, given, algebra]

29.1 (The nilpotent orbit and the exponential correction.) The holomorphic extension lies in an opposite-cell Lie-algebra chart around F∞. In that chart uniquely write [F1, F2, step 28.1, given, algebra]

30.1 $Ψ(t)=e^{Γ(t)}F_\infty$,    $Γ(0)=0$, [F1, F2, step 29.1, given, algebra]

31.1 with Γ holomorphic. Its Taylor expansion gives ||Γ(t)||≤C|t| on a smaller disk. Since $e^{±zN}$ have polynomial matrix growth, [F1, F2, step 30.1, given, algebra]

32.1 $dist(Φ(z), e^{zN}F_\infty )\le C$ $y^b$ $e^{-2πy}$,   0≤x≤1. [F1, F2, step 31.1, given, algebra]

33.1 For large y this is smaller than the boundary-distance lower bound in steps 24.1–28.1. The nilpotent-orbit point is therefore inside D. Real translations $e^{xN}$ preserve D, so membership holds for all x once it holds on one fundamental strip. This proves the analytic extension, opposite-cell correction and nilpotent-orbit-membership parts of the target, with the asserted chart estimate O(|t|). [F1, F2, step 32.1, given, algebra]

34.1 (The canonical monodromy weight filtration.) First, $\exp (aN)=T^a$ preserves Q for every integer a; since exp(aN) is polynomial in a, this identity holds for every real a. Differentiating gives $Q(Nu,v)+Q(u,Nv)=0$. Choose finite nilpotent Jordan strings e,N $e,\ldots ,N^m$ e. Give $N^j$ e weight m−2j and let $W_l$ be the span of all vectors of weight at most l. Then $NW_l\subset W_{l-2}$, and $N^l:Gr_l^W\to Gr_{-l}^W$ is an isomorphism for l≥0. [F1, F2, step 33.1, given, algebra]

35.1 These conditions uniquely determine W. If $N^{r}=0$ and $N^{r-1}\ne 0$, all graded pieces outside [−r+1,r−1] vanish, because the required isomorphisms there are zero maps. Moreover $W_{-r+1}=im$ $N^{r-1}$ and $W_{r-2}=\ker$ $N^{r-1}$. Pass to ker $N^{r-1}/im$ $N^{r-1}$, whose nilpotence index is smaller, and induct. The Jordan construction restricts to exactly that smaller centred filtration, proving uniqueness and independence of the chosen strings. This argument also proves functoriality under maps commuting with N. [F1, F2, step 34.1, given, algebra]

36.1 Q makes the filtration self-dual: [F1, F2, step 35.1, given, algebra]

37.1 $(W_l)^\perp =W_{-l-1}$. [F1, F2, step 36.1, given, algebra]

38.1 Indeed the dual filtration defined by the right side has the same lowering and $N^l$-isomorphism properties, since N is Q-skew. Uniqueness identifies it with W. [F1, F2, step 37.1, given, algebra]

39.1 (A real Q-skew grading and its SL₂ representation.) A Jordan grading H₀ acts by m−2j on each $N^j$ e. It splits W and satisfies $[H_{0},N]=-2N$. Any two such gradings H₀,H₁ are conjugate by a unique exp B where $[B,N]=0$ and B lowers W strictly. To prove this, decompose H₁−H₀ by the negative weights of ad H₀. At its highest remaining negative weight a, conjugation by $B_a=-(H_{1}-H_{0})_a/a$ removes that term. This commutes with N because its weight components do separately. Continue through the finitely many negative weights, using the finite nilpotent exponential/BCH formulas. Uniqueness follows from the first nonzero weight of a putative stabilizing B. [F1, F2, step 38.1, given, algebra]

40.1 Write † for the Q-adjoint. Self-duality of W shows that −H₀† is another such grading. Let $-H_{0}\dagger =e^B$ H₀ $e^{-B}$. Adjointing and using the uniqueness just proved gives $B\dagger =B$. Thus [F1, F2, step 39.1, given, algebra]

41.1 $H=e^{B/2}H_{0}e^{-B/2}$ [F1, F2, step 40.1, given, algebra]

42.1 satisfies $H\dagger =-H$, is real, splits W and has $[H,N]=-2N$. This is an explicit finite construction, not an invocation of Jacobson–Morozov. [F1, F2, step 41.1, given, algebra]

43.1 The grading and N determine a unique raising operator $X_R$ with $[H,X_R]=2X_R$ and $[X_R,N]=H$. On a primitive highest string of length m+1 it is [F1, F2, step 42.1, given, algebra]

44.1 $X_R$ $N^j$ $e=j(m-j+1)N^{j-1}e$. [F1, F2, step 43.1, given, algebra]

45.1 The $N^l$-isomorphisms prove the primitive-string decomposition by induction, so these formulas define the operator on the whole space. The Q-adjoint relations and uniqueness give $X_R\dagger =-X_R$. [F1, F2, step 44.1, given, algebra]

46.1 Set $B_Q(u,v)=i^kQ(u,bar v)$, the flat Hermitian polarization form. Then H is $B_Q$-skew, while [F1, F2, step 45.1, given, algebra]

47.1 $Y=iN$,    $X=-iX_R$ [F1, F2, step 46.1, given, algebra]

48.1 are $B_Q$-self-adjoint and satisfy $[H,X]=2X$, $[H,Y]=-2Y$, $[X,Y]=H$. This fixes the factors of i used in the later primitive polarization calculation. [F1, F2, step 47.1, given, algebra]

49.1 (A boundedness lemma for a monodromy-invariant flat vector.) For a graded Hermitian flat bundle with $\nabla =D+θ+θ\dagger$, write $θ=A$ dz and let v be flat and nonzero. The same finite connection identities as in the existing horizontal-curvature root give [F1, F2, step 48.1, given, algebra]

50.1 $\partial _z$ $h(v,v)=-2h(Av,v)$, [F1, F2, step 49.1, given, algebra]

51.1 $\partial _z\partial bar_z$ $h(v,v)=2(||Av||^{2}+||A\dagger v||^{2})$. [F1, F2, step 50.1, given, algebra]

52.1 Therefore log h(v,v) is subharmonic: Cauchy–Schwarz bounds |h(Av,v)|² by both ||Av||²h(v,v) and ||A†v||²h(v,v). Also |d log h(v,v)|≤C||A||. These identities do not require a real lattice; they hold for an auxiliary complex graded Hermitian flat bundle as well. [F1, F2, step 51.1, given, algebra]

53.1 Suppose v is monodromy invariant and ||A||≤C/y. Then $u=\log$ h(v,v) is 1-periodic in x, has |du|≤C'/y, and is subharmonic. Its mean u₀(y) satisfies u₀''≥0 and |u₀'|≤C'/y. Thus u₀' increases to zero and is nonpositive; u₀ is bounded above. Moreover |u−u₀|≤C'/y on a period by the x-derivative bound. Hence the Hodge norm of this invariant flat vector is uniformly bounded near the puncture. [F1, F2, step 52.1, given, algebra]

54.1 For two such metrics on isomorphic flat bundles, apply this to the invariant identity section in their Hom bundle and then to its inverse. The Hom Higgs operator is the difference of the two Higgs actions, so its norm is bounded by their sum. Its flat connection and induced Hermitian metric have the same D+θ+θ† identities. The Hilbert–Schmidt norm bounds the operator norm. Consequently the two metrics are uniformly mutually bounded. This comparison does not assume that the flat isomorphism preserves a Hodge filtration or a polarization. [F1, F2, step 53.1, given, algebra]

55.1 (Explicit auxiliary models and the sharp weight bound.) On the two-dimensional complex space with basis e₊,e₋ take $H=\operatorname{diag}(1,-1)$, Y $e_{+}=e_{-}$, Y $e_{-}=0$ and the Hermitian form with matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Its split filtration is $F^{1}=Ce_{+}$, $F^{0}=V$. At $z=x+iy$, $y>0$, the filtration [F1, F2, step 54.1, given, algebra]

56.1 $F(z)=e^{-izY}F$ [F1, F2, step 55.1, given, algebra]

57.1 is a polarized complex Hodge structure of weight one: at $x=0$ its positive line is C(e₊+y e₋), its negative line is C(e₊−y e₋), and the Hodge metric is $\operatorname{diag}(y,y^{-1})$. Real x acts by an isometry of the flat Hermitian form. The period map is horizontal, its connection has the required graded harmonic decomposition, and its Higgs norm is a constant times 1/y, directly from this matrix. Its monodromy logarithm is −iY. [F1, F2, step 56.1, given, algebra]

58.1 Take its m-th symmetric power. In the standard string basis its metric at iy is diagonal, with positive constant multiples of $y^{m-2j}$. Direct differentiation gives the same 1/y Higgs bound. Relabel the second Hodge index by k−m, multiplying the flat Hermitian form by the corresponding sign; this changes its weight to k without changing its positive metric or connection. These auxiliary models are complex graded Hermitian variations; no artificial integral lattice or real polarization is asserted for them. [F1, F2, step 57.1, given, algebra]

59.1 Use the N,H primitive-string decomposition to identify the original complex flat bundle with a direct sum of these models, adjusting the constant string scalings to make their monodromy logarithm exactly N. At $x=0$ the resulting model metric is $y^H$ in a fixed positive weight-orthogonal reference metric. Apply the invariant Hom comparison in steps 49.1–54.1 to the invariant flat identity in both directions. The original Higgs norm is bounded by C/y by the existing Schwarz root, and the model bound is explicit. We obtain constants $c,C>0$ with [F1, F2, step 58.1, given, algebra]

60.1 c $h_{\mathrm{model}}(y)\le h_{\mathrm{original}}(y)\le C$ $h_{\mathrm{model}}(y)$. [F1, F2, step 59.1, given, algebra]

61.1 In particular, for every nonzero constant vector, [F1, F2, step 60.1, given, algebra]

62.1 $v\in W_l\setminus W_{l-1}$  iff  $h_y(v,v)$ is bounded above and below by positive multiples of $y^l$. [F1, F2, step 61.1, given, algebra]

63.1 More strongly the rescaled metrics $h_y(y^{-H/2}-,y^{-H/2}-)$ are uniformly positive and bounded on the whole fixed vector space. For bounded x the same statement follows by $e^{xN}$ and $y^{H/2}e^{xN}y^{-H/2}=e^{xN/y}$. This is the actual sharp growth root, proved from the explicit model and invariant-vector comparison, not from an assumed asymptotic SL₂ theorem. [F1, F2, step 62.1, given, algebra]

64.1 (The rescaled limit is inside the period domain.) Let Ψ(t) be the holomorphic extended untwisted filtration from the analytic root. The real Q-isometry $y^{H/2}$ takes Φ(iy) to [F1, F2, step 63.1, given, algebra]

65.1 $y^{H/2}Φ(iy)=e^{iN}y^{H/2}Ψ(e^{-2πy})$. [F1, F2, step 64.1, given, algebra]

66.1 The model comparison in steps 59.1–63.1 says that these filtrations have uniformly bounded positive Hodge metrics. The compact-fibre/polar-decomposition argument of the analytic root therefore puts them in a compact subset of D, not just in its compact dual. [F1, F2, step 65.1, given, algebra]

67.1 The algebraic one-parameter action $y^{H/2}$ on a flag has a limit as y→∞. In an H-eigenbasis this is obtained by taking the leading weights of each Plücker coordinate, or equivalently by Gaussian elimination against the increasing W filtration. Denote [F1, F2, step 66.1, given, algebra]

68.1 $F_H=\lim _{y\to \infty }y^{H/2}F_\infty$. [F1, F2, step 67.1, given, algebra]

69.1 It is H-invariant, and on $V_l=E_l(H)$ its filtration identifies with the one induced by F∞ on $Gr_l^W$. The exponential error $Ψ(e^{-2πy})-F_\infty$ is still negligible after this polynomial rescaling. Thus the displayed rescaled period maps converge to $e^{iN}F_H$. Compact containment proves $e^{iN}F_H\in D$. Passing the closed incidence $NF_\infty ^p\subset F_\infty ^{p-1}$ through the rescaling also gives $NF_H^p\subset F_H^{p-1}$. [F1, F2, step 68.1, given, algebra]

70.1 We now prove the finite recognition assertion needed at $F_H$, rather than import it. Let $H,X,Y$ be an $\mathfrak{sl}_2$ representation with $[H,Y]=-2Y$, $[X,Y]=H$, and Hermitian adjoints $H^\dagger=-H$, $X^\dagger=X$, $Y^\dagger=Y$ for a nondegenerate Hermitian form $B$. Let $HF=F$, $YF^p\subseteq F^{p-1}$ and suppose $e^YF$ is a pure complex Hodge filtration of weight $k$ polarized by $B$; on type $(p,q)$ our sign convention is $(-1)^qB>0$. We shall identify its total split filtration and its primitive forms by finite matrices. [step 48.1, step 69.1, construct]

71.1 Decompose $Y$ and $H$ by Hodge degree for $e^YF$. Transversality and $Y^\dagger=Y$ imply $Y=Y_{-1}+Y_0+Y_1$, with $Y_{-1}^\dagger=Y_1$ and $Y_0^\dagger=Y_0$. Since $e^YHe^{-Y}=H+2Y$ preserves $e^YF$, its negative-degree part vanishes. Skew-adjointness gives $H=-2Y_{-1}+H_0+2Y_1$ and $H_0^\dagger=-H_0$. Taking the degree-zero part of $[Y,H]=2Y$ gives $2Y_0=4[Y_{-1},Y_1]+[Y_0,H_0]$. These identities come directly from the two displayed commutators, including the factor four. [step 70.1, algebra]

72.1 The invariant subspace $V^{\mathfrak{sl}_2}=\ker H\cap\ker Y$ is a pure Hodge subspace for $e^YF$. Indeed for an invariant $v=\sum_p v_p$ choose its least nonzero first Hodge index $p$. The lowest components of $Yv=Hv=0$ give $Y_{-1}v_p=0$ and $H_0v_p=-2Y_0v_p$. Hermitian self-adjointness of $Y_0$ and skew-adjointness of $H_0$ imply $B(Y_0v_p,v_p)=0$. Pairing the last identity in step 71.1 with $v_p$ gives $0=4B(Y_1v_p,Y_1v_p)-4B(Y_0v_p,Y_0v_p)$. The two terms have opposite polarization signs because their Hodge indices differ by one. Both positive norms therefore vanish. Thus $Yv_p=Hv_p=0$; subtract $v_p$ and repeat. This proves the assertion. On invariants $F$ and $e^YF$ agree and $B$ restricts to their pure polarization. [step 71.1, algebra]

73.1 For the standard representation $S_1$ take $Ya=b$, $Xb=a$, $Ha=a$, $Hb=-b$, with Hermitian pairing $B_1(a,b)=1$ and $B_1(a,a)=B_1(b,b)=0$. Give the split lines $\mathbb Ca,\mathbb Cb$ total types $(1,1),(0,0)$ respectively, and use their first indices for $F$. Its $e^YF$ has first line $\mathbb C(a+b)$, with positive $B_1$, and complementary line $\mathbb C(a-b)$, with negative $B_1$; it is pure polarized of weight one. On $S_m=\operatorname{Sym}^mS_1$, the monomial $v_j=a^{m-j}b^j$ has $H$-weight $m-2j$ and total type $(m-j,m-j)$, and the induced pairing has $B_m(v_j,v_{m-j})=j!(m-j)!/m!$, all other pairs zero. Symmetrized tensor products prove these formulas and the pure polarization of $e^YF$ without a representation-theoretic Hodge theorem. [step 70.1, step 72.1, construct, algebra]

74.1 On $\operatorname{Hom}(S_m,V)$ put $F^a\operatorname{Hom}=\{f:f(F^pS_m)\subseteq F^{p+a}V\}$ and let $H,X,Y$ act by commutators with the source and target actions. These formulas show that $H$ preserves this filtration and $Y$ lowers it by one. The Hermitian form $B_{\mathrm{Hom}}(f,g)=(m+1)^{-1}\operatorname{tr}(g^\dagger f)$ has the same adjoint identities. Its $e^Y$-filtration is exactly the Hom filtration of the two pure structures, because $(e^Yf)(s)=e^Yf(e^{-Y}s)$. In Hodge-orthogonal frames its alternating signs are the differences of the source and target second indices and its positive metric is the normalized Hilbert–Schmidt metric. It is consequently a pure polarized structure of weight $k-m$. [step 73.1, algebra]

75.1 Apply step 72.1 to this Hom space. Its invariant space $P_m=\operatorname{Hom}_{\mathfrak{sl}_2}(S_m,V)$ is a polarized pure Hodge structure of weight $k-m$. The finite string decomposition gives the bijective evaluation map $\bigoplus_m S_m\otimes P_m\to V$. For two intertwining maps $f,g$, their composite $g^\dagger f$ is a scalar on $S_m$: its highest-weight line is one-dimensional and the lowering operator generates the string. The scalar equals the normalized trace. Different isotypical terms are orthogonal by the same intertwiner argument. Thus evaluation preserves the tensor Hermitian forms. [step 72.1, step 74.1, algebra]

76.1 Evaluation preserves the pure $e^Y$ Hodge structures by the definition of the Hom filtration, and a bijective pure-Hodge map is strict: its kernel and image are direct sums of its Hodge components. Undo $e^Y$ on both sides to obtain equality of their total filtrations $F$. Hence every $H$-weight-$l$ space has a pure complex Hodge structure of weight $k+l$, and $Y$ and $X$ have total types $(-1,-1)$ and $(1,1)$. This proves the recognition assertion from steps 70.1–75.1. [step 75.1, algebra]

77.1 Its primitive polarization is equally explicit. On the highest string vector $a^m$ one has $Y^ma^m=m!b^m$, so $B_m(a^m,(-Y)^ma^m)=(-1)^m m!$. The highest vector's second Hodge index has increased by $m$ from that of its multiplicity space. Therefore $B(u,(-Y)^mv)$ has the required sign $(-1)^{q+m}$ and is a polarization on the primitive $H$-weight-$m$ space; its positive form is $m!$ times the multiplicity metric. Orthogonality and nondegeneracy follow from the evaluation decomposition. This also proves that the primitive kernel is a pure Hodge subspace, since the raising/lowering maps have the stated types. [step 73.1, step 75.1, step 76.1, algebra]

78.1 Apply this construction with $B(u,v)=i^kQ(u,\bar v)$, $Y=iN$, $X=-iX_R$, and $F=F_H$. The adjoint identities were checked in steps 42.1–48.1. Step 69.1 supplies precisely $HF_H=F_H$, $YF_H^p\subseteq F_H^{p-1}$ and $e^YF_H\in D$. Thus every conclusion of steps 76.1–77.1 is available for this actual normalized limit. [step 48.1, step 69.1, step 76.1, step 77.1, algebra]

79.1 We must identify its second filtration with actual real conjugation; a complex pure recognition alone would not suffice. Since $F_H$ is a limit of real $Q$-isometry translates of $F_\infty$, it lies in $\check D$. Its rank and isotropy identities give $(F_H^{k-q+1})^{\perp_Q}=F_H^q$. Hence the Hermitian-annihilator filtration $\widetilde F_H^q:=\{v:B(v,F_H^{k-q+1})=0\}$ equals $\overline{F_H^q}$. The second pure filtration for $e^YF_H$ is $e^{-Y}\widetilde F_H$: Hermitian self-adjointness of $Y$ transfers its exponential across $B$, and the pure annihilator identity then gives this formula. It also equals $\overline{e^YF_H}$, since $\bar Y=-Y$. [step 69.1, step 78.1, algebra]

80.1 The evaluation construction respects both filtrations: on the elementary factor its Hermitian-annihilator total second filtration is the one with second index $m-j$ on $v_j$ from step 73.1; on each pure multiplicity space it is its usual second Hodge filtration. Tensor products and the pairing-preserving evaluation map therefore identify the recognition construction's total second filtration with $\widetilde F_H=\bar F_H$. Consequently each real $H$-weight-$l$ space, stable under conjugation, has opposed filtrations $F_H$ and $\bar F_H$ of weight $k+l$. This proves the required real, rather than merely complex, pure structures on the graded spaces. [step 73.1, step 75.1, step 79.1, algebra]

81.1 By step 69.1, $E_l(H)\cong\operatorname{Gr}^{W(N)}_l$ identifies the filtration of $F_H$ with that induced by $F_\infty$. The same holds for conjugates because $H$ is real. The opposed filtrations in step 80.1 therefore prove that $(W(N)[-k],F_\infty)$ is a real mixed Hodge structure. Its weight filtration is rational when the input is integral, since the canonical kernel/image formula for $W(N)$ is rational and $N=\log T$ is rational. Thus this is the claimed rational limiting structure as well. [F2, step 69.1, step 80.1, algebra]

82.1 For the primitive part in degree $m$, the Hermitian primitive form in step 77.1 is $B(u,(-Y)^mv)=i^{k+m}Q(u,N^m\bar v)$: the scalar in the second argument is conjugated. It is therefore exactly the Hermitian form associated with the real bilinear form $Q_m(u,v)=Q(u,N^mv)$ in weight $k+m$. Its sign calculation in step 77.1 proves the positive polarization condition in the repository convention $h=Q_m(C\cdot,\bar{\cdot})$. The parity is $(-1)^{k+m}$ by $Q$-skewness of $N$. [step 77.1, step 78.1, step 81.1, algebra]

83.1 The primitive forms descend to $\operatorname{Gr}^{W(N)}_m$ by self-duality of $W(N)$ and its lowering identity, as in the canonical filtration supplier; their primitive kernels and filtrations identify under $E_m(H)\cong\operatorname{Gr}^{W(N)}_m$. Thus step 82.1 proves their nondegeneracy and positivity for the actual limiting filtration, not only for an auxiliary model. [F2, step 38.1, step 81.1, step 82.1, algebra]

84.1 Logarithmic transversality from step 23.1 gives $NF_\infty^p\subseteq F_\infty^{p-1}$; the real conjugate inclusion and $NW_l\subseteq W_{l-2}$ make $N$ a morphism of mixed Hodge structures of type $(-1,-1)$. Together with the primitive polarizations just proved, this is the polarized limiting mixed Hodge structure with the stated centre $k$. [F2, step 23.1, step 81.1, step 83.1, algebra]

85.1 The analytic extension was constructed in steps 19.1–23.1 without assuming the limiting mixed Hodge conclusion. Its normalized interior limit was proved from explicit invariant-vector comparison and finite models in steps 49.1–69.1. The recognition argument in steps 70.1–84.1 therefore has no circular dependence on a nilpotent-orbit or limiting-MHS theorem. [step 23.1, step 69.1, step 84.1, algebra]

86.1 The opposite-cell map $\Gamma$ from steps 29.1–31.1 is holomorphic with zero constant term, so $\|\Gamma(t)\|=O(|t|)$ in its fixed finite-dimensional chart. This is the exact chart asymptotic in the Statement. [step 31.1, step 85.1, algebra]

87.1 Step 33.1 proves that $e^{zN}F_\infty$ is in the period domain for all sufficiently large $\operatorname{Im}z$. Together with the canonical-frame identity in step 1.1 and the chart formula it gives $\Phi(z)=e^{zN}e^{\Gamma(e^{2\pi iz})}F_\infty$. [step 1.1, step 33.1, step 86.1, algebra]

88.1 All constructions apply to the real flat bundle; integrality is used only for the rational structure on the weight filtration in step 81.1. In particular real positive combinations of commuting generators may use this analytic and real limiting-structure argument without assuming that combination is integral. [step 81.1, step 84.1, step 87.1, algebra]

89.1 The holomorphic extension, polarized limiting mixed Hodge structure, nilpotent-orbit membership and chart asymptotic prove every assertion of the Statement. [step 84.1, step 86.1, step 87.1, step 88.1, algebra] ∎

## Source-reading limits

The reconstruction uses the explicitly read Sabbah–Schnell §§113–128 (PDF pp. 53–58), §§132–142 (pp. 60–66) and §§239–241 (pp. 107–108). The finite invariant-subspace, Hom and evaluation proof of their §114 recognition theorem is supplied in steps 70.1–83.1, including the real-conjugate and primitive-sign identifications. Cattani–Kaplan Definition (1.16), printed p. 72, fixes the primitive convention; its §§2–4 (printed pp. 72–86) give the comparison context. No theorem in those sources substitutes for a local proof premise here, and no reading of the rest of the Sabbah–Schnell preprint is claimed.

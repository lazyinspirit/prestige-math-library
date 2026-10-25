---
id: thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate
kind: theorem
title: Conjugacy of diagonalizable complements and maximal subgroups under smoothness hypotheses
dependency_level: 11
deps:
  - lem-orbit-map-fibres-and-stabilizer-dimension
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-jacobian-criterion-smooth-morphism
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-hochschild-cohomology-of-algebraic-groups
  - def-dimension-noetherian-topological-space
  - lem-derived-subgroup-properties
  - lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces
  - lem-ga-torsors-over-affine-schemes-are-trivial
  - lem-multiplicative-type-groups-are-linearly-reductive
  - lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
  - lem-nonaffine-group-image-exact-quotient-properties
  - lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - lem-smooth-trigonalizable-group-normal-series-refinement
  - prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups
  - def-axiom-of-choice
  - def-crossed-homomorphism-and-hochschild-extension
  - def-diagonalizable-group-and-character-module
  - def-group-of-multiplicative-type-and-torus
  - def-morphism-and-closed-subgroup-scheme
  - def-trigonalizable-algebraic-group
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal
  - thm-nonaffine-affine-normal-group-quotient-affine
  - thm-trigonalizable-extensions-split-over-algebraically-closed-fields
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
  - thm-unipotent-group-triangular-criterion
  - lem-diagonalizable-character-antiequivalence
  - thm-flat-finite-presentation-is-open
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem16.27, interpreted with its required smoothness domains; Proposition15.3 and Theorem15.34; characteristic-zero vector criterion 14.33; primitive/Ore equivalence 14.40-14.46, division and freeness 14.50, and vector criterion 14.54, printed pp. 289, 292-297, 303-304, 319-320, 333-334
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Theorem 130, printed pp. 53-56; Proposition 133 and Corollary 134, printed pp. 56-57 (smooth connected classical specialization)
---
## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed, let $G$ be a trigonalizable affine algebraic group ([[def-trigonalizable-algebraic-group]]), write $U=G_u$ for its largest normal unipotent subgroup, and let $q:G\to D=G/U$ be its diagonalizable quotient. The extension has sections without any smoothness assumption ([[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]]). Then:

(a) If $D$ is smooth or $U$ is smooth and connected, any two sections $s_1,s_2:D\to G$ are conjugate by some $u\in U(k)$: $s_2=\mathrm{inn}(u)\circ s_1$.

(b) If $U$ is smooth and connected, the maximal diagonalizable subgroup schemes of $G$ are exactly the section images $s(D)$ and are $U(k)$-conjugate. If only $D$ is assumed smooth, the analogous classification and conjugacy hold for maximal **smooth diagonalizable** subgroup schemes; nonsmooth diagonalizable subgroups need not lie in a section image.

(c) If $G$ is smooth, possibly disconnected, then $D$ is smooth and $D^\circ$ is a torus. The maximal tori of $G$ are exactly $s(D^\circ)$ for full sections $s:D\to G$ and are conjugate by $U^\circ(k)\subseteq U(k)$. If $G$ is also connected, $D=D^\circ$, so these are the full section images.

When both $D$ and $U$ are nonsmooth, section conjugacy can fail; and smoothness of $D$ alone does not give the classification of all maximal diagonalizable subgroup schemes. The explicit positive-characteristic counterexamples below establish both limitations. Finite diagonalizable factors are retained: a full section image need not be a torus.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, and a trigonalizable affine algebraic $k$-group $G$ with largest normal unipotent subgroup $G_u$ and diagonalizable quotient $D=G/G_u$.

[F1] Assume AC. There is a normal series $G\supseteq G_0=G_u\supseteq G_1\supseteq\dots\supseteq G_r=1$ of closed subgroup schemes normal in $G$ in which every quotient $G_i/G_{i+1}$ is embedded $D$-equivariantly into $\mathbf G_a$ with a linear action of $D$; in particular the last nontrivial term $N$ satisfies $N\subseteq G_u$, $N\subseteq\mathbf G_a$, and the $D$-action on $N$ is the restriction of a linear action on $\mathbf G_a$. ([[thm-trigonalizable-group-has-normal-series-with-vector-quotients]])

[F2] If $N\subseteq U=G_u$ is a closed normal subgroup scheme of $G$, then $G/N$ is affine and trigonalizable (its representations pull back to those of $G$). Its kernel over $D$ is $U/N$, which is unipotent; every unipotent subgroup has trivial image in diagonalizable $D$, so $(G/N)_u=U/N$. No strict decrease in series length is asserted for arbitrary $N$. For step 1.1, delete repetitions in [F1] and take $N$ to be the last nontrivial term. The image series $U/N\supseteq G_1/N\supseteq\cdots\supseteq N/N=1$ then omits exactly its last nontrivial factor; earlier factors retain their additive embeddings and linear $D$-actions. For step 3.1, where $U$ is smooth connected and $N$ is positive-dimensional, the induction instead uses $\dim(U/N)=\dim U-\dim N<\dim U$: the quotient is smooth connected, and the translation action of $U$ on $U/N$ has stabilizer $N$ at its identity, so the orbit-dimension formula applies. ([[lem-orbit-map-fibres-and-stabilizer-dimension]], [[def-trigonalizable-algebraic-group]], [[thm-trigonalizable-group-has-normal-series-with-vector-quotients]], [[thm-unipotent-group-triangular-criterion]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[thm-nonaffine-affine-normal-group-quotient-affine]])

[F3] The local principal-cocycle theorem applies to a smooth diagonalizable source and smooth commutative unipotent coefficients over algebraically closed $k$. If $N\subseteq\mathbf G_a$ is nonsmooth, $N_{\mathrm{red}}$ is a smooth subgroup over perfect $k$; a morphism from a reduced source to $N$ factors through it. Smooth products are reduced, so a smooth acting group preserves this reduction. Sections of a split extension with commutative kernel correspond to crossed homomorphisms, and principal cocycles give conjugation by a kernel $k$-point. ([[prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[def-crossed-homomorphism-and-hochschild-extension]])

[F4] Assume AC. For a perfect field $k$ and a trigonalizable $G$, the extension $1\to G_u\to G\to D\to1$ splits in each of the cases: $k$ algebraically closed; or $k$ perfect with $G_u$ smooth connected; or $k$ perfect with $D$ connected. In particular, over an algebraically closed field the quotient map $q$ admits sections, and in the smooth connected case every maximal torus is the image of a section. ([[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]])

[F5] A closed subgroup scheme that is both unipotent and of multiplicative type is trivial; consequently a diagonalizable closed subgroup $S\subseteq G$ meets $G_u$ trivially, and the exact kernel/image theorem identifies $S$ with its closed image $q(S)$. ([[lem-nonaffine-group-image-exact-quotient-properties]]) ([[lem-unipotent-and-diagonalizable-intersection-is-trivial]])

[F6] A closed subgroup scheme of a trigonalizable group is trigonalizable, and the preimage $q^{-1}(H)$ of a closed subgroup $H\subseteq D$ is a closed subgroup scheme of $G$ that is an extension of $H$ by $G_u$; its largest normal unipotent subgroup is $G_u$. ([[def-trigonalizable-algebraic-group]], [[def-morphism-and-closed-subgroup-scheme]], [[thm-unipotent-group-triangular-criterion]])


[F7] *Vector coefficients and characteristic kernels.* Diagonalizable groups are linearly reductive, so positive Hochschild cohomology of their linear vector representations vanishes. Additive vector-group torsors over affine schemes are trivial by the same proof as the additive torsor lemma: apply Amitsur exactness to each coordinate of the transition vector, translate the local section by that vector of coboundaries, and descend; and exact coefficient sequences with surjective cochains give a long exact sequence. Derived subgroups are characteristic after every base change and are smooth connected for smooth connected sources. Homomorphic images and exact quotients of smooth connected groups are smooth connected. ([[lem-multiplicative-type-groups-are-linearly-reductive]], [[prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups]], [[lem-ga-torsors-over-affine-schemes-are-trivial]], [[def-hochschild-cohomology-of-algebraic-groups]], [[lem-derived-subgroup-properties]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])

[F8] *Exact primary-source inputs.* In characteristic zero commutative unipotent groups are vector groups (Milne14.33). Over perfect $k$ a smooth connected commutative unipotent group killed by $p$ is a vector group (Milne14.54). In characteristic $p$, elementary unipotent groups are contravariantly equivalent to finitely generated left modules over the Euclidean skew polynomial ring $B=k[F]$, $Fc=c^pF$, via primitives (Milne14.40–14.46); degree division and freeness of submodules are given in Milne14.50. A vector group has primitive module $B^n$. These are the same exact inputs used for the nonlinear-vector resolution in the current splitting proof; no full automorphism-functor linearity is assumed. ([[def-diagonalizable-group-and-character-module]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]])

[F9] *Geometric scheme controls.* Smooth groups over algebraically closed $k$ have schematically dense rational points; their smooth connected unipotent radicals are supplied by the refined series theorem. Quotients have exact scheme kernels and closed images, and every nonempty finite-type fibre over $k$ has a $k$-point. The quotient map is faithfully flat of finite presentation, hence open. For polynomial maps between vector spaces, a finite-presentation graph with an invertible full-target-rank Jacobian minor is smooth; smooth maps are flat and locally of finite presentation, hence open. A nonempty affine finite-type fibre has a maximal ideal under AC, and the weak Nullstellensatz makes its residue field $k$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]], [[lem-smooth-trigonalizable-group-normal-series-refinement]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]], [[def-dimension-noetherian-topological-space]], [[thm-flat-finite-presentation-is-open]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-proper-ideal-contained-in-maximal-ideal]])

[F10] Closed diagonalizable subgroups of $\mathbf G_m$ have character groups that are quotients of $\mathbb Z$, hence are $\mathbf G_m$ or $\mu_n$ (including the trivial group). This follows from the character anti-equivalence and surjectivity of the coordinate map for a closed immersion. ([[lem-diagonalizable-character-antiequivalence]], [[def-diagonalizable-group-and-character-module]])

## Proof

**Given:** AC, algebraically closed $k$, trigonalizable $G$, its unipotent subgroup $U$, and diagonalizable quotient $D$.

1.1 First suppose $D$ is smooth. Induct on the length of [F1], with $U=1$ as base. Let $N$ be its last nontrivial term, and compare two sections in $G/N$. By [F2] induction makes those quotient sections conjugate by $(U/N)(k)$. Lift the conjugating point to $U(k)$ using [F9] and conjugate one original section so their quotient sections agree. Their ratio is a crossed homomorphism $f:D\to N$ for the actual linear action on the additive embedding. Reducedness of $D$ makes $f$ factor through $N_{\mathrm{red}}$. The reduction is $D$-stable because $D\times N_{\mathrm{red}}$ is reduced, and is smooth commutative unipotent by [F3]. The principal-cocycle theorem [F3] therefore gives a conjugating point of $N_{\mathrm{red}}(k)=N(k)$. This completes induction and proves (a) for smooth $D$, with arbitrary $U$. [F1, F2, F9, F3, induction, discharge-induction]

1.2 For the second domain of (a), establish $H^1(D,N)=0$ for every vector group $N$ with any action of diagonalizable $D$. In characteristic zero its additive automorphisms are linear, so [F7] applies directly. In characteristic $p$, use [F8]: decompose the coordinate primitives of $P(N)=B^n$ into finitely many $D$-weight components, and take a free $B$-module $L=\bigoplus_iBe_i$ on these homogeneous generators. The kernel $R$ of $L\to P(N)$ has a homogeneous free basis. Indeed choose a homogeneous relation of smallest nonzero first-coordinate $F$-degree; Euclidean reduction of another homogeneous relation uses multiples $aF^j$ with the same leading-coordinate weight, so each subtraction remains homogeneous. A nonzero lower-degree remainder contradicts minimality. This splits off one free pivot summand, and repeat on the zero-first-coordinate kernel and the remaining coordinates. The process terminates and handles arbitrary relations by their finite weight decompositions. The reversed exact sequence from [F8] is $0\to N\to V\xrightarrow{f}Q\to0$, where the homogeneous bases make $V,Q$ linear vector representations. Since $N$ is a vector group as an underlying group, $f$ is a smooth vector-group torsor and its pullbacks to affine $D^j$ are trivial by [F7]. Hence this coefficient sequence is exact on every represented cochain, including nonreduced $D^j$. [F7, F8, construct, algebra]

1.3 Suppose $G$ is smooth. Its quotient $D$ is smooth by [F9], so $D^\circ$ is a torus. Let $U_0$ be the largest normal unipotent subgroup of the smooth connected trigonalizable group $G^\circ$; it is smooth connected by [F9]. Conjugation by every $g\in G(k)$ preserves $G^\circ$ and its unique maximal normal unipotent subgroup. Since $G\times U_0$ is smooth with schematically dense $k$-points, this pointwise preservation gives scheme-theoretic normality of $U_0$ in $G$. Thus $U_0\subseteq U$. Conversely $U\cap G^\circ$ is a normal unipotent subgroup of $G^\circ$, so it is contained in $U_0$; hence $U\cap G^\circ=U_0$. This intersection is open and closed in $U$ and connected, so $U^\circ=U_0$. The faithfully flat quotient $q$ is of finite presentation and is open by [F9]. Thus $q(G^\circ)$ is an open connected subgroup of $D$, contained in $D^\circ$; an open subgroup of the connected group $D^\circ$ is all of it, since its cosets would otherwise disconnect that group. Consequently $q(G^\circ)=D^\circ$, and $G^\circ\to D^\circ$ has kernel $U_0$. [F9, F5, F6, algebra]

1.4 The limitations are explicit in characteristic $p>0$. In $G=\alpha_p\rtimes\mu_p$ with scalar action, $U=\alpha_p$ and $D=\mu_p$. For every $a\in k$, $s_a(t)=(a(t-1),t)$ is a section: $a(t-1)$ has $p$-th power zero, and $a(tt'-1)=a(t-1)+t\,a(t'-1)$ proves its cocycle identity on all base algebras. Distinct $a$ give distinct sections, but $U(k)=\{0\}$, so they are not $U(k)$-conjugate. In $G=\alpha_p\rtimes\mathbf G_m$, $D=\mathbf G_m$ is smooth and its unique section is $s_0$: a morphism from reduced $\mathbf G_m$ into $\alpha_p$ is zero. Nevertheless $S_a=\{(a(t-1),t):t\in\mu_p\}$ for $a\ne0$ is a nonsmooth diagonalizable subgroup not contained in $s_0(D)$. It is maximal diagonalizable: any larger such subgroup has image either $\mathbf G_m$ or $\mu_n\subseteq\mathbf G_m$, by the character anti-equivalence. The first option would be the unique full section. A section over $\mu_n$ for the weight-one action has cocycle $b(t-1)$, by coefficient comparison in $k[\mathbb Z/n\mathbb Z]$; containing $S_a$ forces $b=a$. Its image lies in $\alpha_p$ only if $t^p=1$ in $O(\mu_n)$, hence $n$ divides $p$, and containment of $\mu_p$ gives $n=p$. Thus $S_a$ has no larger diagonalizable overgroup. Both groups are trigonalizable by their unipotent kernels and diagonalizable quotients, and splitting still exists. These examples refute the unrestricted claims but not the domains proved above. [F3, F4, F5, F6, F8, F10, algebra]

2.1 The vector-group torsor $f:V\to Q$ has a scheme section by [F7]; translate its value at zero by an element of $N(k)$ to obtain a section taking zero to zero. Taking degree-one terms in $f\circ s=\operatorname{id}_Q$ proves that $df_0$ is surjective. Its kernel is the tangent space of the scheme kernel $N$, so $0\to\operatorname{Lie}N\to\operatorname{Lie}V\to\operatorname{Lie}Q\to0$ is exact. Invariants are exact for diagonalizable representations by weight decomposition, so the tangent map $\operatorname{Lie}(V^D)\to\operatorname{Lie}(Q^D)$ is surjective; here $V^D,Q^D$ are the weight-zero linear vector subgroups. The additive-polynomial map $V^D\to Q^D$ therefore has a Jacobian of full target rank, constant under translation. Its graph presentation over $k[y_1,\ldots,y_b]$ has equations $y_i-P_i(x)$ with an invertible $b\times b$ minor in the $x$-Jacobian (the empty minor if $b=0$). The Jacobian criterion [[thm-jacobian-criterion-smooth-morphism]] applied to this finite-presentation graph proves smoothness; hence it is open by [[thm-flat-finite-presentation-is-open]]. Its image is an open subgroup of the connected vector group $Q^D$, hence all of $Q^D$ (otherwise its cosets give a disconnection). Its nonempty finite-type fibres have $k$-points by [F9], so $V^D(k)\to Q^D(k)$ is surjective. In the long exact cochain sequence, $H^0(D,V)\to H^0(D,Q)\to H^1(D,N)\to H^1(D,V)$ consequently has surjective first map and zero last term by [F7]. Thus $H^1(D,N)=0$, for arbitrary nonlinear actions and nonsmooth $D$. [F9, F7, F8, step 1.2, algebra]

3.1 Now assume $U$ smooth connected and induct on its dimension. If $U=1$ there is a unique section. Otherwise choose its last nontrivial derived subgroup $A$, smooth connected commutative and characteristic by [F7]. In characteristic zero set $N=A$, a vector group by [F8]. In characteristic $p$, multiplication by large $p$-powers kills $A$ by its upper unitriangular embedding; its last nonzero multiplication image $N=p^jA$ is smooth connected by [F7], killed by $p$, and therefore a vector group by [F8]. This $N$ is characteristic in $U$ after every base change, hence normal in $G$, and positive-dimensional. By [F2] and [F7], $G/N$ has smooth connected unipotent subgroup $U/N$ of smaller dimension and the same $D$. Induction conjugates the quotient sections by $(U/N)(k)$; lift that point to $U(k)$ by [F9] and make the quotient sections equal. Their ratio is now a crossed homomorphism $D\to N$, which is principal by step 2.1. Conjugation by its principal point identifies the sections. This proves (a) when $U$ is smooth connected, including nonsmooth $D$. [F7, F8, F2, F9, step 2.1, induction, discharge-induction]

4.1 Fix a full section $s:D\to G$, which exists by [F4]. For a diagonalizable subgroup $S\subseteq G$, [F5] identifies it with its closed image $E=q(S)\subseteq D$. In $q^{-1}(E)$, both $s|_E$ and the section supplied by $S$ have unipotent kernel $U$ by [F6]. If $U$ is smooth connected, step3.1 applies even when $E$ is nonsmooth; hence $S$ lies in a $U(k)$-conjugate of $s(D)$. If instead only $D$ is smooth and $S$ is smooth diagonalizable, then $E$ is smooth, and step1.1 gives the same containment. In either domain maximality gives equality with a section image. Conversely, a diagonalizable subgroup containing $s(D)$ equals it: the map to $D$ has trivial kernel, and its points have the same images as the points of $s(D)$ on every base algebra. The same argument applies in the smooth-diagonalizable class when $D$ is smooth. Part(a) gives conjugacy of all relevant section images, proving (b) with the specified domains. [F4, F5, F6, step 1.1, step 3.1]

4.2 All tori of $G$ lie in $G^\circ$. The smooth connected splitting theorem [F4] applies to $G^\circ$ and identifies its maximal tori with the images of sections of $G^\circ\to D^\circ$. The restriction of a fixed full section $s:D\to G$ is one such section, since $s(D^\circ)\subseteq G^\circ$. Every other section over $D^\circ$ is $U_0(k)$-conjugate to it by step3.1 (or the smooth connected splitting theorem); conjugating the full $s$ by that same point extends the desired partial section. Hence precisely the groups $s(D^\circ)$ for full sections are the maximal tori, and they are $U^\circ(k)$-conjugate. If $G$ is connected, its quotient is connected, so $D=D^\circ$. This proves (c) independently of any full maximal-diagonalizable classification for disconnected $U$. [F4, step 3.1, step 1.3]

5.1 Steps1.1 and3.1 prove the two domains of(a), step4.1 proves both classifications in(b), and steps 1.3 and 4.2 give the independent smooth-group torus claim(c). Step 1.4 establishes the stated boundaries while retaining arbitrary-scheme splitting existence. [step 1.1, step 3.1, step 4.1, step 4.2, step 1.4] ∎


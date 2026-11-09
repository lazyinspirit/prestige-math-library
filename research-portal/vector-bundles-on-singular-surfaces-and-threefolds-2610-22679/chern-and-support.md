---
title: Chern constructions and support geometry
description: Develop flag detection and virtual Chern arithmetic alongside
  indexed support fibers, excision, Koszul classes and curve dévissage. Place
  the article's support definitions here and prepare the Bertini and
  exterior-Euler interfaces needed by its final geometric arguments.
status: draft
dependency_level: 3
---

**Purpose:** Develop flag detection and virtual Chern arithmetic alongside indexed support fibers, excision, Koszul classes and curve dévissage. Place the article's support definitions here and prepare the Bertini and exterior-Euler interfaces needed by its final geometric arguments.

## Bigraded cohomology and the projective bundle contract

[Open item](item-def-bigraded-oriented-theory) · level 0

### Definition
Assume the Axiom of Choice. Fix a category $\mathcal C$ of schemes and scheme morphisms that is closed under the following operations: for every $X$ in $\mathcal C$, every finite locally free $\mathcal O_X$-module $E$ of constant positive rank, and every morphism $f:Y\to X$ in $\mathcal C$, the projective bundle $\pi:\mathbb P_X(E)\to X$, its base change $\mathbb P_Y(f^*E)\to Y$, and the induced base-change morphism are in $\mathcal C$. A finite locally free module of rank $r$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^r$; a line bundle is one of rank one.

An **additively oriented bigraded theory with the projective bundle contract** on $\mathcal C$ consists of the following data and axioms.

1. For each $X$ and each $(a,b)\in\mathbb Z^2$, an abelian group $H^{a,b}(X)$. Their direct sum $H^{*,*}(X)$ is an associative unital ring, with unit $1_X\in H^{0,0}(X)$ and bilinear multiplication sending $H^{a,b}(X)\times H^{c,d}(X)$ to $H^{a+c,b+d}(X)$. It is graded-commutative in the first degree: $xy=(-1)^{ac}yx$ for homogeneous $x$ and $y$ of first degrees $a$ and $c$.

2. For every morphism $f:Y\to X$ in $\mathcal C$, a degree-preserving unital ring homomorphism $f^*:H^{*,*}(X)\to H^{*,*}(Y)$. Pullback is contravariantly functorial: $(\operatorname{id}_X)^*=\operatorname{id}$ and $(f\circ g)^*=g^*f^*$.

3. A natural group homomorphism $c_1:\operatorname{Pic}(X)\to H^{2,1}(X)$ for every $X$. Here $\operatorname{Pic}(X)$ is the group of isomorphism classes of line bundles under tensor product, and the target uses addition. Naturality means $f^*c_1(L)=c_1(f^*L)$. Thus $c_1(L\otimes M)=c_1(L)+c_1(M)$ and $c_1(\mathcal O_X)=0$.

4. For every rank-$r>0$ bundle $E$ on $X$, use the quotient convention $\mathbb P_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$, with tautological quotient line bundle $\mathcal O_{\mathbb P_X(E)}(1)$. Put $\xi=c_1(\mathcal O_{\mathbb P_X(E)}(1))$. For every $(a,b)$, the homomorphism
$$\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\longrightarrow H^{a,b}(\mathbb P_X(E)),\qquad (x_m)_m\longmapsto\sum_{m=0}^{r-1}\pi^*(x_m)\xi^m$$
is an isomorphism. This is the **projective bundle contract**. The rank-zero case is not included in this isomorphism.

The contract is an abstract set of data and axioms. It does not itself assert that motivic cohomology satisfies them; that assertion requires the separate motivic projective-bundle input.

### Definition references
[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Justification
The published projective-bundle definition supplies the quotient construction and its tautological quotient under the stated choice assumption. The published Picard definition supplies the group of line-bundle classes, so the domain of $c_1$ and its additivity condition are well-defined. The pullback and ring axioms make each displayed summand a homomorphism of abelian groups; its bidegree is $(a,b)$ because $\xi$ has degree $(2,1)$. The sum is finite, and requiring the resulting map to be an isomorphism is a coherent condition on the specified data. The conditions are consistent: taking every $H^{a,b}(X)$ to be the zero group, with its zero ring multiplication and unit $0$, every pullback and every $c_1$ to be the unique map, makes both sides of the contract zero. This example establishes only consistency of the abstract contract, not its realization by motivic cohomology.


## External projective bundle input for the actual motivic complex

[Open item](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input) · level 0

### Statement
Let $\mathbb F=\mathbb Q$ or $\mathbb F_p$, let $X$ be a qcqs $\mathbb F$-scheme, and let $E$ be finite locally free of constant rank $r+1>0$. For $j\geq0$, the Elmanto-Morrow projective-bundle map
$$\bigoplus_{s=0}^{r}\mathbb Z(j-s)_{\mathrm{mot}}(X)[-2s]\xrightarrow{\sum c_1(\mathcal O(1))^s\pi^*}\mathbb Z(j)_{\mathrm{mot}}(\mathbb P_{\mathrm{sub},X}(E))$$
is an equivalence of derived complexes. The source uses line subbundles, and $\mathcal O(1)$ is the dual of its tautological line. Negative-weight terms in this formula are zero by the source's stated convention. In particular, the component $s=0$ is the actual pullback and has a retraction in $D(\mathbb Z)$.

### Source contract

**Given:** Exactly the prime field, qcqs scheme, rank and weight in the Statement.

**Goal:** Record the established projective-bundle input needed for the actual motivic tower, without strengthening the abstract contract or substituting classical smooth cohomology.

[F1] Theorem 5.24(2) is the displayed derived equivalence in the cited PDF. The paragraph preceding it defines its line-subbundle convention.

### External input
Import [F1]. Projecting its inverse onto the zero summand gives the stated retraction. The native quotient convention for a bundle $G$ is obtained by applying this result to $E=G^\vee$: a locally split invertible quotient of $G$ dualizes to a locally split line subbundle of $G^\vee$, and dualizing back is inverse for finite locally free sheaves. The source's $\mathcal O(1)$ then becomes exactly the native tautological quotient. The target uses this explicit adaptation and the existing actual Nisnevich-sheaf contract; it does not claim that the abstract projective-bundle axioms alone imply finite-clopen detection.


## Relative cofibers and quotient complexes

[Open item](item-lem-author-9415fc97ee80-relative-cone-quotient-model) · level 0

### Statement
For a cochain map $f:A\to B$, use cohomological shifts $A[s]^n=A^{n+s}$, $d_{A[s]}=(-1)^sd_A$, and put
$$Q_f^n=B^n\oplus A^{n+1},\qquad d(b,a)=(d_Bb+f(a),-d_Aa).$$
This is the cone of $f$, giving the relative cofiber triangle $A\xrightarrow f B\to Q_f\to A[1]$ in the derived category. If $f$ is termwise injective, projection $(b,a)\mapsto[b]$ gives a quasi-isomorphism $Q_f\to B/f(A)$. Consequently the quotient-complex model for a relative motive is justified whenever an actual termwise monomorphic complex model of its open-inclusion map has separately been supplied; no such monomorphism is asserted for an arbitrary map of motives.

### Facts & Assumptions

**Given:** Complexes of abelian groups and a cochain map $f$, with termwise injectivity only for the quotient conclusion. The same argument applies to complexes in an abelian category.

**Goal:** Establish the cone differential and the exact condition allowing its replacement by a quotient.

[F1] The cochain cone and shift conventions, and the cone triangle in the derived category, are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). A quasi-isomorphism induces isomorphisms on every cohomology group.

### Proof

1.1 Applying the displayed differential twice gives first coordinate $d_B^2b+d_Bf(a)-fd_Aa=0$ and second coordinate $d_A^2a=0$. Thus it is a cochain complex. Its form is exactly the cone in [F1], so the displayed relative triangle is its cone triangle. [F1, given, algebra]

2.1 Assume $f$ termwise injective. The projection to $B/f(A)$ is a surjective cochain map because $d[b]=[d_Bb]$. Its kernel identifies with $A^n\oplus A^{n+1}$ via $(a_0,a_1)\mapsto(fa_0,a_1)$, and its differential in these coordinates is $(a_0,a_1)\mapsto(d_Aa_0+a_1,-d_Aa_1)$. [step 1.1, given, construct]

3.1 The map $h(a_0,a_1)=(0,a_0)$ has degree $-1$ on this kernel. One computes $dh(a_0,a_1)=(a_0,-d_Aa_0)$ and $hd(a_0,a_1)=(0,d_Aa_0+a_1)$, so $dh+hd=\operatorname{id}$. Thus the kernel is contractible and has zero cohomology. The short exact sequence of this kernel, $Q_f$ and the quotient gives that projection induces isomorphisms on cohomology. It is the asserted quasi-isomorphism, under precisely the stated injectivity hypothesis. [step 2.1, algebra] ∎


## Contravariant Hom reverses relative cofiber triangles

[Open item](item-lem-author-9415fc97ee80-contravariant-relative-hom) · level 0

### Statement
Let $A\xrightarrow f B\to Q\to A[1]$ be a specified distinguished triangle in a triangulated category $\mathcal T$. For any coefficient object $E$ and integer $a$, applying contravariant representable Hom gives the exact sequence containing
$$\cdots\to\operatorname{Hom}(A,E[a-1])\to\operatorname{Hom}(Q,E[a])\to\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])\to\operatorname{Hom}(Q,E[a+1])\to\cdots.$$
If additionally a stable enhancement with mapping spectra or derived mapping complexes is supplied and $Q$ is the cofiber of the specified map there, then the induced mapping object satisfies
$$R\operatorname{Hom}(Q,E)\simeq\operatorname{fib}\bigl(R\operatorname{Hom}(B,E)\to R\operatorname{Hom}(A,E)\bigr).$$
Thus for the relative motive of an open inclusion, support cohomology is contravariant: the object with support is paired with the coefficient object, and the restriction map is from the whole scheme to the open. Here $R\operatorname{Hom}$ denotes the supplied mapping object: a spectrum in the mapping-spectrum setting, or a complex when a compatible linear derived enhancement is part of the data. The derived mapping-object conclusion requires the stated enhancement and is not inferred from Hom groups alone.

### Facts & Assumptions

**Given:** The triangle, coefficient object and, only for the second conclusion, the indicated stable enhancement. Hom always means a morphism group in $\mathcal T$.

**Goal:** Establish direction, degree and the precise mapping-fiber premise.

[F1] Representable Hom applied in either variable to a distinguished triangle gives the corresponding long exact sequence. [math:thm-long-exact-hom-sequences-of-a-distinguished-triangle](https://alphabetamath.cc/item/thm-long-exact-hom-sequences-of-a-distinguished-triangle)

[F2] In the enhanced case, a cofiber is a homotopy pushout $Q=B\coprod_A0$. Mapping out of a colimit is a limit by its defining universal property.

### Proof

1.1 Apply contravariant Hom with target $E[a]$ to every shift of the given triangle. The part ending in $\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])$ has preceding term $\operatorname{Hom}(Q,E[a])$ and following term $\operatorname{Hom}(Q[-1],E[a])=\operatorname{Hom}(Q,E[a+1])$. Its predecessor is $\operatorname{Hom}(A[1],E[a])=\operatorname{Hom}(A,E[a-1])$. Exactness is [F1], with the connecting maps determined by that triangle's shift/rotation convention. [F1, given]

2.1 Under the additional enhancement premise, [F2] gives $R\operatorname{Hom}(Q,E)$ as the homotopy pullback of $R\operatorname{Hom}(B,E)\to R\operatorname{Hom}(A,E)$ and $R\operatorname{Hom}(0,E)=0\to R\operatorname{Hom}(A,E)$. This is exactly the fiber of restriction. It explains both the contravariance and the fiber rather than cofiber in the cohomological support model. This proves all conclusions with their stated premises. [F2, step 1.1] ∎


## Purity twists and cohomological shifts with explicit premises

[Open item](item-lem-author-9415fc97ee80-purity-shift-index) · level 0

### Statement
Let $\mathcal T$ be a triangulated category, let $A(c)$ be a specified twist of an object $A$, and let $E_j$ be coefficient objects for specified weights. Fix $c\geq0$. Suppose, in the weights being used, there is a supplied natural identification
$$\operatorname{Hom}_{\mathcal T}(A(c),E_j[n])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[n])$$
for every integer $n$. Then
$$\operatorname{Hom}_{\mathcal T}(A(c)[2c],E_j[a])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[a-2c]).$$
If the analogous identification is supplied for derived mapping complexes in a stable enhancement, then
$$R\operatorname{Hom}(A(c)[2c],E_j)\simeq R\operatorname{Hom}(A,E_{j-c})[-2c],$$
and its degree-$a$ cohomology is $H^{a-2c}R\operatorname{Hom}(A,E_{j-c})$. No cancellation, invertibility of twists, or definition of negative-weight coefficients is inferred without that supplied identification. In particular the indexing rule applies only within its stated weight range.

### Facts & Assumptions

**Given:** The objects, integer indices, and the displayed Hom identification; the enhanced version is additionally assumed only for the mapping-complex assertion.

**Goal:** Compute the shift without concealing the required twist comparison.

[F1] The cochain convention is $C[s]^n=C^{n+s}$ and $H^a(C[s])=H^{a+s}(C)$. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F2] Shift is an autoequivalence, so $\operatorname{Hom}(V[s],W[a])\cong\operatorname{Hom}(V,W[a-s])$ by shifting both source and target by $-s$. The same rule in mapping complexes gives a shift $[-s]$ when the source is shifted by $s$.

### Proof

1.1 Set $s=2c$ in [F2]. It gives $\operatorname{Hom}(A(c)[2c],E_j[a])\cong\operatorname{Hom}(A(c),E_j[a-2c])$. Now apply the assumed twist identification with $n=a-2c$, obtaining exactly the displayed group on $A$ and weight $j-c$. [F2, given]

2.1 If the enhanced twist comparison is supplied, first use the mapping-complex version of [F2], then that comparison, to identify the mapping complex with $R\operatorname{Hom}(A,E_{j-c})[-2c]$. By [F1], its degree-$a$ cohomology is the degree-$a-2c$ group of the unshifted complex. [F1, F2, given, step 1.1]

3.1 Both computations explicitly used a premise containing $E_{j-c}$. They establish neither the existence of that object in a weight outside the given coefficient system nor a twist-adjunction theorem. Thus the conclusions retain precisely the supplied weight bounds and no additional purity assertion has entered their proof. [given, step 1.1, step 2.1] ∎


## External degree-zero abelian dévissage

[Open item](item-thm-author-7ef3227685d9-supported-k0-abelian-devissage-input) · level 0


### Statement
Assume the Axiom of Choice. Let $\mathcal B\subseteq\mathcal A$ be essentially small abelian categories, with $\mathcal B$ full, inclusion exact, and $\mathcal B$ closed under subobjects and quotients taken in $\mathcal A$. Assume every object of $\mathcal A$ has a finite filtration whose quotients belong to $\mathcal B$. The inclusion induces an isomorphism of Grothendieck groups
$$G_0(\mathcal B)\xrightarrow{\sim}G_0(\mathcal A).$$
Here $G_0(\mathcal A)$ is generated by isomorphism classes of objects with $[M]=[M']+[M'']$ for every short exact sequence $0\to M'\to M\to M''\to0$. The inverse sends $[M]$ to the sum of the classes of the quotients of any permitted finite filtration. This sum is independent of filtration and is additive in short exact sequences. Extension-closure of $\mathcal B$ inside $\mathcal A$ is not a hypothesis.

### Source contract
**Given:** AC and the exact abelian inclusion and filtration hypotheses above, after choosing equivalent small presentations.

**Goal:** Import the established degree-zero filtration theorem and its inverse formula.

[F1] Weibel, The K-book, Dévissage Theorem II.6.3 with its proof supplies this exact assertion.

[A1] Choice is assumed in selecting equivalent small presentations and, on a small presentation, a permitted finite filtration for each object as in the source proof ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). Independence of these choices is part of [F1].

### External input
Import [F1] with its full source record and actual reading limits. The proof uses common refinements of finite filtrations for independence and concatenates a subobject filtration with the inverse image of a quotient filtration for additivity. Geometric applications must separately construct any required ideal-power filtrations and check the categorical hypotheses; no comparison of K-theory spectra is implicit.


## External supported slice projection with positive generic coefficient

[Open item](item-thm-author-16f30f6b95cb-supported-slice-positive-cycle-input) · level 0

### Statement
Let $k$ be perfect, let $V$ be a smooth quasi-projective finite-type $k$-scheme, and let $W\subset V$ be integral closed support of codimension $q$. In classical slice K-theory the actual stage augmentation $\epsilon_q:(f_qK)_W(V)\to K_W(V)$ is an equivalence. Set
$$\psi_W=\pi_0\bigl((f_qK)_W(V)\to(s_qK)_W(V)\bigr)\circ(\pi_0\epsilon_q)^{-1}.$$
The canonical slice-to-cycle comparison identifies the generic coefficient of $\psi_W$ with
$$K_0^W(V)\longrightarrow G_0(W)\longrightarrow K_0(k(W))\xrightarrow{\dim}\mathbb Z.$$
The first arrow is the coherent Euler/devissage comparison, the second is actual generic restriction, and dimension sends $[k(W)]$ to $+1$. This statement includes support: the q-th supported slice restricts equivalently to its codimension-q generic-point coefficient. It does not identify a supported class with its possibly zero image in the ambient Chow group.

### Source contract

**Given:** Exactly the perfect-field, smooth quasi-projective ambient and integral codimension-q support hypotheses above.

**Goal:** Import the exact actual supported projection and its positive cycle normalization.

[F1] Kahn–Levine Proposition 2.2.2 gives the compatible coniveau/slice towers; Lemmas 2.3.1–2.3.2 give the supported augmentation equivalence and generic detection. Definition 3.1.5 defines precisely $\psi_W$.

[F2] Their Definitions 3.1.9–3.1.15, Theorem 3.2.4 and Lemma 6.4.2 identify the slice-cycle map with the support-pair K-to-G map and generic restriction constructed explicitly in Lemma 6.2.1.

[F3] Section 5.9 identifies $K_0(F)$ with $\mathbb Z$ by dimension, compatible with the Serre face convention. In the ordinary case no reduced-norm scaling or negative generator is inserted.

### External input
Import the restricted package [F1]–[F3], assembled from the displayed source constructions and commuting diagrams with exactly their hypotheses. It supplies a map and its coefficient, not an inference from equality of groups. Its application to a smooth ambient that is not quasi-projective is made only after restricting to an affine neighborhood of the generic point and using the local detection lemma; quasi-projectivity is not added as a global hypothesis. The full coniveau, purity and moving-lemma constructions are substantial external inputs and are not locally rebuilt.

The S1 coniveau/slice construction is connected to the P1-stable KGL tower by the actual augmentation-adjoint comparison of Levine section8.3/Theorem9.0.3, as specified in the dedicated reference; this stabilization is an imported map-level input, not an identification inferred from the equality of cohomology groups.


## Exact true-triangle and Waldhausen determinant one-type input

[Open item](item-thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type) · level 0



### Statement
Assume AC and fixed universe bounds. For a small Waldhausen category $\mathcal W$ a determinant functor to a Picard groupoid $\mathcal P$ consists of a functor on weak equivalences and additivity isomorphisms for actual cofibration sequences, satisfying weak-equivalence naturality, staircase associativity and commutativity. It factors essentially uniquely through the universal Picard groupoid $V(\mathcal W)$, which represents the 1-type of $K^W(\mathcal W)$. Hence it gives an actual map of connective K-space 1-types to the nerve of $\mathcal P$, natural in exact functors and compatible with object/automorphism classes. For bounded finite-projective complexes, the Knudsen–Mumford alternating graded determinant is such a functor. Its triangle coherence is for true/enhanced triangles. It is not a claim of natural additivity under every morphism of ordinary distinguished-triangle diagrams.

### External input
The statements below are precise established inputs. Their constructions are used at the Waldhausen/cofiber-sequence and Picard-one-type level. No general determinant functor on arbitrary diagrams in an ordinary triangulated category, or unrestricted higher categorical enhancement of Knudsen–Mumford, is imported.

### Facts & Assumptions
**Given:** The stated model hypotheses, AC and fixed universe bounds.

**Goal:** Supply the actual determinant map required by the consumers, with exactly the recorded coherence.

[F1] The precise KM and MTW source records above.

[F2] The BGT record above supplies the canonical enhanced/connective/nonconnective comparison under its explicit hypotheses.

### Proof
1.1 Apply the Waldhausen branches of MTW Definition1.2.3, Theorems1.5.4 and1.6.3. Definition1.2.9 identifies the supplied determinant functor with a symmetric monoidal functor out of $V(\mathcal W)$, and the 1-type comparison supplies the actual K-space map with its object and weak-equivalence maps. The finite Picard target needs this coherence, rather than any replacement of it by bare equality of $K_0,K_1$ groups. [F1]

2.1 KM Definition4 provides the weak-equivalence naturality and associativity on actual true short-exact complex diagrams; its restriction to bounded finite-projective complexes is explicitly the MTW Example1.2.7. The graded-line symmetry is retained, matching the commutativity axiom and its sign. KM pullback isomorphisms include composition compatibility. Thus these data are natural under tensor extension of bounded projectives and under restriction. [F1, step 1.1]

3.1 Apply BGT to the bounded-projective Waldhausen model when transporting the map to the specified affine enhanced Perf model. Idempotent completeness supplies its missing degree-zero hypothesis in Remark9.33, in addition to positive-degree agreement. The canonical comparison is therefore an equivalence on connective covers, and the determinant map transports across that actual equivalence. This imports the exact model bridge, not a new enhancement inferred from KM’s ordinary statement or local Postnikov calculations. [F2, step 1.1] ∎


## Projective bundle pullback detects cohomology classes

[Open item](item-lem-projective-pullback-detection) · level 1

### Statement
Assume the Axiom of Choice and let $H^{*,*}$ be an additively oriented bigraded theory with the projective bundle contract on a category $\mathcal C$ as specified in the contract. For a finite locally free $\mathcal O_X$-module $E$ of constant rank $r>0$, the pullback $\pi^*:H^{*,*}(X)\to H^{*,*}(\mathbb P_X(E))$ along the projective bundle projection is injective. Under the contract's direct-sum isomorphism, $\pi^*$ is the map from the summand indexed by zero. Consequently, pullback along any finite composite of such projective-bundle projections is injective. This conclusion does not assert injectivity for arbitrary pullbacks.

### Statement references
[def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)

### Facts & Assumptions
**Given:** The Axiom of Choice, the category and theory in the statement, an object $X$ of $\mathcal C$, and a finite locally free module $E$ of constant rank $r>0$. A finite locally free module of rank $r$ is locally isomorphic to $\mathcal O_X^r$; $\mathbb P_X(E)$ uses the quotient convention.

**Goal:** Prove the stated injectivity and its preservation under finite iteration.

[F1] The projective bundle contract says that, for each $(a,b)\in\mathbb Z^2$, the map $\Phi_{a,b}:\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(\mathbb P_X(E))$ sending $(x_m)$ to $\sum_m\pi^*(x_m)\xi^m$ is an isomorphism, where $\xi$ is the first Chern class of the tautological quotient line bundle. Pullbacks preserve bidegrees and are contravariantly functorial; $H^{*,*}$ is the direct sum of its bidegree groups ([def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)).

### Proof
**Proof technique:** Identify pullback with a direct-summand inclusion and compose injective maps.

1.1 Fix $(a,b)$. Since $r>0$, the index zero occurs in the direct sum of [F1]. Let $j_0$ insert $x\in H^{a,b}(X)$ in that summand and put zero in all other summands. The coordinate projection onto that summand is a left inverse to $j_0$, so $j_0$ is injective. By the displayed formula, $\Phi_{a,b}j_0(x)=\pi^*(x)\xi^0=\pi^*(x)$. As $\Phi_{a,b}$ is an isomorphism, $\pi^*:H^{a,b}(X)\to H^{a,b}(\mathbb P_X(E))$ is injective. [F1, construct]

2.1 A class in $H^{*,*}(X)$ has finitely many nonzero bidegree components, and pullback preserves bidegrees. If its pullback vanishes, each component pulls back to zero and is therefore zero by step 1.1. Thus $\pi^*$ is injective on the whole bigraded group. For a finite tower of projections satisfying the same positive-rank hypotheses at each stage, each pullback is injective by the same argument; their composite is injective, and functoriality identifies it with pullback along the composite projection. The empty composite gives the identity. [F1, step 1.1] ∎

## Flag towers with line-bundle quotients

[Open item](item-lem-flag-tower-line-quotients) · level 1

### Statement
Assume the Axiom of Choice. Let $X$ be a scheme and $E$ a vector bundle of constant rank $r\geq 0$. There is a finite tower $q:Y\to X$, obtained by successively projectivizing the current positive-rank kernel in the line-quotient convention, such that $q^*E$ has a filtration
$$0=F_0\subset F_1\subset\cdots\subset F_r=q^*E$$
whose successive quotients $F_i/F_{i-1}$ are line bundles. Each inclusion is locally split. For $r=0$ take $Y=X$ and the zero filtration. No global splitting of the extensions is asserted.

If $X$ is quasi-compact and quasi-separated, then $Y$ is also quasi-compact and quasi-separated. For finitely many vector bundles, each of constant rank, their towers can be concatenated to obtain one such $Y$ and a filtration for every pulled-back bundle. More generally, over a quasi-compact and quasi-separated $X$, the same simultaneous conclusion holds for finitely many finite locally free bundles of possibly nonconstant rank, with a locally varying length of filtration: construct the tower separately on the finitely many open-and-closed common rank strata and take their finite disjoint union.

A **vector bundle** is a finite locally free $\mathcal O_X$-module; its rank is the number of basis elements on a local free chart. A **line bundle** is a locally free module of rank one. A filtration is **locally split** when each inclusion is locally the inclusion of a direct summand. A scheme is **quasi-compact** if every open cover has a finite subcover, and **quasi-separated** if the intersection of any two quasi-compact open subsets is quasi-compact. A common rank stratum is the subset on which every bundle in the given finite family has its prescribed rank.

### Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $X$, and the finite locally free bundles specified in the statement.

**Goal:** Construct the tower and locally split line-quotient filtrations, and prove the stated quasi-compactness and quasi-separatedness properties.

[F1] For a finite locally free bundle $G$ on a scheme $S$, its projective bundle $\pi:\mathbb P_S(G)\to S$ represents invertible quotients and has a tautological surjection $\pi^*G\twoheadrightarrow\mathcal O(1)$ onto a line bundle. Over a trivializing open for $G$ of positive rank $n$, it is $\mathbb P^{n-1}$ over that open. This supplier assumes the Axiom of Choice. [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[F2] The kernel of a surjection of finite locally free modules is finite locally free; the surjection splits locally and the kernel rank is the difference of ranks. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

[F3] Over an affine base, projective space has finitely many standard affine charts, and its diagonal over the base is a closed immersion. These constructions restrict over open base subschemes. [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts), [math:lem-projective-space-diagonal-closed](https://alphabetamath.cc/item/lem-projective-space-diagonal-closed)

[F4] The Axiom of Choice supplies the choices inherited from [F1] and the selection of trivializing covers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

**Proof technique:** Iterate tautological quotients, pull locally split exact sequences to the final stage, and check the topology on affine charts.

1.1 Set $X_0=X$ and $K_0=E$. For $j=1,\ldots,r$, provided $K_{j-1}$ has rank $r-j+1$, put $X_j=\mathbb P_{X_{j-1}}(K_{j-1})$ with projection $p_j$, and define $K_j$ as the kernel of the tautological surjection $p_j^*K_{j-1}\twoheadrightarrow L_j:=\mathcal O_{X_j}(1)$. By [F1], $L_j$ is a line bundle, and by [F2] $K_j$ is a vector bundle of rank $r-j$ and the resulting short exact sequence is locally split. Induction constructs all $r$ stages. The rank-zero bundle $K_r$ is zero. For $r=0$ no stage is taken. [given, F1, F2, construct]

2.1 Put $Y=X_r$ and $q=p_1\circ\cdots\circ p_r$, with the identity map when $r=0$. Pull every sequence of step 1.1 to $Y$ along the composite of the subsequent projections. A locally split exact sequence remains split after pullback on the inverse images of its splitting neighbourhoods; consequently these pullbacks are exact and their kernels embed as locally direct summands. Write $\overline K_j$ for the pullback of $K_j$ to $Y$, and $\overline L_j$ for the pullback of $L_j$. Then $\overline K_0=q^*E$, $\overline K_r=0$, and $0\longrightarrow\overline K_j\longrightarrow\overline K_{j-1}\longrightarrow\overline L_j\longrightarrow0$ is locally split, with $\overline L_j$ a line bundle. Set $F_i=\overline K_{r-i}$. This gives the required filtration, with $F_i/F_{i-1}\cong\overline L_{r-i+1}$. Pullback preserves local freeness because it takes a local free basis to a local free basis. [F1, step 1.1, construct]

3.1 We prove the topological assertion for one projective-bundle stage $\pi:P=\mathbb P_S(G)\to S$ with $S$ quasi-compact and quasi-separated and $G$ of positive constant rank. Choose a finite affine cover $U_1,\ldots,U_m$ of $S$ on which $G$ is free: refine a trivializing cover by affine opens and use quasi-compactness. By [F1] and [F3], each $\pi^{-1}(U_i)$ is covered by finitely many standard affine charts, so $P$ is quasi-compact. [F1, F3, F4, construct, step 2.1]

4.1 Let $A$ and $B$ be two of those affine charts, lying over $U_i$ and $U_j$. The intersection $U_i\cap U_j$ is quasi-compact because $S$ is quasi-separated; cover it by finitely many affine opens $W_\nu$. The inverse images of $W_\nu$ in $A$ and $B$ are affine: each chart is affine over its base open, and the inverse image of an affine open under an affine morphism is affine. They are affine opens of $P_{W_\nu}\cong\mathbb P^{n-1}_{W_\nu}$. Their intersection is affine, since the diagonal of this projective space over the affine scheme $W_\nu$ is closed by [F3]: the intersection is its inverse image in the affine fibre product of the two affine opens, hence is a closed subscheme of an affine scheme. These finitely many intersections cover $A\cap B$, so $A\cap B$ is quasi-compact. A scheme with a finite affine open cover whose pairwise intersections are quasi-compact is quasi-separated: any quasi-compact open is covered by finitely many principal affine opens inside the cover, and intersections of such opens are quasi-compact as principal opens in the quasi-compact pairwise chart intersections. Thus $P$ is quasi-separated. [F1, F3, step 3.1, algebra]

5.1 Applying steps 3.1–4.1 successively to the finitely many stages in step 1.1 shows that $Y$ is quasi-compact and quasi-separated whenever $X$ is. The rank-zero case is immediate because $Y=X$. [step 1.1, step 3.1, step 4.1]

6.1 For a finite family of constant-rank bundles, first construct the tower for the first bundle, then pull the second bundle back to its top and construct its tower, and continue. Pullback of each previously constructed locally split filtration remains a locally split filtration with line-bundle quotients, by the argument of step 2.1. The concatenation is finite, and step 5.1 applies at every stage when the initial scheme is quasi-compact and quasi-separated. [step 2.1, step 5.1, construct]

7.1 For a finite family with locally varying ranks on a quasi-compact quasi-separated $X$, each rank function is locally constant: a local free chart has a fixed number of basis elements. Hence every common rank stratum is open, its complement is the union of the other open strata, and it is therefore also closed. The common strata form an open cover of $X$; quasi-compactness makes the set of nonempty strata finite. Each is quasi-compact as a closed subset of $X$ and quasi-separated as an open subscheme: intersections of its quasi-compact opens are intersections in $X$. Apply step 6.1 on each stratum and take the finite disjoint union of the resulting towers and maps. The filtrations have constant length on each stratum, and their pullbacks give the claimed locally varying filtrations. The finite disjoint union is quasi-compact and quasi-separated, since intersections between distinct components are empty and the same properties hold within each component. [step 6.1, construct]

8.1 Steps 1.1–2.1 construct the flag tower and its line quotients; steps 5.1 and 6.1–7.1 prove the remaining claims. Only local splittings have been used, so no global direct-sum decomposition is claimed. [step 2.1, step 5.1, step 6.1, step 7.1] ∎



## Chern coefficients of the projective relation

[Open item](item-lem-chern-relation-uniqueness) · level 1

### Statement
Assume the Axiom of Choice and the data and axioms of [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory). Let $E$ be a finite locally free module of constant rank $r>0$ on an object $X$ of the specified category. Write $\pi:\mathbb P_X(E)\to X$ for the projective bundle of one-dimensional quotients and $\xi=c_1(\mathcal O_{\mathbb P_X(E)}(1))\in H^{2,1}(\mathbb P_X(E))$ for the first Chern class of its tautological quotient line bundle.

There are unique classes $c_i(E)\in H^{2i,i}(X)$ for $1\leq i\leq r$ such that
$$\xi^r+\sum_{i=1}^r(-1)^i\pi^*c_i(E)\xi^{r-i}=0.$$
They are natural under every morphism $f:Y\to X$ in the specified category: $f^*c_i(E)=c_i(f^*E)$. For the rank-zero bundle, set its total Chern series $c_t(0)=1$ separately; equivalently, $c_0(0)=1$ and $c_i(0)=0$ for $i>0$. No coefficient is recovered from its empty projective bundle.

### Facts & Assumptions

[F1] By [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory), pullbacks are functorial degree-preserving ring homomorphisms, first Chern classes of line bundles are natural, and the projective bundle map $\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(\mathbb P_X(E))$, $(x_m)\mapsto\sum_m\pi^*x_m\xi^m$, is an isomorphism. The contract includes the quotient projective bundle and its base change, and assumes the Axiom of Choice.

### Proof

**Given:** The theory and bundle in the statement, and a morphism $f:Y\to X$ in the specified category.

**Goal:** Establish existence, uniqueness, bidegrees and base-change naturality of the coefficients, with the separate rank-zero convention.

1.1 Apply the isomorphism in [F1] in bidegree $(2r,r)$ to $-\xi^r$. It gives a unique tuple $a_m\in H^{2(r-m),r-m}(X)$, $0\leq m<r$, with $-\xi^r=\sum_{m=0}^{r-1}\pi^*a_m\xi^m$. Set $c_i(E)=(-1)^i a_{r-i}$. Then $c_i(E)$ has bidegree $(2i,i)$ and the displayed relation holds. Conversely, any tuple satisfying that relation gives the same expansion of $-\xi^r$, so the isomorphism makes every coefficient unique. [F1, given]

2.1 Let $g:\mathbb P_Y(f^*E)\to\mathbb P_X(E)$ be the base-change morphism and $\pi_Y$ the projection. The quotient construction identifies $g^*\mathcal O_{\mathbb P_X(E)}(1)$ with $\mathcal O_{\mathbb P_Y(f^*E)}(1)$; hence naturality of $c_1$ gives $g^*\xi=\xi_Y$. Pulling back the relation in step 1.1 and using $\pi\circ g=f\circ\pi_Y$ gives the same relation for $f^*E$ with coefficients $f^*c_i(E)$. Their degrees are preserved, so uniqueness in step 1.1 applied over $Y$ yields $f^*c_i(E)=c_i(f^*E)$. For rank zero, the separately prescribed series $1$ has the stated coefficients and is preserved by unital pullback; no projective-bundle isomorphism for rank zero is invoked. This proves the statement. [F1, given, step 1.1] ∎

## Extending a Whitney class to K zero

[Open item](item-lem-virtual-chern-extension-interface) · level 1

### Statement
Assume the Axiom of Choice. Let $H$ be an additively oriented bigraded theory with the projective bundle contract on a category $\mathcal C$ of schemes. For each $X$ in $\mathcal C$, suppose that every finite locally free $\mathcal O_X$-module $E$ is assigned a series
$$c_t(E)=1+\sum_{i\geq 1}c_i(E)t^i,\qquad c_i(E)\in H^{2i,i}(X),$$
depending only on its isomorphism class. Assume that these series are natural under morphisms in $\mathcal C$ and satisfy the Whitney identity $c_t(E)=c_t(E')c_t(E'')$ for every short exact sequence $0\to E'\to E\to E''\to0$ of finite locally free modules.

Write $K^0_{\mathrm{vb}}(X)$ for the abelian group generated by the isomorphism classes $[E]$ of finite locally free modules, with the relations $[E]=[E']+[E'']$ for all such exact sequences. Then there is a unique group homomorphism
$$c_t:K^0_{\mathrm{vb}}(X)\longrightarrow \left\{1+\sum_{i\geq1}a_i t^i:a_i\in H^{2i,i}(X)\right\},$$
where the target group uses multiplication of formal series, taking $[E]$ to $c_t(E)$. Every element can be written $[E]-[F]$, and its image is $c_t(E)c_t(F)^{-1}$. The construction is natural in $X$. When $X$ is locally Noetherian, $K^0_{\mathrm{vb}}(X)$ is the vector-bundle Grothendieck group $K^0(X)$ of the cited library definition. The extension is conditional on the stated exact-sequence Whitney identity; the individual coefficients are not asserted to be additive. In particular, the second coefficient obeys the cross-term formula $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$.

A finite locally free module is an $\mathcal O_X$-module locally isomorphic to a finite direct sum of copies of $\mathcal O_X$. Naturality of the given series means $f^*c_i(E)=c_i(f^*E)$ for every morphism $f:Y\to X$ in $\mathcal C$. A short exact sequence here is an exact sequence of sheaves whose three terms are finite locally free. Formal-series multiplication uses the finite coefficient sums $(ab)_n=\sum_{j=0}^n a_jb_{n-j}$.

### Statement references
[def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)

[math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

**Given:** The category, theory, natural bundle series and exact-sequence Whitney identity in the statement, together with the Axiom of Choice.

**Goal:** Construct the unique natural extension, establish the difference formula and the stated coefficient identity, and identify the locally Noetherian case.

[F1] The theory has associative unital bigraded rings, multiplication of bidegree $(0,0)$, graded commutativity in the first degree, and degree-preserving contravariant unital ring pullbacks. These are part of the given theory's contract ([def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)).

[F2] Under Choice, the published vector-bundle Grothendieck group for a locally Noetherian scheme has exactly the generator-and-exact-sequence presentation stated above ([math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[A1] The assigned bundle series are invariant under isomorphism, natural, and multiplicative in every short exact sequence, as stated in the hypotheses.

### Proof

**Proof technique:** Construct the target group coefficient by coefficient and descend a map through the presentation.

1.1 Put $R_X=\bigoplus_{i\geq0}H^{2i,i}(X)$. By [F1], this is a commutative graded ring: the first degree of each homogeneous summand is even. The displayed target consists of series with constant coefficient $1$ and coefficient of $t^i$ in $H^{2i,i}(X)$. Finite coefficient sums show that it is closed under associative, commutative multiplication and contains $1$. For $a(t)=1+\sum_{i\geq1}a_i t^i$, define $b_0=1$ and recursively $b_n=-\sum_{j=1}^n a_jb_{n-j}$. Each $b_n$ has bidegree $(2n,n)$, and the coefficient of $t^n$ in $a(t)b(t)$ is zero for $n>0$. Thus $b(t)$ is an inverse in the displayed set, which is therefore an abelian group. [F1, construct]

1.2 The isomorphism classes of finite locally free modules form a set: choose local trivializations on open subsets, and encode a bundle by a set-indexed open cover, finite ranks, and invertible transition matrices satisfying the overlap identities. The opens, covers and matrices form sets, and the usual gluing construction produces the represented sheaves. Take the free abelian group on these classes, realized as the finitely supported integer-valued functions on that set, and quotient by the subgroup generated by the exact-sequence relations. This gives the group in the statement. The split exact sequence $0\to E\to E\oplus F\to F\to0$ gives $[E\oplus F]=[E]+[F]$, and the zero exact sequence gives $[0]=0$. Consequently, collecting positive and negative terms in any finite expression writes every element as $[E]-[F]$, using the zero bundle for an empty sum. [construct, algebra]

2.1 By [A1] and step 1.1, sending the generator $[E]$ to $c_t(E)$ defines a homomorphism from the free abelian group to the target. For every defining exact-sequence relation its image is $c_t(E)c_t(E')^{-1}c_t(E'')^{-1}=1$ by the Whitney identity. It therefore descends to the quotient. Its value on $[E]-[F]$ is $c_t(E)c_t(F)^{-1}$. Since the classes $[E]$ generate the quotient, these prescribed values also make the extension unique. [A1, step 1.1, step 1.2]

3.1 For $f:Y\to X$, pullback sends finite locally free modules to finite locally free modules and preserves the exact sequences used in the presentation: locally the quotient term is free, so the sequence splits, and a split exact sequence remains exact after pullback. Thus $[E]\mapsto[f^*E]$ defines a homomorphism on the presented groups. Degree-preserving ring pullback acts coefficientwise on the target series and respects multiplication and inverses. The assumed naturality gives $f^*c_t(E)=c_t(f^*E)$ on generators, hence on every virtual class by step 2.1. For locally Noetherian $X$, [F2] identifies this same presentation with the published $K^0(X)$; no locally Noetherian hypothesis is used in the preceding construction. [F1, F2, A1, step 2.1]

4.1 Comparing the coefficient of $t^2$ in $c_t(x+y)=c_t(x)c_t(y)$ gives $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$. Thus coefficientwise additivity does not follow from the group homomorphism: for example, in the formal series group over $\mathbb Z[u]$, the homomorphism $n\mapsto(1+ut)^n$ has second coefficient zero at $1$ and $u^2$ at $2$. This formal example illustrates the cross term; it makes no additional assertion about a particular cohomology theory. The construction and all claimed properties follow. [step 1.1, step 2.1, algebra] ∎


## Dual conventions for the exterior Euler class

[Open item](item-lem-exterior-euler-duality) · level 1

### Statement

Let $X$ be a scheme and $E$ a locally free $\mathcal O_X$-module of constant finite rank $r\geq 0$. Write $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$ and $\det E=\Lambda^r E$. For every $0\leq i\leq r$ there is a canonical isomorphism
$$\Lambda^{r-i}E\cong\det E\otimes\Lambda^iE^\vee.$$

Let $K^0_{\mathrm{vb}}(X)$ be the vector-bundle Grothendieck ring: its additive group is generated by isomorphism classes $[F]$ of finite locally free $\mathcal O_X$-modules, subject to $[F]=[F']+[F'']$ for every short exact sequence $0\to F'\to F\to F''\to0$ of such modules; multiplication is induced by tensor product and its identity is $[\mathcal O_X]$. Define the exterior Euler class of a rank-$r$ bundle by
$$\lambda_{-1}(E)=\sum_{i=0}^{r}(-1)^i[\Lambda^i E].$$
Then
$$\lambda_{-1}(E)=(-1)^r[\det E]\,\lambda_{-1}(E^\vee).$$
The class $[\det E]$ is a unit, so $\lambda_{-1}(E)=0$ if and only if $\lambda_{-1}(E^\vee)=0$.

The exterior powers, their local increasing-wedge bases, and the determinant line are as in [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles). A line bundle is a locally free module of rank one; a unit in a ring is an element with a multiplicative inverse.

### Facts & Assumptions

**Given:** A scheme $X$ and a locally free $\mathcal O_X$-module $E$ of constant finite rank $r\geq0$.

**Goal:** Construct the stated canonical exterior-power isomorphisms and prove the Euler-class identity and simultaneous vanishing.

[F1] On a trivializing open set for $E$ with ordered basis $e_1,\ldots,e_r$, the increasing wedges of these basis vectors form bases for the exterior powers; $\det E=\Lambda^rE$ is a line bundle. These constructions are functorial in $E$. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

### Proof

**Proof technique:** Use the perfect exterior-product pairing and then reindex the finite alternating sum.

1.1 The presentation of $K^0_{\mathrm{vb}}(X)$ is well defined: isomorphism classes of finite locally free modules form a set, since bundles can be encoded by open covers, finite ranks and transition matrices satisfying the overlap identities. Form the free abelian group on those classes and quotient by the subgroup generated by the stated exact-sequence relations. Tensoring an exact sequence of finite locally free modules with another such module preserves exactness, since locally all terms are free and the sequence splits. Consequently tensor product respects the relations in each variable and gives the stated ring multiplication; associativity, commutativity and the identity follow from the corresponding canonical tensor-product isomorphisms. [given, construct, algebra]

1.2 For each $i$, exterior multiplication gives a canonical pairing $\Lambda^{r-i}E\otimes\Lambda^iE\longrightarrow\det E.$ It induces a map $\Lambda^{r-i}E\to\mathcal Hom(\Lambda^iE,\det E)$. On a trivializing open set, the increasing wedge indexed by a subset $J$ of size $r-i$ pairs to zero with every increasing $i$-wedge except the one indexed by the complementary subset, with which it pairs to $\pm e_1\wedge\cdots\wedge e_r$. Thus its matrix is a signed permutation matrix, including in characteristic two, and the induced map is an isomorphism. Because the pairing is defined by exterior multiplication, these local isomorphisms agree on overlaps. [F1, algebra]

2.1 Locally, $E^\vee$ has the dual basis $e_1^\vee,\ldots,e_r^\vee$. The canonical map $\Lambda^i E^\vee\to(\Lambda^i E)^\vee$ sends $\phi_1\wedge\cdots\wedge\phi_i$ to the functional $v_1\wedge\cdots\wedge v_i\mapsto\det(\phi_a(v_b))$. It sends each increasing dual wedge to the dual of the corresponding increasing wedge basis vector, hence is an isomorphism. Likewise the evaluation map $\det E\otimes(\Lambda^i E)^\vee\to\mathcal Hom(\Lambda^iE,\det E)$ is locally an isomorphism. These maps are canonical and therefore glue. Combining their inverses with step 1.2 gives the asserted canonical isomorphism. The same argument covers $i=0$, $i=r$, and $r=0$, using the empty wedge. [F1, step 1.2, algebra]

3.1 Taking classes in the ring and substituting $j=r-i$ gives $\begin{aligned} \lambda_{-1}(E)&=\sum_{i=0}^r(-1)^i[\Lambda^iE] =\sum_{j=0}^r(-1)^{r-j}[\det E][\Lambda^jE^\vee]\\ &=(-1)^r[\det E]\lambda_{-1}(E^\vee). \end{aligned}$ The dual line $(\det E)^\vee$ has the property that the evaluation map $\det E\otimes(\det E)^\vee\to\mathcal O_X$ is an isomorphism locally and hence globally. Thus $[(\det E)^\vee]$ is the inverse of $[\det E]$. Multiplication by the unit $(-1)^r[\det E]$ is bijective, proving simultaneous vanishing. This establishes all claims. [F1, step 1.1, step 2.1, algebra] ∎

## Relative objects for empty and split pairs

[Open item](item-lem-author-9415fc97ee80-relative-empty-split-cases) · level 1

### Statement
For a cochain complex $B$, the relative cone of $\operatorname{id}_B$ is contractible and that of $0\to B$ is $B$. For the split inclusion $A\to A\oplus B$, $a\mapsto(a,0)$, its cone is quasi-isomorphic to $B$. Dually the support fibers of $\operatorname{id}_C:C\to C$, $C\to0$ and $C\oplus D\to C$ are respectively zero, $C$ and $D$ in the derived category.

Thus whenever a motive-valued or coefficient-complex-valued functor is separately known to take the empty scheme to zero, the pair with empty support has zero relative/support object and the pair with full support has the whole object. If finite disjoint unions are additionally known to become direct sums, the relative/support object of the split pair $X=U\coprod Z$ is the $Z$ summand. These are formal boundary cases and do not prove purity for a positive-codimension smooth pair.

### Facts & Assumptions

**Given:** The displayed complexes and maps; the functorial applications assume exactly the stated empty-value and, for the split case, direct-sum property.

**Goal:** Compute these special cases without invoking any Gysin statement.

[F1] The relative cone is $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ with the differential already established. [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)

[F2] A contravariant enhanced Hom sends such a cofiber to the corresponding restriction fiber whenever that enhancement is supplied. [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)

### Proof

1.1 For $f=\operatorname{id}_B$, the contraction $h(b_0,b_1)=(0,b_0)$ satisfies $dh+hd=\operatorname{id}$ by the calculation in [F1]. For $f:0\to B$, its cone formula has no second summand and is exactly $B$. For the split inclusion, $f$ is termwise injective and its quotient is $B$, so the quotient conclusion of [F1] gives the claimed quasi-isomorphism. [F1, algebra]

2.1 The explicit fiber of a map is its cone shifted by $-1$, up to the standard sign identification. Thus the fiber of an identity is zero and that of $C\to0$ is $C$. For the projection $C\oplus D\to C$, its fiber is $D$ plus the contractible fiber of the identity of $C$, as is seen directly by separating the three coordinates of its cone. Hence it is isomorphic to $D$ in the derived category. These results also agree with [F2] in its specified enhanced setting. [F1, F2, step 1.1, algebra]

3.1 Substitute the restriction or inclusion maps of the stated pairs only when the functor's empty-value and disjoint-union properties have been supplied. They become exactly the maps computed in steps 1.1 through 2.1. This proves the conditional applications and shows that none uses the positive-codimension purity theorem it is intended to accompany. [given, step 1.1, step 2.1] ∎

## Formal Chern arithmetic through degree three

[Open item](item-lem-third-order-chern-inversion) · level 2

### Statement
Let $R$ be a commutative ring with unit. A formal series $C(t)=1+\sum_{i\geq1}a_i t^i$ has a multiplicative inverse, and, modulo terms of degree at least four,
$$C(t)^{-1}=1-a_1t+(a_1^2-a_2)t^2+(-a_1^3+2a_1a_2-a_3)t^3.$$
For $D(t)=1+\sum_{i\geq1}b_i t^i$, the coefficients in degrees one, two and three of $C(t)D(t)$ are respectively $a_1+b_1$, $a_2+a_1b_1+b_2$, and $a_3+a_2b_1+a_1b_2+b_3$.

More generally, let $G$ be an abelian group and let $c_t:G\to 1+tR[\![t]\!]$ be a group homomorphism, where the target uses series multiplication. Write $c_t(x)=1+\sum_{i\geq1}c_i(x)t^i$. If $r\geq1$ and $H$ is a subgroup of $G$ on which $c_i$ vanishes for every $1\leq i<r$, then $c_r:H\to(R,+)$ is a group homomorphism. In particular, under the hypotheses of the virtual Chern extension, these formulas apply to its total Chern series, with $R=\bigoplus_{i\geq0}H^{2i,i}(X)$. If $c_1(x)=c_1(y)$, then $c_2(x-y)=c_2(x)-c_2(y)$.

Here $R[\![t]\!]$ denotes the ring of formal sequences of coefficients, with multiplication defined by the finite convolution formula $[t^n](AB)=\sum_{i=0}^n[t^i]A\,[t^{n-i}]B$. The notation $1+tR[\![t]\!]$ means the series with constant coefficient one, and $[t^n]A$ denotes the coefficient of $t^n$. Equality modulo terms of degree at least four means equality of coefficients in degrees zero through three. A virtual Chern class is an element of the bundle Grothendieck group equipped with the extended series described by the cited interface.

### Statement references
[lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)

### Facts & Assumptions

**Given:** A commutative unital ring $R$, the series $C$ and $D$, and, for the additivity assertion, the group homomorphism $c_t$, integer $r$ and subgroup $H$ specified in the statement.

**Goal:** Establish the inverse and product formulas, the subgroup additivity assertion and the stated conditional virtual Chern consequences.

[F1] Under its stated hypotheses, including the Axiom of Choice and the exact-sequence Whitney identity, the virtual Chern extension supplies a homomorphism from the bundle Grothendieck group to the multiplicative group of total series. Its coefficients lie in $H^{2i,i}(X)$, and $\bigoplus_{i\geq0}H^{2i,i}(X)$ is commutative because the first grading of each summand is even. [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)

### Proof

**Proof technique:** Compare coefficients of formal series.

1.1 Set $q_0=1$ and recursively $q_n=-\sum_{i=1}^n a_iq_{n-i}$ for $n\geq1$. Every sum is finite, so $Q(t)=\sum_{n\geq0}q_nt^n$ is a formal series. The coefficient of $t^n$ in $C Q$ is zero for $n>0$ and one for $n=0$; commutativity gives $Q C=1$ as well. The recursion yields $q_1=-a_1$, $q_2=a_1^2-a_2$, and $q_3=-a_1^3+2a_1a_2-a_3$, proving the inverse formula. [given, construct, algebra]

1.2 The convolution formula gives $[t^n](CD)=a_n+b_n+\sum_{i=1}^{n-1}a_i b_{n-i}$ for $n\geq1$, taking the constant coefficients to be one. Substituting $n=1,2,3$ gives the three displayed product coefficients. [given, algebra]

2.1 For $x,y\in H$, the homomorphism property gives $c_t(x+y)=c_t(x)c_t(y)$. Comparing degree $r$ as in step 1.2 gives $c_r(x+y)=c_r(x)+c_r(y)+\sum_{i=1}^{r-1}c_i(x)c_{r-i}(y)$. Each summand vanishes by the hypothesis on $H$, including the empty-sum case $r=1$. The identity element maps to the series $1$, so $c_r(0)=0$; the addition formula also gives $c_r(-x)=-c_r(x)$. Thus $c_r$ is a group homomorphism. [given, step 1.2, algebra]

3.1 Under the hypotheses in [F1], the total series satisfy the hypotheses just used, so all preceding formulas apply to virtual classes. For $x,y$ with common first coefficient $u$, steps 1.1 and 1.2 give $c_2(x-y)=c_2(x)+(u^2-c_2(y))-u^2=c_2(x)-c_2(y)$. This proves the stated virtual consequences and completes the proof. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎


## Exterior-square line factors on a flag space

[Open item](item-lem-exterior-square-root-formula) · level 2


### Statement
Let $S$ be a scheme and $E$ a rank-three vector bundle with a filtration $0=F_0\subset F_1\subset F_2\subset F_3=E$ whose successive quotients $L_i=F_i/F_{i-1}$ are line bundles and whose inclusions are locally split. Then $\Lambda^2E$ has a locally split filtration with successive line-bundle quotients $L_1\otimes L_2$, $L_1\otimes L_3$, and $L_2\otimes L_3$, in that order. There is an isomorphism $\det E\cong L_1\otimes L_2\otimes L_3$.

Assume the Axiom of Choice and that $S$ is locally noetherian. In the vector-bundle Grothendieck ring $K^0(S)$, write $[L_i]$ for the class of $L_i$. Then $[\Lambda^2E]=[L_1][L_2]+[L_1][L_3]+[L_2][L_3]$ and $[\det E]=[L_1][L_2][L_3]$. If $c_1$ is any homomorphism from the Picard group of $S$ to an abelian group, and $\ell_i=c_1(L_i)$, the first Chern classes of the three exterior-square line factors are respectively $\ell_1+\ell_2$, $\ell_1+\ell_3$, and $\ell_2+\ell_3$.

A vector bundle is a finite locally free $\mathcal O_S$-module, and a line bundle has rank one. Locally split means that every inclusion in the filtration is locally the inclusion of a direct summand. The Picard group consists of line-bundle isomorphism classes under tensor product. The stated homomorphism condition means $c_1(L\otimes M)=c_1(L)+c_1(M)$; these line-factor classes are the exterior-square roots relative to the chosen flag. In particular, under the Axiom of Choice, the flag-tower supplier provides such a filtration after pulling a rank-three bundle back to its flag tower.

### Facts & Assumptions

**Given:** A scheme $S$, a rank-three bundle $E$, and the locally split line-quotient filtration in the statement. For the $K^0$ assertions, also assume the Axiom of Choice and that $S$ is locally noetherian. For the root assertion, also assume the stated additive map $c_1$.

**Goal:** Construct the exterior-square filtration and determinant isomorphism and derive the displayed class formulas.

[A1] The Axiom of Choice is used only through the flag-tower supplier [F2] and the Grothendieck-ring supplier [F3]; the filtration and determinant constructions for a given flag require no additional Choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Exterior powers and determinant are functorial for bundle maps; the exterior power of a free module has the basis of increasing wedges. In particular the determinant of a rank-three bundle is its third exterior power. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) [math:lem-exterior-algebra-basis-monomials](https://alphabetamath.cc/item/lem-exterior-algebra-basis-monomials)

[F2] Under the Axiom of Choice, the flag tower of a rank-three bundle carries a locally split filtration with line-bundle quotients. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F3] Under the Axiom of Choice, for a locally noetherian scheme $S$, $K^0(S)$ is generated by vector-bundle classes with the relations $[B]=[A]+[C]$ for short exact sequences $0\to A\to B\to C\to0$ of vector bundles; multiplication is induced by tensor product. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

### Proof

**Proof technique:** Construct the filtration by wedge images and identify its quotients on bases adapted to the flag.

1.1 Let $G_1$ be the image of the wedge map $F_1\otimes F_2\to\Lambda^2E$, and let $G_2$ be the image of $F_1\otimes E\to\Lambda^2E$. These are subsheaves with $G_1\subseteq G_2\subseteq\Lambda^2E$. Locally the two short exact sequences defining the flag split, and the three line quotients are trivial. Thus there is a local basis $e_1,e_2,e_3$ of $E$ with $F_1$ generated by $e_1$ and $F_2$ by $e_1,e_2$. By [F1], $G_1$ is generated by $e_1\wedge e_2$, $G_2$ by $e_1\wedge e_2,e_1\wedge e_3$, and $\Lambda^2E$ by these two wedges and $e_2\wedge e_3$. Consequently these subsheaves are locally direct summands and the successive quotients are line bundles. [given, F1, construct]

2.1 Wedge multiplication induces maps $L_1\otimes L_2\to G_1$, $L_1\otimes L_3\to G_2/G_1$, and $L_2\otimes L_3\to\Lambda^2E/G_2$. They are well defined: changing a lift by a vector in the preceding flag term changes its wedge by zero or by a section of the indicated preceding $G$ term. On an adapted basis as in step 1.1, the maps send the tensor products of the quotient basis vectors to the corresponding wedge generators. They are therefore local isomorphisms, hence global isomorphisms. This proves the claimed filtration without choosing a global splitting. [F1, step 1.1, construct]

2.2 The map $L_1\otimes L_2\otimes L_3\to\Lambda^3E$ sending local quotient sections, with arbitrary lifts to their flag terms, to the wedge of those lifts is well defined: changing a lift adds a wedge containing two vectors from $F_1$ or three from $F_2$, which vanishes locally on an adapted basis. On that basis it sends the tensor product of quotient generators to $e_1\wedge e_2\wedge e_3$, a generator by [F1]. It is thus an isomorphism to $\det E=\Lambda^3E$. [F1, step 1.1, construct]

3.1 Under the additional $K^0$ hypotheses, apply [F3] to the short exact sequences $0\to G_1\to G_2\to G_2/G_1\to0$ and $0\to G_2\to\Lambda^2E\to\Lambda^2E/G_2\to0$. Using step 2.1 and the tensor-product multiplication gives the displayed formula for $[\Lambda^2E]$. Step 2.2 and the same multiplication give the determinant formula. [A1, F3, step 2.1, step 2.2, assume-hyp]

4.1 Apply the assumed homomorphism $c_1$ to the three tensor-product line bundles identified in step 2.1. Additivity gives the three pairwise sums. Finally, [F2] supplies the required flag after pullback to the flag tower when the Axiom of Choice is assumed. All stated conclusions follow. [A1, F2, step 2.1, step 2.2, step 3.1, assume-hyp] ∎


## Finite-dimensional families of generated bundle functionals

[Open item](item-lem-regular-section-parameter-family) · level 2

### Statement
Let $k$ be a field, $U$ a $k$-scheme, and $E$ a vector bundle of constant rank $r$ on $U$. Write $E^\vee=\mathcal Hom_{\mathcal O_U}(E,\mathcal O_U)$, and suppose that global sections $\phi_1,\ldots,\phi_m$ generate $E^\vee$, meaning that the morphism $q:\mathcal O_U^m\to E^\vee$ sending the standard basis to these sections is surjective. Here $m$ and $r$ may be zero.

The affine parameter space $\mathbb A_k^m=\operatorname{Spec}k[T_1,\ldots,T_m]$ carries a universal functional $\Phi=\sum_i T_i\phi_i$ on the pullback of $E$ to $U\times_k\mathbb A_k^m$. Its zero-incidence subscheme $I$ is the closed subscheme defined locally by the coefficients of $\Phi$ in a frame of $E^\vee$. For every point $u\in U$, evaluation gives a surjective linear map $\kappa(u)^m\to E^\vee\otimes_{\mathcal O_U}\kappa(u)$, and this remains surjective after any field extension of $\kappa(u)$.

For every closed subscheme $Z\hookrightarrow U$, the incidence subscheme constructed from the restricted sections on $Z$ is canonically $I\times_U Z$, viewed as a closed subscheme of $Z\times_k\mathbb A_k^m$. More generally, for any $k$-scheme $T$ and any $T$-valued parameter $(a_1,\ldots,a_m)$, the pullback of $I$ to $U\times_k T$ is the zero subscheme of the functional $\sum_i a_i\phi_i$.

### Statement references
[lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

[def-unimodular-sections](item-def-unimodular-sections)

### Facts & Assumptions
**Given:** The field $k$, the $k$-scheme $U$, the rank-$r$ vector bundle $E$, and the surjective generating map $q$ in the statement.

**Goal:** Construct the universal zero-incidence subscheme, prove fiberwise surjectivity of evaluation, and identify its base changes.

[F1] A vector bundle is a finite locally free module; its dual is the sheaf of homomorphisms to the structure sheaf, and a functional is a section of that dual. [def-unimodular-sections](item-def-unimodular-sections)

[F2] A surjective morphism between finite locally free sheaves splits locally. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

### Proof
**Proof technique:** Use local frames and the locally split generating map.

1.1 Let $p:U\times_k\mathbb A_k^m\to U$ be the projection. The coordinate functions $T_i$ and the pullbacks $p^*\phi_i$ define a section $\Phi=\sum_i T_i p^*\phi_i$ of $p^*E^\vee$, hence a functional $p^*E\to\mathcal O_{U\times_k\mathbb A_k^m}$. On a trivializing open for $E$, write its coefficients as $f_1,\ldots,f_r$. Define $I$ there by the ideal $(f_1,\ldots,f_r)$. On overlapping trivializations the coefficient columns differ by an invertible matrix, so they generate the same ideal. These ideals glue to a closed subscheme $I$; equivalently, its ideal is the image of the functional $\Phi$. This also covers rank zero, where the ideal is zero. [F1, given, construct]

2.1 By [F2], $q$ has a right inverse locally on $U$. Pulling this local splitting back to the residue field $\kappa(u)$ of any point $u$ gives a right inverse to the evaluation map $\kappa(u)^m\to E^\vee\otimes\kappa(u)$, so that map is surjective. Tensoring the same right inverse with any field extension of $\kappa(u)$ proves the asserted surjectivity over the extension. [F2, given, step 1.1]

2.2 A morphism $T\to\mathbb A_k^m$ is specified by the images $a_i$ of the coordinate functions. Pulling back the local coefficients $f_j$ along $U\times_k T\to U\times_k\mathbb A_k^m$ substitutes $a_i$ for $T_i$; their generated ideal is therefore the image ideal of $\sum_i a_i\phi_i$. The scheme-theoretic inverse image of a closed subscheme is defined by the extended ideal, so this pullback is exactly the stated zero subscheme. [step 1.1, given, algebra]

3.1 For a closed subscheme $Z\hookrightarrow U$, pulling the same coefficient ideals back to $Z\times_k\mathbb A_k^m$ gives the coefficients of the restricted sections of $E^\vee|_Z\cong(E|_Z)^\vee$ in the restricted frames. Thus their incidence subscheme is canonically $I\times_U Z$. Together with steps 1.1 through 2.2 this proves all the assertions. [F1, step 1.1, step 2.1, step 2.2] ∎

### Remarks
This construction alone does not assert smoothness, irreducibility, codimension, or avoidance for any parameter. Generation of $E$ does not by itself supply the assumed generation of $E^\vee$.

## A rank-two bundle with a trivial quotient and determinant

[Open item](item-lem-trivial-determinant-rank-two-kernel) · level 2

### Statement
Let $V$ be a scheme and $Q$ a rank-two vector bundle on $V$ with $\det Q\cong\mathcal O_V$. If $Q\twoheadrightarrow\mathcal O_V$ is a surjective morphism, its kernel is isomorphic to $\mathcal O_V$, so there is a short exact sequence $0\to\mathcal O_V\to Q\to\mathcal O_V\to0$.

Assume also the Axiom of Choice and that $V$ is locally Noetherian. Then $[Q]=2[\mathcal O_V]$ in the vector-bundle Grothendieck group $K^0(V)$, whether or not the sequence splits globally. If in addition $P$ is a vector bundle in a short exact sequence $0\to Q\to P\to\mathcal O_V\to0$, then $[P]=3[\mathcal O_V]$ in $K^0(V)$.

Here a vector bundle of rank $r$ is an $\mathcal O_V$-module locally isomorphic to $\mathcal O_V^r$; a line bundle is a rank-one vector bundle. The determinant of a rank-$r$ bundle is its top exterior power $\Lambda^r E$, and a trivial determinant means an isomorphism with $\mathcal O_V$. A short exact sequence is exact at each term, equivalently on stalks. Under the stated Choice and locally Noetherian hypotheses, $K^0(V)$ is the abelian group generated by isomorphism classes $[E]$ of vector bundles, with $[E]=[E']+[E'']$ for every short exact sequence $0\to E'\to E\to E''\to0$.

### Facts & Assumptions

**Given:** A scheme $V$, a rank-two vector bundle $Q$, an isomorphism $\det Q\cong\mathcal O_V$, and a surjection $Q\to\mathcal O_V$. For the group assertions, also the Axiom of Choice and locally Noetherianity of $V$; for the final assertion, the displayed short exact sequence involving $P$.

**Goal:** Identify the kernel with $\mathcal O_V$ and prove the stated group identities under their additional hypotheses.

[F1] The kernel of a surjection of finite locally free sheaves is finite locally free, with rank equal to the difference of ranks; the surjection splits locally. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

[F2] A short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles has a canonical isomorphism $\det E'\otimes\det E''\cong\det E$. [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences)

[F3] The determinant of a rank-one bundle $L$ is $\Lambda^1L$, canonically $L$; in particular $\det\mathcal O_V\cong\mathcal O_V$. Tensoring an $\mathcal O_V$-module with $\mathcal O_V$ gives that module canonically. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F4] Under Choice and locally Noetherianity, isomorphic vector bundles have the same generator in $K^0(V)$, and every short exact sequence of vector bundles gives the additive relation in the statement. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

**Proof technique:** direct application of the determinant and exact-sequence relations.

1.1 Let $L$ be the kernel of the given surjection. By [F1], $L$ is a vector bundle of rank $2-1=1$, and $0\to L\to Q\to\mathcal O_V\to0$ is short exact. [given, F1]

2.1 By [F2] applied to that sequence, $\det L\otimes\det\mathcal O_V\cong\det Q$. By [F3] and the given trivialization of $\det Q$, this yields an isomorphism $L\cong\mathcal O_V$. Substitution in the sequence of step 1.1 gives the asserted short exact sequence. [given, F2, F3, step 1.1]

3.1 Under the additional Choice and locally Noetherian hypotheses, [F4] applied to that sequence gives $[Q]=[L]+[\mathcal O_V]=2[\mathcal O_V]$. This uses the exact-sequence relation and does not require a global splitting. [given, F4, step 2.1]

4.1 If the additional sequence $0\to Q\to P\to\mathcal O_V\to0$ is given, [F4] gives $[P]=[Q]+[\mathcal O_V]=3[\mathcal O_V]$. Thus all conclusions hold under their stated hypotheses. [given, F4, step 3.1] ∎

## Finite clopen common rank strata

[Open item](item-lem-author-ab0a6fc202cb-finite-common-rank-strata) · level 2

### Statement
Assume AC. Let $X$ be a quasi-compact quasi-separated scheme and $E_1,\ldots,E_m$ a finite family of finite locally free sheaves, with no fixed-rank assumption. The nonempty common rank loci $X_\alpha$, where $\alpha=(r_1,\ldots,r_m)$ and $\operatorname{rank}E_i=r_i$, form a finite partition by open-and-closed qcqs subschemes. Their disjoint union is canonically isomorphic to $X$. Each $E_i|_{X_\alpha}$ has constant rank $r_i$. The simultaneous flag towers $q_\alpha:Y_\alpha\to X_\alpha$ form a qcqs finite disjoint union $q:Y=\coprod_\alpha Y_\alpha\to X$. Rank-zero bundles have empty filtrations and require no projectivization; if every rank on a stratum is zero the tower is the identity there. The empty scheme has the empty partition and identity tower.

### Facts & Assumptions

**Given:** AC, $X$ and its finite family of bundles. A rank is the cardinality of a local free basis; qcqs means quasi-compact and quasi-separated.

**Goal:** Establish finiteness, category membership and the stated componentwise construction.

[F1] The flag construction gives finite positive-constant-rank projective towers for constant-rank bundles, preserves qcqs, and uses the identity for rank zero. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F2] AC is retained from the flag construction. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

1.1 Each rank function is locally constant because local free trivializations have a fixed finite rank. A common rank locus is the finite intersection of its rank fibers, hence open; its complement is the union of the other such open loci, hence also open. Thus every common rank locus is open and closed, and they partition $X$. [given]

2.1 These pairwise disjoint loci form an open cover of $X$. Quasi-compactness gives a finite subcover; disjointness means every nonempty locus occurs in that subcover, so there are finitely many. Each is quasi-compact as a closed subset of $X$ and quasi-separated as an open subscheme of the quasi-separated $X$. The open immersions identify their disjoint union with $X$, since they cover and have empty pairwise intersections, with the same restricted structure sheaves. [step 1.1, construct]

3.1 On each locus apply [F1] to the constant-rank restrictions and concatenate the finitely many towers. Each $Y_\alpha$ is qcqs. A finite disjoint union of these schemes is quasi-compact, and intersections of affine opens from different components are empty while those within a component are quasi-compact; hence it is quasi-separated. The maps $q_\alpha$ assemble to $q$. [F1, F2, step 2.1, construct]

4.1 The zero-rank and empty cases use the identities stipulated in [F1]. No bound on the dimension of $X$, no noetherianity, connectedness or integrality, and no global rank constancy was used. This proves the claims. [F1, step 1.1, step 2.1, step 3.1] ∎


## Line-quotient classes across clopen rank strata

[Open item](item-lem-author-ab0a6fc202cb-clopen-line-quotient-classes) · level 3

### Statement
Assume AC. For the simultaneous componentwise flag tower $q:Y=\coprod_\alpha Y_\alpha\to X$ of a finite bundle family on qcqs $X$, let $j_\alpha:Y_\alpha\hookrightarrow Y$ be its clopen inclusions. If $E_i$ has rank $r_{i,\alpha}$ on the stratum $X_\alpha$, its line-quotient filtration on $Y_\alpha$ gives
$$[q_\alpha^*(E_i|_{X_\alpha})]=\sum_{s=1}^{r_{i,\alpha}}[L_{i,\alpha,s}].$$
Here $K^0_{\mathrm{vb}}$ denotes the group generated by isomorphism classes of finite locally free sheaves with the relation $[B]=[A]+[C]$ for every short exact sequence $0\to A\to B\to C\to0$. Extension by zero along a clopen inclusion preserves finite local freeness and gives the global equality
$$[q^*E_i]=\sum_\alpha\sum_{s=1}^{r_{i,\alpha}}[j_{\alpha*}L_{i,\alpha,s}]\quad\text{in }K^0_{\mathrm{vb}}(Y).$$
Each $j_{\alpha*}L$ has rank one on $Y_\alpha$ and zero elsewhere, so it is not a line bundle on all of $Y$ when the complement is nonempty. If all original ranks are constant, the ordinary simultaneous tower instead has global line quotients and gives a global sum of line-bundle classes. For varying ranks such an unqualified global line-bundle sum is false: on $X=\operatorname{Spec}k\coprod\operatorname{Spec}k$, the bundle $0\coprod\mathcal O$ cannot be a finite sum of global line-bundle classes, nor can its pullback along a surjective componentwise flag tower.

### Facts & Assumptions

**Given:** AC and the family, partition and tower in the Statement; an empty sum is zero.

**Goal:** Prove the valid class identities and the precise obstruction to a global line sum.

[F1] The partition is finite, clopen and qcqs. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)

[F2] On each constant-rank stratum, the tower supplies locally split filtrations with line-bundle quotients; for constant ranks it supplies them globally. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F3] The defining relations of $K^0_{\mathrm{vb}}$ are those stated above; they apply to locally split filtrations. AC is inherited from the tower. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

1.1 For a stratum filtration $0=F_0\subset\cdots\subset F_r=q_\alpha^*E_i$ with quotients $L_s$, each short exact sequence $0\to F_{s-1}\to F_s\to L_s\to0$ gives $[F_s]=[F_{s-1}]+[L_s]$. Starting at $[F_0]=0$ and adding the finitely many relations proves the componentwise identity, including $r=0$. The same argument proves the global line-quotient sum when ranks are constant and [F2] gives a global filtration. [F2, F3, algebra]

1.2 A sheaf extended by zero from $Y_\alpha$ is the given sheaf on that open and zero on its open complement. If the sheaf is finite locally free there, these descriptions are local free charts of its extension: the ranks are its original ranks on the stratum and zero elsewhere. Extension is exact, since on both pieces it is exact, and stalkwise exactness detects exactness of sheaves. Thus it induces a homomorphism on $K^0_{\mathrm{vb}}$. [F1, F3, construct]

2.1 A finite locally free sheaf $G$ on $Y$ is canonically isomorphic to $\bigoplus_\alpha j_{\alpha*}(G|_{Y_\alpha})$: the natural map is an isomorphism on every stratum, hence on every stalk. This is a finite direct sum by [F1], so its class is the sum of the classes of those extensions. Apply it to $q^*E_i$, and then push forward the equalities of step 1.1 by the exact extensions of step 1.2. This proves the stated global equality with supported, possibly varying-rank bundles. [F1, F3, step 1.1, step 1.2]

3.1 Rank at a point defines a homomorphism $K^0_{\mathrm{vb}}(Y)\to\mathbb Z$: a short exact sequence of vector bundles splits locally by lifting a basis of its locally free quotient, so its fiber dimensions are additive. A sum of $N$ global line-bundle classes therefore has rank $N$ at every point. The displayed two-component bundle has ranks zero and one, so its class cannot equal such a sum. Any surjective componentwise tower has nonempty preimages of both components and preserves these two ranks, giving the same contradiction upstairs. This refutes the unqualified varying-rank line-sum assertion while retaining all valid identities above. [F2, F3, step 2.1, algebra] ∎


## Finite derived products and motivic coefficient operations

[Open item](item-lem-author-ab0a6fc202cb-finite-derived-products) · level 5

### Statement
For a finite family $C_\alpha\in D(\mathbb Z)$ and $i\in\mathbb Z$,
$$H^i\!\left(\prod_\alpha C_\alpha\right)\cong\prod_\alpha H^i(C_\alpha).$$
For every positive integer $n$, writing $C/n=C\otimes^{\mathbf L}\mathbb Z/n$, one also has
$$\left(\prod_\alpha C_\alpha\right)/n\simeq\prod_\alpha(C_\alpha/n).$$
These equivalences are induced by the coordinate projections. Consequently a finite-product decomposition of derived complexes induces the corresponding decomposition on integral and finite-coefficient cohomology, and each such joint restriction map is injective. The empty product is zero throughout.

### Facts & Assumptions

**Given:** A finite family of derived complexes, an integer $i$, and $n>0$.

**Goal:** Prove compatibility with cohomology and derived finite coefficients.

[F1] Cohomology is functorial on $D(\mathbb Z)$. [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)

[F2] Derived tensor with $\mathbb Z/n$ is the mapping cone of multiplication by $n$ and is functorial. [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)

### Proof

1.1 Represent each $C_\alpha$ by a cochain complex. Their finite degreewise direct sum is also their finite product. Products of finitely many abelian groups are exact: a coordinatewise surjection lifts a tuple by finitely many lifts, and kernels are computed coordinatewise. Hence this degreewise product preserves quasi-isomorphisms and represents the derived product. Its cycles and boundaries in every degree are the respective finite products of the coordinate cycles and boundaries, proving the first isomorphism. [F1, construct, algebra]

2.1 Multiplication by $n$ on this product is coordinatewise. Its cone has in degree $d$ the sum of the product in degree $d$ with that in degree $d+1$, with the usual coordinatewise cone differential. Finite sums commute with finite products, so this cone is canonically the finite product of the individual cones. By [F2] this is exactly the second displayed equivalence. [F2, step 1.1, algebra]

3.1 Apply [F1] and step 1.1 to step 2.1. An element whose every product coordinate is zero is zero, yielding the claimed detection for both coefficient choices. With no indices every complex and group displayed is zero, and the same conclusions hold. [F1, step 1.1, step 2.1] ∎


## External regular perfection and the standard derived t structure

[Open item](item-thm-author-7ef3227685d9-supported-k0-regular-cohomology-input) · level 5


### Statement
For the enhanced perfect-category assertion, assume the Axiom of Choice and fix suitable universes. Let $U$ be a regular Noetherian finite-dimensional scheme. Inside the specified sheaf-derived infinity-category, the full subcategory of perfect objects is precisely the full subcategory of objects with bounded coherent cohomology. The standard cohomological truncation functors $\tau_{\leq n},\tau_{\geq n}$ and their truncation cofiber sequences are those of the ambient derived t-structure, whose heart is ordinary sheaves of modules.

For a locally Noetherian scheme, coherent sheaves form an abelian full subcategory, with kernels, images and cokernels computed as module sheaves. A complex having coherent cohomology and only finitely many nonzero cohomology sheaves remains so under standard truncation.

### Source contract
[A1] The stated [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and universe bounds discharge the selected enhancement premises of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) and the derived-enhancement input in [F2]. They apply to the enhanced perfect-category assertion. The coherent-sheaf and truncation-of-cohomology assertions in the second paragraph are the ordinary local statements of [F1] and do not invoke that enhanced realization.

**Given:** For the enhanced assertion, the Axiom of Choice, suitable universes, and the specified infinity-localization of Zariski module cochain complexes on $U$, and its underlying ordinary derived category.

**Goal:** Import local regular perfection and standard truncation, without asserting global vector-bundle resolutions.

[F1] Stacks Lemmas 36.11.6(1) and 36.11.8 establish exactly the equality of object conditions in the Statement; the introduction to §36.11 gives the coherent abelian subcategory.

[F2] Higher Algebra Proposition 1.3.5.21(2) with Definition 1.3.5.16 and Remark 1.3.5.19 supplies the ambient derived t-structure, with cochain index reversal. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) has already specified this actual localization.

### External input
Import [F1]–[F2] under their exact hypotheses and reading limits. This is an equality of full subcategories defined by objects in the already specified enhancement; it is not an inference of an enhanced equivalence from an abstract triangulated equivalence. The regular-perfect result is local on affine neighbourhoods. Neither a global bounded locally free resolution nor an equivalence with $D^b(\mathrm{Coh}_T)$ is needed or asserted.


## Finite ideal-power filtrations and coherent sheaves on the closed subscheme

[Open item](item-lem-author-7ef3227685d9-supported-k0-ideal-filtration) · level 6


### Statement
Let $i:T\hookrightarrow U$ be any closed subscheme of the regular Noetherian finite-dimensional $U$, with coherent defining ideal $\mathcal I$. For every $M\in\mathcal A_T$, some integer $N\geq1$ satisfies $\mathcal I^NM=0$. The finite filtration
$$M\supseteq\mathcal IM\supseteq\cdots\supseteq\mathcal I^NM=0$$
has coherent quotients annihilated by $\mathcal I$. Closed direct image identifies $\mathrm{Coh}(T)$ exactly with the full abelian subcategory $\mathcal B_T\subseteq\mathcal A_T$ annihilated by $\mathcal I$. This inclusion is exact and closed under subobjects and quotients, although it need not be closed under extensions in $\mathcal A_T$.

### Facts & Assumptions
**Given:** $U,T,i,\mathcal I$ and $M$ as stated; $\mathcal A_T$ denotes coherent modules supported on $|T|$.

**Goal:** Verify the exact hypotheses for abelian dévissage using an actual finite filtration.

[F1] The unconditional coherent-sheaf clause of [thm-author-7ef3227685d9-supported-k0-regular-cohomology-input](item-thm-author-7ef3227685d9-supported-k0-regular-cohomology-input) gives the coherent abelian category on the Noetherian scheme $U$. Kernels, cokernels and extensions of coherent modules supported on $|T|$ remain supported there by exactness of stalks, giving the abelian category $\mathcal A_T$ used here. Noetherianity gives finite module presentations on affine opens and coherence of ideals, images and quotients. This argument uses no perfect-category enhancement or nonconnective model.

[F2] For a closed immersion with ideal $\mathcal I$, the structure sheaf on $T$ is $\mathcal O_U/\mathcal I$ along the underlying closed space. An affine neighbourhood has the form $\operatorname{Spec}(A/I)\hookrightarrow\operatorname{Spec}A$.

### Proof
1.1 Choose a finite affine cover of $U$. On one affine, write $M$ as a finite $A$-module and $I=(f_1,\ldots,f_r)$. Since its support is contained in $V(I)$, its localization at each $f_j$ is zero. Finitely many module generators then give an exponent $n_j\geq1$ such that $f_j^{n_j}M=0$. Every monomial of degree $N=1+\sum_j(n_j-1)$ in the $f_j$ contains one such power, so $I^NM=0$. If $I=0$, take $N=1$. Taking the maximum of the finitely many affine exponents gives a global exponent: higher ideal powers are contained in lower ones. [F1, F2, given, choose]

2.1 Each $\mathcal I^rM$ and its quotient by $\mathcal I^{r+1}M$ is coherent by Noetherianity; the quotient is killed by $\mathcal I$ by multiplication. Thus step 1.1 supplies the stated finite filtration in the abelian category $\mathcal A_T$. [F1, F2, step 1.1]

3.1 For any sheaf on the closed subspace, closed direct image has its given stalks on $T$ and zero stalks off $T$, so it is exact. A module sheaf annihilated by $\mathcal I$ descends uniquely to an $\mathcal O_T$-module sheaf on that subspace: locally this is simply restriction of scalars for $A\to A/I$, with inverse giving the same module its $A/I$ action. These local constructions and their maps glue because the action factors uniquely through the quotient sheaf of rings. Finiteness is equivalent over $A$ and $A/I$, which are Noetherian, so this identifies precisely the coherent categories. Hence $i_*$ is fully faithful, exact and has image $\mathcal B_T$. Subobjects and quotients of a module killed by $\mathcal I$ are also killed by $\mathcal I$. This checks the asserted closure without imposing the generally false extension-closure condition. [F1, F2, step 2.1] ∎


## Derived Nisnevich descent on a finite clopen partition

[Open item](item-lem-author-ab0a6fc202cb-clopen-derived-descent) · level 7

### Statement
Let $F$ be a homotopy-coherent sheaf with values in the derived infinity-category $D(\mathbb Z)$ on a category of schemes with the Nisnevich topology. Suppose the empty scheme and a finite clopen partition $X=\coprod_{\alpha\in A}X_\alpha$, its inclusions and their fiber products lie in that category. Then $F(\varnothing)\simeq0$, and restriction induces a natural equivalence
$$F(X)\xrightarrow{\simeq}\prod_{\alpha\in A}F(X_\alpha).$$
Here sheaf means that evaluating on a cover is the homotopy limit of its Cech descent diagram; the empty covering family is included. The finite empty product in $D(\mathbb Z)$ is its zero object. No assertion about injectivity for general overlapping open covers is made.

### Facts & Assumptions

**Given:** $F$, its derived sheaf condition and the partition in the Statement.

**Goal:** Compute descent on this particular finite cover.

[F1] Open immersions are etale and preserve residue fields, so an open cover is a Nisnevich cover. The empty family covers the empty scheme. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[F2] By the assumed sheaf condition, $F(X)$ is the totalization (homotopy limit) of the cosimplicial diagram whose degree $n$ term is the product of $F(X_{\alpha_0}\times_X\cdots\times_X X_{\alpha_n})$ over all $(n+1)$-tuples of indices. Descent for the empty family is the limit of the empty diagram, the terminal object.

### Proof

1.1 Apply the empty-cover case of [F1]–[F2]. It identifies $F(\varnothing)$ with the terminal object of $D(\mathbb Z)$, which is zero. This also proves the conclusion for an empty partition. [F1, F2]

2.1 For a nonempty partition, the intersection indexed by $(\alpha_0,\ldots,\alpha_n)$ is $X_\alpha$ if all indices equal $\alpha$, and empty otherwise. Step 1.1 deletes all mixed-index factors, so in every degree the Cech object is canonically $\prod_\alpha F(X_\alpha)$. Every face and degeneracy map is the identity on these surviving factors, since all the diagonal fiber products of a clopen inclusion are that same open subscheme. Thus this is the constant cosimplicial object on that product. [F2, step 1.1, construct]

3.1 The totalization of a constant cosimplicial object with its identity structure maps is the object itself: the simplex indexing category has contractible nerve, with its terminal object $[0]$, so the homotopy limit of this constant diagram has the canonical equivalence to its value. Apply [F2] and step 2.1. The augmentation maps to the surviving factors are precisely restriction to $X_\alpha$, giving the displayed natural equivalence. [F1, F2, step 2.1] ∎


## Bottom supported Bloch groups on a codimension two curve

[Open item](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom) · level 8

### Statement
Assume AC. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. In the supported Bloch complexes, $z_C^j(U,n)=0$ for $j=0,1$ and every $n\geq0$. Moreover
$$H_0z_C^2(U,\bullet)=\mathbb Z[C],$$
with $[C]$ the positive generator represented by the integral reduced curve. Restriction to any open $V\subset U$ containing its generic point $\eta$ sends this generator to $[C\cap V]$ and is an isomorphism of these degree-zero groups. No smoothness or normality of $C$ is assumed.

### Facts & Assumptions

**Given:** AC, $U,C,k$, and $\eta$ as above. $\mathbb Z[C]$ is the free abelian group on the single cycle $[C]$, not its image in an ambient Chow group.

**Goal:** Compute the two lower supported complexes and the bottom weight-two supported group, with its sign.

[F1] Supported Bloch groups are free on admissible integral codimension-$j$ subschemes contained in $C\times\Delta^n$; boundaries are alternating face restrictions with quotient-length coefficients. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)

[F2] The finite-type dimension formula computes dimensions and codimensions on each smooth ambient component. Its use retains AC. [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

1.1 The ambient $U\times\Delta^n$ has pure dimension $3+n$ and $C\times\Delta^n$ has dimension $1+n$. Every integral closed subscheme contained in the latter therefore has codimension at least two in its ambient component. Thus none is a generator of $z_C^j(U,n)$ for $j=0,1$, proving the first assertion in every degree. [F1, F2, given]

1.2 In degree zero, an integral codimension-two subscheme contained in $C$ must have dimension one, hence equals $C$ with its reduced structure. Thus $z_C^2(U,0)=\mathbb Z[C]$. In degree one the generators have dimension two in $U\times\mathbb A^1$ and are contained in the integral two-dimensional scheme $C\times\mathbb A^1$. The only such integral closed subscheme is the whole product, which is admissible. At each endpoint its generic local quotient length is one, so its boundary is $[C]-[C]=0$, with either overall orientation. [F1, F2, given]

2.1 The complex is concentrated in nonnegative homological degrees, so its zeroth homology is its degree-zero group modulo the image of the degree-one boundary. Step 1.2 makes that image zero. On an open containing $\eta$ the same calculation applies to the integral curve $C\cap V$ and restriction takes $[C]$ to $[C\cap V]$ without changing its coefficient. Hence it is the asserted isomorphism. [F1, step 1.1, step 1.2] ∎


## Finite rank strata detect Elmanto-Morrow motivic cohomology

[Open item](item-lem-author-ab0a6fc202cb-motivic-rank-restriction) · level 9

### Statement
Assume AC and the article's field convention: $k$ is algebraically closed unless otherwise specified. Let $X$ be any qcqs $k$-scheme and $X=\coprod_{\alpha\in A}X_\alpha$ the finite common rank partition of finitely many finite locally free sheaves. For the actual Elmanto-Morrow motivic complex of every weight $j\geq0$, restriction gives
$$\mathbb Z(j)_{\mathrm{mot}}(X)\simeq\prod_\alpha\mathbb Z(j)_{\mathrm{mot}}(X_\alpha).$$
Thus for every $i\in\mathbb Z$ and $R=\mathbb Z$ or $\mathbb Z/n$ with $n>0$, the joint restriction map
$$H^{i,j}_{\mathrm{mot}}(X,R)\xrightarrow{\cong}\prod_\alpha H^{i,j}_{\mathrm{mot}}(X_\alpha,R)$$
is an isomorphism and in particular injective. No smoothness, finite-type, noetherian, dimension or regularity hypothesis is required. Weights $j<0$ are not defined here unless an additional zero-weight convention has explicitly been adopted.

### Facts & Assumptions

**Given:** AC, the field, scheme, family and integer/coefficient bounds above.

**Goal:** Prove the exact motivic detection property required by a varying-rank flag tower.

[F1] The common rank strata and their finite union are qcqs and clopen. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] The specified complex is the restriction from the prime field of a homotopy-coherent $D(\mathbb Z)$-valued Nisnevich sheaf on qcqs schemes. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[F3] Finite clopen descent for such a sheaf is the product equivalence, including its value zero on the empty scheme. [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)

[F4] Integral motivic groups are $H^i$ of the complex; finite coefficients apply derived tensor with $\mathbb Z/n$ first. These operations commute with the finite product. [def-motivic-cohomology](item-def-motivic-cohomology), [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)

### Proof

1.1 Every $k$-scheme under consideration is a scheme over the prime field $\mathbb F\subset k$ by composition of structure maps, and its underlying qcqs property is unchanged. The clopen inclusions and their fiber products in [F1] remain the same Nisnevich cover after forgetting to $\mathbb F$. Thus [F2] supplies descent for precisely this cover, not a different smooth or cycle-theoretic cohomology. [F1, F2, given]

2.1 Apply [F3] to the restricted weight-$j$ sheaf, with $j\geq0$. It gives the displayed equivalence of actual motivic complexes, whose components are the restriction maps. The empty-base case is included by its empty-cover clause. [F2, F3, step 1.1]

3.1 Applying the two operations in [F4] and their finite-product compatibility to step 2.1 gives the displayed group isomorphisms in every integer degree $i$. Hence the joint restriction is injective. Only the hypotheses of the existing qcqs motivic sheaf and the finite clopen partition have been used, proving all claims. [F4, step 2.1] ∎


## Detection on a simultaneous flag tower

[Open item](item-lem-flag-tower-cohomology-detection) · level 10

### Statement
Assume AC. Let $H^{*,*}$ be an additively oriented bigraded theory with the projective bundle contract on a scheme category $\mathcal C$. For a finite family of vector bundles $E_1,\ldots,E_m$ of constant ranks on an object $X$, the simultaneous flag tower $q:Y\to X$ induces injective pullback $q^*:H^{a,b}(X)\to H^{a,b}(Y)$ for every $(a,b)\in\mathbb Z^2$. Each $[q^*E_i]$ in the Grothendieck group of vector bundles is the sum of the classes of its global line-bundle filtration quotients, with the empty sum for rank zero.

More generally let $X$ be qcqs and the ranks merely locally constant. Suppose the finitely many common rank strata $X_\alpha$, their inclusions, the component flag towers $q_\alpha:Y_\alpha\to X_\alpha$, their finite disjoint union $Y$, its component inclusions, and $q:Y\to X$ all belong to $\mathcal C$. If the joint restriction $H^{a,b}(X)\to\prod_\alpha H^{a,b}(X_\alpha)$ is injective for every bidegree, then $q^*$ is injective in every bidegree. This additional joint-restriction hypothesis is explicit: it is not part of the abstract projective bundle contract.

For the actual Elmanto-Morrow motivic theory of the article, on qcqs schemes over its field $k$ (algebraically closed unless otherwise specified), joint restriction to these strata is an isomorphism. Hence the componentwise flag tower detects $H^{i,j}_{\mathrm{mot}}(-,R)$ for every $i\in\mathbb Z$, $j\geq0$, and $R=\mathbb Z$ or $\mathbb Z/n$, $n>0$. This uses the actual derived motivic complexes and requires no smoothness, noetherianity, finite-type or dimension assumption. If the source's explicit extension $\mathbb Z(j)_{\mathrm{mot}}=0$ for $j<0$ is adopted, the same statement holds for all integer weights, with zero groups in negative weights; the current nonnegative-weight definition alone makes no separate negative-weight assertion.

For varying ranks the line-quotient class equality holds separately on every $Y_\alpha$. Globally it holds after extending those quotient bundles by zero along the clopen inclusions; these extensions are vector bundles of rank one on that component and zero elsewhere, rather than global line bundles. A finite sum of global line-bundle classes is asserted only in the constant-rank situation. Here $K^0_{\mathrm{vb}}$ denotes the group on finite locally free sheaves modulo short-exact-sequence relations. None of these statements asserts injectivity of $q^*$ on that group.

Consequently any equality $u=v$ between classes of the same cohomological bidegree whose two sides pull back naturally can be checked on the appropriate detecting tower: $q^*u=q^*v$ implies $u=v$.

### Facts & Assumptions

**Given:** AC, the theory and category, and the bundles above; in the abstract varying-rank case also the explicit membership and joint-restriction assumptions. For the actual motivic application use the stated qcqs field, weight and coefficient hypotheses.

**Goal:** Preserve constant-rank detection, prove conditional abstract varying-rank detection, supply its actual motivic application, and state precisely the class equalities used.

[F1] The constant-rank simultaneous tower is a finite composite of positive-constant-rank projective bundles, with locally split line-quotient filtrations; it is qcqs over a qcqs base. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F2] In the abstract contract, pullback along such a finite composite is injective in every bidegree; pullbacks are contravariantly functorial group homomorphisms. [lem-projective-pullback-detection](item-lem-projective-pullback-detection), [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)

[F3] The common rank partition and componentwise tower are finite and qcqs, with identity constructions at rank zero. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)

[F4] The actual motivic complexes have finite-clopen product decomposition and hence joint cohomological restriction is an isomorphism, integrally and with finite coefficients, in their specified weights. [lem-author-ab0a6fc202cb-motivic-rank-restriction](item-lem-author-ab0a6fc202cb-motivic-rank-restriction), [def-motivic-cohomology](item-def-motivic-cohomology)

[F5] The exact actual motivic projective-bundle equivalence and its rank/weight/convention hypotheses are imported separately. [thm-author-ab0a6fc202cb-elmanto-morrow-projective-input](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input)

[F6] Finite products commute with cohomology and the finite-coefficient cone. [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)

[F7] Filtration relations give global line sums for constant ranks and componentwise line sums for varying ranks. Extension by zero along finite clopen inclusions gives the valid global vector-bundle class formula. [lem-author-ab0a6fc202cb-clopen-line-quotient-classes](item-lem-author-ab0a6fc202cb-clopen-line-quotient-classes)

[F8] AC is inherited through the flag construction and is retained throughout. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

1.1 In the constant-rank abstract case, apply [F1] to the finite bundle family and [F2] to every stage. Their finite composite is injective in every integer bidegree; if there are no stages the map is the identity and remains injective. [F1, F2, F8, given]

2.1 Apply [F7] to the global locally split filtrations from [F1]. Telescoping the short-exact-sequence relations gives $[q^*E_i]=\sum_s[L_{i,s}]$, with no summands for rank zero. This uses only those vector-bundle relations and asserts neither a globally split extension nor cohomological detection from a K-group equality. [F1, F7, step 1.1]

3.1 In the abstract varying-rank case, let $\iota_\alpha:X_\alpha\hookrightarrow X$ and $j_\alpha:Y_\alpha\hookrightarrow Y$ be the inclusions. The construction satisfies $qj_\alpha=\iota_\alpha q_\alpha$. All the bundles on $X_\alpha$ have constant ranks, so step 1.1 gives injectivity of each $q_\alpha^*$. [F3, given, step 1.1, step 2.1]

4.1 If $q^*x=0$, then functoriality gives $q_\alpha^*\iota_\alpha^*x=j_\alpha^*q^*x=0$. Step 3.1 yields $\iota_\alpha^*x=0$ for every $\alpha$. The stated joint-restriction hypothesis then implies $x=0$. This proves conditional varying-rank detection without adding an unproved axiom to the abstract contract. [F2, given, step 3.1]

5.1 For the actual motivic theory, take one positive-constant-rank quotient-projective stage $\pi:\mathbb P(G)\to S$ of a component tower. The source in [F5] uses line subbundles. Dualizing a locally split invertible quotient of the finite locally free $G$ gives a line subbundle of $G^\vee$, and dualizing again recovers the quotient. Hence the represented projective bundles are canonically identified over $S$, with the same projection and the source's dual tautological line equal to the quotient $\mathcal O(1)$. Apply [F5] to $G^\vee$, of the same positive constant rank. Its index-zero summand is $\mathbb Z(j)_{\mathrm{mot}}(S)$ and its map is precisely $\pi^*$. The inverse of the derived equivalence followed by projection onto that summand is a retraction. Thus $\pi^*$ is injective on every integral cohomology degree $i$, for $j\geq0$. [F1, F5, F6, construct, step 4.1]

6.1 Applying the finite-coefficient cone to that equivalence and using [F6] gives the same zero-summand retraction and injectivity for $R=\mathbb Z/n$. Compose these injections through every finite component tower; identity stages at rank zero preserve the conclusion. Joint restriction to the common rank strata is injective by [F4]. The functorial argument of step 4.1 therefore proves the asserted actual motivic injectivity for both coefficient choices. The optional negative-weight convention gives zero source and target groups and so extends it trivially when that convention is explicitly used. [F3, F4, F5, F6, step 4.1, step 5.1]

7.1 Finally [F7] gives all stated varying-rank class equalities, with supported extensions in the global formula, and explains why they cannot in general be called sums of global line-bundle classes. If $q^*u=q^*v$ in any of the detecting cases, functorial additive pullback gives $q^*(u-v)=0$, and the relevant injection from step 1.1, step 4.1 or step 6.1 implies $u-v=0$. Naturality identifies pulled-back expressions with those formed from the pulled-back bundles, which proves the final identity-detection assertion and completes the proof. [F2, F7, step 1.1, step 4.1, step 6.1] ∎



## Perfect residue classes at smooth closed points

[Open item](item-lem-koszul-point-support-class) · level 10

### Statement
Assume the Axiom of Choice. Let $X$ be a finite-type scheme over a perfect field $k$, and let $x$ be a closed point at which $X$ is smooth over $k$. Write $i:\operatorname{Spec}\kappa(x)\to X$ for the closed immersion of the point. There is a smooth affine open neighbourhood $V$ of $x$ on which the ideal of $x$ is generated by a regular sequence whose images in $\mathcal O_{X,x}$ form a regular system of parameters. Its Koszul complex is a finite free resolution of $i_*\kappa(x)|_V$. Thus $i$ is a regular immersion, and the residue sheaf $i_*\kappa(x)$, placed in degree zero, is perfect on $X$ and supported on $\{x\}$.

Consequently it has a distinguished class $[i_*\kappa(x)]$ in $K_{0,\{x\}}(X)$, whose image in $K_0(X)$ is its ordinary perfect-complex class. This class is independent of the choice of neighbourhood and parameters. No claim that it generates the supported group is made here; that identification requires a separate purity or dévissage result.

A perfect field is a field whose algebraic extensions are separable. A regular local ring is a noetherian local ring whose dimension equals the dimension of its maximal ideal modulo its square over its residue field. A regular system of parameters is a minimal generating sequence of that maximal ideal of length equal to the dimension. A sequence is regular if each element is a non-zero-divisor modulo its predecessors and the final quotient is nonzero. A regular immersion is a closed immersion whose ideal is locally generated by a regular sequence. The Koszul complex on a sequence $f_1,\ldots,f_d$ has terms $\bigwedge^j A^d$ and differential given by contraction with $(f_1,\ldots,f_d)$; for the empty sequence it is $A$ in degree zero. The residue sheaf $i_*\kappa(x)$ has stalk $\kappa(x)$ at $x$ and zero stalks elsewhere.

### Facts & Assumptions

**Given:** AC, a finite-type $k$-scheme $X$ over a perfect field, and a smooth closed point $x$.

**Goal:** Construct the local Koszul resolution, prove global perfectness and support, and identify the resulting supported class.

[F1] A smooth finite-type scheme over a perfect field has regular local rings under AC. A finite-type algebra over a field is noetherian, being a quotient of a finite-variable polynomial algebra. ([math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field), [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct))

[F2] Under AC, in a regular local ring every regular system of parameters is a regular sequence, and its Koszul complex is a finite free resolution of the residue field. ([math:thm-regular-local-rings-are-domains-and-cohen-macaulay](https://alphabetamath.cc/item/thm-regular-local-rings-are-domains-and-cohen-macaulay), [math:lem-regular-local-residue-field-koszul-resolution](https://alphabetamath.cc/item/lem-regular-local-residue-field-koszul-resolution), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice))

[F3] Perfectness is the local condition of being represented by a bounded complex of finite locally free modules. The supported perfect category consists of perfect objects whose cohomology stalks vanish outside the specified subset. ([def-scheme-perfect-complexes](item-def-scheme-perfect-complexes))

[F4] For qcqs schemes the supported K-spectrum is the nonconnective K-theory of the supported perfect category, and its inclusion induces the support-to-global map. For an idempotent-complete stable category, the degree-zero comparison sends each object to its K-theory class and is natural for exact functors. ([def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input))

### Proof

1.1 By smoothness at $x$, choose a smooth affine neighbourhood $U=\operatorname{Spec}A$ of $x$; it is of finite type over $k$. The point corresponds to a maximal ideal $\mathfrak m$ because it is closed. By [F1], $A$ is noetherian and $R=A_{\mathfrak m}=\mathcal O_{X,x}$ is regular local. Choose a regular system of parameters $t_1,\ldots,t_d$ of $R$. Since $\mathfrak mR$ is generated by images of elements of $\mathfrak m$ and denominators outside $\mathfrak m$ are units, after multiplying each $t_i$ by a unit we may represent it by an element $f_i\in\mathfrak m$; the resulting tuple remains a regular system of parameters. When $d=0$ take the empty tuple. [given, F1, choose]

2.1 The ideal $\mathfrak m$ is finitely generated, and its quotient by $(f_1,\ldots,f_d)$ localizes to zero at $\mathfrak m$. Thus some $h_0\notin\mathfrak m$ kills that quotient: choose an annihilating denominator for each of its finitely many generators and multiply them. For each $j$, let $M_j=A/(f_1,\ldots,f_{j-1})$. The kernel of multiplication by $f_j$ on $M_j$ is a finite $A$-module because $A$ is noetherian. Its localization at $\mathfrak m$ is zero by [F2] and exactness of localization, so some $h_j\notin\mathfrak m$ kills it. Set $h=h_0h_1\cdots h_d$ and $V=D(h)$. On $V$ the $f_i$ generate $\mathfrak mA_h$ and each multiplication by $f_j$ on $A_h/(f_1,\ldots,f_{j-1})$ is injective. The final quotient is $A_h/\mathfrak mA_h\cong A/\mathfrak m\ne0$. Hence the sequence is regular on $A_h$, including the empty-sequence case. [F2, step 1.1, construct, algebra]

3.1 The closed point $x$ in $V$ is cut out by $\mathfrak mA_h=(f_1,\ldots,f_d)$. Applying the Koszul resolution statement in [F2] locally at $x$ and using the same noetherian denominator argument, or equivalently applying its regular-sequence resolution assertion to the sequence on $A_h$, gives a finite free resolution of $A_h/\mathfrak mA_h$. Its associated complex of finite free sheaves resolves $i_*\kappa(x)|_V$. Since the ideal is generated by a regular sequence on a neighbourhood of the only point of the closed subscheme, $i$ is a regular immersion. [F2, step 2.1]

4.1 The stalks of $i_*\kappa(x)$ vanish away from $x$: because $\{x\}$ is closed, each other point has a neighbourhood disjoint from it. On $V$ step 3.1 gives a bounded finite free resolution; on $X\setminus\{x\}$ the sheaf is zero, represented by the zero complex. These opens cover $X$, so [F3] makes $i_*\kappa(x)$ perfect with support contained in $\{x\}$. Its nonzero stalk at $x$ shows that its support is exactly $\{x\}$. This argument does not extend a locally free resolution by zero: the globally defined object is the residue sheaf itself. [F3, step 3.1, given]

5.1 A finite-type scheme over a field is qcqs, so [F4] applies. The object of step 4.1 gives its object class in $K_{0,\{x\}}(X)$; naturality for the exact inclusion sends it to the class of the same object in $K_0(X)$. Every choice of parameters and neighbourhood in steps 1.1 through 3.1 resolves the same globally defined sheaf, so the supported object and its class are independent of those choices. AC is used through the stated suppliers. [F4, step 4.1, F2] ∎

## Inherited bounded t structure on supported perfect complexes

[Open item](item-lem-author-7ef3227685d9-supported-k0-heart) · level 10


### Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied enhanced constructions. For regular Noetherian finite-dimensional $U$ and any closed subscheme $i:T\hookrightarrow U$, put $\mathcal C_T=\mathrm{Perf}_{|T|}(U)$ in the supplied enhancement and let $\mathcal A_T$ be coherent $\mathcal O_U$-modules with support contained in the underlying closed set $|T|$. Ambient cohomological truncations restrict to a bounded t-structure on $\mathcal C_T$, with heart $\mathcal A_T$ embedded as sheaves in degree zero. In particular $\mathcal A_T$ is abelian, and its short exact sequences give actual cofiber sequences in $\mathcal C_T$.

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the enhanced regular-perfect and derived-category premises in [F1] and the specified perfect/nonconnective interfaces in [F2]. They are retained when those constructions are used in steps 1.1–3.1; the finite cohomology and stalk-support calculations introduce no additional choice.

**Given:** The Axiom of Choice and $U,T,i,\mathcal C_T,\mathcal A_T$ as stated, with the fixed suitable universes.

**Goal:** Work directly with the supported perfect category and its cohomology, without an enhancement comparison to complexes in a coherent abelian category.

[F1] [thm-author-7ef3227685d9-supported-k0-regular-cohomology-input](item-thm-author-7ef3227685d9-supported-k0-regular-cohomology-input) supplies local regular perfection, bounded coherent cohomology and the actual ambient derived t-structure.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) gives the support criterion and full stable idempotent-complete subcategory; [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) gives its essential smallness and the chosen K functor.

### Proof
1.1 Kernels and cokernels of maps of coherent sheaves are coherent by [F1]. Their stalks outside $|T|$ are zero if the original sheaves have zero stalks there. The same holds for images and extensions by exactness of stalks. Hence $\mathcal A_T$ is an abelian full subcategory, closed under the indicated exact operations. Every sheaf of this category placed in degree zero has bounded coherent cohomology, so is perfect by regularity in [F1] and belongs to $\mathcal C_T$ by [F2]. [A1, F1, F2]

2.1 For $E\in\mathcal C_T$, bounded coherent cohomology follows from [F1]. Each ambient truncation retains only a subset of those cohomology sheaves; it therefore remains bounded coherent, perfect by [F1], and supported on $|T|$. Thus the ambient t-structure restricts: its orthogonality and truncation sequences restrict to this full subcategory. It is bounded because each $E$ has finitely many nonzero cohomology sheaves. Its heart consists exactly of the objects $M[0]$ with $M\in\mathcal A_T$. [A1, F1, F2, step 1.1]

3.1 For a short exact sequence in $\mathcal A_T$, the mapping cone of $M'[0]\to M[0]$ is quasi-isomorphic to $M''[0]$ by its cohomology sequence. Mapping cones give actual cofibers in the supplied enhancement, so the sequence is a cofiber sequence there. No global locally free presentation was used. [A1, F1, F2, step 1.1, step 2.1] ∎


## Additivity of the supported coherent Euler class

[Open item](item-lem-author-7ef3227685d9-supported-k0-euler) · level 11


### Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied supported perfect category. Let $U,T,\mathcal C_T,\mathcal A_T$ be as in the preceding construction. The formula
$$\chi_T(E)=\sum_{n\in\mathbb Z}(-1)^n[H^n(E)]$$
defines a homomorphism from the triangle Grothendieck group of $h\mathcal C_T$ to $G_0(\mathcal A_T)$. The sum is finite. It sends a sheaf in degree zero to its sheaf class, and is compatible with forgetting support into the corresponding unsuppported groups on $U$.

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the supported-heart construction in [F1] when using its actual bounded t-structure in steps 1.1–2.1. The finite alternating-sum argument requires no additional choice.

**Given:** The Axiom of Choice, the fixed suitable universes, and the supported perfect category with its bounded t-structure and coherent supported heart.

**Goal:** Verify the Euler assignment on every relation, not merely on terms of a locally free resolution.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart) supplies finite coherent supported cohomology and the usual long exact cohomology sequence of a triangle.

[F2] [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies the triangle group with the cofiber presentation. The abelian Grothendieck group is defined by short exact relations.

### Proof
1.1 Cohomology is invariant under equivalence, and boundedness in [F1] makes the displayed assignment a finite sum on every object. For a triangle $E\to F\to G\to E[1]$, the long exact sequence of cohomology is finite after deleting zero terms and consists of objects in $\mathcal A_T$. In any finite exact sequence of an abelian category, breaking at images gives short exact sequences; summing their Grothendieck relations makes its alternating sum zero, since each image occurs twice with opposite signs. Applying this to the cohomology sequence gives $\chi_T(F)=\chi_T(E)+\chi_T(G)$. [A1, F1, F2]

2.1 The assignment therefore descends to the triangle group. For $M[0]$ it is $[M]$, because the only nonzero cohomology is $H^0=M$. Forgetting support changes neither the underlying sheaves nor their cohomology; it sends each short exact relation to the same relation. Thus the Euler homomorphisms commute with forgetting support. [A1, F1, F2, step 1.1] ∎


## Support fibers with explicit cohomological indexing

[Open item](item-def-supported-complex-indexing) · level 12

### Definition
Let $X$ be a scheme, $T\subseteq X$ a closed subset, and $U=X\setminus T$ its open complement. Fix an integer $j$ and a restriction map $f:C_j(X)\to C_j(U)$ of cochain complexes of abelian groups. A cochain complex $A$ consists of abelian groups $A^n$ and homomorphisms $d_A:A^n\to A^{n+1}$ with $d_A^2=0$; its cohomology is $H^n(A)=\ker(d_A:A^n\to A^{n+1})/\operatorname{im}(d_A:A^{n-1}\to A^n)$. A restriction map here means a cochain map: $d f=f d$.

Define the **support complex** $C_{j,T}(X)$ to be the homotopy fiber of $f$. Explicitly, for $A=C_j(X)$ and $B=C_j(U)$, one model has
$$C_{j,T}(X)^n=A^n\oplus B^{n-1},\qquad d(a,b)=(d_Aa,\,f(a)-d_Bb).$$
The projection $(a,b)\mapsto a$ is the support-to-global map. Define the **supported cohomology group** by
$$H_T^{a,j}(X)=H^a(C_{j,T}(X)).$$
For complexes represented only in the derived category, use a cochain-map representative of the restriction morphism and take the resulting derived isomorphism class of this fiber. In particular, derived sections may provide the complexes and restriction map when the site, size and choice hypotheses in [def-derived-sections-on-sites](item-def-derived-sections-on-sites) and the required restriction data are supplied.

Write $HC_{j,T}(X)$ for the Eilenberg–Mac Lane spectral realization specified in [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index), and write $[2j]$ for suspension of a spectrum by $2j$. For every integer $i$ the indexing conventions are
$$\pi_i HC_{j,T}(X)\cong H_T^{-i,j}(X),\qquad \pi_i\bigl(HC_{j,T}(X)[2j]\bigr)\cong H_T^{2j-i,j}(X).$$
The two spectra in these formulas are distinguished: the second is shifted and the first is not. This auxiliary convention does not identify either spectrum with the article's support object without a separately specified comparison. The article's printed Definition 2.7 formula is retained separately in its article item.

### Justification
The displayed differential squares to zero because $d_A^2=d_B^2=0$ and $f d_A=d_B f$; the projection to $A$ commutes with differentials. This complex is the mapping cone of $f$ shifted by $-1$, with the displayed sign convention, and hence models the homotopy fiber. A commutative square of cochain maps induces a map of these models. If both vertical maps in such a square are quasi-isomorphisms, the induced map on fibers is a quasi-isomorphism: the short exact sequence of complexes $0\to B[-1]\to C_{j,T}(X)\to A\to0$ gives a natural long exact cohomology sequence, and the five-lemma applied to its corresponding segments gives the assertion. Thus the construction depends only on the restriction morphism in the derived category up to isomorphism, and cohomology and the support-to-global map are well-defined there. The derived-sections application uses exactly the site, size and choice assumptions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites).

Finally, [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) applies to the unbounded cochain complex $C_{j,T}(X)$ and gives both displayed natural group isomorphisms. It uses spectral suspension for the second formula; no comparison with the article's separately named object follows from indexing alone.

## Euler class of a regular bundle functional

[Open item](item-lem-regular-zero-koszul-euler-class) · level 12

### Statement
Assume the Axiom of Choice and the suitable universes used in the supplied K-theory construction. Let $X$ be a quasi-compact, quasi-separated scheme, $E$ a finite locally free $\mathcal O_X$-module of constant rank $r\geq 0$, and $s:E\to\mathcal O_X$ a functional. Let $I=\operatorname{im}(s)$ and let $Z=Z(s)$ be the closed subscheme defined by $I$. Suppose that at every point $x\in Z$, the values of $s$ on a local basis of $E_x$ form a regular sequence in $\mathcal O_{X,x}$ of length $r$: successively, each value is a non-zero-divisor modulo its predecessors and the final quotient is nonzero. For $r=0$ the sequence is empty and $Z=X$.

The Koszul complex $K(s)$ has $\Lambda^iE$ in cohomological degree $-i$, with differential given by contraction with $s$. It is a perfect complex supported on the underlying closed set of $Z$, and its augmentation is a quasi-isomorphism $K(s)\to\mathcal O_Z$. Define the supported Euler class $e_Z(s)\in K_{0,Z}(X)$ to be the K-zero class of this complex. Under the map induced by the inclusion of supported perfect complexes into all perfect complexes, it maps to

$$\lambda_{-1}(E)=\sum_{i=0}^r(-1)^i[\Lambda^iE]\in K_0(X).$$

For a section $t:\mathcal O_X\to E$, the corresponding functional is $t^\vee:E^\vee\to\mathcal O_X$; under the same regularity hypothesis for its coordinates, the formula uses $E^\vee$ in place of $E$.

### Statement references

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

### Facts & Assumptions
**Given:** $X$, $E$, $s$ and the regularity hypothesis in the statement, together with choice and the stated universes.

**Goal:** Construct the supported class, prove the resolution and calculate its image in $K_0(X)$, including the section convention.

[F1] Exterior powers of a finite locally free rank-$r$ module are finite locally free, vanish above degree $r$, and have the usual increasing-wedge bases locally. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F2] For a finite sequence in a commutative ring, the Koszul differential is the alternating deletion formula. If the sequence is regular, its Koszul complex on the ring is a finite free resolution of the quotient by the sequence. [math:def-koszul-complex-of-a-sequence-with-coefficients](https://alphabetamath.cc/item/def-koszul-complex-of-a-sequence-with-coefficients) [math:cor-koszul-complex-resolves-a-regular-quotient](https://alphabetamath.cc/item/cor-koszul-complex-resolves-a-regular-quotient)

[F3] A bounded complex of finite locally free sheaves is perfect. A perfect complex is supported on a closed set precisely when its restriction to the complement is acyclic; the supported perfect objects form a stable idempotent-complete category. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[F4] For qcqs $X$, the supplied K-theory assigns spectra to the perfect and supported perfect categories and a map to the ambient spectrum induced by inclusion. For an essentially small idempotent-complete stable category, its degree-zero group is naturally the group on object classes with the cofiber relations. Bundle classes agree with the object classes of the corresponding degree-zero complexes. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) [def-vector-bundle-classes](item-def-vector-bundle-classes)

### Proof
**Proof technique:** Construct the Koszul differential locally, check exactness on stalks, and use the finite filtration by cohomological degree.

1.1 For local sections $v_1,\ldots,v_i$ of $E$, define contraction by $d(v_1\wedge\cdots\wedge v_i)=\sum_{j=1}^i(-1)^{j-1}s(v_j)v_1\wedge\cdots\widehat{v_j}\cdots\wedge v_i$. This formula is alternating and compatible with restriction, so it defines a global map $\Lambda^iE\to\Lambda^{i-1}E$. In a local basis it is the differential in [F2]; hence $d^2=0$ locally and therefore globally. The quotient map $\mathcal O_X\to\mathcal O_X/I=\mathcal O_Z$ is an augmentation because its composite with $d:E\to\mathcal O_X$ is zero. [F1, F2, construct]

2.1 At $x\in Z$, choose a basis of the free stalk $E_x$. The stalk of the complex is the Koszul complex of the corresponding values of $s$; the regularity hypothesis and [F2] give homology only in degree zero, where it is $\mathcal O_{X,x}/I_x$. At $x\notin Z$, some value of $s_x$ is a unit. If $v\in E_x$ satisfies $s_x(v)=1$, exterior multiplication by $v$ is a contracting homotopy: the contraction formula gives $d(v\wedge w)+v\wedge d(w)=w$. The quotient stalk is also zero there. Thus the augmentation induces an isomorphism on every cohomology stalk and is a quasi-isomorphism. For $r=0$ this says $\mathcal O_X\to\mathcal O_X$ is an isomorphism. [F2, step 1.1, assume-hyp, construct]

3.1 By [F1], $K(s)$ is bounded with finite locally free terms, so it is perfect. Step 2.1 shows it is acyclic away from $Z$; by [F3] it is an object of $\operatorname{Perf}_Z(X)$. Its object class in the degree-zero K-group is therefore well-defined, and this is the stated $e_Z(s)$. The construction uses the underlying closed set for support; it does not identify supported K-theory with coherent-sheaf G-theory. [F1, F3, F4, step 2.1]

4.1 In the ambient perfect category, filter $K(s)$ by its subcomplexes consisting of the terms in degrees at least a fixed integer. Each successive quotient is a single term $\Lambda^iE$ placed in degree $-i$, and the short exact sequence of complexes is degreewise split. Its associated cofiber sequence gives the corresponding additive relation in [F4]. A shift changes the sign of an object class: the cofiber sequence $A\to0\to A[1]$ gives $[A[1]]=-[A]$. Iterating the finite filtration yields $[K(s)]=\sum_{i=0}^r(-1)^i[\Lambda^iE]$. Naturality of the object-class map sends $e_Z(s)$ to $[K(s)]$ under inclusion, proving the displayed formula. [F4, step 3.1, algebra]

5.1 A section $t$ gives the dual map $t^\vee:E^\vee\to\mathcal O_X$ by evaluation, and its values in a dual basis are the coordinates of $t$ in the original basis. The dual of a finite locally free module is finite locally free of the same rank. Applying steps 1.1 through 4.1 to $t^\vee$ under the stated regularity hypothesis gives the section formula with $E^\vee$. [F1, step 4.1, assume-hyp] ∎

## Postnikov inverse and the specified nonconnective degree-zero group

[Open item](item-lem-author-7ef3227685d9-supported-k0-postnikov) · level 12


### Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied supported perfect and nonconnective constructions. For regular Noetherian finite-dimensional $U$ and closed $T$, the coherent Euler map induces a canonical isomorphism
$$\pi_0K_{|T|}(U)\xrightarrow{\sim}G_0(\mathcal A_T).$$
Its inverse takes $[M]$ to the class of the actual perfect object $M[0]$. The same construction for $T=U$ gives $G_0(U)\simeq\pi_0K(U)$, with $G_0(U)$ the coherent-sheaf Grothendieck group. These comparisons commute with inclusion of supported categories.

### Facts & Assumptions
[A1] The already assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the supported-heart and Euler constructions [F1] in steps 1.1–2.1 and the selected essentially small nonconnective model [F2] in step 3.1. The finite truncation calculation introduces no additional choice.

**Given:** The current nonconnective $K$ and supported perfect categories; AC and fixed universes.

**Goal:** Establish the inverse by actual finite truncation triangles, and use a genuine general $\pi_0$ comparison.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart) supplies the bounded t-structure and actual cofiber sequences for heart short exact sequences; [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler) supplies the Euler homomorphism.

[F2] [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies the object/cofiber Grothendieck group of every small idempotent-complete stable category with $\pi_0$ of the same BGT nonconnective functor, naturally in exact functors. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies this with the triangle group. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) gives essentially small idempotent-complete models for $\mathcal C_T$.

### Proof
1.1 The assignment $[M]\mapsto[M[0]]$ defines a map from $G_0(\mathcal A_T)$ to the triangle group by the short-exact/cofiber assertion in [F1]. The Euler composite is the identity on each generator $[M]$ by [F1]. [A1, F1, construct]

2.1 For $E\in\mathcal C_T$, choose $a\leq b$ outside which its cohomology vanishes. Its actual truncation triangles $\tau_{\leq n-1}E\to\tau_{\leq n}E\to H^n(E)[-n]$ all lie in $\mathcal C_T$ by [F1]. Starting with $\tau_{\leq a-1}E=0$ and ending with $\tau_{\leq b}E\simeq E$, their relations give $[E]=\sum_n(-1)^n[H^n(E)[0]]$; the sign follows from the triangle $A\to0\to A[1]$. Hence the reverse composite is also the identity. [A1, F1, step 1.1]

3.1 Apply [F2] to a small equivalent presentation of the idempotent-complete $\mathcal C_T$ and compose its inverse with the triangle Euler isomorphism just proved. This gives exactly the displayed $\pi_0$ isomorphism and object-class inverse for the current nonconnective functor. Take $T=U$ for the global comparison. Inclusion of the supported category is an actual exact functor preserving the same cohomology; naturality in [F2] and the Euler compatibility in [F1] give the asserted commutative support/global square. Positive-degree comparison alone is not used. [A1, F1, F2, step 1.1, step 2.1] ∎


## External EM low-weight maps with fixed positive normalization

[Open item](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) · level 12


### Statement
For the filtration and $K$-space assertions in the selected local realization, assume the Axiom of Choice and its fixed compatible site and universe bounds.

For the actual EM filtration on qcqs prime-field schemes, use $q_j:\mathrm{Fil}^{j}K\to\mathrm{gr}^{j}K=\mathbb Z(j)_{\mathrm{mot}}[2j]$. The canonical weight-zero comparison, induced by the unital filtered map of Construction4.36, is gr⁰K≃RΓ_cdh(Z). On a smooth finite-type scheme over a field its H⁰ is the locally constant integer functions, compatibly with evaluation at field points; this is also the weight-zero case of Theorem3.5(8). There is a natural pointed map a:Pic→Ω∞Fil¹K lifting L↦1−[L]. Under the canonical comparison c₁:RΓ_Nis($G_m$)[−1]→Z(1)_mot, q₁(a(O(−1))) is +c₁(O(1)) on P¹, not its negative. The comparison c₁ is an equivalence through cohomological degree three; hence Ω∞gr¹K is the line-bundle stack $BG_m$, with π₀=Pic and π₁=units. The weight-one P¹-bundle formula uses +c₁(O(1)), so that this class generates Pic(P¹_k)=Z for a field k. On smooth prime-field schemes the proof of EM Lemma5.10 explicitly identifies q₀ with rank.

### Source contract
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed bounds discharge [def-motivic-filtration](item-def-motivic-filtration) when applying [F1] to the selected local perfect-$K$ tower and its maps. The underlying motivic-complex comparison and its source hypotheses are unchanged; this records the local realization contract rather than a new geometric hypothesis of the published result.

**Given:** Qcqs schemes over a prime field, the Axiom of Choice and fixed compatible bounds for the selected local filtration realization, the actual EM filtered spectrum and the cited canonical comparisons. Restricting these maps to Sm_k is allowed for any extension field k.

**Goal:** Import maps and their sign, not merely graded-group identifications.

[F1] EM Examples4.11/4.26, Construction5.5, Lemmas5.10/5.12, Lemma5.1/Definition5.2, Theorem5.3 and Corollary7.11 give these assertions with the source's distinctions between [L] in K-theory and motivic c₁(L).

### External input
Import [F1]. Define κ=−a, so κ(L) lifts [L]−1. Then q₁κ(O(−1))=−c₁(O(1))=c₁(O(−1)). This equation fixes the ensuing positive determinant normalization. The equivalence Ω∞gr¹K≃$BG_m$ comes from the ACTUAL c₁ comparison; it is not an independently chosen equivalence of Picard groups.


## External actual augmented EM and smooth slice tower comparison

[Open item](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) · level 12


### Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds for the selected perfect K-theory and motivic-filtration realizations. Let F be a prime field. Construction4.34 gives an actual natural morphism of augmented filtered spectra Fil_cla K(X)→Fil_mot K(X) on Sm_F, equal to identity K(X) on stage zero; Corollary6.4 makes it a filtered equivalence. Its graded comparison maps are exactly (4.9), so they commute with the stage-to-layer maps.

For X smooth of finite type over an arbitrary extension field k/F, use the ACTUAL map Fil_mot K(X)→Fil_cdh KH(X) of Construction4.36. X is regular Noetherian, so Theorem6.1(2)/Remark6.3 makes it an augmented filtered equivalence, over K(X)→KH(X). Remark3.6 explicitly states that Fil_cdh KH is the slice filtration of KGL. Thus the comparison is between the tower augmentations and their induced cofibers, not only cohomology groups. The canonical graded maps and EM c₁ normalization must be retained. On any supported pair, applying homotopy fibers to such a natural comparison gives the corresponding supported tower comparison with these same signs.

### Source contract
**Given:** Choice, the stated compatible site and universe bounds, and the exact maps and field hypotheses just stated; K is the perfect-complex nonconnective invariant used by EM (explicitly precomposed with Perf in Construction5.5), as in the completed run supplier.

**Goal:** Specify the map-level tower bridge needed when the classical slice calculation is used in the final combined lemma.

[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and size bounds discharge the local realization premises of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) and [def-motivic-filtration](item-def-motivic-filtration) whenever the imported maps in [F1] are interpreted as maps of these specified local K-theory and filtration models. These are inherited construction premises, not additional geometric hypotheses attributed to Elmanto–Morrow.

[F1] The exact EM comparison passages listed in the frontmatter give the morphisms of augmented filtered spectra and their equivalence hypotheses.

### External input
Import [F1], including the exact status/reading limit: the arbitrary-field cdh-KH/slice identification in Remark3.6 is stated there and attributed to the then-in-preparation joint work [7]; its proof was not read and is not reconstructed. Corollary6.4 by itself is NOT asserted for arbitrary k. Low-weight lemmas below use the direct EM normalized maps of the preceding import; they do not pretend to supply a new proof of this foundational tower bridge. The final supported author must preserve this explicit external-input provenance if using the arbitrary-field bridge.


## Open excision for a descent theory

[Open item](item-lem-open-excision-for-support-fibers) · level 13

### Statement
Let $X$ be a scheme, $T\subseteq X$ a closed subset, $W\subseteq X$ an open subset containing $T$, $U=X\setminus T$, and $V=W\cap U=W\setminus T$. Suppose a contravariant spectrum-valued theory $E$ is defined on these four opens, with coherent restriction maps, and that its restriction square
$$\begin{matrix} E(X)&\longrightarrow&E(W)\\ \downarrow&&\downarrow\\ E(U)&\longrightarrow&E(V) \end{matrix}$$
is homotopy cartesian: the induced map $E(X)\to E(W)\times_{E(V)}E(U)$ is an equivalence, where the product is a homotopy pullback. Define $E_T(X)=\operatorname{fib}(E(X)\to E(U))$ and $E_T(W)=\operatorname{fib}(E(W)\to E(V))$. Restriction induces an equivalence $E_T(X)\simeq E_T(W)$. It is natural for compatible maps of such coherent squares, and the square formed by the support-to-global maps and restriction to $W$ commutes coherently.

The same conclusion holds for cochain complexes of abelian groups, with equivalence replaced by quasi-isomorphism, under the following explicit form of two-open descent. Write $A=C(X)$, $B=C(W)$, $C=C(U)$, and $D=C(V)$, and suppose the restriction square is strictly commutative. If $u:B\to D$ and $v:C\to D$ are its lower restriction maps, require the canonical map
$$A\longrightarrow P:=\operatorname{fib}\bigl(B\oplus C\xrightarrow{u-v}D\bigr),\qquad a\longmapsto (a|_W,a|_U,0),$$
to be a quasi-isomorphism, using the explicit fiber complex of [def-supported-complex-indexing](item-def-supported-complex-indexing). Then restriction induces a quasi-isomorphism $C_T(X)\to C_T(W)$, compatible with the support-to-global maps and natural for maps of such squares. In particular it induces isomorphisms on supported cohomology in every degree. A quasi-isomorphism is a cochain map inducing isomorphisms on all cohomology groups.

These are conditional excision statements: a particular theory must supply the indicated restriction data and descent hypothesis, as well as any quasi-compactness, size, or other conditions required for that hypothesis. No descent property is asserted merely from the existence of a support fiber.

### Facts & Assumptions

**Given:** The opens and either a coherent spectrum square or a strictly commutative cochain-complex square as in the statement, satisfying the corresponding displayed descent hypothesis.

**Goal:** Prove the restriction equivalence or quasi-isomorphism of support fibers and its stated compatibility and naturality.

[F1] In the stable spectra interface, fibers and products over a common object are coherent homotopy pullbacks, characterized by their universal properties. [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F2] For a cochain map $f:M\to N$, the support-fiber model has degree-$n$ group $M^n\oplus N^{n-1}$ and differential $(m,n)\mapsto(d_Mm,f(m)-d_Nn)$. A commutative square of cochain maps induces a map of these fibers, and if its two vertical maps are quasi-isomorphisms then so is the induced map on fibers. The support-to-global map is projection to the first factor. [def-supported-complex-indexing](item-def-supported-complex-indexing)

### Proof

**Proof technique:** Paste homotopy pullbacks for spectra; for complexes, compare the explicit descent model with the fiber over the target complex.

1.1 In the spectrum case, the descent hypothesis identifies $E(X)$ with $E(W)\times_{E(V)}E(U)$, compatibly with its two projections. Taking the homotopy pullback of the projection to $E(U)$ along $0\to E(U)$ gives $E_T(X)\simeq (E(W)\times_{E(V)}E(U))\times_{E(U)}0 \simeq E(W)\times_{E(V)}0=E_T(W).$ The middle equivalence follows by the universal property of the homotopy pullback: a map into either side is a map into $E(W)$ together with a coherent nullhomotopy of its composite to $E(V)$. The displayed equivalence is the one induced by restriction. [F1, given]

2.1 The same universal property makes this construction natural for compatible maps of the coherent squares. Its projection to $E(W)$ is the composite of the projection $E_T(X)\to E(X)$ with restriction $E(X)\to E(W)$, with the coherence inherited from the pullback diagram. This proves the support-to-global compatibility. [F1, step 1.1]

3.1 In the complex case, let $q:A\to P$ be the descent quasi-isomorphism and let $p:P\to C$ be projection. The equality $pq=A\to C$ gives a commutative square with vertical maps $q$ and $\operatorname{id}_C$. By [F2], it induces a quasi-isomorphism $\operatorname{fib}(A\to C)\to\operatorname{fib}(P\to C)$. [F2, given, step 2.1]

4.1 Write an element of $\operatorname{fib}(P\to C)^n$ as $(b,c,d,t)$, with $b\in B^n$, $c\in C^n$, $d\in D^{n-1}$ and $t\in C^{n-1}$. Its differential is $(db,dc,ub-vc-dd,c-dt),$ where each $d$ on the right denotes the differential of the appropriate complex. The map $(b,c,d,t)\longmapsto(b,d+vt)$ to $\operatorname{fib}(B\to D)$ is a cochain map: the second component of the differential becomes $ub-d_D(d+vt)$. It is split surjective as a cochain map, with section $(b,z)\mapsto(b,0,z,0)$. [F2, given, construct, step 3.1]

5.1 Its kernel consists of $(0,c,-vt,t)$ and is isomorphic to $\operatorname{fib}(\operatorname{id}_C)$, with differential $(c,t)\mapsto(dc,c-dt)$. This kernel is contractible: the degree-minus-one map $(c,t)\mapsto(t,0)$ satisfies $dh+hd=\operatorname{id}$. Hence the split surjective map in step 4.1 is a quasi-isomorphism. [step 4.1, construct]

6.1 The composite of the maps in steps 3.1 and 4.1 sends $(a,t)$ to $(a|_W,t|_V)$, exactly the restriction map between the two support-fiber models. It is therefore a quasi-isomorphism. The formula also shows that it commutes strictly with projection to $A$ and $B$ and is natural for maps of the given commutative squares. Taking cohomology gives the stated supported-cohomology isomorphisms. [F2, step 3.1, step 5.1]

7.1 Steps 1.1–2.1 and 3.1–6.1 establish both forms of open excision under their respective descent hypotheses. [step 2.1, step 6.1] ∎



## Motivic and filtered K theory with support

[Open item](item-def-cohomology-with-support) · level 13


### Definition
Fix a field $k$ and the category $\mathrm{Sch}_k$ of quasi-compact quasi-separated $k$-schemes from [def-article-conventions](item-def-article-conventions), together with the Axiom of Choice and the size conventions of the cited interfaces. Let $X$ be an object of this category, let $Y$ be a closed subset of $X$ equipped with its reduced induced closed-subscheme structure, and put $U=X\setminus Y$. The reduced structure has the same underlying closed subset and has no nonzero nilpotent local sections.

For the quotient notation, let $h_X(T)=\operatorname{Hom}_k(T,X)$ and let $h_U(T)$ be the subset of maps whose image lies in $U$, for $T\in\mathrm{Sch}_k$. On a size-bounded big Nisnevich site with these objects, let $\mathbb Z[h_X]$ and $\mathbb Z[h_U]$ denote the sheafifications of the presheaves of free abelian groups on these sets. Define the **quotient sheaf** $\mathbb Z[X/U]$ as the cokernel of $\mathbb Z[h_U]\to\mathbb Z[h_X]$, regarded when needed as a complex concentrated in degree zero. Here a cokernel is the quotient of the target sheaf by the image sheaf. This notation records the pair $(X,U)$; the support objects below are defined directly as fibers.

The supplied functors are defined on qcqs schemes. To cover an arbitrary open $U$, use the following explicit extension convention. For any such open $W\subseteq X$, let $\mathcal Q(W)$ be the poset of quasi-compact open subsets of $W$. For $j\geq0$, put
$$F^jK(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}F^j_{\mathrm{mot}}K(V),\qquad K(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}K(V),$$
and, writing $C_j(V)=\mathbb Z(j)_{\mathrm{mot}}(V)$ and $HC_j(V)$ for its Eilenberg–Mac Lane spectrum,
$$M_j(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}HC_j(V).$$
The arrows in each inverse diagram are restrictions. Homotopy limits are limits in the stable category of spectra. When $W$ is qcqs, its identity open is terminal in $\mathcal Q(W)$, and these expressions recover the supplied values. For arbitrary $W$, these formulas specify an extension; they do not assert its comparison with any independently constructed theory on non-qcqs schemes.

Define the **filtered support spectrum**, the **K-theory support fiber**, and the **motivic support spectrum** by
$$F^j_{\mathrm{mot}}K(X/U):=\operatorname{fib}(F^jK(X)\to F^jK(U)),\quad K(X/U):=\operatorname{fib}(K(X)\to K(U)),$$
$$M_j(X/U):=\operatorname{fib}(M_j(X)\to M_j(U)).$$
A fiber is the homotopy pullback of the displayed map along the map from the zero spectrum. The compatible stage-to-zero maps give a map $F^j_{\mathrm{mot}}K(X/U)\to K(X/U)$. For every integer $i$ define
$$F^j_{\mathrm{mot}}K_{i,Y}(X):=\operatorname{im}\bigl(\pi_iF^j_{\mathrm{mot}}K(X/U)\to\pi_iK(X/U)\bigr).$$
The image is the subgroup consisting of values of this homomorphism. Define supported motivic cohomology for every integer $a$ by
$$H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z):=\pi_{-a}M_j(X/U).$$
Equivalently, define the shifted support spectrum $\mathbb Z(j)^{\mathrm{shift}}_{\mathrm{mot}}(X/U):=M_j(X/U)[2j]$. With this explicitly shifted meaning,
$$H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z)=\pi_i\bigl(\mathbb Z(j)^{\mathrm{shift}}_{\mathrm{mot}}(X/U)\bigr).$$
The support-to-global maps are the first arrows of the defining fiber sequences. The image groups obtained after applying those maps are separate from the supported groups defined here.

### Facts & Assumptions
**Given:** $k$, $X$, $Y$, $U$, $j\geq0$, and integers $i,a$ as above, with the stated choice and size conventions.

**Goal:** Justify the quotient notation, the support fibers and their maps, the image group, and the displayed indexing without assuming injectivity or a comparison with an independently constructed quotient evaluation.

[F1] [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) supplies the site and sheafification conventions; [def-article-conventions](item-def-article-conventions) specifies qcqs schemes and their category.

[F2] The already assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the explicit Choice hypothesis when invoking the perfect-complex $K$-theory and filtration interface in [def-motivic-filtration](item-def-motivic-filtration). That interface supplies the coherent restriction maps and stage-to-$K$ maps on qcqs schemes. [def-motivic-cohomology](item-def-motivic-cohomology) supplies the complex-valued restriction functor and identifies global $H^{a,j}$ with $H^a(C_j)$.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies homotopy limits, fibers, suspension and the abelian groups $\pi_i$. [lem-filtered-support-exactness](item-lem-filtered-support-exactness) gives the stagewise support construction for a coherent filtered restriction diagram.

[F4] [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) gives $\pi_iHC\cong H^{-i}(C)$ and $\pi_i(E[2j])\cong\pi_{i-2j}E$ in the stated convention. [def-supported-complex-indexing](item-def-supported-complex-indexing) distinguishes unshifted support from its $2j$-shift.

### Justification
1.1 The subfunctor $h_U\subseteq h_X$ is stable under precomposition, so the induced map of free abelian presheaves and its sheafification are defined; the cokernel defines the stated quotient sheaf. Every open subset of a scheme is the union of its affine open subsets, and each affine open is quasi-compact. Since $X$ is quasi-separated, a quasi-compact open $V\subseteq X$ is quasi-separated as well; hence each $V\in\mathcal Q(W)$ belongs to $\mathrm{Sch}_k$. The restriction maps in [F2] therefore form the indicated coherent inverse diagrams, whose homotopy limits exist by [F3]. If $W$ itself is quasi-compact, its membership in $\mathcal Q(W)$ makes it initial in the opposite indexing category, so the limit is its supplied value. [F1, F2, F3, given]

2.1 Inclusions of open subsets induce restriction maps between these limits, and the coherent maps from filtration stages to $K$ induce a map of the two restriction arrows. Taking fibers produces the displayed support spectra and the map between them; the two sequences are fiber sequences by definition. The induced homomorphism on $\pi_i$ has a well-defined image subgroup. This is the stagewise construction of [F3], applied to the restriction diagram with the stated extension convention. [F2, F3, step 1.1]

3.1 By [F4], the shifted support spectrum has $\pi_i(M_j(X/U)[2j])\cong\pi_{i-2j}M_j(X/U)$, which is the definition of $H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z)$. For a qcqs global scheme, the same indexing lemma identifies $\pi_{-a}M_j(X)$ with $H^a(C_j(X))$; hence the first fiber arrow induces the degree-preserving support-to-global map. The construction does not require that the supported image map be injective. This justifies the definitions and their stated maps. [F2, F3, F4, step 2.1] ∎

### Source notation and scope
The article prints $H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z):=\pi_i(\mathbb Z(j)_{\mathrm{mot}}(X/U))$ at Definition 2.7. The formula above specifies a $2j$-shift on the spectrum occurring on the right so that it is compatible with the cohomological convention of [def-motivic-cohomology](item-def-motivic-cohomology). The unshifted realization instead has $\pi_i=H^{-i}$; the printed notation alone does not specify the comparison between these two conventions. The quotient sheaf and fiber definitions retain the article's pair and fiber sequences, but no identification of the displayed fibers with an independently defined evaluation on that sheaf is asserted here. In particular, $K(X/U)$ is not identified here with the K-theory of the category of perfect complexes supported on $Y$; such an identification needs a localization input with its own hypotheses.


## Compatible comparisons transport relative objects and support fibers

[Open item](item-lem-author-9415fc97ee80-compatible-relative-transport) · level 13


### Statement
In a triangulated category, consider two specified distinguished triangles $A\to B\to Q\to A[1]$ and $A'\to B'\to Q'\to A'[1]$. If isomorphisms $u:A\to A'$ and $v:B\to B'$ commute with the first arrows, there exists an isomorphism $w:Q\to Q'$ completing a morphism of triangles; uniqueness of $w$ is not asserted. In particular any two choices of a cone for the same first arrow are isomorphic compatibly with the first two objects, without making cones a functor on an arbitrary triangulated category.

For a commuting square of cochain maps $C(X)\to C(U)$ and $D(X)\to D(U)$ with vertical quasi-isomorphisms, the induced map on the explicit support fibers is a quasi-isomorphism and respects their maps to the global complexes. Consequently compatible derived comparisons on the ambient scheme and its open complement suffice to transport a purity calculation by this construction. A separately supplied direct compatible comparison of support objects may also suffice; no universal necessity of ambient and open comparisons is asserted. Unrelated isomorphisms of individual cohomology groups do not by themselves supply the commuting derived comparison used here.

### Facts & Assumptions

**Given:** The triangles and commuting first-arrow square; separately the strict commuting square of cochain maps for the explicit-fiber assertion.

**Goal:** Establish cone transport with its nonuniqueness and compatible support transport.

[F1] TR3 supplies some third map completing a morphism of distinguished triangles. [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[F2] Representable Hom gives long exact sequences on such triangles. [math:thm-long-exact-hom-sequences-of-a-distinguished-triangle](https://alphabetamath.cc/item/thm-long-exact-hom-sequences-of-a-distinguished-triangle)

[F3] The support fiber of $f:A\to B$ has degree $n$ term $A^n\oplus B^{n-1}$ and differential $(a,b)\mapsto(d_Aa,f(a)-d_Bb)$, with projection to $A$. [def-supported-complex-indexing](item-def-supported-complex-indexing)

### Proof

1.1 Apply [F1] to obtain $w$ and a morphism of triangles. For any object $T$, apply covariant $\operatorname{Hom}(T,-)$ and [F2]. In the five-term segment surrounding $\operatorname{Hom}(T,Q)$, all vertical maps except possibly the middle one are isomorphisms because they are induced by $u,v$ or their shifts. Exactness implies the middle map is bijective: surjectivity follows by lifting a target element's image in the next term and correcting the difference by the preceding term; injectivity follows by the same correction for an element with zero image. Thus $\operatorname{Hom}(T,w)$ is bijective for every $T$. [F1, F2, given]

2.1 Take $T=Q'$ to lift $\operatorname{id}_{Q'}$ to $h:Q'\to Q$ with $wh=\operatorname{id}_{Q'}$. Then $w(hw-\operatorname{id}_Q)=0$; injectivity for $T=Q$ gives $hw=\operatorname{id}_Q$. Hence $w$ is an isomorphism. TR3 only gave existence and does not select it uniquely, so no functorial cone assertion follows. [step 1.1, algebra]

3.1 In the cochain-map case, the two vertical maps act coordinatewise on the models in [F3]; the commuting square makes this a cochain map and its projections commute with the ambient vertical map. The short exact sequences $0\to C(U)[-1]\to\operatorname{fib}(C(X)\to C(U))\to C(X)\to0$ and its $D$ counterpart give long exact cohomology sequences. The same five-term argument as in step 1.1, now using the two vertical quasi-isomorphisms and their shifts, proves that the fiber map induces an isomorphism in every degree. This proves support transport under the sufficient compatible-comparison hypotheses stated here. [F3, given, step 1.1, step 2.1] ∎


## Ideal-power dévissage and compatibility with coherent pushforward

[Open item](item-lem-author-7ef3227685d9-supported-k0-devissage-naturality) · level 13


### Statement
Assume AC and the fixed universe bounds. For $i:T\hookrightarrow U$ as above, closed direct image induces a canonical isomorphism
$$d:G_0(T)\xrightarrow{\sim}G_0(\mathcal A_T).$$
Its inverse sends $[M]$ to $\sum_{r=0}^{N-1}[\mathcal I^rM/\mathcal I^{r+1}M]$, with each quotient regarded as a coherent sheaf on $T$. This sum is independent of $N$ and of the permitted filtration. Under forgetting support $G_0(\mathcal A_T)\to G_0(U)$, the composite with $d$ is exactly coherent pushforward $i_*:G_0(T)\to G_0(U)$. The analogous square after the regular perfect comparisons into the specified spectral groups also commutes.

### Facts & Assumptions
**Given:** AC, the fixed universe bounds, and the coherent categories $\mathcal A_T$ and $\mathcal B_T\simeq\mathrm{Coh}(T)$ and the finite ideal-power filtrations.

**Goal:** Check the abelian dévissage theorem and identify the actual support-to-global map.

[F1] [lem-author-7ef3227685d9-supported-k0-ideal-filtration](item-lem-author-7ef3227685d9-supported-k0-ideal-filtration) supplies exactness, closure under subobjects/quotients and finite filtrations.

[F2] [thm-author-7ef3227685d9-supported-k0-abelian-devissage-input](item-thm-author-7ef3227685d9-supported-k0-abelian-devissage-input) gives the degree-zero isomorphism and inverse formula, including filtration independence.

[F3] [lem-author-7ef3227685d9-supported-k0-postnikov](item-lem-author-7ef3227685d9-supported-k0-postnikov) gives the natural supported/global comparisons with the specified nonconnective $\pi_0$ by object classes. Its construction uses the essentially small supported perfect category and its coherent heart. These same supplied models provide the essential-smallness premise used in step 1.1; that premise is not supplied by the ordinary ideal-filtration argument in [F1].

[A1] The already assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes are used in step 1.1 to select equivalent small presentations and discharge the essentially-small abelian dévissage input [F2]. They are also retained when invoking the selected perfect-category realization and nonconnective comparison [F3] in steps 1.1–2.1. Computing the finite quotient sums requires no further choice.

### Proof
1.1 Both categories are essentially small: in the supported perfect-category realization used by [F3], $\mathcal A_T$ is the heart of the essentially small perfect category, and $\mathrm{Coh}(T)$ is equivalent to its full subcategory $\mathcal B_T$ by [F1]. Choose equivalent small presentations under [A1]. The exactness, subobject/quotient closure and finite-filtration hypotheses of [F2] are supplied by [F1], and essential smallness was just checked. Thus exact inclusion $\mathcal B_T\hookrightarrow\mathcal A_T$ induces an isomorphism. Precompose with the exact equivalence $i_*$ of [F1]. This is precisely $d$, and its inverse is the displayed quotient sum by [F2]. The theorem’s independence statement also shows that any exponent which annihilates $M$ gives the same answer. [A1, F1, F2, F3, construct]

2.1 On a generator $[F]\in G_0(T)$, $d$ sends it to $[i_*F]$ in $G_0(\mathcal A_T)$. Forgetting support sends this to the same coherent sheaf class in $G_0(U)$, which is the definition of closed coherent pushforward. Since the groups are generated by these classes, this proves the first square. By [F3], their images in the supported and global spectral groups are exactly the object classes of $i_*F[0]$ and the actual inclusion sends one to the other. Thus the square after the regular perfect comparisons also commutes. [A1, F1, F3, step 1.1] ∎


## Weight zero is the locally constant rank function

[Open item](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank) · level 13


### Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $k$ be any field, and $X$ a smooth finite-type $k$-scheme. Under the canonical weight-zero comparison, the actual EM map $\pi_0q_0:K_0(X)\to H^0(X,\mathbb Z(0)_{\mathrm{mot}})$ is the locally constant rank function, component by component. Consequently $\pi_0\operatorname{Fil}^1K(X)=\ker(\operatorname{rank}:K_0(X)\to H^0(X,\mathbb Z))$, and $\pi_1\operatorname{Fil}^1K(X)\to K_1(X)$ is an isomorphism. These are statements about stage groups, not an assumed equality of a stage with its image.

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed bounds discharge the selected low-weight tower in [F1] and the affine perfect-$K$ comparison and filtration in [F2], used in steps 1.1–2.1. The pointwise unital rank test and the long exact sequence introduce no further choice.

**Given:** The Axiom of Choice, the fixed compatible bounds, smooth finite-type $X/k$, all fields in their prime-field category, and the actual unital multiplicative EM tower.

**Goal:** Normalize $q_0$ and identify its first-stage homotopy groups.

[F1] [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) supplies the canonical $\operatorname{gr}^0$ comparison and the unital $q_0$; its target on a smooth scheme is the ordinary locally constant integer sheaf in degree zero. Negative cohomology of this sheaf vanishes.

[F2] [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies degree-zero perfect K-theory with finite-projective classes on affines, so $K_0$ of a field is $\mathbb Z$ with generator its unit line. [def-motivic-filtration](item-def-motivic-filtration) supplies the actual exact fiber sequence $\operatorname{Fil}^1K\to K\to\operatorname{gr}^0K$.

### Proof
1.1 On a field extension $L$ of the prime field, $K_0(L)=\mathbb Z$ generated by $[L]$. The graded-zero comparison is unital, so the unital homomorphism $\pi_0q_0:\mathbb Z\to\mathbb Z$ is identity. For $x\in X$, naturality of $q_0$ along $\operatorname{Spec}\kappa(x)\to X$ therefore evaluates $q_0(\alpha)$ as the rank of $\alpha$ at $x$. On a smooth $X$, the weight-zero target is the locally constant integer function sheaf, so its sections are determined by these values at points. Thus $q_0$ equals the full rank function, including on disconnected $X$. [A1, F1, F2]

2.1 In the fiber sequence of [F2], $\pi_i\operatorname{gr}^0K=H^{-i}(X,\mathbb Z)=0$ for $i>0$ by [F1]. Its long exact sequence therefore identifies $\pi_1\operatorname{Fil}^1K$ with $K_1$, and identifies $\pi_0\operatorname{Fil}^1K$ injectively with the kernel of $\pi_0q_0$. Apply step 1.1 to obtain precisely the two asserted identifications. [A1, F1, F2, step 1.1] ∎


## Gysin purity for a smooth closed pair

[Open item](item-prop-smooth-pair-gysin-input) · level 14


### Statement
Let $k$ be a perfect field and let $X$ be in $\mathrm{Sm}/k$, meaning a smooth separated scheme of finite type over $k$. Let $i:Z\hookrightarrow X$ be a smooth closed subscheme of pure codimension $c\geq0$, and put $U=X\setminus Z$. In the classical category $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$ there is the distinguished Gysin triangle
$$M(U)\longrightarrow M(X)\xrightarrow{\gamma}M(Z)(c)[2c]\longrightarrow M(U)[1].$$
Here $M(W)$ is the source motive of $W$, represented by $\mathbb Z_{\mathrm{tr}}(W)$ and isomorphic in this category to $C_*\mathbb Z_{\mathrm{tr}}(W)$; $(c)$ is the Tate twist by tensoring with $\mathbb Z(c)$, and $[2c]$ is cohomological translation. The first arrow is induced by the open immersion, and $\gamma$ is the source's Gysin map.

Equivalently one may take the relative motive of the pair, a cofiber of $M(U)\to M(X)$, to be $M(Z)(c)[2c]$. Any separately chosen cone triangle for that first arrow admits a compatible isomorphism of its third object with this one; a unique or functorial choice of that cone is not asserted from triangulated axioms alone.

This is a classical smooth-pair input, not a purity statement for a singular curve. A separately supplied compatible comparison of theories on both $X$ and $U$ suffices, by the transport construction, to identify the article's support complex; a direct compatible comparison of support objects is another possible input. Computing its cohomological twist shift further requires the relevant coefficient representability and twist comparison in the weights used. Under precisely those premises the formal shift is $(a,j)\mapsto(a-2c,j-c)$, not $(a+2c,j-c)$. No negative-weight convention or comparison outside its given scope is silently introduced.

### Facts & Assumptions

**Given:** The perfect field, the two smooth schemes, closed immersion and pure codimension in the Statement; the ambient workflow permits AC. Additional application premises are as explicitly stated.

**Goal:** Record the exact imported triangle and give its rigorous formal interpretation without claiming a local proof of Gysin purity.

[F1] MVW Theorem 15.15 supplies the displayed triangle for precisely this smooth pair. The source's category and $M(W)\cong C_*\mathbb Z_{\mathrm{tr}}(W)$ notation are fixed in Definition 14.1 and Lemma 14.4. These are explicit external inputs in the source records.

[F2] A relative cone has the quotient model only when the chosen complex map is termwise monomorphic; it is a cofiber construction, without that extra condition in general. [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)

[F3] Contravariant Hom reverses this triangle to the cohomological restriction long exact sequence; an enhanced derived Hom identifies the relative object with the fiber of restriction only when that enhancement is supplied. [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)

[F4] A supplied twist comparison gives the cohomological shift $a-2c$ and weight $j-c$ with its exact weight bounds. [lem-author-9415fc97ee80-purity-shift-index](item-lem-author-9415fc97ee80-purity-shift-index)

[F5] Compatible isomorphisms on the two initial objects transport cone triangles, and compatible derived comparisons on $X,U$ transport the support fiber. [lem-author-9415fc97ee80-compatible-relative-transport](item-lem-author-9415fc97ee80-compatible-relative-transport), [def-supported-complex-indexing](item-def-supported-complex-indexing)

[F6] Identity, zero and split-pair maps have the formal relative/support special cases already computed, independently of Gysin purity. [lem-author-9415fc97ee80-relative-empty-split-cases](item-lem-author-9415fc97ee80-relative-empty-split-cases)

### External input
Import the whole smooth-pair Gysin theorem in [F1]. The five local prerequisites establish setup, covariance, indexing, transport and boundary cases. They do not reconstruct the normal-bundle proof, the affine-space Gysin normalization, or Exercise 15.14. The source's displayed proof invokes those established ingredients; this authoring assistance does not claim to have filled their foundational proofs.

### Justification of the formal reformulation

1.1 Apply the imported [F1] to the stated perfect-field smooth pair. Its third term, with its map from $M(X)$ and connecting map, is a specified cofiber in the triangulated sense. If another relative cone was chosen for the same first arrow, [F5] applied with identities on $M(U)$ and $M(X)$ gives a compatible isomorphism to this third term. This establishes the relative-motive reformulation without asserting uniqueness of that isomorphism. [F1, F5, given]

2.1 In a complex model, [F2] explains when the source's quotient notation for relative motives is valid. Apply [F3] to the distinguished triangle of step 1.1 to obtain its contravariant Hom long exact sequence. If the application additionally supplies the enhanced mapping-object premise, its support complex is the homotopy fiber of restriction. If a second theory has a compatible derived comparison on both $X$ and $U$, [F5] transports that fiber to the second theory's support fiber. These are applications of explicit premises, not automatic identifications with the article's motivic complex. [F2, F3, F5, step 1.1]

3.1 If coefficient representability and the twist identification of [F4] are also supplied, apply it with $A=M(Z)$. The relative Hom group in degree $a$ becomes the coefficient group on $Z$ in degree $a-2c$ and weight $j-c$. Only the supplied weight range is used. For empty or split support cases satisfying the independent functor premises of [F6], its direct calculations give the indicated formal boundary cases without invoking an extension of purity. [F4, F6, step 1.1, step 2.1] ∎

### Scope and application limit
Both smoothness hypotheses matter. In particular a possibly singular integral curve inside a smooth threefold is not covered by this input merely because its embedding has pure codimension. Nor does the source's Sm/k statement automatically extend to every qcqs scheme, a nonseparated smooth scheme, or an arbitrary smooth locus without checking the actual finite-type pair to which it is applied. The article's smooth motivic comparison and any twist/cancellation comparison retain their own authoring and scope obligations; this target supplies neither by renaming the classical cohomology theory.


## Images of support groups in global groups

[Open item](item-def-support-image-groups) · level 14


### Definition
Assume the Axiom of Choice and the size conventions of the support construction. Fix a field $k$, a quasi-compact quasi-separated $k$-scheme $X$, and a closed subset $Y\subseteq X$ with its reduced induced closed-subscheme structure. Put $U=X\setminus Y$. Let $j\geq0$ and $i\in\mathbb Z$.

Use the support spectra and their support-to-global maps from the preceding support definition. In particular, $F^j_{\mathrm{mot}}K_{i,Y}(X)$ is the image of $\pi_iF^j_{\mathrm{mot}}K(X/U)$ in $\pi_iK(X/U)$, and $F^j_{\mathrm{mot}}K_i(X)$ is the image of $\pi_iF^j_{\mathrm{mot}}K(X)$ in $K_i(X)=\pi_iK(X)$. An image is the subgroup consisting of the values of the indicated homomorphism. Define

$$F^j_{\mathrm{mot}}K_i(Y;X):=\operatorname{im}\bigl(F^j_{\mathrm{mot}}K_{i,Y}(X)\longrightarrow F^j_{\mathrm{mot}}K_i(X)\bigr),$$

where the arrow is induced by the support-to-global map on $K$-theory. For supported motivic cohomology $H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z)$ and global motivic cohomology $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)$, define

$$H^{a,j}_{\mathrm{mot}}(Y;X):=\operatorname{im}\bigl(H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z)\longrightarrow H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)\bigr)$$

for every integer $a$; in particular this includes the article's degree $a=2j-i$. The arrow is the support-to-global map. Finally, put

$$K_0(Y;X):=\operatorname{im}\bigl(\pi_0K(X/U)\longrightarrow K_0(X)\bigr).$$

These are image subgroups of the respective global groups; the supported groups are their domains before the final image is taken. No injectivity of a support-to-global map is part of the definition.

### Definition references
[def-cohomology-with-support](item-def-cohomology-with-support)

[def-motivic-filtration](item-def-motivic-filtration)

[def-motivic-cohomology](item-def-motivic-cohomology)

### Facts & Assumptions
**Given:** The field, scheme, closed subset, complement, choice and size conventions, and indices in the definition.

**Goal:** Show that each displayed map has the stated target and that each image is a well-defined subgroup.

[A1] The Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the inherited Choice hypotheses of the support and global filtration constructions invoked in [F1] and [F2]. The subgroup-image argument below requires no additional choice principle.

[F1] [def-cohomology-with-support](item-def-cohomology-with-support) supplies the filtered and unfiltered support spectra as fibers, their compatible maps to the corresponding global spectra, and the supported motivic cohomology groups and support-to-global homomorphisms. Its construction also specifies the extension used when $U$ is not quasi-compact.

[F2] [def-motivic-filtration](item-def-motivic-filtration) defines $K_i(X)=\pi_iK(X)$ and $F^j_{\mathrm{mot}}K_i(X)$ as the image of the global stage-to-$K$ homomorphism. The stage-to-$K$ maps are compatible with restriction.

[F3] [def-motivic-cohomology](item-def-motivic-cohomology) defines the global group $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)$. The support definition in [F1] identifies its support-to-global target with this group, using the stated cohomological indexing convention.

### Justification
1.1 The compatible support and global stage-to-$K$ maps form a commutative square after applying $\pi_i$. If an element of $F^j_{\mathrm{mot}}K_{i,Y}(X)$ is represented by an element of $\pi_iF^j_{\mathrm{mot}}K(X/U)$, its image in $K_i(X)$ is represented by the image of that element in $\pi_iF^j_{\mathrm{mot}}K(X)$. It therefore belongs to $F^j_{\mathrm{mot}}K_i(X)$. The map is the restriction of the homomorphism on unfiltered $K$-theory, so it is independent of the chosen representative. [A1, F1, F2, given]

2.1 The image of a group homomorphism is a subgroup: zero is the image of zero, and the difference of two image elements is the image of the difference of their preimages. Apply this to the homomorphism in step 1.1 and to the support-to-global homomorphisms for motivic cohomology and unfiltered $K$-theory. The resulting subgroups are exactly the three displayed definitions. The construction uses no injectivity; it justifies the definitions and their stated targets. [F1, F3, step 1.1] ∎

### Indexing and scope
The supported cohomology supplier uses an explicit $2j$ shift to reconcile the article's displayed $\pi_i$ notation with the global cohomological convention. The image in degree $2j-i$ is taken using that supplier's support-to-global map. The construction does not identify $K(X/U)$ with the $K$-theory of a category of supported perfect complexes.


## Dévissage of K zero with regular ambient support

[Open item](item-prop-supported-k-zero-devissage) · level 14


### Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $U$ be a regular Noetherian finite-dimensional scheme and $i:T\hookrightarrow U$ any closed subscheme with defining ideal $\mathcal I$. Let $K_0^{|T|}(U)=\pi_0K_{|T|}(U)$ for the specified nonconnective K-theory of the current supported perfect category. There is a canonical isomorphism
$$K_0^{|T|}(U)\xrightarrow{\sim}G_0(T),$$
where $G_0(T)$ is the Grothendieck group of coherent sheaves on $T$ with short exact relations. For a supported perfect object $E$ it is the coherent-cohomology Euler class followed by ideal-power dévissage, explicitly
$$[E]\longmapsto\sum_n(-1)^n\sum_{r\geq0}[\mathcal I^rH^n(E)/\mathcal I^{r+1}H^n(E)].$$
Each quotient is regarded as a coherent $\mathcal O_T$-module; both sums are finite after deleting zero terms, and the resulting class is independent of the chosen annihilating powers. The inverse sends $[F]$ to the class of the perfect $U$-object $i_*F[0]$.

Under this isomorphism the support-to-global map $K_0^{|T|}(U)\to K_0(U)$ is coherent pushforward $G_0(T)\xrightarrow{i_*}G_0(U)$ followed by the regular ambient perfect comparison $G_0(U)\xrightarrow{\sim}K_0(U)$, sending $[M]$ to $[M[0]]$. No regularity of $T$, global vector-bundle resolution or resolution-property assumption is imposed. No analogous identification for singular ambient $U$ is asserted.

### Statement references
[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-7ef3227685d9-supported-k0-postnikov](item-lem-author-7ef3227685d9-supported-k0-postnikov)

[lem-author-7ef3227685d9-supported-k0-devissage-naturality](item-lem-author-7ef3227685d9-supported-k0-devissage-naturality)

### Facts & Assumptions

[A1] The Choice assumption in Given and the stated universes are used through the essentially small perfect-category presentations and the specified nonconnective K-theory model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
**Given:** $U,T,i,\mathcal I$ as in the Statement, AC and fixed suitable universes. The supported category is the supplied full sheaf-derived $\mathrm{Perf}_{|T|}(U)$, not complexes internally constructed in a coherent abelian category.

**Goal:** Prove the stated comparison and support-to-global compatibility in the current nonconnective model.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart), [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler) and [lem-author-7ef3227685d9-supported-k0-postnikov](item-lem-author-7ef3227685d9-supported-k0-postnikov) give the actual bounded supported t-structure, additive coherent Euler map and Postnikov inverse, together with the general spectral $\pi_0$ premise [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input).

[F2] [lem-author-7ef3227685d9-supported-k0-ideal-filtration](item-lem-author-7ef3227685d9-supported-k0-ideal-filtration) and [lem-author-7ef3227685d9-supported-k0-devissage-naturality](item-lem-author-7ef3227685d9-supported-k0-devissage-naturality) give finite ideal-power dévissage, its inverse formula and coherent pushforward compatibility.

[F3] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supply the full stable idempotent-complete supported categories, their essentially small presentations and the actual support inclusion. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies object/cofiber and triangle presentations.

### Proof
1.1 By [F1], the degree-zero group of the current nonconnective functor identifies with $G_0(\mathcal A_T)$ by the coherent-cohomology Euler map. By [F2], closed coherent pushforward gives $G_0(T)\simeq G_0(\mathcal A_T)$. Compose the former map with the inverse of the latter. This is an isomorphism, and its displayed formula is exactly the Euler sum followed by the ideal-power quotient sum. Finiteness and independence follow from [F1]–[F2]. [F1, F2, F3, A1]

2.1 The two inverse constructions take $[F]$ first to $[i_*F]$ and then to the class of $i_*F[0]$ by [F1]–[F2]. This object is perfect by the imported local regular-perfect theorem applied to its coherent degree-zero cohomology. Thus the inverse has the asserted actual-object interpretation without any global locally free resolution. [F1, F2, F3, step 1.1]

3.1 The Euler/Postnikov comparisons commute with supported-to-global inclusion by [F1]. Under abelian dévissage the corresponding map is precisely coherent pushforward by [F2]. Their commutative squares compose to the stated support-to-global formula, using the same ambient comparison with $T=U$. This establishes the full proposition in the specified nonconnective model. [F1, F2, F3, step 1.1, step 2.1] ∎


## Augmented tower comparisons preserve supported graded projections

[Open item](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport) · level 14

### Statement
Let $F^\bullet E\to E$ and $G^\bullet E'\to E'$ be coherent augmented filtered presheaves of spectra, and let a specified natural comparison between them commute with transitions and augmentations. Suppose it is an equivalence on all stages and on the underlying spectra on a scheme $X$ and its open complement $V=X\setminus T$. Then it induces equivalences on supported stages, underlying support fibers and supported graded pieces, and the square of actual stage-to-graded projections commutes. In particular a supported normalization transported by this comparison is the normalization of the specified tower map, rather than one selected from equality of its target groups. If the stage-$q$ augmentation to the support fiber is an equivalence, the induced map obtained by its inverse and the graded projection is also preserved.

### Facts & Assumptions

**Given:** The two augmented diagrams, actual comparison and stated equivalences on $X,V$.

**Goal:** Preserve the exact supported projection and its inverse-augmentation version.

[F1] Supports are fibers of restriction, and in the stable category fibers are functorial finite limits. [def-cohomology-with-support](item-def-cohomology-with-support), [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F2] Taking these support fibers commutes with forming the graded cofiber of adjacent stages. [lem-filtered-support-exactness](item-lem-filtered-support-exactness)

### Proof

1.1 At each stage apply the fiber functor to the commuting restriction square. It takes a diagram of equivalences to an equivalence, by the universal property of the limit. This supplies the supported-stage equivalences, and applying the same argument to the underlying spectra gives the support-fiber equivalence. The augmentation square still commutes because it is the image of the given coherent augmentation square under the same functor. [F1, given]

2.1 Applying [F2] identifies the supported graded objects with the cofibers of the supported transition maps. The induced equivalences on their two initial terms give an equivalence on cofibers. The map from a stage to its cofiber is part of that cofiber diagram, so the comparison commutes with that actual projection. [F2, step 1.1]

3.1 If a stage augmentation is an equivalence, its homotopy inverse is an inverse in the homotopy category and is compatible with the transported augmentation square. Composing it with the commuting projections of step 2.1 gives the asserted preserved leading map. No independently chosen identification of homotopy groups has been used. [F1, step 1.1, step 2.1] ∎


## The actual graded determinant map on the current K-space

[Open item](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map) · level 14



### Statement
Assume AC and the fixed compatible universes. For every qcqs scheme $X$ there is a natural pointed map from its specified nonconnective K-space to the stack of graded lines, whose value on a perfect complex $E$ is its Knudsen–Mumford graded determinant and whose value on an object automorphism is its determinant automorphism. Restricting to the locally constant rank-zero fiber gives the actual map to $B\mathbb G_m$. On vector bundles it is the frame-torsor map induced by $\det:GL_n\to\mathbb G_m$; on locally bounded finite-projective representatives it is the alternating graded determinant. Its additivity uses enhanced cofiber sequences and their specified diagrams; the induced class in $\operatorname{Pic}(X)$ kills every cofiber relation. No equality of global vector-bundle and perfect K zero, or arbitrary ordinary triangle-diagram functoriality, is assumed.

### Facts & Assumptions
**Given:** The stated model hypotheses, AC and fixed universe bounds.

**Goal:** Supply the actual determinant map required by the consumers, with exactly the recorded coherence.

[F1] [thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type](item-thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type) supplies the exact determinant/one-type bridge.

[F2] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model), [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fix the actual affine model, object maps and natural connective comparison.

[F3] [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) supplies line-bundle/torsor descent. Graded-line groupoids form a Nisnevich stack: line bundles and their isomorphisms descend, with locally constant rank and the graded sign symmetry.

### Proof
1.1 On $\operatorname{Spec}A$ use $\mathcal W(A)=Ch^b(\operatorname{proj}A)$, with quasi-isomorphisms as weak equivalences and degreewise split monomorphisms as cofibrations. Mapping cylinders give factorization; quasi-isomorphisms between bounded projectives have contractible cones, so saturation holds. The completed enhancement comparison identifies its infinity-localization with the supplied $\operatorname{Perf}(A)$. It is idempotent complete. Hence [F1] and [F2] give the actual determinant map on the connective cover of the current K-spectrum and its space. [F1, F2]

2.1 For every ring map $A\to B$, termwise tensor takes finite projectives to finite projectives and preserves split cofibrations and contractible cones. It is therefore exact on these Waldhausen models, including preservation of weak equivalences. The KM pullback data and [F1] universal construction make the determinant maps natural, with the tensor-composition identifications, at the Picard-one-type level. These are actual maps and natural isomorphisms of the determinant data; a calculation of homotopy groups alone has not supplied them. [F1, F2, step 1.1]

3.1 Affine schemes cover the big scheme site by open immersions. By sheafification’s universal property and restriction to this covering basis, the actual affine map to the graded-line stack extends to a map from the sheafification of the K-space presheaf to that stack. Compose with the K-space sheafification unit to obtain the claimed map at every qcqs $X$. This construction does not require an equality of global bundle K zero and perfect K zero, or even an assertion that taking a first Postnikov section commutes with global sections. KM pullback composition and the affine exact-model naturality supply the descent morphisms. On a perfect object E its affine restrictions are sent to the alternating determinant with those same quasi-isomorphism transition maps; these glue to exactly KM’s global determinant line by its extended determinant/base-change construction. [F1, F2, F3, step 1.1, step 2.1]

4.1 The rank of the graded line is Euler rank. Its rank-zero substack is $B\mathbb G_m$ with its usual symmetry, giving the stated restricted map. An enhanced cofiber sequence is represented locally by a genuine cofibration sequence or a mapping-cylinder replacement of such a sequence; its determinant additivity is the one in [F1]. Taking line isomorphism classes yields $[\det Q]=[\det P]+[\det R]$ for every such cofiber relation, independently of a chosen ordinary triangle diagram. Degree-zero vector bundles and their matrix automorphisms give precisely exterior determinant and matrix determinant. For a global cofiber sequence, use its mapping-cone true triangle and the KM additivity isomorphism, with the quasi-isomorphism identifications of [F1]. These are the same pullback-compatible isomorphisms used by the affine determinant data in steps 1.1–3.1, so the global line relation retains its gluing maps. Mere equality of classes on affine opens is not used to infer equality in the global Picard group. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎


## Generic rank and point-supported classes on a curve

[Open item](item-lem-curve-generic-rank-localization) · level 15


### Statement
Assume the Axiom of Choice. Let $C$ be an integral Noetherian scheme of dimension one, with generic point $\eta$ and function field $k(\eta)=\mathcal O_{C,\eta}$. The generic-rank homomorphism
$$\operatorname{rk}_\eta:G_0(C)\longrightarrow K_0(k(\eta))\cong\mathbb Z$$
sends the class of a coherent sheaf $F$ to $\dim_{k(\eta)}F_\eta$. Its kernel is generated by classes of coherent sheaves supported at closed points. In fact it is generated by the residue-field sheaves $\kappa(x)$ at closed points $x$.

For every nonempty open subscheme $V\subseteq C$, restriction defines a directed system as opens shrink, and the natural homomorphism
$$\varinjlim_{\eta\in V\subseteq C}G_0(V)\longrightarrow K_0(k(\eta))\cong\mathbb Z$$
is an isomorphism. Thus the displayed kernel is the kernel of localization at the generic point, computed as this filtered limit.

For the following additional supported comparison, fix the compatible site and universe bounds of the supplied perfect-$K$-theory construction. If $i:C\hookrightarrow U$ is a closed immersion into a regular Noetherian finite-dimensional scheme, the supported comparison $K_0^{|C|}(U)\cong G_0(C)$ identifies generic rank with the alternating generic length of a supported perfect complex $E$:
$$[E]\longmapsto\sum_n(-1)^n\operatorname{length}_{\mathcal O_{U,\eta}}H^n(E)_\eta.$$
The sum and each length are finite. No regularity or smoothness of $C$ is assumed.

Here $G_0(X)$ is the abelian group generated by coherent $\mathcal O_X$-modules, with relation $[F]=[F']+[F'']$ for every short exact sequence $0\to F'\to F\to F''\to0$. An integral scheme is reduced and irreducible; its generic point has dense closure and its local ring there is a field. The dimension is the supremum of lengths of chains of strict specializations. The sheaf $\kappa(x)$ is the pushforward of the residue field along the closed immersion of the point. A sheaf is supported at $x$ if its stalks vanish away from $x$. Length is the number of simple factors in a finite composition series, independent of the series. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves, and support in $|C|$ means that its cohomology sheaves vanish away from $C$.

### Statement references
[math:lem-coherent-devissage-one-generic-generator](https://alphabetamath.cc/item/lem-coherent-devissage-one-generic-generator)

[prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the coherent dévissage and associated-sheaf premises in [F1]–[F2]. For step 5.1, the additional fixed site and universe bounds discharge the selected supported perfect-$K$ comparison in [F3]. No such supported-model premise is needed for the preceding coherent generic-rank and filtered-colimit assertions.

**Given:** The Axiom of Choice and $C,\eta$ as in the Statement. For the final supported assertion, also fix the stated closed immersion, a supported perfect complex $E$, and the compatible site and universe bounds of that comparison.

**Goal:** Compute generic localization and its filtered limit, and identify it under supported dévissage with alternating generic length.

[F1] The coherent one-generic-generator dévissage theorem says that on a Noetherian scheme a property of coherent sheaves holds for all coherent sheaves if it holds for zero, is two-out-of-three in coherent short exact sequences, and has a coherent witness of generic length one supported on each integral closed subscheme. It assumes AC. [math:lem-coherent-devissage-one-generic-generator](https://alphabetamath.cc/item/lem-coherent-devissage-one-generic-generator)

[F2] Coherent sheaves on a Noetherian scheme form an abelian category; kernels, cokernels and finite direct sums are coherent, and coherence is local. The residue-field supplier establishes coherence on a Noetherian affine neighbourhood of a closed point. Step 2.1 extends this to the global point sheaf by the local criterion. [math:thm-coherent-sheaves-abelian-noetherian-scheme](https://alphabetamath.cc/item/thm-coherent-sheaves-abelian-noetherian-scheme) [math:ex-skyscraper-coherent-closed-point](https://alphabetamath.cc/item/ex-skyscraper-coherent-closed-point)

[F3] For a regular Noetherian finite-dimensional ambient scheme and any closed subscheme, supported perfect-complex $K_0$ is identified with the coherent $G_0$ of the closed subscheme by the coherent-cohomology Euler class followed by the finite filtration by powers of the defining ideal. [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)

### Proof
**Proof technique:** Apply coherent dévissage using only points distinct from the generic point, then localize on shrinking opens and compute supported ideal-filtration lengths.

1.1 Every nonempty open $V\subseteq C$ is integral and Noetherian, has dimension at most one, and contains $\eta$. Every point $x\neq\eta$ of $V$ is closed in $V$: a further proper specialization would give a chain of length at least two starting at $\eta$. Hence every proper nonempty integral closed subscheme of $V$ is the reduced point at such an $x$. The whole integral closed subscheme is $V$ itself. The possibility that $V=\{\eta\}$ is open is allowed; then $V=\operatorname{Spec}k(\eta)$ and there are no points $x\neq\eta$ in $V$. [given]

2.1 Let $H_V\subseteq G_0(V)$ be generated by $[\mathcal O_V]$ and $[\kappa(x)]$ for $x\in V\setminus\{\eta\}$. These point sheaves are coherent: on an affine neighbourhood $W=\operatorname{Spec}A$ of $x$, the global closed-point direct image restricts to $\widetilde{A/\mathfrak m_x}$, which is coherent by [F2]; on $V\setminus\{x\}$ it is zero. These two opens cover $V$, so locality of coherence gives the global assertion. Apply [F1] under [A1] to the property $P(F):[F]\in H_V$. It holds for zero and is two-out-of-three by the exact relations in $G_0(V)$. For the integral closed subscheme $V$, the witness is $\mathcal O_V$, with generic stalk $k(\eta)$ annihilated by the zero maximal ideal of $\mathcal O_{V,\eta}$. For each proper integral closed subscheme from step 1.1, use $\kappa(x)$; its stalk at $x$ is one-dimensional over the residue field and annihilated by the maximal ideal. All witness hypotheses hold, so $H_V=G_0(V)$, including when $V=\{\eta\}$. [A1, F1, F2, step 1.1, construct]

3.1 Taking stalks at $\eta$ is exact and gives finite-dimensional $k(\eta)$-vector spaces. Dimension therefore defines the generic-rank homomorphism. It sends $[\mathcal O_V]$ to $1$ and each $[\kappa(x)]$ with $x\neq\eta$ to zero. By step 2.1, an element of its kernel is an integral linear combination of precisely these point classes. Conversely all such point classes have generic rank zero. For $V=C$, the generic point is not closed because $\dim C=1$, so these are exactly the closed-point classes in the Statement. Coherent sheaves supported at closed points have generic rank zero, and each residue sheaf is such a sheaf. Finally dimension identifies the Grothendieck group of finite-dimensional vector spaces with $\mathbb Z$, giving the stated $K_0(k(\eta))$ normalization. [A1, F2, step 2.1, algebra]

4.1 The nonempty opens are filtered under reverse inclusion, since every finite intersection contains $\eta$. Restriction is exact and preserves the generic stalk and structure-sheaf class. For $x\in V\setminus\{\eta\}$, the open $V\setminus\{x\}$ still contains $\eta$ and kills the residue-sheaf class. Each element in step 2.1 involves only finitely many such points, so one nonempty open removes them all. Thus every colimit element is an integer multiple of the compatible structure-sheaf class, and generic rank sends that class to $1$. This proves the colimit isomorphism. If $V=\{\eta\}$, its only generator in this argument is $[\mathcal O_V]$; the generic point is never treated as a removable point class. For $V=C$, step 3.1 identifies the kernel of localization with the stated point-supported subgroup. [step 2.1, step 3.1, algebra]

5.1 Under the additional bounds in [A1], apply [F3] and let $\mathcal I$ define $C$ in $U$. The image of $[E]$ in $G_0(C)$ is the finite sum of the classes of $\mathcal I^rH^n(E)/\mathcal I^{r+1}H^n(E)$ with signs $(-1)^n$. At $\eta$ each quotient is a finite-dimensional vector space over $\mathcal O_{U,\eta}/\mathcal I_\eta=k(\eta)$, so its dimension is its length as an $\mathcal O_{U,\eta}$-module. The finite exhaustive filtration and additivity of length identify the sum of these dimensions, for each $n$, with the length of $H^n(E)_\eta$. Only finitely many $n$ contribute. Applying generic rank gives exactly the alternating generic-length formula, without requiring regularity or smoothness of $C$. [A1, F3, step 3.1, algebra] ∎


## The supported second stage has the actual augmentation inverse

[Open item](item-lem-author-16f30f6b95cb-supported-second-stage-inverse) · level 15


### Statement
Assume the Axiom of Choice. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. Let $F^\bullet K$ be the specified motivic filtration. Assume its actual smooth comparison supplies natural graded identifications with Bloch cycle spectra on both $U$ and $U\setminus C$, compatible with restriction. Then the supported graded spectra in weights zero and one are zero, and the augmentations
$$F^2_CK(U)\longrightarrow F^1_CK(U)\longrightarrow F^0_CK(U)=K_C(U)$$
are equivalences. Thus its supported leading weight-two homomorphism is unambiguously
$$\pi_0K_C(U)\xrightarrow{(\pi_0\epsilon_2)^{-1}}\pi_0F^2_CK(U)\longrightarrow\pi_0\operatorname{gr}^2_CK(U),$$
where $\epsilon_2$ is the actual stage-to-zero augmentation. Under the same comparison the target is $H_0z_C^2(U,\bullet)=\mathbb Z[C]$. For any specified natural augmented tower comparison, the leading maps commute with the induced maps on support fibers and supported graded spectra provided the target supported stage-two augmentation is also an equivalence. In particular, this condition holds for comparisons which are equivalences on all stages and on the underlying spectra on both $U$ and $U\setminus C$. Its generator value remains a separate normalization input; it is not implied by the equivalence alone.

### Facts & Assumptions
**Given:** AC, $U,C,k$ as stated, the specified filtration and the explicit natural smooth/Bloch graded comparison, including the supported Bloch fiber comparison. For inverse-augmentation transport the target supported stage-two augmentation is also an equivalence; equivalences on all stages and underlying spectra on both schemes are a sufficient condition.

**Goal:** Justify the domain, target and exact meaning of the leading supported map before its generator is computed.

[F1] Under AC and the stated smooth finite-type pure-three-dimensional and integral codimension-two curve hypotheses, the two lower supported cycle complexes vanish and the bottom weight-two group is $\mathbb Z[C]$. [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)

[F2] The support construction preserves the graded cofiber sequences. [lem-filtered-support-exactness](item-lem-filtered-support-exactness)

[F3] The stage-zero filtration is naturally $K$, and the supported spectra are formed by taking fibers of its restriction maps. The assumed AC discharges the Choice hypotheses of these K-theory/filtration interfaces and of the supported Bloch supplier in [F1]. [def-motivic-filtration](item-def-motivic-filtration), [def-cohomology-with-support](item-def-cohomology-with-support), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] A specified natural augmented filtered comparison which is an equivalence on all stages and underlying spectra on a scheme and its open complement induces supported stage, underlying and graded equivalences, preserving augmentations and graded projections. [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport)

### Proof
1.1 By the assumed compatible graded comparison, forming its support fiber identifies each supported layer with the supported cycle spectrum in that weight. By [F1] the layers at weights zero and one are zero. In the stable category a map with zero cofiber is an equivalence; applying this to the two supported transition maps furnished by [F2] gives both displayed equivalences. Their composite is the specified augmentation because the original tower is augmented coherently. [F1, F2, F3, given]

2.1 Inverting that equivalence on $\pi_0$ and then taking the weight-two graded projection gives the displayed homomorphism. Its target, under the same comparison, is the zeroth homology of the weight-two supported cycle complex and equals $\mathbb Z[C]$ by [F1]. The cohomological convention is $\pi_0\operatorname{gr}^2_C=H^{4,2}_C$, since the actual motivic layer has its $[4]$ shift. [F1, F3, step 1.1]

3.1 Let a specified natural augmented comparison have target supported stage-two augmentation $\epsilon'_2$ which is an equivalence. Write $\phi_K$, $\phi_2$ and $\phi_{\mathrm{gr}^2}$ for its maps on underlying support fibers, supported second stages and supported second layers, and write $q_2,q'_2$ for the stage-to-layer projections. Functoriality of support fibers and graded cofibers gives $\epsilon'_2\phi_2=\phi_K\epsilon_2$ and $q'_2\phi_2=\phi_{\mathrm{gr}^2}q_2$ in the homotopy category. Since both augmentations are invertible, these identities imply $q'_2(\epsilon'_2)^{-1}\phi_K=\phi_{\mathrm{gr}^2}q_2\epsilon_2^{-1}$. Taking $\pi_0$ proves commutation of the leading homomorphisms, without requiring the comparison maps themselves to be equivalences. [F2, F3, step 1.1, step 2.1, given, algebra]

4.1 Under the stronger equivalence hypotheses of [F4] on $U$ and $U\setminus C$, the induced maps $\phi_K$ and $\phi_2$ are equivalences. Their commuting augmentation square and step 1.1 imply that $\epsilon'_2$ is an equivalence. Step 3.1 therefore applies, in particular to any specified classical slice/coniveau comparison satisfying those hypotheses. This preserves the actual leading map; its generator value still requires the separate normalization input. [F4, step 1.1, step 3.1] ∎



## External determinant and pointed one-type inputs

[Open item](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) · level 15


### Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

The extended determinant functor on perfect complexes is canonically compatible with exact triangles and derived pullback; on bounded locally free representatives its graded line is the alternating tensor product of determinant lines, with alternating rank. It gives the usual natural determinant/Picard operation on rank-zero K-theory. This operation retains line-bundle descent morphisms; it is not obtained by comparing only affine Picard GROUPS. On affine K-spaces its actual determinant map has π₁ the ordinary matrix determinant, and on vector-bundle classes its π₀ map is the determinant line. In particular on Nisnevich local rings, $\pi_0K=\mathbb Z$ by rank and π₁K=$G_m$ by determinant. The completed affine K₀/K₁ suppliers specify the same maps in the run's enhanced nonconnective model.

Pointed connected 1-types in an infinity-topos are classified fully faithfully by their sheaves of fundamental groups. Thus for the Nisnevich sheaf S of rank-zero K-spaces, τ≤1S≃$BG_m$ is the determinant/Pic map: its π₁ identification is determinant, and its π₀ of global sections is the usual first Chern class c₁=class of the determinant line, including perfect-complex classes. Maps S→$BG_m$ are determined by this 1-type. On a vector bundle the actual map is the frame-torsor pushforward $GL_r$→$G_m$ by matrix determinant; on a perfect complex it is the extended determinant functor with its triangle/pullback coherence.

### Source contract

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. These hypotheses are used through the actual determinant map in [F2], including its enhanced perfect-category small presentations, and through the unit-section and torsor suppliers. Stack maps use a compatible universe-bounded big Nisnevich site; line-frame identification and derived sections use the specified small sites in the torsor supplier.

**Given:** The specified K-model, Nisnevich sheaves of spaces, and perfect complexes on schemes; use the rank-zero fiber so that graded-line signs are handled before forgetting the rank. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Import the ordinary coherent determinant construction and the standard first-Postnikov description used below.

[F1] Knudsen–Mumford Definition4/Theorem2 supplies the extended determinant data for true triangles, with the alternating formula, graded sign symmetry and pullback composition isomorphisms. In the Statement, compatibility with exact triangles means this enhanced cofiber convention; it does not assert functoriality for arbitrary ordinary derived-triangle diagrams.

[F2] [lem-adjudicate-f6007757a8ac-actual-determinant-stack-map](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map) supplies the actual natural determinant map on the present perfect K-space, including its descent data, object and automorphism maps. Its proof first uses the Waldhausen determinant universal one-type and the canonical enhanced K comparison, including degree zero under idempotent completeness. Weibel IV.4.4.2 gives the compatible elementary affine normalization; the existing local K₀/K₁ suppliers give rank and determinant. Thus a Postnikov calculation is used to identify an already constructed map, rather than to construct enhanced determinant coherence. The supplier’s descent step uses sheafification of its affine map into the graded-line stack. Weibel V.10.10.1 supplies only the contextual descent statement under the separately recorded source scope.

[F3] HTT Proposition7.2.2.12(2) supplies the pointed 1-type classification. It proves the Postnikov description after the local calculations in [F2]. The global determinant line is glued with its isomorphisms by [F1]; local triviality of a line bundle is not used to infer that its Picard class is zero globally.

### External input
Import [F1]–[F3] with their stated reading limits. The first-Postnikov description is the formal consequence of the connected rank-zero sheaf and π₁=$G_m$, with the identification fixed by the actual determinant construction. No new arbitrary coherent enhancement or equivalence is inferred from group-level affine comparisons.

### Precise source and enhancement scope
KM's true triangles are represented by actual short-exact complex diagrams in its derived diagram category. The forgetful functor to ordinary derived triangles loses morphism information (pp.37–38); the p.41 footnote requires genuine diagram commutativity. The p.43 ordinary-triangle corollary has a perfect-cohomology hypothesis, and p.44 warns against an unrestricted extension. These qualifications do not weaken the determinant/Picard operation needed here. The new actual-map supplier gives the required map before the first-Postnikov identification, with true/enhanced cofiber additivity. No published KM error is alleged.


## The actual supported Euler class has the generic length coordinate

[Open item](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate) · level 16


### Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supported perfect-$K$-theory constructions. Let $k$ be a field, let $U$ be a smooth finite-type $k$-scheme of pure dimension three, and let $i:C\hookrightarrow U$ be an integral closed curve of codimension two. Let $\eta$ be the generic point of $C$ and let $E\in\operatorname{Perf}_{|C|}(U)$ be an object of the specified current supported perfect category. Neither smoothness nor normality of $C$, nor global quasi-projectivity of $U$, is required. Identify its spectral degree-zero class with $G_0(C)$ by the completed coherent-cohomology Euler and ideal-power devissage comparison. Its generic-rank coordinate is
$$\chi_\eta(E)=\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}}H^n(E)_\eta.$$
This is a finite sum of finite integers. It is additive under exact triangles, invariant under restricting the ambient scheme to an open neighbourhood of $\eta$, sends $[i_*\mathcal O_C[0]]$ to $+1$, and sends every class supported at finitely many closed points of $C$ to zero. The current support spectrum and the open-complement fiber are identified by the actual localization map, not by a model-free notation change.

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed site and universe bounds discharge [F1] and the supported comparison of [F2] in step 1.1, and the selected localization model [F3] in step 3.1. The generic-stalk and finite-length computations add no further choice premise.


**Given:** The Axiom of Choice and the stated site and universe bounds; a field $k$; a smooth finite-type $k$-scheme $U$ of pure dimension three; an integral codimension-two closed curve $i:C\hookrightarrow U$ with generic point $\eta$; and a supported perfect complex $E\in\operatorname{Perf}_{|C|}(U)$.

**Goal:** Identify the precise coordinate in the current K-theory model and its positive test object.

[F1] The completed supported comparison maps the current $K_0^{|C|}(U)$ to $G_0(C)$ by the coherent Euler class followed by ideal-power quotients, and sends $[F]$ back to $[i_*F[0]]$. [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)

[F2] Generic rank on $G_0(C)$ is dimension over $k(\eta)$ and corresponds under [F1] to the alternating generic length displayed above. Its kernel is generated by the closed-point classes. [lem-curve-generic-rank-localization](item-lem-curve-generic-rank-localization)

[F3] Current support-category K-theory maps naturally equivalently to the fiber of restriction for a qcqs scheme and quasi-compact open complement. Here all opens in use are quasi-compact because the ambient scheme is noetherian. [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

1.1 Smoothness and finite type over the field make $U$ regular, Noetherian and finite-dimensional, and $C$ is an integral Noetherian scheme of dimension one. Apply [F1] to this ambient $U$ and its closed subscheme $C$. Apply generic rank [F2] to the resulting class in $G_0(C)$. Its formula is precisely $\chi_\eta(E)$, with the cohomological Euler sign $(-1)^n$. Finiteness of both the ideal filtration and cohomological sum is part of [F1]–[F2]. The composition is a homomorphism on the actual spectral degree-zero group, and is therefore additive under exact triangles. [A1, F1, F2, given]

2.1 Restriction to an open containing $\eta$ leaves the stalk, its local ring and every quotient length unchanged. For $i_*\mathcal O_C[0]$ the sole nonzero generic cohomology module is the residue field $k(\eta)$ of $\mathcal O_{U,\eta}$, which has length one; its cohomological degree is zero. A closed-point-supported object has zero stalk at $\eta$. This proves the positive and zero test values and restriction invariance. [F1, F2, step 1.1, algebra]

3.1 Use [F3] to transport these statements through the actual support-category-to-fiber equivalence. It respects support inclusion and open restriction, so no extra sign or choice of K-spectrum identification is inserted by writing the same class in the open-complement fiber. This proves the stated model qualification. [A1, F3, step 1.1, step 2.1] ∎


## The EM weight-one Picard normalization is positive identity

[Open item](item-lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard) · level 16


### Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

On Sm_k for any field k, write S=Ω∞Fil¹K and identify Ω∞gr¹K with $BG_m$ by the canonical EM c₁ comparison. Let κ:$BG_m$→S lift L↦[L]−1. Then the based map q₁κ:$BG_m$→$BG_m$ is identity as a map of Nisnevich stacks, hence on both the Picard classes and their automorphism units. This identifies the sign of the actual projection and not merely its target group.

### Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. They are inherited when applying the determinant/one-type input in [F2] at step 1.2. The stack comparison is on a universe-bounded smooth big Nisnevich site; derived sections use the compatible small sites. The Laurent-unit calculation and the integer sign test add no further choice principle.

**Given:** The normalized maps and the field hypothesis in the Statement. All maps and homotopies below are in pointed Nisnevich sheaves of spaces on $\mathrm{Sm}_k$. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Identify the chosen lift with the normalized lift, then prove the identity on the whole line-bundle stack.

[F1] [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) supplies the particular pointed lift $a$ of $L\mapsto 1-[L]$, the canonical identification $\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$, and $q_1(-a)(\mathcal O(-1))=c_1(\mathcal O(-1))$. It also fixes $\operatorname{Pic}(\mathbb P^1_k)=\mathbb Z$ with generator $c_1(\mathcal O(1))$. This fact does not assert that an arbitrary lift is $-a$.

[F2] [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) supplies the fully faithful classification of pointed connected one-types by sheaves of groups. In particular pointed maps $B\mathbb G_m\to B\mathbb G_m$ correspond to sheaf-group endomorphisms of $\mathbb G_m$.

[F3] [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank), including its weight-zero comparison and stage computation, identifies $q_0$ with rank and uses the actual fiber sequence $\operatorname{Fil}^1K\to K\to\operatorname{gr}^0K$. On smooth schemes the comparison of [F1] identifies the zeroth space of the last term with the locally constant integer sheaf: its positive homotopy groups are negative cohomology groups of the degree-zero constant sheaf and vanish.

### Proof
1.1 Put $T=\Omega^\infty\operatorname{gr}^0K$ and $f:B\mathbb G_m\to\Omega^\infty K$, $L\mapsto[L]-1$. By [F3], $T$ is the discrete locally constant integer sheaf and $q_0f$ is the zero map, since every line bundle has rank one. Since $\Omega^\infty$ preserves fibers, $S$ is the fiber over zero of $\Omega^\infty K\to T$. Applying the pointed mapping-space functor from $B\mathbb G_m$ identifies the space of lifts of this fixed $f$ with the space of paths from $q_0f$ to zero in $\operatorname{Map}_*(B\mathbb G_m,T)$. The latter mapping space is discrete because $T$ is zero-truncated. The path space in question is therefore contractible. [F3, given]

1.2 By [F2], $q_1\kappa$ corresponds to an endomorphism $h:\mathbb G_m\to\mathbb G_m$. The sheaf $\mathbb G_m$ is represented on $\mathrm{Sm}_k$ by $\operatorname{Spec}k[t,t^{-1}]$, so Yoneda identifies its underlying natural map with a unit of $k[t,t^{-1}]$. Every such unit is $b t^n$ for $b\in k^\times$ and $n\in\mathbb Z$: the highest and lowest exponents of a product add over a field, and a product equal to one forces both factors to have a single exponent. Preservation of the identity gives $b=1$. Hence $h(u)=u^n$, and the associated pushforward of torsors sends a line bundle $L$ to $L^{\otimes n}$. This Laurent-unit calculation uses the field hypothesis. [F2, given, A1]

2.1 Inversion in the infinite loop space sends the particular lift $a$ in [F1] to a pointed lift $-a$ of $f$. Both the specified $\kappa$ and $-a$ are thus lifts of the same fixed map. By step 1.1 they agree up to pointed homotopy over $\Omega^\infty K$. Consequently the normalized evaluation from [F1] applies to $q_1\kappa$, giving $q_1\kappa(\mathcal O(-1))=c_1(\mathcal O(-1))$. [F1, step 1.1]

3.1 Apply step 1.2 to $\mathcal O(-1)$ on $\mathbb P^1_k$. Step 2.1 says its image is $\mathcal O(-1)$, while step 1.2 gives $\mathcal O(-n)$. The specified infinite cyclic Picard group in [F1] therefore forces $n=1$. Full faithfulness in [F2] identifies the whole pointed stack map $q_1\kappa$ with the identity, including its action $u\mapsto u$ on automorphism units. The sign is inherited from the actual normalized projection $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$, rather than chosen through a new target identification. [F1, F2, step 2.1, step 1.2] ∎



## Positive generic cycles determine the curve-supported homomorphism

[Open item](item-lem-author-16f30f6b95cb-positive-generic-cycle-detection) · level 17


### Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied geometric and supported comparisons. In the preceding setting, let $h:G_0(C)\to\mathbb Z[C]$ be a homomorphism. If $h$ kills every closed-point residue-field class and $h([\mathcal O_C])=[C]$, then
$$h([F])=\dim_{k(\eta)}F_\eta\,[C]$$
for every coherent $F$ and every virtual class by linearity. Equivalently, to prove that a supported degree-zero map into $H_0z_C^2(U,\bullet)$ is the positive generic-length map, it suffices to identify its generic restriction with restriction to $K_0(k(\eta))=\mathbb Z$ by dimension. A sign is fixed only once the residue-field or structure-sheaf generator has been sent to $+1$; an unspecified isomorphism of groups does not supply that condition.

### Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the coherent generic-rank supplier [F1] in step 1.1. Together with the fixed site and universe bounds it discharges the geometric and actual supported-coordinate premises [F2]–[F3] in step 2.1. Once these supplied identifications are fixed, the homomorphism argument is finite algebra.


**Given:** The Axiom of Choice, the stated site and universe bounds, the group and generator identifications above, and the two stated conditions on $h$.

**Goal:** Isolate the exact generator/sign test needed from the external map comparison.

[F1] Generic rank $r:G_0(C)\to\mathbb Z$ sends $[\mathcal O_C]$ to $1$ and has kernel generated by the closed-point residue-field classes. [lem-curve-generic-rank-localization](item-lem-curve-generic-rank-localization)

[F2] The supported cycle target is $\mathbb Z[C]$, detected isomorphically by restriction to any generic neighbourhood. [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)

[F3] The current supported Euler coordinate is the generic rank under devissage, with value $+1$ on $i_*\mathcal O_C[0]$. [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate)

### Proof

1.1 For any $x\in G_0(C)$, $x-r(x)[\mathcal O_C]$ belongs to $\ker r$. By [F1] it is a finite integral sum of closed-point classes. The first hypothesis on $h$ kills that difference, while its second hypothesis sends $r(x)[\mathcal O_C]$ to $r(x)[C]$. This gives the displayed formula and uniqueness. [A1, F1, given, algebra]

2.1 By [F2], equality of maps to the supported cycle group is tested on the coefficient of its single positive generic cycle. If that coefficient map is the residue-field dimension map, it kills closed-point classes and sends the structure sheaf to $+1$, so step 1.1 applies. Transporting back by [F3] gives exactly the alternating generic-length formula on perfect-complex classes. The argument requires that specific dimension normalization and cannot extract it merely from an unnamed group isomorphism. [A1, F1, F2, F3, step 1.1] ∎


## Actual first-Chern and determinant maps of the first EM layer

[Open item](item-lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant) · level 17


### Statement
Assume the Axiom of Choice and fixed universe bounds for the supplied perfect K-model and derived sections. For each scheme use the small Nisnevich site specified by the torsor comparison: a sufficiently small full subcategory of étale schemes containing the terminal scheme and closed under the fibre products and Zariski refinements used in descent. Work on a compatible universe-bounded smooth big Nisnevich site when comparing stack maps, and restrict to these small sites for derived sections.

Let X be smooth of finite type over any field k. Under the canonical weight-one comparison, the actual first-stage projection induces

$$\widetilde K_0(X)=\pi_0Fil^1K(X)\longrightarrow H^{2,1}_{mot}(X)=\operatorname{Pic}(X),\qquad x\longmapsto c_1(x)=\det(x),$$

and

$$K_1(X)=\pi_1Fil^1K(X)\longrightarrow H^{1,1}_{mot}(X)=\Gamma(X,\mathcal O_X)^\times,\qquad z\longmapsto\det(z).$$

The first determinant/Pic map is the actual natural perfect-complex determinant map, with the alternating graded-line convention, and on [E]−rank(E) it is the determinant line of E. It is not inferred by comparing Picard groups only on affine trivializations. No smooth projection is identified here with a singular motivic projection without a separate functorial comparison.

### Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. They enter through the supplied enhanced perfect K-model in [F2] at step 1.1 and through the unit-section and frame-torsor/derived-sections constructions in [F3] at steps 2.1–3.1. In particular the torsor supplier uses Choice to select local torsor sections. Stack comparison uses the compatible universe-bounded smooth big Nisnevich site; evaluation and derived sections use the specified small sites.

**Given:** Choice, the stated universe and site-size bounds, the smooth scheme, the actual EM projection and its canonical gr¹ comparison.

**Goal:** Identify both homotopy-group maps with the fixed first-Chern/determinant operations.

[F1] [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank) identifies the first-stage groups. [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) identifies Ω∞gr¹K with the actual line-bundle stack $BG_m$ via c₁.

[F2] [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) supplies the canonical perfect-complex determinant/Pic map and its first-Postnikov description, with local $\pi_0K=\mathbb Z$ and π₁K=$G_m$ through the actual rank/determinant maps.

[F3] [lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard](item-lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard) proves q₁κ=id as a stack map under [A1]. Under the same assumptions, [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant) supplies the actual K₁ determinant and its section through the specified enhanced realizations. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) fixes the frame-torsor conventions for Pic and units on the specified small Nisnevich sites; its inverse uses Choice to select a set-indexed family of local torsor sections, followed by effective descent. These inherited uses enter steps 2.1–3.1.

### Proof
1.1 Work in Nisnevich sheaves of spaces on Sm_k. The rank-zero K-space S=Ω∞Fil¹K is connected as a SHEAF, even though S(X) may have many components: at a henselian local stalk the rank map K₀→Z is an isomorphism by [F2]. Its sheaf of fundamental groups is $G_m$ by determinant, since the positive-degree first-stage map is an isomorphism by [F1]. Thus τ≤1S is $BG_m$ with its identification fixed by the actual determinant map in [F2]. A map from S to $BG_m$ factors uniquely through this pointed one-type. [F1, F2, A1]

2.1 The map on fundamental-group sheaves induced by κ is the unit section, hence is an isomorphism at local stalks by [F2] and [F3]. Since q₁κ=id by [F3], the fundamental-group map of q₁ is its inverse, namely determinant. Full faithfulness of the pointed one-type classification in [F2] therefore identifies q₁:S→$BG_m$ with the actual determinant/Pic map itself, as a map of Nisnevich stacks after the canonical truncation. This retains all descent morphisms and thus determines global Picard classes; the fact that an invertible sheaf is locally trivial has not been used to erase its global class. [F2, F3, step 1.1, A1]

3.1 Evaluate this equality of actual maps at X and take π₀ and π₁. By [F1] their source groups are reduced K₀ and K₁, and their target groups, under [F3], are Pic(X) and Γ(X,$O_X$)×. By the determinant construction [F2], its π₀ is the class of the determinant graded line after passing to rank zero, which is the usual first Chern class and is det(E) on a vector bundle; its π₁ is the matrix-compatible determinant characterized in [F3]. These are exactly the two formulas, with positive sign fixed in [F3]. [F1, F2, F3, step 2.1, A1] ∎


## Smooth rank, first Chern, determinant and supported positive leading cycle

[Open item](item-lem-smooth-leading-cycle-normalization) · level 18


### Statement
Assume AC and the compatible universe and Nisnevich-site size bounds of the supplied constructions, and use the specified perfect-complex nonconnective K-spectrum and its actual EM motivic filtration. For a smooth finite-type scheme $X$ over a field $k$, the weight-zero projection is the locally constant rank function. The first-stage projection gives
$$\widetilde K_0(X)=\pi_0F^1K(X)\longrightarrow H^{2,1}(X)=\operatorname{Pic}(X),\quad x\longmapsto c_1(x)=\det(x),$$
and
$$K_1(X)=\pi_1F^1K(X)\longrightarrow H^{1,1}(X)=\Gamma(X,\mathcal O_X)^\times,\quad z\longmapsto\det(z).$$
Here reduced $K_0$ means the kernel of the locally constant rank map, component by component; determinant on perfect complexes uses its alternating graded-line convention.

For the supported assertion let $k$ be perfect (in particular the article's algebraically closed field qualifies), let $U$ be smooth of finite type and pure dimension three over $k$, and let $i:C\hookrightarrow U$ be an integral codimension-two closed curve. Neither smoothness nor normality of $C$, nor global quasi-projectivity of $U$, is required. Write
$$K_C(U)=\operatorname{fib}(K(U)\to K(U\setminus C)),\quad F^j_CK(U)=\operatorname{fib}(F^jK(U)\to F^jK(U\setminus C)).$$
The actual augmentation $\epsilon_2:F^2_CK(U)\to K_C(U)$ is an equivalence, and the supported layer is canonically
$$\pi_0\operatorname{gr}^2_CK(U)=H_C^{4,2}(U)=H_0z_C^2(U,\bullet)=\mathbb Z[C].$$
This is the supported cycle group, not the image of $[C]$ in ambient Chow cohomology. For $\xi\in\pi_0F^2_CK(U)$ let $E$ denote its augmented class in the actual supported $K_0$, using support-category localization. Then its specified stage-to-layer projection is
$$p_2(\xi)=\left(\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}} H^n(E)_\eta\right)[C],\qquad \eta=\operatorname{generic}(C).$$
The notation for a virtual class $E$ means the additive extension of this formula from supported perfect complexes. Equivalently $p_2\circ(\pi_0\epsilon_2)^{-1}$ on supported $K_0$ is alternating generic length times the positive cycle. In particular $i_*\mathcal O_C[0]$ maps to $+[C]$, and every closed-point-supported class maps to zero.

### Facts & Assumptions

**Given:** AC, the stated universe and site-size bounds, the smooth scheme/field hypotheses in each part, and the current augmented tower, support and K-model contracts. The supported part uses a perfect field only; it does not extend the imported classical supported comparison to an imperfect field.

**Goal:** Normalize the actual maps, including the domain and positive generator of the supported weight-two projection.

[A1] The stated Choice and size assumptions are inherited from the determinant and weight-one suppliers in [F1] at step 1.1. They cover the enhanced K-model, the compatible big Nisnevich stack comparison, and the specified small-site frame-torsor and derived-sections constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank) and [lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant](item-lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant) identify the actual weight-zero and weight-one maps, using the canonical EM comparisons and the actual determinant map supplied before the Postnikov identification. The determinant input now specifies true/enhanced cofiber coherence and its Waldhausen-to-current-model bridge; arbitrary ordinary-triangle-diagram functoriality is not used.

[F2] [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) supplies the actual natural augmented filtered bridge to classical slice K-theory, with its exact arbitrary-field source-coverage qualification. [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport) transports its support fibers, projections and augmentations. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) supplies the compatible supported Bloch localization fiber.

[F3] [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom) computes the supported layers in weights zero and one and the positive degree-zero cycle in weight two. [lem-author-16f30f6b95cb-supported-second-stage-inverse](item-lem-author-16f30f6b95cb-supported-second-stage-inverse) therefore supplies the actual equivalence $\epsilon_2$ and target, without using any later second-stage article consumer.

[F4] [thm-author-16f30f6b95cb-supported-slice-positive-cycle-input](item-thm-author-16f30f6b95cb-supported-slice-positive-cycle-input) supplies the actual supported inverse-augmentation slice projection and its generic coefficient on a smooth quasi-projective scheme over a perfect field. Its coefficient is restriction to $G_0(k(\eta))=\mathbb Z$ by dimension, with positive residue-field generator.

[F5] [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate), [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage) and [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) identify that coefficient in the current support-spectrum model with alternating generic length. [lem-author-16f30f6b95cb-positive-generic-cycle-detection](item-lem-author-16f30f6b95cb-positive-generic-cycle-detection) makes this coefficient a detection of the full supported degree-zero map. [def-cohomology-with-support](item-def-cohomology-with-support) fixes the layer shift $\pi_0\operatorname{gr}^2_C=H_C^{4,2}$.

[F6] [lem-adjudicate-f6007757a8ac-raw-simplicial-descent](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent) proves the canonical raw-to-Zariski-derived-sections unit on possibly nonseparated smooth finite-type schemes. Apply the natural graded comparison of [F2] on the affine Zariski basis and pass to derived sheaf sections; the actual unit identifies those sections with the original raw Bloch complexes. This gives the same open-restriction-compatible graded comparison globally. The exact source-version qualification of [F2], including EM v1 Remark3.6’s then-in-preparation input, remains binding.

### Proof

1.1 Apply [F1] to $X$. It proves the rank formula and the identifications of the first-stage degree-zero and degree-one groups, then identifies their actual projection with the determinant/Picard map and its unit map. The Chern sign is fixed there by $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$; it is not chosen from an abstract isomorphism with Picard groups. This proves the first three assertions, with all their field hypotheses. [F1, given, A1]

1.2 For $U,C$, apply the natural graded comparison in [F2], with the raw global interpretation justified in [F6], to $U$ and its open complement and take their restriction fiber. [F3] makes the supported weights zero and one zero. The cofiber sequences for the two successive supported transitions therefore identify $F^2_CK$ with $F^0_CK=K_C$ by the actual augmentation. The same comparison gives the target $\mathbb Z[C]$ with the shift stated in [F5]. This proves the precise domain and target of $p_2$, independently of its as yet uncomputed coefficient. [F2, F3, F5, F6, given]

2.1 Choose an affine open neighbourhood $V\subset U$ of $\eta$. It is smooth quasi-projective over the perfect field; $C\cap V$ is integral of codimension two, although it may be singular. Apply [F4] on this pair. By [F2] its actual inverse-augmentation slice map is the transport of the current map of step 1.2 restricted to $V$: the transition, augmentation and layer-projection squares commute. Thus its positive generic coefficient on the augmented class is the actual K-to-G generic restriction followed by dimension. [F2, F4, step 1.2]

3.1 By [F5] that generic coordinate equals the finite alternating length sum in the Statement, in the current K-model. Neither this coordinate nor its sign changes on restricting from $U$ to $V$. By [F3] restriction on the bottom supported cycle target sends $[C]$ to $[C\cap V]$ and is an isomorphism. Equality of the coefficient after this restriction therefore proves the displayed formula on $U$, by [F5]'s detection lemma. The length of the residue-field stalk of $i_*\mathcal O_C[0]$ is one and its cohomological degree is zero; closed-point-supported stalks vanish at $\eta$. This proves the positive and zero tests. All asserted formulas are now proved for the actual projection and its inverse-augmentation version. [F3, F5, step 1.2, step 2.1] ∎

### Focused source-reading limits
The supporting normalization was checked in the published Kahn–Levine final PDF, printed p.487, Proposition2.2.2 p.496, Lemmas2.3.1–2.3.2 pp.499–500, Definition3.1.5 p.503, Definitions3.1.9–3.1.15 pp.505–507, Theorem3.2.4 and proof pp.508–510, section5.9 pp.531–532, Lemma6.2.1 p.535, Lemmas6.4.1–6.4.3 pp.539–540, and Theorem6.5.5 and proof pp.542–543. The maps are restriction-to-support/generic-coefficient maps with ordinary $A=k$ dimension normalization. Only the affine generic neighbourhood is required to be quasi-projective. The stable augmentation comparison was checked in Levine arXiv:math/0510334v1, model conventions pp.44–45, section8.3 and Theorem9.0.3/Remark9.0.4 pp.46–47; its deep proof is imported. EM arXiv:2309.08463v1 was checked at section3.1, Theorem3.5 and Remark3.6, Constructions4.34/4.36, Theorem6.1, Remark6.3, Corollary6.4/proof and footnote12. In particular no published proof of the then-in-preparation comparison is claimed. This reading concerns application-critical passages and their hypotheses, not full-paper or whole-library review. The article's original locations on pp.9,10,16 and all existing coverage are retained.

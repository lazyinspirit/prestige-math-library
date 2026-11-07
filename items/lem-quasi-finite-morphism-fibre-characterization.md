---
id: lem-quasi-finite-morphism-fibre-characterization
kind: lemma
title: "Finite-fibre and pointwise characterizations of quasi-finiteness"
status: published
origin: pipeline
deps:
  - def-quasi-finite-morphism-schemes
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-finite-morphism-schemes
  - cor-base-change-finite-type-and-products
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-ideal-characterisations
  - cor-noether-normalisation-module-finiteness
  - lem-determinant-trick-for-nakayama
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.21 Definition 29.21.1 and Lemmas 29.21.3, 29.21.5–7, 29.21.10"
      url: "https://stacks.math.columbia.edu/tag/01TC"
    - title: "Stacks Project, Commutative Algebra, Lemma 10.122.1"
      url: "https://stacks.math.columbia.edu/tag/00PJ"
    - title: "Stacks Project, Commutative Algebra, Lemma 10.122.2"
      url: "https://stacks.math.columbia.edu/tag/00PK"
    - title: "Stacks Project, Commutative Algebra, Definition 10.122.3"
      url: "https://stacks.math.columbia.edu/tag/00PL"
    - title: "Stacks Project, Varieties, Lemma 33.20.2"
      url: "https://stacks.math.columbia.edu/tag/06LH"
---

## Statement

Let $f:X\to S$ be a finite-type morphism, with quasi-finiteness as defined on
this page. The following are equivalent: (1) $f$ is quasi-finite; (2) every
$x\in X$ is isolated in the fibre $X_{f(x)}$ and
$\kappa(x)/\kappa(f(x))$ is finite; (3) for every $s\in S$ the fibre morphism
$X_s\to\operatorname{Spec}\kappa(s)$ is finite.

## Facts & Assumptions

**Given:** A finite-type morphism $f:X\to S$, a point $x\in X$ with image $s=f(x)$, and the definitions of quasi-finiteness and scheme-theoretic fibre.

[F1] A scheme morphism is quasi-finite when it is finite type and each point has compatible affine neighbourhoods on which the ring map is quasi-finite at the corresponding prime; the local fibre algebra is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ ([[def-quasi-finite-morphism-schemes]]).

[F2] For a finite-type ring map $A\to B$ and $\mathfrak q$ over $\mathfrak p$, quasi-finiteness at $\mathfrak q$ means that $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ is finite-dimensional over $\kappa(\mathfrak p)$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[F3] A morphism is of finite type when it is locally of finite type and quasi-compact ([[def-locally-finite-type-and-finite-type-morphism]]).

[F4] The scheme-theoretic fibre is $X_s=X\times_S\operatorname{Spec}\kappa(s)$ ([[def-scheme-theoretic-fibre]]).

[F5] A morphism to an affine target is finite when its inverse image is affine and its coordinate algebra is a finite module over the target ring ([[def-finite-morphism-schemes]]).

[F6] Arbitrary base change preserves finite-type morphisms ([[cor-base-change-finite-type-and-products]]).

[F7] A polynomial algebra over a field is Noetherian by Hilbert's basis
theorem. Its quotients and localizations have finitely generated ideals:
lift an ideal to the polynomial ring for a quotient, and contract it then
localize for a localization. Only Noetherian-to-finite-generation and its
choice-free converse are used, not the maximal-condition implication.
[[thm-hilbert-basis-theorem]]
[[thm-noetherian-ring-ideal-characterisations]]

[F8] A nonzero finite-type field algebra is module-finite over an injected
polynomial subring. If a finite module $M$ satisfies $IM=M$, the determinant
trick gives $(1-a)M=0$ for some $a\in I$, without a choice assumption.
[[cor-noether-normalisation-module-finiteness]]
[[lem-determinant-trick-for-nakayama]]

## Proof

**Proof technique:** direct; prove the finite local fibre criterion and
the finite disjoint affine decomposition, retaining the unconditional
axiom scope of the Statement.

1.1 We first record a choice-free existence fact used only for finite-type field algebras. A nonzero finite-type $k$-algebra $T$ has a maximal ideal. By [F8] it is module-finite over an injected polynomial ring $R=k[z_1,\ldots,z_d]$. Localize at the explicit maximal ideal $\mathfrak m=(z_1,\ldots,z_d)$. The injection $R_{\mathfrak m}\hookrightarrow T_{\mathfrak m}$ shows the latter is nonzero and finite as an $R_{\mathfrak m}$-module. If $\mathfrak mT_{\mathfrak m}=T_{\mathfrak m}$, the determinant trick in [F8] gives $(1-a)T_{\mathfrak m}=0$ with $a\in\mathfrak mR_{\mathfrak m}$; $1-a$ is a unit in this localization, a contradiction. Hence $T/\mathfrak mT$ is a nonzero finite-dimensional $k$-algebra. Among its proper ideals choose one of maximum vector-space dimension; such a dimension is a largest member of a nonempty finite subset of the natural numbers. That ideal is maximal, and its inverse image in $T$ is maximal. Only finitely many choices and finite-dimensional linear algebra occur. [F8, given, construct, algebra]

2.1 For a finite-type $k$-algebra $A$, its nilradical is the intersection of its prime ideals without requiring the general prime-ideal theorem. Indeed, if $a$ is not nilpotent, the nonzero finite-type algebra $A[a^{-1}]$ has a maximal ideal by step 1.1; its contraction is prime and avoids $a$. The reverse inclusion, that every prime contains each nilpotent, follows by taking a power. By [F7] the nilradical is finitely generated, say by $a_i$ with $a_i^{n_i}=0$, and is nilpotent: every monomial of degree $\sum_i n_i$ in the $a_i$ contains a vanishing power. Thus if $A$ has just one prime, its maximal ideal is nilpotent. The zero ring is excluded only while a prime is being considered. [F7, algebra, step 1.1]

3.1 Let $D$ be a finite-type $k$-algebra and $\mathfrak q\in\operatorname{Spec}D$. Suppose $D_{\mathfrak q}$ is finite-dimensional over $k$. Its residue field is finite-dimensional. The domain $D/\mathfrak q$ injects into that field, hence is itself finite-dimensional; multiplication by a nonzero element is an injective endomorphism of a finite-dimensional space and is surjective, so this domain is a field. Thus $\mathfrak q$ is maximal. Every prime quotient of the finite-dimensional algebra $D_{\mathfrak q}$ is similarly a field, so its only prime is its unique maximal ideal $\mathfrak qD_{\mathfrak q}$. By step 2.1 this ideal is nilpotent. Since $D$ is Noetherian by [F7], choose generators of $\mathfrak q^N$ for a power that becomes zero in $D_{\mathfrak q}$. Each is annihilated by some element outside $\mathfrak q$; their finite product $s\notin\mathfrak q$ kills all of $\mathfrak q^N$. Every prime of $D_s$ contains $\mathfrak qD_s$, since its $N$th power vanishes, and maximality of $\mathfrak q$ leaves precisely that one prime. Consequently $D(s)=\{\mathfrak q\}$ in $\operatorname{Spec}D$. This proves isolatedness and finite residue field from finite-dimensionality of the local algebra. [F7, algebra, step 2.1]

3.2 Conversely suppose $\mathfrak q$ is isolated and its residue field is finite over $k$. Choose a principal neighbourhood $D(s)=\{\mathfrak q\}$. The finite-type algebra $A=D_s$ has just that prime. It is local: if an element outside that prime were not a unit, its nonzero finite-type quotient would have a maximal ideal by step 1.1, yielding a second prime. Thus $A=D_{\mathfrak q}$. By step 2.1 its maximal ideal $\mathfrak n$ is nilpotent. All powers of $\mathfrak n$ are finitely generated by [F7], so the quotients $\mathfrak n^i/\mathfrak n^{i+1}$ are finite-dimensional over $A/\mathfrak n=\kappa(\mathfrak q)$: the images of finite ideal generators span them. This residue field is finite over $k$ by hypothesis. The finite filtration by the powers ending at $\mathfrak n^N=0$ proves that $A=D_{\mathfrak q}$ is finite-dimensional over $k$. This proves the reverse local criterion, including nilpotents. [F7, algebra, step 1.1, step 2.1]

4.1 For $x\in X_s$, a compatible finite-type affine chart has fibre algebra $D=B\otimes_A\kappa(s)$ and its local ring at $x$ is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ by [F1], [F2] and [F4]. Steps 3.1–3.2 identify finite-dimensionality of this ring with isolatedness and finite residue extension in that affine fibre chart, hence in $X_s$. This is an open-local assertion. Definitions [F1]–[F3] therefore give (1)$\Longleftrightarrow$(2). If these hold, every point of $X_s$ has a singleton principal affine neighbourhood whose coordinate ring is its finite-dimensional local ring, by step 3.2. Those opens cover the fibre. Its quasi-compactness follows from finite type and [F6], so finitely many suffice. They are disjoint singleton opens, and their finite disjoint union is the spectrum of the finite product of their finite-dimensional algebras. Thus $X_s$ is affine finite-dimensional over $\kappa(s)$, proving (3) by [F5]. No separation hypothesis is used in this disjoint open cover. [F1, F2, F3, F4, F5, F6, algebra, step 3.1, step 3.2]

4.2 Conversely assume (3). Write $X_s=\operatorname{Spec}D$ with $D$ finite-dimensional over $\kappa(s)$ by [F5]. Every localization $D_{\mathfrak q}$ is still finite-dimensional. To see this explicitly, for each inverted element $b\notin\mathfrak q$ take a polynomial relation $b^r g(b)=0$ with $g(0)\ne0$; one exists by finite-dimensional linear dependence and removal of the largest power of the variable. After inverting $b$ one has $g(b)=0$, so $b^{-1}$ is a polynomial in $b$ using the nonzero constant coefficient. Hence the localization map $D\to D_{\mathfrak q}$ is surjective and its target is finite-dimensional. Step 3.1 gives isolatedness and finite residue extension for each point, proving (2). An empty fibre is $\operatorname{Spec}(0)$ and is finite; its pointwise conditions are vacuous. [F4, F5, algebra, step 3.1]

5.1 Step 4.1 proves (1)$\Longleftrightarrow$(2) and (1)$\Longrightarrow$(3); step 4.2 proves (3)$\Longrightarrow$(2). These give all claimed equivalences. The Noetherian and normalization suppliers in [F7]–[F8] use only their choice-free finite-generation implications and finite selections; step 1.1 explicitly replaces a general maximal-ideal existence appeal. No choice principle or external Stacks proof is an input. [F7, F8, algebra, step 4.1, step 4.2] ∎

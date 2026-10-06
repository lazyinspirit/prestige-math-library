---
id: thm-trigonalizable-extensions-split-over-algebraically-closed-fields
kind: theorem
title: "Splitting trigonalizable extensions: algebraically closed fields and two perfect-field cases"
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-hochschild-cohomology-of-algebraic-groups
  - lem-derived-subgroup-properties
  - lem-ga-torsors-over-affine-schemes-are-trivial
  - lem-multiplicative-type-groups-are-linearly-reductive
  - lem-nonaffine-group-image-exact-quotient-properties
  - lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
  - prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups
  - def-crossed-homomorphism-and-hochschild-extension
  - def-diagonalizable-group-and-character-module
  - def-group-of-multiplicative-type-and-torus
  - def-morphism-and-closed-subgroup-scheme
  - def-smooth-morphism-schemes
  - def-trigonalizable-algebraic-group
  - def-unipotent-algebraic-group
  - lem-smooth-trigonalizable-group-normal-series-refinement
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal
  - prop-extensions-of-multiplicative-type-groups-by-vector-groups-split
  - thm-nonaffine-affine-normal-group-quotient-affine
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorems 16.26-16.27; Theorem 15.34; primitive/Ore module equivalence 14.40-14.46 and perfect-field vector criterion 14.54; characteristic-zero vector criterion14.33, printed pp. 289, 292-297, 319-320 and 332-334
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Theorem 17.26, printed p. 298; Theorem 17.37(d), printed p. 302 (smooth connected case)
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Theorem 130(iv) and its proof, printed pp. 53-56 (smooth connected classical case)
---
## Statement

Assume the Axiom of Choice. Let $k$ be a perfect field and let $G$ be a trigonalizable algebraic group over $k$ ([[def-trigonalizable-algebraic-group]]) with largest normal unipotent subgroup $G_u$ and diagonalizable quotient $G/G_u$ ([[def-group-of-multiplicative-type-and-torus]]). Then the extension $1\to G_u\to G\to G/G_u\to1$ splits in each of the following cases: (a) $k$ is algebraically closed; (b) $k$ is perfect and $G_u$ is smooth and connected; (c) $k$ is perfect and $G/G_u$ is connected. In particular a smooth connected trigonalizable group over an algebraically closed field is a semidirect product $G_u\rtimes T$ for a maximal torus $T$, and all maximal tori are conjugate by an element of $G_u(k)$.

## Facts & Assumptions
**Given:** The Axiom of Choice, a perfect field $k$, and a trigonalizable affine algebraic $k$-group $G$ with largest normal unipotent subgroup $G_u$ and diagonalizable quotient $D=G/G_u$.

[F1] Assume AC. There is a normal series $G\supseteq G_0=G_u\supseteq G_1\supseteq\dots\supseteq G_r=1$ of closed subgroup schemes normal in $G$ in which every quotient $G_i/G_{i+1}$ is embedded $D$-equivariantly into $\mathbf G_a$ with a linear action of $D$; in particular the last nontrivial term $N$ satisfies $N\subseteq G_u$, $N$ is a closed subgroup scheme of $\mathbf G_a$, and the conjugation action of $D$ on $N$ is the restriction of a linear action on $\mathbf G_a$. ([[thm-trigonalizable-group-has-normal-series-with-vector-quotients]])

[F2] Assume AC. If $G$ is smooth and connected over a perfect field, $G_u$ is smooth connected and has a series of smooth connected subgroups normal in $G$ with successive quotients $\mathbf G_a$. This is the current [[lem-smooth-trigonalizable-group-normal-series-refinement]]. It is used below only for smooth ambient groups; reductions of subgroups are not assumed normal in a nonsmooth acting group.

[F3] If $N\subseteq G_u$ is a closed normal subgroup scheme of $G$, then $G/N$ is a trigonalizable affine algebraic group with $(G/N)_u=G_u/N$ and $(G/N)/(G_u/N)\cong D$: quotients of trigonalizable groups are trigonalizable (simple representations of the quotient are representations of $G$), quotients and closed subgroups of unipotent groups are unipotent, a normal unipotent closed subgroup of $G/N$ pulls back to a normal unipotent closed subgroup of $G$ lying in $G_u$, and the quotient of an affine group by a closed normal subgroup scheme is affine. ([[def-trigonalizable-algebraic-group]], [[def-unipotent-algebraic-group]], [[thm-unipotent-group-triangular-criterion]], [[thm-nonaffine-affine-normal-group-quotient-affine]])

[F4] Splitting of extensions by subgroups of $\mathbf G_a$ (Milne Theorem 15.34): let $M$ be an algebraic group of multiplicative type over $k$ acting by group automorphisms on a closed subgroup scheme $N\subseteq\mathbf G_a$, and let $1\to N\to E\to M\to1$ be an extension of affine algebraic groups inducing this action. Then the extension splits in each of the cases (a) $N\cong\mathbf G_a$ and the action of $M$ on $N$ is linear; (b) $k$ is perfect and $N\cong\alpha_{p^r}$; (c) $N$ is étale and $M$ is connected; (d) $k$ is algebraically closed and the action is the restriction of a linear action on $\mathbf G_a$. Case (a) is the local [[prop-extensions-of-multiplicative-type-groups-by-vector-groups-split]]; cases (b)-(d) are Milne 15.34(b)-(d), printed pp. 319-320.

[F5] *Vector and primitive-module inputs.* A smooth connected commutative unipotent group in characteristic zero is a vector group (Milne Corollary14.33); over a perfect field of characteristic $p$, one killed by $p$ is a vector group (Proposition14.54). In characteristic $p$, primitive elements in $k[x_1,\ldots,x_n]$ are the sums $\sum_{i,j}a_{ij}x_i^{p^j}$. With $Fc=c^pF$, the skew polynomial ring $B=k[F]$ acts on primitives by $Ff=f^p$; when $k$ is perfect, degree division makes $B$ a left and right Euclidean ring. Milne Theorem14.46 and its preceding proofs identify elementary unipotent groups contravariantly with finitely generated left $B$-modules; in particular $P(\mathbf G_a^n)=B^n$, and an exact sequence of these modules gives the reversed exact sequence of group schemes. These exact source inputs are applied to the explicitly diagonalizable quotient $D$ in this theorem, so weight decompositions are over $k$, including nonsmooth $D$. Derived subgroups are characteristic after every base change, and a smooth connected group has smooth connected derived subgroup. ([[lem-derived-subgroup-properties]]) A diagonalizable group is linearly reductive, and its positive Hochschild cohomology with linear vector coefficients vanishes. A homomorphism has closed image isomorphic to its quotient by the scheme-theoretic kernel; smooth connected homomorphic images and quotients remain smooth connected. ([[def-diagonalizable-group-and-character-module]], [[lem-multiplicative-type-groups-are-linearly-reductive]], [[prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])



[F6] In characteristic zero a finite closed subgroup scheme of $\mathbf G_a$ is trivial. In characteristic $p>0$, finite closed subgroup schemes of $\mathbf G_a$ over a perfect field are classified by their connected-étale sequence: $N$ sits in $1\to N^\circ\to N\to N^{\mathrm{et}}\to1$ with $N^\circ\cong\alpha_{p^r}$ (possibly trivial) and $N^{\mathrm{et}}$ finite étale (possibly trivial). If $M$ is connected, its action on the étale group $N^{\mathrm{et}}$ is trivial, because the automorphism functor of a finite étale group scheme is étale, so a morphism into it from the connected group $M$ is constant, equal to the identity at the origin. (Milne, Exercise 14-3 and the connected-étale sequence; recorded as a source fact.)

[F7] Sections of a split extension with commutative kernel correspond to crossed homomorphisms; principal crossed homomorphisms correspond to conjugation by a kernel $k$-point. The local principal-cocycle result applies to a smooth diagonalizable group over an algebraically closed field with smooth commutative unipotent coefficients, in particular a torus acting on $\mathbf G_a$. A unipotent subgroup intersects a torus trivially. No principal-cocycle assertion for nonsmooth diagonalizable sources and infinitesimal coefficients is made. ([[def-crossed-homomorphism-and-hochschild-extension]], [[prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]])

[F8] *Affine torsors and extensions.* A torsor under $\mathbf G_a^n$ on an affine scheme is trivial by the additive torsor proof applied componentwise: on an affine fppf trivializing cover its transition vector is an Amitsur cocycle; each coordinate is a coboundary, and translating a local section by the resulting vector makes its two pullbacks agree. The descent supplier then gives a global section, and the shear map gives a trivialization. Therefore it has a scheme section. A scheme section of an extension with commutative kernel makes it a Hochschild extension; the extension splits when its class in $H^2$ vanishes. For a short exact sequence of commutative coefficient group functors, a long exact sequence exists when the maps on represented cochains are surjective in every degree. ([[lem-ga-torsors-over-affine-schemes-are-trivial]], [[def-hochschild-cohomology-of-algebraic-groups]], [[def-crossed-homomorphism-and-hochschild-extension]])

## Proof

**Given:** The Axiom of Choice, a perfect field $k$, and a trigonalizable affine algebraic $k$-group $G$ with $D=G/G_u$.

1.1 In cases (a) and (c), induct on the length of the original series in [F1]. The base $G_u=1$ is the isomorphism $G\to D$. Otherwise take its last nontrivial term $N$ and apply [F3] to $G/N$. Its shorter series gives a section $\bar s:D\to G/N$ by induction. The pullback $E=G\times_{G/N}D$ is an extension of $D$ by $N$ with the linear action on the additive embedding from [F1]. A section of $E\to D$ composes with $E\to G$ to split the original extension. [F1, F3, induction]

1.2 To handle case (b), first prove a coefficient lemma: over perfect $k$, every action of the given diagonalizable $D$ on a vector group $N$ admits an exact sequence $0\to N\to V\to Q\to0$ in which $V$ and $Q$ are vector groups with linear $D$-actions. In characteristic zero, additive polynomials are linear, so $N$ itself is a linear representation and one may take $V=N,Q=0$. In characteristic $p$, write $P(N)=B^n$ as in [F5]. Decompose its coordinate primitives into their finitely many $D$-weight components. These components remain primitive and generate $P(N)$ over $B$, since their sums are the original coordinates. Give a finite free module $L=\bigoplus_{i=1}^mBe_i$ the corresponding weights and map $e_i$ to these primitive generators. Its kernel $R$ is a $D$-stable $B$-submodule; Frobenius sends weight $\chi$ to weight $p\chi$. [F5, construct]

1.3 In case (b), induct on $\dim G_u$, with $G_u=1$ as base. If $G_u\ne1$, its unipotence gives a terminating derived series. Let $A$ be its last nontrivial derived term. It is characteristic in $G_u$, smooth connected by the current derived-subgroup lemma, and commutative. In characteristic zero take $N=A$, a vector group by [F5]. In characteristic $p$, the embedding into an upper unitriangular group shows $p^tA=1$ for large $t$, because $(1+M)^{p^t}=1$ once $p^t$ exceeds the matrix size. Take the last nontrivial image $N=p^jA$. Multiplication by $p^j$ is a homomorphism on commutative $A$, so $N$ is smooth connected by [F5], and it is killed by $p$, hence a vector group by Proposition14.54 in [F5]. Derived terms and these natural multiplication images are characteristic after every base change, so $N$ is normal in $G$. It is positive-dimensional: a nontrivial smooth geometrically connected zero-dimensional group is trivial, and all chosen groups are smooth connected. [F5, F3, given]

2.1 In case (a), [F4](d) splits this pullback, including finite or infinitesimal $N$. In case (c), if $N=\mathbf G_a$ its given linear action permits [F4](a). Otherwise $N$ is finite; [F6] gives its connected-étale sequence with connected part $\alpha_{p^r}$. Quotient the pullback by that connected part. Its extension by the étale quotient splits by [F4](c), since $D$ is connected. Pull back along that section; [F4](b) splits the remaining extension by $\alpha_{p^r}$. Thus the original pullback splits in both cases and completes the series-length induction. [F4, F6, step 1.1, discharge-induction]

2.2 The kernel $R$ has a homogeneous free $B$-basis. To see this, choose a weight-homogeneous element with a nonzero first coordinate of least possible $F$-degree. In reducing the first coordinate of any homogeneous relation by its leading monomial, multiplication of the pivot by $aF^j$ has exactly the target weight: the matching leading coordinates have weights $p^{j+d}\chi_1$. Thus each subtraction remains homogeneous. A nonzero remainder of smaller first-coordinate degree would contradict minimality, so the coordinate is eliminated. The pivot generates a direct free summand of $R$, and repeat on the submodule with first coordinate zero and the remaining coordinates. There are only $m$ coordinates, so this gives a finite homogeneous free basis, treating a coordinate identically zero by skipping it. Nonhomogeneous relations are finite sums of weight components and are reduced componentwise. Apply the exact primitive-module equivalence of [F5] to $0\to R\to L\to P(N)\to0$. It gives $0\to N\to V\to Q\to0$, and the homogeneous bases of $L$ and $R$ make both $V$ and $Q$ linear vector representations of $D$. This proves the coefficient lemma over $k$ itself. [F5, step 1.2, algebra]

3.1 The quotient $V\to Q$ is an $N$-torsor. Since $N$ is a vector group as an underlying group, [F8] makes it trivial over affine $Q$. More generally every map $D^j\to Q$ lifts to $V$, because its pullback is a vector-group torsor on the affine scheme $D^j$; this also holds for $j=0$ and for nonreduced $D^j$. Thus $0\to C^\bullet(D,N)\to C^\bullet(D,V)\to C^\bullet(D,Q)\to0$ is exact, even though the action on $N$ may be nonlinear. The long exact sequence in [F8] contains $H^1(D,Q)\to H^2(D,N)\to H^2(D,V)$. Its outer groups vanish by [F5], since $V,Q$ are linear, so $H^2(D,N)=0$. Any extension of $D$ by $N$ is an $N$-torsor over affine $D$, hence has a scheme section by [F8]; the resulting Hochschild class is zero, so the extension splits. This establishes splitting for vector kernels with arbitrary actions, without asserting linearity of the full automorphism functor. [F8, F5, step 2.2]

4.1 The quotient $G/N$ has smooth connected unipotent radical $G_u/N$ of smaller dimension and the same diagonalizable quotient $D$, by [F3] and [F5]. The induction hypothesis splits it. Pull back $G\to G/N$ along a section as in step1.1. This is an extension of $D$ by the vector group $N$, with its actual conjugation action; this action need not be linear. Step 3.1 nevertheless splits it and hence splits $G\to D$. This proves case (b), including nonsmooth diagonalizable $D$, and completes the dimension induction. [F3, F5, step 3.1, step 1.3, discharge-induction]

5.1 Now assume $k$ algebraically closed and $G$ smooth connected. By [F2], $G_u$ is smooth connected; its quotient $D$ is smooth connected of multiplicative type, hence a torus. Step 4.1 gives a section $s:D\to G$. Any two sections are $G_u(k)$-conjugate: induct on $\dim G_u$, taking a last normal $N\cong\mathbf G_a$ from [F2]. Their images in $G/N$ are conjugate by induction. Lift the conjugating point of $(G_u/N)(k)$ to $G_u(k)$, because its fibre is a $\mathbf G_a$-torsor on affine $\operatorname{Spec}k$ and is trivial by [F8], and conjugate to make these quotient sections equal. Their ratio is then a crossed homomorphism $D\to N$. Here $D$ is a smooth torus and $N=\mathbf G_a$ is smooth, so [F7] makes the ratio principal and conjugation by an element of $N(k)$ identifies the sections. The base $G_u=1$ has a unique section. [F2, F8, F7, F5, step 4.1, induction]

6.1 Let $T$ be any torus in $G$. Since $T\cap G_u=1$ by [F7], its image $S=q(T)\subseteq D$ is a subtorus and $q|_T:T\to S$ is an isomorphism onto that image. The preimage $G'=q^{-1}(S)$ is smooth connected, with unipotent radical $G_u$ and quotient $S$: the kernel and quotient are smooth connected, so the exact-sequence supplier [F5] applies. The two sections of $G'\to S$ given by $T$ and $s|_S$ are $G_u(k)$-conjugate by the section-conjugacy argument of step 5.1. Hence $T$ lies in a conjugate of the complement $s(D)$. If $T$ is maximal, it equals that conjugate, so it is itself a complement; no dimension equality between unrelated maximal tori is assumed. [F7, F5, F3, step 5.1]

7.1 Thus every maximal torus is the image of a section of $q$, and multiplication identifies $G$ with $G_u\rtimes T$ for each of them. Step 5.1 makes any two such tori conjugate by $G_u(k)$. Together with steps 1.1–2.2 and 1.3–4.1 this proves all three splitting cases and the full smooth connected torus conclusion. No nonsmooth-source/infinitesimal-coefficient section-conjugacy assertion is used. [step 2.1, step 4.1, step 5.1, step 6.1] ∎


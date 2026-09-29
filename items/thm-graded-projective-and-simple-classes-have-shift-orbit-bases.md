---
id: thm-graded-projective-and-simple-classes-have-shift-orbit-bases
kind: theorem
title: "Shift-orbit bases for graded simple and projective classes"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - thm-graded-krull-schmidt-for-finite-dimensional-graded-modules
  - lem-finite-dimensional-graded-algebras-have-graded-projective-covers
  - lem-graded-fitting-decomposition-preserves-homogeneous-summands
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-simple-object
  - def-object-of-finite-length
  - def-composition-series-and-composition-factors-of-an-object
  - lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
  - def-split-grothendieck-group-of-an-additive-category
  - def-free-abelian-group
  - thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
  - def-finitely-generated-graded-projective-module
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2"
      url: "https://arxiv.org/pdf/0909.4844"
pipeline_run: frontier-36-complete
---

## Statement

Let $k$ be a field and $A$ a finite-dimensional unital associative
$\mathbb Z$-graded $k$-algebra. A **graded-simple module** here means a
nonzero finite-dimensional graded left $A$-module whose only graded submodules
are $0$ and itself. Internal shift acts on graded-simple isomorphism classes
by $[S]\mapsto[S\{r\}]$ for $r\in\mathbb Z$. There are finitely many shift
orbits of graded-simple isomorphism classes. For each orbit choose a
representative $S_i$ and a finite graded projective cover
$p_i:P_i\twoheadrightarrow S_i$, whose kernel is superfluous among graded
submodules. Then

$$
\{[S_i]\}_i\text{ is a }\mathbb Z[v,v^{-1}]\text{-basis of }G_0^{\mathrm{gr}}(A), \qquad \{[P_i]\}_i\text{ is a }\mathbb Z[v,v^{-1}]\text{-basis of }K_0^{\mathrm{gr}}(A).
$$

In particular, both modules have the same finite rank, the number of graded
simple shift orbits. If $A=0$, both bases are empty and both groups are zero.
No positivity assumption on the grading of $A$ is made.

## Facts & Assumptions

**Given:** The field $k$, the finite-dimensional unital associative graded algebra $A$, and finite-dimensional graded left $A$-modules. Morphisms preserve degree. No axiom of choice is assumed or used.

[F1] $G_0^{\mathrm{gr}}(A)$ is the short-exact-sequence group of the category of finite-dimensional graded left $A$-modules ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F2] $K_0^{\mathrm{gr}}(A)$ is the split Grothendieck group of finite graded projectives ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F3] The shift action is $v^r[M]=[M\{r\}]$ and $v^r[P]=[P\{r\}]$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F4] In an essentially small abelian category of finite-length objects, the simple-object classes form a free abelian basis of $G_0$ ([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F5] Every finite-dimensional graded module has a finite decomposition into graded-indecomposable summands, unique up to permutation and degree-zero graded isomorphism ([[thm-graded-krull-schmidt-for-finite-dimensional-graded-modules]]).

[F6] Every finite-dimensional graded module has a finite graded projective cover with superfluous kernel, and two covers of the same object are isomorphic over it ([[lem-finite-dimensional-graded-algebras-have-graded-projective-covers]]).

[F7] A degree-zero endomorphism of a finite-dimensional graded-indecomposable module is invertible or nilpotent ([[lem-graded-fitting-decomposition-preserves-homogeneous-summands]]).

[F8] A graded module is finite graded projective exactly when it is a degree-zero summand of a finite direct sum of shifts of $A$; finite sums of such shifts are projective ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[F9] A graded projective object lifts degree-zero maps through degree-zero epimorphisms ([[def-finitely-generated-graded-projective-module]]).

[F10] In $\operatorname{GrMod}_0(A)$, kernels, images, cokernels, finite biproducts and exactness are computed degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[F11] A simple object is nonzero and has no proper nonzero subobject ([[def-simple-object]]).

[F12] An object has finite length when it admits a composition series ([[def-object-of-finite-length]]).

[F13] A composition series is a finite strict chain whose successive quotients are simple ([[def-composition-series-and-composition-factors-of-an-object]]).

[F14] The split Grothendieck group imposes exactly the relations $[P\oplus Q]=[P]+[Q]$ ([[def-split-grothendieck-group-of-an-additive-category]]).

[F15] The free abelian group on a set has its usual universal property ([[def-free-abelian-group]]).

[F16] Internal shift has components $M\{r\}_d=M_{d-r}$ and is invertible, with inverse shift $\{-r\}$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

## Proof

**Proof technique:** direct.

1.1 Every finite-dimensional graded module $M$ has finite length. If $M=0$, the empty chain is a composition series. If $M\ne0$, the dimensions of its proper graded submodules form a nonempty subset of $\{0,1,\ldots,\dim_kM-1\}$; choose a proper graded submodule $N$ of maximal dimension. The quotient $M/N$ is nonzero. Any proper nonzero graded submodule of $M/N$ would lift to a proper graded submodule strictly containing $N$, contrary to maximality, so $M/N$ is simple. Since $\dim_kN<\dim_kM$, induction gives a composition series of $N$; appending $M/N$ gives one for $M$. This uses only a maximum in a finite set of dimensions and one submodule at a time. [F10, F11, F12, F13, given, induction, choose]

1.2 By graded Krull–Schmidt [F5], write the regular graded module as a finite direct sum $A\cong\bigoplus_{j=1}^m Q_j$ of nonzero graded-indecomposable modules; if $A=0$, take $m=0$. Each $Q_j$ is a direct summand of the shifted free module $A\{0\}$, so [F8] makes it a finite graded projective. If $A=0$, every unital left $A$-module is zero, so both groups are zero and the empty bases prove the theorem. Henceforth assume $A\ne0$. [F5, F8, given, cases]

1.3 Let $Q$ be a nonzero finite-dimensional graded-indecomposable projective and $q:Q\twoheadrightarrow S$ a degree-zero epimorphism to a graded-simple module. Put $K=\ker q$. If $N\le Q$ is graded and $K+N=Q$, then $q|_N:N\twoheadrightarrow S$ is epic. Projectivity [F9] lifts $q$ through $q|_N$ to a degree-zero map $g:Q\to N$. After inclusion $N\hookrightarrow Q$, let $f$ be the resulting endomorphism. Then $qf=q$, and induction gives $qf^n=q$ for every $n\ge1$, so $f$ is not nilpotent. By graded Fitting [F7], $f$ is invertible. Since $\operatorname{im}f\subseteq N$, this forces $N=Q$. Thus $K$ is superfluous among graded submodules and $q$ is a finite graded projective cover. [F7, F9, F10, F11, given, algebra]

1.4 Every finite graded projective cover $p:P\twoheadrightarrow S$ of a graded-simple module is indecomposable. Indeed, if $P=U\oplus V$ with both summands nonzero, at least one restriction of $p$ is nonzero and hence surjective; its summand $U$ then satisfies $U+\ker p=P$, contradicting superfluity of $\ker p$. Moreover, $S$ is the unique graded-simple quotient of $P$ up to isomorphism. If $q:P\twoheadrightarrow T$ is another such quotient and $L=\ker q$, a nonzero graded image $q(\ker p)$ must be all of $T$ by simplicity. That would give $L+\ker p=P$, contradicting superfluity. Hence $q(\ker p)=0$, so $q$ factors through $P/\ker p\cong S$; the induced nonzero map $S\to T$ is an isomorphism. [F6, F10, F11, algebra]

1.5 Every finite-dimensional graded module has finite support: if its dimension is $n$ and it had $n+1$ distinct nonzero homogeneous components, one nonzero vector from each would be linearly independent. If $M\ne0$ and $M\cong M\{r\}$ by a degree-zero isomorphism, then $\operatorname{supp}(M)=\operatorname{supp}(M)+r$. Taking the maximum of this finite nonempty set gives $\max\operatorname{supp}(M)= \max\operatorname{supp}(M)+r$, hence $r=0$. Thus the shift action is free on the isomorphism classes of nonzero graded simples and nonzero indecomposable projectives; no lower or upper bound on the grading of $A$ is used. [F16, given, choose, algebra]

1.6 The category of finite-dimensional graded modules is abelian: [F10] makes kernels, cokernels and finite biproducts degreewise, so these objects remain finite-dimensional and the full subcategory inherits the abelian structure. It is essentially small as well. For each finite-support dimension vector on $\mathbb Z$, fix the standard graded $k$-space with those component dimensions; the possible $A$-actions on it form a set of families of linear maps satisfying the module identities. Every finite-dimensional graded module is isomorphic to one of these models by choosing bases for its finitely many nonzero homogeneous components. The family of all such standard models is a set, and this object-by-object argument makes no simultaneous choice across an arbitrary family. [F10, given, construct, algebra]

2.1 By step 1.6, the category of finite-dimensional graded modules is the essentially small abelian category used to define $G_0^{\mathrm{gr}}(A)$ in [F1]. By step 1.1 all its objects have finite length, so [F4] says that its graded-simple isomorphism classes form a $\mathbb Z$-basis of $G_0^{\mathrm{gr}}(A)$. [F1, F4, step 1.1, step 1.6, given]

2.2 If $S$ is graded-simple, take a nonzero homogeneous $s\in S_r$. The graded submodule $As$ is nonzero, hence is $S$. The map $A\{r\}\to S$, $a\mapsto as$, is degree-zero because $1_A$ has degree $r$ in $A\{r\}$ and the action preserves degree; it is surjective. Decomposing $A\{r\}\cong\bigoplus_{j=1}^m Q_j\{r\}$, at least one restriction to a summand is nonzero and therefore surjective onto the simple module $S$. [F10, F11, F16, step 1.2, given, choose, algebra]

3.1 Each $Q_j$ has a graded-simple quotient: a composition series from step 1.1 has a simple final factor. By step 1.3 this quotient map is a projective cover, and by step 1.4 its simple quotient is unique up to isomorphism; denote that isomorphism class by $S_j$. For any graded-simple $S$, step 2.2 gives a surjection from some $Q_j\{r\}$ to $S$. Since shift is invertible [F16], both $Q_j\{r\}$ and $S_j\{r\}$ retain indecomposability and simplicity, respectively; $Q_j\{r\}$ is finite graded projective by [F8]. The shift of the cover $Q_j\twoheadrightarrow S_j$ is a cover of $S_j\{r\}$: [F10] preserves the epimorphism, and shifting back by $\{-r\}$ preserves the superfluity condition. By steps 1.3–1.4, the quotient $S$ is isomorphic to $S_j\{r\}$. Thus the finite list $S_1,\ldots,S_m$ meets every graded-simple shift orbit. [F8, F10, F16, step 1.1, step 1.2, step 1.3, step 1.4, step 2.2, choose]

4.1 Every nonzero finite-dimensional graded-indecomposable projective $Q$ has a graded-simple quotient by step 1.1; step 1.3 makes that quotient map a projective cover. Existence and uniqueness of covers [F6] therefore identify $Q$ with the cover $P(S)$ of its simple quotient. Conversely, step 1.4 shows each $P(S)$ is indecomposable. Shifting a cover gives a cover of the shifted simple, as in step 3.1, so $P(S\{r\})\cong P(S)\{r\}$ by [F6]. If $P(S)\{r\}\cong P(T)$, that projective has simple quotients $S\{r\}$ and $T$; uniqueness from step 1.4 gives $S\{r\}\cong T$. Hence projective indecomposable shift orbits are in bijection with graded-simple shift orbits, and there are finitely many. [F6, F8, F10, F16, step 1.3, step 1.4, step 3.1]

4.2 By steps 2.1 and 3.1, the $\mathbb Z$-basis of $G_0^{\mathrm{gr}}(A)$ is partitioned into finitely many free shift orbits. Choose one simple $S_i$ from each orbit. By [F3], $v^r[S_i]=[S_i\{r\}]$, so the Laurent monomials $v^r$ map bijectively to the distinct $\mathbb Z$-basis classes in that orbit. The orbit spans therefore form a direct sum of copies of $\mathbb Z[v,v^{-1}]$, with basis $[S_i]$. This proves the stated finite Laurent basis for $G_0^{\mathrm{gr}}(A)$. [F1, F3, F4, step 2.1, step 3.1, step 1.5, construct, choose]

5.1 By step 1.6, the set $\mathcal I$ of isomorphism classes of nonzero finite-dimensional graded-indecomposable projectives is a set. By graded Krull–Schmidt [F5], each finite graded projective $P$ has a unique finite decomposition into nonzero graded-indecomposable summands $Q_j$. By [F8], $P$ is a degree-zero summand of a finite sum of shifts of $A$; each $Q_j$, being a summand of $P$, is also a summand of that finite sum by transitivity of direct summands. Thus [F8] makes every $Q_j$ a finite graded projective. Sending $P$ to its multiplicity vector in $\mathcal I$ is additive under direct sum. By the split-group presentation [F14], it descends to a homomorphism $K_0^{\mathrm{gr}}(A)\to\mathbb Z[\mathcal I]$. The map from the free abelian group [F15] sending each basis vector to its projective class is inverse: one composite fixes each indecomposable basis vector, while the other sends $[P]$ to the sum of its indecomposable classes, which equals $[P]$ by the split relation. Thus $\mathcal I$ is a $\mathbb Z$-basis of $K_0^{\mathrm{gr}}(A)$. By steps 4.1 and 1.5, this basis is partitioned into finitely many free shift orbits represented by the covers $P_i$ of the chosen $S_i$. Using [F3] as in step 4.2 shows that $[P_i]$ is a finite $\mathbb Z[v,v^{-1}]$-basis of $K_0^{\mathrm{gr}}(A)$. The cover classes are unique up to isomorphism by [F6], so the result is independent of the chosen covers. [F1, F2, F3, F5, F6, F8, F14, F15, step 1.5, step 1.6, step 4.1, construct] ∎

## Remark

Kleshchev, §2.2, PDF p. 6 (printed p. 7), uses the same positive-shift and homogeneous-map convention. His §2.1 assumes an algebraically closed field; that stronger hypothesis and his ungraded-to-graded simple classification are not used here. The orbit and projective-cover arguments above are proved locally under the stated field hypothesis.

---
id: lem-coherent-shift-functors-and-transformations-form-hom-categories
kind: lemma
title: Coherently shift-compatible functors and transformations form k-linear hom categories
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-coherently-shift-compatible-functor-and-natural-transformation, lem-internal-shift-endofunctors-and-tensor-compatibility, lem-graded-degreewise-direct-sums-and-homogeneous-free-covers, def-natural-transformation, def-natural-isomorphism, def-vertical-composition-of-natural-transformations, def-horizontal-composition-and-whiskering-of-natural-transformations, def-functor-category, def-category, def-k-linear-category-and-k-linear-functor, def-vector-space, def-field, lem-field-is-a-commutative-ring, def-preservation-reflection-creation-continuity-and-cocontinuity, def-left-exact-and-right-exact-functor, thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms, def-strict-two-category, thm-interchange-law-for-natural-transformations, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem (arXiv:1612.04561v3), Introduction (classical unital-ring statement) and §2.1 Lemma 2.1"
      url: "https://arxiv.org/pdf/1612.04561v3"
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, printed pp.47-57 (Proposition 5.1.40, Theorem 5.1.43, Lemma 5.1.46, Corollary 5.1.48)"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "Stacks Project, Categories, Remark 4.2.16 (large-source functor size obstruction) and Lemma 4.28.2 (composition identities)"
      url: "https://stacks.math.columbia.edu/tag/0013"
    - title: "Stacks Project, Categories, §4.28, Lemma 4.28.2"
      url: "https://stacks.math.columbia.edu/tag/003D"
---

## Statement

Let $k$ be a field and $A,B,C$ graded $k$-algebras.

1. The identity functor of $\operatorname{GrMod}_0(A)$ is coherently shift-compatible with
$\theta_{X,r}:=1_{X\{r\}}$ under the canonical identifications; for coherently shift-compatible
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ and
$G:\operatorname{GrMod}_0(B)\to\operatorname{GrMod}_0(C)$ the composite $GF$ carries the composite
comparison
$$\theta^{GF}_{X,r}:=\theta^G_{F(X),r}\circ G(\theta^F_{X,r}),$$
read through the identifications $(GF)(X\{r\})=G(F(X\{r\}))$ and
$G(F(X)\{r\})\xrightarrow{\theta^G_{F(X),r}}(GF)(X)\{r\}$, and its cocycle follows by substituting the cocycles of $\theta^F$ and
$\theta^G$; the vertical composite of coherent transformations is coherent.

2. For coherently shift-compatible $F,G:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ the
coherent transformations $F\Rightarrow G$ form a subgroup of all natural transformations closed
under the pointwise $k$-action, vertical composition is $k$-bilinear, and horizontal composition satisfies the interchange law. These operations are understood
metatheoretically for arbitrary large-source functors, as in [[def-functor-category]]; no
set-sized hom-space for arbitrary additive coherent functors is asserted. Right
exactness and coproduct preservation are stable under composition, and the identity functor has both
properties, so the full sub-class $\mathrm{CohFun}(A,B)$ of $k$-linear right exact coproduct-preserving
coherent functors is closed under composition and contains identities; its coherent transformations
carry the formal 2-cell operations above.

3. (Local smallness.) If $F,G$ are $k$-linear, right exact and coproduct preserving, then the map
$\eta\mapsto\eta_A$ from coherent transformations $F\Rightarrow G$ into
$\operatorname{Hom}_B(F(A),G(A))$ is injective. For each fixed pair of definable functors and
supplied comparisons, the components that extend to coherent transformations form a definable
subset of this set; it is a $k$-vector space under pointwise operations.

4. (Hom-categories and strict realization in ZFC.) Fix a definable class $J$ of set parameters,
with uniformly definable assignments $p\mapsto(A_p,B_p,F_p,\theta^p)$ specifying $k$-linear
right exact coproduct-preserving coherent functors $F_p:\operatorname{GrMod}_0(A_p)\to
\operatorname{GrMod}_0(B_p)$. Here uniform definability means fixed formulas, with fixed set
parameters, for the endpoint algebras, object and morphism assignments, and comparisons; it does
not mean a variable formula with a truth predicate. Let $\mathrm{CohFun}_J(A,B)$ have as objects
finite composable words in the labels $p$, tagged with endpoints $A,B$, interpreted as the
corresponding composite coherent functors; the empty word at $A$ represents the identity.
Its morphisms are the coherent transformations between the interpreted functors, coded by
their components at $A$ and tagged with their source and target words. These are locally small
$k$-linear categories, and word concatenation with horizontal composition gives a strict
2-category on graded $k$-algebras in the sense of [[def-strict-two-category]].
Any finite collection of supplied definable coherent functors can be included among the
generators using finitely many fixed formulas. Thus all the preceding formulas remain valid
for arbitrary supplied functors. Without a specified uniform coding, $\mathrm{CohFun}(A,B)$
denotes only the metatheoretic collection of [[def-functor-category]], rather than a category
whose objects are proper-class-sized functor graphs. No universe axiom or choice is used.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B,C,D$, coherent functors and coherent transformations with the sources and targets specified in each clause; for local smallness, $F,G\in\mathrm{CohFun}(A,B)$ and coherent $\kappa,\kappa\prime:F\Rightarrow G$; for the strict realization, the uniformly definable family indexed by $J$ specified in clause 4.

[L1] Coherently shift-compatible functors carry natural degree-zero isomorphisms $\theta_{X,r}:F(X\{r\})\to F(X)\{r\}$ with $\theta_{X,0}=1$ and the cocycle, coherent transformations satisfy the equivariance square $\theta^G_{X,r}\eta_{X\{r\}}=(\eta_X\{r\})\theta^F_{X,r}$, and $\mathrm{CohFun}(A,B)$ denotes the $k$-linear right exact coproduct-preserving members ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L2] The internal shift is a strict autoequivalence with $\{0\}=\mathrm{id}$, $\{r\}\{s\}=\{r+s\}$, acting as the identity on underlying sets, and it preserves degreewise coproducts, kernels and cokernels ([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

[L3] Every graded module $X$ has a canonical homogeneous free cover, the unique degree-zero $A$-linear epimorphism $q_X:P_X\to X$ with $P_X=\bigoplus_{x\in H_X}A\{\deg x\}$ and $q_X(e_x)=x$, where $H_X$ is the set of nonzero homogeneous elements; the canonical map $d_X:P_{K_X}\to P_X$ has image $K_X=\ker q_X$ ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

[L4] A natural transformation $\alpha:F\Rightarrow G$ is a family of components with $Gf\circ\alpha_X=\alpha_Y\circ Ff$ for every $f:X\to Y$, and the componentwise sum, scalar multiple and composite of natural transformations are natural ([[def-natural-transformation]]).

[L5] A natural isomorphism is a natural transformation with a two-sided inverse; the functor-category interpretation requires a small source ([[def-natural-isomorphism]]).

[L6] The identity transformation $1_F$ has components $1_{FX}$ and the vertical composite is componentwise, $(\beta\circ\alpha)_X=\beta_X\circ\alpha_X$ ([[def-vertical-composition-of-natural-transformations]]).

[L7] The horizontal composite $\beta*\alpha$ has components $\beta_{GA}\circ H(\alpha_A)$ and the whiskerings $H\alpha$ and $\alpha K$ have components $H(\alpha_A)$ and $\alpha_{KB}$ ([[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

[L8] For a small source the functor category has functors as objects and natural transformations as morphisms with vertical composition; for a large source the notation is metatheoretic shorthand ([[def-functor-category]]).

[L9] A category has definable classes of set objects and set morphisms, with identities and associative composition; class functions are fixed definable schemas, and morphisms carry source and target tags ([[def-category]]).

[L10] A $k$-linear category has $k$-vector spaces of morphisms with $k$-bilinear composition, and a functor is $k$-linear when each induced map of hom-spaces is $k$-linear ([[def-k-linear-category-and-k-linear-functor]]).

[L11] A vector space over a field has an abelian group structure with additive maps pointwise and scalar action, and its homomorphisms inherit these operations pointwise ([[def-vector-space]]).

[L14] A functor preserves $\mathcal J$-colimits when images of colimiting cocones are colimiting, and it is cocontinuous when it preserves all small colimits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L15] A functor is right exact when it preserves every finite colimit existing in its source ([[def-left-exact-and-right-exact-functor]]).

[L16] A right exact functor between abelian categories preserves epimorphisms ([[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]).

[L17] A strict 2-category has a class of objects, hom-categories, identity 1-morphisms and horizontal-composition functors that are associative and unital as literal equalities, and the interchange law follows from functoriality of horizontal composition ([[def-strict-two-category]]).

[L18] Horizontal and vertical composition satisfy the interchange law $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ ([[thm-interchange-law-for-natural-transformations]]).

[L19] Graded modules, degree-zero maps and the internal shift are the conventions of the graded bimodule page, and a module homomorphism is a function respecting the addition and scalar action ([[def-graded-ring-module-bimodule-and-internal-shift]]).

## Proof

**Proof technique:** direct.

1.1 The identity functor $1$ of $\operatorname{GrMod}_0(A)$ with $\theta_{X,r}:=1_{X\{r\}}:1(X\{r\})=X\{r\}\to X\{r\}=1(X)\{r\}$ is coherently shift-compatible: each $\theta_{X,r}$ is a natural degree-zero $A$-linear isomorphism (it is an identity), $\theta_{X,0}=1_{X}$ because $X\{0\}=X$, and $(\theta_{X,r}\{s\})\circ\theta_{X\{r\},s}=1_{X\{r\}\{s\}}=1_{X\{r+s\}}=\theta_{X,r+s}$ by the strict shift identities. [L1, L2, L6]

1.2 Given coherent $F$ and $G$, the composite comparison $\theta^{GF}_{X,r}:=\theta^G_{F(X),r}\circ G(\theta^F_{X,r})$ is a composite of natural degree-zero isomorphisms and hence a natural degree-zero $C$-linear isomorphism $(GF)(X\{r\})\to(GF)(X)\{r\}$; its unit is $\theta^G_{F(X),0}\circ G(\theta^F_{X,0})=1\circ G(1)=1$, and its cocycle follows by expanding $\theta^{GF}_{X,r+s}=\theta^G_{F(X),r+s}\circ G(\theta^F_{X,r+s})$, rewriting the inner factor with the cocycle of $\theta^F$, applying the functor $G$, substituting the naturality of $\theta^G$ at the morphism $\theta^F_{X,r}$ with parameter $s$, and finally the cocycle of $\theta^G$ at $F(X)$; the comparisons are strictly associative and unital, $\theta^{(HG)F}=\theta^{H(GF)}$ and $\theta^{1\circ F}=\theta^{F}=\theta^{F\circ 1}$, because both sides are the same composites of $\theta^H$, $H(\theta^G)$ and $H(G(\theta^F))$ and $H$ preserves composition and identities. [L1, L2, L4, L5, L7, algebra]

1.3 If $\eta:F\Rightarrow G$ and $\nu:G\Rightarrow H$ are coherent, then $\nu\circ\eta$ is natural and $\theta^H_{X,r}(\nu\circ\eta)_{X\{r\}}=\theta^H_{X,r}\nu_{X\{r\}}\eta_{X\{r\}}=(\nu_X\{r\})\theta^G_{X,r}\eta_{X\{r\}}=(\nu_X\{r\})(\eta_X\{r\})\theta^F_{X,r}=((\nu\circ\eta)_X\{r\})\theta^F_{X,r}$ by the coherence of $\nu$ and $\eta$, so $\nu\circ\eta$ is coherent; the identity transformations are coherent by the condition (i) of the definition. [L1, L4, L6]

1.4 For coherent $\eta,\eta':F\Rightarrow G$ and $\lambda\in k$, the pointwise sum $\eta+\eta'$ and scalar multiple $\lambda\eta$ are natural transformations, and they satisfy the equivariance square because both sides are additive in the component: $\theta^G_{X,r}(\eta+\eta')_{X\{r\}}=\theta^G_{X,r}\eta_{X\{r\}}+\theta^G_{X,r}\eta'_{X\{r\}}=(\eta_X\{r\})\theta^F_{X,r}+(\eta'_X\{r\})\theta^F_{X,r}=((\eta+\eta')_X\{r\})\theta^F_{X,r}$, and likewise $\theta^G_{X,r}(\lambda\eta)_{X\{r\}}=\lambda\theta^G_{X,r}\eta_{X\{r\}}=(\lambda\eta_X\{r\})\theta^F_{X,r}$; the zero transformation is coherent and $-\eta=(-1)\eta$, so the coherent transformations $F\Rightarrow G$ form a subgroup of all natural transformations closed under the pointwise $k$-action. [L1, L4, L6, L10, L11]

1.5 Let $F,G$ be $k$-linear, right exact and coproduct preserving, and let $\kappa,\kappa':F\Rightarrow G$ be coherent with $\kappa_{P_X}=\kappa'_{P_X}$ for every graded module $X$. For each $X$ the cover $q_X:P_X\to X$ of [L3] is an epimorphism, hence $F(q_X)$ and $G(q_X)$ are epimorphisms because right exact functors preserve epimorphisms [L16]; naturality gives $\kappa_X F(q_X)=G(q_X)\kappa_{P_X}=G(q_X)\kappa'_{P_X}=\kappa'_X F(q_X)$, and cancelling the epimorphism $F(q_X)$ gives $\kappa_X=\kappa'_X$; since $X$ was arbitrary, $\kappa=\kappa'$. [L3, L4, L14, L15, L16]

2.1 If $\kappa,\kappa':F\Rightarrow G$ agree on every component at a shifted regular module $A\{d\}$, they agree on every $P_X$: writing $P_X=\bigoplus_{x\in H_X}A\{\deg x\}$ with coordinate inclusions $\jmath_x$ [L3], the modules $F(A\{\deg x\})$ with the maps $F(\jmath_x)$ present $F(P_X)$ as a coproduct, so a morphism out of $F(P_X)$ is determined by its composites with all $F(\jmath_x)$; naturality of $\kappa,\kappa'$ at $\jmath_x$ gives $\kappa_{P_X}F(\jmath_x)=G(\jmath_x)\kappa_{A\{\deg x\}}$ and the same with $\kappa'$, and the right sides agree, so $\kappa_{P_X}=\kappa'_{P_X}$; with step 1.5, $\kappa,\kappa'$ then agree everywhere. [step 1.5, L3, L4, L14]

2.2 Vertical composition is associative and unital with the identity transformations of step 1.3 as identities. The pointwise operations of step 1.4 satisfy the vector-space identities componentwise, and vertical composition is $k$-bilinear because composition in $\operatorname{GrMod}_0(B)$ is $k$-bilinear. For arbitrary large-source coherent functors these are operations on metatheoretic hom-collections; the set-sized hom-spaces of $\mathrm{CohFun}$ are established below. [step 1.3, step 1.4, L6, L8, L10, L11]

2.3 For coherent $\eta:F\Rightarrow F'$ and $\nu:G\Rightarrow G'$ the horizontal composite $\nu*\eta$ has components $\nu_{F'(X)}\circ G(\eta_X)$ [L7] and is coherent: substituting the naturality of $\nu$ at the morphism $\theta^{F'}_{X,r}$, the coherence of $\eta$ under the functor $G$, the naturality of $\theta^G$ at $\eta_X$ with parameter $r$, and the coherence of $\nu$ at the object $F'(X)$ turns $\theta^{G'F'}_{X,r}(\nu*\eta)_{X\{r\}}$ into $((\nu*\eta)_X\{r\})\theta^{GF}_{X,r}$; horizontal composition preserves identity 2-cells and satisfies the interchange law [L18]. These are componentwise identities for supplied functors, before any category of functor objects is formed. [step 1.1, step 1.2, step 1.4, L1, L7, L18, algebra]

2.4 The identity functor of $\operatorname{GrMod}_0(A)$ is $k$-linear and preserves all colimits, hence is right exact and coproduct preserving, and it is coherent by step 1.1; the composite of two $k$-linear right exact coproduct-preserving coherent functors is $k$-linear, right exact and coproduct preserving (each factor preserves the same colimits) and coherent by step 1.2; hence $\mathrm{CohFun}$ is closed under composition and contains the identity functors. [step 1.1, step 1.2, L10, L14, L15]

3.1 If $\kappa_A=\kappa'_A$ for coherent $\kappa,\kappa':F\Rightarrow G$, then for every $d$ the equivariance squares at $A$ give $\theta^G_{A,d}\kappa_{A\{d\}}=(\kappa_A\{d\})\theta^F_{A,d}=(\kappa'_A\{d\})\theta^F_{A,d}=\theta^G_{A,d}\kappa'_{A\{d\}}$, and $\theta^G_{A,d}$ is an isomorphism, so $\kappa_{A\{d\}}=\kappa'_{A\{d\}}$; by step 2.1 the two transformations agree everywhere. [step 2.1, L1, L5, L2]

3.2 For the family in clause 4, a word $w=(p_1,\ldots,p_n)$ with $B_{p_i}=A_{p_{i+1}}$ represents $F_w=F_{p_n}\cdots F_{p_1}$ with the iterated comparisons of step 1.2. Evaluation of a finite word on any object, morphism or comparison is uniformly definable by a finite sequence of intermediate values. Empty words, tagged with their algebra, represent identities. All words are sets and form a definable class, and concatenation is literally associative and unital; its interpretation is composition of coherent functors by steps 1.1, 1.2 and 2.4. Different words representing the same functor may remain different objects. [given, step 1.1, step 1.2, step 2.4, L9]

4.1 To define the transformation codes without quantifying over classes, fix $t\in\operatorname{Hom}_B(F(A),G(A))$ and put $t_d=(\theta^G_{A,d})^{-1}(t\{d\})\theta^F_{A,d}$. For each $X$, coproduct preservation defines a unique $t_{P_X}:F(P_X)\to G(P_X)$ by $t_{P_X}F(\jmath_x)=G(\jmath_x)t_{\deg x}$. Write $d_X:P_{K_X}\to P_X$ for the canonical presentation map. The map $q_X$ is a cokernel of $d_X$: a degree-zero map vanishing on its image $\ker q_X$ factors uniquely along the surjection $q_X$, preserving action and degree. Hence $F(q_X)$ is a cokernel of $F(d_X)$. Whenever $G(q_X)t_{P_X}F(d_X)=0$, there is a unique degree-zero $B$-linear $t_X$ with $t_XF(q_X)=G(q_X)t_{P_X}$. Require this vanishing for every $X$, require $t_A=t$, and require the resulting $t_X$ to satisfy naturality for every degree-zero map and the coherence square for every $X,r$. These are first-order conditions on sets, using the fixed defining formulas of $F,G,\theta^F,\theta^G$; separation therefore gives a set $H(F,G)$ of such $t$. Each code gives a definable coherent transformation. Conversely any supplied coherent transformation with component $t$ has these $t_d,t_{P_X},t_X$ by coherence, coproduct naturality and naturality at $q_X$, so its code lies in $H(F,G)$ and reconstruction recovers it. Evaluation and reconstruction are inverse by step 3.1. [step 3.1, L1, L3, L4, L14, L15, L19, construct]

5.1 For words $w,v:A\to B$, apply step 4.1 to $F_w,F_v$. Its predicates are uniform in $w,v$ by step 3.2, so triples $(w,v,t)$ with $t\in H(F_w,F_v)$ form a definable class of set morphisms with source $w$ and target $v$. The identity code is $1_{F_w(A)}$; vertical composition is composition of the component codes. Reconstruction identifies these operations with those of steps 1.3 and 2.2, so they satisfy the category laws. Pointwise sums and scalar multiples give $k$-vector spaces $H(F_w,F_v)$, and vertical composition is $k$-bilinear. Thus $\mathrm{CohFun}_J(A,B)$ is an actual locally small $k$-linear category. [step 1.3, step 2.2, step 3.2, step 4.1, L6, L9, L10, L11]

6.1 On words, horizontal composition is concatenation. On transformation codes it is the component at $A$ of the horizontal composite reconstructed in step 4.1, namely $\nu_{F_{w'}(A)}F_u(\eta_A)$ for $\eta:F_w\Rightarrow F_{w'}$ and $\nu:F_u\Rightarrow F_{u'}$. This is uniformly definable and is again a valid code by step 2.3. Interchange makes it a functor on the hom-categories of step 5.1. For three transformations, expanding either horizontal bracketing gives the same components by functoriality of the outer functor and associativity of module-map composition; the empty words and their identity transformations are strict units. The comparison identities are those of step 1.2, and code injectivity turns all componentwise equalities into literal equalities. Thus these hom-categories and operations give the asserted strict 2-category. For any finite list of supplied definable functors, combine their defining formulas by a finite case distinction on labels to obtain a family $J$ containing them. No quantification over arbitrary formulas or proper-class graphs is used, and all reconstruction maps are unique, so no choice or universe axiom is required. [step 1.2, step 2.3, step 3.2, step 4.1, step 5.1, L7, L8, L17, L18] ∎

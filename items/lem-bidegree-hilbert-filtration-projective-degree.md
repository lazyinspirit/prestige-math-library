---
dependency_level: 0
id: lem-bidegree-hilbert-filtration-projective-degree
kind: lemma
title: Positive bidegree filtrations and their projective degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- cor-segre-veronese-embedding
- thm-hilbert-polynomial-coherent-sheaf
- thm-hilbert-polynomial-degree-support-dimension
- thm-serre-vanishing
- lem-euler-characteristic-additive-short-exact
- thm-classical-affine-nullstellensatz-correspondence
- lem-noetherian-space-has-finitely-many-irreducible-components
- thm-affine-domain-dimension-transcendence-degree
proof_strategy: direct
sources:
  references:
  - title: Damien Roy, ChapterVIII in Waldschmidt, Linear Independence of Logarithms
      of Algebraic Numbers, IMSc Report116, 1992
    url: https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1
  - title: The Stacks Project, Cohomology of Schemes, Hilbert polynomials and Serre
      vanishing
    url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed, let $d_0,d_1\ge0$, and let $a,b$ be positive integers. For a nonempty locally closed algebraic subset $E\subseteq k^{d_0}\times k^{d_1}$, let $H_E(u,v)$ be the dimension of the space of functions on $E$ obtained by restricting polynomials of total degree at most $u$ in the first coordinates and at most $v$ in the second coordinates. The function $t\mapsto H_E(at,bt)$ agrees for all sufficiently large integers $t$ with a polynomial of degree $n=\dim E$ and positive leading coefficient. Define $\deg_{a,b}E$ to be $n!$ times that coefficient; set $\deg_{a,b}\varnothing=0$.

This degree is the ordinary degree of the projective closure of $E$ in the Segre–Veronese embedding of bidegree $(a,b)$. It is the sum of the degrees of the $n$-dimensional irreducible components of $E$. Consequently an equal-dimensional closed subset has no larger degree. For $G=k^{d_0}\times(k^*)^{d_1}$ and $g\in G$, translation in its additive-multiplicative group law preserves this degree. Moreover

$$\deg_{a,b}G=\binom{d_0+d_1}{d_0}a^{d_0}b^{d_1}.$$

For nonempty algebraic $E_0\subseteq k^{d_0}$ and $E_1\subseteq k^{d_1}$ of dimensions $n_0,n_1$, one has

$$\deg_{a,b}(E_0\times E_1)=\binom{n_0+n_1}{n_0}a^{n_0}b^{n_1}\deg(E_0)\deg(E_1),$$

where the ordinary degrees on the right use the standard affine projective closures. Finite reduced sets have degree equal to their cardinality.

## Statement references

[Waldschmidt–Roy, ChapterVIII §1, Hilbert–Samuel degree conventions](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** AC, the algebraically closed field, coordinate decomposition, positive degree parameters and algebraic sets in the Statement.

[A1] Choice is inherited from the projective Hilbert and Nullstellensatz suppliers. ([[def-axiom-of-choice]])

[F1] The Segre–Veronese map of any positive bidegree is a closed embedding of the product of projective spaces. ([[cor-segre-veronese-embedding]])

[F2] Coherent sheaves on a projective scheme have an Euler-characteristic Hilbert polynomial, agreeing with the dimension of global sections for all sufficiently large twists; its degree is the support dimension. Serre vanishing applies to any coherent ideal sheaf. ([[thm-hilbert-polynomial-coherent-sheaf]], [[thm-hilbert-polynomial-degree-support-dimension]], [[thm-serre-vanishing]])

[F3] Euler characteristic is additive on short exact sequences. ([[lem-euler-characteristic-additive-short-exact]])

[F4] Radical coordinate ideals describe reduced algebraic sets, and Noetherian algebraic spaces have finitely many irreducible components. Dimension of an irreducible affine variety is the transcendence degree of its coordinate fraction field. ([[thm-classical-affine-nullstellensatz-correspondence]], [[lem-noetherian-space-has-finitely-many-irreducible-components]], [[thm-affine-domain-dimension-transcendence-degree]])

## Proof

1.1 Embed the two affine factors by $x\mapsto[1:x]$ and $y\mapsto[1:y]$, and apply [F1]. On the chart whose constant monomial is nonzero, the resulting affine coordinates are all monomials of bidegree at most $(a,b)$, including $1$ and every individual coordinate. Thus this chart is a closed monomial graph isomorphic to the original affine space. Let $X$ be the reduced projective closure of $E$ in this embedding. The homogeneous degree-$t$ coordinate forms restricted to $E$ span exactly the bounded-bidegree functions of bounds $(at,bt)$: products of $t$ such monomials have those bounds, and every monomial with those bounds can be split into $t$ factors of bounds $(a,b)$ by distributing the first and second coordinate exponents separately among $t$ boxes of capacities $a$ and $b$. Homogeneous forms vanishing on $E$ vanish on $X$ by density, so $H_E(at,bt)$ is exactly the dimension of the degree-$t$ homogeneous coordinate quotient of $X$. [given, A1, F1, F4, algebra]

2.1 The ideal sequence $0\to\mathcal I_X(t)\to\mathcal O_{\mathbb P^N}(t)\to\mathcal O_X(t)\to0$ and [F2] give surjectivity from ambient forms onto $H^0(X,\mathcal O_X(t))$ for all sufficiently large $t$, since $H^1(\mathbb P^N,\mathcal I_X(t))=0$. Consequently the function in step1.1 agrees eventually with the Hilbert polynomial of $\mathcal O_X$. The open dense locally closed subset $E$ has the same dimension as its closure: on affine irreducible charts, deleting a proper closed subset preserves the fraction field, hence dimension by [F4]; finite components give the general case. Its polynomial therefore has degree $n$. Its leading coefficient is positive, since its eventually equal nonnegative global-section dimensions cannot have negative leading coefficient and it has exact degree $n$ by [F2]. This proves existence of the degree and its identification with projective degree. The same argument shows that the leading coefficient of a coherent sheaf's Hilbert polynomial is positive whenever the sheaf is nonzero. [step 1.1, F2, F4, algebra]

3.1 Let $X_1,\ldots,X_s$ be the distinct irreducible components of $X$. The map $\mathcal O_X\to\bigoplus_i\mathcal O_{X_i}$ is injective, since the reduced coordinate ideals have intersection zero. Its cokernel is supported where components meet: at a point lying on only one component it is an isomorphism on stalks. Such intersections have dimension strictly below any maximal dimension $n$ in which they occur, since proper irreducible closed inclusions lower affine transcendence degree by [F4]. Lower-dimensional components and this cokernel therefore have Hilbert polynomial degree less than $n$. Additivity [F3] proves that the degree of $X$ is the sum of its $n$-dimensional component degrees. The components of $E$ correspond by closure to those of $X$. If $E'\subseteq E$ is closed with the same dimension, each of its top-dimensional irreducible components equals one of those of $E$: it is contained in one and cannot be a proper equal-dimensional closed subset. Positivity then gives the asserted degree inequality. [step 2.1, F2, F3, F4, algebra]

3.2 Translation by $g$ in $G$ adds constants to the first coordinates and multiplies the second coordinates by fixed nonzero scalars. Pullback of polynomials therefore preserves every bounded-bidegree filtration, in both directions using $-g$. Their restriction dimensions and hence degrees agree. No nonzero polynomial vanishes on $G$, since the torus is dense in affine space; this also follows by induction on variables over the infinite field. Thus $H_G(u,v)=\binom{u+d_0}{d_0}\binom{v+d_1}{d_1}$. Substitution $(u,v)=(at,bt)$ gives leading coefficient $a^{d_0}b^{d_1}/(d_0!d_1!)$, proving the displayed ambient formula. [given, step 2.1, algebra]

4.1 For the product formula, choose bases $f_i$ and $g_j$ for the finite-dimensional restriction spaces on $E_0$ and $E_1$. Their products span the restriction space on the product. They are independent: evaluations on each set span the dual of its restriction space, because a function annihilated by all evaluations is zero; choose finitely many evaluations forming a dual basis. Applying their tensor products to a relation among $f_ig_j$ makes every coefficient vanish. Hence $H_{E_0\times E_1}(u,v)=H_{E_0}(u)H_{E_1}(v)$. The ordinary one-parameter case of steps 1.1–2.1 gives polynomial degrees $n_0,n_1$ with leading coefficients $\deg(E_i)/n_i!$. Multiplying those polynomials yields both the dimension sum and the stated binomial degree formula. Finally, on a finite reduced set, polynomial functions separate its points: for each distinct pair choose a coordinate differing on that pair and form the finite Lagrange products. All functions therefore occur in a sufficiently large filtration, whose constant dimension is the cardinality. Empty sets and zero-dimensional coordinate factors follow from the conventions. [step 2.1, step 3.1, algebra] ∎

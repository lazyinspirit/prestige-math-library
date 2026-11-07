---
id: thm-relative-first-etale-betti-comparison-for-abelian-schemes
kind: theorem
title: Relative first étale–Betti comparison for complex abelian schemes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- thm-classification-of-connected-covering-spaces
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- thm-rational-riemann-form-makes-complex-torus-projective
- thm-projectively-embedded-complex-torus-has-an-abelian-variety-model
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
- lem-av7-finite-morphism-projective-over-projective-base
- lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set
- cor-segre-veronese-embedding
- cor-quasi-finite-locus-open-finite-type-algebra
- thm-proper-quasi-finite-is-finite
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-finite-birational-to-normal-is-isomorphism
- thm-jacobian-criterion-smooth-morphism
- thm-holomorphic-implicit-function-theorem
- thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
- def-axiom-of-choice
- def-dependent-choice
- lem-arbitrary-henselian-proper-fp-sections-and-finite-etale-restriction
- lem-etale-specialization-proper-geometric-finite-etale-invariance
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-multiplication-by-n-on-abelian-scheme
- thm-effective-fpqc-descent-of-finite-etale-covers
- lem-finite-etale-galois-refinements-and-quotients
- lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-fundamental-theorem-for-nonautonomous-smooth-odes
- thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $\pi:A\to S$ be a projective abelian scheme over a smooth connected complex algebraic variety, and let $n\ge1$. For $G=\mathbb Z/n\mathbb Z$, the canonical pushout of the multiplication-by-$n$ torsor induces an isomorphism of étale sheaves
$$\underline{\operatorname{Hom}}_S(A[n],G)\xrightarrow{\sim}R^1\pi_*G.$$
After analytification this identifies the finite local system $(R^1\pi_*G)^{\mathrm{an}}$ with the topological local system $R^1\pi^{\mathrm{an}}_*G$. It is natural in abelian schemes and compatible with changing $n$ to a divisor; the étale sheaf construction commutes with arbitrary algebraic base change. No higher-degree or de Rham comparison is asserted.

## Facts & Assumptions

**Given:** AC, DC, the smooth complex base, projective abelian scheme and positive integer $n$ in the Statement.

[F1] A complex abelian variety is a torus with universal covering vector space and full lattice, functorially in homomorphisms; connected covers of a locally simply connected space are classified by subgroups of its fundamental group ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[thm-classification-of-connected-covering-spaces]]).

[F2] An ample line bundle on a smooth projective complex variety gives a positive closed real $(1,1)$ form whose de Rham class is integral; a positive rational Riemann form makes a complex torus projective and a projectively embedded torus has an abelian-variety model ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[thm-rational-riemann-form-makes-complex-torus-projective]], [[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]]).

[F3] Holomorphic group homomorphisms of complex abelian varieties are algebraic; a finite map to a projective base has projective source ([[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]], [[lem-av7-finite-morphism-projective-over-projective-base]]).

[F4] The reduced projective closure of a compact connected holomorphically embedded projective manifold is integral and has exactly its complex point set; Segre embeddings make projective products projective ([[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]], [[cor-segre-veronese-embedding]]).

[F5] The quasi-finite locus is open, proper quasi-finite maps are finite, finite separable extensions are simple, and finite birational maps to normal integral schemes are isomorphisms ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]], [[lem-finite-birational-to-normal-is-isomorphism]]).

[F6] The holomorphic implicit function theorem and algebraic Jacobian criterion identify local analytic and algebraic étale behaviour; finite étale covers of a connected scheme are classified by finite continuous actions of its étale fundamental group ([[thm-holomorphic-implicit-function-theorem]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]).

[F7] For a proper finitely presented scheme over a henselian local ring, finite-constant étale $H^1$ is invariant under restriction to the closed fibre; étale cohomology of qcqs inverse limits with affine transition maps has finite-stage witnesses ([[lem-arbitrary-henselian-proper-fp-sections-and-finite-etale-restriction]], [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]).

[F8] Multiplication by an invertible integer on an abelian scheme has a finite étale kernel of the expected rank, and finite étale covers and their finite group quotients are classified by finite fundamental-group sets, and finite étale covers descend effectively along fpqc covers ([[lem-multiplication-by-n-on-abelian-scheme]], [[lem-finite-etale-galois-refinements-and-quotients]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]], [[thm-effective-fpqc-descent-of-finite-etale-covers]]).

[F9] Smooth projective families have integral cohomology local systems; local analytic coordinates, smooth partitions of unity and ODE existence with smooth parameter dependence are available ([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]], [[thm-holomorphic-implicit-function-theorem]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F10] Finite étale covers of a smooth proper variety are invariant under extension of algebraically closed fields ([[lem-etale-specialization-proper-geometric-finite-etale-invariance]]).

## Proof

**Proof technique:** prove fibrewise finite-cover comparison, identify multiplication torsors at henselian stalks, and compare torsion with the topological period local system.

1.1 Fix a geometric fibre and write it temporarily as $A$. By [F1], $A^{\mathrm{an}}=V/\Lambda$ with $V$ contractible. Every connected finite topological cover is the quotient $V/H\to V/\Lambda$ for a finite-index subgroup $H\subseteq\Lambda$, by [F1]. To algebraize it, use [F2] to choose a positive closed $(1,1)$ form $\omega$ on $A^{\mathrm{an}}$ whose cohomology class is integral. Average its translates over the compact real torus $V/\Lambda$, using normalized Lebesgue measure on a fundamental parallelepiped. The average $\bar\omega$ is translation-invariant, positive, closed and of type $(1,1)$. Each translation is smoothly homotopic to the identity, so $[\bar\omega]=[\omega]$. The invariant form is a constant alternating form $\psi$ on $V_\mathbb R$; its values on lattice pairs are the integral periods of $[\omega]$ on the corresponding two-dimensional subtori, so $\psi(\Lambda,\Lambda)\subseteq\mathbb Z$. Positivity gives $\psi(Jv,Jw)=\psi(v,w)$ and $\psi(v,Jv)>0$. Its restriction to $H$ is an integral positive Riemann form. [F1, F2, given, choose, construct, algebra]

1.2 Let $Y\to A$ be a connected finite étale cover. It is smooth and projective by [F3]. Its analytification is a finite topological cover by the local implicit theorem in [F6] and properness. It is connected: otherwise its compact analytic connected components are finitely many disjoint projectively embedded complex manifolds. By [F4], each is the complete complex point set of a closed algebraic subvariety. These disjoint closed subvarieties cover every complex point of reduced $Y$, hence cover $Y$ scheme-theoretically; more than one would contradict connectedness. The same reasoning applies componentwise to an arbitrary finite étale cover. [F3, F4, F6, given, construct, algebra]

1.3 Let $G=\mathbb Z/n\mathbb Z$ and let $\pi:A\to S$ again denote the given family. By [F8], the kernel $A[n]$ is a finite étale group scheme and $[n]:A\to A$ is an $A[n]$-torsor. The sheaf $\mathcal H=\underline{\operatorname{Hom}}_S(A[n],G)$ is finite locally constant: after a finite étale cover trivializing $A[n]$, it is a finite constant set of group homomorphisms, and [F8] descends the associated finite action. For $\chi\in\mathcal H(T)$, push out the multiplication torsor along $\chi$, by taking the finite étale quotient of $A_T\times G$ under $A[n]_T$; this gives a $G$-torsor on $A_T$ and is functorial in $T$. Thus it defines a homomorphism of étale sheaves $\mathcal H\to R^1\pi_*G$. Here degree-one cohomology is the group of $G$-torsors: from an injective resolution, a representative of a cohomology class has a sheaf of local lifts which is a $G$-torsor, and conversely local torsor differences give the class; the two constructions are inverse. Local triviality and effective descent in [F8] represent these torsors by finite étale schemes. [F8, given, construct, algebra]

2.1 By [F2], the torus $V/H$ has a holomorphic projective embedding and hence an abelian-variety model $B$. The natural quotient $V/H\to V/\Lambda$ is a holomorphic group homomorphism, so [F3] algebraizes it to $q:B\to A$. It is proper and has finite complex fibres, because analytically it is a finite covering. The non-quasi-finite locus is closed by [F5] and has no complex point, hence is empty; [F5] makes $q$ finite. Its analytic differential is invertible at every complex point, so the algebraic differential is invertible there. The algebraic Jacobian criterion in [F6] gives an étale neighbourhood of every complex point; the non-étale locus is closed and has no complex point, so $q$ is finite étale. Thus every connected finite topological cover of $A^{\mathrm{an}}$ is the analytification of a finite étale cover. Finite disjoint unions give essential surjectivity for all finite covers. [F2, F3, F5, F6, given, step 1.1, construct, algebra]

3.1 Let $Y,Z$ be smooth projective complex varieties, with $Y$ connected, and let $h:Y^{\mathrm{an}}\to Z^{\mathrm{an}}$ be holomorphic. Its graph is a compact connected holomorphically embedded manifold in a product of projective spaces. By [F4] its reduced algebraic closure $G$ has precisely that graph as complex points. The projection $G\to Y$ is proper and bijective on complex points. As in step 2.1 it is quasi-finite everywhere and hence finite by [F5]. Its function-field extension is separable in characteristic zero; a primitive element and a nonzero discriminant show that a degree greater than one would give a fibre with more than one complex point. Thus it is finite birational, and the smooth integral target $Y$ is normal; [F5] makes the projection an isomorphism. The second projection therefore algebraizes $h$ uniquely. A continuous map over $A^{\mathrm{an}}$ between analytic finite covers is locally a composite of local inverse charts of the covers, so it is holomorphic. Applying this graph argument componentwise proves that analytification is full; equality of algebraic maps can be checked on complex points, so it is faithful. [F4, F5, F6, given, step 1.2, step 2.1, construct, algebra]

4.1 Steps 2.1 and 3.1 give the equivalence of finite-cover categories. It respects the fibre over the identity and is natural in $A$ because analytification and pullback are functorial. By [F1], the topological fundamental group is $\Lambda$; by [F6], finite étale covers are finite continuous sets for $\pi_1^{\mathrm{et}}$. Comparing automorphisms of the common fibre functor gives $\pi_1^{\mathrm{et}}(A,0)\cong\widehat\Lambda$. Continuous homomorphisms to a finite abelian group are therefore $\operatorname{Hom}(\Lambda,G)$, which is the degree-one singular cohomology of a connected torus with constant coefficients: a $1$-cocycle records its additive holonomy on loops, and every homomorphism is realized on the standard circle-product cell complex. For $g=0$, both categories have only finite disjoint unions of points and both groups are zero. [F1, F6, given, step 2.1, step 3.1, construct, algebra]

5.1 At a geometric point $\bar s$ of $S$, the stalk of $R^1\pi_*G$ is $H^1_{\mathrm{et}}(A_{S^{sh}_{\bar s}},G)$: the strict henselization is the inverse limit of affine étale neighbourhoods, and [F7] supplies the finite-stage cohomology identification. The family over that ring is proper finitely presented, so [F7] identifies this group with $H^1_{\mathrm{et}}(A_{\bar s},G)$. For any geometric fibre over an algebraically closed field $K$ of characteristic zero, choose a finitely generated subfield over which its equations and group law are defined, take its algebraic closure $k_0$ inside $K$, and embed $k_0$ into $\mathbb C$. The fibre descends to $k_0$, and [F10] identifies its finite étale covers after extension to either $K$ or $\mathbb C$. Thus step 4.1, applied over $\mathbb C$, identify its finite étale torsors with finite topological torsors and give $H^1_{\mathrm{et}}(A_{\bar s},G)=\operatorname{Hom}(\Lambda,G)$. The multiplication-by-$n$ torsor has monodromy $\Lambda\to\Lambda/n\Lambda\simeq A[n]_{\bar s}$, and every homomorphism to $G$ factors uniquely through this quotient. Hence the stalk of the map in step 1.3 is an isomorphism. A sheaf morphism that is an isomorphism on all geometric stalks is an isomorphism; therefore $R^1\pi_*G\cong\mathcal H$. [F7, F8, F10, given, step 4.1, step 1.3, algebra]

5.2 Analytification of the finite étale group scheme $A[n]$ is a topological covering: [F9] gives local holomorphic inverse charts, and finiteness and properness exclude additional nearby sheets. On a fibre $V/\Lambda$, map a torsion point $x$ to the class of the loop $n\gamma$ modulo $n$, where $\gamma$ is any path from $0$ to $x$. Different choices of $\gamma$ change the class by a multiple of $n$, and uniformization identifies this map with $\tfrac1n\Lambda/\Lambda\simeq\Lambda/n\Lambda$. It is natural for group homomorphisms. It is also locally constant in a family: construct local smooth fibre trivializations by patching local right inverses to the differential with the partitions in [F9] and lifting radial paths by the horizontal ODEs; properness keeps lifts in a compact set. Translate the trivialization to fix the identity and join a nearby torsion point to the transported endpoint by a short path. The resulting loops vary continuously, so their homology classes are locally constant. Hence $A[n]^{\mathrm{an}}$ is canonically the local system $R_1\pi^{\mathrm{an}}_*\mathbb Z/n$, and its dual is $R^1\pi^{\mathrm{an}}_*G$. [F8, F9, given, step 4.1, construct, algebra]

6.1 Analytify the finite étale sheaf isomorphism of step 5.1 and apply step 5.2. This gives the displayed natural isomorphism of finite local systems on $S^{\mathrm{an}}$. The finite-cover identification, multiplication torsors and their pushouts are functorial under morphisms of abelian schemes, so the comparison is natural. The same construction commutes with changing $n$ to a divisor and is defined algebraically before analytification; it is therefore compatible with arbitrary algebraic base change on the étale side. For $n=1$ all groups vanish, and a zero-dimensional abelian scheme gives the zero local system. No higher-degree comparison or de Rham comparison has been used. [given, step 1.3, step 5.1, step 5.2, algebra] ∎

## Boundary

Only relative degree one with finite constant coefficients is proved. Higher étale cohomology, algebraic de Rham comparison, and absolute-Hodge propagation remain separate obligations.

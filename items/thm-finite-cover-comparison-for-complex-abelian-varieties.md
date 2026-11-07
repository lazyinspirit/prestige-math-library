---
id: thm-finite-cover-comparison-for-complex-abelian-varieties
kind: theorem
title: "Finite-cover comparison for complex abelian varieties"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-complex-abelian-variety-uniformizes-as-complex-torus, thm-classification-of-connected-covering-spaces, lem-smooth-projective-analytification-has-rational-kahler-polarization, thm-rational-riemann-form-makes-complex-torus-projective, thm-projectively-embedded-complex-torus-has-an-abelian-variety-model, thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic, lem-av7-finite-morphism-projective-over-projective-base, lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set, cor-segre-veronese-embedding, cor-quasi-finite-locus-open-finite-type-algebra, thm-proper-quasi-finite-is-finite, thm-primitive-element-theorem-for-finite-separable-extensions, lem-finite-birational-to-normal-is-isomorphism, thm-jacobian-criterion-smooth-morphism, thm-holomorphic-implicit-function-theorem, thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 2, proof of Principle B, printed page 20, uses Betti/étale comparison. Only the first-degree finite-cover portion is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $A/\mathbb C$ be an abelian variety with identity basepoint, and write $A^{\mathrm{an}}\simeq V/\Lambda$ for its marked analytic universal cover. Analytification induces an equivalence between finite étale algebraic covers of $A$ and finite topological covers of $A^{\mathrm{an}}$. The induced isomorphism of pointed fundamental groups is
$$\pi_1^{\mathrm{et}}(A,0)\cong\widehat\Lambda,$$
natural in algebraic homomorphisms of complex abelian varieties. Consequently for every finite abelian group $G$ it identifies continuous homomorphisms $\pi_1^{\mathrm{et}}(A,0)\to G$ with $H^1(A^{\mathrm{an}},G)=\operatorname{Hom}(\Lambda,G)$.

The statement concerns finite covers and degree one. It does not assert any comparison in higher étale cohomology or relative de Rham cohomology.

## Facts & Assumptions

**Given:** AC, DC and the complex abelian variety $A$.

[F1] A complex abelian variety is a torus with universal covering vector space and full lattice, functorially in homomorphisms; connected covers of a locally simply connected space are classified by subgroups of its fundamental group ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[thm-classification-of-connected-covering-spaces]]).

[F2] An ample line bundle on a smooth projective complex variety gives a positive closed real $(1,1)$ form whose de Rham class is integral; a positive rational Riemann form makes a complex torus projective and a projectively embedded torus has an abelian-variety model ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[thm-rational-riemann-form-makes-complex-torus-projective]], [[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]]).

[F3] Holomorphic group homomorphisms of complex abelian varieties are algebraic; a finite map to a projective base has projective source ([[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]], [[lem-av7-finite-morphism-projective-over-projective-base]]).

[F4] The reduced projective closure of a compact connected holomorphically embedded projective manifold is integral and has exactly its complex point set; Segre embeddings make projective products projective ([[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]], [[cor-segre-veronese-embedding]]).

[F5] The quasi-finite locus is open, proper quasi-finite maps are finite, finite separable extensions are simple, and finite birational maps to normal integral schemes are isomorphisms ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]], [[lem-finite-birational-to-normal-is-isomorphism]]).

[F6] The holomorphic implicit function theorem and algebraic Jacobian criterion identify local analytic and algebraic étale behaviour; finite étale covers of a connected scheme are classified by finite continuous actions of its étale fundamental group ([[thm-holomorphic-implicit-function-theorem]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]).

## Proof

**Proof technique:** algebraize every lattice cover using a pulled-back positive Riemann form and algebraize maps by compact graphs.

1.1 By [F1], $A^{\mathrm{an}}=V/\Lambda$ with $V$ contractible. Every connected finite topological cover is the quotient $V/H\to V/\Lambda$ for a finite-index subgroup $H\subseteq\Lambda$, by [F1]. To algebraize it, use [F2] to choose a positive closed $(1,1)$ form $\omega$ on $A^{\mathrm{an}}$ whose cohomology class is integral. Average its translates over the compact real torus $V/\Lambda$, using normalized Lebesgue measure on a fundamental parallelepiped. The average $\bar\omega$ is translation-invariant, positive, closed and of type $(1,1)$. Each translation is smoothly homotopic to the identity, so $[\bar\omega]=[\omega]$. The invariant form is a constant alternating form $\psi$ on $V_\mathbb R$; its values on lattice pairs are the integral periods of $[\omega]$ on the corresponding two-dimensional subtori, so $\psi(\Lambda,\Lambda)\subseteq\mathbb Z$. Positivity gives $\psi(Jv,Jw)=\psi(v,w)$ and $\psi(v,Jv)>0$. Its restriction to $H$ is an integral positive Riemann form. [F1, F2, given, choose, construct, algebra]

1.2 Let $Y\to A$ be a connected finite étale cover. It is smooth and projective by [F3]. Its analytification is a finite topological cover by the local implicit theorem in [F6] and properness. It is connected: otherwise its compact analytic connected components are finitely many disjoint projectively embedded complex manifolds. By [F4], each is the complete complex point set of a closed algebraic subvariety. These disjoint closed subvarieties cover every complex point of reduced $Y$, hence cover $Y$ scheme-theoretically; more than one would contradict connectedness. The same reasoning applies componentwise to an arbitrary finite étale cover. [F3, F4, F6, given, construct, algebra]

2.1 By [F2], the torus $V/H$ has a holomorphic projective embedding and hence an abelian-variety model $B$. The natural quotient $V/H\to V/\Lambda$ is a holomorphic group homomorphism, so [F3] algebraizes it to $q:B\to A$. It is proper and has finite complex fibres, because analytically it is a finite covering. The non-quasi-finite locus is closed by [F5] and has no complex point, hence is empty; [F5] makes $q$ finite. Its analytic differential is invertible at every complex point, so the algebraic differential is invertible there. The algebraic Jacobian criterion in [F6] gives an étale neighbourhood of every complex point; the non-étale locus is closed and has no complex point, so $q$ is finite étale. Thus every connected finite topological cover of $A^{\mathrm{an}}$ is the analytification of a finite étale cover. Finite disjoint unions give essential surjectivity for all finite covers. [F2, F3, F5, F6, given, step 1.1, construct, algebra]

3.1 Let $Y,Z$ be smooth projective complex varieties, with $Y$ connected, and let $h:Y^{\mathrm{an}}\to Z^{\mathrm{an}}$ be holomorphic. Its graph is a compact connected holomorphically embedded manifold in a product of projective spaces. By [F4] its reduced algebraic closure $G$ has precisely that graph as complex points. The projection $G\to Y$ is proper and bijective on complex points. As in step 2.1 it is quasi-finite everywhere and hence finite by [F5]. Its function-field extension is separable in characteristic zero; a primitive element and a nonzero discriminant show that a degree greater than one would give a fibre with more than one complex point. Thus it is finite birational, and the smooth integral target $Y$ is normal; [F5] makes the projection an isomorphism. The second projection therefore algebraizes $h$ uniquely. A continuous map over $A^{\mathrm{an}}$ between analytic finite covers is locally a composite of local inverse charts of the covers, so it is holomorphic. Applying this graph argument componentwise proves that analytification is full; equality of algebraic maps can be checked on complex points, so it is faithful. [F4, F5, F6, given, step 1.2, step 2.1, construct, algebra]

4.1 Steps 2.1 and 3.1 give the equivalence of finite-cover categories. It respects the fibre over the identity and is natural in $A$ because analytification and pullback are functorial. By [F1], the topological fundamental group is $\Lambda$; by [F6], finite étale covers are finite continuous sets for $\pi_1^{\mathrm{et}}$. Comparing automorphisms of the common fibre functor gives $\pi_1^{\mathrm{et}}(A,0)\cong\widehat\Lambda$. Continuous homomorphisms to a finite abelian group are therefore $\operatorname{Hom}(\Lambda,G)$, which is the degree-one singular cohomology of a connected torus with constant coefficients: a $1$-cocycle records its additive holonomy on loops, and every homomorphism is realized on the standard circle-product cell complex. For $g=0$, both categories have only finite disjoint unions of points and both groups are zero. [F1, F6, given, step 2.1, step 3.1, construct, algebra] ∎

## Boundary

Only finite-cover and degree-one comparison is proved. Higher étale cohomology, relative local systems, de Rham comparison and conjugation compatibility remain separate inputs.

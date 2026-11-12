---
title: The restricted BEM complex and the supplied EM finite quotient
status: published
research_item: lem-author-2ac325480ae8-motivic-restriction-coefficients
dependency_level: 10
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.1.1.6 and Remark 1.1.1.7 (printed p. 19); Proposition
        1.1.3.1 and its proof (printed p. 30).
      statement: In a pointed infinity-category with cofibers, cofiber squares can be
        selected functorially, with contractible ambiguity. Fun(K,E) is stable
        for stable E, with cofibers computed pointwise.
      hypotheses: E is a stable infinity-category; K is a simplicial set small in the
        working universe. Apply E=D(Z), supplied by the declared
        derived-enhancement item, and K the nerve of the opposite qcqs scheme
        category. Choice and compatible universes are assumed.
      reading_limits: Read these definitions, the cofiber-functor remark and the full
        short proof of Proposition 1.1.3.1 in this task. Its invoked HTT
        pointwise theorem is reference 1. The foundational model and nerve
        proofs were not reconstructed.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Example 1.1.2.6 (printed p. 14); Notation 1.2.7.2 and Proposition
        1.2.7.3(1) (printed p. 39); Corollary 5.1.2.3 and its proof (printed p.
        319).
      statement: Fun(K,E) is the infinity-category of coherent diagrams. Colimits of a
        fixed shape in it exist and are detected by evaluations whenever E
        admits those colimits.
      hypotheses: K and the colimit shape are simplicial sets small in the working
        universe; E is an infinity-category admitting colimits of that shape.
        Here only zero objects and pushouts in the supplied stable D(Z) are
        needed.
      reading_limits: Read the listed example, functor-category notation, proposition
        statement and corollary with its one-line proof during this task. The
        proof of Proposition 5.1.2.2 and the Joyal-model foundations are
        imported, not reconstructed. Printed pages use the PDF currently served
        at this URL.
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)
- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Definition 1.1.1.6 and Remark 1.1.1.7 (printed p. 19); Proposition 1.1.3.1 and its proof (printed p. 30). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory · Example 1.1.2.6 (printed p. 14); Notation 1.2.7.2 and Proposition 1.2.7.3(1) (printed p. 39); Corollary 5.1.2.3 and its proof (printed p. 319). `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and fix compatible Grothendieck universes for the supplied derived and motivic constructions, containing $\omega$ and the scheme and complex data, with larger universes for their categories. Existence of these universes is a separate size assumption. Fix a prime $p$ and a characteristic-zero field $k$. For a commutative unital ring $R$, let $\mathcal C_R$ denote the category of quasi-compact, quasi-separated (qcqs) schemes over $\operatorname{Spec}R$ and morphisms over that base, with data in the fixed universe. Write $\mathbb Z[1/p]=\{a/p^n:a\in\mathbb Z,\ n\geq0\}\subset\mathbb Q$. The canonical inclusions $\mathbb Z[1/p]\to\mathbb Q\to k$ define forgetful functors $u:\mathcal C_k\to\mathcal C_{\mathbb Q}$ and $v:\mathcal C_{\mathbb Q}\to\mathcal C_{\mathbb Z[1/p]}$; set $i=v\circ u$.

Use the supplied stable derived infinity-category $\mathcal D(\mathbb Z)$ of unbounded complexes of abelian groups. A complex-valued presheaf on $\mathcal C_R$ means an object of $\mathcal P_R=\operatorname{Fun}(N(\mathcal C_R^{\mathrm{op}}),\mathcal D(\mathbb Z))$, where $N$ is the ordinary nerve (its simplices are strings of composable arrows). Thus diagrams and natural transformations retain their higher coherence. Define restriction by precomposition, $i^*F=F\circ N(i^{\mathrm{op}})$ and $u^*G=G\circ N(u^{\mathrm{op}})$, and evaluation by $\mathrm{ev}_X(F)=F(X)$.

For every integer $r$, let $D_r$ be BEM's cdh-motivic complex restricted to $\mathcal C_{\mathbb Z[1/p]}$, and let $C_{3,\mathbb Q}$ be the supplied EM cdh-local weight-three complex on $\mathcal C_{\mathbb Q}$. There is a canonical natural equivalence $i^*D_3\simeq u^*C_{3,\mathbb Q}$ with the supplied classical-input maps. For a presheaf $F$, define $F/p=\operatorname{cofib}(p:F\to F)$ in its presheaf category, including its coefficient cofiber square. This is its objectwise derived quotient: $(F/p)(X)\simeq F(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p$. The equivalence induces $(i^*D_3)/p\simeq(u^*C_{3,\mathbb Q})/p$. Restriction commutes naturally with this quotient, and evaluation at every qcqs $X/k$ computes it as the cofiber of multiplication by $p$ on the evaluated complex. These identifications preserve the coefficient maps and their cofiber diagrams, not merely the cohomology groups.

## Statement references

[thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)

[lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the size convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). These assumptions are used for the imported derived enhancement and coherent colimit constructions in [F4]–[F5], at steps 1.1–2.1. Each scheme indexing category is small relative to the larger universe in which its presheaves are formed. No existence of universes is deduced from Choice.

[F1] [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model) supplies the actual BEM and EM complexes and their canonical natural field-restriction equivalence, with the specified smooth classical-input maps and sheafification units. In weight three over $\mathbb Q$ its target is exactly $C_{3,\mathbb Q}$. Only this supplied model comparison is used; no reconstruction of cdh sheafification or Kan extension is attempted here.

[F2] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) supplies the natural unbounded coefficient identification with the scalar cone and derived tensor quotient. On a cochain representative $C$, the cone has $K_p(C)^m=C^m\oplus C^{m+1}$ and $d(y,x)=(d_Cy+px,-d_Cx)$; a cochain map $a:C\to E$ acts by $(y,x)\mapsto(a(y),a(x))$. The coefficient inclusion is $y\mapsto(y,0)$ and the projection is to $C[1]$. This is natural in the ordinary derived category, without boundedness restrictions.

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) supply the scheme types in $\mathcal C_R$. The characteristic-zero case of [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) gives the canonical embedding $\mathbb Q\to k$. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) turns the indicated ring inclusions into base morphisms of spectra. Composing structure maps defines $u,v$ and $i$, leaving the underlying qcqs schemes and their morphisms unchanged.

[F4] The ring case $A=\mathbb Z$ of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies $\mathcal D(\mathbb Z)$, its stability, its ordinary derived homotopy category, and the fact that the localized cochain cone, including its canonical square, represents the coherent cofiber. A cofiber of $a:C\to E$ means the pushout $E\amalg_C0$, with its defining square and nullhomotopy.

[F5] References 0 and 1 in External input supply coherent functor categories, functorial cofibers and their pointwise computation. We use them only for $\mathcal P_R$ and its restrictions and evaluations. Multiplication by $p$ is the natural scalar map on complexes; its naturality descends to the supplied enhancement. All comparisons of cofibers are comparisons of their defining diagrams.

## External input
Reference 0 supplies the cofiber functor and stability of diagram categories; reference 1 supplies their construction and the pointwise colimit criterion. Their hypotheses hold by [A1] and [F4]. These categorical inputs are imported at the exact locators and with the reading limits in the references. The restriction and coefficient application below is a local argument.

## Proof
**Given:** $k,p$, the categories, functors and motivic models in the statement, under [A1].

**Goal:** Identify the restricted models and their natural finite-coefficient diagrams.

1.1 By [F3], every qcqs $k$-scheme acquires the indicated $\mathbb Q$- and $\mathbb Z[1/p]$-structures, so $i=v\circ u$ is defined on all of $\mathcal C_k$. Apply [F1] over $\mathbb Q$ to obtain $v^*D_3\simeq C_{3,\mathbb Q}$ and precompose with $N(u^{\mathrm{op}})$. Associativity of composition gives $u^*v^*D_3=i^*D_3$ and the stated equivalence with its specified maps. The functor categories and their restrictions are well-defined under [A1], [F4] and [F5]. The indexing categories contain all qcqs schemes over the indicated bases. [given, A1, F1, F3, F4, F5]

2.1 Form the cofiber square of the natural map $p:F\to F$ in $\mathcal P_R$. By [F4]–[F5] this square exists, is functorial in $F$, and is a pushout exactly when each evaluated square is one. Evaluation therefore preserves it. Precomposition also preserves it: at an object $Y$ of the new indexing category the restricted square is the original square evaluated at its image, hence is a pushout; the pointwise criterion makes the restricted square a pushout of presheaves. It follows naturally that $i^*(F/p)\simeq(i^*F)/p$ and $\mathrm{ev}_X(F/p)\simeq\operatorname{cofib}(p:F(X)\to F(X))$, and likewise for $u$. For a representative cochain complex $C$ of $F(X)$, [F4] identifies this cofiber square with the localized scalar-cone square; [F2] identifies its cone with $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p$, preserving the coefficient inclusion and projection. Thus the quotient has precisely the stipulated evaluated derived-coefficient interpretation. Apply the functorial cofiber construction to the natural equivalence of step 1.1 and its commuting scalar maps. This yields the claimed equivalence of quotient diagrams, including their coefficient maps and coherence. [A1, F2, F4, F5, step 1.1, construct] ∎

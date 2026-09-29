---
id: lem-relative-proj-affine-local-gluing
kind: lemma
title: "Affine-local graded algebras glue their Proj charts"
status: published
origin: pipeline
deps:
  - thm-proj-structure-sheaf-scheme
  - thm-affine-quasi-coherent-equivalence
  - lem-associated-sheaf-restriction-affine-open
  - thm-fibre-products-of-schemes-exist
  - thm-gluing-affine-schemes
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the affine-scheme constructions
([[def-axiom-of-choice]]). Let $S$ be a scheme and let
$\mathcal A=\bigoplus_{d\ge0}\mathcal A_d$ be a quasi-coherent graded
$\mathcal O_S$-algebra. For an affine open $U=\operatorname{Spec}R\subseteq S$
write $\mathcal A|_U\cong\widetilde B$ for the associated graded $R$-algebra
$B=\bigoplus_{d\ge0}\Gamma(U,\mathcal A_d)$.

Then for every affine open $V\subseteq U$ the restriction
$\operatorname{Proj}(B)|_V$ is canonically isomorphic, over $V$, to
$\operatorname{Proj}\Gamma(V,\mathcal A)$, where $\Gamma(V,\mathcal A)=
\bigoplus_{d\ge0}\Gamma(V,\mathcal A_d)$ is the graded ring of sections; the
isomorphisms are compatible with inclusions $V'\subseteq V$ of affine opens and
with the affine charts, and on triple overlaps of affine opens the cocycles are
the identity. Consequently the local schemes $\operatorname{Proj}\Gamma(U,
\mathcal A)$ glue over the affine opens $U\subseteq S$ to a scheme over $S$,
after restriction along each affine open, with all identifications canonical.

## Facts & Assumptions

**Given:** A scheme $S$, a quasi-coherent graded $\mathcal O_S$-algebra $\mathcal A=\bigoplus_{d\ge0}\mathcal A_d$, affine opens $V\subseteq U=\operatorname{Spec}R\subseteq S$, and the Axiom of Choice as inherited from the affine constructions.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] On an affine scheme $U=\operatorname{Spec}R$, quasi-coherent modules are canonically the associated sheaves of their global sections. Applying this degreewise gives $\mathcal A_d|_U=\widetilde{B_d}$, where $B_d=\Gamma(U,\mathcal A_d)$. The multiplication on $B$ is the multiplication of sections; its associated multiplication agrees with that of $\mathcal A$ because on each distinguished open sections are fractions and products multiply their numerators and denominators. ([[thm-affine-quasi-coherent-equivalence]])

[F2] Let $W=\operatorname{Spec}C$ be an affine open subscheme of $\operatorname{Spec}A$ and $M$ an $A$-module; then the restriction of $\widetilde M$ to $W$ is canonically $\widetilde{(C\otimes_AM)}$, and $W$ need not be a distinguished open. ([[lem-associated-sheaf-restriction-affine-open]])

[F3] Fibre products of schemes exist, and the fibre product of two open immersions with common target is their intersection, with the fibre product of $\operatorname{Spec}R'$ and $\operatorname{Spec}R''$ over $\operatorname{Spec}R$ equal to $\operatorname{Spec}(R'\otimes_RR'')$. ([[thm-fibre-products-of-schemes-exist]])

[F4] For homogeneous $f\in B_+$ of positive degree, $\operatorname{Proj}B$ has the affine chart $D_+(f)=\operatorname{Spec}B_{(f)}$ with $B_{(f)}=(B[f^{-1}])_0$, and these charts as $f$ varies form a basis; on $D_+(fg)$ the two charts are identified by the canonical comparison of localisations. ([[thm-proj-structure-sheaf-scheme]])

[L1] Localisation commutes with scalar extension and taking a graded component: for an $R$-algebra $C$ placed in degree zero and a homogeneous $f\in B$, the maps
$$(b/f^k)\otimes c\longmapsto (b\otimes c)/f_C^k$$
give a graded isomorphism $B_f\otimes_R C\cong (B\otimes_R C)_{f_C}$.
Indeed, both algebras represent a compatible map from $B$ and $C$ in which the image of $f$ is invertible; the displayed maps and their inverses are forced by those maps and are inverse on generators. Tensor product distributes over the direct sum of homogeneous components, so its degree-zero restriction is $B_{(f)}\otimes_R C\cong(B\otimes_R C)_{(f_C)}$. The same fraction maps commute with further localisation and scalar extension.

[F6] Compatible open gluing data for affine schemes produce a scheme uniquely up to unique isomorphism respecting the given charts. ([[thm-gluing-affine-schemes]])

## Proof

**Proof technique:** direct: compute the local model $\widetilde{B\otimes_RC}$ of $\mathcal A$ on an affine open $V=\operatorname{Spec}C$, match its projective charts with the restrictions of the charts of $\operatorname{Proj}B$, and check the cocycle conditions by locality of the localisation formulas.

1.1 Local graded model on $V$. Let $C=\Gamma(V,\mathcal O_U)$, so that $V=\operatorname{Spec}C$ and the inclusion is induced by $R\to C$; by [F1] the graded algebra $\mathcal A|_U$ is $\widetilde B$ for the graded $R$-algebra $B=\bigoplus_d\Gamma(U,\mathcal A_d)$, and by [F2] applied degreewise, $\Gamma(V,\mathcal A_d)=C\otimes_RB_d$ with compatible products, so that $\Gamma(V,\mathcal A)=B\otimes_RC$ as a graded $C$-algebra; write $B_C=B\otimes_RC$ with $(B_C)_d=B_d\otimes_RC$. [F1, F2, algebra]

2.1 Intersections of charts with $V$. Let $f\in B_+$ be homogeneous of positive degree, so $D_+(f)\subseteq\operatorname{Proj}B$ is an affine open chart [F4], and let $f_C$ denote its image in $B_C$. The inverse image of $V$ in $D_+(f)$ is the fibre product of the affine morphism $D_+(f)=\operatorname{Spec}B_{(f)}\to U=\operatorname{Spec}R$ with the open immersion $V=\operatorname{Spec}C\hookrightarrow U$. By [F3] it is affine with ring $B_{(f)}\otimes_RC$, which by [L1] is $(B_C)_{(f_C)}$; hence $D_+(f)\cap\pi^{-1}(V)=\operatorname{Spec}\bigl((B_C)_{(f_C)}\bigr)$ is exactly a standard chart of $\operatorname{Proj}B_C=\operatorname{Proj}\Gamma(V,\mathcal A)$. [F1, F3, F4, L1, step 1.1]

3.1 Chartwise isomorphism. The opens $D_+(f_C)$ for homogeneous $f\in B_+$ cover $\operatorname{Proj}B_C$: if a homogeneous prime contained all $f\otimes1$, it would contain every positive-degree element $\sum_j b_j\otimes c_j$, contradicting its membership in Proj. The assignment $D_+(f)\cap V\mapsto\operatorname{Spec}(B_C)_{(f_C)}$ is the identity on rings, so for all $f$ it identifies the charts of $\operatorname{Proj}(B)|_V$ with the charts of $\operatorname{Proj}\Gamma(V,\mathcal A)$; the two transition systems are induced by the same canonical localisation maps $B_{(f)}\to B_{(fg)}$ and $B_{(g)}\to B_{(fg)}$ base changed along $R\to C$, hence agree, and by [F6] the chart identifications glue to an isomorphism $\operatorname{Proj}(B)|_V\to\operatorname{Proj}\Gamma(V,\mathcal A)$ over $V$, canonical because each chart identification is. [F4, F6, step 2.1, algebra]

4.1 Compatibility with inclusions of affine opens. If $V'\subseteq V$ are affine open in $U$ with rings $C\to C'$, then the isomorphism of step 3.1 for $V'$ is the restriction of the one for $V$: on a chart, both are the base change of the identity map of $B_{(f)}$ along $R\to C\to C'$, and base change of localisations is compatible with composition by [L1]. [L1, step 3.1, algebra]

5.1 Gluing over $S$ and triple overlaps. Let $U,U',U''$ be affine opens of $S$ and let $W\subseteq U\cap U'$ be an affine open; both restrictions $\operatorname{Proj}\Gamma(U,\mathcal A)|_W$ and $\operatorname{Proj}\Gamma(U',\mathcal A)|_W$ are identified with $\operatorname{Proj}\Gamma(W,\mathcal A)$ by step 3.1 (applied with $V=W$), and the resulting isomorphism over $W$ composes to the identity on triple overlaps $W\subseteq U\cap U'\cap U''$ by step 4.1, because all identifications are the canonical localisation isomorphisms for the graded rings of sections. Since the affine opens $W$ cover each intersection $U\cap U'$, the local isomorphisms glue; refining the local schemes to their standard affine charts and applying [F6], the local schemes $\operatorname{Proj}\Gamma(U,\mathcal A)$ therefore glue over the affine opens of $S$, and the identifications are canonical throughout. [F6, step 3.1, step 4.1, cases: triple overlap]

6.1 Conclusion. Step 3.1 gives the canonical isomorphism $\operatorname{Proj}(B)|_V\cong\operatorname{Proj}\Gamma(V,\mathcal A)$ for every affine open $V\subseteq U$, step 4.1 its compatibility with inclusions, and step 5.1 the triple-overlap cocycle and the gluing conclusion. The Axiom of Choice [A1] is inherited only through the affine quasi-coherence equivalence [F1] and the associated-sheaf restriction [F2]; no additional choice is made. [A1, F1, F2, step 3.1, step 5.1]
\qed

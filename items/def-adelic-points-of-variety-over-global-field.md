---
id: def-adelic-points-of-variety-over-global-field
kind: definition
title: "Adelic points of a variety over a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-adele-ring-of-a-global-field
  - def-scheme-over-base
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
  - def-axiom-of-choice
  - def-countable-choice
  - def-proper-morphism
  - thm-valuative-criterion-properness
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-finiteness-of-the-number-field-class-group
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-noetherian-ring-quotients-and-localisations
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-proper-fp-stage
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-qc-ideal-closed-subscheme-correspondence-complete
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§3.4 and 8.1"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Restricted-product definition of X(A_K), its relation to the product of local points, and the proper case."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §2.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Adelic points and weak approximation."
verification: {}
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $K$ be a global field,
let $X$ be a separated finite-type $K$-scheme, and let $S$ be a finite set
containing its archimedean places, with $S\ne\varnothing$ in the
function-field case. Write
$$\mathcal O_{K,S}:=\{a\in K:|a|_v\le1\text{ for every finite place }v\notin S\}.$$
An **integral model** of $X$ outside $S$ is a separated finite-type
$\mathcal O_{K,S}$-scheme $\mathcal X$ with generic fiber $X$. For each
finite $v\notin S$, let $\mathcal X(\mathcal O_v)$ be the integral points of
the base change of this model to the valuation ring $\mathcal O_v$ of $K_v$.
The set of **adelic points** is the restricted product
$$X(\mathbb A_K):=\prod_v'X(K_v)\quad\text{with respect to }\mathcal X(\mathcal O_v),$$
that is, the tuples $(x_v)_v$ for which $x_v\in\mathcal X(\mathcal O_v)$ at
all but finitely many finite places. Its topology is the restricted-product
topology. The resulting set and topology do not depend on the chosen model,
because two finite-type models of the same generic fiber become isomorphic
after omitting finitely many places. If $X$ is proper, the valuative
criterion identifies $X(K_v)$ with $\mathcal X(\mathcal O_v)$ at every place
where the model is proper, so the restricted-product condition is automatic
outside finitely many places.

## Definition references

[[def-global-field|Global field]]

[[def-place-of-a-global-field|Places and finite-place valuations]]

[[def-completion-of-a-global-field-at-a-place|Completions and valuation rings]]

[[def-adele-ring-of-a-global-field|Restricted products of local fields]]

[[def-scheme-over-base|Schemes over a base]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Countable Choice]]

[[def-proper-morphism|Proper morphisms]]

[[thm-valuative-criterion-properness|Valuative criterion for properness]]

[[lem-filtered-colimit-fp-scheme-stage|Finite-presentation descent]]

[[lem-filtered-colimit-proper-fp-stage|Finite-stage properness]]

[Poonen, §§3.4 and 8.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §2.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, a global field $K$, its places and completions, a separated finite-type $K$-scheme $X$, and an integral model outside a finite set containing the archimedean places.

[F1] Under AC, finite-presentation schemes, morphisms and their equalities descend along filtered colimits of rings. [[lem-filtered-colimit-fp-scheme-stage]]

[F2] Under AC, properness of a finite-presentation stage morphism descends over a filtered system of finitely generated $\mathbb Z$-algebras. [[lem-filtered-colimit-proper-fp-stage]]

[F3] An affine closed immersion is a quotient by an ideal, and compatible finite-type quasi-coherent ideals define closed subschemes. [[lem-closed-immersion-affine-quotient-and-base-change]] [[thm-qc-ideal-closed-subscheme-correspondence-complete]]

[F4] Each nonzero element and its inverse are integral at all but finitely many places; $S$-integer rings embed in the corresponding valuation rings. [[thm-global-field-element-integral-at-all-but-finitely-many-places]] [[def-global-field]] [[def-place-of-a-global-field]]

[F5] A proper morphism has unique extensions over valuation rings. [[thm-valuative-criterion-properness]]

[F6] A finite-type algebra over a Noetherian ring is finitely presented; separated finite-type schemes are quasi-separated. [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]] [[def-separated-scheme-over-base]] [[def-locally-finite-type-and-finite-type-morphism]]

[F7] A number-field integer ring is Dedekind with finite ideal class group, and Noetherian rings remain Noetherian on localization. On a smooth proper geometrically integral curve over a field, any line bundle of degree at least $2g+1$ is very ample. [[cor-ring-of-integers-is-a-dedekind-domain]] [[thm-finiteness-of-the-number-field-class-group]] [[thm-noetherian-ring-quotients-and-localisations]] [[thm-degree-two-g-plus-one-line-bundle-very-ample]]

[A1] AC and Countable Choice are the original hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** finite-stage descent of schemes, diagonals and isomorphisms, followed by properness descent and the valuation criterion.

1.1 Let $\{A_i\}$ be the directed family of finitely generated $\mathbb Z$-subalgebras of $K$. Its filtered union is $K$. By [F6], $X/K$ is finitely presented, so [F1] gives a finite-presentation $A_i$-scheme $X_i$ with generic base change $X$. Every chosen generator of $A_i$ is integral outside finitely many finite places by [F4]. Enlarging the finite set $S$ gives an inclusion $A_i\subseteq\mathcal O_{K,S}$ and hence a finite-presentation model by base change. [F1, F4, F6, A1, given, construct]

1.2 Let $\mathcal X$ and $\mathcal Y$ be two such models, after taking the union of their exceptional sets. Their base ring $\mathcal O_{K,S}$ is Noetherian. For a number field, [F7] makes a positive power of each finite prime in $S$ principal; inverting those finitely many generators gives exactly $\mathcal O_{K,S}$, a localization of the Noetherian Dedekind ring of integers, hence Noetherian by [F7]. For a function field, [F4] identifies it with the regular functions on $U=C\setminus S$ for the smooth proper curve $C$ and the nonempty finite set of closed points $S$. Choose a positive multiple $D$ of the sum of those points with $\deg D\ge2g+1$. By [F7] $\mathcal O_C(D)$ gives a closed immersion into projective space. The canonical section $1$ has zero divisor exactly $D$; extend this nonzero section to a basis of global sections. Its nonvanishing locus is $U$, the intersection with a standard affine chart, hence is affine of finite type over the finite field. Its coordinate ring is therefore Noetherian and equals $\mathcal O_{K,S}$. Thus the models’ finite-type structure morphisms are finitely presented by [F6]. Since $K=\varinjlim_{f\ne0}\mathcal O_{K,S}[1/f]$, [F1] descends their generic isomorphism and its inverse and then both inverse equations to one localization. The finite-place support of $f$ is finite by [F4], so the two models become isomorphic outside a finite set. Their integral-point subsets agree at every remaining place, hence their restricted products and the stated basic-open topologies coincide. [F1, F4, F6, F7, A1, given, construct]

1.3 For a finite place, cover the model by affine charts. Every $\mathcal O_v$-point sends the closed point to some chart, and because $\operatorname{Spec}\mathcal O_v$ is local its whole image lies there. On that chart the integral points are the coordinate solutions in $\mathcal O_v^n$; they form an open subset of the local generic-fibre points since $\mathcal O_v$ is open in $K_v$. Thus the restricted-product sets in the Definition define its stated topology. Empty schemes and empty local-point sets give the empty product set in the usual way. [F4, given, algebra]

2.1 We arrange separatedness before this base change. The diagonal of $X_i/A_i$ is a morphism between finite-presentation $A_i$-schemes and becomes a closed immersion over $K$. On a finite affine cover of the target, its generic closed image has finitely generated ideal: its coordinate ring is a quotient of a finitely generated algebra over the Noetherian field $K$. Lift finitely many ideal generators to one stage; finitely many equality witnesses on finite affine overlap refinements make these ideals agree at a later stage. By [F3] they define a closed subscheme there. By [F1] the generic isomorphism from $X$ to this closed subscheme, its inverse, and both inverse equations descend after one further enlargement. Thus the stage diagonal itself is a closed immersion, so its structure morphism is separated. Base change preserves the closed diagonal. Step 1.1 now gives a separated finite-type integral model after omitting finitely many places. [F1, F3, A1, step 1.1, construct, algebra]

3.1 If $X/K$ is proper, start instead with its finite-presentation stage from step 1.1. By [F2] its morphism becomes proper over a later finitely generated $\mathbb Z$-subalgebra of $K$. Enlarge $S$ to contain the finite nonintegral supports of that stage's generators. Base change to $\mathcal O_{K,S}$ gives a proper model. For every finite $v\notin S$, the base change to $\mathcal O_v$ is proper, and [F5] gives a unique extension of each $K_v$-point. Thus the integral-point condition is automatic there. Step 1.2 transfers the same conclusion to any other chosen model outside finitely many further places. [F2, F4, F5, A1, step 1.1, step 1.2, construct] ∎

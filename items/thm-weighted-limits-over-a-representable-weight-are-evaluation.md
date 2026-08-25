---
id: thm-weighted-limits-over-a-representable-weight-are-evaluation
kind: theorem
title: "Weighting by a representable evaluates the diagram"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-weighted-limit-and-weighted-colimit, thm-yoneda-lemma-is-natural-in-both-variables, cor-contravariant-yoneda-lemma, def-hom-functors-and-hom-bifunctor, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, def-presheaf-representable-functor-and-representation, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.10)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "E. Riehl, Categorical Homotopy Theory, Example 7.1.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, let $\mathcal M$ be locally small
([[def-small-locally-small-and-large-category]]), let
$F:\mathcal J\to\mathcal M$ be a diagram and let $j_0$ be an object of
$\mathcal J$.

**Limit clause.** For the covariant representable weight
$W=\mathcal J(j_0,-):\mathcal J\to\mathbf{Set}$
([[def-hom-functors-and-hom-bifunctor]],
[[def-presheaf-representable-functor-and-representation]]), the weighted limit
exists and is the value of the diagram
([[def-set-weighted-limit-and-weighted-colimit]]):

$$\{\mathcal J(j_0,-),F\}=F(j_0).$$

**Colimit clause.** For the contravariant representable weight
$W=\mathcal J(-,j_0):\mathcal J^{\mathrm{op}}\to\mathbf{Set}$, the weighted
colimit exists and

$$\mathcal J(-,j_0)\star F=F(j_0).$$

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $F:\mathcal J\to\mathcal M$ and an object $j_0$ of $\mathcal J$.

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets; a small category is locally small ([[def-small-locally-small-and-large-category]]).

[F4] The covariant hom-assignment $\mathcal C(a,-)$ sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, and the contravariant hom-assignment $\mathcal C(-,a)$ sends $u$ to precomposition ([[def-hom-functors-and-hom-bifunctor]]).

[F6] A representation of a functor is an object with a natural isomorphism from the corresponding hom-functor; The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a representing object ([[def-presheaf-representable-functor-and-representation]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, that is $\mathcal M(m,\{W,F\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$ naturally in $m$; the weighted colimit is characterised by $\mathcal M(W\star F,m)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[L1] For locally small $\mathcal J$ the evaluation maps $$E_{a,G}:\operatorname{Nat}(\mathcal C(a,-),G)\xrightarrow{\cong}G(a)$$ are bijections natural in both variables; in particular, for $\eta:G\Rightarrow G'$, $E_{a,G'}(\eta\circ\alpha)=\eta_a(E_{a,G}(\alpha))$ ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[L2] For locally small $\mathcal J$, an object $a$ and a presheaf $P$, evaluation at the identity gives a bijection $E^a_P:\operatorname{Nat}(\mathcal C(-,a),P)\xrightarrow{\cong}P(a),\qquad E^a_P(\alpha)=\alpha_a(1_a)$, natural in both variables ([[cor-contravariant-yoneda-lemma]]).

[L3] Two representing objects of one functor are joined by a unique compatible isomorphism ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Fix an object $m$ of $\mathcal M$. The functor $\mathcal M(m,F-):\mathcal J\to\mathbf{Set}$ is the covariant hom-functor of [F4] composed with $F$, and it takes values in sets because $\mathcal M$ is locally small. By [L1] applied in $\mathcal J$, which is locally small by [F5], evaluation at $1_{j_0}$ is a bijection from $\operatorname{Nat}(\mathcal J(j_0,-),\mathcal M(m,F-))$ to $\mathcal M(m,F j_0)$. [F1, F4, F5, L1]

2.1 That bijection is natural in $m$. A morphism $h:m'\to m$ induces the natural transformation $\mathcal M(h,F-):\mathcal M(m,F-)\Rightarrow\mathcal M(m',F-)$, and the naturality of [L1] in its functor variable gives $E_{j_0}(\mathcal M(h,F-)\circ\alpha)=\mathcal M(h,Fj_0)(E_{j_0}(\alpha))$, which is precisely compatibility with precomposition by $h$. Hence $F(j_0)$ represents $m\mapsto[\mathcal J,\mathbf{Set}](\mathcal J(j_0,-),\mathcal M(m,F-))$ in the sense of [F6], so by [F1] it is a weighted limit $\{\mathcal J(j_0,-),F\}$, unique up to the unique compatible isomorphism by [L3]. [F1, F6, L1, L3, step 1.1]

3.1 For the colimit clause the weight $\mathcal J(-,j_0)$ and the diagram $\mathcal M(F-,m)$ are both presheaves on $\mathcal J$, so [L2] gives a bijection from $\operatorname{Nat}(\mathcal J(-,j_0),\mathcal M(F-,m))$ to $\mathcal M(Fj_0,m)$, evaluation at $1_{j_0}$ again. Its naturality in the presheaf variable makes it natural in $m$, now with respect to postcomposition, so $F(j_0)$ represents $m\mapsto[\mathcal J^{\mathrm{op}},\mathbf{Set}](\mathcal J(-,j_0),\mathcal M(F-,m))$ and by [F1] it is the weighted colimit $\mathcal J(-,j_0)\star F$. The two clauses use the published Yoneda statement of matching variance, and neither is obtained from the other. [F1, F6, L2, L3, step 1.1, step 2.1] ∎

## Remarks

The two clauses give the same object $F(j_0)$ from weights of opposite variance, and that is not an accident: a representable weight concentrates all the weighting at one object of the index category, and both the limit and the colimit then have nothing left to take. Which representable does it is fixed by the variance, and swapping the two weights would ask for a natural transformation between functors of opposite variance.

A representable weight and the constant singleton weight are both cases in which the weighted limit can be named without computing anything. For a general weight the object is described instead by [[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]], which replaces $\mathcal J$ by the category of elements of the weight. For the covariant representable weight that category has $(j_0,1_{j_0})$ as an initial object, since a morphism out of it to $(c,g)$ is a morphism $f:j_0\to c$ with $f=g$; for the contravariant one the same pair is terminal. A limit over a category with an initial object, and a colimit over one with a terminal object, is the value there, which is why the weighted object collapses to $F(j_0)$.

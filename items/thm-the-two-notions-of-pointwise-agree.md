---
id: thm-the-two-notions-of-pointwise-agree
kind: theorem
title: "The comma-category and representable-preservation notions of pointwise Kan extension agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pointwise-kan-extension-by-the-comma-category-formula, def-pointwise-kan-extension-by-preservation-by-representables, thm-representable-functors-preserve-small-limits, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, lem-yoneda-evaluation-bijection, def-hom-functors-and-hom-bifunctor, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 6.3.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §4.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors,
with $\mathcal C$ small and $\mathcal D,\mathcal E$ locally small
([[def-small-locally-small-and-large-category]]).

For a right Kan extension of $F$ along $K$, the two definitions

1. pointwise by the comma-category limit formula, and
2. pointwise by preservation by all representables,

are equivalent
([[def-pointwise-kan-extension-by-the-comma-category-formula]],
[[def-pointwise-kan-extension-by-preservation-by-representables]]).

By passage to opposite categories, the same equivalence holds for left Kan
extensions.

## Facts & Assumptions

**Given:** Functors $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ with $\mathcal C$ small and $\mathcal D,\mathcal E$ locally small, and a right Kan extension $(R,\varepsilon)$ of $F$ along $K$.

[F1] A right Kan extension is pointwise by the comma-category formula when, for every $d$, the canonical cone with vertex $R(d)$ and legs $\varepsilon_c\circ R(u)$ indexed by $(c,u:d\to Kc)$ is a limit cone; it is pointwise by representable preservation when every covariant representable $\mathcal E(e,-)$ carries it to a right Kan extension in $\mathbf{Set}$ ([[def-pointwise-kan-extension-by-the-comma-category-formula]], [[def-pointwise-kan-extension-by-preservation-by-representables]]).

[L1] The comma-category formulas compute pointwise Kan extension values ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[L2] Every covariantly representable functor to $\mathbf{Set}$ preserves all existing small limits ([[thm-representable-functors-preserve-small-limits]]).

[F2] For fixed $e\in\mathcal E$, the functor $\mathcal E(e,-):\mathcal E\to\mathbf{Set}$ is covariantly representable ([[def-hom-functors-and-hom-bifunctor]]).

[L3] For a locally small category, evaluation at the identity gives a bijection $\operatorname{Nat}(\mathcal D(d,-),H)\cong H(d)$ for every Set-valued functor $H$ ([[lem-yoneda-evaluation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(R,\varepsilon)$ is pointwise by the comma-category formula. Then for each $d$ the value $R(d)$ is the limit of the diagram on $(d\downarrow K)$ by [F1]. Because $\mathcal C$ is small and $\mathcal D$ locally small, this comma category is small, so [L2] applies to every representable [F2]: $\mathcal E(e,R(d))$ is the limit in $\mathbf{Set}$ of the Set-valued diagram obtained by applying $\mathcal E(e,-)$ to that cone. By [L1], this says $\mathcal E(e,-)$ carries $(R,\varepsilon)$ to a right Kan extension of $\mathcal E(e,F-)$ along $K$. So the comma-category notion implies the representable-preservation notion. [F1, F2, L1, L2]

1.2 Conversely, suppose every representable $\mathcal E(e,-)$ carries $(R,\varepsilon)$ to a right Kan extension. Fix $d\in\mathcal D$ and $e\in\mathcal E$. A cone from $e$ to the diagram on $(d\downarrow K)$ is equivalently a natural transformation $$\mathcal D(d,K-)\Rightarrow\mathcal E(e,F-):\mathcal C\to\mathbf{Set},$$ because its component at $c$ assigns to each $u:d\to Kc$ the corresponding leg $e\to F(c)$. [F1, F2, algebra]

2.1 The preserved right Kan universal property gives a bijection from the natural transformations in step 1.2 to $$\operatorname{Nat}\bigl(\mathcal D(d,-),\mathcal E(e,R-)\bigr).$$ By [L3], evaluation at $1_d$ identifies the latter set with $\mathcal E(e,R(d))$. Under these two bijections a morphism $h:e\to R(d)$ is sent to the canonical cone with legs $\varepsilon_c\circ R(u)\circ h$, so the correspondence is natural in $e$. Hence the canonical cone with vertex $R(d)$ represents the cone functor and is a limit cone. [L3, F1, step 1.2]

3.1 Since $d$ was arbitrary, $(R,\varepsilon)$ is pointwise by the comma-category formula. The left-handed equivalence is the same argument in opposite categories, exactly as encoded in the left definition of [F1]. [F1, step 2.1] ∎

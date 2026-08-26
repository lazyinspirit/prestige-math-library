---
id: thm-kan-extensions-as-coends
kind: theorem
title: "Kan extensions as coends and ends"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, def-pointwise-kan-extension-by-the-comma-category-formula, thm-a-weighted-limit-is-an-end, def-set-weighted-limit-and-weighted-colimit, def-hom-functors-and-hom-bifunctor, def-power-and-copower-by-a-set, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter X.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "F. Loregian, (Co)end Calculus, §2.3"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors,
with $\mathcal C$ small and $\mathcal D$ locally small
([[def-small-locally-small-and-large-category]]).

Suppose functorial choices of the required copowers and powers are supplied,
with their universal bijections natural in both index variables, and suppose
the resulting coends and ends in $\mathcal E$ exist.
Then for each object $d$ of $\mathcal D$:

1. the pointwise left Kan extension value of $F$ along $K$ at $d$ is
   $$\operatorname{Lan}_K F(d)\;\cong\;\int^{c}\mathcal D(Kc,d)\cdot F(c),$$
2. the pointwise right Kan extension value of $F$ along $K$ at $d$ is
   $$\operatorname{Ran}_K F(d)\;\cong\;\int_{c}F(c)^{\mathcal D(d,Kc)}.$$

So pointwise Kan extensions are the coend and end formulas suggested by the
hom-weights.

## Facts & Assumptions

**Given:** Functors $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ with $\mathcal C$ small and $\mathcal D$ locally small, functorial choices of the required powers and copowers, and the resulting ends and coends in $\mathcal E$.

[F1] A weighted colimit $W\star F$ represents natural transformations $W\Rightarrow\mathcal E(F-,m)$, while a weighted limit $\{W,F\}$ represents natural transformations $W\Rightarrow\mathcal E(m,F-)$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[L1] Given functorial choices of powers or copowers whose universal bijections are natural in both index variables, a weighted limit is the corresponding end of powers and a weighted colimit is the corresponding coend of copowers ([[thm-a-weighted-limit-is-an-end]], [[def-power-and-copower-by-a-set]]).

[F2] For fixed $d$, the assignment $c\mapsto\mathcal D(Kc,d)$ is a presheaf on $\mathcal C$, while $c\mapsto\mathcal D(d,Kc)$ is a covariant functor on $\mathcal C$; both are obtained by composing $K$ with the corresponding hom-functor of $\mathcal D$ ([[def-hom-functors-and-hom-bifunctor]]).

[L2] The comma-category formulas compute the pointwise left and right Kan extension values ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]], [[def-pointwise-kan-extension-by-the-comma-category-formula]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d\in\mathcal D$. By [L1], the coend $\int^{c}\mathcal D(Kc,d)\cdot F(c)$ is the weighted colimit of $F$ by the presheaf $c\mapsto\mathcal D(Kc,d)$. By [F1], for every $m\in\mathcal E$ morphisms from this object to $m$ are in natural bijection with natural transformations $\mathcal D(K-,d)\Rightarrow\mathcal E(F-,m)$. Unwinding the two functors, such a natural transformation is exactly a family of maps $F(c)\to m$ indexed by arrows $u:Kc\to d$, natural in morphisms of $(K\downarrow d)$; that is precisely a cocone under the comma-category diagram at $d$. Therefore the coend has the same objectwise universal property as the pointwise left Kan extension value at $d$, so [L2] identifies them. [F1, F2, L1, L2]

1.2 Again fix $d$. By [L1], the end $\int_{c}F(c)^{\mathcal D(d,Kc)}$ is the weighted limit of $F$ by the copresheaf $c\mapsto\mathcal D(d,Kc)$. By [F1], for every $m\in\mathcal E$ morphisms from $m$ to this object are in natural bijection with natural transformations $\mathcal D(d,K-)\Rightarrow\mathcal E(m,F-)$. Unwinding these data gives exactly a cone over the diagram on $(d\downarrow K)$ with vertex $m$. So this end has the same objectwise universal property as the pointwise right Kan extension value at $d$, and [L2] identifies them. [F1, F2, L1, L2]

2.1 Since the argument is objectwise in $d$, the displayed coend and end formulas compute the values of the pointwise Kan extensions at every object of $\mathcal D$. [step 1.1, step 1.2] ∎

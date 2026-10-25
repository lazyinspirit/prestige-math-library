---
id: cex-a-complete-category-whose-coseparating-sets-are-never-small
kind: counterexample
title: "A complete locally small category with no small coseparating set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "Small limits must retain set-sized support, every small proposed coseparating family must miss a coordinate, and each object must itself be a set rather than a class-indexed family."
  counterexample_search: "Verified coordinatewise limits, the support bound for small diagrams, local smallness, an explicit undetected pair at a fresh ordinal, and that the support code makes every object and morphism a set with exactly one code per family."
deps: [def-separating-set-and-coseparating-set, def-small-finite-and-large-limits-completeness-and-cocompleteness,
       fs-ordinals-form-a-set, rem-category-theory-class-and-size-conventions]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

An **object** of $\mathcal S$ is a function $x$ whose domain is a set of ordinals
and whose value $x(\alpha)$ at each $\alpha \in \operatorname{dom}(x)$ is a set
that is not a singleton. Read $x$ as the ordinal-indexed family
$$X_\alpha=\begin{cases} x(\alpha) & \alpha\in\operatorname{dom}(x),\\ \{\varnothing\} & \text{otherwise,}\end{cases}$$
so that $\operatorname{dom}(x)=\{\alpha : X_\alpha \text{ is not a singleton}\}$
is the family's **support** and each such family has exactly one code. Objects
are recorded as codes because an object must be a set: a function whose domain is
the whole class of ordinals is not one, and a class is a formula rather than an
entity here ([[rem-category-theory-class-and-size-conventions]]).

A **morphism** $x\to y$ is a family $(f_\alpha)$ of functions
$f_\alpha : X_\alpha\to Y_\alpha$. Outside the set
$\operatorname{dom}(x)\cup\operatorname{dom}(y)$ both coordinates are
$\{\varnothing\}$ and $f_\alpha$ is the unique map between them, so a morphism is
determined by its restriction to that set and is recorded as that restriction —
again a set. Composition and identities are coordinatewise.

Then $\mathcal S$ is complete and locally small but has no small coseparating set.

## Facts & Assumptions

**Given:** The category $\mathcal S$ defined above.

[L1] A coseparating set detects distinct parallel arrows by postcomposition with a map into one of its members ([[def-separating-set-and-coseparating-set]]).

[L2] Completeness means existence of limits for all small diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L3] The ordinals form a proper class, not a set ([[fs-ordinals-form-a-set]]).

## Verification

**Proof technique:** constructive.

1.1 A morphism $x\to y$ is by construction a set-indexed family of functions on the set $\operatorname{dom}(x)\cup\operatorname{dom}(y)$, so the morphisms $x\to y$ form a subset of the product of the function sets $Y_\alpha^{X_\alpha}$ over that index set. That product is a set, so every hom-collection is a set and $\mathcal S$ is locally small. [construct]

1.2 Let $D$ be a small diagram in $\mathcal S$ and let $T$ be the union of the supports of its set of objects, itself a set. Form the limit coordinatewise in $\mathbf{Set}$: at $\alpha\in T$ take the limit $L_\alpha$ of the diagram of coordinates, and at $\alpha\notin T$ every coordinate is $\{\varnothing\}$, so the diagram there is constant at a one-element set and its limit is a one-element set. The code with domain $\{\alpha\in T : L_\alpha \text{ is not a singleton}\}$ and value $L_\alpha$ there is an object of $\mathcal S$, and its cone legs are the coordinatewise limit projections, the unique map being taken outside $T$. A cone over $D$ in $\mathcal S$ is exactly a coordinatewise cone, and the mediating map is coordinatewise unique, so this is a limit of $D$. The empty diagram has $T=\varnothing$ and gives the code with empty domain. Every small diagram therefore has a limit, so [L2] makes $\mathcal S$ complete. [L2]

1.3 Let $\mathcal H$ be any small set of objects of $\mathcal S$. The union $T=\bigcup_{H\in\mathcal H}\operatorname{dom}(H)$ is a set of ordinals. Were every ordinal a member of $T$ the ordinals would be a set, contradicting [L3], so some ordinal lies outside $T$; let $\beta$ be the least one, which is definable from $T$ and involves no selection. [L3]

2.1 Let $x$ be the code with empty domain, so $X_\alpha=\{\varnothing\}$ for every $\alpha$, and let $y$ be the code with domain $\{\beta\}$ and $y(\beta)=\{0,1\}$. The two families $f,g:x\to y$ that send the single element of $X_\beta$ to $0$ and to $1$ respectively, and take the unique map at every other coordinate, are distinct morphisms. For every $H\in\mathcal H$ and every $h:y\to H$, the coordinate $H_\beta$ is $\{\varnothing\}$ because $\beta\notin\operatorname{dom}(H)$, so $h_\beta\circ f_\beta=h_\beta\circ g_\beta$; the two composites agree at every other coordinate as well, so $h\circ f=h\circ g$. [step 1.3]

3.1 Therefore $\mathcal H$ does not detect the pair $f\ne g$ and is not coseparating by [L1]. Since the argument applies to every small $\mathcal H$, $\mathcal S$ has no small coseparating set. [step 2.1, L1, discharge-construct] ∎

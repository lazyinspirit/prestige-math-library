---
id: cex-a-complete-category-whose-coseparating-sets-are-never-small
kind: counterexample
title: "A complete locally small category with no small coseparating set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "Small limits must retain set-sized support, and every small proposed coseparating family must miss a coordinate."
  counterexample_search: "Verified coordinatewise limits, the support bound for small diagrams, local smallness, and an explicit undetected pair at a fresh ordinal."
deps: [def-separating-set-and-coseparating-set, def-small-finite-and-large-limits-completeness-and-cocompleteness, fs-ordinals-form-a-set]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $\mathcal S$ have as objects the ordinal-indexed families of sets
$X=(X_\alpha)_\alpha$ for which
$$\operatorname{supp}(X)=\{\alpha:X_\alpha\text{ is not a singleton}\}$$
is a set, and let morphisms be coordinatewise functions. Then $\mathcal S$ is
complete and locally small but has no small coseparating set.

## Facts & Assumptions

**Given:** The category $\mathcal S$ defined above.

[L1] A coseparating set detects distinct parallel arrows by postcomposition with a map into one of its members ([[def-separating-set-and-coseparating-set]]).

[L2] Completeness means existence of limits for all small diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L3] The ordinals form a proper class, not a set ([[fs-ordinals-form-a-set]]).

## Verification

**Proof technique:** constructive.

1.1 For objects $X,Y$, a morphism is determined by its coordinates in the set $\operatorname{supp}(X)\cup\operatorname{supp}(Y)$; outside that union both sets are singletons and there is only one coordinate map. The relevant product of function sets is therefore a set, so $\mathcal S$ is locally small. [construct]

1.2 Limits of small diagrams are formed coordinatewise in $\mathbf{Set}$. The support of such a limit is contained in the union of the supports of the diagram's set of objects: outside this union the diagram is constantly a singleton and its limit is a singleton. A set-indexed union of sets is a set, and the empty limit is the all-singleton family. Thus every small diagram has an objectwise limit in $\mathcal S$, so [L2] makes it complete. [L2]

1.3 Let $\mathcal H$ be any small set of objects of $\mathcal S$. The union $T=\bigcup_{H\in\mathcal H}\operatorname{supp}(H)$ is a set. By [L3] choose an ordinal $\beta\notin T$. [L3]

2.1 Let $X$ be the all-singleton family and let $Y$ have a two-element set at $\beta$ and singletons elsewhere. There are distinct maps $f,g:X\to Y$ that select different elements at coordinate $\beta$. For every $H\in\mathcal H$ and every $h:Y\to H$, the coordinate $H_\beta$ is a singleton, so $h\circ f=h\circ g$. [step 1.3]

3.1 Therefore $\mathcal H$ does not detect the pair $f\ne g$ and is not coseparating by [L1]. Since the argument applies to every small $\mathcal H$, $\mathcal S$ has no small coseparating set. [step 2.1, L1, discharge-construct] ∎

---
id: fs-measurable-sections-imply-product-measurability
kind: false-statement
title: "FALSE: if every horizontal and vertical section is measurable, then the set is product-measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sections-of-sets-and-functions-on-products, thm-sections-of-product-measurable-sets-are-measurable, def-sigma-algebra, def-countable-choice, thm-countable-union-of-countable, thm-iterated-section-measures-agree-on-product-measurable-sets]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If $E \subseteq X \times Y$ has measurable horizontal sections $E_x$ for every
$x \in X$ and measurable vertical sections $E^y$ for every $y \in Y$, then
$E \in \mathcal A \otimes \mathcal B$.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice. Let $X$ be the set of countable ordinals, let $\mathcal M$ be the sigma-algebra of countable and cocountable subsets of $X$, and let $$E:=\{(x,y)\in X\times X:y<x\}.$$

[L1] Every section of a product-measurable set is measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[L2] A sigma-algebra is closed under complements and countable unions, and under countable choice a countable union of countable sets is countable. ([[def-sigma-algebra]], [[def-countable-choice]], [[thm-countable-union-of-countable]])

[L3] For sigma-finite measures, the two iterated section-measure integrals of a product-measurable set agree. ([[thm-iterated-section-measures-agree-on-product-measurable-sets]])

[A1] Define $\nu$ on $\mathcal M$ by $\nu(A)=0$ for countable $A$ and $\nu(A)=1$ for cocountable $A$. The same countable-union argument as in [L2] shows that $\nu$ is a finite measure on $(X,\mathcal M)$.

## Refutation

**Proof technique:** direct.

1.1 For each $x\in X$, the section $E_x=\{y:y<x\}$ is countable by the choice of $X$, hence measurable for $\mathcal M$. For each $y\in X$, the section $E^y=\{x:y<x\}$ has countable complement $\{x:x\le y\}$, hence is cocountable and measurable. [given, L2]

2.1 Suppose for contradiction that $E$ were product-measurable for $\mathcal M\otimes\mathcal M$. Since $\nu(X)=1$, the measure $\nu$ is finite and hence sigma-finite, so [L3] would give $$\int_X \nu(E_x)\,d\nu = \int_X \nu(E^y)\,d\nu.$$ But step 1.1 makes $\nu(E_x)=0$ for every $x$ and $\nu(E^y)=1$ for every $y$, so the two sides are $0$ and $1$, a contradiction. Therefore $E$ is not product-measurable, even though all of its sections are measurable. This does not contradict [L1], which proves only the forward implication from product-measurability to section measurability. [L1, L3, A1, step 1.1] ∎

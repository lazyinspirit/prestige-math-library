---
id: cex-measurable-sections-do-not-imply-product-measurability
kind: counterexample
title: "A set can have measurable horizontal and vertical sections and still fail to be product-measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sigma-algebra, def-countable-choice, thm-countable-union-of-countable,
       thm-iterated-section-measures-agree-on-product-measurable-sets]
proof_strategy: direct
verification:
  audited: 2026-08-29
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

## Statement refuted

If $E \subseteq X \times Y$ has measurable horizontal and vertical sections for
every parameter, then $E$ is product-measurable.

## Counterexample

**Proof technique:** direct.

Assume the Axiom of Countable Choice. Let $X$ be the set of countable ordinals,
let $\mathcal M$ be the sigma-algebra of countable and cocountable subsets of
$X$, and define
$$E:=\{(x,y)\in X \times X : y<x\}.$$

## Facts & Assumptions

**Given:** The set $E \subseteq X \times X$ above.

[L1] A sigma-algebra is closed under complements and countable unions
([[def-sigma-algebra]]), and under countable choice a countable union of
countable sets is countable ([[def-countable-choice]],
[[thm-countable-union-of-countable]]). Hence the countable-cocountable family
on an uncountable set is a sigma-algebra.

[L2] For sigma-finite measures, the two iterated section-measure integrals of a product-measurable set agree. ([[thm-iterated-section-measures-agree-on-product-measurable-sets]])

[A1] Define $\nu$ on $\mathcal M$ by $\nu(A)=0$ for countable $A$ and $\nu(A)=1$ for cocountable $A$. The same countable-union argument as in [L1] shows that $\nu$ is a finite measure on $(X,\mathcal M)$.

## Verification

1.1 For each $x \in X$, the section $E_x=\{y:y<x\}$ is countable by the choice of $X$, hence measurable for $\mathcal M$. For each $y \in X$, the section $E^y=\{x:y<x\}$ has countable complement $\{x:x\le y\}$, hence is cocountable and measurable. [given, L1]

2.1 Suppose for contradiction that $E$ were product-measurable for $\mathcal M\otimes\mathcal M$. Since $\nu(X)=1$, the measure $\nu$ is finite and hence sigma-finite, so [L2] would give $$\int_X \nu(E_x)\,d\nu = \int_X \nu(E^y)\,d\nu.$$ But step 1.1 makes $\nu(E_x)=0$ for every $x$ and $\nu(E^y)=1$ for every $y$, so the two sides are $0$ and $1$, a contradiction. Therefore $E$ is not product-measurable, even though all of its sections are measurable. Thus the displayed implication is false. [A1, L2, step 1.1] ∎

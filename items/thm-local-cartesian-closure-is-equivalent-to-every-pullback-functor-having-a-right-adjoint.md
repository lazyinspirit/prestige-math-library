---
id: thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint
kind: theorem
title: "Local cartesian closure is equivalent to every pullback functor having a right adjoint"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-cartesian-closed-category, def-slice-category-and-the-pullback-functor, thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed, thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.6.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Let $\mathcal C$ be a category with chosen pullback functors. Then the following are equivalent.

1. $\mathcal C$ is locally cartesian closed.
2. For every morphism $f:X\to Y$, the pullback functor $f^\ast:\mathcal C/Y\to\mathcal C/X$ has a right adjoint.

## Facts & Assumptions

**Given:** A category $\mathcal C$ with chosen pullback functors.

[L1] Local cartesian closedness means that every slice category is cartesian closed ([[def-locally-cartesian-closed-category]]).

[L2] For each $f:X\to Y$, the functors $\Sigma_f$ and $f^\ast$ between slice categories are the postcomposition and pullback functors ([[def-slice-category-and-the-pullback-functor]]).

[L3] Every slice of a locally cartesian closed category is locally cartesian closed, and every locally cartesian closed category has pullbacks ([[thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed]], [[thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits]]).

## Proof

**Proof technique:** iff.

1.1 Assume condition (1), fix $f:X\to Y$, and put $\mathcal K=\mathcal C/Y$. For an object $a:A\to X$ of $\mathcal C/X$, regard $a$ as a morphism $\Sigma_fa\to f$ in $\mathcal K$. By [L1] and [L3], the category $\mathcal K$ is cartesian closed and has pullbacks. Form in $\mathcal K$ the pullback $$\Pi_f(a):=(\Sigma_fa)^f\times_{f^f}\mathbf1,$$ where $(\Sigma_fa)^f\to f^f$ is induced by $a$ and $\mathbf1\to f^f$ is the transpose of $1_f:f\to f$. For $B\to Y$, currying identifies a map $B\to(\Sigma_fa)^f$ with a map $h:B\times_YX\to A$ over $Y$; the pullback equation defining $\Pi_f(a)$ says exactly that $a h$ is the projection $B\times_YX\to X$. Hence $$(\mathcal C/Y)(B,\Pi_f(a))\cong(\mathcal C/X)(f^\ast B,a)$$ naturally in $B$ and $a$. Thus $f^\ast$ has right adjoint $\Pi_f$. [assume-hyp, L1, L2, L3, construct, algebra]

1.2 Assume condition (2), and fix an object $X$. Chosen pullbacks give binary products in $\mathcal C/X$, and $1_X:X\to X$ is terminal there. For $a:A\to X$, the pullback universal property gives $\Sigma_a\dashv a^\ast$, while condition (2) gives $a^\ast\dashv\Pi_a$. The product functor with $a$ on $\mathcal C/X$ is the composite $$-\times_Xa=\Sigma_a a^\ast.$$ Consequently it has right adjoint $\Pi_a a^\ast$. Since this holds for every $a$, the slice $\mathcal C/X$ is cartesian closed. [assume-hyp, L1, L2, construct, algebra]

2.1 Step 1.1 proves that condition (1) implies condition (2). Step 1.2 proves that each slice $\mathcal C/X$ is cartesian closed, so condition (2) implies condition (1). Therefore the two conditions are equivalent. [step 1.1, step 1.2, L1] ∎

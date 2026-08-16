---
id: thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema
kind: theorem
title: "Algebras for the covariant power-set monad are posets with all small suprema and their morphisms preserve every small supremum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-covariant-power-set-monad, def-eilenberg-moore-category, def-t-algebra-and-algebra-homomorphism, def-preorder, prop-completeness-and-cocompleteness-in-poset-categories, def-partial-order]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Exercise VI.2.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

The Eilenberg–Moore category of the covariant power-set monad is isomorphic to the category of posets admitting every small supremum and maps preserving every small supremum.

## Facts & Assumptions

**Given:** The covariant power-set monad with singleton unit and union multiplication.

[L1] The covariant power-set monad has singleton unit and union multiplication ([[thm-the-covariant-power-set-monad]]), while an algebra map $a:TX\to X$ satisfies $a\eta_X=1_X$ and $aT(a)=a\mu_X$, and a homomorphism $f$ satisfies $fa=bT(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L2] A poset has all small suprema exactly when every set of its elements has a least upper bound ([[prop-completeness-and-cocompleteness-in-poset-categories]]).

[L3] Antisymmetry is the condition that $x\leq y$ and $y\leq x$ imply $x=y$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Given an algebra $a$, define $x\leq y$ when $a(\{x,y\})=y$. The singleton law gives reflexivity; symmetry of the set $\{x,y\}$ gives antisymmetry; and the flattening law makes the induced binary join associative, from which transitivity follows. Thus this is a partial order. [L1, L3]

2.1 For every $A\subseteq X$, put $\sup A=a(A)$. Applying the flattening law to families formed from $A$, its singleton subsets, and an arbitrary common upper bound proves respectively that every member of $A$ lies below $a(A)$ and that $a(A)$ lies below every upper bound; this includes $A=\varnothing$. The algebra-homomorphism equation $fa=b\mathcal P(f)$ says exactly that $f(\sup A)=\sup f[A]$. [L1, L2, step 1.1]

3.1 Conversely, on a poset with all small suprema define $a(A)=\sup A$. Singleton suprema give the unit law, and $\sup(\bigcup\mathcal A)=\sup\{\sup A:A\in\mathcal A\}$ gives the multiplication law. A map satisfies the algebra-homomorphism equation exactly when it preserves these suprema. [L1, L2, step 2.1] ∎

---
id: ex-yoneda-lemma-for-a-monoid-action
kind: example
title: "For a monoid action, Yoneda says that an equivariant map from the regular action is determined by the identity element"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-yoneda-evaluation-bijection, thm-yoneda-lemma-is-natural-in-both-variables, prop-monoids-and-groups-as-one-object-categories, prop-sets-and-functions-form-category-set, def-semigroup-and-monoid, def-natural-transformation]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 2.2.3 and Theorem 2.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $M$ be a monoid with identity $e$, viewed as the one-object category $BM$.
A functor $F:BM\to\mathbf{Set}$ is a set $X=F(*)$ with a left $M$-action.
The representable $BM(*,-)$ is the left regular action of $M$ on itself, and
Yoneda becomes the bijection

$$\{\phi:M\to X\mid \phi\text{ is }M\text{-equivariant}\}\xrightarrow{\cong}X,\qquad \phi\longmapsto\phi(e),$$

with inverse $x\mapsto(m\mapsto m\cdot x)$.

## Facts & Assumptions

**Given:** A monoid $(M,\cdot,e)$, its one-object category $BM$, and a functor $F:BM\to\mathbf{Set}$.

[F1] A monoid has associative multiplication and a two-sided identity ([[def-semigroup-and-monoid]]).

[L1] Every monoid is a one-object category ([[prop-monoids-and-groups-as-one-object-categories]]). This example fixes the resulting data explicitly: $BM(*,*)=M$, and composition is taken to be $n\circ m=nm$, the convention that makes the represented functor a left action.

[F2] Sets and functions form the category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[L2] Evaluation at the identity is a bijection $\operatorname{Nat}(BM(*,-),F)\to F(*)$ whose inverse sends $x$ to the natural transformation with component $m\mapsto F(m)(x)$ ([[lem-yoneda-evaluation-bijection]]), and it is natural in the represented object and in the target functor ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[F3] A natural transformation has components commuting with the action of every source morphism ([[def-natural-transformation]]).

## Verification

**Proof technique:** constructive.

1.1 Put $m\cdot x=F(m)(x)$. Functoriality and [L1] give $e\cdot x=x$ and $(nm)\cdot x=n\cdot(m\cdot x)$, so this is a left action. [given, L1, F1, F2]

1.2 The covariant representable $BM(*,-)$ has value $M$ and sends $n$ to postcomposition $m\mapsto n\circ m=nm$, so it is the left regular action. [L1]

2.1 A natural transformation $BM(*,-)\Rightarrow F$ is a function $\phi:M\to X$ satisfying $\phi(nm)=n\cdot\phi(m)$ for all $m,n$, exactly equivariance for the two left actions. [step 1.1, step 1.2, F3]

3.1 If $\phi$ is equivariant, then $\phi(m)=\phi(me)=m\cdot\phi(e)$. Conversely, for $x\in X$, the function $\phi_x(m)=m\cdot x$ satisfies $\phi_x(nm)=(nm)\cdot x=n\cdot\phi_x(m)$ by step 1.1 and has $\phi_x(e)=x$. [step 1.1, step 2.1, F1, construct]

4.1 Step 3.1 proves directly that evaluation at $e$ and $x\mapsto\phi_x$ are inverse. These are precisely the formulas in [L2], whose target-functor naturality says that the bijection commutes with every equivariant map of $M$-sets. [step 3.1, L2, discharge-construct] ∎

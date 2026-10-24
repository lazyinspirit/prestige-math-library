---
id: ex-a-distributive-law-between-two-finite-closure-operator-monads
kind: example
title: "Adjoining one of two fixed points defines commuting closure-operator monads whose distributive law yields their composite"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "Commuting endomaps need not satisfy the typed distributive-law equations unless their monad structures and composite are checked."
  counterexample_search: "Evaluated both closure maps, both composites, and the composite closure on every subset of the displayed finite carrier; all distributive-law sources and targets coincide in the thin category."
deps: [def-distributive-law-between-two-monads, thm-a-distributive-law-makes-the-composite-a-monad, thm-monads-on-a-preorder-are-exactly-closure-operators, def-power-set, def-partial-order]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On $\mathcal P(\{a,b,c\})$ ordered by inclusion, define

$$S(A)=A\cup\{a\},\qquad T(A)=A\cup\{b\}.$$

These closure-operator monads commute, and their equality $ST=TS$ gives a distributive law whose composite adjoins both $a$ and $b$.

## Facts & Assumptions

**Given:** The inclusion poset $P=\mathcal P(\{a,b,c\})$ and the displayed maps $S,T:P\to P$.

[L1] A monotone, extensive, idempotent map on a poset defines a monad ([[thm-monads-on-a-preorder-are-exactly-closure-operators]]).

[L2] A distributive law $ST\Rightarrow TS$ must satisfy the unit and multiplication compatibility diagrams ([[def-distributive-law-between-two-monads]]).

[L3] Such a distributive law gives a monad structure on $TS$ ([[thm-a-distributive-law-makes-the-composite-a-monad]]).

## Verification

**Proof technique:** direct.

1.1 Union with a fixed subset is monotone, extensive, and idempotent. Thus $S$ and $T$ are closure-operator monads by [L1]. [L1]

2.1 For every $A$, $S(T(A))=A\cup\{a,b\}=T(S(A))$. This equality gives $\lambda:ST\Rightarrow TS$; all diagrams in [L2] commute because $P$ is thin and the parallel arrows have the displayed common endpoints. [L2, step 1.1]

3.1 On $\varnothing,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\}$, both composites respectively give $\{a,b\},\{a,b\},\{a,b\},\{a,b,c\},\{a,b\},\{a,b,c\},\{a,b,c\},\{a,b,c\}$. This checks the formula at every object, including the empty set. [step 2.1]

4.1 By [L3], the distributive law makes $TS$ a monad; its unit is the inclusion $A\subseteq A\cup\{a,b\}$ and its multiplication is the idempotence equality for the closure operator adjoining both fixed points. [L1, L3, step 2.1, step 3.1] ∎

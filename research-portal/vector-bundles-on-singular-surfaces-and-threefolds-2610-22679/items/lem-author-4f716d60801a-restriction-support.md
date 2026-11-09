---
id: lem-author-4f716d60801a-restriction-support
kind: lemma
title: Restriction, stalks and cohomological support
status: published
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume the Axiom of Choice. Let $X$ be a scheme, $U\subseteq X$ open, and $x\in X$. Restriction and taking the stalk at $x$ induce exact functors $\mathcal D(X)\to\mathcal D(U)$ and $\mathcal D(X)\to\mathcal D(\mathcal O_{X,x})$. For $E\in\mathcal D(X)$ put $\operatorname{Supp}(E)=\bigcup_n\{x:H^n(E)_x\ne0\}$. This support is invariant under equivalence. For $T\subseteq X$, it is contained in $T$ exactly when the stalk complex at every point outside $T$ is acyclic. If $T$ is closed, this is equivalent to $E|_{X\setminus T}\simeq0$. Support is unchanged by shifts, is contained in the union of the supports of the first two objects of a cofiber sequence, and cannot increase on passing to a retract.

## Facts & Assumptions
**Given:** $X$, $U$, $x$, $T$ and $E$ as stated.

**Goal:** Establish exactness and the support assertions.

[A1] Choice is used to invoke the derived enhancement in [F1], in suitable fixed universes; no extra choice is needed by the stalkwise argument. [[math:def-axiom-of-choice]]

[F1] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the derived localizations and represents cofibers by cones.

## Proof
1.1 Restriction is exact because sheaf exactness is local. Stalks are exact: a germ relation or a local preimage is witnessed on a sufficiently small neighbourhood. Both operations therefore commute with cohomology and preserve quasi-isomorphisms. They preserve zero and mapping cones degreewise, and hence induce exact functors by [F1]. [F1, given]

2.1 Equivalent objects have isomorphic cohomology sheaves. By step 1.1, the cohomology of a stalk complex is the stalk of the cohomology sheaf, proving the stalkwise criterion. A sheaf vanishes exactly when all its stalks vanish, so, when $X\setminus T$ is open, the same criterion is equivalent to vanishing of all cohomology sheaves of the restriction, hence to its being zero in the derived localization. [F1, step 1.1]

3.1 Shifts merely reindex cohomology. The long exact cohomology sequence of a cone shows that a cofiber stalk is acyclic when the two preceding stalks are. A retract induces retracts on cohomology stalks, so its support is contained in that of the original object. These observations prove the remaining assertions. [F1, step 1.1, step 2.1] ∎

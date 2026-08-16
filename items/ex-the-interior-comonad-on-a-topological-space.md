---
id: ex-the-interior-comonad-on-a-topological-space
kind: example
title: "Topological interior is a comonad on the preorder of subsets, with the open subsets as its coalgebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-comonads-on-a-preorder-are-interior-operators, def-coalgebra-for-a-comonad-and-coalgebra-homomorphism, def-interior-closure-boundary-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.7 and 5.2.6(iv)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a topological space $X$, topological interior defines a comonad on the poset $(\mathcal P(X),\subseteq)$. Its coalgebras are exactly the open subsets of $X$.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] The interior $\operatorname{int}(A)$ is the largest open subset of $A$; in particular $\operatorname{int}(A)\subseteq A$, and $A$ is open if and only if $A=\operatorname{int}(A)$ ([[def-interior-closure-boundary-top]]).

[L2] Interior operators on a poset are exactly comonads on its associated category ([[cor-comonads-on-a-preorder-are-interior-operators]]).

[L3] A coalgebra structure on $A$ is an arrow $A\to G(A)$ satisfying the coalgebra equations ([[def-coalgebra-for-a-comonad-and-coalgebra-homomorphism]]).

## Verification

**Proof technique:** direct.

1.1 If $A\subseteq B$, then $\operatorname{int}(A)$ is an open subset of $B$, so maximality in [L1] gives $\operatorname{int}(A)\subseteq\operatorname{int}(B)$. Also [L1] gives $\operatorname{int}(A)\subseteq A$, and, since $\operatorname{int}(A)$ is open, it gives $\operatorname{int}(\operatorname{int}(A))=\operatorname{int}(A)$. These arguments include $A=\varnothing$ and the empty ambient space. [L1]

2.1 By [L2], the interior operator therefore defines a comonad. [L2, step 1.1]

3.1 By [L3], a coalgebra structure on $A$ is the inclusion $A\subseteq\operatorname{int}(A)$. Together with the reverse inclusion from [L1], this is equality, which holds exactly when $A$ is open. [L1, L3, step 2.1] ∎

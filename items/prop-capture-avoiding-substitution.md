---
id: prop-capture-avoiding-substitution
kind: proposition
title: "Canonical capture-avoiding substitution"
status: published
origin: pipeline
deps: ["lem-fresh-bound-variable-renaming", "lem-formula-substitution-satisfaction"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 pp.17\u201318."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

There is a canonical total capture-avoiding substitution $\phi\langle t/x\rangle$ on formulas, obtained by renaming obstructing binders using least unused variable indices. It replaces the original free occurrences of $x$ and satisfies

$$\mathcal M,s\models\phi\langle t/x\rangle\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$

Canonicity refers to the specified coding and traversal, not to literal invariance under other fresh-variable conventions.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] If $z\ne y$ is absent from $\operatorname{Var}(\psi)$, then $z$ is free for $y$ in $\psi$, and $\exists y\psi$ and $\exists z(\psi[z/y])$ have the same truth in every structure and assignment. Here raw substitution replaces only occurrences free in $\psi$, hence only those bound by the displayed outer binder. A least fresh variable exists outside any specified finite set of variables. ([[lem-fresh-bound-variable-renaming]])

[F2] If $t$ is free for $x$ in $\psi$, then for every structure $\mathcal M$ and assignment $s$,
$$\mathcal M,s\models\psi[t/x]\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\psi.$$
([[lem-formula-substitution-satisfaction]])

## Proof

1.1 Traverse the original parse tree in preorder, visiting the left child before the right child. Begin with the finite forbidden set $\operatorname{Var}(\phi)\cup\operatorname{Var}(t)\cup\{x\}$. Rename every binder whose variable belongs to $\operatorname{FV}(t)\cup\{x\}$ to the least index outside the current forbidden set, add that variable to the forbidden set, and rename exactly the occurrences governed by that binder. At each operation the new name is absent from the entire current formula, so the fresh-renaming lemma applies. [F1, construct]

2.1 There are only finitely many original binder nodes. Renaming changes names but neither the tree nor the number of nodes; hence the traversal terminates and produces a uniquely specified formula $\phi^*$. Repeated fresh-renaming equivalence gives the same truth as $\phi$ at every assignment. Original free occurrences are unchanged; all remaining binders avoid $x$ and $\operatorname{FV}(t)$. [F1, step 1.1]

3.1 Set $\phi\langle t/x\rangle=\phi^*[t/x]$. Now $t$ is free for $x$ in $\phi^*$, so F2 identifies its truth at $s$ with the truth of $\phi^*$ at $s[x:=\llbracket t\rrbracket_s]$. Step 2.1 changes that last formula back to $\phi$. This proves both directions and totality. [F2, step 2.1] ∎

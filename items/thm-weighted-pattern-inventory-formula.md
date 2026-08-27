---
id: thm-weighted-pattern-inventory-formula
kind: theorem
title: "The weighted pattern inventory is the cycle index evaluated at the power sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-fixed-colourings-factor-by-cycle-type,
       def-colouring-action-weight-function-and-pattern-inventory,
       thm-polya-enumeration-theorem,
       thm-cauchy-frobenius-orbit-counting]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: Pólya's Inventory Theorem"
      url: "https://theory.stanford.edu/~blynn/polya/polya.html"
pipeline_run: null
---

## Statement

Let a finite group $G$ act on a finite set $X$, let $C$ be a finite colour set,
let $R$ be a commutative ring, and let $w:C \to R$ be a weight function. For
each $d \ge 1$, put

$$p_d:=\sum_{c \in C} w(c)^d.$$

Then

$$|G|\,\mathcal{I}_G(X,C;w)=\sum_{g \in G}\prod_{d \ge 1} p_d^{j_d(g)}.$$

If moreover the scalar $1/|G|$ is defined in $R$ (in particular if $R$ is a
commutative $\mathbb{Q}$-algebra), then equivalently

$$\mathcal{I}_G(X,C;w)=Z_G(p_1,p_2,\dots,p_{|X|}).$$

## Facts & Assumptions

**Given:** the action $G \curvearrowright X$, the colour set $C$, and the weight function $w:C \to R$.

[F1] The pattern inventory is the sum of the common orbit weights of the colouring orbits, and the induced action preserves colouring weights ([[def-colouring-action-weight-function-and-pattern-inventory]]).

[L1] The weighted sum of the colourings fixed by one group element factors as $\prod_d p_d^{j_d(g)}$ ([[lem-fixed-colourings-factor-by-cycle-type]]).

[L2] Cauchy-Frobenius orbit counting averages fixed-point counts for any finite group action ([[thm-cauchy-frobenius-orbit-counting]]).

## Proof

**Proof technique:** direct.

1.1 Because weights are preserved on orbits by [F1], the colouring set $C^X$ splits into finitely many $G$-stable blocks according to the value $u$ of $\operatorname{wt}(f)$. For one such value $u$, let $\mathcal{C}_u$ be the set of colourings of weight $u$. Applying [L2] to the induced action on the finite set $\mathcal{C}_u$ gives $|G|\,|\mathcal{C}_u/G|=\sum_{g \in G} |\mathcal{C}_u^g|$. [F1, L2]

2.1 Multiply the identity of step 1.1 by $u$ and sum over all weight values $u$. The left-hand side becomes $|G|\,\mathcal{I}_G(X,C;w)$ by [F1], while the right-hand side becomes $\sum_{g \in G}\sum_{\substack{f:X \to C\\ g \cdot f=f}}\operatorname{wt}(f)$. [step 1.1, F1]

3.1 Replace the inner weighted fixed-colouring sum in step 2.1 by [L1]. This gives $|G|\,\mathcal{I}_G(X,C;w)=\sum_{g \in G}\prod_{d \ge 1} p_d^{j_d(g)}$. When $1/|G|$ is defined in $R$, divide by $|G|$ to obtain $\mathcal{I}_G(X,C;w)=Z_G(p_1,p_2,\dots,p_{|X|})$. [step 2.1, L1] ∎

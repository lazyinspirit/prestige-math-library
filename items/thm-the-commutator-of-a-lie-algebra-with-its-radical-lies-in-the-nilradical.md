---
id: thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical
kind: theorem
title: The commutator with the radical lies in the nilradical
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra, def-nilradical-of-a-finite-dimensional-lie-algebra, thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero, def-semidirect-product-of-lie-algebras, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras, cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero, prop-nilpotent-lie-algebras-are-solvable]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Proposition 1.40 and Corollary 1.41"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Proposition 1.40 and Corollary 1.41, printed pp. 48–49"
---

## Statement

For a finite-dimensional Lie algebra $\mathfrak g$ over a
characteristic-zero field,

$$[\mathfrak g,\operatorname{rad}(\mathfrak g)]\subseteq\operatorname{nilrad}(\mathfrak g).$$

## Facts & Assumptions

**Given:** A finite-dimensional characteristic-zero Lie algebra $\mathfrak g$.

[L1] The radical is the largest solvable ideal
([[def-radical-of-a-finite-dimensional-lie-algebra]]).

[L2] The nilradical is the largest nilpotent ideal
([[def-nilradical-of-a-finite-dimensional-lie-algebra]]), whose existence is
proved in
[[thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero]].

[L3] A derivation action defines a semidirect-product Lie algebra in which the
acted-on algebra is an ideal ([[def-semidirect-product-of-lie-algebras]]).

[L4] An extension of a solvable ideal by a solvable quotient is solvable
([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

[L5] The derived algebra of a finite-dimensional solvable Lie algebra in
characteristic zero is nilpotent
([[cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero]]).

[L6] Every nilpotent Lie algebra is solvable
([[prop-nilpotent-lie-algebras-are-solvable]]).

## Proof

**Proof technique:** direct.

1.1 First let $\mathfrak s$ be any finite-dimensional solvable characteristic-zero Lie algebra and $D\in\operatorname{Der}(\mathfrak s)$. Form $\mathfrak h=kt\ltimes_D\mathfrak s$ as in [L3], where $t$ acts by $D$. The ideal $\mathfrak s$ is solvable and $\mathfrak h/\mathfrak s\cong kt$ is abelian, so [L4] makes $\mathfrak h$ solvable. Its derived algebra $\mathfrak h'$ is a nilpotent ideal by [L5], and $\mathfrak h'\subseteq\mathfrak s$ because the quotient is abelian. Hence $\mathfrak h'$ is a nilpotent ideal of $\mathfrak s$, so [L2] gives $\mathfrak h'\subseteq\operatorname{nilrad}(\mathfrak s)$. Since $D(y)=[t,y]\in\mathfrak h'$ for every $y\in\mathfrak s$, we have $D(\mathfrak s)\subseteq\operatorname{nilrad}(\mathfrak s)$. [L2, L3, L4, L5, algebra]

2.1 Put $\mathfrak r=\operatorname{rad}(\mathfrak g)$ and $\mathfrak n_r=\operatorname{nilrad}(\mathfrak r)$. For each $x\in\mathfrak g$, ideality of $\mathfrak r$ makes $\operatorname{ad}_x|_{\mathfrak r}$ a derivation of the solvable Lie algebra $\mathfrak r$. Step 1.1 therefore gives $[x,\mathfrak r]\subseteq\mathfrak n_r$, and in particular $[x,\mathfrak n_r]\subseteq\mathfrak n_r$. Thus $\mathfrak n_r$ is a nilpotent ideal of the ambient algebra $\mathfrak g$. [L1, L2, step 1.1, algebra]

3.1 By maximality in [L2], step 2.1 gives $\mathfrak n_r\subseteq\operatorname{nilrad}(\mathfrak g)$. Conversely, $\operatorname{nilrad}(\mathfrak g)$ is solvable by [L6], hence lies in $\mathfrak r$ by [L1]; inside $\mathfrak r$ it is still a nilpotent ideal, so maximality gives $\operatorname{nilrad}(\mathfrak g)\subseteq\mathfrak n_r$. Therefore the two nilradicals are equal. Combining this equality with $[\mathfrak g,\mathfrak r]\subseteq\mathfrak n_r$ from step 2.1 proves the claim. If $\mathfrak r=0$ or $\mathfrak g=0$, every subspace displayed here is zero. No choice principle is used. [L1, L2, L6, step 2.1] ∎

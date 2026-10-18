---
id: lem-temperley-lieb-link-state-gram-form-is-invariant
kind: lemma
title: "The link-state Gram form is symmetric and invariant"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, PDF pp. 12–14, Lemma 3.1 and Lemma 3.2: the reflection/capping form, its invariance, and its relation to diagram multiplication."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §1, printed pp. 9–11, and Proposition 2.7: the cellular cell form and its adjointness identity."
---

## Statement

Let $R$, $\delta$, $n$, $t$ and $W_{n,t}(R,\delta)$ be as in [[def-temperley-lieb-link-state-standard-modules]]. For link states $x,y$, let $x^*$ denote reflection across a horizontal line. The diagram $y\circ x^*:t\to t$ is either $\delta^c1_t$ for some $c\ge0$ or has fewer than $t$ propagating components. Define $\phi_{n,t}(x,y)=\delta^c$ in the first case and $0$ in the second, and extend $R$-bilinearly. Then $\phi_{n,t}$ is symmetric and satisfies

$$\phi_{n,t}(x\cdot a,y)=\phi_{n,t}(x,y\cdot a^*)$$

for all $x,y\in W_{n,t}(R,\delta)$ and $a\in\mathrm{TL}_n(R,\delta)$. Here $a^*$ is reflection across a horizontal line. The matrix of $\phi_{n,t}$ in the link-state basis is the Gram matrix obtained by reflecting and capping two link states, with one factor $\delta$ for each closed loop.

## Facts & Assumptions

**Given:** A commutative ring $R$ with unit, $\delta\in R$, $n\ge0$, an allowed $t$, and link-state representatives in $M_R(n,t)$.

[F1] The link states are the basis cosets of diagrams with $t$ propagating components, and the right action is $x\cdot a=[x\circ a]$ ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] Diagram composition is associative and each closed component contributes one factor $\delta$ ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

## Proof

**Proof technique:** direct.

1.1 For basis link states $x$ and $y$, the composite $y\circ x^*$ is a diagram from $t$ to $t$. If all $t$ boundary points propagate, planarity forces them to connect in their order, so after removing $c$ closed loops the result is $\delta^c1_t$ for a unique $c$. Otherwise it has fewer than $t$ propagating components. Thus the stated value is determined by the matching and loop count, and it extends uniquely to an $R$-bilinear form on the free link-state basis [F1, F2]. [F1, F2, given, construct]

2.1 Reflection reverses the order of stacking, fixes each scalar $\delta$, and sends $y\circ x^*$ to $x\circ y^*$. Hence $y\circ x^*=\delta^c1_t$ exactly when $x\circ y^*=\delta^c1_t$ with the same $c$; the lower-propagating case is also preserved. Therefore $\phi_{n,t}(x,y)=\phi_{n,t}(y,x)$ on basis states and, by bilinearity, on all module elements. [F1, F2, step 1.1]

3.1 For basis states $x,y$ and a basis diagram $a\in\mathrm{TL}_n$, reflection gives $(x\circ a)^*=a^*\circ x^*$. Both form values are therefore the coefficient of $1_t$ in the same associative composite $y\circ(x\circ a)^*=y\circ a^*\circ x^*=(y\circ a^*)\circ x^*$. They have the same exterior matching and number of removed loops, so their coefficients of $1_t$ agree. If an intermediate term has fewer than $t$ propagating components, it remains lower-propagating after further stacking and contributes zero on both sides. This proves the invariance identity for basis states and basis diagrams; bilinearity proves it for all $x,y,a$. [F1, F2, step 1.1, step 2.1] ∎

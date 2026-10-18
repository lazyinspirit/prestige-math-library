---
id: thm-temperley-lieb-link-state-diagram-basis-is-cellular
kind: theorem
title: "The Temperley–Lieb link-state diagram basis is cellular"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, lem-temperley-lieb-link-state-gram-form-is-invariant, def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws, def-cellular-algebra-basis-and-cell-module]
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
      locator: "§3, PDF pp. 11–14: standard modules, reflected half-diagrams, and the product/form identity; their proof is over C."
    - title: "John Enyang and Frederick M. Goodman, Cellular bases for algebras with a Jones basic construction"
      url: "https://arxiv.org/pdf/1106.5339"
      locator: "§6.4.1–6.4.2, printed pp. 33–35, Propositions 6.22 and Theorem 6.23: the explicit Temperley–Lieb cellular datum and identification of its Murphy-type basis with the diagram basis over Z[δ]."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §1, printed pp. 9–11: the Graham–Lehrer cellular axioms, cell modules, and cell form."
---

## Statement

Let $R$ be a commutative ring with unit, $\delta\in R$, and $n\ge0$. Let $\Lambda_n$ be the set of $t$ with $0\le t\le n$ and $n-t$ even, ordered by $\lambda_r\unrhd\lambda_t$ exactly when $r\le t$. Thus labels with fewer propagating strands are strictly greater. For $x,y\in T_{n,t}$, define

$$C^t_{x,y}:=x^*\circ y\in\mathrm{TL}_n(R,δ),$$

where $x,y:n\to t$ are link-state diagrams and $*$ is reflection across a horizontal line. Then the diagrams $C^t_{x,y}$, for all $t\in\Lambda_n$ and $x,y\in T_{n,t}$, form an $R$-basis of $\mathrm{TL}_n(R,\delta)$, and $(C,\Lambda_n)$ is a cellular basis in the convention of [[def-cellular-algebra-basis-and-cell-module]]. Its cell module at $\lambda_t$ is $W_{n,t}(R,\delta)$, and its cell form is the Gram form $\phi_{n,t}$ of [[lem-temperley-lieb-link-state-gram-form-is-invariant]].

## Facts & Assumptions

**Given:** $R$, $\delta$, $n$, the diagram algebra $\mathrm{TL}_n(R,\delta)$, its link-state bases, and the form $\phi_{n,t}$.

[F1] Every basis diagram is a noncrossing pairing of $n$ top and $n$ bottom points, and composition glues diagrams with coefficient $\delta$ for each closed component ([[def-temperley-lieb-diagram-category]]).

[F2] Composition is associative, and vertical reflection reverses the order of stacking while preserving the number of removed loops ([[thm-temperley-lieb-diagram-category-laws]], with the reflection rule verified in the proof below).

[F3] The cellular axioms require a basis indexed by a finite poset with an involutive algebra anti-automorphism and the fixed-first-index triangular multiplication rule ([[def-cellular-algebra-basis-and-cell-module]]).

[F4] Link states have exactly t propagating strands and their right action is well-defined; φ_{n,t} is the symmetric invariant capping form ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]], [[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Every diagram $D:n\to n$ has a definite number $t$ of propagating strands, with $0\le t\le n$ and $n-t$ even. Cut each propagating strand at a horizontal midpoint. The upper half, reflected, is a link state $x:n\to t$; the lower half is a link state $y:n\to t$. Conversely, $x^*\circ y$ joins the $t$ corresponding defect endpoints in order and yields a diagram with exactly $t$ propagating strands. The cuts are determined by $D$, so these constructions are inverse. Thus the diagrams $C^t_{x,y}$ are in bijection with the basis diagrams of $\mathrm{TL}_n$ and hence form an $R$-basis. [F1, F4, given, construct]

2.1 Define $*$ on every basis diagram by horizontal reflection and extend $R$-linearly. Reflecting a stack reverses its two factors and preserves each closed component, so $(ab)^*=b^*a^*$; reflecting twice restores the original pairing and $1_n^*=1_n$. Also $(C^t_{x,y})^*=C^t_{y,x}$. Thus $*$ is the involutive anti-automorphism required by [F3]. [F1, F2, F3, step 1.1]

2.2 For $t\in\Lambda_n$, let $J_t$ be the span of diagrams with fewer than $t$ propagating strands. The stated order makes these exactly the basis elements indexed by labels strictly greater than $\lambda_t$, so $J_t=A^{\rhd\lambda_t}$. Every propagating path in a stacked product must pass through a distinct propagating path in each factor, so a product has no more propagating strands than either factor; therefore $J_t$ is a two-sided ideal. For $a\in\mathrm{TL}_n$, write the quotient of $y\circ a$ in $M_R(n,t)/M_R^{<t}(n,t)$ as $\sum_v r_v v$ in its link-state basis. Then $C^t_{x,y}a=x^*\circ(y\circ a)\equiv\sum_v r_v C^t_{x,v}$ modulo $J_t$. The coefficients $r_v$ are those of $y\cdot a$ and are independent of $x$, so this is exactly the fixed-first-index cellular multiplication rule in [F3]. [F3, F4, step 1.1, algebra]

3.1 For link states $y,u$, the middle composite $y\circ u^*$ is a diagram $t\to t$. If it has all $t$ propagating strands, planarity makes it $\delta^c1_t$, and the full product is $C^t_{x,y}C^t_{u,v}=x^*\circ(y\circ u^*)\circ v=\phi_{n,t}(u,y)C^t_{x,v}=\phi_{n,t}(y,u)C^t_{x,v}$, using symmetry of the form. If $y\circ u^*$ has fewer than $t$ propagating strands, the full product also has fewer than $t$ and lies in $J_t$, so the same congruence holds with coefficient zero. Hence $\phi_{n,t}$ is the cellular cell form. Finally, the generic right cell-module action read from $C^t_{x,x}a$ has the same coefficients $r_v$ as $y\cdot a$ in step 2.2, so its basis and action identify with $W_{n,t}$. [F3, F4, step 2.2, algebra] ∎

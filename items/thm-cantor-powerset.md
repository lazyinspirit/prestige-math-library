---
id: thm-cantor-powerset
kind: theorem
title: "Cantor's theorem: $A \\prec \\mathcal{P}(A)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: [thm-cantor-diagonal, cantors-theorem]
landmark: true
short: "no surjection $A\\to\\mathcal P(A)$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cantor's diagonal argument (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument"
pipeline_run: null
---

## Statement

Let $A$ be a set and $\mathcal{P}(A)$ its power set. Then there is **no
surjection** $A \to \mathcal{P}(A)$ ([[def-injection-surjection-bijection]]).

Consequently $A \not\approx \mathcal{P}(A)$ while $A \preceq \mathcal{P}(A)$,
that is, $A \prec \mathcal{P}(A)$ ([[def-equinumerous]]): the power set is
strictly larger, for every set whatsoever.

This is Cantor's diagonal argument in its non-circular form. It uses nothing
about $\mathbb{R}$, nothing about decimal or binary expansions, and no choice
principle: only the Power Set axiom, to form $\mathcal{P}(A)$, and Separation, to
form the diagonal set.

## Facts & Assumptions

**Given:** A set $A$, its power set $\mathcal{P}(A) = \{\, X : X \subseteq A \,\}$, which is a set by the Power Set axiom, and the Separation axiom scheme, which turns any property of elements of $A$ into a subset of $A$.

[L1] Injection, surjection and bijection; a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means a bijection $A \to B$ exists, $A \preceq B$ means an injection $A \to B$ exists, and $A \prec B$ means $A \preceq B$ and $A \not\approx B$ ([[def-equinumerous]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that some function $f : A \to \mathcal{P}(A)$ is surjective. [assume-contra]

1.2 The map $x \mapsto \{x\}$ is a function $A \to \mathcal{P}(A)$ and is injective, since $\{x\} = \{y\}$ forces $x = y$; hence $A \preceq \mathcal{P}(A)$, independently of the assumption. [L1, L2]

2.1 By Separation the diagonal set $D = \{\, x \in A : x \notin f(x) \,\}$ is a subset of $A$, hence an element of $\mathcal{P}(A)$. [step 1.1, given, construct]

3.1 By surjectivity there is $d \in A$ with $f(d) = D$. [step 1.1, step 2.1]

4.1 Then $d \in D$ if and only if $d \notin f(d) = D$, by the definition of $D$ and $f(d) = D$; a statement equivalent to its own negation is impossible, so no surjection $A \to \mathcal{P}(A)$ exists. In particular no bijection does, so $A \not\approx \mathcal{P}(A)$, and with step 1.2, $A \prec \mathcal{P}(A)$. [step 1.2, step 2.1, step 3.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the "diagonal" is.** Reading $f$ as a table whose row $x$ lists which elements belong to $f(x)$, the set $D$ flips the diagonal entries: $x \in D$ exactly when the entry at position $(x,x)$ says "no". The resulting subset differs from every row in at least one place, namely on the diagonal, so it is no row at all.

- **Why this is the diagonal argument that survives in this library.** The familiar diagonal proof that $\mathbb{R}$ is uncountable alters the digits of a decimal expansion. Decimal expansions are infinite series, which this library has not built, so that proof would rest on machinery that is not yet available. Applied to power sets the argument needs nothing but Separation, and $\mathbb{R}$ is instead proved uncountable by Cantor's earlier nested-interval argument ([[thm-r-uncountable]]).

- Taking $A = \mathbb{N}$ gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$. It also gives that $\mathcal{P}(\mathbb{N})$ is **uncountable**, and by the shortest possible route: $\mathcal{P}(\mathbb{N})$ is nonempty, so if it were at most countable there would be a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ ([[lem-countable-iff-surjection-from-n]]), which is exactly what the theorem forbids. No fact about finite sets is needed for this. Iterating gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N}) \prec \mathcal{P}(\mathcal{P}(\mathbb{N})) \prec \cdots$, so there is no largest set and no "set of all sets": such a set would have its own power set as a subset, contradicting the theorem.

- The proof is the same argument as Russell's paradox, in a form where nothing goes wrong: the assumption refuted is not the existence of a set but the surjectivity of a function. See [[rem-continuum-hypothesis]] for what is, and is not, known about the gap between $\mathbb{N}$ and $\mathcal{P}(\mathbb{N})$.

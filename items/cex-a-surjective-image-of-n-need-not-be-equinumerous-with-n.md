---
id: cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n
kind: counterexample
title: "A nonempty surjective image of $\\mathbb{N}$ need not be equinumerous with $\\mathbb{N}$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-countable-iff-surjection-from-n, lem-pigeonhole, def-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       thm-omega-is-peano-system, def-function, def-unordered-pair-and-singleton,
       def-cartesian-product]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6, Proposition 1.44 and its proof, printed pp. 16-17: for a finite nonempty X the enumeration f of X is defined by repeating a chosen value x past the finite list, so the onto map need not be one-to-one"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§0.3, Example 0.3.32, printed p. 18: in the rational enumeration one leaves out fractions that have already appeared, so repetitions are discarded rather than avoided"
---

## Statement refuted

**Refuted claim:** if $A \ne \varnothing$ and there is a surjection
$\mathbb{N} \to A$, then $A \approx \mathbb{N}$
([[lem-countable-iff-surjection-from-n]], [[def-equinumerous]]).

The witness is $A = \sigma(0) = \{0\} = 1$, the one-element set of the von
Neumann naturals, with the constant map $c : \mathbb{N} \to A$, $c(n) = 0$
([[def-natural-numbers]], [[def-unordered-pair-and-singleton]],
[[def-function]]). The map $c$ is surjective because $0 \in A$, and $A$ is at
most countable because it is finite: the identity is a bijection
$A \to \sigma(0)$; but $A \not\approx \mathbb{N}$, since $\mathbb{N}$ is
equinumerous with no natural number ([[lem-pigeonhole]], claim 4). So a nonempty
at most countable set need not be countably infinite: the enumeration a
surjection provides may repeat values, and here it must
([[def-countable]], [[def-injection-surjection-bijection]]).

## Facts & Assumptions

**Given:** The von Neumann naturals with $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), the set $A = \sigma(0) = \{0\}$ ([[def-unordered-pair-and-singleton]]), and the set $c = \mathbb{N} \times \{0\}$ of ordered pairs ([[def-cartesian-product]]).

[F1] $A = \{0\}$ and $t \in A \iff t = 0$ ([[def-natural-numbers]], [[def-unordered-pair-and-singleton]]).

[F2] $c = \mathbb{N} \times \{0\}$ is a function with $\operatorname{dom} c = \mathbb{N}$ and values in $A$: a function from $X$ to $Y$ is a set of ordered pairs with domain $X$ whose range is contained in $Y$ ([[def-function]], [[def-cartesian-product]]).

[F3] $\sigma(0) \ne 0$, so $1 := \sigma(0)$ differs from $0$ ([[thm-omega-is-peano-system]]).

[F4] $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, in particular $\mathbb{N} \not\approx 1$: claim 4 of [[lem-pigeonhole]].

[F5] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, and at most countable when it is finite or countably infinite ([[def-countable]]); $\approx$ is reflexive and transitive, and a surjection is a function whose image is the whole codomain ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 $A \approx \sigma(0) = 1$ via the identity map of $A$, so $A$ is finite and hence at most countable; also $A \ne \varnothing$ because $0 \in A$ by [F1]. [F1, F5]

1.2 The set $c = \mathbb{N} \times \{0\}$ is a function $\mathbb{N} \to A$: every $n \in \mathbb{N}$ is paired with the single value $0$, so $c$ has domain $\mathbb{N}$, and its only value $0$ lies in $A$ by [F1]. It is surjective, since every element of $A$ is $0 = c(n)$ for every $n$, for instance $n = 0$. [F1, F2, F5]

2.1 $A \not\approx \mathbb{N}$: if there were a bijection $A \to \mathbb{N}$ then transitivity of $\approx$ with step 1.1 would give $\mathbb{N} \approx 1$ with $1 \in \mathbb{N}$, contradicting [F4]. [step 1.1, F4, F5]

3.1 The refuted claim therefore fails: $A$ is nonempty and there is a surjection $\mathbb{N} \to A$ by step 1.2, yet $A \not\approx \mathbb{N}$ by step 2.1; and $A$ is at most countable by step 1.1. Moreover the repeated value is forced: $c(0) = 0 = c(\sigma(0))$ while $0 \ne \sigma(0)$ by [F3], so $c$ is not injective and no choice of enumeration can make this function one-to-one. [step 1.1, step 1.2, step 2.1, F3] ∎

## Remarks

- The point of the counterexample is the exact failure mode of the onto criterion [[lem-countable-iff-surjection-from-n]]: a surjection from $\mathbb{N}$ need not be injective, so the at-most-countable set it presents can be finite, and the criterion's converse direction (which produces an injection $A \to \mathbb{N}$ by least preimages) is what actually recovers a bijection with $\mathbb{N}$ when the set is infinite.

- The same witness shows that "at most countable" is strictly weaker than "countably infinite" and that "there is a surjection from $\mathbb{N}$" does not by itself upgrade to equinumerosity with $\mathbb{N}$.

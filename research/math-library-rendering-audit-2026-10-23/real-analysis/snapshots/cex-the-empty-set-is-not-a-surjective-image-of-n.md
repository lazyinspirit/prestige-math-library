---
id: cex-the-empty-set-is-not-a-surjective-image-of-n
kind: counterexample
title: "The empty set is at most countable but no function from $\\mathbb{N}$ is onto it"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-countable-iff-surjection-from-n, def-countable, def-natural-numbers,
       def-function, def-injection-surjection-bijection, def-cartesian-product,
       def-relation-domain-range-and-field, thm-the-empty-set-exists-and-is-unique,
       def-equinumerous]
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
      locator: "§1.6, Proposition 1.44, printed pp. 16-17: the characterisation of countability by an onto map f : N → X is stated for X non-empty, and the finite case is handled by repeating a value"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§0.3, Definition 0.3.29, printed p. 18: the empty set is finite and hence countable under the convention used"
---

## Statement refuted

**Refuted claim:** every at most countable set is a surjective image of
$\mathbb{N}$.

The witness is $\varnothing$, which is finite, hence at most countable
([[def-countable]]); but there is no function $\mathbb{N} \to \varnothing$ at
all ([[def-function]]). So the hypothesis $A \ne \varnothing$ cannot be dropped
from the forward direction of [[lem-countable-iff-surjection-from-n]]:
$\varnothing$ is at most countable, yet it has no surjection from $\mathbb{N}$
([[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Facts & Assumptions

**Given:** The empty set $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]) and the naturals $\mathbb{N}$ with $0 = \varnothing$ ([[def-natural-numbers]]).

[F1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$; $0 = \varnothing$, so $A \approx 0$ holds exactly when $A = \varnothing$; and finite sets are at most countable ([[def-countable]], [[def-natural-numbers]], [[def-equinumerous]]).

[F2] A function from $X$ to $Y$ is a set $f$ of ordered pairs with $\operatorname{dom} f = X$ and $\operatorname{ran} f \subseteq Y$; equivalently $f \subseteq X \times Y$ with $\operatorname{dom} f = X$ ([[def-function]], [[def-cartesian-product]], [[def-relation-domain-range-and-field]]).

[F3] The empty function is the empty set, and $\varnothing$ is a function with empty domain and empty range; it is a bijection $\varnothing \to \varnothing = 0$ ([[def-function]], [[def-relation-domain-range-and-field]]).

[F4] A bijection is in particular a surjection, and an at most countable nonempty set has a surjection from $\mathbb{N}$ by the onto criterion; the criterion as stated assumes $A \ne \varnothing$ ([[def-injection-surjection-bijection]], [[lem-countable-iff-surjection-from-n]]).

## Counterexample

**Proof technique:** direct.

1.1 $\varnothing \approx 0$ via the empty function, so $\varnothing$ is finite and hence at most countable. [F1, F3]

1.2 No function $f : \mathbb{N} \to \varnothing$ exists. If $f$ were one, then $f \subseteq \mathbb{N} \times \varnothing$; the product $\mathbb{N} \times \varnothing$ is empty, so $f = \varnothing$ and $\operatorname{dom} f = \varnothing$, which is not $\mathbb{N}$ since $0 \in \mathbb{N}$ while $\varnothing$ has no elements. Equivalently, a value $f(0)$ would have to be an element of $\varnothing$. [F2, given]

2.1 Hence $\varnothing$ is at most countable by step 1.1 but no function, and in particular no surjection, maps $\mathbb{N}$ onto it by step 1.2, so the refuted claim fails and the nonemptiness hypothesis in the forward direction of [[lem-countable-iff-surjection-from-n]] cannot be dropped. [step 1.1, step 1.2, F4] ∎

## Remarks

- The failure is not about repetition of values, as in [[cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n]], but about totality: a function out of $\mathbb{N}$ must assign a value to $0$, and there is no value to assign. This is exactly the empty case that the onto criterion [[lem-countable-iff-surjection-from-n]] separates out.

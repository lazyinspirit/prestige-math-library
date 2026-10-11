---
id: ex-integers-are-countably-infinite
kind: example
title: "The integers are countably infinite: $\\mathbb{Z} \\approx \\mathbb{N}$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-integers, lem-int-equivalence, lem-nat-embeds-int,
       thm-universal-property-of-the-quotient, thm-n-cross-n-countable,
       lem-countable-iff-surjection-from-n, thm-schroder-bernstein,
       def-equinumerous, def-countable, def-injection-surjection-bijection,
       def-natural-numbers, def-cartesian-product, def-function,
       thm-product-of-countable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
      locator: "§2.2, Theorem 2.5, printed p. 25: Q contains a countably infinite set of integers; positive rationals are enumerated via the onto map N × N → Q_{>0}. The difference-pair quotient argument for Z is supplied locally"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "0.3, Example 0.3.32, printed p. 18: the integers are listed with the rationals as 0, 1/1, -1/1, 1/2, -1/2, ..."
---

## Example

$\mathbb{Z} \approx \mathbb{N}$ ([[def-equinumerous]]): the integers are
countably infinite ([[def-countable]]). The argument is the two-injection route
of [[thm-schroder-bernstein]] rather than a closed formula. The map
$n \mapsto [(n,0)]$ is injective ([[lem-nat-embeds-int]]), and the quotient map
$\pi(a,b) = [(a,b)]$ is a surjective function
$\mathbb{N} \times \mathbb{N} \to \mathbb{Z}$
([[thm-universal-property-of-the-quotient]], [[def-integers]]); composing $\pi$
with the bijection $\beta$ of [[thm-n-cross-n-countable]] exhibits
$\mathbb{Z}$ as a surjective image of $\mathbb{N}$, and
[[lem-countable-iff-surjection-from-n]] then supplies an injection
$\mathbb{Z} \to \mathbb{N}$ explicitly as
$j(x) = \min\{\, k \in \mathbb{N} : \pi(\beta(k)) = x \,\}$. Every ingredient is
a definition or a canonical least element, so no choice principle is used;
[[thm-product-of-countable]] then gives that $\mathbb{Z} \times \mathbb{Z}$ is
at most countable as well.

## Facts & Assumptions

**Given:** The naturals $\mathbb{N}$ ([[def-natural-numbers]]), the integers $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/{\sim}$ with classes $[(a,b)]$ for the equivalence relation $(a,b) \sim (c,d) \iff a + d = b + c$ ([[def-integers]], [[lem-int-equivalence]]), the embedding $n \mapsto [(n,0)]$ of $\mathbb{N}$ in $\mathbb{Z}$ ([[lem-nat-embeds-int]]), and the quotient map $\pi = \{\, ((a,b),C) : C = [(a,b)] \,\}$ ([[thm-universal-property-of-the-quotient]]).

[F1] The map $n \mapsto [(n,0)]$ is injective ([[lem-nat-embeds-int]]).

[F2] $\pi$ is a surjective function $\mathbb{N} \times \mathbb{N} \to \mathbb{Z}$ with $\pi(a,b) = [(a,b)]$ ([[thm-universal-property-of-the-quotient]], [[def-integers]]).

[F3] $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$: there is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$, the inverse of the exhibited bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F4] For a nonempty set $A$: $A$ is at most countable if and only if there is a surjection $s : \mathbb{N} \to A$, and from such an $s$ the rule $j(a) = \min\{\, k \in \mathbb{N} : s(k) = a \,\}$ defines an injection $A \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[F5] If $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]]); if $A$ and $B$ are at most countable then so is $A \times B$ ([[thm-product-of-countable]]).

[F6] $A$ is countably infinite when $A \approx \mathbb{N}$ and at most countable when it is finite or countably infinite ([[def-countable]]); $A \preceq B$ means an injection $A \to B$ exists ([[def-equinumerous]]); a composite of surjections is a surjection ([[def-injection-surjection-bijection]], [[def-function]]).

## Verification

**Proof technique:** direct.

1.1 $\pi$ is a surjective function $\mathbb{N} \times \mathbb{N} \to \mathbb{Z}$: this is the general quotient map statement applied to the equivalence relation of [[def-integers]], whose equivalence-class property is [[lem-int-equivalence]]. [F2]

1.2 $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ is a bijection, and in particular a surjection. [F3]

1.3 The map $n \mapsto [(n,0)]$ is an injection $\mathbb{N} \to \mathbb{Z}$, so $\mathbb{N} \preceq \mathbb{Z}$. [F1, F6]

2.1 The composite $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, as a composite of the surjections $\beta$ and $\pi$; hence $\mathbb{Z}$ is a surjective image of $\mathbb{N}$, and $\mathbb{Z} \ne \varnothing$ because $[(0,0)] \in \mathbb{Z}$. [step 1.1, step 1.2, F6]

3.1 Applying [F4] to the nonempty set $\mathbb{Z}$ and the surjection $\pi \circ \beta$ of step 2.1 gives an injection $j : \mathbb{Z} \to \mathbb{N}$, explicitly $j(x) = \min\{\, k \in \mathbb{N} : \pi(\beta(k)) = x \,\}$; hence $\mathbb{Z} \preceq \mathbb{N}$. [step 2.1, F4]

4.1 Since $\mathbb{N} \preceq \mathbb{Z}$ by step 1.3 and $\mathbb{Z} \preceq \mathbb{N}$ by step 3.1, Schröder-Bernstein gives $\mathbb{Z} \approx \mathbb{N}$, so the integers are countably infinite. [step 1.3, step 3.1, F5, F6]

5.1 With step 4.1, both $\mathbb{Z}$ and $\mathbb{Z}$ are at most countable, so their product $\mathbb{Z} \times \mathbb{Z}$ is at most countable by [F5]. The injection $j$ is defined by the least element of a nonempty set of naturals and $\beta$ is the inverse of an exhibited bijection, so no choice principle is used. [step 4.1, F4, F5] ∎

## Remarks

- The route through $\mathbb{N} \times \mathbb{N}$ is the same device that will enumerate $\mathbb{Q}$: $\mathbb{Z}$ is a quotient of $\mathbb{N} \times \mathbb{N}$, the pairing $\beta$ lists pairs, and the least-index rule turns a list with repetitions into an injection. Nothing here needs a closed formula for a bijection $\mathbb{Z} \to \mathbb{N}$.

- For each fixed positive integer $k$, the product of $k$ copies of $\mathbb{Z}$ is at most countable, by $k-1$ applications of [[thm-product-of-countable]].

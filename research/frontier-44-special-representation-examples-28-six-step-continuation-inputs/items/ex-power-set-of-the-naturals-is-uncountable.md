---
id: ex-power-set-of-the-naturals-is-uncountable
kind: example
title: "$\\mathcal{P}(\\mathbb{N})$ is uncountable"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-cantor-powerset, def-power-set, def-equinumerous, thm-schroder-bernstein,
       def-countable, def-injection-surjection-bijection,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       lem-unordered-pair-equality, def-unordered-pair-and-singleton,
       def-subset-and-proper-subset, def-natural-numbers,
       lem-nat-order-is-membership, def-nat-order]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6, Theorem 1.47 and its proof, printed p. 18: the diagonal set {n : n ∉ A_n} shows no countable collection of subsets of N is all of P(N)"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§0.3, Theorem 0.3.34 (Cantor) and the paragraph after it, printed pp. 19-20: no surjection A → P(A), so P(N) is uncountable"
---

## Example

The power set $\mathcal{P}(\mathbb{N})$ is uncountable ([[def-countable]]):
there is no surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$
([[thm-cantor-powerset]]), so $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$
([[def-equinumerous]]). The proof combines Cantor's theorem with
[[thm-schroder-bernstein]]: the map $n \mapsto \{n\}$ is injective
([[def-unordered-pair-and-singleton]], [[lem-unordered-pair-equality]]), so
$\mathbb{N} \preceq \mathcal{P}(\mathbb{N})$; and if $\mathcal{P}(\mathbb{N})$
were at most countable then $\mathcal{P}(\mathbb{N}) \preceq \mathbb{N}$, so
Schröder-Bernstein would give a bijection $\mathcal{P}(\mathbb{N}) \to
\mathbb{N}$, hence a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$,
contradicting Cantor's theorem. No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}$ with $0 = \varnothing$ and successor $\sigma$ ([[def-natural-numbers]]), the order $m < n \iff m \in n$ with $n = \{\, m \in \mathbb{N} : m < n \,\}$ ([[def-nat-order]], [[lem-nat-order-is-membership]]), and the power set $\mathcal{P}(\mathbb{N}) = \{\, z : z \subseteq \mathbb{N} \,\}$ ([[def-power-set]]).

[F1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, at most countable when it is finite or countably infinite, and uncountable when it is not at most countable ([[def-countable]]).

[F2] $A \approx B$ means a bijection $A \to B$ exists, $A \preceq B$ means an injection $A \to B$ exists, and $A \prec B$ means $A \preceq B$ and not $A \approx B$ ([[def-equinumerous]]).

[F3] Every element of a natural number is a natural number, and $m \subseteq \mathbb{N}$ for every $m \in \mathbb{N}$ ([[lem-nat-order-is-membership]]).

[F4] $\{a\} = \{c,d\}$ if and only if $a = c$ and $a = d$ ([[lem-unordered-pair-equality]]); and $t \in \{a\}$ exactly when $t = a$ ([[def-unordered-pair-and-singleton]]).

[F5] Cantor's theorem: there is no surjection $A \to \mathcal{P}(A)$ for any set $A$ ([[thm-cantor-powerset]]).

[F6] Schröder-Bernstein: if $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]]).

[F7] A bijection is a surjection, a composite of injections is an injection, and the inverse of a bijection is a bijection ([[def-injection-surjection-bijection]], [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Verification

**Proof technique:** direct.

1.1 The map $s : \mathbb{N} \to \mathcal{P}(\mathbb{N})$, $s(n) = \{n\}$, is well defined because $\{n\} \subseteq \mathbb{N}$ by [F3], and it is injective: if $\{n\} = \{m\}$ then [F4] gives $n = m$ directly. Hence $\mathbb{N} \preceq \mathcal{P}(\mathbb{N})$. [F3, F4, F7]

1.2 If $\mathcal{P}(\mathbb{N})$ is at most countable then $\mathcal{P}(\mathbb{N}) \preceq \mathbb{N}$. If $\mathcal{P}(\mathbb{N}) \approx \mathbb{N}$, any bijection $\mathcal{P}(\mathbb{N}) \to \mathbb{N}$ is an injection. If instead $\mathcal{P}(\mathbb{N}) \approx m$ for some $m \in \mathbb{N}$, fix a bijection $\psi : \mathcal{P}(\mathbb{N}) \to m$; the inclusion map $m \to \mathbb{N}$ is available by [F3] and is injective, and the composite of the two injections is an injection $\mathcal{P}(\mathbb{N}) \to \mathbb{N}$. These are the two alternatives in [F1]. [F1, F3, F7]

2.1 Therefore $\mathcal{P}(\mathbb{N})$ is not at most countable. Suppose it were. Then $\mathcal{P}(\mathbb{N}) \preceq \mathbb{N}$ by step 1.2 and $\mathbb{N} \preceq \mathcal{P}(\mathbb{N})$ by step 1.1, so [F6] supplies a bijection $\mathcal{P}(\mathbb{N}) \to \mathbb{N}$; its inverse is a bijection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ by [F7], hence a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$, contradicting Cantor's theorem [F5]. [step 1.1, step 1.2, F5, F6, F7]

3.1 Hence $\mathcal{P}(\mathbb{N})$ is uncountable, and $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$: the injection of step 1.1 gives $\mathbb{N} \preceq \mathcal{P}(\mathbb{N})$, while $\mathbb{N} \approx \mathcal{P}(\mathbb{N})$ would give a bijection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ and hence a surjection, contradicting [F5]; so not $\mathbb{N} \approx \mathcal{P}(\mathbb{N})$ and the strict relation holds by [F2]. No step selects an element from a nonempty family: the only objects named are $\{n\}$, a fixed bijection, and its inverse. [step 1.1, F1, F2, F5, F7] ∎

## Remarks

- The argument is the statement of [[thm-cantor-powerset]] in the "strictly larger" form $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$ instantiated at $\mathbb{N}$; what is added here is the passage from "not at most countable" to the strict domination, which uses Schröder-Bernstein in the contrapositive direction as above.

- Finiteness of $\mathcal{P}(\mathbb{N})$ is impossible for the same reason: a bijection $\mathcal{P}(\mathbb{N}) \to m$ would compose with the inclusion $m \subseteq \mathbb{N}$ to dominate $\mathcal{P}(\mathbb{N})$ by $\mathbb{N}$, which step 2.1 rules out. No separate finite argument is needed.

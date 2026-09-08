---
id: lem-complete-henkin-theory-truth-rules
kind: lemma
title: "Boolean and witness closure of a complete Henkin theory"
status: published
origin: pipeline
deps: [def-henkin-witness-extension, def-first-order-syntactic-consistency, lem-hilbert-propositional-and-equality-rules, lem-derivation-finite-support-and-concatenation]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1I.3, printed pp39–40; witness-axiom formulation adapted."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF let $H$ be a consistent, deductively closed, syntactically complete sentence theory in a language with a seed constant and all Henkin witness axioms. For sentences $\sigma,\tau$ and an existential sentence $\exists x\phi$,

$$\neg\sigma\in H\iff\sigma\notin H,\qquad \sigma\land\tau\in H\iff(\sigma\in H\text{ and }\tau\in H),$$
$$\exists x\phi\in H\iff\phi[t/x]\in H\text{ for some closed term }t.$$

No countability assumption on the language or $H$ is needed.

## Facts & Assumptions

**Given:** $H$ has the stated four properties; all displayed instances are sentences.

[F1] A witness axiom $\exists x\phi\to\phi[c/x]$ is in $H$ for each existential sentence, for some constant $c$. ([[def-henkin-witness-extension]])

[F2] Consistency excludes a proof of bottom, and syntactic completeness decides every sentence by provability. ([[def-first-order-syntactic-consistency]])

[F3] Boolean conjunction and explosion and free-for existential introduction are derivable. ([[lem-hilbert-propositional-and-equality-rules]])

[F4] Finite proofs may be composed; deductive closure retains sentence conclusions. ([[lem-derivation-finite-support-and-concatenation]])

## Proof

1.1 If both $\sigma$ and $\neg\sigma$ belonged to $H$, their assumption proofs and explosion would prove bottom, contrary to consistency. If $\sigma\notin H$, completeness gives a proof of $\sigma$ or $\neg\sigma$; the first would put $\sigma$ in $H$ by deductive closure, so the second puts $\neg\sigma$ in $H$. Conversely $\neg\sigma\in H$ excludes $\sigma\in H$ by the first argument. [F2, F3, F4]

1.2 If $\sigma\land\tau\in H$, conjunction elimination and closure put both conjuncts in $H$. If both conjuncts belong, the conjunction introduction tautology and two MP applications give their conjunction in $H$. Thus both conjunction directions hold. [F3, F4]

2.1 If $\exists x\phi\in H$, take the single witness constant in F1; MP and closure yield $\phi[c/x]\in H$, with $c$ a closed term. Conversely a closed term $t$ has no free variables and is free for $x$ in $\phi$; applying existential introduction to $\phi[t/x]\in H$ and closing gives $\exists x\phi\in H$. This proves the existential equivalence even for vacuous $x$. No simultaneous selection of witnesses and no rewriting inside a quantifier is used. [F1, F3, F4] ∎

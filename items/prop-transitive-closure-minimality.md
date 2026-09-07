---
id: prop-transitive-closure-minimality
kind: proposition
title: "Minimality and closure laws of TC"
status: draft
origin: pipeline
deps: ["def-transitive-closure-of-a-set"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.6 and 7.9 pp.34\u201335."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

For every set $a$, $\operatorname{TC}(a)$ is transitive, contains $a$ as a subset, and is contained in every transitive set $T$ with $a\subseteq T$. Moreover $a\subseteq b$ implies $\operatorname{TC}(a)\subseteq\operatorname{TC}(b)$, and $\operatorname{TC}(\operatorname{TC}(a))=\operatorname{TC}(a)$. In particular $a\in\operatorname{TC}(\{a\})$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For a set $a$, form $a_0=a$ and $a_{n+1}=a_n\cup\bigcup a_n$ by recursion on $\omega$. Set $$\operatorname{TC}(a)=\bigcup_{n\in\omega}a_n.$$ This is a set by the same recursion, Replacement and Union construction as finite predecessor closure, now starting from $a$ rather than a singleton and using membership as the setlike relation. The convention is the least transitive **superset** of $a$; to include $a$ itself as an element, use $\operatorname{TC}(\{a\})$. This construction does not assume Foundation. Conventions and prerequisites: lem-finite-predecessor-closure-is-a-set. ([[def-transitive-closure-of-a-set]])

## Proof

1.1 The stage zero inclusion gives $a\subseteq\operatorname{TC}(a)$. If $z\in y\in\operatorname{TC}(a)$, choose $n$ with $y\in a_n$; then $z\in\bigcup a_n\subseteq a_{n+1}$. Thus the union is transitive. Equivalently, transitivity of a set $T$ is the elementary condition $\bigcup T\subseteq T$. [F1]

2.1 If $a\subseteq T$ and $T$ is transitive, induction gives $a_n\subseteq T$: the successor follows from $\bigcup a_n\subseteq\bigcup T\subseteq T$. Union over $n$ proves minimality. [F1, step 1.1]

3.1 For $a\subseteq b$, the transitive set $\operatorname{TC}(b)$ contains $a$, so minimality proves monotonicity. Applying minimality with $T=\operatorname{TC}(a)$ gives one idempotence inclusion and step 1.1 gives the other. Finally $a\in\{a\}\subseteq\operatorname{TC}(\{a\})$. [step 1.1, step 2.1] ∎


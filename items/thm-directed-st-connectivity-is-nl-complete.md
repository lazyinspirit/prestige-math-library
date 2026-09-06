---
id: thm-directed-st-connectivity-is-nl-complete
kind: theorem
title: "Directed s-t connectivity is NL-complete"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, lem-logspace-machines-have-polynomially-many-configurations, def-logspace-many-one-reduction, def-directed-st-connectivity]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.16"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
    - title: "Harvard CS 221, Lecture 5, Theorem 2"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Statement

STCON is NL-complete under $\leq_{\log}$.

## Facts & Assumptions

**Given:** an encoded digraph $\langle G,s,t\rangle$, or a language $A\in\mathrm{NL}$.

[L1] A fixed logspace machine has polynomially many configurations, and accepting branches may be made simple ([[lem-logspace-machines-have-polynomially-many-configurations]]).

[L2] A logspace many-one reduction is a deterministic bitwise polynomial-output transduction ([[def-logspace-many-one-reduction]]).

## Proof

**Proof technique:** membership and configuration-graph reduction.

1.1 To decide STCON nondeterministically, retain a current vertex and a counter through $|V|-1$ moves, guessing an outgoing edge at each move and accepting on reaching $t$. A path exists exactly when one exists with at most $|V|-1$ moves. [given, construct]

1.2 For $A\in\mathrm{NL}$, fix its machine $M$. On input $x$, make vertices from the valid configurations of $M$ on $x$, add a fresh target $t_x$, use legal transitions as arcs, and add an arc from every accepting configuration to $t_x$. [L1, construct]

2.1 Both stored vertex labels and the counter have $O(\log |V|)$ bits, so step 1.1 puts STCON in NL. [step 1.1, algebra]

2.2 By [L1], there are polynomially many configuration names of $O(\log|x|)$ bits. A transducer enumerates candidate pairs, checks locally whether one is a legal successor of the other, and streams the encoded graph, start configuration, and $t_x$ using $O(\log|x|)$ work space. [L1, L2, step 1.2, construct]

3.1 A directed path from the start to $t_x$ is exactly an accepting computation branch of $M$ on $x$. Thus the transducer is an $A\leq_{\log}\mathrm{STCON}$ reduction, which with step 2.1 proves NL-completeness. [step 2.1, step 2.2] ∎

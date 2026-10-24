---
id: lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free
kind: lemma
title: "The pattern of the terminal $H_5$-overlap quotient is $\\{H_5,\\mathrm{co}\\text{-}E\\}$-free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-five-overlap-blockade-and-iterated-mixed-quotients, lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade, def-pattern-graph-of-a-pure-blockade, def-h-zero-through-h-five, def-e-graph-and-co-e-graph, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.4(2.2)"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

In a co-$E$-free graph, the pattern graph of a terminal pure iterated
$H_5$-overlap quotient is $\{H_5,\mathrm{co}\text{-}E\}$-free.

## Facts & Assumptions
**Given:** A terminal pure quotient blockade $\mathcal A$ in a co-$E$-free graph.

[F1] A pattern edge means its two nonempty blocks are complete; a pattern nonedge means they are anticomplete ([[def-pattern-graph-of-a-pure-blockade]]).

[F2] Every initial induced $H_5$ lies wholly in one initial overlap class, and quotienting only merges blocks ([[def-h-five-overlap-blockade-and-iterated-mixed-quotients]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose the pattern contains an induced $H_5$, and choose one vertex from each of its eleven corresponding nonempty blocks. By [F1], the selected vertices induce $H_5$ in the ambient graph. [F1, assume-contra]

1.2 If the pattern contains an induced co-$E$, selecting one vertex from each of its six blocks and using [F1] similarly induces co-$E$ in the ambient graph, contradicting co-$E$-freeness. [F1, choose, contradiction]

2.1 The eleven selected vertices lie in distinct terminal blocks. But [F2] says the vertices of every induced $H_5$ must already lie in one initial overlap class and hence in one terminal block, a contradiction. [step 1.1, F2, contradiction]

3.1 Neither forbidden induced graph occurs in the pattern. [step 2.1, step 1.2, discharge-contradiction] ∎

---
id: cex-deleting-stay-put-moves-does-not-preserve-computation
kind: counterexample
title: "Deleting stay-put instructions need not preserve computation"
status: draft
origin: pipeline
deps: ["def-stay-put-one-tape-machine-and-run-interface", "lem-stay-put-right-left-macro-simulation"]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Stephen Checkoway, CS 301, Lecture 16: Turing machine variants"
      url: https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf
    - title: "John E. Savage, Models of Computation, Chapter 5"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
---

## Statement refuted

“Deleting all stay-put instructions from a deterministic one-tape machine preserves its computation.” Under the total-transition convention deletion can produce an invalid machine. Even under an additional partial-table convention that treats a missing entry as rejection, it need not preserve acceptance. The alternative “replace every $S$ by $R$” can give a legal total machine with a different accepted language. A left-then-right substitute also fails at the clamped left boundary.

## Facts & Assumptions

**Given:** All states named differently below are distinct; $a\ne\sqcup$. Each witness has input alphabet $\{a\}$, tape alphabet $\{a,\sqcup\}$, and the designated start, accept and reject states indicated by their names. The missing-entry rejection convention is a hypothetical alternative, not the library model.

[F1] The library model requires a total transition function exactly on nonhalting state-symbol pairs, uses the specified input tape, fixes the head on $S$, and clamps a left move at zero ([[def-stay-put-one-tape-machine-and-run-interface]]).

[F2] The correct simulation replaces $S$ by right then left through a nonhalting marked state, preserving the neighbor and returning to the original head ([[lem-stay-put-right-left-macro-simulation]]).

## Counterexample

1.1 For deletion use $Q=\{q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}\}$ with $\delta(q_0,a)=(q_{\mathrm{acc}},a,S)$ and $\delta(q_0,\sqcup)=(q_{\mathrm{acc}},\sqcup,S)$. There are two required pairs, and these are exactly their entries; all output coordinates are valid. Hence the original is a legal machine. On the empty input with wholly blank tape $t_\varepsilon$, its step is $(q_0,0,t_\varepsilon)\vdash_M(q_{\mathrm{acc}},0,t_\varepsilon)$, so it accepts. [F1, given]

1.2 For total replacement use $Q=\{q_0,p,q_{\mathrm{acc}},q_{\mathrm{rej}}\}$ and the four entries $\delta(q_0,a)=(p,a,S)$, $\delta(q_0,\sqcup)=(q_{\mathrm{rej}},\sqcup,R)$, $\delta(p,a)=(q_{\mathrm{acc}},a,R)$, $\delta(p,\sqcup)=(q_{\mathrm{rej}},\sqcup,R)$. The nonhalting states are exactly $q_0,p$, so these four valid entries exhaust their product with the two-symbol tape alphabet. Replacing its sole $S$ by $R$ gives another total table on the same domain with only legal directions. Thus both the original and its naive ordinary replacement $P$ are valid machines. [F1, given]

2.1 Deleting both $S$ entries leaves no value at $(q_0,\sqcup)$, although $q_0$ is nonhalting and $\sqcup\in\Gamma$. The resulting empty table is therefore not a total function on its required domain and is not a machine of this model. If one instead imposes the stated partial-table rejection convention, the same initial blank configuration encounters a missing entry and rejects immediately. This differs from the original acceptance on the same empty input. Thus the deletion claim fails under both readings, for distinct stated reasons. [F1, step 1.1, given]

2.2 On input $a$, write $t(0)=a$ and $t(j)=\sqcup$ for $j\ge1$. The original takes $(q_0,0,t)\vdash_M(p,0,t)\vdash_M(q_{\mathrm{acc}},1,t)$: the first instruction retains the head on $a$, which selects the accepting $p$ entry. Neither initial nor intermediate state is halting, so it accepts after exactly two steps. [F1, step 1.2]

3.1 The replacement takes $(q_0,0,t)\vdash_P(p,1,t)\vdash_P(q_{\mathrm{rej}},2,t)$. The changed first direction makes $p$ scan $t(1)=\sqcup$, selecting the rejecting entry; its write leaves blank unchanged. It therefore rejects after exactly two steps. The witness input $a$ belongs to the original accepted language and not to the replacement's, disproving language preservation as well as exact computation preservation. [F1, step 1.2, step 2.2]

4.1 Finally, on an entirely blank tape at $h=0$, a substitute that makes a left move into a fresh nonhalting state and then a right move back, rewriting each scanned blank unchanged, has head trace $0,0,1$: $H_L(0)=0$ and $H_R(0)=1$. A stay-put move would end at zero. In contrast the correct macro has trace $0,1,0$ and preserves the full tape by F2. Thus even a two-move substitute needs the stated right-before-left order at this endpoint. [F1, F2] ∎

## Source relationship

The witnesses are locally generated tests of the distinctions in [Checkoway, Lecture 16, printed slides 9–10 (PDF pp. 18–19)](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf). They are not claimed as source-stated counterexamples. [Savage, §5.1, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf) uses different boundary and instruction conventions; these witnesses use the explicit local convention.

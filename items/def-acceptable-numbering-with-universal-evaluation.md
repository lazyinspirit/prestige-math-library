---
id: "def-acceptable-numbering-with-universal-evaluation"
kind: "definition"
title: "Acceptable numbering with universal evaluation"
status: published
origin: "pipeline"
deps: ["thm-kleene-normal-form-for-the-fixed-machine-coding", "lem-step-by-step-interpreter-for-machine-codes", "def-kleene-computation-predicate-and-output-map"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier §3.1, acceptable indexing and universal/composition interfaces"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Definition

A numbering $(\varphi_e)_{e\in\mathbb N}$ lists all unary partial computable functions on the naturals. It is **acceptable** in the composition formulation used here if evaluation $(e,x)\mapsto\varphi_e(x)$ is partial computable and there is a total computable $c:\mathbb N^2\to\mathbb N$ with
$$\varphi_{c(e,d)}(x)\simeq\varphi_e(\varphi_d(x)).$$
Here $\simeq$ means both sides have the same domain and values; composition is strict. The fixed machine numbering of [[def-kleene-computation-predicate-and-output-map]] is acceptable.

Arity notation always means applying the same underlying single-word program evaluator to the fixed encoded tuple, as specified there: $\varphi_e^{(k)}(\mathbf a)$ uses raw input $E(\operatorname{bin}(a_1),\ldots,\operatorname{bin}(a_k))$. In particular the unary case uses a one-entry tuple. This is not the assertion that a multi-entry tuple word is literally a unary numeral. When transferring an arity-k algorithm to a numerical unary algorithm on codes of tuples, explicitly decode that code and pass the recovered tuple word to the raw evaluator.

## Facts & Assumptions

**Given:** The fixed coding and strict output/divergence convention, including malformed programs.

[F1] Every partial recursive numerical function has a finite machine compiler, and these are exactly the machine functions ([[thm-kleene-normal-form-for-the-fixed-machine-coding]]).

[F2] The one-step interpreter is a fixed machine returning the unique successor on nonhalting configurations ([[lem-step-by-step-interpreter-for-machine-codes]]).

[F3] Indices enumerate words in length-lexicographic order; malformed codes denote nowhere-defined numeric functions, and the tuple and output conventions are fixed ([[def-kleene-computation-predicate-and-output-map]]).

## Verification

1.1 For evaluation, decode e into its word and validate it, looping forever if invalid. Construct the initial configuration on the one-entry tuple for x and iterate F2 until its first halt. Extract the canonical numeral if present and otherwise loop forever. The finite decoding and tape-zone routines in F1 implement the preprocessing and iteration; F3 identifies the result and domain exactly with $\varphi_e(x)$. Every finite program has an index, and F1 compiles every numerical partial computable function, proving exhaustivity. [F1, F2, F3]

2.1 Given e,d, generate a program which retains its unary input x, runs the evaluator on $(d,x)$, retains its numeric result y, and runs the evaluator on $(e,y)$. Include e and d by finite chains of states writing their canonical bits; rename the evaluator's state copies to disjoint consecutive state intervals and use delimited work zones as in F1. Set the three designated states to 0,1,2, assign numbers to all remaining states and tape symbols, and fill unused state-symbol entries with transitions to an explicit infinite rightward walk. Emit every transition in the fixed lexicographic syntax and encode the table. If w is the resulting word, its index is $2^{|w|}-1+\operatorname{val}(w)$. Scanning finite tables and binary arithmetic are halting tape routines from F1, so this compiler c is total on all e,d, independently of whether the generated program will halt. [F1, F3, step 1.1]

3.1 On x the generated program halts exactly when the d-evaluation halts with y and the e-evaluation on y halts. In that event it returns the latter value; if either call diverges, so does the composite. This is the strict composition equation. A malformed e or d causes the corresponding evaluation to diverge, exactly as required. Thus universality and the total composition compiler hold without assuming specialization or fixed points. [step 1.1, step 2.1] ∎

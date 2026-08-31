---
id: thm-nondeterministic-and-deterministic-recognizability-agree
kind: theorem
title: "Deterministic and nondeterministic Turing machines recognize the same languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nondeterministic-accepting-computation, def-language-recognized-and-decided, thm-multitape-machines-have-one-tape-simulations, thm-stay-put-moves-can-be-eliminated]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
---

## Statement

A language is recognized by some nondeterministic one-tape Turing machine if
and only if it is recognized by some deterministic one-tape Turing machine.

## Facts & Assumptions

**Given:** A language $L$ over some fixed input alphabet.

[L1] A nondeterministic machine accepts an input exactly when there exists a finite accepting computation branch for that input, by [[def-nondeterministic-accepting-computation]].

[L2] Recognizing a language means accepting exactly the words in that language, while nonmembers may be rejected or may diverge, by [[def-language-recognized-and-decided]].

[L3] Every deterministic multitape Turing machine has an equivalent deterministic one-tape simulation, by [[thm-multitape-machines-have-one-tape-simulations]].

[L4] Stay-put bookkeeping may be removed without changing accepted languages, by [[thm-stay-put-moves-can-be-eliminated]].

## Proof

**Proof technique:** direct.

1.1 If a deterministic one-tape Turing machine recognizes $L$, then the same transition graph viewed as a nondeterministic machine with singleton choice sets also recognizes $L$. [given]

1.2 Conversely, suppose a nondeterministic one-tape machine $N$ recognizes $L$. Build a deterministic multitape machine $D$ that, on input $w$, enumerates all finite branch-choice strings of lengths $0,1,2,\dots$. For each choice string $\alpha$ of length $d$, the machine $D$ simulates $N$ on $w$ for $d$ steps, following at the $r$th branching point the $\alpha_r$th available transition when that transition exists and abandoning $\alpha$ otherwise. [given, construct]

2.1 By [L1], $N$ accepts $w$ exactly when some finite accepting branch exists. If such a branch has length $d$, its sequence of local branch choices is one of the strings tested in step 1.2, so $D$ eventually finds it and accepts. If no accepting branch exists, every tested choice string fails to end in acceptance, so $D$ never accepts. Thus $D$ recognizes the same language as $N$. [L1, step 1.2]

3.1 Any temporary stay-put moves introduced while $D$ manages its work tapes can be removed by [L4], and then [L3] yields a deterministic one-tape machine recognizing the same language as $D$. [L3, L4, step 2.1]

4.1 Steps 1.1 and 3.1 prove that nondeterministic and deterministic one-tape machines recognize exactly the same languages, in the sense of [L2]. [L2, step 1.1, step 3.1] ∎

---
id: thm-existence-of-a-universal-turing-machine
kind: theorem
title: "A universal Turing machine exists for the chosen coding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-turing-machine, def-partial-function-computed-by-a-machine, lem-step-by-step-interpreter-for-machine-codes, thm-multitape-machines-have-one-tape-simulations]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

There exists a deterministic one-tape Turing machine universal for the coding
fixed in [[def-universal-turing-machine]].

## Facts & Assumptions

**Given:** The coding and pairing conventions fixed in [[def-universal-turing-machine]].

[L1] A universal machine for the chosen coding is one that reproduces the halting outputs and divergence of every coded machine on every coded input pair, by [[def-universal-turing-machine]].

[L2] Computing a partial function means matching halting outputs on the domain and divergence off the domain under the chosen encodings, by [[def-partial-function-computed-by-a-machine]].

[L3] There is a deterministic machine that executes one encoded step of a coded machine and returns the same code unchanged in the halting case, by [[lem-step-by-step-interpreter-for-machine-codes]].

[L4] Every deterministic multitape Turing machine has an equivalent deterministic one-tape simulation, by [[thm-multitape-machines-have-one-tape-simulations]].

## Proof

**Proof technique:** direct.

1.1 Build a deterministic multitape machine $W$ that, on input $\langle\ulcorner M\urcorner,\widehat w\rangle$, first decodes the coded machine $M=(m,s,n,\tau)$ from the first component and the input word $w\in\Sigma_s^*$ from the second component block-by-block. It then copies $\ulcorner M\urcorner$ to one work tape, constructs the encoded initial configuration of $M$ on input $w$ on a second work tape, and reserves a third work tape for running the one-step interpreter from [L3]. [L3, given, construct]

2.1 The machine $W$ now iterates the interpreter from [L3]. Before each cycle it checks whether the current code represents an accepting or rejecting configuration and stops the iteration if so; otherwise it replaces that code by the one-step successor returned by the interpreter. This state check, rather than equality of successive codes, detects halting. [L3, step 1.1]

3.1 Induction on the number of interpreter cycles shows that the maintained configuration code is always the code of the current configuration of $M$ on input $w$. Therefore, if $M$ halts with output $u$, then $W$ eventually reaches the halting configuration code, decodes the represented output word $u$, writes its binary code $\widehat u$ in its own output convention, and halts. If $M$ diverges, the iteration never reaches a halting configuration code, so $W$ diverges as well. Thus $W$ has exactly the behavior required by [L1] and [L2]. [L1, L2, step 2.1]

4.1 Finally, [L4] converts the deterministic multitape interpreter $W$ into an equivalent deterministic one-tape machine. By step 3.1, that one-tape machine is universal for the chosen coding. [L4, step 3.1] ∎

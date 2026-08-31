---
id: thm-ram-register-and-turing-computability-agree
kind: theorem
title: "RAM/register computation and Turing computation agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-random-access-and-register-machine-programs, def-language-recognized-and-decided, def-partial-function-computed-by-a-machine, thm-multitape-machines-have-one-tape-simulations]
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
    - title: "Jean Gallier and Jocelyn Quaintance, Notes on Formal Languages, Automata, Computability, and Complexity"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Statement

The RAM/register model from
[[def-random-access-and-register-machine-programs]] and the deterministic
Turing-machine model compute the same partial functions on binary strings and
recognize the same binary languages.

Here a RAM/register program **recognizes** a language when it reaches its accept
instruction exactly on members, while on nonmembers it may reject or diverge.
It **computes** a partial function when it halts with the standard output layout
on inputs in the domain and diverges off the domain.

## Facts & Assumptions

**Given:** The RAM/register model fixed in [[def-random-access-and-register-machine-programs]] and the deterministic Turing-machine model.

[L1] A RAM/register computation uses a finite program counter together with a finite-support natural-number memory state, standard binary input layout, and standard binary output layout, by [[def-random-access-and-register-machine-programs]].

[L2] The preceding paragraph fixes the RAM recognition convention; the analogous Turing-machine convention depends on accept, reject, and divergence behavior on each binary input, by [[def-language-recognized-and-decided]].

[L3] The preceding paragraph fixes the RAM partial-function convention; the analogous Turing-machine convention matches halting outputs on the domain and divergence off the domain, by [[def-partial-function-computed-by-a-machine]].

[L4] Every deterministic multitape Turing machine has an equivalent deterministic one-tape simulation, by [[thm-multitape-machines-have-one-tape-simulations]].

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a deterministic one-tape Turing machine. A RAM/register program can simulate $M$ by storing the current state and head position in distinguished registers and storing the finitely many nonblank tape cells in addressed memory entries. One program macro reads the currently addressed tape symbol, consults the finite transition table of $M$, updates that symbol and the control registers, and increments or decrements the stored head position according to the chosen transition. [L1, given, construct]

1.2 Conversely, let $P$ be a RAM/register program. Build a deterministic multitape Turing machine $N_P$ whose work tapes store the program counter, the finitely many currently nonzero memory entries as a sorted list of address-value pairs, and scratch data for arithmetic and list maintenance. Each instruction type from [L1] is implemented by a finite Turing-machine subroutine: copy and arithmetic operate on binary numerals on work tapes, indirect addressing searches the address-value list, and zero entries are inserted or deleted so that the stored list remains finite. [L1, given, construct]

2.1 Induction on the number of simulated steps shows that the RAM/register program from step 1.1 reproduces the full computation of $M$ on every binary input, including acceptance, rejection, divergence, and final output. Hence every Turing-recognizable language and every Turing-computable partial function is RAM/register realizable. [step 1.1]

2.2 Again by induction on computation length, the multitape machine $N_P$ from step 1.2 reproduces exactly the accept, reject, divergence, and output behavior of $P$ on the standard input layout. [L1, step 1.2]

3.1 By [L4], $N_P$ has an equivalent deterministic one-tape simulation. Combining this with steps 2.1 and 2.2, the RAM/register and deterministic Turing-machine models recognize the same languages in the sense of [L2] and compute the same partial functions in the sense of [L3]. [L2, L3, L4, step 2.1, step 2.2] ∎

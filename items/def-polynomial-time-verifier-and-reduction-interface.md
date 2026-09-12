---
id: "def-polynomial-time-verifier-and-reduction-interface"
kind: "definition"
title: "Polynomial time verifier and reduction interface"
status: published
origin: "pipeline"
deps: ["def-uniform-asymptotic-time-space-comparison", "def-multitape-and-nondeterministic-machines", "def-partial-function-computed-by-a-machine"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora–Barak §§2.1–2.2 verifier/reduction definitions; source reading incomplete"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Definition

Use deterministic multitape machines and transition-count time from [[def-multitape-and-nondeterministic-machines]] and [[def-uniform-asymptotic-time-space-comparison]]. A machine is **polynomial time** if it halts on every input of length n in at most $C(n+1)^k$ transitions, for fixed positive integer C and nonnegative integer k. The class P consists of binary languages decided by such machines.

A verifier consists of a binary relation R decided in time polynomial in $|x|+|w|+1$, together with an explicit nonnegative integer polynomial witness guard p. Its guarded relation is $R(x,w)$ and $|w|\le p(|x|)$, and its language is
$$L_R=\{x:\exists w\ (|w|\le p(|x|)\ \text{and}\ R(x,w))\}.$$
This is the verifier presentation of NP. No equivalence with other machine definitions of NP is needed here. Encode $(x,w)$ as $1^{|x|}0xw$, of length $2|x|+|w|+1$; parsing recovers both words. The guard is part of the definition even if the unguarded relation accepts longer witnesses.

A **polynomial many-one reduction** from binary L to binary K is a total function $f:\{0,1\}^*\to\{0,1\}^*$ computed by a fixed deterministic multitape transducer with polynomial time and polynomial output length, such that $x\in L$ iff $f(x)\in K$. Here we extend the input/output semantics of [[def-partial-function-computed-by-a-machine]] from its one-tape model to the multitape model just fixed, using identity encodings of binary words: on every input x the transducer halts with output f(x). This is a local definition of multitape transduction. Output is the finite contiguous binary word beginning at cell zero on a designated tape, ending at the first delimiter or blank. These definitions include empty words and use n+1 to cover length zero.

## Facts & Assumptions

**Given:** The multitape model and the explicit polynomial bounds in the definitions. No universal-simulator time bound is assumed.

## Verification

1.1 A head visits at most T new cells in T transitions. Thus an output word occupies at most its initially occupied input extent plus T plus one cells: a polynomial time bound gives a polynomial output-length bound when input and output share a tape, and at most T plus one on an initially blank output tape. For composition of reductions with time/length bounds $C(n+1)^a$ and $D(n+1)^b$, the first output has length at most $n+C(n+1)^a+1$. Retain that result on work tapes and run the second fixed machine on it. The two fixed programs can be joined on finitely many tapes, with linear copying/preparation time. Their combined time is bounded by a constant multiple of $C(n+1)^a+D(n+C(n+1)^a+2)^b+n+1$, a polynomial. The membership iff composes, proving transitivity. [given]

2.1 If fixed-length certificates are wanted, let $P=p(|x|)$. Encode a witness w of length $\ell\le P$ by the length field $1^\ell0^{P+1-\ell}$ followed by $w0^{P-\ell}$, a word of length $2P+1$. The verifier rejects certificates whose total length is not $2P+1$, then checks the field consists of at most P initial ones followed by zeros, then checks the last $P-\ell$ payload bits are zero, and applies R to the first $\ell$ payload bits. Every guarded witness has this encoding, and every accepted encoding decodes one guarded witness. Scanning and evaluating p in binary and writing at most polynomially many cells are polynomial operations for the fixed polynomial p (successive addition/multiplication of its fixed number of binary factors suffices). The case P=0 has certificate 0 and decoded empty witness. This optional padding therefore preserves the language and polynomial bounds. [step 1.1, given] ∎

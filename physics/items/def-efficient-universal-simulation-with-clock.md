---
id: def-efficient-universal-simulation-with-clock
kind: definition
title: "An efficient universal simulation with a clock"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-effective-encoding-of-turing-machines, def-time-and-space-constructible-function, def-dtime-ntime-dspace-and-nspace]
verification:
  audited: 2026-09-06
  precheck: n/a
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Chapter 3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix a multitape universal simulator $U$, using the finite transition-table
encoding convention of [[def-effective-encoding-of-turing-machines]], extended
to finitely many tapes by recording the tape count and the finite table on
tuples of scanned symbols. Here machines have the multitape semantics of
[[def-dtime-ntime-dspace-and-nspace]]. On a self-delimiting pair
$z=\langle M,x\rangle$ of total length $n$ and clock value $b\in\mathbb N$,
$U_b$ first decodes the pair and then simulates at most $b$ steps of $M(x)$,
rejecting malformed encodings or a clock expiry. For each fixed $M$, this uses
$$ O\bigl(n+b\log(b+2)\bigr)\quad\text{time}\qquad\text{and}\qquad O\bigl(n+S+\log(b+2)\bigr)\quad\text{space}. $$
These bounds apply with the binary numeral for $b$ already supplied and
when the simulated computation visits $S$ cells; their constants may depend
on $M$. The $O(n)$ terms pay for
decoding and retaining the encoded input, including when $b=0$ or $b=1$.
For a clock constructed from the input length, fix a time-constructible
function $h:\mathbb N\to\mathbb N$ with $h(n)\ge n$ eventually and a
constructor $C_h$ as in [[def-time-and-space-constructible-function]]. Run
$C_h(1^n)$ to obtain $b=h(n)$ before invoking the simulator. This adds
$O(n+h(n))$ time, so total time is $O(n+h(n)\log(h(n)+2))$.
If this constructor uses $W_h(n)$ cells, total all-tapes space is
$O(n+W_h(n)+S+\log(h(n)+2))$. No constructor-space bound smaller than
$W_h(n)$ is implicit. Small externally supplied clocks, including zero and
one, remain covered by the first interface.

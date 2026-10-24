---
id: thm-busy-beaver-dominates-every-total-computable-function
kind: theorem
title: "The busy beaver function eventually dominates every total computable function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-busy-beaver-function, def-computable-and-partial-computable-function, def-partial-function-computed-by-a-machine, def-effective-encoding-of-turing-machines]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Adam Yedidia and Scott Aaronson, A Relatively Small Turing Machine Whose Behavior Is Independent of Set Theory"
      url: "https://www.scottaaronson.com/busybeaver.pdf"
---

## Statement

For every total computable function $f:\mathbb N\to\mathbb N$, with inputs and
outputs encoded by their canonical binary numerals, there exists $N\in\mathbb
N$ such that
$$ n\ge N\implies BB(n)\ge f(n). $$

## Facts & Assumptions

**Given:** A total computable function $f:\mathbb N\to\mathbb N$, with inputs and outputs encoded by their canonical binary numerals.

[L1] Under the canonical binary-numeral encodings from the Statement, some deterministic Turing machine $F$ halts on every input $\operatorname{bin}(n)$ and outputs the binary numeral $\operatorname{bin}(f(n))$, by [[def-computable-and-partial-computable-function]] and [[def-partial-function-computed-by-a-machine]].

[L2] $BB(n)$ is the maximum halting time on blank input among all machines whose chosen code has length at most $n$, by [[def-busy-beaver-function]].

[L3] The chosen machine code records a finite transition table in a finite tuple of binary words, by [[def-effective-encoding-of-turing-machines]].

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a deterministic machine $F$ that, on input $\operatorname{bin}(n)$, halts with output $\operatorname{bin}(f(n))$. For each $n\in\mathbb N$, build a new machine $P_n$ that has the binary digits of $n$ hard-wired into a straight-line prefix of its finite control, using one additional state per written digit and then handing control to a fixed simulation of $F$. On blank input, $P_n$ writes the binary numeral for $n$ onto its tape, runs $F$ on that input until $F$ halts with output $\operatorname{bin}(f(n))$, and then runs a fixed binary-counter routine for $f(n)+1$ iterations before halting. Therefore $P_n$ halts on the blank input, and its total running time is strictly greater than $f(n)$. [L1, given, construct]

2.1 Write $L_n:=|\operatorname{bin}(n)|$. The construction in step 1.1 uses at most $a+bL_n$ states and a fixed tape alphabet, for constants $a,b$ depending only on $F$ and the fixed routines. In the concrete code of [L3], this gives $O(L_n)$ transition triples, and every state numeral in those triples has length $O(\log_2(L_n+2))$. The self-delimiting tuple encoding therefore gives constants $A,B\in\mathbb N$ such that $|\ulcorner P_n\urcorner|\le A+B L_n\log_2(L_n+2)$. Since $L_n\le1+\log_2(n+1)$, the right-hand side is $O(\log n\log\log(n+2))$, so there exists $N$ such that $|\ulcorner P_n\urcorner|\le n$ whenever $n\ge N$. For those $n$, the machine $P_n$ is among the competitors counted by $BB(n)$. [L2, L3, step 1.1, algebra]

3.1 If $n\ge N$, then step 2.1 puts $P_n$ inside the size budget for $BB(n)$, and step 1.1 gives a halting time larger than $f(n)$. By [L2], the maximum $BB(n)$ is therefore at least that halting time, so $BB(n)\ge f(n)$. Thus $BB$ eventually dominates $f$. [L2, step 1.1, step 2.1] ∎

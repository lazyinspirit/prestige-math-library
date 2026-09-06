---
id: thm-nondeterministic-time-hierarchy
kind: theorem
title: "The nondeterministic time hierarchy theorem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, lem-effective-enumeration-of-clocked-machines, def-time-and-space-constructible-function, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Section 3.3, Theorem 3.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Seiferas, Fischer, and Meyer, Separating Nondeterministic Time Complexity Classes, Theorem 4 and Corollary 4.1, pp. 152–155"
      url: "https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes"
---

## Statement

For nondecreasing time-constructible $f,g$ with $n\le f(n),g(n)$ eventually and $f(n+1)=o(g(n))$,
$$ \mathrm{NTIME}(f(n))\subsetneq\mathrm{NTIME}(g(n)). $$

## Facts & Assumptions

**Given:** the displayed hypotheses, with constructibility and all-branch
$O(t)$ time classes as in [[def-time-and-space-constructible-function]] and
[[def-dtime-ntime-dspace-and-nspace]].

## Proof

**Proof technique:** application of the sourced nondeterministic separation theorem, with a clock-convention translation.

1.1 Construct a deterministic unary-input clock as follows: read its input, compute the binary value $g(n)$ with the fixed constructor, and perform $g(n)$ countdown iterations before halting. A least-significant-bit-first binary counter has linear total decrement cost (the numbers of bit changes form a geometric sum); returning its head after each decrement has the same bound. Thus the clock's actual running time $T(n)$ is $\Theta(g(n))$ eventually, and can be arranged to be at least $n$ for every $n$. It is an exact running time in the terminology of Seiferas--Fischer--Meyer, even though $g$ was supplied only by an asymptotically bounded binary-output constructor. [given, construct]

2.1 Use the first corollary to Seiferas--Fischer--Meyer Theorem 4 (the identity-function case, p. 155): for an exact running time $T$, there is a binary language $D$ accepted within $T$ but outside every acceptance-time class with bound $a$ satisfying $a(n)\ge n$ and $a(n+1)=o(T(n))$. Here acceptance time means the length of a shortest accepting branch, and nonmembers have no accepting branch. This is the external separation result being invoked. [step 1.1, construct]

3.1 In particular, $D$ has an acceptor with an accepting branch of length at most $T(n)$ on each member. Run that fixed acceptor with the fixed unary clock from step 1.1 on separate tapes, interleaving one transition of each per round, and reject if the clock expires without acceptance. This preserves the language and forces every branch to halt within $O(T(n)+n)=O(g(n))$. The product machine has fixed finite control; this is direct clocking, not a claim of linear universal simulation. Hence $D\in\mathrm{NTIME}(g)$ under the local all-branch convention. [step 1.1, step 2.1, construct]

3.2 If $D$ belonged to local $\mathrm{NTIME}(f)$, a constant integer $C$ would bound its accepting times at every length by $a(n)=\max\{n,Cf(n),C\}$: enlarge $C$ to cover the finitely many exceptional lengths. Since $f(n)\ge n$ eventually, $a(n+1)=O(f(n+1))=o(g(n))=o(T(n))$. This contradicts the exclusion in step 2.1. Thus $D\notin\mathrm{NTIME}(f)$. [given, step 1.1, step 2.1, algebra]

4.1 Nondecreasing $f$ gives $f(n)\le f(n+1)=o(g(n))$, so every all-branch $O(f)$ decider is an all-branch $O(g)$ decider. Together with steps 3.1 and 3.2 this proves the strict inclusion. [given, step 3.1, step 3.2, algebra] ∎

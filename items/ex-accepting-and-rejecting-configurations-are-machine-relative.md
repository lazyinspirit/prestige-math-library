---
id: ex-accepting-and-rejecting-configurations-are-machine-relative
kind: example
title: "The same triple can accept for one machine and reject for another"
status: draft
origin: pipeline
deps: [def-turing-machine-initial-and-halting-configuration-interface]
justified_by: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation, §5.1"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 12, §12.1"
      url: https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf
    - title: "Michael Sipser, MIT 18.404J (2020), Lecture 5, slides 8–10"
      url: https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/18c8cd00b14d48dc5865f3bdc41abd76_MIT18_404f20_lec5.pdf
---

## Example

Take $Q=\{s,A,R\}$, $\Sigma=\{a\}$, $\Gamma=\{a,\sqcup\}$, with distinct states and $a\ne\sqcup$, and start $s$. Define the entire nonhalting transition by
$$\delta(s,a)=(A,a,\mathsf R),\qquad\delta(s,\sqcup)=(A,\sqcup,\mathsf R).$$
The movement tag $\mathsf R$ is distinct in notation from the state $R$. Machine $M$ designates $A$ as accepting and $R$ as rejecting; machine $N$ designates $R$ as accepting and $A$ as rejecting. Both use the same sets, blank, start, and transition function.

For $t_{\mathrm{blank}}(i)=\sqcup$ on all natural indices, the same triple
$$C=(A,0,t_{\mathrm{blank}})$$
is accepting for $M$ and rejecting for $N$.

## Facts & Assumptions

**Given:** The two raw tuples described above and the triple $C$.

[F1] A raw tuple has three pairwise distinct designated states and a total transition on the complement of its two halting states. A configuration is a state/head/finite-support-tape triple; acceptance and rejection mean equality of its state to that machine's respective designated state ([[def-turing-machine-initial-and-halting-configuration-interface]]).

## Verification

1.1 Both machines remove the same set $\{A,R\}$ from $Q$. Their nonhalting domain is therefore exactly $\{(s,a),(s,\sqcup)\}$, and the two displayed entries provide a unique correctly typed output at each pair. In $M$ the designated triple is $(s,A,R)$, and in $N$ it is $(s,R,A)$; each has distinct entries. Their finite sets and blank exclusions are the same, so both tuples satisfy all the requirements. [given, F1]

2.1 The blank tape has support $\{i\in\mathbb N:\sqcup\ne\sqcup\}=\varnothing$. It is consequently a tape for both machines, and $A\in Q$ and $0\in\mathbb N$ make $C$ a configuration of both. The shared state, head, and tape components require no change when the designations are interchanged. [step 1.1, given, F1]

3.1 For $M$ the accepting equality is $A=q_{\mathrm{acc}}^M=A$, which is true, whereas the rejecting equality is $A=q_{\mathrm{rej}}^M=R$, which is false. Thus $C$ is accepting and not rejecting for $M$. [step 2.1, given, F1]

4.1 For $N$ the rejecting equality is $A=q_{\mathrm{rej}}^N=A$, which is true, whereas the accepting equality is $A=q_{\mathrm{acc}}^N=R$, which is false. Thus $C$ is rejecting and not accepting for $N$. It is halting for both machines, but the named outcome depends on the machine's designations, as asserted. [step 2.1, step 3.1, given, F1] ∎

## Source

The original example instantiates the designated-state distinction in [Watrous, Definition 12.1 and the following discussion, pp. 121–123](https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf). No reachability or run claim is part of the example.

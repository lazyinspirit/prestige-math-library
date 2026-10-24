---
id: ex-eliminating-a-stay-put-transition
kind: example
title: "Eliminating a stay-put transition at the left boundary"
status: published
origin: pipeline
deps: ["def-stay-put-one-tape-machine-and-run-interface", "lem-stay-put-right-left-macro-simulation"]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-10
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Stephen Checkoway, CS 301, Lecture 16: Turing machine variants"
      url: https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf
    - title: "John E. Savage, Models of Computation, Chapter 5"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
---

## Example

Let $Q=\{q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}\}$, $\Sigma=\{a\}$ and $\Gamma=\{a,\sqcup\}$, with the three states distinct and $a\ne\sqcup$. Define the complete original transition table by
$$\delta(q_0,a)=(q_{\mathrm{acc}},a,S),\qquad\delta(q_0,\sqcup)=(q_{\mathrm{acc}},\sqcup,S).$$
There are no halting-state entries. On input $a$, this machine accepts in one step at head zero without changing the tape. The tagged simulator accepts in two steps, with head trace $0,1,0$. Empty input has the same state/head trace with a wholly blank tape.

## Facts & Assumptions

**Given:** The displayed distinct states and symbols and transition table.

[F1] The stay-put interface fixes totality on nonhalting pairs, initial tapes, writes, head moves and the halting predicates ([[def-stay-put-one-tape-machine-and-run-interface]]).

[F2] The ordinary simulator uses tagged states, replaces an $S$ entry by a right move into a marked target, and returns left while preserving the scanned symbol; only the unmarked designated states halt ([[lem-stay-put-right-left-macro-simulation]]).

## Verification

1.1 The state set and both alphabets are finite, $a\ne\sqcup$ ensures $\Sigma\subseteq\Gamma\setminus\{\sqcup\}$, and the designated states are pairwise distinct. There is exactly one nonhalting state $q_0$ and exactly two tape symbols, so the two displayed entries supply every required nonhalting pair exactly once. Both outputs have valid state, symbol and direction. Thus this is a legal stay-put machine. [F1, given]

2.1 The simulator has the two unmarked entries $\delta_N((q_0,0),a)=((q_{\mathrm{acc}},1),a,R)$ and $\delta_N((q_0,0),\sqcup)=((q_{\mathrm{acc}},1),\sqcup,R)$. Its other six entries are, explicitly for each of the three values $p=q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}$, $\delta_N((p,1),a)=((p,0),a,L)$ and $\delta_N((p,1),\sqcup)=((p,0),\sqcup,L)$. These eight entries exhaust its nonhalting pairs; the two unmarked halting states have none. [F2, step 1.1]

2.2 For input $a$, let $t(0)=a$ and $t(j)=\sqcup$ for $j\ge1$. Its support is $\{0\}$. The original starts at $(q_0,0,t)$, reads $a$, writes $a$ at zero and stays there, giving $(q_{\mathrm{acc}},0,t)$ after one step. It was initially nonhalting and is now accepting, so one is its exact halting time. [F1, step 1.1]

3.1 The simulator starts at $((q_0,0),0,t)$. Its $a$ entry writes $a$ and moves right, giving $((q_{\mathrm{acc}},1),1,t)$. This is nonhalting because it is marked. It reads $t(1)=\sqcup$; the return entry writes $\sqcup$ and moves left from one to zero, giving $((q_{\mathrm{acc}},0),0,t)$. Only this second state is accepting, so the exact halting time is two and every tape cell agrees with the original halt. [F1, F2, step 2.1, step 2.2]

3.2 For empty input, $t_\varepsilon(j)=\sqcup$ for all $j$, with empty support. Substituting the blank entries gives the original step $(q_0,0,t_\varepsilon)\vdash_M(q_{\mathrm{acc}},0,t_\varepsilon)$, and simulator steps $((q_0,0),0,t_\varepsilon)\vdash_N((q_{\mathrm{acc}},1),1,t_\varepsilon)\vdash_N((q_{\mathrm{acc}},0),0,t_\varepsilon)$. Both writes rewrite blank as blank. The marked state is nonhalting, so the respective times remain one and two. [F1, F2, step 2.1]

4.1 To check a nonblank neighbor, use instead the finite-support tape $u$ with $u(0)=u(1)=a$ and $u(j)=\sqcup$ for $j\ge2$, starting at head zero. The simulator reaches $((q_{\mathrm{acc}},1),1,u)$ and uses the marked $a$ entry to reach $((q_{\mathrm{acc}},0),0,u)$. At cell one it writes $a$ as $a$, not blank, and all other cells are untouched on the return. Thus the boundary macro preserves even a nonblank right neighbor. [F1, F2, step 2.1] ∎

## Source relationship

This is a locally generated instance of the construction in [Checkoway, Lecture 16, printed slide 9 (PDF p. 18)](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf), not a source-authored example. The general finite-control comparison is [Savage, §5.1, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf); the local interface supplies the precise boundary and halting conventions.

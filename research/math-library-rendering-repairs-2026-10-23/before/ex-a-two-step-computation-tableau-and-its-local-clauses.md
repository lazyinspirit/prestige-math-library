---
id: "ex-a-two-step-computation-tableau-and-its-local-clauses"
kind: "example"
title: "A two-step computation tableau and its local clauses"
status: published
origin: "pipeline"
deps: ["def-bounded-turing-computation-tableau-interface", "lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations"]
justified_by: []
landmark: false
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3.2"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
generation:
  role: "example"
proof_strategy: "direct"
---

## Example

Consider the one-tape machine with states $q_0,q_1,q_{\mathrm{acc}},q_{\mathrm{rej}}$, alphabet $\{0,1,\sqcup\}$, and instructions $(q_0,0)\mapsto(q_1,0,R)$ and $(q_1,\sqcup)\mapsto(q_{\mathrm{acc}},\sqcup,L)$. All other nonhalting state/symbol pairs go to rejection, leaving the scanned symbol unchanged and moving left. On the one-bit input 0 it accepts after exactly two transitions. With $T=2,W=4$, its three augmented rows are
$$((q_0,0),\sqcup,\sqcup,\sqcup),\quad(0,(q_1,\sqcup),\sqcup,\sqcup),\quad((q_{\mathrm{acc}},0),\sqcup,\sqcup,\sqcup).$$
The input 0 can also be read as the paired encoding of empty input and empty fixed-length certificate for this fixed test. No certificate positions are left free in this instance.

## Facts & Assumptions

**Given:** The displayed machine, input, rows and the assignment selecting exactly their displayed symbols.

[F1] The tableau clause families use one-hot cells, pinned initial/guard cells and forbidden local tuples ([[def-bounded-turing-computation-tableau-interface]]).

[F2] A consistent tableau decodes its actual accepting run ([[lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations]]).

## Verification

1.1 Let $a_0=(q_0,0)$, $a_1=(q_1,\sqcup)$, $a_2=(q_{\mathrm{acc}},0)$ and $B=\sqcup$. Set $X_{0,0,a_0}=X_{1,1,a_1}=X_{2,0,a_2}=1$, $X_{1,0,0}=1$, and select $B$ in all other cells. In every cell the positive symbol disjunction has one true term, and every pairwise exclusion has at least one true negated term. All initial units and the three right-guard units $X_{t,3,B}$ are 1. The final accepting disjunction has its $(j,a)=(0,0)$ term true. [F1, given]

2.1 The outputs required by the local rule at cells 0 through 3 for the first transition are $0,a_1,B,B$, and for the second are $a_2,B,B,B$. At cell zero the first tuple is $(\#,a_0,B,0)$; at cell one it is $(a_0,B,B,a_1)$. In the second transition the corresponding tuples are $(\#,0,a_1,a_2)$ and $(0,a_1,B,B)$. Here $\#$ denotes the fixed exterior marker and contributes no Boolean literal. These four tuples follow the two table entries; cells two and three remain unmarked blanks because no head moves into them. Every forbidden-tuple clause therefore has at least one selected-symbol premise false, or its forbidden output false, and evaluates to 1. [F1, step 1.1]

3.1 Change just the first successor cell zero from unmarked 0 to unmarked 1, retaining one-hot encoding. The tuple $(\#,a_0,B,1)$ is forbidden, and its explicit clause $\neg X_{0,0,a_0}\vee\neg X_{0,1,B}\vee\neg X_{1,0,1}$ now has values $0\vee0\vee0=0$. Thus the correct assignment satisfies every clause whereas this altered assignment fails an actual local clause. F2 identifies the satisfying tableau with the stated two-step accepting run; for any larger allowed bound simply repeat its last row and add blank columns. [F1, F2, step 2.1] ∎

---
id: thm-stay-put-elimination-with-explicit-simulation-interface
kind: theorem
title: "Stay-put elimination with an explicit simulation interface"
status: draft
origin: pipeline
deps: ["def-stay-put-one-tape-machine-and-run-interface", "lem-stay-put-right-left-macro-simulation", "thm-recursion", "thm-induction-principle", "def-nat-addition", "def-nat-order", "lem-nat-order-add-compatible", "thm-nat-linear-order", "lem-nat-add-successor-left", "lem-nat-add-identity", "lem-nat-discrete"]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stephen Checkoway, CS 301, Lecture 16: Turing machine variants"
      url: https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf
    - title: "John E. Savage, Models of Computation, Chapter 5"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
---

## Statement

Let $M$ be any deterministic right-infinite stay-put one-tape machine. Let $N$ and $E$ be the ordinary simulator and configuration embedding of [[lem-stay-put-right-left-macro-simulation]]. From any starting configuration $C$, write $(C_i)$ for the unique maximal run of $M$. For every index $i$ reached by this run, let $s_i$ count the stay-put transitions among its first $i$ transitions, and set $k_i=i+s_i$. Then the run of $N$ from $E(C)$ reaches $E(C_i)$ at exactly the designated macro-boundary time $k_i$; this does not assert that the configuration cannot recur at other times.

The two maximal runs accept together, reject together, and diverge together. If the original halts after $t$ transitions, the simulator first halts after exactly $t+s_t$ transitions, with
$$t\le t+s_t\le t+t,$$
and the same head and entire tape, with original state represented by its unmarked copy. Thus on every input, including the empty input, the simulation preserves recognition, decision, and any fixed output read from the halting tape (or tape and head). Ordinary machines themselves form the subcase with no stay-put entries, so allowing stay-put moves changes neither the class of recognized languages nor that of decided languages.

## Facts & Assumptions

**Given:** $M,C,N,E$ as above. A step count counts transitions, so an already-halting arbitrary start has count zero. Work in ZF without Choice.

[F1] The machine/run interface gives a unique maximal run, ending at the first halt or continuing infinitely, and fixes initial tapes and the two halting predicates ([[def-stay-put-one-tape-machine-and-run-interface]]).

[F2] Each original step expands to its unique next-unmarked segment of length one or two, preserving head and tape at its end; every interior configuration is marked and nonhalting ([[lem-stay-put-right-left-macro-simulation]]).

[F3] A total self-map of a set with a specified start has a unique sequence of iterates ([[thm-recursion]]).

[F4] A property with a base case and successor step holds on the naturals ([[thm-induction-principle]]).

[F5] Addition satisfies $a+0=a$ and $a+\sigma(b)=\sigma(a+b)$ ([[def-nat-addition]]); also $\sigma(a)+b=\sigma(a+b)$ ([[lem-nat-add-successor-left]]) and $0+b=b$ ([[lem-nat-add-identity]]).

[F6] The relation $a\le b$ means $a+d=b$ for some natural $d$, and $a<b$ additionally means $a\ne b$ ([[def-nat-order]]); it is a linear order ([[thm-nat-linear-order]]).

[F7] Adding a fixed natural preserves and reflects both weak and strict order ([[lem-nat-order-add-compatible]]).

[F8] $a<b$ iff $a+1\le b$, and no natural lies strictly between $a$ and $a+1$ ([[lem-nat-discrete]]).

## Proof

1.1 Regard $N$ also as an extended machine with no $S$ entries; its ordinary and extended steps coincide. F1 gives its maximal run as well as that of $M$. For formal counters use the set $\mathcal C_M\times\mathbb N\times\mathbb N$, starting at $(C,0,0)$. At a nonhalting $(X,k,s)$, take the unique successor $X'$ and send the triple to $(X',k+1,s)$ for an $L/R$ entry and to $(X',(k+1)+1,s+1)$ for an $S$ entry. At a halting $X$, leave the whole triple fixed. This is a total self-map, so F3 constructs its iterates. Restrict to the genuine indices of the original maximal run. Their coordinates are $(C_i,k_i,s_i)$ and $s_i$ is exactly the running count of $S$ entries: it starts at zero and increases by one precisely at such entries. No fixed tail is counted as genuine steps. [F1, F2, F3]

2.1 At index zero $k_0=s_0=0$ and the simulator starts at $E(C_0)$. Suppose it has reached $E(C_i)$ and $M$ has a next step. F2 expands that step into precisely one simulator step for $L/R$ or two for $S$, reaching $E(C_{i+1})$ at the recursively prescribed $k_{i+1}$. There is no halt inside that segment. Applying induction to these finite expansions gives equality at every reached boundary, and supplies every transition in each expansion. If the original ends, apply induction up to its last index; otherwise apply it on all naturals. [step 1.1, F2, F4]

2.2 We prove $k_i=i+s_i$ by induction. At zero, $0+0=0$. In an $L/R$ step, $k_{i+1}=k_i+1=(i+s_i)+1=(i+1)+s_i$, and $s_{i+1}=s_i$. In an $S$ step, $k_{i+1}=(k_i+1)+1=((i+s_i)+1)+1=(i+1)+(s_i+1)$, and $s_{i+1}=s_i+1$. Both identities follow by the two successor laws of F5. These are the only transition types, so the equation holds at every reached index. [step 1.1, F4, F5]

3.1 Also $0\le s_i\le i$. Nonnegativity follows since $0+s_i=s_i$, a witness in F6. For the upper bound the base is $0\le0$. If $s_i\le i$, an $L/R$ step retains $s_i\le i\le i+1$, where the second inequality has witness one. An $S$ step gives $s_i+1\le i+1$ by F7. Thus induction proves the upper bound. To bound $k_i$, induction using F5 shows that for every fixed $s\le i$ and every $j$, $j+s\le j+i$: the base is $s\le i$, and adding one to both sides preserves order by F7 and converts them into $(j+1)+s$ and $(j+1)+i$. Take $j=i,s=s_i$. The lower bound $i\le i+s_i$ has witness $s_i$. Hence $i\le k_i\le i+i$. [step 2.2, F4, F5, F6, F7]

3.2 For each reached $i$, the times $0\le j<k_i$ are partitioned by the first $i$ half-open segments $[k_r,k_{r+1})$, $r<i$. This follows by induction: at $i=0$ the interval is empty; appending $[k_i,k_{i+1})$ extends exactly to $[0,k_{i+1})$ with disjoint interiors, because $k_{i+1}$ is $k_i+1$ or $(k_i+1)+1$. By F8 the appended interval contains only its boundary $k_i$, and in the second case also $k_i+1$. Thus every covered time is either a macro boundary or the sole interior time of an $S$ macro. The latter has the marked nonhalting configuration calculated in F2. [step 1.1, step 2.1, F2, F4, F6, F8]

4.1 If the original first halts at $t$, then at each boundary $k_i$ for $i<t$ its unmarked simulator copy is nonhalting. Every other time before $k_t$ is a nonhalting interior by the partition. At $k_t$ the simulator is $E(C_t)$ and is halting with exactly the same accept/reject designation, head and tape. Thus this is its first halt. Its time is $t+s_t$ and satisfies the stated bounds. This includes $t=0$, when the partition is empty and both configurations already halt. [F1, F2, step 2.1, step 2.2, step 3.1, step 3.2]

4.2 If the original is infinite, fix any simulator time $j$. The boundary $k_{j+1}$ exists and satisfies $j<j+1\le k_{j+1}$ by the bounds. Hence the finite expansion through that boundary includes time $j$. The partition makes its configuration either the unmarked copy of a nonhalting original state or a marked interior state; in both cases it is nonhalting. Uniqueness of successors makes all these finite expansions agree where they overlap. Equivalently they agree with the unique identity-extended simulator sequence supplied by F1; every one of its times is nonhalting, so every transition is genuine. The simulator therefore diverges. [F1, F2, F6, F8, step 2.1, step 3.1, step 3.2]

5.1 These implications are equivalences. If the simulator accepts, the original cannot be infinite by step 4.2 and cannot halt rejecting by step 4.1, so the exhaustive alternatives in F1 force original acceptance. The same argument exchanges acceptance and rejection. If the simulator diverges, step 4.1 rules out either finite original outcome, so the original diverges. The forward implications are already proved in steps 4.1 and 4.2. [F1, step 4.1, step 4.2]

6.1 For every input $w$, unchanged alphabets and blank give the same initial tape $t_w$, and the designated start of $N$ gives $I_N(w)=((q_0,0),0,t_w)=E(I_M(w))$. For the empty word both initial tapes are wholly blank. Applying step 5.1 to these starts proves equality of accepted-input sets and preservation of halting on every input, hence of recognition and decision. At a finite halt the tapes and heads are equal by step 4.1, so applying any fixed output-reading function to them gives equal outputs. Conversely an ordinary machine is already a stay-put machine using only $L/R$, with identical steps and runs, proving both inclusions for the two language classes. [F1, F2, step 4.1, step 5.1] ∎

## Sources

[Checkoway, Lecture 16, printed slides 8–10 (PDF pp. 14–19)](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf) supplies the inclusion and outcome-preserving simulation route. The counters, partition and exact time bounds are derived here for the specified model. [Savage, §5.1, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf) discusses language acceptance, decision and tape output with different machine conventions; the consequences here use the explicit local predicates.

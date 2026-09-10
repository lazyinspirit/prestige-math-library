---
id: lem-stay-put-right-left-macro-simulation
kind: lemma
title: "The right-left macro simulates one stay-put step"
status: published
origin: pipeline
deps: ["def-stay-put-one-tape-machine-and-run-interface", "def-one-step-configuration-relation", "def-finite-cardinality", "def-cartesian-product", "thm-the-characterising-property-of-ordered-pairs", "thm-induction-principle", "thm-omega-is-peano-system"]
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

For every stay-put machine $M$ of [[def-stay-put-one-tape-machine-and-run-interface]], there is an ordinary machine $N$ with state set $Q\times\{0,1\}$, the same $\Sigma,\Gamma,\sqcup$, and designated states $(q_0,0),(q_{\mathrm{acc}},0),(q_{\mathrm{rej}},0)$. Call tag zero **unmarked** and tag one **marked**. Put $E(q,h,t)=((q,0),h,t)$.

Its complete transition table is as follows. For every nonhalting $q\in Q$ and $a\in\Gamma$, if $\delta(q,a)=(p,b,D)$, set
$$\delta_N((q,0),a)=\begin{cases}((p,0),b,D)&D\in\{L,R\},\\((p,1),b,R)&D=S.\end{cases}$$
For every $p\in Q$ and $c\in\Gamma$, including original halting states $p$, set
$$\delta_N((p,1),c)=((p,0),c,L).$$
There are no other entries.

Each genuine $M$ step $C\vdash_M C'$ corresponds to exactly the segment from $E(C)$ to the next unmarked configuration of $N$: one step for $L/R$, two for $S$. In the latter case, if $C=(q,h,t)$ and $\delta(q,t(h))=(p,b,S)$, the sole interior configuration is $((p,1),h+1,t[h:=b])$, and it is nonhalting. Conversely every segment from an unmarked configuration to the next unmarked configuration arises in this way. An unmarked halting configuration has no such segment.

## Facts & Assumptions

**Given:** A stay-put machine $M$; all tape positions are naturals and left moves clamp at zero. Work in ZF without Choice.

[F1] The extended interface gives a unique successor at each nonhalting configuration, none at halting ones, and the three head/write clauses ([[def-stay-put-one-tape-machine-and-run-interface]]).

[F2] Ordinary steps write at the scanned cell, move right by successor, and left by predecessor at a positive cell or by the zero clamp ([[def-one-step-configuration-relation]]).

[F3] Finiteness means admitting a bijection with a natural initial segment ([[def-finite-cardinality]]).

[F4] The product $A\times B$ is a set of exactly the pairs with coordinates in $A,B$ ([[def-cartesian-product]]).

[F5] Ordered pairs are equal exactly when both coordinates are equal ([[thm-the-characterising-property-of-ordered-pairs]]).

[F6] Induction holds for properties of naturals ([[thm-induction-principle]]).

[F7] Natural successor is injective and never zero ([[thm-omega-is-peano-system]]).

## Proof

1.1 The state product exists by F4. By F5, $(p,0)=(q,1)$ would imply $0=1$, which is false by F7. Also $(p,e)=(q,e)$ implies $p=q$. Thus marked and unmarked copies are disjoint even when the original state objects themselves are pairs; the three unmarked designated states remain pairwise distinct. [F4, F5, F7, given]

2.1 Take a bijection $e:n\to Q$ by F3. The tagged states over its first $j$ values form a finite set, by induction on $j\le n$. For $j=0$ this set is empty with its empty bijection. To pass to $j+1$, append $(e(j),0)$ and then $(e(j),1)$; neither equals an earlier state, and they differ from each other by step 1.1 and injectivity of $e$. If $f:r\to A$ is a bijection and $x\notin A$, the map agreeing with $f$ on $r$ and taking $r$ to $x$ is a bijection $r+1\to A\cup\{x\}$: old images stay distinct, the new image is fresh, and every target is old or $x$. Applying this twice proves the induction step. At $j=n$ the finite set is exactly $Q\times\{0,1\}$. [F3, F6, step 1.1]

3.1 Every nonhalting simulator state is either $(q,0)$ with $q$ originally nonhalting, or $(p,1)$ for some $p\in Q$. The former has a unique original entry and exactly one of the two displayed replacement clauses applies. The latter has the displayed return entry for each scanned symbol. The cases are disjoint and exhaust all required entries; outputs have state in the product, symbol in $\Gamma$ and direction in $\{L,R\}$. The only states with no entries are the two unmarked halting states. Along with finite control and the unchanged finite alphabets, these checks establish that $N$ is a legal ordinary machine. [F1, step 1.1, step 2.1, given]

4.1 Suppose $C=(q,h,t)$ is nonhalting and $\delta(q,t(h))=(p,b,D)$ with $D=L$ or $R$. The first clause writes $b$ at $h$, changes the state to $(p,0)$, and applies the same $H_D$ as $M$. Thus its successor is $((p,0),H_D(h),t[h:=b])=E(C')$. It is already unmarked, so no earlier positive time in this segment is unmarked. This includes $D=L,h=0$, where both heads remain zero. [F1, F2, step 3.1]

4.2 For $D=S$, put $u=t[h:=b]$. The first simulator step is exactly $E(C)\vdash_N((p,1),h+1,u)$. Its state is marked and hence nonhalting, even if $p=q_{\mathrm{acc}}$ or $q_{\mathrm{rej}}$. Write $c=u(h+1)$. The forced return entry rewrites $c$ as $c$, so its updated tape $v$ has $v(h+1)=u(h+1)$ and $v(j)=u(j)$ for every other $j$; consequently $v=u$. The head is at a positive successor by F7, whose unique predecessor is $h$, so the return ends at $((p,0),h,u)=E(C')$. At $h=0$ the head trace is $0,1,0$. The symbol $c$ may be blank or any nonblank symbol; the whole tape equality used no assumption about it. [F1, F2, F7, step 1.1, step 3.1]

5.1 Conversely, an unmarked starting configuration has the unique form $E(q,h,t)$ by F5. If $q$ is halting it has no successor. Otherwise its unique original entry has direction $L$, $R$ or $S$. The first two give the one-step segment of step 4.1. The third gives the marked first state and forced unmarked second state of step 4.2, with no unmarked interior. There is no fourth case and no freedom to take a different return transition. Thus all and only the next-unmarked segments are precisely the claimed simulations, in both directions. [F1, F5, step 3.1, step 4.1, step 4.2] ∎

## Sources

The construction adapts [Checkoway, Lecture 16, printed slide 9, final overlay (PDF p. 18)](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf). The tagged product makes freshness literal; the proof supplies finiteness, totality, the zero-boundary calculation and the halting-target check for the local model. [Savage, §5.1, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf) supplies finite-control context, not this exact macro or its clamped boundary convention.

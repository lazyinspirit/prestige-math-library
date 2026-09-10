---
id: def-stay-put-one-tape-machine-and-run-interface
kind: definition
title: "Stay-put one-tape machines and their runs"
status: published
origin: pipeline
deps: ["def-deterministic-one-tape-turing-machine", "def-one-step-configuration-relation", "def-turing-machine-initial-and-halting-configuration-interface", "thm-recursion", "thm-induction-principle", "thm-subset-of-a-finite-set"]
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

## Definition

A **stay-put one-tape machine** is a tuple $M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$ with all the finite-set, alphabet and pairwise-distinct designated-state conditions of [[def-deterministic-one-tape-turing-machine]], except that the total transition function is
$$\delta:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\longrightarrow Q\times\Gamma\times\{L,R,S\}.$$
The three direction tags are distinct. There are no transition entries at either halting state.

A tape is a function $t:\mathbb N\to\Gamma$ with finite support $\{j:t(j)\ne\sqcup\}$. Write $\mathcal T$ for the set of tapes and $\mathcal C_M=Q\times\mathbb N\times\mathcal T$. For $b\in\Gamma$ put $t[h:=b](h)=b$ and $t[h:=b](j)=t(j)$ for $j\ne h$. From a nonhalting $C=(q,h,t)$, if $\delta(q,t(h))=(p,b,D)$, its successor is
$$C'=(p,H_D(h),t[h:=b]),\qquad H_R(h)=h+1,\quad H_S(h)=h,\quad H_L(h)=\begin{cases}0&h=0,\\h-1&h>0.\end{cases}$$
Here $h-1$ means the predecessor of a positive natural. This extends [[def-one-step-configuration-relation]]. Write $C\vdash_M C'$ for exactly these steps; no halting configuration has a successor.

For a word $w:m\to\Sigma$, set $t_w(j)=w(j)$ when $j<m$ and $t_w(j)=\sqcup$ otherwise, and $I_M(w)=(q_0,0,t_w)$. Accepting means $q=q_{\mathrm{acc}}$, rejecting means $q=q_{\mathrm{rej}}$, and halting means either equality. These are the formulas of [[def-turing-machine-initial-and-halting-configuration-interface]], now for the extended tuple.

A **maximal run from $C$** is either a sequence $C_0,\ldots,C_t$ with $C_0=C$, each $C_i\vdash_M C_{i+1}$ for $i<t$, and $C_t$ halting, or an infinite sequence $(C_i)_{i\in\mathbb N}$ starting at $C$ with each consecutive pair a genuine step. A finite run accepts or rejects according to its last state; an infinite run **diverges**. There is exactly one maximal run from every configuration, as verified below. To recognize a language means to accept exactly its inputs; to decide it additionally means to halt on every input.

## Facts & Assumptions

**Given:** Such a tuple $M$ and a configuration $C$; work in ZF without Choice.

[F1] The base tuple has a finite state set, finite alphabets and a total nonhalting transition function ([[def-deterministic-one-tape-turing-machine]]).

[F2] Ordinary one-step dynamics write only at the current cell and clamp a left move at zero ([[def-one-step-configuration-relation]]).

[F3] Finite-support tapes, their configuration product, and the displayed input/halting formulas are defined from $Q,\Gamma,\sqcup$ and the designated states ([[def-turing-machine-initial-and-halting-configuration-interface]]).

[F4] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F5] A total self-map of a set, with a specified starting element, has a unique recursively iterated sequence on the naturals ([[thm-recursion]]).

[F6] A property true at zero and preserved by successor holds on all naturals ([[thm-induction-principle]]).

## Verification

1.1 As in the configuration-set construction of F3, separate finite-support functions inside $\Gamma^{\mathbb N}$ to obtain $\mathcal T$, and take $Q\times\mathbb N\times\mathcal T$. These formulas use only the displayed sets and blank, so changing the direction codomain has no effect on their sethood. The graph of $t[h:=b]$ is the subset of $\mathbb N\times\Gamma$ given by $(j=h\land c=b)\lor(j\ne h\land c=t(j))$. Exactly one clause supplies exactly one value in $\Gamma$ at each $j$, so this is a total function. [F3, given]

2.1 Put $F=\operatorname{supp}(t)$. If $h\in F$, then $F\cup\{h\}=F$ is finite. Otherwise take a bijection $e:n\to F$, available by finiteness; extending it by $e'(n)=h$ gives a bijection $n+1\to F\cup\{h\}$, since the new value is outside the old range. This also works for $F=\varnothing$ and $n=0$. At every $j\notin F\cup\{h\}$ the new value equals $t(j)=\sqcup$. Hence $\operatorname{supp}(t[h:=b])\subseteq F\cup\{h\}$ is finite by F4. [step 1.1, F3, F4]

3.1 At a nonhalting state, totality supplies a unique $(p,b,D)$. Exactly one head clause applies, and it returns a natural, including the clamped value zero. Together with the unique updated tape from the preceding steps this gives exactly one successor in $\mathcal C_M$. For $D=L,R$ this is the ordinary step formula, and for $D=S$ the head is unchanged. At a halting state the explicit nonhalting condition fails, so there is no successor. [F1, F2, step 1.1, step 2.1, given]

4.1 Define $T:\mathcal C_M\to\mathcal C_M$ by this successor on nonhalting configurations and by $T(X)=X$ on halting ones. Its graph consists of these two disjoint prescriptions and is a set; it is total by the preceding step. F5 with $A=\mathcal C_M$, $a=C$, $f=T$ supplies a unique $u:\mathbb N\to\mathcal C_M$ satisfying $u(0)=C$ and $u(i+1)=T(u(i))$. [step 3.1, F5]

5.1 Every nonempty set $B$ of natural indices has a least member: take one $b\in B$ and inspect the finite list $0,\ldots,b$. More formally, induction on $n$ proves that $B\cap\{0,\ldots,n\}$ is empty or has a least member. At zero it is empty or $\{0\}$. On adjoining $n+1$, retain the old least member if there was one; otherwise the new intersection is empty or $\{n+1\}$. At $n=b$ it is nonempty, and its least member is also least in $B$, because every index outside this initial list exceeds $b$. Thus, if $u$ ever halts, its first halting index $t$ exists. [step 4.1, F6]

6.1 If such $t$ exists, all $u(i)$ for $i<t$ are nonhalting, so $u(0),\ldots,u(t)$ is a genuine finite maximal run. Otherwise every transition of $u$ is genuine and $u$ is an infinite maximal run. For any other run with the same start, equality holds at index zero; whenever both prefixes continue, equal nonhalting configurations have equal successors by uniqueness. Induction gives agreement at every common index. A finite maximal run cannot end earlier, since the corresponding $u(i)$ would be nonhalting, and cannot continue past $t$, where there is no successor. An infinite run cannot pass a finite $t$ either. This proves uniqueness and the exhaustive, disjoint accept/reject/diverge alternatives. The constant tail of $u$ after $t$ is never part of a computation. [step 3.1, step 4.1, step 5.1, F6]

7.1 For any input $w:m\to\Sigma$, the initial tape prescription assigns a unique value in $\Gamma$ at each index. Its support is exactly $\{0,\ldots,m-1\}=m$: blank exclusion makes every input cell nonblank and every other cell blank. Thus $I_M(w)$ is a configuration. When $m=0$ the support is empty; when $m=1$ it is $\{0\}$. If $\Sigma=\varnothing$ only the empty input exists, and $\Gamma=\{\sqcup\}$ is allowed. The start is nonhalting because the designated states are pairwise distinct. For an arbitrary already-halting start, the unique maximal run has zero transitions. These cover the degenerate inputs without a choice function or a false infinite halting tail. [F1, F3, step 6.1] ∎

## Source conventions

[Checkoway, Lecture 16, printed slide 3 (PDF p. 3)](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf) introduces the extra direction. The present totality domain excludes halting states. [Savage, §5.1, Definition 5.1.1 and discussion, pp. 210–211](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf) supplies finite control and a single-ended tape, but separates writes from moves and uses abnormal left-edge termination. Here writes accompany moves, the boundary clamps, and two distinct halting states determine the outcomes. Neither source's different convention is silently imported.

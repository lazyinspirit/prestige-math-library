---
id: lem-lifts-of-circle-loop-concatenation-and-reversal
kind: lemma
title: "Lifts of circle-loop concatenations and reversals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-of-a-circle-loop, def-circle-as-real-line-mod-integers, def-based-loops-and-fundamental-group, thm-path-lifting-for-covering-maps, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $\alpha$ and $\beta$ be based loops in $\mathbb R/\mathbb Z$, and let their
lifts from zero be $\widetilde\alpha$ and $\widetilde\beta$, with terminal
values $m$ and $n$. The lift of $\alpha*\beta$ from zero is

$$\widetilde{\alpha*\beta}(t)=\begin{cases}\widetilde\alpha(2t),&0\le t\le1/2,\\ m+\widetilde\beta(2t-1),&1/2\le t\le1,\end{cases}$$

and it ends at $m+n$. The lift of the reversed loop $\bar\alpha$ from zero is

$$\widetilde{\bar\alpha}(t)=\widetilde\alpha(1-t)-m,$$

and it ends at $-m$. Thus lifts of circle-loop concatenations and reversals have endpoints equal to the sum and the negative of the original endpoints.

## Facts & Assumptions

**Given:** Based loops $\alpha,\beta$, their lifts $\widetilde\alpha,\widetilde\beta$ from zero, and terminal values $m=\widetilde\alpha(1)$ and $n=\widetilde\beta(1)$.

[L1] For a based circle loop $\gamma$ with lift $\widetilde\gamma$ from zero, the terminal value $\widetilde\gamma(1)$ is an integer and $\deg(\gamma)=\widetilde\gamma(1)$ ([[def-degree-of-a-circle-loop]]).

[L2] The product $[\alpha][\beta]$ traverses $\alpha$ first and $\beta$ second, and is represented by $\alpha*\beta$ ([[def-based-loops-and-fundamental-group]]).

[L3] A path through a covering has a unique lift once its initial point is prescribed ([[thm-path-lifting-for-covering-maps]]).

[L4] Functions continuous on each member of a finite closed cover, and agreeing where the pieces meet, paste to a continuous function ([[lem-continuity-is-local-and-pastes]]).

[L5] For the quotient projection $p$, one has $p(x+k)=p(x)$ for every real $x$ and integer $k$ ([[def-circle-as-real-line-mod-integers]]).

[L6] Constant functions, the identity, finite sums, and scalar multiples are continuous on real intervals ([[thm-algebra-of-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 Define $\gamma$ by the displayed two-piece formula. At $t=1/2$ the left value is $\widetilde\alpha(1)=m$ and the right value is $m+\widetilde\beta(0)=m$, so [L4] and [L6] make $\gamma$ continuous. It starts at zero. By [L5], its first half projects to $\alpha(2t)$ and its second half to $\beta(2t-1)$, in the order fixed by [L2], so $p\circ\gamma=\alpha*\beta$; its endpoint is $m+n$. [L1, L2, L4, L5, L6]

1.2 Define $\delta(t)=\widetilde\alpha(1-t)-m$. It is continuous by [L6], begins at $m-m=0$, and ends at $0-m=-m$. Since $m\in\mathbb Z$ by [L1], [L5] gives $p(\delta(t))=p(\widetilde\alpha(1-t))=\alpha(1-t)=\bar\alpha(t)$. [L1, L5, L6, algebra]

2.1 Both $\gamma$ and $\delta$ are lifts with initial point zero, so uniqueness in [L3] identifies them with the defining lifts of $\alpha*\beta$ and $\bar\alpha$. Their endpoints are therefore $m+n$ and $-m$, respectively. [step 1.1, step 1.2, L3] ∎

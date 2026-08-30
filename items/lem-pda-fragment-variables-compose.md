---
id: lem-pda-fragment-variables-compose
kind: lemma
title: "PDA fragment variables compose"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pda-computation-fragment-variable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $M$ be a PDA that accepts by empty stack.

1. If $x$ is in the language of $[p,Z,r]$ and $y$ is in the language of
   $[r,Y,q]$, then $xy$ removes the stack prefix $ZY$ while changing state from
   $p$ to $q$ and leaving the remaining stack untouched.
2. Conversely, consider a computation starting at $(p,w,ZY\alpha)$, and let
   $(q,v,\alpha)$ be its first configuration whose stack is exactly $\alpha$.
   Then there are words $x,y\in\Sigma^*$ and a state $r\in Q$ such that
   $w=xyv$, $x\in[p,Z,r]$, and $y\in[r,Y,q]$. The two split points are the
   first moments when $Y\alpha$ and then $\alpha$ are exposed.

## Facts & Assumptions

**Given:** A PDA $M$ that accepts by empty stack.

[L1] By [[def-pda-computation-fragment-variable]], $x\in[p,Z,r]$ means that for every stack suffix $\alpha$ one has $(p,x,Z\alpha)\vdash_M^*(r,\varepsilon,\alpha)$.

## Proof

**Proof technique:** direct.

1.1 Assume $x\in[p,Z,r]$ and $y\in[r,Y,q]$, and let $\alpha$ be any stack suffix. Then [L1] gives $(p,x,ZY\alpha)\vdash_M^*(r,\varepsilon,Y\alpha)$ and also $(r,y,Y\alpha)\vdash_M^*(q,\varepsilon,\alpha)$. Concatenating these two computations yields $(p,xy,ZY\alpha)\vdash_M^*(q,\varepsilon,\alpha)$. [L1, given]

1.2 Conversely, let $(q,v,\alpha)$ be the first configuration with stack $\alpha$ in a computation starting at $(p,w,ZY\alpha)$. Before that point there is a first configuration whose stack is $Y\alpha$; write it as $(r,yv,Y\alpha)$ and write $w=xyv$, where $x$ is the input prefix consumed before it is reached and $y$ is consumed between the two first-exposure configurations. The computation therefore contains $(p,xyv,ZY\alpha)\vdash_M^*(r,yv,Y\alpha)\vdash_M^*(q,v,\alpha)$. Neither segment inspects the suffix $\alpha$ before its endpoint. Hence the same transition sequences work above every stack suffix $\beta$, giving $(p,x,Z\beta)\vdash_M^*(r,\varepsilon,\beta)$ and $(r,y,Y\beta)\vdash_M^*(q,\varepsilon,\beta)$. By [L1], $x\in[p,Z,r]$ and $y\in[r,Y,q]$. [L1, construct]

2.1 Therefore fragment computations compose exactly by concatenating the consumed words and, conversely, by splitting at the first moment when the lower stacked symbol is exposed. [step 1.1, step 1.2] ∎

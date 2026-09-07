---
id: cor-expander-independent-sets-coloring-and-diameter
kind: corollary
title: "Expander independent sets coloring and diameter"
status: draft
origin: pipeline
deps: [thm-expander-mixing-lemma, thm-cheeger-inequalities-for-finite-regular-graphs]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §2.4 bullets after Lemma2.6, pp21–22; constants sharpened using centered indicators."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

If $S$ is independent in a $d$-regular adjacency-slot graph (meaning $e(S,S)=0$), then $|S|\le\alpha n/(1+\alpha)$. Thus a loopless graph with $\alpha>0$ needs at least $(1+\alpha)/\alpha$ colors. For $n\ge2$ and $h>0$ its diameter is at most $2\lceil\log n/\log(1+h)\rceil+2$. A singleton has diameter zero.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For any subsets $S,T$ of a finite $d$-regular adjacency-slot graph on $n\ge1$ vertices, let $e(S,T)=\sum_{u\in S,v\in T}A_{uv}$ count ordered slots. Then $$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le\alpha d\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$ Overlap and loop slots are allowed. ([[thm-expander-mixing-lemma]]).

[F2] For a finite $d$-regular adjacency-slot multigraph on $n\ge2$ vertices, $$\frac{\gamma}{2}\le h\le\sqrt{2\gamma},\qquad h\le h_V\le dh.$$ Here $\gamma=1-\mu_2$ is the algebraic gap; it is not replaced by $1-\alpha$. ([[thm-cheeger-inequalities-for-finite-regular-graphs]]).


## Proof

1.1 For $S\ne\varnothing$, mixing with $S=T$ gives $d|S|^2/n\le\alpha d|S|(1-|S|/n)$. Cancel the positive $d|S|$ and rearrange. For empty $S$ the bound holds directly. If $\alpha=0$ there is no nonempty independent set. In a loopless graph every color class is independent, so summing their sizes gives the color bound when $\alpha>0$. [F1]

2.1 Every set of size at most $n/2$ has at least $h$ times its size in external neighbors, by the edge/vertex comparison. A ball therefore grows by a factor at least $1+h$ until it exceeds $n/2$. With $R=\lceil\log n/\log(1+h)\rceil+1$, a ball of radius $R$ must exceed half the graph; otherwise successive growth from its initial single vertex contradicts its size bound. Two such balls intersect, giving distance at most $2R$. Positive $h$ also excludes a separate component of size at most half. For $n=1$ use diameter zero without defining $h$. [F2, algebra] ∎

---
id: ex-expander-mixing-lemma
kind: example
title: "Expander mixing lemma"
status: published
origin: pipeline
deps: [thm-expander-mixing-lemma]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §2.3 spectral properties and §2.4 mixing, pp20–21; finite computations."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Example

For the looped complete adjacency-slot graph $A=J_n$, $d=n$ and $\alpha=0$, with $e(S,T)=|S||T|$ for all sets. In contrast, for $K_{r,r}$ with $r\ge2$ one has $\mu_2=0$ but $\alpha=1$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For any subsets $S,T$ of a finite $d$-regular adjacency-slot graph on $n\ge1$ vertices, let $e(S,T)=\sum_{u\in S,v\in T}A_{uv}$ count ordered slots. Then $$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le\alpha d\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$ Overlap and loop slots are allowed. ([[thm-expander-mixing-lemma]]).


## Verification

1.1 The normalized complete matrix sends every vector to its average constant vector, so it vanishes on the mean-zero space. There is one slot for every ordered pair, giving $e(S,T)=|S||T|$ even for overlapping sets. This is exact equality in mixing, including empty or full sets and $n=1$. [F1, algebra]

2.1 For $K_{r,r}$, $M$ averages across the opposite side. Its constant vector has eigenvalue one; the vector $+1$ on one side and $-1$ on the other has eigenvalue minus one. The $2r-2$ dimensional space with zero sum on each side has eigenvalue zero. These subspaces span, so $\mu_2=0$ for $r\ge2$, whereas the absolute nontrivial norm is one. A walk alternates sides, explaining why a positive algebraic gap alone does not give the absolute contraction used in mixing and walk estimates. [step 1.1, algebra] ∎

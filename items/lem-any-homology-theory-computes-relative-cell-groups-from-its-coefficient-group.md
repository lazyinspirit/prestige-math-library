---
id: "lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group"
kind: "lemma"
title: "Any ordinary homology theory computes relative cell groups from its coefficient group"
deps: ["prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§3, suspension corollaries, p.109; 15§2 p.120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§3, suspension corollaries, p.109; 15§2 p.120"
status: published
origin: "pipeline"
proof_strategy: "Use the cone LES and natural suspension repeatedly, starting with h_0(S^0,one point)=G. Negative-degree vanishing follows by dimension, not by imposing an extra connective axiom."
---

## Statement

Let $h$ be an ordinary theory with coefficient group $G=h_0(*)$. For every $n\ge0$ and $k\in\mathbb Z$,
$$h_k(D^n,S^{n-1})\cong\begin{cases}G&k=n,\\0&k\ne n.\end{cases}$$
At $n=0$ the pair means $(*,\varnothing)$. Also $\widetilde h_k(S^n)\cong G$ for $k=n$ and zero otherwise, including $n=0$. Choose the disk identifications by ordered orientations and iterated cone boundaries, so they commute with these boundaries.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$. Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$. ([[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]])

## Proof

1.1 The dimension axiom gives the assertion for $(*,\varnothing)$. On $S^0=\{-,+\}$ the split augmentation is addition $h_k(*)\oplus h_k(*)\to h_k(*)$, with kernel $g\mapsto(-g,g)$. Thus the reduced sphere assertion starts in degree zero, with the displayed difference orientation. [F1, algebra]

2.1 For a nonempty sphere, the contractible cone has zero reduced groups. Its exact sequence identifies the relative cone group in degree $k$ with $\widetilde h_{k-1}$ of its base, including degree one where this is a reduced zero-degree group. The quotient is the suspension sphere. Iterating F1's natural suspension gives $\widetilde h_k(S^n)\cong h_{k-n}(*)$. [F1, step 1.1]

3.1 For $n\ge1$, apply the same cone boundary to $(D^n,S^{n-1})$. The dimension axiom makes $h_{k-n}(*)$ vanish unless $k=n$, including all negative $k$. Fix orientations by these boundary identifications starting with $(-g,g)$ on $S^0$. They remain valid for $G=0$. [F1, step 1.1, step 2.1] ∎

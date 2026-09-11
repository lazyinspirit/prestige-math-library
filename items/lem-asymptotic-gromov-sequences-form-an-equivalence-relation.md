---
id: "lem-asymptotic-gromov-sequences-form-an-equivalence-relation"
kind: "lemma"
title: "Asymptotic gromov sequences form an equivalence relation"
deps: ["def-hg-toolkit-gromov-sequences-and-boundary-product", "lem-slim-triangles-imply-the-gromov-product-inequality"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.5 product inequality; §9.9 boundary conventions"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In a metric space satisfying the product condition with constant $\kappa\ge0$, mixed-product divergence is an equivalence relation on Gromov sequences. Both being Gromov and this equivalence relation are unchanged by changing the basepoint. In particular this applies to a geodesic $\delta$-slim space with $\kappa=3\delta$, and makes the Gromov-sequence boundary well-defined.

## Facts & Assumptions

**Given:** Basepoints $o,o'\in X$ and the product inequality $(x|z)_o\ge\min\{(x|y)_o,(y|z)_o\}-\kappa$.

[F1] Joint divergence, Gromov sequences and the conditional quotient are defined in [[def-hg-toolkit-gromov-sequences-and-boundary-product]].

[F2] The product condition with $\kappa=3\delta$ holds in a $\delta$-slim geodesic space by [[lem-slim-triangles-imply-the-gromov-product-inequality]].

## Proof

1.1 A Gromov sequence $x$ satisfies $x\sim x$ by exactly the joint divergence in F1. Symmetry follows from $(x_n|y_m)_o=(y_m|x_n)_o$, interchanging the two quantified indices. These assertions are also valid when no Gromov sequences exist, since they quantify over that set. [F1, given, algebra]

1.2 Suppose $x\sim y$ and $y\sim z$, and fix a real threshold $R$. There is a common integer $N$ such that $(x_n|y_k)_o>R+\kappa$ and $(y_k|z_m)_o>R+\kappa$ for all $n,k,m\ge N$, by taking the larger of the two divergence cutoffs. Fix the single index $k=N$. The product inequality gives $(x_n|z_m)_o>R$ for every $n,m\ge N$, proving transitivity with joint quantifiers. [F1, given]

1.3 Put $D=d(o,o')$. The reverse triangle inequality gives $|d(o,x)-d(o',x)|\le D$ for every $x$. Expanding the two products therefore gives $|(x|y)_o-(x|y)_{o'}|\le D$. A joint-divergence cutoff at threshold $R+D$ for one basepoint is a cutoff at $R$ for the other. Apply this first to a sequence paired with itself, then to two sequences. Interchanging $o,o'$ proves both directions of basepoint independence. [given, algebra]

2.1 Steps 1.1–1.2 prove equivalence and therefore justify the quotient specified in F1; step 1.3 identifies the same classes at every basepoint. F2 supplies the stated geodesic specialization. There is no selection of a family of representatives and no AC. All arguments include $\kappa=0$ and $D=0$. [step 1.1, step 1.2, step 1.3, F1, F2] ∎

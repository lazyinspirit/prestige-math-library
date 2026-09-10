---
id: lem-strict-linear-alternative-for-gcm-trichotomy
kind: lemma
title: "Strict linear alternative for GCM trichotomy"
status: draft
origin: pipeline
deps: ["thm-euclidean-heine-borel-pseudocompactness-and-extreme-values"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemma 4.1.4 and Proposition 4.1.5, pp.51–52; minimum taken directly on the coefficient simplex"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For a finite list $v_1,\ldots,v_m\in\mathbb R^n$, there exists $x$ with $v_i\cdot x>0$ for every $i$ if and only if $\sum_i t_i v_i=0$, $t_i\ge0$, implies all $t_i=0$. Consequently, if a real $m\times n$ matrix $C$ satisfies $u\ge0$ and $C^tu\ge0\Rightarrow u=0$, then there is $v>0$ with $Cv<0$. Coordinatewise strict inequalities on an empty coordinate list are vacuous.

## Facts & Assumptions

**Given:** Finite real row vectors, with the ordinary Euclidean dot product.

[F1] On a nonempty closed bounded Euclidean subset, a continuous function attains its extrema. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

## Proof

1.1 If every $v_i\cdot x>0$, then $0=(\sum_i t_iv_i)\cdot x=\sum_i t_i(v_i\cdot x)$ with $t_i\ge0$ forces each $t_i=0$. If $m=0$, take $x=0$ and both conditions hold vacuously. If $n=0<m$, every row is zero, so neither condition holds. Thus the reverse direction need only consider $m,n\ge1$. [given]

2.1 Assume there is no nonzero nonnegative relation. The coefficient simplex $E=\{t\in\mathbb R^m:t_i\ge0,\sum_i t_i=1\}$ is nonempty, closed and bounded. The polynomial function $t\mapsto\|\sum_i t_i v_i\|^2$ is continuous, so F1 supplies a minimizer $t^*$. Put $x=\sum_i t_i^*v_i$. This vector is nonzero by the hypothesis. For each convex combination $y=\sum_i s_i v_i$, the coefficients $(1-t)t^*+ts$ remain in $E$ for $0\le t\le1$. Minimality gives $0\le2t(x,y-x)+t^2\|y-x\|^2$. For $t>0$, divide by $t$; if $(x,y-x)<0$, sufficiently small positive $t$ contradicts the inequality. Therefore $x\cdot y\ge\|x\|^2>0$, in particular $x\cdot v_i>0$. This proves the reverse implication without a separate compact-image assumption. [F1, given, step 1.1]

3.1 Apply the equivalence to the rows of $-C$ together with the coordinate rows of the identity matrix. A nonnegative relation has the form $-C^t\lambda+\mu=0$ with $\lambda\ge0$, $\mu\ge0$. The matrix hypothesis forces $\lambda=0$, and hence $\mu=0$. The separating vector $v$ thus satisfies $-Cv>0$ and $v>0$. If either matrix dimension is zero the same empty-coordinate interpretation applies; for $n=0<m$ the matrix hypothesis is false. [step 1.1, step 2.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemma 4.1.4 and Proposition 4.1.5, pp.51–52; minimum taken directly on the coefficient simplex.

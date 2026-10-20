---
id: lem-ap-finite-dimensional-factorization-of-continuous-maps
kind: lemma
title: "Approximation property gives finite-dimensional factorization on compacta"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-approximation-property-and-bounded-approximation-property, thm-coordinate-map-for-a-finite-dimensional-normed-space]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Kovachki et al., Neural Operator, Lemma 22"
      url: "https://arxiv.org/pdf/2108.08481"
---

## Statement

Let $X,Y$ be real Banach spaces with the approximation property, $T:X\to Y$ continuous, $K\subset X$ compact, and $\varepsilon>0$. There are integers $J,s\ge1$, bounded linear maps $E:X\to\mathbb R^J$ and $B:\mathbb R^s\to Y$, and continuous $h:\mathbb R^J\to\mathbb R^s$ such that $\sup_{x\in K}\|T(x)-Bh(E(x))\|_Y<\varepsilon$. In particular $E(x)=(\ell_j(x))_{j=1}^J$ for bounded linear functionals $\ell_j$, and $Bv=\sum_{i=1}^s v_i\beta_i$ for finitely many $\beta_i\in Y$.

## Statement references

[Kovachki et al., Lemma 22](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** The Banach spaces with AP, the continuous map $T$, compact $K$, and error $\varepsilon>0$.

[F1] AP approximates the identity uniformly on any compact set by bounded finite-rank linear maps ([[def-approximation-property-and-bounded-approximation-property]]).

[F2] A chosen finite basis has bounded linear coordinate maps in both directions ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

## Proof

1.1 If $K$ is empty use zero maps. Otherwise consider all pairs $(x,\rho)$ with $x\in K$ and $\rho>0$ such that $\|T(z)-T(x)\|_Y<\varepsilon/4$ whenever $\|z-x\|_X<3\rho$. Continuity ensures that the balls $B(x,\rho)$ from this family cover $K$; take a finite subcover $B(x_i,\rho_i)$. Put $\delta=\min_i\rho_i>0$. For $x\in K$ and $z\in X$ with $\|z-x\|_X<\delta$, select $i$ with $\|x-x_i\|_X<\rho_i$; then both $x,z$ lie within $3\rho_i$ of $x_i$, so $\|T(z)-T(x)\|_Y<\varepsilon/2$. No compact neighborhood of $K$ is asserted or needed. [given, choose, construct, algebra]

1.2 Apply AP in $X$ to choose bounded finite-rank $P$ with $\sup_K\|Px-x\|_X<\delta$. By step 1.1, $\sup_K\|T(Px)-T(x)\|_Y<\varepsilon/2$. The set $T(P(K))$ is compact; apply AP in $Y$ to obtain bounded finite-rank $Q$ with $\sup_{x\in K}\|QT(Px)-T(Px)\|_Y<\varepsilon/2$. Thus $QT P$ approximates $T$ on $K$ within $\varepsilon$. This makes only two AP selections and does not require a sequence, an infinite union of compact sets, or a choice principle for sequences. [step 1.1, F1, choose, algebra]

2.1 Choose a finite basis $\alpha_1,\ldots,\alpha_J$ of $P(X)$. Its coordinate functionals are bounded by [F2]; hence $Px=\sum_j\ell_j(x)\alpha_j$ with $\ell_j$ bounded on $X$, by composing those functionals with $P$. Write $Rz=\sum_jz_j\alpha_j$, $E(x)=(\ell_j(x))_j$. Choose a finite basis $\beta_1,\ldots,\beta_s$ of $Q(Y)$, with bounded coordinate functionals $c_i$, and put $h_i(z)=c_i(QT(Rz))$ and $Bv=\sum_i v_i\beta_i$. Each $h_i$ is continuous on all $\mathbb R^J$, and $BhE=QTP$. For a zero-dimensional range use one zero basis vector and the zero coefficient map instead of an actual basis. These formulas prove the stated factorization and complete the proof. [step 1.2, F2, construct, algebra] ∎

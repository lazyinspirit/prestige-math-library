---
id: cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group
kind: corollary
title: Matrix coefficients are uniformly dense in C(G)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-peter-weyl-for-compact-lie-groups, lem-compact-lie-groups-admit-central-continuous-approximate-identities, def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, uniform density of matrix coefficients (after Theorem 4.20)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Finite linear combinations of matrix coefficients
of finite-dimensional unitary representations are uniformly dense in $C(G)$ for
a compact Lie group $G$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure, and $f\in C(G)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar and Hilbert-space theory cited.

[L1] The normalized matrix coefficients form a Hilbert basis of $L^2(G)$, so every element of $L^2(G)$ is the finite-subset-net limit of finite matrix-coefficient sums ([[thm-peter-weyl-for-compact-lie-groups]]).

[L2] There are continuous central functions $k_n$ of integral one with $T_{k_n}f\to f$ uniformly for continuous $f$; $C(G)\subseteq L^2(G)$ because $G$ is compact ([[lem-compact-lie-groups-admit-central-continuous-approximate-identities]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is continuous on the compact group, $f\in L^2(G)$ and $\|f\|_2<+\infty$; fix $\varepsilon>0$ and choose $n$ with $\sup_x|T_{k_n}f(x)-f(x)|<\varepsilon/2$ by [L2], so that $|f(x)-\int_Gk_n(u)f(xu)\,du|<\varepsilon/2$ for every $x$. [L2]

1.2 By [L1] applied to the $L^2$ class of $k_n$, there is a finite linear combination $p$ of matrix coefficients with $\|k_n-p\|_2<\varepsilon/(2\|f\|_2)$ when $f\ne0$ (and the conclusion below is trivial when $f=0$). [L1]

2.1 For every $x$, the defining formula for the convolution operators gives $$|T_pf(x)-T_{k_n}f(x)|\le\int_G|p(x^{-1}y)-k_n(x^{-1}y)|\,|f(y)|\,dy\le\|p-k_n\|_2\|f\|_2<\varepsilon/2$$ by Cauchy–Schwarz and Haar invariance. Hence $\|T_pf-f\|_\infty<\varepsilon$ by step 1.1. The function $T_pf$ is a finite linear combination of matrix coefficients: if a summand of $p$ is $\pi_{ij}$, then $$\pi_{ij}(x^{-1}y)=\sum_k\pi_{ik}(x^{-1})\pi_{kj}(y),$$ so its contribution to $T_pf(x)$ is a finite sum of the constants $\int_G\pi_{kj}(y)f(y)\,dy$ times the matrix coefficients $x\mapsto\pi_{ik}(x^{-1})$ of the contragredient representation. Thus a finite matrix-coefficient sum lies within $\varepsilon$ of $f$ uniformly. [L1, L2, step 1.1, step 1.2]

3.1 The zero function is approximated by the zero linear combination, and the same argument includes the one-element group. All noncanonical existence used above is contained in the Haar, Hilbert-space and representation-theoretic suppliers invoked in [L1] and [L2], under the Axiom of Choice assumed in [A1]. [A1, L1, L2, step 2.1] ∎

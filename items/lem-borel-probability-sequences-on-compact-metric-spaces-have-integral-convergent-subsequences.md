---
id: lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences
kind: lemma
title: Probability sequences on compact metric spaces have integral-convergent subsequences
deps: ["lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family", "thm-bolzano-weierstrass", "lem-positive-functionals-on-compact-metric-spaces-have-probability-representations", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W §3.1 pp.97–98; local diagonal/RMK replacement for source weak-star compactness
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. Let $(\mu_n)_{n\ge1}$ be Borel probabilities on a nonempty compact metric space $K$. There are strictly increasing positive integers $n_r$ and a Borel probability $\mu$ on $K$ such that $\int f\,d\mu_{n_r}\to\int f\,d\mu$ for every $f\in C(K,\mathbb R)$. The limiting probability can be taken outer regular on Borel sets and inner regular on open sets.

## Facts & Assumptions

[F1] Under countable choice, $C(K,\mathbb R)$ has an enumerated uniformly dense family. [[lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family]].

[F2] Every bounded real sequence has a convergent subsequence. [[thm-bolzano-weierstrass]].

[F3] A positive normalized real-linear functional on $C(K,\mathbb R)$ is represented by a regular Borel probability under countable choice. [[lem-positive-functionals-on-compact-metric-spaces-have-probability-representations]].

[F4] Nonnegative integrals are monotone and homogeneous. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F5] Integrals of integrable functions are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** Assume countable choice. Let $(\mu_n)_{n\ge1}$ be Borel probabilities on a nonempty compact metric space $K$. There are strictly increasing positive integers $n_r$ and a Borel probability $\mu$ on $K$ such that $\int f\,d\mu_{n_r}\to\int f\,d\mu$ for every $f\in C(K,\mathbb R)$. The limiting probability can be taken outer regular on Borel sets and inner regular on open sets.

1.1 Fix the dense family $(f_j)$ of [F1]. Continuous real functions on $K$ are bounded, as proved there; they are Borel measurable by continuity. For every Borel probability $\nu$, [F4] bounds the integral of $|f|$ by $\|f\|_\infty$, so $f$ is integrable. Positivity and [F5], applied to $\|f-g\|_\infty\pm(f-g)$, give $|\int f\,d\nu-\int g\,d\nu|\le\|f-g\|_\infty$. In particular $a_{n,j}=\int f_j\,d\mu_n$ is a bounded real sequence for each $j$. [F1, F4, F5]

1.2 There is a deterministic convergent-subsequence rule for a bounded real sequence $(a_n)$ restricted to an infinite subset $S$ of the positive integers, with a specified bound $M\ge0$. Start with $I_0=[-M,M]$. Bisect the current closed interval; retain its left half if infinitely many indices in $S$ have values there, and otherwise retain the right half, which must have infinitely many such indices. At stage $m\ge1$ choose the least eligible index $k_m\in S$ greater than $k_{m-1}$, with $k_0=0$, whose value lies in $I_m$. The indices exist because an infinite subset of the naturals is unbounded. The intervals are nested and have lengths $2M2^{-m}$, so the selected values are Cauchy. They converge: [F2] provides a convergent subsequence with limit $L$, and the Cauchy estimate followed by the triangle inequality with a sufficiently late member of that subsequence gives $|a_{k_m}-L|<\varepsilon$ for all sufficiently large $m$. This also works for $M=0$. Left-half precedence and least indices make every stage unique, so ordinary recursion suffices; no Dependent Choice is used. [F2]

2.1 Set $S_0=\mathbb N_{>0}$. Recursively apply the rule of step 1.2 to coordinate $a_{n,j}$ on $S_{j-1}$ with $M=\|f_j\|_\infty$, and let $S_j$ be its infinite output index set. Thus $S_j\subseteq S_{j-1}$, and the $j$th coordinate converges along the increasing enumeration of $S_j$. Let $n_r$ be the $r$th smallest member of $S_r$. Since $S_{r+1}\subseteq S_r$, its $(r+1)$th member is at least the $(r+1)$th member of $S_r$, which exceeds $n_r$. Thus $(n_r)$ is strictly increasing. For every fixed $j$, all $n_r$ with $r\ge j$ belong to $S_j$ and increase without bound, so $\int f_j\,d\mu_{n_r}$ converges. All index sets and enumerations are defined uniquely by the fixed rule. [1.1, 1.2]

3.1 For $f\in C(K,\mathbb R)$ and $\varepsilon>0$, choose one $j$ with $\|f-f_j\|_\infty<\varepsilon/3$. For large $r,s$, step 2.1 gives $|\int f_j\,d\mu_{n_r}-\int f_j\,d\mu_{n_s}|<\varepsilon/3$; the two uniform error bounds of step 1.1 show that $(\int f\,d\mu_{n_r})_r$ is Cauchy. It is bounded, and hence converges by the Cauchy-plus-[F2] argument in step 1.2. Define $\Lambda(f)$ to be this unique limit. Passing to limits in [F5] proves real linearity, positivity passes to limits of nonnegative real numbers, and $\Lambda(1)=1$ since every $\mu_{n_r}$ is a probability. Apply [F3] with exactly these hypotheses to obtain the regular Borel probability $\mu$ and the asserted convergence for every $f$. The choices used are those in [F1] and [F3], both explicitly bounded by countable choice; neither the nested extraction nor the definition of the unique limit selects an arbitrary family of witnesses. [1.1, 1.2, 2.1, F1, F2, F3, F5] ∎


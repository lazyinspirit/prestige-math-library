---
id: thm-factorial-foldover-separates-opposite-parity-aliases
kind: theorem
title: "Full and partial foldovers separate aliases by parity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-regular-fractional-factorial-defining-relation-and-resolution
  - thm-regular-fractional-factorial-aliasing-criterion
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 18, §18.7"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
      locator: "Printed pp. 487–488; PDF pp. 506–507: adding the sign-reversed runs and the parity change in the defining generators."
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §§5.3.3.8.1–5.3.3.8.2, Mirror-Image and Alternative Foldover Designs"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3381.htm"
      locator: "Complete focused sections on all-sign mirror reversal and a one-factor alternative foldover with residual aliases."
---

## Statement

Let $\mathcal F$ be a regular fraction with signed defining subgroup $H$. For a specified set of factors $J\subseteq[k]$, define $\tau_Jx$ by $(\tau_Jx)_j=-x_j$ for $j\in J$ and $(\tau_Jx)_j=x_j$ for $j\notin J$. The **partial foldover** on $J$ is the run table formed by stacking the original runs with one transformed copy $\tau_J(\mathcal F)$; the **complete mirror foldover** is the case $J=[k]$. Its residual signed defining subgroup is exactly

$$H_J=\{(\epsilon,A)\in H:|A\cap J|\text{ is even}\}.$$

Thus an originally signed-aliased pair $A,B$ remains signed-aliased on the augmented table exactly when $|(A\triangle B)\cap J|$ is even; if it is odd, the pair is separated. For a complete mirror foldover, a word of order $r=|A\triangle B|$ changes sign by $(-1)^r$. Therefore aliases between effects of opposite order parity separate, while same-parity relations remain. The displayed formula gives the full residual alias set for every partial foldover; a selected-factor follow-up need not remove other aliases.

## Facts & Assumptions

**Given:** $k\ge1$, a regular fraction $\mathcal F$, its signed defining subgroup $H$, a factor subset $J\subseteq[k]$, and the stacked run table containing both $\mathcal F$ and $\tau_J(\mathcal F)$.

[F1] [[def-regular-fractional-factorial-defining-relation-and-resolution]]: a signed word $(\epsilon,A)$ evaluates as $\epsilon x_A$, and $H$ is the defining subgroup of the original fraction.

[F2] [[thm-regular-fractional-factorial-aliasing-criterion]]: $A$ and $B$ are signed aliases with sign $\sigma$ exactly when $(\sigma,A\triangle B)\in H$.

## Proof

**Proof technique:** evaluate signed monomials on the appended runs and apply the alias criterion.

1.1 For a signed word $(\epsilon,A)$ and an original run $x$, multiplication of its factors gives $\epsilon(\tau_Jx)_A=(-1)^{|A\cap J|}\epsilon x_A$. In particular, for $J=[k]$ the multiplier is $(-1)^{|A|}$. [given, F1, algebra]

2.1 Every word in $H$ evaluates to $+1$ on all original rows. By step 1.1 it evaluates to $(-1)^{|A\cap J|}$ on every appended row. Since both blocks are present, it is a constant-$+1$ relation on the stacked table exactly when $|A\cap J|$ is even. Any relation on the stacked table must also hold on its original rows and hence belong to $H$; therefore the residual subgroup is exactly $H_J$. [given, F1, step 1.1, algebra]

3.1 For any two effects, $x_A=\sigma x_B$ on a run table exactly when the signed word $(\sigma,A\triangle B)$ evaluates to $+1$ on every row. By step 2.1, an originally signed-aliased pair retains that relation on the stacked table precisely when $|(A\triangle B)\cap J|$ is even; if it is odd, the relation changes sign between blocks and no constant signed alias remains. A pair not signed-aliased on the original fraction cannot become one because the original rows remain in the augmented table. When $J=[k]$, $|A\triangle B|\equiv |A|+|B|\pmod2$, so exactly opposite-parity pairs separate among the original aliases, and even-word relations remain. [given, F2, step 2.1, algebra] ∎

## Sources

Oehlert §18.7 develops mirror foldover by reversing every sign. NIST/SEMATECH §§5.3.3.8.1–5.3.3.8.2 covers both mirror and selected-factor follow-ups. The subgroup formula and exact residual condition for arbitrary $J$ are proved here.

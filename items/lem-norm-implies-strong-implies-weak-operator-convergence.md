---
id: "lem-norm-implies-strong-implies-weak-operator-convergence"
kind: "lemma"
title: "Norm implies strong implies weak operator convergence"
deps: ["def-strong-and-weak-operator-topologies", "def-operator-norm"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For nets in $\mathcal B(X,Y)$, convergence in operator norm implies strong operator convergence, which implies weak operator convergence. Here $X,Y$ are real or complex normed spaces over the same field. No choice principle is used.

## Facts & Assumptions

[F1] SOT tests $\|(T_i-T)x\|$ and WOT tests $f((T_i-T)x)$ for each fixed vector and bounded functional ([[def-strong-and-weak-operator-topologies]]).

[F2] The operator norm satisfies $\|Ax\|\le\|A\|\|x\|$, including zero domains ([[def-operator-norm]]).

## Proof

**Given:** a net $T_i$ and $T\in\mathcal B(X,Y)$.

1.1 If $\|T_i-T\|\to0$, then for each fixed $x$, $\|(T_i-T)x\|\le\|T_i-T\|\|x\|\to0$. Explicitly for $\varepsilon>0$ it suffices that $\|T_i-T\|<\varepsilon/(1+\|x\|)$. This is SOT convergence, also at $x=0$. [given, F1, F2]

2.1 If $T_i\to T$ in SOT, then for every fixed $x\in X$ and $f\in Y^*$, $|f((T_i-T)x)|\le\|f\|\|(T_i-T)x\|\to0$. The bound $\|(T_i-T)x\|<\varepsilon/(1+\|f\|)$ suffices, including $f=0$. This is WOT convergence; combined with step 1.1 it proves the hierarchy. $\square$ [step 1.1, F1, F2, algebra]

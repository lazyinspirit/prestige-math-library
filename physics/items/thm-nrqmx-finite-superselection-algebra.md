---
id: thm-nrqmx-finite-superselection-algebra
kind: theorem
domain: mathematics
title: Sector restriction as observable algebra
status: draft
origin: pipeline
dependency_level: 0
deps: [lem-nrqm-composites-nuclear-bounded-cyclicity, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §3.6, trace-class operators and trace cyclicity
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
    - title: Anthony W. Knapp, Advanced Real Analysis, Digital Second Edition, Chapter II, §5, pp. 49–52
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
    - title: Domenico Giulini, On Galilei Invariance in Quantum Mechanics and the Bargmann Superselection Rule, §1, pp. 7–8
      url: https://arxiv.org/pdf/quant-ph/9508002
---

## Statement

Assume Countable Choice. Let $\mathcal H=\bigoplus_{j=1}^r\mathcal H_j$ be a finite orthogonal direct sum of nonzero complex Hilbert spaces, with $r\ge1$, and let $P_j$ be the orthogonal projection onto $\mathcal H_j$. Write $\mathcal B(\mathcal H)$ for the algebra of bounded linear operators on $\mathcal H$. Let $\mathcal A$ be the block-diagonal subalgebra

$$\mathcal A=\left\{A\in\mathcal B(\mathcal H):A=\sum_{j=1}^rP_jAP_j\right\}.$$

For every trace-class operator $\rho$ on $\mathcal H$, define $\mathcal E(\rho)=\sum_{j=1}^rP_j\rho P_j$. Then, for every $A\in\mathcal A$,

$$\operatorname{tr}(\rho A)=\operatorname{tr}(\mathcal E(\rho)A).$$

Thus $\rho$ and $\mathcal E(\rho)$ define the same trace functional on the specified block-diagonal algebra. This is relative to the declared algebra; it implies no universal superselection law for a larger observable algebra.

## Statement references

[[lem-nrqm-composites-nuclear-bounded-cyclicity]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the finite orthogonal decomposition $\mathcal H=\bigoplus_{j=1}^r\mathcal H_j$; its orthogonal projections $P_j$; a trace-class operator $\rho$; and a bounded operator $A=\sum_jP_jAP_j$.

[A1] Countable Choice (AC$_\omega$) is the choice-function principle for every countable family of nonempty sets. [[def-countable-choice]]

[F1] A trace-class operator has a nuclear representation $T=\sum_jT_{u_j,v_j}$ with $\sum_j\|u_j\|\|v_j\|<\infty$; its trace is the absolutely convergent, basis-independent trace sum. For every bounded $B$, both $BT$ and $TB$ are trace class and $\operatorname{tr}(BT)=\operatorname{tr}(TB)$; the trace is linear on finite sums. [[lem-nrqm-composites-nuclear-bounded-cyclicity]]

## Proof

1.1 Since $I=\sum_iP_i$ and $A=\sum_jP_jAP_j$, expansion gives $\rho A=\sum_{i,j}P_i\rho P_jAP_j$. This is a finite sum, and every summand is trace class by [F1], so taking its trace term by term is legitimate. [given, A1, F1, algebra]

2.1 If $i\ne j$, cyclicity in [F1] gives $\operatorname{tr}(P_i\rho P_jAP_j)=\operatorname{tr}(P_jP_i\rho P_jA)=0$, since orthogonality gives $P_jP_i=0$. The remaining terms are $\operatorname{tr}(P_i\rho P_iAP_i)$. Because $A$ is block diagonal, $P_i\rho P_iA=P_i\rho P_iAP_i$, so their sum is exactly $\operatorname{tr}((\sum_iP_i\rho P_i)A)$. This proves the statement. [A1, F1, step 1.1, algebra] ∎

## Remarks

The paper cited above discusses additional physical assumptions behind a mass superselection argument. This theorem proves only equality of trace functionals for the explicitly chosen block-diagonal algebra.

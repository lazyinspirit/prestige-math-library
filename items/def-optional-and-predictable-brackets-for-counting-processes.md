---
id: def-optional-and-predictable-brackets-for-counting-processes
kind: definition
title: "Optional and predictable brackets for counting-process martingales"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-progressively-measurable-and-predictable-process
  - def-bounded-variation-and-total-variation
  - def-axiom-of-choice
justified_by:
  - lem-continuous-predictable-bracket-uniqueness
  - thm-compensated-counting-process-brackets
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 9: Some Key Results for Counting Process Martingales, PDF pp. 10–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf"
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.4, PDF pp. 4–6"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15

---

## Definition

Work on the finite horizon $[0,T]$ of
[[def-counting-process-intensity-and-compensator-contract]]. For càdlàg
(right-continuous with left limits) finite-variation processes $X,Y$ starting
at zero, with $\Delta X_s:=X_s-X_{s-}$ and $\Delta Y_s:=Y_s-Y_{s-}$, define
their **optional quadratic covariation** by
$$[X,Y]_t:=\sum_{0<s\le t}\Delta X_s\,\Delta Y_s,$$
and write $[X]:=[X,X]$. The series is absolutely convergent because each path
has finite variation. This is the jump-sum convention for optional brackets
used on this page.

For a square-integrable model martingale $M=N-A$ from
[[def-counting-process-intensity-and-compensator-contract]], a **continuous
predictable bracket** $\langle M\rangle$ is a continuous, predictable,
increasing process $B$ with $B_0=0$, $\mathbb E[B_T]<\infty$, and $M^2-B$ a
martingale, when such a process exists. For two square-integrable model
martingales $M=N-A$ and $M'=N'-A'$ from that contract, a **continuous
predictable cross bracket** $\langle M,M'\rangle$ is a continuous, predictable
finite-variation process $C$ with $C_0=0$, $\mathbb E\operatorname{Var}(C)_T
<\infty$, and $[M,M']-C$ a martingale, when such a process exists. The
uniqueness lemma below fixes the meaning of “the” bracket in this continuous
compensator class. No general bracket-existence theorem is asserted.
The Axiom of Choice is inherited through the model martingale's
conditional-expectation interface; this definition makes no further choice.

## Source notes

Tian states the continuous-compensator bracket identities for counting
process martingales and explicitly refers their general proofs elsewhere.
Bass gives the jump-square convention and product formula for semimartingales
with jumps. The local results below prove the particular existence and
identities required by this page.

---
id: def-first-return-time-and-induced-transformation
kind: definition
title: First-return times and induced transformations
deps: ["thm-poincare-recurrence-for-finite-measure-preserving-systems", "def-trace-sigma-algebra", "thm-trace-is-a-sigma-algebra", "def-set-limsup-and-liminf", "thm-sigma-algebra-closure-laws", "thm-well-ordering-principle"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Definition 1.18 pp.28–29; domain correction
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: draft
origin: pipeline
---

## Definition

Let $(X,\mathcal A,\mu,T)$ preserve finite measure and let $E\in\mathcal A$ satisfy $\mu(E)>0$. For $x\in E$ define the **first-return time**

$$r_E(x)=\min\{n\ge1:T^nx\in E\},\qquad\min\varnothing=\infty.$$

A nonempty set of return times has a least element by [[thm-well-ordering-principle]]. Define the **infinitely returning core**

$$E_\infty=E\cap\bigcap_{N\ge1}\bigcup_{n\ge N}T^{-n}E.$$

This is the set-limsup convention of [[def-set-limsup-and-liminf]]. It is measurable by [[thm-sigma-algebra-closure-laws]], and [[thm-poincare-recurrence-for-finite-measure-preserving-systems]] gives $\mu(E\setminus E_\infty)=0$. Define the **induced transformation** and normalized measure by

$$T_E:E_\infty\longrightarrow E_\infty,\qquad T_E(x)=T^{r_E(x)}x,\qquad \mu_E(B)=\frac{\mu(B)}{\mu(E)},\quad B\in\mathcal A|_{E_\infty}.$$

Here the trace is as in [[def-trace-sigma-algebra]]. Since $E_\infty$ is measurable, the trace equals $\{B\in\mathcal A:B\subseteq E_\infty\}$: each intersection with $E_\infty$ is measurable and each such $B$ equals $B\cap E_\infty$. Its closure under relative complement and countable union follows directly from these same operations in $\mathcal A$; no sequence of ambient representatives needs to be chosen. This supplies the measurable-subset instance of [[thm-trace-is-a-sigma-algebra]] locally.

For $x\in E_\infty$, $r_E(x)$ is finite, and the infinitely many visits after $r_E(x)$ are exactly positive visits of $T_E(x)$, so $T_E(x)\in E_\infty$. Restricting countable additivity of $\mu$ and dividing by the positive finite number $\mu(E)$ makes $\mu_E$ a measure; its total mass is $\mu(E_\infty)/\mu(E)=1$. The value $\infty$ is allowed for $r_E$ on $E\setminus E_\infty$, but is never used as an iterate in $T_E$. No choice axiom enters this construction.

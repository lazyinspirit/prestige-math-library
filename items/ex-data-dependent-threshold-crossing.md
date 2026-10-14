---
id: ex-data-dependent-threshold-crossing
kind: example
title: A data-dependent threshold crossing
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-nonnegative-test-supermartingale
  - thm-villes-inequality
  - def-discrete-stopping-time
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
generation:
  role: example
sources:
  references: []
---

## Example

Take two fair coin observations under the null $P_0$, with the likelihood-ratio
process $E_0=1$, $E_1=\ell(X_1)$, $E_2=\ell(X_1)\ell(X_2)$ and $E_t=E_2$
for $t\ge2$, where $\ell(1)=3/2$ and $\ell(0)=1/2$. Set
$\tau=\inf\{t\ge0:E_t\ge2\}$. This is a data-dependent stopping rule. It
crosses only on two heads, so $P_0(\tau<\infty)=1/4$. Since $2=1/\alpha$ for
$\alpha=1/2$, the crossing probability is below Ville's bound $1/2$.

## Facts & Assumptions

**Given:** Two independent fair bits, their prefix filtration, the displayed
likelihood-ratio process, and threshold $2$. Assume AC for the cited
test-supermartingale and optional-sampling conventions.

[F1] [[def-nonnegative-test-supermartingale]]: a test supermartingale is nonnegative, adapted, integrable, supermartingale under the null, and has initial expectation at most one.

[F2] [[thm-villes-inequality]]: for $\alpha\in(0,1)$, the probability that a nonnegative test supermartingale ever reaches $1/\alpha$ is at most $\alpha$.

[F3] [[def-discrete-stopping-time]]: a discrete-time map is a stopping time when each event $\{\tau\le n\}$ belongs to $\mathcal F_n$.

[A1] [[def-axiom-of-choice]]: AC is inherited by the conditional-expectation clauses used in F1 and F2.

## Verification

1.1 The one-step likelihood factor has null conditional mean $(3/2+1/2)/2=1$ after either possible prefix. Thus $E_0=1$, $E_1$ and $E_2$ are nonnegative, adapted, integrable, and satisfy the supermartingale equality; the process is constant after time two. It is a test supermartingale under $P_0$ by F1. [given, F1, A1, algebra]

2.1 For every $n\ge0$, $\{\tau\le n\}=\bigcup_{s=0}^n\{E_s\ge2\}$. This is empty for $n<2$ and equals $\{X_1=X_2=1\}\in\mathcal F_2\subseteq\mathcal F_n$ for $n\ge2$, so $\tau$ is a stopping time by F3. The values $(E_1,E_2)$ on $(X_1,X_2)=(1,1),(1,0),(0,1),(0,0)$ are respectively $(3/2,9/4),(3/2,3/4),(1/2,3/4),(1/2,1/4)$. Thus the crossing event $\{\tau<\infty\}$ is exactly $\{X_1=X_2=1\}$ and has probability $1/4$. Since $2=1/\alpha$ for $\alpha=1/2$, F2 gives the general upper bound $1/2$, and the exact probability is below it. [given, F2, F3, choose, algebra] ∎

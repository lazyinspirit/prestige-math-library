---
id: lem-minimal-walk-trace-concatenation-and-limit-control
kind: lemma
title: Concatenation and limit control for minimal-walk traces
status: published
origin: pipeline
deps:
  - def-c-sequences-and-minimal-walk-traces-on-omega-one
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 2, Facts 1--2, printed pp. 7--8"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

Fix the locally finite $C$-sequence of
[[def-c-sequences-and-minimal-walk-traces-on-omega-one]].

1. If $\alpha<\beta<\gamma<\omega_1$ and
   $L(\beta,\gamma)<L(\alpha,\beta)$, then
   $$\operatorname{Tr}(\alpha,\gamma)=\operatorname{Tr}(\beta,\gamma)\cup\operatorname{Tr}(\alpha,\beta)$$
   and
   $$L(\alpha,\gamma)=L(\beta,\gamma)\cup L(\alpha,\beta).$$
   The unions occur in the displayed walk order: first the segment from
   $\gamma$ to $\beta$, then the segment from $\beta$ to $\alpha$.  The same
   identities hold trivially when $\alpha=\beta$ or $\beta=\gamma$ after the
   corresponding empty trace is removed.
2. If $\delta<\omega_1$ is a nonzero limit ordinal, then
   $$\lim_{\xi\to\delta}\min L(\xi,\delta)=\delta.$$
   Explicitly, for every $\eta<\delta$ there is $\xi_0<\delta$ such that
   $\xi_0<\xi<\delta$ implies $\eta<\min L(\xi,\delta)<\delta$.

The second assertion has the limit ordinal as the upper endpoint.  It does not
assert the generally false fixed-$\beta$ limit
$\min L(\xi,\beta)\to\alpha$ when $\alpha<\beta$.

## Facts & Assumptions

**Given:** The fixed normalized $C$-sequence and the trace conventions in the statement.

[F1] [[def-c-sequences-and-minimal-walk-traces-on-omega-one]] defines the walk by least points of $C_\zeta$ at or above the target, and defines the lower trace by the successive running maxima of the finite sets $C_\zeta\cap\alpha$.

## Proof

**Proof technique:** direct.

1.1 If $\alpha=\beta$ or $\beta=\gamma$, one upper and lower trace is empty by [F1], so both concatenation identities reduce to equality with the other trace.  Hence suppose $\alpha<\beta<\gamma$ and $L(\beta,\gamma)<L(\alpha,\beta)$. [F1, given]

1.2 Let $\delta$ be a nonzero limit and $0<\xi<\delta$.  The first lower-trace value for the walk from $\delta$ to $\xi$ is $\max(C_\delta\cap\xi)$, and all later values are running maxima containing that first intersection.  Hence $\min L(\xi,\delta)=\max(C_\delta\cap\xi)$.  The same equality is harmless at $\xi=0$ under the explicit zero convention, although limits only concern a final tail. [F1, given]

2.1 Every member of $L(\alpha,\beta)$ is below $\alpha$, so the separation hypothesis puts every member of $L(\beta,\gamma)$ below $\alpha$.  If $\zeta$ is a node of $\operatorname{Tr}(\beta,\gamma)$, the running maximum that records $C_\zeta\cap\beta$ occurs in $L(\beta,\gamma)$ or is bounded by a later recorded maximum.  Thus $C_\zeta\cap\beta\subseteq\alpha$, and therefore $C_\zeta\cap\alpha=C_\zeta\cap\beta$.  In particular $C_\zeta$ has no point in $[\alpha,\beta)$, so $\min(C_\zeta\setminus\alpha)=\min(C_\zeta\setminus\beta)$. [F1, step 1.1]

2.2 Given $\eta<\delta$, cofinality of $C_\delta$ gives $c\in C_\delta$ with $\eta<c<\delta$.  Since $\delta$ is a limit, $\xi_0=c+1<\delta$.  Whenever $\xi_0<\xi<\delta$, one has $c\in C_\delta\cap\xi$, and step 1.2 gives $\eta<c\leq\min L(\xi,\delta)<\delta$.  This is exactly the ordinal-limit assertion in clause 2. [F1, step 1.2]

3.1 Step 2.1 says that the walk aimed at $\alpha$ makes exactly the same choices as the walk aimed at $\beta$ until it reaches $\beta$.  From that node onward its recursion is the walk from $\beta$ to $\alpha$.  This proves the asserted upper-trace concatenation, with no repeated $\beta$ because the first trace excludes its terminal point and the second includes its starting point. [F1, step 2.1]

4.1 Along the first segment, step 2.1 identifies every initial intersection and hence every running maximum with the corresponding value in $L(\beta,\gamma)$.  All those values are below every value of $L(\alpha,\beta)$.  Consequently, after the walk reaches $\beta$, taking running maxima for the continued walk produces exactly the values of $L(\alpha,\beta)$; no earlier value suppresses or changes one.  The lower trace is therefore the ordered union $L(\beta,\gamma)\cup L(\alpha,\beta)$. [F1, step 2.1, step 3.1]

5.1 Steps 3.1 and 4.1 prove the two concatenation identities, including the endpoint reductions in step 1.1, and step 2.2 proves the exact limit-target control from step 1.2. [step 1.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎

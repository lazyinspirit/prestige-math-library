---
id: ex-a-finite-minimal-walk-and-its-lower-trace
kind: example
title: A finite minimal walk and its lower trace
status: published
origin: pipeline
deps:
  - def-c-sequences-and-minimal-walk-traces-on-omega-one
  - lem-minimal-walk-trace-concatenation-and-limit-control
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Use the normalized successor values $C_{\eta+1}=\{0,\eta\}$ and put

$$C_\omega=\{2n:n<\omega\}=\{0,2,4,6,\ldots\}.$$

For $\alpha=5$, $\beta=\omega$, and $\gamma=\omega+2$, the three relevant
minimal walks are

$$\omega+2,\ \omega+1,\ \omega,\ 6,\ 5;\qquad \omega+2,\ \omega+1,\ \omega;\qquad \omega,\ 6,\ 5.$$

Their upper traces satisfy

$$\operatorname{Tr}(5,\omega+2)=\{\omega+2,\omega+1,\omega,6\}=\operatorname{Tr}(\omega,\omega+2)\cup\operatorname{Tr}(5,\omega).$$

The lower-trace running-max lists are respectively $(0,0,4,4)$, $(0,0)$,
and $(4,4)$.  Thus

$$L(5,\omega+2)=\{0,4\}=L(\omega,\omega+2)\cup L(5,\omega),$$

and the strict separation hypothesis is visibly
$L(\omega,\omega+2)=\{0\}<\{4\}=L(5,\omega)$.

## Facts & Assumptions

**Given:** Extend the displayed fragment to the normalized locally finite $C$-sequence fixed on the companion page.

[F1] [[def-c-sequences-and-minimal-walk-traces-on-omega-one]] chooses at each stage the least member of $C_\zeta$ at or above the target, excludes the final target from the upper trace, and records lower traces by running maxima of $C_\zeta\cap\alpha$.

[F2] [[lem-minimal-walk-trace-concatenation-and-limit-control]] gives trace concatenation when $L(\beta,\gamma)<L(\alpha,\beta)$.

## Verification

**Proof technique:** direct calculation.

1.1 The displayed $C_\omega$ is cofinal in $\omega$, contains $0$, and has finite intersection with every $m<\omega$.  Together with $C_{\eta+1}=\{0,\eta\}$, it meets every local requirement of [F1] used in this calculation. [F1, Given]

2.1 Aiming at $5$, the least points at or above the target are $\omega+1$ in $C_{\omega+2}$, $\omega$ in $C_{\omega+1}$, $6$ in $C_\omega$, and $5$ in $C_6$.  Aiming at $\omega$, the first two choices are $\omega+1$ and $\omega$; aiming at $5$ from $\omega$, the choices are $6$ and $5$.  This proves the three displayed walks and, after deleting their terminal points, the three asserted upper traces. [F1, step 1.1]

3.1 For target $5$, the successive intersections along the long walk are $C_{\omega+2}\cap5=\{0\}$, $C_{\omega+1}\cap5=\{0\}$, $C_\omega\cap5=\{0,2,4\}$, and $C_6\cap5=\{0\}$.  Their cumulative maxima are $(0,0,4,4)$.  For target $\omega$, the two intersections are both $\{0\}$, giving $(0,0)$; for target $5$ from $\omega$, the intersections are $\{0,2,4\}$ and $\{0\}$, giving $(4,4)$. [F1, step 1.1, step 2.1]

4.1 Passing from the running-max lists to their trace sets gives $L(\omega,\omega+2)=\{0\}<\{4\}=L(5,\omega)$ and $L(5,\omega+2)=\{0,4\}$.  Hence [F2] applies and its upper- and lower-trace unions agree exactly with the direct computations.  No maximum of an empty set occurs, all three targets are strict lower endpoints, and multiplicities were retained until the final set calculation. [F1, F2, step 2.1, step 3.1] ∎

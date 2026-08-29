---
id: cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations
kind: counterexample
title: "The relative floating-point model excludes overflow, underflow, and invalid operations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-relative-floating-point-model-and-unit-roundoff]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
    - title: "David Bindel, CS 6210: Floating Point and Error Analysis"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html"
---



## Statement refuted

The standard relative model $\operatorname{fl}(x\circ y)=(x\circ y)(1+\delta)$
with $|\delta|\le u$ describes every arithmetic operation of a floating-point
system, including overflow, underflow, and invalid operations.

## Facts & Assumptions

**Given:** The IEEE-754 binary64 system, whose unit roundoff is $u=2^{-53}$,
largest normal magnitude $N_{\max}=(2-2^{-52})2^{1023}$, smallest normal
magnitude $N_{\min}=2^{-1022}$, and smallest positive subnormal $2^{-1074}$.

[L1] The standard relative model applies only to operations whose exact result
is a real number in the normal range, and its exclusions are overflow,
underflow, and invalid operations
([[def-standard-relative-floating-point-model-and-unit-roundoff]]).

## Counterexample

**Proof technique:** direct.

1.1 Overflow. The representable numbers $x=(3/2)\cdot 2^{1023}$ and $y=2$ have product $x\cdot y=3\cdot 2^{1023}$, which exceeds $N_{\max}=(2-2^{-52})2^{1023}$ because $3>2-2^{-52}$; the computed result is $+\infty$, which is not a real number of the form $(x\cdot y)(1+\delta)$ for any real $\delta$. [given, algebra]

1.2 Underflow. For the smallest positive subnormal $x=2^{-1074}$, the exact quotient $x/2=2^{-1075}$ lies strictly between $0$ and the smallest positive subnormal, and round-to-nearest returns $0$; but $(x/2)(1+\delta)=2^{-1075}(1+\delta)$ is positive for every real $\delta$ with $|\delta|\le u$, since $1+\delta\ge 1-u>0$, so the computed value $0$ is not of the required form. [given, algebra]

1.3 Invalid operation. The exact value of $0/0$ is not a real number, so no real $\delta$ can satisfy $\operatorname{fl}(0/0)=(0/0)(1+\delta)$; the computed result is $\operatorname{NaN}$, which is not a real number at all. [given, algebra]

2.1 Each of the three exhibits produces a value outside the model of [L1]: infinity, the lost subnormal result, and not-a-number respectively. [L1, step 1.1, step 1.2, step 1.3]

3.1 Step 2.1 refutes the false statement: the exclusions in [L1] are not decorative, and any statement proved under the relative model must carry the hypothesis that its operations stay in the normal range. [step 2.1, L1] ∎

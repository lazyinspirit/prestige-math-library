---
id: cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval
kind: counterexample
title: "Point evaluation at $0$ is not well defined on $L^p[0,1]$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: "Compare the zero function with the indicator of the singleton $\\{0\\}$: they define the same $L^p$ class but have different values at $0$."
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Section 7.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Point evaluation at $0$ defines a map on $L^p([0,1])$.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $[0,1]$ carry Lebesgue measure, and let $1 \le p \le \infty$.

[L1] Elements of $L^p$ are equivalence classes modulo almost-everywhere equality, so a pointwise operation on representatives descends only if it is independent of the chosen representative ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] The singleton $\{0\}$ has Lebesgue measure $0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Counterexample

**Proof technique:** Compare the zero function with the indicator of the singleton $\{0\}$: they define the same $L^p$ class but have different values at $0$.

1.1 Let $u:=0$ and $v:=\mathbf 1_{\{0\}}$ on $[0,1]$. [given, construct] Then $$u(0)=0,\qquad v(0)=1,$$ so point evaluation at $0$ distinguishes these two representatives. [given, construct]

2.1 By [L2], the set $\{0\}$ is null, so $u=v$ almost everywhere. [L1, L2, step 1.1] Therefore [L1] says that $u$ and $v$ define the same element of $L^p([0,1])$. [L1, L2, step 1.1]

3.1 A well-defined map on $L^p([0,1])$ cannot assign two different values to [L1, step 1.1, step 2.1] the same class. Steps 1.1 and 2.1 show that evaluation at $0$ would have to do exactly that, so it does not descend to $L^p([0,1])$. [L1, step 1.1, step 2.1] ∎

---
id: lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral
kind: lemma
title: "The thermodynamics measure integral agrees with the shared nonnegative integral"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-measure-integral, def-measure, def-nonnegative-lebesgue-integral, def-nonnegative-simple-measurable-function, def-simple-function-and-canonical-representation, def-integral-of-a-nonnegative-simple-function, lem-well-definedness-of-the-simple-integral]
dependency_roles:
  def-tdmath-measure-integral: mathematical-premise
  def-measure: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-nonnegative-simple-measurable-function: mathematical-premise
  def-simple-function-and-canonical-representation: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  lem-well-definedness-of-the-simple-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
    - title: "John K. Hunter, Measure Theory Notes, §§4.1–4.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "MIT OpenCourseWare 18.102 Spring 2021, complete lecture notes (Lecture 12: Lebesgue integration and dominated convergence)"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space and let $f:X\to[0,+\infty]$ be
$\Sigma$-measurable. The nonnegative integral defined by
[[def-tdmath-measure-integral]] equals the shared nonnegative Lebesgue integral
defined by [[def-nonnegative-lebesgue-integral]], with the same value in
$[0,+\infty]$.

## Facts & Assumptions

**Given:** A measure space $(X,\Sigma,\mu)$ and a nonnegative measurable
function $f$.

[F1] [[def-tdmath-measure-integral]] defines a nonnegative simple integral by
finite sums $\sum_j c_j\mu(A_j)$, with $0\cdot(+\infty)=0$, and defines
$\int f\,d\mu$ as the supremum over measurable simple minorants
$0\le s\le f$. Its current batch-11 carrier is a draft definition; no proof
is required for this definition-like supplier.

[F2] [[def-nonnegative-lebesgue-integral]] defines the shared nonnegative
integral as the supremum over the same class of nonnegative simple minorants.

[F3] [[def-nonnegative-simple-measurable-function]] characterizes nonnegative
simple functions as finite-range measurable maps, and
[[def-simple-function-and-canonical-representation]] gives each such function
its finite partition into level sets.

[F4] [[def-measure]] supplies the countably additive measure $\mu$ in the
measure space. [[def-integral-of-a-nonnegative-simple-function]] uses the finite sum
$\sum_j c_j\mu(A_j)$ with the convention $0\cdot(+\infty)=0$;
[[lem-well-definedness-of-the-simple-integral]] proves that this value does not
depend on the chosen simple representation.

## Proof

1.1 A nonnegative simple function in the thermodynamics definition is a finite
sum of indicators of disjoint measurable sets, hence is measurable and has
finite range; conversely, the level sets in [F3] represent every nonnegative
finite-range measurable function in that form. Thus the two definitions use
the same class of simple minorants. [F1, F2, F3, construct]

2.1 For any simple minorant $s$, use its canonical level-set representation
from [F3]. Both [F1] and [F4] assign the same finite sum
$\sum_j c_j\mu(A_j)$ to $s$, including zero coefficients on sets of infinite
measure; [F4] ensures the shared value is representation-independent. Hence
the two definitions assign the same value to every minorant. [F1, F3, F4,
step 1.1]

3.1 The two nonnegative integrals are suprema over the same minorants with the
same value for each minorant by steps 1.1 and 2.1. Their suprema therefore agree,
including when the common value is $+\infty$. [F1, F2, step 1.1, step 2.1]
∎

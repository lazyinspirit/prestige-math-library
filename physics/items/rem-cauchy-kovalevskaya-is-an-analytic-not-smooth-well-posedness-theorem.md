---
id: rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem
kind: remark
title: The analytic existence and uniqueness boundary
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Example 21 and §5 characteristic discussion, printed pp. 11–14; the analytic-germ theorem above fixes the local scope.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: published
origin: pipeline
deps: ["thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem"]
---

## Remarks

[[thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem]] gives existence and uniqueness of analytic germs under its specified total-order and normal-order conditions. It does not assert an analytic solution for smooth nonanalytic initial data, or continuous dependence in any smooth topology. In particular an equation solved for a time derivative is not automatically in the required normal form: a right-hand derivative of higher total order violates that formulation. The proof above uses no recorded-not-proved CK result.

## Source notes

Gantumur, §4 Example 21 and §5 characteristic discussion, printed pp. 11–14; the analytic-germ theorem above fixes the local scope.

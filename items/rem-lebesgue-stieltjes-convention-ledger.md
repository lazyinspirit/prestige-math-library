---
id: rem-lebesgue-stieltjes-convention-ledger
kind: remark
title: "This page uses the nondecreasing, right-continuous, $(a,b]$-interval convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-one-sided-limits]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Section 2.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

This page fixes the convention

$$\mu_F((a,b]) = F(b) - F(a)$$

for a **nondecreasing**, right-continuous function
$F : \mathbb{R} \to \mathbb{R}$. That pairing of monotonicity, interval shape,
and continuity direction is the one used in Folland and Hunter, and it is the
one for which the shrinking intervals $(a,a+1/n]$ force right continuity
through continuity from above.

Another standard convention in the literature uses the left-continuous data
$[a,b)$ instead. The two choices are both legitimate, but they are not the same
construction for a fixed function. This page adopts the former convention once,
records the latter here only as a warning, and thereafter uses the left-limit
notation $F(a^-)$ of [[def-one-sided-limits]] only in derived interval formulas.
Throughout this page, the order hypothesis on $F$ is the weak one
$F(x) \le F(y)$ for $x \le y$.

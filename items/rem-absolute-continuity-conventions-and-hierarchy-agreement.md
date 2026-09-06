---
id: rem-absolute-continuity-conventions-and-hierarchy-agreement
kind: remark
title: "Absolute-continuity conventions and hierarchy agreement"
status: draft
origin: pipeline
deps: [def-absolutely-continuous-function, thm-c1-lipschitz-ac-bv-hierarchy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §§3.2--3.3"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

The convention used below is exactly the finite disjoint-interval condition in
[[def-absolutely-continuous-function]], including degenerate intervals.  The
published hierarchy [[thm-c1-lipschitz-ac-bv-hierarchy]] gives
$$C^1\subseteq\mathrm{Lip}\subseteq AC\subseteq C\cap BV$$
on a compact interval.  None of these inclusions is silently reversed here.

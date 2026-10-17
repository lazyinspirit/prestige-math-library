---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/def-positive-and-negative-parts-of-a-function.json
id: def-positive-and-negative-parts-of-a-function
kind: definition
title: "The positive and negative parts of a function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals]
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2E"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $f : X \to \overline{\mathbb{R}}$ with $\overline{\mathbb{R}}$ as in
[[def-extended-reals]]. Its **positive part** and **negative part** are

$$f^+ := \max\{f,0\},\qquad f^- := \max\{-f,0\}.$$

All maxima, negations, and sums here are pointwise, using the total order,
reflection and partial addition of [[def-extended-reals]]. Both parts take
values in $[0,+\infty]$. For an extended-real-valued function, define the
**magnitude function** by $|f|(x):=\max\{f(x),-f(x)\}$. This is function notation;
it does not introduce an absolute-value operation into the scalar arithmetic of
that item. Likewise the notation $f^+-f^-$ below abbreviates the pointwise sum
$f^++(-f^-)$, whose definedness is verified here.

At each point at least one of $f^+$ and $f^-$ is zero. If $f(x)\ge0$, then
$f^+(x)=f(x)$ and $f^-(x)=0$; if $f(x)\le0$, then $f^+(x)=0$ and
$f^-(x)=-f(x)$. These cases include both infinite values and show that the
following sums are defined and satisfy

$$f=f^++(-f^-),\qquad |f|=f^++f^-.$$

Thus the familiar notation $f=f^+-f^-$ retains exactly these pointwise values;
no subtraction of two infinite nonzero values occurs.

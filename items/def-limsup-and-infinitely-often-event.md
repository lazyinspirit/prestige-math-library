---
id: def-limsup-and-infinitely-often-event
kind: definition
title: "Limsup and the infinitely often event"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-set-limsup-and-liminf]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $(A_n)_{n\in\mathbb N}$ be a sequence of events in a probability space. The
event that **infinitely many** of the $A_n$ occur is

$$\{A_n\ \mathrm{i.o.}\}:=\limsup_{n\to\infty}A_n=\bigcap_{m\in\mathbb N}\bigcup_{n\ge m}A_n.$$

Thus $\omega\in\{A_n\ \mathrm{i.o.}\}$ exactly when $\omega$ belongs to $A_n$ for
infinitely many indices $n$.

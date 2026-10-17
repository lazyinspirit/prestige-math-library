---
id: def-borel-measure-finite-on-compact-sets-on-r
kind: definition
title: "A Borel measure on $\\mathbb{R}$ that is finite on compact sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-borel-sigma-algebra, def-measure]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

A **Borel measure on $\mathbb{R}$ finite on compact sets** is a measure

$$\mu : \mathcal{B}(\mathbb{R}) \to [0,+\infty]$$

on the Borel sigma-algebra [[def-borel-sigma-algebra]] such that

$$\mu(K) < +\infty \qquad \text{for every compact } K \subseteq \mathbb{R}.$$

This is the one-dimensional finiteness hypothesis used throughout the
Lebesgue-Stieltjes correspondence on this page.

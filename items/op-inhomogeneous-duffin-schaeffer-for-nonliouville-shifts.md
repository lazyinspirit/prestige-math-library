---
dependency_level: 1
id: op-inhomogeneous-duffin-schaeffer-for-nonliouville-shifts
kind: open-problem
title: "Inhomogeneous Duffin–Schaeffer behavior for non-Liouville shifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - def-inhomogeneous-reduced-rational-approximation-limsup-set
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
verification:
  precheck: n/a
sources:
  references:
    - title: "Manuel Hauke-Treuer, James Maynard, and Andrew Pollington, Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture, Theorem 1 and Remark 1"
      url: "https://arxiv.org/pdf/2609.30921v1"
    - title: "Yubin He and Lingmin Liao, Counterexamples to the inhomogeneous Duffin–Schaeffer conjecture for a residual set of shifts, Theorems 1–2 and §3"
      url: "https://arxiv.org/html/2609.30870v2"
---

## Open problem

Assume the Axiom of Countable Choice. Let $\gamma\in\mathbb R$ be irrational and non-Liouville, meaning that for some integer $m\ge1$ there are only finitely many pairs $(r,s)\in\mathbb Z\times\mathbb N$ with $|\gamma-r/s|<s^{-m}$. For every function $\psi:\mathbb N\to[0,\infty)$, let $W'(\psi,\gamma)$ be the set of $\alpha\in[0,1)$ for which

$$
\left|\alpha-\frac{a+\gamma}{q}\right|\le\frac{\psi(q)}q
$$

holds for infinitely many pairs $(a,q)\in\mathbb Z\times\mathbb N$ with $\gcd(a,q)=1$. If $\sum_{q=1}^{\infty}\varphi(q)\psi(q)/q=\infty$, must $W'(\psi,\gamma)$ have full Lebesgue measure in $[0,1)$?

## Open problem references

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Lebesgue measure under countable choice]]

[[def-inhomogeneous-reduced-rational-approximation-limsup-set|Inhomogeneous reduced rational-approximation limsup set and its coprimality convention]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient function]]

[Hauke-Treuer, Maynard, and Pollington, *Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture*, Theorem 1 and Remark 1](https://arxiv.org/pdf/2609.30921v1)

## Status

Open as of 2026-10-25. Hauke-Treuer, Maynard, and Pollington construct counterexamples for nonzero shifts satisfying $|\gamma-r/s|<\exp(-s^{12})$ for infinitely many pairs $(r,s)$; this includes every nonzero rational shift and certain Liouville shifts. They state that the behavior for arbitrary shifts, especially non-Liouville irrational shifts, remains unresolved. Their result does not settle the question above. He and Liao also obtain counterexamples for every nonzero rational shift and show that the set of counterexample shifts is residual in $\mathbb R$ (arXiv:2609.30870v2, Theorems 1–2 and §3). This residual-set conclusion does not establish the universal full-measure claim for non-Liouville irrational shifts, nor does it identify a non-Liouville counterexample; the question above remains unresolved.

## Status references

[Hauke-Treuer, Maynard, and Pollington, *Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture*, Theorem 1 and Remark 1](https://arxiv.org/pdf/2609.30921v1)

[He and Liao, *Counterexamples to the inhomogeneous Duffin–Schaeffer conjecture for a residual set of shifts*, Theorems 1–2 and §3 (arXiv:2609.30870v2)](https://arxiv.org/html/2609.30870v2)

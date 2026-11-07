---
id: def-inverse-gowers-correlation-obstruction
kind: definition
title: "Inverse Gowers correlation obstruction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
aliases: []
deps:
  - def-gowers-uniformity-norm-on-intervals
  - def-bounded-complexity-nilsequence-on-an-interval
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Conjecture 1.2, printed p. 1235: the correlation conclusion in the linear-nilsequence formulation."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Theorem 1.6.14, printed p. 128: correlation with a bounded-complexity nilsequence."
---

## Definition

Let \(s\ge1\), \(N\ge1\), let \((\mathcal M,C)\) be bounded-complexity data for \(s\)-step nilsequences, and let \(c>0\). For a function \(f:[N]\to\mathbb C\) with \(|f(n)|\le1\) for every \(n\in[N]\), a bounded-complexity nilsequence correlation witness at level \(c\) is a linear nilsequence \(\psi(n)=F(g^n x)\) from \((\mathcal M,C)\) such that

$$
\left|\frac1N\sum_{n=1}^N f(n)\psi(n)\right|\ge c.
$$

Such a witness is called a nilsequence obstruction to \(U^{s+1}[N]\)-uniformity for \(f\).

## Definition references

[[def-gowers-uniformity-norm-on-intervals]]

[[def-bounded-complexity-nilsequence-on-an-interval]]

[Green, Tao, and Ziegler, Conjecture 1.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Tao, Higher Order Fourier Analysis, Theorem 1.6.14](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

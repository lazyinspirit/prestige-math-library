---
id: thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
kind: theorem
title: "Grothendieck–Lefschetz trace formula for constructible ℓ-adic sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-compactly-supported-etale-cohomology
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-frobenius-trace-on-a-constructible-stalk
  - thm-finiteness-of-compactly-supported-etale-cohomology
  - thm-proper-base-change-for-compact-support
  - thm-lefschetz-trace-formula-for-constructible-l-adic-sheaves-on-smooth-proper-curves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé XV §3"
      url: "https://grothendiecksga.com/read/sga5/en/XV-3.html"
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §§18–19"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $\mathbb F_q$ be a finite field of characteristic $p$, let $\ell\ne p$ be a prime, let $X$ be a separated scheme of finite type over $\mathbb F_q$, and let $\mathcal F$ be a constructible $\mathbb Q_\ell$-sheaf on $X$. Then
$$\sum_{x\in X(\mathbb F_q)}\operatorname{Tr}\!\left(\operatorname{Frob}^{\mathrm{geom}}_x\mid\mathcal F_{\bar x}\right)=\sum_i(-1)^i\operatorname{Tr}\!\left(\operatorname{Frob}^{\mathrm{geom}}_q\mid H_c^i(X_{\overline{\mathbb F}_q},\mathcal F)\right).$$
where geometric Frobenius is inverse arithmetic Frobenius on both the stalk and compactly supported cohomology. The right-hand side is a finite alternating sum of traces on finite-dimensional $\mathbb Q_\ell$-vector spaces.

## Statement references

[SGA 5, Exposé XV §3, Theorem, pp. 171–183](https://grothendiecksga.com/read/sga5/en/XV-3.html)

[Milne, *Lectures on Étale Cohomology*, Chapter I, §§18–19](https://jmilne.org/math/CourseNotes/LEC.pdf)

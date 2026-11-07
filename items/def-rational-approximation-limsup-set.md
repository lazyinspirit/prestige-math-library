---
dependency_level: 0
id: def-rational-approximation-limsup-set
kind: definition
title: "Rational approximation limsup set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine Approximation: Aspects of Recent Work, §2.2"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, §2.1"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Definition

Let $\mathbb N=\{1,2,3,\ldots\}$. For a function $\psi:\mathbb N\to[0,\infty)$ and $q\in\mathbb N$, define

$$
R_q(\psi):=[0,1]\cap\bigcup_{a=0}^{q}\left[\frac aq-\frac{\psi(q)}q,\frac aq+\frac{\psi(q)}q\right].
$$

The **rational-approximation limsup set** is

$$W(\psi):=\limsup_{q\to\infty}R_q(\psi)=\bigcap_{Q=1}^{\infty}\bigcup_{q\ge Q}R_q(\psi).$$

Thus $\alpha\in W(\psi)$ exactly when there are infinitely many distinct positive denominators $q$ and integers $a$ with $0\le a\le q$ such that $|\alpha-a/q|\le\psi(q)/q$.

## Definition references

[[def-reduced-rational-approximation-limsup-set|Reduced rational-approximation limsup set]]

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §2.2](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

[Harman, *Metric Number Theory*, Chapter 2, §2.1](https://djvu.online/file/DZdHsCBaK3OrN)

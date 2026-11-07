---
dependency_level: 1
id: def-reduced-rational-approximation-limsup-set
kind: definition
title: "Reduced rational approximation limsup set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-rational-approximation-limsup-set
  - def-coprime
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
verification:
  precheck: n/a
sources:
  references:
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, §1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
    - title: "Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine Approximation: Aspects of Recent Work, §2.2"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
---

## Definition

Let $\mathbb N=\{1,2,3,\ldots\}$ and $\psi:\mathbb N\to[0,\infty)$. For each $q\in\mathbb N$, define

$$
A_q(\psi):=[0,1]\cap\bigcup_{\substack{1\le a\le q\\\gcd(a,q)=1}}\left[\frac aq-\frac{\psi(q)}q,\frac aq+\frac{\psi(q)}q\right].
$$

The **reduced rational-approximation limsup set** is

$$A(\psi):=\limsup_{q\to\infty}A_q(\psi)=\bigcap_{Q=1}^{\infty}\bigcup_{q\ge Q}A_q(\psi).$$

Thus $\alpha\in A(\psi)$ exactly when there are infinitely many distinct positive denominators $q$ and numerators $a$ with $1\le a\le q$, $\gcd(a,q)=1$, and $|\alpha-a/q|\le\psi(q)/q$. The Euler totient $\varphi(q)$ counts the reduced residue classes modulo $q$.

## Definition references

[[def-rational-approximation-limsup-set|Unrestricted rational-approximation limsup set]]

[[def-coprime|Coprimality of integers]]

[[def-unit-group-modulo-n-and-euler-totient|Unit group modulo $q$ and Euler's totient]]

[[thm-unit-criterion-modulo-n|Coprime representatives are exactly the units modulo $q$]]

[[thm-standard-representatives-modulo-n|Standard representatives modulo $q$]]

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §2.2](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

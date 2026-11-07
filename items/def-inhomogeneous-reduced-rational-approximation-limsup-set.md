---
dependency_level: 0
id: def-inhomogeneous-reduced-rational-approximation-limsup-set
kind: definition
title: "Inhomogeneous reduced rational approximation limsup set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-coprime
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
verification:
  precheck: n/a
sources:
  references:
    - title: "Manuel Hauke-Treuer, James Maynard, and Andrew Pollington, Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture, §1"
      url: "https://arxiv.org/pdf/2609.30921v1"
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, §1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
---

## Definition

Let $\mathbb N=\{1,2,3,\ldots\}$, let $\gamma\in\mathbb R$ be a fixed shift, and let $\psi:\mathbb N\to[0,\infty)$. For each $q\in\mathbb N$, define

$$
A_q(\psi,\gamma):=\left\{\alpha\in[0,1):\left|\alpha-\frac{a+\gamma}{q}\right|\le\frac{\psi(q)}q\text{ for some }a\in\mathbb Z\text{ with }\gcd(a,q)=1\right\}.
$$

The **inhomogeneous reduced rational-approximation limsup set** is

$$W'(\psi,\gamma):=\limsup_{q\to\infty}A_q(\psi,\gamma)=\bigcap_{Q=1}^{\infty}\bigcup_{q\ge Q}A_q(\psi,\gamma).$$

Thus membership means that the displayed inequality holds for infinitely many distinct positive denominators with the ordinary numerator-denominator coprimality condition $\gcd(a,q)=1$. Write $\varphi(q)=| (\mathbb Z/q)^\times |$ for Euler's totient, equivalently the number of reduced residue classes modulo $q$.

## Definition references

[[def-coprime|Coprimality of integers]]

[[def-unit-group-modulo-n-and-euler-totient|Unit group modulo $q$ and Euler's totient]]

[[thm-unit-criterion-modulo-n|Coprime representatives are exactly the units modulo $q$]]

[[thm-standard-representatives-modulo-n|Standard representatives modulo $q$]]

[Hauke-Treuer, Maynard, and Pollington, *Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture*, §1](https://arxiv.org/pdf/2609.30921v1)

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

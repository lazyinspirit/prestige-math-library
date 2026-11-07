---
id: def-distorted-inhomogeneous-linear-form-limsup-set
kind: definition
title: "Inhomogeneous linear-form limsup set with a distortion matrix"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-inhomogeneous-khintchine-groshev-approximation-set
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, §2.2"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "§2.3, PDF page11: arbitrarily large denominator norm"
---

## Definition

Let $n,m\ge1$, fix $y\in[0,1)^m$ and a matrix $\Phi\in\mathbb R^{m\times m}$, and let $\Psi:\mathbb Z^m\times(\mathbb Z^n\setminus\{0\})\to[0,\infty)$. Define

$$M_{n,m}^{y,\Phi}(\Psi):=\left\{X\in[0,1]^{n\times m}:\|qX+p\Phi-y\|_\infty<\Psi(p,q)\text{ for pairs }(q,p)\text{ with arbitrarily large }\|q\|_\infty\right\},$$

where $q$ is a row vector, $p$ is a row vector, $qX$ and $p\Phi$ use ordinary matrix multiplication, and the norm is the maximum absolute coordinate. The denominator norm must be unbounded; infinitely many offsets producing the same image at a fixed denominator do not suffice. This distinction is essential for singular distortion matrices. When $\Phi=I_m$ and $\Psi(p,q)=\psi(\|q\|_\infty)$, this is the fixed-target inhomogeneous approximation set.

## Definition references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §2.2](https://arxiv.org/pdf/1703.10015v2)

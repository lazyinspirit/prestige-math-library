---
id: def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
kind: definition
title: Positive semidefinite kernels and reproducing kernel Hilbert spaces
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-inner-product-space
  - def-hilbert-space
  - def-completion-of-a-normed-space
  - def-countable-choice
justified_by:
  - thm-canonical-rkhs-construction-and-reproducing-property
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "Countable Choice is assumed for the canonical norm-completion construction. The positive-semidefinite-kernel and RKHS predicates concern given data."
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 5.8, printed pp. 167–173.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Sections 6.1–6.2, printed pp. 129–135.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

A **real kernel** on a set $X$ is a function $k:X\times X\to\mathbb R$. It is **positive semidefinite** if it is symmetric and, for every integer $n\ge1$, every $x_1,\ldots,x_n\in X$, and every $c_1,\ldots,c_n\in\mathbb R$,

$$\sum_{i=1}^n\sum_{j=1}^n c_i c_j k(x_i,x_j)\ge0.$$

A **real reproducing kernel Hilbert space with kernel $k$** is a real Hilbert space $\mathcal H$ of functions $X\to\mathbb R$ such that, for each $x\in X$, the section $k_x:=k(\cdot,x)$ lies in $\mathcal H$ and $\langle f,k_x\rangle_{\mathcal H}=f(x)$ for every $f\in\mathcal H$. Consequently $\langle k_z,k_x\rangle_{\mathcal H}=k(z,x)=k(x,z)$.

For the canonical construction, let $E_0$ be the real vector space of finitely supported functions $a:X\to\mathbb R$, write $\delta_x$ for the function supported at $x$ with value $1$, and put

$$B(a,b):=\sum_{x\in\operatorname{supp}(a)}\sum_{z\in\operatorname{supp}(b)}a(x)b(z)k(x,z).$$

Let $N:=\{a\in E_0:B(a,a)=0\}$. Under the Axiom of Countable Choice, the canonical space is formed by giving $E_0/N$ its induced inner product and taking a norm completion; the image of $\delta_x$ is denoted $k_x$. For an element $h$ of that completion, its associated function is $x\mapsto\langle h,k_x\rangle$. The quotient, completed inner product, and function identification are justified by the local construction theorem.

## Definition references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §5.8](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §§6.1–6.2](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-inner-product-space]]

[[def-hilbert-space]]

[[def-completion-of-a-normed-space]]

[[def-countable-choice]]

[[thm-canonical-rkhs-construction-and-reproducing-property]]

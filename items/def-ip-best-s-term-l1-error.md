---
id: def-ip-best-s-term-l1-error
kind: definition
title: "Best s-term ℓ1 approximation error"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - def-max-min
  - lem-finite-set-has-max
  - cor-cardinality-of-the-power-set
  - thm-subset-of-a-finite-set
  - def-countable
  - def-finite-cardinality
  - def-equinumerous
  - lem-nat-nonzero-is-successor
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §2.1 Definition 2.2 and §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $n,s\in\mathbb N$ with $n\ge1$ and $1\le s\le n$, and let $x\in\mathbb R^n$. Use one-based labels $[n]=\{1,\ldots,n\}$, identifying label $j$ with library coordinate $j-1$. For $T\subseteq[n]$, let $x_{T^c}$ retain the coordinates outside $T$ and vanish on $T$, where $T^c=[n]\setminus T$. Define the best $s$-term $\ell^1$ approximation error by
$$\sigma_s(x)_1:=\min\{\|x_{T^c}\|_1:T\subseteq[n],\ |T|\le s\}.$$
The indexing family is finite and nonempty, so the displayed minimum exists and is attained.

## Definition references

[[def-ip-nullspace-property|One-based coordinate labels and coordinate restrictions]]

[[def-p-norms-on-rn|The finite-dimensional one-norm]]

[[def-max-min|Minimum of a real set]]

[[lem-finite-set-has-max|Attainment of minima on finite nonempty real sets]]

[[cor-cardinality-of-the-power-set|Finiteness of the power set of a finite set]]

[[thm-subset-of-a-finite-set|Finiteness of a subfamily of a finite set]]

[[def-countable|Finite-set convention]]

[[def-finite-cardinality|Cardinalities of finite sets, including the empty set]]

[[def-equinumerous|Bijection convention for equinumerous sets]]

[[lem-nat-nonzero-is-successor|Every nonzero natural number is a successor]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §2.1 Definition 2.2, printed p. 42, and §4.3](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Remarks

The attainment clause follows from an explicit finite enumeration. The canonical relabeling $j\mapsto j-1$ identifies $[n]$ bijectively with the library index set $n=\{0,\ldots,n-1\}$, so $[n]$ is finite and its power set is finite; the family $\mathcal T_s:=\{T\subseteq[n]:|T|\le s\}$ is a subset of that power set and is therefore finite. It is nonempty because $\varnothing\in\mathcal T_s$. Since $\mathcal T_s$ is finite, there are a natural number $k$ and a bijection $e:k\to\mathcal T_s$. Nonemptiness implies $k\ne0$, so write $k=\ell+1$. For each $0\le j\le\ell$, put $a_j:=\|x_{e(j)^c}\|_1$. Surjectivity of $e$ gives
$$\{\|x_{T^c}\|_1:T\in\mathcal T_s\}=\{a_0,\ldots,a_\ell\}.$$
This is a finite nonempty set of real numbers. Applying the finite-list minimum result to $a_0,\ldots,a_\ell$ gives a minimum that is one of these values, hence belongs to the displayed value set. Therefore the displayed minimum in the Definition is attained.

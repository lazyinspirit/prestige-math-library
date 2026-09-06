---
id: lem-riesz-product-for-a-hadamard-lacunary-set
kind: lemma
title: "Riesz-product witnesses for a Hadamard-lacunary set"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series, lem-hadamard-gaps-bound-additive-representations]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Definition 3.6.5 and proof of Theorem 3.6.6"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $\Lambda$ be a finite subset of a positive $q$-Hadamard-lacunary sequence.
It is a union of finitely many sets $\Lambda_1,\ldots,\Lambda_r$, with each
successive ratio in $\Lambda_\nu$ at least $3$. For arbitrary unimodular
$\varepsilon_\lambda$ and each class, the Riesz product

$$P_\nu(x)=\prod_{\lambda\in\Lambda_\nu}\left(1+\operatorname{Re}(\varepsilon_\lambda e_\lambda(x))\right)$$

is nonnegative, has integral $1$, and satisfies
$\widehat P_\nu(-\lambda)=\overline{\varepsilon_\lambda}/2$ for
$\lambda\in\Lambda_\nu$.

The lacunary and additive conventions are those of
[[def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]] and
[[lem-hadamard-gaps-bound-additive-representations]].

## Facts & Assumptions

**Given:** A finite $\Lambda$, a ratio $q>1$, and unimodular numbers $\varepsilon_\lambda$ as in the Statement.

## Proof

**Proof technique:** split into ratio-three classes and expand the product.

1.1 Choose $r$ with $q^r\ge3$ and split the original indices by residues [given, algebra] modulo $r$. Each resulting frequency class has successive ratio at least $q^r\ge3$. Each factor of $P_\nu$ equals $|1+\varepsilon_\lambda e_\lambda|^2/2$ and is nonnegative. [given, algebra]

2.1 On one such class, a nonempty signed sum with coefficients in [step 1.1, algebra] $\{-1,0,1\}$ cannot be zero: its largest frequency exceeds the sum of all smaller possible frequencies, by the ratio-three geometric bound. Therefore the product expansion has constant term only when every factor contributes its $1$. Its integral is consequently $1$. [step 1.1, algebra]

3.1 The same largest-frequency argument says that frequency $-\lambda$ in [step 1.1, step 2.1, algebra] the expansion occurs only by taking $\overline{\varepsilon_\lambda}e_{-\lambda}/2$ from the $\lambda$ factor and $1$ elsewhere. Hence $\widehat P_\nu(-\lambda)=\overline{\varepsilon_\lambda}/2$, as claimed. [step 1.1, step 2.1, algebra] ∎

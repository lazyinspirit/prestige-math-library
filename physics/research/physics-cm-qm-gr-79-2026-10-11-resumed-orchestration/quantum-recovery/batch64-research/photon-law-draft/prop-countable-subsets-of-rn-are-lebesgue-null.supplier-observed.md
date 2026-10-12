---
id: prop-countable-subsets-of-rn-are-lebesgue-null
kind: proposition
title: "Every at most countable subset of $\\mathbb{R}^n$ is Lebesgue null; in particular $\\lambda_1(\\mathbb{Q})=0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-is-a-complete-measure, def-countable, thm-rationals-countable, lem-rat-embeds-dense, lem-countable-iff-surjection-from-n, thm-finite-and-countable-subadditivity-of-measures, def-measure-null-set-and-almost-everywhere, def-sigma-algebra, def-countable-choice, def-multidimensional-rectangle-and-volume]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Every at most countable subset $E \subseteq \mathbb{R}^n$
([[def-countable]]) is Lebesgue measurable with

$$\lambda_n(E) \;=\; 0,$$

so $E$ is a $\lambda_n$-null set ([[def-measure-null-set-and-almost-everywhere]]).
In particular every singleton is null, and on the real line the set
$\mathbb{Q}_{\mathbb{R}}$ of rational reals ([[lem-rat-embeds-dense]]) satisfies
$\lambda_1(\mathbb{Q}_{\mathbb{R}}) = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and an at most countable set $E \subseteq \mathbb{R}^n$.

[L1] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$, and this gives measure $0$ to all of them whenever $a_i = b_i$ for some $i<n$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L2] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] $A$ is **at most countable** if it is finite or countably infinite ([[def-countable]]); a nonempty $A$ is at most countable if and only if there is a surjection $s : \mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]]).

[F2] For a measure $\mu$ and measurable $(E_k)_{k\in\mathbb N}$, $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k)$ ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F3] $\mathbb{Q} \approx \mathbb{N}$: the rationals are countably infinite ([[thm-rationals-countable]]), and $\mathbb{Q}_{\mathbb{R}}$ denotes the image of $\mathbb{Q}$ in $\mathbb{R}$ under the canonical order-preserving field embedding ([[lem-rat-embeds-dense]]).

[F4] A measurable set $N\in\mathcal A$ is **$\mu$-null** if $\mu(N)=0$ ([[def-measure-null-set-and-almost-everywhere]]); a sigma-algebra is closed under countable unions ([[def-sigma-algebra]]).

[F5] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 A singleton $\{x\} \subseteq \mathbb{R}^n$ is the closed rectangle $[x,x]$, whose sides all satisfy $a_i = b_i = x_i$, so it is Lebesgue measurable with $\lambda_n(\{x\}) = 0$. [L1, F5]

1.2 The empty set is Lebesgue measurable with measure $0$. [L2, F4]

2.1 Let $E$ be nonempty and at most countable and fix a surjection $s : \mathbb{N} \to E$; then $E = \bigcup_{k\in\mathbb{N}}\{s(k)\}$ is a countable union of measurable sets, hence measurable, and countable subadditivity gives $\lambda_n(E) \le \sum_{k=0}^{\infty}\lambda_n(\{s(k)\}) = 0$. [step 1.1, L2, F1, F2, F4]

3.1 Steps 1.2 and 2.1 cover both cases, and $\mathbb{Q}_{\mathbb{R}}$ is a countably infinite subset of $\mathbb{R}$, so $\lambda_1(\mathbb{Q}_{\mathbb{R}}) = 0$. [step 1.2, step 2.1, F3] ∎

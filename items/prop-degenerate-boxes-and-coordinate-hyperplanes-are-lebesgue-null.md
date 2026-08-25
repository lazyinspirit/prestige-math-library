---
id: prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
kind: proposition
title: "A box with a degenerate side is Lebesgue null, and so is every coordinate hyperplane in $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-of-a-box-of-every-kind, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-is-a-complete-measure, thm-finite-and-countable-subadditivity-of-measures, def-half-open-box, def-multidimensional-rectangle-and-volume, def-measure-null-set-and-almost-everywhere, def-sigma-algebra, thm-of-archimedean, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then:

1. **Degenerate boxes.** If $a_i \le b_i$ are reals with $a_{i_0} = b_{i_0}$ for
   some $i_0 < n$, then every set $R$ between the open box
   $\{x : a_i < x_i < b_i\ (i<n)\}$ and the closed rectangle $[a,b]$ is Lebesgue
   measurable with $\lambda_n(R) = 0$.
2. **Coordinate hyperplanes.** For $i_0 < n$ and a real $c$, the set
   $$H_{i_0,c} \;:=\; \{\, x \in \mathbb{R}^n : x_{i_0} = c \,\}$$
   is Lebesgue measurable with $\lambda_n(H_{i_0,c}) = 0$.

At $n = 1$ the hyperplane $H_{0,c}$ is the singleton $\{c\}$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, an index $i_0<n$ and a real $c$.

[L1] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$, and it gives measure $0$ to all of them whenever $a_i = b_i$ for some $i<n$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L2] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L3] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[F1] For a measure $\mu$ and measurable $(E_k)_{k\in\mathbb N}$, $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k)$ ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F2] $[a,b]:=\{x\in\mathbb R^m:a_j\le x_j\le b_j\ (j<m)\}$ ([[def-multidimensional-rectangle-and-volume]]).

[F3] A measurable set $N\in\mathcal A$ is **$\mu$-null** if $\mu(N)=0$ ([[def-measure-null-set-and-almost-everywhere]]); a sigma-algebra is closed under countable unions ([[def-sigma-algebra]]).

[F4] Every complete ordered field $F$ is Archimedean: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]]).

[F5] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$ ([[def-half-open-box]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is the degenerate case of the box theorem, whose value $\prod_{i<n}(b_i-a_i)$ carries the factor $b_{i_0}-a_{i_0}=0$. [L1, F2, F5]

1.2 For a natural number $k$ put $P_k := \{\, x \in \mathbb{R}^n : x_{i_0}=c \text{ and } |x_i| \le k \text{ for every } i \ne i_0 \,\}$. This is always the closed rectangle with sides $[-k,k]$ for $i \ne i_0$ and the degenerate side $[c,c]$ in coordinate $i_0$. [F2]

2.1 Each $P_k$ is Lebesgue measurable of measure $0$ by claim 1. [step 1.1, step 1.2, L2, F3]

2.2 The union $\bigcup_{k\in\mathbb{N}}P_k$ is $H_{i_0,c}$, since a point of the hyperplane has finitely many coordinates and the Archimedean property supplies a natural $k$ above each $|x_i|$ and above $|c|$. [step 1.2, F4]

3.1 Therefore $H_{i_0,c}$ is a countable union of measurable sets, hence measurable, and countable subadditivity gives $\lambda_n(H_{i_0,c}) \le \sum_{k=0}^{\infty}\lambda_n(P_k) = 0$; at $n=1$ the set $H_{0,c}$ is $\{c\}$. [step 2.1, step 2.2, L2, L3, F1, F3] ∎

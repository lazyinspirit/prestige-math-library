---
id: thm-p-adic-digit-expansion
kind: theorem
title: "Every p-adic number has a unique digit expansion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field-of-p-adic-numbers, thm-p-adic-completion-agrees-with-the-fraction-field-of-zp, thm-p-adic-completion-is-a-field, cor-zp-is-the-valuation-ring-of-qp]
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 7.26"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 8"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
pipeline_run: null
---

## Statement

Every nonzero $x \in \mathbb Q_p$ can be written uniquely in the form

$$x = \sum_{n=N}^{\infty} a_n p^n,$$

where $N \in \mathbb Z$, $a_N \ne 0$, and each digit $a_n$ lies in
$\{0,\dots,p-1\}$. The zero element has the all-zero expansion.

## Facts & Assumptions

**Given:** A prime $p$ and an element $x \in \mathbb Q_p$.

[L1] $\mathbb Q_p$ is the fraction field of $\mathbb Z_p$ ([[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]]).

[L2] $\mathbb Z_p$ is the closed unit ball of $\mathbb Q_p$ ([[cor-zp-is-the-valuation-ring-of-qp]]).

[L3] $\mathbb Q$ embeds densely in $\mathbb Q_p$ because $\mathbb Q_p$ is the $p$-adic metric completion ([[def-field-of-p-adic-numbers]]).

[L4] $\mathbb Q_p$ is a complete valued field ([[thm-p-adic-completion-is-a-field]]).

## Proof

**Proof technique:** constructive.

1.1 If $x = 0$, take every digit $a_n = 0$. Now assume $x \ne 0$. By the density statement in [L3], choose $q \in \mathbb Q$ with $|x-q|_p < |x|_p$. The ultrametric inequality from [L4] then gives $|q|_p = |x|_p$. Write $q = p^N a/b$ with $N \in \mathbb Z$ and integers $a,b$ not divisible by $p$; then $|q|_p = p^{-N}$, so $|x|_p = p^{-N}$. Put $u := p^{-N}x$. Then $|u|_p = 1$, so $u \in \mathbb Z_p$ by [L2], and also $|u^{-1}|_p = 1$, so $u^{-1} \in \mathbb Z_p$. Hence $u \in \mathbb Z_p^\times$. [L2, L3, L4, given, choose, algebra]

2.1 In the compatible-residue description of $\mathbb Z_p$ from [L1], for each $m \ge 1$ choose the unique digits $a_0,\dots,a_{m-1} \in \{0,\dots,p-1\}$ such that $$u \equiv a_0 + a_1 p + \cdots + a_{m-1} p^{m-1} \pmod{p^m}.$$ Because $u$ is a unit, its residue modulo $p$ is nonzero, so $a_0 \ne 0$. Writing $s_m := \sum_{j=0}^{m-1} a_j p^j$, one has $u-s_m \in p^m \mathbb Z_p$, hence $|u-s_m|_p \le p^{-m}$. So $(s_m)$ is Cauchy and converges to $u$ by [L4]. Multiplying by $p^N$ gives $$x = \sum_{m=0}^{\infty} a_m p^{m+N};$$ renaming the digits by index shift yields the claimed expansion with leading digit $a_N = a_0 \ne 0$. [L1, L2, L4, step 1.1, choose, construct]

3.1 For uniqueness, suppose $$\sum_{n=N}^{\infty} a_n p^n = \sum_{n=M}^{\infty} b_n p^n$$ with digits in $\{0,\dots,p-1\}$ and nonzero leading digits. Equality of absolute values forces $N=M$. If $a_n \ne b_n$ first occurs at $n=k$, then the difference of the two series equals $$(a_k-b_k)p^k + p^{k+1}y$$ for some $y \in \mathbb Z_p$. Since $a_k-b_k$ is not divisible by $p$, that difference has $p$-adic absolute value $p^{-k}$ and cannot be $0$. Therefore all digits agree. [step 2.1, L2, algebra]

4.1 Thus every $p$-adic number has a unique base-$p$ digit expansion. [step 2.1, step 3.1, construct, discharge-construct] ∎

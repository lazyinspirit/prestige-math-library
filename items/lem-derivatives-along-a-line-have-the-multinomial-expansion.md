---
id: lem-derivatives-along-a-line-have-the-multinomial-expansion
kind: lemma
title: "Repeated derivatives along a line expand by the multinomial formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ck-and-multi-index-notation-in-several-variables, thm-continuous-partial-derivatives-imply-total-differentiability, thm-chain-rule-for-total-derivatives, thm-symmetry-of-higher-mixed-partials, def-canonical-natural, lem-nat-finite-sum-laws-and-the-canonical-embedding]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MAT237 notes: Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Statement

Let $k\in\mathbb N$, let $U\subseteq\mathbb R^m$ be open, $f\in C^k(U)$, and let $I\subseteq\mathbb R$ be an open interval such that $a+th\in U$ for every $t\in I$. Write $\iota:\mathbb N\to\mathbb R$ for the canonical-natural map of [[def-canonical-natural]]. For $g(t)=f(a+th)$ and every $0\le r\le k$,

$$g^{(r)}(t)=\sum_{|\alpha|=r}\frac{\iota(r!)}{\iota(\alpha!)}D^\alpha f(a+th)h^\alpha\qquad(t\in I).$$

## Facts & Assumptions

**Given:** The stated open-domain, open-interval, $C^k$, and direction hypotheses.

[L1] A function with continuous first partial derivatives near a point is totally differentiable there, and the total chain rule then applies to the affine line map $t\mapsto a+th$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]]).

[L2] Ordered mixed derivatives through order $k$ commute under permutation ([[thm-symmetry-of-higher-mixed-partials]]).

[L3] The multi-index conventions $|\alpha|$, $\alpha!$, $h^\alpha$, and the canonical derivative $D^\alpha f$ are those of [[def-ck-and-multi-index-notation-in-several-variables]].

[L4] The canonical-natural map carries finite natural sums and products to the corresponding real sums and products ([[def-canonical-natural]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]).

## Proof

**Proof technique:** induction.

1.1 For $r=0$ the displayed sum consists of the zero multi-index and equals $f(a+th)=g(t)$. [base, L3]

1.2 Fix $r<k$ and assume the formula at order $r$. [ih]

1.3 Each $D^\alpha f$ with $|\alpha|=r$ has continuous first partials, so [L1] differentiates its composition with the affine line. By [L3], we use the canonical multi-index notation for the resulting derivatives. When $r=0$ the resulting first derivatives are already canonical; when $r\ge1$, [L2] permits the resulting derivatives to be written as $D^{\alpha+e_i}f$. By [L4], collecting the coefficient of a fixed $\beta$ with $|\beta|=r+1$ gives

$$\sum_{i:\,\beta_i>0}\frac{\iota(r!)}{\iota((\beta-e_i)!)}=\frac{\iota(r!)}{\iota(\beta!)}\sum_{i<m}\iota(\beta_i)=\frac{\iota((r+1)!)}{\iota(\beta!)}.$$

Thus the formula at order $r+1$ follows. [step 1.2, L1, L2, L3, L4, algebra]

2.1 Steps 1.1--2.1 prove the formula successively for every $r\le k$. [step 1.1, step 1.2, step 1.3, discharge-induction] ∎

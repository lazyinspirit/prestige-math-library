---
id: cor-ell-p-duality-by-counting-measure
kind: corollary
title: "Counting measure specializes the representation theorem to $\\ell^p$ and $\\ell^q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-sigma-finite-duality-for-bounded-functionals-on-l-p, rem-ell-p-is-l-p-of-counting-measure]
proof_strategy: "View $\\ell^p$ as $L^p$ of counting measure on $\\mathbb N$, note that counting measure on $\\mathbb N$ is sigma-finite by finite initial segments, and translate the representing $L^q$ function back to a sequence."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Section 15.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear
functional $\Lambda:\ell^p\to\mathbb R$ is of the form
$$\Lambda(a)=\sum_{n=0}^\infty a_nb_n$$
for a unique sequence $b \in \ell^q$. Moreover,
$$\|\Lambda\|=\|b\|_{\ell^q}.$$

## Facts & Assumptions

**Given:** An exponent $1 \le p < \infty$, its conjugate exponent $q$, and a bounded linear functional $\Lambda$ on $\ell^p$.

[L1] On a sigma-finite measure space, every bounded linear functional on $L^p$ is integration against a unique $L^q$ function ([[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]]).

[L2] On counting measure over $\mathbb N$, the spaces $L^p$ and $\ell^p$ coincide, the $L^q$ density becomes a sequence, and the integral becomes the series pairing ([[rem-ell-p-is-l-p-of-counting-measure]]).

## Proof

**Proof technique:** View $\ell^p$ as $L^p$ of counting measure on $\mathbb N$, note that counting measure on $\mathbb N$ is sigma-finite by finite initial segments, and translate the representing $L^q$ function back to a sequence.

1.1 Counting measure on $\mathbb N$ is sigma-finite because [L2, given] $$\mathbb N=\bigcup_{n=0}^\infty \{0,1,\dots,n\},$$ and each initial segment has finite counting measure. By [L2], we may therefore regard $\Lambda$ as a bounded linear functional on $L^p(\#)$. [L2, given]

2.1 Applying [L1], choose $g \in L^q(\#)$ such that [L1, L2, step 1.1, choose] $$\Lambda(a)=\int ag\,d\#\qquad(a \in \ell^p).$$ By [L2], writing $b_n:=g(n)$ turns $g$ into a sequence $b=(b_n) \in \ell^q$, and the integral identity becomes $$\Lambda(a)=\sum_{n=0}^\infty a_nb_n.$$ The same translation in [L2] turns uniqueness and norm equality from [L1] into uniqueness of $b$ and $\|\Lambda\|=\|b\|_{\ell^q}$. [L1, L2, step 1.1, choose] ∎

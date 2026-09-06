---
id: thm-wiener-lemma-for-absolutely-convergent-fourier-series
kind: theorem
title: "Wiener's lemma for absolutely convergent Fourier series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-wiener-algebra-is-a-banach-algebra, lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes, Theorem 4.3"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Michael Müger, Introduction to Functional Analysis, Theorem 19.9"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
---

## Statement

Assume the Axiom of Choice. If $f\in A(\mathbb T)$ and its continuous representative has $f(x)\ne0$ for every $x\in\mathbb T$, then $1/f\in A(\mathbb T)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a nowhere-zero $f\in A(\mathbb T)$.

[L1] $A(\mathbb T)$ is a unital commutative Banach algebra ([[thm-wiener-algebra-is-a-banach-algebra]]).

[L2] Every $\ell^1(\mathbb Z)$ coefficient sequence has a continuous uniform synthesis with exactly those Fourier coefficients ([[lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Let $\chi$ be a character of $A(\mathbb T)$ and put $z=\chi(e_1)$. Since $e_ne_{-n}=1$ and $\|e_{\pm n}\|_A=1$, boundedness applied for every $n\ge1$ gives $|z|^n\le\|\chi\|$ and $|z|^{-n}\le\|\chi\|$, hence $|z|=1$. By [L2], every $f\in A(\mathbb T)$ is the $A$-norm limit of its finite Fourier sums, so continuity gives $$\chi(f)=\sum_{k\in\mathbb Z}\widehat f(k)z^k.$$ Thus the characters of $A(\mathbb T)$ are exactly evaluations at points of $\mathbb T$. [L1, L2, algebra]

2.1 The standard maximal-ideal/Gelfand--Mazur criterion for a unital commutative complex Banach algebra says that an element is invertible exactly when no character vanishes on it: under the Axiom of Choice a nonunit lies in a maximal ideal, whose quotient character vanishes there; conversely a vanishing character rules out a multiplicative inverse. Applying this criterion and step 1.1, $f$ is a unit exactly when it has no zero on $\mathbb T$. [L1, step 1.1, given, algebra]

3.1 The hypothesis makes $f$ a unit, so its algebra inverse is the pointwise reciprocal $1/f$. [step 2.1, algebra] ∎

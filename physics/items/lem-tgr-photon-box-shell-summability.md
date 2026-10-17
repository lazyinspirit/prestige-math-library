---
id: lem-tgr-photon-box-shell-summability
kind: lemma
title: Exponential mode sums for the periodic photon box
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20, photon-gas section"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
---

## Statement

Let $L,\beta,\hbar,c>0$ be real parameters, set $a=2\pi\hbar c/L$, and for
$n\in\mathbb Z^3\setminus\{0\}$ define
$$\epsilon_n=a|n|,\qquad q_n=e^{-\beta\epsilon_n},$$
where $|\cdot|$ is the Euclidean norm. For $j\ge1$, the integer max-norm shell
$$\{n\in\mathbb Z^3:|n|_\infty=j\}$$
has $24j^2+2$ points. Consequently
$$\sup_{n\ne0}q_n=e^{-\beta a}<1,\qquad \sum_{n\ne0}q_n<\infty,\qquad \sum_{n\ne0}\epsilon_n^p q_n<\infty$$
for every integer $p\ge0$. In particular, the positive mode-energy sum
$$\sum_{n\ne0}\frac{\epsilon_n}{e^{\beta\epsilon_n}-1}$$
is finite. Repeating each mode twice for two polarization labels preserves all
these conclusions.

## Facts & Assumptions

**Given:** $L,\beta,\hbar,c>0$, the periodic wavevector labels $n\in\mathbb Z^3\setminus\{0\}$, and the mode energies and weights in the Statement.

[A1] All sums are ordinary nonnegative series over the stated countable lattice; no physical interpretation of the positive parameters is required.

## Proof

1.1 The number of integer vectors with $|n|_\infty=j$ is $(2j+1)^3-(2j-1)^3=24j^2+2$. On this shell $j\le |n|\le\sqrt3j$, so $q_n\le e^{-\beta a j}$ and $\epsilon_n^p q_n\le (a\sqrt3)^p j^p e^{-\beta a j}$. The shell contributions are bounded by $C_p j^{p+2}e^{-\beta a j}$ for a finite constant $C_p$; the ratio of consecutive terms tends to $e^{-\beta a}<1$, so their series converges. [given, A1, algebra]

2.1 Since $|n|\ge1$ on the nonzero lattice and equality occurs, $\sup q_n=e^{-\beta a}<1$; the $p=0$ case of step 1.1 gives $\sum q_n<\infty$, and each $p\ge0$ gives the asserted energy-weighted sum. [given, step 1.1, algebra]

3.1 For every $n\ne0$, $\epsilon_n/(e^{\beta\epsilon_n}-1)=\epsilon_n q_n/(1-q_n)\le (1-e^{-\beta a})^{-1}\epsilon_nq_n$. Summing and applying step 1.1 with $p=1$ proves finiteness; a second polarization multiplies each nonnegative sum by two. [step 1.1, step 2.1, algebra] ∎

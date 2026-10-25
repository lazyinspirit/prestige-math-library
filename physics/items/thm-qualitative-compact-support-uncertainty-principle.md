---
id: thm-qualitative-compact-support-uncertainty-principle
kind: theorem
title: A nonzero L1 function and its transform cannot both have compact support
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - cor-uniqueness-of-the-l-one-fourier-transform
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - lem-compact-support-gives-an-entire-fourier-laplace-transform
  - lem-separately-holomorphic-vanishing-on-a-real-box-is-zero
  - thm-heine-borel-rn
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, Proposition 24.1(b), p. 141"
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, observation immediately after Lemma 5.1, printed p. 11 (one-variable case)."
---

## Statement

Assume countable choice, used through the $L^1$ uniqueness theorem. Let
$f\in L^1(\mathbb R^n;\mathbb C)$ and let $K_1,K_2\subseteq\mathbb R^n$ be
compact sets such that $f=0$ almost everywhere on $\mathbb R^n\setminus K_1$
and $f^{\wedge}=0$ on $\mathbb R^n\setminus K_2$, where $f^{\wedge}$ is the
continuous $L^1$ transform ([[def-fourier-transform-on-l-one-of-rn]]). Then
$f=0$ almost everywhere. In particular, if $f$ is nonzero and $L^1$ with
compact support, its transform cannot have compact support.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), a function $f\in L^1(\mathbb R^n;\mathbb C)$, compact sets $K_1,K_2\subseteq\mathbb R^n$ with $f=0$ almost everywhere on $\mathbb R^n\setminus K_1$ and $\widehat f=0$ on $\mathbb R^n\setminus K_2$.

[F1] Countable choice is assumed; it is the hypothesis carried by the $L^1$ uniqueness theorem below ([[def-countable-choice]]).

[F2] Compact support gives an entire continuation: $F(z):=\int_{\mathbb R^n}f(x)e^{-2\pi i\,x\cdot z}dx$ converges absolutely at every $z\in\mathbb C^n$, has entire coordinate slices, and satisfies $F(x)=\widehat f(x)$ for every real $x$ ([[lem-compact-support-gives-an-entire-fourier-laplace-transform]]).

[F3] A separately holomorphic map on $\mathbb C^n$ that vanishes on a nondegenerate real box $I_1\times\cdots\times I_n$ is identically zero ([[lem-separately-holomorphic-vanishing-on-a-real-box-is-zero]]).

[F4] If $g,h\in L^1(\mathbb R^n;\mathbb C)$ have equal $L^1$ transforms, then $g=h$ almost everywhere ([[cor-uniqueness-of-the-l-one-fourier-transform]]).

[F5] A subset of $\mathbb R^n$ is compact if and only if it is closed and bounded; in particular compact subsets are closed ([[thm-heine-borel-rn]]). Consequently a nonempty open set $U\subseteq\mathbb R^n$ contains a nondegenerate box: if $\xi\in U$ and the ball of radius $\varepsilon>0$ around $\xi$ lies in $U$, then $\prod_{j=1}^n[\xi_j-\varepsilon/(2\sqrt n),\xi_j+\varepsilon/(2\sqrt n)]\subseteq U$, since every point of this box is at Euclidean distance at most $\varepsilon/2$ from $\xi$.

## Proof

**Proof technique:** direct.

1.1 The entire continuation of $f$. By [F2] there is a function $F:\mathbb C^n\to\mathbb C$ with entire coordinate slices and $F(x)=\widehat f(x)$ for every real $x$; hence $F$ is separately holomorphic and vanishes wherever $\widehat f$ does. [F2, given]

1.2 A box outside the compact frequency support. Since $K_2$ is bounded by [F5] and $n\ge1$, choose $R>0$ such that $K_2\subseteq\{|x|\le R\}$ and take $\xi=(R+1,0,\ldots,0)\notin K_2$. Since $K_2$ is closed, its complement is a nonempty open set; [F5] supplies a nondegenerate real box there. The argument also applies when $K_2$ is empty. [F5, given, choose]

2.1 Vanishing of the continuation. On the box from step 1.2, $\widehat f=0$ by hypothesis and $F=\widehat f$ by step 1.1. Thus the separately holomorphic function $F$ vanishes on a nondegenerate real box. By [F3], $F\equiv0$ on $\mathbb C^n$, so $\widehat f\equiv0$ on $\mathbb R^n$. [F3, given, step 1.1, step 1.2]

3.1 Return to the original function. The $L^1$ functions $f$ and $0$ now have equal transforms, so [F1, F4] gives $f=0$ almost everywhere. Consequently a nonzero compactly supported $L^1$ function cannot also have compactly supported transform. [F1, F4, step 2.1] ∎

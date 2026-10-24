---
id: lem-strict-column-dominance-implies-nonnegative-inverse
kind: lemma
title: "Strict column dominance gives an entrywise nonnegative inverse"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; all sums and matrices are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz, Ein gekoppeltes Finite-Elemente/Discontinuous-Galerkin-Verfahren zur Simulation von Strömungs-Transport-Problemen, §6.1.2"
      url: "https://www.uni-kassel.de/upress/online/frei/978-3-86219-368-4.volltext.frei.pdf"
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, Lemma 2.7"
      url: "https://arxiv.org/pdf/1702.04589"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $M=(m_{ij})\in\mathbb R^{m\times m}$ for a finite $m\ge1$. Suppose $m_{jj}>0$, $m_{ij}\le0$ for $i\ne j$, and

$$m_{jj}>\sum_{i\ne j}|m_{ij}|\qquad(j=1,\ldots,m).$$

Then $M$ is invertible and every entry of $M^{-1}$ is nonnegative. If $b\in\mathbb R^m$ has nonnegative coordinates, then $M^{-1}b\ge0$; if every coordinate of $b$ is positive, then every coordinate of $M^{-1}b$ is positive.

## Facts & Assumptions

**Given:** A finite real matrix satisfying the displayed positive-diagonal, nonpositive-off-diagonal, and strict column-dominance hypotheses.

[F1] The hypotheses give $c_{ij}:=-m_{ij}/m_{jj}\ge0$ for $i\ne j$ and $c_{jj}=0$.

## Proof


1.1 Let $D=\operatorname{diag}(m_{11},\ldots,m_{mm})$ and $C=I-MD^{-1}$. Then $D$ is invertible, $C\ge0$, and for each column $j$, $r_j:=\sum_i C_{ij}=\sum_{i\ne j}|m_{ij}|/m_{jj}<1$. Since there are finitely many columns, $r:=\max_j r_j<1$. [given, F1, algebra, construct]

2.1 For every $k\ge0$, $C^k\ge0$ and $\sum_i(C^k)_{ij}\le r^k$ for every column $j$: it holds at $k=0$, and multiplying by $C$ gives $\sum_i(C^{k+1})_{ij}=\sum_\ell(\sum_iC_{i\ell})(C^k)_{\ell j}\le r\sum_\ell(C^k)_{\ell j}$. Thus each entry series in $S:=\sum_{k=0}^\infty C^k$ converges and is nonnegative. [step 1.1, algebra, induction]

3.1 The finite geometric identity $(I-C)\sum_{k=0}^N C^k=\sum_{k=0}^N C^k(I-C)=I-C^{N+1}$ holds by cancellation of adjacent powers. Step 2.1 gives $C^{N+1}\to0$ entrywise, so $(I-C)S=S(I-C)=I$. Since $M=(I-C)D$, $M^{-1}=D^{-1}S\ge0$, proving invertibility and inverse nonnegativity. [step 1.1, step 2.1, algebra]

4.1 If $b\ge0$, then $M^{-1}b\ge0$ by step 3.1. If $b>0$, then $S\ge I$ entrywise, so $D^{-1}Sb\ge D^{-1}b>0$ coordinatewise. This proves both vector conclusions. [step 3.1, algebra] ∎

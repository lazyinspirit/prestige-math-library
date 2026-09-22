---
id: thm-toeplitz-hausdorff
kind: theorem
title: Toeplitz hausdorff
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-two-dimensional-numerical-range-is-convex, thm-orthogonal-decomposition-by-a-closed-subspace, def-countable-choice, def-numerical-range-and-numerical-radius, def-hilbert-orthogonal-projection]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Joel H. Shapiro, Notes on the Numerical Range, Theorem 6.1, PDF pp.15–17"
      url: "https://www.joelshapiro.org/Pubvit/Downloads/NumRangeNotes/numrange_notes.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume Countable Choice. The numerical range $W(T)$ of every bounded operator $T$ on a nonzero complex Hilbert space is convex.

## Facts & Assumptions

[A1] $W(T)=\{\langle Tx,x\rangle:\|x\|=1\}$ ([[def-numerical-range-and-numerical-radius]]).

[A2] For a complex subspace $V\subseteq H$ of dimension at most two the numerical range of the compression $P_VT|_V$ is convex ([[lem-two-dimensional-numerical-range-is-convex]]).

[A3] For the closed subspace $V$ the orthogonal decomposition $H=V\oplus V^\perp$ and the projection $P_V$ with $P_Vv=v$ for $v\in V$ are available; a finite-dimensional subspace is closed ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[A4] Countable Choice is the hypothesis of the Hilbert-space and compression suppliers ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded operator $T\in\mathcal B(H)$ and two points $a=\langle Tx,x\rangle$, $b=\langle Ty,y\rangle$ of $W(T)$ with $\|x\|=\|y\|=1$.

1.1 For a closed subspace $V$ and a unit vector $v\in V$ one has $\langle P_VT|_Vv,v\rangle=\langle Tv,v\rangle$, because $P_Vv=v$; hence the numerical range of the compression is contained in $W(T)$. [A1, A3]

2.1 The complex span $V:=\mathbb C x+\mathbb C y$ is a closed subspace of dimension at most two containing $x$ and $y$, so both $a$ and $b$ lie in the numerical range of the compression $P_VT|_V$. [step 1.1, A3]

3.1 Since the numerical range of that compression is convex, it contains the whole segment joining $a$ and $b$; by step 1.1 that segment lies in $W(T)$. [step 1.1, step 2.1, A2]

4.1 Every pair of points of $W(T)$ is joined by a segment inside $W(T)$, so $W(T)$ is convex. [step 3.1, A4] ∎

## Sharpness remark

Convexity does not force closedness, and the witness is worth recording even though no item of this pair proves it in detail: for the multiplication operator $M_t$, $(M_tf)(t)=tf(t)$, on the complex Hilbert space $L^2(0,1)$ one has $W(M_t)=(0,1)$. The two inclusions are the pointwise bounds $0<\int_0^1t|f(t)|^2\,dt<\int_0^1|f(t)|^2\,dt=1$ for a unit vector $f$, together with the explicit unit vectors proportional to the indicators of intervals $[c-\varepsilon,c+\varepsilon]\subseteq(0,1)$, for which the value tends to $c$; the exact value $c$ is attained by a continuous tent function concentrated at $c$. In particular the numerical range of a bounded operator need not be closed, so the convexity conclusion above is not a closedness statement.

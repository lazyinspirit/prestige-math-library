---
id: lem-calderon-zygmund-decomposition-at-height-lambda
kind: lemma
title: "Calderón–Zygmund decomposition at height λ"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-maximal-dyadic-cubes-at-height-lambda, thm-almost-every-point-is-a-lebesgue-point, thm-differentiation-along-families-shrinking-nicely, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.1, printed pp. 355–357"
    - title: "Terence Tao, Math 247A Lecture Notes 3"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes3.pdf"
      locator: "§4, Proposition 4.3 and its proof, printed pp. 23–24"
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "Chapter 1, Theorem 1.16, printed pp. 14–16"
---

## Statement

Assume Countable Choice. Let $f\in L^1(\mathbb R^n)$ and $\lambda>0$. Then
$f=g+\sum_jb_j$ almost everywhere, where the cubes $Q_j$ are the maximal
all-generation dyadic cubes of [[lem-maximal-dyadic-cubes-at-height-lambda]],
$$b_j=\Bigl(f-|Q_j|^{-1}\int_{Q_j}f\Bigr)\mathbf 1_{Q_j}$$
satisfies $\int b_j=0$ and $\|b_j\|_1\le2^{n+1}\lambda|Q_j|$, and
$$g=f\text{ outside }\bigcup_jQ_j,\qquad g=|Q_j|^{-1}\int_{Q_j}f\text{ on }Q_j$$
satisfies $\|g\|_1\le\|f\|_1$, $|g|\le2^n\lambda$ almost everywhere, and
$\|g\|_2^2\le2^n\lambda\|f\|_1$; moreover
$\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$.

## Facts & Assumptions

**Given:** $f\in L^1(\mathbb R^n)$ and $\lambda>0$; the maximal bad dyadic cubes $Q_j$ of the previous lemma, pairwise disjoint with $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$ and $|Q_j|^{-1}\int_{Q_j}|f|\le2^n\lambda$; the functions $g$ and $b_j$ defined above.

[F1] The maximal bad cubes $Q_j$ (cubes with $|Q|^{-1}\int_Q|f|>\lambda$, maximal under inclusion) are countable, pairwise disjoint, have union $\{M_df>\lambda\}$, and satisfy $|Q_j|^{-1}\int_{Q_j}|f|\le2^n\lambda$ and $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$ ([[lem-maximal-dyadic-cubes-at-height-lambda]]).

[F2] A family $(E_r)_{r>0}$ shrinks nicely to $x$ with constant $\alpha$ when $E_r\subseteq B(x,r)$ and $\lambda(E_r)\ge\alpha\lambda(B(x,r))$; if for each $x$ in a set $A$ such a family is given, then for almost every $x\in A$ the averages of an $L^1_{\mathrm{loc}}$ function over $E_r$ converge to the function value as $r\to0^+$ ([[thm-differentiation-along-families-shrinking-nicely]], [[thm-almost-every-point-is-a-lebesgue-point]]).



## Proof

**Proof technique:** direct.

1.1 The functions $g$ and $b_j$ are measurable, $b_j$ is supported in $Q_j$, and $f=g+\sum_jb_j$ everywhere: on $Q_j$ the sum $g+\sum_kb_k$ has the single nonzero term $g+b_j=|Q_j|^{-1}\int_{Q_j}f+f-|Q_j|^{-1}\int_{Q_j}f=f$ by disjointness of the $Q_k$, while off $\bigcup_kQ_k$ one has $g=f$ and every $b_k=0$. Moreover $\int b_j=\int_{Q_j}f-|Q_j|^{-1}\int_{Q_j}f\,|Q_j|=0$ and $\|b_j\|_1\le\int_{Q_j}|f|+|Q_j|^{-1}\bigl|\int_{Q_j}f\bigr||Q_j|\le2\int_{Q_j}|f|\le2\cdot2^n\lambda|Q_j|=2^{n+1}\lambda|Q_j|$. [F1, given, algebra]

2.1 On each bad cube, $|g|=|Q_j|^{-1}\bigl|\int_{Q_j}f\bigr|\le|Q_j|^{-1}\int_{Q_j}|f|\le2^n\lambda$, so $|g|\le2^n\lambda$ on $\bigcup_jQ_j$; off $\bigcup_jQ_j$ one has $g=f$ and all dyadic cubes through $x$ are good, so the averages of $|f|$ over those cubes are at most $\lambda$. These cubes, indexed by generation and assigned to the parameter $r=2\sqrt n\,2^{-k}$ for the generation-$k$ cube through $x$ and extended constantly on $[2\sqrt n\,2^{-k},2\sqrt n\,2^{-k+1})$, shrink nicely to $x$ with a dimensional constant: each lies in $B(x,r)$ and has measure $2^{-kn}=c_n\lambda(B(x,2\sqrt n2^{-k}))$. Hence [F2] gives $|f(x)|\le\lambda$ for almost every $x\notin\bigcup_jQ_j$, and since $g=f$ there, $|g|\le\max(2^n\lambda,\lambda)=2^n\lambda$ almost everywhere. [F1, F2, step 1.1, algebra]

3.1 From step 2.1, $\|g\|_1\le\int_{\bigcup Q_j}|g|+\int_{\mathbb R^n\setminus\bigcup Q_j}|f|\le\sum_j\int_{Q_j}|f|+\int_{\mathbb R^n\setminus\bigcup Q_j}|f|=\|f\|_1$, and $\|g\|_2^2=\int|g|^2\le\|g\|_\infty\int|g|\le2^n\lambda\|f\|_1$. Together with step 1.1 and the bounds $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$ and $|Q_j|^{-1}\int_{Q_j}|f|\le2^n\lambda$ from [F1], this is the asserted decomposition. [F1, step 1.1, step 2.1, algebra] ∎

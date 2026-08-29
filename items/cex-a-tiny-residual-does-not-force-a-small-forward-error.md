---
id: cex-a-tiny-residual-does-not-force-a-small-forward-error
kind: counterexample
title: "A tiny residual does not force a small forward error"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-residual-to-forward-error-bounds-for-linear-systems, def-condition-number-of-a-nonsingular-linear-system]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement refuted

If the residual $b-A\widehat x$ of an approximate solution is tiny compared
with $b$, then the forward error $x-\widehat x$ is tiny compared with $x$.

## Facts & Assumptions

**Given:** A parameter $\varepsilon$ with $0<\varepsilon<1$, the matrix
$A=\operatorname{diag}(1,\varepsilon)$, the right-hand side $b=(1,\varepsilon)$,
the exact solution $x=A^{-1}b=(1,1)$, the approximation
$\widehat x=(1,0)$, the residual $r=b-A\widehat x$, and the error $e=x-\widehat x$.

[L1] For $r=Ae$ and $e=A^{-1}r$ the residual and the error satisfy
$\lVert e\rVert_2\le\lVert A^{-1}\rVert_2\lVert r\rVert_2$ and
$\lVert r\rVert_2\le\lVert A\rVert_2\lVert e\rVert_2$
([[thm-residual-to-forward-error-bounds-for-linear-systems]]).

[L2] $\kappa_2(A)=\lVert A\rVert_2\lVert A^{-1}\rVert_2=1/\varepsilon$
([[def-condition-number-of-a-nonsingular-linear-system]]).

## Counterexample

**Proof technique:** direct.

1.1 The residual is $r=b-A\widehat x=(1,\varepsilon)-(1,0)=(0,\varepsilon)$, so $\lVert r\rVert_2=\varepsilon$, while $\lVert b\rVert_2=\sqrt{1+\varepsilon^{2}}$; the relative residual is $\varepsilon/\sqrt{1+\varepsilon^{2}}$, which tends to $0$ as $\varepsilon\to 0^{+}$. [algebra]

1.2 The error is $e=x-\widehat x=(0,1)$, so $\lVert e\rVert_2=1$ and the relative forward error is $1/\sqrt{2}$, independent of $\varepsilon$. [algebra]

2.1 Steps 1.1 and 1.2 contradict the claimed implication: the relative residual can be made arbitrarily small while the relative forward error stays at $1/\sqrt{2}$. [step 1.1, step 1.2]

2.2 The bounds of [L1] are consistent with the witness and explain it: $\lVert e\rVert_2=1=(1/\varepsilon)\cdot\varepsilon=\lVert A^{-1}\rVert_2\lVert r\rVert_2$ attains the first bound exactly, and the condition number $1/\varepsilon$ of [L2] is what converts the tiny residual $\varepsilon$ into order-one forward error. [L1, L2, step 1.1, step 1.2, algebra]

3.1 Steps 2.1 and 2.2 refute the false statement: a tiny residual guarantees only a tiny forward error up to the condition number, not by itself. [step 2.1, step 2.2] ∎

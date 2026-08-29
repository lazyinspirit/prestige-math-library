---
id: ex-a-backward-stable-solution-of-an-ill-conditioned-system
kind: example
title: "A backward-stable computed solution of an ill-conditioned system can still have large forward error"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-explicit-formulas-for-normwise-and-componentwise-backward-error, thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order, def-forward-and-backward-stability-for-a-problem-family]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 15"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Example

Fix an arithmetic model with unit roundoff $0<u<1$ and set
$\varepsilon=u$. Take $A=\operatorname{diag}(1,\varepsilon)$ and
$b=(1,\varepsilon)$, whose exact solution is $x=(1,1)$. On the singleton input
class consisting of this system, let an algorithm return
$\widehat x=(1,0)$. Its normwise backward error is at most $u/2$, so this
algorithm is backward stable on the declared class, yet its relative forward
error is $1/\sqrt2$: ill conditioning is not instability, and backward
stability does not remove ill conditioning.

## Facts & Assumptions

**Given:** An arithmetic model with unit roundoff $u\in(0,1)$, the parameter
$\varepsilon=u$, the matrix
$A=\operatorname{diag}(1,\varepsilon)$, the vector $b=(1,\varepsilon)$, the
exact solution $x=(1,1)$, and an algorithm on the singleton input class
$\mathcal I=\{(A,b)\}$ that returns $\widehat x=(1,0)$.

[L1] The normwise backward error is
$\eta_2(\widehat x)=\lVert r\rVert_2/(\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2)$
for $r=b-A\widehat x$ ([[prop-explicit-formulas-for-normwise-and-componentwise-backward-error]]).

[L2] Along admissible perturbations tending to zero, relative forward error is
at most $(\kappa_{\mathrm{rel}}+o(1))$ times relative backward error
([[thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order]]).

[A1] For the fixed linear map $f(b)=A^{-1}b$, one has
$f(b+h)-f(b)=A^{-1}h$ by linearity.

## Verification

**Proof technique:** direct.

1.1 The residual is $r=b-A\widehat x=(0,\varepsilon)$ and $\lVert r\rVert_2=\varepsilon$; also $\lVert A\rVert_2=1$, $\lVert\widehat x\rVert_2=1$ and $\lVert b\rVert_2=\sqrt{1+\varepsilon^{2}}$. [algebra]

1.2 The forward error is $\lVert x-\widehat x\rVert_2=\lVert(0,1)\rVert_2=1$ and the relative forward error $1/\sqrt{2}$, order one even as $\varepsilon\to 0^{+}$. [algebra]

1.3 The conditioning conversion. For the problem map $f(b)=A^{-1}b$ the absolute condition number is $\kappa_{\mathrm{abs}}=\lVert A^{-1}\rVert_2=1/\varepsilon$, attained in the second coordinate, and the computed answer is exact for the perturbed input $\widetilde b:=A\widehat x=(1,0)=b+h$ with $h=(0,-\varepsilon)$. By [A1], $f(b+h)-f(b)=A^{-1}h=(0,-1)$, and direct substitution gives $1/\sqrt{2}=\kappa_{\mathrm{rel}}\,\lVert h\rVert_2/\lVert b\rVert_2$. [A1, algebra]

2.1 By [L1], the normwise backward error is $\eta_2(\widehat x)=\varepsilon/(1+\sqrt{1+\varepsilon^{2}})\le\varepsilon/2=u/2$. Thus the one constant $C=1/2$ works for every input in the declared singleton class $\mathcal I$, so the algorithm is normwise backward stable there in the specialized sense of [[def-forward-and-backward-stability-for-a-problem-family]]. [given, L1, step 1.1, algebra]

3.1 Steps 2.1, 1.2 and 1.3 show that this backward-stable algorithm on an ill-conditioned problem class has order-one forward error even though its backward error is order $u$; [L2] records the general first-order conditioning principle illustrated exactly here. Backward stability controls the data perturbation, and only conditioning controls the answer. [L2, step 2.1, step 1.2, step 1.3] ∎

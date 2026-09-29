---
page: "weak-derivatives-and-sobolev-spaces-examples"
title: "Weak Derivatives and Sobolev Spaces — Examples"
status: draft
items: []
examples: ["cex-a-jump-across-a-hypersurface-is-not-in-w-one-p", "cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set", "cex-lp-functions-need-not-have-point-values", "cex-step-function-has-no-locally-integrable-weak-derivative", "cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases", "ex-absolute-value-has-a-weak-first-derivative", "ex-piecewise-c-one-functions-with-matching-traces", "ex-radial-power-membership-in-w-one-p", "cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold", "ex-absolute-value-has-dirac-second-distributional-derivative", "ex-sobolev-truncations-preserve-zero-regions"]
---

These companions compute and stress-test the page's claims. The absolute
value on an interval has weak derivative the sign function, in contrast to
its second distributional derivative $2\delta_0$, which places it in
$W^{1,\infty}_{\mathrm{loc}}$ but not in $W^{2,1}_{\mathrm{loc}}$. The
Heaviside step and a hypersurface jump show that a distributional derivative
can exist with no locally integrable representative, while the Cantor
staircase is continuous and locally constant off a null set yet still fails
to lie in $W^{1,1}$. Sharp thresholds appear for the radial power
$|x|^{-a}$ on $B(0,1)\subset\mathbb R^n$ with $a>0$ and finite $1\le p<\infty$,
which is in $W^{1,p}(B(0,1))$ exactly when $p(a+1)<n$, and for the
failure of the algebra property of $W^{1,p}$ below the continuity threshold.
Piecewise $C^1$ functions with matching traces across a flat hypersurface
remain $W^{1,p}$ with the expected piecewise gradient, whereas $L^p$ and
Sobolev classes determine no point values and point evaluation is unbounded
below the critical exponent. Finally, clipping an affine function shows that
truncation preserves a zero region, its level sets, and the corresponding
weak gradient.

The constructions use the main page's conventions: bounded open boxes or
intervals in $\mathbb R^n$ with the weak derivatives taken as
almost-everywhere classes. Countable Choice is declared through the stated
weak-derivative and measure interfaces, and the clipping example additionally
declares the Axiom of Choice for the cited Sobolev truncation calculus.

---
id: ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index
kind: example
title: "A degenerate isolated fixed point with nonzero local index"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-local-fixed-point-index, rem-isolated-does-not-imply-nondegenerate, thm-lefschetz-hopf-index-formula, thm-index-of-a-nondegenerate-fixed-point, def-global-geometric-lefschetz-number, def-degree-of-a-self-map-of-an-oriented-sphere, thm-degree-is-invariant-under-path-homotopy, thm-regular-value-formula-for-degree, cor-homology-of-spheres, def-algebraic-lefschetz-number, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 126-127 (the standard non-Lefschetz example z -> z+z^m and the splitting of degenerate fixed points)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §7, printed p. 17 (fixed point indices of isolated fixed points are the local data entering L(f), including index 0 and mixed signs)"
dependency_level: 11
---

## Example

Assume AC ([[def-axiom-of-choice]]). The polynomial $f(z)=z+z^2$ defines a smooth self-map of the Riemann sphere
$S^2=\mathbb C\cup\{\infty\}$ whose fixed points are exactly $0$ and $\infty$.
The fixed point $0$ is isolated but **degenerate**: $Df_0=I$ and $I-Df_0=0$ is
not invertible ([[rem-isolated-does-not-imply-nondegenerate]]). Nevertheless its
local index is defined and equals $2$
([[def-local-fixed-point-index]]), and the index of the second fixed point,
$\infty$, is $+1$; the index sum is $I(f)=2+1=3=L(f)$, in agreement with the
Lefschetz–Hopf formula [[thm-lefschetz-hopf-index-formula]] and with the
degree computation $L(f)=1+\deg f=1+2=3$ for a self-map of $S^2$ of degree $2$
([[def-algebraic-lefschetz-number]],
[[cor-homology-of-spheres]]).

## Verification

**Given:** The map $f(z)=z+z^2$ on $\mathbb C$, extended to $S^2$ by $f(\infty)=\infty$.

[F1] The fixed point $0$ is isolated and degenerate, with
$\operatorname{ind}_0(f)=2$
([[rem-isolated-does-not-imply-nondegenerate]],
[[def-local-fixed-point-index]]); at $\infty$ the chart $w=1/z$ turns $f$ into
$w\mapsto w^2/(w+1)$ with displacement $w/(w+1)$, which vanishes only at $w=0$
with invertible linear part $1$, so $\operatorname{ind}_\infty(f)=+1$
([[thm-index-of-a-nondegenerate-fixed-point]]).

[F2] $H_*(S^2;\mathbb Q)$ is $\mathbb Q$ in degrees $0,2$ and zero otherwise;
a self-map of $S^2$ of degree $d$ has $L=1+d$
([[cor-homology-of-spheres]], [[def-algebraic-lefschetz-number]],
[[def-degree-of-a-self-map-of-an-oriented-sphere]]).

1.1 The indices. The fixed point equation on $\mathbb C$ is $z^2=0$, so $0$ is the only finite fixed point and it is isolated; in the chart $w=1/z$ at infinity, the fixed point equation is $w^2/(w+1)=w$, i.e. $w=0$, so $\infty$ is the other fixed point. By [F1] the two indices are $2$ and $+1$, so the geometric Lefschetz number is $I(f)=2+1=3$; the point $0$ is degenerate, so the determinant formula [[thm-index-of-a-nondegenerate-fixed-point]] does not apply to it, and the value $2$ comes from the explicit degree computation of the displacement $-z^2$ on a small circle. [given, F1]

2.1 The Lefschetz number agrees. The expression $w\mapsto w^2/(w+1)$ is smooth near infinity, so the polynomial extends smoothly. The finite value $1$ has exactly two distinct preimages solving $z^2+z=1$, namely $(-1\pm\sqrt5)/2$; at each the derivative is nonzero complex multiplication by $1+2z$, of positive real determinant. Infinity maps to infinity and is not a preimage of $1$. Hence $1$ is a regular value and [[thm-regular-value-formula-for-degree]] gives degree $2$, so by [F2] $L(f)=1+2=3$. Hence $I(f)=3=L(f)$ even though the fixed point at $0$ is degenerate: the index formula holds for isolated fixed points and does not require nondegeneracy, which is exactly the content of [[thm-lefschetz-hopf-index-formula]]. [step 1.1, F2] ∎

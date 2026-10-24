---
id: def-sqp-augmented-lagrangian-equality-and-inequality
kind: definition
title: "Equality and inequality augmented Lagrangians and multiplier updates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-inequality-constrained-program-and-kkt-geometry
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 17 §17.4, printed pp. 511–521 / PDF pp. 529–539; equality and projected inequality multiplier methods."
    - title: "Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods"
      url: https://www.mit.edu/~dimitrib/Constrained-Opt.pdf
      locator: "Chapter 2 §2.2.2 and §2.2.4, printed pp. 107–112 and 115–121; local minima, multiplier convergence, and penalty comparison."
    - title: "Ralf Herzog, Algorithms and Preconditioning in PDE-Constrained Optimization, lecture notes"
      url: "https://citeseerx.ist.psu.edu/document?doi=f681cd3f5021097b647a085b869853e713894a51&repid=rep1&type=pdf"
      locator: "Chapter 1 §§2.2.2–2.2.3, printed pp. 14–16 / PDF pp. 14–16; SQP/Newton equivalence and augmented-Lagrangian SQP update."
---

## Definition

Use the $C^2$ program, dimensions, gradient conventions, and Lagrangian
$L(x,\nu,\lambda)=f(x)+\nu^Th(x)+\lambda^Tg(x)$ of
[[def-inequality-constrained-program-and-kkt-geometry]]. Let $\rho>0$,
$\nu\in\mathbb R^p$, and $\lambda\in\mathbb R^m_+$. The equality
augmented Lagrangian is
$$\mathcal L^E_\rho(x,\nu)=f(x)+\nu^Th(x)+\tfrac{\rho}{2}\|h(x)\|_2^2.$$
For inequalities, with $[z]_i^+=\max\{z_i,0\}$, the projected
(Powell–Hestenes–Rockafellar) augmented Lagrangian is
$$\mathcal L_\rho(x,\nu,\lambda)=f(x)+\nu^Th(x)+\tfrac{\rho}{2}\|h(x)\|_2^2+ \frac{\|[\lambda+\rho g(x)]_+\|_2^2-\|\lambda\|_2^2}{2\rho}.$$
After an inner candidate $x^+$ is produced, the multiplier update is
$$\nu^+=\nu+\rho h(x^+),\qquad \lambda^+=[\lambda+\rho g(x^+)]_+.$$
The bracket is componentwise. A **declared inner stationarity residual** is
$\|\nabla_x\mathcal L_\rho(x^+,\nu,\lambda)\|_2$; an inner procedure must
report the residual it achieved or an explicit failure status.

The equality and inequality formulas are distinct branches. For an inequality
with $\lambda_i+\rho g_i(x)>0$, its summand equals
$\lambda_i g_i(x)+\rho g_i(x)^2/2$; when
$\lambda_i+\rho g_i(x)\le0$, its summand is constant in $x$.

## Facts & Assumptions

**Given:** The $C^2$ program, $\rho>0$, equality multiplier $\nu$, and
componentwise nonnegative inequality multiplier $\lambda$.

[F1] [[def-inequality-constrained-program-and-kkt-geometry]] uses $g_i\le0$
and the Lagrangian $f+\nu^Th+\lambda^Tg$.

[A1] The penalty parameter satisfies $\rho>0$ and the inequality
multiplier satisfies $\lambda\ge0$.

## Proof

1.1 For any scalar $s=\lambda_i+\rho g_i(x)$, the identity $([s]_+)^2-\lambda_i^2=(s^2-\lambda_i^2)$ when $s>0$ expands to $2\rho\lambda_i g_i+\rho^2g_i^2$; when $s\le0$, $[s]_+=0$. This gives the two stated inequality branches and shows they agree in value at their boundary. [given, F1, algebra]

2.1 Differentiating the equality branch gives multiplier update $\nu+\rho h(x)$. On the positive inequality branch, differentiating its summand gives $[\lambda_i+\rho g_i(x)]_+Dg_i(x)^T$; on the nonpositive branch it gives zero. Thus the projected update is nonnegative and is consistent with the displayed piecewise gradient. [given, step 1.1, algebra] ∎

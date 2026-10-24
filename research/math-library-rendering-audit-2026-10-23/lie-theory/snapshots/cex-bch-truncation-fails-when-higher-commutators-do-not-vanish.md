---
id: cex-bch-truncation-fails-when-higher-commutators-do-not-vanish
kind: counterexample
title: BCH truncation fails when higher commutators do not vanish
status: published
verification:
  audited: 2026-09-14
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-matrix-units, def-matrix-product-and-identity-matrix, ex-matrix-exponential-as-the-lie-group-exponential]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Expansion following Theorem 1.3, pages 3-4
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Appendix B, BCH series through homogeneous degree three, printed pages 669-671
---

## Counterexample

Assume $\mathrm{AC}_\omega$. In the upper-unitriangular subgroup of
$\operatorname{GL}_4(\mathbb R)$, put the strictly upper-triangular Lie-algebra elements

$$X=E_{01}+E_{12},\qquad Y=E_{23}.$$

Then the quadratic truncation
$Z_0=X+Y+\frac12[X,Y]$ does not satisfy
$e^{Z_0}=e^Xe^Y$. The omitted cubic BCH term is
$\frac1{12}[X,[X,Y]]=E_{03}/12\ne0$.

## Facts & Assumptions

**Given:** The displayed $4\times4$ matrices $X$ and $Y$.

[F1] Matrix units are defined by their entries, and matrix multiplication is the usual finite row-by-column sum; hence $E_{ij}E_{kl}=\delta_{jk}E_{il}$. [[def-matrix-units]]. [[def-matrix-product-and-identity-matrix]].

[F2] For matrix Lie groups, the Lie-group exponential is the matrix exponential. [[ex-matrix-exponential-as-the-lie-group-exponential]].

[F3] Countable choice is inherited through the matrix-Lie-group exponential interface [F2]; the finite polynomial calculation below uses no further choice. [[def-countable-choice]].



## Proof

**Proof technique:** explicit counterexample.

1.1 By [F1], $[X,Y]=E_{13}$, $[X,[X,Y]]=E_{03}$, and $[Y,[X,Y]]=0$. Every product of four strictly upper-triangular $4\times4$ matrices is zero. The coefficient of the surviving cubic commutator will be determined directly below, without applying a local BCH theorem outside its neighbourhood. [F1, algebra]

1.2 The failure can be checked without relying on formal uniqueness. Since $X^2=E_{02}$, $X^3=Y^2=0$, direct multiplication gives $e^Xe^Y=I+E_{01}+E_{12}+E_{23}+\frac12E_{02}+E_{13}+\frac12E_{03}$. [F1, F2, algebra]

1.3 For $Z_0=E_{01}+E_{12}+E_{23}+\frac12E_{13}$, [F1] gives $Z_0^2=E_{02}+E_{13}+\frac12E_{03}$, $Z_0^3=E_{03}$, and $Z_0^4=0$. Hence $e^{Z_0}=I+E_{01}+E_{12}+E_{23}+\frac12E_{02}+E_{13}+\frac5{12}E_{03}$. [F1, F2, algebra]

2.1 The $E_{03}$ coefficients in steps 1.2 and 1.3 are respectively $1/2$ and $5/12$, so $e^{Z_0}\ne e^Xe^Y$. Moreover $E_{03}$ annihilates every strictly upper-triangular matrix on either side, so it commutes with $Z_0$ and has square zero. Hence $$e^{Z_0+E_{03}/12}=e^{Z_0}(I+E_{03}/12)=e^Xe^Y.$$ The exponential is injective on strictly upper-triangular $4\times4$ matrices: for $N^4=0$, its polynomial inverse is $\log(I+K)=K-K^2/2+K^3/3$, and direct finite expansion gives $\log(e^N)=N$. Thus $Z_0+E_{03}/12$ is the exact logarithm and the omitted term is precisely $[X,[X,Y]]/12$. The matrix calculation is choice-free; $\mathrm{AC}_\omega$ is stated only for [F2]. No endpoint, metric, or biconditional occurs. [discharge-construct: witness, F1, F2, F3, step 1.1, step 1.2, step 1.3, algebra] ∎

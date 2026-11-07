---
id: def-first-second-third-derivative-test-hypotheses
kind: definition
title: "First-, Second-, and Third-Derivative Test Hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-discrete-exponential-sum
  - def-exponential-character-e
  - def-rational-power
  - lem-rational-power-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums II: the Kuzmin and Montgomery-Vaughan estimates"
      url: "https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf"
      locator: "Kuzmin proposition, printed pp. 1-2"
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Derivative hypotheses and estimates I-III, printed pp. 1-3"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 39-41"
---

## Definition

Let $A<B$ be integers. For $k\ge1$, $f\in C^k([A,B])$ means that $f$
is continuous on $[A,B]$, has derivatives through order $k$ on $(A,B)$,
and each such derivative extends continuously to $[A,B]$; derivative
conditions at endpoints refer to those extensions. A real function is
monotone if it is either nondecreasing or nonincreasing.

The first-derivative hypothesis with parameter $0<\lambda_1\le\tfrac12$
holds when $f\in C^1([A,B])$, $f'$ is monotone, and
$
\|f'(x)\|_{\mathbb T}\ge\lambda_1\qquad(x\in[A,B]).
$
The second-derivative hypothesis with parameters $\lambda_2>0$ and
$0<c_2\le C_2$ holds when $f\in C^2([A,B])$ and either
$
c_2\lambda_2\le f''(x)\le C_2\lambda_2
\quad\text{for all }x\in[A,B],
$
or the same inequalities hold with $-f''$ in place of $f''$. The
third-derivative hypothesis with parameters $\lambda_3>0$ and
$0<c_3\le C_3$ is defined in the same way using $f\in C^3([A,B])$ and
$f'''$ or $-f'''$.

Every rational power of a positive parameter uses the positive-base
rational-power convention. For $X,Y\ge0$, $X\ll_{c,C}Y$ means that
$X\le K(c,C)Y$ for some constant $K(c,C)>0$ depending only on the
displayed positive comparison constants.

## Definition references

[[def-discrete-exponential-sum]]

[[def-exponential-character-e]]

[[def-rational-power]]

[[lem-rational-power-well-defined]]

[Elkies, Math 229, “Exponential sums II: the Kuzmin and Montgomery–Vaughan estimates,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf)

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)

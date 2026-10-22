---
id: ex-ip-small-volume-contrast-in-born-regime
kind: example
title: A unit contrast on a small cube lies in the Born regime
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-ip-fixed-frequency-far-field-data
  - def-pi-via-first-positive-cosine-zero
  - def-volume-integral-scattering-model
  - lem-ip-born-linearization-of-the-scattering-map
  - lem-volume-integral-operator-well-defined-and-bounded
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-nth-roots-exist
  - thm-volume-integral-scattering-born-neumann-error
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the box-measure, volume-operator, and Born-tail suppliers. No full Axiom of Choice is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 10–11: Born far-field expression"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: outgoing volume equation"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Assume Countable Choice. Let $\ell>0$ be the unique real satisfying $\ell^4=\pi/(2\sqrt3)$, take $D=[0,\ell]^3$, $k=1$, and the unit contrast $q=1_D$. Then $C_D=1/(2\sqrt2)<1$, so $\rho_1(q)<1$ and the exact far-field data lie on the small-norm Born branch. Uniformly over all incident and observation directions, the first Born amplitude error is at most $\ell^3/(4\pi(2\sqrt2-1))$.

## Example references

[[def-ip-fixed-frequency-far-field-data|The small-norm domain is $\rho_k(q)<1$.]]

[[lem-ip-born-linearization-of-the-scattering-map|The uniform error estimate in terms of $M$, $C_D$, and $\rho_k(q)$.]]

[[lem-volume-integral-operator-well-defined-and-bounded|The operator-norm bound $\rho_k(q)\le C_D\|q\|_\infty$.]]

[[thm-lebesgue-measure-of-a-box-of-every-kind|The cube $\lbrack0,\ell\rbrack^3$ has Lebesgue measure $\ell^3$.]]

[[thm-nth-roots-exist|A positive real has a unique positive fourth root.]]

## Facts & Assumptions

**Given:** Countable Choice, $D=[0,\ell]^3$ with $\ell>0$ and $\ell^4=\pi/(2\sqrt3)$, $k=1$, and $q=1_D$.

[F1] The small-norm domain is $\mathcal U_{D,1}=\{q:\rho_1(q)<1\}$ ([[def-ip-fixed-frequency-far-field-data]]).

[F2] The volume operator satisfies $\rho_1(q)\le\|q\|_\infty\sqrt{|D|\operatorname{diam}(D)/(4\pi)}$ ([[lem-volume-integral-operator-well-defined-and-bounded]]).

[F3] For $q\in\mathcal U_{D,1}$, the uniform Born remainder is at most $\frac{M}{4\pi}\|q\|_\infty\frac{\rho_1(q)}{1-\rho_1(q)}$ and, when $C_D\|q\|_\infty<1$, at most $\frac{MC_D}{4\pi}\frac{\|q\|_\infty^2}{1-C_D\|q\|_\infty}$ ([[lem-ip-born-linearization-of-the-scattering-map]]).

[F4] The Lebesgue measure of the closed cube $[0,\ell]^3$ is $\ell^3$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] The Euclidean norm in $\mathbb R^3$ is $\sqrt{x_1^2+x_2^2+x_3^2}$ ([[def-euclidean-inner-product]]).

[F6] The unique nonnegative real $\ell$ satisfying $\ell^4=\pi/(2\sqrt3)$ exists, and it is positive because the right-hand side is positive ([[thm-nth-roots-exist]], [[def-pi-via-first-positive-cosine-zero]]).

[A1] Countable Choice is assumed in the L2 operator and Neumann-series suppliers ([[def-countable-choice]]).

## Verification

**Given:** The data above.

1.1 By [F4], $M=|D|=\ell^3$. The coordinate formula [F5] shows that the largest distance in the cube is attained by opposite corners and is $\operatorname{diam}(D)=\sqrt3\,\ell$. Also $\|q\|_\infty=1$. [given, F4, F5]

2.1 Substituting the values from step 1.1 into [F2] gives $\rho_1(q)\le C_D=\sqrt{\frac{\ell^3\sqrt3\ell}{4\pi}}=\sqrt{\frac{\sqrt3\ell^4}{4\pi}}=\frac1{2\sqrt2}<1.$ The final strict inequality follows from $\sqrt2>1$. Hence $q\in\mathcal U_{D,1}$ by [F1]. [A1, F1, F2, F6, step 1.1, algebra]

3.1 Apply [F3] with $M=\ell^3$, $\|q\|_\infty=1$, and $C_D=1/(2\sqrt2)$. Since $C_D<1$, it gives the uniform error bound $\sup_{\theta,d\in S^2}|\mathcal S_1(q)(\theta,d)-\mathcal B_1q(\theta,d)|\le\frac{\ell^3}{4\pi}\frac{C_D}{1-C_D}=\frac{\ell^3}{4\pi(2\sqrt2-1)}.$ This verifies the claimed Born-regime example. [F3, step 1.1, step 2.1, algebra] ∎

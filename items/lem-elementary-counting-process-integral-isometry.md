---
id: lem-elementary-counting-process-integral-isometry
kind: lemma
title: "Isometry for elementary predictable counting-process integrals"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-elementary-predictable-counting-process-integral
  - lem-elementary-counting-integral-preserves-martingales
  - thm-compensated-counting-process-brackets
  - thm-taking-out-what-is-known
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 9: Some Key Results for Counting Process Martingales, PDF p. 12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf"
    - title: "Lu Tian, STAT331 Unit 10: Combining Martingales, Stochastic Integrals, and Applications, Theorems 12.3–12.4, PDF pp. 5 and 12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf"
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.5, PDF p. 5"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"

---

## Statement

Under the finite-horizon contract, for every bounded predictable step
integrand $H$, the elementary process $I_t(H)=\int_0^tH_s\,dM_s$ is a
square-integrable martingale and
$$\mathbb E[I_T(H)^2]=\mathbb E\int_0^TH_s^2\,dA_s.$$
The terminal $L^2$ class is independent of the chosen finite-step
representation of the same integrand in the compensator $L^2$ seminorm.

## Facts & Assumptions

**Given:** A simple counting-process contract $M=N-A$, the martingale $M^2-A$, and a bounded predictable step integrand $H_j\in\mathcal F_{t_j}$ on a finite deterministic partition.

[F1] $M$ is square-integrable, and $M^2-A$ is an integrable martingale on the finite horizon. ([[def-counting-process-intensity-and-compensator-contract]] [[thm-compensated-counting-process-brackets]])

[F2] The elementary integral is the finite sum of coefficients times martingale increments. ([[def-elementary-predictable-counting-process-integral]])

[F3] If $X$ is integrable, a bounded $\mathcal F_{t_j}$-measurable factor $Z$ can be taken out of conditional expectation given $\mathcal F_{t_j}$. The same holds for a finite real such $Z$ when $ZX$ is integrable; then $Z\mathbb E[X\mid\mathcal F_{t_j}]$ is integrable too. ([[thm-taking-out-what-is-known]])

[F4] The elementary integral process is a square-integrable martingale. ([[lem-elementary-counting-integral-preserves-martingales]])

[F5] Products of two $L^2$ random variables are integrable by Cauchy–Schwarz. ([[cor-cauchy-schwarz-for-random-variables]])

[A1] AC is inherited through the conditional-expectation interface. ([[def-axiom-of-choice]])

## Proof

1.1 On each $(t_j,t_{j+1}]$, write $\Delta M_j=M_{t_{j+1}}-M_{t_j}$ and $\Delta A_j=A_{t_{j+1}}-A_{t_j}$. The martingale $M^2-A$ gives $\mathbb E[M_{t_{j+1}}^2-M_{t_j}^2\mid\mathcal F_{t_j}]=\mathbb E[\Delta A_j\mid\mathcal F_{t_j}]$; expand the left square as $(\Delta M_j)^2+2M_{t_j}\Delta M_j$. Since $M_{t_j}$ and $\Delta M_j$ are in $L^2$, their product is integrable by [F5], so [F3] applies with the possibly unbounded factor $M_{t_j}$. Use $\mathbb E[\Delta M_j\mid\mathcal F_{t_j}]=0$ to get $\mathbb E[(\Delta M_j)^2\mid\mathcal F_{t_j}]=\mathbb E[\Delta A_j\mid\mathcal F_{t_j}]$. By [F3], $\mathbb E[H_j^2(\Delta M_j)^2]=\mathbb E[H_j^2\Delta A_j]$. [A1, F1, F3, F5, given, algebra]

2.1 If $i<j$, then $H_i\Delta M_iH_j$ is $\mathcal F_{t_j}$-measurable and its product with $\Delta M_j$ is integrable by boundedness of $H$ and [F5]; [F3] and $\mathbb E[\Delta M_j\mid\mathcal F_{t_j}]=0$ give $\mathbb E[H_i\Delta M_iH_j\Delta M_j]=0$. Expanding the finite-sum square [F2], all off-diagonal terms vanish, and step 1.1 gives $\mathbb E[I_T(H)^2]=\sum_j\mathbb E[H_j^2(\Delta M_j)^2]=\sum_j\mathbb E[H_j^2\Delta A_j]=\mathbb E\int_0^TH_s^2\,dA_s$; the martingale assertion is [F4]. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 If two step representations agree in the compensator $L^2$ seminorm, their difference has seminorm zero; applying the isometry in step 2.1 to the refined difference representation makes the squared $L^2$ norm of their terminal-integral difference zero, so they define the same terminal class. [step 2.1, algebra] ∎

## Source notes

Tian’s Unit 9, PDF p. 12, states the scalar bracket result. Unit 10, Theorems 12.3–12.4, PDF pp. 5 and 12, states the bounded predictable-integral martingale and integral-bracket results, referring full proofs to Fleming–Harrington; Theorem 12.4 additionally assumes bounded $N$. The local finite-step proof here uses the stated square-integrable model contract without that extra boundedness assumption. Bass describes the same $L^2$ completion route for jump martingales. The conditional-variance and orthogonal-increment calculation above supplies the finite-step proof.


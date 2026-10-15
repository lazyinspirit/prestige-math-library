---
id: thm-qft-finite-asymptotic-wick-expansion
kind: theorem
title: Finite interacting asymptotic Wick expansion with remainder
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-euclidean-interacting-measure
  - thm-qft-finite-euclidean-polynomial-measure
  - lem-qft-finite-gaussian-wick-moments
  - def-axiom-of-choice
  - cor-taylor-lagrange-and-cauchy-remainders
  - thm-derivative-of-exponential
  - thm-chain-rule-for-total-derivatives
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-qft-finite-euclidean-interacting-measure: mathematical-premise
  thm-qft-finite-euclidean-polynomial-measure: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the Axiom of Choice and the hypotheses and notation of [[def-qft-finite-euclidean-interacting-measure]]. Let $P\in\mathbb R[q_1,\ldots,q_N]$, $Z(\lambda)=\mathbb E_{\gamma_C}[e^{-\lambda U}]$, $N_P(\lambda)=\mathbb E_{\gamma_C}[P e^{-\lambda U}]$, and $\langle P\rangle_\lambda=N_P(\lambda)/Z(\lambda)$. For every integer $M\ge0$,

$$Z(\lambda)=\sum_{j=0}^M z_j\lambda^j+R_{M,1}(\lambda),\qquad z_j=\frac{(-1)^j}{j!}\mathbb E_{\gamma_C}[U^j],\qquad |R_{M,1}(\lambda)|\le\frac{\lambda^{M+1}}{(M+1)!}\mathbb E_{\gamma_C}[U^{M+1}]$$

for $\lambda\ge0$. Likewise,

$$N_P(\lambda)=\sum_{j=0}^M a_j(P)\lambda^j+R_{M,P}(\lambda),\qquad a_j(P)=\frac{(-1)^j}{j!}\mathbb E_{\gamma_C}[PU^j],\qquad |R_{M,P}(\lambda)|\le\frac{\lambda^{M+1}}{(M+1)!}\mathbb E_{\gamma_C}[|P|U^{M+1}].$$

Define $b_0(P)=a_0(P)$ and, for $m\ge1$, $b_m(P)=a_m(P)-\sum_{j=1}^m z_jb_{m-j}(P)$. Then

$$\langle P\rangle_\lambda=\sum_{j=0}^M b_j(P)\lambda^j+O(\lambda^{M+1})\quad\text{as }\lambda\downarrow0.$$

Every coefficient is computed from finitely many Gaussian polynomial moments and hence from finitely many covariance pairings by [[lem-qft-finite-gaussian-wick-moments]]. These estimates hold separately for each finite $M$; they do not assert convergence of the infinite formal series or any continuum limit.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, fix $N,C,U$ as in [[def-qft-finite-euclidean-interacting-measure]], take $P\in\mathbb R[q_1,\ldots,q_N]$, and let $\lambda\ge0$.

[A1] The Axiom of Choice is carried from the finite-dimensional normal-law construction. [[def-axiom-of-choice]]

[F1] The Borel probability $\gamma_C$, the nonnegative quartic $U$, $Z(\lambda)$ and the polynomial insertion $N_P(\lambda)$ are defined in [[def-qft-finite-euclidean-interacting-measure]].

[F2] All Gaussian polynomial moments are absolutely finite and are sums over the finite set of covariance pairings. [[lem-qft-finite-gaussian-wick-moments]]

[F3] The normalized measure exists, $Z(0)=1$, and $Z(\lambda)\to1$ as $\lambda\downarrow0$. [[thm-qft-finite-euclidean-polynomial-measure]]

[F4] For a $C^{M+1}$ function on an interval, the Lagrange remainder is $f^{(M+1)}(\xi)x^{M+1}/(M+1)!$ for some $\xi$ between $0$ and $x$. [[cor-taylor-lagrange-and-cauchy-remainders]]

[F5] The real exponential is smooth with derivative itself, and the chain rule applies to its composition with $x\mapsto-x$. [[thm-derivative-of-exponential]], [[thm-chain-rule-for-total-derivatives]]

[F6] For $x\ge0$, the real exponential power series gives $\exp(x)\ge1$, and the exponential is positive with $\exp(-x)=1/\exp(x)$. Thus $0<\exp(-x)\le1$. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

## Proof

**Proof technique:** direct finite-order remainder and formal division.

1.1 By [F5], $f(x)=\exp(-x)$ is $C^{M+1}$ and $|f^{(M+1)}(\xi)|=\exp(-\xi)$. Apply [F4] at $x=\lambda U(q)\ge0$; [F6] gives $\exp(-\xi)\le1$. Thus pointwise $$\left|\exp(-\lambda U(q))-\sum_{j=0}^M\frac{(-\lambda U(q))^j}{j!}\right|\le\frac{\lambda^{M+1}U(q)^{M+1}}{(M+1)!}.$$ The case $\lambda U(q)=0$ has zero remainder. [A1, F4, F5, F6, given]

1.2 Let $Z_M(\lambda)=\sum_{j=0}^M z_j\lambda^j$ and $A_M(\lambda)=\sum_{j=0}^M a_j(P)\lambda^j$. By the recurrence defining $b_j(P)$, every coefficient through degree $M$ in $A_M(\lambda)-\left(\sum_{j=0}^M b_j(P)\lambda^j\right)Z_M(\lambda)$ is zero, because $z_0=1$. The remaining polynomial terms have degree at least $M+1$, so their absolute value is bounded by a finite constant times $\lambda^{M+1}$ on $0\le\lambda\le1$. [given, algebra]

2.1 Integrate the inequality in step 1.1 against $\gamma_C$ to obtain the stated partition-function expansion and bound. Multiply the same pointwise inequality by $|P(q)|$ and integrate to obtain the numerator expansion and bound. Every right-hand expectation is finite by [F2]. [step 1.1, F1, F2, algebra]

3.1 On $0\le\lambda\le1$, the polynomial $B_M(\lambda)=\sum_{j=0}^M b_j(P)\lambda^j$ is bounded. Using the remainder bounds in step 2.1 and the polynomial identity in step 1.2 therefore gives $|N_P(\lambda)-B_M(\lambda)Z(\lambda)|\le K_M\lambda^{M+1}$ for some finite $K_M$. As $\lambda\downarrow0$, $\exp(-\lambda U(q))\to1$ pointwise and $0<\exp(-\lambda U(q))\le1$ by [F6], so [F3] gives $Z(\lambda)\to Z(0)=1$. Choose $\delta>0$ such that $Z(\lambda)\ge1/2$ for $0\le\lambda<\delta$. Dividing by $Z(\lambda)$ yields $|\langle P\rangle_\lambda-B_M(\lambda)|\le2K_M\lambda^{M+1}$ there. Finally, [F2] writes every coefficient moment as a finite covariance-pairing sum; no limit in $M$ was taken. [step 2.1, step 1.2, F2, F3, algebra] ∎


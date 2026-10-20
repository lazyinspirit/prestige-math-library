---
id: lem-linucb-predictable-mgf-substitution
kind: lemma
title: Conditional sub-Gaussian bounds allow bounded predictable coefficients
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
verification:
  precheck: pass
deps: [cor-mean-value-theorem,
       def-axiom-of-choice,
       def-conditional-expectation-given-a-sigma-algebra,
       def-expectation-of-a-nonnegative-or-integrable-random-variable,
       thm-basic-algebra-and-order-properties-of-conditional-expectation,
       thm-chain-rule,
       thm-derivative-of-exponential]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used only for existence and the usual order, pull-out, and L1-contraction properties of conditional expectations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§20.1, conditional exponential-supermartingale calculation."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Lemma 1 and Theorem 3, PDF pp. 1–3."
---

## Statement

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,P)$ be a probability space, let $\mathcal G\subseteq\mathcal F$ be a sub-sigma-algebra, and let $\eta$ be a real random variable such that, for every $q\in\mathbb R$, $e^{q\eta}$ is integrable and

$$\mathbb E[e^{q\eta}\mid\mathcal G]\le e^{q^2/2}\quad\text{almost surely}.$$

Then for every bounded, real, $\mathcal G$-measurable random variable $Q$,

$$\mathbb E[e^{Q\eta-Q^2/2}\mid\mathcal G]\le1\quad\text{almost surely}.$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §20.1](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Lemma 1](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** AC, a probability space, a sub-sigma-algebra $\mathcal G$, and an integrable real random variable $\eta$ whose exponential moments satisfy the Statement.

[F1] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is $\mathcal G$-measurable and integrable, and its event integrals equal those of the conditioned variable.

[F2] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and order preserving, pulls out bounded $\mathcal G$-measurable factors, preserves total expectation, and satisfies $|\mathbb E[X\mid\mathcal G]|\le\mathbb E[|X|\mid\mathcal G]$ almost surely. AC is required for the supplied conditional-expectation classes.

[F3] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: $\frac{d}{dq}e^{q\eta-q^2/2}=(\eta-q)e^{q\eta-q^2/2}$ for each fixed finite value of $\eta$.

[F4] [[cor-mean-value-theorem]]: a differentiable real function on an interval has each increment equal to its derivative at an intermediate point times the interval length.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this supplies the conditional-expectation versions used in [F2].

## Proof

1.1 First suppose $Q=\sum_{j=1}^m q_j\mathbf1_{B_j}$ for a finite measurable partition $B_1,\ldots,B_m$ in $\mathcal G$. By [F1]–[F2], $\sum_j\mathbf1_{B_j}e^{-q_j^2/2}\mathbb E[e^{q_j\eta}\mid\mathcal G]$ is a conditional-expectation version of $e^{Q\eta-Q^2/2}$. The assumed fixed-$q_j$ bounds make this version at most $\sum_j\mathbf1_{B_j}=1$ almost surely. [given, A1, F1, F2]

1.2 For a bounded $Q$, choose $K\ge1$ with $|Q|\le K$ and let $Q_r$ be the finite-valued $\mathcal G$-measurable rounding of $Q$ down to the grid $2^{-r}\mathbb Z$; then $|Q_r-Q|\le2^{-r}$ and $|Q_r|\le K+1$. [given, construct]

2.1 For fixed $\omega$, put $g_\omega(q)=e^{q\eta(\omega)-q^2/2}$. By [F3]–[F4], on $[-K-1,K+1]$ its increments satisfy $$|g_\omega(q)-g_\omega(q')|\le |q-q'|\bigl(|\eta(\omega)|+K+1\bigr)e^{(K+1)|\eta(\omega)|}.$$ For $x\ge0$, $(x+K+1)e^{(K+1)x}\le(K+2)e^{(K+2)x}$ because $x+K+1\le(K+2)e^x$. Also $e^{(K+2)|\eta|}\le e^{(K+2)\eta}+e^{-(K+2)\eta}$, whose expectation is at most $2e^{(K+2)^2/2}$ by [F2]. The Lipschitz envelope is therefore integrable, so $|Q_r-Q|\le2^{-r}$ implies $\mathbb E|g(Q_r)-g(Q)|\to0$. [F2, F3, F4, step 1.2, algebra]

3.1 Set $Y_r=\mathbb E[g(Q_r)\mid\mathcal G]$ and $Y=\mathbb E[g(Q)\mid\mathcal G]$. By [F2] and step 2.1, $\mathbb E|Y_r-Y|\le\mathbb E|g(Q_r)-g(Q)|\to0$. Step 1.1 gives $Y_r\le1$ almost surely for every $r$; after removing the countable union of their exceptional null sets, $(Y-1)_+\le|Y-Y_r|$ for each $r$. Taking expectations and passing to the limit gives $\mathbb E[(Y-1)_+]=0$, hence $Y\le1$ almost surely. [step 1.1, step 2.1, F2, algebra] ∎

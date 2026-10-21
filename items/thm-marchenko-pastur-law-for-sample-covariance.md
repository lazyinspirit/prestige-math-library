---
id: thm-marchenko-pastur-law-for-sample-covariance
kind: theorem
title: "Almost-sure Marchenko–Pastur law for finite-fourth-moment sample covariance matrices"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - def-stieltjes-transform-of-a-real-probability-measure
  - def-marchenko-pastur-measure
  - lem-sample-covariance-empirical-law-is-a-probability-measure
  - lem-fourth-moment-quadratic-form-resolvent-bound
  - lem-rank-one-resolvent-update-and-trace-bound
  - lem-adapted-resolvent-trace-concentration
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
  - def-weak-convergence-of-borel-probability-measures
  - cor-tightness-extracts-a-weakly-convergent-subsequence
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-identically-distributed-and-iid-random-variables
  - def-almost-sure-convergence-of-random-variables
  - cor-first-borel-cantelli-lemma-for-events
  - thm-chebyshev-inequality
  - lem-marchenko-pastur-formula-defines-a-finite-measure
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3, §3.3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Theorem 2.1 and §2.1.3"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Assume the Axiom of Choice, and let all the matrices $X_n$ be defined on one common probability space. For each positive integer $n$, let $p_n$ be a positive integer with $p_n/n\to\gamma\in(0,\infty)$, and let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries. Assume that all entries of all the matrices $X_n$ have one common law with mean zero, variance one, and finite fourth moment. Set $S_n=X_n^{\mathsf T}X_n/n$ and let $\mu_n$ be its empirical spectral distribution normalized by $p_n$. Then $\mu_n$ converges weakly almost surely to the probability measure with density
$$\rho_\gamma(x)=\begin{cases}\dfrac{\sqrt{(b_\gamma-x)(x-a_\gamma)}}{2\pi\gamma x},&a_\gamma<x<b_\gamma,\\0,&x\notin(a_\gamma,b_\gamma),\end{cases}\qquad a_\gamma=(1-\sqrt\gamma)^2,\quad b_\gamma=(1+\sqrt\gamma)^2,$$
and an atom of mass $(1-1/\gamma)_+$ at zero.

## Statement references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 52–58 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Theorem 2.1 and §2.1.3, printed pp. 29–38 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** The hypotheses and notation of the Statement, including AC, the common probability space, and the one entry law shared by all matrices.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] $S_n=X_n^{\mathsf T}X_n/n$ and $\mu_n=p_n^{-1}\sum_{j=1}^{p_n}\delta_{\lambda_j(S_n)}$; its eigenvalues are real and nonnegative ([[def-sample-covariance-empirical-spectral-distribution]], [[lem-sample-covariance-empirical-law-is-a-probability-measure]]).

[F2] For a probability measure $\mu$ on $\mathbb R$, $m_\mu(z)=\int(x-z)^{-1}\,d\mu(x)$ for $\operatorname{Im}z>0$ ([[def-stieltjes-transform-of-a-real-probability-measure]]).

[F3] For iid real coordinates of mean zero, variance one and fourth moment $\mu_4$, an independent complex symmetric matrix $A$ satisfies $\mathbb E|\xi^{\mathsf T}A\xi-\operatorname{tr}A|^2\le\max\{\mu_4-1,2\}\mathbb E\|A\|_F^2$ ([[lem-fourth-moment-quadratic-form-resolvent-bound]]).

[F4] If $B$ is real symmetric nonnegative, then $R=(B-zI)^{-1}$ and $R_x=(B+xx^{\mathsf T}-zI)^{-1}$ satisfy $R_x=R-Rxx^{\mathsf T}R/(1+x^{\mathsf T}Rx)$, and $|\operatorname{tr}R_x-\operatorname{tr}R|\le1/\eta$ for $z=u+i\eta$, $\eta>0$ ([[lem-rank-one-resolvent-update-and-trace-bound]]).

[F5] For $n$ independent rank-one summands in positive integer dimension $d_n$ with $d_n/n\to c>0$, the normalized resolvent trace concentrates almost surely about its expectation, with the stated exponential tail ([[lem-adapted-resolvent-trace-concentration]]).

[F6] Under countable choice, the transform $m_\gamma$ of the Marchenko–Pastur probability law satisfies $1+zm=m/(1+\gamma m)$ and $\operatorname{Im}(1-\gamma-z-\gamma zm)\le-\operatorname{Im}z$ ([[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F7] Under countable choice, Stieltjes transforms determine Borel probability measures on $\mathbb R$ ([[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F8] A tight sequence of Borel probability measures on $\mathbb R$ has a weakly convergent subsequence; the used extraction theorem assumes AC ([[cor-tightness-extracts-a-weakly-convergent-subsequence]]).

[F9] Chebyshev's inequality bounds a deviation probability by variance divided by squared deviation ([[thm-chebyshev-inequality]]).

[F10] If event probabilities have finite sum, almost surely only finitely many of those events occur ([[cor-first-borel-cantelli-lemma-for-events]]).

[F11] Weak convergence of probability measures is convergence of integrals against every bounded continuous function ([[def-weak-convergence-of-borel-probability-measures]]).

[F12] Within each $X_n$, the entries are mutually independent and identically distributed, so its rows are independent and each row has iid coordinates; the common entry law is the same for every $n$ by the Statement ([[def-identically-distributed-and-iid-random-variables]]).

[F13] Almost-sure convergence means convergence on an event of probability one ([[def-almost-sure-convergence-of-random-variables]]).

## Proof

**Given:** The independent-entry matrices on the common probability space, their single common entry law and moment assumptions, $p_n/n\to\gamma$, and AC.

1.1 Fix $z=u+i\eta$ with $\eta>0$. Write the transpose of row $i$ of $X_n$ as $y_i\in\mathbb R^{p_n}$ and set $Q=(S_n-zI)^{-1}$, $m_n=p_n^{-1}\operatorname{tr}Q=m_{\mu_n}(z)$ by [F1] and [F2]. For each $i$, let $S_i=S_n-y_iy_i^{\mathsf T}/n$, $Q_i=(S_i-zI)^{-1}$ and $\beta_i=n^{-1}y_i^{\mathsf T}Q_i y_i$. The matrices $S_n,S_i$ are nonnegative symmetric, so their resolvents exist; diagonalizing $S_i$ expresses $\beta_i$ as a sum of nonnegative weights times $(\lambda-z)^{-1}$ with $\lambda\ge0$. Thus $\operatorname{Im}\beta_i\ge0$ and $\operatorname{Im}(z\beta_i)\ge0$, since $\operatorname{Im}[z/(\lambda-z)]=\eta\lambda/|\lambda-z|^2\ge0$. Consequently $\operatorname{Im}[z(1+\beta_i)]\ge\eta$, so $|1+\beta_i|\ge\eta/|z|>0$. Applying [F4] with $x=y_i/\sqrt n$ gives $Q=Q_i-Q_i y_i y_i^{\mathsf T}Q_i/[n(1+\beta_i)]$, so $n^{-1}y_i^{\mathsf T}Qy_i=\beta_i/(1+\beta_i)$. Since $S_nQ=I+zQ$, taking normalized traces yields $$1+z m_n=\frac1{p_n}\sum_{i=1}^n\frac{\beta_i}{1+\beta_i}.$$ [given, F1, F2, F4, algebra]

2.1 Put $\gamma_n=p_n/n$, $v_n=\gamma_n m_n=n^{-1}\operatorname{tr}Q$, and $\mu_4=\mathbb E\xi^4$ for the common entry law. Both $\beta_i$ and $v_n$ belong to the cone $\mathcal C_z=\{w:\operatorname{Im}w\ge0,\ \operatorname{Im}(zw)\ge0\}$: for $v_n$ use the same eigenvalue calculation on $Q$. For every $w\in\mathcal C_z$, $\operatorname{Im}[z(1+w)]\ge\eta$, so $|1+w|^{-1}\le|z|/\eta$. Conditional on $Q_i$, row $y_i$ is independent of it by [F12]. Applying [F3] conditionally and using $\|Q_i\|_F^2\le p_n/\eta^2$ gives $$\mathbb E\left|\beta_i-\frac1n\operatorname{tr}Q_i\right|\le\frac{\sqrt{C p_n}}{n\eta},\qquad C=\max\{\mu_4-1,2\}.$$ By [F4], $|\operatorname{tr}Q_i-\operatorname{tr}Q|\le1/\eta$, hence $\mathbb E|\beta_i-v_n|\le(\sqrt{Cp_n}+1)/(n\eta)$. For $f(w)=w/(1+w)$ and $w,v\in\mathcal C_z$, $|f(w)-f(v)|=|w-v|/(|1+w||1+v|)\le K_z|w-v|$, where $K_z=(|z|/\eta)^2$. Therefore [step 1.1] implies $$\mathbb E\left|1+zm_n-\frac{m_n}{1+\gamma_n m_n}\right|\le K_z\frac{\sqrt{Cp_n}+1}{p_n\eta}\longrightarrow0.$$ [given, F3, F4, F12, step 1.1, algebra]

3.1 Apply [F5] to the independent vectors $y_i/\sqrt n$, whose rank-one sum is $S_n$. For the fixed $z$, $m_n-a_n\to0$ almost surely, where $a_n=\mathbb E m_n$. Also $\mathbb E|m_n-a_n|\to0$: for every $\varepsilon>0$, $\mathbb E|m_n-a_n|\le\varepsilon+(2/\eta)\Pr(|m_n-a_n|>\varepsilon)$, and the tail bound in [F5] makes the second term tend to zero. Define $g_n(w)=1+zw-w/(1+\gamma_nw)$. The cone $\mathcal C_z$ is closed under nonnegative scaling and expectations, so it contains $m_n,a_n,\gamma_nm_n$ and $\gamma_na_n$. For $w,v\in\mathcal C_z$, the denominator estimate of step 2.1 applied to $\gamma_nw,\gamma_nv$ gives $|g_n(w)-g_n(v)|\le(|z|+K_z)|w-v|$. Taking expectations in the estimate of step 2.1 gives $g_n(a_n)\to0$. [F5, F13, step 2.1, algebra]

4.1 The sequence $(a_n)$ is bounded by $1/\eta$. Moreover $\operatorname{Im}(z m_n)=p_n^{-1}\sum_j\eta\lambda_j(S_n)/|\lambda_j(S_n)-z|^2\ge0$, so $\operatorname{Im}(1-\gamma_n-z-\gamma_n z a_n)\le-\eta$. The same closed-cone bound gives $|1+\gamma_na_n|\ge\eta/|z|$. Every convergent subsequence of $a_n$ therefore has a limit $a$, with $|1+\gamma a|\ge\eta/|z|$, satisfying $1+za=a/(1+\gamma a)$ and $\operatorname{Im}(1-\gamma-z-\gamma za)\le-\eta$. The two roots of the associated quadratic have corresponding values $D_j=1-\gamma-z-\gamma z a_j$ whose sum is $1-\gamma-z$, with imaginary part $-\eta$. Thus at most one root can have $\operatorname{Im}D_j\le-\eta$. By [A2] and [F6], that root is $m_\gamma(z)$. All subsequential limits are consequently $m_\gamma(z)$, so $a_n\to m_\gamma(z)$ and step 3.1 gives $m_n(z)\to m_\gamma(z)$ almost surely. [A2, F1, F6, step 3.1, algebra]

5.1 Perform steps 1.1–4.1 for each $z$ in the countable dense set $\{u+i\eta:u,\eta\in\mathbb Q,\eta>0\}$ and intersect their probability-one events. Also let $T_n=(np_n)^{-1}\sum_{i,j}X_{n,ij}^2$. Its mean is one and its variance is $(\mu_4-1)/(np_n)$. Since $p_n/n\to\gamma>0$, [F9] gives a summable bound $\Pr(|T_n-1|>\varepsilon)\le(\mu_4-1)/(\varepsilon^2np_n)$ for every $\varepsilon>0$; [F10] over positive rational $\varepsilon$ yields $T_n\to1$ almost surely. [given, F9, F10, F12, F13, step 1.1, step 4.1, algebra]

6.1 On this probability-one event, $\int x\,d\mu_n(x)=T_n$ and $\mu_n$ is supported on $[0,\infty)$ by [F1]. For every $R>0$, $\mu_n((R,\infty))\le T_n/R$, so the sequence is tight. By [A1] and [F8], every subsequence has a further weakly convergent subsequence with limit $\nu$. Along it, [F11] applied to $x\mapsto(x-z)^{-1}$ shows $m_\nu(z)=m_\gamma(z)$ on the dense set from step 5.1. The transforms are continuous because $|m_\nu(z)-m_\nu(w)|\le|z-w|/(\operatorname{Im}z\operatorname{Im}w)$ for $z,w\in\mathbb C^+$; equality therefore extends to all $z\in\mathbb C^+$. [F1, F8, F11, step 5.1, A1, algebra]

7.1 By [A2] and [F7], every weak subsequential limit $\nu$ in step 6.1 equals $\mu_\gamma$. If $\mu_n$ did not converge weakly to $\mu_\gamma$, some bounded continuous test function and a subsequence would have integrals separated from its $\mu_\gamma$ integral by a fixed positive amount; tightness would give a further weakly convergent subsequence, contradicting its limit $\mu_\gamma$. Therefore $\mu_n\Rightarrow\mu_\gamma$ almost surely. [A2, F7, F8, F11, step 6.1, algebra] ∎

---
id: lem-bounded-complex-resolvent-quadratic-form-concentration
kind: lemma
title: "Adapted concentration of bounded complex resolvent quadratic forms"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "J. W. Silverstein, Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices"
      url: "https://jack.math.ncsu.edu/strong.pdf"
---

## Statement

On a common probability space, for each positive integer $n$, let $X_n\in\mathbb C^{n\times N_n}$ have entries from one common iid law with mean zero, unit second absolute moment, and absolute value at most $K$, where $K$ is independent of $n$. Let $T_n\in\mathbb C^{n\times n}$ be deterministic Hermitian positive semidefinite with $\|T_n\|_{\mathrm{op}}\le M$, and let $x_n\in\mathbb C^n$ be deterministic with $\|x_n\|_2=1$. Assume $N_n/n\to\kappa\in(0,\infty)$. For fixed $z=u+i\eta$ with $\eta>0$, set
$$A_n:=\frac1{N_n}T_n^{1/2}X_nX_n^*T_n^{1/2},\qquad R_n(z):=(A_n-zI)^{-1}.$$
Then $x_n^*R_n(z)x_n-\mathbb E[x_n^*R_n(z)x_n]\to0$ almost surely. Moreover, for every $t>0$ there is a constant $C=C(K,M,z,\kappa)$ such that, for all sufficiently large $n$,
$$\mathbb P\!\left\{|x_n^*R_n(z)x_n-\mathbb E[x_n^*R_n(z)x_n]|>t\right\}\le\frac{C}{t^4N_n^2}.$$

## Statement references

Bai, Miao, and Pan, §2, equations (2.1)–(2.3), printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Silverstein, Theorem 1.1 proof, PDF pp. 3–8 ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

## Facts & Assumptions

**Given:** The common probability space, bounded iid entries, deterministic PSD $T_n$, unit vectors $x_n$, and fixed $z\in\mathbb C^+$ in the Statement.

[F1] The entries are mutually independent with the stated common law ([[def-identically-distributed-and-iid-random-variables]]).

[F2] Independent columns have their product joint law ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] Fubini permits the finite product-integral conditional averages used for the column filtration ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] The Hermitian rank-one resolvent update and nonzero denominator are given by [[lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound]].

[F5] A summable sequence of probabilities has probability zero of occurring infinitely often ([[cor-first-borel-cantelli-lemma-for-events]]).

[F6] A finite-dimensional Hermitian PSD matrix has nonnegative real eigenvalues and a unitary eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F7] For a nonnegative random variable $Y$ and $a>0$, $\mathbb P(Y>a)\le\mathbb E[Y]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F8] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 We first prove a linear-form bound. If $\zeta_i$ are independent centered complex variables with $|\zeta_i|\le K$ and $a_i\in\mathbb C$, expansion of $\mathbb E|\sum_i a_i\zeta_i|^8$ has zero contribution whenever an index occurs exactly once. Each remaining equality pattern partitions the eight positions into blocks of sizes at least two. For a fixed pattern, the absolute sum is at most $K^8\prod_B\sum_i|a_i|^{|B|}\le K^8(\sum_i|a_i|^2)^4$, since $\sum_i|a_i|^r\le(\sum_i|a_i|^2)^{r/2}$ for $r\ge2$. There are finitely many such patterns, so $\mathbb E|\sum_i a_i\zeta_i|^8\le C_K(\sum_i|a_i|^2)^4$. [given, F1, algebra]

2.1 Write $s_{n,j}=T_n^{1/2}X_{n,\cdot j}/\sqrt{N_n}$, $A_{n,j}=A_n-s_{n,j}s_{n,j}^*$, and $R_{n,j}=(A_{n,j}-zI)^{-1}$. By [F4], $$U_{n,j}:=x_n^*(R_n-R_{n,j})x_n=-\frac{(x_n^*R_{n,j}s_{n,j})(s_{n,j}^*R_{n,j}x_n)}{1+s_{n,j}^*R_{n,j}s_{n,j}}.$$ Diagonalizing $A_{n,j}$ as in [F6] gives $\operatorname{Im}(z(1+s_{n,j}^*R_{n,j}s_{n,j}))\ge\eta$, hence the denominator has modulus at least $\eta/|z|$. Conditional on all columns except $j$, each factor in the numerator is a linear form in the bounded independent entries of column $j$, with coefficient-vector norm at most $\sqrt M/(\eta\sqrt{N_n})$. Step 1.1 and Cauchy–Schwarz therefore give $\mathbb E|U_{n,j}|^4\le C N_n^{-4}$. [given, F2, F4, F6, F8, step 1.1, algebra]

3.1 Let $\mathcal F_{n,j}=\sigma(X_{n,\cdot1},\ldots,X_{n,\cdot j})$, and let $E_{n,j}$ be the finite-product average over the remaining columns. By [F2]–[F3], $$x_n^*R_nx_n-\mathbb E[x_n^*R_nx_n]=\sum_{j=1}^{N_n}(E_{n,j}-E_{n,j-1})x_n^*R_nx_n.$$ The leave-one-column resolvent $R_{n,j}$ depends on all columns except $j$, so its product-integral averages under $E_{n,j}$ and $E_{n,j-1}$ agree. Therefore the $j$th summand is $D_{n,j}:=(E_{n,j}-E_{n,j-1})U_{n,j}$. Integrating over column $j$ shows $E_{n,j-1}D_{n,j}=0$, so these are martingale differences. Conditional Jensen gives $\mathbb E|D_{n,j}|^4\le16\mathbb E|U_{n,j}|^4\le C N_n^{-4}$. [given, F2, F3, step 2.1, algebra]

4.1 Put $S_k=\sum_{j\le k}D_{n,j}$, $a_k=\mathbb E|S_k|^4$, $v_k:=E_{n,k-1}|D_{n,k}|^2$, and $w_k:=E_{n,k-1}|D_{n,k}|^4$. Expanding $|S_{k-1}+D_{n,k}|^4$, the term linear in $D_{n,k}$ vanishes after conditional integration; $|\operatorname{Re}(\overline S_{k-1}D_{n,k})|\le|S_{k-1}||D_{n,k}|$ and $4|S_{k-1}||D_{n,k}|^3\le2|S_{k-1}|^2|D_{n,k}|^2+2|D_{n,k}|^4$ give $$a_k\le a_{k-1}+8\mathbb E(|S_{k-1}|^2v_k)+3\mathbb E w_k.$$ By Cauchy–Schwarz and conditional Jensen, $\mathbb E(|S_{k-1}|^2v_k)\le\sqrt{a_{k-1}}\sqrt{\mathbb E v_k^2}\le\sqrt{a_{k-1}}\sqrt{\mathbb E w_k}\le C\sqrt{a_{k-1}}/N_n^2$, while $\mathbb E w_k\le C/N_n^4$. Induction gives $a_k\le C_0k^2/N_n^4$ for a fixed sufficiently large $C_0$ and $k\le N_n$, hence $\mathbb E|S_{N_n}|^4\le C_0/N_n^2$. [step 3.1, algebra]

5.1 Apply [F7] to $Y=|S_{N_n}|^4$ and $a=t^4$ to obtain the stated $C/(t^4N_n^2)$ tail bound. Since $N_n/n\to\kappa>0$, the probabilities are summable in $n$. All deviations lie on the common probability space in the Statement, so [F5] proves almost-sure convergence for this fixed $z$. [given, F5, F7, step 4.1, algebra] ∎

## Source notes

Bai, Miao, and Pan, §2, equations (2.1)–(2.3), printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

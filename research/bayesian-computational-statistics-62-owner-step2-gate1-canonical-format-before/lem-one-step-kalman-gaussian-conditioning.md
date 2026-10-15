---
id: lem-one-step-kalman-gaussian-conditioning
kind: lemma
title: One-step Gaussian prediction and conditioning
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-multivariate-normal-conditional-law
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
proof_strategy: direct
axiom_use: Assume AC through the positive-semidefinite multivariate-normal laws and the Gaussian conditioning theorem. No choice is used beyond those suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 4, §4.3 and Appendix A.1"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4, §4.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $U\in\mathbb R^d$, $q\in\mathbb R^n$, and
$r\in\mathbb R^p$ be mutually independent Gaussian vectors with
$$U\sim N_d(m,P),\qquad q\sim N_n(0,Q),\qquad r\sim N_p(0,R),$$
where $P,Q,R$ are symmetric positive semidefinite. Let
$F\in\mathbb R^{n\times d}$ and $H\in\mathbb R^{p\times n}$, and set
$$X=FU+q,\qquad Y=HX+r,\qquad P^-:=FPF^T+Q,\qquad S:=HP^-H^T+R.$$
If $S$ is positive definite, put $K:=P^-H^TS^{-1}$. Then $(X,Y)$ is jointly
Gaussian with mean $(Fm,HFm)$ and covariance
$$\begin{pmatrix}P^-&P^-H^T\\HP^-&S\end{pmatrix},$$
and for every $y\in\mathbb R^p$ an everywhere-defined conditional law is
$$\mathcal L(X\mid Y=y)=N_n\!\left(Fm+K(y-HFm),\,P^--KSK^T\right).$$
The conditional covariance is positive semidefinite even if $P$, $Q$, or
$R$ is singular. It also equals the Joseph expression
$$ (I-KH)P^-(I-KH)^T+KRK^T.$$
No inverse of a state, process-noise, or measurement-noise covariance is
used.

## Facts & Assumptions

**Given:** AC, mutually independent Gaussian vectors and the matrices in the
Statement, with $P,Q,R$ positive semidefinite and $S$ positive definite.

[A1] AC is used by the multivariate-normal and conditional-Gaussian suppliers.
[[def-axiom-of-choice]].

[F1] A multivariate normal law is defined for every symmetric
positive-semidefinite covariance, including singular ones, and its linear
projections have the corresponding scalar normal laws.
[[def-multivariate-normal-law]].

[F2] A finite stack of mutually independent Gaussian vectors is jointly
Gaussian with block-diagonal covariance; no block must be invertible.
[[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]].

[F3] Every finite-dimensional positive-semidefinite operator has a unique
positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]].

[F4] For a jointly Gaussian pair with positive-semidefinite block covariance
and positive-definite observed block $B$, the everywhere-defined conditional
law has mean $a+CB^{-1}(y-b)$ and covariance $A-CB^{-1}C^T$, which is
positive semidefinite; the state covariance may be singular.
[[thm-multivariate-normal-conditional-law]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], the stack $(U,q,r)$ is jointly Gaussian with mean $(m,0,0)$ and covariance $\operatorname{diag}(P,Q,R)$. For any $a\in\mathbb R^n$ and $b\in\mathbb R^p$, the scalar $a^TX+b^TY$ is a linear projection of this stack, so it is normal by [F1]; thus $(X,Y)$ is jointly Gaussian. Since $q$ is independent of $U$ and centered, $\operatorname{Cov}(X)=F\operatorname{Cov}(U)F^T+\operatorname{Cov}(q)=FPF^T+Q=P^-$. Since $Y=HX+r$ and $r$ is independent of $X$ and centered, $\mathbb E X=Fm$, $\mathbb E Y=HFm$, $\operatorname{Cov}(X,Y)=P^-H^T$, and $\operatorname{Cov}(Y)=HP^-H^T+R=S$. Hence the block covariance is the one displayed in the Statement and is positive semidefinite as a covariance matrix. Also $P^-\succeq0$, since $u^TP^-u=(F^Tu)^TP(F^Tu)+u^TQu\ge0$ for every $u$. [A1, F1, F2, F3, given, algebra]

2.1 Apply [F4] with $A=P^-$, $C=P^-H^T$, and $B=S$. The observed block is positive definite by hypothesis, and the joint block is positive semidefinite by step 1.1. The conditional mean is $Fm+P^-H^TS^{-1}(y-HFm)=Fm+K(y-HFm)$. Its covariance is $P^--P^-H^TS^{-1}HP^-=P^--KSK^T$, and [F4] makes it positive semidefinite and gives a conditional-law version for every $y$. [F4, given, step 1.1, algebra]

3.1 Since $S=HP^-H^T+R$ and $K=P^-H^TS^{-1}$, symmetry of $P^-$ and $S$ gives $KHP^-=P^-H^TK^T=KSK^T$. Expanding the Joseph expression yields $P^- -KHP^- -P^-H^TK^T+K(HP^-H^T+R)K^T=P^--KSK^T$. It is positive semidefinite because [F4] gives that covariance this property; independently, the Joseph expression is a sum of positive-semidefinite matrices. This proves the identity without inverting $P$, $Q$, or $R$. [F1, F4, step 1.1, step 2.1, algebra] ∎

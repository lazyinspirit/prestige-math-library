---
id: thm-ip-finite-linear-gaussian-posterior
kind: theorem
title: "Finite linear Gaussian inverse posterior with singular prior covariance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-gaussian-process
  - def-independent-random-elements
  - lem-measurable-functions-preserve-independence
  - thm-finite-gaussian-process-posterior-and-predictive-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-ip-misfit-evidence-and-posterior-law
  - thm-ip-function-space-posterior-propriety
  - lem-ip-singular-gaussian-support-and-pseudoinverse
proof_strategy: direct
axiom_use: "AC is inherited from the multivariate-normal law, Gaussian-process, and finite Gaussian conditioning interfaces. The IP-16 finite-fiber propriety result and the displayed finite-dimensional density/algebra calculation require no stronger choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), Theorem 13.1 (Bayes) and equations (13.1)–(13.4) for the positive-definite isotropic prior/noise case; the singular and general-covariance extension is proved locally."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.1, Theorem 3.1 for the conditional-law reweighting formula; §3.2, Theorem 3.4 and proof for the potential-weighted posterior; §4.1 for evidence-propriety context. The local proof uses the current IP-16 support-point argument and checks the finite Gaussian case directly."
---

## Statement

Assume AC. Let $n,m\ge1$, $m_0\in\mathbb R^n$, and let
$C_0\in\mathbb R^{n\times n}$ be symmetric with $v^TC_0v\ge0$ for every
$v\in\mathbb R^n$. Let
$A\in\mathbb R^{m\times n}$ and let
$\Gamma\in\mathbb R^{m\times m}$ be symmetric positive definite, meaning
$u^T\Gamma u>0$ for every nonzero $u\in\mathbb R^m$. Suppose
$X$ and $\eta$ are independent random vectors with laws
$X\sim N_n(m_0,C_0)$ and $\eta\sim N_m(0,\Gamma)$, and set
$Y=AX+\eta$. Define $\mu_0(E)=\mathbb P(X\in E)$ for Borel
$E\subseteq\mathbb R^n$, and set
$S=AC_0A^T+\Gamma$. Then $S$ is positive definite. For each
$y\in\mathbb R^m$, define
$$ \Phi_y(x)=\tfrac12(y-Ax)^T\Gamma^{-1}(y-Ax),\qquad Z(y)=\int_{\mathbb R^n}e^{-\Phi_y(x)}\,\mu_0(dx). $$
For every $y$, $0<Z(y)<\infty$, so the normalized potential update
$$ \Pi^y(E)=\frac{\int_E e^{-\Phi_y(x)}\,\mu_0(dx)}{Z(y)} \quad(E\in\mathcal B(\mathbb R^n)) $$
is a probability measure and equals the conditional-law version obtained by
conditioning the observation model at $y$. Its Gaussian formula, defined for
every $y$, is
$$ N_n\!\left( m_0+C_0A^TS^{-1}(y-Am_0),\ C_0-C_0A^TS^{-1}AC_0 \right). $$
Let $P_Y(B)=\mathbb P(Y\in B)$ for Borel $B\subseteq\mathbb R^m$.
Conditional-law versions are unique only $P_Y$-almost surely. The displayed
mean and covariance formulas invert only $S$, not $C_0$; $C_0$ and the
posterior covariance may be singular. The prior support is
$m_0+\operatorname{Ran}(C_0)$.

## Statement references

[[def-ip-misfit-evidence-and-posterior-law|A positive finite evidence defines the normalized potential update, and the dominated version convention identifies it as a conditional law.]]

[[thm-finite-gaussian-process-posterior-and-predictive-laws|Finite Gaussian conditioning permits singular prior and predictive covariance blocks when the observed covariance is positive definite.]]

[[lem-ip-singular-gaussian-support-and-pseudoinverse|For a singular finite Gaussian prior, the affine support is the mean plus the covariance range.]]

## Facts & Assumptions

**Given:** AC; a finite-dimensional Gaussian prior $N_n(m_0,C_0)$ with $C_0\succeq0$; independent Gaussian observation noise $N_m(0,\Gamma)$ with $\Gamma\succ0$; and the linear observation map $A$.

[A1] AC is assumed by the repository's multivariate-normal, Gaussian-process, and finite Gaussian conditioning interfaces. [[def-axiom-of-choice]]

[F1] A finite Gaussian law is characterized by its Gaussian scalar projections, permits singular covariance, and has the covariance-square-root representation. [[def-multivariate-normal-law]]

[F2] The prior is supported on $m_0+\operatorname{Ran}(C_0)$ and admits coordinates $C_0=U\Lambda U^T$ with a standard Gaussian vector on that range. [[lem-ip-singular-gaussian-support-and-pseudoinverse]]

[F3] A real process is Gaussian when all its finite linear combinations are normal. [[def-gaussian-process]]

[F4] Independence of random elements is independence of their generated sigma-algebras. [[def-independent-random-elements]]

[F5] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F6] For a finite Gaussian process with independent Gaussian observation noise, if the observed covariance is positive definite, the conditional law of the test vector is the Gaussian with mean $m_*+K_{*X}(K_{XX}+R)^{-1}(y-m_X)$ and covariance $K_{**}-K_{*X}(K_{XX}+R)^{-1}K_{X*}$, defined for every $y$ even when the prior or conditional covariance is singular. [[thm-finite-gaussian-process-posterior-and-predictive-laws]]

[F7] A positive-definite Gaussian observation-noise covariance has the Lebesgue density proportional to $\exp(-\tfrac12 z^T\Gamma^{-1}z)$, which is strictly positive everywhere. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F8] The inverse-problem potential update is the prior reweighted by $e^{-\Phi_y}$ and normalized by its evidence when that evidence is positive and finite. [[def-ip-misfit-evidence-and-posterior-law]]

[F9] A finite continuous potential with lower envelope $0$ under a proper prior on a separable Banach space has positive finite evidence at every datum. [[thm-ip-function-space-posterior-propriety]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 For $v\in\mathbb R^m\setminus\{0\}$, $v^TSv=(A^Tv)^TC_0(A^Tv)+v^T\Gamma v>0$, since the first term is nonnegative and the second is positive. Thus $S\succ0$ and $S^{-1}$ exists. [given, algebra]

1.2 Let $T$ be the finite index set with state indices $s_1,\ldots,s_n$ and observation indices $o_1,\ldots,o_m$. Define $f_{s_i}=X_i$ and $f_{o_j}=(AX)_j$. Every finite linear combination of these coordinates is a linear projection of $X$, so it is normal by [F1] and $f$ is a Gaussian process by [F3]. Its covariance blocks are $K_{SS}=C_0$, $K_{SO}=C_0A^T$, and $K_{OO}=AC_0A^T$. [A1, F1, F3, given, construct, algebra]

1.3 For each fixed $y$, $\Phi_y$ is finite, continuous, and nonnegative on $\mathbb R^n$, and $(x,y)\mapsto\Phi_y(x)$ is jointly continuous. The prior $\mu_0$ is a probability on the separable Banach space $\mathbb R^n$, and the envelope $M_1(r)=0$ satisfies $\int e^{M_1(\|x\|_2)}\,\mu_0(dx)=1$. Therefore [F9] gives $0<Z(y)<\infty$ for every $y$, and [F8] defines $\Pi^y$. The likelihood density from [F7] is a positive constant independent of $x$ times $e^{-\Phi_y(x)}$; its constant cancels in the normalized update. [F7, F8, F9, given, algebra]

2.1 The vector $f$ is a measurable function of $X$, so [F4] and [F5] make $\eta$ independent of $f$. The observed covariance is $K_{OO}+\Gamma=S\succ0$ by step 1.1. Applying [F6] with test list $S$ and observation list $O$ gives the displayed Gaussian conditional-law version for every $y$. [A1, F4, F5, F6, given, step 1.1, step 1.2, algebra]

2.2 Suppose $r=\operatorname{rank}(C_0)>0$. By [F2], write $C_0=U\Lambda U^T$ and represent $X$ as $m_0+L\xi$, where $L=U\Lambda^{1/2}$ and $\xi\sim N_r(0,I_r)$. Put $B=AL$ and $d=y-Am_0$. By the pushforward formula for $\mu_0$ and the likelihood in [F7], the density of the normalized update in these coordinates is proportional, for every $y$, to $$ \exp\!\left(-\tfrac12\left[\xi^T\xi+(d-B\xi)^T\Gamma^{-1}(d-B\xi)\right]\right). $$ This is a pointwise fixed-data calculation; it does not replace the all-data version convention in step 1.3. [F2, F7, F8, step 1.3, given]

3.1 Set $Q=I_r+B^T\Gamma^{-1}B$ and $h=B^T\Gamma^{-1}d$. Then $Q\succ0$, and expansion gives $$ \xi^T\xi+(d-B\xi)^T\Gamma^{-1}(d-B\xi) =(\xi-Q^{-1}h)^TQ(\xi-Q^{-1}h)+d^T\Gamma^{-1}d-h^TQ^{-1}h. $$ Thus the update in step 2.2 is the Gaussian law of $\xi$ with mean $Q^{-1}h$ and covariance $Q^{-1}$, so the update of $X=m_0+L\xi$ has mean $m_0+LQ^{-1}B^T\Gamma^{-1}d$ and covariance $LQ^{-1}L^T$. [F2, F7, step 2.2, algebra]

4.1 Since $S=\Gamma+BB^T$, multiplication gives $QB^T=B^T\Gamma^{-1}S$, hence $Q^{-1}B^T\Gamma^{-1}=B^TS^{-1}$. Also $Q(I_r-B^TS^{-1}B)=Q-QB^TS^{-1}B=I_r$, so $Q^{-1}=I_r-B^TS^{-1}B$. Substituting these identities into step 3.1 yields $$ m_0+LQ^{-1}B^T\Gamma^{-1}d=m_0+C_0A^TS^{-1}d $$ and $$ LQ^{-1}L^T=C_0-C_0A^TS^{-1}AC_0. $$ These are exactly the mean and covariance in the Statement. [step 1.1, step 3.1, algebra]

5.1 If $r=0$, [F2] gives $C_0=0$ and $X=m_0$ almost surely. Reweighting a point mass by the positive likelihood leaves that point mass, while the displayed formulas reduce to mean $m_0$ and covariance $0$. This also matches the conditional version from step 2.1 and proves the rank-zero boundary. Thus the fixed-data update and the stated all-data conditional version have the displayed law in every rank case. [F2, F7, F8, step 2.1, step 1.3, algebra] ∎

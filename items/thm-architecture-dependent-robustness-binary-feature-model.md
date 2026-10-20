---
id: thm-architecture-dependent-robustness-binary-feature-model
kind: theorem
title: Architecture-dependent robustness in the Bernoulli model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 2
deps:
  - def-binary-feature-bernoulli-model
  - def-adversarial-threat-set-and-robust-risk
  - alg-coordinate-threshold-preprocessing
  - lem-finite-independent-sign-sum-tail
  - lem-bernoulli-coordinate-posterior-odds-bound
  - def-independent-random-elements
  - cor-markov-inequality-for-random-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
justified_by: []
axiom_use: "Choice-free: both Bernoulli branches use finite prior/sample spaces, finite sums, the explicit sign-sum proof, and deterministic thresholding."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, Theorem 10, Corollary 28, Theorem 31, Appendix B, PDF pp. 7, 31–37"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Zico Kolter and Aleksander Madry, Adversarial Robustness: Theory and Practice, NeurIPS 2018 tutorial notes, Chapter 2"
      url: "https://adversarial-ml-tutorial.org/linear_models/"
---

## Statement

For $w\in\mathbb R^d$, let $f_w(x)=+1$ when $\langle w,x\rangle\ge0$ and $f_w(x)=-1$ otherwise. In the following lower-bound branch, let $d\ge1$, $0<\tau\le1/4$, $0<\gamma<1/2$, and $0\le\epsilon<3\tau$. Draw $\Theta$ uniformly from $\{-1,+1\}^d$ and, conditional on $\Theta$, draw $n\ge0$ independent training observations $S$ from the binary-feature Bernoulli model with parameters $\Theta,\tau$. Let $g_n$ be any function from the finite sample space to $\mathbb R^d$, set $w=g_n(S)$, and use $f_w$. If
$$n\le\frac{\epsilon^2\gamma^2}{5000\tau^4\log(4d/\gamma)},$$
then the expected robust risk for the closed threat $\Delta_\epsilon(x)=\{x+\delta:\|\delta\|_\infty\le\epsilon\}$ of $f_w$, averaged over $\Theta,S$, and a fresh test pair from $P_{\Theta,\tau}$, is at least $1/2-\gamma$.

In the separate thresholded upper-bound branch, let $d\ge1$, $0<\tau\le1/2$, $0<\beta<1$, and let $\theta\in\{-1,+1\}^d$ satisfy $\tau\ge(\log(1/\beta)/(2d))^{1/4}$. Draw one training pair $(X_0,Y_0)$ from $P_{\theta,\tau}$, set $W=Y_0X_0$, and define $T:\mathbb R^d\to\{-1,+1\}^d$ by $T(x)_j=+1$ when $x_j\ge0$ and $T(x)_j=-1$ otherwise. Then for every $0\le\epsilon<1$, with training-sample probability at least $1-e^{-\tau^2d/2}$, the robust risk for the closed threat $\Delta_\epsilon(x)=\{x+\delta:\|\delta\|_\infty\le\epsilon\}$ of $f_W\circ T$ under $P_{\theta,\tau}$ is at most $\beta$.

## Statement references

[Schmidt et al., Theorem 10, Corollary 28 and Theorem 31, main text and Appendix B, PDF pp. 7, 31–37](https://arxiv.org/pdf/1804.11285v2).

[Kolter–Madry, Chapter 2, linear classification and $\ell_\infty$ geometry](https://adversarial-ml-tutorial.org/linear_models/).

## Facts & Assumptions

**Given:** The hypotheses in the Statement; each branch is proved with its own parameter and probability quantifiers.

[F1] In the Bernoulli model, conditional on $\Theta=\theta$, the signs $Y_iX_{ij}\theta_j$ are independent over observations and coordinates and have mean $2\tau$. [[def-binary-feature-bernoulli-model]], [[def-independent-random-elements]].

[F2] For the uniform hypercube prior, conditional on a sample $S$ the parameter coordinates are independent and their log odds are $L_j(S)=\log((1+2\tau)/(1-2\tau))\sum_iY_iX_{ij}$. If $n\le\tau^{-2}$, then with probability at least $1-\delta$, all $|L_j(S)|\le15\tau\sqrt{2n\log(2d/\delta)}$. [[lem-bernoulli-coordinate-posterior-odds-bound]].

[F3] A finite independent sign sum with coefficients $c_j$ satisfies $\mathbb P(\sum_jc_j(\xi_j-\mathbb E\xi_j)\le-t)\le e^{-t^2/(2\sum_jc_j^2)}$ for $t>0$. [[lem-finite-independent-sign-sum-tail]].

[F4] If $A\ge0$ and $b>0$, then $\mathbb P(A>b)\le\mathbb E[A]/b$. [[cor-markov-inequality-for-random-variables]].

[F5] The natural logarithm is the inverse of $\exp$, so $\exp(\log r)=r$ for $r>0$. It is increasing and $\log(x/y)=\log x-\log y$; $\log b-\log a=\int_a^b du/u$ for $0<a\le b$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]].

[F6] $e^x=\sum_{k\ge0}x^k/k!$ for real $x$. [[def-real-exponential-function-and-e]].

[F7] Finite integrable sums have expectation equal to the sum of expectations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F8] Under the closed $\ell_\infty$ threat, robust zero-one loss is one exactly when some admissible perturbation changes the label. [[def-adversarial-threat-set-and-robust-risk]].

[F9] The coordinate threshold rule has $T(x)_j=+1$ for $x_j\ge0$ and $-1$ for $x_j<0$. [[alg-coordinate-threshold-preprocessing]].

## Proof

1.1 For the lower-bound branch put $\Lambda=\log(4d/\gamma)$. Since $4d/\gamma>8$ and $\log8=3\log2>3/2>1$ by [F5], the sample-size hypothesis and $\epsilon<3\tau$, $\gamma<1/2$ imply $n<9/(20000\tau^2)<\tau^{-2}$. Apply [F2] with $\delta=\gamma/2$. With probability at least $1-\gamma/2$ over $(\Theta,S)$, every posterior log odds obeys $|L_j(S)|\le B:=15\tau\sqrt{2n\Lambda}$. Moreover $B\le(3/10)\epsilon\gamma/\tau<9/20<1$. [given, F2, F5, algebra]

1.2 For the thresholded upper branch, fix $\theta$ and a training pair $(X_0,Y_0)$. The signs $R_j=Y_0X_{0j}\theta_j$ are independent with mean $2\tau$ by [F1]. Apply [F3] with coefficients all one and $t=\tau d$ to obtain $\mathbb P(\langle W,\theta\rangle\le\tau d)\le e^{-\tau^2d/2}$. Outside this event, $u=W/\sqrt d$ is unit and $\langle u,\theta\rangle>\tau\sqrt d$. [given, F1, F3, algebra]

2.1 Write $m_j(S)=\mathbb E[\Theta_j\mid S]$. If $r_j=e^{L_j(S)}$ is the posterior odds, then $m_j=(r_j-1)/(r_j+1)$ by the inverse relation in [F5], so on the event in step 1.1, $|m_j|\le(e^B-1)/2$. For $0\le x\le1$, [F6] and $x^k\le x$ give $e^x-1\le x\sum_{k\ge1}1/k!=(e-1)x<2x$: indeed induction using $k+1\ge2$ gives $k!\ge2^{k-1}$ for $k\ge1$, strictly for some $k$, so $e<1+1+\sum_{k\ge2}2^{-(k-1)}=3$. Therefore $|m_j|\le B$. Set $a:=2\tau B=30\tau^2\sqrt{2n\Lambda}$. The sample-size condition yields $a\le(3/5)\epsilon\gamma<9\tau/10\le9/40<1$ and $a/\gamma\le3\epsilon/5<\epsilon$ when $\epsilon>0$. [step 1.1, F2, F5, F6, algebra]

2.2 Fix a sample $S$ in the event of step 1.1 and its learned vector $w$. Conditional on $S$, the posterior coordinates $\Theta_j$ are independent by [F2]. For a fresh pair put $Q_j=YX_j$. Conditional on $\Theta_j=t$, $Q_j=t$ with probability $1/2+\tau$ and $Q_j=-t$ with probability $1/2-\tau$, independently across coordinates and independently of the value of $Y$. Averaging over the product posterior shows that the $Q_j$ are independent of one another and of $Y$, with $\mathbb E[Q_j\mid S]=2\tau m_j(S)$. [given, F1, F2]

2.3 For a fresh pair, the signs $R_j=YX_j\theta_j$ are independent with mean $2\tau$. The signed margin of $f_W$ is $Y\langle u,X\rangle=\sum_j u_j\theta_jR_j$, whose mean is $2\tau\langle u,\theta\rangle$ and whose centered coefficient square-sum is $\sum_j(u_j\theta_j)^2=1$. If $f_W(X)\ne Y$, then this signed margin is at most zero under the stated tie rule. By [F3], its probability is at most $\exp(-2\tau^2\langle u,\theta\rangle^2)\le e^{-2\tau^4d}\le\beta$, where the last inequality is the assumed lower bound on $\tau$. [step 1.2, F1, F3, F5, algebra]

3.1 For each $j$ with $w_j\ne0$, the sign $V_j:=\operatorname{sgn}(w_j)Q_j$ has mean at most $a$ and is supported on $\{-1,+1\}$. Couple independent signs $E_j$ of mean $a$ using independent uniform variables so that $V_j\le E_j$ coordinatewise: if $p_j=\mathbb P(V_j=+1\mid S)\le(1+a)/2$, use the same uniform variable to set $V_j=+1$ below $p_j$ and $E_j=+1$ below $(1+a)/2$. Coordinates with $w_j=0$ contribute zero. Thus the margin $M:=\sum_jw_jQ_j$ is stochastically at most $\widetilde M:=\sum_j|w_j|E_j$. [step 2.1, step 2.2, algebra]

4.1 Represent each $E_j=A_j+B_j$, where $A_j$ is Bernoulli with mean $a$, $B_j=0$ if $A_j=1$, and conditional on $A_j=0$, $B_j$ is a uniform sign. Then $\mathbb E\sum_j|w_j|A_j=a\|w\|_1$. If $w\ne0$ and $a>0$, [F4] gives $\mathbb P(\sum_j|w_j|A_j>a\|w\|_1/\gamma)\le\gamma$. Conditional on the vector $(A_j)$, the sum $\sum_j|w_j|B_j$ is symmetric about zero, so it is nonpositive with probability at least $1/2$. Hence $\mathbb P(\widetilde M\le a\|w\|_1/\gamma)\ge(1-\gamma)/2$, and step 3.1 gives the same lower bound for $\mathbb P(M\le a\|w\|_1/\gamma\mid S)$. The same conclusion holds if $a=0$ by taking $A_j=0$ surely. If $w=0$, the constant classifier has robust error $1/2$ under the balanced labels. [step 3.1, F4, F7]

5.1 Suppose $\epsilon>0$ and $w\ne0$. On the event in step 4.1, step 2.1 gives $M\le(a/\gamma)\|w\|_1<\epsilon\|w\|_1$. For the fresh label $Y$, choose $\delta_j=-\epsilon Y$ if $w_j>0$, choose $\delta_j=+\epsilon Y$ if $w_j<0$, and choose $\delta_j=0$ if $w_j=0$. By [F8], $\|\delta\|_\infty\le\epsilon$ and $Y\langle w,X+\delta\rangle=M-\epsilon\|w\|_1<0$, so this perturbation misclassifies. Thus on every good training sample the posterior-averaged robust risk is at least $(1-\gamma)/2$. If $\epsilon=0$, the sample-size hypothesis forces $n=0$; after averaging the uniform prior, $X$ is uniform on the hypercube independently of $Y$, so every classifier has natural and robust error $1/2$. [step 2.1, step 4.1, F1, F8]

6.1 The good training-sample event has probability at least $1-\gamma/2$ by step 1.1. The expected robust risk is therefore at least $(1-\gamma/2)(1-\gamma)/2\ge1/2-\gamma$, since the difference is $\gamma/4+\gamma^2/4\ge0$. The zero-weight and $\epsilon=0$ cases in step 5.1 satisfy the same final bound. [step 1.1, step 5.1, algebra]

7.1 If $x\in\{-1,+1\}^d$ and $\|\delta\|_\infty\le\epsilon<1$, then $x_j+\delta_j>0$ when $x_j=+1$ and $x_j+\delta_j<0$ when $x_j=-1$. By [F9], $T(x+\delta)=x$ coordinatewise. Thus every allowed adversarial perturbation leaves $f_W(T(x+\delta))=f_W(x)$, so its robust error equals the natural error bounded in step 2.3. The failure probability is at most $e^{-\tau^2d/2}$ by step 1.2. [step 1.2, step 2.3, F9, algebra] ∎

## References

[[lem-bernoulli-coordinate-posterior-odds-bound]]: supplies exact posterior odds, coordinate posterior independence, and simultaneous concentration.

[[lem-finite-independent-sign-sum-tail]]: supplies the choice-free sign concentration used in both Bernoulli branches.

[[alg-coordinate-threshold-preprocessing]]: supplies the coordinatewise sign threshold with zero mapped to $+1$.

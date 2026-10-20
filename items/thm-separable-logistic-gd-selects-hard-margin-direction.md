---
id: thm-separable-logistic-gd-selects-hard-margin-direction
kind: theorem
title: "Separable logistic and exponential gradient descent select the hard-margin direction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-gradient-descent
  - def-linear-separable-margin-and-hard-margin-svm
  - def-tight-exponential-tail
  - lem-hard-margin-svm-has-unique-minimizer
  - lem-logistic-and-exponential-losses-have-tight-exponential-tail
  - lem-recursive-hard-margin-comparison-trajectory
  - thm-farkas-alternative-for-finite-linear-systems
  - lem-nonzero-real-polynomial-zero-set-is-lebesgue-null
  - def-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: "Countable Choice is used only for the almost-everywhere clause through the polynomial-null-set supplier. The all-data direction, residual expansion and finite recursive construction use no choice axiom."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry, Elad Hoffer, Mor Shpigel Nacson, Suriya Gunasekar, and Nathan Srebro, The Implicit Bias of Gradient Descent on Separable Data, Theorem 3 and Appendices A–C"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§10.1–10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $(x_i,y_i)_{i=1}^n$ be a finite strictly linearly separable sample with $x_i\in\mathbb R^d$ and $y_i\in\{-1,+1\}$, use the bias-free score $w\mapsto\langle w,x_i\rangle$, and let $w^*$ be the unique minimizer of $\frac12\|w\|_2^2$ subject to $y_i\langle w,x_i\rangle\ge1$ for all $i$. Put $v_i:=y_ix_i$, let $X$ be the matrix with columns $v_i$, and write $\lambda_{\max}(XX^{\mathsf T})$ for its largest eigenvalue. Use either the logistic loss $\ell_{\log}(u)=\log(1+e^{-u})$ or the exponential loss $\ell_{\exp}(u)=e^{-u}$, empirical risk $\mathcal L(w)=\sum_{i=1}^n\ell(\langle w,v_i\rangle)$, arbitrary finite initialization $w_0$, and full-batch fixed-step gradient descent $w_{t+1}=w_t-\eta\nabla\mathcal L(w_t)$. The source's tight-tail condition means that $f=-\ell'$ has constants $c,a,\mu_+,\mu_-,u_+,u_->0$ with $f(u)\le c(1+e^{-\mu_+u})e^{-au}$ for $u>u_+$ and $f(u)\ge c(1-e^{-\mu_-u})e^{-au}$ for $u>u_-$; both listed losses satisfy it with all six constants equal to $1$. For logistic loss take $0<\eta<8/\lambda_{\max}(XX^{\mathsf T})$. For exponential loss take a fixed positive step in the local-smoothness regime: assume a convex region containing every update segment on which $\nabla\mathcal L$ is $\beta_{\mathrm{loc}}$-Lipschitz, and require $0<\eta<2/\beta_{\mathrm{loc}}$.

Under these hypotheses, $\mathcal L(w_t)\to0$, $\|w_t\|_2\to\infty$, and $w_t/\|w_t\|_2\to w^*/\|w^*\|_2$. There are vectors $r_t$ with $w_t=w^*\log t+r_t$ and $\|r_t\|_2=O(\log\log t)$ as $t\to\infty$. Assuming Countable Choice for this almost-everywhere clause, for Lebesgue-almost every feature array among the strictly separable samples, the residual $r_t$ is bounded; in degenerate cases the expansion may include nonzero $\log\log t$ and further iterated-log terms. No population-risk or test-risk conclusion is asserted.

## Statement references

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, Theorem 3, Appendices A–C](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§10.1–10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The strictly separable sample, either of the two named losses, arbitrary finite initialization, and the exact fixed-step hypotheses in the Statement. Countable Choice is assumed only for the almost-everywhere clause.

[F1] [[alg-gradient-descent]]: the fixed-step Euclidean update map is $F(w)=w-\eta\nabla\mathcal L(w)$.

[F2] [[def-linear-separable-margin-and-hard-margin-svm]] and [[lem-hard-margin-svm-has-unique-minimizer]]: the bias-free strictly separable finite sample has its unique nonzero hard-margin vector $w^*$.

[F3] [[def-tight-exponential-tail]] and [[lem-logistic-and-exponential-losses-have-tight-exponential-tail]]: both stated loss derivatives satisfy precisely the stated two-sided tight-tail bounds with all six constants one.

[F4] [[lem-recursive-hard-margin-comparison-trajectory]]: the full recursive zero-dual-support construction gives $G_t=\sum_{m=1}^M h_m\log^{\circ m}t+c+o(1)$, $h_1=w^*$, $M\le d$, diverging comparison margins, and defects $\delta_t:=G_{t+1}-G_t+\eta\nabla\mathcal L(G_t)$ satisfying $\sum_t\|\delta_t\|_2<\infty$ for each named loss.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis.

[F6] [[lem-nonzero-real-polynomial-zero-set-is-lebesgue-null]]: under Countable Choice, every nonzero finite real polynomial has a Lebesgue-null zero set.

[F7] [[thm-farkas-alternative-for-finite-linear-systems]]: if no nonnegative coefficient vector represents a right-hand side as a linear combination of given columns, a vector pairs nonnegatively with every column and negatively with that right-hand side.

[A1] [[def-countable-choice]]: Countable Choice is inherited only by [F6]; it is not used in the all-data argument or in the separate homogeneous Clarke-flow branch.

## Proof

1.1 Write $v_i=y_ix_i$, $L(w)=\sum_i\ell(v_i^Tw)$, $f=-\ell'>0$ and $F(w)=w-\eta\nabla L(w)$. The sample is nonempty and strictly separable. Choose a unit vector $u$ and $\gamma>0$ with $u^Tv_i\ge\gamma$ for every $i$. For logistic loss, $0<\ell''(s)\le1/4$, so $0\preceq\nabla^2L(w)\preceq\frac14XX^T$. Thus $\beta=\lambda_{\max}(XX^T)/4$ is a global smoothness constant. The stated bound is exactly $\eta<2/\beta$. For exponential loss use the stated $\beta_{\rm loc}$ on the convex region containing the actual update segments, and put $\beta=\beta_{\rm loc}$. Integration of the Hessian along the update segment (or the ordinary Lipschitz-gradient descent inequality) gives $$L(w_{t+1})\le L(w_t)-\eta(1-\eta\beta/2)\|\nabla L(w_t)\|^2.$$ Since $L\ge0$, the gradient squares are summable and $\|\nabla L(w_t)\|\to0$. Meanwhile, $$\|\nabla L(w_t)\|\ge-u^T\nabla L(w_t)=\sum_i f(v_i^Tw_t)u^Tv_i\ge\gamma\sum_i f(v_i^Tw_t).$$ Hence every $f(v_i^Tw_t)\to0$. For both listed losses this forces $v_i^Tw_t\to+\infty$, and therefore $L(w_t)\to0$. In particular $\|w_t\|\to\infty$. No asymptotic directional information has been used in this step. [given, F1, F2, F3, algebra]

2.1 Here is the elementary comparison fact replacing the full source Lemma 14 case split. For a $C^2$ convex loss $L$, let $x,y$ be such that the Hessian has eigenvalues in $[0,B]$ at every point of the segment $[x,y]$, and suppose $\eta B\le2$. The symmetric matrix $$H_{x,y}=\int_0^1\nabla^2L(y+s(x-y))\,ds$$ has eigenvalues in $[0,B]$, and $\nabla L(x)-\nabla L(y)=H_{x,y}(x-y)$. Therefore $$\|F(x)-F(y)\|=\|(I-\eta H_{x,y})(x-y)\|\le\|x-y\|.$$ For logistic loss this applies globally with $B=\lambda_{\max}(XX^T)/4$ by step 1.1 and the stated step restriction. For exponential loss, no membership of $G_t$ in the assumed local-smoothness region is needed. Let $K=\max_i\|v_i\|^2$. At every $z$, $$\|\nabla^2L_{\exp}(z)\|_{\rm op}\le\sum_i e^{-v_i^Tz}\|v_i\|^2\le K L_{\exp}(z).$$ Convexity gives $L_{\exp}(z)\le\max\{L_{\exp}(w_t),L_{\exp}(G_t)\}$ on the connecting segment $[w_t,G_t]$. Both endpoint losses tend to zero, by step 1.1 and [F4]. Thus on this segment the Hessian bound $B_t=K\max\{L_{\exp}(w_t),L_{\exp}(G_t)\}$ tends to zero. Since $\eta$ is fixed, $\eta B_t\le2$ for every sufficiently large $t$. This proves eventual nonexpansiveness between the actual and comparison iterates, under exactly the stated exponential-loss hypothesis. Choose $T$ large enough for this property and define $r_t=w_t-G_t$. Then $$\|r_{t+1}\|=\|F(w_t)-F(G_t)-\delta_t\|\le\|r_t\|+\|\delta_t\|.$$ Iteration yields $$\sup_{t\ge T}\|r_t\|\le\|r_T\|+\sum_{t\ge T}\|\delta_t\|<\infty.$$ This closes the residual estimate without first assuming any residual growth or sign bound. It is a complete substitute for source Lemmas 14 and 15 in this two-loss theorem. For completeness, the source's scalar recurrence follows directly: for nonnegative $\phi,h,z$ with $\phi_{t+1}^2\le\phi_t^2+h_t\phi_t+z_t$ and $\sum h_t<\infty$, use $h_t\phi_t\le h_t(1+\phi_t^2)/2$ and iterate; $\prod_t(1+h_t/2)\le\exp(\sum h_t/2)$ bounds the product and gives $\phi_{t+1}^2\le C_2+C_3\sum_{s\le t}z_s$, which is precisely the needed Lemma 15 estimate. By [F4], $G_t-\sum_{m=1}^M h_m\log^{\circ m}t$ is bounded. Thus the bounded residual above proves $$w_t=\sum_{m=1}^M h_m\log^{\circ m}t+O(1).$$ In particular $$w_t=w^*\log t+O(\log\log t),\qquad \frac{w_t}{\|w_t\|}\longrightarrow\frac{w^*}{\|w^*\|}.$$ The first convergence uses $h_1=w^*\ne0$ and $\log\log t=o(\log t)$. Any component of the initialization orthogonal to the data span simply remains in the bounded remainder; arbitrary initialization is covered. [given, F1, F2, F4, F5, step 1.1, algebra]

2.2 Let $I:=\{i:(w^*)^Tv_i=1\}$ be the first-stage active set. It is nonempty: otherwise the finite minimum $\rho:=\min_i (w^*)^Tv_i$ would exceed $1$, and $w^*/\rho$ would be feasible with smaller norm. Let $A$ have columns $v_i$ for $i\in I$. If no $\alpha\ge0$ satisfied $A\alpha=w^*$, [F7] would give $y$ with $v_i^Ty\ge0$ for every $i\in I$ and $(w^*)^Ty<0$. For each inactive $i$, $(w^*)^Tv_i-1>0$; because there are finitely many constraints, choose $\epsilon>0$ small enough that $w^*+\epsilon y$ still satisfies every inactive constraint and that $2\epsilon(w^*)^Ty+\epsilon^2\|y\|_2^2<0$. The active constraints remain satisfied because $v_i^Ty\ge0$. This gives a feasible vector of smaller norm, contradicting minimality. Therefore there is a nonnegative representation $w^*=A\alpha$. [given, F2, F7, step 1.1, construct, algebra, assume-contra, discharge-contradiction]

3.1 Fix the labels. Multiplication $x_i\mapsto v_i=y_ix_i$ preserves Lebesgue-null sets. Outside a finite union of proper polynomial zero sets, every set of at most $d$ of the $v_i$ is linearly independent and no $d+1$ of them lie in one affine hyperplane. The latter excludes the determinant-zero conditions for the augmented rows $(v_i^T,1)$; the former excludes the appropriate Gram determinant-zero conditions. Each relevant polynomial is nonzero, as witnessed by coordinate vectors for the linear conditions and affinely independent points for the affine conditions. By [F6] under [A1], each of these proper polynomial zero sets is Lebesgue null, and so is their finite union. This is the only inherited Countable Choice use. All first-stage active points lie in the hyperplane $(w^*)^Tv=1$, so their number is at most $d$. Their column matrix $A$ has full column rank, and the dual representation is uniquely $$\alpha=(A^TA)^{-1}\mathbf1,$$ because $A^Tw^*=\mathbf1$ and $w^*=A\alpha$. Each coordinate of this rational function has a polynomial numerator not identically zero: for orthonormal columns, every coordinate is $1$. After excluding these finitely many additional numerator-zero sets for every possible active subset, every active multiplier is nonzero. Since the KKT multipliers are nonnegative, they are all positive. Thus every first-stage active index has a simultaneously positive dual representation; [F4] gives $M=1$, and the expansion of step 2.1 gives $w_t=w^*\log t+O(1)$. Restricting this null-set conclusion to the open set of strictly separable arrays proves exactly the almost-everywhere clause in the Statement. This is a consequence, not an extra general-position assumption on the all-data result. [given, F2, F4, F6, A1, step 2.1, step 2.2, algebra]

4.1 The qualification that further logarithms may occur is realized by a concrete separable example. In $\mathbb R^q$ take $n=q$ and $$v_i=e_1+\cdots+e_i\qquad(1\le i\le q).$$ The first hard-margin vector is $e_1$: the first constraint forces $w_1\ge1$ and $e_1$ satisfies all constraints. Its unique dual representation has only the first coefficient positive, because comparison of coordinates from $q$ down to $2$ forces all later coefficients to vanish. After projecting off $e_1$ the same argument applies to the remaining staircase vectors. Consequently $S_m=\{m\}$ and $h_m=e_m$ through $M=q$. Under either stated GD regime the proved expansion is $$w_t=e_1\log t+e_2\log\log t+\cdots+e_q\log^{\circ q}t+O(1).$$ For $q=2$ this gives a nonzero $\log\log t$ residual, and larger $q$ give further nonzero iterated-log coefficients. This also confirms that replacing the all-data proof by only its almost-everywhere branch would lose an actual part of the stated theorem. [given, F2, F4, step 2.1, construct, algebra] ∎

## Remarks

The full all-data comparison construction and its summable-defect proof replace an opaque invocation of Soudry Appendix C. They apply to both convex losses explicitly named here and keep the exact logistic step threshold and exponential local-smoothness regime. Countable Choice is explicitly restricted to the almost-everywhere polynomial-null-set argument. No population or test-risk consequence follows, and this discrete linear result supplies neither a pointwise derivative at a ReLU kink nor the separate homogeneous Clarke-flow theorem.

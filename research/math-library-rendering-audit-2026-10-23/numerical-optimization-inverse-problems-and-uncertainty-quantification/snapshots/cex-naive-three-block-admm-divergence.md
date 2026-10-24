---
id: cex-naive-three-block-admm-divergence
kind: counterexample
title: "The direct three-block ADMM extension can diverge"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; exact rational arithmetic and finite-dimensional linear algebra."
deps:
  - alg-naive-sequential-three-block-admm
  - lem-schur-reduction-for-polynomial-unit-disk-roots
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Caihua Chen, Bingsheng He, Yinyu Ye, and Xiaoming Yuan, The direct extension of ADMM for multi-block convex minimization problems is not necessarily convergent, Theorem 3.1 and §§3.1–3.2"
      url: "https://web.stanford.edu/~yyye/ADMM-final.pdf"
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
---

## Statement

Use three scalar blocks, zero objectives, $\rho=1$, and the homogeneous
constraint $Ax=0$ with
$$A=\begin{pmatrix}1&1&1\\1&1&2\\1&2&2\end{pmatrix}.$$
The sequential three-block recurrence of
[[alg-naive-sequential-three-block-admm]] has a rational initial state for
which its iterates are unbounded, although the unique primal-dual solution is
zero and every block subproblem is attained uniquely.

## Facts & Assumptions

**Given:** The three-block ADMM recurrence, the displayed matrix, zero objectives, $\rho=1$, and exact real arithmetic.

[A1] The objectives are zero, $\rho=1$, and all three block minimizers are exact.


[F1] [[alg-naive-sequential-three-block-admm]]: each scalar block minimizes one half the squared current residual and the scaled multiplier is updated by adding the final residual.

[F2] [[lem-schur-reduction-for-polynomial-unit-disk-roots]]: for monic $p$ with $|p(0)|<1$, strict unit-disk stability of $p$ implies strict stability of its normalized Schur reduction.

[F3] [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]: a degree-$d$ complex polynomial factors into $d$ linear factors, counted with multiplicity.

[F4] [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]] and [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: a root of the characteristic polynomial of a finite-dimensional complex endomorphism is an eigenvalue, so its eigenspace contains a nonzero vector.

## Proof


1.1 Write the columns of $A$ as $a_1=(1,1,1)^T$, $a_2=(1,1,2)^T$, $a_3=(1,2,2)^T$. Their squared norms are $3,6,9$, so every scalar block subproblem has a strictly positive quadratic coefficient and a unique attained minimizer. Also $det A=-1$, so $Ax=0$ has only $x=0$. The dual function is $d(y)=inf_x\langle y,Ax\rangle$: it is $0$ when $A^Ty=0$ and $-\infty$ otherwise. Since $A$ is invertible, $A^Ty=0$ only for $y=0$, so the dual optimum is unique. [A1, F1, given, algebra]

1.2 For state $s^k=(x_2^k,x_3^k,u_1^k,u_2^k,u_3^k)^T$, exact differentiation of the three scalar subproblems gives $x_1^{k+1}=-\frac{a_1^T(u^k+a_2x_2^k+a_3x_3^k)}3$, $x_2^{k+1}=-\frac{a_2^T(u^k+a_1x_1^{k+1}+a_3x_3^k)}6$, and $x_3^{k+1}=-\frac{a_3^T(u^k+a_1x_1^{k+1}+a_2x_2^{k+1})}9$. Substitute these into $u^{k+1}=u^k+a_1x_1^{k+1}+a_2x_2^{k+1}+a_3x_3^{k+1}$; exact rational simplification gives $s^{k+1}=Ms^k$ with $$M=\frac1{162}\begin{pmatrix}144&-9&9&9&-18\\8&157&5&-13&8\\-64&-122&122&-58&-64\\-56&35&-35&91&-56\\88&26&-26&-62&88\end{pmatrix}.$$ The vector $v=(0,0,1,1,1)^T$ satisfies $Mv=0$. Exact rational matrix multiplication gives $p_1=\operatorname{tr}(M)=\frac{301}{81}$, $p_2=\operatorname{tr}(M^2)=\frac{20860}{6561}$, $p_3=\operatorname{tr}(M^3)=\frac{2588159}{1062882}$, and $p_4=\operatorname{tr}(M^4)=\frac{132553799}{86093442}$. Newton's identities $e_1=p_1$, $e_2=(p_1^2-p_2)/2$, $e_3=(p_3-e_1p_2+e_2p_1)/3$, and $e_4=(-p_4+e_1p_3-e_2p_2+e_3p_1)/4$ give $e_1=301/81$, $e_2=287/54$, $e_3=280/81$, $e_4=70/81$; $Mv=0$ gives $e_5=\det M=0$. Therefore $\det(\lambda I-M)=\lambda q(\lambda)$, where $q(\lambda)=\lambda^4-\frac{301}{81}\lambda^3+\frac{287}{54}\lambda^2-\frac{280}{81}\lambda+\frac{70}{81}$. [A1, F1, given, algebra]

2.1 For $z=e^{it}$, direct expansion gives $\operatorname{Im}(e^{-2it}q(e^{it}))=\frac{\sin t(22\cos t-21)}{81}$. If this vanishes because $\sin t=0$, substitution gives $q(1)=1/162$ and $q(-1)=775/54$, both nonzero. Otherwise $\cos t=21/22$, and substitution into the real part gives $\operatorname{Re}(e^{-2it}q(e^{it}))=19/19602\ne0$. Thus $q$ has no unit-circle zero. [A1, step 1.2, algebra, cases]

3.1 Suppose every zero of $q$ lies inside the unit disk. By [F2], its normalized Schur reduction is the stable monic cubic $q_1(z)=z^3-\frac{4781}{1661}z^2+\frac{861}{302}z-\frac{1610}{1661}$. Since $|q_1(0)|=1610/1661<1$, another application gives the stable monic quadratic $q_2(z)=z^2-\frac{317086}{166821}z+\frac{336511}{333642}$. By [F3], $q_2$ factors as $(z-\zeta_1)(z-\zeta_2)$ over $\mathbb C$, with both roots inside the unit disk by the reductions. Its constant term is $\zeta_1\zeta_2$, so $|q_2(0)|=|\zeta_1||\zeta_2|<1$, contradicting $q_2(0)=336511/333642>1$. Therefore not all zeros of $q$ lie inside. The coefficients of $q_1,q_2$ follow by substituting into $(p-p(0)p^\#)/(z(1-p(0)^2))$ and collecting powers. [A1, F2, F3, step 2.1, contradiction, algebra]

4.1 By [F3], $q$ has four roots counted with multiplicity. Steps 2.1 and 3.1 show that none is on the unit circle and not all are inside, so some root $\lambda$ satisfies $|\lambda|>1$. Since $\det(\lambda I-M)=\lambda q(\lambda)=0$ by step 1.2, [F4] gives a nonzero complex vector $v$ with $Mv=\lambda v$. Suppose each of the five standard basis vectors $e_j\in\mathbb Q^5$ had a bounded orbit under $M$. Then every column of $M^k$ would be uniformly bounded in $k$, and since there are only five columns, every entry would be bounded by one common constant $C$. Choose $i$ with $v_i\ne0$. The finite-sum triangle inequality would give $|(M^kv)_i|\le C\sum_j|v_j|$ for every $k$, but $M^kv=\lambda^kv$ makes $|(M^kv)_i|=|\lambda|^k|v_i|\to\infty$, a contradiction. Hence at least one standard basis vector has an unbounded orbit. Taking $s^0=e_j$ for that index and $x_1^0=0$ gives a rational initial state with unbounded iterates; each subproblem remains uniquely attained as shown in step 1.1. [A1, F3, F4, step 1.2, step 2.1, step 3.1, contradiction, algebra] ∎

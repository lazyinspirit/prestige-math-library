---
id: lem-scaled-householder-step-meets-local-backward-error-premise
kind: lemma
title: "The scaled computed Householder step satisfies the local backward error premise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [alg-scaled-householder-reflector-formation-and-application, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries, lem-product-of-one-plus-deltas-gives-theta-n]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pending
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Householder triangularization"
      url: https://fncbook.com/house/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let $C=[x\;B]\in\mathbb R^{r\times(q+1)}$, $r\ge1$, $q\ge0$, undergo a successful step of [[alg-scaled-householder-reflector-formation-and-application]], with $0<u<1$ and $ru<1$. Define
$$g_r=\frac{ru}{1-ru},\quad e_r=(1+u)^{r/2+3}-1,\quad d_r=e_r+u(2+e_r),\quad a_r=\frac{1+u}{(1-u)^r}-1,$$
$$c_r=2\bigl((1+a_r)(1+u)^2(1+g_r)-1\bigr),\qquad \kappa_r=\max\{e_r+8d_r,(1+u)c_r+3u\}.$$
There is an exact orthogonal $H$, the identity when $x=0$ and $H(v)=I-2vv^T/(v^Tv)$ otherwise, and a perturbation $E$ such that
$$H(C+E)=C_+,\qquad \|E\|_F\le\kappa_r\|C\|_F.$$
The constants increase with $r$ and are $O(ru)$ for fixed $r$ as $u\to0$. The column overwrite is included. For successful application of the same stored $(v,\widehat\tau)$ to a separate block $Y$ without an annihilation overwrite, the discrepancy from $H(v)Y$ is at most $((1+u)c_r+3u)\|Y\|_F$.

## Facts & Assumptions

**Given:** The stated successful real step; every nonzero exact intermediate is normal and all zero operations are exact.

[F1] [[alg-scaled-householder-reflector-formation-and-application]] fixes scaling, sequential dots, the two update multiplications, and the column overwrite.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] supplies relative errors at most $u$, correctly rounded square roots, and exact zero/sign operations.

[F3] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]] gives the exact orthogonal Householder representative and exact annihilation.

[F4] [[lem-product-of-one-plus-deltas-gives-theta-n]] bounds products of rounded-operation factors by $\gamma_k$.

## Proof

1.1 If $x=0$, the algorithm copies $B$ and the zero column; take $H=I$ and $E=0$. Otherwise put $N=\|x\|_2$, $\alpha_0=-\sigma N$, $v_0=x-\alpha_0e_1$ and $V_0=\|v_0\|_2\ge N$. The nonnegative scaled squared-norm sum has each exact squared input multiplied by at most $r+2$ factors $1+\delta$, $|\delta|\le u$: two from scaling and at most $r$ from squaring and subsequent additions. Thus the computed norm divided by $N$ lies between $(1-u)^{r/2+3}$ and $(1+u)^{r/2+3}$ after square root and rescaling. For exponent $p\ge1$, convexity of $t^p$ on $t>0$ gives $1-(1-u)^p\le(1+u)^p-1$. Hence $|\widehat\alpha-\alpha_0|\le e_rN$. Only the first stored coordinate can differ from $v_0$, and subtraction gives $\|v-v_0\|_2\le(e_r+u(2+e_r))N=d_rN$. Success gives nonzero stored $v$. [given, F1, F2, algebra]

1.2 For nonzero vectors $a,b$, adding and subtracting $a/\|b\|$ and using the reverse triangle inequality gives $\|a/\|a\|-b/\|b\|\|\le2\|a-b\|/\|b\|$. For unit $z,w$, expanding $zz^T-ww^T=(z-w)z^T+w(z-w)^T$ gives norm at most $2\|z-w\|$. Consequently $\|H(v)-H(v_0)\|_2\le8\|v-v_0\|/V_0\le8d_r$. Since $H(v_0)x=\alpha_0e_1$, the overwritten column differs from $H(v)x$ by at most $(e_r+8d_r)N$. [F3, step 1.1, algebra]

2.1 Put $V=\|v\|_2$. The rounded positive dot product satisfies $(1-u)^r V^2\le w\le(1+u)^r V^2$ by expansion of its products and additions, including exact zeros. The division defining $\widehat\tau$ therefore gives $|\widehat\tau V^2/2-1|\le a_r$; the upper deviation dominates the lower by multiplying the positive denominators. A sequential signed dot product differs from its exact value by at most $g_r\sum_i|v_iB_{ij}|\le g_rV\|B_{:j}\|_2$, by the same factor expansion and [F4]. [given, F1, F2, F4, algebra]

2.2 The exact rank-one update has norm at most $2\|B\|_F$. Replacing its coefficient by $\widehat\tau$, its dot by the computed dot, and its two multiplications by rounded multiplications bounds the update error by $c_r\|B\|_F$: successively the nonnegative majorants multiply by $1+a_r$, $1+g_r$, and $(1+u)^2$, then subtract the exact majorant $2$. Final subtraction adds at most $u(\|B\|_F+\|U\|_F)\le u(3+c_r)\|B\|_F$. Thus $\|\widehat B-H(v)B\|_F\le((1+u)c_r+3u)\|B\|_F$. The same computation applies to any separate block $Y$. [F1, F2, step 2.1, algebra]

3.1 The first-column and remaining-column errors occupy disjoint columns, so their squared Frobenius norms add. Steps 1.2 and 2.2 give $\|C_+-H(v)C\|_F\le\kappa_r\|C\|_F$. Choose $E=H(v)C_+-C$; orthogonality gives the claimed equation and equal error norm. Each displayed coefficient increases with $r$ and has zero constant term and finite first derivative at $u=0$, proving the stated asymptotics. [F3, step 1.2, step 2.2, algebra] ∎

## Remarks

The former $3\gamma_r$ constant is false for this evaluation order; an exact binary counterexample is preserved in the run's owner rounded-derivative escalation evidence. This lemma supplies its own explicit bound and does not assert the distinct premise of the published conditional QR theorem.

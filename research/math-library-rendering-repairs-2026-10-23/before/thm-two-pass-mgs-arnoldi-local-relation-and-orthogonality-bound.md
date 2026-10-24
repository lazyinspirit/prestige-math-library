---
id: thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound
kind: theorem
title: "Two-pass MGS Arnoldi has an explicit local relation and an a posteriori orthogonality bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-arnoldi-process,
       def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma,
       thm-floating-point-dot-product-componentwise-and-normwise-error-bounds,
       lem-product-of-one-plus-deltas-gives-theta-n,
       thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
proof_strategy: direct
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §§19.8–19.13, printed pp. 415–430"
      url: "https://djvu.online/file/uGJmLc3c54Qe6"
      locator: "Modified Gram–Schmidt residual and orthogonality analysis, including condition-dependent loss and reorthogonalization. The local recurrences here are derived directly."
    - title: "Gene H. Golub and Charles F. Van Loan, Matrix Computations, 4th ed., §§5.2.8–5.2.9, printed pp. 249–255"
      url: "https://www.ee.iitb.ac.in/~belur/uplod/golub-van-loan-matrix-computations-2012-edition-4th.pdf"
      locator: "Modified Gram–Schmidt and reorthogonalization, with conditioning-dependent orthogonality discussion."
---

## Statement

Let $A\in\mathbb R^{n\times n}$, $n\ge1$, and let the computed starting
vector $q_1$ be nonzero. Fix $m\ge1$ and, for $j=1,\ldots,m$, compute each component of
$z_j=\operatorname{fl}(Aq_j)$ by the length-$n$ rounded dot product of that
row with $q_j$. Then perform two complete modified Gram–Schmidt passes: for
$p=1,2$ and $i=1,\ldots,j$, compute
$$h_{ij}^{(p)}=\operatorname{fl}(q_i^{\mathsf T}w_{i-1,j}^{(p)}),\qquad w_{ij}^{(p)}=\operatorname{fl}(w_{i-1,j}^{(p)}-h_{ij}^{(p)}q_i),$$
where $w_{0j}^{(1)}=z_j$ and $w_{0j}^{(2)}=w_{jj}^{(1)}$. The vector update
is componentwise one rounded product followed by one rounded subtraction.
Store $h_{ij}=\operatorname{fl}(h_{ij}^{(1)}+h_{ij}^{(2)})$. Compute
$t_j=\operatorname{fl}((w_{jj}^{(2)})^{\mathsf T}w_{jj}^{(2)})$ as a
length-$n$ dot product, $\beta_{j+1}=\operatorname{fl}(\sqrt{t_j})$, and
$q_{j+1}=\operatorname{fl}(w_{jj}^{(2)}/\beta_{j+1})$ componentwise.

Assume all products, partial sums, square roots, divisions, and updates used
here succeed in the operationwise model, so every nonzero exact product and
partial sum is normal-range; exact-zero products and sums are permitted.
Assume $nu<1$, $\gamma_n<1$, $2u<1$, and $t_j>0$. Define
$c_n=(1-u)\sqrt{1-\gamma_n}$. Then
$\beta_{j+1}\ge c_n\|w_{jj}^{(2)}\|_2>0$, and the computed columns satisfy
$$Aq_j=\sum_{i=1}^j h_{ij}q_i+\beta_{j+1}q_{j+1}+e_j,$$
where, writing $\delta_j^{mv}=z_j-Aq_j$,
$$e_j=-\delta_j^{norm}-\delta_j^{mv} -\sum_{p=1}^2\sum_{i=1}^j\zeta_{ij}^{(p)} -\sum_{i=1}^j\chi_{ij}q_i,$$
with $\delta_j^{norm}=\beta_{j+1}q_{j+1}-w_{jj}^{(2)}$,
$\zeta_{ij}^{(p)}=w_{ij}^{(p)}-(w_{i-1,j}^{(p)}-h_{ij}^{(p)}q_i)$, and
$\chi_{ij}=h_{ij}-(h_{ij}^{(1)}+h_{ij}^{(2)})$. These errors obey
$$\|\delta_j^{mv}\|_2\le\gamma_n \left(\sum_{a=1}^n\left(\sum_{b=1}^n|A_{ab}|\,|q_{j,b}|\right)^2\right)^{1/2}, \quad \|\delta_j^{norm}\|_2\le u\|w_{jj}^{(2)}\|_2,$$
$$|h_{ij}^{(p)}-q_i^{\mathsf T}w_{i-1,j}^{(p)}| \le\gamma_n\|q_i\|_1\|w_{i-1,j}^{(p)}\|_1,$$
$$\|\zeta_{ij}^{(p)}\|_2\le\gamma_2\bigl( \|w_{i-1,j}^{(p)}\|_2+|h_{ij}^{(p)}|\|q_i\|_2\bigr),\qquad |\chi_{ij}|\le u|h_{ij}^{(1)}+h_{ij}^{(2)}|.$$

If the generated vectors $q_1,\ldots,q_{m+1}$ have full column rank, there
is also an explicit conditioning-dependent orthogonality recurrence.
Put $\nu_\ell=|\|q_\ell\|_2^2-1|$ and $c_{\ell i}=q_\ell^{\mathsf T}q_i$.
For fixed $j$ and $\ell\le j$, set
$$G_{\ell j}^{0}=|q_\ell^{\mathsf T}z_j|.$$
For each pass $p$, with $h_i=h_{ij}^{(p)}$ and
$\zeta_i=\zeta_{ij}^{(p)}$, define
$$\begin{aligned} G_{\ell j}^{p}:={}&\nu_\ell\left(G_{\ell j}^{p-1}+ \sum_{i<\ell}(|h_i||c_{\ell i}|+\|q_\ell\|_2\|\zeta_i\|_2)\right) +(1+\nu_\ell)\gamma_n\|q_\ell\|_1\|w_{\ell-1,j}^{(p)}\|_1\\ &+\|q_\ell\|_2\|\zeta_\ell\|_2 +\sum_{i>\ell}(|h_i||c_{\ell i}|+\|q_\ell\|_2\|\zeta_i\|_2). \end{aligned}$$
Then the off-diagonal inner products satisfy
$$|q_\ell^{\mathsf T}q_{j+1}| \le\frac{G_{\ell j}^{2}}{\beta_{j+1}} +\frac{u\|q_\ell\|_2}{c_n}.$$
Consequently the Frobenius norm of the Gram defect of $Q_{m+1}$ is at most
$$\left(\sum_{i=1}^{m+1}\nu_i^2+ 2\sum_{1\le\ell<i\le m+1} \left(\frac{G_{\ell,i-1}^{2}}{\beta_i} +\frac{u\|q_\ell\|_2}{c_n}\right)^2\right)^{1/2},$$
where $\|B\|_F=(\sum_{a,b}|B_{ab}|^2)^{1/2}$. A zero $t_j$ is a
breakdown branch with no division or new vector; failure of any stated
rounding or positivity hypothesis makes the bound inconclusive.

## Facts & Assumptions

**Given:** The real matrix, operationwise model and hypotheses in the
Statement, the initial vector $q_1$, and the specified two-pass MGS algorithm.

[F1] [[def-arnoldi-process]]: exact Arnoldi subtracts projections onto existing
vectors and normalizes the residual; exact zero residual is breakdown.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]:
real arithmetic operations round with relative error at most $u$ when they
succeed, exact-zero operations return zero, and positive square roots are
correctly rounded; for $ku<1$, $\gamma_k=ku/(1-ku)$.

[F3] [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]:
when every exact product, rounded product, and intermediate sum is nonzero
normal-range, a length-$n$ dot product differs from its exact dot by at most
$\gamma_n$ times the sum of the absolute products.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for real vectors,
$|x^{\mathsf T}y|\le\|x\|_2\|y\|_2$.

[F5] [[lem-product-of-one-plus-deltas-gives-theta-n]]: padding any product of
at most $n$ factors $1+\varepsilon$, $|\varepsilon|\le u$, with factors $1$
allows the published $n$-factor bound $\gamma_n$ when $nu<1$.

## Proof

1.1 Consider any length-$n$ dot product used here. Each exact product and partial sum is either zero or normal-range. By [F2], an exact-zero operation returns zero and contributes a factor $1+0$, while every nonzero successful operation contributes a factor $1+\varepsilon$ with $|\varepsilon|\le u$. Unrolling the left-to-right sum, each exact product has a coefficient that is a product of at most $n$ such factors; padding with factors $1$ and applying [F5] bounds each coefficient's deviation from $1$ by $\gamma_n$. Therefore the absolute dot-product error is at most $\gamma_n$ times the sum of the absolute exact products, including when exact-zero products or sums occur. This extends the narrower supplier bound [F3] to the operationwise model's exact-zero cases. [given, F2, F3, F5, algebra]

1.2 For one component of an update, write the rounded product as $h q_i(1+\epsilon_1)$ and the rounded subtraction as $(w-hq_i(1+\epsilon_1))(1+\epsilon_2)$, with $|\epsilon_1|,|\epsilon_2|\le u$; an exact-zero operation has its corresponding $\epsilon$ equal to zero by [F2]. Subtracting $w-hq_i$ and using the triangle inequality bounds the component error by $\gamma_2(|w|+|h q_i|)$. Taking vector norms gives the stated $\zeta$ estimate. The rounded addition combining two pass coefficients has error at most $u|h^{(1)}+h^{(2)}|$, including exact-zero sums, which is the stated $\chi$ bound. [given, F2, F5, algebra]

2.1 Apply step 1.1 to each row dot product defining $z_j$. The absolute error in row $a$ is at most $\gamma_n\sum_b|A_{ab}||q_{j,b}|$. Taking the Euclidean norm of this vector of rowwise bounds proves the displayed $\delta_j^{mv}$ estimate. [given, step 1.1, algebra]

2.2 By step 1.1, $|t_j-\|w_{jj}^{(2)}\|_2^2|\le\gamma_n\|w_{jj}^{(2)}\|_2^2$, so $t_j\ge(1-\gamma_n)\|w_{jj}^{(2)}\|_2^2$. Correct rounding of the positive square root gives $\beta_{j+1}\ge(1-u)\sqrt{t_j}$, proving the lower bound. Each component division gives $q_{j+1,a}=(w_{jj,a}^{(2)}/\beta_{j+1})(1+\epsilon_a)$ with $|\epsilon_a|\le u$, including zero components with $\epsilon_a=0$; hence $|\delta_{j,a}^{norm}|\le u|w_{jj,a}^{(2)}|$ and the displayed vector bound follows. [given, F2, step 1.1, algebra]

3.1 The two-pass updates telescope to $$w_{jj}^{(2)}=z_j-\sum_{p=1}^2\sum_{i=1}^j h_{ij}^{(p)}q_i+\sum_{p=1}^2\sum_{i=1}^j\zeta_{ij}^{(p)}.$$ Also $h_{ij}=h_{ij}^{(1)}+h_{ij}^{(2)}+\chi_{ij}$, $w_{jj}^{(2)}=\beta_{j+1}q_{j+1}-\delta_j^{norm}$, and $z_j=Aq_j+\delta_j^{mv}$. Substituting these identities into the telescoped equation yields $$Aq_j=\sum_i h_{ij}q_i+\beta_{j+1}q_{j+1} -\delta_j^{norm}-\delta_j^{mv}-\sum_{p,i}\zeta_{ij}^{(p)} -\sum_i\chi_{ij}q_i.$$ This is the stated local Arnoldi relation, whose exact-arithmetic column shape is the one defined in [F1]. [given, F1, step 2.1, step 1.2, step 2.2, algebra]

4.1 Fix $\ell\le j$ and one pass. Before its $i=\ell$ update, the absolute value of $q_\ell^{\mathsf T}w_{\ell-1,j}^{(p)}$ is at most $G_{\ell j}^{p-1}+\sum_{i<\ell}(|h_i||c_{\ell i}|+ \|q_\ell\|_2\|\zeta_i\|_2)$ by the updates already made in this pass. At $i=\ell$, write the computed dot as that exact inner product plus a dot error $\delta h$; then the new inner product is $(1-\|q_\ell\|_2^2)q_\ell^{\mathsf T}w_{\ell-1,j}^{(p)} -\|q_\ell\|_2^2\delta h+q_\ell^{\mathsf T}\zeta_\ell$. Its absolute value is bounded by the first three terms in the definition of $G_{\ell j}^{p}$. Each later update $i>\ell$ changes that inner product by $-h_i c_{\ell i}+q_\ell^{\mathsf T}\zeta_i$, bounded by the corresponding summand there. Thus $|q_\ell^{\mathsf T}w_{jj}^{(p)}|\le G_{\ell j}^{p}$ for both passes. [given, step 1.1, step 1.2, step 3.1, algebra, induction]

5.1 Step 4.1 with $p=2$ gives $|q_\ell^{\mathsf T}w_{jj}^{(2)}|\le G_{\ell j}^{2}$. Since $\beta_{j+1}q_{j+1}=w_{jj}^{(2)}+\delta_j^{norm}$, [F4] and step 2.2 yield $$|q_\ell^{\mathsf T}q_{j+1}| \le G_{\ell j}^{2}/\beta_{j+1} +u\|q_\ell\|_2\|w_{jj}^{(2)}\|_2/\beta_{j+1} \le G_{\ell j}^{2}/\beta_{j+1}+u\|q_\ell\|_2/c_n.$$ Each diagonal entry of $Q_{m+1}^{\mathsf T}Q_{m+1}-I$ has absolute value $\nu_i$, and each off-diagonal entry is bounded by the preceding inequality. Summing the squares of all entries proves the Frobenius Gram-defect bound. [given, step 2.2, step 4.1, F4, algebra] ∎


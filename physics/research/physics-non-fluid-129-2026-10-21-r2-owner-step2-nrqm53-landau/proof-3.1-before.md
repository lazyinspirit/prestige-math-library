3.1 For $N<\infty$ and $f_0,\ldots,f_N\in C_c^\infty(\mathbb R_k)$,
$F_N(\xi,k)=\sum_{n=0}^Nf_n(k)\psi_n(\xi)$ has inverse
$$U^{-1}F_N(x,y)=\frac1{\sqrt{2\pi}}\sum_{n=0}^N\int_{\mathbb R}e^{iky}f_n(k)\psi_n\!\left(x-\frac{\hbar k}{qB}\right)dk.$$
The integrands have compact $k$-support and are Schwartz in $x$ uniformly
there by the Hermite form in [F3]; differentiating under the integral and
integrating by parts in $k$ show rapid decay in $y$, so the inverse is
Schwartz. Define
$$\chi_R(x,y)=\prod_{s\in\{x,y\}}\sigma(2-s/R)\sigma(2+s/R),$$
using [F5]. These cutoffs are one on $[-R,R]^2$, vanish outside
$[-2R,2R]^2$, and have $|\nabla\chi_R|\le C/R$. For each covariant
derivative,
$$\Pi_j^A(\chi_Rv)=\chi_R\Pi_j^Av-i\hbar(\partial_j\chi_R)v.$$
Dominated convergence sends the $L^2$ tails of $v$ and $\Pi_j^Av$ to zero,
and the extra term has norm at most $C\hbar\|v\|_2/R$. Thus each $F_N$
lies in the transformed form closure. Finite coefficient families are dense
in the weighted target: truncate its convergent nonnegative series, then
approximate the remaining finitely many $L^2(k)$ coefficients by
$C_c^\infty(k)$ using [F7]. [A1, F1, F3, F4, F5, F7, step 1.1, step 2.1, construct, algebra]
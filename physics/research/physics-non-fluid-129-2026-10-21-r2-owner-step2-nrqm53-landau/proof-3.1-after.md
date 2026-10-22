3.1 For $N<\infty$ and $f_0,\ldots,f_N\in C_c^\infty(\mathbb R_k)$,
$F_N(\xi,k)=\sum_{n=0}^Nf_n(k)\psi_n(\xi)$ has inverse
$$U^{-1}F_N(x,y)=\frac1{\sqrt{2\pi}}\sum_{n=0}^N\int_{\mathbb R}e^{iky}f_n(k)\psi_n\!\left(x-\frac{\hbar k}{qB}\right)dk.$$
Write $v:=U^{-1}F_N$. The integrands have compact $k$-support and are Schwartz in $x$ uniformly
there by the Hermite form in [F3]; differentiating under the integral and
integrating by parts in $k$ show rapid decay in $y$, so the inverse is
Schwartz. Define
$$\chi_R(x,y)=\prod_{s\in\{x,y\}}\sigma(2-s/R)\sigma(2+s/R),$$
using [F5]. These cutoffs are one on $[-R,R]^2$, vanish outside
$[-2R,2R]^2$, and have $|\nabla\chi_R|\le C/R$. For each covariant
derivative,
$$\Pi_j^A(\chi_Rv)=\chi_R\Pi_j^Av-i\hbar(\partial_j\chi_R)v.$$
Take integer $R\ge1$. The step-function bounds in [F5] give $0\le\chi_R\le1$, and for every fixed $(x,y)$, $\chi_R(x,y)=1$ once $R\ge\max\{|x|,|y|\}$, so $\chi_R\to1$ pointwise. Since $v$ is Schwartz and $A=(0,Bx)$ is linear, $\Pi_1^Av=-i\hbar\partial_xv$ and $\Pi_2^Av=-i\hbar\partial_yv-qBxv$ are Schwartz and belong to $L^2(\mathbb R^2)$. For each $w\in\{v,\Pi_1^Av,\Pi_2^Av\}$, the functions $|(\chi_R-1)w|^2$ are measurable, tend pointwise to zero, and are bounded by the single measurable $L^1$ majorant $|w|^2$. Applying [F9] on the Lebesgue measure space $\mathbb R^2$ gives $\|(\chi_R-1)w\|_2\to0$. The derivative-cutoff term separately satisfies $\|\hbar(\partial_j\chi_R)v\|_2\le C\hbar\|v\|_2/R\to0$. Thus the displayed product identity and the triangle inequality give $\|\Pi_j^A(\chi_Rv-v)\|_2\to0$ for both $j$, as well as $\|\chi_Rv-v\|_2\to0$.
The form identity of step 2.1 also holds for Schwartz functions: the Fourier and shear maps preserve Schwartz regularity, and for each Schwartz $g(\xi)$ one has $Lg\in L^2$; its integration-by-parts pairings with the polynomial-Gaussian $\psi_n$ have vanishing boundary terms at both infinities. The same Parseval calculation and exact diagonal operator-domain criterion in [F3] therefore give $g\in D(H_{\mathrm{osc}})$ and the same oscillator energy identity. All resulting nonnegative energies can again be integrated by [F6]. Apply this extended identity to the Schwartz difference $\chi_Rv-v$. Its weighted coefficient norm squared is exactly $\frac1{2m}\sum_{j=1}^2\|\Pi_j^A(\chi_Rv-v)\|_2^2$, which tends to zero by the preceding bounds. Since $\chi_Rv\in C_c^\infty$, each $F_N$ therefore lies in the weighted-norm closure of the transformed original core, without assuming closability in advance. Finite coefficient families are dense
in the weighted target: truncate its convergent nonnegative series, then
approximate the remaining finitely many $L^2(k)$ coefficients by
$C_c^\infty(k)$ using [F7]. [A1, F1, F2, F3, F4, F5, F6, F7, F9, step 1.1, step 2.1, construct, algebra]
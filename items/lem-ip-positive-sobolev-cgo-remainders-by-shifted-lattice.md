---
id: lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice
kind: lemma
title: Positive-Sobolev CGO remainders from a shifted Fourier lattice
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-plancherel
proof_strategy: direct
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
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Lemmas 6.6–6.7 and Theorem 6.8; an independent shifted-lattice proof is supplied here
    - title: Mikko Salo, Calderon problem, lecture notes
      url: https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf
      locator: Section 3.2, shifted-lattice Fourier construction
dependency_level: 0
---

## Statement

Assume Countable Choice. Fix $0<\tau<1$, $0<\rho<1$ and $M>0$. If $q\in H^{1/2+\tau}(\mathbb R^3;\mathbb C)$ has support in $\overline{B_\rho}$ and norm at most $M$, there are constants $T,C>0$, depending only on $\tau,\rho,M$, such that for every $\zeta\in\mathbb C^3$ with $\zeta\cdot\zeta=0$ and $|\zeta|\ge T$, there is $r_\zeta\in H^2(B_2)$ for which
$$(-\Delta+q)\big(e^{i\zeta\cdot x}(1+r_\zeta)\big)=0\quad\hbox{in }B_2,$$
$$\|r_\zeta\|_{H^{1/2}(B_2)}\le C|\zeta|^{-1}M,\qquad \|r_\zeta\|_{L^\infty(B_2)}\le C|\zeta|^{-\tau/2}M,\qquad \|r_\zeta\|_{H^2(B_2)}\le C|\zeta|M(1+M).$$
Here fractional Sobolev norms on the ball are restriction norms from the whole-space Fourier Sobolev spaces. No boundary condition is imposed. The construction is on a larger cube, so the stated regularity holds on a neighborhood of the closed unit ball.

## Statement references

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

[[thm-plancherel]]

[Weidling, Lemmas 6.6–6.7 and Theorem 6.8](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The choice assumption, exponents, support, potential and null phase in the Statement.

[F1] On a finite torus the Fourier characters form a complete orthonormal basis, with Parseval and a surjective coefficient isometry. Multiplication by a fixed unit-modulus exponential gives the shifted basis. [[thm-fourier-basis-and-parseval-on-the-n-torus]]

[F2] Whole-space Fourier transformation is unitary on $L^2$. [[thm-plancherel]]

[A1] Countable Choice is assumed at [F1]–[F2]. [[def-countable-choice]]

## Proof

1.1 We give the Sobolev product bounds used below. They hold for periodic functions on a fixed three-dimensional cube, and for the product of a periodic function and a function with one fixed half-integer Fourier shift. The constants can be chosen uniformly under rotations of the cube. Split Fourier frequencies into dyadic shells and write $f_j,g_j$ for the corresponding blocks. A shell contains at most $C2^{3j}$ lattice points, so Cauchy–Schwarz gives $\|f_j\|_\infty\le C2^{3j/2}\|f_j\|_2$. For $r>3/2$ and $0\le s\le r$, these estimates prove $\|fg\|_{H^s}\le C\|f\|_{H^r}\|g\|_{H^s}$. For low $f$ against high $g$, use $\|f_{<j-2}\|_\infty\le C\|f\|_{H^r}$ and square-sum $2^{js}\|g_j\|_2$. For high $f$ against low $g$, when $s<3/2$ use $\|g_{<j-2}\|_\infty\le C2^{j(3/2-s)}\|g\|_{H^s}$, and when $s>3/2$ use the uniform bound by $\|g\|_{H^s}$; the critical case has an extra factor $(1+j)^{1/2}$, absorbed by $2^{-j(r-3/2)}$. The resulting weighted terms are bounded by $2^{-j(r-3/2)}\|f\|_{H^r}\|g\|_{H^s}$ or by $2^{js}\|f_j\|_2\|g\|_{H^s}$. For comparable high input shells $k$ that produce an output shell $j\le k+C$, use $\|Q_j(f_kg_k)\|_2\le C2^{3j/2}\|f_k\|_2\|g_k\|_2$, obtained from the $L^1$ bound on the product and the number of output frequencies. Multiplication by $2^{js}$ and summation over $k\ge j-C$ gives a summable geometric kernel, since $r+s>0$ and $r>3/2$; at $s=r=0$ this case is not being used. Cauchy–Schwarz for the two input shell sequences and the geometric kernel completes the $H^s$ bound. [A1, F1, given, algebra]

1.2 Rotate so that $\zeta=s(e_1+ie_2)$, where $s=|\zeta|/\sqrt2$, and choose a fixed cube $Q=(-\pi L,\pi L)^3$ containing $\overline{B_3}$. Put $\eta_k=(k+e_2/2)/L$ and use the shifted orthonormal basis $w_k=(2\pi L)^{-3/2}e^{i\eta_k\cdot x}$. For $A_\zeta=D^2+2\zeta\cdot D$, $D=-i\nabla$, its symbol is $p_k=|\eta_k|^2+2\zeta\cdot\eta_k$, with $|\operatorname{Im}p_k|\ge s/L$. For $|\eta_k|\le4s$, this gives $|p_k|\ge s/L$; for $|\eta_k|>4s$, its real part has magnitude at least $|\eta_k|^2/2$. Hence for every real $\mu$ and $0\le v\le2$ the coefficient multiplier $G_\zeta:p_k^{-1}$ satisfies $\|G_\zeta f\|_{H^{\mu+v}(Q)}\le C_v s^{v-1}\|f\|_{H^\mu(Q)}$ for $s\ge1$. The Sobolev spaces here are defined by the shifted weighted coefficient norms. Parseval proves these bounds and $A_\zeta G_\zeta f=f$ in distributions inside $Q$, first on finite sums and then by convergence. [F1, given, construct, algebra]

2.1 A second bound is $\|fg\|_{H^{-1/2}}\le C_\varepsilon\|f\|_{H^{1/2+\varepsilon}}\|g\|_{H^{1/2}}$ for every $0<\varepsilon<1$. Here the low-high and high-low estimates from step 1.1, with output weight $2^{-j/2}$, have the additional decay $2^{-\varepsilon j}$. For comparable high shells, the output estimate becomes $2^j\sum_{k\ge j-C}\|f_k\|_2\|g_k\|_2=2^{-\varepsilon j}\sum_{k\ge j-C}2^{-(k-j)(1+\varepsilon)}F_kG_k$, with $F_k=2^{k(1/2+\varepsilon)}\|f_k\|_2$ and $G_k=2^{k/2}\|g_k\|_2$. The geometric kernel has finite sum, and Cauchy–Schwarz bounds the product sequence in $\ell^1$ by $\|F\|_2\|G\|_2$. This proves the claimed bound. All product calculations first hold for finite Fourier sums; the bounds give convergence in the target Sobolev space and identify the product as the distributional limit. Whenever one factor belongs to $H^r$, $r>3/2$, its Fourier coefficients are absolutely summable by weighted Cauchy–Schwarz, so it is a bounded continuous multiplier and this distributional product agrees with the ordinary product. [F1, step 1.1, algebra]

2.2 The periodic and shifted Sobolev norms of the compactly supported potential are bounded by $C\|q\|_{H^{1/2+\tau}(\mathbb R^3)}\le CM$. For completeness, choose a fixed smooth cutoff equal to one on $B_1$ and supported in $B_2$. Since it multiplies $q$ without changing it, each Fourier coefficient of $q$ is the convolution of its whole-space Fourier transform with a translate of the rapidly decreasing transform of this cutoff, sampled at an integer or shifted lattice point. Weighted Cauchy–Schwarz, followed by summation over the lattice, bounds the coefficient norm by the whole-space norm: the sums $\sup_\xi\sum_k(1+|\eta_k-\xi|)^{-N}$ and the corresponding integrals are finite for $N>3$, and polynomial Sobolev weights are absorbed by increasing $N$. The reverse local bound needed later follows in the same way by multiplying the Fourier series by a smooth cutoff supported inside $Q$ and equal to one on $B_2$, then estimating the resulting convolution sum in whole-space weighted $L^2$. The cutoffs can be chosen radial before rotation, so all constants are independent of the phase direction. [F1, F2, step 1.2, algebra]

3.1 Put $r_0=3/2+\tau/2$ and $h_0=r_0-1=1/2+\tau/2$. Split the periodic potential into $q=q_\sharp+q_\flat$ by retaining frequencies of size at most $2^J$ in $q_\sharp$. Then $\|q_\flat\|_{H^{h_0}}\le C2^{-J\tau/2}M$, whereas $q_\sharp$ has bounded Sobolev norms of every order with bounds depending only on $J,M$. Choose $J$, depending only on $\tau,M$, so that $G_\zeta q_\flat$ as a multiplication-composition operator has norm at most $1/4$ both on shifted $H^{r_0}$ and on shifted $H^{1/2}$. On $H^{r_0}$ this follows from the product bound in step 1.1, with multiplier $r\in H^{r_0}$ and $q_\flat\in H^{h_0}$, and the $v=1$ bound of step 1.2. On $H^{1/2}$ it follows from step 2.1 with $\varepsilon=\tau/2$ and the same $v=1$ bound. Next choose $s$ large enough, depending only on $J,M,\tau$, that $G_\zeta q_\sharp$ has norm at most $1/4$ on both spaces, using the smooth multiplier bound from step 1.1 and the $v=0$ bound $C/s$ from step 1.2. Thus $I+G_\zeta q$ has inverse given by a convergent geometric series, of norm at most two, on both spaces. [step 1.1, step 2.1, step 1.2, step 2.2, choose, algebra]

4.1 Define $r_\zeta=-(I+G_\zeta q)^{-1}G_\zeta q$ in shifted $H^{r_0}$. The forcing $q$ in the last position is the actual compactly supported function on $Q$, represented in the shifted basis; the multiplication operators use the periodic representation of the same function. These agree pointwise inside $Q$. Step 1.2 with $\mu=1/2+\tau$ and $v=1-\tau/2$ gives $\|r_\zeta\|_{H^{r_0}(Q)}\le Cs^{-\tau/2}M$. Since $r_0>3/2$, weighted Cauchy–Schwarz for its coefficients gives $\|r_\zeta\|_\infty\le C\|r_\zeta\|_{H^{r_0}(Q)}$. This solution is also the unique shifted $H^{1/2}$ solution, by the second invertibility statement in step 3.1; using step 1.2 with $\mu=1/2,v=0$ gives $\|r_\zeta\|_{H^{1/2}(Q)}\le Cs^{-1}M$. Finally, its equation is $r_\zeta=-G_\zeta(q+qr_\zeta)$; since $q\in L^2$ and $r_\zeta\in L^\infty$, the $v=2$ bound from $L^2$ gives $\|r_\zeta\|_{H^2(Q)}\le CsM(1+M)$, enlarging the threshold to keep $s\ge1$. [step 1.2, step 2.2, step 3.1, construct, algebra]

5.1 Applying $A_\zeta$ to the equation in step 4.1 gives $A_\zeta r_\zeta+q(1+r_\zeta)=0$ in the interior of $Q$. Direct conjugation and $\zeta\cdot\zeta=0$ show this is exactly $(-\Delta+q)(e^{i\zeta\cdot x}(1+r_\zeta))=0$. The local comparison in step 2.2 transfers the fractional bounds to restriction norms on $B_2$, and restriction gives the integer $H^2$ bound there. Pulling back the initial rotation preserves the whole-space potential norm, the support ball, and the Euclidean PDE. Since $s=|\zeta|/\sqrt2$, step 4.1 yields all displayed estimates. The construction was on a fixed larger cube, so it imposes no boundary condition on the unit ball and supplies regularity on its full neighborhood. [step 1.2, step 2.2, step 4.1, algebra] ∎

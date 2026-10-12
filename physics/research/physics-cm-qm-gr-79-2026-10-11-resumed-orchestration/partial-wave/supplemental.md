# Partial-wave convergence: current local supplement

Research only, for `thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence`. The current carrier's fixed-channel matching and uniform angular convergence remain valid with the current stationary integral/flux and repaired angular suppliers. This note makes the tail constant and angular identification explicit. It proposes proof clarification only; retain the entire original Statement, real bounded central compact potential, every positive wave number, Countable Choice, the full amplitude/cross-section series and the complete conditional resonance model. This is neither production acceptance nor a gate/readiness receipt. Sole integration and affected-consumer ownership remains with spectral_lead. Inherited review caps are unchanged.

## Exact inputs and normalization

Use polar surface measure $d\sigma$, of area $4\pi$, and the Rodrigues polynomials with $P_l(1)=1$. The current associated-polynomial supplier defines its positive normalization from the actual norm rather than assuming the usual closed formula. The local Rodrigues calculation supplies

$$\int_{-1}^1P_l(t)^2dt=\frac2{2l+1},\qquad \int_{S^2}P_l(\Omega\cdot d)^2d\sigma=\frac{4\pi}{2l+1}.$$

Thus in coordinates with polar axis $d$ the supplier's $m=0$ normalized vector is $Y_{l0}=\sqrt{(2l+1)/(4\pi)}P_l$, with no change of surface measure. Weighted completeness at $m=0$ gives the zonal expansion with

$$c_l(F)=\frac{2l+1}{4\pi}\int_{S^2}F(\Omega)P_l(\Omega\cdot d)d\sigma.$$

A rotation of the polar axis preserves this measure, directly from polar volume integration and rotational invariance of Lebesgue measure. Consequently repaired angular normalization is compatible with the current proof, and no Coulomb radial continuum transform is needed.

For clarity the rotational step can use covariance of the actual construction rather than invoke unspecified uniqueness among every possible outgoing PDE solution. If $T\in SO(3)$ fixes $d$, its pullback on $L^2(B_R)$ commutes with $K_k$, hence with the bounded inverse of $I+K_k$, and fixes the incident datum. Therefore its constructed $u$ is invariant. Covariance of $G_k$ then makes $\Psi$ invariant and the compact-source amplitude formula makes $f_k$ invariant. This uses precisely the current supplied inverse and does not need a new uniqueness theorem.

## A fully specified differential operator and tail

Define the tangential vector fields $X_j$ on $S^2$ by $X_jF(\Omega)=\left.\frac d{ds}F(\exp(sA_j)\Omega)\right|_{s=0}$, where $A_jx=e_j\times x$ and $e_j$ are the three standard unit vectors. Set $L=-\sum_{j=1}^3X_j^2$ on $C^\infty(S^2)$. Rotation invariance of $\sigma$, differentiation of the integral of a product, and compactness give $\int X_jF\,\overline H\,d\sigma=-\int F\,\overline{X_jH}\,d\sigma$. Thus $L$ is symmetric on smooth functions. Direct differentiation for $p(\Omega\cdot d)$ gives $Lp=-[(1-t^2)p']'$, where $t=\Omega\cdot d$, so the actual Rodrigues equation yields $LP_l=l(l+1)P_l$. This defines and justifies the angular integration by parts used in current step 4.1 without requiring a self-adjoint sphere operator-domain theorem.

The compact source $q=Vu\in L^1(B_R)$ supplies $f_k(\Omega)=-(4\pi)^{-1}\int e^{-ik\Omega\cdot y}q(y)dy$. Each finite product of the $X_j$ differentiates this kernel into a bounded continuous function of $(\Omega,y)$ on $S^2\times\overline B_R$. Dominated differentiation therefore gives $f_k\in C^\infty(S^2)$ even for bounded measurable $v$. For $N\ge1$ set the finite explicit constant $C_N=\|L^Nf_k\|_{L^2(S^2)}/\sqrt{4\pi}$. Integration by parts $N$ times and the exact norm above give, for $l\ge1$,

$$|c_l(f_k)|\le C_N\frac{\sqrt{2l+1}}{[l(l+1)]^N}.$$

To justify the sup bound independently, finite binomial expansion and the even cosine integrals give the polynomial identity $P_l(t)=\pi^{-1}\int_0^\pi(t+i\sqrt{1-t^2}\cos s)^l ds$ for $|t|\le1$; equivalently its coefficients coincide with Rodrigues after expansion. The integrand's modulus is at most one, hence $\|P_l\|_\infty\le1$. For an integer cutoff $M\ge1$ and $N\ge2$, monotonicity and integration of $x^{1/2-2N}$ give

$$\sup_{\Omega\in S^2}\sum_{l>M}|c_l(f_k)P_l(\Omega\cdot d)|\le\frac{\sqrt3 C_N}{2N-3/2}M^{3/2-2N}.$$

In particular the tail is at most $(2\sqrt3/5)C_2M^{-5/2}$. These are fixed-$k$ bounds; no threshold or high-energy uniform estimate has been introduced. Absolute uniform convergence produces a continuous limit. Its $L^2$ limit is $f_k$ by zonal completeness; the two continuous functions agree everywhere, because every nonempty sphere patch has positive polar surface measure. This is full-amplitude identification, including the forward/backward directions, with no exchange of the infinite angular sum and a large-radius asymptotic expansion.

## Fixed-channel matching and the origin condition

The current Volterra construction is valid for every $l$ and bounded measurable real $v$. Its normalized solution has $\varphi_l=r^{l+1}(1+O(r^2))$. Its independent local branch is $r^{-l}$ times a nonzero leading constant. For $l\ge1$ this reduced branch is excluded by the projected $L^2(dr)$ condition near zero. For $l=0$ its unreduced coefficient is $c(r)=C/r+O(1)$ with $C\ne0$; projection of an $H^1$ function has $\int_0^a r^2|c'(r)|^2dr<\infty$ by angular Cauchy–Schwarz, whereas this branch diverges there. Thus the stationary $H^2_{\mathrm{loc}}$ domain excludes it. This explicitly accounts for the exceptional $l=0$ channel instead of relying on reduced $L^2$ alone.

For each fixed $l$, the exterior outgoing normalization is $f_l=ikr(j_l+iy_l)$ and $W(\overline f_l,f_l)=2ik$, with $W(a,b)=ab'-a'b$. Writing the real regular solution as $\varphi_l=a_lf_l+b_l\overline f_l$ gives $a_l=\overline b_l$ and $W_l=2ikb_l\ne0$, hence $S_l=\overline W_l/W_l=-a_l/b_l$. The reduced incident coefficient is $(2l+1)i^l(f_l-\overline f_l)/(2ik)$. The stationary far-field and radial derivative estimates eliminate the scattered incoming coefficient separately for each fixed $l$. It follows that

$$u_l^{\mathrm{sc}}=\frac{(2l+1)i^l}{2ik}(S_l-1)f_l,\qquad c_l(f_k)=\frac{2l+1}{2ik}(S_l-1).$$

Here $i^le^{-il\pi/2}=1$ cancels the free channel phase exactly. In the free test $W_l=-(2l+1)!!k^{-l}$ is real, so $S_l=1$ and every scattered coefficient vanishes. This confirms the sign convention, including $l=0$.

## Cross-section constant and retained model

Put $f_k^{(M)}=\sum_{l\le M}c_l(f_k)P_l$. Exact orthogonality gives

$$\int_{S^2}|f_k|^2d\sigma=\frac\pi{k^2}\sum_{l\ge0}(2l+1)|S_l-1|^2=\frac{4\pi}{k^2}\sum_{l\ge0}(2l+1)\sin^2\delta_l.$$

There is no missing factor of $2\pi$: it multiplies the one-dimensional norm $2/(2l+1)$. The nonnegative cross-section remainder also has the explicit bound

$$0\le\sigma-\int_{S^2}|f_k^{(M)}|^2d\sigma=\|f_k-f_k^{(M)}\|_2^2\le\frac{\|L^Nf_k\|_2^2}{4N-1}M^{1-4N}.$$

For the retained conditional scalar resonance model, $S_l=(x-ia)/(x+ia)$, $x=E-E_r$, $a=\Gamma/2>0$, yields $\sigma_l=4\pi(2l+1)k^{-2}a^2/(x^2+a^2)$. This retains the full original model calculation and its positive-energy wave-number qualification.

No missing local prerequisite was found for these fixed-channel and angular-tail conclusions, conditional on the exact current stationary/Fredholm suppliers and the repaired angular statements. The generic stationary/dynamical range identification is a separate owned obligation; this note does not assert it. stationary_identification reported compatible conventions $S=I+ikA/(2\pi)$ and scalar $S_l=\overline W_l/W_l$, with no changes to outgoing/flux scope. Local prose/supplier inspection only: no external full-text retrieval, independent audit, native acceptance or new review round is claimed.

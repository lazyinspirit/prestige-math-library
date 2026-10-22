# Sharp Fourier absorption checkpoint

This note records the unresolved estimate. It supplies no Step-1 readiness and does not replace the approved EIT logarithmic rate.

For $s_q=s_1-2\in(1/2,3/2)$, the complete local donors give $Q\in H^{s_q}$ uniformly, $N=\|Q\|_{H^{-1/2}}$, and

$$|\widehat Q(\xi)|\le C\delta e^{Ct}+C\langle\xi\rangle^{1/2}t^{-1}N\qquad(|\xi|\le b\le t).$$

The high-frequency contribution to $N$ is at most $CMb^{-s_q-1/2}$. The low-frequency squared remainder contribution is bounded by

$$Ct^{-2}N^2\int_{|\xi|\le b}\langle\xi\rangle^{-1}\langle\xi\rangle\,d\xi\le Cb^3t^{-2}N^2.$$

Therefore this pointwise argument requires $t\gtrsim b^{3/2}$ to absorb. It yields only logarithmic exponent $2(s_q+1/2)/3$, which is $2/3$ of the sharp H1 exponent requested by the controlling scope. That weaker estimate is not inserted into either original theorem as a replacement.

The cited Weidling Theorem 6.9 instead uses an unmodulated negative-Sobolev bound and obtains $b^2/t^2$, permitting $t\asymp b$. Its written inference removes the Fourier modulation inside a signed negative-Sobolev pairing. The norm convention (5.8b) is not modulation invariant. The generic inference is false: for a nonzero real $\chi\in C_c^\infty(B_\rho)$, take $Q_N=\chi\cos(Nx_1)$, $v=\chi$, and $\xi=Ne_1$. Then $\|Q_N\|_{H^{-1/2}}=O(N^{-1/2})$ while $\int Q_Ne^{-iNx_1}v\to\frac12\int\chi^2>0$. This does not disprove the complete stability theorem or a stronger estimate that uses the special CGO dependence.

One potential route is an estimate for the full weighted Fourier remainder operator, rather than separate pointwise estimates. The common-potential structure must be used. Uniform spatial Sobolev bounds on an otherwise arbitrary frequency-dependent symbol are insufficient at the negative half order.

For a fixed phase, the shifted-lattice construction does supply useful structure: $qG_\zeta$ is small on $H^{-1/2}$ after a low/high potential split. Its high piece uses $H^{1/2+\tau/2}\cdot H^{1/2}\to H^{-1/2}$ and the order-one resolvent bound; its smooth piece uses the same-order $O(t^{-1})$ bound. The CGO remainder is small in $H^{3/2+\tau/2}$, hence acts as a small multiplier on $H^{\pm1/2}$. Assembling such fixed-phase transformations for the actual frequency-dependent pair of null phases remains the genuine open authoring obligation here. It is not classified as an open mathematical problem.

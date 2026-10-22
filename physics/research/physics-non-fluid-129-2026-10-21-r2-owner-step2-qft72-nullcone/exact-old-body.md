

## Example

Let $\theta(\mathbf k)=\arccos(k_z/|\mathbf k|)\in[0,\pi]$. For $\sigma\in\{+1,-1\}$, $\theta_0\in[0,\pi]$, and $0<\delta\le\pi$, a normalized helicity-$\sigma$ packet of angular width $\delta$ is a vector $f\in\mathcal H_T^\nu$ with $\|f\|_\nu=1$, $P_\sigma f=f$ almost everywhere, and $f(\mathbf k)=0$ almost everywhere unless $|\theta(\mathbf k)-\theta_0|\le\delta$. Such packets exist for every $\theta_0$ and $\delta$. Each satisfies
$$\left|\langle f,S_z'f\rangle_\nu-\hbar\sigma\cos\theta_0\right|\le\hbar\delta.$$
Consequently, for any sequence $0<\delta_m\le\pi$ with $\delta_m\downarrow0$ and normalized helicity-$\sigma$ packets $f_m$ of widths $\delta_m$, $\langle f_m,S_z'f_m\rangle_\nu\to\hbar\sigma\cos\theta_0$. The exact cone $C_{\theta_0}:=\{\mathbf k\in M:\theta(\mathbf k)=\theta_0\}$ is $\nu$-null. Therefore every $g\in\mathcal H_T^\nu$ that vanishes $\nu$-almost everywhere on $M\setminus C_{\theta_0}$ is the zero element, and no such $g$ can be normalized.

## Example references

[[def-qftx-photon-helicity-bundle]]

[[prop-qftx-photon-fock-angular-lift]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the transverse one-photon Hilbert space, helicity projectors, and projected spin operator $S_z'$.

[A1] Assume the Axiom of Choice, as in the rotation and Fock suppliers. [[def-axiom-of-choice]]

[F1] The helicity spaces are the ranges of the orthogonal rank-one projectors $P_\sigma(\mathbf n)$ on the transverse fibers; each line has smooth local unit sections, and $\mathcal H_T^\nu$ uses $d\nu=d^3\mathbf k/(2|\mathbf k|)$. [[def-qftx-photon-helicity-bundle]]

[F2] For normalized helicity-$\sigma$ $f$, the projected-spin expectation is $\langle f,S_z'f\rangle_\nu=\hbar\sigma\int_M\cos\theta(\mathbf k)|f(\mathbf k)|^2\,d\nu(\mathbf k)$. [[prop-qftx-photon-fock-angular-lift]]

[F3] Cosine is $1$-Lipschitz: $|\cos u-\cos v|\le|u-v|$ for all real $u,v$. [[cor-sine-and-cosine-are-one-lipschitz]]

[F4] In spherical coordinates on $S^2$, the polar surface element is $d\Omega=\sin\theta\,d\theta\,d\phi$, and $d\nu=(r/2)\,dr\,d\Omega$, $r=|\mathbf k|$. The surface factor follows from $|\partial_\theta\mathbf n\times\partial_\phi\mathbf n|=\sin\theta$. [[thm-polar-coordinates-formula-for-lebesgue-measure]] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F5] Fubini applies to the product radial and angular measures, which are sigma-finite. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] A nonzero smooth bump supported in a coordinate ball exists; translation and rescaling give compact radial and angular cutoffs. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F7] Full Choice implies Countable Choice, the bundle supplier's hypothesis [F1], and is also the stated hypothesis of the Fock supplier [F2]. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

## Verification

**Given:** [A1], [F1]–[F7], $\theta_0\in[0,\pi]$, $0<\delta\le\pi$, and $\sigma\in\{+1,-1\}$.

1.1 By [F7], full Choice supplies Countable Choice to the bundle definition [F1]. The set $\{\mathbf n\in S^2:|\theta(\mathbf n)-\theta_0|<\delta\}$ is a nonempty open angular neighborhood of a direction with polar angle $\theta_0$. Choose a smaller coordinate ball whose closure lies in that neighborhood and in a trivializing patch for the helicity line from [F1]. Let $u_\sigma$ be its smooth unit section, choose a nonzero smooth bump $\chi$ supported in the ball by [F6], and choose a nonzero smooth radial bump $\eta$ supported in $1<r<2$. The field $\widetilde f(\mathbf k)=\eta(r)\chi(\mathbf n(\mathbf k))u_\sigma(\mathbf n(\mathbf k))$, extended by zero outside the patch, is smooth, compactly supported away from $\mathbf k=0$, transverse, and satisfies $P_\sigma\widetilde f=\widetilde f$. It is nonzero on an open set of positive $d\nu$ measure by [F4], so $0<\|\widetilde f\|_\nu<\infty$; normalizing it gives a packet of width $\delta$. Repeating for each $\delta_m$ with $0<\delta_m\le\pi$ proves the asserted existence of sequences. [A1, F1, F4, F6, F7, given, construct]

1.2 Under the full-Choice hypothesis [A1], the Fock supplier [F2] gives the projected-spin expectation formula; with $\|f\|_\nu=1$ it yields $\left|\langle f,S_z'f\rangle_\nu-\hbar\sigma\cos\theta_0\right|=\hbar\left|\int_M(\cos\theta(\mathbf k)-\cos\theta_0)|f(\mathbf k)|^2\,d\nu(\mathbf k)\right|$. On the support of $f$, [F3] bounds $|\cos\theta-\cos\theta_0|\le|\theta-\theta_0|\le\delta$. Taking the absolute value inside the integral and using normalization gives the claimed bound $\hbar\delta$. [A1, F2, F3, given, algebra]

2.1 For any sequence $0<\delta_m\le\pi$ with $\delta_m\downarrow0$, step 1.2 gives $|\langle f_m,S_z'f_m\rangle_\nu-\hbar\sigma\cos\theta_0|\le\hbar\delta_m\to0$, so the expectations converge to $\hbar\sigma\cos\theta_0$. [step 1.2, algebra]

3.1 For $0<\theta_0<\pi$, the angular set $\{\theta=\theta_0\}$ has surface measure zero because its $\theta$-coordinate is a singleton of one-dimensional Lebesgue measure zero in [F4]. At $\theta_0=0$ or $\pi$, the angular set is one pole; it is contained in a cap of area $2\pi(1-\cos\varepsilon)$ for each $\varepsilon>0$, and these areas tend to zero. Fubini [F5] on finite radial intervals, followed by their countable union, shows the exact radial cone $\{\theta=\theta_0\}$ is $\nu$-null. A fixed-radius conical shell is a subset and is also null. Every square-integrable field supported on a null set represents the zero Hilbert vector, so the stated ideal mode cannot be normalized. [F4, F5, given, algebra] ∎

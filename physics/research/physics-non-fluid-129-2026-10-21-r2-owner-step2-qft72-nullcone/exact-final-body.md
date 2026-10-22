

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

[F8] Under Countable Choice, every coordinate box, including a degenerate box with a zero side length, is Lebesgue measurable with measure equal to the product of its side lengths. In particular singletons in $\mathbb R$ and $\mathbb R^2$ and bounded rectangles contained in a coordinate line in $\mathbb R^2$ have measure zero. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

## Verification

**Given:** [A1], [F1]–[F8], $\theta_0\in[0,\pi]$, $0<\delta\le\pi$, and $\sigma\in\{+1,-1\}$.

1.1 By [F7], full Choice supplies Countable Choice to the bundle definition [F1]. The set $\{\mathbf n\in S^2:|\theta(\mathbf n)-\theta_0|<\delta\}$ is a nonempty open angular neighborhood of a direction with polar angle $\theta_0$. Choose a smaller coordinate ball whose closure lies in that neighborhood and in a trivializing patch for the helicity line from [F1]. Let $u_\sigma$ be its smooth unit section, choose a nonzero smooth bump $\chi$ supported in the ball by [F6], and choose a nonzero smooth radial bump $\eta$ supported in $1<r<2$. The field $\widetilde f(\mathbf k)=\eta(r)\chi(\mathbf n(\mathbf k))u_\sigma(\mathbf n(\mathbf k))$, extended by zero outside the patch, is smooth, compactly supported away from $\mathbf k=0$, transverse, and satisfies $P_\sigma\widetilde f=\widetilde f$. It is nonzero on an open set of positive $d\nu$ measure by [F4], so $0<\|\widetilde f\|_\nu<\infty$; normalizing it gives a packet of width $\delta$. Repeating for each $\delta_m$ with $0<\delta_m\le\pi$ proves the asserted existence of sequences. [A1, F1, F4, F6, F7, given, construct]

1.2 Under the full-Choice hypothesis [A1], the Fock supplier [F2] gives the projected-spin expectation formula; with $\|f\|_\nu=1$ it yields $\left|\langle f,S_z'f\rangle_\nu-\hbar\sigma\cos\theta_0\right|=\hbar\left|\int_M(\cos\theta(\mathbf k)-\cos\theta_0)|f(\mathbf k)|^2\,d\nu(\mathbf k)\right|$. On the support of $f$, [F3] bounds $|\cos\theta-\cos\theta_0|\le|\theta-\theta_0|\le\delta$. Taking the absolute value inside the integral and using normalization gives the claimed bound $\hbar\delta$. [A1, F2, F3, given, algebra]

2.1 For any sequence $0<\delta_m\le\pi$ with $\delta_m\downarrow0$, step 1.2 gives $|\langle f_m,S_z'f_m\rangle_\nu-\hbar\sigma\cos\theta_0|\le\hbar\delta_m\to0$, so the expectations converge to $\hbar\sigma\cos\theta_0$. [step 1.2, algebra]

3.1 Put $E_{\theta_0}=\{\mathbf n\in S^2:\theta(\mathbf n)=\theta_0\}$. If $0<\theta_0<\pi$, cover this latitude by two overlapping azimuth-coordinate charts. In each chart its coordinate preimage lies in a bounded rectangle $\{\theta_0\}\times[a,b]$, which is Lebesgue null by [F8]; the chart-area formula $\sin\theta\,d\theta\,d\phi$ in [F4] therefore gives zero surface measure. If $\theta_0=0$ or $\pi$, $E_{\theta_0}$ is a single pole. A smooth regular sphere chart centered at that pole has a singleton preimage, null in $\mathbb R^2$ by [F8]; integrating the chart area density over that singleton again gives zero surface measure by the chart-measure identification in [F4]. Thus $E_{\theta_0}$ is surface-null for every stated $\theta_0$. For each integer $m\ge2$, the annulus $1/m\le r\le m$ has finite $\nu$-measure by [F1] and [F4], so the cone indicator restricted to it is integrable. The polar decomposition in [F4] and Fubini [F5] give
$$\nu\bigl(C_{\theta_0}\cap\{1/m\le r\le m\}\bigr)=\int_{1/m}^{m}\frac r2\,dr\int_{S^2}\mathbf1_{E_{\theta_0}}\,d\Omega=0.$$
These annuli cover $M$, so countable subadditivity gives $\nu(C_{\theta_0})=0$. If $g\in\mathcal H_T^\nu$ vanishes $\nu$-almost everywhere on $M\setminus C_{\theta_0}$, its squared norm is the sum of the integrals of $|g|^2$ over that complement and the null cone, both zero. Hence $\|g\|_\nu=0$ and $g$ is the zero Hilbert-space element; in particular it cannot be normalized. This is the exact null-cone conclusion in the Example. [F1, F4, F5, F7, F8, given, algebra] ∎

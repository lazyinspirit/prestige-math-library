---
id: lem-ip-local-bolker-positive-packet-estimate
kind: lemma
title: "Local Bolker incidence packets have a positive reduced phase"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-double-fibration-transform
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-bolker-condition
  - lem-ip-local-analytic-elliptic-packet-calculus
  - lem-ip-holomorphic-morse-normalization-and-gaussian-contour
  - thm-ip-analytic-stationary-phase-with-exponential-remainder
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - thm-holomorphic-inverse-function-theorem-several-variables
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§§5.3–5.6, wavepacket resolution and reduced positive phase. The proof below gives a direct Schur-complement proof of positivity."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§2, parameter stationary phase; §6, general positive packet criterion."
---

## Statement

Let $R$ be an analytic double-fibration transform, and fix a relation point $(z_0,\zeta_0;x_0,\xi_0)$ at which $d\pi_L$ is injective. For distributions $u$ supported in a sufficiently small neighborhood of $x_0$, data Gaussian exponential regularity at $(z_0,\zeta_0)$ implies object Gaussian exponential regularity at $(x_0,\xi_0)$.

More precisely, for data parameters $v=(q,p)$ near that point on the local embedded image $V$ of $\pi_L$, write $\chi(v)=(X(v),\Xi(v))$ for the paired object covector. The transpose localized data Gaussian has the form
$$
K_\lambda(x,v)=\lambda^{-d/2}e^{i\lambda\psi(x,v)}A(x,v;\lambda)+E_\lambda(x,v), \qquad d=\dim Z-\dim X,
$$
where $A$ is an elliptic classical analytic amplitude, $E_\lambda=O(e^{-c_m\lambda})$ in every fixed object derivative, and
$$
\psi(X(v),v)=-q\cdot p,\quad d_x\psi(X(v),v)=-\Xi(v),\quad \operatorname{Im}\psi(x,v)\ge c|x-X(v)|^2
$$
for real parameters. The map $\chi$ is an analytic submersion onto an open object cotangent neighborhood and has a local analytic section there. The constant factor in the kernel formula includes the nonzero Gaussian determinant on its continuous branch.

## Statement references

[[def-ip-analytic-double-fibration-transform|Analytic nonvanishing incidence density]]

[[def-ip-bolker-condition|Injective left differential]]

[[lem-ip-local-analytic-elliptic-packet-calculus|General elliptic analytic packet criterion]]

[[thm-ip-analytic-stationary-phase-with-exponential-remainder|Normalized stationary phase]]

## Facts & Assumptions

**Given:** The analytic transform and the relation point with injective left differential.

[F1] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]] gives the incidence pairing, its signed conormal relation and fixed distributional derivative order.

[F2] [[def-ip-analytic-double-fibration-transform]] gives analytic submersions, properness and a nowhere vanishing analytic total density and weight.

[F3] [[thm-real-analytic-inverse-and-implicit-function-theorems]] gives analytic fiber charts and local sections of analytic submersions by selecting an invertible derivative minor.

[F4] [[lem-ip-holomorphic-morse-normalization-and-gaussian-contour]] and [[thm-ip-analytic-stationary-phase-with-exponential-remainder]] give Gaussian determinant, holomorphic critical point reduction, admissible contour deformation and normalized factorial remainders.

[F5] [[lem-ip-local-analytic-elliptic-packet-calculus]] gives equivalence of normalized positive analytic elliptic packets with Gaussian packets, including fixed-order exponentially small errors.

[F7] [[thm-holomorphic-inverse-function-theorem-several-variables]] gives the holomorphic inverse, and hence the implicit critical-point map after retaining the parameter coordinates.

## Proof

**Given:** The data in the statement. All coordinate neighborhoods below are fixed and then shrunk; bounds are uniform on their compactly contained successors.

1.1 Choose analytic fiber coordinates for $\pi_X$, $ (t,x)\longmapsto (z(t,x),x)\in Z,\qquad t\in\mathbb R^d. $ The matrix $D_tz$ is injective because this map is an immersion with $x$ retained. The conormal equations from [F1] are $ (D_tz)^Tp=0,\qquad \xi=(D_xz)^Tp. $ The first equations define an analytic bundle of rank $\dim G-d$ in the $p$ variables, so $(t,x,p)$ with these equations parameterize $C_Z$ locally. The map to data cotangent space is $(t,x,p)\mapsto(z(t,x),p)$. Its derivative is injective by the hypothesis; selecting a full-rank coordinate minor and applying [F3] makes it an analytic embedding on a smaller neighborhood. Denote its image by $V$. [F1, F2, F3, given, algebra]

1.2 We make the exact packet resolution explicit, without importing a Fourier inversion theorem with an additional choice assumption. In $\mathbb R^n$, set $ m^\lambda_{a,b}(y)=2^{-n/2}\pi^{-3n/4}\lambda^{3n/4}e^{i\lambda y\cdot b-\lambda|y-a|^2/2}. $ Then, with the frequency integral interpreted by the indicated Gaussian regularization, $ u(y)=\lim_{\varepsilon\downarrow0}\int e^{-\varepsilon|b|^2}\langle u,\overline{m^\lambda_{a,b}}\rangle m^\lambda_{a,b}(y)\,da\,db $ in distributions. Indeed the $b$ integral is $(\pi/\varepsilon)^{n/2}e^{-\lambda^2|y-y'|^2/(4\varepsilon)}$, by completing the square and the Gaussian contour formula [F4]. The $a$ integral is $(\pi/\lambda)^{n/2}e^{-\lambda|y-y'|^2/4}$. Including the squared normalization, their product is a Gaussian kernel in $y-y'$ with mass tending to $1$ as $\varepsilon\downarrow0$ and width tending to $0$. Pairing against a compact test, each fixed derivative converges uniformly on the support of $u$: split into a small translation neighborhood controlled by uniform continuity and its Gaussian tail. Thus [F1] justifies the distributional limit. The limiting normalization is exactly one, as also follows by multiplying $(2\pi/\lambda)^n$ and $(\pi/\lambda)^{n/2}$ by the squared packet constant. Applying this identity on data space, or directly transposing the incidence integral, gives the same object kernel as direct transposition of the incidence integral. [F1, F4, construct, algebra]

2.1 The paired map $\chi:V\to T^*X$ is a submersion. Here is a local linear-algebra proof. On $C_Z$, the one-form $p\,dz-\xi\,dx$ vanishes by the conormal equations; hence its differential also vanishes. The tangent space $L$ of $C_Z$ therefore is isotropic for the nondegenerate bilinear alternating form $dp\wedge dz-d\xi\wedge dx$. Its dimension is $\dim G+\dim X$, half the ambient dimension, so $L$ equals its alternating orthogonal complement. If $d\pi_R(L)$ were a proper subspace, the nondegenerate form $d\xi\wedge dx$ would give a nonzero vector $w$ orthogonal to it. Then $(0,w)$ would be orthogonal to $L$, hence in $L$, and would lie in the kernel of $d\pi_L$. This contradicts injectivity. Thus $d\pi_R$ is onto. The argument uses only the matrix criterion for an alternating form to be nondegenerate and the dimension formula for its orthogonal complement. By [F3], $\chi$ has a local analytic section $v=v(Q,P)$ onto an open neighborhood of $(x_0,\xi_0)$. [F3, step 1.1, algebra]

2.2 Pair $Ru$ with the data Gaussian and use the typed transpose in [F1]. Up to the harmless unit factor $e^{i\lambda q\cdot p}$ its object kernel is $ K_\lambda(x,v)=\int e^{i\lambda\Psi(t,x,v)}b(t,x)\,dt,\qquad \Psi=-z(t,x)\cdot p+\frac i2|z(t,x)-q|^2. $ The analytic coefficient $b$ is nowhere zero by [F2] and the fiber-coordinate Jacobian. Data and fiber cutoffs are one near the base incidence point. Their transition pieces have $|z-q|\ge r>0$ after shrinking $x,v$; their integrals are $O(e^{-c\lambda})$ in every fixed object derivative by the finite-order distribution estimates and the Gaussian factor. Properness ensures the remaining relevant incidence portion is compact, so finitely many such estimates suffice. A fixed fiber cutoff can therefore be inserted without changing the formula except for these errors. [F1, F2, step 1.1, step 1.2, algebra]

2.3 For $v\in V$ real there is a unique nearby real $t_0(v)$ with $z(t_0(v),X(v))=q$. At this point $\Psi_t=0$ by step 1.1. Put $D=D_xz$, $T=D_tz$, evaluated there. Its complex $t$ Hessian is $ H=B+iT^TT,\qquad B=-\partial_t^2(z\cdot p), $ where $B$ is real symmetric and $T$ is injective. This matrix is invertible: if $Hw=0$, the imaginary part of $w^*Hw$ is $|Tw|^2$, forcing $w=0$. Apply [F7] to the map retaining $(x,v)$ and replacing $t$ by $\Psi_t$; it gives a unique nearby complex critical point $t_c(x,v)$ for all nearby complex $x,v$. Shrink the original fiber neighborhood so it contains no other critical point: outside a small ball about $t_0$, continuity and the injectivity of the local coordinate chart preserve a positive lower bound for the phase gradient or for $|z-q|$. Define $\psi(x,v)=\Psi(t_c(x,v),x,v)$. [F3, F4, F7, step 1.1, algebra]

3.1 We prove its strict object positivity directly, rather than assume a positivity property of a formal stationary phase. At $(t_0,X(v),v)$ the full Hessian in $(t,x)$ is a complex symmetric matrix $ \mathcal H=\mathcal R+i\mathcal S,\qquad \mathcal S=[T\ D]^T[T\ D],\qquad \mathcal R=-\partial^2_{t,x}(z\cdot p). $ For a real object variation $h$, let $\tau$ be the complex solution of the stationary linearized equation $\mathcal H_{tt}\tau+\mathcal H_{tx}h=0$. Write $U=(\operatorname{Re}\tau,h)$ and $W=(\operatorname{Im}\tau,0)$. The real part of the stationary equation gives $(\mathcal R U)_t=(\mathcal S W)_t$. Therefore $ \operatorname{Im}\bigl((\tau,h)^T\mathcal H(\tau,h)\bigr) =U^T\mathcal S U-W^T\mathcal S W+2W^T\mathcal R U =|T\operatorname{Re}\tau+Dh|^2+|T\operatorname{Im}\tau|^2. $ This is precisely $\operatorname{Im}(h^T\psi_{xx}h)$ by differentiating the critical-point identity. If it is zero, injectivity of $T$ gives $\operatorname{Im}\tau=0$, and $T\tau+Dh=0$. The remaining stationary equation is $\mathcal R_{tt}\tau+\mathcal R_{tx}h=0$. These two equations say that $(\tau,h,\dot p=0)$ is a tangent variation of the conormal equations $(D_tz)^Tp=0$ and has $\dot z=\dot p=0$. By injectivity of $d\pi_L$ it is zero, so $h=0$. Compactness of the real unit sphere now gives a strictly positive lower bound for $\operatorname{Im}\psi_{xx}$, uniform for $v$ in a smaller compact neighborhood in $V$. [step 1.1, step 2.3, algebra]

4.1 The critical-value and derivative identities are $ \psi(X(v),v)=-q\cdot p,\qquad \psi_x(X(v),v)=-D_xz(t_0,X(v))^Tp=-\Xi(v). $ The imaginary part and its first object derivative vanish there. Taylor's integral formula and the strict Hessian bound in step 3.1 therefore give $\operatorname{Im}\psi(x,v)\ge c|x-X(v)|^2$ for real $x,v$ nearby. This fixes the sign for the FBI pairing: the test function has derivative $-\Xi$, while the distributional covector detected is $+\Xi$. [step 1.1, step 2.3, step 3.1, algebra]

5.1 Apply analytic stationary phase at the complex critical point in step 2.3. Its applicability here includes uniform contour and remainder estimates as follows. At the base real parameters the real $t$ contour has positive quadratic imaginary part $T^TT$; its outer boundary has a fixed positive imaginary margin by step 2.2. For nearby parameters move the interior contour through $t_c(x,v)$ using the holomorphic quadratic coordinates in [F4], keeping the boundary fixed. In those coordinates the contour remains a graph whose Gaussian real part is bounded below by a fixed positive quadratic form, by openness of positive definiteness. Interpolate to its linear tangent contour as in the Gaussian-contour proof; the cubic error is dominated after shrinking the fixed ball. Stokes deformation consequently has a fixed exponential boundary margin. Cauchy bounds for the amplitude and the inverse coordinate map are uniform on smaller complex parameter neighborhoods. Applying the normalized remainder in [F4] with $N=\lfloor\epsilon\lambda\rfloor$ gives $ K_\lambda=\lambda^{-d/2}e^{i\lambda\psi}A+E_\lambda. $ The leading coefficient of $A$ is $(2\pi)^{d/2}b(t_0,x)(\det(-i\Psi_{tt}))^{-1/2}$, nonzero on the fixed branch. Its coefficients have uniform factorial bounds. For real parameters $\operatorname{Im}\psi\ge0$, so normalized exponential errors also give absolute exponential errors. For fixed object derivatives take a smaller complex neighborhood where $|\operatorname{Im}\psi|$ is less than half the boundary/remainder margin and apply Cauchy; the cutoff transition pieces already have the corresponding finite-order real derivative bounds. Hence $E_\lambda=O(e^{-c_m\lambda})$ in every fixed object derivative as claimed. [F3, F4, step 2.2, step 2.3, step 4.1, algebra]

6.1 Suppose the data Gaussian criterion holds. By [F5], its unit-direction formulation is equivalent to the Gaussian packet with $p$ in an open ball about the supplied nonzero data covector; positive radial frequency scaling only changes the exponential constant. Thus the data Gaussian pairings used in step 2.2 are uniformly exponentially small on an open parameter neighborhood. Pair the formula in step 5.1 with $u$; its finite order absorbs the errors. Multiply by $\lambda^{d/2}e^{i\lambda q\cdot p}$, whose modulus on real parameters is only polynomial. Pull back $v$ by the analytic section $v(Q,P)$ from step 2.1. The resulting object test phase $ \widetilde\psi(x,Q,P)=\psi(x,v(Q,P))+q(Q,P)\cdot p(Q,P) $ vanishes at $x=Q$, has derivative $-P$ there and imaginary part at least $c|x-Q|^2$. Its amplitude is elliptic by step 5.1. Thus [F5] converts this exponential estimate into the Gaussian criterion at $(x_0,\xi_0)$. All input support here is in the chosen local object neighborhood, and every tail and inverse error has been estimated before pairing with the distribution. This proves the local implication. [F1, F5, step 2.1, step 4.1, step 5.1, algebra] ∎

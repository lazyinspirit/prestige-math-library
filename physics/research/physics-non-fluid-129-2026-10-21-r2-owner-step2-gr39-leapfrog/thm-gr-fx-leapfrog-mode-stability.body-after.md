
## Statement

Let $N\ge3$, $h=2\pi/N$, $k>0$, and $\lambda=k/h$. Complexify the real
linear recurrence of the periodic wave algorithm. For each discrete Fourier
index $\ell\in\{0,1,\ldots,N-1\}$ define the mode
$$
e_\ell(j):=\exp(2\pi i\ell j/N),\qquad j\in\mathbb Z/N\mathbb Z.
$$
If $0<\lambda<1$, every nonconstant mode ($\ell\ne0$) has recurrence
coefficient
$$
c_\ell:=1-2\lambda^2\sin^2(\pi\ell/N)\in(-1,1)
$$
and two distinct amplification roots
$$
z_{\ell,\pm}:=c_\ell\pm i\sqrt{1-c_\ell^2},\qquad |z_{\ell,\pm}|=1.
$$
Consequently, each fixed nonconstant mode has bounded amplitude on every
finite slab. For arbitrary real initial arrays define their spatial means by
$$
\bar u^0:=\frac1N\sum_{j=0}^{N-1}u^0_j,\qquad \bar v^0:=\frac1N\sum_{j=0}^{N-1}v^0_j.
$$
The constant mode has the repeated root $1$ and evolves exactly as
$\bar u^0+nk\bar v^0$; for any fixed $T\ge0$ it is bounded on the slab
$0\le nk\le T$ but has no uniform-in-time displacement bound when
$\bar v^0\ne0$. This statement
does not assert that the condition $0<\lambda<1$ alone proves convergence of a
numerical relativity scheme. Define the nonzero discrete frequencies $\omega_\ell:=2h^{-1}|\sin(\pi\ell/N)|$, $1\le\ell<N$. On this fixed torus they satisfy the mesh-independent lower bound
$$\omega_\ell\ge\frac2\pi\qquad(N\ge3,\ 1\le\ell<N).$$
In particular each fixed grid has a positive minimum. This frequency bound is not a mesh-independent amplitude bound for arbitrary unscaled two-step data $(a_0,a_1)$: the distinct-root coefficients in the mode solution can depend on the grid and the initial data. The constant-mode qualifications above are unchanged.
For even $N$, the alternating mode with Fourier index $\ell=N/2$ is called
the Nyquist mode. At the endpoint $\lambda=1$, if $N$ is even and
$u_j^0=a_0(-1)^j$, $v_j^0=\beta_0(-1)^j$ for real amplitudes $a_0,\beta_0$,
then each output level satisfies
$$
u_j^n=(-1)^j(-1)^n(a_0-nk\beta_0).
$$
The Nyquist amplification root is repeated at $-1$, and a nonzero Nyquist
velocity amplitude $\beta_0$ gives linear growth in the step number.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

[[def-complex-exponential]]

[[def-complex-numbers-and-arithmetic]]

[[thm-complex-numbers-form-a-field]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[lem-complex-conjugation-and-modulus-laws]]

[[def-abs-value]]

[[lem-of-abs-value]]

[[lem-of-triangle-inequality]]

[[lem-of-square-positive]]

[[thm-of-archimedean]]

[[thm-eulers-formula]]

[[thm-sine-and-cosine-addition-formulas]]

[[thm-sine-and-cosine-derivatives]]

[[thm-quarter-turn-values-and-shift-formulas]]

[[cor-trigonometric-parity-and-pythagorean-identity]]

[[thm-sine-cosine-zero-sets-and-fundamental-period]]

[[thm-nth-roots-exist]]

[[def-finite-sum]]

[[lem-finite-sum-reindexing-and-fubini]]

[[cor-mean-value-theorem]]

[[cor-pi-is-the-first-positive-sine-zero]]

## Facts & Assumptions

**Given:** The real periodic wave algorithm, $N\ge3$, $k>0$, and
$0<\lambda=k/h<1$.

[A1] The recurrence is extended complex-linearly to $\mathbb C^N$; its
real and imaginary parts separately satisfy the original real recurrence.

[F1] [[alg-gr-fx-periodic-wave-leapfrog]]: $h=2\pi/N>0$, $D_h$ is the
centered periodic second difference, the startup is
$u^1=u^0+kv^0+(k^2/2)D_hu^0$, and for $n\ge1$ the update is
$u^{n+1}=2u^n-u^{n-1}+k^2D_hu^n$.

[F2] [[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]],
[[def-complex-exponential]]: $\mathbb C$ is a field containing the specified
copy of $\mathbb R$, every complex number has a unique form $a+bi$ with
$a,b\in\mathbb R$, $i^2=-1$, and the complex exponential is defined by its
power series.

[F3] [[thm-eulers-formula]], [[thm-sine-and-cosine-derivatives]]:
$\exp(i\theta)=\cos\theta+i\sin\theta$, $\sin'=\cos$, $\cos'=-\sin$, $\cos0=1$, and $\sin0=0$.

[F4] [[thm-sine-and-cosine-addition-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]]: the double-angle
identity is $\cos(2x)-1=-2\sin^2x$.

[F5] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: sine and cosine
have period $2\pi$, the zero set of sine is $\pi\mathbb Z$, and for
$0<\ell<N$, $\sin(\pi\ell/N)\ne0$.

[F6] [[cor-trigonometric-parity-and-pythagorean-identity]]: for every real
$x$, $\sin^2x+\cos^2x=1$.

[F7] [[thm-nth-roots-exist]]: $\mathbb R$ is a complete ordered field, and
each nonnegative real has a unique nonnegative square root.

[F8] [[def-finite-sum]], [[lem-finite-sum-reindexing-and-fubini]]: finite
cyclic shifts preserve the sum of an $N$-tuple.

[F9] [[thm-quarter-turn-values-and-shift-formulas]]: shifts by $\pi$ negate
sine and cosine, and $\sin(\pi/2)=1$, $\sin\pi=0$, $\cos\pi=-1$.

[F10] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: for the unique
coordinates $z=a+bi$, $\overline z=a-bi$ and the complex modulus is
$|z|=\sqrt{a^2+b^2}$, using the nonnegative real square root.

[F11] [[lem-complex-conjugation-and-modulus-laws]]: complex conjugation obeys
$\overline{zw}=\overline z\,\overline w$ and
$\overline{z+w}=\overline z+\overline w$; $z\overline z=|z|^2$;
$|z|\ge0$ with $|z|=0$ exactly when $z=0$; and
$|zw|=|z||w|$, $|z+w|\le|z|+|w|$.

[F12] [[def-abs-value]]: for a real $x$, its absolute value is $|x|=x$ if
$x\ge0$ and $|x|=-x$ if $x<0$.

[F13] [[lem-of-abs-value]]: real absolute values are nonnegative and definite
($|x|=0$ exactly when $x=0$), satisfy $|-x|=|x|$, and are multiplicative.

[F14] [[lem-of-square-positive]]: in the ordered field $\mathbb R$, a nonzero
real number has a positive square; the square of zero is zero.

[F15] [[lem-of-triangle-inequality]]: for real $x,y$,
$|x+y|\le|x|+|y|$.

[F16] [[thm-of-archimedean]]: for every $x\in\mathbb R$ there is a natural
$n\ge1$ with $x<n$.

[F17] [[cor-mean-value-theorem]]: if a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, with $a<b$, then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

[F18] [[cor-pi-is-the-first-positive-sine-zero]]: $\sin x>0$ for $0<x<\pi$, and $\sin\pi=0$.

## Proof

**Proof technique:** direct.

1.1 The period and zero-set facts in [F3, F5] make $e_\ell$ well-defined on $\mathbb Z/N\mathbb Z$. Put $\theta_\ell=2\pi\ell/N$. Euler's formula and the addition formulas [F3, F4], together with the complex multiplication formulas [F2], give $e_\ell(j+1)=e^{i\theta_\ell}e_\ell(j)$ and $e_\ell(j-1)=e^{-i\theta_\ell}e_\ell(j)$. Therefore $$ (D_he_\ell)(j)=h^{-2}\bigl(e^{i\theta_\ell}-2+e^{-i\theta_\ell}\bigr)e_\ell(j) =-4h^{-2}\sin^2(\pi\ell/N)e_\ell(j), $$ where the last equality uses [F3, F4]. Thus a mode sequence $u^n_j=a_ne_\ell(j)$ obeys $a_{n+1}-2c_\ell a_n+a_{n-1}=0$ for every update step. [A1, F1, F2, F3, F4, F5, algebra]

1.2 For the constant mode, define $\bar u^n=N^{-1}\sum_{j=0}^{N-1}u_j^n$. By [F8], a cyclic shift preserves a finite sum, so $\sum_j(D_hu^n)_j=0$. Averaging the update [F1] therefore gives $\bar u^{n+1}=2\bar u^n-\bar u^{n-1}$, and averaging the startup gives $\bar u^1=\bar u^0+k\bar v^0$. Induction yields $\bar u^n=\bar u^0+nk\bar v^0$. If $0\le nk\le T$, then [F12, F13] give $|nk\bar v^0|=nk|\bar v^0|\le T|\bar v^0|$, and the real triangle inequality [F15] gives $|\bar u^n|\le|\bar u^0|+T|\bar v^0|$. If $\bar v^0\ne0$, then [F13] gives $|\bar v^0|>0$. Given any $M>0$, [F16] supplies a natural $n\ge1$ with $n>(M+|\bar u^0|)/(k|\bar v^0|)$; this quotient is defined because $k|\bar v^0|>0$. Since $nk\ge0$, [F12, F13] give $|nk\bar v^0|=nk|\bar v^0|$, and [F15] applied to $nk\bar v^0=(\bar u^0+nk\bar v^0)-\bar u^0$ yields $|\bar u^0+nk\bar v^0|\ge nk|\bar v^0|-|\bar u^0|>M$, proving unboundedness. [F1, F8, F12, F13, F15, F16, algebra]

1.3 The derivative identities in [F3] give $\sin'=\cos$ and $\cos'=-\sin$ everywhere, so both functions are continuous and differentiable on the closed subintervals used here. By [F18], $\cos'<0$ on $(0,\pi/2)$; applying [F17] to cosine on any $[a,b]\subseteq[0,\pi/2]$ with $a<b$ shows $\cos b<\cos a$. For $0<x<\pi/2$, apply [F17] to sine on $[0,x]$ and $[x,\pi/2]$. Since [F3, F9] give $\sin0=0$ and $\sin(\pi/2)=1$, there are $c_1\in(0,x)$ and $c_2\in(x,\pi/2)$ with $\sin x/x=\cos c_1$ and $(1-\sin x)/(\pi/2-x)=\cos c_2$. The just-proved decrease gives $\sin x/x\ge(1-\sin x)/(\pi/2-x)$. Multiplying by the positive denominators and rearranging gives $\sin x\ge2x/\pi$. This also holds at $x=0,\pi/2$ by their stated values. For $1\le\ell<N$, let $m=\min\{\ell,N-\ell\}$, so $1\le m\le N/2$. Parity and the $\pi$ shift in [F4, F9] give $\sin(\pi\ell/N)=\sin(\pi m/N)>0$. Applying the chord bound at $x=\pi m/N$ gives $|\sin(\pi\ell/N)|\ge2m/N$. Consequently, since $h=2\pi/N$, one has $\omega_\ell=2h^{-1}|\sin(\pi\ell/N)|\ge2m/\pi\ge2/\pi$, uniformly in $N$. Taking successive minima over the finite list still gives an attained positive minimum on each grid. This proof is a frequency bound only and does not bound the initial-data-dependent coefficients of the two-root representation uniformly over arbitrary unscaled pairs. [F1, F3, F4, F9, F12, F13, F17, F18, algebra]

1.4 Suppose $N$ is even and $\lambda=1$. Repeated $\pi$-shift use of [F9] gives $\sin(\pi j)=0$ and $\cos(\pi j)=(-1)^j$ for every grid index $0\le j<N$; Euler's formula [F3] identifies the Fourier character $e_{N/2}(j)$ with the alternating array $(-1)^j$. Its periodic neighbors are equal to its negative. By [F1], $(D_h((-1)^\cdot))_j=-4h^{-2}(-1)^j$, so the mode recurrence has coefficient $c=1-2\lambda^2=-1$ and characteristic polynomial $(z+1)^2$. [F1, F3, F9, algebra]

2.1 If $\ell\ne0$, [F5] gives $s:=\sin(\pi\ell/N)\ne0$, so $s^2>0$ by [F14]. Also $\cos^2(\pi\ell/N)\ge0$ by [F14] and the zero case, hence [F6] gives $s^2\le1$. As $0<\lambda<1$, it follows that $0<2\lambda^2s^2\le2\lambda^2<2$, so $-1<c_\ell<1$. Then $r_\ell:=\sqrt{1-c_\ell^2}$ exists and is positive by [F7]. Direct substitution shows that $z^2-2c_\ell z+1=0$ has roots $c_\ell\pm ir_\ell$; they are distinct. By [F10], their complex moduli are $\sqrt{c_\ell^2+r_\ell^2}=\sqrt1=1$, where the last equality uses uniqueness of the nonnegative square root [F7]. [A1, F2, F5, F6, F7, F10, F14, step 1.1, algebra]

3.1 Since the roots are distinct, for any initial pair $a_0,a_1$ there are unique complex constants $A,B$ with $a_0=A+B$ and $a_1=Az_{\ell,+}+Bz_{\ell,-}$. The sequence $Az_{\ell,+}^n+Bz_{\ell,-}^n$ obeys the recurrence in step 1.1 and has that initial pair; induction on $n$ therefore identifies it with $a_n$. By multiplicativity in [F11], induction gives $|z_{\ell,\pm}^n|=|z_{\ell,\pm}|^n=1$. The complex triangle inequality and multiplicativity in [F11] then give $|Az_{\ell,+}^n+Bz_{\ell,-}^n|\le|A||z_{\ell,+}^n|+|B||z_{\ell,-}^n|=|A|+|B|$ for all $n$, so the mode is bounded on every finite slab. [F11, step 1.1, step 2.1, algebra]

4.1 Write $u_j^n=a_n(-1)^j$ and put $q_n:=(-1)^na_n$. The repeated-root recurrence from step 1.4 gives $q_{n+1}-2q_n+q_{n-1}=0$, so its first differences are constant and $q_n=a_0+n(-a_1-a_0)$. The startup in [F1] with $u_j^0=a_0(-1)^j$ and $v_j^0=\beta_0(-1)^j$ gives $a_1=-a_0+k\beta_0$, hence $a_n=(-1)^n(a_0-nk\beta_0)$. For $\beta_0\ne0$ its magnitude grows linearly in $n$; for $\beta_0=0$ it is bounded. [F1, step 1.4, algebra] ∎

## Remarks

The root calculation is mode-by-mode. A convergence theorem for a discretized
Einstein system would also need an error estimate for the initialization and
a discrete energy estimate for the actual reduced equations, including its
boundary treatment. The analytic finite-slab estimate on
[[thm-gr-fx-finite-slab-stability]] concerns continuum solutions of a fixed
gauge system and does not supply those discrete estimates.

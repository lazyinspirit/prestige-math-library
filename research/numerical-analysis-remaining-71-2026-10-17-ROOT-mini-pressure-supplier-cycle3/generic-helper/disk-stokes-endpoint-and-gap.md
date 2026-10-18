# Generic-pressure helper: exact endpoint obstruction in a different class

Research only. No original polyhedral Newtonian NS counterexample or full instantaneous proof was obtained. The original obligation remains unresolved. The following independent calculation verifies the parent-supplied disk spectral lead. It is a linear Stokes example on a smooth disk, so it does not settle the stated polyhedral NS claim.

## A completely explicit linear Stokes endpoint example

Take the unit disk, viscosity one, polar coordinates `(r,theta)`, and define `rot psi=(partial_y psi,-partial_x psi)`. Let `k_n` be the increasing positive zeros of `J_2`. Set

$$\psi_n(r,\theta)=\bigl[J_1(k_nr)-J_1(k_n)r\bigr]\cos\theta,\qquad w_n=\operatorname{rot}\psi_n.$$

Here the Bessel functions can be defined by their convergent power series. The identities used below follow by differentiation of those series and integration of the resulting ODE; no numerical spectral approximation is involved.

The relations `k J_1'(k)-J_1(k)=-k J_2(k)` and `J_2(k_n)=0` show that both the boundary value and normal derivative of `psi_n` vanish. Hence `w_n` is smooth, no-slip and divergence free. Write `H=r cos theta=x` and `H*=r sin theta=y`; then `rot H=-grad H*`. Since `Delta psi_n=-k_n^2 J_1(k_n r)cos theta`,

$$-\Delta w_n+\nabla q_n=k_n^2w_n,\qquad q_n=k_n^2J_1(k_n)y.$$

The sign here is important: `-Delta w_n=k_n^2w_n+k_n^2J_1(k_n)rot H`.

Integration by parts, followed by the Bessel integrals, gives

$$\|w_n\|_2^2=k_n^2\pi\left[\int_0^1rJ_1(k_nr)^2\,dr-J_1(k_n)\int_0^1r^2J_1(k_nr)\,dr\right]=\frac\pi2 k_n^2J_1(k_n)^2.$$

Indeed, the second radial integral is `J_2(k_n)/k_n=0`, and the first is `[J_1(k_n)^2-J_0(k_n)J_2(k_n)]/2=J_1(k_n)^2/2`. The first identity follows by integrating `(s^2 J_2(s))'=s^2 J_1(s)`; the second follows by differentiating the proposed antiderivative and using the Bessel recurrences. `J_1(k_n)` is nonzero: otherwise `J_2(k_n)=J_2'(k_n)=0`, contradicting uniqueness for its regular ODE away from zero.

Define the signed normalized modes

$$e_n=\frac{w_n}{\sqrt{\pi/2}\,k_nJ_1(k_n)},\qquad \pi_n=\sqrt{2/\pi}\,k_n y.$$

Then `||e_n||_2=1` and `-Delta e_n+grad pi_n=k_n^2e_n`. Distinct modes are L2 orthogonal: test the two smooth eigen-equations against the other velocity, integrate by parts, and subtract; their pressure terms vanish. Testing against the same velocity gives `||grad e_n||_2^2=k_n^2`.

Only the bounds `c n <= k_n <= C n` are needed. They can be obtained without importing a precise Bessel-zero asymptotic. Set `Y(s)=sqrt(s)J_2(s)`, so `Y''+[1-15/(4s^2)]Y=0`. On `s>=4` its bracket lies between `3/4` and `1`. For a continuously lifted angle defined by `Y=R sin theta`, `Y'=R cos theta`, direct differentiation gives `theta'=cos^2(theta)+[1-15/(4s^2)]sin^2(theta)` between `3/4` and `1`. Thus there are infinitely many simple zeros, and consecutive sufficiently large zeros have spacing between `pi` and `4pi/3`. This implies the required linear bounds.

Fix `a` with `1/2<a<=3/4`, and, starting at `n=2`, put

$$a_n=n^{-1/2}(\log n)^{-a},\qquad u_0=\sum_{n\ge2}a_ne_n,\qquad u(t)=\sum_{n\ge2}a_ne^{-k_n^2t}e_n.$$

The coefficients are square summable, so `u_0` belongs to the L2 closure of the no-slip solenoidal fields. Orthogonality and the eigen-energy identities give

$$\sup_{t\ge0}\|u(t)\|_2^2\le\sum a_n^2,\qquad \int_0^T\|\nabla u(t)\|_2^2\,dt\le\frac12\sum a_n^2.$$

The series converges strongly to `u_0` in L2 as `t` decreases to zero. For every positive time it has an actual L2 time derivative, since `sum a_n^2 k_n^4 exp(-2k_n^2t)` is finite. On every interval bounded away from zero, passage through the finite-mode mixed Stokes identities therefore yields the unique mean-zero pressure

$$p(t,x,y)=\sqrt{2/\pi}\,y\sum_{n\ge2}a_nk_ne^{-k_n^2t}.$$

All coefficients of this fixed harmonic spatial mode have the same sign. With `N=floor(t^(-1/2))`, the terms `N<=n<=2N` give, for sufficiently small positive `t`,

$$\|p(t)\|_{L^2(D)}\ge c\,N^{3/2}(\log N)^{-a}\ge c' t^{-3/4}(\log(1/t))^{-a}.$$

Here the upper bound on `k_n` makes all exponentials in that block uniformly positive, and the lower bound on `k_n` bounds the remaining summands from below. Consequently

$$\int_0^\epsilon\|p(t)\|_2^{4/3}\,dt\ge c\int_0^\epsilon\frac{dt}{t(\log(1/t))^{4a/3}}=\infty.$$

The linear Stokes trajectory therefore has energy-class velocity and zero external Stokes force but does not have `p in L^(4/3)_t L2_x`. Uniqueness of the zero-mean distributional pressure excludes a different regular representative. The corresponding actual full derivative cannot belong to `L^(4/3)_t (H01)*`, by the same bounded-divergence and viscosity argument used in the canonical equivalence criterion. This example directly cautions against claiming that smooth-domain linear parabolic regularization automatically supplies the endpoint from arbitrary L2 initial data.

It also has a bounded pressure primitive: termwise time integration yields coefficients `a_n(1-exp(-k_n^2t))/k_n`, whose absolute sum is uniformly finite. Thus it is consistent with the existing primitive theorem.

## Exact limits and missing step

The disk is not polyhedral. A Stokes solution is not automatically an NS solution with the same force; making it one requires proving `u dot grad u in L2_t L2_x` and taking that as its NS force, or another construction. Neither passage is supplied here. Even completing that disk forcing calculation would still leave the polyhedral-domain restriction. No endpoint failure under the exact original assumptions is claimed.

For the original problem, energy estimates prove only the solenoidal restriction of the derivative. A bounded extension of that restriction to the full dual is not its actual full distributional derivative. The canonical integrated-pressure lemma correctly isolates the unresolved condition. No step in the existing full time-distribution reconstruction is deficient or replaces this condition. The square mass-projector counterexample is accepted and was not reused as an instantaneous-pressure counterexample.

## Actual reading and source limits

Read CLAUDE.md fully; README.md and SCHEMA.md fully; the supplied prior-cycle final review, findings/integration and projector-obstruction notes; the complete current three assigned canonical items, including all proof steps of the integrated-pressure lemma. Read the actual previously acquired full-text extraction of Suli--Tscherpel, PDF pp.1--5 through Definition 2.1 and the following pressure-free paragraph, from the first-cycle `sources/suli-tscherpel.txt`, backed by its acquired PDF. That paragraph does not settle the present stronger-force Newtonian restriction. No new claim of reading Simon, Temam, or another inaccessible source is made.

The available web-search wrapper returned errors. Direct Google retrieval returned a challenge page rather than usable search results; direct DLMF requests for sections 10.6, 10.21 and 10.22 returned HTTP 403. None is cited as successfully read. The Bessel calculation above is an independent derivation from series/ODE identities, not an attributed full-source result. No canonical, manifest, metadata, readiness, runtime, test or gate edits were made.

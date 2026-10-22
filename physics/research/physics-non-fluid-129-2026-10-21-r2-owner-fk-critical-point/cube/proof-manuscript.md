# Increasing-cube influence and the finite FK transfer

Research manuscript, 2026-10-22. Author: `/root/qft_graph_scaling/fk_cube_influence`.
This is an unapplied proof proposal for the run `physics-non-fluid-129-2026-10-21-r2`.
No item, imported snapshot, native state, contract, manifest or acceptance record
is changed by this document. It records one substantive construction cycle and
its internal estimate check; it is not independent review or production acceptance.

## Preferred minimal interface: finite boxes suffice for the actual FK consumer

Dependency minimization added after the parent's first reading, within the same
construction cycle. Sections 1–7 below preserve the more general Lebesgue
argument and its source-reading limits. The preferred production prerequisite
for this FK consumer is the following strictly smaller interface.

Suggested ID: `lem-csm-frontier-finite-box-cube-max-fiber-influence`.
Let $n\ge2$ and let $C\subseteq[0,1]^n$ be coordinatewise increasing and a
finite union of axis-parallel boxes, with arbitrary specified open/closed
endpoint conventions in each coordinate. Degenerate boxes are permitted.
Use elementary box volume $v_n$, assigning a box the product of its side
lengths; finite unions are evaluated by a common endpoint subdivision, and
coordinate faces have volume zero. Set

$$a=v_n(C),\qquad F_i=v_{n-1}\{x_{-i}:\mathbf1_C(x_{-i},1)-\mathbf1_C(x_{-i},0)=1\},\qquad M=\max_i F_i.$$

Then $M=0$ implies $a(1-a)=0$, and for $M>0$,

$$a(1-a)\le\frac{2\sum_iF_i}{1+\log(1/M)},\qquad M\ge\frac14a(1-a)\frac{\log n}{n}.$$

This version needs no Countable Choice, countable product measure, completed
Lebesgue measure, general Fubini theorem or measure-extension result. When
$C$ is a finite-box set, the elementary volumes agree with its Lebesgue
volumes whenever that larger framework is in use. The claim of choice-free
proof here concerns this explicitly finite-volume formulation, not general
Lebesgue measure theory or the later infinite-volume FK limits.

### Elementary integration used by this version

Here is a self-contained definition and justification of the finite integration
rules used below. A bounded rectangular step function on $[0,1]^r$ is a real
function constant on every open cell of a finite coordinate grid, with its
values on grid hyperplanes allowed to be arbitrary rectangular step functions
of the remaining coordinates. Define its integral by summing the value on
each full-dimensional open cell times the product of that cell's lengths.
In dimension zero the integral is its single value. To integrate a section
on a specified coordinate face, first restrict the actual function to that
face and then use this definition in the remaining dimensions; never discard
boundary values before taking such a restriction.

This integral is independent of the chosen grid: adjoining a new coordinate
endpoint splits each affected interval into two, and the sum of the two new
lengths is the old length. A common refinement of two finite grids therefore
gives the same sum. Every finite union of boxes, every product and difference
of their indicators, and every fixed-coordinate section of such a function
is a rectangular step function. Finite common refinement proves linearity,
positivity, monotonicity, the integral triangle inequality, and equality of
iterated and full integrals. For the last assertion, both orders sum the
same finitely many cell values times products of lengths. Exceptional outer
grid coordinates contribute zero length and do not change the integral.
Finite sums of power functions of step functions are step functions, so
all $L^p$ norms used for the continuous boxes are defined by the same rule.

Translation of a box preserves each side length. A piecewise translation
which bijectively exchanges a finite list of boxes therefore preserves these
integrals, by finite common refinement. The dyadic bit-flip maps have exactly
this form. On a cell $Q$, put $z=|Q|^{-1}\int_Q(f-f\circ R_{ik})$.
Since the integrand takes values in $\{-1,0,1\}$, finite weighted sums give
$|z|\le |Q|^{-1}\int_Q|f-f\circ R_{ik}|\le1$. For $p\ge1$ one has
$|z|^p\le|z|$. After multiplication by $2^{-p}|Q|$ and summing cells,
this proves (9) using only these finite integration rules; general integral
Jensen is unnecessary.

### Complete reuse of the estimates, without a measure-extension input

Apply Sections 1–2 unchanged: they take place entirely on finite probability
spaces, followed by the one-variable integral of the displayed finite Fourier
polynomial. All powers have the explicitly proved scalar estimate (1).

In Section 3 let $\int$ denote the elementary integral just defined. The
finite dyadic functions $\ell_m,u_m,g_m$ exist by finite endpoint refinement
for each explicitly prescribed integer $m$. The coordinate-by-coordinate
telescoping of corner values still proves (8). There is no need to prove
measurability by taking monotone limits, because $f$ and each $g_m$ are
already rectangular step functions. To justify the variance limit using
only finite sums, put $\delta_m=\int|g_m-f|\le n2^{-m}$. Their means agree
exactly by cell averaging, and $|g_m^2-f^2|\le2|g_m-f|$ because both lie in
$[0,1]$. Hence $|\operatorname{Var}(g_m)-a(1-a)|\le2\delta_m\to0$.
This limit is of an explicit numerical sequence with an explicit error
bound; no choice of an approximating sequence is needed.

The bit-disagreement sets in (9)–(10) and all their sections are finite unions
of boxes. Every fiber is a one-dimensional threshold, so its bit-disagreement
length is at most $2^{1-k}$ times its literal endpoint difference, exactly
as proved in Section 3. Elementary finite-sum iterated integration gives (10).
Thus (5) applies to each finite $g_m$, and Section 4's passage to the limit
and the uniform constant $1/4$ follow verbatim, now using only the explicit
variance error above. No limit of integrals is identified with an integral
of a limit; only inequalities between real numbers pass to their limits.

The one-variable noise integral in (6)–(7) is ordinary Riemann integration
of continuous functions (or a finite sum of explicitly integrable monomials
for (6)). It requires no arbitrary choice sequence. Its upper estimate uses
only a change of variable and the antiderivative of an exponential.
Ordinary real completeness, elementary differentiation/integration, finite
sum algebra and finite-dimensional vector-space algebra are the complete
background of this finite-box proof.

### Exact FK box construction and endpoint transfer

For the ordering $1,\ldots,n$ and each fixed configuration
$\omega\in\{0,1\}^n$, let $t_j(\omega_{<j})=1-a_j(\omega_{<j})\in(0,1)$
and set

$$I_j(\omega)=\begin{cases}(t_j(\omega_{<j}),1],&\omega_j=1,\\\left[0,t_j(\omega_{<j})\right],&\omega_j=0.\end{cases}\qquad Q_\omega=\prod_{j=1}^n I_j(\omega).$$

By induction through the algorithm, $\Phi(U)=\omega$ if and only if
$U\in Q_\omega$. Thus these $2^n$ boxes form a disjoint partition of the
entire closed cube, including threshold values and faces. Their elementary
volumes are

$$v_n(Q_\omega)=\prod_{j=1}^n a_j(\omega_{<j})^{\omega_j}(1-a_j(\omega_{<j}))^{1-\omega_j}=\mu(\omega),$$

where the last equality is the finite probability chain rule. Consequently
$C=\Phi^{-1}(A)=\bigcup_{\omega\in A}Q_\omega$ is precisely a finite-box
set and $v_n(C)=\mu(A)$. The map is increasing by the conditional-order
proof in Section 5, so the preferred helper applies directly.

The reordered $\Psi$ has the same finite-box property. At $U_j=1$ or $0$
its remaining output has probabilities given by the finite conditional
chain rule. The pointwise comparisons of Section 5 can therefore be
integrated by elementary $(n-1)$-dimensional box volume, proving (11)
without any general Fubini or null-event conditional-probability argument.
It follows that the full existing FK claim holds with $c=1/4$ for every
real $q\ge1$, every $p\in(0,1)$ and every $|E|\ge2$. Its real-$q$ and
$\varepsilon$ ranges are preserved. The FK association supplier is the
only substantive probabilistic prerequisite of this transfer; its proof
of the needed association and prefix comparisons is finite.

For production integration the preferred helper can include the elementary
integration paragraph above and Sections 1–4's finite proof, avoiding the
unnecessary completed-Fubini import and its Countable Choice assumption.
This is a sufficient alternate interface, not an assertion that arbitrary
Lebesgue-measurable product-space influence theory has been developed in ZF.
It also does not remove Countable Choice assumptions from any independently
used infinite-volume compactness supplier.

## Exact proposed helper interface

Suggested ID: `lem-csm-frontier-increasing-cube-max-fiber-influence`.
Domain: mathematics; kind: lemma. Work with ordinary completed Lebesgue
measure; when using the exact existing suppliers listed in Section 6, assume
Countable Choice and declare `def-countable-choice` explicitly. No stronger
choice principle is used by this proof. Let $n\ge2$ be an integer and let
$C\subseteq[0,1]^n$ be coordinatewise increasing. Write $f=\mathbf1_C$,
$a=\lambda^n(C)$, and

$$F_i=\int_{[0,1]^{n-1}}\bigl(f(x_{-i},1)-f(x_{-i},0)\bigr)\,dx_{-i},\qquad M=\max_{1\le i\le n}F_i.$$

The endpoint sections are Lebesgue measurable. If $M=0$, then $a(1-a)=0$.
If $M>0$, then the stronger estimate

$$a(1-a)\le\frac{2\sum_iF_i}{1+\log(1/M)}\le\frac{2nM}{1+\log(1/M)}$$

holds, and in every case

$$\max_iF_i\ge\frac14 a(1-a)\frac{\log n}{n}.$$

Here and below logarithms are natural. No regularity of the boundary of $C$
is required. The hypothesis may retain “Lebesgue measurable” for conformity
with the current consumer; the corner-sum argument below also proves completed
Lebesgue measurability of every coordinatewise increasing set. Endpoint influence
is the literal difference of endpoint indicators. It can exceed essential
nonconstant-fiber influence, and need not be invariant under changes on null sets.
No identification of these two notions is made or needed.

The proof uses finite Boolean Fourier expansion and two-point hypercontractivity,
both proved below, rather than a quoted KKL/BKKKL theorem. No countable product
of bits, martingale theorem, measure-space isomorphism or dyadic-density theorem
is needed. Ordinary completed Lebesgue integration and finite-dimensional Fubini
are the only measure-theoretic background.

## 1. Two-point hypercontractivity, with its scalar proof

For $1\le p\le2$ and real $u,v$, we claim

$$\bigl(u^2+(p-1)v^2\bigr)^{1/2}\le\left(\frac{|u+v|^p+|u-v|^p}{2}\right)^{1/p}.\tag{1}$$

For $p=1$ this is $|u|\le(|u+v|+|u-v|)/2$; for $p=2$ it is equality.
Assume $1<p<2$. Both signs can be removed, since the unordered pair of absolute
values on the right is unchanged. If $|v|>|u|$, interchange $|u|,|v|$: the
right side is unchanged and its proposed squared left side increases by
$(2-p)(v^2-u^2)\ge0$. It therefore suffices to take $u>0$ and $0\le v\le u$;
the zero case is immediate. Put $t=v/u$. For $0\le t<1$ define

$$H(t)=\frac{(1+t)^p+(1-t)^p}{2}.$$

Since $s\mapsto s^{p-2}$ is convex on $(0,\infty)$, its midpoint inequality gives

$$H''(t)=\frac{p(p-1)}2\bigl((1+t)^{p-2}+(1-t)^{p-2}\bigr)\ge p(p-1).$$

Integrating twice from $H(0)=1$, $H'(0)=0$ yields
$H(t)\ge1+p(p-1)t^2/2$. On the other hand, concavity of $s\mapsto s^{p/2}$
on $(0,\infty)$ gives

$$\bigl(1+(p-1)t^2\bigr)^{p/2}\le1+\frac{p(p-1)}2t^2\le H(t).$$

Multiply by $u^p$ and take the $p$th root. Continuity covers $t=1$. This proves (1).
All convexity assertions here follow directly by differentiating the indicated
real powers twice.

On the uniform two-point space $\{-1,1\}$ define
$T_\rho(u+vx)=u+\rho vx$. Taking $p=1+\rho^2$ in (1) gives
$\|T_\rho h\|_2\le\|h\|_{1+\rho^2}$ for $0\le\rho\le1$.
On $\{-1,1\}^d$, define $T_\rho$ by applying this same operator in each
coordinate; these operators commute. Equivalently, each coordinate is retained
with probability $\rho$ and replaced by a new fair bit with probability $1-\rho$,
independently. In particular it is a positive averaging operator.

Here is a complete tensorization. For finite probability spaces $X,Y$ and
$1\le p\le2$, finite-sum Minkowski at exponent $2/p$ gives

$$\|h\|_{L_y^2(L_x^p)}\le\|h\|_{L_x^p(L_y^2)}.\tag{2}$$

Indeed the $p$th power of the left side is
$\|\mathbb E_x|h(x,\cdot)|^p\|_{L_y^{2/p}}$, which is at most
$\mathbb E_x\||h(x,\cdot)|^p\|_{L_y^{2/p}}$ by the finite triangle inequality;
this is the $p$th power of the right side. At $p=2$ it is equality.
The weighted version follows from the finite-sum version by absorbing weights
into vector entries. Finite-sum Minkowski itself follows from finite Hölder:
for $r>1$, multiply $|z+w|\le|z|+|w|$ by $|z+w|^{r-1}$, sum with the probability
weights, apply Hölder to the two terms and divide by $\|z+w\|_r^{r-1}$ when
nonzero. Hölder follows by normalizing the two norms and summing Young's
$ab\le a^r/r+b^{r'}/r'$; the zero-norm cases are immediate. Thus (2) has no
unproved tensorization input.

Suppose noise operators on blocks $X,Y$ individually contract $L^p$ into $L^2$.
For each $y$ first apply the contraction on $X$, then (2), then for each $x$
apply the contraction on $Y$:

$$\|T_XT_Yh\|_{L^2_{x,y}}\le\|T_Yh\|_{L_y^2(L_x^p)}\le\|T_Yh\|_{L_x^p(L_y^2)}\le\|h\|_{L^p_{x,y}}.$$

Induction from the two-point result therefore proves, for every finite $d$,

$$\|T_\rho h\|_2\le\|h\|_{1+\rho^2}.\tag{3}$$

## 2. A finite noise-integral estimate with influence surrogates

For $x\in\{-1,1\}^d$ let $x^{(j)}$ flip coordinate $j$ and define
$D_jh=(h(x)-h(x^{(j)}))/2$. Suppose numbers $b_j\in[0,1]$ satisfy, for every
$1\le p\le2$,

$$\|D_jh\|_p\le\frac12 b_j^{1/p}.\tag{4}$$

We prove

$$\operatorname{Var}(h)\le\sum_{j=1}^d\frac{b_j}{1+\log(1/b_j)},\tag{5}$$

where the summand at $b_j=0$ is defined to be zero.

For completeness the Fourier calculation is finite linear algebra. For
$S\subseteq\{1,\ldots,d\}$ set $\chi_S(x)=\prod_{j\in S}x_j$. Independence
and $\mathbb E x_j=0$ give $\mathbb E\chi_S\chi_R=\mathbf1_{S=R}$. There
are $2^d$ such orthonormal functions in the $2^d$-dimensional function space,
so they form a basis. Write $h=\sum_S\widehat h(S)\chi_S$. Then
$D_jh=\sum_{S\ni j}\widehat h(S)\chi_S$ and
$T_\rho\chi_S=\rho^{|S|}\chi_S$. Parseval, followed by integration of a
finite sum of monomials, gives the exact identity

$$\operatorname{Var}(h)=2\sum_j\int_0^1\|T_\rho D_jh\|_2^2\,\frac{d\rho}{\rho}.\tag{6}$$

Indeed the coefficient of every $\widehat h(S)^2$, $S\ne\varnothing$, on
the right is $2|S|\int_0^1\rho^{2|S|-1}\,d\rho=1$.
There is no singular-integral issue at zero because every $D_jh$ has no
constant Fourier term and contains the factor $x_j$.

More precisely $D_jh=x_jg_j(x_{-j})$, and noise gives
$T_\rho D_jh=\rho x_jT_\rho g_j$. Apply (3) on the remaining $d-1$ bits
and then (4), with $p=1+\rho^2$, to obtain

$$\|T_\rho D_jh\|_2^2\le\frac{\rho^2}{4}b_j^{2/(1+\rho^2)}.$$

If $b=b_j>0$ and $L=\log(1/b)\ge0$, its contribution to (6) is at most

$$\frac12\int_0^1\rho b^{2/(1+\rho^2)}\,d\rho\le\frac b4\int_0^1e^{-Ls/2}\,ds\le\frac b{1+L}.\tag{7}$$

For the middle inequality substitute $s=1-\rho^2$ and use
$2/(1+\rho^2)\ge1+(1-\rho^2)/2$. For the last inequality the integral is
at most $\min\{1,2/L\}$ when $L>0$. If $0\le L\le1$, its one-bound gives
$b/4\le b/(1+L)$; if $L\ge1$, its $2/L$-bound gives
$b/(2L)\le b/(1+L)$. The case $L=0$ is included in the first case.
If $b_j=0$, (4) makes $D_jh=0$. Summing (7) proves (5).

## 3. Finite dyadic approximation, including endpoint conventions

Let $N=2^m$. Except on coordinate faces of measure zero, partition $[0,1]^n$
into the half-open cells

$$Q_a=\prod_{i=1}^n[a_i/N,(a_i+1)/N),\qquad a_i\in\{0,\ldots,N-1\}.$$

On this cell set $\ell_m=f(a/N)$, $u_m=f((a+\mathbf1)/N)$, and
$g_m=N^n\int_{Q_a}f$. Monotonicity gives $\ell_m\le f,g_m\le u_m$.
In the finite sum of the differences $u_m-\ell_m$, telescope one coordinate
at a time. For coordinate $i$, keeping the other coordinates fixed at their
relevant upper or lower corners, summation over $a_i$ reduces to the value at
coordinate $1$ minus the value at coordinate $0$, which is at most one.
There are $N^{n-1}$ choices of the other indices. Therefore

$$\int(u_m-\ell_m)\le\frac nN,\qquad \|g_m-f\|_2^2\le\int|g_m-f|\le\frac nN.\tag{8}$$

This also proves measurability if it was not assumed: the lower corner
functions increase with $m$, the upper corner functions decrease, and their
integral gap tends to zero by the same finite sum. Their pointwise limits
are measurable and agree off a null set; $f$ is squeezed between them.
For this use the countable union of grid faces is null and harmless.
Apply the same argument in dimension $n-1$ to each endpoint section to see
that all $F_i$ are well-defined. When $n-1=1$ the same telescoping proof works;
in dimension zero the section is a constant and no measurability issue arises.

Identify $a_i$ with its $m$ binary digits, most significant first. Uniform
measure on the $nm$ bits corresponds to the uniform distribution of cells.
Regard $g_m$ as a real function on this finite Boolean cube; it takes values
in $[0,1]$, and need not be Boolean. Its mean equals $a$ exactly, and (8)
implies $\operatorname{Var}(g_m)\to a(1-a)$.

For $1\le k\le m$ define a map $R_{ik}$ on the continuous cube by flipping
the $k$th binary digit in coordinate $i$: in every prefix interval of length
$2^{1-k}$ it translates the lower half up by $2^{-k}$ and the upper half
down by $2^{-k}$. Use half-open intervals on $[0,1)$ and define the map
arbitrarily at $1$. It is an involution away from that null face and preserves
Lebesgue measure, because it exchanges finitely many half-open boxes by
translations. It pairs the two level-$m$ cells whose $(i,k)$ digits differ.
Define

$$b_{ik}=\int|f(x)-f(R_{ik}x)|\,dx.$$

The derivative of $g_m$ in that bit, viewed on each cell, is the average of
$(f-f\circ R_{ik})/2$ there. Convexity of $|\cdot|^p$ and finite-dimensional
Fubini give, for $1\le p\le2$,

$$\|D_{ik}g_m\|_p^p\le2^{-p}\int|f-f\circ R_{ik}|^p=2^{-p}b_{ik}.\tag{9}$$

No pointwise convergence at a dyadic boundary and no selected binary expansion
on a positive-measure set is involved.

Fix the coordinates other than $i$. Its fiber indicator is an increasing
zero-one function of one real variable, thus equals a threshold indicator away
from at most the threshold point. If its endpoint values agree, it is constant
everywhere. Otherwise a flip of the $k$th digit can change its value only in
the single prefix interval of length $2^{1-k}$ containing its threshold.
If the threshold is a prefix endpoint, possible disagreement at a singleton
has measure zero, and every other prefix interval is constant. Consequently
the one-dimensional measure of disagreement is at most
$2^{1-k}(f(x_{-i},1)-f(x_{-i},0))$. Fubini now gives the exact useful estimates

$$b_{ik}\le2^{1-k}F_i,\qquad \sum_{k=1}^m b_{ik}\le2F_i,\qquad b_{ik}\le M.\tag{10}$$

Notice that the geometric bound is a probability bound per bit, not a
claim that flipping an arbitrary low-order bit has small deterministic effect
on the threshold event for every point.

## 4. The cube inequality and the constant for every n

If $M=0$, (9)–(10) make every bit derivative of every $g_m$ zero, so these
functions are constant; (8) gives $a(1-a)=0$.
Otherwise apply (5) using (9), then (10). The denominator is at least
$1+\log(1/M)$, so

$$\operatorname{Var}(g_m)\le\sum_{i,k\le m}\frac{b_{ik}}{1+\log(1/b_{ik})}\le\frac{2\sum_iF_i}{1+\log(1/M)}.$$

Pass to the limit using (8), obtaining the stronger helper estimate.
If $0<M<n^{-1/2}$ it implies
$a(1-a)\le4nM/\log n$, which is the promised $1/4$ bound.
If $M\ge n^{-1/2}$, use $a(1-a)\le1/4$ and
$\log n\le\sqrt n$ to get

$$\frac14a(1-a)\frac{\log n}{n}\le\frac{\log n}{16n}\le\frac1{16\sqrt n}\le M.$$

For completeness, $\log t\le\sqrt t$ for $t\ge1$ follows by maximizing
$\log t/\sqrt t$: its derivative has the sign of $1-\tfrac12\log t$ and
its maximum is $2/e<1$. This covers $n=2$ and every larger integer without
an asymptotic restriction.

## 5. The FK sequential transfer, checked against the actual item

The following proof applies to every strictly positive log-supermodular law
$\mu$ on $\{0,1\}^n$ whose fixed-coordinate conditional laws are positively
associated. For FK with real $q\ge1$ and $0<p<1$, these are exactly the
properties supplied by `lem-csm-frontier-fk-fkg-spatial-markov`.
No integer-spin representation, product independence of edges, transitivity,
or lower bound involving $q,\varepsilon$ is used.

First establish ordered-prefix conditional monotonicity carefully. Fix a set
of coordinates and change one prescribed value from zero to one. Let
$\mu_0,\mu_1$ be the resulting laws on the unprescribed coordinates. For
$z\le z'$, apply log-supermodularity of the already conditioned law to the
**incomparable** configurations $(z',0)$ and $(z,1)$. Their join and meet
are $(z',1)$ and $(z,0)$, respectively, so

$$\mu_1(z')\mu_0(z)\ge\mu_0(z')\mu_1(z).$$

Thus $R=\mu_1/\mu_0$ is increasing. For increasing $h$, association under
$\mu_0$ gives
$\mathbb E_{\mu_1}h=\mathbb E_{\mu_0}(hR)\ge\mathbb E_{\mu_0}h\,
\mathbb E_{\mu_0}R=\mathbb E_{\mu_0}h$; the ratio is normalized, so its
expectation is one. Successively changing prescribed coordinates proves
monotonicity for any pair of ordered assignments on the same prescribed set.

There is a second comparison when an additional coordinate $j$ is prescribed.
In any fixed-prefix conditional law, association gives
$\operatorname{Cov}(h,X_j)\ge0$, hence

$$\mathbb E[h\mid X_j=0]\le\mathbb E h\le\mathbb E[h\mid X_j=1]$$

for every increasing $h$ on the remaining coordinates. Strict positivity
makes both conditional laws meaningful. In particular this holds for the
indicator of a still-unsampled edge being open.

Now label coordinates $1,\ldots,n$, put
$a_r(\eta)=\mu(X_r=1\mid X_s=\eta_s,\ s<r)$, and recursively define

$$\Phi_r(U)=\mathbf1_{\{U_r>1-a_r(\Phi_1(U),\ldots,\Phi_{r-1}(U))\}}.$$

The probabilities lie strictly between zero and one. Ordered-prefix
monotonicity makes $\Phi$ coordinatewise increasing by induction. The finite
chain rule for probabilities shows that $\Phi(U)$ has law $\mu$ for
independent uniform $U_r$. It is a finite recursively defined step map, hence
Borel measurable, including its specified endpoint values. For increasing
$A$, let $C=\Phi^{-1}(A)$; then $C$ is increasing and $\lambda(C)=\mu(A)$.

Fix $j$ and construct $\Psi$ using order $j,1,\ldots,j-1,j+1,\ldots,n$,
retaining the uniform attached to each coordinate label. Fix all these
uniforms except that $U_j$ is forced to one. Both outputs have $j$th bit one.
Induct on $r<j$. Suppose the reordered prefix is at least the original prefix.
Then the reordered open probability at coordinate $r$ is at least the original
one, by these two successive comparisons:

$$\mu(X_r=1\mid X_{<r}=\Psi_{<r},X_j=1)\ge\mu(X_r=1\mid X_{<r}=\Phi_{<r},X_j=1)\ge\mu(X_r=1\mid X_{<r}=\Phi_{<r}).$$

The first is ordered-prefix monotonicity with $j$ fixed, the second is the
additional-coordinate comparison. The common $U_r$ therefore gives
$\Psi_r\ge\Phi_r$. After reaching $j$, both constructions condition on the
same set of previously produced coordinate labels (including $j=1$), with
ordered values. Ordered-prefix monotonicity alone continues the induction
for $r>j$. Thus $\Psi(U_{-j},1)\ge\Phi(U_{-j},1)$ pointwise.

With $U_j=0$, both outputs have $j$th bit zero. The same induction reverses:
for $r<j$, ordered smaller prefix values first, followed by the
additional-coordinate comparison conditioned on $j=0$, give

$$\mu(X_r=1\mid X_{<r}=\Psi_{<r},X_j=0)\le\mu(X_r=1\mid X_{<r}=\Phi_{<r},X_j=0)\le\mu(X_r=1\mid X_{<r}=\Phi_{<r}).$$

For $r>j$ use ordered-prefix monotonicity as before. Hence
$\Psi(U_{-j},0)\le\Phi(U_{-j},0)$ pointwise. Since $A$ is increasing,
integration over $U_{-j}$ yields

$$F_j(C)\le\int\mathbf1_A(\Psi(U_{-j},1))\,dU_{-j}-\int\mathbf1_A(\Psi(U_{-j},0))\,dU_{-j}=\mu(A\mid X_j=1)-\mu(A\mid X_j=0).\tag{11}$$

The equality holds by the chain rule in the reordered construction, whose
remaining steps sample exactly the law conditional on its first coordinate.
Endpoint evaluations here are literal values of the defined maps, not
conditioning a continuous random variable on a null-probability event.

Apply the cube helper to $C$ and (11). With $n=|E|\ge2$ this proves the
current FK influence statement, with the permitted stronger choice
$c(q,\varepsilon)=1/4$, for all real $q\ge1$ and $p\in(0,1)$, in particular
for the full requested $p\in[\varepsilon,1-\varepsilon]$ range.

### Actual carrier corrections needed if the owner integrates this proof

1. Replace unresolved [A1] by the fully proved helper and declare its dependency.
2. In current proof step 1.1 replace the pair “$(z',1)$ and $(z,0)$” by
   “$(z',0)$ and $(z,1)$”; the current comparable pair gives only equality,
   rather than the ratio comparison claimed there.
3. In step 2.1 retain the coupling but explicitly include both comparisons
   for $r<j$, as above. Do not treat ordered-prefix monotonicity alone as
   comparing conditioning sets of different sizes.
4. Remove the conditional-proof and missing-input remarks only after the
   helper has actually been locally integrated and reviewed. This research
   manuscript itself does not perform or authorize those actions.

## 6. Smallest dependency and supplier mapping

No exact local KKL, BKKKL, Bonami–Beckner or hypercontractive supplier was found
by a case-insensitive search over the actual `physics/items/` and root `items/`
bodies for `hypercontract`, `Kahn.Kalai`, `Bourgain.Kahn`, `BKKKL`,
`Bonami.Beckner`, and `Talagrand.*influence`; the sole matching carrier was the
current FK influence item. Its full body and the full FK association supplier
were personally read. The import inventory `research/math-imports.json` was
queried for exact candidate IDs; it is an inventory, not a proof certification.

The helper can remain one item containing Sections 1–4. Its smallest substantive
background is finite-dimensional completed Lebesgue/Fubini integration,
translation invariance on boxes, real-power differentiation, and finite sums.
The nontrivial influence, hypercontractive, tensorization, Fourier and approximation
arguments have all been supplied above. Optional existing exact mathematical
premises, requiring ordinary import reconciliation before use, are:

- `thm-tonelli-and-fubini-for-completed-product-measures`: completed-product
  section measurability and integration. Root carrier personally read in full;
  its stated hypothesis includes Countable Choice. Preserve that hypothesis
  and declare `def-countable-choice` if this exact supplier is used. The helper
  uses only bounded functions and finitely many coordinate factors.
- `thm-minkowski-finite-real-exponents` and
  `thm-holder-finite-real-exponents`: finite real-exponent norm estimates.
  Both root carriers personally read in full, including their actual proofs.
  They can shorten Section 1 but are not an unproved escape: the necessary
  finite argument is also recorded there.
- `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` and
  `thm-lebesgue-measure-of-a-box-of-every-kind`: candidate interfaces for the
  finite piecewise-translation bit maps and the corner sums. Both root
  carriers were personally read in full during the final focused check.
  Translation invariance is stated choice-free; the box-measure carrier
  explicitly assumes Countable Choice. The ordinary uncompleted
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` was also
  personally read in full, but the completed version is the exact interface
  for arbitrary completed-Lebesgue-measurable $C$ used here.

Thus an explicit lean proposed dependency list for the single helper is
`def-countable-choice`,
`thm-tonelli-and-fubini-for-completed-product-measures`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, and
`thm-lebesgue-measure-of-a-box-of-every-kind`, together with the repository's
ordinary integral algebra and real-power calculus interfaces if those are
required at that authoring granularity. All four named substantive root
carriers above were read, but their entire transitive closures were not
independently audited. These statements carry no import identity or permission
to modify originals. If these suppliers are adopted, carry their Countable
Choice assumption through the FK consumer rather than silently dropping it;
this foundational bookkeeping does not change any $n,q,p$ parameter range.

The published root dyadic-coding and three-dimensional cell-average-projection
carriers and the general base-$b$ density carrier were also read in full while
testing routes. None is required by the final proof. In particular the
three-dimensional projection statement is not silently generalized to arbitrary
$n$, and the DC-bearing coin-measure lemma is not introduced as a dependency.
No root mathematics file or imported snapshot was changed.

## 7. Source reading and limits

Full authoritative PDFs were downloaded to `cube/sources/`; extraction used
PyMuPDF (`fitz`) because `pdftotext` is unavailable. The PDFs, not search-result
snippets, supplied the extracted text inspected here. No external theorem is
used to discharge a missing local proof.

- Benjamin T. Graham and Geoffrey R. Grimmett, *Influence and sharp-threshold
  theorems for monotonic measures*, https://arxiv.org/pdf/math/0505057.
  Downloaded complete 23-page PDF. Personally read extracted PDF pages 4–9:
  the definitions of monotonicity, Theorem 2.7's stated equivalences,
  Theorem 2.10, and its complete sequential encoding/reordering proof,
  including the formal prefix induction. This source calls the continuous
  influence result externally; that call is replaced locally in Sections 1–4.
  Pages 1–3 and 10–23 were not read in full in this task; no claim of reading
  their random-cluster or continuous-measure developments is made.
- Geoffrey Grimmett, Svante Janson and James Norris, *Influence in Product
  Spaces*, https://arxiv.org/pdf/1207.1780. Downloaded complete 9-page PDF.
  Personally read extracted PDF pages 1–5 and the introductory lines of page 6:
  Theorem 1.1, endpoint versus essential fiber distinction in Remark 2.1,
  Theorems 2.2–2.4, and the Borel/completion discussion. The general-product
  transfer proof in Section 4, pages 6–8, and page 9 references were not read
  in full and are not used. This is why the helper explicitly promises the
  literal endpoint version rather than silently claiming the stronger
  null-invariant general-product interface.
- Ryan O'Donnell, *Analysis of Boolean Functions*, 2021 arXiv edition,
  https://arxiv.org/pdf/2105.10386. Downloaded complete 419-page PDF.
  Personally read the extracted Section 9.3 through Theorem 9.19, PDF/printed
  pages 256–259, and the complete Two-Function Hypercontractivity Induction
  Theorem proof on page 261; parts of pages 262–264 were also returned and
  read, but are not suppliers for the proof. Page 260 was not read in full.
  Section 9.3 contains the exact two-point $(p,2)$ theorem (Theorem 9.18),
  and page 261 explains its product extension. The proof here uses its own
  elementary scalar second-derivative argument and explicit mixed-norm
  tensorization, so neither a generalized-binomial-series input nor a quoted
  two-function theorem is concealed. The rest of the book was not read.
  The attempted legacy CMU PDF URL returned HTTP 404 before the complete arXiv
  book was successfully fetched; no reading is claimed for that failed URL.

These source references support established provenance and exact interfaces;
they are not a citation-only substitute for the local proofs above. A source
integration owner must still choose schema-compliant source-backed provenance,
reconcile actual imports, and obtain the run's ordinary independent review.

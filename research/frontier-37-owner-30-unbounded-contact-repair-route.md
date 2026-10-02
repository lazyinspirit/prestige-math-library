# Frontier 37 owner-30: unbounded-contact repair route

## Disposition

The bounded one-dimensional strict-contact identity now has a complete local
Sobolev proof below; no unproved Bedford–Taylor statement is used as an axiom.
Together with the full Guedj–Zeriahi truncation argument and the finite-energy
compactification below, this supplies a route for the target that preserves
Dependent Choice, every theorem claim, arbitrary compactly supported finite
positive $\mu$ and $\nu$, and atoms and infinite energy for $\nu$. I read the
full current target, its 17 actual direct supplier interfaces, the prior
potential-current audit, and the relevant full texts listed below. The target
read is the item version with SHA-256
8635b12f699f00d46bdf0b01421601155eb2242487d6cf402d34530352a3f666.

## Finite energy gives the E-class hypothesis

Let $M=\mu(\mathbb C)>0$, $a=\nu(\mathbb C)/M\leq1$, and
$p_\sigma=-U^\sigma$. Use the convention
$dd^c=(i/\pi)\partial\bar\partial=(1/(2\pi))\Delta\,dA$, so
$dd^c p_\sigma=\sigma$. On $\mathbb P^1$, take the Fubini–Study potential
$$
\rho(z)=\tfrac12\log(1+|z|^2), \qquad \omega=dd^c\rho,
\qquad \int_{\mathbb P^1}\omega=1.
$$

First show that $\mu$ charges no polar set. Suppose a polar Borel set $E$
had $\mu(E)>0$. The restriction of $\mu$ to its compact metric carrier $K$
is a finite Borel measure and is regular. Under the target's DC assumption,
the needed inner regularity can be proved directly: open subsets of $K$ are
increasing unions of compact sets
$\{x:d(x,K\setminus U)\geq1/n\}$; the sets approximable from inside by
compact sets and from outside by open sets form a sigma algebra, with countable
unions handled using DC's countable choice consequence and finiteness of the
measure. Thus there is compact $F\subseteq E\cap K$ with $m=\mu(F)>0$.

Choose $R>\max(1,\operatorname{diam}K)$. The shifted logarithmic kernel
$k_R(z,w)=\log(1/|z-w|)+\log R$ is nonnegative on $K\times K$, and
$$
\int k_R\,d\mu\,d\mu=I(\mu)+M^2\log R<\infty.
$$
Consequently the probability measure $\sigma=\mu|_F/m$ has finite energy:
$$
I(\sigma)=m^{-2}\int_{F\times F} k_R\,d\mu\,d\mu-\log R<\infty.
$$
Saff's definition of logarithmic capacity gives
$V_F=\inf_{\tau\in M(F)}I(\tau)\leq I(\sigma)<\infty$, hence
$\operatorname{cap}(F)=e^{-V_F}>0$. This contradicts that a compact subset
of a polar set has capacity zero. So $\mu$ charges no polar set.

On $\mathbb P^1\setminus\{\infty\}=\mathbb C$, set
$$
u=p_\mu/M,\quad v=(p_\nu-c)/M,\quad
\phi=u-\rho,\quad \psi=v-\rho.
$$
For $w=1/z$ near infinity, compact support gives
$$
\phi(1/w)=M^{-1}\int\log|1-w\zeta|\,d\mu(\zeta)
               -\tfrac12\log(1+|w|^2),
$$
which is smooth at $w=0$. Also
$$
\psi(1/w)=(1-a)\log|w|
       +M^{-1}\int\log|1-w\zeta|\,d\nu(\zeta)
       -c/M-\tfrac12\log(1+|w|^2).
$$
Thus $\phi$ and $\psi$ extend as $\omega$-psh functions on $\mathbb P^1$ and
$$
\omega+dd^c\phi=\mu/M,\qquad
\omega+dd^c\psi=\nu/M+(1-a)\delta_\infty.
$$
The residual term is a point mass at infinity, not $(1-a)\omega$.
Subtracting the same $\rho$ from both functions is essential to preserve the
strict-contact set.

The first current has total mass one and charges no polar set: the finite-energy
argument gives this on $\mathbb C$ and it has no mass at infinity. Guedj–Zeriahi
state that in complex dimension one their full-mass class $E(X,\omega)$ is
exactly the $\omega$-psh functions whose Laplacian measure charges no polar
set. Therefore $\phi\in E(\mathbb P^1,\omega)$, and $\phi+\epsilon$ is in the
same class for every constant $\epsilon$.

This is where finite energy is used beyond the radial growth coefficient. It
also gives $u$ finite $\mu$-a.e. by the item's Tonelli argument and gives
$\phi\in E$, which is the hypothesis that makes the unbounded contact
identity applicable. No finite-energy assumption on $\nu$ is needed.

## GZ's unbounded passage and the bounded base

Guedj–Zeriahi Corollary 1.7 states that if $\theta\in E(X,\omega)$ and
$\xi$ is any $\omega$-psh function, then $\max(\theta,\xi)\in E$ and
$$
1_{\{\theta>\xi\}}(\omega+dd^c\theta)
=
1_{\{\theta>\xi\}}(\omega+dd^c\max(\theta,\xi))
$$
in dimension one. This is the needed measure statement; the blanket [F7]
claim for an arbitrary unbounded pair of subharmonic functions is not what
the bounded Bedford–Taylor identity alone establishes.

The source proves Corollary 1.7 from its bounded identity (1), not by assuming
the desired unbounded case. Its truncation passage is complete once identity
(1) is available: write
$\theta_j=\max(\theta,-j)$,
$\xi_{j+1}=\max(\xi,-j-1)$, and
$q_j=\max(\max(\theta,\xi),-j)$. These are bounded and
$\max(\theta_j,\xi_{j+1})=q_j$, so identity (1) applies to
$\{\theta_j>\xi_{j+1}\}$. The desired strict set is contained in
this truncated contact set; the excess lies in $\{\theta\leq-j\}$.
Theorem 1.3 gives convergence of the truncated measures against bounded
Borel tests and the E-class tail estimate
$(\omega+dd^c\theta_j)(\theta\leq-j)\to0$. Apply the same facts to
$q=\max(\theta,\xi)$, which is in E by Proposition 1.6, to control the
right-hand truncation. Passing to the limit proves the displayed equality
for arbitrary $\xi$, including $\xi$ that takes value $-\infty$.

Apply this result with $\theta=\phi+\epsilon$ and $\xi=\psi$.
On $\mathbb C$ the strict set $\{\phi+\epsilon>\psi\}$ is exactly
$A_\epsilon=\{u+\epsilon>v\}$, and
$\max(\phi+\epsilon,\psi)=w_\epsilon-\rho$. Thus, for
$\lambda_\epsilon=dd^c w_\epsilon$ on $\mathbb C$, the exact consequence is
$$
1_{A_\epsilon}(\mu/M)=1_{A_\epsilon}\lambda_\epsilon.
$$
This holds as equality of Borel measures on $\mathbb C$. It requires no lower
bound on either potential and no restriction on $\nu$'s atoms.

GZ §1.1 states for bounded plurisubharmonic $x,y$ that the Monge–Ampère
measures agree on $\{x>y\}$, “see [BT 4]”; its references identify [BT 4] as
Bedford–Taylor, *Fine topology, Šilov boundary, and $(dd^c)^n*, J. Funct.
Anal. 72 (1987), 225–251, Corollary 4.3. The complete Bedford–Taylor article
was not obtainable from the legal public full-text routes checked: the OA
indexes expose only the DOI landing page and no repository copy. The needed
dimension-one case is nevertheless proved inline next. The proof uses a local
Sobolev argument and the exact Riesz-measure and mollifier interfaces already
in the library; it does not invoke fine-topology locality.

### The bounded strict-contact identity

Let $x,y$ be locally bounded (above and below) subharmonic functions on a
plane domain, and put
$w=\max(x,y)$. All arguments below are local on a relatively compact disk.
Write $\mu_p=(2\pi)^{-1}\Delta p$ for the positive Radon Riesz measure of a
subharmonic function $p$. We prove
$$
1_{\{x>y\}}\mu_x=1_{\{x>y\}}\mu_w.
$$
The current library interfaces used are
`def-plane-subharmonic-function`,
`thm-plane-subharmonic-functions-are-locally-integrable`,
`def-riesz-measure-subharmonic-function`,
`thm-riesz-measure-is-positive-radon`,
`lem-distributional-laplacian-commutes-with-mollification`,
`thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`,
`thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`,
`thm-minkowski-inequality-for-integrals`,
`thm-c-c-rn-is-dense-in-l-p-of-rn`,
`thm-dominated-convergence`,
`def-weak-derivative-of-a-locally-integrable-function`,
`def-sobolev-space-wkp-and-its-norm`,
`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, and
`thm-riesz-representation-for-hilbert-space`. Dependent Choice supplies the
Countable Choice hypotheses of these interfaces. The two Riesz-measure items
are currently draft suppliers already used by the target. The draft
weak-derivative/mollification lemma is not needed: the weak-test calculation
below proves the convolution identity used here directly. The library's
positive-part Sobolev corollary and its general smooth-composition theorem
declare full Choice, so neither is used; the required chain rules are proved
here under the target's weaker assumption.

**Local $W^{1,2}$ bound.** Choose a nonnegative smooth radial nonincreasing
unit-mass mollifier $\rho$ supported in the unit disk and put
$p_\delta=p*\rho_\delta$ on the safe interior. Distributional convolution
gives $\Delta p_\delta=2\pi\,\mu_p*\rho_\delta\geq0$. For a smooth cutoff
$0\leq\eta\leq1$ and a constant $C$ above $p_\delta$ on its support, let
$B$ bound $C-p_\delta$ there. Integration by parts and Young's inequality
give
$$
\int\eta^2|\nabla p_\delta|^2
\leq 2B\int\eta^2\Delta p_\delta
       +4B^2\int|\nabla\eta|^2.
$$
The first integral on the right is bounded uniformly by the Riesz mass on a
fixed compact neighborhood of $\operatorname{supp}\eta$. Local boundedness
of $p$ makes $B$ uniform. Hence $\nabla p_\delta$ is bounded in local
$L^2$. The pointwise convergence $p_\delta\to p$ is justified below, and
local boundedness then gives $L^2$ convergence. For each coordinate, the
distributional derivative functional of $p$ is therefore bounded on
$L^2$ test functions by the uniform gradient bound. To see the needed density
on a smaller disk $D'$, first truncate an $L^2(D')$ function to concentric
closed subdisks increasing to $D'$. The published
`thm-c-c-rn-is-dense-in-l-p-of-rn` approximates the zero extension of each
truncation by a compactly supported continuous function; a smooth cutoff
equal to one on the truncation and supported in $D'$ localizes this
approximation, and convolution with a sufficiently small smooth mollifier
approximates it by a member of $C_c^\infty(D')$. The Hilbert-space Riesz
representation theorem then gives an $L^2$ weak derivative. Thus every
locally bounded subharmonic $p$, in particular $x,y,w$, lies in
$W^{1,2}_{\rm loc}$.

**Pointwise and strong Sobolev convergence of the mollifications.** For a
locally bounded subharmonic $p$, its disk averages
$$
A_rp(z)=\frac{1}{\pi r^2}\int_{D(z,r)}p\,dA
$$
tend to $p(z)$ at every point: integrating the circle submean inequality
gives $A_rp(z)\geq p(z)$, while upper semicontinuity gives
$A_rp(z)\leq p(z)+\varepsilon$ for all sufficiently small $r$. The radial
profile of $\rho$ can be chosen explicitly as a positive multiple of
$\exp(-1/(1-s^2))$ for $0\leq s<1$, and zero for $s\geq1$. It is smooth,
nonincreasing, and
$$
\rho_\delta*p(z)=\int_0^1\pi s^2(-\rho'(s))A_{\delta s}p(z)\,ds,
\qquad \int_0^1\pi s^2(-\rho'(s))\,ds=1.
$$
The bounded convergence theorem therefore gives $p_\delta(z)\to p(z)$ at
every point, for the actual upper-semicontinuous subharmonic representative.
For strong $W^{1,2}_{\rm loc}$ convergence, localize by a cutoff and use
$$
\|\rho_\delta*f-f\|_2
\leq\int\rho(h)\|f(\cdot-\delta h)-f\|_2\,dh
$$
for the function and its weak first derivatives. Translation continuity in
$L^2$ makes the right side tend to zero; weak derivatives commute with
convolution by the following direct test calculation. On a safe interior, test
the weak-derivative identity for $p$ against $y\mapsto\rho_\delta(x-y)$:
$$
\partial_j(p*\rho_\delta)(x)
=-\int p(y)\partial_{y_j}\rho_\delta(x-y)\,dy
=\int (\partial_jp)(y)\rho_\delta(x-y)\,dy.
$$
Thus the weak derivative of the mollification is the mollification of the
weak derivative, without invoking the draft library lemma for that fact.
Translation continuity in $L^2$ and Minkowski's integral inequality make the
displayed bound tend to zero for the function and each weak first derivative.
This proves $p_\delta\to p$ strongly in $W^{1,2}_{\rm loc}$.

**Smooth scalar chain rule and positive part.** If $F\in C^\infty(\mathbb R)$
has bounded Lipschitz derivative and $f\in W^{1,2}_{\rm loc}$, approximate
$f$ strongly in $W^{1,2}$ on a smaller disk by smooth mollifications $f_k$.
Classical differentiation gives $\nabla F(f_k)=F'(f_k)\nabla f_k$.
Lipschitz continuity of $F$ gives $F(f_k)\to F(f)$ in $L^2$. The gradient
terms converge in $L^2$: the part with $\nabla f_k-\nabla f$ is bounded by
$\|F'\|_\infty\|\nabla f_k-\nabla f\|_2$; for the other part, split
where $|f_k-f|\leq a$ and its complement. Uniform continuity of $F'$
makes the first part arbitrarily small with $a$, and convergence in measure
of $f_k$ plus absolute continuity of the integral of $|\nabla f|^2$
makes the complement small. Passing the weak test identity to the limit
proves $\nabla F(f)=F'(f)\nabla f$ without full Choice.
The same split estimate, with the fixed $F$ and inputs $f_\delta\to f$,
also gives $F(f_\delta)\to F(f)$ strongly in local $W^{1,2}$.

Choose a smooth $\theta$ with $\theta=0$ on $(-\infty,0]$ and $\theta=1$
on $[1,\infty)$, and put $q(t)=t\theta(t)$ and
$P_\delta(t)=\delta q(t/\delta)$. Then $P_\delta$ is smooth with uniformly
bounded derivative, $P_\delta=0$ for $t\leq0$, $P_\delta=t$ for
$t\geq\delta$, and $|P_\delta(t)-t^+|\leq\delta$. Also
$P_\delta'(t)\to1_{\{t>0\}}$ at every real $t$, including $t=0$ where the
derivative is zero. Applying the smooth chain rule and dominated convergence
to $P_\delta(f)$ and its gradients yields
$$
f^+\in W^{1,2}_{\rm loc},\qquad
\nabla f^+=1_{\{f>0\}}\nabla f\quad\text{a.e.}
$$
This is an inline proof of the only positive-part rule needed here; it avoids
the AC hypothesis on the existing general truncation item.

**Test on the strict-contact set.** Set $f=x-y$ and
$g=f^+=w-y$. Fix $\varphi\in C_c^\infty$ and choose a smooth scalar cutoff
$\chi_n$ with $0\leq\chi_n\leq1$, $\chi_n(t)=0$ for
$t\leq1/(2n)$, and $\chi_n(t)=1$ for $t\geq1/n$. Put
$\psi_n=\varphi\chi_n(f)$. The smooth chain rule gives
$$
\nabla\psi_n=\chi_n(f)\nabla\varphi+
                  \varphi\chi_n'(f)\nabla f.
$$
On $\{f>0\}$, $\nabla g=\nabla f$ a.e.; on $\{f\leq0\}$ both
$\chi_n(f)$ and $\chi_n'(f)$ vanish. Consequently
$\nabla g\cdot\nabla\psi_n=\nabla f\cdot\nabla\psi_n$ almost
everywhere.

For each sufficiently small $\delta$, let $f_\delta=x_\delta-y_\delta$
and $\psi_{n,\delta}=\varphi\chi_n(f_\delta)$. These are smooth compactly
supported tests. Strong $W^{1,2}$ convergence of $f_\delta$ and the scalar
chain rule imply $\psi_{n,\delta}\to\psi_n$ strongly in $W^{1,2}$; pointwise
convergence of the radial regularizations gives
$\psi_{n,\delta}(z)\to\varphi(z)\chi_n(x(z)-y(z))$, bounded in absolute
value by $|\varphi(z)|$. For $p=x,y,w$, the smooth-test Riesz identity and
integration by parts are
$$
\int\psi_{n,\delta}\,d\mu_p
=-\frac1{2\pi}\int\nabla p\cdot\nabla\psi_{n,\delta}.
$$
Strong $W^{1,2}$ convergence on the right and dominated convergence against
the finite Radon measure $\mu_p$ on the left give the same identity with
$\psi_n=\varphi\chi_n(f)$ and the actual pointwise $f=x-y$. Subtracting the
$p=y$ identity from the $p=w$ and $p=x$ identities, respectively, and using
$\nabla g\cdot\nabla\psi_n=\nabla f\cdot\nabla\psi_n$, yields
$$
\int\varphi\chi_n(x-y)\,d\mu_w
=\int\varphi\chi_n(x-y)\,d\mu_x.
$$
As $n\to\infty$, $\chi_n(t)\to1_{\{t>0\}}$ for every real $t$ and
$0\leq\chi_n\leq1$. Dominated convergence gives equality against every
smooth compact test for the restricted Radon measures. Such tests determine
Radon measures, proving the bounded strict-contact identity as a Borel
measure equality. The argument treats every finite point value directly and
does not need an exceptional-set change to quasi-continuous representatives.

The unbounded extension above is now justified from this bounded base and the
full Guedj–Zeriahi source, rather than from an unproved external contact
identity. The other full texts read for cross-checking were El Kadiri,
*An equality of Monge-Ampère measures*, arXiv:2207.13610v2 (Theorem 3.2
reduces to Bedford–Taylor Corollary 4.3), and Saff,
*Logarithmic Potential Theory with Applications to Approximation Theory*,
arXiv:1010.3760. Neither is used as an axiom for the bounded proof.

## Keep and finish the radial total-mass argument

The compactification gives the correct contact-set identity, but the target
still needs its direct proof that $\lambda_\epsilon(\mathbb C)=1$. Retain the
radial cutoff proof with these corrections.

From compact support,
$u(z)=\log|z|+O(1/|z|)$ and
$v(z)=a\log|z|-c/M+O(1/|z|)$, uniformly in angle. Therefore, for all
sufficiently large $s$,
$$
m_\epsilon(s):=(2\pi)^{-1}\int_0^{2\pi}
     w_\epsilon(se^{it})\,dt
     =\log s+C_\epsilon+\eta(s),\qquad \eta(s)\to0,
$$
where $C_\epsilon=\epsilon$ if $a<1$, after the eventual dominance
crossover, and $C_\epsilon=\max(\epsilon,-c/M)$ if $a=1$.

Choose a smooth $0\leq\chi\leq1$ on $\mathbb R$, equal to one on a
neighborhood of $[0,1]$, with compact support contained in $(-1,2)$.
Then $\chi(|z|/R)$ is smooth at the origin, equals one on $B(0,R)$,
and is supported in $B(0,2R)$. The derivative kernel
$f(\rho)=\rho\chi''(\rho)+\chi'(\rho)=(\rho\chi'(\rho))'$
is supported away from zero. Its two required integrals are
$$
\int_0^\infty f(\rho)\,d\rho=0,\qquad
\int_0^\infty f(\rho)\log\rho\,d\rho=1.
$$
The Riesz normalization and polar coordinates give
$$
\int\chi(|z|/R)\,d\lambda_\epsilon(z)
  =\int_0^\infty m_\epsilon(R\rho)f(\rho)\,d\rho
  =1+O(\sup_{s\geq R}|\eta(s)|)\longrightarrow1.
$$
There is no residual factor $1/(2\pi)$: the $2\pi$ from polar
angle integration cancels the $1/(2\pi)$ in the Riesz measure. The
cutoff sandwich and continuity from below for the positive Radon measure
$\lambda_\epsilon$ yield $\lambda_\epsilon(\mathbb C)=1$.

Finite energy plus Tonelli gives $u$ finite $\mu$-a.e. At any point of
$A_\epsilon^c$ outside that null set, $u+\epsilon\leq v$ and $u$ is
finite, so $u<v$; the assumed $\mu$-a.e. inequality $u\geq v$
therefore proves $\mu(A_\epsilon^c)=0$. This qualifier matters when
$u=v=-\infty$, where the unqualified inclusion
$A_\epsilon^c\subseteq\{u<v\}$ is false.

The contact identity now gives $\lambda_\epsilon\geq\mu/M$. Since both
positive measures have total mass one, $\lambda_\epsilon=\mu/M$, as in
the target's Steps 3.1–4.1.

## Finish the potential argument and repair the exceptional sets

For the area-a.e. continuation, local integrability of both subharmonic
functions $u,v$ gives that both are finite outside an area-null set. Define
$h=\max(0,v-u-\epsilon)$ on this finite-valued set and $h=0$ on its
complement. Then $h\geq0$, $h\in L^1_{\mathrm{loc}}$, and
$h=w_\epsilon-u-\epsilon$ area-a.e. The equality of Riesz measures gives
$\Delta h=0$ distributionally; Weyl's lemma supplies a harmonic
representative $H$. Since $h\geq0$ area-a.e. and $H$ is continuous,
$H\geq0$ everywhere.

There is an additional exactness problem in current Step 1.3: the expression
$|v_1-v_2|$ is undefined where both extended-valued subharmonic functions
are $-\infty$. A short repair using the same suppliers avoids that
expression. For each center $z$, use the disk averages
$$
A_r(f,z)=(\pi r^2)^{-1}\int_{B(z,r)}f\,dA.
$$
Integrating the subharmonic circle-mean inequality in the radius gives
$A_r(f,z)\geq f(z)$ whenever $f(z)$ is finite. Upper semicontinuity
gives $A_r(f,z)\leq N$ for all sufficiently small $r$, for every
$N>f(z)$ (and for every real $N$ if $f(z)=-\infty$). Hence
$A_r(f,z)\to f(z)$ in the extended reals. If two subharmonic functions
agree area-a.e., their disk averages agree for every disk, so they agree at
every center. This proves the required pointwise agreement and is valid on
common $-\infty$ sets.

Apply this uniqueness to $w_\epsilon$ and $u+\epsilon+H$, which agree
area-a.e. At any $z_0\in A_\epsilon$, $u(z_0)$ is finite: $-\infty$
cannot be strictly greater than any subharmonic value. Thus the pointwise
identity $w_\epsilon=u+\epsilon+H$ and
$w_\epsilon(z_0)=u(z_0)+\epsilon$ give $H(z_0)=0$ without subtracting
infinities. The nonnegative-harmonic zero supplier gives $H=0$, whence
$v\leq u+\epsilon$ everywhere. Let $\epsilon$ decrease to zero to obtain
the claimed domination.

## Exact item corrections to make when writing is released

1. Do not clear [F7] yet. Narrow its needed statement to the
   $\mathbb P^1/\omega$ identity above, prove $\phi\in E$ as shown, and include
   GZ Corollary 1.7's truncation passage. Also close the bounded
   one-dimensional Bedford–Taylor base lemma described above; GZ's citation
   alone is not the required inline proof.
2. In Step 2.1, use $u$ finite $\mu$-a.e. before deducing
   $\mu(A_\epsilon^c)=0$; do not use the false extended-value inclusion
   without that qualifier.
3. In Step 2.2, choose a smooth cutoff constant near zero with support inside
   $(-1,2)$; the current smooth function supported in $[0,2]$ and
   equal to one on $[0,1]$ cannot exist. Remove the spurious $1/(2\pi)$
   from the final error term.
4. In Step 5.1, use local integrability to get both $u,v$ finite area-a.e.;
   Step 1.2 proves only $u$ finite $\mu$-a.e. Do not infer that $v$ is
   finite $\mu$-a.e.
5. In Step 6.1, say explicitly that $u(z_0)$ is finite for
   $z_0\in A_\epsilon$, so cancellation at the contact point is legitimate.
6. Replace the current Step 1.3 difference/circle-selection proof by the
   disk-average uniqueness proof above, or else define its extended-valued
   difference carefully enough to cover common $-\infty$ sets.
7. Correct the Remarks: finite energy supplies $\mu$-a.e. finiteness of
   $u$, finite-energy avoidance of polar sets, and therefore the E-class
   membership used at the contact identity, in addition to the leading
   coefficient in the radial estimate.
8. Preserve the radial branch crossover qualification: when $a<1$,
   $C_\epsilon=\epsilon$ only beyond a radius depending on $a,c,\epsilon$.
9. Update the existing source locators to include Saff, capacity definition
   and polar convention, printed pp. 171–175 and the finite-energy exercise,
   printed p. 184; and Guedj–Zeriahi Theorem 1.3 and Corollary 1.7, printed
   pp. 4–8. Bloom–Levenberg Proposition 5.9, printed pp. 21–22, independently
   confirms the intended unbounded use of Corollary 1.7.

The target's other direct suppliers support its separate descent, Riesz,
Tonelli, cutoff, and Weyl steps; none supplies the finite-energy/no-polar-mass
bridge. The source path above closes that bridge while preserving the stated
DC scope. No target item, carrier, contract, receipt, gate, or scope decision
was changed in this report-only task.

## Full texts read

- V. Guedj and A. Zeriahi, *The Weighted Monge-Ampere Energy of
  Quasiplurisubharmonic Functions*, arXiv:math/0612630v2,
  https://arxiv.org/pdf/math/0612630. Read the full sections containing the
  dimension-one characterization of E, Theorem 1.3, bounded identity (1),
  Proposition 1.6, and the complete proof of Corollary 1.7.
- T. Bloom and N. Levenberg, *Pluripotential Energy*, arXiv:1007.2391v1,
  https://arxiv.org/pdf/1007.2391. Read the complete proof of Proposition
  5.9, which uses Corollary 1.7 for the unbounded E/PSH pair.
- E. B. Saff, *Logarithmic Potential Theory with Applications to
  Approximation Theory*, arXiv:1010.3760v1,
  https://arxiv.org/pdf/1010.3760. Read the capacity and polar-set
  definitions and the complete statement of the finite-energy/no-capacity-zero
  exercise.
- M. El Kadiri, *An equality of Monge-Ampere measures*, arXiv:2207.13610v2,
  https://arxiv.org/pdf/2207.13610v2. Read the full text; Theorem 3.2 also
  invokes Bedford–Taylor Corollary 4.3 for the bounded locality input rather
  than providing its proof.

# Zero-threshold compact scattering defect: explicit counterexample

Read-only focused research support for the owning CC spectral-prerequisite
reviewer. This document changes no production carrier, readiness record,
manifest, contract, coverage, source registration or repair counter. It does
not supply independent production acceptance.

The original **every** $f\in C_c(\mathbb R)$ assertion in clause (b) of
`thm-nrqm-controlled-dynamics-compact-scattering-defects` is false for the
allowed real bounded compactly supported potentials. The following explicit
counterexample retains the original potential class, wave-operator convention,
dilation projection and threshold scope. It does not replace the original
claim by a narrower accepted theorem.

Inputs read:

- Current carrier raw SHA-256:
  `5069064f01f365b9402cf0cc32fc1533a9a2f0e7f22d72f9689d7f27c8c1aab7`.
- `research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/outside40-proposal.md`
  raw SHA-256:
  `c854fc7f238795a3b539b7556c47782e455fc17cc1ec2e4f692f8f1c64b936f0`.
- The actual Cook convention in the current criterion is
  $\Omega_+=\operatorname{s-lim}_{t\to+\infty}e^{itH}e^{-itH_0}$.
- The retrieved full Teschl book's **complete Lemma 12.10 statement and proof**,
  printed pp.254–255, were read in the local extracted text. Its cutoff is
  $f\in C_c^\infty((0,\infty))$, not every $C_c(\mathbb R)$ function.
  The counterexample below is a local explicit argument, not an inference
  from what that lemma omits.

## 1. Potential, radial reduction and resonance

Take

$$V(x)=-\frac{\pi^2}{4}\mathbf1_{\{|x|<1\}},\qquad H_0=-\Delta,\qquad H=H_0+V.$$

This is real, bounded and supported in the closed unit ball; it satisfies the
original $\operatorname{supp}V\subseteq B_R$ hypothesis with, for example,
$R=2$, even if $B_R$ denotes an open ball. Let
$\mathcal H_{\rm rad}$ be the closed radial subspace of $L^2(\mathbb R^3)$.
The unitary map from $L^2((0,\infty),dr)$ onto that subspace is

$$ (Ju)(x)=\frac{u(|x|)}{\sqrt{4\pi}\,|x|}.$$

The value at the origin is immaterial for the $L^2$ class. On this subspace
the operators reduce to

$$h_0=-\frac{d^2}{dr^2},\qquad h=-\frac{d^2}{dr^2}-\alpha^2\mathbf1_{(0,1)},\qquad \alpha=\frac\pi2,$$

with domain $H^2(0,\infty)\cap H^1_0(0,\infty)$. This reduction follows
directly by differentiating $r\psi(r)$ on radial smooth functions; the
Dirichlet domain is the free radial Friedrichs domain, and the bounded
multiplier leaves it unchanged. Rotations commute with both Hamiltonians,
their unitary groups and their wave limits, so their radial restrictions are
the ordinary half-line wave operators.

The zero-energy radial solution

$$u_0(r)=\begin{cases}\sin(\pi r/2),&0<r<1,\\1,&r\ge1\end{cases}$$

has matching value and first derivative at $r=1$. Thus $Ju_0$ solves
$H\psi=0$ locally, is regular at the origin and behaves as $1/r$ at infinity.
It is not $L^2$. This is the permitted zero-energy resonance; no threshold
regularity assumption was imposed by the original claim.

## 2. Exact normalized positive-energy solutions

For $k>0$ define the explicit real and unit-modulus functions

$$q(k)=\sqrt{k^2+\alpha^2},\qquad b(k)=\left(\sin^2q(k)+\frac{q(k)^2}{k^2}\cos^2q(k)\right)^{1/2},$$

$$\zeta(k)=e^{-ik}\frac{(q(k)/k)\cos q(k)+i\sin q(k)}{b(k)}.$$

Here $b(k)>0$: sine and cosine cannot vanish simultaneously. Consequently
$|\zeta(k)|=1$ and these functions are smooth on every compact positive
$k$ interval. Put

$$s_k(r)=\begin{cases}b(k)^{-1}\sin(q(k)r),&0<r<1,\\\dfrac{\zeta(k)e^{ikr}-\overline{\zeta(k)}e^{-ikr}}{2i},&r\ge1.\end{cases}$$

At $r=1$, the exterior value is $b^{-1}\sin q$ and the exterior derivative
is $b^{-1}q\cos q$. They equal the interior value and derivative, respectively.
Also $s_k(0)=0$, and direct differentiation gives $hs_k=k^2s_k$ distributionally,
with no jump term at the well boundary.

The elementary expansion $q(k)=\alpha+k^2/(2\alpha)+O(k^4)$ yields

$$\sin q(k)\longrightarrow1,\qquad \frac{q(k)}k\cos q(k)=-\frac k2+O(k^3),\qquad b(k)\longrightarrow1,\qquad \zeta(k)\longrightarrow i$$

as $k\downarrow0$. There is no phase-branch choice hidden in these formulas.

## 3. Wave identification by direct packet comparison

Let $S$ and $C$ be the unitary half-line sine and cosine transforms:

$$ (Sv)(k)=\sqrt{\frac2\pi}\int_0^\infty\sin(kr)v(r)\,dr,\qquad (Cv)(k)=\sqrt{\frac2\pi}\int_0^\infty\cos(kr)v(r)\,dr.$$

Their $L^2$ extensions are self-adjoint involutions, by the ordinary
Plancherel theorem applied to odd and even extensions. In particular
$Sh_0S=M_{k^2}$.

For a fixed compact interval $I\Subset(0,\infty)$ define

$$ (Tv)(r)=\sqrt{\frac2\pi}\int_I s_k(r)v(k)\,dk\qquad(v\in L^2(I)).$$

This map is bounded into $L^2(dr)$. On $r\ge1$, it is a sum of two
restrictions of Fourier transforms of $\zeta v$ and $\overline\zeta v$,
so Plancherel bounds it. On $0<r<1$, its bounded kernel on the finite
rectangle gives a Hilbert–Schmidt bound. Differentiating twice, with the
same compact $k$ support, shows $Tv\in D(h)$ and $hTv=T(k^2v)$; the
matching conditions above and $s_k(0)=0$ give the domain boundary conditions.
Therefore uniqueness of the strong Schrödinger evolution gives

$$e^{-ith}Tv=T(e^{-itk^2}v).$$

For $v\in C_c^\infty(I)$ compare the free packet
$Se^{-itk^2}v$ and the interacting packet
$T\overline\zeta e^{-itk^2}v$. On $r\ge1$ their outgoing $e^{ikr}$ terms
agree exactly. Their difference is

$$\sqrt{\frac2\pi}\frac1{2i}\int_I e^{-ikr-itk^2}\bigl(1-\overline{\zeta(k)}^2\bigr)v(k)\,dk.$$

For $t\to+\infty$, the phase derivative is $-r-2tk$, bounded away from
zero by a constant times $r+t$ on $I$. Repeated integration by parts, with
no endpoint terms because $v$ is compactly supported inside $I$, gives a
uniform bound $C_N(r+t)^{-N}$. Its $L^2(r\ge1)$ norm tends to zero.
On $0<r<1$, both packets are $O(t^{-N})$ uniformly in $r$, by integration
by parts against the phase $-tk^2$; all $k$ derivatives of their amplitudes
are uniformly bounded on this finite rectangle. Their norm there also
tends to zero. Hence

$$\left\|e^{-ith_0}Sv-e^{-ith}T\overline\zeta v\right\|\longrightarrow0.$$

Multiplying by $e^{ith}$ proves the exact radial wave formula

$$\Omega_+Sv=T\overline\zeta v.$$

This derives the wave identification without assuming a generalized
eigenfunction expansion, stationary/dynamical sector identification,
asymptotic completeness, absence of singular continuous spectrum or any
zero-threshold compact-defect result. These compact-positive-energy packets
are dense; their unitary wave approximants show that the resulting wave
operator has norm one and agrees with the ordinary Cook wave operator.

## 4. Large-position dilation limit of the wave operator

On the radial half-line let

$$ (B_Lu)(r)=L^{-1/2}u(r/L),\qquad L>0.$$

These are the restrictions of the stated three-dimensional dilations, and
$SB_L=B_{1/L}S$. For $v\in C_c^\infty((0,\infty))$, the previous formula gives

$$ (B_L^*\Omega_+B_LSv)(r)=\sqrt{\frac2\pi}\int_0^\infty s_{k/L}(Lr)\overline{\zeta(k/L)}v(k)\,dk.$$

For $r\ge1/L$ this is

$$\sqrt{\frac2\pi}\frac1{2i}\int_0^\infty\left(e^{ikr}-\overline{\zeta(k/L)}^2e^{-ikr}\right)v(k)\,dk.$$

Since $\zeta(k/L)\to i$ uniformly on the compact support of $v$, this
converges in $L^2(dr)$ to $-iCv$: the difference is a restricted Fourier
transform whose coefficient tends to zero in $L^2(dk)$. The omitted interval
$0<r<1/L$ causes no problem. On it $b(k/L)^{-1}$ is uniformly bounded for
large $L$, $|\sin(q(k/L)Lr)|\le1$, and $v$ has finite $L^1$ norm; thus the
interacting expression is uniformly bounded and its norm on that interval
is $O(L^{-1/2})$. The limit cosine packet has the same bound there.

The dense packet argument and $\|\Omega_+\|=1$ imply the strong operator limit

$$ B_L^*\Omega_+B_L\longrightarrow Q:=-iCS\qquad(L\to\infty).$$

In particular, the resonance leaves a nontrivial **scale-invariant** wave
effect at zero energy. Completeness cannot remove this effect.

## 5. The limit defect is nonzero on the actual outgoing projection

The radial dilation generator is
$D=-i(r\partial_r+1/2)$, with
$P_+=\mathbf1_{(0,\infty)}(D)$. Under the unitary log-coordinate map
$u(r)\mapsto e^{\rho/2}u(e^\rho)$, this is $-i\partial_\rho$.
It has no spectral atom at zero. Complex conjugation exchanges its positive
and negative spectral subspaces.

Take $g(r)=e^{-r}$ and $u=P_+g$. Since $g$ is real, the two projections of
$g$ have equal norms, and

$$P_+u=u,\qquad \|u\|^2=\frac12\|g\|^2=\frac14,\qquad \int_0^\infty e^{-r}u(r)\,dr=\langle u,g\rangle=\frac14.$$

The last identity uses the pairing linear in the first variable; its real
value is unchanged under the other convention.

To show $(Q-I)u\ne0$ without an unproved Mellin multiplier formula, define
the bounded Carleman operator

$$ (Au)(r)=\int_0^\infty\frac{u(s)}{r+s}\,ds.$$

Its norm is at most $\pi$: the weighted Schur estimate uses
$w(r)=r^{-1/2}$ and the explicit integral
$\int_0^\infty(r+s)^{-1}s^{-1/2}\,ds=\pi r^{-1/2}$.

For $\varepsilon>0$, put $M_\varepsilon v(k)=e^{-\varepsilon k}v(k)$.
Direct integration of the damped sine kernel gives

$$ (CM_\varepsilon S+SM_\varepsilon C)(r,s)=\frac2\pi\frac{r+s}{(r+s)^2+\varepsilon^2}.$$

As $\varepsilon\downarrow0$, the left side converges strongly to $CS+SC$.
On compactly supported test functions away from zero the right side converges
to $(2/\pi)A$ by dominated convergence. Density and the Schur bound therefore
give the bounded-operator identity

$$\frac{CS+SC}{2}=\frac A\pi.$$

The Laplace kernel representation also gives

$$\langle Au,u\rangle=\int_0^\infty\left|\int_0^\infty e^{-tr}u(r)\,dr\right|^2dt.$$

For compact test functions this is absolute Fubini, using
$(r+s)^{-1}=\int_0^\infty e^{-t(r+s)}dt$; the Schur bound extends the
associated bounded Laplace map and identity to all $L^2$. Each fixed-$t$
evaluation is continuous because $e^{-tr}\in L^2$, so the extension is the
displayed Laplace integral. The Laplace integral of our $u$ is $1/4$ at
$t=1$ and is continuous for $t>0$, since $t\mapsto e^{-tr}$ is continuous
in $L^2$. Consequently the last nonnegative integral is strictly positive.
Thus

$$\operatorname{Re}\langle CSu,u\rangle=\frac1\pi\langle Au,u\rangle>0.$$

If $Qu=u$, then $CSu=iu$, whose inner product with $u$ has real part zero.
This contradiction proves $(Q-I)u\ne0$ for this explicit $u\in\operatorname{ran}P_+$.

## 6. Explicit weakly-null sequence contradicting compactness

Choose, for example,

$$ f(E)=\max(1-|E|,0),\qquad f\in C_c(\mathbb R),\qquad f(0)=1.$$

Let $L_n=2^n$ and $u_n=B_{L_n}u$. Then $u_n\rightharpoonup0$ in $L^2(dr)$.
Indeed the assertion is immediate for two test functions supported in compact
annuli $0<a\le r\le b<\infty$, whose supports eventually separate under
these dilations, and extends to all $L^2$ pairs by density and unitarity.
Also $B_L$ commutes with $P_+$ and

$$B_L^*h_0B_L=L^{-2}h_0,\qquad f(L^{-2}h_0)\longrightarrow I\quad\hbox{strongly}.$$

The functional-calculus limit is the scalar dominated-convergence theorem
on each vector's spectral measure: $h_0\ge0$ and $f(L^{-2}E)\to f(0)=1$.
For the claimed radial defect $K=(\Omega_+-I)f(h_0)P_+$ we therefore obtain

$$ B_{L_n}^*K B_{L_n}u=(B_{L_n}^*\Omega_+B_{L_n}-I)f(L_n^{-2}h_0)u\longrightarrow(Q-I)u\ne0.$$

Hence

$$\lim_{n\to\infty}\|Ku_n\|=\|(Q-I)u\|>0.$$

A compact operator must map a bounded weakly-null sequence to a norm-null
sequence. This proves $K$ is **not compact**. If the full three-dimensional
$C_+=(\Omega_+-I)f(H_0)P_+$ were compact, its radial compression $J^*C_+J=K$
would be compact, which is impossible. Failure of this single outgoing sign
already refutes the original clause (b).

## 7. Scope and choice accounting

The square-well potential, generalized solutions, bounded packet maps,
transform phases, test vector and dilation sequence are all explicit.
The proof uses separable $L^2$ Plancherel/spectral calculus, bounded-potential
self-adjoint dynamics, ordinary scalar integration and finite/countable
limiting arguments. It requires no arbitrary-index choice, no AC/DC
Fredholm theorem, no spectral completeness of the interacting operator and
no unproved stationary/dynamical identification. It fits the stipulated CC
setting. The explicit radial packet comparison supplies its own wave formula.

This counterexample does not challenge parts (a) or (c), nor the genuine
positive-energy intermediate, nor a completeness argument using only that
intermediate. If $f(0)=0$, uniform approximation on $[0,\infty)$ by smooth
positive-energy cutoffs can extend a proved positive-cutoff compactness
result; such an approximation cannot work uniformly at zero when $f(0)\ne0$.
That observation is **not** a substitute narrower acceptance of the original
every-$C_c$ contract. The owning reviewer/root must disposition the false
full claim explicitly and retain its actual consumer duties and run history.

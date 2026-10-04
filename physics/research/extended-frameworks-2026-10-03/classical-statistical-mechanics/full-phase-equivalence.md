# Full interacting phase-space shell and local marked ensembles

Research development, 2026-10-03 UTC. This extends, rather than renames, the
positional theorems L30/L31 of the thermodynamics dossier. Every source label
below refers to the actual section of
`physics/research/first-principles-2026-10-03/thermodynamics/scaffold/ly-closure-developments.md`;
M17/M27/M29 refer to that dossier's `completed-developments.md`. All those
statements are complete scoped research arguments, not production receipts.

## C0 — exact objects, reference measures and theorem hypotheses

Use **exactly** L23's superstable regular even measurable pair potential
$\phi:\mathbb R^d\to\mathbb R\cup\{+\infty\}$, $d\ge1$, and its periodic
cubes $\Lambda_n=[-n-1/2,n+1/2)^d$, $V_n=(2n+1)^d$ in fixed numerical length
units. L23's potential decomposition, decreasing integrable lower/tail envelope,
periodic image convention, cell quadratic bound and finite-energy attainable
density domain are retained. Positions are finite **simple** configurations
$q\subset\Lambda_n$, with $|q|=N_n$, $N_n/V_n\to\rho\in(0,\nu(\phi))$.
Let $U_n(q)=H_{n,\mathrm{per}}(q)$ be precisely the source's periodic pair
energy. Infinity denotes forbidden configurations, whose Gibbs weight is zero.
No smooth force or collision dynamics is assumed by this measure theorem.

Each point carries a momentum mark $p_x\in\mathbb R^d$; the marked state is
$\omega=\{(x,p_x):x\in q\}$. The measurable finite-region state space is the
countable disjoint union of finite tuples $(x_i,p_i)$ modulo simultaneous
permutations, with position diagonals removed. Lexicographic sorting of positions
gives its standard-Borel coordinates, as in L21. Sorting is measurable; ties
of positions and points on fixed null boundaries have zero measure under the
reference and all laws used here. Local restriction retains **all** particles
whose positions lie in the specified region, with their marks. It is not a fixed
label marginal. A local observable is a measurable function of this restriction
to one fixed bounded region; different observables may use different fixed
regions.

Adopt mass parameter $m>0$ (kg), inverse-energy parameter $\beta>0$ (J⁻¹),
and the exact full energy

$$H_n(q,p)=U_n(q)+\sum_{x\in q}K(p_x),\qquad K(p)=|p|^2/(2m).$$

The unmarked reference is L21's normalized unit-intensity Poisson law $Q_n$,
restricted to $|q|=N_n$; this restriction is a finite measure, not renormalized
to a conditional probability. The mark reference is $r(dp)=dp/p_*^d$, with
fixed positive momentum reference $p_*$ (kg m/s). Write
$R_{n,N}=Q_n|_{\{N=N_n\}}\prod_{x\in q}r(dp_x)$, a sigma-finite phase
measure. Reference length units restore Poisson intensity $1/v_*$, $v_*$ in
m$^d$. Choosing $h^d=v_*p_*^d$ identifies the usual action reference convention;
neither this normalization nor a quantum value of $h$ is derived from classical
mechanics. The numerical formulas here use $v_*=1$; reference shifts must be
restored before physical pressure/chemical-potential interpretations.

The Gaussian factor and normalized mark law are, by the checked M17 integral,

$$\kappa_\beta=\int e^{-\beta K}r(dp)=\frac{(2\pi m/\beta)^{d/2}}{p_*^d},\qquad \nu_\beta(dp)=\kappa_\beta^{-1}e^{-\beta K(p)}r(dp).$$

Let $Z_n^{\mathrm{pos}}(\beta)=Q_n(1_{N_n}e^{-\beta U_n})$ and
$Z_n^{\mathrm{ph}}(\beta)=R_{n,N}(e^{-\beta H_n})$.
Nonnegative product integration gives
$Z_n^{\mathrm{ph}}=\kappa_\beta^{N_n}Z_n^{\mathrm{pos}}$ and the full canonical
probability $C_n^{\mathrm{ph}}=C_n^{\mathrm{pos}}\nu_\beta^{\otimes q}$.
This is an exact factorization of the **canonical** law; it is not a
factorization of a uniform full-energy shell. The latter couples positions,
number of particles and momenta through its actual energy constraint.

Require all L30 hypotheses, and additionally the L31 hypotheses at this $\beta$:
$F(\rho,\beta)=\lim V_n^{-1}\log Z_{n,N_n,\mathrm{per}}^{\mathrm{unnormalized}}$
is differentiable in $\beta$, and at a finite configurational chemical parameter
$\alpha$ satisfying **exactly** $P(\alpha,\beta)=F(\rho,\beta)+\alpha\rho$
the source's grand **variational minimizer** is a
singleton $P_*$ in its local-tame topology. This does not assert a DLR
identification absent from that source. In normalized-Poisson coordinates the
full canonical rate is

$$f_{\mathrm{ph}}(\rho,\beta)=F(\rho,\beta)-1+\rho\log\kappa_\beta,$$

and its derivative gives the total energy density
$e=-\partial_\beta F(\rho,\beta)+d\rho/(2\beta)$.
All fixed neighboring positive $\beta$ partition limits are supplied by L30;
the potential, mass and reference measure are held fixed when differentiating.
The theorem uses a **constructed controlled shrinking density window**, not
every microscopic shell width and not an exact zero-width surface.
In concave-supergradient terminology the displayed supporting equality means
$-\alpha\in\partial^+_\rho F$, not $\alpha\in\partial^+_\rho F$. The source
L26's wording of that sign is not consumed; its proved dual equality is.

## C1 — density entropy, disjoint blocks, information contraction and Pinsker

For probabilities $A=aB$ define $D(A\Vert B)=\int a\log a\,dB$, with
$0\log0=0$ and value $+\infty$ when absolute continuity fails. M27 proves
nonnegativity and the integrable negative-part bound. The following exact
arguments supply the information tools used on random mark counts.

For $A$ of finite relative entropy against a product probability $B_XB_Y$,
the marginal density is $a_X(x)=\int a(x,y)B_Y(dy)$, and the conditional
density is $a(x,y)/a_X(x)$ when $a_X>0$. Set it to $1$ otherwise; the latter
set has $A$ measure zero. Jensen for $t\log t$ (its supporting-line
inequality follows by differentiating twice, $1/t>0$) bounds marginal entropy
by joint entropy. Integrating $\log a=\log a_X+\log(a/a_X)$ now proves

$$D(A\Vert B_XB_Y)=D(A_X\Vert B_X)+\mathbb E_{A_X}D(A_{Y|X}\Vert B_Y).$$

Both terms are nonnegative and finite if the left side is finite. All log
integrations are justified: the negative parts are bounded as M27, marginal
positive entropy is finite by Jensen, and the conditional term is their finite
difference. Repeated use, or comparison with the product of all block marginals,
gives $D(A\Vert\prod_j B_j)\ge\sum_jD(A_j\Vert B_j)$ for finitely many
disjoint blocks. To verify the latter comparison directly, the product of
marginal densities is positive wherever $a$ has mass, and integrating each
log marginal against $A$ gives its own marginal entropy. The remaining
$D(A\Vert\prod_jA_j)$ is nonnegative. These arguments also hold conditional
on a fixed position configuration with its fixed finite mark count. Integration
over positions is legitimate by nonnegativity/Tonelli; variable finite counts
are treated separately in their countable disjoint union.

L21 supplies and proves the variational identity
$D(A\Vert B)=\sup_{g\ \mathrm{bounded\ measurable}}[A(g)-\log B(e^g)]$:
tilting gives one inequality; truncating $\log a$ gives equality, with
$e^{\mathrm{clamp}(\log a,-j,j)}\le1+a$ for dominated convergence.
Pulling every such test back under a measurable restriction proves information
contraction $D(T_*A\Vert T_*B)\le D(A\Vert B)$. This argument works on the
variable-count configuration spaces without postulating a conditional law
at a zero-probability individual configuration.

Write total variation as $\|A-B\|_{\mathrm{TV}}=\sup_E|A(E)-B(E)|$.
When $A=aB$, the positive-density set $E=\{a\ge1\}$ gives
$\|A-B\|_{\mathrm{TV}}=A(E)-B(E)$ by splitting the positive and negative
parts of $a-1$. Information contraction to this binary event gives
$D(A\Vert B)\ge t\log(t/u)+(1-t)\log((1-t)/(1-u))$, where $t=A(E)$,
$u=B(E)$. For fixed $u\in(0,1)$ this binary expression has value and
derivative zero at $t=u$ and second derivative $1/[t(1-t)]\ge4$.
Integrating twice proves it is at least $2(t-u)^2$, with endpoint cases
obtained by limits or absolute continuity. Thus

$$\|A-B\|_{\mathrm{TV}}\le\sqrt{D(A\Vert B)/2}.$$

For any bounded measurable test $G$, difference of expectations is at most
$2\|G\|_\infty\|A-B\|_{\mathrm{TV}}$. This supplies full local measurable
mark tests, not merely weak convergence of a chosen momentum component.

## C2 — total-energy concentration, actual windows and shell entropy bound

The full canonical moment-generating identity is
$C_n^{\mathrm{ph}}(e^{tH_n})=Z_n^{\mathrm{ph}}(\beta-t)/Z_n^{\mathrm{ph}}(\beta)$
for $|t|$ sufficiently small that $\beta-t>0$. Source L30 and C0's exact
Gaussian factorization give its log divided by $V_n$ tending to
$f_{\mathrm{ph}}(\beta-t)-f_{\mathrm{ph}}(\beta)$.
Differentiability and the exponential-Markov argument actually proved in M29
give, for every fixed $\varepsilon>0$, exponentially vanishing probability of
$|H_n/V_n-e|>\varepsilon$. Explicitly for the upper tail choose fixed small
$t>0$ with $f_{\mathrm{ph}}(\beta-t)-f_{\mathrm{ph}}(\beta)-t(e+\varepsilon)<0$;
the exact finite-volume Markov bound then decays exponentially. The lower
tail uses $t<0$. This is a probability statement, not a statement about every
Hamiltonian trajectory or a claim that total-energy concentration proves local
ensemble equivalence.

Choose strictly increasing integers $n_j$ such that for every $n\ge n_j$ the
probability outside the $1/j$ density window is at most $1/j$; define
$j(n)=\max\{j:n_j\le n\}$ and $\delta_n=1/j(n)$, assigning a positive value
before $n_1$. This is the L31 diagonal construction applied to the **total**
energy distribution. Then $\delta_n\downarrow0$ and the event
$A_n=\{|H_n/V_n-e|\le\delta_n\}$ has $C_n^{\mathrm{ph}}(A_n)\to1$.
All laws already have the exact particle number $N_n$.
Let $M_n^{\mathrm{ph}}=R_{n,N}(\cdot\cap A_n)/R_{n,N}(A_n)$.
The denominator is eventually positive because the canonical event has
positive probability; it is finite because stability gives $U_n\ge-bN_n$,
so on $A_n$ one has $0\le\sum K\le V_n(e+\delta_n)+bN_n$.
Positions lie in a finite box and momenta then lie in a finite Euclidean ball.
Forbidden configurations never enter the finite-energy shell.

On $A_n$, $e^{-\beta H_n}$ lies between
$e^{-\beta V_n(e+\delta_n)}$ and $e^{-\beta V_n(e-\delta_n)}$.
Consequently the exact likelihood identity and this interval give

$$0\le D_n:=D(M_n^{\mathrm{ph}}\Vert C_n^{\mathrm{ph}})\le-\log C_n^{\mathrm{ph}}(A_n)+2\beta V_n\delta_n=o(V_n).$$

Indeed $D_n=-\log R_{n,N}(A_n)+\beta M_n^{\mathrm{ph}}(H_n)+\log Z_n^{\mathrm{ph}}$;
the lower interval bound on $R(A_n)$ and the upper shell energy bound prove
the displayed upper bound. This is entropy density closeness, **not** global
total variation closeness: $D_n$ itself need not tend to zero.

## C3 — the positional marginal really inherits the variational bound

Let $B_n$ be the positional marginal of $M_n^{\mathrm{ph}}$. It is invariant
under translations of the torus: the reference, periodic pair energy and
total kinetic constraint are translation invariant in the positions. Write
the mark conditional density $b_n(dp\mid q)$ explicitly by integrating the
finite shell indicator against $r^{\otimes N_n}$ and dividing by its finite
positive marginal integral, defining it harmlessly off the marginal support.
The C1 chain rule, now against $C_n^{\mathrm{pos}}\nu_\beta^{\otimes q}$,
gives

$$D_n=D(B_n\Vert C_n^{\mathrm{pos}})+\int D(b_n(\cdot\mid q)\Vert\nu_\beta^{\otimes q})B_n(dq).$$

In particular each summand is nonnegative and at most $D_n$; no exchangeability
or independence of marks under the shell law was assumed. Define the second
summand as $J_n$. The positional Gibbs likelihood gives the **combined** bound

$$D(B_n\Vert Q_n)+\beta B_n(U_n)=D(B_n\Vert C_n^{\mathrm{pos}})-\log Z_n^{\mathrm{pos}}\le D_n-\log Z_n^{\mathrm{pos}}.$$

Here $Q_n$ is the full probability on configurations, with $B_n$ supported at
$N_n$; hence this is ordinary finite probability relative entropy. All terms
are finite: $-bN_n\le U_n\le V_n(e+\delta_n)$ on the full shell, so this
also holds after marginalization. The energy upper bound and periodic
superstability $U_n\ge aT_n-b'N_n$, $a>0$, give
$B_n(T_n)/V_n\le[e+\delta_n+b' N_n/V_n]/a$. The displayed entropy identity
and stability give $D(B_n\Vert Q_n)/V_n=O(1)$.

The **actual** L21/L23/L30 stationarization argument applies to these bounds,
not only to a canonical density. Its proof tiles independent copies of $B_n$,
averages translation phase, bounds specific entropy by $D(B_n\Vert Q_n)/V_n$
and compares the resulting local law with the periodic barycenter. Its boundary
strip errors for fixed local tests vanish by the source's entropy/count-tail
bounds; torus translation invariance identifies the local law and barycenter,
and $\Phi(B_nR_n)=B_n(U_n)/V_n$ is the empirical-energy identity for every
finite-energy positional law. Thus L21 gives compact local-tame accumulation
and L23's lower semicontinuity, applied to the **combined** bound, gives any
stationary local limit $B$ the inequalities

$$\rho(B)=\rho,\qquad I(B)+\beta\Phi(B)\le1-F(\rho,\beta).$$

Every required ingredient is the exact source proof, with this $B_n$ in place
of L30's canonical positional sequence: finite relative entropy, translation
invariance, uniform quadratic occupation bounds and the combined entropy–energy
inequality were independently verified above. No assertion that positional
microcanonical and full microcanonical marginal distributions coincide was used.
At the supporting $\alpha$, L26 gives $P(\alpha,\beta)=F(\rho,\beta)+\alpha\rho$.
L23's grand variational nonnegativity forces equality and makes $B$ a grand
variational minimizer. The stipulated singleton is $P_*$; compactness therefore
gives $B_n\to P_*$ for every source local-tame test. The same source already
gives $C_n^{\mathrm{pos}}$ and the matching grand law this limit.

## C4 — disjoint spatial cells control marks with random occupations

Fix a bounded half-open cube $\Delta$ of side $\ell>0$, not depending on $n$.
Pack the torus's fundamental cube with $L_n$ disjoint translates of $\Delta$,
leaving a boundary remainder; $L_n/V_n\to1/|\Delta|$. For each **fixed** $q$
its particles split into disjoint index sets according to these spatial cells
and the remainder. These index sets and their sizes depend measurably on $q$.
Conditional on $q$, the reference $\nu_\beta^{\otimes q}$ factors over the
sets, so C1 superadditivity gives

$$D(b_n(\cdot\mid q)\Vert\nu_\beta^{\otimes q})\ge\sum_{j=1}^{L_n}D(b_{n,j}(\cdot\mid q)\Vert\nu_\beta^{\otimes N_{\Delta_j}(q)}).$$

Zero occupancy contributes zero. No independence of occupied cells under $B_n$
and no fixed deterministic particle labels are needed. Averaging in $B_n$ and
using **joint** torus translation invariance of the full shell law makes all
the displayed integrated cell terms equal. In particular for the fixed cube
$\Delta$ (shift the packing if necessary),

$$\int D(b_{n,\Delta}(\cdot\mid q)\Vert\nu_\beta^{\otimes N_\Delta(q)})B_n(dq)\le J_n/L_n\le D_n/L_n\longrightarrow0.$$

Let $\widehat B_n$ be the Gaussian mark lift of $B_n$: sample $q\sim B_n$
and then independent marks from $\nu_\beta$ on its points. On the larger joint
space of **all** positions and marks of only the particles in $\Delta$, the
left side is precisely the relative entropy between the shell conditional
marks and this Gaussian kernel, with identical positional marginal $B_n$.
Restricting positions as well to $\Delta$ is measurable; C1 information
contraction followed by Pinsker therefore proves

$$\|(M_n^{\mathrm{ph}})_\Delta-(\widehat B_n)_\Delta\|_{\mathrm{TV}}\le\sqrt{D_n/(2L_n)}\longrightarrow0.$$

This directly addresses random occupations and spatially selected particles.
A bound for fixed label marginals alone would not have supplied this result,
because a specified label falls in a fixed spatial region with probability
tending to zero as the volume grows.

For every bounded measurable marked local $G$, integrating its Gaussian marks
gives a bounded measurable unmarked local function $\mathcal G_\beta G$ on
$q_\Delta$, with the same sup norm. C3's source local-tame convergence gives
$\widehat B_n(G)=B_n(\mathcal G_\beta G)\to P_*(\mathcal G_\beta G)$.
The latter defines the Gaussian marked lift $P_*\nu_\beta^{\otimes q}$.
Its consistent finite-region kernels define the infinite law by the same
standard-Borel countable-product/extension interfaces and admitted AC used in
L21. The TV bound proves the full shell converges to this marked law for
every fixed bounded measurable marked local observable. The canonical and
matching full grand laws have the same lift, with configurational activity
$e^\alpha$ replaced by full activity $e^\alpha/\kappa_\beta$.

The conclusion also holds for each fixed marked local observable with
$|G|\le C(1+N_\Delta)$: shell and Gaussian-lift laws share the same $B_n$
count marginal; C3/source count uniform integrability controls the truncation
tail $N_\Delta>K$, and the truncated observable is bounded. This remains
convergence for each fixed observable, not a uniform supremum over arbitrary
count-growing tests or arbitrary changing observation regions.

## C5 — explicitly controlled local momentum moments

The TV conclusion alone does not justify unbounded momentum moments. There is
a separate direct entropy estimate for the physical moments asserted here.
Let $g(p)$ be one of $K(p)$, $p_i$, or $p_i p_j$, and set
$\bar g=\nu_\beta(g)$. Its Gaussian exponential moments exist for sufficiently
small positive and negative $t$ (for quadratic $g$ keep the total quadratic
form positive). M17's Gaussian bounds justify differentiation, so
$c_g(t)=\log\nu_\beta(e^{t(g-\bar g)})$ satisfies $c_g(t)=O(t^2)$ near zero.
At a fixed $q$, entropy positivity relative to the exponentially tilted product
Gaussian gives

$$\left|\mathbb E_{b_{n,\Delta}(\cdot\mid q)}\sum_{x\in q\cap\Delta}(g(p_x)-\bar g)\right|\le\frac{D(b_{n,\Delta}\Vert\nu_\beta^{\otimes N_\Delta})+N_\Delta\max\{c_g(t),c_g(-t)\}}{t},\quad t>0.$$

All shell moment integrals are finite at each $n$ because total kinetic energy
is bounded on the chosen shell. Integrate this bound and apply C4.
Translation invariance gives exactly $B_n(N_\Delta)=N_n|\Delta|/V_n$ when
$\Delta$ embeds in the fundamental torus; counting expectations are the
translation-invariant measure with this total mass (the same box/monotone-class
argument as the source Campbell interface). Take $n\to\infty$ at fixed $t$,
then $t\downarrow0$. It follows that

$$M_n^{\mathrm{ph}}\left(\sum_{x\in\Delta}K(p_x)\right)\to\frac{d\rho|\Delta|}{2\beta},\quad M_n^{\mathrm{ph}}\left(\sum_{x\in\Delta}p_{x,i}\right)\to0,$$

$$M_n^{\mathrm{ph}}\left(\sum_{x\in\Delta}p_{x,i}p_{x,j}\right)\to\frac{m\rho|\Delta|}{\beta}\delta_{ij}.$$

These are specifically proved local kinetic-energy/momentum/stress-tensor
moments, not a theorem of convergence of every unbounded mark observable.
The canonical/grand limits have the same moments by the Gaussian kernel and
their source intensity convergence. Reference units restore the indicated
kg m/s, J and momentum-squared dimensions. Position virial stress at singular
potentials, time-correlation limits, growing-region observables and arbitrary
high-moment convergence require their own hypotheses and are not claimed here.

## C6 — concentration and small entropy density can fail without local hypotheses

These are mathematical countermodels, not empirical evidence. Fix
$0<\theta<1$ and independent Bernoulli reference $P_N$ on $\{0,1\}^N$ with
$P(x_i=1)=\theta$ and energy $H_N=\varepsilon\sum_i x_i$, $\varepsilon>0$
in J. A point mass on the configuration with its first $\lfloor\theta N\rfloor$
sites equal to one has $H_N/N\to\varepsilon\theta$, but its first-site
distribution tends to the point mass at one, not Bernoulli $\theta$.
Thus energy concentration alone supplies no local-equivalence theorem.

More sharply, let $A_N=P_N(\cdot\mid x_1=1)$. Its first site remains one,
while its other sites have the original independent law. The likelihood is
$1/\theta$ on this event, so $D(A_N\Vert P_N)=\log(1/\theta)$ and
$D/N\to0$. Its Shannon entropy per site is
$(N-1)[-\theta\log\theta-(1-\theta)\log(1-\theta)]/N$, the same limit as
$P_N$, and its energy density concentrates at $\varepsilon\theta$ by the
finite independent variance bound. Yet the first-site TV distance is
$1-\theta$ for all $N$. It violates translation homogeneity at that selected
site. The C3 variational/uniqueness and C4 spatial-translation arguments are
therefore real prerequisites, not optional rhetoric appended to entropy-density
agreement.
## C7 — physical preparation interface and exact conclusion scope

`post-csm-fullphase-interacting-preparations` adopts the specified classical
massive interaction model and reference counting in C0, the full canonical
thermal preparation at $\beta=1/(k_BT)$ with $k_B>0$ (J/K) and $T>0$ (K),
the uniform **phase** band preparation $M_n^{\mathrm{ph}}$ of C2, and the
full grand preparation with activity $e^\alpha/\kappa_\beta$. These are
alternative preparations of the explicitly named state model, not laws derived
from energy conservation or a universal claim that real gases equilibrate.
The uniform band is a physical preparation assumption on the mathematically
normalized law, with exact $N_n$, periodic interaction and the constructed
shrinking density window. The source formulations are the canonical/counting
postulates and source records in `workers/foundations/`, and the actual
thermodynamic statistical-model interfaces L23/L30/L31; those source positional
statements do not themselves establish the new full-phase conclusion.

Under this adopted model and all C0 hypotheses, C2–C4 prove equality in the
limit of expectations for **each fixed** bounded measurable marked local
observable and each fixed marked local observable bounded by $C(1+N_\Delta)$.
C5 additionally proves the named local kinetic energy and first/second momentum
sum expectations. This includes actual momentum-dependent observables and
their joint dependence on locally selected positions; it is not a
positional-only theorem. No uniform assertion over all observables, all growing
regions, arbitrary unbounded moment functions, exact zero-width shells or
arbitrarily chosen narrow windows is made. At nonunique variational minimizers
one must retain an accumulation-set statement; this text does not choose a phase
or claim marked local convergence without uniqueness. No experiment or
measurement precision is inferred from these conditional deductions.

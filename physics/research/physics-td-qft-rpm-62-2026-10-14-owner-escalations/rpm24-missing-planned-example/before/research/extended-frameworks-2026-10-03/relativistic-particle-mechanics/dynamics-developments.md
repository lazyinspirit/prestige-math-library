# Momentum, collisions and controlled limits

Research development, 2026-10-03. These are complete conditional arguments for
the stated finite-dimensional models, not production items or evidence that a
collision channel occurs in nature. Signature is $(-+++)$, SI retains $c>0$ in
m/s, and affine coordinates are lengths with $x^0=ct$. S0–S7 below mean the
exact sections of `../../first-principles-2026-10-03/relativity/scaffold/sr-supplier-proofs.md`.

## D0 — quantities, model premises and mathematical language

An isolated instantaneous collision is a finite collection of incoming and
outgoing regular future causal worldline segments meeting at one event of
affine Minkowski spacetime. Its adopted mechanical premise is equality of the
finite sums of four-momenta at that event. It includes all stipulated outgoing
products and radiation momenta; leaving an unmodelled product out invalidates
the balance. A massive segment has a constant parameter $m>0$ (kg) and
$P=mU$ (kg m/s), where S4 defines proper time $	au$ (s) and $U=dX/d\tau$.
A massless segment instead has a nonzero future null momentum $P$ with a
separately prescribed normalization; $P=0U$ is not its definition. Neither
mass nor charge is derived from classical geometry or classical EM. The local
collision postulate selects balance, not an interaction probability.

A unit observer is a future $n$ with $g(n,n)=-1$. Its rest space $n^\perp$
has the positive inner product induced by $g$; S4 proves its positivity and
projection $h_n(V)=V+g(n,V)n$. Observer energy and spatial momentum are
derived scalars/vectors $E_n=-c g(P,n)$ (J) and $p_n=h_n(P)$ (kg m/s).
They depend on $n$; invariant rest mass does not. A laboratory frame here
means the global affine chart of one S0 inertial tetrad, not a general
observer congruence. For a $C^2$ massive segment define three-force
$f=dp/dt$ (N), four-force $K=D_\tau P$ (N), coordinate acceleration
$a=dv/dt$ (m/s²), and proper acceleration $A=D_\tau U$ (m/s²).
In a curved spacetime sums at one event are still defined in that event's
tangent space; summing remote momenta needs a specified transport and is not
a generally conserved total gravitational energy.

S7's mass/momentum premise and S4 give $P=(E/c,p)=(m\gamma c,m\gamma v)$,
$E^2=m^2c^4+c^2|p|^2$, $E>0$, $\gamma=(1-|v|^2/c^2)^{-1/2}$.
Inverting gives $v=c^2p/E$; substitution proves $|v|<c$. Differentiating
the shell yields $dE/dt=f\cdot v$ and $K=\gamma(f\cdot v/c,f)$;
these definitions and consequences are conditional mechanical claims, with
no force law silently selected. For variable $m(\tau)>0$ and $P=mU$,
$g(P,K)=-mc^2m'$ by differentiating $g(P,P)=-m^2c^2$.

## D1 — finite-system mass and energy thresholds

Let $P_1,\ldots,P_N$ be nonzero future causal vectors with assigned masses
$m_i=\sqrt{-g(P_i,P_i)}/c\ge0$. Their sum $Q$ is future causal by S6:
in a rest basis $\sum P_i^0\ge\sum|\mathbf P_i|\ge|\sum\mathbf P_i|$.
It is timelike if one summand is timelike. If all summands are null, equality
in both inequalities means all their spatial vectors have the same direction
(for two nonzero vectors this follows from equality in Cauchy–Schwarz;
apply successively to the finite sum). Thus a nonparallel collection of null
momenta is timelike; a parallel one has no center-of-momentum observer.

For timelike $Q$ put $M=\sqrt{-g(Q,Q)}/c>0$ (kg) and
$n_Q=Q/(Mc)$. S2 gives a rest frame for this observer. Its total spatial
momentum vanishes and $Mc^2=\sum E_i$. The individual shell gives
$E_i\ge m_i c^2$, so $M\ge\sum m_i$. Equality requires every massive
spatial momentum zero and excludes any nonzero massless product because
its energy is strictly positive. Conversely stationary massive products
have equality. Conservation makes $M$ the same before and after the event;
this proves necessary thresholds, without sufficiency for an actual reaction.

For incident particles of masses $m_1,m_2$, define invariant squared energy
$s=-c^2g(Q,Q)$ in J². A target at rest in the laboratory has
$P_2=(m_2c,0)$ and incident total energy $E_1$. Direct expansion gives
$s=m_1^2c^4+m_2^2c^4+2m_2c^2 E_1$.
For a proposed massive final collection of total rest mass $\mu$, its threshold
requires $s\ge\mu^2c^4$. Therefore
$E_1\ge(\mu^2-m_1^2-m_2^2)c^2/(2m_2)$, together with
$E_1\ge m_1c^2$. Equality is kinematically realizable by comoving massive
products when it respects the incoming mass shells; it says nothing about
couplings, selection rules or rate. If a final massless product is required,
the bound may only be an infimum, since its momentum cannot vanish.

Two massless incident momenta of energies $E_1,E_2$ and spatial angle
$\theta\in[0,\pi]$ have
$s=2E_1E_2(1-\cos\theta)$ by expansion of the dot product.
This includes $M=2\sqrt{E_1E_2}/c^2$ at $\theta=\pi$ and the parallel
null case $s=0$. The angle is defined in a named laboratory rest space;
the combination $s$ is invariant, its factors separately are not.

## D2 — complete two-body center-of-momentum kinematics

Suppose timelike total momentum has energy $W=Mc^2>0$ in its rest frame.
Two massive outgoing particles with masses $a,b>0$ must have momenta
$p_1=k\hat e$, $p_2=-k\hat e$, $\hat e\in S^2$, $k\ge0$.
Here $S^2=\{e\in n_Q^\perp:|e|=1\}$. Subtracting their shells gives
$(E_1-E_2)W=(a^2-b^2)c^4$ and their energy sum is $W$. Hence

$$E_1=\frac{W^2+(a^2-b^2)c^4}{2W},\qquad E_2=\frac{W^2+(b^2-a^2)c^4}{2W}.$$

Substituting $E_1$ into its shell and factoring yields

$$k^2=\frac{[W^2-(a+b)^2c^4][W^2-(a-b)^2c^4]}{4W^2c^2}.$$

The necessity $W\ge(a+b)c^2$ follows D1. Conversely under that bound both
energies above are at least their rest energies (e.g.
$E_1-ac^2=[(W-ac^2)^2-b^2c^4]/(2W)\ge0$), and the factored expression
is nonnegative. Choosing any $\hat e$ and the positive square root produces
future massive momenta obeying all balances. At threshold $k=0$ and direction
has no meaning. This proves exactly kinematic existence. The same algebra
holds with $a=0$ or $b=0$ provided the corresponding massless momentum is
nonzero; then the equality endpoint may be forbidden. Boosting these vectors
by S2 gives every laboratory configuration for the specified total momentum.
Elastic two-body scattering sets outgoing masses equal to incoming masses;
the rest-frame magnitude stays fixed, while the outgoing direction remains
an independent interaction-dependent datum. No isotropic distribution follows.

## D3 — ideal fusion, decay and recoil thought experiments

For two equal-mass particles $m>0$ with velocities $\pm v$ in one lab frame,
suppose a hypothetical allowed channel fuses them into one stationary product,
with no outgoing radiation or other product. Conservation gives
$M=2m\gamma_v$. Its excess invariant mass is
$2m(\gamma_v-1)$; energy converted to rest/internal energy is
$2m(\gamma_v-1)c^2$. This is a conditional model, not an empirical
assertion about perfectly sticky particles or conversion of all energy channels.

A parent at rest with mass $M>0$ hypothetically decays into a daughter of
mass $m$ with $0<m<M$ and one massless particle. Their spatial momenta
are opposite with common magnitude $k$; the massless energy is $ck$.
Putting $a=m,b=0,W=Mc^2$ in D2 gives
$E_\gamma=(M^2-m^2)c^2/(2M)$,
$E_d=(M^2+m^2)c^2/(2M)$ and
$k=(M^2-m^2)c/(2M)$. The daughter's speed is
$v_d=c^2k/E_d=(M^2-m^2)c/(M^2+m^2)<c$.
Thus assigning the massless energy the full rest-energy difference
$(M-m)c^2$ would omit recoil except in an appropriate small-ratio
approximation. These are constructed classical null-particle kinematics;
no quantum $E=\hbar\omega$ or decay probability is used.

## D4 — bounded algebraic and trajectory nonrelativistic limits

For $z=|v|^2/c^2\in[0,\delta^2]$, fixed $0<\delta<1$,
Taylor's integral remainder and
$[(1-z)^{-1/2}]''=3(1-z)^{-5/2}/4$ give

$$0\le\gamma-1-\frac z2\le\frac{3z^2}{8(1-\delta^2)^{5/2}},\qquad 0\le\gamma-1\le\frac{z}{2(1-\delta^2)^{3/2}}.$$

To see the remainder without a Taylor black box, twice integrate the second
derivative over $0\le r\le s\le z$; its maximum bounds that integral by
$z^2\max f''/2$. Consequently
$|p-mv|\le m|v|^3/[2c^2(1-\delta^2)^{3/2}]$ and
$0\le E-mc^2-m|v|^2/2\le3m|v|^4/[8c^2(1-\delta^2)^{5/2}]$.
These are uniform algebraic bounds and do not alone approximate trajectories.

A trajectory assertion uses an additional quantified family. Let $\mathcal O$
be an open subset of $(t,x,p)\in\mathbb R\times\mathbb R^3\times\mathbb R^3$,
let $E(t,x),B(t,x)$ be $C^1$ prescribed fields independent of a parameter
$c\to\infty$ on a fixed compact time-state cylinder, and fix $m>0,q$.
In momentum variables relativistic external-field dynamics is
$x'=v_c(p)=p/[m\sqrt{1+|p|^2/(m^2c^2)}]$,
$p'=q[E+v_c(p)\times B]$. Its comparison system replaces $v_c$ by
$p/m$. Require both solutions with the same initial state to remain in that
cylinder for $t\in[0,T]$, and require a common Lipschitz constant $L$ for
the comparison field there (after choosing fixed reference units to make
a Euclidean state norm; constants depend on that choice).
For $|p|\le P_*$, the mean-value bound
$|v_c-p/m|\le P_*^3/(2m^3c^2)$ follows from
$|(1+y)^{-1/2}-1|\le y/2$ for $y\ge0$.
If $|B|\le B_*$, the vector-field error has a bound $C/c^2$ with
explicit $C$ proportional to $(1+|q|B_*)P_*^3/(2m^3)$ in the chosen
state norm. Subtract integral equations to obtain
$d(t)\le Ct/c^2+L\int_0^t d(s)ds$. Iterating the inequality gives
$d(t)\le C(e^{Lt}-1)/(Lc^2)$ for $L>0$, or $Ct/c^2$ at $L=0$:
the $j$th iterate is $C L^j t^{j+1}/[(j+1)!c^2]$ and its residual
vanishes by boundedness of $d$. Existence on a common compact cylinder is
supplied by the checked Picard–Lindelöf theorem for sufficiently short $T$;
continuation to a specified longer $T$ requires the stated containment.
This proves a finite-time controlled limit for prescribed bounded fields;
it is not a self-consistent Maxwell limit, a global-in-time scattering limit,
or a limit with field amplitudes growing with $c$.

## D5 — force laws, mass shell and finite-domain continuation

On a smooth time-oriented Lorentz manifold, let $K(x,U)$ be a smooth tangent
vector over the future massive shell $g(U,U)=-c^2$, with
$g(U,K(x,U))=0$. A smooth extension to a neighborhood in $TM$ is required
for a direct chart ODE construction; alternatively use shell coordinates as
follows. A local future tetrad writes $U=c\sqrt{1+|w|^2}\,e_0+c w^ie_i$,
$w\in\mathbb R^3$. This is a smooth parametrization of the shell with
smooth inverse spatial components; its derivative maps $\mathbb R^3$
onto $U^\perp$. The equation $D_\tau U=K/m$ is tangent to the shell by
orthogonality, and $x'=U$ gives a smooth seven-dimensional vector field
in $(x,w)$. More explicitly, the ambient chart equations are
$x'^a=U^a$ and $U'^a=-\Gamma^a{}_{bc}U^bU^c+K^a/m$.
Differentiating $g_{ab}(x)U^aU^b$ along this field, the metric derivative
terms cancel the connection terms by compatibility, leaving $2g(U,K)/m=0$.
It is therefore tangent to the shell, and the stated shell chart pulls it
back to a smooth vector field without an extension hypothesis.
A smooth extension also works: differentiating the shell gives
zero there, and uniqueness for the intrinsic shell system makes its solution
the ambient solution through shell data. Picard–Lindelöf therefore gives a
unique local future timelike solution. Coordinate uniqueness patches to a
maximal interval. If a solution remains in a compact subset of this shell
coordinate domain as a finite endpoint is approached, bounded vector field
gives a Cauchy state limit by $|z(t)-z(s)|\le M|t-s|$; the compact subset
is inside the open domain. Local existence through the limit and uniqueness
extend it beyond the endpoint. Finite-time breakdown must therefore leave
every such compact set or leave the field's regular domain. This is a
local/conditional continuation result, not spacetime or forced-worldline
completeness. Prescribed $C^1$ external $F$ with
$K^a=qg^{ab}F_{bc}U^c$ meets shell tangency by antisymmetry. Singular
point self-fields do not meet these hypotheses.
## D6 — leaf low-speed example

An ideal massive particle in one laboratory with $|v|\le c/10$ has
$0\le E-mc^2-m|v|^2/2\le3m|v|^4/[8c^2(99/100)^{5/2}]$.
This follows by taking $\delta=1/10$ in D4. It is a worked conditional
error bound, with no experimental error bar and no inference that an
apparatus actually prepared that velocity range.
## D7 — leaf pure-gauge charge example

On Minkowski spacetime choose $\chi(x)=b(x^1)^2/2$, where $b$ is a constant
in T, so $\chi$ is in T m². Put $A=d\chi=b x^1dx^1$, with components
in T m. Mixed second derivatives commute, hence $F=dA=0$.
CS1's exact gauge-boundary lemma changes the adopted charged action by only
$q[\chi(X_b)-\chi(X_a)]$ for fixed endpoint events. Its stationary curves
are therefore the same free massive geodesics. The mechanical momentum
is unchanged, while the canonical spatial component is
$\pi_1=mU_1+qb x^1$. A position-dependent canonical momentum shift in
this example is not an electromagnetic force or an energy measurement.

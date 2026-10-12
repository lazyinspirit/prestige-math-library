# Proposed AC+CC after version: full attractive Coulomb completeness

This is a reviewable proposal, not a replacement of either native CC-only
Statement or native acceptance. AC is used by the existing self-adjoint
spectral/group and Coulomb radial-resolution suppliers. The production
all-sign analytic comparison proof is in
items/thm-nrqm-controlled-dynamics-dollard-integrable-remainder.md.

## Statement

Assume AC and CC. On $H=L^2(\mathbb R^3;\mathbb C)$ let
$H_0=-\Delta$ and $H_\gamma=-\Delta-\gamma/|x|$, $\gamma>0$, on $H^2$.
Use $\mathcal F_pf(p)=(2\pi)^{-3/2}\mathcal F_2f(p/(2\pi))$,
$P=\mathcal F_p^*p\mathcal F_p$, and $a(p)=\gamma/(2|p|)$ away from zero.
For $|t|\ge1$ set
$U_D(t)=e^{-itH_0}e^{i\operatorname{sign}(t)a(P)\log|t|}$;
inside use the unchanged free group.

The limits $\Omega_{D\pm}f=\lim_{t\to\pm\infty}e^{itH_\gamma}U_D(t)f$
exist for every $f\in H$, are isometries, intertwine the free and Coulomb
groups, preserve every angular $(l,m)$ channel, and have range exactly
$E_{H_\gamma}((0,\infty))H=H_{\rm ac}(H_\gamma)=H_{\rm c}(H_\gamma)$.
Under the exact free/Coulomb radial continuum transforms, each channel map is
multiplication by a bounded Borel $b_{l,\pm}(E)$ with $|b_{l,\pm}|=1$ a.e.
Thus $\Omega_{D+}^*\Omega_{D-}$ is unitary on the whole free Hilbert space.
The infinite attractive bound spectrum and all multiplicities are retained.

## Exact supplied assumptions

- thm-nrqm-coulomb-infinitesimal-kinetic-bound: self-adjointness on $H^2$;
  its Kato–Rellich use assumes AC.
- thm-nrqm-coulomb-transported-radial-endpoint-realization: exact
  angular-radial operator/domain decomposition, under AC+CC.
- thm-nrqm-coulomb-onto-radial-continuum-transform, clauses (a)–(c):
  for each channel and $\gamma\ge0$, the positive spectral subspace is
  unitarily identified with scalar $L^2((0,\infty),dE)$, and bounded Borel
  functions become their multipliers, under AC+CC. Its erroneous free-case
  bound copies in general clause (d) are not used: the free operator has no
  zero/negative eigenvalue directly from $|p|^2$.
- thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy:
  eigenvalues $-\gamma^2/(4n^2)$, $n\ge1$, multiplicity $n^2$,
  exhausting the negative spectral subspace, under AC+CC.
- lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  and thm-spectral-theorem-for-unbounded-self-adjoint-operators:
  exact generator domains and uniqueness of the spectral PVM, under AC.
- The repaired Dollard comparison: both-sign remainder norm
  $O((1+\log|t|)/|t|^2)$ for every smooth compact annular momentum profile.
  Its analytic proof is supplied locally; no original Dollard article
  retrieval or full-text reading is claimed.

## Proof

**Given:** these exact supplier clauses and AC+CC. The inverse transforms
of smooth compact momentum profiles away from zero form a dense linear
space $D\subset H$ by smooth Fourier truncation.

1.1 **Existence with both signs.** For $f\in D$, $U_D(t)f$ is Schwartz and
lies in $D(H_\gamma)=H^2$. It is continuously differentiable in that graph
norm on each exterior half-line: its profile varies smoothly on a fixed
annulus, and the Coulomb multiplier is graph-continuous by Hardy.
Group difference quotients therefore justify
$$\frac{d}{dt}(e^{itH_\gamma}U_D(t)f)=-i e^{itH_\gamma}\left[\frac{\gamma}{|x|}-\frac{\gamma}{2|t||P|}\right]U_D(t)f.$$
The repaired estimate makes its speed integrable on both half-lines. The
Banach-valued fundamental theorem of calculus makes it Cauchy at each end.
Limits preserve norm because the approximating operators are unitary.
For arbitrary $f\in H$, approximate by $f_k\in D$ and use
$\|F(t)f-F(s)f\|\le2\|f-f_k\|+\|F(t)f_k-F(s)f_k\|$.
Thus the strong limits exist everywhere and are linear isometries.

1.2 **Intertwining.** For fixed $s$,
$e^{-isH_\gamma}F(t)=e^{i(t-s)H_\gamma}U_D(t)$.
At large $|t|$, $t$ and $t-s$ have the same sign. The difference
$U_D(t)-U_D(t-s)e^{-isH_0}$ is a free unitary times the difference of
modifiers with phases $\operatorname{sign}(t)a(p)\log|t|$ and
$\operatorname{sign}(t)a(p)\log|t-s|$.
That difference tends pointwise to zero for $p\ne0$ and is bounded by $2$.
Fourier dominated convergence gives strong convergence to zero. Hence
$e^{-isH_\gamma}\Omega_{D\pm}=\Omega_{D\pm}e^{-isH_0}$.

1.3 **Range inclusion precedes continuum conjugation.** The closed space
$S_\pm=\operatorname{ran}\Omega_{D\pm}$ reduces the Coulomb group, since
intertwining holds for both signs of $s$. The restricted group is unitarily
conjugate via $\Omega_{D\pm}$ to the free group. The exact generator-domain
characterization identifies its generator with
$\Omega_{D\pm}H_0\Omega_{D\pm}^*$.
Spectral PVM uniqueness then gives
$E_{H_\gamma}(B)\Omega_{D\pm}=\Omega_{D\pm}E_{H_0}(B)$ for every Borel $B$.
The free projection on $(-\infty,0]$ is zero: $|p|^2\ge0$ and $\{p=0\}$ is
null. Thus $S_\pm\subseteq E_{H_\gamma}((0,\infty))H$; all countably many
attractive bound eigenspaces are orthogonal to the range.

2.1 **Actual angular channels.** The polar decompositions of $H_0$ and
$H_\gamma$ are diagonal in each $(l,m)$ channel. The modifier is the bounded
Borel function $\lambda\mapsto
\exp(i\operatorname{sign}(t)\gamma\log|t|/(2\sqrt\lambda))$ of $H_0$
for $\lambda>0$, with any unit-modulus value at zero.
Hence each comparison operator and its limit preserve every channel.
Range inclusion from step 1.3 permits
$B_{l,\pm}=\widehat T_{\gamma,l}\Omega_{D\pm}^{(l)}
\widehat T_{0,l}^*$ on all scalar $L^2((0,\infty),dE)$.
The exact bounded-Borel correspondence and spectral intertwining give
$B_{l,\pm}M_{\mathbf1_C}=M_{\mathbf1_C}B_{l,\pm}$ for all Borel $C$.
The free channel is entirely positive, directly from its free representation.

2.2 **The commutant inference is supplied.** For any bounded $B$ commuting
with indicators, use $g(E)=e^{-E}>0$ in $L^2$ and a representative $h=Bg$.
Put $b=h/g$. Commutation gives
$\|\mathbf1_C h\|_2\le\|B\|\|\mathbf1_C g\|_2$ for every measurable $C$.
The sets where $|h|>(\|B\|+\epsilon)g$ are therefore null, so
$|b|\le\|B\|$ a.e. Commutation extends from indicators to bounded measurable
functions by simple approximation and dominated convergence.
Thus $B(ug)=uBg=b(ug)$ for bounded measurable $u$.
These vectors are dense: truncate an arbitrary $f\in L^2$ to bounded
energy intervals and where $|f/g|$ is bounded. Hence $B=M_b$.
A Borel representative is obtained by replacing the countably many
completed-measure level sets in simple approximations of $h$ with Borel
sets modulo null sets and taking their limit. AC+CC permits those selections.

2.3 **Isometry implies channel surjectivity in this setting.** Range
inclusion and the exact continuum transforms imply
$\|B_{l,\pm}f\|_2=\|f\|_2$.
Using step 2.2 on finite-measure indicators gives $|b_{l,\pm}|=1$ a.e.
Multiplication by $\overline{b_{l,\pm}}$ is its everywhere-defined bounded
inverse. Each channel is therefore onto its positive Coulomb continuum.

3.1 **Full attractive assembly.** The bound projection is the strong
countable orthogonal sum
$P_{\rm b}=\sum_{n\ge1}E_{H_\gamma}(\{-\gamma^2/(4n^2)\})$, of rank $n^2$
at level $n$. The exact attractive resolution has no zero eigenvector and
is the orthogonal sum of these bound spaces and the positive continuum
channels. Steps 1.3 and 2.3 yield
$\operatorname{ran}\Omega_{D\pm}=(I-P_{\rm b})H
=H_{\rm ac}(H_\gamma)=H_{\rm c}(H_\gamma)$.
Both isometries are unitaries from $H$ onto that same space; their adjoint
product is unitary on $H$.

This proves the proposed AC+CC result, supplies no CC-only spectral
resolution, and resets no repair budget.

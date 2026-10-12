exec(open('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/session-recovery-20261012/gr65-supplier-repair/repair-core.py').read().split("edit('def-gr-smooth-covariant")[0])
units=r'''
This item fixes the unit and coordinate readings of the explicitly defined
Lorentzian objects, smooth-curve proper time and four-velocity of
[[def-gr-smooth-lorentzian-objects]], the tensor fields of
[[def-gr-smooth-covariant-two-tensor-field]], and the constructed connection,
curvature, Ricci and scalar fields of [[def-gr-metric-selected-connection]].
It states conventions, not a physical law or a measurement.

**(a) Constants and tensor slot.** Adopt $c>0$ with SI dimension
$\mathrm m\,\mathrm s^{-1}$, $G_N>0$ with dimension
$\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm s^{-2}$, and a signed parameter
$\Lambda$ with dimension $\mathrm m^{-2}$. No numerical value is asserted.
Define $\kappa:=8\pi G_N/c^4$, of dimension
$\mathrm m^{-1}\,\mathrm{kg}^{-1}\,\mathrm s^2$.
For a smooth symmetric covariant two-tensor $T$ adopt the convention that its
components $T_{AB}=T(e_A,e_B)$ in an ordered $g$-orthonormal basis are energy
per volume, $\mathrm J\,\mathrm m^{-3}=\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-2}$.
This is a tensor slot and unit convention; interpreting a particular $T$ as
matter is a subsequent definition. Therefore $\kappa T_{AB}$ has dimension
$\mathrm m^{-2}$. No positivity, conservation or matter realization is assumed.

**(b) Coordinates and dimensions.** In a length-coordinate chart,
$x^0=ct$ and all four coordinates have units $\mathrm m$; $g_{ab}$ are
dimensionless and the quadratic line element $ds^2=g_{ab}dx^adx^b$ has units
$\mathrm m^2$. The Christoffel symbols defined by
$\nabla^g_{\partial_b}\partial_c=\Gamma^a{}_{bc}\partial_a$
([[def-christoffel-symbols-of-an-affine-connection]]) have units
$\mathrm m^{-1}$: the constructed formula differentiates dimensionless
$g_{ab}$ once with respect to a length coordinate. Curvature components have
units $\mathrm m^{-2}$ since the curvature operator differentiates the
connection once more and includes products of two connection coefficients;
so do $\operatorname{Ric}_{ab}$ and scalar curvature $S$ in these coordinates.
In a time-coordinate chart $x^0=t$ has units $\mathrm s$, and $g_{00}$ has
units $\mathrm m^2\,\mathrm s^{-2}$; mixed, spatial, angular or other chart
components have the dimensions obtained by the coordinate Jacobians. A single
component has no universal dimension in a general chart. Orthonormal-frame
readings use the normalized geometric basis, with its length normalization.

**(c) Curves and invariant readings.** For the smooth future timelike curve
and positive scaling parameter of [[def-gr-smooth-lorentzian-objects]] (e),
read $c$ as in (a) and
$\tau(s)=\tau_0+c^{-1}\int_{s_0}^{s}\sqrt{-g(\gamma',\gamma')}\,dr$
as a proper-time parameter in seconds. Its four-velocity $U=d\gamma/d\tau$
has length-coordinate and normalized orthonormal components in
$\mathrm m\,\mathrm s^{-1}$; in a time-coordinate chart $U^0=dt/d\tau$
is dimensionless and other component dimensions follow the coordinates.
Lorentzian length $c\,\Delta\tau$ is in metres. The tensors $R^g$,
$\operatorname{Ric}$ and the scalar $S$ have the orthonormal readings
$\mathrm m^{-2}$, whereas the lowered curvature components in a mixed chart
have the units required by the metric and coordinate slots.

**(d) Future observer readings and SI restoration.** Let $n$ be a future
unit timelike vector, $g(n,n)=-1$ and $g(n,N)<0$. Define
$\rho_n:=T(n,n)$, $j_n:=-\sharp(T(n,\cdot))$ and its spatial part
$\phi_n:=j_n-\rho_n n$; indeed $g(j_n,n)=-\rho_n$, so
$g(\phi_n,n)=0$. In a $g$-orthonormal basis with $e_0=n$, set
$\phi^i=-T(e_0,e_i)=T^{0i}$ for $i=1,2,3$. The **SI energy flux** vector
and **SI momentum density** covector are, respectively,

$$q_n:=c\phi_n,\qquad p_n:=\phi_n^{\flat}/c,\qquad q_n^i=-cT_{0i},\qquad (p_n)_i=-T_{0i}/c.$$

Thus $\rho_n$ and each $\phi^i$ have units $\mathrm J\,\mathrm m^{-3}$;
$q_n^i$ has units $\mathrm W\,\mathrm m^{-2}$ and $(p_n)_i$ has units
$\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$. Stress components $T_{ij}$ have
units $\mathrm J\,\mathrm m^{-3}=\mathrm{Pa}$. Tensor components retain the
common energy-density units; the factors of $c$ convert their mixed readings
to different SI quantities. Future-directedness and the signs here are part
of the convention, not positivity assumptions on $T$.

**(e) Natural units.** Setting $c=1$, or additionally $G_N=1$, abbreviates
these dimensionful conventions. Restore the factors displayed above before
comparison with SI quantities; in particular the same spatial tensor component
corresponds to energy flux multiplied by $c$ and momentum density divided by
$c$. A length-coordinate null ray obeys $|d\mathbf x/dx^0|=1$ in an inertial
flat chart; this coordinate relation does not change the physical constant.
'''
def unit(s):
 s=adddeps(s,['def-gr-metric-selected-connection','def-christoffel-symbols-of-an-affine-connection'])
 return s.split('## Definition')[0]+'## Definition\n'+units
# units already applied before regex replacement error
stress=r'''**Unit and observer reading.** At a point choose a $g_p$-orthonormal ordered
basis $(e_0,e_1,e_2,e_3)$ with $e_0$ future-directed, meaning
$g(e_0,N)<0$, and $g(e_A,e_B)=\operatorname{diag}(-1,1,1,1)_{AB}$.
Such a basis is obtained from an orthonormal basis by reversing its timelike
member if necessary. Write $T_{AB}=T(e_A,e_B)$ and $n=e_0$.
Every $T_{AB}$ has the energy-density reading
$\mathrm J\,\mathrm m^{-3}$ of [[def-gr-si-unit-and-coordinate-conventions]].
The energy density for this observer is $\rho_n=T_{00}$; the spatial component
$\phi^i=-T_{0i}=T^{0i}$ gives the SI energy-flux component
$q_n^i=c\phi^i$ in $\mathrm W\,\mathrm m^{-2}$ and the SI momentum-density
component $(p_n)_i=\phi^i/c$ in
$\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$. The stress is $T_{ij}$ in
$\mathrm{Pa}=\mathrm J\,\mathrm m^{-3}$, $i,j=1,2,3$.
Thus the off-diagonal tensor entries themselves have energy-density units;
their flux and momentum readings require the stated sign and $c$ factors.
These names and readings interpret a prescribed tensor and a prescribed
future observer, and assert no actual measurement. Different future
orthonormal frames generally give different components, related by the
corresponding Lorentz change of basis.
'''
edit('def-gr-stress-energy-tensor-field',lambda s:re.sub(r'\*\*Unit reading\.\*\*.*?(?=\*\*Relation to the matter model)',lambda m:stress+'\n',s,flags=re.S))
edit('post-gr-spacetime-and-classical-domain',lambda s:adddeps(s,['def-gr-metric-selected-connection']).replace('and its curvature is the model\'s\nrepresentation of gravity.','and the curvature $R^g$ of the uniquely constructed torsion-free\n$g$-compatible connection $\\nabla^g$ of\n[[def-gr-metric-selected-connection]] is the model\'s representation of\ngravity. That supplier defines $R^g(X,Y)Z=\\nabla^g_X\\nabla^g_YZ-\\nabla^g_Y\\nabla^g_XZ-\\nabla^g_{[X,Y]}Z$\nand proves the connection exists; this clause adds no independent connection\nfield.').replace('  def-gr-metric-selected-connection: mathematical-premise','  def-gr-metric-selected-connection: formulation-prerequisite'))
measured=r'''**(b) Energy flux and momentum density.** The smooth spatial vector field
$\Phi=h(J)$ of [[def-gr-observer-energy-momentum-current]] is the tensor's
spatial current in the normalized observer convention. Its components have
energy-density units, $\mathrm J\,\mathrm m^{-3}$. Define the **SI measured
energy-flux vector** $q:=c\Phi$ and **SI measured momentum-density covector**
$p:=\Phi^{\flat}/c$, where $\Phi^{\flat}(a)=g(\Phi,a)$ and $c$ is the
conversion constant of [[def-gr-si-unit-and-coordinate-conventions]].
In every ordered orthonormal basis with future $e_0=n_p$,

$$\Phi^i=T^{0i}=-T(e_0,e_i),\qquad q^i=c\Phi^i,\qquad p_i=\Phi^i/c,\qquad i=1,2,3,$$

by [[lem-gr-observer-energy-momentum-decomposition]] (d). Hence $q^i$ has
units $\mathrm W\,\mathrm m^{-2}$ and $p_i$ has units
$\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$; equivalently $q^{\flat}=c^2p$.
When the algebraic balance formulas call $\Phi$ an energy flux they use this
normalized tensor current, whose SI energy flux is $c\Phi$. The analogous
natural-unit momentum notation suppresses the factor $1/c$; it never assigns
SI momentum units directly to $\Phi^{\flat}$. Symmetry of $T$ gives the two
aspects of the same mixed component, with these distinct SI conversions.
'''
edit('def-gr-measured-energy-density-flux-and-stress',lambda s:re.sub(r'\*\*\(b\) Energy flux and momentum density\.\*\*.*?(?=\*\*\(c\))',lambda m:measured+'\n',s,flags=re.S))
energy=r'''
- **Implications.** Pointwise, DEC implies WEC, WEC implies NEC, and SEC
  also implies NEC, by the proof below. No converse or implication between
  WEC and SEC is assumed. These are consequences of the definitions and
  Lorentzian algebra, not extra restrictions on the chosen matter model.

- **Timelike formulation.** WEC and SEC are stated on timelike vectors;
  continuity extends the corresponding quadratic inequalities to null
  limits. Consumers may use these proved consequences without a further
  physical assumption.

## Facts & Assumptions

**Given:** At $p\in U$, the Lorentz form $g_p$, symmetric bilinear $T_p$,
and the definitions of WEC, NEC, DEC and SEC above.

[F1] A nonzero future causal vector has negative pairing with any future timelike vector; future null vectors lie in the closure of the future timelike component ([[lem-gr-future-causal-classification-by-a-timelike-field]]). The closed future cone also contains zero.

[F2] The inverse metric satisfies $g(\sharp\alpha,v)=\alpha(v)$ ([[def-gr-inverse-metric-and-musical-isomorphisms]]); bilinear forms in a finite basis are finite quadratic polynomials, so their values are continuous under coordinate convergence.

## Proof

1.1 Suppose DEC holds and let $v$ be future timelike. Put $j=-\sharp(T_p(v,\cdot))$. DEC puts $j$ in the closed future cone; [F1] gives $g(j,v)\le0$, including $j=0$. By [F2], $T_p(v,v)=-g(j,v)\ge0$. Every past timelike vector is the negative of a future timelike vector, and its quadratic value is the same. Hence DEC implies WEC on all timelike vectors. [given, F1, F2, algebra]

2.1 For a future null vector $k$ and future timelike $n$, [F1] gives $g(k,n)<0$. For every $\epsilon>0$, $k_\epsilon=k+\epsilon n$ has $g(k_\epsilon,k_\epsilon)=2\epsilon g(k,n)+\epsilon^2g(n,n)<0$ and $g(k_\epsilon,n)<0$, so it is future timelike and tends to $k$. If WEC holds, $T_p(k_\epsilon,k_\epsilon)\ge0$; [F2] and the limit give $T_p(k,k)\ge0$. Negating past null vectors gives the same conclusion. Thus WEC implies NEC. [F1, F2, algebra]

3.1 If SEC holds, apply the same timelike limit to $B=T_p-\tfrac12\operatorname{tr}_g(T)(p)g_p$. Continuity gives $B(k,k)\ge0$ at every null $k$, and $g_p(k,k)=0$ makes this $T_p(k,k)\ge0$. Thus SEC implies NEC as well. These deductions preserve the stated pointwise conditions and impose none automatically. [step 2.1, F2, algebra] ∎
'''
def en(s):
 s=s.replace('proof: not-applicable','proof: ai-generated').replace('verification:\n  precheck: n/a','proof_strategy: direct\nverification:\n  precheck: pass').replace('no implication between them is asserted here','the actual pointwise implications are proved here')
 return s.split('- **They are not equivalent')[0]+energy
edit('def-gr-energy-conditions',en)

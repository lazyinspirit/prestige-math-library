exec(open('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/session-recovery-20261012/gr65-supplier-repair/repair-core.py').read().split("edit('def-gr-smooth-covariant")[0])
lor_deps=['def-interval','def-c-r-and-smooth-maps-between-smooth-manifolds','def-velocity-derivation-of-a-smooth-curve','thm-coordinate-derivations-form-a-basis-of-the-tangent-space','thm-real-power-continuity-and-derivatives','cor-primitives-of-a-continuous-function','cor-mean-value-theorem','lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space','thm-chain-rule-for-total-derivatives','thm-ck-euclidean-maps-closed-under-algebra-and-composition']
lor_def=r'''
**(e) Smooth timelike curves and their scalar normalization.** Before using
these quantities in the physical conventions, fix a positive real scaling
parameter $c$ (with no physical meaning or dimension in this mathematical
item). A **smooth future timelike curve** is a smooth map $\gamma:I\to M$
from a nonempty open real interval $I$ ([[def-interval]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]) whose velocity derivation
$\gamma'(s)\in T_{\gamma(s)}M$
([[def-velocity-derivation-of-a-smooth-curve]]) satisfies
$g(\gamma',\gamma')<0$ and $g(\gamma',N)<0$ at every $s\in I$.
In a chart its components are $d(x^a\circ\gamma)/ds$, $a=0,1,2,3$.
For a supplied base point $s_0\in I$ and additive constant $\tau_0\in\mathbb R$
define

$$h(s):=\sqrt{-g_{\gamma(s)}(\gamma'(s),\gamma'(s))},\qquad \tau(s):=\tau_0+\frac1c\int_{s_0}^{s}h(r)\,dr,\qquad U(s):=\frac{c\gamma'(s)}{h(s)}.$$

The integral is oriented when $s<s_0$. The function $\tau$ is called
**proper time** for this scaling and $U$ the **four-velocity** of the smooth
curve; its increment times $c$ is the Lorentzian length. The well-definedness
proof below shows $\tau'>0$, that $\tau:I\to\tau(I)$ is a smooth
diffeomorphism, and that $U$ is the velocity of $\gamma\circ\tau^{-1}$.
Thus $g(U,U)=-c^2$ and $U$ is future timelike. This introduces the smooth
case before any physical unit reading; the later worldline definition extends
it to its stated $C^k$, endpoint and piecewise-$C^1$ classes. It asserts no
clock coupling, motion law or physical value of $c$.
'''
lor_proof=r'''
## Facts & Assumptions

**Given:** The Lorentzian data of the Definition, a smooth future timelike
curve $\gamma:I\to M$, and supplied $c>0$, $s_0\in I$, $\tau_0\in\mathbb R$.

[F1] Coordinates of smooth maps and their finite sums, products and compositions are smooth; the curve velocity has components $d(x^a\circ\gamma)/ds$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-velocity-derivation-of-a-smooth-curve]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F2] The square root is smooth on $(0,\infty)$ ([[thm-real-power-continuity-and-derivatives]]). A continuous function on a real interval has the primitive $s\mapsto\int_{s_0}^{s}h$ ([[cor-primitives-of-a-continuous-function]]).

[F3] The mean value theorem applies on each compact subinterval of $I$ ([[cor-mean-value-theorem]]), and a smooth map with nonzero derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). Velocities transform by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F4] In an orthonormal basis a Lorentz form has exactly two open convex timelike components and the stated causal closures ([[lem-timelike-cone-has-two-convex-components]]).

## Proof

1.1 For any two ordered bases of a four-dimensional real vector space their coordinate change is an invertible matrix $B$. In the Euclidean maximum norm, $\|Bz\|_\infty\le C\|z\|_\infty$ with $C=\max_i\sum_j|B_{ij}|$; applying the same estimate to $B^{-1}$ proves continuity in both directions. Consequently the Euclidean topologies transported by arbitrary bases coincide, so open sets, connected components, paths and closures are independent of the basis. Applying this to an orthonormal basis transports all the component and closure conclusions of [F4] to any basis of $T_pM$. Linear changes of coordinates also preserve convexity. This supplies the general basis argument needed in (b)-(c), independently of the narrower orthonormal-basis argument in the draft SR exposition. [F4, algebra]

2.1 On any chart traversed locally by $\gamma$, $-g(\gamma',\gamma')=-\sum_{a,b=0}^3(g_{ab}\circ\gamma)(x^a\circ\gamma)'(x^b\circ\gamma)'$ is smooth by [F1] and strictly positive by the timelike hypothesis. Thus $h$ is a well-defined smooth positive function on $I$ by [F2]. Every closed subinterval with endpoints $s_0,s$ lies in $I$, so [F2] defines the integral and gives $\tau'=h/c>0$. Since this derivative is smooth, $\tau$ is smooth. [given, F1, F2, algebra]

3.1 If $a<b$ in $I$, [F3] gives $\tau(b)-\tau(a)=\tau'(r)(b-a)>0$ for some $r\in(a,b)$, so $\tau$ is injective. At every $s$ its nonzero derivative supplies a smooth inverse on an open neighbourhood of $\tau(s)$ by [F3]; the union of these image neighbourhoods is $\tau(I)$, which is open. By injectivity every local inverse equals the set-theoretic inverse on its domain, so they agree on overlaps and make $\tau^{-1}$ smooth globally. The image is an interval: continuity and strict monotonicity put every value between $\tau(a)$ and $\tau(b)$ in the image by the intermediate value property. No simultaneous choices of neighbourhoods are required. [step 2.1, F3, algebra]

4.1 In a chart, [F3] gives $(x^a\circ\gamma\circ\tau^{-1})'(\tau(s))=(x^a\circ\gamma)'(s)/\tau'(s)=c(x^a\circ\gamma)'(s)/h(s)$; equality of coordinate components gives velocity $U(s)$. Bilinearity then gives $g(U,U)=c^2g(\gamma',\gamma')/h^2=-c^2$ and $g(U,N)=(c/h)g(\gamma',N)<0$. The same coordinate expressions show $U$ is a smooth vector field along the curve. Replacing $s_0$ or $\tau_0$ changes only the additive constant by the primitive uniqueness of [F2]. These constructions are therefore well defined with exactly the supplied data and assumptions. [step 2.1, step 3.1, F1, F2, F3, algebra] ∎
'''
def lor(s):
 s=adddeps(s,lor_deps).replace('  proof: not-applicable','  proof: ai-generated').replace('verification:\n  precheck: n/a','proof_strategy: direct\nverification:\n  precheck: pass')
 s=s.replace('**Convention and scope.**',lor_def+'\n**Convention and scope.**');return s+'\n'+lor_proof
edit('def-gr-smooth-lorentzian-objects',lor)
conn_deps=['def-gr-inverse-metric-and-musical-isomorphisms','lem-gr-inverse-metric-is-smooth','def-christoffel-symbols-of-an-affine-connection','prop-leibniz-rules-for-the-lie-bracket-with-function-multiples','prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components','thm-coordinate-derivations-form-a-basis-of-the-tangent-space','def-curvature-of-an-affine-connection','thm-curvature-is-a-type-one-three-tensor','def-trace-of-an-endomorphism']
conn_def=r'''
**(d) Intrinsic construction before physical use.** For smooth local vector
fields define the Koszul expression

$$K(X,Y,Z):=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)+g([X,Y],Z)+g([Z,X],Y)-g([Y,Z],X).$$

Define $\nabla^g_XY$ by $2g(\nabla^g_XY,Z)=K(X,Y,Z)$ for every smooth local
$Z$. The proof below establishes existence, smoothness, the affine-connection
rules, metric compatibility, torsion freedom and uniqueness; it uses symmetry
and nondegeneracy, not positive definiteness. Thus $\operatorname{LC}(M,g)$
has this unique element, called the **Levi–Civita connection** of $g$. The later
nondegenerate-metric theorem retains its fuller tensor-derivative statement.
Its Christoffel symbols in any chart are defined by
$\nabla^g_{\partial_b}\partial_c=\Gamma^a{}_{bc}\partial_a$
([[def-christoffel-symbols-of-an-affine-connection]]) and obey

$$\Gamma^a{}_{bc}=\tfrac12 g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}),\qquad a,b,c,d=0,1,2,3.$$

**(e) Basic curvature and contractions.** The **curvature** of this connection
is the operator of [[def-curvature-of-an-affine-connection]], with the fixed
sign convention

$$R^g(X,Y)Z:=\nabla^g_X\nabla^g_YZ-\nabla^g_Y\nabla^g_XZ-\nabla^g_{[X,Y]}Z.$$

The genuinely general affine-connection theorem
[[thm-curvature-is-a-type-one-three-tensor]] proves that it depends pointwise
only on $X,Y,Z$ and is a smooth tensor. Define its chart components by
$R^g(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$.
Define the **Ricci tensor** and **scalar curvature** pointwise by

$$\operatorname{Ric}_p(v,w):=\operatorname{tr}(z\mapsto R^g_p(z,w)v),\qquad S(p):=\operatorname{tr}(\sharp_p\circ\operatorname{Ric}^{\flat}_p),\qquad \operatorname{Ric}^{\flat}_p(v):=\operatorname{Ric}_p(v,\cdot).$$

Here $\sharp$ is the inverse metric isomorphism and traces are the
basis-independent trace of [[def-trace-of-an-endomorphism]]. Equivalently,
$\operatorname{Ric}_{bd}=\sum_aR^a{}_{bad}$ and
$S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$, all sums from $0$ through $3$.
These are well-defined smooth fields by finite contraction of the smooth
components of $R^g$ and $g^{-1}$; basis independence follows from the trace
and the intrinsic maps just defined. No symmetry identity or field equation
is assumed here. Lowering the curvature output gives
$R_{abcd}=g_{ae}R^e{}_{bcd}$, so the definitions agree with the full later
curvature item, which proves the remaining symmetries and coordinate formulas.
'''
conn_proof=r'''
## Facts & Assumptions

**Given:** The smooth Lorentzian data $(M,g,N)$ of the Definition and smooth
local vector fields $X,Y,Z$.

[F1] The bracket is smooth and obeys $[X,fY]=f[X,Y]+X(f)Y$ and $[fX,Y]=f[X,Y]-Y(f)X$ ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F2] Nondegeneracy identifies vectors with covectors by $g$, with inverse components $g^{ab}$ smooth and satisfying $g^{ac}g_{cb}=\delta^a{}_b$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[lem-gr-inverse-metric-is-smooth]]). Coordinate derivations form a basis, and smoothness of a field is equivalent to smoothness of its coordinate components ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[F3] The affine-connection rules and torsion are those of [[def-affine-connection-on-a-smooth-manifold]] and [[def-torsion-tensor-of-an-affine-connection]]; metric compatibility is (a) above.

[F4] The curvature operator of any smooth affine connection is a smooth pointwise trilinear tensor, with no metric or torsion hypothesis ([[def-curvature-of-an-affine-connection]], [[thm-curvature-is-a-type-one-three-tensor]]).

## Proof

1.1 Expand the six terms of $K$ using [F1] and the derivation product rule. In $K(fX,Y,Z)$ the $Y(f)g(Z,X)$ and $Z(f)g(X,Y)$ contributions cancel the terms $-Y(f)g(X,Z)$ and $-Z(f)g(X,Y)$ from the brackets, so $K(fX,Y,Z)=fK(X,Y,Z)$. In $K(X,Y,fZ)$ the contributions $X(f)g(Y,Z)$ and $Y(f)g(Z,X)$ cancel those from $[fZ,X]$ and $[Y,fZ]$, giving $K(X,Y,fZ)=fK(X,Y,Z)$. In $K(X,fY,Z)$ the two surviving $X(f)g(Y,Z)$ contributions give $K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z)$. Additivity and real homogeneity in all slots are termwise. [F1, algebra]

2.1 On any chart put $V=\tfrac12\sum_{a,b=0}^3g^{ab}K(X,Y,\partial_b)\partial_a$. This is smooth by [F1]-[F2] and smoothness of the pairings $g(X,Y)$. Inserting $Z=\partial_c$ gives $2g(V,\partial_c)=K(X,Y,\partial_c)$ by the inverse-matrix identity; function-linearity in $Z$ from step 1.1 and the coordinate basis then give $2g(V,Z)=K(X,Y,Z)$ for every $Z$. Two such local fields agree on an overlap by nondegeneracy, so all these local definitions patch uniquely, without a choice of a global family of frames, to $\nabla^g_XY$. Step 1.1 and nondegeneracy transfer the three affine-connection rules to $\nabla^g$. [step 1.1, F1, F2, F3, algebra]

3.1 By metric symmetry and bracket skew-symmetry, expanding and cancelling terms gives $K(X,Y,Z)-K(Y,X,Z)=2g([X,Y],Z)$ and $K(X,Y,Z)+K(X,Z,Y)=2Xg(Y,Z)$. Together with step 2.1 and nondegeneracy, these are respectively $\nabla^g_XY-\nabla^g_YX=[X,Y]$ and $g(\nabla^g_XY,Z)+g(Y,\nabla^g_XZ)=Xg(Y,Z)$. Thus the constructed connection is torsion-free and metric-compatible. [step 2.1, F1, F2, F3, algebra]

4.1 For any other torsion-free metric-compatible $\nabla'$, substitute the compatibility identity into the three derivatives in $K$ and substitute $[X,Y]=\nabla'_XY-\nabla'_YX$ into its three brackets. Metric symmetry cancels all pairings except two copies of $g(\nabla'_XY,Z)$; hence $2g(\nabla'_XY,Z)=K(X,Y,Z)$, and nondegeneracy identifies $\nabla'$ with step 2.1. On coordinate fields the brackets vanish and this same identity gives $2g_{ad}\Gamma^d{}_{bc}=\partial_bg_{ca}+\partial_cg_{ba}-\partial_ag_{bc}$; multiply by the inverse matrix to obtain the displayed Christoffel formula. [step 2.1, step 3.1, F1, F2, F3, algebra]

5.1 The constructed smooth affine connection satisfies the hypotheses of [F4], so $R^g$ is pointwise well defined and smooth. The map $z\mapsto R^g_p(z,w)v$ is a linear endomorphism depending bilinearly on $v,w$; its intrinsic trace therefore gives a basis-independent covariant two-tensor. In a chart its finite trace is $\operatorname{Ric}_{bd}=\sum_aR^a{}_{bad}$. Composing its covector map with $\sharp$ gives a smooth endomorphism, whose trace is $S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$. Their smoothness follows from these finite sums of smooth components. The same inverse-matrix identity gives $\sum_{a,c}g^{ac}R_{abcd}=\sum_cR^c{}_{bcd}=\operatorname{Ric}_{bd}$, confirming the later component convention. All constructions therefore require no further assumptions or physical premises. [step 4.1, F2, F4, algebra] ∎
'''
def conn(s):
 s=adddeps(s,conn_deps).replace('  proof: not-applicable','  proof: ai-generated').replace('verification:\n  precheck: n/a','proof_strategy: direct\nverification:\n  precheck: pass')
 s=s.replace('## Remarks',conn_def+'\n## Remarks')
 if conn_def not in s:s=s+'\n'+conn_def
 return s+'\n'+conn_proof
edit('def-gr-metric-selected-connection',conn)

# Pure mathematical companion constructions

These examples use stipulated real/complex functions, geometry and PDEs only.
None has a physical postulate/result/experiment as a mathematical prerequisite.
They supply the exact examples formerly named only by generic inventory titles.

`ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`: take
D=[0,1]², a∈C²(I),a>0, r(u,v,t)=(a(t)u,a(t)v,0), B=e3 and
v=(a'/a)(x1,x2,0). The parametrized flux is a², so its derivative is2aa'.
The fixed-time surface integral of B_t is0, while
curl(v×B)=−2(a'/a)e3. Patch Stokes therefore gives
∮(v×B)·dl=−2aa', exactly the sign in M02's moving-flux theorem. Treating
this moving patch as fixed would falsely give zero. All fields/maps are smooth
at the stated regularity and no singular support is involved.

`ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries`: with
η=diag(−1,1,1,1), v=(1,0,0,0) is unit future timelike. The explicit boost
sends it to (γ,−γβ,0,0), whose squared metric norm is −γ²(1−β²)=−1 and
whose time component is positive. A null line (s,s,0,0), s∈R, has zero metric
speed, so the integral proposed as timelike proper time is identically zero
and is not an invertible parameter. This directly checks the timelike condition
rather than invoking a physical clock premise.

`ex-em-wave-equation-prerequisites-hypothesis-boundaries`: for smooth compact
one-variable f, u(x,t)=f(x1−ct) gives u_tt=c²f'',Δu=f'', so Wu=0 exactly.
If f is nonzero it is not compactly supported in all R³ and its nonzero
energy slab has infinite transverse volume. Thus W2's local existence theorem
does not by itself assert global finite energy for every smooth datum.
The no-root all-time curve sqrt(c²s²+a²) from X8 is also a pure mathematical
counterexample to dropping R1's uniform speed/history hypothesis.

`ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries`: sphere trace
f(n)=n3 has H3 extension u(x)=x3 because it is a homogeneous degree-one
harmonic polynomial. The Neumann conditions Δu=0,∂nu=1 on a unit sphere
are incompatible: integration gives0=4π. Near a plane interface choose
ε=1 for x1<0,ε=2 for x1>0 and u=x1 on the first side,u=x1/2 on the second.
The normal flux ε∂1u is the constant1, so −div(ε∇u)=0 weakly and u is
continuous/H¹. Its first derivative jumps; a globally C¹ conclusion across
this discontinuous coefficient would be false. Piecewise regularity is the
correct stronger conclusion, as B7 states.

`ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries`: the
real kernel K(s)=−e^−s for s≥0 lies in D2's integrable absolutely continuous
class with sK∈L¹. Its integral transform is χ(ω)=−1/(1−iω), obtained by
integrating e^(−1+iω)s. Thus Imχ(ω)=−ω/(1+ω²)<0 for ω>0 despite causal
convolution. This proves that the positive imaginary/passivity condition is
an additional restriction, not a consequence of temporal causality.

`ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`: in U1 choose
f(θ)=mθ,m>0,θ0=0,yhat=0,s=0 and δ≥0. Compatibility is exactly
|θ|≤δ/m. At θ=δ/m the bound is attained, showing sharpness for this example.
If the derivative-lower-bound hypothesis is removed, f≡0 makes every θ
compatible with y=0, so no finite parameter bound follows from the indicator
alone. These are mathematical observations about a hypothetical bounded-error
model, not fabricated experimental data.

`ex-em-variational-mathematical-prerequisites-hypothesis-boundaries`: on R²,
S(x,y)=x²−y² has differential0 at(0,0) and values ε² at(ε,0),−ε² at(0,ε).
Hence a stationary point need not be a minimum; this is a finite-dimensional
mathematical example independent of the adopted physical action.

`ex-em-outgoing-dtn-and-pec-zero-mode-boundaries`: F1 gives
h0(z)=−i eiz/z, so t0=ik−1/R by logarithmic differentiation. Its real part
is negative and imaginary part positive as F2 requires. In the smooth spherical
shell a<|x|<b, u=grad(1/|x|)=−x/|x|³ is smooth on the closure, nonzero,
normal to both boundary spheres, curl-free and divergence-free. Thus it lies
in G3's PEC class and has zero curl eigenvalue; eliminating all topology zero
modes would incorrectly discard this explicit admissible vector field.

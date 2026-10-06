---
page: "scalar-conservation-laws-and-entropy-solutions-examples"
title: "Scalar Conservation Laws and Entropy Solutions — Examples"
status: published
items: []
examples: ["ex-burgers-shock-riemann-solution", "ex-burgers-rarefaction-riemann-solution", "ex-gradient-catastrophe-before-shock-formation", "ex-rankine-hugoniot-in-space-time-normal-form", "ex-kruzhkov-entropy-inequality-for-a-shock", "ex-hamilton-jacobi-primitive-of-a-burgers-solution", "cex-expansion-shock-is-weak-but-not-entropic", "cex-rankine-hugoniot-alone-does-not-give-uniqueness", "cex-pointwise-shock-values-do-not-affect-the-weak-solution", "cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux", "ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity", "ex-affine-flux-reduces-the-entropy-semigroup-to-translation", "ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave"]
---

These companions compute the theory of the main page on explicit Riemann data
and mark its scope boundaries. The Burgers shock and rarefaction are solved
explicitly for $f(u)=\tfrac12u^2$, the shock via the Rankine--Hugoniot speed
$(u_L+u_R)/2$ and the Lax inequalities, the rarefaction via the centred fan
$u=x/t$; the Rankine--Hugoniot condition is also exhibited in its space--time
normal form on a planar discontinuity, and the gradient catastrophe of
$u_0=-\arctan x$ is traced through the characteristic map
$X_t(y)=y-t\arctan y$ up to the first blow-up of $u_x$ at $T_*=1$ and the
compressive shock that continues it. A direct computation gives the Kruzhkov
entropy production across a shock,
$[q_k]-s[\eta_k]=(k-u_R)(k-u_L)$ on $u_R<k<u_L$ and zero outside, with
$-1/4$ in the unit case; the Hamilton--Jacobi primitive of the Burgers
rarefaction is computed and verified to solve $U_t+\tfrac12(U_x)^2=0$ with a
corner-free $C^1$ profile.

The counterexamples delimit what the weak formulation and the jump condition
can do. The expansion shock $0\to1$ is weak but not entropic, with entropy
production $1/12$ for the pair $(\tfrac12u^2,\tfrac13u^3)$ and $1/4$ in the
Kruzhkov family at $k=\tfrac12$, and Rankine--Hugoniot alone therefore does not
give uniqueness; pointwise values on a shock curve are invisible to the weak
formulation; distinct states with equal flux produce a stationary admissible
shock; and for the nonconvex flux $u^3$ the strictly convex Riemann formula
fails, its single-jump candidate satisfying Rankine--Hugoniot but violating the
entropy condition, with the entropy solution requiring a composite
shock--rarefaction wave built from the concave hull. Finally, an affine flux
$f(u)=cu+d$ reduces the entropy semigroup to pure translation
$S_tu_0=u_0(\cdot-ct)$ with zero entropy production. The examples follow the
choice principles declared on the main page and introduce none of their own.

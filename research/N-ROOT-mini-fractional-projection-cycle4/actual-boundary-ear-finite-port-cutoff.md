# An actual MINI boundary-ear finite-port cutoff

2026-10-18. Exact actual-space obstruction to deducing tangent nonextinction from mass minimality with ARBITRARY actual weak flux ports. This is not a counterexample to the original smooth pressure estimate, nor to nonextinction on the particular logarithmic-lift-refined toothed template.

## Geometry

In C_r=[-4r,4r]x[0,4r] use the prescribed boundary nodes

    o=(0,0), c=(4r,0), s=(4r,epsilon r), 0<epsilon<=1/8,

along with the other four container boundary nodes. Retain the actual triangle K=(o,c,s) as one mesh cell. Its edge o-s is internal, but BOTH its endpoints are GLOBAL boundary nodes. Triangulate the rest of the rectangle conformingly, retaining o-s without additional vertices. Any finite recursive fan and child structure placed strictly above that diagonal may be included in the rest. A near-base fan with tilt greater than epsilon/4 can be placed there. The construction is a genuine finite conforming simplicial mesh; for fixed epsilon and each fixed finite template its shape bound is finite. Subsequent descendant replacements away from K do not change it.

## Exact response

Let lambda_c be the barycentric coordinate of c on K, b_K=27 lambda_o lambda_c lambda_s, and choose a nonzero scalar t. Set

    phi=t lambda_c on K,    phi=0 outside K,
    p=grad phi|K,
    W=-(14/9)b_K p on K,   W=0 outside K.                  (1)

These are actual continuous P1 pressure and conforming MINI velocity fields. Pressure vanishes on o-s, so its zero extension is continuous; the velocity bubble vanishes on every cell edge. Every boundary velocity coefficient is zero.

For any zero-boundary velocity test, its affine part vanishes on K: ALL THREE vertices of K are global boundary nodes. Only its K-bubble can contribute. The exact moments mean b=9/20 and mean b²=81/280 give

    integral_K W b_K + integral_K b_K grad phi
       =|K|[-(14/9)(81/280)+(9/20)]p=0.                  (2)

Every other cell has W=grad phi=0. Hence (W,v)+(v,grad phi)=0 for EVERY interior velocity test. Interior pressure nodal tests are identically zero on K, again because all its vertices are global boundary nodes. Thus (W,grad q_0)=0 for every zero-boundary pressure test.

The actual boundary moment vector is supported at o,c,s, with

    ell_i=-(7/10)|K| p dot grad lambda_i,  i in {o,c,s},
    ell_i=0 at the other four boundary nodes.             (3)

It has sum zero, and these are the ACTUAL preserved moments of W; no flux was replaced by zero. The mass energy is exactly

    ||W||2²=(7/10)|K||p|².                               (4)

The usual exact feasible-set argument makes W the unique mass minimizer for its actual trace g=0 and moments ell. For a competitor difference d of zero trace and zero moments, momentum gives (W,d)=0, so ||W+d||²=||W||²+||d||².

Nevertheless its incoming root tangent contrast on the positive base half is

    q_root=W(o)dot(1,0)+partial_x phi|base=t/(4r),          (5)

which is nonzero. Every child outside K has W=0 and phi=0, hence EXACTLY zero full affine-Darcy quotient state. The root channel is extinguished before any child, while all actual weak flux constraints and local mass minimality hold.

## Exact scope and relation to the logarithmic-lift template

This gives an explicit finite-port mechanism, not merely a dimension count: the separator o-s has only global boundary endpoints, so no interior nodal velocity or pressure row transmits across it. The bubble in (1) carries the independent boundary moment port. The example has zero boundary velocity and nonzero ell; a velocity-only competitor would miss it.

It is intentionally NOT claimed to be the final pressure-lift-refined template. In fact the checked logarithmic boundary-pressure lift excludes this separator. Any continuous P1 corner pressure hat that is one at c and zero at o,s must vanish on the WHOLE unrefined separator o-s. On the retained triangle it is lambda_c, with

    integral_K |grad lambda_c|²
      =2 epsilon r²[(4r)^(-2)+(epsilon r)^(-2)]
      =epsilon/8+2/epsilon.

Thus every such lift costs at least c epsilon^(-1/2), incompatible with the logarithmic bound when epsilon is small. The improved pressure-lift construction necessarily destroys this particular decoupling (it does not preserve that unrefined separator). Refinement confined inside the ear with separator unsubdivided still leaves this trace-energy obstruction.

Accordingly the example establishes precisely that arbitrary-flux mass minimality ALONE cannot imply nonextinction. A proof for the current logarithmic-lift-refined geometry must additionally use its actual port transmission/observability; it cannot cite this ear example as failure of that particular geometry, nor cite the general competitor as excluding the ear mechanism. No statement about smooth-source evolutionary pressure follows.

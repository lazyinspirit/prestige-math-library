# Why abstract mixed energy, residual and Fortin stability cannot close the joint argument

Research only. This is a completely explicit finite-dimensional mixed evolution example. It is NOT an actual MINI family, a polyhedral Navier–Stokes trajectory, or a refutation of the original smooth pressure estimate. Its purpose is narrower: it shows that the direct mixed-dual argument cannot be completed solely from uniform mixed inf-sup/Poincare constants, a commuting L2/H1-stable Fortin projection, the complete velocity energy error and a smooth full-L2 consistency residual. The actual spatial/moment geometry must be used somewhere.

The earlier 2-by-2 illustration concerned a generic full-test projection. The extension here has a distinct continuous divergence constraint, an exact smooth solenoidal stationary trajectory, actual mass-orthogonal discrete initialization, a commuting projection stable in BOTH endpoint norms, a bounded forcing and a bounded complete velocity error. Thus it tests the new joint-error route rather than repeating only the false H1-projector assertion.

## 1. Fixed algebraic spaces with a parameter-dependent energy

For each integer lambda>=2 let H=R³ with the Euclidean mass pairing. Let V=R³ with

    ||(a,b,c)||V²=lambda(a+b)²+b²+c².

The symmetric stiffness matrix is

    H_lambda=((lambda,lambda,0),
              (lambda,lambda+1,0),
              (0,0,1)).

Let Q=R with ordinary absolute-value norm, and define

    b((a,b,c),p)=(b+c)p,
    a(v,w)=v^T H_lambda w.

The exact continuous solenoidal space is ker(b+c). The discrete velocity space is V_h={(a,b,0)} and its weak kernel is Z_h=span{e1}. Use T=1 and the bookkeeping spatial size h=1. This does not assert that h comes from a mesh.

All relevant basic constants are uniform in lambda. Indeed a is the V inner product. Since a²<=2(a+b)²+2b²,

    ||v||H²<=2(a+b)²+3b²+c²<=3||v||V²,

so Poincare has constant at most sqrt(3). Also |b+c|<=sqrt(2)(b²+c²)^(1/2)<=sqrt(2)||v||V. The continuous right inverse p↦(0,0,p) has norm |p|. On V_h, p↦(−p,p,0) is a right inverse with V norm |p|. Both continuous and discrete inf-sup lower bounds are therefore at least1.

Define the Fortin projection

    F(a,b,c)=(a−c,b+c,0).

It is the identity on V_h, hence a projection. Its discrete constraint equals the continuous one: b(Fv,p)=b(v,p). Moreover

    ||Fv||H²=(a−c)²+(b+c)²<=4||v||H²,
    ||Fv||V²=lambda(a+b)²+(b+c)²<=2||v||V².

Thus it is uniformly bounded on L2 and H1 analogues simultaneously. Even the FULL velocity mass projector R_h(a,b,c)=(a,b,0) is V-stable, since its squared V norm is lambda(a+b)²+b²<=||v||V². This still does not give the constrained orthogonal projector an H1 bound. No such bound is assumed or deduced.

If desired, a stronger stationary-data norm can be defined by

    ||v||X=||v||H+||v||V+||H_lambda v||H.

The exact trajectory below has uniformly bounded X norm. For h=1, both ||v−Fv||H<=3||v||H and ||v−Fv||V<=(1+sqrt(2))||v||V are uniform approximation bounds; they still do not imply a pressure bound. This X norm is only an algebraic analogue, not an identification with a PDE H2 norm.

## 2. Exact solenoidal stationary data and mixed backward Euler solutions

Take

    u=(-1,1,-1),   p=0,   f=H_lambda u=(0,1,-1).

Then b(u,q)=0 and a(u,v)+b(v,p)=(f,v) for every continuous test v. The exact trajectory is constant in time; ||u||H=sqrt(3), ||u||V=sqrt(2), ||f||H=sqrt(2), and every time derivative vanishes. Its X norm is bounded independently of lambda. Also Fu=0.

The actual Euclidean mass projection onto Z_h gives initial value P_hu=−e1. On the uniform partition with tau=lambda^(-2), N=lambda², solve the linear mixed backward Euler equations

    ((u_h^n−u_h^(n−1))/tau,v_h)
                 +a(u_h^n,v_h)+b(v_h,p_h^n)=(f,v_h),
    b(u_h^n,q)=0.

Writing R=(1+tau lambda)^(-1)=(1+1/lambda)^(-1), the unique velocity and pressure are

    u_h^n=−R^n e1,
    p_h^n=1+lambda R^n.                               (1)

To check this, the e1 equation is D_tau x_n+lambda x_n=0 with x0=−1. The e2 equation is lambda x_n+p_h^n=f2=1, giving exactly (1). These are the full two discrete velocity equations, not a pressure defined independently of the evolution.

## 3. Complete velocity energy error remains bounded

The actual nodal error is

    e_n=u−u_h^n=(-1+R^n,1,-1).

Its L2 norm is at most sqrt(3)+1. Since its V norm satisfies

    ||e_n||V²=lambda R^(2n)+2,

one has

    sum_(n=1)^N tau||e_n||V²
      <=2+tau lambda sum_(n=1)^infinity R^(2n)
      =2+lambda/(2lambda+1)<5/2.                     (2)

Thus both parts of the complete velocity energy error are bounded uniformly, with h=1 and no relation requiring tau to be bounded below.

The exact Fortin defect is r=Fu−u=−u. It is constant in time, has uniformly bounded V and L2 norms, and its full consistency functional a(r,·) is represented by −f in H with a uniform norm. Its time derivative is zero. Hence the example satisfies even a stronger smooth full-L2 residual condition than a bounded-variation V* bound. The mass-projected error P_hu−u_h^n has zero initial value, exactly as in the direct-dual identity.

## 4. Instantaneous pressure error diverges

For 1<=n<=lambda,

    R^n >=R^lambda=(1+1/lambda)^(-lambda)>=exp(−1),

where log(1+x)<=x. From (1),

    sum_(n=1)^N tau|p_h^n|^(4/3)
       >=lambda lambda^(-2)(lambda exp(−1))^(4/3)
       =exp(−4/3)lambda^(1/3).

Therefore

    ||p−p_h||ell^(4/3)(Q)>=exp(−1)lambda^(1/4)→infinity.  (3)

All exact data, basic stability constants, Fortin endpoint norms and the complete velocity error in (2) remain bounded. The residual is constant and uniformly L2 represented. Thus a theorem deriving the desired pressure rate from only these abstract properties would be false.

The mass-initialization term is the source here: P_hr=e1 has V norm sqrt(lambda), despite ||r||V=sqrt(2). In the direct-dual identity it appears as the generated endpoint (r,z1). Merely choosing a zero initial mass-projected error does not bound that endpoint after the small-H1 Fortin rewrite. A stable oblique Fortin projection on both endpoint norms does not settle this mass observation.

## 5. What the example does and does not prove

This proves failure of an abstract inference, even with consistent exact incompressibility, mass initialization, a uniformly commuting Fortin projection, full mixed equations, constant forcing and a uniform complete velocity error. It strengthens the earlier generic-input illustration in precisely those interfaces relevant to the new joint route.

It does not realize the parameter lambda by actual MINI meshes. In particular it has no elementwise vanishing moments, local mesh geometry, actual H2 approximation structure at vanishing h, or Navier–Stokes trilinear form. The original smooth pressure theorem could exploit those structures; no original hypothesis has been refuted. The nonlinear actual-trajectory joint functional in the companion report remains unproved. This note supplies a precise reason why another abstract energy/Fortin argument alone is insufficient, not a reason to narrow or relabel the original claim.

Only this research note was written. No canonical item, metadata, hash, gate, test, readiness, runtime control, commit or publication action occurred.

# An anisotropic fractional bound for the actual equal-half MINI defect

2026-10-18. Research lemma, not needed if the direct global outer-mass inverse closes the transfer argument. No pressure conclusion.

Let K_-,K_+ be the two triangles from root 0 to three equally spaced collinear outer nodes v_-=v_0-h t,v_0,v_+=v_0+h t. Write L=|v_0|, d=|v_0 dot n|, w=h d/L. Assume h/L is sufficiently small and d>0. Let V be an actual continuous scalar MINI polynomial on this pair, with outer nodal values b_-,b_0,b_+. For fixed 0<s<1,

    |V|_(H^s(K_- union K_+))^2
       >= c_s |K_- union K_+| w^(-2s)
                         |(b_-+b_+)/2-b_0|^2.                 (1)

The constant is uniform in L,h,d and the aspect ratio under the small h/L hypothesis. Vector values follow componentwise. The equal-half hypothesis matters: the stated second difference annihilates every affine function.

Proof. Rotate so v_0 is the longitudinal axis and orient the transverse axis so the outer plus node has positive transverse coordinate. Scaling physical longitudinal and transverse coordinates by L,w maps the pair to D_kappa with vertices

    0, (1,0), (1-kappa,-1), (1+kappa,1),
    kappa=h(t dot v_0)/L^2.

The middle ray is v=0. Thus |kappa|<=h/L; take |kappa|<=1/20. The total reference area is one, physical area is Lw, and epsilon=w/L<=h/L<=1/20. The pulled-back function f belongs to the six-dimensional continuous piecewise MINI space on these two triangles. Put

    J_(epsilon,kappa)(f)
      =epsilon^(1+2s) integral_(D_kappa x D_kappa)
          |f(u,v)-f(u',v')|^2
          /[(u-u')^2+epsilon^2(v-v')^2]^(1+s).

Exact change of variables gives

    |V|_Hs^2=(Lw)w^(-2s) J_(epsilon,kappa)(f).                (2)

Choose I=[2/5,3/5], B=[-1/10,1/10], Z=[1/2,1]. All points (u,v),(u+epsilon z,v'),(u-epsilon z,v') lie strictly in D_kappa whenever u in I, v,v' in B and z in Z, uniformly over the specified parameter ranges. Restrict the pair integral to these two longitudinal-shift families, using u'=u±epsilon z and du'=epsilon dz. Its prefactor cancels exactly. Since z is bounded away from zero and v-v' is bounded, the denominator is uniformly bounded above. The elementary inequality |a|²+|b|²>=(1/2)|a+b|² gives

    J_(epsilon,kappa)(f) >= c_s Q_(epsilon,kappa)(f),

    Q_(epsilon,kappa)(f)
      = integral_(I x B x B x Z)
          |2f(u,v)-f(u+epsilon z,v')-f(u-epsilon z,v')|².      (3)

Both shift families can overlap only at pairs of measure zero (opposite signs of u'-u); harmless endpoint overlaps have no effect. This proves (3) without evaluating an Hs function on a measure-zero set: u' varies over intervals under the displayed change of variables.

The quadratic form Q is continuous in epsilon in [0,1/20] and kappa in [-1/20,1/20], when the MINI space is parametrized by its four nodal and two bubble coefficients. The interface is always v=0; polynomial coefficients on each side depend continuously on kappa. Q annihilates the two-dimensional subspace span{1,u} EXACTLY at every parameter value.

Its kernel is precisely this subspace. If Q=0, the integrand vanishes identically on each open polynomial-sign region. For fixed u,v,v' it is polynomial in z. Its vanishing on Z therefore implies its vanishing at z=0, including when epsilon=0. Thus f(u,v)=f(u,v') on the common interior rectangle. On each triangle, a MINI polynomial independent of v has zero bubble coefficient: the bubble's u²v coefficient is nonzero, and an affine polynomial cannot cancel it. Its remaining v-affine coefficient is zero. Continuity across v=0 then makes both pieces the SAME affine function of u. Polynomial identity extends this conclusion over each full triangle. Conversely every common affine function of u is in the kernel.

This exact kernel also justifies the UNIFORM quotient compactness step. In the Euclidean coefficient norm, project onto the orthogonal complement of the continuously varying coefficient subspace span{1,u}. If no common positive lower eigenvalue existed, compactness of the two parameter intervals and unit coefficient sphere would give a limit of norm one in that complement with Q=0, contradicting the exact kernel. Hence

    Q_(epsilon,kappa)(f)>=c dist_coeff(f,span{1,u})².

The outer second difference D(f)=(f(1-kappa,-1)+f(1+kappa,1))/2-f(1,0) annihilates span{1,u} and is uniformly bounded as a coefficient functional. Thus Q>=c|D(f)|². Combining with (2)--(3) proves (1).

In particular the proof does not normalize all coefficients while ignoring an unbounded slow affine component: symmetrization removes that component exactly BEFORE compactness. It also does not import a shape-dependent isotropic inverse constant.

For the tooth geometry d is comparable to a R/N, h to the attachment half-length, and L comparable to R. Formula (1) can charge the equal-half neighboring velocity defect to genuine physical fractional roughness. Conversion to child-fan area/scale weights must retain all actual ratios. This lemma by itself supplies neither the global coupled recurrence nor an evolutionary pressure observation.

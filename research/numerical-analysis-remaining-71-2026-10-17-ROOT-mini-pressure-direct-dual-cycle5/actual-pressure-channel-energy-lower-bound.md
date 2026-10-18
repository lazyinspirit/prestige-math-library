# A positive variational diagnostic for the actual pressure channel

Research only. This is a pressure-observation reduction for the actual MINI operator, not a constructed bad mass lift or an original smooth-data counterexample. All original domain/mesh allowances remain; no canonical/control edits.

Use the actual mass-minimum lift Wq, energy-minimum lift Lq, Kq=Lq−Wq=P_Z Lq, and mass Stokes operator A on Z_h. Let W_lambda minimize lambda||v||2²+a(v,v) under the same discrete divergence constraint, for real lambda>0. Then

    F_q(lambda)=inf_(div_h v=q)[lambda||v||2²+a(v,v)]
                              −lambda||Wq||2²
       =lambda||W_lambda−Wq||2²+a(W_lambda,W_lambda).   (1)

Indeed the constraint difference belongs to Z_h and Wq is mass-orthogonal to that space, so the mass cross term vanishes. In particular F_q is nonnegative.

Write each MINI lift locally as l+beta_K c_K with the mean-one bubble beta_K. The exact actual strain identity a(l,beta_K c)=0 holds because epsilon(l) is constant and integral_K grad beta_K=0. Hence

    a(W_lambda,W_lambda)
       >= c nu sum_K h_K^(-2)|K||c_lambda,K||².         (2)

Local polynomial coefficient norm equivalence also gives

    ||W_lambda−W||2,K²
        >= c |K||c_lambda,K−c_W,K||².                 (3)

The constant in (3) follows by pulling back the linearly independent P1-plus-bubble basis; affine velocity coefficients may be minimized as well, and their cancellation cannot remove the positive distance of beta_K from P1. Constants are uniform under the fixed shape bound. Minimizing the sum of the right sides of lambda times (3) and (2) over c_lambda,K proves

    F_q(lambda) >= c sum_K min(lambda,nu h_K^(-2))
                                      |K||c_W,K||².  (4)

Explicitly, alpha|x−b|²+eta|x|² has minimum alpha eta/(alpha+eta)|b|², bounded below by one half min(alpha,eta)|b|². Thus (4) is a genuine local-to-global lower bound, including arbitrary filler cells. It requires an actual mass-lift coefficient c_W, not a coefficient borrowed from a full-R mode.

For the pressure interpretation, choose a mass-orthonormal eigenbasis A e_j=a_j e_j on Z_h and write Kq=sum k_j e_j. Energy orthogonality a(Lq,Z_h)=0 and Wq=Lq−Kq imply

    W_lambda−Wq=(lambda+A)^(-1)A Kq,
    F_q(lambda)=a(Lq,Lq)
                    +sum_j lambda a_j/(lambda+a_j)|k_j|².  (5)

For the homogeneous velocity y(t)=exp(−tA)Kq, define its actual mixed pressure C_h y by b(v,C_hy)=(Ay,v)−a(y,v). Testing against Wq and using a(Lq,Z_h)=0 gives the positive scalar observation

    (C_h y(t),q)=a(exp(−tA)Kq,Kq)
                  =sum_j a_j exp(−t a_j)|k_j|² >=0.      (6)

Its Laplace transform is exactly

    integral_0^infinity exp(−lambda t)(C_h y(t),q)dt
       =[F_q(lambda)−a(Lq,Lq)]/lambda.                  (7)

Consequently Holder gives the necessary lower bound

    ||C_h y||L^(4/3)(0,infinity;Q)
       >=(4lambda)^(1/4)
          [F_q(lambda)−a(Lq,Lq)]/[lambda||q||2].        (8)

For an eventual fixed finite-time counterexample the earlier actual uniform semigroup-tail estimate must be applied; (8) is not silently a finite-time statement. The positive diagonal formulation avoids cancellation between spectral modes. If a genuine uniformly L2-bounded coarse source q produces mass-lift bubble coefficients forcing lambda^(-3/4)F_q(lambda) to diverge, (4)–(8) detect an actual pressure channel.

Crucially the initial datum Kq is not the original smooth solenoidal defect. Even a divergence in (8) must still be transferred through a proved root-source/DtN coupling to the fixed smooth source, followed by the actual nonlinear passage. No such transfer, tail divergence, or nonlinear trajectory is proved in this note. This diagnostic is meant to assess the actual coupled template, rather than infer pressure blowup from physical Hs roughness alone.

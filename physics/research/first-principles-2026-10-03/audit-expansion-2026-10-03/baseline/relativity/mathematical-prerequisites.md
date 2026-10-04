# Local mathematics for relativity

Research arguments, 2026-10-03; not accepted items or readiness evidence. Every premise here is mathematical. Signature $(-,+,+,+)$; smooth means $C^\infty$. Adopt the published bundle suppliers' $\mathrm{AC}_\omega$ where used; these finite calculations spend no additional choice. `Mxx` are research labels, not canonical IDs.

## M01 — affine Lorentz space and boosts (restricted argument supplied)

An affine space $A$ modeled on a real four-dimensional vector space $V$ is a nonempty set with a free transitive action $(p,v)\mapsto p+v$ of $(V,+)$. Thus $q-p$ is uniquely defined. Supply a symmetric nondegenerate bilinear form $\eta$ of inertia $(3,1,0)$, counting positive, negative, zero directions. Supply a future component of $\{v:\eta(v,v)<0\}$. In an orthonormal basis, $\eta(v,v)=-(v^0)^2+|\mathbf v|^2$; future timelike means $v^0>0$. Affine coordinates are $x(p)=E^{-1}(p-o)$ for a chosen origin $o$ and basis isomorphism $E:\mathbb R^4\to V$. Affine isometries have form $x\mapsto\Lambda x+a$, $\Lambda^T\eta\Lambda=\eta$. Proper orthochronous means determinant $+1$ and future-cone preservation.

For $|\beta|<1$, let $\gamma=(1-\beta^2)^{-1/2}$ and define $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$, $x'^2=x^2$, $x'^3=x^3$. Expansion gives $-(x'^0)^2+(x'^1)^2=\gamma^2(1-\beta^2)(-(x^0)^2+(x^1)^2)$. Its determinant is one; $x^0>|x^1|$ implies $x^0-\beta x^1>0$, so it preserves the future component. The inverse has $-\beta$. Multiplication gives collinear composition parameter $(\beta_1+\beta_2)/(1+\beta_1\beta_2)$. For an arbitrary future timelike $D=(D^0,\mathbf D)$, if $\mathbf D=0$ it is already at rest. Otherwise choose a Euclidean spatial basis with first vector $\mathbf D/|\mathbf D|$, extend it orthonormally in its positive-definite complement using the reviewed finite orthogonal-basis result, and apply the displayed boost with $\beta=|\mathbf D|/D^0<1$. Its new spatial component is zero and new time component is $\sqrt{-\eta(D,D)}>0$. Thus the rest-chart existence used in M02 is explicitly proved. This proves the displayed transformations are Lorentz; deriving this geometry from verbal physical postulates requires additional homogeneity/isotropy/affine-transition and operational assumptions and is not claimed.

## M02 — flat proper-time maximum (argument supplied)

For future timelike $v,w$, put $a=\sqrt{-\eta(v,v)}$, $b=\sqrt{-\eta(w,w)}$, $r=|\mathbf v|$, $s=|\mathbf w|$. Euclidean Cauchy–Schwarz and $(v^0w^0-rs)^2-a^2b^2=(v^0s-w^0r)^2$ give $-\eta(v,w)\ge ab$, with equality for positive proportional vectors. For a piecewise $C^1$ future timelike curve $x:[a,b]\to A$ with displacement $D$, use M01 to send $D$ to $(T,0,0,0)$, $T>0$. Then
$$\int_a^b\sqrt{-\eta(\dot x,\dot x)}d\lambda\le\int_a^b\dot x^0d\lambda=T=\sqrt{-\eta(D,D)}.$$
Equality requires $\dot{\mathbf x}=0$ on all smooth pieces, hence the straight image with monotone parametrization. This is a global flat result, not curved geodesic maximality. Null curves have zero proper time and cannot be parametrized by it. The positivity of the orthogonal complement of a timelike vector follows by the same boost to its time axis, so a Lorentz orthonormal basis adapted to $D$ exists.

## M03 — proper-time parametrization (restricted argument supplied)

For a regular $C^1$ future timelike curve $x:I\to M$ and continuous Lorentz metric, define $\tau(\lambda)=\tau_0+c^{-1}\int_{\lambda_0}^{\lambda}\sqrt{-g(\dot x,\dot x)}ds$. The derivative is positive; strict monotonicity and the one-dimensional inverse theorem give an inverse on its image. Its reparametrized velocity $u$ has $g(u,u)=-c^2$. Increasing change of parameter leaves the integral invariant by substitution. Corners are treated piecewise; completeness is not inferred. Exact FTC/substitution/inverse-function supplier proof audit remains OPEN before canonical authoring.

## M04 — observer split (argument supplied)

For $g(n,n)=-1$, $n$ future, define $h(v)=v+g(n,v)n$. Then $h^2=h$, $g(n,h(v))=0$, and $n^\perp$ is positive-definite by M01. Uniquely $v=-g(n,v)n+h(v)$. For $p$ with $g(p,p)=-m^2c^2$, set $E_n=-c\,g(p,n)$, $q_n=h(p)$. Expansion gives $E_n^2=m^2c^4+c^2g(q_n,q_n)$; $E_n>0$ for future $p$. For nonzero future null $p$, $E_n=c\sqrt{g(q_n,q_n)}$. Interpreting $p=mu$ and additive collision conservation are physical assumptions. Null momentum is not defined by setting $m=0$ in $mu$.

## M05 — Lorentzian Levi–Civita construction (argument supplied)

Supply smooth symmetric nondegenerate $g$ on a smooth manifold. Put
$$K(X,Y,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$
Using $[X,fY]=X(f)Y+f[X,Y]$, substitution cancels all derivatives of $f$ in $K(X,Y,fZ)$, giving $fK(X,Y,Z)$. Hence $K/2$ is a covector in $Z$, and nondegeneracy uniquely defines $\nabla_XY$ by $2g(\nabla_XY,Z)=K(X,Y,Z)$. Smoothness follows from smooth metric inversion (reviewed supplier). Substitution gives real bilinearity, $\nabla_{fX}Y=f\nabla_XY$, and $\nabla_X(fY)=X(f)Y+f\nabla_XY$: the remaining derivative term is $2X(f)g(Y,Z)$. Subtracting $K(Y,X,Z)$ yields $2g([X,Y],Z)$; adding $K(X,Z,Y)$ yields $2Xg(Y,Z)$. Thus torsion is zero and the metric is compatible. Conversely expanding compatibility and torsion zero gives this identity, hence uniqueness. The intrinsic formulas agree on overlaps, so patch without selecting global frames. Positivity never entered. Coordinate fields commute, giving
$$\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc}).$$
This extends the method, not the published Riemannian statement. Exact bracket/section interfaces and inherited proof closure still require audit.

## M06 — curvature definitions and obligations

Use $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. Set $R^a{}_{bcd}\partial_a=R(\partial_c,\partial_d)\partial_b$, so
$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}.$$
Define $\mathrm{Ric}_{bd}=R^a{}_{bad}$, $S=g^{bd}\mathrm{Ric}_{bd}$, $G_{bd}=\mathrm{Ric}_{bd}-\tfrac12Sg_{bd}$. Tensoriality has the following restricted proof. For $f$ smooth, $[fX,Y]=f[X,Y]-Y(f)X$ gives $R(fX,Y)Z=fR(X,Y)Z$ because the two $Y(f)\nabla_XZ$ terms cancel; skewness gives linearity in $Y$. Expanding $R(X,Y)(fZ)$ gives $fR(X,Y)Z+(X(Yf)-Y(Xf)-[X,Y]f)Z$, since cross derivative terms cancel. The final parenthesis is zero by the bracket definition, proving function-linearity in $Z$. Real multilinearity and smoothness follow directly. This metric-free calculation uses only the affine connection identities. Lorentzian symmetries/Bianchi proof remains OPEN: expand Leibniz rules, then use metric compatibility, torsion zero and signed traces $\sum_a\epsilon_a(\cdots)$, $\epsilon_0=-1$, $\epsilon_i=1$. An unsigned Riemannian orthonormal trace is unsuitable.

## M07 — Killing current (conditional argument supplied)

Assume symmetric $T^{ab}$, $\nabla_aT^{ab}=0$, and $\nabla_a\xi_b+\nabla_b\xi_a=0$. For $J^a=T^{ab}\xi_b$, Leibniz gives $\nabla_aJ^a=T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$. This is local. Integrated conservation requires integrable flux, specified oriented hypersurfaces and zero/accounted side flux. Arbitrary spacetimes need not possess a Killing vector. Induced connection/contraction and density/Stokes conversion remain audit obligations.

## M08 — Newtonian expansions (restricted algebra supplied)

For $z=v^2/c^2\le z_0<1$, Taylor with bounded second derivative gives $(1-z)^{-1/2}=1+z/2+O(z^2)$. Thus $E=mc^2+\tfrac12mv^2+O(mv^4/c^2)$ and $p=mv+O(mv^3/c^2)$. Constants depend on $z_0$. These are asymptotic correspondences, not framework identities. In a stationary chart $x^0=ct$, supply $g_{00}=-(1+2\Phi/c^2)+O(\varepsilon^2)$, $g_{0i}=O(\varepsilon^{3/2})$, $g_{ij}=\delta_{ij}+O(\varepsilon)$, $|v|/c=O(\sqrt\varepsilon)$ with controlled spatial/time derivatives on a fixed region. M05 gives leading term $\Gamma^i{}_{00}=\partial_i\Phi/c^2$; the time-parametrized geodesic equation gives leading acceleration $-\partial_i\Phi$. Full uniform remainder theorem and Einstein-to-Poisson source scaling are OPEN. The metric ansatz is an assumption here.

## Exact open targets

| Label | Proposed statement, hypotheses and proof route | Status/consumer |
|---|---|---|
| M09 | Smooth Lorentz geodesic IVP on boundaryless manifold for each $(p,v)$: rewrite $(x,v)'=(v,-\Gamma(v,v))$, use local smooth ODE theorem, patch uniqueness; differentiate $g(v,v)$ to preserve norm | OPEN exact transitive ODE/geodesic audit; GR03. No completeness. |
| M10 | Local tetrad and normal coordinates: seed Lorentz Gram–Schmidt by timelike field; exponential map from M09; derivative at zero and inverse-function theorem | OPEN exact arguments/suppliers; GR02/03. No global tetrad. |
| M11 | Lorentz curvature symmetries and $\nabla^aG_{ab}=0$: connection identities, dual/tensor differentiation, signed Bianchi contraction | OPEN complete proof; GR04/05. |
| M12 | Compactly supported metric variation of Einstein–Hilbert action, specified coordinate region/orientation; determinant derivative and divergence term | OPEN complete variation; GR05. Nonzero boundary variations require boundary terms. |
| M13 | $\nabla_aJ^a=|g|^{-1/2}\partial_a(|g|^{1/2}J^a)$; integrated flux for explicitly oriented finite compact regions | OPEN volume form, determinant derivative and chain/region bridge; GR06. Singular-chain Stokes is narrower than unrestricted regions. |
| M14 | Curved first variation, local timelike maximum before conjugate/cut restrictions: Jacobi/index-form and convex normal-neighborhood arguments | OPEN; GR03/04. Flat M02 is restricted complete alternative. |
| M15 | Define chronological/causal sets and Cauchy hypersurface; any splitting/existence theorem under full global hypotheses | OPEN; GR11. Time orientation alone implies no global causality. |
| M16 | Einstein–matter local IVP in stated gauge for constraint-satisfying data with exact Sobolev regularity, modulo diffeomorphism | Major OPEN hyperbolic PDE/constraint propagation; GR11. No global solution promised. |
| M17 | Uniform weak-field/slow-motion limit including stress hierarchy and $\Delta\Phi=4\pi G\rho$ | OPEN scaling/gauge/error theorem; GR07. Leading terms alone are insufficient. |
| M18 | Schwarzschild/FLRW/linearized solutions on explicit domains: direct tensor calculation, coordinate extension, perturbative gauge | OPEN exact calculations; GR08–10. Coordinate horizon distinct from curvature singularity. |
| M19 | For geodesic variation, $D^2J/ds^2=R(\dot\gamma,J)\dot\gamma$ with M06 signs | OPEN complete variation prerequisites; GR04. |
| M20 | Experiment-specific estimator/test, calibration/covariance/systematics with source-reported data | OPEN primary reports and exact mathematical analysis; SR12/GR12. No quantitative experiment item currently. |
| M21 | Dual/tensor induced connection, contraction commutation and Killing/Lie-derivative equivalence | OPEN inherited exact statements/proofs; GR04/06. |
| M22 | Point-particle/chosen matter action Euler–Lagrange equations with compactly supported variations | OPEN variation/calculus suppliers; SR08/GR05. Kinematic momentum postulate avoids fictitious derivation. |
| M23 | Hyperbolic functions/rapidity and general noncollinear transformation classification; affine isometry classification if claimed | OPEN exact published hyperbolic/algebra suppliers and classification proof; SR02/07/10. M01 supplies a rest-frame construction by rotation plus boost but does not classify all Lorentz transformations. Rindler inverse is $\rho=\sqrt{(x^1)^2-(x^0)^2}$, $\theta=\operatorname{artanh}(x^0/x^1)$ on the right wedge; smoothness follows once exact elementary-function suppliers are audited. |
| M24 | Smooth phase covector transformations, Doppler/aberration conditional formulas, finite future-cone sums and mass-shell collision inequalities | OPEN full statements/proofs and source2 locators; SR05/07/08. For future causal vectors, $v^0\ge|\mathbf v|$ and Euclidean triangle inequality imply the sum is future causal; positive null sum can be null (parallel rays) and need not have a rest frame. Hypothetical superluminal signaling needs explicit permitted signal trajectories/directions and a complete boost/time-order construction. |
| M25 | Congruence rest-space projected gradient, Born-rigidity calculations, flow-box/adapted chart existence, acceleration transport and local synchronization obstruction | OPEN exact Frobenius/flow/dual-tensor suppliers; SR04/09/10. Fermi–Walker, Sagnac and Herglotz–Noether need separate rigorous statements, domains and regularity; analytic source proof does not certify smooth theorem. |
| M26 | Chosen smooth matter tensor, model equations and stress units; FLRW constant-curvature spatial metric and ODE solution; continuity/integration/determinant/orientation hypotheses | OPEN exact closure beyond the supplied ansätze; SR09 and GR05/09. Direct metric/tensor calculations M18 do not prove a global space-form classification, existence of arbitrary EOS solutions or matter well-posedness. |

Each OPEN target blocks its consumer claim. Missing closure cannot be hidden in a textbook reference. Add prerequisite pages if actual item closure exceeds budgets; mathematical items depend exclusively on mathematics. None of the above is independent acceptance evidence.

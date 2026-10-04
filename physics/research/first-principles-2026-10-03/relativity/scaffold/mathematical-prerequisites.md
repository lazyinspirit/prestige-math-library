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

For a regular $C^1$ future timelike curve $x:I\to M$ and continuous Lorentz metric, define $\tau(\lambda)=\tau_0+c^{-1}\int_{\lambda_0}^{\lambda}\sqrt{-g(\dot x,\dot x)}ds$. The derivative is positive; strict monotonicity and the one-dimensional inverse theorem give an inverse on its image. Its reparametrized velocity $u$ has $g(u,u)=-c^2$. Increasing change of parameter leaves the integral invariant by substitution. Corners are treated piecewise; completeness is not inferred. The complete positive-integrand derivative/inverse/substitution argument is now S4 of [sr-supplier-proofs.md](sr-supplier-proofs.md), with the curved version in G0.

## M04 — observer split (argument supplied)

For $g(n,n)=-1$, $n$ future, define $h(v)=v+g(n,v)n$. Then $h^2=h$, $g(n,h(v))=0$, and $n^\perp$ is positive-definite by M01. Uniquely $v=-g(n,v)n+h(v)$. For $p$ with $g(p,p)=-m^2c^2$, set $E_n=-c\,g(p,n)$, $q_n=h(p)$. Expansion gives $E_n^2=m^2c^4+c^2g(q_n,q_n)$; $E_n>0$ for future $p$. For nonzero future null $p$, $E_n=c\sqrt{g(q_n,q_n)}$. Interpreting $p=mu$ and additive collision conservation are physical assumptions. Null momentum is not defined by setting $m=0$ in $mu$.

## M05 — Lorentzian Levi–Civita construction (argument supplied)

Supply smooth symmetric nondegenerate $g$ on a smooth manifold. Put
$$K(X,Y,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$
Using $[X,fY]=X(f)Y+f[X,Y]$, substitution cancels all derivatives of $f$ in $K(X,Y,fZ)$, giving $fK(X,Y,Z)$. Hence $K/2$ is a covector in $Z$, and nondegeneracy uniquely defines $\nabla_XY$ by $2g(\nabla_XY,Z)=K(X,Y,Z)$. Smoothness follows from smooth metric inversion (reviewed supplier). Substitution gives real bilinearity, $\nabla_{fX}Y=f\nabla_XY$, and $\nabla_X(fY)=X(f)Y+f\nabla_XY$: the remaining derivative term is $2X(f)g(Y,Z)$. Subtracting $K(Y,X,Z)$ yields $2g([X,Y],Z)$; adding $K(X,Z,Y)$ yields $2Xg(Y,Z)$. Thus torsion is zero and the metric is compatible. Conversely expanding compatibility and torsion zero gives this identity, hence uniqueness. The intrinsic formulas agree on overlaps, so patch without selecting global frames. Positivity never entered. Coordinate fields commute, giving
$$\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc}).$$
This extends the method, not the published Riemannian statement. G0–G1 of [gr-local-proofs.md](gr-local-proofs.md) now give the coordinate/germ, bracket and induced tensor constructions explicitly.

## M06 — curvature definitions and obligations

Use $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. Set $R^a{}_{bcd}\partial_a=R(\partial_c,\partial_d)\partial_b$, so
$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}.$$
Define $\mathrm{Ric}_{bd}=R^a{}_{bad}$, $S=g^{bd}\mathrm{Ric}_{bd}$, $G_{bd}=\mathrm{Ric}_{bd}-\tfrac12Sg_{bd}$. Tensoriality has the following restricted proof. For $f$ smooth, $[fX,Y]=f[X,Y]-Y(f)X$ gives $R(fX,Y)Z=fR(X,Y)Z$ because the two $Y(f)\nabla_XZ$ terms cancel; skewness gives linearity in $Y$. Expanding $R(X,Y)(fZ)$ gives $fR(X,Y)Z+(X(Yf)-Y(Xf)-[X,Y]f)Z$, since cross derivative terms cancel. The final parenthesis is zero by the bracket definition, proving function-linearity in $Z$. Real multilinearity and smoothness follow directly. This metric-free calculation uses only the affine connection identities. The complete Lorentzian symmetry, second Bianchi and signed-contraction proof is G3 of [gr-local-proofs.md](gr-local-proofs.md). An unsigned Riemannian orthonormal trace is unsuitable.

## M07 — Killing current (conditional argument supplied)

Assume symmetric $T^{ab}$, $\nabla_aT^{ab}=0$, and $\nabla_a\xi_b+\nabla_b\xi_a=0$. For $J^a=T^{ab}\xi_b$, Leibniz gives $\nabla_aJ^a=T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$. This is local. Integrated conservation requires integrable flux, specified oriented hypersurfaces and zero/accounted side flux. Arbitrary spacetimes need not possess a Killing vector. G1/G4/G6 now close the induced connection/contraction, density and admitted finite-chain flux arguments.

## M08 — Newtonian expansions (restricted algebra supplied)

For $z=v^2/c^2\le z_0<1$, Taylor with bounded second derivative gives $(1-z)^{-1/2}=1+z/2+O(z^2)$. Thus $E=mc^2+\tfrac12mv^2+O(mv^4/c^2)$ and $p=mv+O(mv^3/c^2)$. Constants depend on $z_0$. These are asymptotic correspondences, not framework identities. In a stationary chart $x^0=ct$, supply $g_{00}=-(1+2\Phi/c^2)+O(\varepsilon^2)$, $g_{0i}=O(\varepsilon^{3/2})$, $g_{ij}=\delta_{ij}+O(\varepsilon)$, $|v|/c=O(\sqrt\varepsilon)$ with controlled spatial/time derivatives on a fixed region. M05 gives leading term $\Gamma^i{}_{00}=\partial_i\Phi/c^2$; the time-parametrized geodesic equation gives leading acceleration $-\partial_i\Phi$. Q4 of [gr-solution-proofs.md](gr-solution-proofs.md) now proves uniform compact-region remainder and source-scaling estimates under exact ansatz/derivative/matter hypotheses; the underlying Einstein family is a hypothesis rather than a consequence of arbitrary Newtonian initial data.

## Current closure map, 2026-10-03 expansion

The full completed arguments are [SR suppliers](sr-supplier-proofs.md), [Lorentz geometry/variation/matter](gr-local-proofs.md), [solutions/approximations](gr-solution-proofs.md) and [causal/extremality arguments](gr-causal-proofs.md). These replace the former proof-route-only M09–M26 table for their exact covered claims. The detailed machine-readable ledger is [../closure-ledger.json](../closure-ledger.json). Stronger original targets have not been dropped to manufacture completion.

| Label | Current status | Exact argument/coverage |
|---|---|---|
| M01 | closed-stated-mathematics | S0–S2: Affine/Lorentz definitions, basis, cone, boosts and full C2 affine-isometry classification. |
| M02 | closed-stated-mathematics | S6: Global flat proper-time bound/equality, reverse inequality and reunion example. |
| M03 | closed-stated-mathematics | S4; G0: Positive integral derivative/inverse/substitution argument; curved metric version. |
| M04 | closed-stated-mathematics | S4,S7,S8: Observer projection, velocity/mass shell, alternating-tensor reconstruction. |
| M05 | closed-stated-mathematics | G1: Full nondegenerate Koszul construction and compatibility/torsion/uniqueness. |
| M06 | closed-stated-mathematics | G3: Curvature tensoriality, coordinate formula and all algebraic symmetries. |
| M07 | closed-stated-mathematics | G6;G4: Killing current with explicit finite-chain/box flux conditions. |
| M08 | closed-restricted-branch | S7;Q4; baseline M08: Mass-shell low-speed Taylor and uniform compact-region weak/slow equation. General family existence is not inferred. |
| M09 | closed-stated-mathematics | G2: Geodesic IVP/maximal interval, causal norm and local smooth dependence; no completeness. |
| M10 | closed-stated-mathematics | G2: Local tetrad, point-normal and exponential chart constructions via checked inverse/ODE suppliers. |
| M11 | closed-stated-mathematics | G3: Full Lorentz symmetries, second Bianchi and signed double contraction. |
| M12 | closed-stated-mathematics | G4–G5: Compact-support EH variation including determinant, connection/Ricci variation and normalization. |
| M13 | closed-admitted-finite-domains | G4: Volume/density, divergence, oriented finite box/smooth singular chain flux. Arbitrary rough/noncompact/asymptotic domains require additional hypotheses. |
| M14 | closed-exact-stated-interfaces | C1–C2,H0–H1: Contained normal maximum, Jacobi/conjugacy, local C1 maximum before conjugacy, normal index factorization and convex normal neighborhoods. Global cut classification is not asserted by these local hypotheses. |
| M15 | closed-exact-stated-interfaces | C3–C5,H0–H3: Exact global causal objects, full Cauchy/global-hyperbolicity equivalence, limit curves, maximizing curves/continuous time separation and smooth temporal Cauchy splitting. |
| M16 | closed-exact-stated-interfaces | E0–E3,H0–H4: High-regularity local Einstein/selected-matter evolution, initial data/constraints/harmonic gauge, subsidiary propagation/geometric uniqueness, Cauchy restriction and smooth unique MGHD. Dust and global gluing use exact checked external proof suppliers, not mere citations. |
| M17 | closed-exact-stated-interfaces | Q4: Uniform derivative/matter ansatz implies full Einstein stress hierarchy, geodesic/Poisson error bounds and scaled finite-time trajectory convergence. Input-family existence from arbitrary Newtonian initial data is a distinct theorem, not asserted. |
| M18 | closed-exact-stated-interfaces | Q1–Q5: Exact Schwarzschild/FLRW/linearized branches; full Kruskal smooth vacuum model with causal escape horizon; local warped-product Birkhoff proof. No unrestricted global quotient/topology uniqueness or rough-extension maximality asserted. |
| M19 | closed-stated-mathematics | G3: Full pullback geodesic-variation/Jacobi equation with fixed sign. |
| M20 | no-experiment-authored; primary-report-queue-retained | SR12/GR12 original prose: No reported primary measurements or experiment items exist. Authoring quantitative experiments still requires actual primary reports and exact analysis; neither fabricated nor treated as a theorem supplier. |
| M21 | closed-stated-mathematics | G1,G6: Induced dual/tensor derivatives, contraction/permutation and Killing/Lie equivalence. |
| M22 | closed-specified-actions | G5–G6: Compact-support timelike particle and explicit scalar matter actions, Euler equations, Hilbert stress and on-shell conservation. |
| M23 | closed-stated-mathematics | S2,S10: Rapidity/exponential/generators, boost-rotation classification and C2 affine-isometry classification; Rindler inverse. |
| M24 | closed-stated-conditional-claims | S5–S7: Null phase/Doppler/aberration, causal sums/reachability, explicit emitter-rest-speed superluminal relay countermodel, collision mass/thresholds. |
| M25 | closed-exact-stated-interfaces | S10–S11,G2: Observer flow/Frobenius/Fermi–Walker/Born/Rindler/Bell/Sagnac; complete smooth local Herglotz–Noether proof and exact simply-connected rotational global rescaling, irrotational positive-lapse tubular construction. |
| M26 | closed-exact-stated-interfaces | G6–G7,Q2,E3: Selected scalar/dust/interior barotropic fluid conservation, energy conditions, local coupled Einstein evolution and FLRW EOS branches. Exact negative-sound-speed counterexample precludes arbitrary-EOS wellposedness; no free-boundary or shock theorem asserted. |

All stated research interfaces now have complete local arguments or exact checked external proof suppliers; the ledger retains the precise scope limitations. No OPEN flag, inventory entry, source count, hash or publication status is used as a substitute for those proofs. Pure mathematics has exclusively mathematical hypotheses. No production item acceptance is asserted.

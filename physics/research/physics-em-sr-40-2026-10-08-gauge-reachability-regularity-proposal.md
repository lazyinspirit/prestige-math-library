# Gauge reachability branch (b): full neighbourhood regularity proposal

Run `physics-em-sr-40-2026-10-08`. Proposal only while native batches 24/31 are writing. This lane owns branch (b)'s regularity proof, not branch (c)'s sign repair. The JSON stores exact surgical branch substrings and hashes, additional dependencies and a separate earlier pure-mathematical supplier. Native item/manifest, plan, readiness, ledger, task, imports, root mathematics and engine are untouched. Compare the final worker receipt before integration.

## Confirmed gaps

1. An arbitrary interval `I`, including `R` and unbounded half-lines, does not make `closure Omega × closure I` compact. Use compact time subintervals inside an open temporal neighbourhood, with local bounds only.
2. The pinned higher-order Sobolev embedding gives an ambient `C^{m,alpha}` representative at each fixed finite order. The extensions at different orders need not be one common `C∞` function, and this theorem alone does not provide a time-compatible common extension. All mixed derivatives up to the boundary are insufficient evidence for the explicitly promised **single smooth function on an actual neighbourhood** until a smooth extension construction is supplied.
3. The local elliptic theorem's public Dirichlet statement assumes smooth bulk data; it cannot alone define the strategy's operator on every `L2` source. Use the exact earlier `lem-em-lift-specified-dirichlet-existence` with zero lift for weak existence; then apply the existing pinned higher-order Dirichlet theorem at `k=0` for `H2`.
4. The derivative formula omits the fixed harmonic lift at `j=0`: `psi=h+R F`, while `partial_t^j psi=R(partial_t^j F)` for `j≥1`.
5. A smooth continuation away from the physical region is not unique. The gauge generator on `Omega×I` is unique, as the framework's gauge-function definition means; its auxiliary ambient continuation can vary. The surgical wording makes that distinction explicit rather than asserting false uniqueness of outside values.

No promised smoothness, unbounded interval, boundary datum, gauge identity, field equality, axiom qualification or physical scope is dropped.

## Proposed earlier supplier

ID `lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain`; kind lemma; domain mathematics. Home: the existing `em-expanded-analysis-prerequisites` A page, order 310. All direct predecessors are pinned published mathematics, so its local dependency level is 0. Insert immediately after `lem-em-outgoing-spherical-hankel-dtn-bounds`, before `lem-em-rectangular-pec-energy-completeness`, preserving every existing relative order. No new pair or imported snapshot change.

**Statement.** Let `Omega⊂R3` be a bounded smooth graph domain. Choose an open spatial neighbourhood `V` of its compact closure. There exists a fixed real linear spatial extension operator `E_Omega`, determined only by the domain, finite charts and cutoffs, with this parameter property. For every open interval `J` and function `u:Omega×J→R` that is smooth in the interior and whose every mixed derivative has a continuous extension to `closure Omega × J`, the function `E_Omega u` is `C∞` on `R3×J`, equals `u` and all its continuous boundary jets on `closure Omega × J`, and is supported spatially in one fixed compact subset of `V`. For every compact `K⊂J`, integer `m≥0` and `j≥0`,

$$\sup_{t\in K}\|\partial_t^j E_\Omega u(\cdot,t)\|_{C^m(\mathbb R^3)}\le C_m\sup_{t\in K}\|\partial_t^j u(\cdot,t)\|_{C^m(\overline\Omega)}.$$

The `C^m` seminorm is the finite sum of suprema of spatial derivatives through order `m`. The extension commutes with every time derivative; charts and coefficients do not depend on `t`. No uniform bound over all of an unbounded `J` is assumed. Vector-valued inputs of finite dimension are extended componentwise. This construction adds no choice principle: a finite atlas can be selected from the cover of all admissible chart patches, finite cutoffs are supplied by the published finite-partition/cutoff lemmas, and the infinite coefficient sequence is defined explicitly below. The consuming elliptic/Sobolev argument retains its already-declared AC assumptions.

## Complete coefficient, convergence and gluing proof

**1. Explicit coefficients; no unproved moment lemma.** Put `b_k=−2^k`, `k=0,1,...`. For `N≥k` define

$$a_k^{(N)}=\prod_{\substack{0\le j\le N\\j\ne k}}\frac{1-b_j}{b_k-b_j},\qquad a_k=\lim_{N\to\infty}a_k^{(N)}.$$

The factors for `j<k` have sign negative, those for `j>k` positive; the sign is `(-1)^k`. For every finite index set, `prod(1+2^{-j})≤6`: the factors `j=0,1` give 3, and for the tail `j≥2`, the sum of `2^{-j}` is at most `1/2`, while the elementary induction `prod(1+x_j)≤1/(1−sum x_j)` bounds that tail by 2. Similarly `prod_{l=1}^M(1−2^{-l})≥1/4`: separate the first factor `1/2`, and use `prod(1−x_j)≥1−sum x_j≥1/2` on `l≥2`. The geometric-series supplier gives the stated sums, including their starting indices.

For `j<k` the absolute product is

$$2^{-k(k+1)/2}\frac{\prod_{j<k}(1+2^{-j})}{\prod_{l=1}^{k}(1-2^{-l})};$$

for `j>k` it is `prod_{j=k+1}^N(1+2^{-j})/prod_{l=1}^{N-k}(1−2^{-l})`. Thus

$$|a_k^{(N)}|\le576\,2^{-k(k+1)/2}\qquad(N\ge k).$$

At fixed `k`, the positive absolute value increases with `N`, since every new tail factor is greater than one, and it is bounded by this displayed constant. The published real monotone convergence theorem gives the limit `a_k`, with the same bound and sign. This defines every coefficient without selecting unspecified sequences.

For each integer `r≥0`, finite interpolation gives `sum_{k=0}^N a_k^{(N)} b_k^r=1` when `N≥r`: the polynomial

$$z^r-\sum_{k=0}^N b_k^r\prod_{\substack{0\le j\le N\\j\ne k}}\frac{z-b_j}{b_k-b_j}$$

has degree at most `N` and vanishes at the `N+1` distinct nodes `b_0,...,b_N`, so is zero by the exact published real-polynomial root bound; evaluate at `z=1`. To pass to the limit, the bound above gives `|a_k^{(N)} b_k^r|≤576·2^{-k(k+1)/2+kr}` uniformly in `N`. For `k≥2r+1` this is at most `576·2^{-k}`, whose tail tends to zero. First cut the sum at a fixed `M`, pass to the limit in those finitely many coefficients, and then let `M` increase. This proves both

$$\sum_{k=0}^{\infty}a_k b_k^r=1,\qquad\sum_{k=0}^{\infty}|a_k|\,|b_k|^r<\infty\quad(r\ge0).$$

No original Seeley coefficient existence assertion is used as an unproved prerequisite.

**2. One flattened patch, with arbitrary parameters.** Write a smooth boundary patch as `(y,s)`, `s>0` inside the domain. A localized input `w(y,s,t)` has spatial support compactly inside the ambient chart, separated from its artificial edges, and every mixed derivative extends continuously to `s=0`. Extend it by zero at the artificial positive-side edges to the half-space. Choose a fixed smooth real normal cutoff `rho` that equals 1 near 0 and vanishes for `s≥delta/2`, with `delta` small enough that all sampled positive collar points remain in the chart. Define

$$\mathcal Ew(y,s,t)=w(y,s,t)\ (s\ge0),\qquad\mathcal Ew(y,s,t)=\sum_{k=0}^{\infty}a_k\rho(b_ks)w(y,b_ks,t)\ (s<0).$$

For fixed negative `s`, the sum is locally finite because `b_k s=2^k|s|` eventually exceeds the cutoff support. It is therefore smooth off `s=0`. For any normal order `r`, tangential multi-index `alpha`, time order `j`, and compact parameter/tangential set, its termwise derivative for `s<0` is

$$a_k b_k^r\,[\partial_z^r\partial_y^\alpha\partial_t^j(\rho(z)w(y,z,t))]_{z=b_ks}.$$

On the fixed compact collar and a compact `K⊂J`, every input derivative in this formula is bounded; the supremum of the sum is bounded by a finite cutoff-dependent constant times `sum|a_k||b_k|^r`. The bounds hold locally uniformly up to `s=0`, with the **same** compact time set `K`; only the normal spatial argument is sampled.

As `s↑0`, for each fixed term the normal cutoff is identically one and all its positive-order derivatives vanish. The derivative therefore tends to `a_k b_k^r partial_s^r partial_y^alpha partial_t^j w(y,0,t)`. The finite-head/uniform-tail argument using the weighted absolute sum proves uniform convergence of the boundary limit on compact `(y,t)` sets. The moment identity then makes that limit exactly the input boundary derivative. This establishes matching continuous derivatives of every mixed order; no derivative of an infinite nonuniformly convergent series is assumed at the boundary.

**3. Matching jets imply actual joint smoothness.** For a function glued from the two sides, matching values give continuity. If the side first partial derivatives extend continuously and agree, the normal coordinate-segment FTC, on either side and up to `s=0`, proves the derivative at `s=0` equals their common limit. For tangential or time segments at `s=0`, first write the coordinate-segment FTC at `s≠0`, then let `s→0`; uniform convergence on the compact segment passes the integral to the common continuous boundary derivative. FTC again gives that tangential/time derivative on `s=0`. Thus the glued function is `C1` jointly. Apply the same argument successively to the already-matched derivatives of orders 1,2,... to obtain `C∞` on the ambient patch × `J`. The input itself obeys those boundary segment identities by the same limit from its positive side. This is a complete smooth-gluing argument, not a reference to a Whitney extension theorem.

The derivative bound at total spatial order `m` uses only input derivatives through `m`, with `sum|a_k|2^{km}` finite and the fixed cutoff derivatives through `m`. The operator is linear and does not change the time argument, so the time-commutation identity and the stated local seminorm estimate follow.

**4. Finite chart gluing on the fixed smooth domain.** Choose finitely many shrunk smooth graph charts covering the compact boundary, an interior patch, and a finite smooth ambient partition equal to one near the domain closure. Localize `u` by these fixed spatial cutoffs. The interior piece is supported away from the physical boundary and is extended by zero, preserving smoothness. Each boundary piece is pulled through its smooth chart and extended by the preceding formula. Choose a fixed outer chart cutoff equal to one on both the positive localized support and the small negative support created by the extension, with compact support inside the larger chart; multiply before pulling back. This makes each piece smooth across its artificial edges when extended by zero in ambient space. Such collar sizes and cutoffs are available by shrinking the finite compact patches. The extension's tangential support never leaves that of the localized piece, and its negative normal support stays within `|s|<delta/2`, so the claimed outer support control is genuine.

Pullback is smooth by repeated ordinary chain rule with chart derivatives bounded at each fixed order on those compact supports. Add the finitely many pieces. On the domain their sum is `u` by the partition identity; all boundary jets agree by continuity from the interior. Each support lies in a fixed compact subset of the prescribed `V`, so their finite union does too. The charts, partitions and coefficient sequence are independent of time. This proves the claimed single parameter-preserving operator and its `C^m` seminorm bounds; it introduces no temporal patch choices or global bounds on unbounded intervals.

## Surgical branch (b) replacement route

Let `N⊂R3×R` be the actual open neighbourhood on which the given potentials are smooth. Spatial compactness shows

$$J_0:=\{t:\overline\Omega\times\{t\}\subset N\}$$

is open: cover the spatial fibre at a fixed time by finitely many product neighbourhoods and take the minimum of their positive time widths. It contains `closure I`. If `I` is nonempty, take the interval component `J` of `J0` containing its connected closure; it contains all of `closure I`, even for an unbounded interval. If `I=R`, then `J=R`. For empty `I` the claim on the empty physical region is vacuous. For every compact time interval `K⊂J`, `closure Omega×K` is compact and lies inside `N`; all needed mixed derivatives are bounded and uniformly continuous there. Use slightly enlarged compact `K` when taking difference quotients. No compactness or boundedness of the entire `closure I` is invoked.

Keep the harmonic lift `h` of the fixed smooth datum `g`, from the smooth-data elliptic theorem. Define the full zero-trace operator `R` on `L2` by the earlier lift-specified weak solver with lift zero and constant coefficient `epsilon0 Id`, not by extending a smooth-data theorem's statement. The energy identity and corrected Poincaré estimate give `||RF||2≤(2L)^2 epsilon0^{-1}||F||2`. The pinned higher-order zero-Dirichlet theorem applies to `−epsilon0 Delta`, with its constant smooth coefficients and bounded smooth domain; at order `k=0` it gives `H2`, and at every `k` it gives

$$\|RF\|_{H^{k+2}}\le C_{k,\Omega,\varepsilon_0}\|F\|_{H^k}.$$

The coefficient dependence includes `epsilon0`; no time enters the operator. Put `F_t=epsilon0 div A(·,t)` and `psi_t=h+R F_t` for all `t∈J`. Then `−epsilon0 Delta psi_t=epsilon0 div A`, so `div(A+grad psi)=0`, and its trace is `g`.

For each `k`, compact-time bounds and coordinate FTC show that `t→F_t` is `C∞` into `H^k`: apply FTC to every spatial derivative through `k`, and use uniform continuity on the compact spacetime patch to make the difference-quotient error tend uniformly to zero, hence in the finite-component Sobolev norm. The bounded linear operator `R` then gives `psi=h+RF` and `partial_t^j psi=R partial_t^j F` for `j≥1`, continuously into every `H^m`. The higher-order Sobolev embedding, using the pinned smooth-domain integer-order extension theorem to discharge its extension-domain hypothesis, makes every spatial derivative of every temporal derivative continuous up to the boundary, locally uniformly in time. Representatives and all their jets are consistent: they agree on the interior as representatives of the same weak derivatives, and their continuous extensions agree on the closure. Coordinate FTC in space/time identifies them with the classical mixed derivatives.

Now apply the new fixed spatial `E_Omega` to this one jointly smooth-up-to-boundary `psi` on `closure Omega×J`. It yields an actual `C∞` function on `R3×J`, an open neighbourhood of `closure Omega×closure I`, equal to the solved generator on the physical region and boundary. Intersect that neighbourhood with `N` for the transformed potentials. Gauge invariance supplies equality of physical fields. Zero-trace harmonic uniqueness gives uniqueness of the generator restricted to `Omega×I`; it never claims uniqueness of arbitrary outside continuation. The existing branch (b) AC/Countable-Choice qualifications from variational/Sobolev suppliers are retained.

## Sources and exact limits

The pinned elliptic regularity and Sobolev statements were read in full. Hunter's cached authoritative full-text Theorem 4.31 and Corollary 4.32, printed pp116–117, were read at text lines 8825–8838: they support the finite-order estimate and smooth-up-to-boundary conclusion, not an assumed common parameter-compatible ambient continuation. The original Seeley 1964 AMS PDF and one MIT mirror returned HTTP403 in this lane; no original-text reading is claimed.

Successfully retrieved `https://arxiv.org/pdf/2002.05125`, Hanusch, *A Ck-Seeley-Extension-Theorem for Bastiani’s Differential Calculus*, arXiv:2002.05125v2 (23 February 2023), 29 PDF pages. Read the actual Theorem 1, pp10–11, the finite-order remarks/parameter setting, construction (24)–(26), pp19–22, and derivative matching in Lemma 6, pp23–25. These passages explicitly describe fixed coefficients with every moment and weighted summability, locally finite reflection sums, and all-derivative matching with parameters. The retrieved paper attributes coefficient existence to Seeley; this proposal proves the coefficients/moments itself instead of adopting that citation as an unmet premise. The proof above is the restricted finite-dimensional local supplier, not a claim to prove Hanusch's infinite-dimensional theorem or to have read all 29 pages.

No known mathematical gap remains in this restricted construction at scaffold-strategy level after the local recheck. It still requires parent/root independent review, native same-pair integration after writers drain, source harvest and full ordinary authoring/review gates. No acceptance, readiness, publication or full proof audit is invented.

## Restored design scope: boundary families and compatible Neumann data

The preceding fixed-Dirichlet discussion is a special case, not the final proposed scope. The binding K7 source says literally: “B4–B7 solve spatial Coulomb-gauge Poisson with specified admissible boundary data,” followed by “with residual Wχ=0/Δχ=0 freedom and no claim that arbitrary incompatible χ boundary/initial restrictions can be met.” The proposed inventory title is “Gauge fixing under specified boundary/initial data,” with strategy “M09 wave solvability or M12 elliptic for Coulomb; compatibility and residual data.” Neither imposes time-independent Dirichlet data. The worker's narrower restriction was not an owner direction. The proposal therefore restores smooth time-dependent Dirichlet families and smooth compatible Neumann flux families, with componentwise zero-mean normalization and the owed spatial-harmonic residual freedom.

This requires a second earlier mathematical supplier, `lem-em-parameter-dependent-smooth-poisson-boundary-solvers`, on the same order-310 A page, after `lem-em-weak-neumann-and-transmission-existence` and before `lem-em-smooth-domain-elliptic-regularity`. Its local level is 4 from the existing level-3 weak Neumann lemma. No later EM physical item or later elliptic theorem is a dependency of this earlier supplier. The published higher-order boundary estimate is **Dirichlet-only**; the following natural-test estimate supplies the genuinely missing Neumann estimate rather than renaming that theorem.

**Second supplier statement.** Assume AC and Countable Choice carried by the variational/Sobolev suppliers. Let `Omega` be a bounded smooth graph domain in `R3`, `epsilon>0` constant and `J` an open interval. Let the bulk datum `f` be jointly smooth up to `closure Omega×J` in the all-mixed-derivative sense of the first supplier, and let boundary families `g_D`, `kappa` be smooth in a fixed finite boundary atlas × `J`. Then the Dirichlet problem `−epsilon Delta u=f`, `u|boundary=g_D` has a unique solution on `Omega×J`; it has a single smooth ambient continuation near the closed spatial domain × `J`. The Neumann problem `−epsilon Delta u=f`, `epsilon partial_nu u=kappa` has such a solution precisely when

$$\int_{\Omega_j}f(\cdot,t)+\int_{\partial\Omega_j}\kappa(\cdot,t)=0\quad\text{for each component and every }t\in J.$$

It is unique modulo a separately chosen spatial constant on each component at each time. The normalization `integral_Omega_j u(·,t)=0` gives a unique smooth family. Both solution operations are linear in their data; time differentiation commutes with them. Smoothness and estimates are local in compact time subintervals, with no uniform-in-`J` requirement. The smooth ambient continuations are auxiliary and are not unique off the closed physical spatial region.

**Fixed boundary lifts.** Use a finite boundary partition, graph coordinates `r=x3−h(y)`, with the domain on `r<0`, outward normal `nu=(-grad h,1)/sqrt(1+|grad h|²)`, and a fixed normal cutoff equal to one near 0. On a localized boundary datum `g_j(y,t)`, the Dirichlet lift is `rho(r)g_j(y,t)` with a larger fixed chart cutoff. For an outward conormal datum `kappa_j`, the Neumann lift is

$$L_N\kappa_j(y,r,t)=\frac{r\rho(r)\kappa_j(y,t)}{\epsilon\sqrt{1+|\nabla h(y)|^2}},$$

again with a fixed larger chart cutoff equal to one near the datum support. At `r=0`, the terms from differentiating the coefficient or cutoff vanish because of the factor `r`, while `partial_nu r=sqrt(1+|grad h|²)`; hence `epsilon partial_nu L_N kappa_j=kappa_j`. Add the finite chart pieces. The partition's boundary sum is one, so both lifts have the exact required datum. They are linear, independent of time, smooth in an actual spatial collar × `J`, and their spatial `H^{k+2}` norms are bounded by constants times finite `C^{k+2}` boundary seminorms. Choosing higher seminorm orders is allowed; no sharp boundary Sobolev norm is asserted. For Dirichlet, subtract the lift and apply the earlier zero-lift weak Dirichlet solver plus the exact published higher-order Dirichlet estimate to the source `f+epsilon Delta L_Dg_D`.

**Neumann weak existence and H1 bound.** The earlier weak Neumann lemma accepts the bulk `L2` datum and the bounded boundary trace functional, and proves necessity/sufficiency of componentwise compatibility. Smooth boundary `kappa` defines that bounded functional by Cauchy–Schwarz and the exact published `H1→L2(boundary)` trace theorem. Mean-zero coercivity on each component gives

$$\|u\|_{H^1}\le C_{\Omega,\epsilon}\bigl(\|f\|_2+\|\kappa\|_{L^2(\partial\Omega)}\bigr)$$

for the normalized solution, by testing against it and absorbing the gradient norm. A bounded smooth graph domain has only finitely many components: every bounded open component has boundary in the domain boundary; a finite cover by connected one-sided graph patches meets only finitely many components, and every component meets such a patch. Thus all normalizations and lift/estimate sums are finite. After subtracting `H=L_N kappa`, the residual `w=u−H` has homogeneous Neumann flux and source `f+epsilon Delta H`; its mean is the negative mean of `H`. The smooth first Green identity verifies the weak lift subtraction, and the divergence theorem verifies that its residual bulk integral is zero under the original compatibility. A constant normalization does not affect the flux or elliptic equation.

**Natural-boundary H2 estimate; explicit source terms.** Flatten the fixed smooth boundary and take a localized weak solution `z∈H1` supported away from artificial chart edges, whose weak equation, for supported `H1` tests including nonzero boundary trace, is

$$\int A_{ij}\partial_jz\partial_iv=\int p v+\int G_i\partial_iv,\quad p\in L^2,\ G\in H^1.$$

The smooth symmetric uniformly positive transformed `A` is the ordinary Jacobian/metric transform of the constant scalar operator. The original homogeneous-flux problem has `G=0`; localization by a spatial cutoff `eta` changes the scalar datum to `eta p−A grad z·grad eta+G·grad eta` and the vector datum to `eta G+z A grad eta`, still respectively `L2` and `H1`. These exact terms account for natural flux under localization; no false zero-trace condition is imposed.

For a tangential direction `k`, put `w_h=delta_h^k z` and test with `v=−delta_{−h}^k(eta² w_h)`. This is a supported `H1` test, allowed by the natural variational formulation; it need not vanish at the physical boundary. The published quotient integration-by-parts/product/weak-commutation identities give principal term `integral eta² A(y+h) grad w_h·grad w_h≥alpha||eta grad w_h||²`. The coefficient/cutoff remainders are exactly those of the usual quotient expansion and are bounded by `C||z||H1 (||eta grad w_h||2+||w_h||2)`, with `||w_h||2≤C||z||H1` and `||delta_h A||infinity≤||partial_k A||infinity`. The scalar datum contributes at most `C||p||2(||eta grad w_h||2+||w_h||2)` because the derivative quotient stays on the test, not on `p`. Discrete integration by parts moves the quotient in the vector datum term to `G`, whose contribution is

$$\left|\int\delta_h^kG\cdot\nabla(\eta^2w_h)\right|\le C\|G\|_{H^1}(\|\eta\nabla w_h\|_2+\|w_h\|_2).$$

Cauchy–Schwarz and Young absorption give a uniform bound `||eta grad delta_h^k z||2≤C(||p||2+||G||H1+||z||H1)`. Pass to test pairings; the quotient's limiting derivative is a bounded functional on the `L2` closure of compact tests, and Hilbert Riesz supplies its `L2` representative. This provides all second derivatives with a tangential factor, including mixed ones, without a weak-subsequence assumption. The distributional equation is `−div(A grad z)=p−div G`; therefore the normal derivative has the corrected identity

$$A_{33}\partial_{33}z=-p+\operatorname{div}G-\sum_{(i,j)\ne(3,3)}A_{ij}\partial_{ij}z-\sum_{i,j}(\partial_iA_{ij})\partial_jz.$$

The right side is `L2` and `A33≥alpha>0`, giving the remaining derivative. Interior patches permit all quotient directions. Finite cover and the bounded chart pullbacks give the global natural-boundary `H2` estimate with the displayed data norms and `||w||H1`.

**Every higher order, without pretending Neumann derivatives keep zero flux.** If `w∈H^{k+1}` and its smooth homogeneous-Neumann equation has datum in `H^k`, localize as above; the localized scalar datum lies in `H^k`, and its vector datum lies in `H^{k+1}`. Tangentially differentiate by a multi-index `alpha` of order `k`. The resulting weak identity for `D_tan^alpha z∈H1` keeps principal matrix `A`, with scalar datum `D_tan^alpha p∈L2` and vector datum

$$D_{\rm tan}^\alpha G-\sum_{0<\beta\le\alpha}{\alpha\choose\beta}(D_{\rm tan}^\beta A)\nabla D_{\rm tan}^{\alpha-\beta}z.$$

This vector datum is `H1`: every commutator has at least one coefficient derivative, so it uses derivatives of `z` through at most `k+1`, all available from the induction hypothesis. The coefficient derivatives needed are bounded on the fixed smooth patch. The tangentially differentiated flux need not be zero: it is represented by these vector terms in the **natural weak identity**. The H2 estimate just proved applies to that identity. Tangential testing and differentiation are justified by supported smooth-up-to-boundary approximation; the published half-space extension and whole-space mollification/density interfaces provide the needed `H1` approximants without falsely using `H0^1` density.

This controls order-`k+2` derivatives with at most two normal factors. Expand the strong elliptic equation on the interior of each half-patch, differentiate at total order `k`, and recover successively target derivatives with three, four, ... normal factors by solving for the sole `A33` principal term. Every other derivative of order `k+2` has fewer normal factors; derivatives landing on coefficients use `z` through at most `k+1`. The source derivatives are `L2`. The identities represent global weak derivatives on the open half-patch because every compact test support lies in its interior. Finite cover closes the induction. Thus, for smooth data,

$$\|u\|_{H^{k+2}}\le C_k\bigl(\|f\|_{H^k}+\|\kappa\|_{C^{k+2}(\partial\Omega)}+\|u\|_{H^1}\bigr),$$

where constants include the fixed geometry and `epsilon`. This sufficient, nonsharp estimate is complete for smooth parameter families and does not invoke a nonexistent published Neumann higher-order theorem.

**Strong equation and exact Neumann trace after regularity.** Once the estimates give all spatial orders, Sobolev embedding yields a $C^2$ representative on the closure. The weak equation tested against compact interior smooth functions makes the continuous residual $-\epsilon\Delta u-f$ vanish pointwise: if it had a nonzero value, continuity and a nonnegative bump supported in a small interior ball would give a nonzero test pairing. Apply the first Green identity to the smooth representative and tests obtained from the fixed smooth Dirichlet boundary lift. The weak Neumann identity then gives $\int_{\partial\Omega}(\epsilon\partial_\nu u-\kappa)q=0$ for every smooth boundary test $q$. If that continuous boundary difference were nonzero at some point, a nonnegative chart bump supported where it keeps one strict sign would produce a nonzero boundary integral (the smooth chart area Jacobian is positive). Thus the classical conormal equality is exact. This argument recovers the strong boundary condition from the natural weak formulation rather than presupposing it.

**Joint smoothness and the actual neighbourhood.** Differences and time derivatives of compatible data stay in the same compatible linear data space. Weak H1 continuity follows from the energy estimate. Applying the higher-order estimate to a difference quotient minus the solution for the derivative data makes that error tend to zero in every `H^m` on compact time patches, since bulk derivatives converge in `H^k`, boundary derivatives converge in the finite `C^{k+2}` seminorm, and the H1 error tends to zero. Induction gives all time derivatives as solutions for the differentiated data. Higher-order Sobolev embedding gives one consistent family of all mixed boundary jets; the first new parameter-preserving extension lemma then supplies a single smooth ambient continuation. Dirichlet families follow the same argument with the fixed Dirichlet lift and zero-trace operator. This proves both parameter branches of the second supplier.

**Application to the physical interval and endpoint compatibility.** Choose an open time interval `J` covering `closure I` on which the input potentials and the boundary family are defined, using spatial and boundary compactness fibre by fibre. For Neumann data, compatibility is required only on the promised physical interval `I`. To apply the second lemma on an open `J`, put `c_j(t)=integral_Omega_j F_t+integral_boundary_j kappa_t`, smooth in `J`, and define the auxiliary bulk extension `Fhat_t=F_t−c_j(t)/|Omega_j|` on each component. It is compatible for all `t∈J` and equals `F_t` on every `t∈I`. Finite smooth graph components have disjoint compact closures (a shared boundary point would violate the single connected one-sided graph patch), so these piecewise constants have smooth spatial neighbourhood representatives. Their time dependence is smooth. The second lemma applied to `(Fhat,kappa)` supplies a smooth normalized generator on an actual neighbourhood. It solves the required Coulomb equation with the original `F=epsilon0 div A` and the original flux exactly on `Omega×I`; no elliptic equation outside the physical time interval is promised. This also covers included/excluded finite endpoints, singleton intervals and unbounded intervals without assuming compatibility outside the stated domain. Dirichlet has no compatibility restriction and needs no such auxiliary correction.

The restored branch (b) therefore admits either a smooth parameter-dependent Dirichlet family or a smooth componentwise-compatible outward conormal family, with normalized Neumann uniqueness. For any two Coulomb-gauge generators, their difference is spatially harmonic at each time. Equal Dirichlet data force zero difference; equal Neumann data allow componentwise time-dependent constants until the zero-mean normalization is imposed. These are exactly the stated Δχ=0 residual obligations and do not impose arbitrary incompatible initial or boundary restrictions.

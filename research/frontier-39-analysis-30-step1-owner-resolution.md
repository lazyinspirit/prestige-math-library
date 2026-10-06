# Step 1 owner resolution — frontier-39-analysis-30

The owner requested: “Build all planned pairs in PDE, Lie theory, and Fourier
analysis, there should be 30 of them.” The approved run remains exactly those 30
pairs (16 PDE, 5 Lie theory, 9 Fourier analysis). This resolution keeps every
planned claim and pair; it reconciles prerequisites and proof plans within those
pages. The original Alpha review is preserved at
`research/frontier-39-analysis-30-alpha-step1-drift-initial.md`.

## Resolved findings

1. **PDE-17 / PDE-18.** Move the existing
   `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`
   design row from PDE-17 to PDE-18, after higher-order boundary regularity and
   Sobolev embedding. Keep its statement, ID, source and proof route. This
   removes the forward PDE-18 dependency without changing the claim.

2. **Hamilton–Jacobi.** Add the published
   `convex-and-semicontinuous-functions-on-rn` page as a prerequisite of the
   Hamilton–Jacobi page. Insert
   `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` after the
   Legendre-transform definition and before Hopf–Lax. For finite-valued convex
   $H$ on all of $\mathbb R^n$, define its extended-real conjugate $L$; the
   defining supremum gives one inequality, and an available subgradient at each
   $p$ gives the reverse inequality. Neither superlinearity nor differentiability
   is needed for biconjugacy; the later Hopf–Lax results retain their own
   superlinearity assumptions. The plan cites Tran, Theorem 2.13(ii) and
   Remark 2.14, pp. 62–63.

3. **Lie cohomology / Kostant.** Add the published
   `compact-lie-groups-maximal-tori-and-peter-weyl-theory` page as an earlier
   prerequisite of RL-11. The local metric construction uses its finite
   dimensional unitarizability result; integration of the compact-form Lie
   algebra representation uses DG-29's already required Lie second fundamental
   theorem. RL-11 keeps its planned Laplacian and one-dimensional harmonic-space
   claims. The plan now states the Hodge setup, normalized CE anticommutator
   identities, equality case and dependency order as explicit authoring
   obligations. The cited OWTU, Woit, and Goodman–Wallach sources support the
   cohomological Casimir and equality arguments, but not the CE Laplacian
   identity itself. No completion or independent audit of that item proof is
   claimed here.

4. **Bochner / LCA.** Keep the published Gelfand page as an earlier general
   Banach-algebra prerequisite. FR-16's design now includes local LCA proofs for
   the $L^1(G)$ convolution algebra, translation continuity and approximate
   identities, multiplicative-functional classification, compact-open topology,
   and scalar unitization/spectrum. It also specifies the positive transform-core
   estimate $|L_\phi(f)|\le\phi(0)\|\widehat f\|_\infty$ and its proof through
   integrated positivity, Cauchy–Schwarz and the Banach-algebra spectral radius.
   The design does not rely on the external LCA remark/example, the later RG-19
   page, or Pontryagin biduality. Loomis supplies the stated local proof routes;
   Körner's cited sections are recorded as theorem statements and exercises,
   not complete proofs. Inversion and Haar normalization remain explicit
   authoring obligations in the track.

5. **PDE-14 / PDE-15 Poincaré–Wirtinger handoff.** Keep the original
   `thm-poincare-wirtinger-on-bounded-connected-extension-domains` statement
   and ID, but place it on PDE-15 after the Rellich compactness item it uses.
   Prove it by contradiction: normalize a mean-zero sequence to unit $L^p$ norm
   with gradients tending to zero, extract a strongly convergent Rellich
   subsequence, pass mean and norm to the limit, and apply the published
   componentwise zero-gradient constancy theorem. Connectedness forces the
   limit to be the zero constant, contradicting its norm. PDE-14 retains its
   separately proved John-domain and convex-domain versions. This is still the
   same 30-pair scope.

6. **Pontryagin page proof gaps.** The bump lemma now has an inline
   Plancherel construction: inverse transforms of indicators of $V$ and
   $\gamma_0^{-1}V$ give a nonnegative Fourier overlap supported in the chosen
   compact neighborhood. The independent range-density proof uses FR-16's
   isometry and Fourier--Stieltjes uniqueness; full Plancherel follows, then
   the bump, then biduality uses the bump for exact vanishing. Resolve the
   three compact-generation/structure rows from the
   literature-derived Hewitt--Ross Theorem 9.8 route: apply the classification
   $\mathbb R^m\times\mathbb Z^n\times K$, take the open preimage of
   $\mathbb R^m\times\{0\}\times K$, and use the no-infinite-index hypothesis
   to eliminate $\mathbb Z^n$. The exact construction is in the batch-27
   manifest. K. A. Ross's full article was fetch-verified and read; its Theorem
   3 proof, p. 3, explicitly quotes HR 9.8. The primary HR proof was not
   accessible, so no claim is made that it was read; this follows the plan's
   literature-derived proof provenance. All four owner-held readiness records
   are now `ready`, with no new page or pair.

7. **Batch 27 Haar supplier ID.** A whole-run content-policy check from batch 12 identified a typo in the bump lemma's dependency: `thm-unique-left-haar-measure-up-to-scale` did not name a published item. The manifest now uses the existing ID `thm-uniqueness-of-left-haar-measure-up-to-scale`, which supplies the Haar uniqueness used to compare the transported dual measure with the pushforward measure. The proof, statement, and pair scope are unchanged; its owner readiness record was refreshed against the corrected dependency list.


8. **Odd-wave shell support.** Batch 3's independent PDE review found that batch 2's `thm-support-dichotomy-for-free-wave-fundamental-solutions` incorrectly said pointwise agreement of data on the sphere determines the solution value. Kirchhoff's formula uses the normal derivative there. The batch-2 statement and strategy now assert support of the data-to-value distribution kernels on the sphere and conclude equality when data agree on an open neighbourhood of the sphere. The existing counterexample and source support this correction. The theorem ID, pair scope, dependencies, and odd/even support dichotomy are unchanged; its readiness record was refreshed. The direct two-dimensional example consumer was reviewed and its wording was clarified to refer to the sphere-supported kernel; its positive interior integral is unchanged, and its readiness record was refreshed.

The planning table in `research/frontier-39-analysis-30-planning-notes.md` is the category-count source of truth: 16 PDE, 5 Lie theory, and 9 Fourier-analysis pairs, 30 total.


9. **LCA structure statements and prerequisites.** The batch-27 compactly-generated splitting lemma now explicitly assumes that $H$ is locally compact Hausdorff abelian, as required by Hewitt--Ross 9.8; the open-subgroup and principal-structure statements explicitly cite Hausdorffness. Added the published Hausdorff-space definition to those three dependency lists and removed the principal theorem's unused compact-open-subgroup dependency. The local arguments and conclusions are unchanged; all three readiness records were refreshed.

## Global plan validation repair

The Step 1 `validate-plan` gate also exposed an existing undeclared prerequisite
on `etale-covers-and-the-etale-fundamental-group`. Its tame DVR lemma uses
norm-equivalence from `decomposition-inertia-and-frobenius` (order 365.915); the
consumer is at order 911. Added that single backward `requires` edge. This
global plan-integrity repair does not add the page to the run scope.

`research/plan-spec.json` passes `tools/validate-plan.mjs` after these changes.
The current Step 1 drift report records the resolutions above; it does not
certify proofs that are still owed during authoring.


10. **Schauder endpoint counterexample.** Batch 13's initial notes flagged that the endpoint sharpness item cited Wang/Burch but did not provide a concrete compactly supported Lipschitz witness. Added an explicit two-dimensional source $f(r,\theta)=\chi(r)r\cos(3\theta)$ and local particular solution $p=-\frac16r^3\log r\cos(3\theta)$. Its Hessian has a $-x\log x$ term; the harmonic remainder is smooth by the published harmonic real-analyticity result. Added that dependency and refreshed the item's owner readiness record. The counterexample no longer relies on an inaccessible Burch proof or an unconstructed dyadic example.


11. PDE-19 Schauder and W2p escalations. Repaired the batch-13 Newtonian
cancellation by subtracting only on the unit ball and leaving the far-field
integral unsubtracted; corrected the kernel-difference geometry. Restored the
R^alpha factor and beta dependence in Holder interpolation, put rho^2 on the
freezing error, required b,c in C^{0,alpha}, and stated the scale-normalized
lower-order coefficient bounds in the interior Schauder estimate. Corrected
boundary flattening to use the actual graph-patch image and inverse-Jacobian
coefficient transform; retained the cutoff drift factor M_b/R. Replaced the
divergence-form counterexample with a classical nondivergence example whose
Hessian is not alpha-Holder, corrected the local Poisson W2p proof for every p,
and made the lower-order radius dependence explicit in the interior estimate.
The corner example now distinguishes weak regularity from the a priori
estimate and integrates on the region where the cutoff equals one. The Sobolev
embedding corollary names a W2p extension domain and gives an endpoint witness.

12. Weak global Schauder base point. Added one local helper theorem inside the
   existing PDE-19 A page; the total run remains 30 pairs. The weak W2p proof uses
   Haller-Dintelmann, Section 19, Theorem 19.7 (printed pp. 148-155) for strong
   shifted Dirichlet solvability on bounded C2 domains (printed pp. 148-151;
   PDF pp. 152-155). The helper states the finite range $n<p<\infty$. Starting at u in Lq0 from
   H1_0 Sobolev embedding, set h=f+lambda u, solve (lambda-Delta)z=h at each
   capped exponent, and identify z=u by energy uniqueness. For each intermediate
   exponent $q_i>2$, $W^{1,q_i}_0$ approximants from $C_c^\infty$ converge in
   $W^{1,2}$ on bounded $\Omega$, so the strong resolvent solution lies in
   $H^1_0$ and the energy test is valid. Finite
   Sobolev bootstrapping reaches the requested p before the W2p a priori estimate
   is applied. This avoids Villavert Theorem 3.9's unsupported arbitrary-domain
claim and Schikorra's smooth-boundary-only weak result. The weak Schauder proof
now uses a bounded Holder extension before mollification and the quadratic
barrier bound R^2 norm(F_epsilon)_infinity/(2n). The owner also corrected the
continuity-method contradiction by applying the uniform Schauder estimate
after compactness and made the sign transfer from -Delta to Delta explicit.
Haller-Dintelmann's complete PDF is now in the coverage record and
fetch-verified.

13. Resolved the covered-but-artifact-incomplete Step 1 findings for batches 13
   and 27. The 11:41Z blocker packet did not point to missing manifests or
   coverage: item readiness hashes were stale after owner edits. Refreshed stale
   ready records across completed batches 13, 14, 15 and 27, preserving owner
   flags and using current item dependencies; after the final finite-p wording
   correction, four affected batch-13 records were refreshed again. Targeted
   checks report batch 13 at 30/30 and batch 27 at 23/23 ready, with matching
   dependency levels. The owner retry was armed at 11:53Z while batch 16 was
   still active; the 11:57Z event snapshot has no batch-17 dispatch yet. The
   generated `status.md` still reflects its 11:42Z snapshot. The full Step 1
   gate has not passed; batches 17-20 still have empty scaffold inventories.

14. Resolved the batch-27 biduality density gap with an owner-approved in-page
    order change. The transform-range lemma now proves density from the FR-16
    isometry and Fourier--Stieltjes uniqueness, with finite-regular-measure
    handling and $C_c$ support details explicit. The full Plancherel theorem
    follows from its closed isometric range. The bump proof now uses inverse
    $L^2$ transforms before biduality, and biduality applies that bump to obtain
    exact vanishing on the evaluation image. The prior sign correction to
    $h(-x)$/$f(-x)$ is retained as historical evidence; those formulas are no
    longer used in the current strategies. No pair or page scope changed. The
    three HR 9.8 structure rows explicitly assume AC+DC as a conservative
    basis; preserve the Ross quotation provenance and make no minimality claim.

15. Added a detailed owner proof route for the Lie cohomology Laplacian pair
    (RL-11, batch 25) for Step 3. With DG-29's CE signs, $A=\sum_a\epsilon_a\pi(e_a)$,
    $D=-\tfrac12\sum c_{ab}^c\epsilon_a\epsilon_b\iota_c$, and
    $D^*=-\tfrac12\sum\overline{c_{ab}^c}\epsilon_c\iota_b\iota_a$;
    the adjoint reverses order and conjugates the coefficients. The proof
    must expand both anticommutators, cancel the two off-diagonal root-action
    terms against $\{A,D^*\}$ and $\{D,A^*\}$, and use the exact compact
    conjugation brackets. For $\{D,D^*\}$, normal ordering cancels degree-six
    terms; Jacobi paired with the Killing form cancels off-diagonal quartic
    terms and gives the stated diagonal root sum. Keep the Killing form
    normalization from DG-29. The cited sources establish the cohomological
    Casimir/equality case, not this local cochain identity.

    For the mixed anticommutator, the same CAR expansion gives
    $$
    \{A,A^*\}=\sum_a\pi(f_a)\pi(e_a)+
    \sum_{a,b}\epsilon_a\iota_b\pi([e_a,f_b]),\qquad
    \{A,D^*\}=-\sum_{a,b,c}\overline{c_{ab}^c}\epsilon_c\iota_b\pi(e_a),
    $$
    $$
    \{D,A^*\}=\sum_{a,b,c}c_{ab}^c\epsilon_a\iota_c\pi(f_b).
    $$
    The degree-four terms in the last two anticommutators cancel. Invariance
    and $f_a=-\tau(e_a)$ give, when $\alpha=\beta+\gamma$,
    $[e_\alpha,f_\beta]=-\overline{c_{\beta\gamma}^\alpha}e_\gamma$; when
    $\beta=\alpha+\gamma$, $[e_\alpha,f_\beta]=-c_{\alpha\gamma}^\beta f_\gamma$;
    and $[e_\alpha,f_\alpha]=H_\alpha$. The first off-diagonal bracket
    cancels the $(a,b,c)=(\gamma,\beta,\alpha)$ term of $\{A,D^*\}$;
    the second cancels the $(a,b,c)=(\alpha,\gamma,\beta)$ term of
    $\{D,A^*\}$. The surviving diagonal term is
    $\sum_\alpha N_\alpha\pi(H_\alpha)=-\sum_j\pi(H_j)T(H_j)$.

    **Exact exterior Jacobi calculation for A8.** Fix any total order on the
    positive roots. Normal ordering with the CAR relation gives
    $$
    \{D,D^*\}=\frac12\sum_{p,q,r}|c_{pq}^r|^2N_r+
    \sum_{a<b,\,c<d}K_{ab;cd}\,\epsilon_a\epsilon_b\iota_c\iota_d,
    $$
    where the coefficient of that ordered quartic monomial is
    $$
    K_{ab;cd}=-\sum_s c_{ab}^s\overline{c_{cd}^s}
    -\sum_s\overline{c_{sc}^a}c_{sb}^d
    +\sum_s\overline{c_{sc}^b}c_{sa}^d
    +\sum_s\overline{c_{sd}^a}c_{sb}^c
    -\sum_s\overline{c_{sd}^b}c_{sa}^c.
    $$
    To reduce this coefficient, set $X_{ac}=[e_a,f_c]$ and decompose
    $X_{ac}=X_{ac}^++X_{ac}^0+X_{ac}^-$ into $\mathfrak n^+$, $\mathfrak h$,
    and $\mathfrak n^-$. The root-space bracket formulas are
    $X_{ac}^+=\sum_s\overline{c_{sc}^a}e_s$ when $a=s+c$,
    $X_{ac}^-=-\sum_s c_{as}^c f_s$ when $c=a+s$, and
    $X_{ac}^0=\mathbf 1_{a=c}H_a$. Since $B$ pairs only opposite root spaces,
    define $S(X,Y)=B(X^+,Y^-)+B(Y^+,X^-)$. Reading the four nonleading terms
    in $K$ gives
    $$K_{ab;cd}=B([e_a,e_b],[f_c,f_d])-S(X_{ac},X_{bd})+S(X_{ad},X_{bc}).$$
    Jacobi and invariance give the exact first-term identity
    $$
    B([e_a,e_b],[f_c,f_d])
    =B(X_{ac},X_{bd})-B(X_{ad},X_{bc}).
    $$
    Indeed, pair $[[e_a,e_b],f_c]=[e_a,[e_b,f_c]]-[e_b,[e_a,f_c]]$
    with $f_d$ and use $B([x,y],z)=B(y,[z,x])$. Splitting each pairing into
    its $S$ part and Cartan part cancels both $S$ terms in $K$, leaving
    $$
    K_{ab;cd}=B(X_{ac}^0,X_{bd}^0)-B(X_{ad}^0,X_{bc}^0)
    =(a,b)(\mathbf 1_{a=c}\mathbf 1_{b=d}-
    \mathbf 1_{a=d}\mathbf 1_{b=c}).
    $$
    Thus for the fixed total order $K_{ab;cd}=(a,b)$ when
    $(a,b)=(c,d)$ and is zero otherwise; the quartic part is
    $-\sum_{a<b}(a,b)N_aN_b$. The six-operator terms cancel before this
    coefficient calculation.

    The linear coefficient has an independent trace check. For each positive
    root $r$, put $E=\operatorname{ad}e_r$, $F=\operatorname{ad}f_r$. On
    $\mathfrak n^+$, $[E,F]=\operatorname{ad}H_r$ has trace
    $\sum_{\beta>0}(\beta,r)=2(\rho,r)$. In the root basis, the $e_r$ term
    contributes $\|r\|^2$ to $\operatorname{tr}(EF-FE)$; every raising root
    string cancels between $EF$ and $FE$; and each unordered decomposition
    $r=a+b$ contributes $2|c_{ab}^r|^2$. Therefore
    $$\frac12\sum_{a,b}|c_{ab}^r|^2=(\rho,r)-\frac12\|r\|^2.$$
    Expanding $-\frac12\sum_jT(H_j)^2-T(H_\rho)$ gives this linear
    coefficient and the quartic coefficient above. Together with the mixed
    anticommutator calculation and
    $C_{\mathfrak g}=\sum_jH_j^2+2H_\rho+2\sum_{a>0}f_ae_a$, this yields
    $$2\square=1\otimes\pi(C_{\mathfrak g})-\sum_j\Theta(H_j)^2-2\Theta(H_\rho).$$
    On $L(\lambda)$ the Casimir scalar is
    $\|\lambda+\rho\|^2-\|\rho\|^2$, while $\Theta(H)$ acts on weight $\mu$
    by $\mu(H)$; hence
    $\square|_{C_\mu^\bullet}=\tfrac12(\|\lambda+\rho\|^2-\|\mu+\rho\|^2)$.
    This closes the Jacobi coefficient reduction for A8; the cited sources
    still do not supply the cochain calculation. Step 3 authorship must write
    out the CAR normal ordering and root-string trace terms in the item proof;
    no Jacobi coefficient cancellation remains as an unproved assertion.

16. Corrected two batch-25 Kostant character claims. A11 now separates the
    direct alternating sum from the BGG identity that interprets it as the
    Weyl numerator. A13 places the BGG Euler class in $K_0(\mathcal O_\lambda)$
    and the nilradical cohomology in finite-dimensional $\mathfrak h$-modules;
    it compares their formal characters after clearing the Verma denominator
    and asserts no equality between classes from different Grothendieck groups.
    The A11/A13 statements and strategies were updated without changing item
    IDs, dependencies, or the 30-pair scope; owner readiness records were
    refreshed.

17. Made the choice basis explicit for the three batch-27 HR 9.8 structure
    items: both structure lemmas and the principal structure theorem now state
    and depend on AC+DC. The accessible Ross article quotes HR 9.8 but gives no
    axiom basis; the primary HR proof was not accessible. This is a conservative
    assumption, not a claim that Ross proves HR 9.8 or that AC+DC is minimal.

18. Resolved the batch-16 Lewy–Stampacchia Step 1 escalation in A21 without
    narrowing the planned coefficient class. The statement now explicitly
    assumes that the distributional image $L\psi$ lies in $L^2$; this does not
    follow from $\psi\in H^2$ when the principal coefficients are merely
    bounded measurable. The invalid claim that every penalized reaction is
    pointwise bounded by $(L\psi-f)^+$ was removed. The replacement proof uses
    positivity of the variational-inequality reaction, tests with the obstacle
    gap and its level truncations, expands on
    $\theta_\delta=(1-(u-\psi)/\delta)^+$, drops the nonpositive elliptic
    term, and passes the remaining terms to the contact set by dominated
    convergence. The bounded drift and potential terms vanish in that limit;
    the Sobolev truncation supplier gives $D(u-\psi)=0$ on the contact set.
    This proves $0\le\Lambda_u\le(L\psi-f)^+$ for the stated bounded
    lower-order class. [OU] Theorem 2.5 is recorded only as corroboration for
    its lower-order-free principal-part case under the source's hypotheses.
    Added the exact truncation/form suppliers and reconciled the batch-16
    cross-batch file to 48 manifest edges. A21 is now `ready` with owner=true;
    the batch-16 readiness check is 33/33, and global manifest/content-policy
    checks pass. No pair was added or removed. The retry was re-armed at
    12:40Z; the controller had not yet dispatched batch 17 in the 12:40Z event
    snapshot, so the full Step 1 gate remains pending.

19. Completed an independent mathematical audit of the newly scaffolded batch 17 (42 items) and repaired nine records before Step 1 closes.

    - thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain: replaced the false claim that a vector outside D(A) cannot have a right derivative at any positive time with the exact criterion T(t)x in D(A). At zero this is the generator definition; a left-translation semigroup shows positive-time regularisation can occur.
    - lem-yosida-approximants-are-bounded-and-converge-on-the-domain: removed unsupported uniform convergence over arbitrary graph-norm bounded sets, retaining the correct pointwise convergence. A diagonal contraction semigroup on l2 is a counterexample to the uniform claim.
    - def-dissipative-operator: corrected the two directions of the Hilbert equivalence. Norm dissipativity squared gives Re <Ax,x> <= ||Ax||^2/(2 lambda) and the limit; the converse follows by expansion.
    - def-resolvent-of-a-closed-operator: corrected R(lambda,A)(mu I-A)y=y to the same-parameter inverse identity R(lambda,A)(lambda I-A)y=y.
    - lem-average-convergence-of-a-continuous-banach-valued-function: restricted the pointwise-continuity extension to curves Bochner-integrable on a neighbourhood, so the displayed averages exist.
    - lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing: replaced the false compact-image argument for general Bochner-L1 forcing with a fixed finite-valued simple-function approximation and forward/backward difference bounds. Added the strong-measurability and Bochner-integrability suppliers; removed the no-longer-used average-convergence dependency.
    - thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class: shifted moments to lambda=lambda_0+k+1, making every transformed moment absolutely integrable, and replaced the unjustified sign approximation by local continuous bump tests.
    - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve: anchored the largest-interval proof at an interior point before taking the endpoint limit, so no derivative at the left endpoint is assumed.
    - ex-dirichlet-heat-semigroup-from-the-laplacian: replaced unjustified termwise differentiation and the possibly nonintegrable Lw integral by Duhamel identification on eigenvectors followed by finite-sum approximation and contraction. Removed the unused inverse-series prerequisite and reconciled its dependency level to 13.

    Separate Codex agents verified the semigroup, Yosida, dissipativity, resolvent, Bochner-integral, average, endpoint, Laplace, and heat arguments. The batch-17 dependency ledger now has six rows (one page and five item edges); an exact manifest comparison found six expected and six actual rows, with no missing or extra edge. The single-manifest content-policy warning was only a validation-scope false positive: all suppliers resolve when the validator receives the run manifests together.

    Owner readiness is current for all nine repaired items; all existing dependents invalidated by their hash changes were refreshed while preserving their prior owner flags. Current focused checks: batches 1–17 have 559 items with explicit dependency arrays and zero manifest-only content-policy errors or warnings; dependency-level validation has no cycle or label error and reports only the four planned empty pages in batches 19–20. step1-decisions sees 812 items, 776 ready, and work only for the 36 batch-18 items whose writer has not yet completed its dispatch receipt plus those four empty pages. git diff --check passes. No tests were run, and the unified ledger refresh is deferred until scaffold writers 18–20 drain. The live controller remains active; its latest event is blocked-holding with batch 18 still running, so do not clear the historical owner blocker manually.

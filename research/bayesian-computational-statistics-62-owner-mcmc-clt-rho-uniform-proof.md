# Local proof proposal for the rho and uniform mixing CLTs

This is a proof proposal only. No live item, statement, provenance, dependency, or verification carrier was changed. Both original mathematical conclusions, including absolute covariance convergence and the zero variance case, are retained.

## Sources actually consulted

Gordin and Peligrad, *On the functional central limit theorem via martingale approximation*, Bernoulli 17 (2011), 424–440, DOI 10.3150/10-BEJ276, full text https://arxiv.org/pdf/0910.3448 (v3): read the introduction's two-sided sequence/past-chain realizations and martingale-coboundary discussion (pp. 424–426), the full construction and proof in §2 (pp. 428–431), and the rho-mixing application in §3.3 (pp. 434–435). The construction below is a simpler direct specialization available because the present hypotheses give the stronger condition that the individual conditional projections are summable. It does not import that paper's CLT or its rho-mixing proposition as an unproved premise. Its §3.3 uses the weaker dyadic summability condition; that more delicate result is unnecessary here.

Current local suppliers inspected: `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, `thm-martingale-central-limit-theorem`, `thm-stationary-process-birkhoff-ergodic-limit`, `thm-poisson-equation-martingale-decomposition-clt`, and the actual interface of `thm-riesz-thorin-interpolation`.

## Axiom interface requiring explicit owner integration

The existing Kolmogorov extension, martingale CLT, and Birkhoff suppliers explicitly assume AC. The two current CLT statements omit AC and their `axiom_use` fields refer to an imported theorem. Under CLAUDE's permitted AC policy, a local repair using these suppliers must explicitly acknowledge AC and propagate it to consumers according to repository policy. This is a foundational assumption bookkeeping obligation, not a need to weaken the stochastic hypotheses or conclusions. If literally no statement assumption addition is allowed, this proposal does not establish that stronger choice-free contract: one would need choice-free versions of the relevant probability suppliers instead. Do not silently invoke AC-requiring items under an asserted no-choice contract.

## Lemma A: finite partition proof that rho is bounded by twice square-root phi

Let A and B be any two sigma algebras on one probability space. Define phi(A,B) as in the current mixing definition, with conditioning events in A. Let (A_i) and (B_j) be finite measurable partitions in A and B, respectively. Write a_i=P(A_i), b_j=P(B_j), p_ij=P(A_i intersect B_j), and d_ij=p_ij-a_i b_j. Omit zero probability partition cells.

For a fixed i, the signed numbers d_ij sum to zero. Their positive sum is

    sum_{j:d_ij>0} d_ij
      = P(A_i intersect union_{j:d_ij>0} B_j)
        - P(A_i)P(union_{j:d_ij>0} B_j)
      <= phi(A,B) a_i.

Consequently sum_j |d_ij| <= 2 phi(A,B) a_i. For every j the elementary bound |p_ij-a_i b_j| <= p_ij+a_i b_j gives sum_i |d_ij| <= 2 b_j. If U=sum_i u_i 1_{A_i} and V=sum_j v_j 1_{B_j}, finite Cauchy–Schwarz on the nonnegative weights |d_ij| gives

    |Cov(U,V)|
      = |sum_ij d_ij u_i v_j|
      <= (sum_ij |d_ij| u_i^2)^(1/2)
         (sum_ij |d_ij| v_j^2)^(1/2)
      <= 2 sqrt(phi(A,B)) ||U||_2 ||V||_2.

Approximate arbitrary real square integrable A- and B-measurable variables in L2 by simple functions. Covariances converge by Cauchy–Schwarz. Apply the resulting inequality to U-EU and V-EV. Thus

    |Cov(U,V)| <= 2 sqrt(phi(A,B)) sqrt(Var U Var V),
    rho(A,B) <= 2 sqrt(phi(A,B)).

Taking suprema at the same one-sided split gives rho_Y(n) <= 2 sqrt(phi_Y(n)). Therefore the uniform theorem follows from the rho theorem and exactly its stated summability assumption. The asymmetry of phi causes no problem: the small row bound and the elementary column bound are precisely what is used.

This argument needs no interpolation theorem, reverse phi coefficient, kernel disintegration, or unproved mixing inequality. In particular, the local published Riesz–Thorin statement excludes the 1/infinity endpoints and must NOT be cited as though it directly supplies this bound.

## Lemma B: two-sided realization, coefficient preservation, and ergodicity

Start from the one-sided real strictly stationary sequence. For a finite set F contained in Z, choose any integer m with F+m contained in N_0, and prescribe its law to be the law of (Y_{i+m})_{i in F}. Strict stationarity makes the prescription independent of m: compare two such shifts by shifting the lower one forward to the higher one. The finite laws are consistent because each can be realized after a common shift. Apply the local standard-Borel Kolmogorov extension theorem with coordinate space R at every integer. This produces the probability Q on R^Z and coordinate variables X_i. The restriction (X_i)_{i>=0} has the original process law (uniqueness on cylinders and the generated sigma algebra). Translation invariance of all finite laws and the same uniqueness argument prove that the invertible left shift T preserves Q, with X_i=X_0 composed with T^i.

Let F_k=sigma(X_i:i<=k) and G_{k+n}=sigma(X_i:i>=k+n). For square integrable U measurable in F_k and V measurable in G_{k+n}, the desired inequality is

    |Cov_Q(U,V)| <= rho_Y(n) sqrt(Var_Q U Var_Q V).       (B1)

First take both U and V to be finite-coordinate simple functions. Translate all their coordinate indices by a common integer so that the past coordinates are nonnegative. The original one-sided past ends at the translated k and its future starts at translated k+n, so the original definition bounds their correlation. Their finite laws agree by construction. Pass to arbitrary square integrable U,V by finite-coordinate L2 approximation, centering approximants when needed. The variance-zero case has zero covariance and is automatic. This proves (B1) without presuming that the original definition already used an infinite negative past.

Here is a fully elementary justification for the approximation just used. The algebra of finite-coordinate events generates the countable product sigma algebra (and likewise the sigma algebra for any past or future coordinate subset). Events approximable in probability by this algebra form a sigma algebra: complements preserve symmetric difference; for a countable union first approximate the union by a finite subunion, using continuity from below, then approximate each event in that finite subunion and use the union bound. Thus all measurable events are approximable. Approximate bounded measurable functions by finite simple functions, replace each of their finitely many events by finite-coordinate algebra events, and finally truncate arbitrary L2 functions. All approximations converge in L2. This also supplies the finite-coordinate event approximation below; no unproved upward martingale convergence theorem is required.

Since summability gives rho_Y(n)->0, Q's shift is ergodic. To verify this rather than assert it, let A be invariant modulo Q-null sets, p=Q(A), and choose a finite-coordinate event C with Q(A symmetric-difference C)<epsilon. Enlarge its coordinate support to [-m,m]. For n>2m, C and T^{-n}C are separated by n-2m. By (B1) applied to indicators,

    |Q(C intersect T^{-n}C)-Q(C)^2| <= rho_Y(n-2m)/4.

Measure preservation and the symmetric-difference bound give

    |p-p^2| <= 4 epsilon + rho_Y(n-2m)/4,

since invariance modulo null sets gives Q(A intersect T^{-n}A)=p. First send n to infinity, then epsilon to zero. Thus p is 0 or 1. This proves ergodicity even for mod-null invariant events, so there is no hidden random limiting variance.

## Lemma C: exact summable-projection martingale-coboundary decomposition

Assume the two-sided stationary realization satisfies

    sum_{j>=1} ||E[X_j | F_0]||_2 < infinity.              (C1)

Conditional expectations commute with the invertible measure preserving shift: for integrable Z, the candidate E[Z|F_0] composed with T^k is F_k measurable, and its integrals over F_k events equal those of Z composed with T^k, by a change of variables. Uniqueness of conditional expectation proves the identity as an almost everywhere class. This proof works for every integer k because T is invertible. Choose representatives and discard a countable union of null sets when asserting the simultaneous integer-index identities below.

The series

    H_0 = sum_{j>=1} E[X_j | F_0]

converges in L2 by (C1) and L2 completeness. Put H_k=H_0 composed with T^k; then

    H_k = sum_{j>=1} E[X_{k+j}|F_k]                      (C2)

in L2, and all H_k have the same finite L2 norm. The conditional expectation contraction and tower property allow termwise conditioning of these L2-convergent series. Hence

    E[H_k|F_{k-1}]
      = sum_{j>=1} E[X_{k+j}|F_{k-1}]
      = H_{k-1} - E[X_k|F_{k-1}].                      (C3)

Define D_k=X_k+H_k-H_{k-1}. It is F_k measurable, square integrable, stationary, and (C3) gives E[D_k|F_{k-1}]=0. Therefore, for S_n=sum_{k=1}^n X_k and M_n=sum_{k=1}^n D_k,

    S_n=M_n+H_0-H_n,       ||H_0-H_n||_2 <= 2||H_0||_2. (C4)

This is an exact decomposition, not merely an o(sqrt n) assertion. There is no tail-sigma-algebra assumption: direct absolute L2 convergence supplies H and the tower identity supplies the martingale differences.

For the rho hypothesis, (B1), conditional expectation, and duality give (C1) directly. More explicitly, let W=E[X_j|F_0]. It is centered. If ||W||_2=0 there is nothing to prove; otherwise

    ||W||_2^2 = E[W X_j]
       <= rho_Y(j) ||W||_2 ||X_0||_2,

so ||W||_2 <= rho_Y(j)||X_0||_2. Summation yields (C1). The product identity follows from conditional expectation first for bounded truncations of W and then by L2 convergence and Cauchy–Schwarz. No abstract unproved Hilbert duality result is necessary.

## Lemma D: ordinary normal limit, including deterministic variance identification

Put tau^2=E[D_1^2] and q_0=E[D_1^2|F_0]. Then q_0 is integrable and nonnegative. The shift covariance of conditional expectation gives

    E[D_k^2|F_{k-1}] = q_0 composed with T^{k-1}.

The stationary process q_0 composed with T^k is a factor of the ergodic system proved in Lemma B: the preimage of a mod-null invariant event for its canonical shift is a mod-null invariant event for T. Its canonical shift is consequently ergodic. The local stationary-process Birkhoff theorem therefore gives

    n^{-1} sum_{k=1}^n E[D_k^2|F_{k-1}] -> tau^2

almost surely, with a constant limit. If tau>0, use the array Z_{n,k}=D_k/(tau sqrt n) for 1<=k<=n, extended by zero for k>n, and filtrations F_{min(k,n)} for k>=0. Each row is a square integrable martingale-difference row with an eventually constant terminal sum and clock. Its terminal clock converges to 1 almost surely. For epsilon>0, stationarity gives exactly

    sum_{k>=1} E[Z_{n,k}^2 1_{|Z_{n,k}|>epsilon}]
      = tau^{-2} E[D_1^2 1_{|D_1|>epsilon tau sqrt n}] -> 0

by dominated convergence. Thus the supplied local martingale-array CLT gives M_n/sqrt n converging to N(0,tau^2). The endpoint term in (C4), divided by sqrt n, tends to zero in L2, hence in probability. The local converging-together lemma transfers the same limit to S_n/sqrt n. If tau=0, all D_k vanish almost surely; (C4) itself gives S_n/sqrt n->0 in L2 and the limit N(0,0).

The covariance convergence and identification are separate second-moment calculations, so no unjustified inference from convergence in law to convergence of variances occurs. With gamma_j=Cov(X_0,X_j), (B1) gives

    |gamma_j| <= rho_Y(j) E[X_0^2].

Thus sum_{j>=1}|gamma_j|<infinity and finite variance expansion gives

    Var(S_n)/n
      = gamma_0 + 2 sum_{j=1}^{n-1}(1-j/n)gamma_j
      -> gamma_0+2 sum_{j>=1}gamma_j =: sigma^2.

Dominated convergence for the absolutely summable series justifies this limit. It is nonnegative as a limit of nonnegative variances. Orthogonality of martingale differences gives E[M_n^2]=n tau^2. Since R_n=H_0-H_n has bounded L2 norm, Cauchy–Schwarz shows

    |E[S_n^2]-E[M_n^2]|/n
      <= ||R_n||_2^2/n + 2||R_n||_2 ||M_n||_2/n -> 0.

Hence tau^2=sigma^2, including when one of them is zero. Restriction to nonnegative indices has the original law, so all statements transfer to the original Y. This establishes the complete rho statement and, through Lemma A, the complete uniform statement.

## Substantial supplier inventory and smallest integration options

The missing authoring is finite and has no unresolved analytic conjecture. A clean reusable integration would author these local proved suppliers before the two consumers:

1. `lem-uniform-mixing-bounds-maximal-correlation`: Lemma A, with the finite partition proof. Dependencies are the mixing definition, moments/covariance, L2 simple density, and Cauchy–Schwarz. A proof embedded directly in the uniform theorem is equally sound if avoiding another carrier matters.
2. `lem-two-sided-stationary-extension-preserves-rho-mixing`: Lemma B's construction and (B1), depending on the existing standard-Borel Kolmogorov extension theorem and the elementary finite-coordinate approximation argument supplied here. Its natural contract explicitly assumes AC through that existing supplier.
3. `lem-rho-mixing-stationary-shift-is-ergodic`: Lemma B's final argument. This can be combined with item 2 to minimize carriers. It must establish ergodicity rather than leave it as an extra hypothesis on the CLT.
4. `thm-summable-l-two-projections-give-stationary-clt`: Lemmas C and D, stated for a centered square integrable two-sided stationary process with ergodic shift and condition (C1). Its conclusion includes the exact decomposition, a normal limit with variance E[D_1^2], and equality with the covariance long-run variance when covariances are absolutely summable. Dependencies include conditional expectation contraction, tower property, L2 completeness, Birkhoff, the existing martingale-array CLT, dominated convergence, and converging together. This is the main substantial supplier; it can instead be authored as explicit steps within the rho item, since all derivations are given above.

The existing Poisson-equation MCMC theorem illustrates the same martingale-array and endpoint argument, but it cannot simply be applied to the original scalar Y process: Y need not be Markov and no Poisson solution on its scalar state space was assumed. Realizing the whole past as a Markov state is valid (Gordin–Peligrad explicitly describe it), but would introduce a kernel/disintegration interface and a further measurability check. The explicit filtration proof above is smaller.

Existing support items whose exact statement interfaces must be respected during integration include `cor-conditional-lp-contraction`, `thm-tower-property-of-conditional-expectation`, `thm-taking-out-what-is-known`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`, `thm-martingale-central-limit-theorem`, `thm-stationary-process-birkhoff-ergodic-limit`, and `thm-converging-together-lemma`. The proposal does not claim a whole dependency audit of these items.

The zero-long-run-variance lemma may remain in the original theorem statements; the proof above already supplies its conclusion directly. Do not use a nondegenerate-only imported CLT to stand in for Lemma D, infer ergodicity from stationarity, treat the one-sided definition as already controlling an infinite negative past, or omit the explicit variance identification.

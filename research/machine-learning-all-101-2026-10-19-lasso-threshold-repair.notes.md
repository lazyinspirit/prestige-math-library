# Independent threshold escalation investigation

This is mathematical investigation evidence only. It records no native acceptance, readiness, review or owner receipt. No batch-owned carrier has been edited while the native batch-13 author remains live. Initial independent investigation by delegated gpt-6.1-sol, 2026-10-19. Original inspected carriers are preserved under the matching `-before/` directory; root must authenticate the final terminal-writer preimages before integration.

## Exact scheduled source interface

The full ML-12 plan paragraph and both actual item statements were read. The source `/tmp/prestige-wainwright-0605740.pdf` is the 29-page arXiv math/0605740v1, whose extracted text identifies 30 May 2006. Independently inspected Theorem 1 and §3.1 (printed pp. 8–9), §3.3 (pp. 11–14), §3.4 (pp. 14–15), Appendix B Lemma 10, and Appendix D.5–D.6 (pp. 23–25). The source specifies min eigenvalue of the ACTIVE covariance, max eigenvalue of the FULL covariance, unit diagonal, bounded active inverse infinity norm, and inactive-active regression infinity norm at most 1−epsilon. Its dimensional hypotheses are exactly s,n−s,p−s→infinity; it imposes neither p>n nor s≤p−s. The lower branch has no beta-min upper bound, decay restriction or tuning restriction beyond positive non-increasing lambda. In particular lambda_n=1 and growing true coefficients are allowed.

The exact original lower constant is

    theta_l = (sqrt(Cmax) - sqrt(Cmax - 1/Cmax))^2 / [Cmax (2-epsilon)^2].

The lower claim asserts success probability→0 when n<2(theta_l−nu)s log(p−s)+s+1, for every fixed nu>0 and positive non-increasing lambda_n. The local counterexample to the conditional-covariance identity alone does not refute that conclusion. The construction below independently refutes the conclusion.

Also inspected the 20-page journal 2009 full-text sections IV.A, VI, Appendix I and Appendix K. Its conditional-covariance threshold interface differs. No journal theorem is imported or silently substituted. PDF extraction omits some journal math glyphs. Subsequently inspected rendered journal pp. 2190–2191: equation (27) defines rho_l(A)=one half the minimum, over distinct i,j, of A_ii+A_jj−2A_ij, and rho_u(A)=max_i A_ii. Thus rho_l is a minimum increment-variance parameter, NOT the least eigenvalue (contrary to wording in the native batch notes). Equation (29a) uses rho_l(Sigma_Sc|S)/[Cmax(2−gamma)^2]. This confirms a distinct lower interface without importing it as a proof supplier.

## Proposed complete LOWER counterexample

All constructions are finite dimensional for each index, under the repository's explicit AC convention. No DC or countable choice is needed in this lower argument. Gaussian density factorization, Gaussian integration/completing the square, finite union bounds and elementary finite matrix algebra supply all auxiliary calculations below. Existing local suppliers `lem-gaussian-sample-covariance-operator-concentration` and `lem-chi-square-degree-ratio` have been read and independently checked.

Fix delta=epsilon=10^(−6), c=(1−epsilon)/2, a=1/1000, and nu=1/100000. For integer N→infinity, put s=N^3, p=s+N, n=s+ceil(a s log N). Write S={1,...,s}. Partition the first 2N active coordinates into N disjoint pairs. Each pair has covariance

    B = [[1, −(1−delta)], [−(1−delta), 1]].

All pairs and remaining s−2N active standard coordinates are independent. For each pair (U_j,V_j), define one inactive coordinate

    T_j = c(U_j−V_j) + sqrt(r) Z_j,
    r = 1 − (1−epsilon)^2(1−delta/2),

with independent standard Z_j, also independent of all active coordinates. Repeat independently across observations; use independent noise w_i~N(0,1). Set beta*=n on S and zero off S, and lambda_n=1 for every n.

### Every covariance hypothesis

B has eigenvalues delta and 2−delta, so Cmin=delta. B inverse has absolute row sum 1/delta, so Dmax=1/delta. Each inactive row regresses on its pair with coefficients (c,−c), giving the exact regression infinity norm 2c=1−epsilon. Every coordinate has variance one because Var[c(U−V)]=(1−epsilon)^2(1−delta/2), and r is positive. The full covariance is a direct sum of N positive definite 3-by-3 covariance blocks and singleton identity blocks: each triple is an invertible linear image of (U,V,Z), with r>0. Every triple has trace 3 and positive eigenvalues, so its maximum eigenvalue is at most 3. Therefore Cmax=3 bounds the FULL covariance, not merely Sigma_SS. No lower eigenvalue of the full covariance is assumed or used. Finally 0<r<2epsilon+delta/2<3·10^(−6).

### Exact threshold comparison

For Cmax=3, sqrt(3)−sqrt(8/3)=(1/3)/(sqrt(3)+sqrt(8/3))>1/12. Also 3(2−epsilon)^2<12. Thus theta_l>1/1728, and 2(theta_l−nu)>2(1/1728−1/100000)>1/1000=a. Hence n=s+ceil(a s log N)<2(theta_l−nu)s log N+s+1 for all N>1. The three dimensions s,n−s,N tend to infinity, and s/n→0. Positive constant lambda_n=1 is non-increasing, and no lower-branch beta-min condition excludes rho_n=n.

### Active candidate signs

Put G=X_S^T X_S and A=G/n. Write X_S=Z Sigma_SS^(1/2), with Z iid standard Gaussian. Since s/n→0, the local sample covariance lemma gives ||Z^T Z/n−I||op→0. Therefore with probability→1, A has minimum eigenvalue at least delta/2 and ||A^(−1)||op≤2/delta. Define the restricted candidate

    beta_hat_S = n·1 + eta − A^(−1)1,
    eta = A^(−1)X_S^T w/n,    beta_hat_Sc=0.

On that spectral event, ||A^(−1)1||infinity≤2 sqrt(s)/delta=o(n). Conditional on X_S, eta is centered Gaussian with covariance A^(−1)/n, so every coordinate has variance ≤2/(n delta). Completing the square gives the normal exponential moment; Markov and a union bound give

    P(||eta||infinity≥1 | X_S) ≤ 2s exp(−n delta/4) →0.

Consequently all candidate active coordinates are positive with probability→1. This proves the exact desired active signs, rather than merely an inactive feasibility assertion.

### Directional inverse-Gram normalization, proved without invoking Wishart theory

Let b=1 and T=b^T Sigma_SS^(−1)b. Directly from the pair inverses,

    T = s−2N+2N/delta,       T/s→1.

Let v=Sigma_SS^(−1/2)b and choose a fixed orthogonal rotation with first column v/||v||. Orthogonal invariance and density factorization of the iid Gaussian Z show that its rotated columns [h,H] remain mutually independent standard Gaussian columns. For full-rank H put P_H=H(H^T H)^(−1)H^T and D=h^T(I−P_H)h. The block Schur-complement inverse identity gives exactly

    Q := b^T G^(−1)b = T/D.

Conditional on H, the orthogonal complement of its column space has dimension n−s+1, so Gaussian density factorization gives D the sum-of-squares law with n−s+1 independent standard normal coordinates. The exceptional rank-deficient event has probability zero: expose columns successively; a Gaussian vector with a density belongs to each proper linear subspace with probability zero. Since (n−s+1)/n→1, the local chi-square lemma gives D/n→1 in probability, and hence Q/(s/n)→1. In particular Q≤2s/n with probability→1. This is n−s+1 in the exact chi-square degree, not n−s−1 (which appears only in an inverse moment).

### Inactive Gaussian dual variables and their probability

Let P=X_S G^(−1)X_S^T and

    u = y−X_S beta_hat_S = (I−P)w + n X_S G^(−1)b.

The two displayed terms are orthogonal and X_S^T u/n=b. Every inactive column is X_S a_j+sqrt(r)z_j with a_j=(c,−c) in its pair. Since a_j^T b=0,

    V_j := X_j^T u/n = sqrt(r) z_j^T u/n.

Conditional on X_S,w these N variables are independent centered normals of common variance

    r M,     M=||u||²/n²=Q+||(I−P)w||²/n².

The noise term is bounded above by ||w||²/n². The chi-square lemma gives ||w||²/n→1; together with Q/(s/n)→1 and s→infinity this gives M≤4s/n with probability→1. For all N>1, n≥a s log N, and therefore on this event

    rM ≤ 4r/(a log N) < (3/250)/log N.

The elementary Gaussian Chernoff tail gives

    P(max_j |V_j|≥1 | X_S,w) ≤ 2N exp(−1/(2rM))
      ≤ 2 N^(1−125/3) →0.

Crucially this conditioning event depends only on X_S,w, not on the inactive residual z_j, so there is no conditional-event selection error.

### KKT sufficiency, directly proved

On the intersection of the preceding high-probability events, the candidate has exact positive active signs, X_S^T u/n=b, and |X_j^T u/n|<1 off S. Define z=X^T u/n; it equals sign(beta_hat) on S and belongs to [−1,1] off S. Coordinatewise |beta_hat_i+h_i|−|beta_hat_i|≥z_i h_i for every h. Expanding the objective F at beta_hat gives

    F(beta_hat+h)−F(beta_hat)
      = ||Xh||²/(2n) − h^T X^T u/n
        + ||beta_hat+h||_1−||beta_hat||_1 ≥0.

Thus beta_hat is an optimizer with the correct signed support. Its existence has probability tending to ONE while the original lower statement predicts ZERO. No uniqueness claim is required, and no assumption on a separately selected optimizer is used.

## UPPER counterexample independent review

The actual source and plan allow the source item's sequences N_k=ceil(exp k), s_k=ceil(exp(k²)), n_k=ceil(5s_k k), Sigma=I, beta*_S=1, sigma²=1, lambda_k=(log log n_k)^(−1/2). All upper inequalities and penalty/beta-min conditions check: log N~k, log s~k², n/s~5k, nu=1/2, theta_u=1. Lambda decreases and tends to zero, n lambda²/log N→infinity, and lambda+sqrt(log s/n)→0. The argument exposing the inverse-Gram vector in direction 1 is sound, including its conditional covariance, finite comparison and lower-tail concentration. Its active noise bound forces max noise below 1 while the penalization vector maximum diverges, contradicting all-positive active stationarity.

One repair is needed to make its conditioning precise. Its event E_k includes ||A−I||op≤1/2, which depends on h and hence Z; conditional Gaussian estimates must instead be asserted on the event E'_k defined ONLY by ||B/n−I||op≤1/2 and n/2≤d≤2n. Prove P(E'_k)→1 using the existing suppliers, perform the conditional maximum estimate on E'_k, then separately intersect the A spectral event for the noise bound. All constants and the statement remain unchanged. This is proof bookkeeping, not an altered counterexample.

## Consumer census and proposed integration, pending owner review/drain

A current literal search across items and library finds no logical consumer of either threshold carrier. The lower original only logically consumes the conditional-covariance counterexample; the latter remains correct unchanged. The ML02 page places all three carriers. The batch-13 manifest, dependency inputs, contracts, notes, source evidence and coverage mention them; root owns their eventual native metadata integration. Before final changes rerun an alias-resolved dependency census and preserve terminal-writer source preimages. Proposed mathematical outcome, conditional on owner review of this evidence: retain full original two-sided statement in existing upper false-statement; replace the unsupported lower theorem with a false-statement containing its complete original lower claim and the independently proved success sequence above. No claim is classified as open-problem, and no modified journal theorem is substituted. Exact ID/alias choice remains pending root direction. Focused explicit proof-layout, precheck/render and strict-contract checks follow final item edits; no native gate or state transition belongs to this delegated task.

## Writer hold update, 2026-10-18 20:34 UTC

Root independently accepted the complete lower counterexample and formal staged proposal, with no additional mathematical refinement requested. The bounded final repair scope is the lower false-statement replacement plus upper conditional-event correction, consumer census and focused checks. Native attempt 1 has now ended unsuccessfully: its actual immutable result records exit1, not timed out, terminal task_completed:true but final_response_present:false, error_events:0, empty tail; it provides no further failure reason. Engine state now shows batch13 attempt2 started20:34:03.213Z and endedAt:null. No source install is authorized while that writer is live. Root did not restart the controller. Next action after genuine terminal writer drain: preserve actual terminal source/metadata preimages, rebase the minimal upper conditioning correction onto the richest actual source, synchronize new lower fs carrier/removal with root's manifest integration, repeat complete old/current/alias consumer census, and run focused final actual-carrier precheck/render/proof-layout/strict-contract checks. Root retains all readiness, native gates, hashing and recertification. The staged proposals have no native acceptance status.

## Final delegated repair handoff

Actual attempt2 ended successfully at20:51:22.995Z and the exact batch13 dispatch process search returned no handle. Genuine terminal bytes are archived in the nested terminal-attempt-2 snapshot. The new lower false-statement has now been installed; its entire Statement equals the terminal original theorem Statement byte-for-byte, and its independent proof is marked ai-generated. The final native upper author had already implemented the necessary event separation and further strengthened its integer-sample penalty convention, so the terminal upper source is preserved byte-for-byte without any delegated edit. Its native strict contract also passes unchanged and is preserved in the guarded proposal.

The complete current items/library/articles census finds no logical item consumers, indirect consumers, aliases or nonlogical item uses of old/new lower or upper IDs; the ML02 page placement needs the lower ID replacement. The unchanged conditional-covariance counterexample is correct. Local Gaussian/chi-square/comparison/active-stationarity suppliers have no statement changes. Explicit actual-carrier checks pass: precheck2/2, render2 files/no errors or warnings, proof-layout2 items/17steps/0defects. The proposed strict two-item contracts pass, with only a heuristic shotgun warning on the lower inverse-Gram step genuinely using four necessary declared facts. Actual commands and input raw hashes are recorded in the separate consumer-checks JSON.

Guarded proposals for all lower-ID metadata, current contracts, coverage, source evidence, dependency sidecars, page placement and exact shared ML12 section are under the matching `-lasso-threshold-repair-integration-proposed/` directory. Root will apply them, preserve the old theorem/readiness history, then remove the obsolete unsupported, never-published and unconsumed old theorem. The old theorem has deliberately not been removed ahead of that synchronized owner integration. No mathematical gap remains. No native evidence, gate/state, readiness receipt, publication, commit or push was changed by this repair.

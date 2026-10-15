# GP scale-degeneracy proof proposal

Scope: read-only review of the scale-prior branch of `thm-gaussian-process-posterior-contraction`; no source, metadata, live-run state, hashes, tests, or acceptance changed. This is a mathematical proposal, not an audit or acceptance receipt.

## Finding

The fixed-design conclusion at the originally stated arbitrary rate is **false** when the Gaussian prior is identically zero and the scale density is only bounded below. The existing example `ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass` correctly demonstrates only a proof gap for a uniform scale prior. A uniform scale prior does permit a direct parametric proof; an unrestricted unbounded scale density need not.

Read: the actual theorem and its Facts [A2], [F7], proof steps 1.4, 3.3, 4.2, and 5.1; `lem-nondegenerate-gaussian-small-ball-controls-log-radius`; the fixed-design local-likelihood supplier; and the constant-process example. Also downloaded and extracted the full text of van der Vaart–van Zanten (2008), https://arxiv.org/pdf/0806.3024, reading pp. 11–12, Section 3.3/Theorem 3.3. The source's preceding paragraph assumes a scale density bounded away from zero, and its proof says the known-scale argument extends to unknown scale; it supplies no separate argument for the degenerate process and arbitrarily fast permitted rate. This review does not treat that sketch as resolving the issue.

## Explicit posterior counterexample

Let the design be arbitrary, W identically zero, w0 identically zero, and sigma0=1, so the data are IID N(0,1). The GP concentration function is identically zero. Put delta_k=exp(-k!), starting at a sufficiently large fixed k0, and let I_k=[1+delta_k,1+delta_k+delta_k^4]. Give the scale prior a uniform component of positive mass on [1/2,3/2], and give I_k mass m_k=c sqrt(delta_k), uniformly on I_k, with c chosen so the spike component has total mass less than one. This is an absolutely continuous prior with a density bounded below by a strictly positive constant on the required interval. The intervals are disjoint.

For all sufficiently large n put epsilon_n=sqrt(log log log n/n), and n_k=ceil(k^4 delta_k^{-2}). Then epsilon_n tends to zero, n epsilon_n^2 tends to infinity, and phi_0(epsilon_n)=0. Also delta_k/epsilon_{n_k} tends to infinity (its order is k^2/sqrt(log k)).

Here are explicit bounds proving failure, rather than only failure of a sufficient-condition check. Write S_n=sum_i Y_i^2 and

L_n(sigma)=(p_sigma/p_1)(Y^n)=exp[-n log sigma +(1-sigma^{-2})S_n/2].

On E_k={|S_{n_k}-n_k|<=k sqrt(n_k)}, whose probability is at least 1-2/k^2, constants independent of k give

- sup_{sigma in [1/2,3/2]} L_{n_k}(sigma)<=exp(C k^2);
- inf_{sigma in I_k} L_{n_k}(sigma)>=exp(-C k^4).

The first bound follows by maximizing at sigma^2=S_n/n and Taylor expanding t-1-log t at t=1. The second follows from -log sigma +(1-sigma^{-2})/2=O(-(sigma-1)^2) and |1-sigma^{-2}|<=C|sigma-1|. Thus the log-likelihood on I_k is bounded below by -C[n_k delta_k^2+k sqrt(n_k)delta_k]>=-C'k^4.

For every fixed M, the interval |sigma-1|<=M epsilon_{n_k} excludes I_k and all earlier spikes for sufficiently large k. Its prior mass is at most C M epsilon_{n_k}+sum_{j>k}m_j, and the latter sum is O(sqrt(delta_{k+1})). Consequently, on E_k,

Pi(|sigma-1|<=M epsilon_{n_k}|Y^{n_k}) <= exp(C k^2+C'k^4) [C M epsilon_{n_k}+O(sqrt(delta_{k+1}))]/[c sqrt(delta_k)] -> 0.

Indeed epsilon_{n_k}/sqrt(delta_k)=O(exp(-k!/2)sqrt(log k)/k^2), while sqrt(delta_{k+1}/delta_k)=exp(-k k!/2). Factorial growth dominates the polynomial exponents above. Thus expected posterior mass outside every fixed M epsilon_{n_k} tends to one. The original fixed-design branch cannot be preserved under exactly its existing assumptions.

## Smallest sound repair retaining all prior models

Retain the original epsilon_n and both other branches. In the fixed-design conclusion use

rho_n=max{epsilon_n,sqrt(log n/n)}.

This retains all three models, all currently allowed scale priors, and the degenerate Gaussian prior. The only rate loss is in the exceptional regime where the original assumptions cannot justify the conclusion.

The existing proof then applies without a new posterior theorem: phi(rho_n)<=phi(epsilon_n)<=n epsilon_n^2<=n rho_n^2; rho_n tends to zero; n rho_n^2 tends to infinity. The scale density lower bound gives Pi_sigma(|sigma-sigma0|<rho_n)>=c rho_n, including at an endpoint of [a,b]. Since log(1/rho_n)<=log n/2 for large n, this is at least exp(-C n rho_n^2). Apply the existing sieve, tests, local likelihood comparisons, denominator and splitting suppliers at rho_n throughout branch 3. This proposal does not resolve independent defects in those suppliers.

For every nonzero Gaussian law, the existing one-dimensional small-ball argument gives log(1/epsilon_n)<=n epsilon_n^2+O(1). Writing t_n=n epsilon_n^2, log n=log t_n+2 log(1/epsilon_n)<=3t_n+O(1) eventually. Therefore rho_n=O(epsilon_n), and the original conclusion is recovered with a larger fixed M. The statement may explicitly retain epsilon_n for nonzero W and give rho_n only for W=0; using rho_n universally in branch 3 is simpler and equivalent up to constants in the nonzero case.

Affected theorem locations: branch-3 display and rate explanation; [A2]; proof 1.4, 2.1's rate-dependent choice for branch 3, 3.3, 4.2, and 5.1; unresolved-gap remarks. Direct/indirect theorem consumers need checking by the statement-change owner. The constant-process example remains at epsilon_n=2 sqrt(log n/n), for which rho_n=epsilon_n; its mathematical rate claim is unaffected. The existing uniform-prior proof-gap example remains correct and should not be relabeled as the posterior counterexample above.

## Alternative retaining the original arbitrary rate

If the owner prioritizes the original epsilon_n conclusion, add this conditional scale hypothesis: **when W is identically zero, the scale density is bounded above in a neighborhood of sigma0**. It is already bounded below there. Nonzero Gaussian laws need no extra hypothesis, by the small-ball argument. This keeps every Gaussian prior, all three branches, and all originally allowed scale priors in the nonzero case, but necessarily excludes pathological scale priors in the zero-process case.

A short local supplier proves the degenerate case directly. Because w0 belongs to support, W=0 implies w0=0. Let r=sigma-sigma0 and S_n=sum Y_i^2. On |S_n-n sigma0^2|<=R sqrt n, uniformly on [a,b], the log likelihood ratio is bounded above by -c n r^2+C R sqrt n |r| and below by -C n r^2-C R sqrt n |r| near zero. The denominator, integrating |r|<=1/sqrt n inside [a,b], is at least c_R/sqrt n using the density lower bound. On a fixed neighborhood with upper bounded density, the integrated numerator outside M epsilon_n, divided by this lower bound, is at most C_R times the tail integral of exp(-c u^2+C R|u|) over |u|>M sqrt n epsilon_n. It tends to zero since sqrt n epsilon_n tends to infinity. Outside the neighborhood the likelihood bound is exp(-c' n) for large n and the total prior mass is at most one, giving another vanishing ratio. Chebyshev bounds the complement event by C/R^2. First let n tend to infinity and then R tend to infinity. Posterior tails converge to zero in probability and expectation. The argument is one-sided at an endpoint and unchanged in substance.

This direct parametric supplier can instead cover the uniform prior in the existing proof-gap example, without weakening any theorem claim; it cannot repair the general current statement without the additional condition or rate adjustment.

## Additional exact defect in the nonzero-direction supplier

`lem-nondegenerate-gaussian-small-ball-controls-log-radius` currently defines C_ell=log(sqrt(2pi) tau/(2||ell||)) and states phi>=log(1/epsilon)-C_ell. Its proof actually gives

phi>=log(1/epsilon)-log(2||ell||/(sqrt(2pi) tau)).

Change the named C_ell to log(2||ell||/(sqrt(2pi) tau)), or retain its present definition and change the statement to +C_ell. This is a sign error in the exact statement, although the O(n epsilon_n^2) use in the GP theorem survives with either corrected constant.

No unresolved mathematical problem is involved: this is a false overbroad contraction claim and a choice between precise corrective statements, with complete elementary arguments above.

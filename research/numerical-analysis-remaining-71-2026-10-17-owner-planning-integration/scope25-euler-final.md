# Scope 25 published Euler-limit compact-uniform repair

Run: `numerical-analysis-remaining-71-2026-10-17`. Root serialized the ordinary pre-edit published claim under `scope25-euler-limit-owner`; root supplied canonical pre_sha256 `31be77f5cd912460b9723fb8c98696ab4acaabb0d732e6095bc8ee6c2f645dbb`. No hash or ownership record was computed or edited by this worker.

The exact pre-edit published carrier was archived before any edit at `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/scope25-euler-before/thm-euler-limit-formula-for-gamma.md`. Read CLAUDE.md, the complete actual theorem, its complete Beta-Gamma premise, the previously repaired continuation premise/context, the complete named integration suppliers, and the actual published Weierstrass and Gauss multiplication consumers. Only `items/thm-euler-limit-formula-for-gamma.md` was edited. Its Statement was compared with the exact archive and is byte-identical.

## Confirmed defect and exact repair

The old step2.1 inferred locally uniform convergence from pointwise convergence of the scalar kernel and an unspecified common majorant. Pointwise dominated convergence alone does not justify the compact parameter supremum. The mathematical conclusion is correct; the missing uniform estimate is now local and explicit.

New step2.1 fixes a nonempty compact K in Re(z)>0, sets a=min_K Re(z)>0 and b=max_K Re(z), and uses the exact majorant B(u)=u^(a-1) on (0,1] and u^(b-1) on [1,infinity). Thus sup_K |u^(z-1)|<=B(u). The real Gamma convergence theorem gives the finite improper integral of B(u)exp(-u).

The truncated scalar kernel p_n(u)=(1-u/n)^n for u<n and zero for u>=n satisfies 0<=p_n<=exp(-u). On every [0,R] with n>R, the logarithm integral gives

`0 <= -n log(1-u/n)-u = n integral_0^(u/n) v/(1-v) dv <= R^2/[2n(1-R/n)]`.

The right side tends to zero independently of u in that interval. Exponentiation therefore proves p_n tends uniformly to exp(-u) on bounded u-intervals.

New step2.2 uses the complex integral modulus bound componentwise to place the **supremum over K outside the parameter integral** below integral B(u)|p_n(u)-exp(-u)|. For 0<delta<1<R, split this scalar integral into (0,delta), [delta,R], and (R,infinity). Each tail is bounded by the corresponding integral of B(u)exp(-u), independently of n; both can be made arbitrarily small. The middle contribution is bounded by sup_[delta,R]|p_n-exp(-u)| times the finite integral of B over that interval and hence tends to zero. This proves the required compact-uniform convergence, including the singular endpoint at zero and the moving upper endpoint n.

The existing final finite-shift proof remains intact, with its citation updated from step2.1 to step2.2. For every pole-free compact K choose one m with K+m+1 in the right half-plane. The finite rational prefactor converges uniformly on K because its finitely many denominators z+j stay away from zero there. The newly justified shifted convergence then gives exactly the original locally uniform conclusion on the **entire pole-free plane**. No domain, rate, parameter or conclusion was weakened.

## Exact existing premises and axioms

Added only these actual proved local dependencies/Facts:

- `thm-real-gamma-euler-integral-convergence`: the real integrals with parameters a,b>0 supply the common integrable tails.
- `thm-norm-inequality-for-the-vector-valued-integral`: applies on ordered compact intervals to the real/imaginary pair, giving the complex modulus bound.
- `thm-linearity-of-improper-integrals`: applies to the convergent real and imaginary parts of the difference, separately at each improper end.
- `thm-comparison-test-for-improper-integrals`: proves absolute convergence and passes the common scalar majorant bounds to those improper integrals.
- `thm-logarithm-derivative-and-integral`: supplies the finite real logarithm integral used in the explicit kernel estimate.

Each complete Statement/Facts/proof was read. The proof stays in improper Riemann integration, with the complex argument handled as a real two-vector. It does not invoke Lebesgue dominated convergence or a Riemann-to-Lebesgue bridge, and introduces **no choice assumption** or stronger original Statement hypothesis. The existing `thm-dominated-convergence` and Gamma-integral convergence lemma were read as alternative context but were not added as dependencies or used as substitutes for the explicit supremum proof.

## Focused actual consumers and coordination

- Published `thm-gamma-weierstrass-product`: complete current source read. Its [L1]/proof2.1 uses Euler's limit at positive real x and positivity from Euler's integral before taking reciprocals. That limit and the stronger full compact conclusion are preserved. Its subsequent identity-theorem steps and simple-zero/pole cancellation use unchanged continuation/product interfaces. No consumer edit was required.
- Published `thm-gauss-multiplication-formula`: complete current source read. Its [L1]/proof1.1 applies Euler's limit to finitely many shifted factors and combines the finite products before its Stirling calculation. The exact same limit for all pole-free factors remains available; no interface or consumer edit was required. This is focused premise-use checking, not a new whole-proof audit.
- The Gamma A page is contextual placement. No Statement change triggers new consumer assumptions or outside edits.
- Root's `scope27_gamma_owner` was notified before work and after the exact repair; draft25/27 sources remain under that owner's exclusive control. Their Weierstrass/log-Gamma dependencies receive the same preserved supplier conclusion. No overlapping draft write occurred.

After the final source edit, `node tools/proof-layout.mjs items/thm-euler-limit-formula-for-gamma.md` exited 0 with `proof-layout: 1 items, 4 steps, 0 defects`. No tests, full validators, gates, manifests, contracts, native reports/state/control, verification metadata, published receipts or ledgers were run or edited. Root retains all published-repair metadata, receipt, ledger, hashes and current-input integration. This focused repair records no native re-review, whole-item audit or gate credit.

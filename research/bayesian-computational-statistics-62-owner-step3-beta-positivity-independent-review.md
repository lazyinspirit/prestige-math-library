# Independent focused review: Beta positivity repair

Run: `bayesian-computational-statistics-62`. Reviewer: `bcs_gate1_37_40`. Date: 2026-10-16. Author of the three source repairs: original scientific owner `bcs_gate1_5_8`, not this reviewer.

**Outcome: pass within the assigned repair and affected-use scope.** I independently read all three complete current repaired proofs, the exact needed local supplier clauses and relevant arguments, the repair proposal, original batch-40 decision evidence, and the actual Beta-distribution/quantile-use chain. The Gamma-positivity misattribution in `reader:40:3` / `refuter:40:3` is corrected by an actual local proof. The connected Dirichlet F6 correction and simplex-small-ball F4 correction are sound. No additional mathematical repair request is needed. Confidence is high; the focused review is complete with no identified unresolved mathematical gap. This is genuine outside focused review supporting the existing owner-resolution protocol, **not new native execution coverage**, a native acceptance decision, a whole-closure audit, or a mechanical gate result.

I did not change sources, live contracts/manifests, decision records, ledgers, hashes, state, or review stamps, and ran no gates/tests. Root still owns exact final evidence binding, metadata/contract integration, applicable recertification and the full native battery. The scientific owner's report records its layout pass; I did not rerun or impersonate that check.

## Exact before/current scope

Repair evidence directory: `research/bayesian-computational-statistics-62-owner-step3-beta-positivity/`.

I compared actual source bytes against `before/` and `current/` copies for:

- `lem-beta-density-normalization.md`: current source equals its archived current copy; changes are the seven declared suppliers, narrowing F3 to convergence, adding F10–F15 and replacing the former final step with 3.1–3.3.
- `thm-dirichlet-density-normalization.md`: current source equals its archived current copy; the sole source difference is F6's corrected supplier/claim wording.
- `lem-dirichlet-process-simplex-small-ball.md`: current source equals its archived current copy; the sole source difference is F4's restriction to continuity and removal of its redundant convergence-only citation.

For all three, the complete `## Statement` text is byte-identical to the corresponding archived preimage. `def-beta-distribution.md` and `alg-quantile-monte-carlo-standard-error.md` also match both their before and archived current copies exactly. These are read-only byte comparisons, not inferred history from hashes or timestamps. Root should bind these exact archives plus `REPORT.md`, `metadata-contract-proposals.json`, `consumer-closure.json` and this review after final integration.

## Beta normalization: current argument

The exact current F3 is:

> The Euler Gamma integral converges to a finite real value for every positive argument. [[thm-real-gamma-euler-integral-convergence]].

This accurately restricts the cited convergence theorem to its actual Statement. The new independent positivity proof is in steps 3.1–3.2, before its use in the final Beta–Gamma ratio.

Step 3.1's decisive current clause is:

> For $1\le t\le2$, [F12] gives $0\le\log t\le\log2$, so $(s-1)\log t\ge\min\{0,(s-1)\log2\}$. By [F11] and [F13], $h_s(t)\ge c_s:=\exp(\min\{0,(s-1)\log2\})\exp(-2)>0$.

I checked the sign case: if s>=1 the lower exponent is 0; if 0<s<1 multiplication reverses the logarithm bound and the minimum is (s-1)log2. At s=1 both expressions agree. Also -t>=-2, so monotonicity and positivity of exp give the second factor bound. All bases are positive, avoiding undefined zero or negative real powers. Both exponents are finite real numbers, hence c_s is finite and strictly positive. Real-power continuity and exponential continuity give a continuous product on [1,2]; continuous-implies-integrable supplies bounded Riemann integrability; proper-integral monotonicity then gives integral at least c_s times length one.

Step 3.2's exact conclusion is:

> Splitting at $1$ and $2$ by [F15] gives $\Gamma(s)=\int_0^1h_s+\int_1^2h_s+\int_2^\infty h_s\ge\int_1^2h_s\ge c_s>0$.

The splitting lemma requires local Riemann integrability away from singular ends. Here h_s is continuous on every compact interval contained in (0,infinity), so that hypothesis holds. The Gamma convergence theorem supplies separately finite limits at zero and infinity, not a canceled principal value. Every properly oriented compact integral on either exterior piece is nonnegative; its finite real limit remains nonnegative. Moving the tail split from 1 to 2 therefore preserves convergence and yields the displayed sum. This establishes strict positivity without inferring it from mere convergence and without using the Beta–Gamma identity circularly.

Step 3.3 applies the result to alpha,beta,alpha+beta, each strictly positive, before dividing by Gamma(alpha+beta). Thus numerator and denominator are positive finite numbers, so the ratio is in (0,infinity). The earlier Lebesgue/improper identification gives exactly the unchanged Statement. The positive-parameter endpoint singularities alpha<1 or beta<1 remain included; nothing was narrowed to avoid them.

I read the actual local content of `def-real-power`, `thm-natural-logarithm-laws`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `thm-real-power-continuity-and-derivatives`, `thm-continuous-implies-integrable`, `thm-monotonicity-of-the-integral`, `def-real-gamma-function-by-the-euler-integral`, `thm-real-gamma-euler-integral-convergence`, `lem-improper-integral-splitting-and-tail-invariance`, the finite/infinite/mixed improper definitions, and `thm-real-beta-gamma-identity`. Their actual domains and conclusions support these uses. No external source reading is claimed.

## Earlier native nonfatal observations: steps 1.1 and 2.1

I also checked the actual mathematical derivations supplied by native batch 40 for `reader:40:1/2` and their paired refuter observations. They suffice as routine completions. They remain genuine historically recorded nonfatal observations; neither the scientific owner nor this reviewer edited those producer steps or supplied a false historical reclassification.

For 1.1, put C_m=[1/m,1-1/m], m>=3. Its positive endpoints lie inside (0,1), and C_m increases to (0,1). F5 makes the continuous restriction bounded Riemann integrable, and F4 makes that restriction Lebesgue measurable with the same integral. F4's actual full local argument also explicitly supplies the measurability of its closed interval (L7). Its zero extension g_m to (0,1) is measurable: the inverse image of a Borel set A is the relative measurable inverse image inside C_m, together with (0,1)\C_m exactly when 0 belongs to A. Equivalently, the threshold sets have that explicit form. As m increases, g_m increases to the positive function f; threshold inverse images of f are countable unions of those of g_m. Consequently f is measurable and the g_m meet F6's exact monotone-convergence hypotheses. Borel measurability in the source's introductory sentence is likewise the direct open-preimage property of continuous maps; it is not supplied solely by the real-power continuity theorem. The native omitted-interface observation correctly describes compression, not a false statement or a missing substantial lemma.

For 2.1, F7's full current proof explicitly splits the two improper ends at 1/2. For every m>=3, the compact interval crosses 1/2 and its continuous integrand is bounded/integrable. Proper additivity yields

$$\int_{1/m}^{1-1/m}f=\int_{1/m}^{1/2}f+\int_{1/2}^{1-1/m}f.$$

By the finite-endpoint definition and F7, the first term tends to the separately finite left endpoint integral, and the second tends to the separately finite right endpoint integral. The elementary sum law for two finite limits gives B(alpha,beta) as the diagonal limit. No cancellation of divergent pieces or unstated relation between endpoint rates is used. Monotone convergence then identifies that same limit with the Lebesgue integral.

Actual additional supplier inspected for this derivation: `thm-additivity-over-subintervals`, whose Statement requires a bounded integrand and a strictly interior split; all hypotheses hold on each C_m. The finite-endpoint definition, the actual Beta definition and the convergence proof identify the two limits being added.

### Proposed routine-step evidence only

Root may record these already genuinely reviewed routine derivations in the contract. The validator forbids mapping one proof step in both `derivations` and `routine_steps`; therefore **move/replace the existing classifications for 1.1 and 2.1**, retaining every other actual derivation. Do not append duplicate mappings. The following `claim` strings match the current unedited proof prose; `justification` records the supplied routine argument rather than pretending it was inserted into the source.

```json
{
  "routine_steps": [
    {
      "id": "routine-beta-measurability-1-1",
      "step": "1.1",
      "claim": "By [F8], $f(p)=p^{\\alpha-1}(1-p)^{\\beta-1}$ is continuous and hence Borel and Lebesgue measurable on $(0,1)$ with the measure in [F9]. For each integer $m\\ge3$, one has $1/m<1-1/m$, so its restriction to $[1/m,1-1/m]$ is continuous, hence bounded and Riemann integrable by [F5], and [F4] identifies its Lebesgue integral with its Riemann integral. The indicators of these intervals increase pointwise to one, so the truncated functions increase to $f$.",
      "inputs": [
        "A1",
        "F4",
        "F5",
        "F8",
        "F9",
        "construct"
      ],
      "justification": "For m>=3 the restriction of f to C_m=[1/m,1-1/m] is continuous and bounded Riemann integrable. F4 gives its relative Lebesgue measurability and integral identity; F4 full proof L7 supplies measurability of C_m. Its zero extension has preimage equal to its relative preimage inside C_m, joined with the measurable complement precisely when the tested Borel set contains 0. Thus each zero extension is measurable. C_m increases to (0,1); positivity gives increasing truncations. Threshold preimages of their limit are countable unions of measurable sets, giving the measurability needed for F6. Continuous-to-Borel measurability in the opening clause also follows directly from open preimages. This is the actual native batch-40 routine completion, independently checked on current sources; source step1.1 remains unedited."
    },
    {
      "id": "routine-beta-diagonal-limit-2-1",
      "step": "2.1",
      "claim": "By [F6], the Lebesgue integral of $f$ is the limit of the truncated integrals from step 1.1. The same truncations define the improper integral in [F1], which converges by [F7]; therefore the limit is $B(\\alpha,\\beta)$.",
      "inputs": [
        "step 1.1",
        "F1",
        "F6",
        "F7"
      ],
      "justification": "For m>=3 split the proper integral over C_m at1/2 by additivity of bounded integrable restrictions. The left compact integrals tend to the finite left-end improper integral and the right compact integrals tend to the finite right-end improper integral, as defined by F1 and proved convergent separately in F7. The sum of these two finite limits is B(alpha,beta); hence the diagonal truncation limit equals B. F6 identifies the same limit with the nonnegative Lebesgue integral. This records the actual native batch-40 routine completion, independently checked now, without claiming a producer edit."
    }
  ]
}
```

No extra mathematical prerequisite is missing from these two routine derivations. For fully explicit direct supplier declarations, root may add `thm-additivity-over-subintervals` for the routine split argument and `thm-lebesgue-measure-of-a-box-of-every-kind` for interval measurability. The latter is already an explicit intermediate clause of the declared F4 supplier's full proof. Adding either direct declaration is metadata synchronization, not a new producer proof or a reason to rewrite 1.1/2.1. Do not create a citation record with a fabricated fact label, a source link absent from the actual Facts, or an invented proof use. Source-exact citation contracts still follow the real Facts and numbered steps. The supplied `justification` entries and this report retain the actual routine inference provenance.

## Dirichlet normalization

The only changed fact now reads exactly:

> [F6] For every $s>0$, $0<\Gamma(s)<\infty$; the compact-interval lower bound and improper-integral comparison proving this are supplied in proof steps 3.1 and 3.2 of [[lem-beta-density-normalization]].

Those steps prove the stated intermediate result for arbitrary positive s independently of the Beta conclusion, so citing that actual proof is legitimate. F6's uses in Dirichlet 3.1 and 4.1 are real: intermediate Gamma terms can be canceled because they are finite and nonzero, and the final normalizing constant has a positive finite reciprocal. F4 separately uses the unchanged Beta normalization Statement. Neither fact substitutes the convergence-only theorem for positivity any longer.

I checked the complete unchanged four-step argument. The stick-breaking map has positive residual denominators, is a C1 diffeomorphism from the open cube onto the open simplex, and its lower triangular Jacobian is the product written in 1.1. At k=2 the empty Jacobian product is 1 and the single factor is the scalar Beta integral. For general k, at index i the later coordinates contribute sum_{j>i}(alpha_j-1), and the Jacobian adds k-i-1, giving sum_{j>i}alpha_j-1 as claimed. Every tail parameter is positive. Tonelli applies to the nonnegative product on sigma-finite Euclidean coordinate measures; the finite product of Beta integrals telescopes to the displayed Gamma ratio. The change-of-variables supplier's Countable Choice assumption is explicit. No Statement or proof-step amendment was needed for this connected fact correction.

## Simplex-small-ball connected fact correction

The new exact F4 is:

> [F4] The real Gamma function is continuous on $(0,\infty)$. [[thm-real-gamma-is-smooth]]

The actual smoothness Statement entails precisely that continuity. Its sole proof use is at the end of 2.1: Gamma is bounded above on a compact J contained in (0,m], so Gamma(m)/Gamma(alpha(U_0)) has a uniform positive lower bound. Positivity of Gamma(m) and all other Gamma terms is supplied separately by F3. Here F3 actually links `def-real-gamma-function-by-the-euler-integral`, whose Definition explicitly includes “The integrand is positive, so Gamma(s)>0 throughout (0,infinity).” It also cites convergence for finiteness and the functional equation for Gamma(s+1)=s Gamma(s). Thus the cleaned F4 does not delete a necessary premise or repeat the original attribution error. The newly proved Beta intermediate result independently verifies the same positivity assertion.

I checked the full two-step current proof against its assumptions. Positive alpha_j are at most 1, so the Gamma(1+alpha_j) estimate uses t^alpha_j<=1 below 1 and <=t above 1. The functional equation yields 1/Gamma(alpha_j)>=c_Gamma alpha_j. On the integration rectangle, each nonresidual coordinate is bounded below by eta squared/2; its coordinate interval has length at least eta squared/2 even for w_j=0 or 1. The omitted coordinate has w_i*>=1/N, and its total perturbation is at most N eta squared (including the optional x_0). Since N eta<=1/4, it remains strictly positive and above eta squared/2. Deleting a different simplex coordinate instead of the last coordinate is a linear coordinate change of absolute determinant 1, so the coordinate-volume lower bound remains valid.

For alpha(U_0)>1, x_0 is in [eta squared/2,eta squared] inside (0,1), and alpha(U_0)-1<=m; therefore x_0^(alpha(U_0)-1)>=(eta squared/2)^m. If alpha(U_0)<=1, its factor is at least 1. The remaining density factors have exponents alpha_j-1<=0 and are at least 1. The resulting powers of eta and constants have exactly the lower exponential form in 2.1; constants may depend on the fixed m, a, b and residual parameter, and the compact-J bound makes that dependence uniform as claimed. The null residual cell is legitimately omitted using the DP finite-partition interface; the N=1/null-residual case is separately probability one. Positive-residual N=1 is a one-dimensional rectangle and also obeys the argument. Full AC is expressly assumed here, matching the normalized-gamma DP existence interface and supplying the weaker Countable Choice needed by its finite Dirichlet densities.

I read `def-dirichlet-distribution` and the exact finite-partition clauses of `def-dirichlet-process` / the normalized-gamma DP existence theorem for these uses. I did not audit the independent entire Poisson construction or the other 32 closure carriers; no such audit is required to assess this focused correction.

## Actual Beta-to-quantile prerequisite chain

`def-beta-distribution` assumes Countable Choice and positive shapes, defines the Lebesgue density divided by B, and expressly assigns no endpoint atoms. The repaired lemma supplies exactly its unchanged finite-positive normalization. No reciprocal of zero is formed.

The quantile-MCSE algorithm's successful ESS path gives a positive finite E_alpha: the called multichain-ESS procedure accepts a finite nonconstant array, protects zero covariance/variance denominators, returns not estimable if tau_hat<=0, and otherwise takes the minimum of two positive finite values S-prime/tau_hat and S-prime log10(S-prime), with S-prime>=8. Thus a=E_alpha alpha+1 and b=E_alpha(1-alpha)+1 are strictly positive for alpha in (0,1), including every admitted near-endpoint alpha. The normal scores are finite because all Blom fractions lie in (0,1) and the actual normal-quantile supplier gives unique finite values; constant indicator and other nonestimable branches return before Beta shapes are used.

Algorithm instruction 3's real-field premise now explicitly uses the Cauchy reals and their complete-ordered-field corollary. The actual reciprocal Archimedean supplier therefore applies to every positive p. Viewed in the Beta space (0,1), the measurable sets E_n=(0,1/n] decrease to empty; E_1 is the entire Beta space, of finite mass 1. Continuity from above gives F(1/n)->0. For each fixed u=.16 or .84 there is n with F(1/n)<u, so its level set excludes every t<=1/n and contains t=1. Completeness makes its infimum exist, and the infimum lies in [1/n,1], a valid empirical-quantile domain. Nested level sets give v_minus<=v_plus. The left empirical quantile is nondecreasing by its order-statistic formula and admits u=1, so the returned endpoints are ordered finite data values and the half-width is nonnegative. No continuity or strict positivity of the Beta CDF is needed for this particular domain argument; the probability measure and its open support suffice.

The Beta normalization uses Countable Choice only; the algorithm separately declares full AC inherited through normal scores. The repairs add no stronger choice assumption to the Beta or Dirichlet normalization claims. This closes the original supplier-positivity blocker for the algorithm's actual use. It does not itself supply a native `touched` decision, empirical coverage guarantee, or a claim that these diagnostics imply convergence. The algorithm's approximate-coverage disclaimer remains unchanged.

I also inspected the direct Beta–Binomial consumer's F3 and all three proof steps: alpha+y>0 and beta+n-y>0 for every y in {0,...,n}, including n=0 and both endpoints. The repaired normalization provides the same positive finite evidence and valid reciprocal posterior coefficient as before. No source repair is required there.

## Root binding inputs and remaining mechanical work

Root should bind the final raw source bytes, canonical manifest entry and canonical contract entry for the three repaired IDs and the actual quantile/Beta-definition use carriers. Binding fields are `item_file_sha256`, `manifest_sha256`, `contract_sha256`; existing normalized guard/judge/subject hashes must be derived by root's ordinary tools. I computed or wrote no hashes. The read-only source/archive equalities above describe the bytes I actually reviewed; a subsequent mathematical change requires a new focused review. Mechanical mirroring alone must not be represented as a new native review.

Bind the actual supplier clauses used above, particularly Gamma convergence versus positivity, power/log/exp order, proper comparison and finite-end split; also retain the unchanged original batch-40 native result, assignment, reader/refuter observations, decision/report archives and their unbound-reader uncertainty. Integrate the scientific owner's exact source metadata/citation proposals, update uses from old Beta 3.1 to the actual new 3.2/3.3 locations, and replace the Dirichlet F6 citation with the real Beta Proof clause. Simplex F4 contracts only the smoothness supplier's continuity consequence. None of those mechanical records should claim a new supplier statement or edit.

The nonfatal observations at original reader/refuter40:1/2 remain recorded as real omitted routine derivations supplied by the actual native adjudicator and independently checked here. The positivity observation at40:3 remains a confirmed historical defect with a current sound repair, not a false positive. Root's route-specific decisions, ledger closure, risk-review completion, currency stamps and applicable origin-preserving recertification must reflect that distinction. All Statements are preserved, no remaining gap was identified in this focused assignment, and no review->repair cycle 2 was needed.

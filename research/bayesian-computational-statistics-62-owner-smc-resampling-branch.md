# SMC resampling owner research branch

Research-only assessment of the six assigned current batch-45 items. No source, live metadata, readiness, contracts, hashes, tests, native reports, or workflow state was edited. No external source was read; source bibliographic claims are not independently authenticated here. This is not a native acceptance or gate receipt.

The current strengthened contracts are mathematically justified. The controlling BCS-42 plan still promises three false unrestricted claims: source Phi membership suffices for all finite variances; positive limiting residual remainder suffices for the fractional-parts covariance; and zero limiting remainder makes every finite sample deterministic. Current items correctly repair all three, and their richest admissible CLT conclusions should be preserved.

## R1 — genuine-controlling-plan-defect-already-corrected-in-items

BCS-42 scope: source Phi class and post-resampling variance

Phi alone does not imply target second moments. The time-one countable witness has finite proposal weighted third moment and recursive L2 image, finite weighted variance, but infinite target second moment. The separate initial witness has bounded test and Phi0 membership but infinite initial weighted centered second moment. Current Psi classes explicitly repair both issues.

Minimal action: Correct BCS-42 scope to retain Phi as source notation while imposing current recursive Psi hypotheses on the locally proved post-selection CLTs. Retain the centered weighted-numerator initial condition and only first-moment normalization. Do not remove either CLT output or variance recursion.

## R2 — genuine-controlling-plan-defect-already-corrected-in-items

BCS-42 residual formula for positive remainder

A positive limiting remainder c does not suffice for the fractional-parts covariance. The relevant finite weights are u/eta_N(u), not u. The two-state witness has c=1/2, formal residual variance zero, but actual joint limit (Z,1_{Z>0}W), with Z normal variance 1/3 and independent W normal variance 1/6; the selected limit is non-Gaussian. Current exclusion of positive integer atoms is sufficient and correctly preserves the constant-weight special case.

Minimal action: Add the current no-positive-integer-atom condition to the residual formula and CLT branch, with u=1 almost surely as a separate exact-equal-weight case. Retain all admissible residual CLT content.

## R3 — genuine-controlling-plan-defect-already-corrected-in-items

BCS-42 assertion that c=0 implies all offspring deterministic

The three-state witness has proposal (1/4,1/4,1/2), u=(2,2,0), c=0, but on the probability-3/16 N=3 event containing each state the scaled normalized weights are (3/2,3/2,0), so one offspring is random. Zero limiting remainder alone is not finite-sample determinism. The current definition correctly leaves general nonconstant integer-valued weights unassigned.

Minimal action: Replace the general zero-remainder rule with the u=1 almost surely special case. Do not restore the invalid c=0 deterministic claim.

## R4 — local-proof-notation-correction

lem-smc-residual-resampling-clt-away-from-integer-weights proof 1.1

The proof writes phi^j for j=2+epsilon, although phi is an arbitrary real test and epsilon need not be an integer. This power is undefined on negative values. The subsequent Lindeberg proof correctly needs the absolute moment.

Minimal action: State the triangular empirical limit for the four tests 1, phi, phi^2, and |phi|^(2+epsilon), with absolute-value bounds for signed first moments. No statement restriction is needed.

## R5 — local-proof-explication

lem-smc-multinomial-resampling-clt proof 2.2

The displayed argument uses the same Fourier coefficient u for both weighted and resampling fluctuations and then claims joint asymptotic independence. The available conditional characteristic-function convergence proves the full joint assertion immediately, but the written argument should use arbitrary coefficients v and u.

Minimal action: Multiply the conditional resampling characteristic function at u by exp(iv times weighted fluctuation), for arbitrary real v,u. Bounded convergence in L1 gives exp(-v^2 V/2-u^2 s^2/2). Keep the rich independence conclusion.

## R6 — local-proof-explication

cex-smc-clt-class-does-not-ensure-target-moment proof 3.1

The phrase that the initial multinomial covariance is finite because p is in L2(p) does not name the argument to that covariance. The needed argument is g=w(phi-pi1(phi)), which is in L2(p) by the preceding estimates. With u0=1, hat V0(g)=2 Var_p(g), and the identity kernel gives V1(phi)=hat V0(g)<infinity.

Minimal action: Replace the p-in-L2 phrase with the explicit g calculation. Preserve both counterexamples.

## Independent verification of substantive points

For the time-one target-moment witness, w_n=2^(-n²), phi_n=w_n^(-3/4), and proposal p_n=2^(-(n+1)). The weighted third moment sums p_n w_n^(3/4), and the recursive image has finite proposal second moment. Yet the target second moment sums p_n w_n^(-1/2), whose summands do not tend to zero. Centering is harmless for the weighted second moment because w is square-integrable. The separate initial witness has proposal 2^(-n), weight c 2^(n/2), and even-state indicator; each even index contributes the same strictly positive constant to the weighted centered second moment.

For the positive-integer boundary witness, p_N is the proportion at A. Its weighted fluctuation Z_N tends to N(0,1/3). On p_N>1/4, normalized A weights are just below 2 and their floors drop to 1: the residual count fraction tends to 3/4 and the residual A probability to 1/3, giving extra variance 1/6. On p_N<1/4 the A remainders total only O_P(sqrt(N)), so the centered extra variance vanishes. Thus the selected limit is Z+1_{Z>0}W, with independent W~N(0,1/6), and its third moment is 3 E[Z 1_{Z>0}] E[W²]>0. The formal covariance computed using r(2)=0 misses this behavior although c=1/2>0.

For the zero-remainder witness, proposal weights (2,2,0) have mean one and all limiting fractional parts zero. A finite N=3 sample with one particle at each state occurs with probability 3/16 and produces one random residual child from equal A/C remainders. This proves the finite-sample determinism assertion false. It does not, solely by being a finite example, establish any particular asymptotic law for that model.

In the no-positive-integer-atom branch, the residual triangular empirical limit is justified by the current proof's truncation. For the four tests 1, phi, phi², |phi|^(2+epsilon), remove small neighborhoods of the finitely many integer discontinuities on a bounded u interval. Target integrability controls those neighborhoods because u is bounded below there; absence of positive-integer atoms makes their integrals vanish. The test tail is controlled by b_N<=2u when the empirical normalizer lies in [1/2,2], and the large-u tail by b_N<=1 and 1_{u>M}<=u/M. Zero weights cause no discontinuity. The limiting remainder mass is positive because otherwise the no-positive-integer-atom condition and mean-one normalization contradict one another. Conditional Lindeberg and the zero-variance Chebyshev branch then prove the residual CLT and covariance addition.

The multinomial argument likewise has the needed finite target 2+epsilon moment explicitly in Psi. The empirical law supplier supplies the second and higher empirical moments; conditional Lindeberg gives a deterministic limiting conditional characteristic function, which factors against any bounded characteristic factor of the weighted fluctuation. No new substantive prerequisite was identified.

The constant-weight branch is valid for the supported finite particle system. If earlier denominator-zero fallback or proposal-null exceptional realizations matter in an exact finite-sample assertion, discard their probability-o(1) event before making the CLT argument. This is a proof precision point, not a reason to remove the constant-weight conclusion.

## Controlling design and exact current excerpts

The companion JSON retains the exact full BCS-42 design paragraph and each reviewed current Definition/Statement/Statement refuted. These are text excerpts, not newly calculated carrier hashes. Existing fixed-horizon theorem statements already use Psi and residual branch restrictions. No item interface changed in this branch, so no consumer repair was performed.

Recommended owner action: preserve these necessary contract corrections, reconcile the controlling design, and apply only the three small proof-text corrections after the native writer drains. Do not restore the false unrestricted source contracts and do not drop the admissible weighted or post-resampling CLTs.

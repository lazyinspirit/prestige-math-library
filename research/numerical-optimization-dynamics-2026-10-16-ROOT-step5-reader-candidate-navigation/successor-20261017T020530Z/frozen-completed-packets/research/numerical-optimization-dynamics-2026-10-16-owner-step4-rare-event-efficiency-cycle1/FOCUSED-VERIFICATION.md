# Step4 batch8 rare-event concern, first current cycle

This is a new focused source/proof review prompted by the actual current Step4 reader concerns, not a claim about the completeness of earlier Step3 work. Step3 remains closed. Only research files were written; no canonical source/tool/ledger/metadata writes, hashes, validators, checks, recertification or native dispatch were performed.

## Actual native disposition

The actual digest is `research/numerical-optimization-dynamics-2026-10-16-batch-8-step5-context.json`, copied intact under captures. Its two concerns are the efficiency Definition (would-be-fatal) and SIR example (presentation). The original gpt-6-luna rows in this run's judge.jsonl now both say keep=false: Definition at 2026-10-16T17:46:25.016Z and example at 17:47:03.140Z. Both original attempts are attempt1, response/status0. Exact rows, including their original recorded digest fields, are copied under captures. Those recorded digest values are native evidence, not helper-computed/authenticated hashes. Root must use the actual supported rejection/repair route; a reader-concern admission would not be needed merely to override an original keep=true verdict here, since neither is kept. No claim is made that the whole live judge stage has finished.

## Definition defect and richest local correction

The current BRE definition allows signed unbiased estimators. Its LE definition explicitly also requires nonnegativity. The unrestricted sentence claiming LE is weaker than BRE is consequently false.

An explicit choice-free finite counterexample can be realized for each integer n>=1 on {0,1} x {-1,1}, with probability equal to the product of Bernoulli(p_n) and the uniform sign law, p_n=1/(n+2). Let A_n be the event that the first coordinate is1 and let R be the second coordinate. The estimator Y_n=p_n(1+2R) has values -p_n and3p_n equally likely. Direct finite sums give E Y_n=p_n, E Y_n^2=5p_n^2 and Var(Y_n)=4p_n^2. Its RE is identically2, but it is negative with probability1/2 and therefore is not LE under the present local definition. Its numerical log-moment ratio nevertheless tends to1. No implementability assumption in the Definition excludes this formal estimator.

Smallest exact replacement is only the hierarchy sentence prefix:

> For nonnegative unbiased estimator families, logarithmic efficiency is a weaker asymptotic property than bounded relative error; the definitions impose no implication between an algorithm's efficiency and its proposal-fitting success.

This preserves signed BRE, the chosen nonnegative LE convention, every estimator, all work criteria and the rich valid implication on its proper domain. It does not restrict all estimators to nonnegative ones or delete the hierarchy claim.

Actual proof of the corrected implication: if RE<=C eventually, unbiasedness and the variance identity give p_n^2 <= E Y_n^2 <= (1+C^2)p_n^2. Since p_n->0, division of logarithms by the negative log(p_n^2) squeezes the ratio between 1+log(1+C^2)/log(p_n^2) and1; both bounds tend to1. Nonnegativity then supplies the additional local LE condition. The moment-ratio conclusion itself holds for signed estimators as well.

If 'weaker' is read strictly, that remains true without a choice axiom: set p_n=2^{-n}, let B_n be Bernoulli(1/n), and take Z_n=n p_n B_n on a finite product probability space also carrying a target event of probability p_n. Then E Z_n=p_n, E Z_n^2=n p_n^2, the log-moment ratio is 1-log(n)/(2n log2)->1, and RE^2=n-1 is unbounded. The existing Gaussian theorem is another nonnegative example, under its own explicit AC assumption.

## Actual external source reading

Downloaded the complete13-page Chan–Glynn–Kroese2011 PDF from the item's actual Stanford URL. Opened the actual fulltext and read its identity/front matter and Section2 printed184–185 (physical PDF pages3–4, with full extracted pages retained). Printed184 defines LE for an unbiased estimator Z by log E Z^2 / log ell ->2 and BRE by bounded E Z^2/ell^2; it asserts BRE implies asymptotic optimality. It does not add the local nonnegative restriction to that generic definition. Printed185 gives the zero-variance event-conditioned density and explains its unknown normalizer. Thus the cited source supports the moment calculation, and the defect is the local mismatch between its broader BRE domain and its deliberately restricted LE domain. No claim is made to have read later unrelated sections or the other cited works during this focused review. No new external reference or source claim is necessary for the one-qualifier repair.

The actual two named local suppliers alg-importance-sampling and thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment were read fully, including the latter's full proof. The algorithm permits real signed integrands; the variance theorem has a choice-free finite-sample conclusion and a separate AC-dependent CLT. Neither supplier supplies a hidden nonnegativity restriction that would rescue the current sentence.

## Full affected consumer review

Dependency and actual item-reference inspection gives three direct item consumers and one indirect consumer; all four complete bodies, Facts and proofs were read in this focused cycle. No source repair is needed in them.

- thm-zero-variance-importance-sampling-proposal uses only q*=1_A f/p. That formula and its normalization/support/constant-value proof are unchanged.
- thm-gaussian-tail-exponential-tilting uses RE and the log second-moment ratio. Its proof explicitly has Z_a>=0, and the IID mean is nonnegative; p_a>0 and the positive second moment are supplied. It already belongs to the corrected comparison domain. Its actual calculation and explicit AC convention are unaffected.
- ex-importance-sampling-finite-mean-infinite-second-moment uses only the need for finite second moment; its positive weight, convergent first moment and divergent harmonic second moment are unaffected.
- ex-gaussian-barrier-exponential-tilting is indirect through the Gaussian theorem. Its explicit positive likelihood contribution and finite moments at a=2 are unaffected; it makes no family efficiency claim for a single barrier.

Both full A/B page narratives were read. Neither asserts the false unrestricted implication. No outside item consumer appeared in actual dependency/reference inspection. consumer-dependency-inventory.json records the formal closure. The three batch8 contract citations reproduce the full old Definition and would need the new qualifier in any later admitted metadata projection; their exact current quotes are listed in future-mirror-obligations-NOT-STEP3-EDITS.json. No immutable Step3 carrier was changed or proposed for in-place overwrite.

## Companion example: actual wording and finite proof

The actual canonical procedure has G0=1, full multinomial resampling before identity M1, and then event potential G1=1_A1. Thus 'all-zero initial potential' is literally wrong; the initial potential cannot vanish. The current proof instead selects the sound event that both initial draws equal1, probability1/4. Every subsequent resampled descendant is then1, so the first event weights vanish and the estimate is0 while p=1/2.

Minimal presentation replacement: 'the branch on which both initial particles equal $1$ has positive probability and returns the zero estimate.' This changes no claimed probability, event, algorithm or scope. Its proof is not claiming that1/4 is the total probability of a zero estimate. In fact the intervening resampling makes that total3/8; no current assertion gives a wrong total.

Separately, the current proof's final generic unbiasedness citation invokes thm-fixed-level-sir-estimator-unbiased, whose actual Statement explicitly assumes AC. The example does not explicitly assume AC. This is a proof-interface omission, not a false finite conclusion and not a reason to add AC. The actual invoked theorem, alg-fixed-level-sir-splitting, canonical alg-sequential-importance-resampling and choice-free alg-multinomial-and-residual-offspring-resampling were all read fully in this focused cycle.

An entirely finite argument proves precisely the same original rich claim without AC: let S count zeros among the two initial particles. Given these particles, initial weights are both1, multinomial ancestors are independently uniform over the two labels and identity propagation copies their states. Therefore each event indicator has conditional mean S/2, and the returned average also has mean S/2. Averaging over the four equally likely initial configurations gives E p_hat=E S/2=1/2. When S=0, with probability1/4, the estimate is0. Equivalently the entire calculation is a finite sum over four initial configurations and four ancestor choices, each outcome of mass1/16; no infinite construction or choice supplier is used.

The separately labelled optional-finite-proof variant replaces only the unnecessary generic theorem dependency/fact and that final explanatory proof paragraph with this explicit finite calculation. It retains the Example, prescribed canonical resampling, original scope, event probability and all branch claims, while including the same wording fix. The minimal presentation-only variant is separately preserved for root/native owner choice; do not apply both carriers or treat this optional proposal as a new independent rejection. No item depends on this example; its only placement is the already read examples page.

# SMC time-bound research branch

Research only, 2026-10-15. No source, live run, readiness, hash, contract, or test edits were made. Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the six assigned current items, their SMC-recursion definition, the bounded-weight example, both BCS-42 pages, and the BCS-42 canonical plan entry. Current native work was not controlled. No further agents were used.

The advertised within-parent density ratios and bounded likelihood do **not** imply time-uniform asymptotic variance. The existing counterexample proves this correctly. The current stronger abstract theorem is sound, but does not recover the advertised HMM theorem; its bounded-weight example misapplies the operator hypothesis on path spaces. A genuine corrected filtering theorem is available by adding uniform target/proposal domination and an initial weight bound, and proving the multistep centered Feynman–Kac estimate below.

## Source evidence actually inspected

Fetched https://arxiv.org/pdf/math/0508594 into memory and extracted PDF text with PyMuPDF. The PDF has 28 pages. Inspected PDF pages 14–15 and 23–26 only; this is not a claim to have read the full article. No other cited full text was read in this branch.

Actual PDF p.14 limits the long-time discussion to filtering tests:

> “For simplicity, we assume that the state space X is included in the real line and that the studied filtering function ϕ:x1:t → ϕ(xt) is real-valued.”

PDF p.15, Theorem 5, states the same hypotheses as the plan: bounded test oscillation; g(x|x')/g(x|x'')≤C; qt(x|x')/qt(x|x'')≤C; 0<f≤f(y|x)≤fbar. Its conclusion is:

> “Then Vt(ϕ) is bounded from above in t (in the sequential importance resampling case).”

PDF p.26 concludes its proof with the displayed assertion

> υk(xk−1,xk) = [f(yk|xk)g(xk|xk−1)/qk(xk|xk−1)] / E_{π̃k}{f(yk|xk)g(xk|xk−1)/qk(xk|xk−1)} ≤ C² fbar/f.

This assertion is invalid under its displayed within-parent ratio assumptions: those compare two rows of g, and separately two rows of q; they never compare g with q. The repository counterexample makes C=f=fbar=1 while υt(1)=1/(2εt)>1. Thus there is an explicit error in the published source proof as read, not merely missing local authoring. The source's statement as transcribed in the plan is false for time-varying proposals.

The BCS-42 plan line 193 says:

> “For a separate bounded-asymptotic-variance-in-time result, require finite test oscillation … uniform transition and proposal density ratios … and likelihoods …; this is Chopin Theorem 5's restrictive asymptotic-variance condition …”

That source attribution is faithful to the displayed theorem, but the design cannot treat the false implication as an established supplier. Plan table line 475 repeats the same insufficient condition. It also needs the filtering-test scope explicit rather than arbitrary path observables.

## Independent carrier checks

1. **Dobrushin definition and density-ratio lemma: sound.** Event-supremum TV has values in [0,1]. A normalized density ratio p≤Cq implies ∫min(p,q)≥1/C, hence TV≤1−1/C. Pair-dependent almost-everywhere exceptional sets are harmless because each pair is estimated separately before taking the supremum. No common all-pairs null set is needed.

2. **Variance unrolling: sound under the stated recursive moment class.** Conditional covariance gives Cov_{π̃s}(u)=πs−1 Cov_{ks}(u)+Cov_{πs−1}(ksu). Multinomial selection adds precisely the latter covariance to V_{s−1}; for πs h=0 this gives V_s(h)=V_{s−1}(E_s h)+π̃s(υs²hhᵀ). Mean preservation keeps every backward iterate centered, so induction yields the stated finite nonnegative summands. The local proof is not supplying an unproved contraction assumption.

3. **Backward-operator lemma: sound but unnecessarily restrictive.** Its actual text assumes osc(E_s h)≤β osc(h) for every bounded real h. Substituting h=1 forces E_s1 to be constant. Mean preservation forces that constant to equal 1. Generic observation-weighted HMM operators have E_s1(x) equal to the predictive likelihood divided by its πs−1-average, so they fail this condition. This is not a logical contradiction in the lemma; it is a scope limitation.

4. **Current B-plus-operator theorem: sound as an abstract sufficient theorem.** Bounded weights, bounded tests, and bounded backward images give recursive moment membership; unrolling and a geometric series give B²(Δϕ)²/(1−β²). A minor proof wording improvement is to derive global boundedness of forward images from the stated oscillation hypothesis/constant preservation, rather than saying the a.e. bound υ≤B alone implies a pointwise B‖h‖∞ bound for every parent. An a.e. proposal bound gives that pointwise estimate only for πs−1-almost every parent without further version assumptions. Under the current all-h oscillation assumption, E_s1=1 gives |E_s h|≤‖h‖∞ directly.

5. **Counterexample: correct.** The true last-state law is Bernoulli(1/2), q_t=Bernoulli(εt), εt=2^(−t−2). Both within-parent ratios equal one, likelihood is one, and test oscillation is one. The normalized weights are 1/(2εt) and 1/[2(1−εt)]. For the centered terminal indicator E_t(ϕ−1/2)=0, so every earlier unrolled contribution vanishes. The terminal contribution is exactly

   V_t(ϕ)=1/(16εt)+1/[16(1−εt)],

   which diverges. Every finite-horizon moment is finite because every state space at fixed time is finite and all proposal probabilities are positive. This witnesses an actual finite-horizon CLT variance obstruction, rather than exploiting a failed integrability hypothesis.

6. **Concrete consumer defect in ex-smc-bounded-weights-with-mixing.** It uses path particles but states “E_sh=Kh” and “maps every function to its uniform average.” With unit likelihood/weights and independent uniform appended transitions, take h(x0:s)=1{x0=1}. Then E_s h(x0:s−1)=1{x0=1}, so its oscillation remains one. The claimed β=0 hypothesis for all bounded path functions fails. The terminal-indicator computation V_t=1/4 is correct, as is contraction on last-state functions. Fix the application by specifying the last-state function subspace and its backward closure, or by using the corrected filtering theorem below. Merely asserting uniform mixing of the appended kernel does not mix retained ancestry.

## Minimal abstract interface repair

The operator lemma can assume osc(E_s h)≤β osc(h) only for bounded h with πs h=0. Mean preservation ensures that every iterate used in its proof meets that condition. This strictly weakens the original assumption without losing the original theorem. Specify that the relevant images are bounded and well-defined; for path particles this condition still may be too strong if imposed on all centered path tests. A version for a designated backward-invariant function family, including terminal last-state functions, is more useful.

This repair alone does not derive contraction from g/q ratios. A one-step β<1 condition may fail in observation-weighted models even when the multistep centered semigroup has geometric decay. Retain the abstract theorem as a sufficient specialization and add a genuine HMM supplier rather than substitute a narrower condition for the originally promised HMM result.

## Full corrected HMM result and proof

Use one fixed standard-Borel state space with a common dominating measure, measurable positive true transition densities g(z|x) and proposal densities q_s(z|x), and positive likelihoods f_s(z). Require g(z|x)≤C g(z|x') for all parent states x,x' and almost every z, with C≥1; use versions adequate to form the displayed kernels. Suppose 0<a≤f_s(z)≤b<∞, uniformly in s,z. Add the genuinely missing cross-model domination g(z|x)/q_s(z|x)≤D<∞ uniformly (with support inclusion), and a bounded initial normalized incremental weight υ0≤Binit. Set B=max(Binit,Db/a) and ρ=1−C^(−2). Consider bounded **last-state filtering tests** ϕ(x0:t)=ψ(xt). No within-parent q-ratio assumption is required in this corrected proof.

For k<t, define the unnormalized true Feynman–Kac semigroup

Q_{k,t}ψ(x)=∫[∏_{j=k+1}^t g(xj|xj−1) f_j(xj)] ψ(xt) dx_{k+1:t},

with xk=x and ηk the filtering law. Let H_{j,t}=Q_{j,t}1, H_{t,t}=1. Positivity and bounded likelihoods ensure all finite-horizon H are positive and finite. First-transition row comparison yields H_{k,t}(x)≤C H_{k,t}(x') for every pair, hence r_{k,t}=H_{k,t}/ηk(H_{k,t})≤C.

The future-conditioned transition from time j−1 to j is

L_{j,t}(x,dz)=g(z|x)f_j(z)H_{j,t}(z) dz / H_{j−1,t}(x).

It is a probability kernel. Its row ratio is bounded by C²: the numerator g ratio is ≤C, and H_{j−1,t}(x')/H_{j−1,t}(x)≤C. The current density-ratio lemma therefore gives δ(L_{j,t})≤ρ. For a probability kernel K, osc(Kh)≤δ(K) osc(h), proved directly from event-supremum TV by layer-cake applied to (h−inf h)/osc h. Composing gives osc(P_{k,t}ψ)≤ρ^(t−k)osc ψ for P_{k,t}=L_{k+1,t}⋯L_{t,t}=Q_{k,t}/H_{k,t}.

Normalized incremental operators telescope on filtering functions:

E_{k+1:t}h=Q_{k,t}h/ηk(Q_{k,t}1)=r_{k,t}P_{k,t}h.

For h=ψ−ηtψ, mean preservation says ηk(r_{k,t}P_{k,t}h)=0. Since r>0 and ηk r=1, P_{k,t}h has mean zero under the tilted probability rηk. Consequently its global infimum is ≤0 and global supremum ≥0, so ‖P_{k,t}h‖∞≤osc(P_{k,t}h). Therefore

‖E_{k+1:t}(ψ−ηtψ)‖∞≤Cρ^(t−k)Δψ  (k<t).

At k=t the bound is Δψ. The n=0 convention is handled separately and avoids 0^0 ambiguity when C=1.

For s≥1, the normalized path incremental weight is

υs(x,z)=[g(z|x)f_s(z)/q_s(z|x)]/[ηs−1(g f_s)],

and its normalizing denominator lies in [a,b]. Thus υs≤Db/a≤B. Bounded weights and finite-horizon bounded backward filtering images put these tests in the necessary recursive moment classes. The established variance unrolling then yields

V_t(ψ)≤B²(Δψ)²[1+C²∑_{n=1}^tρ^(2n)]≤B² C²(Δψ)²/(1−ρ²).

An optional sharper calculation uses υ²≤Bυ and gives B in place of B², but this is unnecessary for restoring the original scope and should not distract from the missing domination condition.

The smallest substantial missing supplier is **one lemma on centered filtering Feynman–Kac semigroup contraction**, containing the factorization, future-conditioned kernels, density-ratio application, and zero-mean estimate above. The short TV-to-oscillation argument may be included locally; no new general theory is required. The existing Dobrushin definition and density-ratio lemma remain sound suppliers. Add the corrected HMM theorem as a direct unrolling corollary or extend the existing theorem to a multistep estimate Aρ^(t−k), retaining its present one-step criterion as a specialization.

## Owner dispositions and limitations

Correct both BCS-42 design passages to identify the source gap, retain filtering scope, and add proposal domination plus initial weight bound. Preserve the original ratio-only counterexample. Retain the abstract sufficient theorem; weaken its operator criterion to centered tests if editing its interface, and check the bounded-weight example as above. The counterexample and fixed-horizon degradation example consume only variance unrolling and need no substantive change from this contraction repair. Both BCS-42 page objectives should accurately distinguish the corrected HMM theorem from the abstract sufficient criterion.

This branch proves the displayed replacement independently; it does not certify current carriers or native readiness and does not claim an authoring/gate pass. Source-scope reconciliation remains an owner action. No general path-observable time-uniform theorem follows: a retained initial-state test can accumulate resampling variance despite uniformly mixing transitions.

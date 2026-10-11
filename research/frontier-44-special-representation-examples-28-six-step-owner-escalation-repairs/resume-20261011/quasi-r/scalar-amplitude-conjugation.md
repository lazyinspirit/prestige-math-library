# Integer shear amplitudes do not resolve tensor escape

This is a new proof investigation under the existing renewed authoring authority.
It is not another review/repair round, a tensor counterexample, an acceptance,
or a gate receipt. Only this exclusive evidence folder was written.

## A proved route elimination

The following argument applies both to the distinct-cyclotomic chain
`lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains` and to
the newer periodic chain
`lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain`.
Fix a cut at J. Replace each outgoing shear T_i/p_i by
lambda_i T_i/p_i, with nonzero integer lambda_i. All the module-construction
arguments remain valid: consecutive products still vanish, modular
commutators remain divisible by p_i, the integral cross terms are merely
multiplied by integers, and both regular-chart valuations remain positive.

Put h_0=1 and h_(i+1)=lambda_i h_i. Let H act on the standard constituent
V(n_i) by the scalar h_i. This is an invertible field U-module map on the
algebraic direct sum. It preserves weights and commutes with the standard
factor bar, since its scalars are integers. Directly on each constituent,

`H T_i H^-1 = lambda_i T_i`,

so `C_lambda=H C_1 H^-1` and
`H b^(1)_(i,a)=h_i b^(lambda)_(i,a)`.
Every term of the actual quasi-R operator is a tensor of U-actions, so
H tensor H commutes with that operator. It also commutes with the factor
bars and hence with the actual tensor bar Psi. All these equalities are
equalities of algebraic, finite-column operators, without completion.

Let g^(1,J) be the unique normalized corrected seed in the unscaled cut.
For the distinct-cyclotomic chain the seed is
`b_(0,0) tensor b_(0,0)`; for the periodic chain it is
`b_(0,0) tensor b_(0,2)`. Both have constituent indices 0 in both factors.
Applying H tensor H fixes the seed coefficient, multiplies each other raw
coordinate `(i,a;l,b)` by the integer h_i h_l, preserves q Z[q] correction
coefficients, preserves strict weight transfer, and preserves bar fixation.
Finite-cut normalized uniqueness therefore gives

`g^(lambda,J)=(H tensor H)g^(1,J)`.

In particular the raw endpoint coefficient at
`b_(J,0) tensor b_(J,n_J)` satisfies

`f_J(lambda)=(lambda_0 ... lambda_(J-1))^2 f_J(1)`.

Thus endpoint nonvanishing is unchanged. Divisibility by a specified
cyclotomic polynomial is unchanged in Q[q]; it is also unchanged in Z[q]
because the cyclotomic divisor is monic and primitive, so divisibility of
the scaled polynomial implies divisibility of the original polynomial by
Gauss's lemma. Generic nonzero integer amplitudes therefore cannot avoid an
endpoint cancellation or supply the missing nondivisibility induction.
The assertion does not cover q-dependent, bar-fixed rational amplitudes:
their multipliers need not preserve q Z[q], so the normalized-uniqueness
step above would fail.

## Exact check and actual reading

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md fully. Read the complete
two original quasi-R carriers, both chain-construction carriers, the structural
counterexample, the renewed source/support investigation, the earlier tensor
escape investigation and its complete exact scripts. On learning that the
original construction team remained active, also read the complete current
`quasi-r/renewed-authoring/periodic-module-and-finite-cut-coherence.md` and
`finite-cut-periodic-chain.py`. No external authoritative source was acquired
or read by this investigator; predecessor source-reading reports are context.

`scalar-amplitude-check.py` reuses the retained exact finite-cut experiment
unchanged and computes both scaled and unscaled normalized corrections.
The actual command

`python3 research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/resume-20261011/quasi-r/scalar-amplitude-check.py`

exited zero. At cut 1 with amplitude 2, all three returned raw coordinates
matched the conjugation formula and the endpoint multiplier was 4. At cut 2
with amplitudes 2,-3, all nine coordinates matched and the endpoint multiplier
was 36. The finite solver returns only after the entire exact bar residual
vanishes. These computations check the new identity in two cuts; the general
identity is proved above, and no all-cut escape follows from these checks.

## Exact unresolved inference and active-team boundary

For the distinct-cyclotomic chain, the first four computed endpoints do not
establish `Phi_(2(J+3))` nondivisibility for every J. The prior pole mechanism
needs precisely that next-divisor input, not merely endpoint nonvanishing.
The proof above rules out integer amplitude tuning as a way to obtain it.

The new periodic route has a proved finite-width state reduction, a nonzero
infinite raw bar graph, and exact finite-cut comparison. A bar graph can have
infinite reach while its normalized corrected seed has finite support, since
corrections at other vertices can cancel propagation. An all-cut escaping
corrected coordinate is still required. The current periodic coherence report
explicitly assigns that task to an active escape constructor and does not
claim its completion. No duplicate periodic escape work or carrier edits are
performed here.

The original arbitrary-based finite-type tensor-lift conclusion remains
unresolved. In the lemma, finite-type integral action is in steps 1.3 and 2.1;
the final Statement additionally promises normalized tensor globalization.
In the tensor theorem, F2 imports the missing supported correction, step 3.2
requires a finite correction closure proved only in bounded/ordered cases,
and step 4.1 uses the resulting corrected A-basis to obtain balancedness.
A sound resolution needs finite supported corrected lifts and finite inverse
transitions for the original unrestricted domain, or an actual all-cut quantum
counterexample. Neither structural envelope failure nor this amplitude result
supplies either resolution.

Current raw and canonical item hashes and the freshly recomputed direct and
indirect dependency consumers are in `current-bindings.json`. It is a disk
binding and impact inventory, not a consumer mathematical audit. All original
Statements, item carriers, aggregate evidence, run controls, native histories,
review caps and gates are untouched by this investigator.

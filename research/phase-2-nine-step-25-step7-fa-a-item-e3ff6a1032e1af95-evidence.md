# Final adjudication: thm-conditional-monotone-convergence

Run: phase-2-nine-step-25. Group: a. Queue position: 1 of 1 in
`research/phase-2-nine-step-25-step7-fa-a-item-e3ff6a1032e1af95.json`.
Disposition: accepted-after-review. Source status: familiar.

## Exact scope and materials examined

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md. Independently read the
complete current theorem and all seven declared dependencies:
`def-conditional-expectation-for-nonnegative-variables`,
`lem-conditional-expectation-is-unique-almost-surely`,
`thm-basic-algebra-and-order-properties-of-conditional-expectation`,
`thm-monotone-convergence-for-the-integral`,
`prop-closure-properties-of-measurable-functions-used-by-the-integral`,
`def-axiom-of-choice`, and `cor-integral-over-a-null-set-vanishes`, all under
`items/`. Also read the local measurable-function definition,
`def-conditional-expectation-given-a-sigma-algebra`, and
`def-conditional-expectation-as-an-ae-class` to check the exact conventions.

Read `library/probability/conditional-expectation.md` and its examples companion;
the item's entries in the batch-4 manifest, coverage and proof contracts; the
contract's boundary and risk records; group-a Step-7 context (no reader concerns
or alerts); both exact rejection rows in the run judge JSONL; both original
fatal-adjudication/hash-correction rows; Alpha's item-specific repair report;
and the unresolved per-item closure JSON. These are current run artifacts
prefixed `research/phase-2-nine-step-25-`.

The probability space and sub-sigma-algebra are fixed by the page's definitions.
No completeness is assumed. Conditional expectations denote almost-sure classes.
AC is explicit, including the inherited existence choices and countable choice
of versions. The nonnegative construction permits infinity. The theorem retains
extended uniqueness, increasing convergence, independence of increasing
integrable nonnegative approximations, and the coverage-promised decreasing
clause with integrable V_0 and V.

## Independent mathematical basis

The initial rejection (judge item hash
`e1bf36b345d3cc54f6a7e4c65e79db45ab1ec510ebdb9e9a9b451ba6e21fbb9d`)
identified the inappropriate V_1 anchor for the sequence starting at zero.
Alpha replaced it by V_0 throughout the actual claim, Given, and proof.
The current repaired judge hash in the final rejection is
`2299975f4804c0f42bee48c58adf48adf91d1e1ffe209306c93f845032de2f65`;
Alpha records its guard hash as
`bb3b3a0b8c10880fe90ad63dd1fdda3f9bf9be82f25b69ed217ace9060c57f3d`.
The recorder will independently bind the current hashes.

The final Terra rejection says F4's level-set assertion is unsupported by the
quoted closure proposition. I do not uphold that rejection. Level-set
measurability is part of the meaning of a measurable function, not an additional
regularity hypothesis. The cited proposition explicitly uses that definition
in L1 and proves the sublevel/superlevel equivalence in step 1.1. Its statement
also suffices, together with that definition, for the localized difference in
the consumer's step 2.1:

For positive integers k,m, let E={Z<=m}. This is measurable since its complement
is a defining superlevel. On the restricted measurable space E, Z is finite
and nonnegative. By clause 2, -Z is measurable there; by clause 1, D=Y-Z is
measurable there, since Y is nonnegative extended-valued and no infinity minus
infinity is formed. Then

    A_{k,m} = {x in E : D(x) >= 1/k}
            = intersection over j>=1 of {x in E : D(x) > 1/k - 1/j}

belongs to G. Restriction to a measurable E preserves measurability by the
preimage definition. Thus the short explanation already supplied in step 2.1
is valid; F4 is a summary using the ordinary definition, not an unsupported
new theorem. The proof contract quotes the actual proposition without altering
its statement. No supplier repair or new lemma is necessary.

On A_{k,m}, the Z integral is at most m P(A_{k,m}) <= m. Equal event integrals
therefore make the Y integral finite as well. Integrating Y >= Z+1/k forces
P(A_{k,m})=0 using finite quantities. If Y>Z, then Z is finite, some integer m
bounds it, and some reciprocal integer fits below the positive gap (also when
Y is infinite). Conversely every A_{k,m} has Y>Z. Their countable union is
exactly {Y>Z}. Interchanging Y and Z proves uniqueness, including infinite
values. The identical localization with integral inequalities proves extended
order in step 3.1. These arguments never subtract infinite integrals.

Step 1.1 applies ordinary MCT to truncations and their increasing conditional
versions on each G-event. The null-integral corollary justifies their measurable
null modifications. This proves the event characterization without assuming
the well-definedness obligation it is discharging. It also establishes
invariance under ambient measurable null changes of the input.

In step 4.1, order failure sets of output versions are G-measurable and null;
their countable union can be set to zero without assuming G complete. For
input almost-sure convergence and monotonicity one instead removes a measurable
ambient null set, setting both sequence and limit to zero there. This preserves
all event integrals and yields pointwise MCT. Output MCT, input MCT and the
proved extended uniqueness identify the limit class. The same reasoning
applies to every increasing integrable nonnegative approximation. Integrable
nonnegative conditional versions agree with the extended construction by the
same event characterization and uniqueness.

Finally, off the common ambient null set, V <= V_n <= V_0, so
|V_n| <= |V_0|+|V|, and 0 <= V_0-V_n increases to V_0-V. All relevant
variables are measurable and integrable under the written hypotheses.
Conditional increasing convergence and linearity give the increasing
differences E[V_0|G]-E[V_n|G]. The fixed first term is finite almost surely;
subtracting yields the full decreasing sequence, including index zero.

The historical risk review still describes the former V_1 anchor. This is
superseded evidence, not the current proof: the current contract's step-5-1
derivation and Alpha's explicit repair report both use V_0. This FA review
independently checks that correction and preserves the historical review.
The manifest's increasing-convergence summary is compatible with the theorem;
the coverage's additional decreasing-limit promise is fulfilled.

These arguments are familiar elementary measure theory. No external source
verification was necessary, and no web source was consulted. Source locators in
the inherited item and contract are not represented as fresh FA source reading.

## Focused checks and resolution

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-conditional-monotone-convergence.md`:
  exit 0; one item passed, zero failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-4.proof-contracts.json --strict --items thm-conditional-monotone-convergence`:
  exit 0; one item checked, zero errors and zero warnings.
- The same strict focused command with
  `research/phase-2-nine-step-25-proof-contracts.json`:
  exit 0; one item checked, zero errors and zero warnings.

These are local format/contract checks, not mathematical judge verdicts. No
consumer rejudge was requested and no pass stamp was created.

No mathematical content or dependency was edited by FA. Inspected the owning
consumer-batch input specified by `briefs/tasks/frontier-dependency-ledger.md`:
`research/phase-2-nine-step-25-batch-4.cross-batch-dependencies.json` is empty.
The run-local conditional-expectation dependencies here are in the same batch,
and the other dependencies are published; no cross-batch edge or dependency
repair was introduced, so no ledger row requires an update. Repair scope has
not expanded.

Unresolved mathematical obligations: none for this queued item. Next action:
record accepted-after-review through the exact dispatched terminal recorder,
then return control to the waiting Alpha. Engine-owned later certification and
closure remain separate from this terminal decision.

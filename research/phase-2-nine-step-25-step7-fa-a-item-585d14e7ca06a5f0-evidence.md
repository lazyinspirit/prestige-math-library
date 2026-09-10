# Final adjudicator evidence

Run: phase-2-nine-step-25. Group: a. Queue position: 1 of 1 in
`research/phase-2-nine-step-25-step7-fa-a-item-585d14e7ca06a5f0.json`.
Item: `thm-conditional-fatou-and-dominated-convergence`.
Decision: `accepted-after-review`. Source status: `familiar`.

## Scope and evidence inspected

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md. Independently read the
complete current item and all six declared dependencies: conditional MCT,
basic algebra/order of conditional expectation, ordinary DCT, the conditional
expectation class definition, AC, and sequential measurable extrema/limits.
Also read the nonnegative conditional-expectation definition, including its
truncation construction and well-definedness interface. Exact paths are
`items/<id>.md`, with dependency IDs as declared in the reviewed item's frontmatter.

Read both `library/probability/conditional-expectation.md` and its
`conditional-expectation-examples.md` companion; the owning batch-4 page
manifest and the relevant coverage entries (Lemma 1.10(ii)-(iii)); the current
batch-4 proof contract, including all citations, derivations, boundaries and
`risk_review`; and the group-a Step-7 reader context (no concerns or alerts).
The aggregate contract was separately checked against current content.
Read the exact two judge rows and initial fatal adjudication/corrected guard row
in the run's `judge.jsonl` and `judge-adjudications.jsonl`, the owning Sol report
`research/phase-2-nine-step-25-alpha-step7-a.md`, and the item-specific closure.

The conventions are a probability space with a sub-sigma-algebra, almost-sure
classes rather than canonical pointwise versions, extended nonnegative
conditional expectations, and AC for inherited existence and countable version
selection. Neither sigma-algebra is assumed complete. The A-page puts the
nonnegative definition and conditional MCT before this consumer. No conditional
probability kernel is used. The full coverage promise includes extended Fatou
and both almost-sure and L1 dominated convergence.

## Independent mathematical decision

The original rejection at context
`a76f9f3b85a79dd33a5cb1f47dfa094175cff923647498f3618b959cc629ac92`
correctly identified missing measurability in the dominated clause. Sol has
explicitly required real-valued measurable X_n and X in the current statement
and Given and synchronized the manifest. Almost-sure domination alone would
not have supplied that assumption on a noncomplete space. The current repair
resolves that defect without weakening either convergence conclusion.

The final Terra rejection at context
`9dc1ba7923172b3a3dcbce15e44d1bb8e65e18a120e91630dc360b5e1f243bf0`
objects that F1's quoted MCT statement does not state extended order separately.
This is not an unsupported mathematical inference. For any nonnegative
measurable A <= B almost surely, apply that very MCT statement to the sequence
A, B, B, ... . Its conditional expectations increase almost surely to E[B|G],
so E[A|G] <= E[B|G]. This argument uses the quoted statement alone, allows
infinite values, and is valid with zero-based indexing. In addition, the
complete cited supplier already proves this exact extended order assertion
in proof step 3.1, by finite-level event localization. Thus neither an edited
supplier statement nor a new lemma is required to justify F1.

In consumer step 1.1 the nonempty tail infima Z_n are nonnegative measurable
and increase to liminf X_n. Apply the preceding order consequence to every
pair Z_n <= X_k, k >= n. Countably many pairs permit a single measurable null
exception set for their chosen conditional versions. Outside it,
E[Z_n|G] <= inf_{k>=n} E[X_k|G]. Conditional MCT identifies the limit on the
left; the increasing tail infima on the right give the claimed liminf.
There is no subtraction of infinite integrals and the infinite endpoint is valid.

For step 2.1, integrable domination gives integrability of each X_n and X,
and |X| <= W almost surely. On a common ambient measurable conull set the
functions W+X_n and W-X_n are nonnegative and converge to W+X and W-X.
Their use as nonnegative inputs is legitimate under the explicit class
convention: equivalently take their measurable positive parts, which agree
almost surely. This does not assume completeness or require modifying an
output on an ambient set outside G. The supplied class definition makes
conditional expectation invariant under input almost-sure equality, and
conditional MCT's event characterization does the same for extended inputs.

Linearity identifies the conditional classes with T+U_n and T-U_n, where
T=E[W|G], U_n=E[X_n|G], U=E[X|G]. Positivity, order and the modulus bound
give |U_n|,|U| <= T almost surely. The variable T is integrable and finite
almost surely. Conditional Fatou for the two signs gives
T+U <= T+liminf U_n and T-U <= T-limsup U_n. On a common G-measurable
conull set all these inequalities and bounds hold; subtracting the finite
T traps both limits at U. This is the asserted almost-sure convergence for
any countably selected versions.

For step 3.1, |U_n-U| tends to zero almost surely and is dominated by the
integrable 2T. The total-expectation identity in the declared algebra/order
supplier gives ET=EW. Ordinary DCT therefore gives E|U_n-U| -> 0. Zero
dominator, constant sequences and extended Fatou endpoints cause no gap.
AC is declared and covers the inherited existence and the countable choices;
the contract explicitly records the latter use in step 1.1.

This mathematics is familiar enough that external verification was not
required: the contested inference is an immediate application of the current
local MCT statement, and the remaining argument is the standard two-sign
Fatou proof and ordinary DCT. No external source was consulted in this FA
review. Existing source-reading notes belong to their original authors;
this receipt does not claim to have repeated their readings.

## Focused checks and scope accounting

All commands completed with exit status 0:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-conditional-fatou-and-dominated-convergence.md`: 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-4.proof-contracts.json --strict --items thm-conditional-fatou-and-dominated-convergence`: 0 errors, 0 warnings, 1/1 checked.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-proof-contracts.json --strict --items thm-conditional-fatou-and-dominated-convergence`: 0 errors, 0 warnings, 1/1 checked.

These are structural checks; the mathematical basis is the independent
argument above. No consumer or dependency bytes were edited and no new
dependency or scope item was added. Under
`briefs/tasks/frontier-dependency-ledger.md`, the owning consumer-batch input is
`research/phase-2-nine-step-25-batch-4.cross-batch-dependencies.json`; it was
read and is empty. This item's run-local suppliers are in the same batch and
its remaining suppliers are published. Since this FA decision repairs no
dependency or edge, no ledger change or prerequisite-repair licence is needed.

Unresolved mathematical obligations: none for this queued item. Next action:
record this acceptance through the exact authorized terminal-resolution
command, then return control to the engine/owning Alpha. This decision is not
a judge verdict or pass stamp and requires no third consumer judgment.

# Smooth extension: bounded published audit

## lem-smooth-extension-from-a-closed-neighbourhood

Disposition: **A-R**, owner-authorized local repair, 2026-09-09. No judge or
whole-closure certification. Home: `smooth-partitions-of-unity-and-exhaustions`,
canonical order 445.

Before SHA256:
`4b578a8d7755914ce5086f381a1c3056fce8a98f26c844b471fbae8c7fc38aac`.
After SHA256:
`a33ebeb7085eda83702841213b1bcb4813caf862c0ff271c4c0225b2cc251e19`.

The old cutoff/pasting construction was mathematically sound relative to its
cutoff, but its unconditional existence statement failed to inherit the
supplier's now explicit countable-choice hypothesis. It also asserted product
smoothness without a declared supplier. No missing Phase-2 mathematics is needed.

Read the full target, repaired Urysohn proof, smooth-pasting proof and its three
direct supplier proofs, countable-choice definition, derivative-algebra proof,
and multivariable derivative definition. This elementary extension argument
did not require unfamiliar-mathematics source recovery; no claim is made to
have newly read the target's legacy Lee/Merry/Hitchin source URLs.

All five current direct dependencies are published and earlier, or earlier
on the same A page:

| Supplier | Home/order | Exact use |
|---|---|---|
| `def-countable-choice` | countability-and-uncountability, 18 | Explicit AC_omega hypothesis only; no recorded consistency result used |
| `thm-algebra-of-derivatives` | the-derivative-and-mean-value-theorems, 153 | Apply product rule successively to coordinate partial derivatives |
| `def-ck-and-multi-index-notation-in-several-variables` | mixed-partials-taylor-and-extrema, 231 | Smooth product follows by induction on derivative words, without mixed-partial interchange |
| `lem-smooth-maps-paste-over-an-open-cover` | smooth-manifolds-and-smooth-maps, 443 | Paste on the actual two-member open cover U and M minus supp(chi) |
| `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set` | smooth-partitions-of-unity-and-exhaustions, 445, earlier in page | Obtain cutoff under countable choice |

Urysohn supplier SHA256:
`b83de635c83d1b29dae8ede2f6bc6e56fb26d60e076c7cf317b780e964235100`.
Pasting supplier SHA256:
`9ffed3326e7888730d8ff39231da895f8c50e88c29b3b11652711643e528b13b`.

Exact choice use is inherited from Urysohn's countable coordinate witnesses,
finite annular covers, and countable bumps. No stronger AC assumption was
introduced. A separately exported supplied-cutoff clause is choice-free:
set S=supp(chi), paste chi*f on U with zero on M minus S, and close the
nonzero locus inside the already closed S. Equality near C follows on the
cutoff's neighbourhood intersected with U. Empty cases are included. This
proves support containment, not merely pointwise vanishing outside U.

Changes: the one owned item plus this report. Removed stale judge/audited
stamps and recorded only owner-authorized local verification. Provenance proof
is now ai-altered. No supplier, shared ledger, plan, prose, or live edits.

Checks actually run:

- Targeted precheck: 1 checked, 0 failing.
- Targeted rendercheck: 1 file, renderer YAML and KaTeX clean.
- Targeted git diff --check: clean.
- Canonical direct supplier order checked against current plan-spec.json.

Parent amendments: reconcile the one classification row and current canonical
contract/deps/hash. Three textual direct consumers were discovered but **not
audited or classified defective** here:
`cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth`,
`fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff`,
and `lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions`.
Determine their exact use before propagating choice: explicit-cutoff or
counterexample arguments do not inherit existence choice automatically.

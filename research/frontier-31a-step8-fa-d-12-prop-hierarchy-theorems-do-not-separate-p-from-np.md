# FA terminal evidence — queue d, position 12

Item: `prop-hierarchy-theorems-do-not-separate-p-from-np`. Decision: repaired.

Read the proposition, all four original direct dependencies, the published
`thm-verifier-and-nondeterministic-definitions-of-np-agree` in full, batch-21
contract, manifest, coverage and page conventions, risks, both Terra reasons,
and Alpha's adjudication. Alpha's narrowing from formal logical nonimplication
to a comparison of the stated conclusions is appropriate. The final Terra
rejection is nevertheless correct: the verifier definition alone does not
supply the NTIME-union identification used in the proof.

Added the existing published equivalence as a direct dependency and L1,
without changing it. Its statement says precisely that verifier-NP membership
is equivalent to NTIME(n^k) membership for some k. Combined with def-p, this
licenses comparison of the two unions. The proof now spells out the missing
quantifiers: a P/NP separation needs a single NP language outside every
deterministic polynomial bound, whereas same-model hierarchy witnesses vary
with the compared bounds. Equality would require simulations for all NP
languages. The item explicitly characterizes what the statements assert;
it does not assert metamathematical independence. This remains the page's
intended explanatory proposition, not a claim resolving P versus NP.

This is familiar elementary quantifier comparison and the standard
verifier-machine equivalence, whose exact published proof was inspected.
No external verification was necessary. The hierarchy dependencies are used
only for their same-model statement forms; no new proof of their results is
needed for this proposition. The queued nondeterministic theorem is reserved
for its own position 14 review.

Updated this item's direct-dependency manifest entry and batch/consolidated
proof contracts. No dependency item was edited, so no prerequisite-repair
licence is required. Focused precheck, rendercheck, and strict proof-contract
checks passed. No judge stamp was created.

Unresolved obligations: none. Next: record position 12, then review position 13.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.

# FA terminal evidence — queue d, position 6

Item: `ex-time-diagonal-language-respects-its-budget`. Decision: repaired.

Read the example and both direct dependencies in full, the hierarchy A/B pages,
batch-21 contract and manifest/coverage conventions, risk reports, both Terra
reasons, and Alpha's adjudication. Alpha repaired parsing absorption but Terra
correctly identified the remaining quantifier error: a multiplier and machine
constant cannot be treated uniformly over all input codes.

The repair fixes M and the positive multiplier c first, then varies the padded
input length. Its exact cost is O_M(n+c f(n) log(c f(n)+2)), plus O_c(n+f(n))
clock construction. For fixed c and eventually f>=n, this is
O_{M,c}(f log(f+2))=o(g). Each positive reserve therefore has an eventual
threshold depending on M,c and the reserve. Complementation takes constant
time. Short codes may time out; a global finite table for every pair is not
claimed. This example proves the fixed-candidate estimate, while the cited
lemma owns construction of the globally guarded diagonalizer.

The asymptotic estimate and order of quantifiers are familiar elementary
analysis of algorithms; no additional external verification was needed.
The simulator convention was independently source-verified at position 2;
this item adds only the fixed-constant calculation. The explicit floor avoids
relying on a bare constructor definition to imply n<=f.

Updated this item's batch and consolidated contracts. Focused precheck,
rendercheck, and strict proof-contract checks passed. No dependency edit
or judge stamp was made. No unresolved obligation for this item remains.
Next: reseal the compatible earlier simulator context, record position 6,
then begin position 7.

Context refresh at position 7: the enumeration now explicitly constructs its
step counter and distinguishes a cell cap from forced halting. Its fixed-pair
padding and step-clock behavior retain exactly the interfaces used here.
The current item bytes and prior mathematical decision remain unchanged.

Context refresh at position 8: the sibling padding lemma now specifies both
translated runtime bounds and their separate decider hypotheses. It retains
the existing delimiter convention and does not change the simulator or
clocked-pair interfaces used here. This item and its decision are unchanged.

Context refresh at position 10: the read-only workspace simulator now
distinguishes fixed-machine cell caps from uniform encoded-storage caps and
explicitly rejects overflow. This changes no time-clock, padding, or effective
decoding premise used by this item. Its bytes and decision remain unchanged.

Context refresh at position 11: the time-diagonal lemma now uses an actual
outer transition clock, with both constructors and fixed-pair eventual
completion explicit. This supplies the global cutoff underlying the budgeting
example and retains the simulator and enumeration conventions. This item
requires no change; its previously proved claim remains valid.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.

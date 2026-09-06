# FA terminal evidence: lem-hashing-commits-public-randomness

Disposition: repaired. Queue frontier-32, group a, position 3. Position 2
was recorded before opening this item.

Inspected the full lemma and its two direct dependency definitions, the IP
A/B pages, the direct public-coin conversion consumer, batch-2 coverage and
manifest, relevant batch notes, both current contract entries, group-a
conventions/concerns, refute-2 scope, Alpha report/adjudication and both
Terra rejections. The contract had boundary records but no dedicated
risk_review; one has now been supplied for the repaired argument.

Alpha correctly removed a misleading commitment title, but Terra's final
objection is valid: neither regimes nor challenge nor gap were defined.
The abstract finite hash-family definition does not imply efficient sampling
or membership tests. Those algorithmic conditions must not be silently
inferred from the variance identity.

The repair retains the complete moment claim. For p=1/|R|, summing the joint
law over a second input gives uniform marginals; this uses |U|>=2 even if S
is a singleton. Distinct indicators have covariance zero, hence the exact
variance is |S|p(1-p). With mu=|S|/|R|, the event N>0 has probability at most
mu, because N is integer and nonnegative. For mu>0, the squared deviation
on N=0 equals mu^2, so its probability is at most Var(N)/mu^2<=1/mu.
Therefore mu<=1/4 and mu>=4 give acceptance bounds 1/4 and 3/4 and gap 1/2,
including endpoints. Empty S gives zero expectation, variance and acceptance;
|R|=1 remains valid. No estimate divides by mu in the zero case.

The challenge asks for an element of S in the announced fibre. An unrestricted
prover succeeds exactly when the fibre is nonempty. The efficient public-coin
interpretation is expressly conditional on polynomial encodings, fair-bit
uniform sampling, hash evaluation and membership decision; the sampling
string is fully announced. This defines a concrete constant-factor promise
test, preserving the requested fibre-size distinction and the variance
interface used by the conversion theorem. It does not claim to implement the
whole hidden-coin conversion or a cryptographic commitment.

Source verification: https://theory.cs.princeton.edu/complexity/book.pdf,
Arora--Barak §8.4.1, PDF page 170 (zero-based), printed page 155: read the
complete set-lower-bound protocol and Claim 8.13.1 proof. It supports public
hash/preimage challenges with verifiable membership. The numerical 1/4 versus
4 regimes here are independently derived from the retained variance bound;
they are not attributed to that source's different factor-two analysis.

Synchronized this item's title/strategy in the batch manifest and its
numbered derivations, endpoint record and risk review in both contracts.
No dependency changed, so no prerequisite licence is required. Focused
precheck, real renderer, batch strict contract and merged strict contract
all passed (one item each, zero failures/errors/warnings). No judge stamp or
verdict was added. No unresolved mathematical obligation.
Next action: record position 3, then open position 4.

Context reseal during position 4: the recorder correctly detected that the
new protocol-value statement changes this same A/B page's supplied interfaces.
Reread the hashing lemma in full and checked the new interface: the latter
outputs an exact rational pair and its PSPACE threshold language; it adds no
hashing hypothesis or incompatible convention. The hashing item and both its
dependencies are unchanged and its numerical proof above still applies.
Reseal its exact current context before recording position 4. This is a
terminal receipt refresh, not another judge call or a new disposition.

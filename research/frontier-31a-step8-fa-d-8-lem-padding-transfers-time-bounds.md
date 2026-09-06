# FA terminal evidence — queue d, position 8

Item: `lem-padding-transfers-time-bounds`. Decision: repaired.

Read the item, padding definition and published resource-class dependency,
exact batch-21 contract, hierarchy page/manifest/coverage conventions and risks,
Alpha adjudication and both Terra reasons. Alpha correctly imposed p(n)>n,
which prevents a negative padding exponent. Terra correctly rejects the
unstated converse premise and undefined “corresponding decoded bound.”

The independent repair states two separate implications and supplies their
respective deciders. On total length N, validation costs O((N+1)^c) even on
malformed inputs; only a valid input then incurs t(n), with N=p(n). A finite
maximum over p(n)=N gives a genuine length-N bound without assuming that p
is injective or t is monotone. The set is finite because n<N. An empty
fiber incurs validation cost only. In the converse the newly hypothesized
u-time padded decider is run on the constructed pad, yielding exactly
O(p(n)^c+u(p(n))). At n=0 the p(n)>n hypothesis still supplies the delimiter
and a nonnegative unary exponent. At p(n)=n+1 the padding tail is empty.

This is familiar elementary encoding and time accounting; no external
verification was needed. The proof uses the local padding definition exactly
and does not infer either decider from the other before proving the relevant
implication. No dependency was edited. Updated the item's batch and
consolidated contracts and their boundary records.

Focused rendercheck and strict proof-contract checks passed. Precheck passed
after adopting its canonical phase numbering. No judge stamp was created.
Unresolved obligations: none. Next: refresh compatible earlier hierarchy
contexts, record this item, then begin position 9.

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

# FA terminal evidence — queue d, position 13

Item: `thm-immerman-szelepcsenyi-nl-equals-conl`. Decision: repaired.

Read the theorem, all original direct dependencies in full, the STCON
encoding definition, the reachable-count verifier and its count definition,
exact batch-22 contract/risk review, page/manifest/coverage conventions,
reader/refuter reports, Alpha adjudication, and both Terra reasons. Alpha
recognized that complement-STCON includes malformed strings, but its new
validation branch assumes an efficient validity interface never fixed by the
STCON definition. Terra is correct about this remaining unsupported premise.

The independent repair proves complement closure directly on the implicit
configuration graph of the given fixed decider. Every actual input x, even
an empty or arbitrary binary string, defines a valid graph; no malformed
external graph decoder is used. All K-bit strings are candidate names,
invalid configuration names are isolated, and accepting configurations have
edges to a fresh target. Direct record scans decide adjacency in O(K) space.
Thus target reachability is exactly acceptance, with no missing syntax case.

The work-space constructor supplies the cap; fixed-M encoding constants and
the logarithmic input-address floor give K=O(s). The existing inductive-count
algorithm uses vertex enumeration, edge queries, bounded paths, and verified
previous counts only. Its nested checks have fixed nesting depth, so the
implicit implementation keeps O(K) bits rather than a stack of all layers.
Every guessed field and loop is bounded, giving all-branch halting; exponential
certificate length is allowed and no certificate is stored. Complementing
twice gives equality. Binary unary-input counting constructs ceil(log2(n+2))
in logarithmic space, so the general theorem specializes to the exact local NL.

Source verification:
https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf
Harvard CS221 Lecture 5, section 3, pp. 2–3, Lemmas 8 and 9 and the entire
inductive-count construction through its conclusion. These support the true
previous-count invariant, positive-path checks, sequential certificate use,
and bounded-memory counting algorithm. The extension to an implicit graph
with O(s)-bit names is derived explicitly in this item's proof. The local
counting dependency and its verifier proof were independently checked for
both soundness and completeness, including the self-predecessor case.

No direct or indirect dependency item was edited. Removed unused reduction
premises from this item's deps and manifest and updated its own contracts
and risk review to the direct configuration-graph proof. Focused precheck,
rendercheck and strict proof-contract checks passed. No judge stamp was made.

Unresolved obligations: none. Next: record position 13, then review position 14.

Receipt refresh at position 14: the sibling nondeterministic hierarchy interface now explicitly states the page's eventual linear floors. Existing uses, including polynomial separation, satisfy these floors; this item's mathematical decision is unchanged. Resealed in queue order for the current page context.

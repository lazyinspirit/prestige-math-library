# Final-adjudicator evidence: `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`

Disposition: `accepted-after-review`.

I independently checked the current proposition against the `derived-functors` pair, the batch-11 manifest, the synchronized proof contract and risk review, all six cited dependencies, the supplied-resolution-data convention, both exact judge rejections, and both Alpha repairs.

The first Step-8 fatal defect was real: the old statement used `L_n^P F` and the change maps without quantifying `F` or its ambient categories.  The current statement fixes an additive functor `F:A -> B` between abelian categories and three supplied projective data on one domain, so every derived object and comparison map is typed.

The second fatal defect was also real: an existence theorem for some natural isomorphism does not by itself identify that isomorphism with the comparison-induced maps to which homotopy uniqueness is applied.  The repaired statement now defines `theta_{S,T}(A)` using any comparison map `S(A) -> T(A)` lifting `1_A`, while [L1] cites the exact objectwise construction and its naturality lemma.  If two such comparison maps are chosen, [L2] makes them chain-homotopic and [L3] makes their induced homology maps equal, so “any” is well defined; this one-line consequence is also the mechanism used throughout the displayed proof.

The identity and cocycle calculations are correct.  For `(P,P)`, the identity chain map is a comparison lift of `1_A`, so every comparison lift defining `theta_{P,P}(A)` is homotopic to it and induces the identity on `L_n^P F(A)`.  For `(P,Q,R)`, the composite of comparison maps `P(A) -> Q(A) -> R(A)` and a direct comparison map `P(A) -> R(A)` both lift `1_A`; comparison uniqueness makes them homotopic.  Additivity of `F` preserves the chain-homotopy equation, and homology preserves identities and composition, yielding `theta_{Q,R}(A) theta_{P,Q}(A)=theta_{P,R}(A)`.  Pointwise equality for arbitrary `A`, together with [L1]'s naturality, gives equality of natural transformations.

The proof contract quotes the actual objectwise-construction, naturality, homotopy-uniqueness, and homology-functoriality interfaces and maps them to the correct steps.  Its risk note isolates precisely the relevant coherence issue.  No canonical global resolution choice is asserted.

External verification was used for the comparison mechanism.  Charles Weibel, *An Introduction to Homological Algebra*, Chapter 2, Comparison Theorem 2.2.6, https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf, gives existence and uniqueness up to chain homotopy of projective-resolution comparison maps.  That uniqueness is exactly what forces independence of choices and the identity and cocycle laws after applying `F` and homology.

The Alpha repair is mathematically correct and complete.  No item, dependency, proof-contract, or metadata repair is required.

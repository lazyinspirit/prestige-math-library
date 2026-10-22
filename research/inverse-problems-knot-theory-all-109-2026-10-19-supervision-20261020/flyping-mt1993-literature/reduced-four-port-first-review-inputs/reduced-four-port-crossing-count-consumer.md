# Reduced one-boundary tangle crossing count

NEW source-first consumer draft, awaiting independent review. The two prerequisites are root-adopted research interfaces; this draft does not recheck their proofs. No canonical item, graph adaptation, or boundary-isometry theorem is created here.

## Actual source and retained inputs

The primary is Thistlethwaite, *On the algebraic part of an alternating link*, Pacific J. Math. 151 (1991), 317–333, especially the full Theorem 3.1 proof on printed p. 324 and Definition 2.2/Figure 1 on p. 319. For this consumer I read those actual pages, p. 325's corollaries, and the actual MT1993 Proposition 4.9 statement/proof and Figure 4.5 on pp. 146–147. The earlier full seventeen-page primary reading is not substituted for the specific consumer reading. No proof of an accepted research prerequisite is reviewed here.

**PD, adopted:** the root's pure-double interface, recorded by `root-pure-double-prerequisite-adoption.json`. Input is a finite alternating diagram D in a disk with exactly four boundary ports, no interior nugatory crossing and no inessential crossing in Definition 2.2's sense. Its shadow may be disconnected and it may have closed components. The actual reflected-identity pure double has exactly 2c(D) crossings and is adequate if c(D)>0. For any actual pair homeomorphism h between one-boundary tangle pairs, h on both copies descends to a homeomorphism of the actual doubled links. It transports the same endpoint permutation and the induced component markings; there is no independent gluing twist or arbitrary sewing permutation.

**AM, adopted:** the root's adequate crossing-minimality interface, recorded by `root-adequate-minimality-adoption.json`. At its declared finite evaluation, finite Reidemeister, isotopy-extension and general-support inputs, any adequate finite diagram A, including a nonalternating or disconnected one, and any equivalent diagram B satisfy

    c(B) >= c(A) + |w(B)-w(A)|.

The comparator is oriented and equivalent at AM's declared finite Reidemeister/isotopy-extension interface. The zero-crossing case has its separately stated interpretation. The ordinary inequality c(B)>=c(A) is all that is needed below. The pending/first-review history of this supplier is preserved by the root's adoption record; this consumer supplies no new review of it.

## Exact claim

Let D be a reduced alternating diagram in a disk, transverse to its boundary in exactly four ports. Here **reduced** includes both the standing exclusion of interior nugatory crossings and the exclusion of proper separator arcs through a crossing with both ends on the one boundary circle. Let E be any finite four-port disk diagram representing an equivalent ball tangle, and let h be a given homeomorphism of those tangle pairs. No boundary-pointwise condition on h is assumed.

Then c(E)>=c(D). Consequently, two equivalent reduced alternating one-boundary four-port diagrams have equal crossing counts. Their inessential-crossing counts are both zero by hypothesis. This last observation is not a new invariant for nonreduced diagrams.

## Proof

Write n=c(D) and m=c(E). Double each ball and its strands by the reflected identity along its entire boundary sphere, with each actual endpoint joined to its corresponding copy. The projection doubles have precisely 2n and 2m crossings: no collar crossing is inserted. By PD the given h doubles to an actual homeomorphism H of the doubled pairs. The same endpoint permutation is used on both copies, so no new four-punctured-sphere gluing class has been selected.

If h is orientation reversing on the ball, H reverses the orientation of the doubled sphere. The target pure double has a canonical orientation-reversing symmetry rho exchanging its two copies, with every point on the doubled boundary identified to itself. It preserves the doubled link setwise. Replace H, for this polynomial comparison only, by rho composed with H. We thus have an orientation-preserving equivalence of the doubled links in either case. Orient the first double coherently and transport its orientations by this equivalence. AM's declared finite equivalence interface then applies. This adjustment neither changes either diagram's crossing count nor replaces the original tangle map h by a claimed boundary-normalized map. Any swapped copy labels are immaterial to this numerical comparison; PD's given-map statement itself is unchanged.

If n=0, m>=n is immediate. If n>0, PD makes the 2n-crossing double adequate. AM applies to that diagram and to the 2m-crossing double of E, giving 2m>=2n. Therefore m>=n. No alternatingness or reducedness of E is needed, and the generally nonalternating doubled diagram is covered by the exact AM interface.

Apply this inequality in both directions when E also is reduced and alternating. It gives c(D)=c(E). Inessential counts vanish by the explicit reducedness condition. The conclusion concerns crossing counts of actual given diagrams; it does not claim that h itself is diagrammatic or isotopic to a boundary isometry.

The argument does not require an equality of tangle writhes or of the two chosen doubled writhes. Orientations in the comparison are transported as above; AM's nonnegative absolute-writhe term can simply be discarded.

## Consequences with exact limits

A reduced alternating one-boundary diagram with a positive crossing count cannot represent the trivial two-arc ball tangle: the latter has a zero-crossing diagram. This does not require a Conway-essentiality argument.

If an alternating diagram is reduced by a GIVEN finite sequence of actual inessential-crossing removals, preserving the pair and alternatingness and ending at a reduced diagram R, then c(R) is the minimal crossing number of the pair. Therefore every such reduced endpoint has the same crossing count. If each step removes one crossing and introduces none, the number of steps is c(D)-c(R); for this fixed initial D it is independent of the sequence. This is a statement about a supplied reduction sequence, not an identification of its length with the number of originally inessential crossings and not a pair invariant of nonreduced diagrams.

There is no unqualified converse “zero crossings implies the trivial tangle” in PD's broad input category: a zero-crossing diagram may also contain closed components. With the additional hypothesis that the diagram consists of exactly two proper arcs and no closed components, a zero-crossing disk diagram is the trivial ball tangle. No two-boundary or arbitrarily multiply-punctured tangle theorem is inferred here.

## Boundary-isometry consumer: recorded contract, not an export

The actual MT1993 Proposition 4.9 uses c(T) and nu(T), and its proof explicitly identifies these as **crossing and rigid-node counts**. Nu is not an inessential-crossing count. That source extends the 1991 link theorem by a fixed five-crossing graph insertion; neither that insertion nor its given-map functoriality is part of the present one-boundary link result.

The prospective boundary-isometry argument has the following genuinely additional inputs:

1. Actual matched normal tangles T1,T2 in the two rigid graph pairs, each reduced, with the GIVEN pair map carrying one tangle to the other. A graph-to-link substitution must extend that very map after a justified vertex-neighborhood normalization, and must recover the needed c and nu information. The formula c(T^J)=c(T)+5nu(T) alone does not separate c and nu without an independent invariant or second comparison. Graph essentiality and the prescribed vertex marking remain with their owner.
2. Exact equality of total crossing and node counts in the ambient diagrams, so equality for T1,T2 also gives equality for the complementary tangles. No such ambient graph result follows from this draft.
3. An actual realization of the relevant four-punctured-sphere mapping class by an alternating spherical four-string braid, modulo precisely the finite boundary isometry subgroup. Nonisometric class must force a positive crossing contribution. The representative must extend over the pair in the form used by the given map, with explicit endpoint and framing conventions. It is not enough to choose an unrelated equivalent tangle.
4. The source's actual assertion that one of the two modified tangles is alternating, with a reduced Figure-4.5 closure. That closure uses two explicit crossing-free exterior arcs and must retain all vertex insertions and show reducedness. Arbitrary closures are not guaranteed reduced. The corresponding closure on the other side must represent the SAME link under the corrected given map and have fewer crossings by an explicitly counted positive braid contribution.
5. Minimality for that reduced alternating CLOSED link diagram, plus the exact pair-isotopy relation identifying the original boundary map with the claimed isometry.

If all five operations are proved at compatible scopes, the final contradiction is finite: the modified closure is crossing-minimal, while its matched closure has fewer crossings. This paragraph records the intended consumer contract only. The braid realization, reduced closure, graph substitution, essentiality, and given-map boundary normalization have not been proved by pure doubling or by the present crossing-count comparison. In particular, this draft supplies no graph-normal-form adaptation or boundary-isometry recognition theorem.

## Review status

The NEW proved consumer is only the exact reduced one-boundary tangle crossing inequality and its equality consequence. It is ready to queue for independent review after root binds the adopted PD and AM Statements. The boundary-recognition section is an explicit dependency contract, not a conditional theorem advertised as completed mathematics.

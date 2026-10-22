# Prop. 4, Fig. 5b: flat-cap endpoint and block trace

Original author contribution for the adequate module, before its first review. This replaces the need to identify a whole-diagram nugatory turnover with a planar half-turn. It uses the two-ended scalarization operation authored separately in `prop4-two-ended-local-skein-contribution.md`; it makes no claim about arbitrary four-ended tangles. No accepted supplier proof is rechecked here.

The actual primary reading is Thistlethwaite (1988), printed pp. 292–294, especially Proposition 4 and Fig. 5b. The source's original whole-diagram equal-length untwist has not been independently certified by this note. Instead the following finite factorization gives a sufficient local diagram with the required bridge and alternating-switch data.

## Scope and labels

D is the original reduced diagram. Its overbridge beta has successive crossings b1,...,bl, l>1, and x is the next crossing outside beta, traversed UNDER. Switch precisely the parity class J of beta crossings to obtain an alternating diagram A. Put z=bl. Since x is unchanged UNDER in A, z is unchanged OVER: z is not in J.

Choose either smoothing of x and call its diagram E. The corresponding smoothing of A is denoted A_E. It is alternating: at a crossing of an alternating diagram, the neighboring visits of an OVER branch are UNDER, and the neighboring visits of an UNDER branch are OVER. Either smoothing pairs adjacent half-branches, hence joins opposite neighbor statuses. Removing crossing-free circles causes no issue for this observation.

This contribution concerns the row where z is newly nugatory in E and all newly nugatory crossings relevant here lie on beta. The source's off-beta nugatory row is a separate obligation. Let Q be the full set of these beta-nugatory crossings. We treat the uniform checkerboard-sign case containing z. Mixed signs are handled by the module's two opposite curl factors, not by this geometry.

All crossings of connected alternating A have a common checkerboard sign sigma. Smoothing x inherits the coloring and does not change the signs of the remaining crossings. Thus a beta crossing in E has sign sigma if it is outside J, and minus sigma if it belongs to J. Since z is outside J, uniformity implies

    Q is disjoint from J.

In particular, consecutive Q positions along beta have indices of the same parity and enclose an odd, nonempty string of surviving beta crossings.

## The actual two-port cap at one cut

At a nugatory crossing y choose a separating circle through y and otherwise disjoint from the diagram. Its two sides meet the diagram in two-ended lobes. The two ends of either lobe are adjacent half-branches at y, one from its OVER branch and one from its UNDER branch. The flat cap joins THESE two actual ends in the crossing-free complementary collar. No port permutation or reversal of the contents is performed.

Equivalently, when a component encounters y in the cyclic order

    y_OVER  U  y_UNDER  V,

the capped lobes have cyclic visit words U and V. A word here includes its physical directed endpoints; it is not an assertion that either lobe is a trivial tangle. If a capped lobe has other closed components, retain them as part of that lobe. Since A_E is alternating, both capped switched lobes are alternating: U starts UNDER and ends OVER, while V starts OVER and ends UNDER. Both cap seams therefore join opposite statuses.

For the endpoint z alone, the beta prefix b1,...,b(l−1) lies at the END of V. Its flat cap connects that end to the START of V, namely the z-UNDER continuation on the same side of the separating circle as the prefix. Let c be its first next crossing. If that continuation is an ordinary arc to a beta UNDER occurrence, it is the source's return row. If c is a beta OVER occurrence, it must be b1 itself: the visit word of the capped component then consists solely of the beta prefix. This is the closed-overcomponent reduction described below, not a new terminal crossing. In the remaining case c is outside beta. Since z is unchanged in A_E, c is OVER in A_E and, being outside beta, is OVER in E as well. Therefore cap(V) has the actual overbridge

    b1,...,b(l−1),c

of original length l. Its switch set is exactly J, with c unswitched. This includes l=2. It involves no turnover of V and no inference that a spatial reflection preserves an overbridge.

## All previous beta-nugatories: the finite block trace

Choose a compatible nugatory decomposition into flat capped blocks, resolving every crossing in Q. Its incidence graph is a tree: each separating circle splits one current piece into two. One may discard passive refinements disjoint from beta before taking the following active path.

The beta arc meets a Q cut only at that crossing's OVER occurrence. It never meets the UNDER occurrence, because it is an overbridge. Thus its walk through the block tree uses each cut edge at most once. A walk in a tree that repeats a vertex repeats an edge; hence the walk is a simple path. Each active block consequently contains exactly ONE contiguous fragment of the original beta crossing word. In particular, all its inherited switches from J lie on that one fragment; there are no hidden switches on another beta fragment in the same block.

If |Q|=1, use the endpoint block V above. If |Q|>=2, select the block between any consecutive Q positions along the active path. Its beta fragment has odd positive length because both bounding cuts are outside J. At its right-hand cut y, the flat cap joins the fragment's terminal OVER half-branch to y's UNDER continuation IN THAT SAME BLOCK. This is an actual adjacent-port pairing at y, not a renamed face.

Follow this continuation BEFORE deleting any further crossing. If its next crossing is a beta UNDER occurrence, including a Q crossing about to be removed, this is already a physical under-return in E; use the return reduction before scalarizing the cuts. If it is a beta OVER occurrence, the one-fragment property forces the cap to close exactly that fragment into an over-only component: a different fragment in the same block would contradict the simple block path, and an interior occurrence of the same fragment would repeat an OVER occurrence. This is impossible in the internal block selected here. Its fragment has odd length, whereas an embedded closed over-only component has no self-crossings and meets the rest of the planar diagram an even number of times. In the remaining case the next crossing c is outside beta. No off-beta nugatory crossing remains in the stated row, so c survives in the selected block. It is unswitched, and alternation at y's unchanged UNDER occurrence makes c OVER. Thus the flat-capped block has an overbridge consisting of

    [the odd nonempty beta fragment], c.

Its length is at least two. On this bridge the inherited switches alternate: the beta fragment begins and ends with a J crossing, and c is outside J. All inherited J crossings of the block are on this bridge. The flat capped switched block was already shown alternating. This establishes exactly the bridge/switch hypotheses needed by the smaller-diagram induction.

Resolve the FULL nugatory decomposition, not merely an arbitrarily chosen subset of Q. A surviving crossing nugatory within a resulting block would also have been nugatory in E, by extending its separating circle through the connected-sum attachments; hence the final blocks are reduced. The chosen block has fewer crossings than D, since at least x and one Q crossing have been removed. The scalarization formula supplies all other blocks and the curl factors; it does not require transporting their crossings through beta.

## The return branch used above

The return test is made on the original physical E before the next cut is removed. Its connector is an ordinary crossing-free diagram arc joining UNDER occurrences of two beta crossings. The beta subarc between the two OVER occurrences is embedded in projection: a self-intersection would force an UNDER occurrence on beta. Together these arcs give the standard bridge-return disk. Move the beta subarc above the entire diagram across that disk, then remove the endpoint pair by Reidemeister II. A generic sweep is finite: tangencies with intervening strands are Reidemeister II events and crossings of intervening strands are Reidemeister III events. The endpoint pair has opposite signs. The final short overarc has no intermediate crossings, so the crossing number drops by at least two. There is no Reidemeister I event or framing change. This is the return alternative; it must not be confused with the no-return cap extension.

For a closed over-only component, move its embedded planar circle above the rest of the link and into a crossing-free disk, retaining its zero blackboard self-framing. The finite sweep again has only Reidemeister II and III events. A positive number of its crossings is even, hence at least two; all of them disappear. The final diagram has a split crossing-free circle and strictly fewer crossings, with the same regular-isotopy polynomial. This is the separate reduction alternative in the one-cut endpoint case; the module's general support bound handles it without assuming a reduced long-bridge diagram.

## Bookkeeping and boundary of the claim

Flat caps are used only through the separate two-ended skein identity. Each removed nugatory crossing contributes its actual factor A^epsilon, epsilon=+1 or −1; no sign is guessed from a picture. Thus q removed cuts contribute A^(sum epsilon), with absolute exponent at most q. Each block contributes its actual crossing count, and the sum of block counts plus q is the crossing count of E, namely n−1. The adequate-module author owns the resulting outer-support multiplication calculation.

The replacement retains original bridge length l in the one-cut endpoint case. With several cuts it deliberately uses one smaller reduced block with a bridge of length at least two. It does not assert that the whole untwisted diagram retains a bridge of original length l. That stronger source claim is unnecessary for this factorized induction route.

This is a proposed contribution to the single coherent adequate proof, pending its first review. Its exact scope requires the actual two-ended scalarization, the source's off-beta reduction row, and the module's uniform/mixed sign split. No original-facing theorem closure is claimed by this note alone.

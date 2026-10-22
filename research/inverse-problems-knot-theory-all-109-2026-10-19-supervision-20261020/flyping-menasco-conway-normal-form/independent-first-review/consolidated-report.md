# Independent FIRST review: four-punctured-sphere normal form

Verdict: **PASS at the exact frozen link-only interface.** No mathematical repair request is raised by this first review. This is an independent review of the NEW research proof, not a gate result or a review of accepted supplier proofs. Root owns acceptance and downstream integration.

## Inputs and reading

Reviewed both complete frozen files under `first-review-freeze/root-first-review-inputs/`: `proof-development.md` and `source-and-exact-interface.md`, as identified by the root's `root-input-binding.json`. I did not author this unit. I read the complete actual Menasco primary scans, printed pp. 37–44, including the normalization and repeated-bubble arguments on pp. 39–40, the whole Lemma 2 proof and Figure 7 on p. 41, Lemma 3 and the four-puncture argument on pp. 42–43, and Figure 9. The remaining text on those pages was also read. No proof of the six-puncture case is inferred from the paper's explicit omission of its details.

The only accepted theorem consulted was the **Statement** of `thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds`. No accepted proof body was read or rechecked. No graph adaptation was considered. Live run state remains paused at `1-scaffold`; no gate or run transition was attempted.

## Normalization and actual isotopy

The bubble preparation agrees with Menasco's actual construction: retain transverse disks at the polar axes and push the rest through hemisphere sectors. The enlarged outer collar, rather than an impossible requirement to fix the bubble boundary while pushing through it, supplies the correct support. No link puncture lies in this support.

The disk-piece argument is sound in the stated sphere setting. A nearby interior push of a boundary circle is unknotted in the ball. The helper-disk surgery removes its finitely many extra intersections without presuming that a disk on S is initially clean. Geometric incompressibility supplies the final unpunctured S-disk. Nonsplitting supplies the link-free ball; the connected remainder of the four-punctured sphere cannot lie inside that ball, since it contains meridional boundary collars. The exchange therefore is an actual isotopy of the given surface. If the original ball piece were not a disk, the removed S-disk crosses the shifted projection sphere, while the replacement helper disk does not; hence the lexicographic complexity decreases.

The two repeated-bubble cases agree with the complete primary proof and Figure 5. In the pass-free rectangle, the band bigon cancels two saddles. In the pass-crossing rectangle, the two arcs are the two upper arcs of one saddle; the band and saddle have meridional annulus core. Pairwise incompressibility supplies a once-punctured disk on the completed sphere.

The extra justification locating the correct trivial-arc ball is valid. Cutting along S and applying the exact Loop-Theorem Statement with normal subgroup 1 proves the injectivity of each boundary inclusion; the amalgamated-product normal form then gives injectivity into the whole exterior. The complement on S of the once-punctured disk is a three-punctured disk with fundamental group F3, whose inclusion into S induces an isomorphism. If it lay in the trivial-arc ball, its inclusion into the exterior would factor through a cyclic group, contradicting that injectivity. Thus the product slide misses the rest of S. The once-punctured disk slide in the trivial-arc ball preserves the same link component and is a pair isotopy, not a meridional surgery on the surface.

These operations decrease actual saddles or actual intersection circles. The use of a least element of a nonempty subset of N×N does not presume an infinite isotopy or a simultaneous choice of unrelated surfaces.

## Word exclusion and gate trace

The side rule is the actual alternation rule on p. 40. The proof excludes the entire grouped form P^i S^j with j>0, rather than substituting mere even length. Choosing an edge-most lower-resolution arc on the side away from the single P block supplies the required P-free boundary interval. The local gates are understood at the truncated boundary-bubble collars: the c,d gates belong to the other upper saddle arc, while a,b belong to the starting circle. This is compatible with the physical lower pairings, not an independently selected smoothing.

The explicit distinct-endpoint gate path checks:

    d1—a1—b0—c0—alpha—d2—a2—b1—c1.

The first and last local edges are the two different lower arcs of saddle 1; the intervening edges are respectively the actual surviving circle intervals, lower saddle pairs, and the selected lower arc alpha. Therefore its containing lower circle visits that bubble twice. The same-bubble walk a—d—alpha—c—b likewise contains both lower arcs there. The one-saddle case uses the remaining common trace to connect the two lower pairs. Each contradicts the already obtained no-repeated-bubble condition. The inward/outward alternation and edge-mostness reduce the distinct-endpoint case to the stated three consecutive turns, so the walk does not silently assume a missing endpoint case.

It follows that every circle has at least two P letters and that a two-P/two-S circle is PSPS, not PPSS. This matches the actual full Lemma 2 proof, now with the gate continuation made explicit.

## Four-puncture classification

The direct counting argument correctly avoids treating Menasco's auxiliary Lemma 3 surface replacements as isotopies of the original marked sphere. Four P letters on either sign imply at most two circles on either sign. The actual disk/saddle/collar decomposition gives the Euler formula u+l−s=2 for the capped input sphere.

With a saddle, its two upper arcs lie on distinct circles and its two lower arcs lie on distinct circles, so u=l=2 and s=2. Both circles on each sign meet both saddles once and have precisely two P letters; hence all four words are PSPS. Without a saddle, connectedness gives one circle on either sign, with word P^4.

The hidden conclusion includes the embedding. The four actual arcs between the two saddle bubbles give a sphere-embedded four-edge multigraph. Disjointness forces reverse cyclic orders at its two vertices. The upper and lower adjacent pairings are the two different pairings supplied by the saddle chart, giving exactly Figure 9's annular two-circle scheme. Each complementary disk has two P boundary incidences and one diagram half-branch at each of its two saddle corners, hence four tangle ports. Its internal link arcs and any internal closed components are retained, not replaced by a model link. This is precisely the stated unrestricted two-strand tangle version of the hidden pattern.

The disk pieces in the complementary upper and lower balls can be collared using their actual nesting, so the visible form and the hidden form are conclusions about the given embedded punctured sphere, reached by the disk/product isotopies already supplied.

## Markings and exact acceptance boundary

Concatenating the finite pair isotopies starts at the identity and preserves L setwise. Hence it preserves each labelled component and its orientation; the surface parametrization, puncture labels, and meridional collars are transported. The punctures may slide. The proof does **not** promise a pointwise fixed link, prescribed gates, a fixed arbitrary patch, or pointwise peripheral framing.

For a given map h with image sphere S, the path psi_t composed with h is a path from that very h. There is no replacement by an unrelated map with the same peripheral permutation. This supports the claimed pair-isotopy marking and no stronger relative mapping statement.

The passing scope is exactly: finite-PL (or the stated smooth analogue), connected meridional four-punctured sphere; explicit geometric incompressibility and literal pairwise incompressibility; fixed reduced prime alternating link diagram realizing a nonsplit prime link; visible P^4 or hidden two-saddle PSPS output under an ambient pair isotopy with transported markings. This report provides no graph normal form, no essentiality criterion from nontrivial diagram tangles, no six-puncture theorem, and no crossing-insertion consequence.

There are no blocking findings and no focused repair requested. Further changes to the mathematical inputs or claims would fall outside this frozen-input verdict.

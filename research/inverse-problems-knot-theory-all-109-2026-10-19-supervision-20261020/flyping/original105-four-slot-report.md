# Original105: the remaining typeIII boundary operation

Author-stage continuation by `/root/flyping_repair`, 2026-10-20. Original theorem and all canonical sources are unchanged. No independent acceptance, completed flyping proof, new review cycle, or workflow credit is recorded here.

The current source inspected is `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-flyping-round1/global-fair-position-and-early-moves-working-proof.md`, especially lines620–707. Its final typeIII section has useful local data but does not yet prove the full peripheral endpoint order. The exact missing operation is to trace both sides of **every physical retained seam occurrence**, through the root-facing cut-ball faces, to the four book slots, and prove that the resulting two disk boundaries have the stipulated channel endpoints. A whole lower-disk label is not a physical face occurrence.

The current live `.autopilot/.../state.json` is paused at `1-scaffold`, with the owner-repair blocker still present. The inspected HEAD is `e1a7e5c9ae`. Historical handoffs were not used to infer completion.

## What is established by the explicit local model

With the stated coordinates, the band

$$
R_k=\{(z,ky,y):-1\leq z\leq1,\ -w\leq y\leq w\},\qquad k>0,
$$

is an embedded rectangle. Its lateral sides lie in the opposite quadrants $xy>0$, and it meets $W=\{y=0\}$ in its entire axis. The shear $(x,y)\mapsto(x+ky,y)$ fixes $W$ and has determinant one. Relative to the supplied positive $B$-band convention, it transports that convention to the band. These facts certify the **local** positive common-band germ. They do not specify which old wall-seam end reaches either lateral side.

If actual disjoint disks $D_+,D_-$ with the prescribed full boundaries have been constructed in the cut chambers, and each is attached to exactly one full lateral side, then $D_+\cup R_k\cup D_-$ is an embedded disk: the attachments are boundary intervals, the interiors are disjoint, and two successive boundary-interval gluings of disks give a disk. This remains true if the two disks occupy one cut ball. The disk existence and boundary identifications are the substantive input, not a consequence of this gluing calculation.

The four-slot boundary order on the rectangle itself is $U_+,O_+,O_-,U_-$, after choosing which longitudinal end is $U$. To extend it over the actual outside faces one must transport this order through their **specified** seam identifications. The statements “two contiguous blocks”, “same side of old F”, and “unchanged outside ribbon word” in the last section assert this transport without providing its successor calculation.

## Why an abstract tree does not supply the missing order

Cutting an old disk along disjoint proper arcs gives a tree of pieces. That fact forgets the rotation at its vertices and the names of the external windows. To see the information loss concretely, put four marked points on a disk boundary. With cyclic order $U_+,O_+,U_-,O_-$, the two prescribed pairs $(U_+,O_+)$ and $(U_-,O_-)$ can be connected by disjoint boundary-near arcs. With cyclic order $U_+,U_-,O_+,O_-$, they cannot: a proper arc joining $U_+$ to $O_+$ separates the other two endpoints, so every joining arc between them intersects it. Both configurations can have the same underlying star-shaped tree. This is not a counterexample to the geometric prism claim; it proves that the abstract-tree fact used there does not establish the required boundary order. Embedded ribbon data and its actual substitutions must be checked.

For an actual finite prism, the necessary calculation is unambiguous. Cut along all old proper disks, distinguish the two copies of each cut face, retain all tube and end-face subdivisions, and orient each resulting boundary sphere. Start at a chosen $r_j$ endpoint; follow its prescribed face interval, cross to the specified adjacent physical face, and continue to the next marked endpoint. Repeat for all unused directed intervals. The desired conclusion is that these full successor walks are simple disjoint cycles bounding the proposed $D_\pm$, with each retained seam used once in the required direction, and with exactly the indicated $U_\pm/O_\pm$ attachments. No such complete successor list, or an induction proving it for all the allowed root-ear substitutions, occurs in the current donor. Defining this walk is not a proof that it has the desired outcome.

## Full peripheral consequence, conditional on that exact walk

Suppose the actual walk pairs each whole old channel interval $J$ to one new interval with the same two consecutive retained-seam endpoints, and realizes them as disjoint angular sections over the same lifted longitudinal interval $[a,b]$. Let their lifts be $\phi,\psi$. Their difference $d=\psi-\phi$ avoids $2\pi\mathbb Z$ in the interior, and both endpoint differences lie in $2\pi\mathbb Z$. It therefore stays in one open interval between consecutive multiples of $2\pi$, and its endpoint change is $0$ or $\pm2\pi$. The old-forward/new-backward cycle has zero longitudinal winding and meridional winding $0$ or $\mp1$. For zero winding the lifted graphs bound their actual lens, so the torus circle is inessential; for nonzero winding its primitive slope is meridional. This calculation uses the whole channel, including cups, ordinary edges, prism joins and adapters.

For the proposed typeIII counts, the phase-band construction would require

| Whole channel | Old positive W ports | New positive W ports | New-minus-old angular increment |
|---|---:|---:|---:|
| E0 | 1 | 0 | -1 |
| E1 | 1 | 0 | -1 |
| U | 0 | 1 | +1 |
| O | 0 | 1 | +1 |

The negative-increment rows have the required old port. The positive local band provides the two new positive germs. However this table cannot itself define the outside disk boundaries or their endpoint permutation. Nor does the six-letter core word certify the absence of further ports on the complete retained-wall walk. Thus the asserted global positive sections and the spherical completion remain conditional on the unresolved walk and channel-section construction.

When that construction is supplied, each completed peripheral circle attaches its tube filling to the shadow along **one connected old interval**. The disk remains a disk by successive boundary-ear attachments. If a cycle instead contains $q>1$ disconnected old intervals, that attachment changes Euler characteristic by $1-q$, and this disk argument fails. This is why the exact seam calculation is required before applying the accepted spherical disk-flip theorem.

## Whole-original proof chain and its present limit

The original claim is retained verbatim: assume full AC; any two connected reduced alternating diagrams on the oriented projection sphere representing the same oriented link type are related by finitely many sphere planar isotopies and flypes, including composite links.

The intended coherent chain is: normalize the actual positive surface against the fixed negative checkerboard; construct each actual three-strip cap with its full marked boundary; use the accepted full normal-pairing isometry to retain definiteness; remove closed intersections and prepare again without increasing intrinsic axis complexity; repeat with strict axis decrease; reduce each constructed cap by the v2 finite marked cap procedure to apparent prime caps; realize those caps as component-tracked literal flypes; perform the second color comparison; and extend these sequences across the actual marked prime decomposition using the authored attachment-transfer argument. The four-slot operation above is needed before the third step. The v2 finite cap reduction and apparent-cap discussion, and the composite marking/attachment argument, remain author-stage arguments in the current donor; this continuation supplies no independent acceptance of them. It would be false to install this chain as a completed proof now.

The accepted thirteen modules remain frozen and are reused only for their recorded conclusions. In particular, the marked-replumbing review already has actual round1 and final round2 reports; its counter is not reset. This continuation launched no review and requested no further helper/provider review. No Statement or Definition changed, so no new consumer repair or changed-interface acceptance is claimed. No canonical, manifest, contract, shared-map, readiness, hash, certification, gate, engine-control, commit or publication operation was performed.

Disposition: **original105 remains mathematically held**. The smallest unresolved authoring obligation is the actual typeIII four-slot face-successor construction, followed by its whole-channel graph realization. The local positive band and conditional winding calculation do not discharge it.

## Constructive continuation from the actual v2 source

In the same focused repair, I extracted and read the actual v2 PDF pages32–36, and rendered and viewed pages34–35, including Figure30 and all four rows of Figure31. I also viewed an enlarged direct PDF rendering of the third row. These are PDF page numbers, equal to the printed numbers. Additional text read was v2 PDF20–23 and, for comparison of the same operation, v3 PDF28–29 and49–50. This records these extents only, not a whole-paper reading.

The authoritative v2 passage is Theorem5.22, PDF33–35. Its actual setup first asks for projection-injective upper/lower disks and for a unique upper sheet over each white point of the inner projection disk (PDF33, conditions(i),(ii)). It then cuts the annulus by the white dual arcs, defines its **actual** prism pieces $F_i$, and states their neighboring-arc gluings and that their annular union with the central upper disk is the shadow disk (PDF34). In the next paragraph it **asserts** that an embedded disk $V$ exists with the right-hand Figure31 sections, that it has precisely the same retained $F$ boundary, and that its full tube boundary completes to meridians and inessential circles. No labeled retained-seam successor list or coordinate extension is included there. Footnote40 starts on PDF34 and finishes on PDF35: reflect $U\cap H_+$, then “Unzip” the self-intersection arcs, each of which is stated to have one endpoint on the tube and the other on $\gamma\cap W$. Footnotes38–39 explicitly allow extra parallel disks in the top row. The picture is therefore not an assertion that all old surface pieces can be erased.

Here is the exact local unzip construction that this description can support. Let one actual double arc have a supplied product chart with coordinates $(s,x,y)$, $0\leq s\leq1$, and sheets $x=0$ and $y=0$. Label the four normal rays $X_+,Y_+,X_-,Y_-$ in their actual cyclic order. In each normal disk, replace the two coordinate diameters by disjoint rounded arcs with pairings

$$
\sigma_+=\{(X_+,Y_+),(X_-,Y_-)\},\qquad \sigma_-=\{(X_+,Y_-),(X_-,Y_+)\}.
$$

For $\sigma_+$ one branch is the hyperbola $xy=\varepsilon$ in the first quadrant and the other is its opposite branch. To make the construction exactly relative to the outer normal circle, take its first-quadrant branch from $(\sqrt\varepsilon,\sqrt\varepsilon)$ to a small neighborhood of each axis, then join it smoothly to those axis rays. The joining tangents are chosen inside their quadrant and the curve remains a monotone graph there; use the opposite curve in the third quadrant. The second choice uses the second and fourth quadrants. These curves are disjoint, agree with the old sheets outside a smaller disk, and depend smoothly on the positive scale $\varepsilon$. Their product with $s$ gives the resolved pair of sheets with its **explicit successor rule**. Protected endpoint collars can use the same quadrant arcs; taking the scale to zero at a collar boundary is permissible only where that endpoint has already been removed from the surface domain or a compatible boundary model is supplied. It is not a way to keep a double point on the surface.

In particular, the two smoothing choices are discrete. Suppose the coordinate chart is transported along the double arc. A continuation that fixes each named ray preserves $\sigma_+$ and $\sigma_-$. Reversing the sign of just one sheet's normal coordinate interchanges the two choices. Reversing both normal coordinates preserves them. This gives an actual finite rule at each face transition: transport the named rays through the supplied transition, then apply the displayed pairing. The two endpoint prescriptions can be joined by a disjoint resolution throughout the arc only if, after this transport, they require the **same** pairing. This follows also directly from planar separation: the two possible noncrossing pairings cannot change continuously while fixing four boundary windows, without an intersection or coincident windows. Once the compatibility is supplied, the product resolution above constructs the local sewing, rather than merely naming it.

For an entire prism the concrete readout would be the composition of these local pairings with the actual cut-face adjacency maps. Each transition must carry a physical face-side label, not merely the name of the whole lower disk. Starting from each retained-seam endpoint, alternate an adjacency transition and the appropriate $\sigma_\pm$ until the next retained-seam endpoint or channel endpoint is reached. This produces the complete new boundary permutation. It simultaneously tests that the required $U_+\leftrightarrow O_+$ and $U_-\leftrightarrow O_-$ attachments use the same choice along each double arc, that no unused retained seam is skipped, and that the closed walks have the required one-old/one-new interval decomposition. Inserting an extra actual wall-face interval means composing another transition; deleting such an interval from the word is not legitimate.

The third row of Figure31 depicts the desired positive-band outcome. However, it has no names on the cut-face copies, no list of their adjacency maps, and no specification of the transported normal-ray signs along the reflected double arcs. Thus it determines a pictured **model outcome**, not the missing readout for an arbitrary prism with its specified retained windows. The v3 version does not provide a missing textual calculation either: PDF29 again asserts the disk and peripheral pairing from Figure27, and PDF49 states that the new boundary signs are positive with reference to that figure. Its later disk-piece proof additionally uses Proposition8.5, which the present v2 restart route intentionally does not assume.

The exact remaining geometric fact can now be stated without an abstract ribbon-tree shortcut: in the normalized actual typeIII prism, the end prescriptions obtained by continuing every fixed retained seam through its physical lower cut faces select compatible $\sigma$ choices on all reflected double arcs; the resulting full successor permutation is the pictured positive-band permutation, with one new longitudinal section paired to each whole selected old channel. The coordinate resolution above proves sufficiency of that fact. Neither the current donor nor the inspected primary passage proves the fact independently of the picture. I have therefore not promoted the visual assertion to a completed original-facing proof or opened another review cycle.

## Explicit successor composition for a slit-disk realization

The next development computes the full boundary permutation of the required model operation. It does not recheck the preceding local resolution. All retained seam occurrences are kept in the computation; they need not have distinct whole-surface labels.

Let $D$ be an actual disk realization of the lower replacement before the active-band insertion, with distinguished whole channel intervals $J_U,J_O$ on its boundary. Orient its boundary and write it, starting just before $J_U$, as

$$
J_U\ P\ J_O\ Q.
$$

Here $P,Q$ are the **complete ordered words of physical boundary intervals**, including every retained seam, ordinary channel, end-face join and adapter encountered. This is an extraction from the boundary of a supplied disk, not a license to reorder these words. Select interior points $u\in J_U$, $o\in J_O$ and a proper embedded arc $\beta$ in $D$ from $u$ to $o$. Write $J_U=J_U^-J_U^+$ and $J_O=J_O^-J_O^+$ in their old boundary directions. Cutting $D$ along $\beta$ gives exactly two disks, whose directed boundary words are

$$
D_P:\ J_U^+\ P\ J_O^-\ \beta_P,
\qquad
D_Q:\ J_O^+\ Q\ J_U^-\ \beta_Q.
$$

The two copies of $\beta$ have opposite boundary directions. Label its **banks** by $P,Q$, so the four endpoint occurrences are $u_P,o_P,o_Q,u_Q$ in the boundary order of a joining rectangle. This label is intrinsic to the cut disk. A whole lower-disk name is never substituted for a bank occurrence.

Attach a rectangle with its two long sides on $\beta_P,\beta_Q$. Call its short sides $c_U,c_O$ according to which endpoint of $\beta$ they lie over. Its actual endpoint successor table is

| Incoming directed interval | Next interval or endpoint |
|---|---|
| $J_U^-$ | $u_Q$ |
| $u_Q$ | $c_U$ to $u_P$ |
| $u_P$ | $J_U^+$ |
| $J_U^+$ | the first interval of $P$ |
| the last interval of $P$ | $J_O^-$ |
| $J_O^-$ | $o_P$ |
| $o_P$ | $c_O$ to $o_Q$ |
| $o_Q$ | $J_O^+$ |
| $J_O^+$ | the first interval of $Q$ |
| the last interval of $Q$ | $J_U^-$ |

Within $P$ and $Q$, each interval has exactly its old directed successor. Empty words simply join their neighboring entries. Consequently the **composed** new boundary is

$$
(J_U^-c_UJ_U^+)\ P\ (J_O^-c_OJ_O^+)\ Q.
$$

This is a literal calculation, not an appeal to a tree expansion. Every retained seam appears once, in its old cyclic order and direction. The two modified whole tube intervals each have their own old endpoint pair. Every ordinary channel inside $P$ or $Q$ keeps its old endpoint pair. The union of the two disks with the joining rectangle is a disk, so its boundary is the single cycle just displayed.

This also fixes the sign-choice transport in a geometric realization of this model. Assign the $P$ bank to the positive band's first lateral side and the $Q$ bank to its opposite lateral side **at both longitudinal ends**. Then $c_U$ joins $u_Q$ to $u_P$, and $c_O$ joins $o_P$ to $o_Q$; both are the prescribed short sides of that one positive band. There is no independent endpoint smoothing choice left. Swapping $P,Q$ at only one end is not this operation: it interchanges the physical long-side assignments and changes the successor table. It cannot be repaired by changing the names of the whole lower disks. Thus a supplied slit-disk realization solves both endpoint compatibility and the full successor composition at once.

For source Figure31, third row, the intended reading is: $P,Q$ are the two outside blue-disk boundary walks, the green active band is the joining rectangle, and $c_U,c_O$ run on the underpass and overpass channels. The complete ordinary channels $E0,E1$ remain in $P\cup Q$. This identifies precisely which source model is computed above.

There is still a geometric transfer to construct for the **actual** retained-face data: obtain this disk $D$ and arc $\beta$ in the actual complement so that its two banks occupy these two opposite physical band-side windows, with $P,Q$ equal to the already fixed wall-face walks. An arbitrary disk parameter gives a proper arc from $u$ to $o$, but does not give a bridge from that arc to the prescribed crossing axis through the old-surface complement. A bridge to a possibly different axis, or a disk with newly chosen retained windows, would not suffice. The necessary bridge must retain the two bank identifications at both ends. Neither selecting an arbitrary proper arc nor assigning its abstract banks the desired physical names establishes such a bridge. This transfer is the remaining original-facing geometric construction; the boundary permutation **once transferred** is now explicitly computed above.

## Bounded-development stop

The recorded marked-replumbing escalation review has already used round1 and final round2. Those reports accept their named modules only; they do not accept this new bridge or original105. They cannot be reset, and this continuation requests no third review or renamed helper review. No further source/provider checking was performed for this stop.

The attempted original-facing extension has **not constructed** the required bank-preserving bridge from the actual lower replacement arc to the fixed crossing axis in the old-surface complement. In particular, no bridge is supplied with both bank identifications and the complete physical wall-seam words fixed. The coordinate resolution and the slit-disk successor computation remain conditional constructions, not proof of this geometric existence claim. The full original theorem is preserved and remains held.

Work on this branch stops under the two-round limit rather than assigning the unproved bridge a new review cycle. No mathematical acceptance or workflow coverage is supplied by this stop record.

## Renewed development: actual direct construction and fixed-axis ledger

The later explicit user request to continue proof work reopens the historical two-cycle hold above; it does not erase its history or turn earlier conditional models into accepted proofs. This renewed development is offcanonical. Original105's full oriented-link statement remains unchanged.

The actual new operation is now a direct cap construction, avoiding the stronger isotopy of an arbitrary lower slit to the crossing axis. The finite positive-band CORNER state rule preserves one black core face along a lower return, even across many common-band boundary arcs. The forbidden type7/8 guides then identify the named physical returns. `renewed-typeIII-face-readout.md` records the full four-channel wall table and the actual global-label toggle words. The new ordinary-E1 boundary-compression lemma proves only the needed distinction W1≠B1; root independently accepted that exact lemma at its essential/nontrivial/nonsplit/ordinary-edge scope. No acceptance of the old general Proposition8.5-style argument is implied.

Those toggles give actual one/two-height witnesses: B0 and W1 are root-facing, and B1 is an immediate child of W1. The actual positive B-core collars put one band bank at the lower/root B0 copy and the other at the lower B1 copy facing the W1/B1 pocket, consistently at BOTH tube ends. Filling the two specified cycles on those actual cut-ball spheres and adjoining that positive band gives the local disk. Its full successor is U' P O' Q, with every marked wall occurrence retained.

The final central disk is NOT required to retain any r_j. `renewed-bridge/central-disk-free-interface-allocation.md` uses the compact root-frontier disk merely as a scaffold, pushes its ENTIRE boundary down off old F to one free interface I, and retains all r_j only on their unique local prism owners. Only the I_i and named alpha intervals are glued. The cyclic strip disks form an annulus; the all-free central disk closes it to a disk. This replaces the older donor's central retained-window requirement and prevents duplicate/canceled seams.

`actual-axis-ledger-for-cap.md` gives the actual per-axis count. The asymmetric fair-position contract (primary v2 Definition5.1, actual PDF21–22) places every old common band disjoint from S+. Every other crossing piece hits the axis, so it cannot coexist with such a band; hence gamma and the thin shadow annulus miss all old common-band books. The central OLD shadow is upper X only. Lower return chains through old common bands remain outside that shadow. If k selected saddle points are removed and r empty axes acquire new bands, then a_new=a_old−k−r. A white terminal endpoint forces an initial saddle/underpass return; the all-ordinary/no-white alternative gives a forbidden black guide or actual boundary-parallel black arc. Thus k+r≥1 at the exact prepared input.

Root's focused review of the new global seam allocation and axis-support calculation is still pending at the time of this entry. The independently authored actual-cap reduction/apparent-cap-to-literal-flype branch is also pending its own root review. No original105 closure, native coverage, canonical edit, gate, recertification, commit, or publication is asserted here. Accepted13 remain frozen and were not proof-checked again.

### Focused normalizer and cap-allocation disposition, 2026-10-21

Root subsequently accepted the central allocation at its actual joint-graph/full-fibre/local-prism scope (`root-central-allocation-acceptance.json`). Its initial one-ear scaffold was replaced by the continuous lower-envelope graph, so this acceptance assumes no general one-contact claim. Root's first original-normalizer review identified N1 (missing nonstandard-arc proof), N2 (rank-free base), N3 (page-germ interpolation), and N4 (actual ordinary-edge compression certificate). The NEW N1 cut/twist/last-saddle proof passed root's independent first review. The ONE focused final normalizer pass then passed with the exact N2/N3/N4 replacements and the supplied reduced-realization-to-essentiality binding. Their review history is in `root-original-normalizer-first-review.json`, `root-original-normalizer-final-review.json`, and `renewed-prime-nonstandard-arc/root-new-proof-acceptance.json`.

The current carrier `current-original-normalizer-proof.md` now integrates those exact replacements and appends the unchanged newly accepted N1 proof. This does not recheck or copy any accepted13 proof. The fixed common bands, actual component markings, asymmetric S+/book convention, and essentiality premise at each subsequent use remain explicit.

The remaining original-facing cap-classification gap is separate and concrete: in the mixed axis-port rows, the proposed shadow arc epsilon must reach BOTH specified retained seam occurrences d,d' from the active crossing collar. An old shadow may occupy an internal strip between two parallel retained seams at another axis; a thin active-axis collar alone does not prove that continuation. The corrected same-copy cut-ball certificate is valid once epsilon exists, but is not a proof of that endpoint trace. Nor has the proposed axis-free special-family bypass been proved for typeI saddle seams. Original105 remains unclosed while this operation and the resulting full marked prime assembly are outstanding. No canonical original, metadata, native gate, commit, or publication was changed by this agent.

### Corrected-source route selection

The cap agent fetched the author's arXiv v3 version notice: the general v2 Theorem4.9 cap classification was false and was replaced by the v3 hierarchy. The general classification branch is therefore STOPPED as a logical route. Its seam/cut-ball calculations remain research history at their stated conditional scopes; no general apparent-cap conclusion is consumed.

Root assigned the corrected-route operations in parallel: this agent owns the NEW shared-lower-disk/exterior-chord exclusion (`renewed-v3-shared-lower-disks.md`); bridge owns actual fair preservation; composite owns last-Move10/bad-position persistence. The new first-exclusion proof supplies actual outward germ selection, an exterior chord on the actual lower graph disk, zero framing, and the nonzero homology certificate, including the same-colour case. It remains proposed pending root review. No stronger general outer-contact assertion is credited. Fair preservation is being proved instead by an actual simultaneous-compression certificate plus essentiality/proper W arcs.

The currently identified local operation needed by the corrected route is the TypeI white-section successor at the selected saddle Ct: the retained opposite white tail must continue to one actual tube port, and that port's order relative to Ct and the retained neighbouring Cs axis must be computed. Figures27/39 are not being substituted for this finite endpoint map. This is the remaining original-facing geometric authoring duty now being coordinated.

Root accepted the NEW shared-lower-disk FIRST assertion after a full first read (`root-renewed-v3-shared-lower-disks-acceptance.json`), including the smooth graph-seam adjustment used before computing the framing. Its scope is the actual normalized/joint-positioned input; the stronger outer-contact assertion remains neither credited nor needed by the fair-preservation replacement. The next actual TypeI author has the distinction between intrinsic book coordinates and physical projection coordinates, and the fact that the removed old white port is not on the avoided inner edge E. The earlier proposed E-side placement of the new tube port was not earned. The physical successor calculation must determine its bank rather than impose that placement; no label assignment by the source picture is declared proved.


### TypeI bank correction in the current authoring step

The retained opposite white tail is an actual seam occurrence, obtained by following the old whole W intersection through the selected saddle to the outer cylinder. There is no supplied contract returning this tail through the fixed Xi/Zi stack to the E-side bank. The presently tested opposite-bank construction would give the peripheral order Cs–Ct–p, rather than putting p between Ct and Cs. Its white-quarter guide must be rounded into the actual white core outside the crossing ball, with p on the same continued peripheral branch outside that ball; leaving the guide in the interior of the negative W crossing band would violate the required crossing-piece form.

The source auxiliary disk Xi is not identified with the selected F disk, so its parallelism through the overpass-side ball Zi alone does not prove the cap-bank germ. That proposed shortcut is discarded. The direct saddle/lower-graph chart must instead establish the incoming cap germ and selected-saddle order before the pendant white section can be consumed. This remains current authoring, not a claimed geometric completion.

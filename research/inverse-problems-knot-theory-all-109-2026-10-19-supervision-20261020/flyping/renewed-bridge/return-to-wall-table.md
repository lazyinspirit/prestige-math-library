# Deriving the local wall table from named normal returns

Renewed user-authorized development by `/root/flyping_bridge`, 2026-10-20, coordinated with `/root/flyping_repair`. This supplies the implication from the actual signed-return input to the literal local face table. It does not use a single-edge assumption for the part of a return inside the central projection disk.

## Input and naming

Use the actual prism between consecutive white dual cuts. Call its central-disk wall `inner` and its other annulus wall `outer`. The end faces are tube-free. Read the upper X boundary in the order

$$
W_0\ E0\ B_0\ O\ B_1\ E1\ W_1.
$$

The channel orders, read from the left dual cut to the right on each wall, are inner (E0,O,U,E1) and outer (E0,U,O,E1). The active crossing has upper O and lower U. Old F misses its crossing book. The annulus has no common-reference-face trace other than the displayed gamma traces, and no other crossing piece. These last two conditions matter: without them a longitudinal channel could leave its displayed upper or lower piece at an additional common trace, and the table would not follow.

The signed-return identification supplied by the owner is as follows. The typeIII return in the central lower disk is the return of the common black arc B0, from its E0 endpoint of type B+ to its O endpoint of type B-. This follows the convention of orienting the return with its adjacent B0 disk on the right. It is not a return from E0 to E1 and not the whole lower U channel. The active lower U point, projecting to the displayed upper O interval, is the initial endpoint of a different, typeII return. Its terminal white endpoint is at E1/W1. These are named physical endpoint identifications, not just an unlabelled pair of signs. The local edge determinant rule is in `ordinary-edge-sign-rule.md`.

Both returns lie in the *central* lower disk T-, and may traverse a finite common-band chain there. Thus their annulus fragments approach the inner wall. No claim that the entire returns lie in this one prism is made.

## Forced fragments

The typeIII return supplies the lower annulus fragment starting at E0/B0 and ending on the inner wall, and the lower annulus fragment starting at O/B0 and ending on the inner wall. Therefore the lower piece incident to B0 has precisely E0_inner and O_inner as its channel fragments. Its remaining wall boundary is the complete actual inner-wall walk between them. Retaining every subdivision of that walk changes none of these incidences.

The displayed E0 upper interval joins W0 to B0. It has only its two displayed common-face endpoints, by annulus normalization. Its B0 lower continuation has just been identified as the inner fragment. Hence its other continuation is its outer fragment and belongs to the W0 lower piece. The displayed O upper interval similarly joins B0 to B1; its B0 continuation is inner, so its B1 continuation is outer.

The typeII return supplies the lower fragment at E1/W1 approaching the inner wall. Therefore E1_inner belongs to the W1 lower piece. The displayed upper E1 interval joins B1 to W1 and has no further common-face endpoint. Its B1 continuation must consequently be the outer fragment. The B1 lower piece therefore has O_outer and E1_outer, joined by the complete outer-wall walk between them.

The lower U section belongs to the typeII return's W1-side local lower piece. It cannot stop in a channel interior: a stop would require an extra common-face trace or a crossing piece, both excluded. It cannot exit through an end face, since those faces miss the tube. Thus it is the *whole* U interval, from inner to outer wall. Inside this prism its selected lower piece is the same W1 piece: the active book contains no old crossing band, and there is no second crossing in the annulus where it could switch lower pieces. A chain beyond the inner wall is retained as central-disk data and has no effect on this local conclusion.

These forced fragments give

| Attaching arc | Complete complementary local boundary, up to reversal |
| --- | --- |
| W0 | left end-face continuation; outer wall to E0; E0_outer |
| B0 | E0_inner; full inner wall E0-to-O; O_inner |
| B1 | O_outer; full outer wall O-to-E1; E1_outer |
| W1 | E1_inner; full inner wall E1-to-U; U_whole; full outer wall U-to-right-end; right end-face continuation |

No remainder can be added to one row without an additional common-face trace, a tube endpoint on an end face, or a second crossing piece. Those are excluded by the normal input. A wall walk may have arbitrarily many physical retained-seam intervals; the proof neither suppresses them nor identifies two occurrences carrying one global disk name.

Substitution into the boundary of X now gives whole-channel cyclic order E0,O,E1,U. In particular, the proper slit U -> W1 lower piece -> W1 attaching interval -> X -> O has its E0/B0 bank and E1/B1 bank fixed by these actual fragment incidences. This conclusion no longer comes from the vector drawing alone.

## Precise remaining input duty

The implication above is complete for the stated named-return normal input. Applying it uniformly still requires the owner's identification of the typeIII endpoints with E0/B0 and O/B0, and of the typeII terminal with E1/W1, from the actual endpoint orientation and normal-curve order. An unlabelled signed pair or a choice of names based only on Figure31 does not supply that input. The cap chamber and positive-band transfer require their own geometric completion; this table alone is not a completed flyping proof.

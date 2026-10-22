# Positive two-twisted Whitehead trefoil: actual 12-grid admission

This is new D2 geometry only. It does not recheck D0 or any repaired grid/Floer supplier. The Whitehead owner separately performs the new finite persistence calculation; no Floer rank or tau value is asserted by this admission.

The fixed output, with rows indexed from zero, is:

```text
O = [4,9,6,1,2,11,0,8,5,3,7,10]
X = [8,2,0,7,10,4,5,3,1,9,11,6]
```

Every list is a permutation of 0 through 11, the two entries in each row differ, and following each horizontal O-to-X arc and then the vertical X-to-O arc gives one component. The actual valid grid is stored in `small-grid-certificate.json`, together with its 986-step geometric grid-move certificate. Those arrays are frozen for the owner's new count.

The input is `compute(2)` of the admitted standard cable/clasp construction `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-geometric-admissions/whitehead-cable-clasp-code.py`. Its actual braid part is

```text
[-1,-1] + [2,1,3,2]*3
```

with the unchanged separate clasp `[-1,-1]` and the same cable/clasp wiring. In that admitted construction the correction is k=t-3. At t=2 this is k=-1, namely one negative full twist relative to the trefoil's blackboard cable. The three positive trefoil crossings contribute blackboard framing +3, so the actual net companion framing is 3+(-1)=+2 relative to the zero longitude. It is **positive two full twists**, not two crossings or an unchanged zero framing. The clasp is the positive Whitehead clasp under the admitted oriented cable/clasp convention. Grid writhe is never substituted for the companion framing.

`build-grid.py` evaluates this new parameter and records the actual 16-crossing source PD, signs and a whole orthogonal-arrow embedding in `initial-grid-certificate.json`. No knot-table lookup is used: Spherogram supplies a candidate drawing of that explicit input; the independent integer certificate checks its actual incidences. The orthogonal drawing is rotated by 90 degrees and scaled by 100. Six crossings have a horizontal overstrand. In the disjoint square around each, replace its horizontal overarc and vertical underarc by these relative coordinate lists, reversing either list when its directed strand goes the other way:

```text
horizontal overarc:
(-10,0), (2,0), (2,4), (10,4), (10,0)

vertical underarc:
(0,-10), (4,-10), (4,2), (0,2), (0,10)
```

Their only mutual crossing is (2,2), now vertical over. They retain the same cyclic four boundary ports and crossing sign, so each is a supported isotopy of the marked crossing disk. Remove collinear subdivisions. Separate equal horizontal and vertical levels by distinct perturbations smaller than 1/100, while different old levels are at least two apart. Rank the levels to obtain the initial 33-grid. Orient each horizontal segment O-to-X and each vertical segment X-to-O.

The **actual one-time verification** `python3 .../d2-grid/verify-admission.py` completed successfully. On the integer arrows it found exactly the source's 16 crossings, with no additional crossing and with all 16 source signs. The directed grid Gauss word is a cyclic translate of the negative reverse of the source traversal. The negative is exactly the raw-PD viewing convention: its clockwise over-first tuple is used as counterclockwise under-first, corresponding to the ambient orientation-preserving rotation R(x,y,z)=(x,-y,-z). This reverses the projected cyclic order and exchanges the over and under heights. The remaining reversal is the independently chosen component orientation. Thus the actual oriented relation is stated explicitly; it is not an assertion that the raw signed words agree unchanged.

The same new verification checked **each of the 986 saved moves once**, ending at exactly the 12-grid displayed above. A row/column exchange either has nonalternating endpoint intervals or the permitted shared-endpoint switch. A cut is a cyclic row/column change. Each destabilization has exactly three alternating-type marks in adjacent rows and columns; deleting its two-mark row and two-mark column merges its two same-type corners. These are actual geometric grid moves. Their complete coordinates, types and indices remain in the durable trace. No matrix output or knot invariant is used to certify any move.

Consequently the fixed 12-grid represents the positive two-twisted Whitehead trefoil, with the explicit source-orientation reversal just described. The count owner uses the already supplied new normalized orientation-transport argument for that junction: the raw basepoint swap from the reversed knot gives the exchanged-filtration model, and the same-knot normalized conjugation exchanges those filtrations back; the composition preserves the normalized grading and filtration. No ambient invertibility appendix is used, and no O/X swap is applied to the fixed arrays.

`admission-verification.json` records the actual crossing signs, both directed words, orientation junction, move count and endpoint size. This file and proof document new mathematical evidence only. No repaired supplier, D0 input or completed D0 trace was replayed. No metadata, contract, native control, gate, certification, commit or publication operation was performed. The lightweight geometric search used one process; all large state estimates and matrix work are owned separately by the Whitehead owner under the six-GiB process limit.

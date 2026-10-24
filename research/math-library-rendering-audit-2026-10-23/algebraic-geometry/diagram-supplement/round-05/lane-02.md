# Round 05, lane 02: intersection multiplicity under a point blowup

**Item:** `lem-intersection-multiplicity-drop-under-point-blowup`  
**Finding:** An optional incidence diagram is warranted as an editorial aid. The map and conditional multiplicity claims are consistent; no mathematical inconsistency was found.

The bound snapshot SHA-256 matches the assignment (`6155704e6b1dfb531f24def07643d5abbfbdf3cdca84f91890ff121be14700d4`). I viewed all three listed local screenshot tiles at original resolution. They show the statement and the chart argument clearly.

## Exact source claims

The assignment's source excerpt is snapshot lines 36–54. It assumes a locally Noetherian `X`, closed subschemes `Y,Z⊂X`, and a closed point `p∈Y∩Z`; `Y` is integral of dimension one, its generic point is not contained in `Z`, and `O_{Y,p}` is regular. The blowup is `π:X'→X`, with exceptional subscheme `E=π⁻¹(p)` and strict transforms `Y',Z'`.

The statement at lines 46–50 says `π` restricts to an isomorphism `Y'→Y`; `Y'∩E` is exactly one point `q`, the unique point of `Y'` over `p`, with `m_q(Y'∩E)=1`; and **if** `q∈Z'`, then `m_q(Y'∩Z')<m_p(Y∩Z)`. Lines 52–54 give the consequence that the intersection multiplicity drops wherever the transforms still meet over `p`, and that multiplicity one implies disjointness over `p`.

The proof's named steps 2.1–5.1 justify the same incidence: the induced center on `Y` is an invertible ideal, so its blowup is an isomorphism; a local blowup chart identifies the unique point over `p`; `Y'∩E` is the reduced residue-field point; and the valuation/length comparison gives the inequality only when the strict transforms still meet there.

## Diagram proposal and limits

Draw `π:X'→X`, the exceptional **subscheme** `E=π⁻¹(p)`, and the strict transforms `Y',Z'`. Mark `q` as the unique point of `Y'` over `p`, and show `Y'∩E={q}` with multiplicity one. Split the `Y'`–`Z'` incidence into two cases: if `q∈Z'`, mark the strict inequality; if not, show no contact over `p`. For initial multiplicity one, use the second case to illustrate the stated disjointness.

Keep `E` schematic. The hypotheses do not make `X` a regular surface or identify `E` with a smooth or integral curve. Preserve the conditional wording around the multiplicity inequality, and do not assume `Z` is integral. The figure would summarize incidence; the proof text carries the chart and valuation argument.

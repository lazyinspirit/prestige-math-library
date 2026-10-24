# Round 03 diagram review, lane 03

## `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`

**Opportunity: warranted. Classification: uncertain.** Statement lines 46–58 assert existence of a finite sequence of closed-point blowups, regularity of each intermediate surface, an effective Cartier total transform, and a final support with one regular component or two transverse regular components at each closed point. Lines 60–65 clarify that the support may itself be singular at a crossing and exclude stronger smoothness, relative, or higher-dimensional claims. Facts lines 73, 75, and 77 describe regularity of point blowups, the multiplicity drop at a blowup, and separation of curve components. The bound snapshot and all three screenshot tiles were inspected; the render has no diagram. A staged schematic can distinguish the transforms and make the terminal local incidence condition easy to see.

Suggested construction diagram:

```text
S_n  --blow up p_{n−1}-->  S_{n−1}  -->  …  -->  S_1  --blow up p_0-->  S_0 = S
  Z_n                       Z_{n−1}                Z_1                 Z
```

Label each `S_i → S_{i−1}` as a blowup at a closed point `p_{i−1}` of the preceding regular surface; show its exceptional curve `E_i` on `S_i`. Distinguish `Z_i`, the effective Cartier total transform (scheme-theoretic inverse image), from strict transforms of the original curve components. Include `E_i` in the drawn support precisely when its center lies on the preceding total-transform support. A staged view may summarize component regularization/separation (proof 2.1), reduction of contact multiplicities (4.1), and removal of triple points (5.1). These are a construction pathway the proof establishes, not a canonical or unique sequence.

End with local schematic panels for a point on one regular component and for exactly two regular components meeting transversally (`m_p=1`), with no triple point. Keep clear that the individual components are regular while their union can be singular at a crossing. Use the local crossing as a schematic picture only; the theorem does not assert smoothness over a ground field or relative SNC over a base.

**Mathematical check:** Arrows point from each blown-up surface to its predecessor; centers lie on the predecessor and exceptional curves lie on the blowup. The theorem concerns a regular surface and a reduced curve with finite-normalization components, and asserts existence of a finite sequence. Total transform can carry multiplicities; the schematic should not silently replace it by a reduced divisor. Components in the final support are strict transforms together with exceptional curves over centers on the previous support. At each closed point of that support there is one component or exactly two, the latter meeting transversally; no point has three components. No inconsistency was found in the diagram-relevant claims. No diagram is a premise of the proof.

Snapshot SHA256: `fd7c956d1731b48cd6a3d31d3f1f90d2fc7c1c2751dcdab610af9a83b66f497b`. Original-resolution screenshot paths, hashes, dimensions, and observations are in `lane-03.json`.

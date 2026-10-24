# Representation Theory rendering audit — lane 05

## Coverage

- Reviewed all 71 assigned frozen titles and complete ItemBodies against snapshots, current source, and local HTML. Opened all 152 assigned PNG tiles individually with `tools.view_image` at original resolution.
- Assignment, current source, snapshot, HTML, and screenshot hashes match their records; per-item and per-tile values and capture positions are in [lane-05.json](lane-05.json).
- Capture receipts record 1 KaTeX parse error, 0 successfully rendered TikZ diagrams, and 1 diagram failure. The KaTeX and TikZ errors are both in the Heisenberg group definition.

## Findings

- **Malformed display math:** [def-heisenberg-group-of-a-symplectic-vector-space, lines 30–32](../../../items/def-heisenberg-group-of-a-symplectic-vector-space.md:30) closes the group definition before the prose, then leaves the multiplication equation without an opener and a stray closing delimiter. The HTML/tiles show a KaTeX error block. Put the multiplication law in a balanced display block and leave topology prose outside it.
- **Failed central-extension diagram:** [def-heisenberg-group-of-a-symplectic-vector-space, lines 43–45](../../../items/def-heisenberg-group-of-a-symplectic-vector-space.md:43) contains a TikZ-cd row for `1 → ℝ → H(V,ω) → V → 1`; local HTML reports a diagram-render failure. Preserve labels `j(t)=(0,t)` and `pr_V(v,t)=v`; the kernel relation is `ker(pr_V)=j(ℝ)`. The diagram should render, with exactness established by the text proof.
- **Sources heading is part of proof prose:** [ex-unitary-induction-from-the-trivial-subgroup, line 53](../../../items/ex-unitary-induction-from-the-trivial-subgroup.md:53) appends `## Sources` and its citation to proof step 2.1. The local HTML/screenshot show it inline in the proof. Move it to a separate heading after a blank line.

No additional high-likelihood missing diagram was identified. Reference links appearing on separate linked lines with punctuation nearby are expected local ItemBody rendering.

## Boundary

This covers frozen source and local rendering, not full mathematical certification or live routes. No item files, application files, or publication statuses were changed.

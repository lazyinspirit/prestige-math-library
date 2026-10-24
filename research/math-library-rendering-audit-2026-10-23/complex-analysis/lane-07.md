# Complex Analysis visual review — lane 07

## Coverage

Reviewed all **140 assigned items** and opened all **253 assigned screenshot tiles** individually at original resolution. Every tile SHA256, source SHA256, frozen snapshot SHA256, and preview HTML SHA256 is recorded in `lane-07.json`. All assigned source/snapshot/HTML hashes match `assignment-07.json`; no source drift was observed.

## Confirmed rendering findings

1. `def-level-one-eisenstein-series`, source line 16: title indices `E_k` and `E_2` display as raw ASCII.
2. `ex-residue-evaluates-cos-over-one-plus-x-squared`, line 4: the title formula and `pi / e` display as raw ASCII, including `^2`.
3. `thm-circle-integrals-of-integer-monomials`, line 4: `(z-a)^m`, `-1`, and `2 pi i` display as raw ASCII in the title.
4. `fs-every-domain-in-c-n-is-a-domain-of-holomorphy`, line 4: `C^n` displays literally in the title.
5. `ex-riesz-measure-of-log-modulus-is-zero-divisor`, line 102: `## Remarks` shares the proof-conclusion line and appears literally rather than as a Markdown heading.

Each entry in the JSON records the exact assigned local screenshot evidence and a focused repair suggestion. These are rendering defects; no changes were made.

## Diagram review

No assigned source contains TikZ/tikzcd code or a Scratch section, and no existing rendered diagram was present to check. One uncertain editorial candidate is recorded for `ex-period-matrix-and-jacobian-of-the-pentagon-curve`: lines 71, 154, and 156 give a concrete two-pentagon quotient, five side translations, the rotation action, and the cell-boundary relation. A diagram could show the paired side orientations and translation vectors, the common vertex at infinity, and the induced five-edge boundary relation. This remains optional because the text already specifies the data. No diagram-mathematics mismatch is asserted.

## Other rendering observations

Math in bodies generally rendered in the inspected previews. CSS uppercase technique banners and standalone wikilink blocks are expected. No screenshot clipping was confirmed, so no clipping defect is reported. No reference-title leak or Scratch leakage was observed.

## Limits

The local audit covers item titles and full item bodies in assigned previews, not production routes, site navigation, or bibliography widgets. No live site or HTTP(S) source was accessed. No item, app/tool, status, or queue/master file was changed.

# Information Theory rendering audit — lane 08

Reviewed all 46 assigned items and all 64 listed PNG tiles individually with `tools.view_image` at original resolution. Each frozen snapshot is byte-identical to its current source; all current source and rendered HTML hashes match `assignment-08.json`; all 64 PNG hashes match their per-item screenshot manifests. Exact per-item and per-tile coverage is recorded in `lane-08.json`.

Confirmed rendering findings: 1. It is a raw ASCII formula in an example statement. No independent text or formula clipping was confirmed from the original tiles; multi-tile boundaries continue the same item. KaTeX error arrays and diagram failure arrays are empty. Linked references render as blocks, as intended; their resulting punctuation wraps are not defects.

## Confirmed findings

### `ex-iid-and-markov-source-entropy-rates`

- Section: Example; source line 28.
- Kind: Raw ASCII formula.
- The statement renders `h=1` and `h=H2(1/4)` as ordinary text instead of typeset mathematics. The rendered value `H2(1/4)` is also visually ambiguous about the entropy-function subscript and the argument.
- Mathematical check: the detailed verification gives the fair IID rate as 1 bit per symbol and the symmetric Markov rate as `H_2(1/4) ≈ 0.811278` bits per symbol. The statement's values are consistent; this is a typography defect, not a numerical error.
- Screenshot: `screenshots/ex-iid-and-markov-source-entropy-rates--01.png`.
- Repair: typeset the two expressions in inline math, for example `$h=1$ bit/symbol` and `$h=H_2(1/4)$`.

## Optional diagram candidates

- `alg-viterbi-max-product-on-finite-trellis`, lines 28–50: draw a small layered trellis with vertices `V_1,…,V_T`, transitions `(u,v)∈E_t` carrying weights `w_t(u,v)`, initial scores `α(v)`, and terminal weights `β(v)`. Show the recurrence `D_t(v)=max_u D_{t-1}(u)w_t(u,v)`, the maximizing backpointer `p_t(v)`, terminal score `Q(v)=D_T(v)β(v)`, and backward traceback along the selected path. Preserve the source's zero-score/no-path case and supplied-order tie rule. The algorithm already states these relationships; the diagram would be an optional explanation, not evidence of a defect.

## Diagram checks and limits

No assigned source contains a TikZ block, and all screenshot manifests report `tikz_count: 0` and no diagram failures. There are no existing diagrams in this lane needing a map, orientation, index, sign, or label check. This was a local frozen-snapshot rendering review only; no HTTP/live-site review, build, renderer invocation, or general mathematical argument audit was performed. No production-route claim is made.

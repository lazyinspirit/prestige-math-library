# Probability rendering audit — lane 09

## Scope and method

Reviewed all 68 assigned frozen titles and complete ItemBodies in the local HTML and screenshot tiles. Individually opened all 116 receipt-listed PNG tiles with `tools.view_image(detail="original")`. Assignment SHA256 values match for every frozen snapshot and HTML; receipt SHA256 values match for every tile. Tile-by-tile paths, hashes, receipt offsets, and view attestations are recorded in `lane-09.json`. No production route, live site, external source, or publication status was checked.

## Findings

1. **Confirmed rendering defect — `ex-conditional-density-of-a-bivariate-normal-law`, Facts & Assumptions line 42.** Fact [F2] contains `phi(t)=exp(-t^2/2)/sqrt(2pi)` as un-delimited plain text. In the local HTML and original tile this renders as literal ASCII math rather than typeset mathematics. Wrap the formula in supported inline math delimiters.

## Diagrams

No assigned screenshot receipt reports a rendered TikZ diagram (`tikz_count: 0` for all 68 items), and no existing diagram mathematics could be checked. No receipt reports a KaTeX error.

The source supports one **editorial candidate**, not a confirmed defect:

- `ex-absorbing-gamblers-ruin-chain`, source lines 27–32: a finite birth-death transition graph with states `0,...,N`; probability-1 self-loops at the absorbing endpoints `0,N`; interior arrows `x→x+1` labeled `p` and `x→x−1` labeled `q`; and `D={0,N}` marked. It should note `p+q=1`, that unshown probabilities are zero, and that finite hitting is not asserted on every path. The `N=1`, `p=0`, and `p=1` edge cases must remain accurate.

## Coverage summary

- 68/68 assigned items: frozen title and complete ItemBody reviewed; snapshot and HTML hashes verified.
- 116/116 assigned PNG tiles: opened individually at original resolution; tile hashes verified against screenshot receipts.
- 0 existing diagrams; 0 recorded KaTeX errors.

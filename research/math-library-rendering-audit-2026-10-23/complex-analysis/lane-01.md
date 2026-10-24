# Complex Analysis rendering audit — lane 01

## Coverage

Reviewed all 141 assigned items and all 268 assigned screenshot tiles. Every tile was opened individually at original resolution. Source digests match assignment-01; frozen snapshot and HTML previews exist; all source, HTML, and tile manifest SHA256 values match. The machine check found zero mismatches.

The review covered each complete ItemBody and title in the frozen local Markdown and preview, including LaTeX/MathMarkdown, TikZ, clipping, literal raw formulas/carets/underscores, reference titles, Scratch disclosures, and diagram math where present. No live website or HTTP(S) requests were used.

Wikilinks appearing as block lines and uppercase CSS technique banners are expected. No reference-title leaks or raw math inside technique banners were confirmed.

## Confirmed findings

1. **Opening title and statement absent from first rendered tile** — [cor-bounded-harmonic-functions-have-nontangential-limits](items/cor-bounded-harmonic-functions-have-nontangential-limits.md:4), source lines 4 and 23–32. The first standalone original tile is blank through roughly its first 300 px except for a small orange sliver and omits the title and statement, although both are in the source and frozen HTML. This is supported by the individually opened original tile [01](screenshots/cor-bounded-harmonic-functions-have-nontangential-limits--01.png) (SHA256 5de0a825ebf97b6749ace525fb2d03102d0a73cc0013bf6cef273f01650a06e1); tile 02 continues the page. Confirmed local capture/render defect.

2. **Raw ASCII math in title** — [Hartogs example](items/ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure.md:4), line 4: `1 / (1 - z1 z2)`. Screenshot [01](screenshots/ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure--01.png) confirms literal prose-style notation.

3. **Raw ASCII math in title** — [trigonometric integral example](items/ex-trigonometric-integral-one-over-a-plus-cos-theta.md:4), line 4: `1 / (a + cos theta) over [0, 2 pi]`. Screenshot [01](screenshots/ex-trigonometric-integral-one-over-a-plus-cos-theta--01.png) confirms literal prose-style notation.

## Existing diagram check

- **ex-goursat-four-triangle-boundary-cancellation**, source lines 32–56. The TikZ drawing places 0, 1, i and p, q, r correctly, shows the three corner triangles and central triangle, and follows the outer orientation 0→1→i→0. Dashed internal edges match the shared-edge subdivision; the proof text confirms their opposing orientations and cancellation. The individually opened original tile [01](screenshots/ex-goursat-four-triangle-boundary-cancellation--01.png) shows no clipping or diagram math defect.

## Optional source-supported diagram candidates

- **thm-joukowski-biholomorphism-outside-unit-disc**, source lines 31–37: `J(z)=1/2(z+1/z)`, `E={|z|>1}`, and `J:E→C\[-1,1]`. An optional TikZ domain-map could show exterior disk to slit plane and the boundary relation `J(e^{it})=cos(t)`, clearly marking that the open domains exclude the boundary. Candidate only, not a confirmed omission defect. Local screenshot [01](screenshots/thm-joukowski-biholomorphism-outside-unit-disc--01.png).

- **ex-helicoid-model-of-the-logarithm-surface**, source lines 30–38: `H(x+iy)=(e^x cos y,e^x sin y,y)` and projection to the first two coordinates equals `e^w`. An optional 3D helicoid/projection sketch could label radius `e^x`, angle and height `y`, plus the projection into `C×`. Candidate only, not a confirmed omission defect. Local screenshot [01](screenshots/ex-helicoid-model-of-the-logarithm-surface--01.png).

## Limits

This report covers only the frozen local snapshots, HTML previews and PNGs from capture revision 2. It makes no claim about live routes. All assigned tiles were reviewed; no missing or unviewed tiles are counted. The complete item and tile SHA256 coverage is recorded in `lane-01.json`.

# Final-adjudicator evidence — `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`

Disposition: `repaired`.

## Material reviewed

I independently read the current item; its small-cancellation, reduced-diagram,
piece, and van Kampen diagram dependencies; the downstream Greendlinger theorem;
the full small-cancellation A/B page context; the batch-1 manifest, source
coverage, notes, proof and boundary contracts, reader report, and refuter record;
both frozen judge rejections and exact Alpha adjudications; the defect-ledger
rows; and Alpha's two repairs.

The item is moderate risk under the current mechanical report and therefore has
no required Alpha `risk_review`. Its load-bearing external curvature input was
the point requiring independent source verification.

## Mathematical basis

Alpha correctly recognized that the shell conclusion is an imported classical
curvature result and identified Touikan Proposition 3.5.5. The current proof did
not, however, match that source exactly. Touikan applies the proposition to an
*arc-reduced* disc, while step 1.1 suppressed valence-two vertices only on
internal arcs. The fact record also recast the proposition as a broader unnamed
$D(6)$ lemma rather than stating its actual contextual hypotheses. The proof
did not separately discharge the permitted one-face diagram.

I repaired those points.

- The statement now says explicitly that $D$ has at least one $2$-cell, avoiding
  an ambiguous use of “nonempty.”
- A one-face diagram is handled directly: its unique face is a shell with empty
  inner boundary, hence zero internal arcs.
- In the multi-face case the proof collapses every maximal arc, including
  boundary arcs, and explains why removing subdivisions preserves the disc,
  face incidence, reducedness, and the internal/external decomposition.
- Each internal edge of the arc reduction is the image of one maximal internal
  arc. Reducedness makes its label a piece. Strict $C'(1/6)$ then forces every
  interior face to have at least seven sides, exactly the setup used in the
  cited curvature argument.
- Touikan's proposition gives an $i$-shell with $1\le i\le3$. Expanding the
  suppressed vertices converts its $i$ internal edges back into the same $i$
  maximal internal arcs of the original diagram, so the stated conclusion
  follows.

I added the direct van Kampen-disc dependency, synchronized the item's proof and
the downstream Greendlinger citation in both contract copies, and changed the
empty, zero-inner-arc, one-face, and degenerate boundary rows to checked.

## Source verification

Source status: `verified`.

- Nicholas Touikan's official University of New Brunswick notes,
  https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html,
  support the exact route used here: subsection 3.5.1 defines arc reduction,
  states that internal arc labels are pieces, derives at least seven sides for
  an internal face under strict $C'(1/6)$, defines $i$-shells in Definition
  3.5.3, and proves in Proposition 3.5.5 that an arc-reduced disc contains an
  $i$-shell for $1\le i\le3$.
- Abgrall and Munro, https://arxiv.org/pdf/2410.10152, give an independent
  scholarly formulation. Definition 2.10 (PDF p. 8) defines shells, $i$-shells,
  spurs, and reduced diagrams; Lemma 2.12 (PDF p. 9 in the viewer's numbering)
  states that every reduced $C'(1/6)$ disc diagram other than a single vertex
  has at least two $3$-shells and/or spurs. This corroborates that finiteness or
  relator-irredundancy assumptions from Touikan's chapter introduction are not
  load-bearing for the local Greendlinger conclusion.

## Focused checks

- `precheck`: 1 checked, 0 failing.
- Renderer check: clean YAML, wikilinks, delimiters, and KaTeX.
- Strict batch-1 proof contract on this item and its direct Greendlinger
  consumer: 2/2 checked, 0 errors or warnings.
- Strict merged proof contract on the same two items: 2/2 checked, 0 errors or
  warnings.
- Batch-1 citation fidelity: 117 citations over 53 items, no missing quote and
  no widening candidate.
- Required batch-1 risk report: 53 items routed, 0 errors; this item is moderate
  risk.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired item and both synchronized contracts:
  clean.

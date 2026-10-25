# Functional Analysis visual audit — lane 05

## Scope and coverage

Reviewed all 94 assigned items from their frozen source, snapshot and full ItemBody/MathMarkdown captures. Opened all 171 screenshot tiles individually via original-resolution viewing, including continuation tiles; no tiles or items remain unreviewed.

Source, snapshot, HTML and tile SHA256 values match the frozen assignment and per-capture manifests (0 mismatches). Captures are revision 2; capture metadata records 0 KaTeX errors and 0 TikZ diagrams. No assigned source contains a Scratch section; the capture workflow opens Scratch disclosures before full-page capture.

The item-by-item ledger, exact hashes, capture metadata, checked headings and screenshot paths are in [lane-05.json](lane-05.json).

## Confirmed findings

### FA05-R1 — raw-ascii-mathematics

Several mathematical expressions in the Statement and Proof are un-delimited plain text, so operators and symbols appear as source-style ASCII instead of mathematics. Visible examples include “n>=1”, “inf(empty)=+infinity”, “A>=c”, “alpha_n”, “dim F<=n-1”, “F-perp”, “sigma(A) intersect [c,r]”, and “E_n=Lambda”. The displayed variational equation on source line 25 is typeset, isolating this to surrounding expressions.

**Source locations:**
- `items/thm-min-max-principle-below-essential-spectrum.md`: lines 24, 26, 46, 48, 50, 52, 53, 54, 56, 58, 60

**Original screenshot evidence:**
- [thm-min-max-principle-below-essential-spectrum--01.png](screenshots/thm-min-max-principle-below-essential-spectrum--01.png)
- [thm-min-max-principle-below-essential-spectrum--02.png](screenshots/thm-min-max-principle-below-essential-spectrum--02.png)
- [thm-min-max-principle-below-essential-spectrum--03.png](screenshots/thm-min-max-principle-below-essential-spectrum--03.png)

**Suggested repair:** Typeset the mathematical identifiers, inequalities, subscripts, and set operations in the affected prose while preserving the complete statement and argument.

### FA05-R2 — raw-ascii-mathematics

Plain-text formula notation remains visibly untypeset in the Statement support and multiple Proof steps. Examples include “a,b>=0 with a<1”, “0<=a<1 and b>=0”, “H={0}”, “plus or minus i mu”, “r_z(v)”, “A>=gamma”, “lambda+gamma=d>0”, “v>=gamma”, and “A+B”. Nearby expressions already wrapped in dollar delimiters render correctly.

**Source locations:**
- `items/thm-kato-rellich.md`: lines 36, 38, 50, 52, 54, 56, 58, 60, 62

**Original screenshot evidence:**
- [thm-kato-rellich--01.png](screenshots/thm-kato-rellich--01.png)
- [thm-kato-rellich--02.png](screenshots/thm-kato-rellich--02.png)
- [thm-kato-rellich--03.png](screenshots/thm-kato-rellich--03.png)

**Suggested repair:** Wrap and typeset the formula fragments consistently, including the zero-space case, nonreal shifts, resolvent notation, and lower-bound inequalities.

### FA05-R3 — reference-title-math-leak

The linked display title of def-quotient-seminorm leaks TeX markup into the rendered body: its visible link label contains raw “\operatorname{dist}” and underscore/subscript source. The cited target title uses \(…\) delimiters, which the link-title rendering path leaves literal. In the compact-remainder item, the adjacent source fact at line 45 is already properly delimited; the leak is in the linked target title.

**Source locations:**
- `items/def-quotient-seminorm.md`: lines 4

**Original screenshot evidence:**
- [lem-quotient-seminorm-triangle-inequality--01.png](screenshots/lem-quotient-seminorm-triangle-inequality--01.png)
- [lem-a-compact-remainder-estimate-forces-closed-range--01.png](screenshots/lem-a-compact-remainder-estimate-forces-closed-range--01.png)
- [lem-a-compact-remainder-estimate-forces-closed-range--02.png](screenshots/lem-a-compact-remainder-estimate-forces-closed-range--02.png)

**Suggested repair:** Use math delimiters supported by the item-title link renderer for the target title, or provide a plain-text short label for these links.

## Diagram review

No captured assigned item contains a TikZ diagram, so there were no existing diagram maps, orientations, indices or signs to validate. I found no source-supported missing diagram that would add information beyond the already explicit formulas and block decompositions; no diagram candidate is proposed.

## Limitations and notes

This review covers the local frozen app-renderer previews, not production HTTP routes, site navigation or metadata widgets. The pass checks visual presentation, not mathematical proof validity. No clipping was confirmed after checking the individual original tiles and their continuations. Technique-banner capitalization and block-line wikilinks are expected renderer conventions and are not reported as defects.

No item, application or tool source was edited.


Coordinator normalization note: grouped observations were serialized as item-specific entries in the JSON to preserve per-item Sol intake. The source observations and screenshot checks are unchanged.

# Final-adjudicator evidence — `thm-the-double-braiding-center-is-symmetric`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and each proof step; the braided, symmetric,
unit-compatibility, hexagon, and monoidal-coherence dependencies; the complete
braided/symmetric A/B page context; the batch-7 manifest, source coverage,
notes, proof contract, and risk report; the Step-6 reader/refuter history; both
frozen judge rejections and exact Alpha adjudications; the defect-ledger rows;
and Alpha's two repairs.

The item is moderate risk under the current mechanical report and therefore has
no required high-risk `risk_review` row.

## Mathematical basis

Alpha's repairs correctly identify both prior defects. Associators may be
suppressed only under a stated coherence convention, and the local definition
of a symmetric monoidal category is indeed the biconditional condition that the
double braiding be the identity.

The first repair still invoked “monoidal coherence” without citing the
published coherence theorem, and the sentence that “two middle pairs collapse”
did not display the actual order of the two transparency cancellations. I
repaired those local points.

The tensor unit is central because unit compatibility gives
$c_{\mathbf1,Y}=c_{Y,\mathbf1}^{-1}$. For central $X,Y$ and arbitrary $Z$, the
two hexagons, transported by the unique canonical reassociations, give the
well-typed coherent formula

$$c_{Z,X\otimes Y}c_{X\otimes Y,Z}=(1_X\otimes c_{Z,Y})(c_{Z,X}\otimes1_Y)(c_{X,Z}\otimes1_Y)(1_X\otimes c_{Y,Z}).$$

The middle adjacent factors first collapse by transparency of $X$. The two
remaining factors become
$1_X\otimes(c_{Z,Y}c_{Y,Z})$, which collapses by transparency of $Y$. Hence
$X\otimes Y$ is central.

Because the centralizer is full and its objects are closed under tensor product
and unit, tensor products of its morphisms and all ambient associator, unitor,
and braiding components stay inside it. For two central objects the defining
double-braiding condition is the identity, so the inherited braiding is a
symmetry by the library's definition.

I added the direct Mac Lane coherence dependency and regenerated the item entry
in both the batch-7 and merged proof-contract files.

## Source verification

Source status: `verified`.

Michael Müger's scholarly survey,
https://arxiv.org/pdf/0804.3587, gives the exact result in Section 4 (PDF p. 28,
under “Centralizer and center $Z_2$”): it defines two objects to commute when
$c_{Y,X}c_{X,Y}=1$, defines the centralizer as the corresponding full
subcategory, defines $Z_2(\mathcal C)=\mathcal C\cap\mathcal C'$, and states
that the centralizer is monoidal and $Z_2(\mathcal C)$ is symmetric. The same
survey's coherence discussion explains why canonical associators/unitors may be
suppressed; the local published coherence theorem supplies that convention in
the library itself.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-7 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-7 citation fidelity: 61 citations over 28 items, no missing quote and
  no widening candidate.
- Batch-7 risk report: 28 items routed, 0 errors; this theorem is moderate risk.
- Batch-7 content policy: 36 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.

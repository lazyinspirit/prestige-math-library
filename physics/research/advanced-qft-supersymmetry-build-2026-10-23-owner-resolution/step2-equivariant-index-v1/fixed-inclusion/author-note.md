# Fixed-inclusion localization authoring note

Authored only `items/lem-equivariant-symbol-fixed-inclusion-localization.md` and this evidence directory. The item remains draft and has no mathematical acceptance or verification stamp. Parent owns scientific review and downstream integration.

The supplier treats arbitrary classes in compact-support equivariant bundle K-theory, not just spin symbols. It uses the actual fixed set of the specified element g, rather than replacing it by the torus fixed set. The doubled real cotangent normal has the specified complex structure and Koszul denominator. The denominator on a positive-dimensional fixed component retains its exterior-power bundles; its scalar rank alone is not substituted into reconstruction.

The proof does not cite Borel localization or assume a general equivariant Thom isomorphism. It reconstructs equivariant bundle complements by finite Fourier approximation, obtains mapping-cone half-exactness by clutching, checks the equivariance of the existing explicit ordinary Laurent/spectral proof of Bott periodicity for the trivial suspension plane, and derives the closed/open and compact-support Mayer–Vietoris sequences. Slice characters then annihilate the complement after localization. A second slice argument makes the normal Euler action locally invertible, and Mayer–Vietoris propagates this. The normal Koszul product proves self-intersection directly.

The generic Koszul convention was reconciled with the parent definition: exterior multiplication on exterior powers of W gives root's positive Bott symbol z. Only for W equal to the complexification of a real orthogonal bundle is the canonical complex-bilinear metric used to identify W with its dual. This is not asserted for a generic Hermitian bundle.

Actual source retrieval: downloaded the complete Segal *Equivariant K-theory* PDF from `https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf` to the adjacent file. Extracted its text using PyMuPDF. Inspected the text of printed pp. 131, 134–137, 139–142, and 144–145: extension/averaging, equivariant complements, mapping-cone exactness/excision, Koszul self-intersection, the trivial-line periodicity discussion, and proposition 4.1's finite-slice localization argument. This is a bounded reading record, not a claim of complete reading of the paper or independent acceptance. The adjacent extracted text retains PDF page markers. The ordinary imported fundamental-product and linear-clutching suppliers were read as additional proof inputs; their matrices are used only after an explicit equivariance check.

Actual focused mechanical checks after the item edits:

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts --json items/lem-equivariant-symbol-fixed-inclusion-localization.md`: exit 0; one file, one checked, zero failed.
- `node tools/physics-support/proof-layout.mjs items/lem-equivariant-symbol-fixed-inclusion-localization.md`: exit 0; one item, 15 steps, zero defects.
- `node tools/physics-support/rendercheck.mjs items/lem-equivariant-symbol-fixed-inclusion-localization.md --json`: exit 0; one checked, zero errors and warnings.

The initial precheck proposed canonical phase renumbering. Only its numbered paragraphs were adopted, preserving the separately authored facts, statement and remarks. The initial diagnostic JSON is retained truthfully as an initial failure, not final passing evidence. No full run gates, dependency-level assignment, manifest changes, acceptance fields or commits were performed.

This supplier does not prove the analytic equivariant index theorem or its embedding compatibility. Its final remark makes that limit explicit.

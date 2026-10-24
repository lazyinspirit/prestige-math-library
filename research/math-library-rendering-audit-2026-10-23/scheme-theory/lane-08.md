# Scheme Theory rendering audit — lane 08

Reviewed all 109 assigned frozen titles and complete ItemBodies against their byte-identical current sources, frozen snapshots, assigned local rendered HTML, capture receipts, and all 250 receipt-listed PNG tiles. Every tile was opened individually with tools.view_image at original resolution; no collage or downscaling was used. Source, snapshot, HTML, receipt, and screenshot SHA256 values match their manifests. The receipts report 0 KaTeX errors, 0 diagram failures, 10,756 KaTeX expressions, and 0 TikZ diagrams. Screenshot dimensions match metadata, and the y/height ranges cover each capture continuously. All 109 frozen titles match the rendered headings. No confirmed rendering defect or existing diagram mismatch was found. No item, application, or publication status was changed; review was local only.

## Diagram candidates

- **lem-acyclic-rows-and-columns-of-cech-double-complex** — source lines 31–70, 112, 120, 122, and 126. The statement defines the double complex $D^{p,q}=C^p(\mathcal U,G^q)$, horizontal Čech differential $h$, vertical Godement differential $v$ with $hv=vh$, total differential $h+(-1)^pv$, the augmented global-sections column, and comparison maps $u$ and $w$. A labelled grid could show $D^{p,q}\xrightarrow{h}D^{p+1,q}$ and $D^{p,q}\xrightarrow{v}D^{p,q+1}$, the augmented column $\Gamma(X,G^q)\to D^{0,q}$ by restrictions, and the extra row $C^p(\mathcal U,\mathcal F)\to D^{p,0}$ induced by $\varepsilon$. Keep the sign in the total differential and distinguish the two comparison maps; the proof remains independent of the diagram.
- **ex-hyperelliptic-curve-double-cover** — source lines 63–73, 128, 138, and 146. The example gives the finite degree-two map $\pi:C\to\mathbb P^1_k$ for $y^2=f(x)$ and computes all fibres. A cover schematic can mark the $n$ roots of $f$ and add $\infty$ precisely when $n$ is odd; each branch point has one preimage of index 2, while all other closed points have two unramified preimages. Infinity has two unramified preimages for even $n$ and one ramified preimage for odd $n$. The count is $n+[n\text{ odd}]=2g+2$. Keep the field, characteristic, squarefreeness, and degree hypotheses visible.

These are clarity candidates: the item text already supplies the complete claims and proofs.

## Coverage

Exact per-item source, snapshot, local HTML and receipt hashes, all receipt-listed tile hashes, dimensions, capture positions, and individual view attestations are recorded in [lane-08.json](lane-08.json). All 109 assigned items and all 250 receipt-listed tiles are covered.

# Step 5a reader report — batch 9 (`reader-9`)

Run: `phase-2-remaining-27`. Scope: the four pages of
`research/phase-2-remaining-27-batch-9.pages.json` and their 70 items.
Status at reading time: every item `status: draft` with no `verification`
block, so no stale `verification.judge` record existed to remove after the
repairs below. The build driver state (`.autopilot/phase-2-remaining-27/`) shows
`3b-author` stamped complete and `5a-read` in flight, so these files were
readable current content and not a live author's working copy; the batch notes
(`research/phase-2-remaining-27-batch-9.notes.md`) claim 66 items, which is
stale against the 70 items of the manifest, the page files and the disk
inventory. The manifest governs.

## Opened inventory

Pages and item counts (manifest = page frontmatter = disk, all three agree):

| page | kind | items | examples | total |
| --- | --- | --- | --- | --- |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | A | 21 | 0 | 21 |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | B | 4 | 5 | 9 |
| `chern-and-pontryagin-classes-by-splitting-and-complexification` | A | 33 | 0 | 33 |
| `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | B | 1 | 6 | 7 |

All 70 item files were opened and read in full, together with the four page
files. Dependencies opened to verify claims (beyond the batch):

- exact-couple machinery: `def-exact-couple`,
  `thm-an-exact-couple-generates-a-spectral-sequence`,
  `lem-spectral-sequence-subquotient-and-local-lifting-calculus`,
  `prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences`,
  `thm-cellular-approximation-for-maps-of-cw-pairs`;
- skeleta/cellular: `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs`,
  `prop-relative-cw-inclusions-are-cofibrations`,
  `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient`,
  `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`,
  `def-wedge-of-pointed-spaces`, `def-oriented-cellular-chain-group`,
  `def-incidence-number-of-two-cw-cells`,
  `thm-cellular-boundary-is-the-incidence-degree-matrix`,
  `thm-cellular-homology-computes-singular-homology`,
  `thm-cellular-cochains-compute-cohomology-with-local-coefficients`;
- K-theory and characteristic classes: `thm-complex-bott-periodicity`,
  `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory`,
  `cor-complex-k-theory-of-spheres`, `def-clutching-construction-for-bundles-over-a-suspension`,
  `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range`,
  `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`,
  `thm-leray-hirsch-module-isomorphism`,
  `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`,
  `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class`,
  `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish`,
  `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion`,
  `thm-whitney-sum-formula-for-stiefel-whitney-classes`,
  `def-stiefel-whitney-classes-from-the-projective-bundle-relation`,
  `def-tautological-degree-one-class-on-a-real-projective-bundle`,
  `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`,
  `ex-integral-cohomology-of-real-projective-space-from-uct` (cross-check of the
  integral cohomology of `RP^r`);
- classifying spaces and symmetric functions: `thm-stable-stiefel-space-is-contractible`,
  `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`,
  `thm-principal-bundles-are-classified-by-maps-to-bg`,
  `thm-milnor-join-model-is-a-contractible-free-g-space`,
  `thm-five-lemma-for-a-morphism-of-long-exact-sequences`,
  `thm-whitehead-theorem`, `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`,
  `thm-fundamental-theorem-of-symmetric-polynomials`,
  `thm-oriented-real-vector-bundles-are-classified-by-bso`,
  `def-oriented-grassmannian-and-tautological-oriented-bundle`;
- obstruction theory/operations: `def-postnikov-k-invariant`,
  `thm-obstruction-theory-for-lifting-through-a-fibration`,
  `def-stable-natural-cohomology-operation`,
  `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces`,
  `prop-steenrod-square-normalization-instability-and-top-square`,
  `def-steenrod-squares-from-cup-i-products`,
  `thm-cartan-formula-for-steenrod-squares`,
  `def-bockstein-connecting-operation`,
  `prop-first-steenrod-square-is-the-mod-two-bockstein`;
- filtered abutments: `thm-spectral-sequence-comparison-theorem`,
  `def-extension-problem-of-a-convergent-spectral-sequence`,
  `def-associated-graded-object-of-a-filtered-object`,
  `prop-first-stiefel-whitney-class-classifies-orientability` (see the drift
  note below).

External sources opened and read at the cited places: Loizides, *The
Atiyah–Hirzebruch Spectral Sequence* (pp. 3–8; exact axioms, wedge axiom
convention `h^n\circ\Sigma\simeq h^{n-1}`, Theorem 3.2 and its `d_1` component
diagram, Theorem 3.4, Lemma 3.6); Davis–Kirk (Theorem 9.6 and §9.3, printed
pp. 242–246; bidegree `(-r,r-1)`, filtration
`F_{p}=im(G_n(B^{(p)})\to G_n(E))`, Lemma 9.9 and (9.5) for the 0-column edge);
Ji (Propositions 3.4, 3.8, 3.9, 3.11, 3.12 and §3.2.4); Adams, *Stable Homotopy
and Generalised Homology* (proof of Proposition 16.6, printed pp. 391–393:
`δ_2Sq^2` generates `H^3(H)`, the third `bu`-space is `SU`, and the Bott cofiber
sequence gives `k_*f^3=β_2Sq^2f^0`); Hatcher, *Vector Bundles & K-Theory*
(pp. 94–99: the `(-1)^i c_{2i}(E_{\mathbb C})` definition, Proposition 3.15
with the `n(2n-1)` transposition count, Theorem 3.16); Hatcher, *Algebraic
Topology* (§3.E Bockstein, §3.G transfer); Atiyah, *K-Theory*, Chapter II
§2.7 and p. 151 (the `x^2=-2x` relation, order `2^{n-1}` for `P_{2n-1}(R)` and
the cyclicity of `K(P_{2n}(R))`), used to check the real-projective items.

## Repairs made (all in in-flight batch-9 items or in assigned A-page prose)

1. `items/lem-edge-maps-of-a-bounded-skeletal-ahss.md` — the Statement
   asserted "the 0-column edge is the inclusion `h_n(X^0)=F_0h_n(X)\subseteq
   h_n(X)`". That equality is false as soon as `X` has more than one 0-cell
   (e.g. `S^1` with two vertices: `h_0(X^0)=\mathbb Z^2` but
   `F_0h_0(X)=im(h_0(X^0)\to h_0(X))\cong\mathbb Z`). Repaired to
   `F_0h_n(X)=im(h_n(X^0)\to h_n(X))` with the pair map `j` carrying
   `h_n(X^0)` onto it. Evidence: the item's own step 1.2 and fact F2 already
   state the image form; Davis–Kirk §9.3 (Lemma 9.9 and (9.5), printed
   p. 246) derive exactly `E^\infty_{0,n}\cong F_{0,n}\subset G_n(E)` for the
   identity fibration. No derivation in the batch proof contract asserted the
   false equality, so the contract was already consistent and needed no edit.

2. `items/ex-complex-k-ahss-for-a-closed-oriented-surface.md` — three false
   computations in the verification: (i) the parity sentence had the two cases
   exchanged — for even `r` the target row `q-r+1` is odd, while for odd `r\ge3`
   it is the column `p+r>2` that vanishes; (ii) step 3.1 computed
   `gr K^0=\mathbb Z^{2g+2}` when the stable page contributes `H^0` and `H^2`
   in total degree 0, so `gr K^0\cong\mathbb Z^2` and `gr K^1\cong\mathbb Z^{2g}`;
   (iii) step 4.1 then produced `K^0(S_g)\cong\mathbb Z^{2g+2}` and
   `\widetilde K^0(S_g)\cong\mathbb Z^{2g}`, contradicting the item's own
   statement `K^0(S_g)\cong\mathbb Z^2`. Repaired to
   `K^0(S_g)\cong\mathbb Z^2\cong\mathbb Z\oplus\widetilde K^0(S_g)` with
   `\widetilde K^0(S_g)\cong\mathbb Z` (the `p=2,q=-2` class contributes the
   reduced `\mathbb Z`). The manifest statement and the B-page prose agree with
   the repaired values `K^0(S_g)\cong\mathbb Z^2`, `K^1(S_g)\cong\mathbb Z^{2g}`;
   no published item states these groups, so the repair rests on the page
   computation itself.

3. `items/lem-homological-ahss-exact-couple-from-the-skeletal-filtration.md` —
   two defects. (a) Step 1.1 attributed the third exactness condition to
   "exactness of that same sequence [of `(X^p,X^{p-1})`] at
   `h_{p+q-1}(X^{p-1})`", whereas `im k_{p+1,q}=\ker i_{p,q}` is exactness of
   the pair sequence of `(X^{p+1},X^p)` at `h_{p+q}(X^p)`; repaired to the
   correct pair and degree. (b) Fact F2 imported the pair-quotient
   identification from `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs`,
   whose statement is about *ordinary* theories (dimension axiom
   `h_n(*)=0` for `n\ne0`), while the lemma is about a reduced *generalized*
   homology theory; the cited target's domain does not cover the use. Repaired
   by defining the pair groups of a reduced generalized homology theory by
   `h_n(X,A):=\widetilde h_n(C_i)` and deriving
   `h_n(X,A)\cong\widetilde h_n(X/A)` for `A\ne\varnothing` from
   `prop-relative-cw-inclusions-are-cofibrations` and
   `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient` (both
   published, now declared in `deps`), with the cofiber exact sequence of the
   reduced axioms supplying the pair long exact sequence. The ordinary-theory
   item is retained in `deps` but is no longer linked.

4. `items/lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss.md` —
   fact F3 and steps 1.2 and 2.1 assigned the Leibniz rule to the *pair map*
   `k`. In the library's exact-couple convention (fixed by
   `thm-cohomological-atiyah-hirzebruch-spectral-sequence`, step 1.1, and
   `thm-an-exact-couple-generates-a-spectral-sequence`: `k:E\to D` induced by
   the pair map, `j:D\to E` the connecting map, `d=jk`), `k` is multiplicative
   and `j` carries the Leibniz rule; the stated identity is false as written —
   e.g. for `X=S^2` in `K`-theory with `x=y=1\in E_1^{0,0}` one has
   `k(xy)=1` but `k(x)y+xk(y)=2`. Repaired to `k(xy)=k(x)k(y)` together with
   the connecting-map Leibniz rule for `j`, and the derivation property of
   `d_r` re-derived as
   `d_r[ee']=[j(uv)]=[j(u)]e'+(-1)^{|e|}e[j(v)]`. The lemma's statement
   (products on every page, `d_r` a derivation, multiplicative filtration,
   associated-graded product) is unchanged and still matches Miller's Lecture
   29 bullets (printed pp. 100–101) and the derived-couple calculus of
   `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.

5. `library/algebraic-topology/generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence.md`
   (assigned A-page prose) — the summary read "dyadic reasons bound the
   skeletal index", which is meaningless; repaired to "finite dimension bounds
   the skeletal index", matching the pages' finite-CW convergence convention.

6. `items/lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions.md`
   and `items/ex-complex-k-ahss-for-real-projective-space.md` — both stated the
   integral cohomology of `\mathbb{RP}^r` as `\mathbb Z/2` "in odd degrees below
   `r`" as well, which is the homology table, not the cohomology table:
   `H^k(\mathbb{RP}^r;\mathbb Z)=0` for odd `0<k<r`, with `H^r` equal to
   `\mathbb Z` (`r` odd) or `\mathbb Z/2` (`r` even). Repaired in both items;
   the published cross-check `ex-integral-cohomology-of-real-projective-space-from-uct`
   states exactly the repaired table. In the same lemma, step 1.2 justified
   `E_2=E_\infty` by "every differential either lands in an odd coefficient row
   or in a column exceeding `r`", which is false (for odd `r` the differential
   `d_r:E_r^{0,q}\to E_r^{r,q-r+1}` lands in column `r` with an even row, and
   `d_3:E_3^{2,q}\to E_3^{r,q-2}` lands in the top column for `r=5`); repaired
   by the correct case analysis — even `s` gives an odd target row; odd `s\ge3`
   with source column `p\ge1` gives an odd target column, so the target
   vanishes unless `p+s=r`, where the torsion source maps into the torsion-free
   group `H^r`; and the 0-column survives because it cannot be hit and its edge
   is `E^{0,q}_\infty\cong h^q(\mathrm{pt})=\mathbb Z=E^{0,q}_2`. Consequence
   verified independently: the collapse and the group values are correct (they
   agree with Ji §3.2.3 and with Atiyah, Chapter II, p. 151), so only the
   justifications, not the conclusions, were defective.

7. `items/ex-chern-classes-of-a-sum-of-universal-complex-lines.md` — fact F3
   asserted the classification of bundles by `B\mathbb U(n)` with a citation to
   `thm-integral-cohomology-of-bu-n`, whose statement is the cohomology ring
   `H^*(B\mathbb U(n);\mathbb Z)=\mathbb Z[c_1,\dots,c_n]` and does not contain
   the classification; repaired to cite
   `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`
   (added to `deps`; the ring theorem is retained for the universal-bundle
   sentence).

Proof contracts (`research/phase-2-remaining-27-batch-9.proof-contracts.json`)
were updated for the changed derivations of items 2, 3, 4, 6 and 7 (claim text
and, for item 3, the F2 citations), and the `deps` lists of items 3 and 7 were
extended with published suppliers. Reflow and precheck were run for each
changed item:

- `node tools/tsx-run.mjs tools/reflow.mts` on all seven changed items — all
  "unchanged" (the edits were already single-line paragraphs);
- `node tools/tsx-run.mjs tools/precheck.mts` on all seven — `PASS`;
- `node tools/tsx-run.mjs tools/precheck.mts` on the whole 70-item batch —
  `58 checked, 0 failing` (the other 12 items are definitions/remarks without a
  phase-format body);
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-9.proof-contracts.json`
  — `0 error(s), 1 warning(s), 70/70 checked` (the single warning is the
  pre-existing `shotgun-bracket` shape in
  `lem-homological-ahss-exact-couple-from-the-skeletal-filtration`, step 1.2);
- `node tools/depcheck.mjs` — no cycle, all references resolve, no draft item on
  a published page.

## Dependency drift found while reading (repaired at contract level)

`items/prop-first-stiefel-whitney-class-classifies-orientability.md` (a draft
dependency of this batch, homed in another batch) was rewritten by another
agent at 2026-09-17 20:59 while this read was in progress. Two batch-9 proof
contracts quoted its older statement text and immediately failed
`citation-quote-mismatch` (`thm-mod-two-reduction-of-chern-classes`, F5 and
`ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler`, F3). The
uses remain supported by the new statement
(`w_1(E)=0\iff E` is orientable `\iff` the structure group reduces to
`SO(n)`), and the two quotes were refreshed to the current text; the full
batch contract check is clean again. If that supplier changes once more, the
quotes in these two contracts must be refreshed again — 5b should treat this
supplier as unstable evidence.

## Suspected defect not editable by this reader (see the findings JSON)

The examples page of the second pair fixes opposite orientations of
`S^2=\mathbb{CP}^1` on one and the same page, while labelling the two
generators with Hopf/positivity language:

- `library/algebraic-topology/chern-and-pontryagin-classes-by-splitting-and-complexification-examples.md`
  (page summary; not editable by this reader): the first sentence says "with
  the dual class the generator normalized by the pair", i.e.
  `c_1(\gamma^*)` is the normalized generator, and the later sentence says
  "Over `S^2` the clutching degree computes the first Chern number,
  `c_1(E_d)=d\,u` for the Hopf-normalized generator `u`".
- `items/ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree.md`
  (the item summarised by that sentence): `u:=c_1(E_1)`, and `E_1` is the line
  clutched by `z\mapsto z`, which the published
  `def-clutching-construction-for-bundles-over-a-suspension` identifies with the
  tautological Hopf line `\gamma`, so `u=c_1(\gamma)=-c_1(\gamma^*)`: the
  statement fixes "the orientation of `S^2` ... by requiring
  `\langle u,[S^2]\rangle=+1` in this normalization", and step 3.1 calls this
  "the Hopf normalization".
- `items/ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space.md`:
  "`x:=c_1(\gamma^*)` ... is the positive generator: it restricts on the
  standard `\mathbb{CP}^1` to the negative of the tautological Hopf class, and
  `c_1(\gamma)` is the negative generator".

Each item is individually consistent (the clutching item *defines* its
orientation by `u`; the projective-space item uses the standard complex
orientation of `\mathbb{CP}^1`), and both conclusions `c_1(E_d)=d\,u` and
`c_1(\gamma^*)=-c_1(\gamma)` are true. The clash is in the page's naming: with
the standard Hopf (complex) orientation the positive generator is
`c_1(\gamma^*)`, so calling `u=c_1(\gamma)` "the Hopf-normalized generator"
contradicts the same page's first sentence, and a reader carrying the phrase
across gets the opposite sign. The page prose is not editable by this reader,
so the finding is filed against the page for 5b adjudication; the two item
statements need no correction under their stated normalizations.

## Other observations (no edit)

- `items/lem-ku-representability-and-skeletal-postnikov-d-three-comparison.md`
  has an `ai-generated` proof with a compressed step 1.4 (the identification of
  the two `i`-preimages with lifts over `X^{p+1}`, `X^{p+2}` and of `j(y)` with
  the cellular obstruction). I closed it with Adams's Proposition 16.6 proof
  and `thm-obstruction-theory-for-lifting-through-a-fibration`; the claims are
  the standard Postnikov/AHSS comparison, and I found no false statement. Its
  step 2.1's phrase "is an isomorphism on stable homotopy in nonnegative
  degrees and zero below" means the source `\pi_k(ku)` vanishes for `k<0`,
  which is correct.
- `items/lem-universal-complex-flag-bundle-is-bt-n.md` step 2.1 compresses the
  model comparison of `E\mathbb U(n)/T^n` with `(\mathbb{CP}^\infty)^n` into
  one sentence (both are quotients of contractible free `T^n`-spaces, hence
  both `ET^n`, and the classifying maps compare them). Standard and closeable;
  no false claim.
- Several items use uncited "standard" inputs stated as facts: the integral
  cohomology ring of `\mathbb{CP}^n` in
  `ex-complex-k-ahss-for-complex-projective-space` [A2], the projective-bundle
  K-ring in the same item [A3], the integral cohomology of `\mathbb{RP}^r`
  (now repaired), and the universal-coefficient computation in the
  `\mathbb{CP}^N` Gysin proof. These are hypotheses rather than inferences, so
  they are contract-legal, but they leave the page's citation coverage weaker
  than the items' `[[...]]` links suggest.
- `items/thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes.md`
  is `proof_strategy: induction` and its rank count is correct; I re-derived
  `r_j+r_{j-2k}=r'_j+r'_{j-2k}` from the Gysin short exact sequences and the
  `\{1,e\}`-basis of `H^*(B\operatorname{SO}(2k);\mathbb Q)` and confirmed the
  induction closes.
- The batch notes' "66 items" and the item-by-item counts for AT-20 (29 A-page
  items) are stale; the manifest, page frontmatter and disk all record 33 A-page
  items for that page. The reader used the current files.

## Verdicts per page

| page | verdict |
| --- | --- |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` (A) | sound after repairs 1, 3, 4 and the prose repair 5; statements, indexing, differential degrees and convergence argument check out against Loizides, Davis–Kirk and the library's exact-couple items |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` (B) | sound after repairs 4 (item) and 6 (lemma); the sphere, `\mathbb{CP}^n` and surface computations are correct as repaired, the `\mathbb{RP}^r` collapse is correct with the repaired justification, and the `\mathbb{RP}^2\times\mathbb{RP}^4` `d_3` computation was verified by hand (`\rho_2z=Sq^1(uv)=u^2v+uv^2`, `Sq^2\rho_2z=uv^4`, `\rho_2\beta_{\mathbb Z}(uv^4)=u^2v^4\neq0`) |
| `chern-and-pontryagin-classes-by-splitting-and-complexification` (A) | sound; the projective-bundle and splitting chains, the mod-two comparison, the `(-1)^i` Pontryagin convention, the `BSO`/`BO` computation and the Chern-character comparison were checked against Hatcher, Miller and the library suppliers; no statement-level error found |
| `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` (B) | sound after repairs 6 (on the `\mathbb{RP}^r` items homed on the sibling B page) and 7; the two-torsion lemma and the integral Pontryagin counterexample are correct (`p_1(\lambda\oplus\lambda)=-a^2\neq0`, `p(\lambda)^2=1`) |

## Blockers

None fatal. The only unresolved items are the cross-page orientation/labelling
clash above (routed to 5b) and the concurrent rewriting of the draft supplier
`prop-first-stiefel-whitney-class-classifies-orientability` by another batch,
which can invalidate two contract quotes again and needs a 5b re-check.

## Coverage note (genuine limits)

This was a single reader pass. I read all 70 items and the four pages in full
and opened the dependencies listed above, but I did not re-audit every one of
the several hundred cited library items outside the batch line by line; for
those I checked the citable statement against the use. I verified the external
source claims at the cited locations (Loizides, Davis–Kirk, Ji, Adams,
Hatcher `VBKT`/`AT`, Atiyah, Miller) but did not attempt to re-prove the cited
external computations such as Adams's `H^6(H,3)`/`H^6(SU)` nonvanishing or
Atiyah's exact-sequence computation for real projective space; those are used
as recorded source inputs, exactly as the items declare. I did not run the
judge, stamp or certify anything, and this report is not an independent proof
verdict for the batch.

# Step 5a adjudication — batch 23

Run: `frontier-39-analysis-30`; group: `batch-23`. Only batch-23 content is writable. No judge, stamp, dispatch, or gate cycle is performed. Reviews below follow the generated dependency order. The scope assignment remains group h.

Evidence: scope-23, reader-23, reader-findings-23, refute-23, both version-2 hash snapshots, current contracts and manifest. Every touched item matched its post-reader item hash before this review. Historical defects are identified from the reader’s exact before/after descriptions; complete pre-reader item byte strings are not claimed to have been recovered. Metadata-only touched obligations are distinguished from repairs.

Source read: Jacob Lurie, https://www.math.harvard.edu/~lurie/papers/bwb.pdf, complete three-page note, especially Theorem 2 proof pp. 1–2, Theorem 3 and Lemma 4 pp. 2–3, Theorem 5 p. 3. Its action/sign conventions require independent translation to the library’s explicit relation and inverse left action; no disputed sign is imported without calculation. Initial risk-report: 17 items, all HIGH/CRITICAL, zero tool errors, no prior risk_review entries.

## lem-a-regular-weight-has-a-unique-dominant-dot-translate

Checked the current Statement, F1–F7, all six proof steps, and the actual exported chamber, reflection, length, integrality, rho and dot-action dependencies. The reader correction s_{i_{j+1}}=s_alpha replaces the ill-typed assignment to a root. A simple reflection flips exactly its own sign, so the sign count changes by one; regular integral pairings make dominance after subtracting rho equivalent to strict dominance before subtraction. Simple transitivity gives uniqueness of the element, not merely of the orbit point. Monotone chains terminate after N(mu) steps and the length inequality proves reducedness; w0 complements the inversion set. Rank zero gives w=w0=1 and empty chains. AC is unnecessary for these finite constructions; the abstract root-system tests do not require the AC used to construct Lie-theoretic ambient data. The current item matches the post-reader snapshot; Lurie p. 3 provides the wall-crossing context.

Disposition: accepted_repair.

## lem-lowest-weight-space-is-the-nilradical-invariant-line

Reviewed Statement, F1–F6, all five steps, and each actual cited highest-weight, dual, nilradical, classification, weight-space and AC dependency. The cyclic highest-weight decomposition V*=Cv* direct-sum n^-V* has a one-dimensional quotient of weight -w0 mu; its dual is exactly the n^- annihilator in V and has weight w0 mu. Nondegeneracy shows the matching weight space has dimension one and every other weight lies above it. At mu=0 (and g=0) the quotient is the trivial one-dimensional representation. The exported result is sound. Nonfatal notation alert for engine/Step 5b routing: step 3.1 prints v -> (v -> f(v)); the canonical evaluation map must be v -> (f -> f(v)), f in V*. Subsequent explicitly quantified (xf)(u)=-f(xu) supplies the intended map immediately, so this does not block the exported invariant-line result. No touched/reader/flagged obligation exists for this item; no extra decision is manufactured and no item edit is made. The risk assessment is complete with this reported notation defect, not a claim of defect-free text. Kirillov Chapter 8 highest-weight theory and the read current suppliers support the quotient calculation.

Disposition: risk review only; no routed carrier decision.

## lem-sections-of-an-associated-line-bundle-as-equivariant-functions

Checked the current Statement, F1–F5, all five proof steps, and the exported torsor, character, bundle, quotient and H0 dependencies. On each torsor chart [gb,f(gb)]=[g,f(g)] is equivalent to f(gb)=lambda(b)f(g); this gives both inverse constructions and regularity on overlaps. The inverse in left translation gives a genuine G action. The right B action is the scalar lambda(b)^(-1), so evaluation is equivariant into the specified fibre even if H0 and evaluation are zero. Reader corrections replace nonlinear scalar inversion as a purported dual map with fibrewise linear duality and replace the false section-space duality remark by bundle duality. Both corrections are sound and present in the post-reader bytes. At lambda=0 the dictionary reduces to B-invariant regular functions. Rui sections 1.5–1.8, printed pp. 3–4, independently match the inverse-character bundle and the function equation. Ng Theorem 3.6 and Definition 4.2 identify the general construction, but its proof of local triviality (p. 8) incorrectly treats every Bruhat cell as open and its p. 10 character proof prints zero on the unipotent radical; neither error is imported: actual torsor charts and X*(B)=X*(T) are supplied by the current repository lemmas. AC is inherited from those group and sheaf suppliers.

Disposition: accepted_repair.

## lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety

Independently checked Statement, F1–F8, all six steps and actual big-cell, Bruhat, rank-one, character, normality and DVR suppliers. Left translation by n_w0 turns ordinary Bruhat cells into mixed cells of codimension ell(w); the codimension-one components are exactly the simple-root closures. For each such divisor, the generic DVR expression z^m h can be spread to an open set with h a unit and other zero components removed. U^- left/B right translation preserves the divisor and transports a point of the dense cell to n_s. The explicit SL2 curve has a nonzero local boundary germ of positive order e and pulls the function back to t^k; thus m e=k>=0 implies m>=0 even without transversality. All remaining height-one points meet the big cell, so normality extends the function; the functional equation extends by density. Both directions of the normalization/nonzero-section equivalence are valid by translating a nonzero value. lambda=0 gives 1 and k=0 forces zero divisor order; rank zero has no boundary. The reader fixes of the mixed decomposition, dimension computation and unproved multiplicity-one argument are accepted. The new DVR dependency is present in item, manifest and contract. Lurie Theorem 2 proof p. 2 gives this rank-one pole route; Rui 1.5–1.8 and 1.14 give the bundle and fibre conventions, not an independent proof of this big-cell extension.

Disposition: accepted_repair.

## prop-left-translation-makes-line-bundle-cohomology-a-g-module

Checked the current Statement, F1–F6, all five steps and the actual projective flag, coherent finiteness, functorial cohomology, affine Cech and quasi-coherent module suppliers. The fibre cocycle and inverse base action give rho(gh)=rho(g)rho(h). For rationality, the product cover on affine G times separated projective X computes R tensor H^i over the field C; the automorphism (g,x)->(g,g^-1 x) and algebraic fibre action give an R-linear matrix specializing to rho(g). Its inverse is rho(g^-1), also regular, so this really lands in GL, including V_i=0. The tensor/dual maps are fibrewise equivariant, not claims about tensor or dual of cohomology. Degree zero agrees with the earlier function dictionary. AC is inherited from cohomology and the geometric suppliers. No mathematical defect was identified in this untouched item; Ng Definition 4.2 and Rui 1.6–1.9 give the degree-zero conventions, while the higher-degree rationality is established by the written Cech argument.

Disposition: risk review only; no routed carrier decision.

## lem-a-nonzero-dominant-section-is-determined-on-the-big-cell

Reviewed Statement, F1–F4, all five steps and actual root-coordinate, root-exponential, dense-big-cell and section-action suppliers. The reader repair evaluates the derived action at every translated point, yielding p_g prime(t0)=0 for every t0; zero derivative just at 0 would not suffice (t^2). In characteristic zero this proves root-subgroup invariance and its converse; products give U^- invariance. Evaluation is injective on the invariant space by density, so a nonzero invariant has nonzero value at 1 and T-weight -lambda. The new fifth step preserves the promised entire weight space: a weight -lambda section restricts to a torus-conjugation invariant polynomial on U^-, and all nonconstant root-coordinate monomials have a nonzero negative-root character; hence it is constant and invariant. Zero sections and a zero section space are covered. The substantive reader repairs are sound and the current item matches its post-reader hash. Lurie Theorem 2 proof pp. 1–2 supplies the invariant-function density route; the additional monomial argument is explicitly derived from actual root coordinates rather than assumed from that source.

Disposition: accepted_repair.

## lem-rank-one-cohomology-shifts-across-a-simple-wall

Reviewed Statement, F1–F8, four proof steps, every actual cited exported dependency, and the complete relative shift/apolarity and fibre-degree/relative-canonical proof arguments (bounded outputs completed where truncated). The relative canonical character is +alpha on the fibre, hence L_-alpha and degree -2. Thus s_alpha dot lambda=lambda-(n+1)alpha and the twist is exactly L_lambda tensor K_relative^(n+1). The supplier apolarity compares Sym^n(V dual) with Sym^n(V) tensor det(V)^(-n), with equal central weights on overlaps; it descends through PGL2 after the stated residue normalization. The two Leray rows give the shift with i on the degree-n side and i+1 on the degree-(-n-2) side. Naturality under automorphisms of the whole bundle data gives G-equivariance. n=-1 has zero relative images and agrees with finite-dimensional vanishing; reflection transforms n<=-1 to -n-2>=-1 and reverses the shift. Rank one reduces to the P1 table. Lurie Theorem 3 and Lemma 4 pp. 2–3 and Rui 1.14–1.16 pp. 5–6 agree with these statements; Rui 1.18 has a reversed concluding formula, so that line is not used. AC is inherited through higher images/Leray and the geometric suppliers. No local or published defect in the load-bearing assertions was confirmed.

Disposition: risk review only; no routed carrier decision.

## lem-singular-dot-weights-have-zero-line-bundle-cohomology

Checked Statement, F1–F6, four proof steps, the actual chamber/wall, rank-one, canonical-bundle and Serre-duality suppliers, and the B2 remark. Negative simple crossings decrease the negative positive-root count even on other walls. At the dominant singular orbit point a simple pairing is zero, so the shifted line-bundle degree is -1 and all cohomology there vanishes. This directly kills original degrees q>=m. For mu=-lambda-2rho the count is m prime, and singularity gives m+m prime<=N-1; then every remaining i<m has N-i>m prime and Serre duality kills it. This checks the low-degree gap explicitly rather than extrapolating a shift to negative degrees. lambda=-rho gives m=m prime=0. Rank zero has no singular weight and the conditional statement is vacuous. The dominant point is unique but its transporting Weyl element need not be. For the B2 remark with alpha1 long, alpha2 short, pairings (1,-2) are (0,-1) in orthonormal root coordinates, whose orbit contains omega1=(1,0); 2alpha1 coroot+alpha2 coroot gives the stated zero wall. Lurie p. 3 supplies the wall argument, while the written complementary-count duality closes every degree. No defect confirmed in this untouched item.

Disposition: risk review only; no routed carrier decision.

## thm-borel-weil

Reviewed Statement, F1–F9, all three steps, and every actual cited dependency, with the lower-level geometric, invariant-line and rank-one risks completed first. The reader corrections quantify every nilradical element, give w0 mu1=-lambda without the erroneous double negative, and derive dominance/integrality before invoking the dual-highest-weight theorem. Complete reducibility and exactly one invariant line force exactly one simple summand; dominant weights have a section by extension. For higher vanishing, lambda+rho is strictly dominant and regular, and N increasing crossings yield H^i(L_lambda)=H^(i+N)(L_(w0 dot lambda))=0 for i>0. The remaining current fact F6 omitted regularity: mu=0 is dominant but cannot satisfy its strictly-antidominant endpoint or increasing sign count. Added “and regular” to F6; its actual cited supplier and contract quotation already include that hypothesis, and step 3.1 proves it for this application. Statement/Definition and dependency lists are unchanged; no consumer propagation is triggered. Also corrected the contract zero-weight evidence: at lambda=0 the chain has N steps, not zero except in rank zero. No judge record exists and no judgment was added. Precheck passed after the edit; final layout remains scheduled after all edits. Lurie Theorem 2 pp. 1–2 supports H0, and Theorem 3/Lemma 4 pp. 2–3 plus the written increasing chain prove higher vanishing. AC is inherited from classification, complete reducibility and cohomology.

Disposition: amended_repair.

## thm-borel-weil-bott

Checked current Statement, F1–F6 and all four proof steps against the already-reviewed local suppliers and actual canonical/Serre, dot-action, integrality, dual and length exports. The current item bytes are identical in the pre/post snapshots: the routed delta is contract enrichment, so reviewed_no_defect with change_kind audit_enrichment is appropriate and closes no defect finding. Singular vanishing uses the dedicated lemma. A regular weight reaches the unique dominant dot translate in ell(w) negative crossings; reverse shifts give the degree-ell(w) dual module and all higher vanishing. For mu=-lambda-2rho, w0 w carries mu+rho into the strict dominant chamber; integrality allows subtraction of rho. Its degree N-ell(w) makes Serre duality kill every degree below ell(w). The step is an application of the already established regular-chain portion, not circular use of the whole theorem. w=1, w=w0, lambda=0, lambda=-rho and rank zero have the stated endpoint behavior. Lurie Theorem 5 p. 3 and Boxer–Pilloni Theorem 1.1/Remark 1.2 printed p. 2 agree on the dichotomy and degree. Their B-backslash-G/right-action convention differs, so the dual output is taken from the current inverse-left-action proof, not copied from their highest-weight output. AC is inherited from local suppliers.

Disposition: reviewed_no_defect.

## cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer

Reviewed current title, Statement refuted, Counterexample, three steps and every actual fibre-degree, bundle, P1 cohomology, fundamental-weight and Borel-Weil dependency. For integer m>0, L_m=O(m) has m+1 nonzero global sections while the opposite-character bundle is L_-m=O(-m), with H0=0. In particular m=1 gives dimensions 2 and 0, so this disproves both harmless interchange and an assertion of duality of section spaces. The claim concerns H0; it does not assert higher vanishing for O(-m), whose H1 has dimension m-1 when m>=2. m=0 is deliberately excluded and would give equal trivial bundles. The stable ID contains old duality wording but the current title and mathematical body correctly state the convention error. No item edit or extra carrier decision is owed. Metadata normalization needed in the owning manifest: its pre-authoring summary still says the sign dualizes the answer and its strategy incorrectly adds higher vanishing for every m>0, citing removed example dependencies. Align these planning fields to the sound current body, record change_kind metadata with empty defect_ids in this risk disposition, and do not use the normalization to close reader/refuter findings. Rui 1.6–1.8 pp. 3–4 and 1.15 p. 6 agree with the bundle sign and P1 table; Ng Example 5.5 is a secondary convention reference. AC comes from actual group/cohomology suppliers.

Disposition: risk review only; no routed carrier decision.

## prop-borel-weil-bott-is-compatible-with-serre-duality

Checked Statement parts (i)–(iii), F1–F5, all three steps and actual BWB, regular-chamber, Serre, canonical, dual-highest-weight, classification and dot-action exports. Negation of lambda+rho preserves regularity; u=w0 w takes the dual shifted weight into the strict dominant chamber and has complementary length. With nu=w dot lambda, using w0 rho=-rho gives u dot mu=-w0 nu, so L(u dot mu)^*=L(nu), not L(nu)^*. The Serre cup-product/contraction/trace is natural under the G-linearizations and normalized trace is invariant under automorphisms, so the pairing intertwines the modules. Singular weights vanish on both sides. lambda=0 and mu=-2rho exchange degrees 0 and N; rank zero reduces to ordinary duality of C. The reader correction to F4 removes the false uniqueness of a particular isomorphism: any nonzero scalar multiple is another intertwiner; highest weight determines only its isomorphism class. Accepted the post-reader bytes. Lurie Theorem 5 p. 3 supports the duality finish; Boxer–Pilloni Theorem 1.1 is printed p. 2 and uses a different bundle/action convention. AC is inherited from duality and representation suppliers.

Disposition: accepted_repair.

## ex-the-sl2-singular-weight-has-no-cohomology

Checked Example, F1–F5 and all three verification steps against the actual rank-one, dot-singularity, fibre-degree, P1 table and degree-bound suppliers. With alpha=2omega1 and rho=omega1, lambda=-omega1 satisfies lambda+rho=0 and s dot lambda=s(0)-rho=-omega1. The reader replaces both false old computations by this correct one, without changing the vanishing claim. Fibre degree -1 identifies O(-1); it has neither H0 nor H1 and all higher groups vanish. Independently, the degree-preserving fixed-wall isomorphism H^i=H^(i+1) propagates H2=0 to H1 and H0. The equality does not assert a nonzero fixed group. Current bytes match the post-reader snapshot. Lurie Theorem 3/Lemma 4 pp. 2–3 and Rui 1.15–1.17 p. 6 cover the boundary; actual sources and conventions, not the stale page numbers of a secondary locator, determine the computation. AC is inherited from cohomology.

Disposition: accepted_repair.

## cor-borel-weil-bott-euler-character-is-the-weyl-character

Checked Statement, F1–F3, all three proof steps, the SL3 remark and actual formal-character, additivity, alternation, dual/classification and current batch-21 Weyl-character exports. The theorem exports its denominator identity with an invertible formal denominator; the alternation definition alone did not export that identity. The reader correctly adds the theorem citation and gives the signed dual title. In the regular case only degree ell(w) contributes, with dual highest weight nu=-w0(w dot lambda), so the quotient is (-1)^ell(w) A(nu+rho)/A(rho). Odd length permits negative coefficients; Weyl invariance cannot equate a module with its dual. Independently checked lambda=omega1 for SL3: the three dual weights in the remark differ from the three natural-module weights. Singular shifted weights give zero, lambda=0 gives 1, rank zero gives the same trivial character. The current item matches the post-reader hash, but its owning manifest still carried the pre-authoring false no-dual formula and W-invariance argument; amended its title, summary and strategy to the current signed dual formula without changing item Statement/Definition or supplier lists. This is a correction to the routed manifest carrier, with no propagated item-claim change. No published or outside-batch consumer edit was needed. Rui 1.22 p. 7 gives the Euler-character comparison, and the actual current Weyl character theorem supplies the formal denominator. AC is inherited from the representation and cohomology suppliers.

Disposition: amended_repair.

## ex-an-sl3-weight-with-cohomology-in-degree-one

Checked Example, F1–F5, all four verification steps and actual A2 matrix-root, fundamental-weight, rho/reflection, BWB, Euler-character, dual-classification and current Weyl-dimension dependencies. In fundamental-weight coordinates alpha1=(2,-1), rho=(1,1), so s1 dot rho=(-3,3). Its shift is (-2,4)=s1(2rho), and its simple/positive-root-coroot pairings are -2,4,2; it is regular with one negative positive-root pairing. Thus s1 dot lambda=rho and only H1 survives. The dimension product has three factors 2, giving 8. The Euler character is negative and the removal of the dual is justified here specifically by w0 rho=-rho, which makes L(rho) self-dual; it is not a general Weyl-invariance argument. The item hash is unchanged between pre/post snapshots, while its contract source quotation was enriched; use reviewed_no_defect/audit_enrichment, with no defect IDs. Lurie Theorem 5 p. 3 and Rui 1.16–1.20 pp. 6–7 provide the general degree rule; the explicit A2 arithmetic is derived locally. AC is inherited from supplied representations/cohomology.

Disposition: reviewed_no_defect.

## ex-borel-weil-bott-on-p1-for-sl2

Checked Example, F1–F4 and all four verification steps against the actual BWB, singular example, fibre-degree, projective-line twist/cohomology, Weyl-dimension and rank-one root exports. With m integral, the shifted coordinate is m+1; m>=0 gives w=1, m<=-2 gives w=s and dominant dot translate (-m-2)omega1, and m=-1 is the sole dot-singular value. Cohomology dimensions are respectively m+1, -m-1 and 0, and H^q vanishes for q>1. Tested m=0, -1, -2 and 1: dimensions 1,0,1,2 in the asserted degree. Reader corrections replace the forbidden/removed B-example citation with the existing fibre-degree A-supplier, restrict finite-dimensional L(k omega1) notation to nonnegative highest weight, and specify dot-singularity. These are sound and current item bytes match the post-reader snapshot. The stable module uses throughout have integer k, inherited from the integer m parameter. No other consumer claim changes are needed. Rui 1.15 p. 6 is the complete P1 table, and Ng Example 5.5 pp. 11–12 supplies the character convention. AC is inherited from the cited root/cohomology suppliers.

Disposition: accepted_repair.

## ex-the-top-degree-bwb-case-and-serre-duality

Reviewed Example, F1–F4, all four verification steps and actual A2 root, rho, BWB, canonical/Serre compatibility and Weyl-dimension exports. w0 rho=-rho gives w0 dot rho=-3rho, shifted weight -2rho, unique dominant translator w0 of length N=3, and translate rho. The dual line-bundle parameter is -(-3rho)-2rho=rho, so Serre pairing relates H3(L_-3rho) and H0(L_rho). It is perfect via cup product and the normalized trace; H3(K_X) is one-dimensional because it is dual to H0(O_X), the trivial representation from Borel-Weil at 0. Each factor has dimension 2^3=8. Although both cohomology descriptions are written as L(rho)^*, self-duality follows from -w0 rho=rho and the dual-highest-weight classification; hence the perfect pairing is consistent and no general self-duality is assumed. Current item bytes are identical in the pre/post snapshots and only its contract was enriched: reviewed_no_defect/audit_enrichment, no defect IDs. Lurie Theorem 5 p. 3 gives the degree/duality rule; Boxer–Pilloni Theorem 1.1 printed p. 2 provides the dichotomy in its separate action convention. AC is inherited from duality/representation suppliers.

Disposition: reviewed_no_defect.

## Page obligations

Read the full draft A page and its manifest order. The reader’s opposite-Borel pole-sign description accurately summarizes the repaired extension proof: the rank-one curve determines the sign of the generic divisor order without transversality. Preserved this change and all item-order anchors. Amended the BWB summary to say singular/regular lambda+rho explicitly: without the shift qualification, the ordinary singular weight lambda=0 would incorrectly be assigned vanishing, although H0(L0)=C. The corrected prose agrees with the reviewed singular lemma and BWB theorem. This page remains draft; no published carrier is changed. The dependencies and item list are unchanged.

Read the full draft B page, its five current example/counterexample carriers and their actual fibre-degree/cohomology dependencies. Confirmed the exact reader/refuter false claim in the post-reader carrier: changing the fibre-character sign dualizes the line bundle, not its H0 answer. At m=1, H0(O(1)) has dimension 2 and its dual also has dimension 2, whereas H0(O(-1))=0. Replaced only the final prose to state bundle duality and the change from L(m omega1)^* to zero for m>0. The item list, examples and stable IDs are preserved; page is draft. Both findings identify this same paragraph in the same observed carrier ba35f95aa1bbadd3a3aa06eb35a3050160e646c3d4e5a2d853d5eee6818376e2; they share one defect row rather than duplicating the defect.

Verdicts: A page amended_repair; reader:23:1 and refuter:23:1 confirmed_fatal, repaired with confidence 1. The B page owes finding decisions only, not an additional touched-page decision.

## Decision inventory and checks

Exactly 15 owed decisions are present: 12 touched items, one touched A page, one reader finding and one refuter finding. Group is `batch-23`; the scope’s original group h is preserved. The two B-page findings share `f39-b23-b-page-section-duality`, explicitly bound to the same observed carrier. There are 22 closed referenced defect rows, owned at 5a-adjudicate. No extra risk-only obligation, judgment or decision hash was manufactured.

| Obligation | Verdict |
| --- | --- |
| `touched:23:lem-a-regular-weight-has-a-unique-dominant-dot-translate` | accepted_repair |
| `touched:23:lem-sections-of-an-associated-line-bundle-as-equivariant-functions` | accepted_repair |
| `touched:23:lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety` | accepted_repair |
| `touched:23:lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` | accepted_repair |
| `touched:23:thm-borel-weil` | amended_repair |
| `touched:23:thm-borel-weil-bott` | reviewed_no_defect |
| `touched:23:prop-borel-weil-bott-is-compatible-with-serre-duality` | accepted_repair |
| `touched:23:ex-the-sl2-singular-weight-has-no-cohomology` | accepted_repair |
| `touched:23:cor-borel-weil-bott-euler-character-is-the-weyl-character` | amended_repair |
| `touched:23:ex-an-sl3-weight-with-cohomology-in-degree-one` | reviewed_no_defect |
| `touched:23:ex-borel-weil-bott-on-p1-for-sl2` | accepted_repair |
| `touched:23:ex-the-top-degree-bwb-case-and-serre-duality` | reviewed_no_defect |
| `page:23:borel-weil-and-borel-weil-bott` | amended_repair |
| `reader:23:1` | confirmed_fatal |
| `refuter:23:1` | confirmed_fatal |

Focused local checks on final content:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-borel-weil.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-borel-weil.md`: one item passed.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-23.proof-contracts.json --strict`: 17/17 entries, zero errors and warnings. An initial failure on the new zero-boundary evidence’s missing step label was corrected by anchoring it to Statement/Proof 3.1; no mathematical content or new defect row was needed for that mechanical failure.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-23.pages.json`: 17 items, zero errors.
- `node tools/rendercheck.mjs items/thm-borel-weil.md library/lie-theory/borel-weil-and-borel-weil-bott.md library/lie-theory/borel-weil-and-borel-weil-bott-examples.md`: all three files parse through the real KaTeX and renderer YAML parser.
- Initial and closing `risk-report.mjs` without `--require-reviewed`, followed by the closing `--require-reviewed` run: all 17 HIGH/CRITICAL items have specific complete risk assessments; zero errors. “Complete” records the finished assessment, including the explicitly reported risk-only typo; it does not conceal that alert.
- Required final `node tools/proof-layout.mjs items/thm-borel-weil.md`, after the final item edit and formatter: one item, three proof steps, zero defects. No item was edited after this check.
- Exact routed-coverage and decision-to-ledger validation: all 15 obligations match the frozen scope; every referenced row has the correct subject, stage and closed disposition; both finding decisions reference exactly one shared row.
- `node tools/defect-ledger.mjs validate --ledger /tmp/f39-b23-owned-ledger.jsonl`: all 22 batch-23 rows pass. The temporary selection was copied from the current canonical ledger, not substituted for it.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`: refreshed and deduplicated after updating the nine owning-batch edge records. No removed record or proposed withdrawal was deleted.

These are local checks. The engine owns hashing, gate battery and transitions.

## Sources and coverage limits

Read the complete current mathematical bodies of all 17 items and both pages, all exported clauses of their 60 unique external declared suppliers, and the contract/manifest evidence needed for each local use. The relative-apolarity, relative-shift, fibre-degree and relative-canonical proofs were additionally inspected in full, with truncated chunks completed separately. This does not claim a recursive proof audit of all external suppliers.

Fetched and read source sections:

- Jacob Lurie, *A Proof of the Borel-Weil-Bott Theorem*, https://www.math.harvard.edu/~lurie/papers/bwb.pdf, complete pp. 1–3. Its inconsistent signs and action direction are translated by the explicit library quotient relation.
- Xiong Rui, *Borel-Weil*, https://cubicbear.github.io/doc/BorelWeil.pdf, Lecture 1 printed pp. 2–7, especially 1.5–1.9 (characters, bundle, BW, Serre), 1.14–1.17 (fibre degree, P1 table and fixed wall), and 1.22 (Euler character). The conclusion in 1.18 reverses the shift; the current proof relies on the read relative supplier and correct 1.16 statement instead.
- Ng Hoi Hei Janson, *Line Bundles over Flag Varieties*, https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf, relevant homogeneous-bundle and induced-action sections, Theorem 5.3 and its proof, printed pp. 7–11. Errors in its local-triviality and character calculations are documented in the sections review above, and not imported. The bibliography’s alternative title/name does not identify a separate proof.
- George Boxer and Vincent Pilloni, *Notes on Higher Coleman Theory*, https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf, complete relevant 1.1.1–1.1.6, printed pp. 2–6. Theorem 1.1 and Remark 1.2 occur on printed p. 2, despite secondary item locators saying p. 3; their B-backslash-G convention is separate from the library convention.
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*, https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf, Chapter 8 weight decomposition pp. 131–132 and the relevant highest-weight/Verma/classification statements and arguments pp. 135–138.
- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, second edition, https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf, Theorem 5.5 statement printed pp. 279–280: highest-weight line, root annihilation, weights below the highest and Weyl weight multiplicities. Part (e) is weight invariance, not a direct statement about the dual module; the dual-module conclusion used here is exported by the current dedicated repository proposition. No claim to have read all of Knapp Chapter V is made.

External supplier IDs read (exports only unless additionally identified above):

`cor-projective-cohomology-finite-dimensional-field`, `cor-rational-function-no-poles-codimension-one-regular`, `def-axiom-of-choice`, `def-borel-character-equivariant-line-bundle`, `def-classical-complex-matrix-lie-algebras`, `def-complex-semisimple-algebraic-group-borel-and-flag-variety`, `def-dot-action-facets-and-single-wall-translation-data`, `def-formal-character-of-a-finite-dimensional-weight-module`, `def-fundamental-weights-for-a-chosen-simple-root-system`, `def-highest-weight-vector-and-highest-weight-module`, `def-integral-dominant-and-strictly-dominant-weights`, `def-length-and-longest-element-of-a-finite-weyl-group`, `def-normal-point-and-normal-variety`, `def-open-and-closed-weyl-chambers`, `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`, `def-projective-line-two-affine-cover-and-twisting-sheaf`, `def-root-reflections-and-the-weyl-group-action`, `def-sheaf-cohomology-derived-global-sections`, `def-special-linear-lie-algebra-sl-two`, `def-weight-and-weight-space-of-a-lie-algebra-representation`, `def-weyl-alternation-operator`, `def-weyl-vector-rho`, `lem-finite-weyl-closed-chambers-and-stabilizers`, `lem-finite-weyl-positive-roots-and-simple-reflections`, `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`, `lem-flag-variety-canonical-bundle-weight-minus-two-rho`, `lem-highest-weight-modules-have-weights-below-the-top-weight`, `lem-minimal-parabolic-relative-canonical-line-bundle-root-weight`, `lem-relative-projective-line-cohomology-and-apolarity`, `lem-semisimple-borel-root-factorization`, `lem-semisimple-bruhat-double-cosets`, `lem-semisimple-flag-torsor-zariski-charts`, `lem-semisimple-minimal-parabolic-root-subgroup`, `lem-semisimple-opposite-borel-big-cell`, `lem-semisimple-projective-orbit-flag-quotients`, `lem-semisimple-rank-one-sl2-root-homomorphism`, `lem-semisimple-root-exponential-algebraic-subgroups`, `prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector`, `prop-direct-sum-dual-hom-and-tensor-representations`, `prop-formal-characters-are-additive-and-multiplicative`, `prop-highest-weight-of-the-dual-representation`, `prop-root-systems-of-the-classical-complex-lie-algebras`, `prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`, `prop-weyl-length-equals-positive-root-inversion-number`, `prop-weyl-vector-is-the-sum-of-fundamental-weights`, `thm-affine-quasi-coherent-equivalence`, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `thm-cohomology-projective-space-twisting-sheaves`, `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`, `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`, `thm-leray-spectral-sequence-for-sheaf-cohomology`, `thm-minimal-parabolic-flag-projection-is-p1-bundle`, `thm-regular-local-ring-is-normal`, `thm-regular-local-rings-are-domains-and-cohen-macaulay`, `thm-relative-p1-line-bundle-cohomology-shift`, `thm-semisimple-flag-variety-smooth-projective`, `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`, `thm-weyl-character-formula`, `thm-weyl-dimension-formula`, `thm-weyls-complete-reducibility-theorem`.

## Published findings, impacts and remaining alerts

No defective published item or outside-batch draft supplier was confirmed in the exact load-bearing clauses inspected. Published content and the canonical published-consumer/supplier ledger were left read-only, so no published-ledger lock was needed. No item Statement or Definition was changed locally. The one edited item has the same theorem and dependencies, with F6 qualified and its contract boundary corrected. Manifest summaries for the Euler corollary and sign counterexample were aligned with their current proven bodies; the latter is metadata normalization, closes no reader/refuter defect, and creates no extra obligation.

The owning batch-23 cross-frontier records retain the Weyl-formula/additivity/alternation/dimension uses and removed Weyl-invariance edge. The tensor-product page edge remains a plan ordering record, not a mathematical input to these proofs. No withdrawal is proposed. Step-5b computed obligations and impact-window closure remain with the lead; this report claims no Step-5b closure.

Two alerts remain for engine/owner routing:

1. **Risk-only item typo:** `lem-lowest-weight-space-is-the-nilradical-invariant-line`, Proof 3.1, currently prints `$v\mapsto(v\mapsto f(v))$`. The correct evaluation map is `$v\mapsto(f\mapsto f(v))$`, with `$f\in V^*$`. The following quantified dual-action calculation establishes exactly that evaluation map and the exported invariant-line result is sound. This is a nonfatal notation finding; the frozen scope owes no touched/reader/flagged obligation for this item. Request engine routing of a supplemental repair obligation or a Step-5b disposition. It is not an unmet mathematical prerequisite, an escalation silently cleared, or an item repair claimed completed.

2. **Shared ledger validation blocker:** `node tools/defect-ledger.mjs validate --run frontier-39-analysis-30` crashed at `tools/defect-ledger.mjs:259` because an existing batch-11 row stores `evidence` as a string rather than an array. The first such ID is `frontier-39-analysis-30-5a-b11-lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`; the sampled canonical ledger has 23 such string-evidence rows, all outside batch 23. This is a mechanical/schema blocker, not a mathematical defect row. Batch-23 rows validate independently. Route normalization to the batch-11/ledger owner; no outside row or tool was edited.

No substantial unmet prerequisite or uncertain local proof repair remains among the 15 routed obligations. The remaining alerts prevent a claim that every current carrier and shared diagnostic is clean.

Raw final item hash for the sole local item edit (evidence only, not a decision stamp): `2e112c0aba6da1e891c580c64d8367980d29f6ec69b74f81703495046a0a9bee`.

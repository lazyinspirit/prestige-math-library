# Hecke source report

Research date: 2026-10-07. Scope: source reading and mathematical design evidence only. No item or page edits. Read `CLAUDE.md` and `README.md` fully before research. The primary source below is a complete extensive lecture-note text, not an abstract or search excerpt.

## Acquisition and actual reading

Downloaded PDFs and extracted text live outside the tracked corpus in `/tmp/hopf-hecke-sources/`. Extraction used PyMuPDF (`fitz`); `pdftotext` is unavailable. The PDF page counts and locators below refer to the acquired versions, not to another publication's pagination.

| Source | Full-text URL and authority | Actual inspection |
| --- | --- | --- |
| Meinolf Geck, *Modular representations of Hecke algebras*, EPFL course notes (May 2005), arXiv:math/0511548v2, 2 March 2006 | [Author-submitted full text](https://arxiv.org/pdf/math/0511548); authoritative extensive lecture notes by a principal researcher in Hecke representation theory | **All 54 PDF pages read**, including all eight sections, tables and bibliography. 121,875 extracted characters; 24,159 whitespace-delimited words/symbols. Sequential complete reads: PDF pp. 1–10, 11–20, 21–30, 31–40, 41–54. SHA-256: `14d4c03b212ad0b13571caa0b70356a5c8383ba71fbcb1e5bcc57e01f9b16d03`. |
| Gerhard Hiss, *Iwahori-Hecke algebras and Kazhdan-Lusztig polynomials*, Marienheide summer school, 7–11 September 2015 | [RWTH-hosted full slides](https://www.math.rwth-aachen.de/~Graduiertenkolleg/schools/2015/material/HissMarienheide15.pdf) | **All 22 slides read**, 9,475 extracted characters. Useful independent convention/overview check; short slides are not counted as the primary extensive lecture notes. SHA-256: `36e1cc88c77405c1bc969739724058da35a839287289c7b69f3eb655df1a8e78`. |
| George Lusztig, *Lectures on Hecke algebras with unequal parameters*, MIT Fall 1999 lectures, arXiv:math/0108172v1 (24 August 2001) | [Author-submitted full text](https://arxiv.org/pdf/math/0108172) | Downloaded/extracted the entire 84-page PDF; **read PDF pp. 1–11**, covering §§1–3 and the beginning of §4. The uninspected remainder is not claimed as read. |
| Thomas J. Haines, Robert E. Kottwitz, Amritanshu Prasad, *Iwahori-Hecke Algebras*, arXiv:math/0309168v3 (16 April 2009) | [Author-submitted full text](https://arxiv.org/pdf/math/0309168) | Downloaded/extracted all 26 pages; **read PDF pp. 1–11**, including the complete Bernstein-presentation proof, center calculation and start of Satake. No full-reading claim for pp. 12–26. |
| Andrew Mathas, *Cyclotomic quiver Hecke algebras of type A*, arXiv:1310.2142v3 (17 June 2014), notes originating from IMS Singapore lectures | [Author-submitted full text](https://arxiv.org/pdf/1310.2142) | Downloaded/extracted all 54 pages; **read PDF pp. 1–7**, introduction and §§1.1–1.5 through the beginning of §1.6. No full-reading claim for the remainder. |
| Andrew Mathas, *Hecke algebras and Schur algebras of the symmetric group*, preliminary 1998 book/lecture notes | [Institutional full-text mirror](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf); [author/university bibliographic record](https://www.maths.usyd.edu.au/u/ResearchReports/Algebra/Mat/1998-13.html) confirms preliminary version of the AMS book | Downloaded/extracted 79 pages; **read front matter and opening chapter PDF pp. 1–7, the beginning of p. 8, and PDF pp. 9–12** (printed pp. 3–6, Hecke presentation/basis/specialization/trace). Embedded old fonts corrupt characters and fragment words; selected control-character conversion was used to inspect these passages. This is the preliminary text, not the 188-page published 1999 book, and the latter has not been read. |
| Notes taken by Bradley Hicks, Matthew Litman, Alexander Pokorny and Haiping Yang from Monica Vazirani's ICMS June 2019 lectures, *Hecke Algebras and Representation Theory* | [ICMS lecture-note institutional mirror](https://webhomes.maths.ed.ac.uk/~djordan/Vazirani-Hecke_Algebras_and_Representation_Theory.pdf) | Entire nine-page PDF acquired/extracted; only opening metadata/first paragraph inspected. Not counted as read or used as a proof source. |

The primary complete Geck notes are distinct from the Hopf and quantum-group texts assigned to the other two source readers. Local downloaded PDFs are research inputs; their full text is not copied into repository documentation.

## Exact source coordinates and uses

### Geck: complete primary lecture notes

- §2, printed/PDF pp. 6–7: parameter function `π`, compatibility on conjugate simple generators, length-additive multiplication, standard basis rule and symmetrizing trace. Requires parameter values to be units. The algebra presentation and basis existence are recalled, not fully proved here.
- §4 and §4.1, p. 15: generic algebra over `Z[v,v^{-1}]`, unnormalized quadratic parameters `v^{2L(s)}`, specialization by tensor product, and the square-root hypothesis attached to this coefficient convention.
- Theorems 4.2–4.4, p. 16: generic split semisimplicity/Tits correspondence (finite Weyl group assumptions), Schur elements and their cyclotomic factors. Several proofs are cited to Geck–Pfeiffer rather than supplied completely.
- §4.10, pp. 20–21: integral lattices and decomposition numbers; independence of choices is a genuine theorem, not automatic from the phrase “reduce a representation.”
- Example 4.12, pp. 21–22: type-A Specht modules, invariant bilinear form, radical quotients, quantum characteristic `e = min{i >= 2: 1+q+...+q^{i-1}=0}` (or infinity), and simple modules indexed by `e`-regular partitions under this source's conjugate Specht convention.
- Definition 4.13, pp. 22–23: canonical basic set requires a unique minimum `a`-value and multiplicity one. Example 4.15, p. 23, explicitly shows failure in bad characteristic; do not promise such a set for arbitrary parameters/characteristics.
- §5, Theorem 5.1, p. 24: rescale `T_w` to `v^{-L(w)}T_w`, construct semilinear bar from presentation, and define the Kazhdan–Lusztig basis by bar invariance and triangularity.
- §5.2, pp. 25–26; Theorems 5.3–5.4, p. 26: asymptotic ring `J` and its module structure depend on listed properties P2–P8 and P15′. The source explicitly makes the unequal-parameter discussion conditional. Only finite type/equal-parameter cases documented in the source may be treated as unconditional using those proofs.
- Proposition 5.5, p. 27: the filtration argument proving the kernel of `H -> J` nilpotent is complete and short. A bounded finite filtration is essential.
- §§6.1–6.7, pp. 31–36: canonical basic-set construction via `J`, layer modules and projective covers. Some splitting/reciprocity arguments are sketches with external inputs; they are not first-principles proofs merely because the lecture notes are extensive.
- §7, pp. 38–45: Fock space, residue-refined induction/restriction, Kac–Moody/quantum operators and crystals. The notes expressly omit a detailed development of quantum groups, so these are downstream interfaces, not foundations of the new category.
- §8.1, pp. 46–47: traditional Ariki–Koike generator/polynomial presentation; it gives a definition, not a freeness proof.
- Theorem 8.2, p. 48: Ariki's decomposition-column/canonical-basis correspondence **in characteristic zero**. Theorem 8.3 keeps the counting/highest-weight-module statement in positive characteristic, while warning that decomposition columns no longer equal canonical-basis vectors there.

### Lusztig: rigorous first-principles Coxeter and basis proof

- §1.1, p. 1: Coxeter presentation and definition of word length; Lemma 1.2 proves multiplication by a simple generator changes length by exactly one using the sign homomorphism and elementary inequalities.
- Proposition 1.3, pp. 1–2: geometric reflection representation establishes that the prescribed rank-two orders are real, so generators in the presentation do not collapse.
- Propositions 1.5–1.7, pp. 2–3: signed action on reflections, inversion set of a reduced word, and exchange. The signed permutation action is explicitly checked against rank-two relations.
- Theorem 1.9, pp. 4–5: full Matsumoto argument connecting reduced expressions through braid moves; Proposition 1.10, p. 5, supplies the exceptional left/right length-square case.
- Proposition 2.4, p. 7: subword characterization of Bruhat order with proof, including expression independence.
- §§3.1–3.2, p. 8: weight-function compatibility across odd braid relations; normalized Hecke presentation `(T_s-v_s)(T_s+v_s^{-1})=0`; definition of `T_w` is justified by Matsumoto, rather than declared expression-independent.
- Proposition 3.3, pp. 8–9: **complete basis proof**. Define left and right length operators `P_s`, `Q_t` on the free module with basis `e_w`; check they commute in six possible length configurations, using Proposition 1.10 and equal parameters for conjugate generators in the two exceptional cases. Evaluation of the operator algebra at `e_1` is bijective because the commuting right operators make `e_1` cyclic on both sides. Transport the associative operator-algebra structure to the free module; verify the generators satisfy the quadratic/braid relations and map `T_w` to `e_w`. This proves independence as well as spanning without assuming freeness.
- §§3.4–3.5 and Lemma 4.2, p. 10: anti-involution and bar descend because the defining ideal is preserved, and generator invertibility is proved before inverse symbols are used.

This is the preferred general-Coxeter proof route. If the scaffold uses the unnormalized relation `(T_s-q_s)(T_s+1)=0`, it must spell out the rescaling `T_s^{unnormalized}=v_s T_s^{normalized}` and coefficient extension/rescaling hypotheses.

### Affine presentation and PBW

Haines–Kottwitz–Prasad §§1.1–1.7, pp. 1–4, work over complex-valued convolution functions for a split `p`-adic group, with Haar measure normalized by `vol(I)=1`:

1. Bruhat/Iwasawa decompositions identify the standard basis and the universal unramified principal-series module `M`.
2. Lemma 1.6.1, p. 3: `H -> M`, `h -> v_1 h`, is bijective by a triangular matrix with nonzero diagonal.
3. Lemma 1.7.1, p. 4: multiplication `C[X_*(A)] tensor H_0 -> H` is bijective, since its composite with `H -> M` sends the proposed basis to distinct nonzero scalar multiples of `v_{π^μ w}`. This is a genuine independence argument.
4. Remark 1.7.2, p. 4: `Θ_λ=q^{<ρ,-λ_1+λ_2>}T_{π^{λ_1}}T_{π^{λ_2}}^{-1}`, with dominant decomposition, is established by the module model.
5. §§1.12–1.15, pp. 7–9: rank-one intertwiner calculation yields Bernstein's cross relation. The displayed quotient belongs to the lattice group algebra because the numerator is a finite geometric multiple of its denominator; it is not an invitation to invert that denominator in the definition.
6. Lemma 2.3.1, p. 10: center is the Weyl-invariant lattice algebra, after localized crossed-product comparison; the localization/torsion-freeness step must be justified.

**Limit:** this proof route needs substantial `p`-adic group geometry and does not by itself prove an abstract affine presentation or PBW theorem over every coefficient ring. A first-principles abstract affine page must instead construct a polynomial/Demazure–Lusztig representation or complete straightening/regular representation, prove braid/quadratic identities, prove independence and handle denominator cancellation. The geometric model can be a later realization theorem once Iwasawa/Iwahori decomposition suppliers exist.

### Cellular and cyclotomic interfaces

Mathas 1310.2142v3:

- Definition 1.1.1, p. 3: a **modified** cyclotomic presentation using additive `L_r`, normalized generators, and `L_{r+1}=T_r L_r T_r+T_r`.
- Formula (1.1.2), p. 3: PBW monomials `L_1^{a_1}...L_n^{a_n}T_w`, `0 <= a_i < ell`, rank `ell^n n!`. Proof is referred to Ariki–Koike, Theorem 3.3, not supplied in this survey.
- pp. 3–4 explicitly distinguish the modified unified presentation from traditional multiplicative Ariki–Koike at `v^2=1`. Conversion `L'_r=1+(v-v^{-1})L_r` is an isomorphism only when `v-v^{-1}` is invertible. Do not mix these two degenerate specializations.
- Definition 1.3.1, p. 5: cellular basis axiom requires right multiplication coefficients independent of the first tableau, modulo the upper cell ideal, and an anti-involution swapping indices. The matrix-unit interpretation gives the reason for those requirements.
- Equations (1.3.2)–(1.3.3), p. 6: cell form is obtained from multiplication in the associated cell layer; independence of outer indices, symmetry, associativity and radical stability must be proved before forming the quotient.
- Theorem 1.3.4, p. 6: nonzero radical quotients are absolutely simple and exhaust simples, over a field. These are theorems of cellular algebras, not clauses of a definition.
- Theorem 1.5.1, p. 7: Murphy cellular basis and Corollary 1.5.2 classifying nonzero Specht radical quotients. Complete cellularity proof is cited externally and must be budgeted locally if promised.

For an initial cyclotomic page, using **traditional multiplicative Ariki–Koike** with `(T_i-q)(T_i+1)=0`, commuting invertible `X_j` and `prod_a(X_1-Q_a)=0`, choose `q,Q_a` as units over a commutative ring (nonzero over a field). This preserves the affine generator's invertibility in the quotient. Define `X_{i+1}=q^{-1}T_i X_i T_i`; prove pairwise commutation and cross relations. Reduction of `X_1` alone does not show the PBW monomials are independent, nor does it justify identical polynomial relations on every `X_j`. A separate cyclotomic basis theorem is necessary. The source supplying the complete proof still needs to be acquired/read before item authoring; the current scaffold may identify this precise proof obligation.

## First-principles definition obligations

1. **Presented algebra:** define the free associative unital algebra on the generator set and quotient by the two-sided relation ideal. Show existence, universal property and nonzero model; do not treat arbitrary multiplication tables as automatically associative.
2. **Coxeter length/reduced words:** show distinct generators and intended rank-two orders survive the group quotient; show length changes by ±1; prove exchange and Matsumoto before introducing expression-independent `T_w`.
3. **Parameters:** on an odd finite braid, opposite reduced words have different counts of the two simple generators. Equal parameter values there are essential. Explain the equivalence with constancy on conjugacy classes of simple reflections rather than postulating independent values everywhere.
4. **Standard basis:** prove spanning with the length rule and independence with a concrete regular representation. Existence of a specializing group algebra at `q=1` alone does not prove flatness.
5. **Specialization:** derive the base-change isomorphism from the universal presentation and basis; distinguish flat deformation of algebras from preservation of semisimplicity or equivalence of module categories.
6. **Trace:** for units `q_s`, establish `tau(T_xT_y)=delta_{y,x^{-1}}q_x`, exhibit the dual basis and derive nondegeneracy. For nonunits or the zero-Hecke case, do not call the same form symmetrizing.
7. **Parabolic module:** prove the parabolic subgroup's Coxeter presentation and minimal-coset-representative length additivity; derive the free coset basis of induction. A Hecke subalgebra embedding needs independence, not only a generator map.
8. **Bar and KL basis:** inverses require unit parameters; bar preserves the relation ideal; triangular recursion supplies existence/uniqueness. Positivity of KL coefficients and cell/categorification results need additional deep theorems and must not be implied by triangularity.
9. **Quantum characteristic:** define it by the vanishing of the geometric sum. In characteristic `p`, `q=1` gives `e=p`, not infinity; the ordinary multiplicative order of `q` misses this case.
10. **Cell modules:** verify multiplication coefficient independence and associativity, independence and invariance of the bilinear form, stability of its radical and nonzero/simplicity criteria. Specht label conventions can give `e`-regular or `e`-restricted partitions; state the chosen convention and conjugation map.
11. **Seminormal forms:** denominators in residue/content differences are allowed only after proving they are nonzero under the chosen semisimplicity hypotheses. An integral Murphy basis supplies specializations for which those denominators vanish.
12. **Hecke symmetry and tensor powers:** a Yang–Baxter operator with the Hecke quadratic polynomial yields a well-defined Hecke action after checking adjacent and distant generator relations. It does not endow every Hecke algebra with a Hopf coproduct. In general, `T_i -> T_i tensor T_i` fails the quadratic relation for generic `q`; tensor-product actions come from the Hopf side plus compatible `R`-matrix, not from an assumed Hecke bialgebra.

## Corpus prerequisites and category boundaries

Read the complete page text for these two relevant existing suppliers:

- `library/representation-theory/principal-series-representations-of-gl-n-over-a-finite-field.md`: **draft**, owns `def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, finite convolution realization, specializations and type-A Tits deformation. Its item identities and home should remain intact; the new category may cross-link this concrete motivation.
- `library/braid-groups/type-a-soergel-bimodules-and-hecke-categorification.md`: **published**, owns type-A Matsumoto connectivity, Soergel-normalized type-A basis and categorification. It uses `q=v^{-2}`, `tilde T_w=v^{ell(w)}T_w`, and `H_i=v(T_i+1)`. That `H_i` is not the standard normalized generator `tilde T_i`. The new category must reconcile conventions explicitly when cross-linking. Braid Groups remains an independent category as instructed by the user.

Other supplier candidates seen by file discovery, but not independently audited in this report: abstract-algebra tensor products and symmetric groups, special-topics Specht/modular/Jucys–Murphy pages, scheme-theory affine-group-scheme/Hopf draft, category-theory braided/tensor categories, and Braid Groups Yang–Baxter operators. Their existence does not establish their exact item-level prerequisite sufficiency.

Precise missing local foundations for a general first-principles track: general Coxeter presentation/exchange/Matsumoto beyond type A; parabolic coset theorem; general compatible-parameter Hecke standard basis; general trace/dual-basis proof; cellular-layer and cell-module theorems; abstract affine Bernstein PBW with a proved realization; traditional cyclotomic PBW and full Murphy cellularity. These should appear as named local lemmas or scoped future proof tasks before their consumers, rather than hidden textbook prerequisites.

## Source limits and audit cautions

- Complete extraction is not the same as reading: only Geck and Hiss are claimed fully read above. Selected source chapters support explicit proof routes; uninspected chapters are not evidence.
- The preliminary Mathas book's Theorem 1.11 (printed p. 4) attempts to normalize a polynomial linear relation by dividing out its greatest common divisor before freeness/torsion-freeness is proved. Taken literally, that step is unjustified: from `d r=0` in an arbitrary module one cannot conclude `r=0`. Use Lusztig's complete regular-module proof instead. This report does not treat the preliminary proof as sufficient basis evidence.
- Geck's extracted text contains apparent typographical/formula issues (e.g. §4.6's extreme-case discussion, orthogonality notation at p. 16, and the `ell=2` affine Cartan/Serre formulas on pp. 39–41). Those formulas should not be copied into a new item without independent checks. This does not invalidate the lecture notes' structural overview, but prevents treating authoritativeness as a proof substitute.
- Historical “conjectural” claims in the 2006 lecture notes describe its publication date. The report does not assert they remain open in 2026. Any current-status claim requires a current primary source check.
- No source here supports a blanket claim that ordinary Hecke algebras are Hopf algebras. The new combined category should develop the two theories separately and prove their representation-theoretic bridges.

## Supplemental proof-source closure for HH16 and HH17

This supplement supersedes the earlier statement that cyclotomic PBW and Murphy proof sources remained to be obtained. It gives complete proof routes at the scaffold-contract level, not a claim that future library items have already been authored or independently certified.

### Additional acquisition and actual inspection

1. **Richard Dipper, Gordon James and Andrew Mathas, *Cyclotomic q-Schur algebras***, primary preprint NI97003, [Isaac Newton Institute full PDF](https://api.newton.ac.uk/website/v0/events/preprints/NI97003); published *Mathematische Zeitschrift* 229 (1998), 385–416. Acquired all **30 scanned PDF pages**, `/tmp/hopf-hecke-sources/djm-newton.pdf`. PyMuPDF extraction returned no substantive text because it is a scan. Rendered every page and ran local Tesseract OCR to `/tmp/hopf-hecke-sources/djm-ocr.txt` (58,300 characters). **Read PDF pp. 1–13**, covering the complete initial constructions and proof of the cyclotomic cellular basis in §§2–3, and bibliography pp. 29–30. Sections 4–6 are not claimed read. The page images `/tmp/hopf-hecke-sources/djm-page-N.png` retain the mathematical notation when OCR is ambiguous.
2. **Georges Neaime, *Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n)***, [author-submitted arXiv:1810.12053 full PDF](https://arxiv.org/pdf/1810.12053); published *Journal of Pure and Applied Algebra* 225 (2021), article 106500, DOI [10.1016/j.jpaa.2020.106500](https://doi.org/10.1016/j.jpaa.2020.106500). Acquired/extracted all **39 pages**, `/tmp/hopf-hecke-sources/neaime.pdf` and `neaime.txt` (87,833 characters). **Read the full §6 proof, PDF pp. 32–38; all depended-on braid/closure calculations Lemmas 5.7–5.16, pp. 24–31; the induction setup p. 22; and presentation/background pp. 2–4.** No full-reading claim for the entire article. Only the explicit spanning argument is used below, not the source's external implication from spanning to BMR freeness.
3. **Mathas preliminary book already acquired:** additionally **read PDF pp. 24–32**, printed pp. 18–26, §§3.2–3.18 and immediate consequences. These give a self-contained type-A Garnir/Murphy proof route. Earlier generic-Hecke basis proof concerns remain bypassed by the Lusztig regular-module basis proof; no later argument requires accepting that problematic preliminary proof.

The original Ariki–Koike 1994 publisher endpoint returned HTTP 403; its Elsevier text-mining endpoint required an API key. It is not claimed acquired or read. A primary alternative proof was obtained instead. No source was inferred from a search snippet or reported as read merely because its bibliography was visible.

### HH16: complete integral spanning route, then generic independence

Fix the actual scaffold convention

`R = Z[Q,Q^{-1},u_1,u_1^{-1},...,u_r,u_r^{-1}]`,

`(T_i-Q)(T_i+1)=0`, `X_{i+1}=Q^{-1}T_iX_iT_i`, and `prod_a(X_1-u_a)=0`.

For `r=1` the cyclotomic relation eliminates `X_1` and the existing finite type-A basis handles the algebra. For `r>=2`, the following source-grounded construction closes the missing integral spanning step.

**A. Normalize after a faithfully flat, explicitly free extension.** Set

`R' = R[v,w]/(v^2-Q, w^r-(-1)^{r+1}prod_a u_a)`.

The monic relations give an `R`-basis `v^i w^j`, `0<=i<2`, `0<=j<r`. Both `v` and `w` are units because their powers are units. Thus `R'` is free of positive rank and faithfully flat. Put `s_j=v^{-1}T_{j-1}` for `2<=j<=n`, and `z=w^{-1}X_1`. Then

`s_j^2=(v-v^{-1})s_j+1`,

and the cyclotomic polynomial of `z` is monic with constant term `-1`, so it has the presentation `z^r=b_1 z^{r-1}+...+b_{r-1}z+1`. This is exactly the coefficient form in Neaime §6, p. 32, after specializing its polynomial parameter ring. The source's displayed commutation index `z s_j=s_j z` mistakenly includes `j=2`; the actual type-B braid presentation requires **`j>=3`**. The rank-four relation with `s_2` is retained, as all the proof calculations confirm.

**B. Use the explicitly finite normal-word spanning construction.** Neaime defines

- `Lambda_1={z^k:0<=k<r}`;
- for `i>=2`, `Lambda_i` consists of `1`, descending words `s_i...s_j` with `2<=j<=i`, the words `s_i...s_2 z^k`, and the words `s_i...s_2 z^k s_2...s_j`, with `1<=k<r`, `2<=j<=i`.

There are `r` first factors and `ir` possible factors at stage `i`. The proof shows that the span of `Lambda_1...Lambda_n` contains 1 and is stable under every generator. It is therefore the whole algebra. This is a spanning theorem, proved without using dimension or freeness.

The entire generator-closure proof is located in **Lemmas 6.2–6.4 and Proposition 6.5, pp. 32–34** (rank-two power/sandwich reductions), **Lemmas 6.6–6.15, pp. 35–38** (the nine possible pairs of last-stage factor types), and the **induction mechanism stated on p. 22**. Generator `s_n` commutes past factors through `Lambda_{n-2}`; only `s_n(a_{n-1}a_n)` needs reduction. The nine pairs are descending/descending (6.7), descending/loop (6.8), descending/sandwich (6.9), loop/descending (6.10), loop/loop (6.11), loop/sandwich (6.12), sandwich/descending (6.13), sandwich/loop (6.14), sandwich/sandwich (6.15). Cases with factor 1 are immediate quadratic/braid reductions. The required square-propagation formula is Lemma 6.6; the repeated adjacent braid/commutation calculations referenced there and in 6.7, 6.9, 6.10, 6.13 and 6.15 are supplied in **Lemmas 5.7–5.16, pp. 24–31**, which were read as part of this proof chain.

Examples of the actual rank-two identities controlling the process, with `a=v-v^{-1}`, are

`(s_2 z s_2)^2 = a^2 z s_2 z s_2 + a z s_2 z + s_2 z^2 s_2`,

`s_2 z^2 s_2 = (s_2 z s_2)^2 - a^2 z s_2 z s_2 - a z s_2 z`.

Higher powers are reduced by induction using these same quadratic and rank-four braid moves; excessive powers of `z` are reduced by its monic cyclotomic polynomial. Source Lemmas 6.2–6.4 state the finite sets to which every intermediate term belongs, rather than appealing to an unspecified rewriting algorithm. Termination is stage `n`, then loop exponent `k`, and the bounded generator-position sweeps in the nine closure cases. No inverses of parameter differences or integer factorials occur.

**C. Convert normal-word spanning to the desired PBW spanning without any triangular-basis assumption.** Every word in `Lambda_n` has nonnegative total `X`-degree `k<r` (or 0), because it contains only one `z^k` and finite `T` generators. The already-proved affine Bernstein/PBW straightening preserves nonnegative exponents and total degree. In particular, each such word becomes a sum of terms

`X_1^{a_1}...X_n^{a_n} T_y`, with `a_i>=0`, `sum_i a_i=k<r`.

Split `y=h d` by the length-additive minimal parabolic coset factorization `S_n=S_{n-1} D`, so `T_y=T_h T_d`. Since `X_n` commutes with the entire subalgebra generated by earlier `X_j,T_i`, every term belongs to

`sum_(0<=b<r,d in D) H_{n-1} X_n^b T_d`.

Consequently `H_{n-1} Lambda_n` belongs to that same tower span. By induction the previous-stage coefficients have bounded PBW exponents; concatenating the length-additive parabolic bases gives exactly `X_1^{a_1}...X_n^{a_n}T_y`, `0<=a_i<r`. This proves the requested bounded PBW spanning over `R'`. It never asserts that every `X_j` satisfies the initial cyclotomic polynomial and never assumes a unit-diagonal transition matrix.

Let `M` be the `R`-span of these proposed PBW elements. Flatness identifies `R' tensor (H/M)` with the quotient of the extended algebra by their span. The extended spanning result makes it zero; faithful flatness gives `H/M=0`. Thus spanning descends to `R`.

**D. Independence remains the separately explicit generic argument in HH16.** The scaffold's generic seminormal modules must first be verified directly against all relations. Spectral interpolation plus adjacent swaps yields full matrix units; colored RSK gives `sum_lambda |Std(lambda)|^2=r^n n!`. With integral spanning now proved, that generic dimension proves independence: a relation among the proposed PBW elements over the integral domain `R` maps to a relation over its fraction field and has zero coefficients there, hence already over `R`. This is not division of an unknown module relation by a GCD. Specialization then preserves the basis by the universal presentation/base-change identity. The seminormal formulas and their braid verification remain an authored proof obligation in HH16, not an imported source theorem.

### HH17: cyclotomic cellularity proof and its type-A prerequisite

The primary DJM proof is **§3, pp. 3–12**, and works over an arbitrary commutative ring with `q` invertible and arbitrary cyclotomic parameters. Hence it applies to the universal ring above and its intended specializations. It uses the identical multiplicative `L_i=X_i` convention and unnormalized quadratic relation.

The construction and complete cyclotomic route are:

1. **Definitions 3.1, 3.5, 3.14**, pp. 3–7: for cumulative component sizes `a_c`, set `u_a=prod_c prod_(m<=a_c)(L_m-u_c)`, `x_lambda=sum_(y in row stabilizer)T_y`, `m_lambda=u_a x_lambda`, and `m_st=T_{d(s)}^*m_lambda T_{d(t)}`. Commutation of `u_a` with the row algebra is deduced from the elementary symmetric-pair commutations in §2.1, not assumed. The generator-fixing anti-involution preserves all defining relations and exchanges `m_st,m_ts`.
2. **Lemma 3.4**, p. 4, is the essential cyclotomic step. For `b=a+e_k`, use

   `u_a T_{a_k}...T_1 T_0 T_1...T_{a_k} = q^{a_k} u_a L_{a_k+1} = q^{a_k}u_k u_a + q^{a_k}u_b`.

   Right multiplication by the explicit inverses `T_j^{-1}=q^{-1}T_j+(q^{-1}-1)` yields `u_a T_{a_k}...T_1 T_0=u_a h_1+u_b h_2`, `h_1,h_2` in the finite type-A subalgebra. This is a proved identity, not the false statement that the whole bounded-polynomial span is a subalgebra.
3. **Lemma 3.15 and Proposition 3.18**, pp. 7–9: finite `T_i` multiplication reduces through componentwise type-A row/Garnir straightening. The source invokes Murphy 1995 Theorem 4.18 for the stronger simultaneous dominance bounds; the needed type-A proof chain is provided below. Distinguished parabolic cosets preserve relative order of entries in each component and length additivity (Lemma 3.17).
4. **Proposition 3.20**, pp. 9–10: decompose `d(t)=y c`, determine the component `k` containing entry 1, and apply Lemma 3.4. The second term changes the component shape by moving one box from the first row of component `k` to the end of component `k-1`; this strictly raises multipartition dominance. If `k=1`, all cumulative sizes are nonzero after increment and `u_b=0` by the original polynomial on `L_1`. Otherwise let `nu` be that moved-box multicomposition. The finite parabolic coset identity

   `x_lambda=x_nu sum_i T_{c_i}`

   on the old first-row entries yields

   `T_{d(s)}^*x_lambda u_b = sum_i m_{u_i,t^nu}`,

   where `u_i=t^nu c_i d(s)` are row-standard and their component assignments move the selected entry into the earlier component. Componentwise type-A straightening handles these terms integrally. The detailed coset decomposition and proof appear on p. 10.
5. **Propositions 3.22–3.25**, pp. 11–12: spans of strictly dominant shapes are two-sided ideals, by the generator calculations and anti-involution. The subspace spanned by `m_{t^lambda,t}` plus the upper ideal is a right ideal. Reduce its right multiplication first and then left multiply by `T_{d(s)}^*`; this proves the cell coefficients are independent of the first tableau. Do not merely assert that upper terms disappear.
6. **Theorem 3.26**, p. 12: the shape `(empty,...,empty,1^n)` has `m_lambda=1`, so these generator-stable spans exhaust the algebra. Colored RSK gives precisely `r^n n!` standard tableau pairs. HH16 supplies the free rank `r^n n!`. A spanning family of that size in a free module of the same finite rank is a basis over the commutative ring: the corresponding square matrix is surjective, splits, and has determinant a unit. The anti-involution and first-index-independent multiplication prove cellularity.

**Local type-A proof chain to replace the external Murphy invocation.** Mathas preliminary book **§§3.2–3.18, printed pp. 18–25, PDF pp. 24–31**, supplies:

- Lemma 3.2 and Proposition 3.3: row sum eigenvalue and distinguished-coset length additivity;
- Corollary 3.4: explicit three-case row-standard right action;
- Proposition 3.7/Corollary 3.8: tableau dominance versus reverse Bruhat and support of multiplication;
- Lemma 3.9: reorder composition rows by conjugating their row subgroups with distinguished cosets;
- **Lemma 3.12, printed p. 22:** explicit Garnir coset identity. For belt `(i,j)`, set `nu=(lambda_1,...,lambda_(i-1),j-1,lambda_i+1,lambda_(i+1)-j,lambda_(i+2),...)`. The identity is

  `sum_(w in S_nu cap D_lambda) x_lambda T_w = sum_(v in S_lambda cap D_nu) T_v^* x_nu`.

  Isolate the unique nonstandard Garnir tableau term; all other same-shape terms are strictly above it in tableau dominance. Reorder `nu` to a partition strictly higher **lexicographically**. This is a finite coset equality with integral coefficients, not seminormal division.
- Lemma 3.13: every nonstandard row-standard tableau factors through a Garnir tableau with length additivity;
- Lemma 3.14 and Corollary 3.15: apply the belt relation, propagate support by Corollary 3.8, and induct on shape lex order/tableau dominance. Then apply the anti-involution to straighten the left index. Finite posets ensure termination. Rank `n!` and ordinary RSK give the initial lex cellular basis;
- **Proposition 3.16 and Corollary 3.17, printed pp. 23–24:** upgrade lex upper support to shape **dominance**. For the universal parameter ring, an element in `(1+T_i)H` has no basis term with `i,i+1` in one column, using the already-proved triangular generator action and `T_i h=q h`. The factor `q+1` is nonzero in the universal integral domain; the proof is then transferred by specialization, without canceling it in a ring where it might vanish. Applied to all row-stabilizer generators, this rules out shapes below the original partition and proves the dominance spans are ideals;
- **Theorem 3.18, printed p. 25:** fixed-initial-row right ideal gives first-index-independent multiplication modulo strict dominance exactly as needed in cellularity.

**Important precision:** the Garnir belt relation alone produces lex higher shapes, not automatically dominating shapes. The anti-column/dominance-ideal upgrade is required. Moreover, the Mathas presentation explicitly states same-shape tableau support and shape-dominance ideals, but does not explicitly prove all the stronger cross-shape simultaneous tableau bounds in DJM Proposition 3.18. A local HH17 contract can use the sufficient shape-dominance and fixed-initial-row cell-module consequences above, with the component-order proof in DJM 3.20, rather than silently importing stronger unused bounds. If the stronger full statement is retained, its tableau-order refinement must also be proved locally. The final cyclotomic cellular basis and integral specialization claims need no weakening.

The source chain is acyclic: affine PBW and cosets precede normalized normal-word spanning; integral spanning precedes generic independence; cyclotomic free rank precedes DJM cellular basis; finite type-A basis and Garnir proof precede the componentwise DJM steps. The original closed 1994 basis theorem is never assumed to prove itself, and no BMR freeness theorem is hidden in the alternate spanning proof.

Source coefficient correction confirmed by the independent auditor: Neaime Lemma 6.4 Case 3 drops coefficients in one intermediate sentence. The correct reduction of its first term is `a z^c s_2 z^{c′} s_2 z s_2 = a^2 z^{c+c′} s_2 z s_2 + a z^{c+1} s_2 z^{c′}`. Both terms retain the stated finite-span membership; use the corrected identity rather than the printed shorthand.

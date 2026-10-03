# A905/B906 local prerequisite packet

Authorized write scope: A905/B906 items and this record only. No plan, manifest, task, ledger, page, or autopilot-state edits.

## Contract and conventions

AG-MOD-1 retains representability of the full functor, every fixed-polynomial projective stratum, the universal family, and arbitrary base-change compatibility. Final full construction: arbitrary locally Noetherian base S, possibly non-quasi-compact; projective finite-presentation X/S; chosen relatively ample L; all S-schemes as tests; embedded closed finitely presented flat families. Non-Noetherian base changes are included through the representing universal property and the existing published flat approximation/perfect-complex suppliers. No separate unavailable pair is used.

Projectivity conventions must be integrated explicitly: existing `def-projective-morphism-pre-proj` uses H-projectivity (a global embedding in P^n_S). Nitsure uses coherent-projective-bundle projectivity. The theorem proves coherent-projective-bundle projectivity for arbitrary L, and H-projectivity when the specified embedding induces L. The locally Noetherian extension is now supplied globally: a P-only regularity bound, coherent-source Grassmannians, global auxiliary projective polarization, and component Plücker bundles produce the global projective line without any finite global affine cover.

## Sources actually retrieved and read

- Nitsure, Construction of Hilbert and Quot Schemes, https://arxiv.org/pdf/math/0504590: downloaded 2026-10-02, read full Sections 1–5, including Theorem 2.3 induction, Theorem 4.3 flattening, and Sections 5.1–5.4 construction and properness. Temporary PDF/text: /tmp/hilbert905/nitsure.pdf and nitsure.txt; source hash can be regenerated.
- Grothendieck, Bourbaki 221, https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf: downloaded 2026-10-02; read full Sections 2 and 3, especially Lemmas 3.3–3.7 (graded rank-locus construction, immersion, valuative properness). Its Section 2 expressly describes the boundedness proof as an esquisse. This is an independently read original construction, but is not certified as a complete second treatment of the entire prerequisite chain.
- EGA III scan https://www.numdam.org/item/PMIHES_1963__17__5_0.pdf and Stacks Quot chapter https://stacks.math.columbia.edu/download/quot.pdf were retrieved for comparison. They are not claimed as fully read second proof treatments.
- Attempts to retrieve Mumford and Huybrechts–Lehn full books from guessed URLs failed (404). No reading of those texts is claimed.

## Mathematical repairs relative to the source

Nitsure 4.3's converse jumps from eventual base change depending on a map to local freeness of every degree beyond one fixed N. The local uniform-sections supplier fills this with a fixed two-term twist presentation, two base-flat syzygies after flat pullback, uniform regularity on their fibre polynomials, and Noetherian approximation for arbitrary target algebras. This supplies one N independent of the test map.

The regularity induction uses the safe bound a+B+1 so that H^1(K(R-1)) vanishes. Higher groups are tracked in the sharper range t>=a-i; a single uniform bound t>=a-2 does not alone establish all regularity positions.

Properness uses arbitrary valuation rings, matching the published valuative criterion. The proof constructs the saturated generic ideal's contraction, proves degree quotients finite free over the valuation ring, uses uniform regularity to make the contracted ideal sheaf finitely presented, and proves uniqueness by torsion-freeness. It does not cite a DVR-only criterion.

## A-page order

- `def-castelnuovo-mumford-regularity`
- `lem-hilbert-regularity-propagation`
- `lem-hilbert-uniform-regularity-fixed-polynomial`
- `lem-hilbert-relative-regularity-and-base-change`
- `lem-hilbert-uniform-sections-after-flat-pullback`
- `lem-hilbert-rank-flattening-finite-module`
- `lem-hilbert-universal-scheme-theoretic-flattening`
- `lem-hilbert-family-vanishing-locus`
- `def-projective-morphism-coherent-bundle-convention`
- `lem-hilbert-euler-polynomial-for-ample-polarization`
- `def-hilbert-functor-of-flat-projective-subschemes`
- `lem-hilbert-families-fpqc-descent`
- `lem-hilbert-relative-grassmannian-quotients`
- `lem-hilbert-projective-space-construction`
- `lem-hilbert-valuative-flat-closure`
- `lem-hilbert-proper-relative-ample-projectivity`
- `lem-hilbert-regularity-independent-of-ambient-dimension`
- `lem-hilbert-coherent-projective-bundle-construction`
- `lem-hilbert-noetherian-base-fixed-polarization`
- `thm-hilbert-scheme-represents-projective-flat-families`
- `lem-universal-family-and-hilbert-polynomial-strata`
- `lem-hilbert-polynomial-finite-scheme-length`

## B-page order

- `ex-hilbert-polynomial-of-finite-points-on-p1`
- `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`
- `ex-hilbert-base-change-of-a-fat-point-family`
- `ex-full-hilbert-functor-of-p1-has-infinitely-many-strata`

## Source coverage and scope questions

Owner clarification: a second-source count shortage alone is not a blocker when complete local proofs close every claim from one verified authoritative treatment. Accordingly the independent full-treatment shortage is recorded as source coverage, not mathematical incompleteness. Nitsure's authoritative construction is fully read; Grothendieck's independent construction is read, with the express boundedness-sketch limitation noted above. No citation-only regularity, flattening, descent, vanishing, or properness supplier is used in the authored packet.

The base-scope question is resolved by the added complete extension described below. The final theorem and functor definition now use arbitrary locally Noetherian S, including non-quasi-compact S. All S-scheme tests and every arbitrary base change remain present. A Noetherian-base construction is retained only as an explicit local supplier. The global theorem does not assume a global finite-dimensional projective-space embedding and does not use a finite global affine cover.

## AG-MOD-1 claim crosswalk

| Binding claim | Final item and hypotheses | Local proof suppliers |
|---|---|---|
| Define flat projective-subscheme functor with finite presentation | `def-hilbert-functor-of-flat-projective-subschemes`: locally Noetherian S, possibly non-quasi-compact, projective fp X/S, relatively ample L, **all** S-scheme tests, fp closed immersion and base-flat quotient | Definition; `lem-hilbert-families-fpqc-descent` proves pullback/descent |
| Prove representability | `thm-hilbert-scheme-represents-projective-flat-families`: same locally Noetherian S/X/L/test hypotheses; represents every fixed P and the full coproduct | Uniform regularity, relative sections, universal flattening, Grassmannian construction, closed vanishing locus, affine-base gluing |
| Fixed-polynomial projectivity | Same theorem: proper fp, coherent-projective-bundle embedding for general L; global P^N embedding when L is induced by specified global X→P^n_S | P-only ambient regularity; coherent-source Grassmannians; arbitrary-valuation closure; global component Plücker line and coherent direct image |
| Universal family | Same theorem and `lem-universal-family-and-hilbert-polynomial-strata`: embedded closed fp flat universal family; unique classifying map | Explicit Grassmannian cokernel/flattening and representability/Yoneda |
| Hilbert polynomial strata | `lem-universal-family-and-hilbert-polynomial-strata`: open and closed fixed-P components, full functor represented by disjoint union | Locally constant Euler characteristics; finite degree bound; family polynomial loci |
| Base-change compatibility | Same theorem and universal-family lemma: every S'→S, including non-Noetherian S', and every S'-scheme test | Universal cohomology complex; flat fp Noetherian approximation; functor identity X×_ST = X_{S'}×_{S'}T |
| Finite points on P1 example | `ex-hilbert-polynomial-of-finite-points-on-p1`: finite length d over any field, including fat/non-rational points | A supplier `lem-hilbert-polynomial-finite-scheme-length` |
| Fibrewise subschemes without flatness counterexample | `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`: dual-number base, fp closed point with constant fibre polynomial 1, nonflat quotient | Explicit tensor failure; flattening stratum ε=0 with nonreduced-base distinction |
| No duplicate Grassmannian/hypersurface parameter-space example | B contains finite-length, nonflat dual-number, flat fat-point base-change, and non-quasi-compact full-functor examples | Relative Grassmannian is only an A construction prerequisite |

## Checks

Initial mandatory command `node tools/proof-layout.mjs <the 21 explicit paths>` failed at renderer setup: raw JSX in the configured website checkout produced `Unexpected token <` under Node 22.22.1. No proof-layout pass was inferred from this failure. A final read-only renderer workaround run is recorded below. No mathematical acceptance or engine gate is claimed.

Before the scope repair, the mandated check `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <the then-current 21 explicit paths>` returned exit 0: `proof-layout: 21 items, 52 steps, 0 defects`. This is a rendered-layout result, not a mathematical audit.

## Locally Noetherian global extension: reviewed scope repair

The initial Noetherian-only theorem was not equivalent to the unqualified AG-MOD-1 scope, since no binding clause made S quasi-compact. Its final Statement and the functor definition have therefore been extended; the old proof is retained under `lem-hilbert-noetherian-base-fixed-polarization`, so its finite-cover argument is used only on one Noetherian affine base open.

1. `lem-hilbert-regularity-independent-of-ambient-dimension` proves a uniform degree b(P) depending only on the quotient polynomial. Induction is on deg(P), with the zero polynomial initial case. The exact estimate h¹(I(a)) ≤ P(a) cancels p·binom(n+a,n). This removes any global bound on ambient dimension or generator count.
2. `lem-hilbert-relative-grassmannian-quotients` now covers coherent sources on a locally Noetherian base. Finite presentations define local closed relation loci; their quotient functors glue. The global Plücker map lands in P(∧^e W) and is a closed immersion, even when W is not locally free.
3. `lem-hilbert-coherent-projective-bundle-construction` gives fixed-P strata in P(E) with a global degree and global coherent-bundle embedding, all arbitrary test schemes, and universal family. Local flattening loci agree on overlaps through scheme-theoretic universal properties. Arbitrary-valuation closure makes the global Grassmannian immersion closed.
4. The main theorem uses a global projective-bundle embedding of X, inherent in the projectivity hypothesis, to choose an auxiliary M. Its full M-Hilbert scheme has a global line whose restriction to each polynomial component is that component's Plücker bundle. The L-fixed locus is open and closed. It is proper/finitely presented on each Noetherian affine base by the retained local supplier, so meets finitely many M-components over that affine. The restricted global line is itself relatively very ample on that affine. Its coherent direct image provides the global embedding into P(E') without a global exponent, a globally finite cover, or a global P^n_S.

Projectivity is explicitly the coherent-projective-bundle convention in `def-projective-morphism-coherent-bundle-convention`; H-projectivity is the proved stronger conclusion for a specified global finite-dimensional embedding inducing L. Merely locally projective X without a global projectivity datum is not silently substituted for projective X.

Final packet count after this scope repair: 21 A items and 4 B items. All claims remain draft pending the parent's independent full contract comparison. No mathematical audit or engine gate is asserted.

Final post-scope-repair renderer check: `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <the 25 explicit paths in /tmp/hilbert905/paths.txt>` returned exit 0, `proof-layout: 25 items, 63 steps, 0 defects`. The owned draft dependency graph is acyclic and all declared dependency files exist. These are local format/dependency checks, not independent mathematical acceptance.

## Eventual-membership formulation and final semantic audit

The fixed-polynomial definition now quantifies fibrewise: for every geometric t there is r_t such that χ(Z_t,L_t^r)=P(r) for every r>=r_t. The cutoff may depend on the fibre; no uniform cutoff over an arbitrary test scheme is part of membership. It explicitly records equivalence to eventual h⁰ and to the fibre polynomial label.

Source nuance retained: the old all-integer χ condition was not mathematically false under the Euler-polynomial theorem. Published `items/thm-hilbert-polynomial-coherent-sheaf.md`, Statement 1, identifies χ with its polynomial for every integer m; Statement 2 identifies h⁰ with it only for sufficiently large m. Nitsure Section 1, “Stratification by Hilbert Polynomials,” printed page 4, defines the polynomial through χ and later defines the fixed-polynomial fibre subfunctor. The edit is the requested standard eventual Hilbert-function/fibrewise membership formulation, with an equivalent Euler characterization.

The dependency audit found that the existing published Euler theorem fixes an embedding-induced O(1). A new local supplier `lem-hilbert-euler-polynomial-for-ample-polarization` closes the arbitrary-ample-L interface explicitly: consecutive very ample powers, the published regular-hyperplane dimension-drop lemma, and Δ₁f=Δₐ₊₁f−shift(Δₐf) prove all-integer polynomiality by support-dimension induction. Serre vanishing supplies eventual h⁰ equality. The functor definition and family-descent supplier now cite this lemma. No Snapper theorem is left as a citation-only prerequisite.

Semantic audit: regularity estimates, χ additivity/hyperplane differences, polynomial substitution P(dt), flattening rank values, and base-change arguments continue to use the same uniquely determined fibre polynomial. The new eventual condition is equivalent to that meaning. Finite-point and fat-point examples retain their directly proved all-integer length identities. The representability theorem's locally Noetherian base, potentially non-quasi-compact base, chosen ample L, all S-scheme tests, global coherent-bundle projectivity, universal family, and arbitrary base-change claims are unchanged.

Additional exact format changes required by precheck: all four B verifications now number their second step 2.1 instead of 1.2. In the coherent-source Grassmannian proof, original step 3.1 became 2.2 and original 4.1 became 3.1; its trailing step reference and the prose reference were adjusted accordingly. No mathematical statements changed in these format repairs. The initial requested precheck reported five auto-repairs; all proposed numbering repairs were adopted before the successful final checks.

Exact definition diff:

```diff
--- before/items/def-hilbert-functor-of-flat-projective-subschemes.md
+++ after/items/def-hilbert-functor-of-flat-projective-subschemes.md
@@ -6,6 +6,7 @@
 origin: pipeline
 pipeline_run: frontier-38-owner-30
 deps:
+  - lem-hilbert-euler-polynomial-for-ample-polarization
   - def-projective-morphism-coherent-bundle-convention
   - def-dependent-choice
   - def-axiom-of-choice
@@ -14,7 +15,7 @@
   proof: not-applicable
 sources:
   references:
-    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
+    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Section 1, Stratification by Hilbert Polynomials, page 4"
       url: "https://arxiv.org/pdf/math/0504590"
     - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
       url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
@@ -22,4 +23,6 @@
 
 ## Definition
 
-Work with AC and DC. Fix a locally Noetherian scheme $S$, possibly non-quasi-compact, a projective morphism of finite presentation $X\to S$ in the convention of [[def-projective-morphism-coherent-bundle-convention]], and a relatively ample invertible sheaf $L$ on $X$. The test category is **all $S$-schemes**, with arbitrary $S$-morphisms. Set $X_T=X\times_ST$. The set $\operatorname{Hilb}_{X/S}(T)$ consists of closed subschemes $Z\hookrightarrow X_T$ whose inclusion is of finite presentation and whose structure sheaf is flat over $T$. They are taken as embedded subschemes, so equality means equality of their ideal sheaves. Such $Z\to T$ is projective of finite presentation. For a numerical polynomial $P$, its subfunctor $\operatorname{Hilb}^{P,L}_{X/S}$ consists of these families satisfying $\chi(Z_t,L_t^{\otimes r}|_{Z_t})=P(r)$ on every geometric fibre, for every integer $r$. Pullback is scheme theoretic inverse image. The complete functor allows varying fibre polynomial on different open and closed loci of $T$; it is not required to have one polynomial globally. Empty families and $P=0$ are allowed. AC/DC are the inherited conventions for the scheme/cohomology/approximation suppliers, not restrictions on test schemes.
+Work with AC and DC. Fix a locally Noetherian scheme $S$, possibly non-quasi-compact, a projective morphism of finite presentation $X\to S$ in the convention of [[def-projective-morphism-coherent-bundle-convention]], and a relatively ample invertible sheaf $L$ on $X$. The test category is **all $S$-schemes**, with arbitrary $S$-morphisms. Set $X_T=X\times_ST$. The set $\operatorname{Hilb}_{X/S}(T)$ consists of closed subschemes $Z\hookrightarrow X_T$ whose inclusion is of finite presentation and whose structure sheaf is flat over $T$. They are taken as embedded subschemes, so equality means equality of their ideal sheaves. Such $Z\to T$ is projective of finite presentation. For a numerical polynomial $P$, its subfunctor $\operatorname{Hilb}^{P,L}_{X/S}$ consists of these families satisfying the following fibrewise eventual condition: for every geometric point $t:\operatorname{Spec}\Omega\to T$, there is an integer $r_t$ such that $\chi(Z_t,L_t^{\otimes r}|_{Z_t})=P(r)$ for all integers $r\ge r_t$. Equivalently, the eventual Hilbert function $h^0(Z_t,L_t^{\otimes r}|_{Z_t})$ is $P(r)$ in a sufficiently large tail. The cutoff in this membership definition may depend on the fibre; no uniform cutoff over an arbitrary test scheme is assumed. This says exactly that every fibre Hilbert polynomial for the pulled-back polarization is $P$. By [[lem-hilbert-euler-polynomial-for-ample-polarization]], it is also equivalent here to the all-integer Euler-characteristic characterization; the later regularity suppliers establish uniform cutoffs where their hypotheses apply. Pullback is scheme theoretic inverse image. The complete functor allows varying fibre polynomial on different open and closed loci of $T$; it is not required to have one polynomial globally. Empty families and $P=0$ are allowed. AC/DC are the inherited conventions for the scheme/cohomology/approximation suppliers, not restrictions on test schemes.
+
+Source locator: Nitsure, Section 1, “Stratification by Hilbert Polynomials,” page 4, defines the fibre polynomial through Euler characteristic; the proved ample-polarization supplier above supplies its equivalence with the eventual Hilbert-function condition.
```

Final packet count: 22 A items + 4 B items, all owned by A905/B906. Final requested commands on the 26 explicit paths listed in /tmp/hilbert905/paths.txt:

- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/hilbert905/paths.txt)` — exit 0; `23 checked, 0 failing — all clean` (three definitions are not proof-bearing).
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/rendercheck.mjs $(cat /tmp/hilbert905/paths.txt)` — exit 0; `OK — 26 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs $(cat /tmp/hilbert905/paths.txt)` — exit 0; `proof-layout: 26 items, 66 steps, 0 defects`.

These are local format/render checks, not independent mathematical acceptance. Shared plans, tracks, manifests, and run state remain unedited.

# Batch 15 scaffold — frontier-33

Authorised scope: this notes file and sibling .pages.json / .coverage.json only. Step 1 scaffold, not authoring or workflow control.

## Design and current evidence checkpoint

Read CLAUDE.md, README.md, SCHEMA.md, generated beta-15 task, beta-batch task, and RG-4 design lines 354–395 plus convention table line 1749. Manifest and spec agree on A 510.037 / B 510.038, category and companions. Design's prerequisite prose says abstract-algebra representation pages, with RG-3 only a non-load-bearing remark; spec instead chains through schur-indices-and-fields-of-definition-examples. Preserve spec; drift stage owns adjudication. No numerical order is stated inside RG-4.

All groups finite, modules finite-dimensional over C, left actions. Use {}^g theta(n)=theta(g^{-1}ng), and left cosets gI. Späth uses theta^g(n)=theta(gng^{-1}); translate by g -> g^{-1}. Restriction to N generally has multiple isotypical components; it is the selected component over inertia that is homogeneous.

Sources fetched and read using web PDF extraction, 2026-09-07:
- T: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory (preliminary version September 28, 2009), contents p.2 and full §4.2 pp.53–57, through Remark 4.2.7. Design incorrectly stops at p.56: 4.2.5–7 are on p.57. Read all of 4.2.4's proof through its final orbit partition. No source replacement.
- S: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures (November 27, 2017), notation p.1 and §1 introductory conjugation / full §1.A pp.2–3 through Remark 1.5. The design calls this document by its section-1 title. Theorems 1.1–1.3 are statements with references, not supplied proofs. Definition 1.4 and Remark 1.5 belong to next page's projective scope.
- L: https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf — Ivan Losev, Representation Theory, Chapter 0. Basics, contents p.1; §2.3 opening through Proposition 2.17 and full proof pp.9–11; Theorem 2.8 and proof p.9 read as an isolated dependency. Evaluation is Corollary 2.16; submodules are Proposition 2.17. This is the complete archive recovery of the original `https://gauss.math.yale.edu/~il282/RT0_new.pdf`, retained as provenance in coverage. It supplies explicit support for the Gallagher multiplicity-space proof rather than assuming a tensor equivalence.

Published statements inspected: conjugate representation definition, isotypic decomposition uniqueness, Maschke complete reducibility, Schur's lemma and scalar endomorphism corollary, function-model induction/transversal/adjunction, tensor character rules, character-inner-product Hom dimension, existing S3 restriction false statement.

Duplication decisions: do not mint lem-restriction-to-a-normal-subgroup-is-semisimple for the complex specialization already supplied by Maschke complete reducibility. Do not mint cex-normal-restriction-of-an-irreducible-need-not-be-irreducible: published fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible already refutes it using the same normal A3 example. New inertia definition references the existing conjugate-representation definition instead of redefining it. The new S3 example must compute inertia and correspondence, not repeat only the old restriction calculation. No external B-page dependencies.

## Open work

Write exact claims, proof obligations and dependencies into manifest and per-item checkpoints below. Finish harvest dispositions and fetch stamps. Run coverage, whole-run manifest-only content policy, plan validation with the batch overlaid transiently, and liveness. No proof has been authored or independently reviewed in this dispatch.

## def-conjugate-representation-and-inertia-group

Claim/conventions: For N normal in finite G and theta in Irr(N), use the existing left conjugate {}^g theta(n)=theta(g^{-1}ng). Define I=I_G(theta)={g: {}^g theta=theta}, and Irr(H|theta) for N<=H<=G by occurrence in restriction. The action factors through G/N and N<=I<=G.

Dependencies: `def-conjugate-representation-and-conjugate-character`, `def-normal-subgroup`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 opening pp.53–54; Späth notation p.1 and §1 opening p.2.

Proof / dependency rationale: Check {}^g({}^h theta)={}^(gh)theta; inner conjugation acts trivially on characters, and stabilizer closure follows from the action. Existing conjugation is reused; only inertia and lying-over terminology are new.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-normal-isotypical-components-are-permuted-by-translation

Claim/conventions: For any complex G-module V and N normal in G, g V_theta=V_({}^g theta). Every N-submodule U of V decomposes as the direct sum of U intersect V_theta over the occurring N-types.

Dependencies: `def-conjugate-representation-and-inertia-group`, `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, `thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 pp.53–54 before Proposition 4.2.2; Losev Theorem 2.14(2).

Proof / dependency rationale: The map s -> gs identifies each translated simple submodule with its left conjugate. Apply g and its inverse to the defining isotypical sums. Decompose U by Maschke and place each simple summand into its unique ambient isotypical block. This intersection clause is needed for the converse induction proof.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-normal-restriction-constituents-form-one-conjugacy-orbit

Claim/conventions: For irreducible complex G-module V and any constituent theta of V|N, all constituents form the orbit of theta and all have the same positive multiplicity.

Dependencies: `lem-normal-isotypical-components-are-permuted-by-translation`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 p.54, Proposition 4.2.2 and following formula; Späth Theorem 1.1.

Proof / dependency rationale: The sum over one orbit is nonzero and G-stable, hence all V. Translation is an isomorphism between components; conjugate simple modules have equal dimensions, so multiplicities agree.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## thm-clifford-homogeneous-restriction-formula

Claim/conventions: If chi in Irr(G) lies over theta in Irr(N), I=I_G(theta), then Res_N^G chi=e sum_{gI in G/I} {}^g theta, e a positive integer. Hence chi(1)=e[G:I]theta(1). Use left cosets; the whole restriction need not be isotypical.

Dependencies: `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `thm-characters-of-direct-sums-tensor-products-and-duals`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorem 1.1 p.2; tom Dieck §4.2 p.54.

Proof / dependency rationale: Translate the module decomposition into a character identity and evaluate at 1. The orbit lemma supplies the proof; this theorem supplies the reusable character form.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## def-clifford-ramification-index

Claim/conventions: For chi lying over theta, its ramification index e(chi,theta) is the common multiplicity in the Clifford formula, equivalently dim Hom_N(S,V) for S affording theta.

Dependencies: `thm-clifford-homogeneous-restriction-formula`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`, `thm-character-inner-product-computes-intertwiner-dimension`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 p.54 after Proposition 4.2.2.

Proof / dependency rationale: Positivity and orbit independence come from the formula; Hom dimension is the published multiplicity theorem.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-normal-isotypical-component-is-inertia-stable

Claim/conventions: For irreducible V and an occurring theta, the setwise stabilizer of V_theta in G equals I_G(theta). Thus V_theta is an I-module.

Dependencies: `lem-normal-isotypical-components-are-permuted-by-translation`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 p.54 before Proposition 4.2.2.

Proof / dependency rationale: Inertia fixes the component by translation. If g fixes it, its nonzero intersection with the conjugate-type component forces equality of types. The occurring/nonzero hypothesis is essential.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-induction-from-the-inertia-group-recovers-the-module

Claim/conventions: For irreducible V lying over theta, W=V_theta is irreducible over I=I_G(theta), and the canonical G-map Ind_I^G W -> V is an isomorphism.

Dependencies: `lem-normal-isotypical-component-is-inertia-stable`, `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `prop-induced-module-decomposes-over-a-left-transversal`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Proposition 4.2.2 p.54.

Proof / dependency rationale: Use the published covariant-function model: f maps to sum_{t in T} t f(t), T a left transversal. Adjunction verifies equivariance and independence. Each coset block maps bijectively onto tW, and these are the distinct isotypical summands. Establish bijectivity first. For 0<U<W I-stable, the sum of its translates is G-stable with dimension [G:I]dim U strictly between zero and dim V, impossible. No tensor-model identification is assumed.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-inducing-an-irreducible-inertia-module-is-irreducible

Claim/conventions: Let I=I_G(theta) and W in Irr(I|theta). Then W|N is theta-isotypical, Ind_I^G W is irreducible, and its theta-isotypical component is the identity-coset copy of W.

Dependencies: `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `lem-normal-isotypical-components-are-permuted-by-translation`, `prop-induced-module-decomposes-over-a-left-transversal`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Theorem 4.2.4(1) pp.55–56; Späth Theorem 1.2.

Proof / dependency rationale: Apply the orbit lemma within I to get W|N=e theta. The left-coset blocks of the induced function model have distinct N-types {}^t theta; compute the action on each supported block. A nonzero G-submodule meets a block by the intersection lemma. Translate to meet W; I-irreducibility fills W, and G-stability fills all blocks. No invocation of the correspondence itself.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## thm-clifford-correspondence

Claim/conventions: Induction is a bijection Irr(I_G(theta)|theta) -> Irr(G|theta), with inverse taking the theta-isotypical component. Conjugate normal types give the same target set; the sets for distinct G-orbits partition Irr(G).

Dependencies: `lem-induction-from-the-inertia-group-recovers-the-module`, `lem-inducing-an-irreducible-inertia-module-is-irreducible`, `thm-clifford-homogeneous-restriction-formula`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorem 1.2 p.2; tom Dieck Theorem 4.2.4(1–3,5) pp.55–56.

Proof / dependency rationale: Reconstruction proves surjectivity. Taking the theta-component after induction recovers W and proves injectivity. The orbit formula gives the disjoint partition. Include I=N and I=G without proper-subgroup assumptions.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## cor-normal-subgroup-induction-irreducibility-criterion

Claim/conventions: For theta in Irr(N), Ind_N^G theta is irreducible iff I_G(theta)=N. Its character self-inner-product equals [I_G(theta):N].

Dependencies: `def-conjugate-representation-and-inertia-group`, `prop-induced-module-decomposes-over-a-left-transversal`, `cor-frobenius-reciprocity-for-complex-characters`, `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Proposition 4.2.3 and equations (4.4)–(4.5) pp.54–55.

Proof / dependency rationale: Compute Res_N Ind_N^G as sum {}^t theta over left cosets tN. Reciprocity counts exactly I/N; Schur gives one there and zero elsewhere. Apply the published character criterion.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## cor-clifford-ramification-squares-sum-to-inertia-index

Claim/conventions: For theta in Irr(N), let chi_j run over Irr(G|theta) and e_j=e(chi_j,theta). Then Ind_N^G theta=sum_j e_j chi_j and sum_j e_j^2=[I_G(theta):N].

Dependencies: `thm-clifford-correspondence`, `def-clifford-ramification-index`, `cor-normal-subgroup-induction-irreducibility-criterion`, `cor-frobenius-reciprocity-for-complex-characters`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`, `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Theorem 4.2.4(4), equation (4.7), pp.55–56.

Proof / dependency rationale: Reciprocity identifies each induced multiplicity with e_j and excludes other constituents. Take the norm using the published sum-of-squares character identity and the preceding index computation. Retain this cheap source result as a corollary.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## def-extension-of-an-irreducible-normal-subgroup-representation

Claim/conventions: An extension of S in Irr(N) to H, N<=H<=G, is an H-action on S restricting to the given N-action; at character level Res_N^H chi_tilde=theta. It is automatically irreducible. Inflation from H/N is the published quotient construction.

Dependencies: `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-sign-representation-and-restriction-of-a-representation`, `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57.

Proof / dependency rationale: Extension keeps the space and N-action. Every H-stable subspace is N-stable, proving irreducibility inline. Invariance is necessary; it does not alone guarantee an extension.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces

Claim/conventions: If S is irreducible over C and U is a finite theta-isotypical N-module, evaluation S tensor_C Hom_N(S,U) -> U, s tensor f -> f(s), is an N-isomorphism. Every N-submodule is S tensor M0 for a unique multiplicity subspace M0. N-maps between these modules correspond to linear maps between their multiplicity spaces.

Dependencies: `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`, `def-tensor-product-of-complex-representations`, `thm-universal-property-of-module-tensor-products`.

Source: https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf — §2.3 Theorem 2.14, Corollary 2.16 and Proposition 2.17 pp.10–11. Original URL preserved in coverage: https://gauss.math.yale.edu/~il282/RT0_new.pdf.

Proof / dependency rationale: Decompose U into copies of S; scalar Schur identifies each Hom coordinate with C. Evaluation becomes the coordinate isomorphism. Apply the same calculation to each submodule using Maschke and its actual inclusion to prove equality of subspaces and uniqueness. Matrices of scalar intertwiners prove the Hom assertion. No density theorem is needed.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## thm-gallagher-correspondence-for-an-extendible-character

Claim/conventions: Fix an extension S_tilde of theta to I=I_G(theta). Then eta -> chi_S_tilde Inf_(I/N)^I eta is a bijection Irr(I/N) -> Irr(I|theta). Composing with induction gives Irr(G|theta); the corresponding ramification index is eta(1).

Dependencies: `def-extension-of-an-irreducible-normal-subgroup-representation`, `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`, `thm-clifford-correspondence`, `def-clifford-ramification-index`, `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`, `thm-characters-of-direct-sums-tensor-products-and-duals`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57; Losev Corollary 2.16 and Proposition 2.17.

Proof / dependency rationale: For theta-isotypical I-module U set (i.f)(s)=i f(S_tilde(i)^{-1}s) on Hom_N(S,U). Verify N-linearity, action law and trivial N-action. Evaluation is I-equivariant. By the evaluation lemma N-submodules are S tensor M0, and I-stability is exactly quotient-stability of M0. This proves irreducibility both ways. The Hom clause recovers parameters uniquely; evaluation proves exhaustivity. Multiply characters and compute multiplicity dim M=eta(1).

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## ex-clifford-theory-for-s3-over-a3

Claim/conventions: For A3=<r> in S3, Irr(A3)={1,lambda,lambda^{-1}}, lambda(r)=exp(2 pi i/3). Orbits {1} and {lambda,lambda^{-1}} have inertia S3 and A3. The trivial orbit gives trivial and sign; inducing lambda gives the standard degree-two irrep with ramification one.

Dependencies: `thm-clifford-correspondence`, `cor-normal-subgroup-induction-irreducibility-criterion`, `thm-gallagher-correspondence-for-an-extendible-character`.

Source: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — §4.2 Theorem 4.2.4 / Proposition 4.2.3; Späth Theorem 1.3 specialized to S3.

Proof / dependency rationale: Compute srs^{-1}=r^{-1}. Realize induction by r=diag(zeta,zeta^{-1}) and s exchanging coordinates; the two r-eigenlines are swapped. Identify these eigenvectors in the coordinate-sum-zero plane of C^3. Verify reducible normal restriction here and mention the published false statement without a load-bearing B-page edge.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## ex-gallagher-correspondence-for-a-direct-product

Claim/conventions: For finite N,Q and theta in Irr(N), inertia in N times Q is the full group. Extension S_tilde(n,q)=S(n) yields exactly S external-tensor U, U in Irr(Q), above theta, with ramification dim U.

Dependencies: `thm-gallagher-correspondence-for-an-extendible-character`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorem 1.3; tom Dieck Remark 4.2.5 specialized to a direct product.

Proof / dependency rationale: Check the extension and identify the quotient with Q directly. Apply Gallagher and restrict to dim U copies of S. No prior direct-product classification is needed.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## ex-clifford-boundaries-n-equals-one-and-n-equals-g

Claim/conventions: For N=1, theta=1 and I=G; chi restricts to chi(1) copies of 1 and Clifford induction is identity. For N=G, theta=chi, I=G and e=1; the lying-over correspondence is the singleton identity.

Dependencies: `thm-clifford-correspondence`, `def-clifford-ramification-index`, `thm-gallagher-correspondence-for-an-extendible-character`.

Source: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Theorems 1.1–1.3; tom Dieck Theorem 4.2.4 boundary specializations.

Proof / dependency rationale: Substitute each extreme in the definitions. At N=1 the trivial extension recovers Irr(G) by Gallagher; at N=G the quotient is trivial. Distinguish homogeneous from irreducible restriction.

Checkpoint: scaffold recorded; proof authoring and independent review remain step-5 obligations. Batch validators pending until complete manifest.

## Automated URL recovery/liveness check

Command: `node tools/url-sweep.mjs --coverage research/frontier-33-batch-15.coverage.json --out /dev/stdout --recover --fail-on-dead --timeout-ms 5000` (report captured here; no separate artifact). Exit 1.

```text
{
  "version": 1,
  "generated_at": "2026-09-06T19:05:37.883Z",
  "scope": {
    "manifests": [],
    "ledgers": [],
    "items": 0
  },
  "summary": {
    "urls": 3,
    "live": 0,
    "failed": 3,
    "recovered": 0,
    "suspect": 0,
    "superseded": 0
  },
  "superseded": [],
  "rows": [
    {
      "url": "https://gauss.math.yale.edu/~il282/RT0_new.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://gauss.math.yale.edu/~il282/RT0_new.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: gauss.math.yale.edu",
      "recovered": null
    },
    {
      "url": "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: math.uchicago.edu",
      "recovered": null
    },
    {
      "url": "https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: www.darstellungstheorie.uni-wuppertal.de",
      "recovered": null
    }
  ]
}
url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /dev/stdout
FAIL 0 https://gauss.math.yale.edu/~il282/RT0_new.pdf — curl: (6) Could not resolve host: gauss.math.yale.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — curl: (6) Could not resolve host: math.uchicago.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — curl: (6) Could not resolve host: www.darstellungstheorie.uni-wuppertal.de
  no archived snapshot under any host variant — re-sourcing is justified here

```

## Final scaffold validation checkpoint

14 A items and 3 B items. No split needed. Each manifest item has an explicit deps array. Canonical and alias scan found no collisions. All directly used published dependency statements were read. No plan, library, item, other-batch or workflow-state file was modified by this dispatch.

Command: `node tools/coverage-checklist.mjs research/frontier-33-batch-15.coverage.json --require-destination` — exit 0.

```text
coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)
```

Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-15.pages.json` — exit 0.

```text
content-policy: 17 scoped item(s), 0 error(s), 0 warning(s)
```

Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — exit 1.

```text
ERROR batch-dependency-missing [def-compactly-supported-differential-form]: def-compactly-supported-differential-form depends on def-compactness-open-cover, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on def-weak-star-topology, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on thm-bipolar-closure-for-linear-subspaces, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-localization-of-a-category-at-a-class-of-morphisms]: def-localization-of-a-category-at-a-class-of-morphisms depends on def-functor, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]: lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms depends on def-flat-module, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-local-rings-are-domains-and-cohen-macaulay]: thm-regular-local-rings-are-domains-and-cohen-macaulay depends on def-cohen-macaulay-module-and-ring, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-local-regularity-fibre-step]: lem-polynomial-local-regularity-fibre-step depends on thm-euclidean-domain-implies-pid, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-normal-noetherian-ring]: def-normal-noetherian-ring depends on def-integrally-closed-domain, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-total-ring-of-fractions]: def-total-ring-of-fractions depends on def-localisation-of-a-commutative-ring, which is neither declared by this batch nor an item on disk
content-policy: 647 scoped item(s), 9 error(s), 0 warning(s)
```

Command: `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-15.coverage.json` — exit 1.

```text
ERROR fetch-check-unstamped: clifford-theory-over-normal-subgroups: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf
ERROR fetch-check-unstamped: clifford-theory-over-normal-subgroups: https://www.darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf
ERROR fetch-check-unstamped: clifford-theory-over-normal-subgroups: https://gauss.math.yale.edu/~il282/RT0_new.pdf
source-fetch-check: 0/3 source(s) fetch-verified, 3 FAILED
```

`validate-plan.mjs` — current plan; exit 0. The in-memory /dev/stdin overlay changes only this batch item lists and writes no plan file. Existing redundant-prerequisite warnings are unchanged.

```text

OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 844 page(s) with item lists.
NOTE: 511 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

`validate-plan.mjs` — current plan with batch 15 overlaid in memory; exit 0. The in-memory /dev/stdin overlay changes only this batch item lists and writes no plan file. Existing redundant-prerequisite warnings are unchanged.

```text

OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 846 page(s) with item lists.
NOTE: 509 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

## Readiness and remaining obligations

The mathematical scaffold and 32-heading harvest are complete for review. Batch coverage and local content policy pass; plan validation passes including the batch item graph. Whole-run content policy is not green: its exact current diagnostics above are outside this batch. Do not alter those owners’ files.

All three source documents were opened and the relevant complete sections read through the web tool. Terminal source-fetch --stamp failed EAI_AGAIN for each URL. These are environment DNS failures, not evidence of dead texts: no replacement or original_url rewrite is appropriate for a live, already-read document. No byte counts or hashes were fabricated, and fetch_verified stamps remain absent. Automated liveness/recovery output is recorded above. Batch readiness remains BLOCKED on the automated source-fetch/liveness gates; do not advance on this notes file’s mathematical assessment.

Next action: from an execution environment with working DNS, rerun `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-15.coverage.json --stamp` and the coverage URL liveness/recovery command, then rerun whole-run manifest-only content policy after the other owners resolve their diagnostics. This dispatch does not authorize changing the validator or workflow to bypass either gate. Proof authoring and independent review remain future-stage work.

Scope decisions: semisimplicity and the S3/A3 false claim are reused, not removed; the S3 computation includes the normal-restriction failure. Source projective headings have explicit next-page destinations. The ramification squares identity, converse induction proof, and Gallagher evaluation/submodule argument are retained. Späth’s generalized final clause is not a load-bearing premise; its printed parameter inconsistency is recorded in coverage.

Scaffold artifact SHA-256: `research/frontier-33-batch-15.pages.json` = `774c9f93fcadb33a57092594ed6b29714f120c03b7a09023d68026130ea29831`.

Scaffold artifact SHA-256: `research/frontier-33-batch-15.coverage.json` = `983dc510dcdf93c1ee4637a47260e5ff2bbf3ff50c3316e05a43f437ffe14c05`.

## Reharvest-2 — Losev multiplicity-space support (2026-09-07)

Affected result: `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`.
Its former reader-facing URL was `https://gauss.math.yale.edu/~il282/RT0_new.pdf`.
The run liveness artifact records a TLS-certificate failure for that URL and recovers the
complete same-document snapshot
`https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf`.
The batch source row already has the recovery provenance (`original_url`) and a full-text
stamp: 322152 bytes, 20 PDF pages, SHA-256 prefix `a9fd4898441a5ca7`.  This repair makes
the affected item-coverage row cite that same archived URL too, while retaining the former
URL as its `original_url`; no different treatment was substituted.

I re-read the exact result in the source via the accessible Yale extraction of the original
20-page document, and separately found the author-hosted current same-document URL
`https://gauss.math.yale.edu/~il282/MIRT_basic.pdf`.  The archive remains the batch
citation because it is the version already full-text stamped.  In §2.3, printed pp.10–11:
Theorem 2.14 identifies maps between isotypical sums with the corresponding maps of
multiplicity spaces and preserves each isotypical block; Corollary 2.16 gives the evaluation
isomorphism; Proposition 2.17 identifies every submodule with unique multiplicity
subspaces, as an actual submodule.  The source harvest remains faithful and complete over
the read range: Theorem 2.8 (`already-published`); §2.3 opening (`included`, this lemma);
Definition 2.13, Theorem 2.14 and Remark 2.15 (`inline`, this lemma); Corollary 2.16
(`included`, this lemma); and Proposition 2.17 (`inline`, this lemma).  The full range ends
before Corollary 2.18.

Claim constraint and dependencies are unchanged: finite-dimensional complex modules,
an irreducible $S$, and a finite $\theta$-isotypical $N$-module; the local proof uses
complete reducibility, scalar Schur, and the tensor universal property, not a density
theorem.  This is a URL/provenance repair only; it creates no duplicate claim and changes
no manifest, plan, or published content.

## Reharvest validation checkpoint (2026-09-07)

`node tools/coverage-checklist.mjs research/frontier-33-batch-15.coverage.json --require-destination`
passed: 1 page, 32 harvested results, 0 errors and 0 warnings.  The batch-local
manifest check also passed: `content-policy` found 17 scoped items and 0 errors.

`source-fetch-check --stamp` confirmed the two existing full-text stamps, including the
recovered Losev source, but could not stamp the unrelated Späth PDF:
`EAI_AGAIN` from this terminal.  A fresh `url-sweep --recover --fail-on-dead` likewise
could resolve none of the three source hosts (including `web.archive.org`), so it reported
0/3 live and could not repeat the earlier archive lookup.  Consequently `source-backing
--require-verified` reported 12 lost backing rows, including the repaired Losev item; that
is the fresh sweep's resolver failure, not a deletion of its stamped archive source.

The source-backing, liveness, and fetch-stamping gates therefore remain blocked in this
execution environment.  Do not remove results or replace the complete same-document
archive on that basis.  Next action: from an environment that resolves the three hosts,
rerun the batch URL sweep, `source-backing --require-verified`, and
`source-fetch-check --stamp` to obtain a current liveness report and the missing Späth
stamp.  Batch readiness is not asserted here.

## Späth host recovery (2026-09-07)

Removing only the obsolete `www` label yields the same author-hosted university
PDF byte-for-byte. The source and its item-support references now use
`https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf`,
with the prior URL retained as provenance. The repository full-text verifier
stamped the 481,426-byte, 29-page PDF with SHA-256 prefix
`dc3a25b54662d253`. No locator, harvest disposition, claim, dependency, or
proof plan changed.

## Step-3 fix pass

Review record: `research/frontier-33-alpha-f-step3-scaffold-review.md`, Batch
15.  The review supplies no numbered individual finding: its stated outcome is
`sufficient`, with no in-scope false claim, missing lemma, backward
prerequisite, source gap, or pair-scope defect.  Accordingly there is no
finding number to renumber or silently omit.

- Finding id: *(none issued; group-f / batch-15 sufficient outcome)*.
  Disposition: `stands` (no scaffold edit).  The reviewed 17-item route remains
  dependency-closed: translated normal isotypical components give the one-orbit
  restriction formula, the inertia component gives reconstruction and both
  directions of induction, and the separate multiplicity-space lemma supplies
  the extendible Gallagher case.  Every manifest object continues to have an
  explicit `deps` array.  The A page has 14 items (under the 60-item split
  threshold) and its B page has 3 examples.

  Evidence read in this pass: the exact RG-4 design section at
  `research/plan-representation-theory-groups-track.md` lines 354–392 fixes the
  left-conjugation convention, requires the reconstruction proof in both
  directions, and names the three B examples plus the non-irreducible
  normal-restriction boundary.  The latter is deliberately not minted again:
  `design_reconciliation` in
  `research/frontier-33-batch-15.coverage.json` maps it to the already-published
  `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible`,
  whose same $S_3/A_3$ computation is recalled inline by
  `ex-clifford-theory-for-s3-over-a3`.  This is the concrete, source-grounded
  pushback against duplicate scaffolding, not a removed mathematical boundary.

  I re-read the covered source ranges and their named results: tom Dieck,
  *Representation Theory*, contents p.2 and §4.2 “Restriction to Normal
  Subgroups,” pp.53–57 through Remark 4.2.7,
  <https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf>;
  Späth, *Reduction theorems for some global-local conjectures*, notation p.1
  and §1.A “Clifford theorems and projective representations,” pp.2–3 through
  Remark 1.5, <https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf>;
  and Losev, *Representation Theory, Chapter 0. Basics*, contents p.1, Theorem
  2.8 with proof p.9, and §2.3 through Proposition 2.17 and its proof,
  pp.9–11, <https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf>
  (original URL: <https://gauss.math.yale.edu/~il282/RT0_new.pdf>).  The
  pre-existing coverage harvest has all 32 source results with a disposition;
  the 14 tom Dieck, 11 Späth, and 7 Losev rows remain unchanged because each is
  still carried by a named item, an inline proof step, an already-published
  item, or a concrete RG-5 destination.

  Changed scaffold record: none.  `research/frontier-33-batch-15.pages.json`
  and `research/frontier-33-batch-15.coverage.json` were intentionally left
  byte-for-byte unchanged; no item, plan, library page, workflow state, or
  other batch was touched.

Validation after the disposition:

- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-15.coverage.json` — 3/3 sources fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-33-batch-15.pages.json` — 17 items, 0 missing dependency arrays, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-33-batch-15.coverage.json --require-destination` — 1 page, 32 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-15.pages.json` — 17 scoped items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` — declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 844 pages with item lists.  It reports 511 still-unlisted planned pages as the existing global plan note, not a batch-15 failure.

## Step-5 authoring

Read the required four batch inputs, group-f verdicts and scaffold review, RG-4 design, SCHEMA.md, and tools/proof-contract.mjs. No required input is missing; no pre-existing proof-contract file exists. Re-read current external dependency statements and the induction-model proof. Source reading: tom Dieck §4.2 pp.53–57 through Remark 4.2.7; Späth notation and §1.A pp.1–3 through Remark 1.5; Losev §2.3 pp.9–11 through the final inclusion calculation of Proposition 2.17, plus Theorem 2.8. The archive web extraction failed, but the original Yale RT0_new.pdf supplied the complete same named sections; retain the batch's archived locator and record this access route. Source contents/harvest in the existing coverage file remain unchanged. All mathematical proofs below are locally rewritten from the source-backed route (ai-altered); examples are generated specializations, never dependency suppliers.

The design prerequisite prose differs from the spec chain as already recorded; use the spec. Existing plan and other-batch changes are outside this dispatch. Add direct citations only within owned item dependency lists where the written proof needs them; no plan or workflow edit.

### Authored `def-conjugate-representation-and-inertia-group`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$, where $\operatorname{Irr}(N)$ denotes irreducible complex characters. Using [[def-conjugate-representation-and-conjugate-character]], set $$ {}^g\theta(n)=\theta(g^{-1}ng),\qquad I_G(\theta)=\{g\in G:{}^g\theta=\theta\}. $$ The subgroup $I_G(\theta)$ is the **inertia group**. For $N\le H\le G$, define $$ \operatorname{Irr}(H\mid\theta)=\{\psi\in\operatorname{Irr}(H):\theta\text{ occurs in }\operatorname{Res}_N^H\psi\}. $$ Equivalently the restriction has positive inner product with $\theta$, by [[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]. Such a character **lies over** $\theta$.  Normality ([[def-normal-subgroup]]) ensures that the conjugates are again characters of $N$. Twisting by an automorphism preserves irreducibility. Direct substitution gives ${}^g({}^h\theta)={} ^{gh}\theta$ and ${}^1\theta=\theta$. For $n_0\in N$, the matrices of $n_0^{-1}nn_0$ and $n$ are similar, so their traces coincide: ${}^{n_0}\theta=\theta$. Thus the action factors through $G/N$ and its stabilizer satisfies $N\le I_G(\theta)\le G$. The stabilizer is a subgroup because products and inverses preserve a fixed point. Orbit representatives are indexed by left cosets $gI_G(\theta)$.

Dependencies: `def-conjugate-representation-and-conjugate-character`, `def-normal-subgroup`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 opening pp.53–54; Späth notation p.1 and §1 opening p.2.

Decision: retained planned claim; finite-dimensional complex scope explicit. Well-definedness explained inline. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-normal-isotypical-components-are-permuted-by-translation`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $V$ a finite-dimensional complex $G$-module. For $\theta\in\operatorname{Irr}(N)$ let $V_\theta$ be the sum of all simple $N$-submodules of character $\theta$, with $V_\theta=0$ when that type does not occur. Then $$ gV_\theta=V_{{}^g\theta}\qquad(g\in G). $$ Every $N$-submodule $U\subseteq V$ satisfies $$ U=\bigoplus_{\theta\text{ occurring in }V|_N}(U\cap V_\theta). $$

Dependencies: `def-conjugate-representation-and-inertia-group`, `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, `thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 pp.53–54 before Proposition 4.2.2; Losev Theorem 2.14(2); https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf — Ivan Losev, Representation Theory, Chapter 0. Basics, Theorem 2.14(2) and Proposition 2.17, pp.10–11.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-normal-restriction-constituents-form-one-conjugacy-orbit`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $V$ an irreducible complex $G$-module. If $\theta$ is a constituent of $V|_N$, the constituents of $V|_N$ are exactly the $G$-orbit of $\theta$ under left conjugation, and each has the same positive integer multiplicity.

Dependencies: `lem-normal-isotypical-components-are-permuted-by-translation`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 p.54, Proposition 4.2.2 and following formula; Späth Theorem 1.1.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `thm-clifford-homogeneous-restriction-formula`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $\chi\in\operatorname{Irr}(G\mid\theta)$. Put $I=I_G(\theta)$. There is a positive integer $e$ such that $$ \operatorname{Res}_N^G\chi=e\sum_{gI\in G/I}{}^g\theta,\qquad \chi(1)=e[G:I]\theta(1). $$ Here $G/I$ indexes left cosets, one for each distinct conjugate. In particular, the entire restriction is isotypical precisely when $I=G$; it need not be isotypical in general.

Dependencies: `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `thm-characters-of-direct-sums-tensor-products-and-duals`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.1 p.2; tom Dieck §4.2 p.54.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `def-clifford-ramification-index`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $\chi\in\operatorname{Irr}(G\mid\theta)$. The **ramification index** $e(\chi,\theta)$ is the common positive multiplicity in [[thm-clifford-homogeneous-restriction-formula]]. If $V$ affords $\chi$ and $S$ affords $\theta$, then $$ e(\chi,\theta)=\langle\operatorname{Res}_N^G\chi,\theta\rangle_N=\dim_{\mathbb C}\operatorname{Hom}_N(S,V). $$ The first equality is [[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]] and the second is [[thm-character-inner-product-computes-intertwiner-dimension]], applied to $N$. The formula makes the number independent of the chosen models $S,V$ and constant as $\theta$ varies in its $G$-orbit. It is defined here only for a constituent, so it is always positive.

Dependencies: `thm-clifford-homogeneous-restriction-formula`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`, `thm-character-inner-product-computes-intertwiner-dimension`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 p.54 after Proposition 4.2.2.

Decision: retained planned claim; finite-dimensional complex scope explicit. Well-definedness explained inline. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-normal-isotypical-component-is-inertia-stable`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $V$ an irreducible complex $G$-module, and $\theta$ an occurring constituent of $V|_N$. The setwise stabilizer of the nonzero component $V_\theta$ is exactly $I_G(\theta)$. Consequently $V_\theta$ is an $I_G(\theta)$-module.

Dependencies: `lem-normal-isotypical-components-are-permuted-by-translation`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 p.54 before Proposition 4.2.2.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-induction-from-the-inertia-group-recovers-the-module`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $V$ an irreducible complex $G$-module whose restriction contains $\theta\in\operatorname{Irr}(N)$. Set $I=I_G(\theta)$ and $W=V_\theta$. Then $W$ is irreducible as an $I$-module, and the canonical map $$ \Phi:\operatorname{Ind}_I^G W\longrightarrow V,\qquad f\longmapsto\sum_{t\in T}t f(t) $$ is a $G$-isomorphism. Here $T$ is any left transversal for $G/I$ and induction uses functions satisfying $f(xi)=i^{-1}f(x)$, with $(g f)(x)=f(g^{-1}x)$.

Dependencies: `lem-normal-isotypical-component-is-inertia-stable`, `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `prop-induced-module-decomposes-over-a-left-transversal`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`, `lem-normal-isotypical-components-are-permuted-by-translation`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — Proposition 4.2.2 p.54.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-inducing-an-irreducible-inertia-module-is-irreducible`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. If $W$ is an irreducible complex $I$-module lying over $\theta$, then $W|_N$ is $\theta$-isotypical and $X=\operatorname{Ind}_I^G W$ is irreducible. Its $\theta$-isotypical component is the identity-coset copy of $W$, consisting of the covariant functions supported on $I$.

Dependencies: `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `lem-normal-isotypical-components-are-permuted-by-translation`, `prop-induced-module-decomposes-over-a-left-transversal`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — Theorem 4.2.4(1) pp.55–56; Späth Theorem 1.2.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `thm-clifford-correspondence`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. Induction gives a bijection $$ \operatorname{Irr}(I\mid\theta)\longrightarrow\operatorname{Irr}(G\mid\theta). $$ On module isomorphism classes, the inverse takes the $\theta$-isotypical component. Conjugate normal types give the same target set, and the sets $\operatorname{Irr}(G\mid\theta)$, indexed by distinct $G$-orbits in $\operatorname{Irr}(N)$, partition $\operatorname{Irr}(G)$.

Dependencies: `lem-induction-from-the-inertia-group-recovers-the-module`, `lem-inducing-an-irreducible-inertia-module-is-irreducible`, `thm-clifford-homogeneous-restriction-formula`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.2 p.2; tom Dieck Theorem 4.2.4(1–3,5) pp.55–56.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `cor-normal-subgroup-induction-irreducibility-criterion`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$. Then $$ \left\langle\operatorname{Ind}_N^G\theta,\operatorname{Ind}_N^G\theta\right\rangle_G=[I_G(\theta):N]. $$ In particular, $\operatorname{Ind}_N^G\theta$ is irreducible if and only if $I_G(\theta)=N$.

Dependencies: `def-conjugate-representation-and-inertia-group`, `prop-induced-module-decomposes-over-a-left-transversal`, `cor-frobenius-reciprocity-for-complex-characters`, `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — Proposition 4.2.3 and equations (4.4)–(4.5) pp.54–55.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `cor-clifford-ramification-squares-sum-to-inertia-index`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$. List the distinct characters in $\operatorname{Irr}(G\mid\theta)$ as $\chi_1,\ldots,\chi_r$, and set $e_j=e(\chi_j,\theta)$. Then $$ \operatorname{Ind}_N^G\theta=\sum_{j=1}^r e_j\chi_j,\qquad \sum_{j=1}^r e_j^2=[I_G(\theta):N]. $$

Dependencies: `thm-clifford-correspondence`, `def-clifford-ramification-index`, `cor-normal-subgroup-induction-irreducibility-criterion`, `cor-frobenius-reciprocity-for-complex-characters`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`, `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — Theorem 4.2.4(4), equation (4.7), pp.55–56.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `def-extension-of-an-irreducible-normal-subgroup-representation`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $N\le H\le G$, and $\rho:N\to\operatorname{GL}(S)$ an irreducible complex representation. An **extension** of $S$ to $H$ is a representation $\widetilde\rho:H\to\operatorname{GL}(S)$ on the same space with $\widetilde\rho|_N=\rho$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-sign-representation-and-restriction-of-a-representation]]). At character level an extension of $\theta=\chi_S$ is a character $\widetilde\theta$ with $\operatorname{Res}_N^H\widetilde\theta=\theta$.  Every extension is irreducible: any $H$-stable subspace is $N$-stable, so is zero or all of $S$. Its existence implies invariance under $H$, since $\widetilde\rho(h)$ intertwines the conjugate action with the original one. Extension existence is an additional hypothesis in the correspondence below.  For a representation $M$ of $H/N$, its **inflation** to $H$ is the composite with $H\to H/N$. Conversely an $H$-representation on which $N$ acts trivially descends uniquely to $H/N$, and irreducibility is preserved in both directions, by [[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]. Inflation and extension are different constructions: an extension retains the given, possibly nontrivial, $N$-action.

Dependencies: `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-sign-representation-and-restriction-of-a-representation`, `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57.

Decision: retained planned claim; finite-dimensional complex scope explicit. Well-definedness explained inline. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`

Claim and conventions: Let $N$ be a finite group, let $S$ be an irreducible complex $N$-module with character $\theta$, and let $U$ be a finite-dimensional $\theta$-isotypical $N$-module, allowing $U=0$. Put $M=\operatorname{Hom}_N(S,U)$ and give $M$ the trivial $N$-action. Evaluation is an $N$-isomorphism $$ E_U:S\otimes_{\mathbb C}M\longrightarrow U,\qquad s\otimes f\longmapsto f(s). $$ Every $N$-submodule $U_0\subseteq U$ is $E_U(S\otimes M_0)$ for a unique subspace $M_0\subseteq M$, namely $M_0=\operatorname{Hom}_N(S,U_0)$ viewed inside $M$ by inclusion. If $U^\prime$ is another such module and $M^\prime=\operatorname{Hom}_N(S,U')$, then every $N$-map $U\to U'$ is uniquely $E_{U'}(1_S\otimes a)E_U^{-1}$ for a linear map $a:M\to M^\prime$. These identifications preserve composition.

Dependencies: `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`, `def-tensor-product-of-complex-representations`, `thm-universal-property-of-module-tensor-products`.

Sources: https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf — Ivan Losev, Representation Theory, Chapter 0. Basics — §2.3 Theorem 2.14, Corollary 2.16 and Proposition 2.17 pp.10–11.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `thm-gallagher-correspondence-for-an-extendible-character`

Claim and conventions: Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. Assume that a representation $S$ affording $\theta$ has a fixed extension $\widetilde S$ to $I$. Then $$ \operatorname{Irr}(I/N)\longrightarrow\operatorname{Irr}(I\mid\theta),\qquad \eta\longmapsto\chi_{\widetilde S}\operatorname{Inf}_{I/N}^I\eta $$ is a bijection. Composing it with induction to $G$ gives a bijection onto $\operatorname{Irr}(G\mid\theta)$, and the corresponding $G$-character has ramification index $\eta(1)$ over $\theta$.

Dependencies: `def-extension-of-an-irreducible-normal-subgroup-representation`, `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`, `thm-clifford-correspondence`, `def-clifford-ramification-index`, `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`, `thm-characters-of-direct-sums-tensor-products-and-duals`, `lem-normal-restriction-constituents-form-one-conjugacy-orbit`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3 p.2; tom Dieck Remark 4.2.5 p.57; Losev Corollary 2.16 and Proposition 2.17; https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory, Remark 4.2.5, p.57; https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf — Ivan Losev, Representation Theory, Chapter 0. Basics, Corollary 2.16 and Proposition 2.17, p.11.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `ex-clifford-theory-for-s3-over-a3`

Claim and conventions: Let $G=S_3$, $N=A_3=\langle r\rangle$ with $r=(123)$, and $s=(23)$. Write $\zeta=e^{2\pi i/3}$ and $\lambda(r)=\zeta$. Then $\operatorname{Irr}(N)=\{1,\lambda,\lambda^{-1}\}$, with conjugacy orbits $\{1\}$ and $\{\lambda,\lambda^{-1}\}$ and respective inertia groups $G$ and $N$. The trivial orbit gives the trivial and sign characters of $S_3$. Inducing $\lambda$ gives the standard irreducible representation of degree two, with ramification one and reducible restriction $\lambda+\lambda^{-1}$.

Dependencies: `thm-clifford-correspondence`, `cor-normal-subgroup-induction-irreducibility-criterion`, `thm-gallagher-correspondence-for-an-extendible-character`.

Sources: https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf — Tammo tom Dieck, Representation Theory — §4.2 Theorem 4.2.4 / Proposition 4.2.3; Späth Theorem 1.3 specialized to S3.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `ex-gallagher-correspondence-for-a-direct-product`

Claim and conventions: Let $N,Q$ be finite groups, $G=N\times Q$, and identify $N$ with $N\times\{1\}$. Fix $\theta\in\operatorname{Irr}(N)$ afforded by $S$. Then $I_G(\theta)=G$, and $\widetilde S(n,q)=S(n)$ extends $S$ to $G$. The irreducible $G$-modules above $\theta$ are exactly, without repetitions, the modules $S\boxtimes U$ for $U\in\operatorname{Irr}(Q)$, where $$ (n,q)(s\otimes u)=(ns)\otimes(qu). $$ Their ramification indices are $\dim U$.

Dependencies: `thm-gallagher-correspondence-for-an-extendible-character`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.3; tom Dieck Remark 4.2.5 specialized to a direct product.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

### Authored `ex-clifford-boundaries-n-equals-one-and-n-equals-g`

Claim and conventions: Let $G$ be any finite group. At $N=1$, the sole normal type is $\theta=1$ and inertia is $G$; an irreducible character $\chi$ restricts to $\chi(1)$ copies of this type, so $e(\chi,1)=\chi(1)$. Clifford induction is identity on $\operatorname{Irr}(G)$. At $N=G$ and $\theta\in\operatorname{Irr}(G)$, inertia is again $G$, the lying-over set is the singleton $\{\theta\}$, and $e(\theta,\theta)=1$; the correspondence is the singleton identity.

Dependencies: `thm-clifford-correspondence`, `def-clifford-ramification-index`, `thm-gallagher-correspondence-for-an-extendible-character`.

Sources: https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf — Britta Späth, Reduction theorems for some global-local conjectures — Theorems 1.1–1.3; tom Dieck Theorem 4.2.4 boundary specializations.

Decision: retained planned claim; finite-dimensional complex scope explicit. Proof rows and exact dependency-quote contract written; boundary obligations recorded. Status draft; no judge record. Focused validation pending. Next action: author the next assigned item, then validate the complete batch.

All 17 assigned items and both representation-theory pages are now authored as draft. No claim was dropped or narrowed beyond spelling out the planned finite-dimensional complex scope. Direct dependencies added: translation to reconstruction; character multiplicity to the induction norm criterion; the orbit lemma to Gallagher. Reference URLs in the manifest/items now match the recovered Späth and Losev coverage URLs. Plan structure, coverage, independent reviews, workflow state, published content and other batches were not edited. Next action: focused precheck, canonical repair if requested, plan, content-policy, and strict proof-contract checks.

### Initial validation and canonical repair

Content-policy passed with 17 items, 0 errors/warnings. Strict proof-contract passed with 14/14 proof-bearing items, 0 errors/warnings. The first focused precheck ran all 17 explicit manifest paths and requested canonical phase renumbering for all 14 proof-bearing items. Applied its canonical numbering, also updating prose step ranges and every contract use, derivation, and boundary reference. Reconstruction uses the conventional superscript prime for transversal representatives. The correspondence partition proof now explicitly obtains a constituent via a minimal-dimensional nonzero N-submodule, so existence does not rely on a conditional restriction formula.

The bare requested `node tools/validate-plan.mjs` printed usage (it requires a plan argument), so it was rerun as `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, acyclic and consistent, no item-level cycles, forward references, B-page dependencies, or unresolved ids among 892 pages with item lists; 463 planned pages still unlisted. Existing redundant-prerequisite warnings remain outside this batch. Final reruns and focused rendering remain pending.

### Final Step-5 validation and disposition

- Focused `node tools/tsx-run.mjs tools/precheck.mts` was rerun with all 17 explicit `items/ID.md` paths read from this batch manifest: exit 0; 14 proof-bearing items checked, 0 failing. Three definitions have inline well-definedness text and no phase-format proof. The canonical repair is stored, not merely accepted in memory.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; current plan order and item dependency graph consistent, with the previously recorded global unlisted-page note and redundant-prerequisite warnings. No plan change was made.
- `node tools/content-policy.mjs research/frontier-33-batch-15.pages.json`: exit 0; 17 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-15.proof-contracts.json --strict`: exit 0; 14/14 proof-bearing items, 0 errors, 0 warnings. Exact current dependency sections are quoted, every fact use and proof row is mapped, and all eight boundary axes have item-specific dispositions.
- Focused `node tools/rendercheck.mjs` with all 17 item paths and both page paths: exit 0; 19 files, all math spans parse with real KaTeX and all frontmatter parses with the renderer YAML parser.
- Direct scope check: all 17 authored items and both pages are draft; contracts cover exactly the 14 proof-bearing items; no judge records exist in these artifacts. No verification or publication stamps were written.

Output manifest: `research/frontier-33-batch-15.pages.json`. Pages: `library/representation-theory/clifford-theory-over-normal-subgroups.md` and `library/representation-theory/clifford-theory-over-normal-subgroups-examples.md`. The authored IDs, exact claims/conventions, dependency IDs, sources/locators and per-item decisions appear in the 17 checkpoints above; proof-step locators are those in the final contracts after canonical renumbering.

Provenance: theory statements retain literature-derived provenance; definitions have proof not-applicable; local proofs and verifications are ai-altered adaptations using the explicitly checked left-function induction and multiplicity-space arguments. The three examples retain generated statements with generation.role example and are not dependency targets. Source URL alignment uses the coverage's same-document recoveries. No historical contracts or finite smoke checks were used as mathematical evidence.

Narrowed/dropped claims: none. The finite-dimensional complex hypotheses are explicit, normal restriction is a full orbit sum, and Gallagher assumes an actual extension. Projective extension material remains outside the assigned pair. Blockers and unresolved authoring obligations: none. No independent verdict or hash gate was edited; independent review and publication remain outside this authoring dispatch. Next action: return the completed draft batch to the build driver.

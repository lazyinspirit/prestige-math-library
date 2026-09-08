# frontier-34 — beta batch-13 scaffold notes

**Verdict: BLOCKED / NOT READY FOR AUTHORING OR PUBLICATION.** The assigned A/B scaffold and source harvest are written, but mathematical supplier closure and machine fetch verification are not complete. Resolving item IDs and passing syntax gates do not resolve these findings.

## Authority, snapshot, and outputs

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the beta scaffold task and generated batch-13 task, the complete RL-5 design at research/plan-representation-theory-lie-track.md lines 394–440, its surrounding conventions, the current plan, and owned evidence. After context handoffs the owned scaffold, source records, supplier statements and open obligations were reread. Only the three authorized batch-13 files were written in the repository. Temporary scripts/check outputs were written under /tmp. No published item, plan, design, engine state, or other batch was changed. No commit or publication was attempted.

Current plan controls: A order 510.009 and B order 510.01, category lie-theory; requires exactly the dispatch's four suppliers. Both plan inventories are empty, so validate-plan does not validate the proposed 40 items. The design's old claim that its predecessors are all unbuilt is stale: relevant suppliers are now published. The plan already has unrelated workspace changes; they were not authored by this batch.

The requested engine status command failed with ERR_UNKNOWN_FILE_EXTENSION (.mts). Retrying with --experimental-strip-types failed with ERR_NO_TYPESCRIPT in Node 22.22.1. Read-only fallback found .autopilot/state.json naming frontier-23, stage 5-author, and a stale root status.md; these do not certify this dispatch's live stage. Git HEAD was 4501527a0, following ee067e69c and f854a7b88 (frontier-33 publication). This work follows the explicit frontier-34 dispatch; no RESUME file was used as authority and no engine transition was attempted.

The manifest contains 33 A items and 7 B items, below the 60-item A ceiling. Every item has an explicit deps array, a precise statement and source/provenance; nondefinitions have proof routes. Coverage has 92 harvested/canonical rows and four source texts (three independent authors, including a monograph and complete lecture notes).

## Design reconciliation and exact mathematical changes

There is no A/B identity, category, page-order, or requires conflict with the current plan. Changes to the generated design inventory are corrections and proof prerequisites, not modifications of the canonical plan.

- Replace the unused misleading ID lem-a-sufficiently-antidominant-verma-is-projective-in-a-truncation by lem-a-maximal-weight-verma-is-projective-in-a-truncation. No alias is installed: the old proposed adjective gives the wrong full-block direction. A maximal allowed weight has exact weight evaluation; a dot-dominant block-maximal Verma is projective.
- Correct the designed counterexample: in the principal sl2 block Delta(0) is projective, while Delta(-2) is not. Retain the useful counterexample under its neutral original ID. Add a separate example showing Delta(-2) projective in O^{<=-2} but not in the full block.
- A downward weight cone is infinite. Define a truncation by a finite union of downward cones, distinguish this from a finite ideal of simple labels in a block, and never assert finitely many weights in such a cone.
- Keep BOTH required projective constructions: finite Borel induction/weight-evaluation representers and the sufficiently positive finite-dimensional tensor construction. The latter remains blocked by F13-1 below. No tensor preservation assertion is made for an arbitrary fixed truncation.
- Insert essential-cover definition, finite-length Fitting lemma, lift onto standards, exact block projection, tensor identity, maximal-weight peeling and direct-summand closure before projective flags. A singular vector of arbitrary weight does not satisfy the maximal-weight peeling lemma; require maximal support weight explicitly.
- Derive flag independence from the existing standard K0 basis. Obtain projective flags before their triangular label bound; prove that bound from BGG reciprocity so the argument does not assume its conclusion.
- Build enough injectives by the exact restricted duality BEFORE using balanced Ext. Prove standard/costandard Ext-one vanishing for ALL pairs of weights (equal and incomparable included), followed by Hom counts and reciprocity. Add kernel closure and the full Ext-orthogonality criterion with its dimension-shifting proof route.
- Work over C, finite-dimensional semisimple g, positive Borel, and mu<=lambda iff lambda-mu is in Q+. D denotes the weight-preserving Chevalley restricted dual; E* denotes the ordinary finite-dimensional dual. Use ZFC and supplied resolutions. All Ext is INTERNAL to O: the published abelianness theorem requires the middle term to be h-semisimple; it does not assert extension closure in all g-modules. For the Yoneda comparison, encode extension actions on a fixed split underlying vector space to prove the extension classes form a set.
- State translation using actual highest-weight labels, not shifted parameters. Pair tensor E with tensor E*, not an unjustified ordinary self-duality. For the two-factor theorem require integral dot-antidominant regular lambda and mu on a single wall of its chamber closure, with stabilizer {1,s}. The larger standard is the submodule on return. The corresponding return-coset multiplicity statement remains included; no general functor equality is inferred from a character identity.
- Insert the full facet-closure tensor-weight exclusion lemma; a character expansion alone does not establish which summands survive projection. Its chamber and root-string inputs are F13-2, not supplied by a definition of W.
- B includes all five designed tests, plus quotient failure and the ambient-truncation comparison. Specify matrix axes: standard-composition D=[[1,1],[0,1]], projective-flag F=D^t. The nonsplit P(-2) has head/socle L(-2) and middle L(0); an extra socle outside Delta(0) would split the simple quotient.
- Correct source locators: Etingof 18.757 §16.1 is dominance, §16.2 abstract projectives and §16.3 projectives in O. §20.1 is Ext vanishing, §20.2 standard filtrations, §20.3 reciprocity, §20.4 duality; the design's §20 labels cannot be used verbatim. The final harvest uses Chen's exact named proofs for the reciprocity route and Humphreys's complete translation proof rather than the design's loose ranges.
- Chen Lecture 8 footnote 7's root-tuple direct-sum formula is not used for noncommutative n+. PBW gives finite-dimensional augmentation quotients directly. Chen Lecture 8's abstract cover Hom formula is specialized to O over C, where the simple highest line gives End(L)=C.

## Fatal findings and dependency paths

### F13-1 — finite-dimensional existence is assumed by the published supplier

Fully read items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md. Its only deps are the definitions of highest-weight vector, root reflections/W, and fundamental weights. The unlinked F1 assumes uniqueness/existence of the simple highest-weight module. Unlinked F2 assumes exactly that dominant integral L(lambda) is finite-dimensional, and proof step 3.1 invokes F2 to obtain the existence half of the theorem. This is inadequate as a proved supplier, irrespective of its published pass stamp.

Direct paths:

- cor-enough-projectives-by-finite-dimensional-tensoring -> thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights (requires the existence of E=L(N rho)).
- def-translation-functor-between-o-blocks -> the same supplier (requires L(eta) for the dominant conjugate of the weight difference).
- thm-translation-to-and-from-a-wall-on-standard-modules -> lem-facet-closure-excludes-other-tensor-weights -> the same supplier.

Etingof's author-hosted Lie Groups and Lie Algebras notes, https://math.mit.edu/~etingof/lnlg.pdf, §24.3 printed pp.109–110, Lemmas 24.15–24.16 and Theorem 24.17, provide the relevant full argument, read through its ending: singular-root relations, propagation of rank-one local finiteness, W-invariance of weight multiplicities, and bounded dominant weights. This is audit evidence for a replacement proof, not a load-bearing external reference.

### F13-2 — root/chamber and extremal-weight geometry is missing or inadequately linked

Fully read items/thm-the-root-set-is-a-reduced-crystallographic-root-system.md. Step 1.1 uses solvable triangularization without a dependency, and steps 2.1–3.1 use finite-dimensional sl2 complete reducibility/string classification without a dependency. Its four deps give root decomposition and Killing-form data, not those representation theorems. The reflection definition itself proves neither chamber fundamental domains nor extremal weights of L(eta).

Affected paths and required strength:

- lem-integral-root-subsystem-dominance-gives-a-maximal-linkage-weight -> definition of the integral Weyl group / reflection action: needs reflection-closed integral roots, inherited positives, dominant orbit difference, and positive rho shift. Do not identify the reflection group with a root-lattice-coset stabilizer without proof.
- def-translation-functor-between-o-blocks -> reflection definition: needs existence and uniqueness of the dominant conjugate.
- prop-translation-functors-are-exact-and-biadjoint-across-a-wall -> reversed translation: needs the ordinary-dual highest weight -w0 eta.
- lem-facet-closure-excludes-other-tensor-weights -> reflection definition and finite-dimensional classification: needs root-string intermediate weights, W-invariant weight multiplicities, multiplicity-one extremal weights, and separating-wall geometry.

Humphreys §7.5 Key Lemma pp.135–137 was read in full, including all fourteen proof steps; §7.6 pp.137–138 and §7.12 pp.144–145 were read in full. These show exactly where the above local inputs are used. Etingof lnlg.pdf §§20.3–20.4 and §21.1 printed pp.93–96 were additionally read through Corollary 21.6 to verify the proposed chamber prerequisite scope. The replacement proof must explicitly handle boundary-orbit uniqueness, not merely cite simple transitivity on open chambers.

### Proposed prerequisite A/B package — cannot install within writable scope

Add both pairs below to research/plan-representation-theory-lie-track.md and research/plan-spec.json in the indicated proof order, then add the second B page to the consumer's requires. These shared supplier replacements lie outside the assigned RL-5 ownership (the design reserves rank-one/root and finite-dimensional highest-weight theory to DG); installing them locally in RL-5 would not repair its earlier transitive consumers. The present dispatch may record these proposals but cannot write those two controlling files or repair published suppliers.

The inventories are complete specifications of the missing package, not an assertion that those new pages have been authored, independently source-harvested, or semantically closed. They need their own two-treatment source verification. Their external prerequisites must themselves pass the full semantic audit; in particular the root-decomposition spine cannot be treated as valid merely because it resolves. No proposed item may rely on the inadequate classification or root-axiom theorem it replaces. If a preexisting prerequisite reaches either through an unneeded dependency, an authorized upstream repair is also required.

Both proposed A pages are below the 60-item limit; the proposed orders and all item IDs were checked against the current plan, published item filenames and all research JSON files and were unused. The following JSON records title, category, placement, prerequisites, A/B inventories, and explicit deps including empty arrays. Statements include the necessary proof obligations for the eventual scaffold writer.

```json
[
  {
    "id": "rank-one-representations-and-root-chamber-geometry",
    "title": "Rank-one representations and root chamber geometry",
    "kind": "A",
    "category": "lie-theory",
    "order": 510.0081,
    "companion": "rank-one-representations-and-root-chamber-geometry-examples",
    "requires": [
      "lie-algebra-representations-enveloping-algebras-and-pbw-examples",
      "solvable-and-nilpotent-lie-algebras-examples",
      "cartan-subalgebras-and-root-space-decompositions-examples"
    ],
    "items": [
      {
        "id": "def-rank-one-triple-and-integrable-weight-module",
        "kind": "definition",
        "statement": "An sl2 triple satisfies [h,e]=2e, [h,f]=-2f, [e,f]=h. A weight module is integrable for the triple when e and f are locally nilpotent.",
        "deps": []
      },
      {
        "id": "lem-rank-one-string-action-formula",
        "kind": "lemma",
        "statement": "On a vector v with ev=0 and hv=mv, e f^j v=j(m-j+1)f^{j-1}v and h f^j v=(m-2j)f^j v.",
        "deps": [
          "def-rank-one-triple-and-integrable-weight-module"
        ]
      },
      {
        "id": "thm-finite-dimensional-rank-one-modules-from-strings",
        "kind": "theorem",
        "statement": "Every finite-dimensional complex sl2-module is a direct sum of the explicit highest-weight modules of weights m in N0. Prove semisimplicity by the rank-one Casimir and splitting extensions, without finite-dimensional semisimple-g classification.",
        "deps": [
          "lem-rank-one-string-action-formula"
        ]
      },
      {
        "id": "lem-nonzero-root-killing-length-and-normalized-triples",
        "kind": "lemma",
        "statement": "For a root alpha of a complex semisimple g, alpha(H_alpha) is nonzero and opposite root vectors can be normalized to an sl2 triple. Supply the solvable triangularization argument explicitly.",
        "deps": [
          "prop-opposite-root-spaces-bracket-to-the-killing-dual-line",
          "def-rank-one-triple-and-integrable-weight-module"
        ]
      },
      {
        "id": "thm-root-axioms-from-rank-one-strings",
        "kind": "theorem",
        "statement": "Root spaces are one-dimensional and the roots form a finite reduced crystallographic root system with positive definite real form; derive every axiom from root decomposition and the previous rank-one theorems. Do not cite the inadequate published root-system theorem.",
        "deps": [
          "lem-nonzero-root-killing-length-and-normalized-triples",
          "thm-finite-dimensional-rank-one-modules-from-strings",
          "thm-root-space-decomposition-relative-to-a-cartan-subalgebra"
        ]
      },
      {
        "id": "lem-positive-root-bases-and-simple-reflection-signs",
        "kind": "lemma",
        "statement": "Indecomposable positive roots form a basis with nonnegative integral expansions for positive roots; a simple reflection permutes all positive roots other than its own root.",
        "deps": [
          "thm-root-axioms-from-rank-one-strings"
        ]
      },
      {
        "id": "def-root-chambers-facets-and-separating-wall-distance",
        "kind": "definition",
        "statement": "Chambers are components of the complement of root hyperplanes; facets fix all root-pairing signs; distance counts separating hyperplanes.",
        "deps": [
          "lem-positive-root-bases-and-simple-reflection-signs"
        ]
      },
      {
        "id": "thm-weyl-chamber-fundamental-domain-from-reflections",
        "kind": "theorem",
        "statement": "Simple reflections generate W; W acts simply transitively on chambers, and each real W-orbit meets a fixed closed chamber in exactly one point. Prove wall-boundary uniqueness as well as the open-chamber assertion.",
        "deps": [
          "def-root-chambers-facets-and-separating-wall-distance"
        ]
      },
      {
        "id": "lem-dominant-orbit-differences-and-longest-element",
        "kind": "lemma",
        "statement": "For dominant real xi, xi-w xi lies in the nonnegative real simple-root cone, integrally when xi is integral. There is a longest element w0 taking positive roots to negative roots, with w0^2=1.",
        "deps": [
          "thm-weyl-chamber-fundamental-domain-from-reflections",
          "lem-positive-root-bases-and-simple-reflection-signs"
        ]
      },
      {
        "id": "lem-rho-integrality-and-positive-coroot-pairings",
        "kind": "lemma",
        "statement": "The half-sum rho of positive roots pairs to one with each simple coroot and positively with every positive coroot.",
        "deps": [
          "lem-positive-root-bases-and-simple-reflection-signs"
        ]
      },
      {
        "id": "lem-integral-reflection-roots-form-a-root-subsystem",
        "kind": "lemma",
        "statement": "For a complex weight xi, roots with integral xi-coroot pairing form a reflection-closed finite root subsystem, with its inherited positive system; use only its reflection-generated Weyl group.",
        "deps": [
          "thm-root-axioms-from-rank-one-strings",
          "lem-positive-root-bases-and-simple-reflection-signs"
        ]
      }
    ]
  },
  {
    "id": "rank-one-representations-and-root-chamber-geometry-examples",
    "title": "Rank-one representations and root chamber geometry \u2014 Examples",
    "kind": "B",
    "category": "lie-theory",
    "order": 510.0082,
    "companion": "rank-one-representations-and-root-chamber-geometry",
    "requires": [
      "rank-one-representations-and-root-chamber-geometry"
    ],
    "items": [
      {
        "id": "ex-rank-one-strings-and-chamber-endpoints",
        "kind": "example",
        "statement": "Compute the strings in L(0), L(1), L(2), the two A1 chambers and the unique orbit representative on their common boundary.",
        "deps": [
          "thm-finite-dimensional-rank-one-modules-from-strings",
          "thm-weyl-chamber-fundamental-domain-from-reflections"
        ]
      },
      {
        "id": "ex-a2-root-chambers-and-rho-pairings",
        "kind": "example",
        "statement": "List the six A2 chambers, their simple reflections and rho pairings, checking open chambers and wall facets separately.",
        "deps": [
          "thm-weyl-chamber-fundamental-domain-from-reflections",
          "lem-rho-integrality-and-positive-coroot-pairings"
        ]
      }
    ]
  },
  {
    "id": "integrable-highest-weight-modules-and-extremal-weight-geometry",
    "title": "Integrable highest-weight modules and extremal weight geometry",
    "kind": "A",
    "category": "lie-theory",
    "order": 510.0085,
    "companion": "integrable-highest-weight-modules-and-extremal-weight-geometry-examples",
    "requires": [
      "rank-one-representations-and-root-chamber-geometry-examples",
      "verma-modules-and-shapovalov-forms-examples"
    ],
    "items": [
      {
        "id": "lem-dominant-simple-highest-weight-root-relations",
        "kind": "lemma",
        "statement": "In the unique simple highest-weight quotient L(lambda), for dominant integral lambda, f_i^{lambda(h_i)+1}v_lambda=0 for each simple root.",
        "deps": [
          "thm-verma-module-has-a-unique-simple-quotient",
          "lem-rank-one-string-action-formula",
          "lem-positive-root-bases-and-simple-reflection-signs"
        ]
      },
      {
        "id": "lem-highest-weight-integrability-propagates-through-pbw",
        "kind": "lemma",
        "statement": "The preceding relations imply every vector of L(lambda) generates a finite-dimensional module for each simple-root sl2: propagate through finite PBW products using the finite-dimensional adjoint action.",
        "deps": [
          "lem-dominant-simple-highest-weight-root-relations",
          "thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra",
          "thm-finite-dimensional-rank-one-modules-from-strings"
        ]
      },
      {
        "id": "lem-integrable-weight-multiplicities-are-weyl-invariant",
        "kind": "lemma",
        "statement": "For a weight g-module with finite weight spaces, locally finite for every simple-root sl2, dim V_mu=dim V_wmu for all w in W.",
        "deps": [
          "lem-highest-weight-integrability-propagates-through-pbw",
          "thm-finite-dimensional-rank-one-modules-from-strings",
          "thm-weyl-chamber-fundamental-domain-from-reflections"
        ]
      },
      {
        "id": "lem-dominant-weights-below-a-fixed-weight-are-finite",
        "kind": "lemma",
        "statement": "For fixed dominant integral lambda, only finitely many dominant integral mu satisfy lambda-mu in Q+. Prove a positive linear bound on their fundamental-weight coordinates.",
        "deps": [
          "lem-dominant-orbit-differences-and-longest-element",
          "lem-rho-integrality-and-positive-coroot-pairings"
        ]
      },
      {
        "id": "thm-finite-dimensional-highest-weight-existence-from-integrability",
        "kind": "theorem",
        "statement": "The simple Verma quotient L(lambda) is finite-dimensional for every dominant integral lambda. Bound support by W-translates of the preceding finite dominant set and use finite Verma weight spaces.",
        "deps": [
          "lem-integrable-weight-multiplicities-are-weyl-invariant",
          "lem-dominant-weights-below-a-fixed-weight-are-finite",
          "thm-pbw-model-of-a-verma-module"
        ]
      },
      {
        "id": "lem-finite-simple-extremal-weights-and-root-string-convexity",
        "kind": "lemma",
        "statement": "In finite-dimensional L(eta), every w eta is a multiplicity-one weight. Along any root direction, weights fill the rank-one strings required for reflection and intermediate-weight arguments; all weights lie below eta and their dominant translates do too.",
        "deps": [
          "thm-finite-dimensional-highest-weight-existence-from-integrability",
          "lem-integrable-weight-multiplicities-are-weyl-invariant",
          "thm-finite-dimensional-rank-one-modules-from-strings",
          "lem-nonzero-root-killing-length-and-normalized-triples",
          "prop-weights-of-a-verma-module-lie-below-lambda"
        ]
      },
      {
        "id": "lem-ordinary-dual-highest-weight-is-minus-longest-weight",
        "kind": "lemma",
        "statement": "For finite-dimensional L(eta), the ordinary dual has highest weight -w0 eta and is simple; distinguish this dual from the weight-preserving Chevalley restricted dual.",
        "deps": [
          "lem-finite-simple-extremal-weights-and-root-string-convexity",
          "lem-dominant-orbit-differences-and-longest-element"
        ]
      }
    ]
  },
  {
    "id": "integrable-highest-weight-modules-and-extremal-weight-geometry-examples",
    "title": "Integrable highest-weight modules and extremal weight geometry \u2014 Examples",
    "kind": "B",
    "category": "lie-theory",
    "order": 510.0086,
    "companion": "integrable-highest-weight-modules-and-extremal-weight-geometry",
    "requires": [
      "integrable-highest-weight-modules-and-extremal-weight-geometry"
    ],
    "items": [
      {
        "id": "ex-rank-one-integrability-finiteness-check",
        "kind": "example",
        "statement": "Apply the finite-dimensional existence argument to the quotient of Delta(m) by its singular-vector submodule for m in N0.",
        "deps": [
          "thm-finite-dimensional-highest-weight-existence-from-integrability",
          "lem-rank-one-string-action-formula"
        ]
      },
      {
        "id": "cex-nondominant-simple-verma-need-not-be-finite-dimensional",
        "kind": "counterexample",
        "statement": "For sl2, Delta(-2)=L(-2) is infinite-dimensional; dominant integrality is essential for the existence theorem.",
        "deps": [
          "lem-rank-one-string-action-formula",
          "thm-pbw-model-of-a-verma-module"
        ]
      },
      {
        "id": "ex-sl3-ordinary-dual-and-chevalley-dual-differ",
        "kind": "example",
        "statement": "The standard sl3 module has ordinary dual highest weight omega2 but Chevalley restricted dual highest weight omega1.",
        "deps": [
          "lem-ordinary-dual-highest-weight-is-minus-longest-weight",
          "lem-simple-highest-weight-modules-are-restricted-self-dual"
        ]
      }
    ]
  }
]
```

Consumer rewiring after installation: use thm-finite-dimensional-highest-weight-existence-from-integrability in the tensor construction and translation definition; add thm-weyl-chamber-fundamental-domain-from-reflections for dominant representatives; add lem-integral-reflection-roots-form-a-root-subsystem, lem-dominant-orbit-differences-and-longest-element and lem-rho-integrality-and-positive-coroot-pairings to integral-subsystem dominance; add lem-ordinary-dual-highest-weight-is-minus-longest-weight to reversed translation; add lem-finite-simple-extremal-weights-and-root-string-convexity and the chamber theorem to facet exclusion. Current resolving deps remain recorded for diagnosis and MUST NOT be mistaken for adequate proof dependencies. The consumer remains blocked until these pairs are installed and the entire closure passes.

### F13-3 — full transitive semantic closure is not certified

A custom read-only graph traversal expanded the A-page requires closure through the current plan and item deps through the plan, all available research/*batch-*.pages.json manifests and published YAML. Published items took precedence over historical scaffold claims. It found 233 pages, 5,310 item IDs and 358 manifest files, with no missing page, missing deps ID or deps cycle. Historical manifests were searched as evidence, not certified suppliers. This traversal does not compare every historical statement revision or prove the adequacy of all 5,310 statements. It also does not substitute for a complete justified_by/load-bearing-forward_refs semantic walk. The exact local sources above were audited, but the complete transitive semantic audit remains an open fatal obligation. It is not permissible to call this scaffold ready based on structural resolution.

The broad page closure includes the following recorded-unproved remarks (being in a required page does not alone prove a load-bearing item path):
- `rem-metric-spaces-have-sigma-discrete-bases`
- `rem-sigma-locally-finite-base-produces-compatible-normal-sequence`
- `rem-strong-whitney-embedding-theorem`
- `rem-strong-whitney-immersion-theorem`
- `rem-the-freyd-mitchell-embedding-theorem`

The owned pages are lie-theory, not Foundations. extcheck found no forbidden Foundations catalogue bootstrapping error in its implemented check. A full semantic certification across all requires, deps, justified_by and load-bearing forward_refs was NOT completed here; F13-3 remains blocking, and no deferred-set-theory catalogue item is introduced as a supplier by this scaffold.

## Source evidence, dispositions, and fetch blocker F13-4

Each source record in coverage identifies exact locators and harvested result dispositions; canonical rows link each included item to support. The browser returned complete parsed passages for the declared ranges, not only snippets or abstracts. Screenshot requests were not relied upon when they failed. The four retained texts are:

- Pavel Etingof, Representations of Lie Groups: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design.

- Lin Chen, Geometric Representation Theory I, Lecture 8: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf — §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read.

- Lin Chen, Geometric Representation Theory I, Lecture 9: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf — §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings.

- James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf — §7.5 Key Lemma pp.135–137, §7.6 pp.137–138, §7.12 pp.144–145; complete relevant proofs read.

Etingof supplies the two enough-projectives routes, covers, and Hom multiplicities; Chen supplies the full filtration/Ext/reciprocity proofs and translation constructions; Humphreys supplies the complete key lemma and return-translation proof where Chen gives only a sketch. Out-of-scope rows retain explicit reasons: abstract highest-weight/tilting theory, arbitrary same-facet equivalences, upper-closure formulas for all simple modules, and higher-rank big-projective theory exceed this pair and are not used as shortcuts. The specified sl2 calculations remain included. No useful designed result was removed to make a check pass.

No fetch hash, timestamp, or successful byte-verification stamp was invented. All four URLs were readable through the browser, but the mandated shell source-fetch and URL-sweep tools cannot resolve hosts (EAI_AGAIN / curl code 6). The attempted non-www Humphreys mirror returned 404 in the browser; the retained www URL opens the same book. No source was replaced by a different treatment merely to satisfy liveness, and no original_url provenance was discarded. The additional author-hosted lnlg.pdf is audit evidence for prerequisite findings only, not a fifth claimed fetch-verified authored source.

F13-4 remains fatal to readiness: the machine liveness ledger reports 0/4 live, source-fetch has 0/4 verified/stamped, and source-backing consequently reports 29 authored results with no openable source in that ledger. This is a network-verification failure, not evidence that the mathematics or those browser-accessible texts disappeared. Rerun the tools in a functioning network environment without dropping results.

## Checks actually run

Initial checks before other batches changed: coverage 1 page/92 rows passed; whole-run manifest-deps 693 items passed; whole-run manifest-only content-policy failed with 108 errors, none identifying this batch's 40 item IDs; validate-plan and extcheck passed with the qualifications below. After the final proof-route edits, the five structural checks were rerun; the exact final results are:

| Command | Result and limitation |
|---|---|
| node tools/coverage-checklist.mjs research/frontier-34-batch-13.coverage.json --require-destination | PASS: 1 page, 92 harvested rows, 0 errors/warnings. Does not prove source or mathematical adequacy. |
| node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json | PASS: 769 items, 0 normalized, 0 errors. Concurrent other-batch additions account for count changes. |
| node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json | FAIL (exit 1): 769 scoped items, 100 errors, 0 warnings. None names an owned item as the diagnostic subject. Full initial and final diagnostics follow. |
| node tools/validate-plan.mjs research/plan-spec.json | PASS: 892 pages with item inventories; 579 empty planned pages have only page-order checks. Owned proposed inventories are not spliced. |
| node tools/extcheck.mjs --quiet | PASS (exit 0), with recorded-unproved published-consequence warnings. Does not discharge F13-1–3. |
| node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-13.coverage.json --stamp --timeout-sec 10 | FAIL: 0/4 newly verified; EAI_AGAIN for all four sources; no stamp written. |
| node tools/url-sweep.mjs --coverage research/frontier-34-batch-13.coverage.json --out /tmp/f34b13-url-liveness.json --fail-on-dead | FAIL: 0/4 live in ledger, four DNS resolution failures (curl 6). |
| node tools/source-backing.mjs --coverage research/frontier-34-batch-13.coverage.json --liveness /tmp/f34b13-url-liveness.json --require-verified | FAIL: 29 authored results backing-lost in that DNS-failed ledger. Full diagnostics follow. |
| node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-13.coverage.json | FAIL: 0/4 fetch stamps; verification remains open. |
| python3 /tmp/f34b13-audit.py | Structural traversal only: 233 pages, 5,310 item IDs, 358 manifests; no unresolved deps or cycles. Semantic and edge-type limitations are F13-3. |

No authoring precheck, proof judge, rendering check, publication gate or source hash verification passed or was claimed. The default and strip-types engine status command failures are recorded above.

## Exact diagnostics and evidence fingerprints

These diagnostics are retained in the named authorized notes artifact so a handoff does not depend on temporary files. Source-backing rows identify every affected source/result. Nonowned gate failures are recorded without attempting changes outside this dispatch.

<details>
<summary>Initial whole-run content-policy failure</summary>

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [lem-irrational-circle-orbits-are-dense]: lem-irrational-circle-orbits-are-dense depends on thm-pigeonhole-general, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-binary-sequence-cylinders-and-fair-coin-content]: def-binary-sequence-cylinders-and-fair-coin-content depends on def-algebra-of-sets, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-c-one-boundary-domain-outward-normal-and-surface-integral]: def-c-one-boundary-domain-outward-normal-and-surface-integral depends on def-total-derivative, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-c-one-boundary-domain-outward-normal-and-surface-integral]: def-c-one-boundary-domain-outward-normal-and-surface-integral depends on thm-chain-rule-total, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-laplace-fundamental-solution-is-harmonic-off-its-pole]: lem-laplace-fundamental-solution-is-harmonic-off-its-pole depends on thm-chain-rule-total, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-distributional-derivatives-commute-with-convolution-against-test-functions]: lem-distributional-derivatives-commute-with-convolution-against-test-functions depends on thm-multi-index-taylor, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-neumann-solutions-are-unique-modulo-componentwise-constants]: cor-neumann-solutions-are-unique-modulo-componentwise-constants depends on thm-zero-derivative-implies-constant, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-tonelli, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-lebesgue-change-of-variables, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-the-round-metric-on-the-sphere-as-an-induced-metric]: ex-the-round-metric-on-the-sphere-as-an-induced-metric depends on thm-regular-level-set-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-full-euclidean-lattice-and-covolume]: def-full-euclidean-lattice-and-covolume depends on def-linear-independence-and-basis, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-linear-system-base-locus]: def-linear-system-base-locus depends on def-module-sheaf-over-ringed-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-equal-point-maps-not-equal-scheme-morphisms]: cex-equal-point-maps-not-equal-scheme-morphisms depends on def-complex-conjugate, which is neither declared by this batch nor an item on disk
content-policy: 693 scoped item(s), 108 error(s), 0 warning(s)
```

</details>

<details>
<summary>Final whole-run content-policy failure</summary>

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds]: cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
content-policy: 769 scoped item(s), 100 error(s), 0 warning(s)
```

</details>

<details>
<summary>Source-backing failure</summary>

```text
source-backing: 29 authored result(s) have no openable source left
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-integral-root-subsystem-dominance-gives-a-maximal-linkage-weight — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    "16.1 Dominant weights; Corollary 16.1" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: thm-category-o-has-enough-projectives — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "16.2 Projective objects; finite-length induction" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
    "Theorem 4.3, projective half" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: prop-projective-covers-in-o-are-indecomposable-and-unique — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Proposition 16.2(i)" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
    "Theorem 4.4; Notation 4.7; Appendix A" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-hom-from-projectives-counts-simple-composition-factors — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Proposition 16.2(ii)" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
    "Corollary 4.9" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-a-maximal-weight-verma-is-projective-in-a-truncation — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    "16.3 Projective objects in O; Proposition 16.4" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    "Corollary 16.5" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: cor-enough-projectives-by-finite-dimensional-tensoring — backed only by https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    "Corollary 16.6(i)" via Pavel Etingof, Representations of Lie Groups @ §16.1–16.3, printed pp.84–87, complete proofs; source headings corrected from design
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-standard-costandard-hom-and-ext-vanishing — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Lemma 3.14; Remark 3.15" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
    "Lemma 3.16" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: def-projective-cover-in-category-o — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Definition 4.1" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: cor-category-o-has-enough-injectives — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Definition 4.2; Theorem 4.3, injective half" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-projective-covers-surject-onto-their-standard-objects — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Exercise 4.8" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-truncated-borel-induction-represents-weight-evaluation-in-a-block — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Lemma 4.10; Remark 4.11" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-finite-length-fitting-decomposition-in-category-o — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    "Lemma A.1" via Lin Chen, Geometric Representation Theory I, Lecture 8 @ §3 Lemmas 3.14–3.16 pp.5–6; §4 and Appendix A pp.6–9; full proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: thm-ext-orthogonality-characterizes-verma-flags — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "1. Standard filtrations; Theorem-Definition 1.1" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
    "Corollary 1.3" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: cor-injectives-have-costandard-filtrations — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Theorem-Definition 1.2" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: thm-projectives-in-category-o-have-verma-flags — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Theorem 1.4" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-induction-tensor-identity-and-verma-flags — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf, https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Lemma 1.5" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
    "Lemma 3.5" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-maximal-weight-verma-peeling-in-a-standard-filtration — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Lemma 1.6" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-direct-summands-of-verma-filtered-objects-are-verma-filtered — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Lemma 1.7" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-standard-filtrations-are-closed-under-kernels-of-standard-epimorphisms — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Lemma 1.8" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: cex-standard-filtrations-are-not-closed-under-quotients — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Warning 1.9" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-hom-to-costandards-counts-verma-flag-factors — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "2. BGG reciprocity; Proposition-Definition 2.1" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: thm-bgg-reciprocity — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Theorem 2.2 (BGG reciprocity)" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: prop-translation-functors-are-exact-and-biadjoint-across-a-wall — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "3. Translation functors; Construction 3.1, Lemmas 3.2–3.3" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: def-translation-functor-between-o-blocks — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Constructions 3.6–3.7" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: def-dot-weyl-facets-and-single-wall-translation-data — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Definition 3.8" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: thm-translation-to-and-from-a-wall-on-standard-modules — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf, https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf, https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf
    "Theorem 3.12, Verma and dual Verma clauses" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
    "7.6 Theorem and Corollary" via James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O @ §7.5 Key Lemma pp.135–137, §7.6 pp.137–138, §7.12 pp.144–145; complete relevant proofs read
    "7.12 Theorem" via James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O @ §7.5 Key Lemma pp.135–137, §7.6 pp.137–138, §7.12 pp.144–145; complete relevant proofs read
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: ex-translation-through-the-sl2-wall — backed only by https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    "Example 3.16, singular translation" via Lin Chen, Geometric Representation Theory I, Lecture 9 @ §§1–3, pp.1–7, complete lecture read, including all proof sketches and warnings
ERROR backing-lost: projectives-standard-filtrations-and-bgg-reciprocity: lem-facet-closure-excludes-other-tensor-weights — backed only by https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf
    "7.5 Key Lemma" via James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O @ §7.5 Key Lemma pp.135–137, §7.6 pp.137–138, §7.12 pp.144–145; complete relevant proofs read
A replacement SOURCE is the remedy, never a dropped result: find a different
treatment carrying the same definition/theorem/example, re-read the range, and
rewrite that source's contents rows faithfully.
```

</details>

<details>
<summary>URL liveness evidence</summary>

```text
{
  "version": 1,
  "generated_at": "2026-09-07T14:10:54.647Z",
  "scope": {
    "manifests": [],
    "ledgers": [],
    "items": 0
  },
  "summary": {
    "urls": 4,
    "live": 0,
    "failed": 4,
    "recovered": 0,
    "suspect": 0,
    "superseded": 0
  },
  "superseded": [],
  "rows": [
    {
      "url": "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: ocw.mit.edu"
    },
    {
      "url": "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: windshower.github.io"
    },
    {
      "url": "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: windshower.github.io"
    },
    {
      "url": "https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: www.nzdr.ru"
    }
  ]
}
```

</details>

<details>
<summary>Extcheck output and warnings</summary>

```text

63 warning(s):
  [unproved-on-published] items/ex-choosing-x-for-the-classical-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/ex-choosing-x-for-the-loglog-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-finitely-presented-group-has-solvable-word-problem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-nonamenable-group-contains-a-rank-two-free-subgroup.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-subexponential-growth-group-has-polynomial-growth.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-gromovs-polynomial-growth-theorem-is-proved-on-this-page.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-recursively-enumerable-trivial-words-form-a-decision-algorithm.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-borel-hierarchy-closes-after-two-steps.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-library-proves-the-classification-of-finite-simple-groups.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-novikov-boone-theorem-proves-the-uniform-problem-only.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-unsolvable-word-problem-means-no-word-can-be-decided.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-cauchy-kovalevskaya-proof-boundary.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-choice-strength-of-hahn-banach.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-hahn-banach-open-choice-questions.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-alpha-narrowness-is-preserved-under-substitution.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-banach-space-no-countably-infinite-hamel-basis.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-basic-bull-free-graphs-are-two-narrow.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-bing-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-classical-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-loglog-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-nagata-smirnov-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-word-problem-for-finitely-generated-abelian-groups.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/cex-polynomial-space-admits-no-complete-norm.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-finitely-generated-nilpotent-groups-have-polynomial-growth.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-loglog-bound-eventually-dominates-the-classical-bound.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-urysohn-metrization.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-growth-degree-of-the-discrete-heisenberg-group.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-p-three-free-graphs-have-much-larger-homogeneous-sets.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-word-problem-in-a-finite-cyclic-presentation.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-onan-scott-is-the-classification-of-finite-simple-groups.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-duality-as-a-dual-space-statement.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-bull-free-graphs-are-two-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-smirnov-local-metrization.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-topological-manifolds-are-metrizable-and-paracompact.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-bull-graph-has-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-five-cycle-is-not-one-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-two-narrow-implies-one-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-manifold-conventions-and-the-role-of-second-countability.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-the-e-graph-and-the-bird-graph-are-wonderful.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-compactness-conventions-and-choice-ledger.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-continuum-hypothesis.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-hausdorff-dimension-orients-the-weierstrass-graph.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-integral-conventions-and-scope.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-lone-fourier-series-can-diverge-almost-everywhere.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-proof-cost-of-the-carleson-hunt-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-separation-axiom-conventions.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-the-lone-endpoint-is-excluded-from-carleson-hunt.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-baire-category-locally-compact-hausdorff.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-urysohn-lemma.md is PUBLISHED and rests (direct) on material not proved in this library

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

</details>

SHA-256 fingerprints at notes generation:

- `research/frontier-34-batch-13.pages.json`: `239c1d07138ccf14f4c269aefde18215f3d26ac98220780376624c65b49b753d`.
- `research/frontier-34-batch-13.coverage.json`: `e4a0d5a11d047aa916758f8c66e813217afe9e6e1e849be13b78726b7b6dba32`.
- `research/plan-spec.json`: `7c49c68b8da41a09b47e4184e65e5d971c71faf4384c70e61431e54c8ef26ec3`.
- `/tmp/f34b13-closure.json`: `db4ef28db2c659e09468f1055ae6733375f4a403d323ee2eaf06416c9aa8e2de`.

## Handoff obligations

Keep this pair blocked. An authorized writer must install the proposed prerequisite package in prose and plan, prove/source-audit it and repair any inadequate upstream proof dependencies, then rewire the consumer and complete the full transitive semantic/edge-type audit. Fetch-verify the retained sources when DNS works and rerun the failed backing/liveness checks. Re-read the current manifest, coverage, exact supplier statements and these open findings after handoff; do not infer approval from the manifest's resolving IDs or the plan's empty inventory check.

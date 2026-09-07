# Step 8 adjudication — group f

Run: `frontier-33`  
Batches: `14`, `15`  
Pages read in full: `category-o-finiteness-duality-and-blocks`, `category-o-finiteness-duality-and-blocks-examples`, `clifford-theory-over-normal-subgroups`, `clifford-theory-over-normal-subgroups-examples`  
Owned items read in full: 56 of 56

The four current page files, all 56 owned item files, the Step-7 digest, and every direct or transitive dependency needed to resolve a rejection were read. The Step-7 digest has no concerns, warnings, alerts, or cross-group seams. The 17 Clifford-theory items are mathematically coherent and received no judge rejection. No rejection exposed a cross-group or published-item defect.

## Adjudications

| Item | Exact rejection | Pre-edit guard SHA-256 | Outcome | Decision |
|---|---|---|---|---|
| `def-bgg-category-o` | `gpt-5.6-terra` / `4729d520e60db26e06b508bf067d4f45bf0bc834b433c195de2aa3c4ed7394ba` | `cb879a77637b1a242ea6b054756b500a141b4dad1739aa59d63ebb2632f65bb9` | `confirmed_fatal` (`other`) | The definition used `alpha_i`, `W`, and `rho` without declaring the simple-root indexing, Weyl group, or Weyl vector. Thus `Q^+`, the order, and the dot action were not defined as written. |
| `ex-a-generic-sl2-block-is-semisimple` | `gpt-5.6-terra` / `5ae868f759c51b6de0e2a287a6d67965ebdde7a17ee644247b12a23619531ed4` | `28db7a9dc5054dc480ef7313ccfde24c0844fee02c135257fb7150b5b8e89d1a` | `confirmed_fatal` (`dependency_citation`) | Step 1.1 established two simple singleton linkage classes but neither proved that their characters equal `chi_lambda` nor excluded other simple labels from the generalized central-character summand. Both directions are load-bearing for “exactly two.” |
| `ex-the-regular-integral-sl2-block-of-category-o` | `gpt-5.6-terra` / `27616b476eb5dc1d420b4bf77ce921e503f4941ed2a8a2d374e8f0b974f0463d` | `d914e2ec0f7624f0c3b80684290b2792bacd186d61065c91bb5f2b98e0eb3656` | `confirmed_fatal` (`dependency_citation`) | Step 4.1 used both `nabla(eta)=D(M(eta))` and `D(L(eta))` isomorphic to `L(eta)`, but neither assertion occurred in F2 or F3. The costandard sequence therefore lacked its defining and self-duality interfaces. |
| `lem-extensions-between-distinct-o-linkage-classes-split` | `gpt-5.6-terra` / `813ac84682172fb07c05eda8e3266e73aea6885cf01c8dee307f8f576caddd9a` | `ac4aa2bde252dcff4c21f0ff666178d047a7e72edc158aefd585c787db8aabe3` | `confirmed_nonfatal` | F1 states exact duality, biduality, and preservation of every labelled simple multiplicity. Applied to the length-one object `L(eta)`, these clauses immediately imply `D(L(eta))` is isomorphic to `L(eta)`. The missing one-line unpacking is nonfatal polish, so no edit is licensed. |
| `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients` | `gpt-5.6-terra` / `034d1c283f0f5ee7a0a876a8a215e4ab05592152ff28a39434100a755d2a3e7f` | `3cbb7dc88bff1b01aec1b02ef600aede9cbca642a5c8cc8da625fba361680be1` | `confirmed_fatal` (`dependency_citation`) | F4 supplied scalar central action but not the identification of that scalar character with the highest-weight character `chi_mu`; Step 1.1 needed the Harish-Chandra scalar computation. |
| `prop-costandard-objects-have-simple-socles` | `gpt-5.6-terra` / `8ae53850cb3523a52eff1e9daa5a9e95ba5dee7644b2d44618673a4b1cefe2dc` | `8904d99b5a85faa7f597bdf945c43fa4c2842195a5875d8fd7e5c2832688459e` | `confirmed_nonfatal` | F1 makes `D` an exact equivalence preserving each labelled simple multiplicity. Hence `D(L(lambda))` is simple and has the sole composition factor `L(lambda)`, so it is isomorphic to `L(lambda)`. This is an immediate elementary derivation and licenses no edit. |
| `prop-hom-spaces-in-category-o-are-finite-dimensional` | `gpt-5.6-terra` / `1e65a11ee24d8428844cef748bdbfa31fbf14cdf7a09ce378994185d2d1e7781` | `a700681de8d3c961fa6083b415f6bda63d022f730cb9632db86ab6dbf4adcb80` | `confirmed_nonfatal` | F3 identifies the simple as the established module `L(lambda)`, the unique simple Verma quotient. Its Verma top survives and generates the nonzero quotient; F4 supplies the top-vector universal property. Unpacking this established notation is immediate and nonfatal. |
| `prop-restricted-duality-is-an-exact-involution-on-category-o` | `gpt-5.6-terra` / `604717f9b0bf6d2e11a1163a51a20e41a9d3c7b3b6914121f91e108c0f05f966` | `9a5eaae1e797076346d651817b20a10b7850331e1c4252dbad6dde8078f39131` | `confirmed_fatal` (`dependency_citation`) | Step 2.1 applied highest-weight self-duality to every simple composition factor without a fact classifying all simple Category-O objects as `L(lambda)`. That classification is load-bearing for proving `D(M)` belongs to Category O. |
| `thm-category-o-is-abelian-and-extension-closed` | `gpt-5.6-terra` / `bf67104c5eb5d20927adca2f9a357acf381160bcc08eb04ae64713f391de0872` | `73610aef942e18a966d8018e0701cc49fc9eb8cef42385ff66fabeae4ec22994` | `confirmed_fatal` (`dependency_citation`) | Steps 1.1–4.1 prove abelianness and extension closure only when the middle term is a weight module. They supplied no proof of the final assertion that this hypothesis is essential. The original source gives an ambient induced extension with a nonsemisimple Cartan action. |

## Fatal repairs and rejudge targets

### `def-bgg-category-o`

- Declared the indexed simple-root family, the Weyl group, the Weyl vector, and the domain `w in W` of the dot action.
- Added exact dependencies `def-root-reflections-and-the-weyl-group-action` and `def-weyl-vector-rho-for-a-chosen-positive-system` to the item and batch manifest.
- The definition's changed citable section made ten downstream exact-quote contract rows stale; regenerated those owned contract rows without changing their item content.
- Post-repair guard SHA-256: `ee6272496c9d18e771ab736a0d890ec840b204027898a6cb1a50a2d5916765e8`.
- Rejudge target: `def-bgg-category-o`.

### `ex-a-generic-sl2-block-is-semisimple`

- Added the generalized-character definition, the classification of simples, the Harish-Chandra highest-weight scalar computation, and the dot-orbit central-character criterion as direct dependencies and facts.
- Rewrote Step 1.1 to show `chi_lambda=chi_{-lambda-2}` and, conversely, that any simple in `O_{chi_lambda}` has a label in the two-element dot orbit. Nonintegrality then makes both integral Weyl groups trivial, while the Verma criterion makes both standards simple.
- Synchronized the batch manifest and proof contract.
- Post-repair guard SHA-256: `7515a2e9bfc9af3d2563395fec3d7ebedf226e599e44f1e895cf2ed76c1d54f7`.
- Rejudge target: `ex-a-generic-sl2-block-is-semisimple`.

### `ex-the-regular-integral-sl2-block-of-category-o`

- Added direct facts for `D(L(eta))` isomorphic to `L(eta)` and `nabla(eta)=D(M(eta))`.
- Rewrote Step 4.1 to cite those facts at the exact reversal and costandard-identification uses, including the simple antidominant costandard.
- Synchronized the batch manifest and proof contract.
- Post-repair guard SHA-256: `f1206299879c54f3b3c78bc1c539c796c063221ebefc332f99fad2bfb8bd52ff`.
- Rejudge target: `ex-the-regular-integral-sl2-block-of-category-o`.

### `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`

- Added `lem-harish-chandra-projection-computes-highest-weight-scalars` as a direct dependency and fact.
- Step 1.1 now distinguishes existence of scalar central action from the Harish-Chandra identification of that scalar with `chi_mu`, after which the nilpotence equation forces `chi_mu=chi_lambda`.
- Synchronized the batch manifest and proof contract.
- Post-repair guard SHA-256: `68d01881991cd75ff748f23fe84bc82fbe7b1f3b43e7066f7fe901336d4bc7c9`.
- Rejudge target: `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`.

### `prop-restricted-duality-is-an-exact-involution-on-category-o`

- Added `thm-simple-objects-of-category-o-are-highest-weight-modules` as a direct dependency and fact.
- Step 2.1 now first writes every composition factor as some `L(lambda)` and only then invokes restricted self-duality.
- Synchronized the batch manifest and proof contract.
- Post-repair guard SHA-256: `b114d8d9c7073682f8545aa8f10cd4d83799c62f1c37a23a7dc2ffe685664fc1`.
- Rejudge target: `prop-restricted-duality-is-an-exact-involution-on-category-o`.

### `thm-category-o-is-abelian-and-extension-closed`

- Added PBW and the Verma definition as direct dependencies and facts.
- Added Step 5.1: for `sl_2`, induce the rank-two Borel module with `ev=ew=0`, `hv=lambda v`, and `hw=lambda w+v`. PBW gives right `U(b)`-freeness, so induction yields an exact sequence of two Verma modules; the middle term retains the nonzero Cartan Jordan pair and is not a weight module. This proves the weight hypothesis is essential.
- Synchronized the proof strategy, batch manifest, and proof contract.
- Post-repair guard SHA-256: `7762b371153fad6a8932b09edbdd1567ea51b2019162d5dfa7b1aa8b6a66f613`.
- Rejudge target: `thm-category-o-is-abelian-and-extension-closed`.

The exact rejudge target set is therefore:

1. `def-bgg-category-o`
2. `ex-a-generic-sl2-block-is-semisimple`
3. `ex-the-regular-integral-sl2-block-of-category-o`
4. `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`
5. `prop-restricted-duality-is-an-exact-involution-on-category-o`
6. `thm-category-o-is-abelian-and-extension-closed`

## Nonfatal closures

- `lem-extensions-between-distinct-o-linkage-classes-split`, `prop-costandard-objects-have-simple-socles`, and `prop-hom-spaces-in-category-o-are-finite-dimensional` received no content, contract, manifest, impact, or judge changes.
- Their current guard digests exactly equal their pre-Step-8 adjudication digests: `ac4aa2bde252dcff4c21f0ff666178d047a7e72edc158aefd585c787db8aabe3`, `8904d99b5a85faa7f597bdf945c43fa4c2842195a5875d8fd7e5c2832688459e`, and `a700681de8d3c961fa6083b415f6bda63d022f730cb9632db86ab6dbf4adcb80` respectively.

## Sources consulted

- [Lin Chen, Lecture 2](https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf), §3 Definition 3.1, Lemma 3.3, and Warning 3.4, pp. 4–5: the Category-O definition, its abelian property, and the induced non-weight ambient extension showing that unrestricted extension closure fails.
- [Lin Chen, Lecture 8](https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf), §3 Lemma 3.8, Theorem 3.9, Proposition 3.10, Definition 3.12, and Corollary 3.13, pp. 5–6: exact restricted duality, involutivity, self-duality of simples, the costandard definition, and its unique simple socle.
- [Pavel Etingof, Representations of Lie Groups](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf), §15.1 Example 15.8 and Lemma 15.9, p. 81: the generic `sl_2` central-character summand and the finite weight-space detector.
- [Yiannis Sakellaridis, Verma Modules and the Category O](https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf), Theorem 6.2, pp. 9–10: central-character decomposition and finite-length context used when checking the surrounding group.
- Current published dependencies were also opened directly: `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `def-verma-module`, `lem-harish-chandra-projection-computes-highest-weight-scalars`, `cor-central-characters-are-dot-weyl-orbits`, `thm-verma-module-has-a-unique-simple-quotient`, `thm-universal-property-of-verma-modules`, `prop-simple-reflection-embedding-of-verma-modules`, and `cor-verma-irreducibility-criterion-from-shapovalov-determinants`.

## Alerts, scope additions, and blockers

- Step-7 reader warnings: none.
- Incoming or outgoing cross-group alerts: none.
- Published-item repairs: none.
- New supporting lemmas or scope additions: none.
- Mathematical blockers: none.

## Validation

- Exact hash audit: pass. Exactly six group-f items differ from `pre-step8`, all six have exact `confirmed_fatal` licences, and the three `confirmed_nonfatal` items retain their pre-edit guard hashes.
- Focused precheck: pass, five proof-bearing repaired items checked and zero failing; the repaired definition is correctly skipped as non-proof-bearing.
- Focused rendercheck: pass, all six repaired items have valid YAML, delimiters, wikilinks, and KaTeX.
- `node tools/content-policy.mjs research/frontier-33-batch-14.pages.json`: pass, 39 scoped items with zero errors and zero warnings.
- `node tools/citecheck.mjs` on the six repaired items: pass, every recognized elementary move cites a home that states it.
- `node tools/proof-contract.mjs research/frontier-33-batch-14.proof-contracts.json --strict`: the first full run correctly exposed ten downstream quote rows made stale by the repaired Category-O definition; after regenerating exactly those owned rows, the final run passes 33 of 33 contracts with zero errors. Its one `shotgun-bracket` warning on `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` is the documented pre-existing heuristic disposition from Step 5 and is unrelated to these repairs.
- `node tools/depcheck.mjs --quiet`: exit 0; no dependency failure. It reports 475 repository-wide existing warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: pass; no item cycle, forward reference, B-page dependency, or unresolved ID among the 892 pages with item lists.
- `node tools/step8-scope.mjs check --run frontier-33`: pass; eight groups, 923 partitioned items, and zero reader warnings or alerts requiring disposition.
- `node tools/defect-ledger.mjs validate --run frontier-33`: pass, 610 run rows checked with zero errors.
- `node tools/defect-ledger.mjs check --run frontier-33 --adjudications research/frontier-33-judge-adjudications.jsonl --reader-decisions research/frontier-33-step8-alert-decisions.jsonl`: pass, 610 run rows checked with zero errors.
- The first run-wide Step-8 guard attempt occurred while other groups were still editing: all six group-f changes were licensed, but the command exited nonzero on 29 out-of-group items whose owning adjudication rows had not yet arrived. No group-f item appeared in its error list. A clean rerun remains pending completion of those concurrent dispatches; this report does not claim that the run-wide guard passed.

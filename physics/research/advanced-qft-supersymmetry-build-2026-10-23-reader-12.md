# Step 3a independent reader report — batch 12

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: `reader`  
Batch: `12`  
Scope: `qftx-adhm-moduli` and its examples companion

## Opened inventory

### Assigned pages

- `library/quantum-field-theory-mathematics/qftx-adhm-moduli.md`
- `library/quantum-field-theory-mathematics/qftx-adhm-moduli-examples.md`

Both pages are draft, frontmatter-only A/B pages with `page_layout: compact-v1` and empty bodies. Their page IDs, inventories, companion relation, classification, and declared prerequisites agree with the current batch-12 manifest. No page summary was present.

### Assigned items

- `def-framed-u-n-instanton-moduli-and-adhm-data`
- `lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character`
- `thm-adhm-fixed-point-instanton-count`
- `ex-adhm-u1-one-box-fixed-point`
- `ex-adhm-u2-one-instanton-fixed-points`

### Mathematical suppliers and required context opened

- Charge and conventions: `def-qftx-instanton-number-and-asd-sector`; imported published `def-axiom-of-choice` (its pin entry in `research/math-imports.json` was checked); `def-qftx-adhm-linear-data-stability-and-regularity`.
- Stable quotient and tangent tools: `lem-adhm-stable-quotient-and-torus-lift`; `lem-multiplicative-type-groups-are-linearly-reductive`; `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`; `thm-zariski-tangent-space-jacobian-kernel`.
- Compact and noncompact localization: `thm-atiyah-bott-berline-integration-formula`; `thm-qftx-proper-fixed-locus-noncompact-localization`; `def-qftx-proper-fixed-locus-localized-pushforward`; `lem-qftx-fixed-embedding-bm-euler-self-intersection`; `thm-qftx-finite-affine-atlas-bm-concentration`; `def-qftx-localized-equivariant-borel-moore-data`; `lem-qftx-eigenfunction-open-bm-annihilation`.
- Supporting quotient and Borel–Moore statements opened: `thm-holomorphic-implicit-function-theorem`; `def-free-and-proper-lie-group-actions`; `thm-free-proper-action-quotient-manifold`; `prop-tangent-space-of-a-free-proper-quotient`; `thm-heine-borel-rn`; `thm-gluing-affine-schemes`; `thm-jacobian-criterion-smooth-morphism`; `def-categorical-and-geometric-quotients-of-classical-varieties`; `thm-constructible-six-functors-proper-base-change-and-verdier-duality`; `lem-qftx-module-localization-preserves-exactness`; `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`; `thm-thom-isomorphism-for-oriented-vector-bundles`; `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`; `lem-qftx-borel-base-is-paracompact-of-cw-type`; `lem-qftx-rational-torus-classifying-space-cohomology`; `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`; `thm-external-product-and-whitney-sum-formulas-for-thom-classes`; `def-euler-class-by-zero-section-pullback-of-the-thom-class`; `def-equivariant-borel-moore-homology-and-correspondence-convolution`.
- Separate conditional dictionary context: `thm-qftx-framed-p2-monad-adhm-correspondence`; `thm-qftx-projective-gaga-for-monad-data`; `thm-qftx-zero-fi-regular-adhm-asd-correspondence`; `lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary`.
- In-run evidence opened as context, not verdict: batch-12 manifest, proof contracts, cross-batch dependency file, notes, and source-coverage record.
- Consumers checked after the lemma statement clarification: `pthm-qftx-omega-background-fixed-point-expansion` (batch 51) and `ex-qftx-s4-n2-partition-function` (batch 50). The assigned theorem’s two example consumers were also checked.

## Independent mathematical review

The definition keeps the framed connection sector, stable complex quotient, real moment-map quotients, framed sheaf data, and Uhlenbeck strata distinct. Its trace and Hodge conventions match `def-qftx-instanton-number-and-asd-sector`; it does not extend the supplier’s special (SU(2)) integrality clause to general (U(N)). The Gieseker space and Uhlenbeck space are not identified. The framing/rotation torus characters agree with the local ADHM action.

The stable quotient lemma’s word-frame argument gives a free proper quotient, finite affine word-frame slices, and the unique torus lift. Stability proves injectivity of the gauge differential; trace-pairing annihilators and stability prove surjectivity of the equation differential. At a fixed orbit, the lifted weight spaces are generated with weights (e_\alpha t_1^i t_2^j), (i,j\geq0); the character condition for a nonzero (J)-component would require negative rotation exponents, so (J=0). The resulting cyclic modules are monomial quotients of (\mathbb C[x,y]), giving the partition bijection. The deformation complex and its alternating character yield the displayed tangent formula. The one-box (U(1)) and two-color (U(2)) substitutions agree with that formula; the (U(2)) Euler denominators have the stated signs and factors.

The local noncompact localization argument does not apply compact ABBV to the noncompact quotient. Its required geometric conditions are supplied by the word-frame quotient result; its finite fixed locus is proper. The noncompact theorem’s Borel–Moore fixed-locus inverse and self-intersection argument yield the stated reciprocal-Euler sum. The theorem’s Gieseker and ordinary-ASD clauses remain separate conditional inputs and are not used to establish the stable-quotient fixed-point series.

The source passages checked were:

- Nakajima–Yoshioka, *Lectures on Instanton Counting*, §3.1, PDF pp. 17–19, including Theorem 3.2: framed torsion-free sheaf setup, Uhlenbeck strata, torus-fixed partition labels, and tangent-character convention. <https://arxiv.org/pdf/math/0311058>
- Nekrasov, *Seiberg–Witten Prepotential from Instanton Counting*, §3.1, PDF pp. 12–13, equations (3.1)–(3.5): ADHM maps, moment maps, and framing action; §3.3, PDF p. 15: noncompactness and positive-level context; §3.4, PDF pp. 16–17: fixed-point tangent setup. The local proof supplies endpoint exactness and the partition classification. <https://arxiv.org/pdf/hep-th/0206161>
- Edidin–Graham, *Localization in Equivariant Intersection Theory and the Bott Residue Formula*, §3, Proposition 3 and Theorem 1, and §4, Proposition 4 and Theorem 2: equivariant Chow localization and the smooth fixed-locus denominator. Their introduction identifies the analogous Borel–Moore localization argument; the finite-affine Borel–Moore proof used here is supplied locally by the current dependency chain. <https://arxiv.org/pdf/alg-geom/9508001>
- Ginzburg, *Geometric Methods in the Representation Theory of Hecke Algebras and Quantum Groups*, §1, especially the proper-pushforward and closed/open Borel–Moore sequence discussion on PDF pp. 4–5. <https://arxiv.org/pdf/math/9802004>

The source conventions were compared with the locally defined dual-framing characters. The source papers’ physical path-integral or ADHM-to-ASD assertions are not treated as proofs of the mathematical claims here.

## Repairs and evidence

1. In `lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character`, the Statement named (B_i) and used (B_{i_j}) without specifying the index set. It now states (i,i_j\in\{1,2\}), matching the exact linear-data definition. The Facts paragraph also had the malformed text `AC,.`; this is corrected.
2. In that lemma’s Fact F3 and proof step 7.1, the use of a (T_{\mathbb C})-fixed subscheme lacked the slice-level algebraic extension argument. The repair records the word-frame normalizer (D_C(t)), gives the normalized slice action, explains why matrix coordinates are weight vectors, and uses the fixed-scheme smoothness and Jacobian-kernel suppliers to identify the invariant tangent. The exact supporting formula is in `lem-adhm-stable-quotient-and-torus-lift`, proof step 6.1.
3. In `thm-adhm-fixed-point-instanton-count`, the same word-index set is now explicit in the Statement. Its separate ordinary-ASD sentence now states that the zero-FI dictionary is conditional on the real-monad normalization, framed Ward construction, and projective algebraization comparison, with the rank-one boundary result used at (N=1). No ordinary-ASD count or series equality is claimed. The additional supplier reference is after the complete Statement.
4. The batch-12 proof contract was updated for the explicit stability indices, the slice-level algebraic action and tangent argument, and the conditional ordinary-ASD scope. Neither changed item had a `verification.judge` record to remove; no judge or audit stamp was added.

Consumer review found no needed edits: the theorem and two one-box examples use the same (B_1,B_2) word stability and fixed-point/tangent result; the batch-51 physics theorem and batch-50 example use the positive-FI stable quotient and fixed-point/tangent conclusion within that same scope. No out-of-batch carrier was edited.

Validation after the final edits: reflow reported both items unchanged; precheck passed each item; the required batched proof-layout check reported `2 items, 15 steps, 0 defects`.

## Page verdicts

- `qftx-adhm-moduli`: no remaining page-level defect identified. Its A-page inventory and required-page list match the manifest; its body is empty as required.
- `qftx-adhm-moduli-examples`: no remaining page-level defect identified. It lists the two examples in the B-page `examples` field, requires its A companion, and has an empty body. The one TikZ diagram in `ex-adhm-u2-one-instanton-fixed-points` correctly depicts the two one-box colorings; the calculation does not rely on it.

## Uneditable findings and blockers

None. The cross-batch correspondence and localization suppliers remain draft, with their exact conditional scope preserved; their separate native readiness/review obligations are not defects in the reviewed claims and were not treated as acceptance. No blocker remains for this reader report.

## Coverage limitation

I reviewed the exact conditional monad/ASD supplier statements and the arguments needed to check their use here, but did not independently re-prove every transitive analytic, projective-cohomology, and normal-form prerequisite behind those separate dictionary theorems. Those are not used to prove the positive-FI fixed-point series; their hypotheses and draft status remain explicit in the supplier chain.

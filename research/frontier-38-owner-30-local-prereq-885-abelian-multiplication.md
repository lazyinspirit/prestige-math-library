# A885 local prerequisite bundle: cube and multiplication

Authoring date: 2026-10-02. Disjoint assignment from the A885 author, relayed by the owner orchestrator. Write scope is exactly the three item files below and this separate note. The existing `research/frontier-38-owner-30-local-prereq-885.md`, other item files, pages, plans, manifests, tasks, state, and global/model configuration were not edited. No autopilot transition was invoked.

The three files are draft, with complete local proofs and explicit dependencies. This is author mathematical evidence and mechanical checking, not an independent audit or a whole-pair readiness clearance. The Barsotti–Chevalley quotient and Rosenlicht obligations listed in the original note are outside this assignment. No original arbitrary-field or positive-characteristic multiplication assertion was weakened.

## Authoritative full-text retrieval and actual reading

Complete Stacks HTML was fetched by Python `urllib.request.urlopen`, saved under `/tmp/ag885-multiplication-TAG.html`, and the full relevant statements/proofs read. URLs below are exact stable tag locators. The section HTML includes all referenced statements and proofs, rather than a search excerpt. Targeted reading of §39.9 covered 39.9.6–8 and the surjectivity/kernel conclusions of 39.9.11; targeted reading of §37.33 covered all 37.33.1–8, including the triviality-locus, valuation and H¹-injectivity prerequisites. Künneth 33.29.1 was also read in full.

| Full text | Exact reading and use | Saved HTML SHA256 |
|---|---|---|
| https://stacks.math.columbia.edu/tag/0BF9 | §39.9, especially 39.9.6 [0BFE], 39.9.7 [0BFF], 39.9.8 [0BFG], and 39.9.11(3),(5). Cube cancellation; pullback recurrence; ample symmetric bundle; finite flat multiplication and rank. | `bb6437f6bc2e5b463c52203960de0afd4f2995d8af275d84d38f7d2f0a4e4e8e` |
| https://stacks.math.columbia.edu/tag/0BEZ | Entire §37.33: 37.33.1 [0BDP], 37.33.2 [0EX7], 37.33.3 [0EX8], 37.33.4 [0BF0], 37.33.5 [0BF1], 37.33.6 [0BF2], 37.33.7 [0BF3], 37.33.8 [0BF4]. General see-saw/cube route and its actual prerequisites. | `85491a499b3467fc2a65962db78d619393222b713227caa5cdfe52cc7ce1fc84` |
| https://stacks.math.columbia.edu/tag/0BF4 | Separate complete 37.33.8 statement/proof. Nonempty closed triviality locus becomes open by 37.33.7, then connectedness and identity-section normalization trivialize the bundle. | `a7f0437842ad96029839d4fd71d9507db7d1d79049dc353d8300887b23c1f0af` |
| https://stacks.math.columbia.edu/tag/0BDP | Separate complete 37.33.1. Perfect-complex rank strata and evaluation pairing, not a bare assertion of a Picard functor. | `c9bee9cef61a984183e3bcdef9d7ceca62d6b312b8bbae9c4e1f5553b48a3454` |
| https://stacks.math.columbia.edu/tag/0BF0 | Separate complete 37.33.4, including its 37.33.3 valuation-triviality import. | `d4f870d4f9f50ad77263db4513bdd1ca6f6012d035fd031ffaddf816d259f68c` |
| https://stacks.math.columbia.edu/tag/0BF2 | Separate complete 37.33.6. Injective H¹ restriction forces the first differential to vanish, lifting the trivializing section. | `6c79190af01f0184858fb551214b2c3b3a7c75efc987f0929247950ecb98fe0f` |
| https://stacks.math.columbia.edu/tag/0BF3 | Separate complete 37.33.7. Product Künneth implies the H¹ restriction injection for the two axes. | `635c93cdc17904c9217649306dbb438fcdec8b7820795da86289de4ca53654c1` |
| https://stacks.math.columbia.edu/tag/0BED | Complete 33.29.1. Quasi-coherent Künneth on quasi-compact separated schemes. Its warning that the naive product-cover Čech complex is not the tensor complex was respected: the authored proof uses the **double Čech resolution**, whose total global-section complex is the tensor complex. | `12d3c28f0a40c8d20dafc4dcc549530ca1bcbe3215ce7fdc648f599d5a2461b8` |

An initial guessed URL `https://stacks.math.columbia.edu/lemma/37.33.8` returned HTTP 404. The actual link in §39.9 gave [0BF4], which was then successfully fetched. No exhausted retrieval or inaccessible source is claimed. The first two local extraction commands failed because `python` and then `bs4` were unavailable; successful extraction used installed `python3` and its standard library. These failures did not masquerade as source readings.

## Local proof closure and exact interfaces

1. `lem-nonaffine-theorem-of-the-cube-for-abelian-variety`: full seven-term identity for every invertible sheaf on an abelian variety over every field; also the precise normalized see-saw special case on A³ needed to prove it. Its six steps prove the following prerequisites internally: scalar functions after arbitrary coefficient base change; double-Čech Künneth and injectivity of H¹ restriction to the two axes; closedness of the trivial-fibre locus from finite-complex determinantal conditions applied to a line bundle and its dual; lifting trivializations through every square-zero infinitesimal thickening using that H¹ injection; compatibility by normalization at `(e,e)`; passage to completion by kernels of a nonnegative finite projective complex; degree-zero base-change surjectivity and a genuine local section; removal of the proper image of its zero locus; gluing by pushforward/evaluation and the identity section. These steps discharge the see-saw obligation locally, without importing the general representability of the triviality locus, a Picard scheme, formal-functions theorem, or the valuation argument of 37.33.3.
2. `lem-nonaffine-multiplication-pullback-symmetric-line-bundle`: full formula `[n]*L = L^(n(n+1)/2) ⊗ ([-1]*L)^(n(n-1)/2)` for every integer n, including n=0 and negative n. Three steps give the n=2 cube specialization, positive recurrence with exact exponents, and inversion. The symmetric conclusion is `[n]*L = L^(n²)`.
3. `thm-nonaffine-abelian-multiplication-finite-faithfully-flat`: every nonzero integer n, every field, finite faithfully flat and locally free of rank `|n|^(2g)`, the corresponding finite locally free kernel, fppf divisibility and algebraically closed rational-point surjectivity. Six steps construct a symmetric very ample bundle by the two embeddings and Segre; exclude positive-dimensional fibres using the contradiction between triviality and ampleness on a proper integral component; apply proper/quasi-finite finiteness; prove surjectivity by integral dimension preservation; propagate generic flatness by translations over an algebraic closure and descend it; compare Hilbert polynomial leading coefficients to calculate rank; and take base changes for the kernel/divisibility claims. This substitutes a fully spelled-out generic-flatness/translation argument for Stacks 39.9.8's regular-local flatness shortcut. No étaleness is inferred, and no integer exponent is reduced modulo the characteristic.

The existing `thm-abelian-variety-is-projective` and `prop-abelian-variety-commutativity-from-rigidity` were read and reused without edits. The former supplies an actual ample bundle over k and its projective embedding through its local Stacks construction; the latter supplies the morphism identity expressing commutativity. Neither result is strengthened or replaced here.

### Recursive dependency inventory

The exact direct dependency IDs are the `deps` lists in the three item frontmatters; their Facts explain the proof use of every nonfoundational entry. A recursive traversal of **every `deps` edge**, including those of published suppliers, found 2,070 unique existing item IDs: 2,056 published and 14 draft. There were no missing IDs and no dependency cycles. SHA256 of the lexicographically sorted complete ID list, joined by newline and followed by one newline, is `0871a76dc71d08bbd7b69f77dda6281802d2f037c613e964ab7280daede0d816`. This is availability/closure evidence, not an assertion that this writer independently audited 2,056 published proofs.

Every draft in this recursive closure is local to A885. The complete draft dependency order is:

- `def-abelian-variety-over-a-field`
- `lem-nonaffine-global-sections-flat-field-base-change`
- `lem-nonaffine-rigidity-proper-geometrically-integral-factor`
- `prop-abelian-variety-commutativity-from-rigidity`
- `lem-nonaffine-regular-local-picard-principal-localization`
- `thm-nonaffine-regular-local-ring-is-ufd`
- `lem-nonaffine-smooth-affine-open-cartier-boundary`
- `lem-nonaffine-line-bundle-affine-space-parameter-constancy`
- `lem-nonaffine-ample-line-bundle-field-descent`
- `lem-nonaffine-smooth-connected-group-has-ample-line-bundle`
- `thm-abelian-variety-is-projective`
- `lem-nonaffine-theorem-of-the-cube-for-abelian-variety`
- `lem-nonaffine-multiplication-pullback-symmetric-line-bundle`
- `thm-nonaffine-abelian-multiplication-finite-faithfully-flat`

The first eleven are the unchanged existing A885 suppliers. Their exact local edges remain those recorded in the original local-prerequisite note and their frontmatters: the rigidity branch precedes commutativity; the regular-local/Picard, Cartier-boundary, affine-parameter constancy and ample-descent branch precedes smooth-group ampleness and projectivity. All further recursive `deps` targets are published. In particular this packet uses published `lem-proper-flat-cohomology-perfect-complex`, `thm-cohomology-and-base-change`, completion flatness, generic flatness, proper quasi-finite finiteness, affine-domain dimension/transcendence degree, and the published Hilbert polynomial/support-degree theorems; it does **not** consume the concurrent draft Hilbert-family/Euler-polynomial additions on another page. The definition's `justified_by` commutativity relation is not duplicated as a dependency edge, as required by the schema.

The original note's 28 A items plus these three make 31, below the 100-item A-page cap; any further concurrent additions are the integrating author's responsibility. These three add no B-page dependency and no new pair or outside unpublished prerequisite. No page inventory was edited by this writer. The integrating author must place cube before pullback before multiplication, and before each new consumer. AC and DC are stated and carried from the published cohomology/completion and other suppliers.

## Mechanical checks

After the first draft, precheck requested canonical renumbering to one numbered phase per paragraph. That exact renumbering and its backward references were adopted. Initial rendercheck passed. After the last mathematical edits, the following explicit-path commands were run successfully; all exit codes were zero:

```bash
node tools/tsx-run.mjs tools/precheck.mts items/lem-nonaffine-theorem-of-the-cube-for-abelian-variety.md items/lem-nonaffine-multiplication-pullback-symmetric-line-bundle.md items/thm-nonaffine-abelian-multiplication-finite-faithfully-flat.md
node tools/rendercheck.mjs items/lem-nonaffine-theorem-of-the-cube-for-abelian-variety.md items/lem-nonaffine-multiplication-pullback-symmetric-line-bundle.md items/thm-nonaffine-abelian-multiplication-finite-faithfully-flat.md
PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/lem-nonaffine-theorem-of-the-cube-for-abelian-variety.md items/lem-nonaffine-multiplication-pullback-symmetric-line-bundle.md items/thm-nonaffine-abelian-multiplication-finite-faithfully-flat.md
```

Precheck: `3 checked, 0 failing — all clean`. Rendercheck: three files, no hard errors, all math parsed by real KaTeX and all frontmatter parsed by the renderer's YAML parser. Actual-renderer layout: `proof-layout: 3 items, 15 steps, 0 defects`. The existing `/tmp/ag885-render-app` shim from the A885 author's earlier checks was reused; it points at the actual app renderer and fixes the previously documented loader layout without changing either repository. These are local checks, not an independent proof audit. No judge, audit, or pair-readiness stamp is invented.

## Wikilink repair and current raw hashes — 2026-10-03

The A885 author identified two comma-concatenated wikilink targets in the multiplication theorem's Facts [F4] and [F5]. Both groups now consist of separate valid item links. The frontmatter (including dependencies), Statement and Proof were compared before and after and are unchanged. The earlier format/layout passes did not detect the invalid targets; this repair adds an explicit target-existence check.

The three explicit-path precheck, rendercheck and actual-renderer proof-layout commands above were rerun after the repair. All exited zero: precheck `3 checked, 0 failing`; rendercheck three clean files; layout `3 items, 15 steps, 0 defects`. All 41 wikilink occurrences across the packet resolve to existing item files, and no comma-concatenated target remains.

| Item | Current raw SHA256 |
|---|---|
| `lem-nonaffine-theorem-of-the-cube-for-abelian-variety` | `a0e70a5abc1eec4c62fe0a0f999d1dcae54c8abcac8a0c722befccfe16fc7c59` |
| `lem-nonaffine-multiplication-pullback-symmetric-line-bundle` | `39335d766d6be0f88c8efd6cfbeb360f6863b9a57751d0ac82b25d13788279e8` |
| `thm-nonaffine-abelian-multiplication-finite-faithfully-flat` | `b45bb22a632ff4cc7bcc7a22eba1650ca4731a27c42993e7de384f7666b39708` |

The multiplication theorem's raw hash before this repair was `0c2136d892665cbf0859071152ca149c1191a3db5d6b0edb1959160b05a49a5a`. Exact commands, successful outputs, exit codes, current hashes, and the link-check method are recorded in `research/frontier-38-owner-30-local-prereq-885-abelian-multiplication-wikilink-receipt.json`. This is a local mechanical receipt, with no mathematical acceptance or gate-clearance claim.

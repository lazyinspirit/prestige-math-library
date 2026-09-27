# Agent 05 cross-review: Whitney, rough composition, and finite Morse–Sard

Read-only review for agent 10, 2026-09-24. I did not edit agent 10's items. The source and proposed proof route are documented separately in `agent-05-sard-research.md`.

## Whitney extension and rough composition

I read the complete authored `thm-whitney-extension-for-finite-order-euclidean-jets` and `lem-kneser-glaeser-rough-composition-on-flat-sets` against their exact Statement contracts. The Whitney proof's dyadic-cube selection gives side length comparable to distance from the closed set; compact uniform jet compatibility then controls every partition term after differentiation, including the top derivative by the uniform little-o with exponent zero. The construction specifies nearest points canonically and covers both the empty and full-set cases. I found no closed-set or uniformity gap in that argument.

In the rough-composition proof, the stated restriction `s<r` ensures `g` is at least `C¹`. Its formal jets use the order-`r−s` Taylor polynomial of `g` and the order-`r` Taylor polynomial of `f`; flatness removes all terms through order `s`. Uniformly on compact parts of the contact set, the `g` remainder is `o(|h|^{r−s})`, while `Df` is `O(|h|^s)` along the joining segment. Their product gives the needed `o(|h|^r)` value contact. Comparing two resulting polynomials on a ball of radius `|x−y|` and rescaling proves all Whitney derivative compatibilities uniformly. This is a complete justification of the hard step; it does not assume that the rough composition is globally `C^r`.

For localization, `A*` is closed relative to `W`. Each `A*∩K_j` is closed in Euclidean space because `K_j` is compact in `W`. The exhaustion has `K_j⊂int K_{j+1}`, so the bump partition is locally finite; every extension `H_j` whose weight is nonzero at a contact point has the same full jet `P_x`. Leibniz's rule recovers `P_x` for the sum. I found no localization gap.

The Whitney item's earlier metadata cited Azagra–Ferrera–Gómez-Gil §2, which states Kneser–Glaeser and refers to Whitney extension rather than proving the Whitney theorem itself. I asked agent 10 to restore a direct citation. Agent 10 added Whitney 1934, Theorem I; this bibliographic issue is resolved.

## Sard integration

Agent 10 then integrated rough composition into `lem-sard-on-the-nonflat-critical-strata` and made `thm-morse-sard-for-euclidean-maps` explicitly induct on source dimension at unchanged order `r`. The compact-stratum decomposition and regular-rank slicing now use the appropriate induction contracts. The graph contact set is relatively closed because `C_j` is closed and its parametrization is continuous; the rough-composition lemma supplies a `C^r` map whose critical set contains the graph preimage of `K`.

I found one boundary gap in that integrated version: when `m=1`, the graph parameter domain is `R^0`, while the published Whitney supplier assumes domain dimension `d≥1`. I sent agent 10 the minimal direct case. Agent 10 added an even shorter equivalent branch: the inverse-function chart maps `K∩W_x` into `{0}×R^0`, so each such local image has at most one point and is null; compactness gives a finite subcover. For `m≥2`, rough composition has the required domain dimension. The revised nonflat lemma and Euclidean theorem have sound dependency and induction contracts in this bounded review.

Focused rendercheck of the four reviewed items passed. The repository's `.mts` precheck could not be launched with the installed Node 22 build (it rejects `.mts`, including with experimental type stripping); this is a runner limitation, not a content failure. Agent 10 is responsible for its own verification receipt. The reviewed current Git blob hashes, in order Whitney, rough composition, nonflat stratum, Euclidean Sard, are `83fc82069e39278b8d276ed065ffa615f1b84504`, `1347ad643e7ac56b3a8b2bd835200c714697fbc1`, `ba4664fa364626d4b80c247292c7432984098542`, and `5e429ad6266f7849018af79dc5eebfc4d74327ba`.

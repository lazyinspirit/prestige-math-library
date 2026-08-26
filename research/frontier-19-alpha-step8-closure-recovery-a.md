# Frontier 19 — Step 8 closure recovery, group a

This recovery took the ten exact group-a rows in
`research/frontier-19-judge-closure.json` and joined each to its current Terra
rejection and the append-only adjudication ledger. No orphan or cross-group row
was taken.

## Exact rows

| item | model and context | outcome | evidence and disposition |
|---|---|---|---|
| `def-polynomial-subexponential-exponential-and-intermediate-growth` | `gpt-5.6-terra` · `c60a56ed6e468e9666abe82219151426b58b502869efc7a16f97f2793edeae85` | `confirmed_fatal` · logic | The comparison relation is defined only on natural-valued functions, while the old clause used `a^n` for arbitrary real `a>1`. The definition now uses a natural base `a≥2`. |
| `ex-a-kan-extension-computing-a-free-functor` | `gpt-5.6-terra` · `0143af5e324fd8a4b7895f236a7f6f01d26c4269c78c28c8f09568d1e30f7a28` | `confirmed_fatal` · dependency citation | Applying free cocompletion with target `Grp` requires local smallness and cocompleteness. New Fact F2 cites the exact published category and completeness/cocompleteness theorems. |
| `fs-iwasawas-criterion-needs-only-transitivity` | `gpt-5.6-terra` · `ce36f1c22a0cf2308203c1f427a3d99d4b17edac4cc857caf499d5f692f4f9bb` | `confirmed_fatal` · logic | The regular `C_4` action does not satisfy the other hypotheses of Iwasawa's criterion. The Statement is narrowed to the exact false assertion the witness proves: a faithful transitive action need not have every nontrivial normal subgroup transitive. |
| `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz` | `gpt-5.6-terra` · `2393266bf576dcc76097bafb3dd399751195f8e1c22968a8e1449bf1e2dd5427` | `confirmed_fatal` · dependency citation | The final step invoked the coarse-Lipschitz definition without stating or citing it. Fact L4 and the direct dependency now license the conclusion. |
| `thm-density-as-a-self-kan-extension-for-a-small-category` | `gpt-5.6-terra` · `73e3d82989ed54a6eac299cfbe4b4a547e05db55d88574a8c02d5d78ece6bad0` | `confirmed_fatal` · dependency citation | Fact F1 used the Yoneda evaluation bijection but cited only definitions. It now cites the contravariant Yoneda corollary exactly. |
| `thm-free-groups-of-rank-at-least-two-have-exponential-growth` | `gpt-5.6-terra` · `55ec7fc6c127809174545f197715056e521e0f64232198eb707d7e62f7ba5776` | `confirmed_nonfatal` | The pointwise lower bound implies the comparison with `C=1` after unfolding `≼`; this is a sub-30-second proof-step gap. R1 therefore permits no edit. |
| `thm-kan-extensions-as-coends` | `gpt-5.6-terra` · `23fb1bae875abc6669f2fa76bb371ff0c6e10a561d45dedeb9fade7437b237e1` | `confirmed_fatal` · dependency citation | Fact F2 called a covariant hom functor a presheaf. It now fixes `d` and states the correct contravariant weight `c↦D(Kc,d)` and covariant weight `c↦D(d,Kc)`. |
| `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` | `gpt-5.6-terra` · `15db429e310e0946f37ce7d58eee191fd98c87b5719235fa982b4d6766fdb1f1` | `confirmed_fatal` · dependency citation | Pointwise right-Kan existence requires the target `Set` to be locally small as well as complete. Fact L1 now cites both exact facts. |
| `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` | `gpt-5.6-terra` · `8eee5b23e7ab53543a9225d5f4c9c67b5aa4ffe3021da30936526b67aeb1cdf9` | `confirmed_fatal` · logic | The former proof classified left adjoints but did not prove the full small-colimit universal property asserted by the title. The Statement and proof now show that `Lan_yF` preserves small colimits, every small-colimit-preserving `L` is `Lan_y(Ly)`, and transformations extend uniquely from representables. |
| `thm-the-two-notions-of-pointwise-agree` | `gpt-5.6-terra` · `9b1080e1359e2e72d6f2c653a5d1ee8c0bf0c8010ce88eaddc020a39aeb756d4` | `confirmed_fatal` · dependency citation | Fact F1 omitted that the specific cone with legs `ε_c∘R(u)` is limiting. It now preserves that canonical-cone data from the cited definition. |

All ten exact rows now have one exact-hash adjudication. The nine fatal rows
have matching defect-ledger entries `frontier-19-S8-a-021` through
`frontier-19-S8-a-029` and coherent item repairs. There is no open group-a fatal.

## Changed terminal-context items

- `def-polynomial-subexponential-exponential-and-intermediate-growth`
- `ex-a-kan-extension-computing-a-free-functor`
- `fs-iwasawas-criterion-needs-only-transitivity`
- `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz`
- `thm-density-as-a-self-kan-extension-for-a-small-category`
- `thm-kan-extensions-as-coends`
- `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad`
- `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion`
- `thm-the-two-notions-of-pointwise-agree`

These rejections were the second frozen contexts for their items. The repairs
above complete the mathematical work, but the owner/supervising session must use
the terminal exact-hash resolution path; group a does not request or run a third
judge cycle.

## Checks

- `precheck`: all eight repaired proof-bearing items pass in canonical phase form.
- Both owning batch contracts were regenerated and pass `proof-contract --strict`.
- `citation-fidelity`: no missing contract quote; the one normality detector candidate is a false positive because the cited Statement asserts normality for every natural `n`.
- `boundary-audit`: no contradicted disposition or template cluster.
- `rendercheck`: all nine repaired items pass YAML, delimiter, and KaTeX checks.
- `content-policy`: 103 group-a items, no errors or warnings.
- `citecheck` and `depcheck`: clean hard-gate exits.
- `step8-guard`: every shared Step-8 item edit is exactly licensed.
- Exact ledger join: zero group-a rows remain unadjudicated.
- `step8-scope check`: zero open rejection rows and zero cross-group alerts.

The level-wide `defect-ledger check` still reported six stale open-row/closure
joins owned by groups c and d. The requested level-wide judge-closure recompute
also failed outside group-a scope: its context-hash workers returned malformed
empty JSON for many items and consequently reported `0/443` current verdict
sets. Neither failure is a group-a item defect, and this recovery did not edit or
adjudicate those other groups' rows.

No published dependency was repaired, no cross-group finding was raised, and no
item belonging to another group was changed.

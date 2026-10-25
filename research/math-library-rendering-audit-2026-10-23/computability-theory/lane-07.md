# Computability Theory visual audit — lane 07

# Lane 07 visual review

Coverage: 87 assigned items and 105 individual original-resolution tiles. All item sources, snapshots, and HTML previews match their assignment hashes; there is no source, snapshot, HTML, or tile drift.

## Confirmed rendering findings

Three item titles preserve raw ASCII math syntax: `def-linearity-test` (`F_2`), `ex-sum-check-three-variable-transcript` (`F_101`), and `thm-savitchs-theorem` (`s(n)^2`). The full item bodies render their formulas; the issue is confined to the title metadata. Exact source lines and image hashes are in the JSON record.

No KaTeX error, TikZ failure, unrelated reference-title leak, or confirmed clipping was observed. All wikilink title rows render as separate blocks as expected. Every render manifest reports zero TikZ diagrams, so no existing diagram math was available to inspect.

## Optional typography

The CSS title-case treatment displays “Np and conp” in `ex-np-and-conp-are-the-first-levels`. The uppercase technique banners are expected styling.

## Potentially useful diagrams

- `ex-acceptance-is-configuration-reachability`: a three-node configuration graph with the accepting edge and separate looping branch.
- `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa`: a complete three-state DFA with the explicit sink transition and accepting states.
- `def-degree-reduction-by-expander-clouds`: a schematic of incidence ports, equality-cloud edges, endpoint-ordered external edges, the overlay, and plurality decoding.

These are optional source-supported candidates, not defects. Each proposed map and relation is specified in the JSON.

## Coverage and evidence

Per-item frozen title, full-body digest, source/snapshot/HTML hashes, KaTeX/TikZ manifest data, and every tile path/hash/dimension are recorded in `lane-07.json`. All 105 tiles were opened individually via `view_image` at original resolution. No files outside this lane report were written.


Coordinator note: report formatted from lane-07 authored item/tile review in the supplemental directory. No claims beyond that record were added.

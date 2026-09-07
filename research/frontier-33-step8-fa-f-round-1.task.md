# Final Adjudicator queue — frontier-33, group f, round 1

This is the exact queue frozen in `research/frontier-33-step8-fa-f-round-1.json`. It contains 1 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `ex-a-generic-sl2-block-is-semisimple` (run)

1. Read `items/ex-a-generic-sl2-block-is-semisimple.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-33-step8-fa-f-1-ex-a-generic-sl2-block-is-semisimple.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. You may author new missing-dependency lemmas and register them as specified in the FA brief. If the repair changes an existing run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence. Run focused checks. Do not append a Sol adjudication or request another judge call for the already rejudged consumer; new lemmas still require their first engine-managed judgment.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-33 --id ex-a-generic-sl2-block-is-semisimple --resolved-by final-adjudicator --group f --queue research/frontier-33-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-33 --disposition accepted-after-review --source-status verified --basis-file research/frontier-33-step8-fa-f-1-ex-a-generic-sl2-block-is-semisimple.md
node tools/step8-terminal-resolution.mjs record --run frontier-33 --id ex-a-generic-sl2-block-is-semisimple --resolved-by final-adjudicator --group f --queue research/frontier-33-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-33 --disposition repaired --source-status verified --basis-file research/frontier-33-step8-fa-f-1-ex-a-generic-sl2-block-is-semisimple.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.


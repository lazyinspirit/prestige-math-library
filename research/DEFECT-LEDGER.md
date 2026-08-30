# Defect ledger — generated view

> GENERATED from `research/defect-ledger.jsonl` @ 27407c551593 by `tools/defect-ledger.mjs render` — do not edit.

## What the numbers mean, first

| | |
|---|---|
| defects caught before publication | 3655 |
| now mechanically prevented | 233 |
| escaped to publication | 1 |
| still open | 27 |

## frontier-11 — 4 row(s)

| subclass | 3-review | 4-baseline | 7-judge | post-publication |
|---|---|---|---|---|
| other | 1 |  | 1 | 1 |
| gate-wrong-signature |  | 1 |  |  |

## frontier-12 — 8 row(s)

| subclass | 3-fix | 5-author | 6b-adjudicate | 9-scope | 9-receipt | 10-report |
|---|---|---|---|---|---|---|
| other | 1 |  | 1 | 1 | 2 | 1 |
| stage-unowned |  | 1 |  |  |  |  |
| gate-vacuous |  |  |  |  | 1 |  |

## frontier-13 — 54 row(s)

| subclass | 3-fix | 6b-adjudicate | 7-judge | 8-adjudicate | 9-scope | 9-receipt | 10-report | unknown |
|---|---|---|---|---|---|---|---|---|
| citation-inflated |  |  |  | 7 |  |  |  | 3 |
| false-or-overstrong-statement |  |  |  | 6 |  |  |  | 2 |
| other | 1 | 4 |  |  |  |  |  | 2 |
| invalid-inference |  |  |  | 1 |  |  |  | 4 |
| gate-vacuous |  |  |  | 1 |  | 4 |  |  |
| false-or-overstrong-title |  |  |  | 2 |  |  |  | 1 |
| missing-hypothesis |  |  |  | 1 |  |  |  | 1 |
| citation-missing |  |  |  | 1 |  |  |  | 1 |
| citation-misattributed |  |  |  |  |  |  |  | 2 |
| false-decline |  |  |  |  | 2 |  |  |  |
| invalid-witness |  |  |  | 1 |  |  |  |  |
| arithmetic-error |  |  |  | 1 |  |  |  |  |
| ill-typed-construction |  |  |  | 1 |  |  |  |  |
| false-boundary-disposition |  |  |  |  |  |  |  | 1 |
| deferral-without-destination |  |  |  |  |  |  |  | 1 |
| stage-unowned |  |  |  |  |  |  | 1 |  |
| liveness-false-positive |  |  | 1 |  |  |  |  |  |
| dispatch-lost |  | 1 |  |  |  |  |  |  |

## frontier-14 — 438 row(s)

| subclass | 1-scaffold | 3-review | 4-splice | 6a-read | 6b-adjudicate | 6c-cross | 7-judge | 8-adjudicate | 9-scope | 9-receipt |
|---|---|---|---|---|---|---|---|---|---|---|
| citation-missing |  |  |  | 37 | 1 |  |  | 120 |  |  |
| other |  | 1 |  |  | 31 | 3 | 2 | 1 |  |  |
| citation-inflated |  |  |  | 17 | 5 |  |  | 10 |  |  |
| missing-choice-scope |  |  |  | 23 | 2 |  |  | 7 |  |  |
| citation-misattributed |  |  |  | 17 | 4 |  |  | 3 |  |  |
| invalid-inference |  |  |  | 7 | 5 |  |  | 9 | 1 |  |
| citation-truncated |  |  |  | 10 | 5 | 1 |  | 1 | 1 |  |
| false-boundary-disposition |  |  |  | 7 | 10 |  |  |  |  |  |
| false-or-overstrong-title |  |  |  | 6 | 5 |  |  | 2 |  |  |
| undefined-notation |  |  |  | 9 | 1 |  |  | 2 |  |  |
| false-or-overstrong-statement |  |  |  | 7 | 2 |  |  | 2 |  |  |
| missing-hypothesis |  |  |  | 3 | 3 |  |  | 5 |  |  |
| ill-typed-construction |  |  |  |  | 7 |  |  | 2 |  |  |
| false-decline |  |  |  |  |  |  |  |  | 7 |  |
| prompt-transcription |  |  |  |  | 4 | 1 |  |  |  |  |
| unsourced-locator |  |  |  |  | 2 | 1 |  |  | 1 |  |
| gate-vacuous | 1 |  |  |  | 2 |  |  |  |  | 1 |
| invalid-witness |  |  |  |  | 1 |  |  | 2 |  |  |
| deferral-without-destination |  |  |  |  |  |  |  |  | 3 |  |
| citation-corrupted |  |  |  |  |  | 2 |  |  |  |  |
| artifact-overwritten |  |  |  | 1 |  |  |  | 1 |  |  |
| dispatch-lost |  |  | 1 |  | 1 |  |  |  |  |  |
| gate-wrong-signature | 1 |  |  |  |  | 1 |  |  |  |  |
| arithmetic-error |  |  |  | 1 |  |  |  |  |  |  |
| thin-harvest |  |  |  |  | 1 |  |  |  |  |  |
| scope-drop |  |  |  |  |  |  |  |  | 1 |  |
| scheduler-race |  |  |  |  |  |  |  | 1 |  |  |
| stage-unowned |  |  |  |  |  |  |  |  |  | 1 |
| read-only-role-asked-to-write |  |  |  |  | 1 |  |  |  |  |  |
| scope-loss |  |  | 1 |  |  |  |  |  |  |  |

## frontier-15 — 91 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 7-judge | 8-adjudicate | 9-scope |
|---|---|---|---|---|---|---|
| false-boundary-disposition | 12 | 3 |  |  |  | 1 |
| citation-missing | 10 | 6 |  |  |  |  |
| citation-inflated | 7 | 1 | 4 |  |  |  |
| citation-misattributed | 4 | 4 |  |  |  | 1 |
| false-or-overstrong-statement | 2 | 3 |  |  | 2 |  |
| invalid-inference | 2 | 2 |  |  | 1 |  |
| false-decline |  |  |  |  |  | 4 |
| undefined-notation | 2 | 1 |  |  |  |  |
| other | 1 | 1 |  | 1 |  |  |
| missing-hypothesis | 1 | 1 | 1 |  |  |  |
| false-or-overstrong-title | 1 | 1 |  |  | 1 |  |
| unsourced-locator |  | 2 |  |  |  |  |
| missing-choice-scope |  | 2 |  |  |  |  |
| gate-vacuous |  | 2 |  |  |  |  |
| ill-typed-construction | 1 |  |  |  |  |  |
| citation-corrupted | 1 |  |  |  |  |  |
| citation-truncated |  |  | 1 |  |  |  |
| invalid-witness |  |  |  |  | 1 |  |

## frontier-16 — 273 row(s)

| subclass | 5-author | 6a-read | 6b-adjudicate | 6c-cross | 8-adjudicate | 8-rejudge | 9-scope |
|---|---|---|---|---|---|---|---|
| citation-missing |  | 42 | 7 | 2 |  | 2 |  |
| citation-inflated |  | 10 | 2 |  | 37 | 2 |  |
| citation-truncated |  | 15 | 7 |  | 4 | 11 |  |
| invalid-inference |  | 15 | 1 |  | 7 | 2 |  |
| missing-hypothesis |  | 17 | 1 |  | 3 |  |  |
| false-boundary-disposition | 2 | 10 | 2 |  |  |  |  |
| ill-typed-construction |  | 1 |  |  | 12 | 1 |  |
| undefined-notation |  | 5 |  |  | 5 | 2 |  |
| false-or-overstrong-title |  | 9 |  |  | 2 |  |  |
| false-or-overstrong-statement |  | 4 |  |  | 3 |  | 1 |
| citation-misattributed |  | 6 | 2 |  |  |  |  |
| missing-choice-scope |  | 2 | 4 |  |  |  |  |
| invalid-witness |  | 2 |  |  | 2 |  |  |
| other |  | 2 |  |  |  |  |  |
| arithmetic-error |  | 2 |  |  |  |  |  |
| citation-corrupted |  | 1 |  |  |  |  |  |
| thin-harvest |  |  | 1 |  |  |  |  |
| gate-vacuous | 1 |  |  |  |  |  |  |
| deferral-without-destination |  |  |  |  |  |  | 1 |
| false-decline |  |  |  |  |  |  | 1 |

## frontier-17 — 333 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 8-adjudicate | 8-rejudge | 9-scope |
|---|---|---|---|---|---|---|
| citation-missing | 24 | 3 |  | 80 | 6 |  |
| citation-truncated | 29 | 3 | 1 | 18 | 1 |  |
| other | 6 | 14 | 2 | 11 |  |  |
| invalid-inference | 16 | 6 |  | 5 | 1 |  |
| missing-hypothesis | 7 | 5 |  | 8 | 2 |  |
| citation-inflated | 4 | 4 | 1 | 8 | 2 | 1 |
| citation-misattributed | 15 | 2 |  | 3 |  |  |
| false-or-overstrong-title | 8 | 3 |  |  |  |  |
| missing-choice-scope | 1 | 7 |  |  |  |  |
| false-or-overstrong-statement | 2 | 1 |  | 4 |  |  |
| false-boundary-disposition | 6 |  |  |  |  |  |
| ill-typed-construction | 1 | 2 |  | 1 |  |  |
| citation-corrupted | 2 |  |  |  |  |  |
| undefined-notation | 1 | 1 |  |  |  |  |
| gate-vacuous |  | 1 | 1 |  |  |  |
| invalid-witness | 1 |  |  |  |  |  |
| artifact-overwritten |  |  | 1 |  |  |  |
| arithmetic-error |  |  |  | 1 |  |  |

## frontier-18 — 419 row(s)

| subclass | 6a-read | 6b-adjudicate | 8-adjudicate |
|---|---|---|---|
| citation-inflated | 2 | 5 | 131 |
| false-or-overstrong-statement | 3 | 4 | 60 |
| invalid-inference | 7 | 7 | 45 |
| citation-missing | 2 | 3 | 28 |
| missing-hypothesis |  | 2 | 17 |
| citation-truncated | 1 | 1 | 16 |
| ill-typed-construction |  |  | 17 |
| undefined-notation |  |  | 12 |
| citation-misattributed | 2 | 5 | 4 |
| invalid-witness | 1 | 1 | 8 |
| false-or-overstrong-title | 1 | 2 | 6 |
| missing-choice-scope | 2 |  | 7 |
| citation-corrupted | 2 | 3 |  |
| arithmetic-error |  | 2 | 2 |
| other |  | 4 |  |
| false-boundary-disposition | 2 | 1 |  |
| liveness-false-positive |  | 1 |  |

## frontier-19 — 196 row(s)

| subclass | 6a-read | 6b-adjudicate | 7-judge | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|
| invalid-inference | 16 | 1 | 6 | 4 |  |
| missing-hypothesis | 6 | 9 | 1 | 8 | 1 |
| citation-missing | 4 |  | 5 | 8 | 4 |
| ill-typed-construction | 10 | 1 | 1 | 4 | 2 |
| false-or-overstrong-statement | 3 | 1 | 2 | 8 | 1 |
| citation-misattributed | 7 | 4 |  | 2 |  |
| missing-choice-scope | 7 |  | 3 | 1 | 1 |
| citation-inflated | 1 | 2 | 1 | 8 |  |
| citation-corrupted | 6 | 1 | 2 |  | 1 |
| other | 1 | 7 |  |  |  |
| false-or-overstrong-title | 1 | 1 | 1 | 4 |  |
| invalid-witness | 3 | 1 | 1 |  | 2 |
| citation-truncated |  |  | 1 | 4 | 1 |
| arithmetic-error | 3 |  |  | 1 | 1 |
| false-boundary-disposition | 3 | 1 |  |  | 1 |
| undefined-notation | 1 | 1 |  | 2 |  |
| gate-vacuous |  | 1 |  |  |  |

## frontier-20 — 348 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 7-judge | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|---|
| other | 15 | 55 | 4 |  |  |  |
| invalid-inference | 16 | 17 | 2 | 7 | 7 | 6 |
| false-or-overstrong-statement | 2 | 13 |  | 2 | 10 |  |
| citation-corrupted | 26 |  |  | 1 |  |  |
| missing-hypothesis | 4 | 2 | 2 | 3 | 12 | 3 |
| missing-choice-scope |  | 1 |  | 2 | 17 | 1 |
| citation-missing | 5 |  |  |  | 8 | 6 |
| ill-typed-construction |  | 1 |  | 1 | 15 | 2 |
| undefined-notation | 3 | 1 |  | 1 | 10 | 2 |
| invalid-witness | 1 | 1 |  | 2 | 10 |  |
| false-boundary-disposition | 5 | 1 |  | 1 | 5 | 1 |
| citation-inflated |  | 1 |  | 2 | 4 | 5 |
| citation-misattributed | 3 | 3 |  |  | 1 | 2 |
| citation-truncated |  |  |  | 3 | 2 | 2 |
| arithmetic-error | 1 | 1 |  |  | 4 |  |
| false-or-overstrong-title | 1 |  |  |  |  | 1 |

## frontier-21 — 260 row(s)

| subclass | 6a-read | 6b-adjudicate | 7-judge | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|
| scope-drop |  | 62 |  |  |  |
| other | 22 | 28 |  |  |  |
| missing-choice-scope | 23 | 3 |  |  |  |
| invalid-inference | 14 | 1 | 4 | 4 | 2 |
| false-or-overstrong-statement | 4 | 8 | 5 | 2 |  |
| citation-missing | 7 | 9 |  |  |  |
| missing-hypothesis |  | 6 | 4 |  | 1 |
| undefined-notation | 3 | 1 | 5 |  |  |
| invalid-witness | 2 | 1 | 4 | 1 | 1 |
| citation-inflated | 4 | 2 |  | 1 | 1 |
| false-boundary-disposition | 1 | 5 | 1 |  |  |
| ill-typed-construction |  |  | 2 | 1 | 4 |
| false-or-overstrong-title | 4 |  | 1 | 1 |  |
| arithmetic-error |  | 1 | 2 | 1 |  |
| citation-misattributed |  | 1 |  |  |  |

## frontier-22 — 338 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 8-adjudicate | 8-rejudge | 10-report |
|---|---|---|---|---|---|---|
| other | 85 | 38 | 14 |  |  |  |
| invalid-inference | 13 | 6 |  | 13 | 2 | 1 |
| missing-hypothesis | 7 | 8 |  | 5 |  | 5 |
| citation-corrupted | 23 |  |  |  |  |  |
| false-or-overstrong-statement | 7 | 5 |  | 7 | 1 |  |
| ill-typed-construction | 1 | 5 |  | 9 |  | 2 |
| citation-missing | 4 | 8 |  |  | 2 | 1 |
| missing-choice-scope | 2 | 6 |  | 4 |  | 3 |
| false-boundary-disposition |  | 8 |  | 2 |  | 1 |
| citation-truncated |  | 2 |  |  | 2 | 7 |
| undefined-notation | 1 | 1 |  | 7 |  | 1 |
| invalid-witness |  |  |  | 8 |  |  |
| citation-misattributed | 1 |  |  | 1 | 1 | 2 |
| citation-inflated |  | 1 |  |  |  | 2 |
| arithmetic-error | 2 |  |  |  |  |  |
| gate-vacuous |  | 1 |  |  |  |  |

## frontier-23 — 348 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|
| other | 103 | 92 | 14 |  |  |
| invalid-inference | 4 | 19 | 2 | 5 | 3 |
| false-or-overstrong-statement | 1 |  |  | 12 | 2 |
| ill-typed-construction | 1 | 1 |  | 4 | 4 |
| missing-hypothesis |  | 3 |  | 6 | 1 |
| missing-choice-scope |  |  |  | 10 |  |
| undefined-notation |  | 2 |  | 6 | 1 |
| invalid-witness |  |  |  | 8 | 1 |
| missing-case | 2 |  |  | 5 |  |
| citation-missing | 4 |  |  | 1 | 2 |
| false-or-overstrong-title |  |  |  | 4 | 1 |
| false-boundary-disposition | 1 |  |  | 2 | 1 |
| citation-inflated |  |  |  | 2 | 2 |
| false-computation | 1 |  |  | 2 |  |
| invalid-refutation | 1 |  |  | 1 |  |
| missing-map | 1 |  |  | 1 |  |
| false-claim |  | 1 |  | 1 |  |
| citation-truncated |  |  |  | 2 |  |
| arithmetic-error |  |  |  | 2 |  |
| overstrong-title-or-statement | 1 |  |  |  |  |
| ill-formed |  | 1 |  |  |  |
| citation-misattributed |  |  |  | 1 |  |

## frontier-24 — 226 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|
| other | 41 | 39 | 9 |  |  |
| invalid-inference | 6 | 8 |  | 18 | 4 |
| missing-hypothesis | 2 | 6 |  | 10 | 5 |
| invalid-witness |  |  |  | 12 |  |
| ill-typed-construction |  |  |  | 8 |  |
| ill-formed | 2 | 4 |  | 1 |  |
| false-or-overstrong-statement | 1 | 2 |  | 3 |  |
| undefined-notation |  |  |  | 6 |  |
| false-boundary-disposition | 3 | 1 |  | 1 |  |
| false-claim |  | 4 |  |  | 1 |
| citation-inflated | 1 | 2 |  |  | 1 |
| citation-corrupted | 4 |  |  |  |  |
| citation-truncated |  |  |  |  | 4 |
| arithmetic-error | 3 |  |  |  |  |
| missing-case |  |  |  | 3 |  |
| false-computation |  |  |  | 3 |  |
| citation-misattributed |  | 1 |  | 1 |  |
| citation-missing |  |  |  | 1 | 1 |
| missing-choice-scope |  |  |  |  | 2 |
| false-or-overstrong-title |  | 1 |  |  |  |
| prompt-transcription |  |  |  | 1 |  |

## frontier-25 — 308 row(s)

| subclass | 6a-read | 6b-adjudicate | 6c-cross | 7-judge | 8-adjudicate | 8-rejudge |
|---|---|---|---|---|---|---|
| invalid-inference | 15 | 15 |  | 22 | 3 | 5 |
| citation-inflated |  | 3 |  | 25 | 1 | 23 |
| other | 24 | 7 | 3 |  |  |  |
| missing-hypothesis | 1 | 9 |  | 4 | 7 | 9 |
| ill-typed-construction | 1 | 3 |  | 11 | 5 | 2 |
| undefined-notation | 1 |  |  |  | 3 | 14 |
| false-or-overstrong-statement | 3 |  |  | 6 | 6 | 1 |
| false-claim |  | 8 |  |  | 3 |  |
| citation-misattributed | 8 | 2 |  |  |  |  |
| citation-corrupted | 8 | 1 |  |  |  |  |
| citation-missing | 2 |  |  |  |  | 7 |
| citation-truncated |  |  |  |  |  | 8 |
| false-computation | 2 |  |  |  | 3 |  |
| ill-formed | 2 | 1 |  |  | 2 |  |
| arithmetic-error |  | 2 |  |  |  | 2 |
| missing-case |  |  |  |  |  | 4 |
| false-or-overstrong-title |  |  |  |  | 3 |  |
| invalid-refutation |  |  |  |  | 2 | 1 |
| missing-map |  |  |  |  | 2 |  |
| overstrong-title-or-statement |  | 1 |  |  |  |  |
| false-boundary-disposition | 1 |  |  |  |  |  |
| invalid-witness |  |  |  |  | 1 |  |

## pre-frontier-13 — 3 row(s)

| subclass | A10 | owner | unknown |
|---|---|---|---|
| other | 1 | 1 | 1 |

## ra-enrich-01 — 2 row(s)

| subclass | 8-rejudge | unknown |
|---|---|---|
| other | 1 | 1 |

## subjects-01 — 7 row(s)

| subclass | unknown |
|---|---|
| other | 7 |

## Open

- `frontier-13-D036` frontier-13 · false-boundary-disposition · class:2169-items
- `frontier-14-D356` frontier-14 · false-or-overstrong-title · cor-functor-categories-inherit-completeness-and-cocompleteness
- `frontier-14-D392` frontier-14 · undefined-notation · thm-frolik-internal-characterisation-of-cech-completeness
- `frontier-14-D395` frontier-14 · false-decline · class:1-item
- `frontier-14-D396` frontier-14 · deferral-without-destination · class:36-items
- `frontier-14-D397` frontier-14 · deferral-without-destination · class:16-items
- `frontier-14-D398` frontier-14 · scope-drop · class:5-items
- `frontier-14-D401` frontier-14 · deferral-without-destination · class:3-items
- `frontier-14-D404` frontier-14 · unsourced-locator · class:1-item
- `frontier-14-D409` frontier-14 · false-boundary-disposition · class:240-items
- `frontier-14-D413` frontier-14 · unsourced-locator · research/frontier-14-batch-6.coverage.json
- `frontier-14-D414` frontier-14 · other · class:16-items
- `frontier-13-D044` frontier-13 · gate-vacuous · tools/proof-contract.mjs
- `frontier-14-D417` frontier-14 · other · tools/url-sweep.mjs
- `frontier-14-D419` frontier-14 · artifact-overwritten · tools/regen-contract-entries.mjs
- `frontier-14-D420` frontier-14 · scheduler-race · 7-judge
- `frontier-14-D421` frontier-14 · stage-unowned · 8-rejudge
- `frontier-14-D425` frontier-14 · gate-vacuous · tools/finite-smoke.mjs
- `frontier-14-D426` frontier-14 · gate-vacuous · tools/citation-fidelity.mjs
- `frontier-14-D427` frontier-14 · gate-vacuous · tools/boundary-audit.mjs
- `frontier-14-D428` frontier-14 · gate-wrong-signature · research/frontier-14-alpha-6c.task.md
- `frontier-14-D429` frontier-14 · prompt-transcription · research/frontier-14-brief-alpha-6c.md
- `frontier-13-D051` frontier-13 · gate-vacuous · research/frontier-13-spine-audit.json
- `frontier-14-D430` frontier-14 · other · covering-spaces-and-lifting
- `frontier-12-D008` frontier-12 · other · spine-audit receipt
- `frontier-13-D053` frontier-13 · other · tools/precheck.mts
- `pre-frontier-13-D003` pre-frontier-13 · other · tools/run-wave.test.mjs

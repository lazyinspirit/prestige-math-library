# citation-fidelity regression fixture

Three planted defects, each the shape of one that reached disk on a real run:

| fact | defect | detector |
|---|---|---|
| `L4` | cited text carries `$n \ge 1$`, restatement quantifies over all `$n$` | `boundDropped` |
| `L5` | cited definition says "Two arguments only", restatement takes a finite family | `arityWidened` |
| `L9` | the recorded `quote` appears nowhere in the cited item | quote-not-found |

`L4` is `thm-gram-determinant-detects-linear-independence`; `L5` is
`thm-carmichael-function-formula` against `def-lcm`. Both were confirmed fatal
on `frontier-13`.

Run:

```
node tools/citation-fidelity.mjs tools/fixtures/citation-fidelity/contracts.json \
  --items-dir tools/fixtures/citation-fidelity/items
```

Expect exactly 1 quote-not-found and 2 widening candidates. Fewer means a
detector has silently stopped firing — which is the failure mode the whole tool
exists to prevent, so it must not be able to happen to the tool itself.

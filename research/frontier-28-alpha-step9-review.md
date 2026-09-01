# Step 9 scope-denial delta review — frontier-28

On Tuesday, September 1, 2026, I reviewed the 13 pending rows in
`research/frontier-28-step9-scope-delta.json` against the current plan,
coverage, authored pages, and cited-source harvest records.

All 13 pending rows remain valid `stands` decisions. No decline was overturned,
so no in-scope addition, manifest edit, coverage rewrite, contract/risk/splice
update, impact receipt update, new page, forward dependency, or reading-order
change was needed.

| Group | Batch | Page | Result | Step 9 decision | Evidence |
|---|---:|---|---|---|---|
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Exercise (22.6)(4), the \varprojlim^1 vanishing reformulation` | `stands` | CA-13 still carries only the ordinary Mittag-Leffler exactness route, and the batch-3 notes still say rows whose only extra payload is `\varprojlim^1` stay out of scope. |
| `a` | 2 | `flatness-and-faithful-flatness` | `Proposition 11.22` | `stands` | The exact destination remains the authored B-page example `ex-faithfully-flat-principal-open-cover` on `flatness-and-faithful-flatness-examples`. |
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Lemma 10.97.7, finite closed-fibre local completions` | `stands` | The live commutative-algebra track still routes this exact source result to CA-14 `henselian-rings-and-equicharacteristic-cohen-structure`, while CA-13 still stops at the base local-completion consequences. |
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Lemma 24.3 (Artin-Rees)` | `stands` | CA-11 still owns `thm-artin-rees-lemma`, and CA-13 still depends on that earlier page rather than duplicating the theorem. |
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Example (22.31), formal power series as a completion of a polynomial ring` | `stands` | The CA-13 design and current batch-3 notes still exclude formal power series from this low pair, and the separate `formal-power-series` branch remains the published home. |
| `a` | 2 | `flatness-and-faithful-flatness` | `Lemma 10.99.7 (Local criterion for flatness)` | `stands` | CA-12 still keeps the local criterion in Tor-free ideal/fibre formulations and does not import the Tor-stated source form as its own result. |
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Exercise (22.25), principality reflected by faithful completion` | `stands` | The current CA-13 pair still limits itself to local, flat, and Hilbert-Samuel completion consequences; the stronger principal-ideal/non-zero-divisor completion facts remain later inline support, not a current page item. |
| `a` | 3 | `inverse-limits-and-noetherian-completion` | `Exercise (22.14)(3), regularity is preserved by completion` | `stands` | The exact later home remains CA-18 `regular-local-rings-and-homological-dimension`, which still carries the completion-preserves-regularity corollary. |
| `a` | 2 | `flatness-and-faithful-flatness` | `Remark 10.78.4` | `stands` | CA-12 still keeps the Noetherian finite-flat consequences and does not open the non-Noetherian branch on this page. |
| `a` | 2 | `rees-modules-artin-rees-and-hilbert-samuel-theory` | `Example 10.58.9` | `stands` | The exact destination remains the authored B-page example `ex-hilbert-series-of-a-polynomial-ring` on `rees-modules-artin-rees-and-hilbert-samuel-theory-examples`. |
| `c` | 6 | `chebyshev-bounds-and-mertens-theorems` | `Definition 21.4.7, the prime-indicator function a(n) = pi(n) - pi(n-1)` | `stands` | NT-11 still proves the needed theta-to-`pi` identity directly from Abel summation, so the source-local indicator notation remains unnecessary. |
| `c` | 6 | `chebyshev-bounds-and-mertens-theorems` | `Proposition 2, the simple pole asymptotic for zeta(s) near s = 1` | `stands` | NT-12 still says zeta continuation is not needed there, while CA-22 still owns the continuation and residue-one pole at `s = 1`, so the deferment to `the-riemann-zeta-function` remains exact. |
| `c` | 6 | `chebyshev-bounds-and-mertens-theorems` | `Proposition 4, the smooth-cutoff prime sum asymptotic from Fourier analysis` | `stands` | NT-11 still follows the finite Abel-summation/Gamma-side constant route for Mertens and does not add Tao's separate Fourier-analytic smoothing argument. |

No `frontier-28` defect-ledger row is currently open: `node -e "const fs=require('fs');const rows=fs.readFileSync('research/defect-ledger.jsonl','utf8').trim().split(/\\n/).map(JSON.parse).filter(r=>r.run==='frontier-28'&&r.disposition==='open');console.log('COUNT',rows.length);"` returned `COUNT 0`. No ledger-row close/defer edit was owed. I still re-rendered `research/DEFECT-LEDGER.md` on the current ledger bytes so the generated view stays current.

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --all`
  - result: groups `a/b/c/d` refreshed with `0` pending rows each
- `node tools/scope-decisions.mjs check --run frontier-28`
  - result: `45` current decline rows, `0` errors
- `node tools/defect-ledger.mjs render`
  - result: rendered `4684` ledger rows to `research/DEFECT-LEDGER.md`
- `git diff --check -- research/frontier-28-alpha-a-scope-decisions.json research/frontier-28-alpha-c-scope-decisions.json research/DEFECT-LEDGER.md`
  - result: clean

No blocker remains for this Step 9 scope review.

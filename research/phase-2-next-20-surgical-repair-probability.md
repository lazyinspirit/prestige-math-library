# Phase 2 next-20 surgical repair: probability batch 3

Date: 2026-09-11. Scope: the six confirmed group-c/batch-3 post-freeze active consumers named in `research/phase-2-next-20-postfreeze-active-consumer-audit.{md,json}`, their batch-3 manifest entries, and their batch and aggregate proof contracts. No published item, page, defect-ledger row, pair, engine file, or runtime-state file was changed. Independent audit remains pending; this receipt records local repair and focused verification only.

## Exact repairs

- `lem-simultaneous-rational-conditional-distribution-function-versions`: removed load-bearing use of the affected published RN/CE/algebra/conditional-MCT chain. Steps 1.1-2.1 adjoin zero-coefficient complements before refining arbitrary simple displays; prove simple representation independence; separate `integral(0)=0` from positive-scalar homogeneity; and derive nonnegative additivity, MCT, bounded decreasing convergence and null-set invariance. Steps 3.1-4.1 prove the finite positive RN density construction directly by the maximal-density/Hahn argument, then prove density uniqueness, order, constants and monotone event limits. Steps 5.1-6.1 apply that interface to rational cuts and perform one measurable null-set fill.
- `lem-rational-conditional-distribution-functions-produce-real-regular-kernels`: uses only the existence clause of the Stieltjes/CDF supplier. Step 2.1 proves probability-measure uniqueness locally from the closed-half-line generating pi-system and finite-measure pi-lambda. Steps 3.1-4.1 use the repaired preceding bounded-decreasing/MCT interface, so the affected published DCT/MCT proofs are no longer dependencies.
- `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`: now explicitly supplies the standard-Borel interfaces needed downstream. Step 1.1 constructs the dense-distance Hilbert-cube embedding, proves separation and gives the inverse-continuity estimate. Step 2.1 proves the weighted product metric induces the product topology and is complete. Step 3.1 obtains the Borel real code from the existing explicit cube code and constructs a countable generating, point-separating, finite-measure-determining algebra. Step 4.1 applies the repaired real kernel and performs the every-fibre support repair.
- `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`: routes the determining algebra through the repaired in-batch existence theorem and proves scalar evaluation uniqueness directly on the measurable sets `{u >= v + 1/m}` using the repaired local nonnegative integral rules. It no longer imports the affected published CE-uniqueness proof.
- `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`: routes coding through the repaired in-batch existence theorem, retains the explicit dyadic-bin scalar factorization, uses only CDF existence, proves CDF uniqueness locally by closed-half-line pi-lambda, and uses sectionwise countable additivity plus pointwise-limit measurability instead of the affected MCT proof.
- `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`: routes determining and integration through repaired in-batch interfaces. Step 1.1 proves marginal substitution locally from indicators, simple functions and local MCT. Step 2.1 proves kernel-integral measurability and the indicator identity by two lambda-system arguments. Step 3.1 extends to arbitrary nonnegative tests with prescribed simple approximants and local MCT. Step 4.1 uses the in-batch determining algebra for one measurable marginal-null discrepancy set.

The six matching entries in `research/phase-2-next-20-batch-3.pages.json` now record the exact repaired statements, dependencies and strategies. `tools/regen-contract-entries.mjs` regenerated citations and derivations for the same six IDs in both proof-contract files; their boundary evidence and risk-review notes were then reconciled to the repaired steps and explicitly labelled local, not independent.

## Item hashes

SHA-256 values before repair are the exact hashes recorded by the post-freeze audit; after values are exact current file-byte hashes.

| Item | Before | After |
|---|---|---|
| `lem-rational-conditional-distribution-functions-produce-real-regular-kernels` | `4f9d34ba04a09e47a424abf5a5939606f8a6085c3f86516c80dc721ddd2e7148` | `c2c81cabd5cc17c3a14c4d3d975df690c3249a0ed06b517380f2c69422f7b34c` |
| `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets` | `73fb8b4f77cb0fe4d7d69a28c316921ddd54cc3985f8a56e7ea76278a6953821` | `53b1fd2fbb89d1dd20b9b47fcc5b3ba8f84eae23d920c2995144d273d045b164` |
| `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions` | `43b815a65c2269f068290bd28a71ab99a74db998b1e89577e2f1760dc0e472b3` | `e22ab30a132f965f4b3b960607d02a74f7ee2b45356bc3286fd5247518830a4f` |
| `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable` | `7bcd062014b749702e3c6d3332687456f2ef6f6c859a233fc38f6a59c25b9cd3` | `82d493531961ae87c2d45211ec35e4290d593f88b2facb24fb00aba9a85bde31` |
| `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` | `46ac1bbf3511cdd27a12ba483823930fe2e2380c8cf31544be5fb2247411db95` | `160ddac9f9d6a3b047f16ca5fd3d2befde2210970b582dbb36ba871fe5c81c51` |
| `lem-simultaneous-rational-conditional-distribution-function-versions` | `a89798504486b5d2ffec5857c90eafe43d57702d7f274e16da41d81544367f6f` | `c661e7ccd061541e55109fa2b2bf81a393470f2dd545b414a6ec0e4cb08fad6c` |

Current metadata hashes after synchronization:

- `research/phase-2-next-20-batch-3.pages.json`: `af5314395e971c6197b8738f02a494cc8551b316243a5c3a22d33ca56eb8b126`
- `research/phase-2-next-20-batch-3.proof-contracts.json`: `28e1f297593ea988a2c4444f1270085d7ecb1b7805a821f006e91814b7c32330`
- `research/phase-2-next-20-proof-contracts.json`: `c61d22d13269c20bc0aaa6fae473df9f14d4b1101fe43f596eec38ffd18f5d2c`

## Focused verification

- `node tools/tsx-run.mjs tools/precheck.mts <six item paths>`: PASS, 6 checked and 0 failing.
- `node tools/rendercheck.mjs <six item paths>`: PASS, 6 files; YAML, wikilinks-in-math, delimiters and KaTeX all clean.
- `node tools/content-policy.mjs research/phase-2-next-20-batch-3.pages.json`: PASS, 51 scoped items, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/phase-2-next-20-batch-3.proof-contracts.json --strict --items <six IDs>`: PASS, 0 errors, 0 warnings, 6/6 checked.
- `node tools/proof-contract.mjs research/phase-2-next-20-proof-contracts.json --strict --items <six IDs>`: PASS, 0 errors, 0 warnings, 6/6 checked.
- Exact JSON comparison of the six batch and aggregate contract objects: PASS, 6/6 identical.
- `node tools/depcheck.mjs --quiet`: PASS with no cycles, unresolved references, or draft items on published pages. It emitted 473 pre-existing repository warnings; none named any of the six repaired items.

The proof reconstruction uses the already recorded Durrett and Varadhan source readings and the fully read local definitions and supplier proofs. No new retrieval claim or source receipt was made.

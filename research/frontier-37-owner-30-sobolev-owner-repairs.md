# Step 5 Sobolev item owner repairs — frontier-37-owner-30

## Scope and guard

Owner repair of the nine item findings in `research/frontier-37-owner-30-refute-10.json`, including all three duplicate findings for the slit-disc norm citation. Six draft item sources and their rows in `research/frontier-37-owner-30-batch-10.proof-contracts.json` were edited. The findings file was preserved. The two page findings belong to the separate page repair owner.

Before edits, recomputed autopilot status showed only reader and refuter jobs in flight; a process scan showed no native Alpha writer. No adjudication, certification stamp, or workflow gate was attempted.

## Mathematical repair and exact suppliers

- `ex-mollification-of-the-absolute-value`: replaced false global membership by `W^{1,infinity}_loc(R)` and membership on every bounded open interval. Added the Countable Choice assumption carried by its Sobolev and mollification suppliers. Step 1.1 directly proves the weak derivative is `sgn` by integration by parts on both half-lines, with zero boundary term at the corner, using `def-weak-derivative-of-a-locally-integrable-function`, Definition. Truncation is now applied only on bounded intervals, where the function `x` and its derivative are bounded. The proof applies `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, Statement, on an enlarged bounded interval at rescaled radius `R epsilon`, giving the unchanged global smooth convolution and derivative formula. `thm-local-smooth-approximation-in-wkp`, Statement, is applied to a bounded interval containing the closure of the approximation interval. Every finite exponent, including 1, retains convergence; the endpoint derivative error retains its lower bound for every scale.
- `thm-meyers-serrin-density-on-an-arbitrary-open-set`, F1: for bounded domains it is the radius clause that becomes inactive. The distance clause remains. Explicitly interpreted distance to the empty complement as infinity for the whole-space case. The theorem Statement is unchanged.
- `cex-c-infinity-up-to-boundary-density-is-domain-sensitive`, F2: stated the actual finite-p p-sum over the function and both coordinate derivatives and the maximum at infinity. The strip estimates use the pth power of precisely that norm; F2 now appears in their tags and contract inputs. The counterexample Statement is unchanged.
- `cex-not-every-open-set-is-a-w-one-p-extension-domain`, F7; `ex-reflection-extension-on-the-half-line`, L2; and `ex-zero-extension-of-a-compactly-supported-sobolev-function`, L2: stated the same exact supplier norm, with dimension-appropriate coordinate derivatives and infinity cases. Their Statements are unchanged. Reflection doubles each pth-power component, so the norm factor remains `2^(1/p)`; zero extension preserves each component. The non-extension contradiction already concerns membership, so it needs no norm-equivalence estimate.

All five norm facts cite the exact displayed norm formula in `def-sobolev-space-wkp-and-its-norm`, Definition. Contracts now quote that formula, synchronize affected proof claims and inputs, add the absolute-value weak-definition citation, and update its choice and boundary worksheet. Numbering adopted the precheck's canonical grouping for the absolute-value proof (finite-p convergence 3.1, oddness 3.2).

## Interface and direct consumers

Only the absolute-value Example interface changed: global membership became local/bounded-interval membership, the interval scope became explicitly open and bounded, and Countable Choice became explicit. Searching `items/` and `library/` found no item consumer of this example, only its examples-page placement. The page repair owner confirmed its prose asserts finite-p convergence on bounded intervals and is compatible with this corrected interface. The other five Statements are unchanged; their fact/proof corrections do not alter consumers' conclusions. No published supplier source was edited, so no published-defect ledger entry is needed.

## Local checks

- Targeted proof precheck: all six sources pass after adopting the proposed numbering repair.
- Targeted renderer/YAML/KaTeX check: all six sources pass.
- Strict proof-contract check for these six IDs: passes, with zero errors and warnings.
- Focused depcheck selected-item checks and global page/cycle checks: passes; existing global multi-home warnings remain.

These are local mathematical and format checks, not an independent audit or recertification. An initial renderer invocation with `--help` was treated as a whole-corpus render and reported unrelated currently edited sources; no conclusion about those sources is recorded here. The final render was explicitly restricted to the six owned sources.

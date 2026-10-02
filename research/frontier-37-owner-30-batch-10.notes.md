# frontier-37-owner-30 — batch 10 scaffold notes

## Scope and authority

- Owned pair: `smooth-approximation-and-sobolev-extension` at order 458.021 and `smooth-approximation-and-sobolev-extension-examples` at 458.022. The manifest has 16 A items and seven B items. All 23 have Step-1 `ready` records with their examined dependency IDs. Readiness records a complete proof route for subsequent authoring; Step 3 still supplies independent mathematical review.
- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the current plan and design, and the available run/batch evidence. `research/frontier-37-owner-30-owner-authoring-direction.md` is absent. The complete PDE-12 design is `research/plan-pde-track.md` lines 1361–1416.
- **Plan/design conflict:** PDE-12's design “Requires” line names PDE-11, MT-15, and the published partition-of-unity, distance-to-closed-set and $C^1$ coordinate-change items. The current `research/plan-spec.json` lists only `weak-derivatives-and-sobolev-spaces` (PDE-11) as this A page's direct prerequisite; the B page requires the A page. The current plan controls the page prerequisites. MT-15 and the relevant published supplier pages are already in the plan's transitive prerequisite closure of PDE-11, and their actual item statements/proofs were checked. The design's source list and warning about chart regularity were retained; no new page pair or cross-batch prerequisite was inserted.
- Two necessary local items were added ahead of their consumers: `def-bounded-c-k-domain-and-boundary-charts`, to make the exact chart regularity explicit, and `lem-compact-support-zero-extension-in-wkp`, to justify local pieces of the extension operator for every integer order and both exponent endpoints. The seven planned B examples remain in the B page. No published item, shared plan, engine state, or verdict was edited. Batch 10 has no supplier from another batch in this run, so its consumer input is `[]`; the dependency ledger refresh completed.

## Mathematical dependency and proof review

- Interior differentiation uses compact test localization and the weak derivative identity before mollifier differentiation. The local approximation theorem uses the real approximate-identity theorem and the published **complex** translation/convolution interface for $\mathbb K=\mathbb C$. The latter was added explicitly to the finite-$p$ smoothing, whole-space density and boundary-density consumers; neither route asserts $L^\infty$ norm density.
- Meyers–Serrin uses a compact exhaustion and a locally finite smooth partition. Each compactly supported piece is mollified with a dyadic error budget. The globally summable objects are the **errors** $e_j=\rho_{\varepsilon_j}*(\eta_j u)-\eta_j u$, rather than the raw partition pieces. Local finiteness identifies the derivatives of $v-u=\sum_j e_j$; Fatou and the Sobolev norm triangle inequality yield $\|v-u\|_{W^{k,p}}\le\sum_j\|e_j\|_{W^{k,p}}<\delta$. This fixes a possible false inference that partial sums of raw partition pieces converge in global Sobolev norm. Countable Choice suffices for these published weak/$L^p$ interfaces; the cutoffs and dyadic radii admit least-index choices.
- `lem-compact-support-zero-extension-in-wkp` uses a cutoff equal to one near the input's compact essential support. Weak locality makes every derivative vanish off that support; testing against $\chi\varphi$ gives each global weak derivative of the zero extension and exact component norms, including $p=\infty$. The separate $W^{1,p}_0$ result instead passes test-function approximants through weak integration by parts. Neither argument assumes an as-yet-unproved trace characterization. The compact-support B example now cites the general local lemma.
- The half-space operator solves the finite Vandermonde equations $\sum_j a_j(-j)^m=1$ for $0\le m<k$. ACL normal sections give boundary values for derivatives of order at most $k-1$, so the moment identities cancel the interface terms in integration by parts. For $p=\infty$, finite-measure $W^{1,1}$ restrictions supply those AC sections. For $n\ge2$, the published Euclidean/completed-product measure identification legitimizes Fubini; $n=1$ uses the one-dimensional AC theorem directly. The chart lemma requires bounded derivatives through order $k$ of both chart directions, uses $C^1$ change of variables, and handles $p=\infty$ by local finite-$q$ passage with uniform essential bounds. The bounded-domain operator then uses a finite atlas, cutoffs, half-space reflection, chart pullback and the new compact-support zero-extension lemma. Its support lies in the prescribed neighborhood of $\overline\Omega$.
- The slit-disc example proves failure of ambient-smooth density by unequal upper/lower Sobolev line traces; the inward-cusp example proves failure of $W^{1,3/2}$ extension by a $c/x$ vertical-energy lower bound. Both use the published ACL/Fubini and Euclidean product-measure interfaces, now declared directly. The half-line example integrates each component norm and gives the factor $2^{1/p}$ for finite $p$. Boundary leakage after mollifying an indicator is shown by its nonzero endpoint limit, without invoking the later trace page.
- Checked the necessary published statements and proof arguments for `lem-test-function-cutoffs-and-euclidean-localization`, weak derivative locality/Leibniz/stability and Sobolev norm conventions, the real and complex approximate-identity interfaces, dominated convergence for the whole-space cutoff tails, Hölder for the slit/cusp and endpoint estimates, completed-product Fubini and Euclidean product identification, linear and $C^1$ changes of variables, ACL and one-dimensional AC representatives, and the bounded restriction/cutoff interface. Their directions and hypotheses meet the uses above. No defective actual published prerequisite was found. The printed factor two in Kinnunen Example 2.39 is a **source** norm typo for $p>1$, not a library published defect; the manifest computes the correct $2^{1/p}$. The explicit Axiom of Choice appears where the published ACL or bounded restriction interfaces require it; no Recorded result proves a replacement and no Foundations path to `deferred-set-theory-beyond-choice` was introduced.

## Full-text sources and harvest

Three complete author-hosted lecture-note PDFs were downloaded and their relevant arguments inspected; `source-fetch-check --stamp` verified all three complete PDF bodies. The exact URL, locator, source result and disposition for each are in `research/frontier-37-owner-30-batch-10.coverage.json`.

| Treatment | Inspected argument and use |
|---|---|
| [Juha Kinnunen, *Sobolev Spaces* (2026)](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf) | 168-page PDF; Ch. 1 Lemma 1.14(4)–(5), Lemma 1.18, Theorems 1.19, 1.21 and 1.25 with nearby definitions/remarks, printed pp. 9–23; Ch. 2 Example 2.39, p. 59; Ch. 3 Definition 3.42 and Theorem 3.43, pp. 84–85. Supports local/global approximation, zero extension, reflection and conditional transfer. |
| [Richard S. Laugesen, *Linear Analysis and Partial Differential Equations* (2020)](https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf) | 158-page PDF; Ch. 3 Proposition 3.7, Theorems 3.8–3.9, Definitions 3.10–3.11, Theorem 3.12 and Corollary 3.13, printed pp. 57–62. Supplies an independent approximation treatment, the $C^1$ first-order atlas/reflection proof and the $p=\infty$ first-order corollary. |
| [Sung-Jin Oh, *Math 222A Lecture Notes* (2024)](https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf) | 179-page PDF; §11.3 Proposition 11.13 and Remark 11.14, printed pp. 157–159. Supplies the higher-order $C^k$ chart and Vandermonde reflection route; the scaffold expands its weak matching and endpoint arguments. |

The coverage checklist counted 39 harvested/canonical results: 26 included, six inline, three already published, three deferred to valid inequality or Lax–Milgram pages, and one dense-singularity exercise out of scope for this pair with an individual reason. There were no retrieval failures, retries, source drops or source-resolution escalations. The original source typo and its correction are preserved in the coverage record and the half-line example strategy.

## Checks and remaining run-level work

| Check | Actual result at this batch's final audit |
|---|---|
| Batch-10 dependency levels | 23 items, maximum in-run level 5, zero errors or cycles. Every item has an explicit `deps` array and label. |
| `coverage-checklist` and `source-fetch-check --stamp` | Exit 0; 39 results, zero coverage errors/warnings; three of three full-text PDFs fetch-verified. |
| Whole-run `manifest-deps.mjs` | Exit 0; 552 items, zero malformed or missing dependencies. |
| Whole-run `content-policy.mjs --manifest-only` | Exit 0; 552 scoped items, zero errors/warnings. |
| `validate-plan.mjs research/plan-spec.json` | Exit 0; page order acyclic and consistent. It notes 319 planned pages with empty item lists; the selected pair's plan inventories are intentionally still empty before the later splice. |
| `extcheck.mjs` and `fwdcheck.mjs` | Both exit 0. Existing unrelated published Recorded/unproved warnings remain in the external-reference report; none is consumed by this batch. |
| `step1-decisions.mjs check --run frontier-37-owner-30` | Batch 10 has zero stale or missing decisions; all 23 records are `ready`. Whole-run work remains in other batches. |
| Required whole-run `item-dependency-levels.mjs check --run frontier-37-owner-30` | Exit 1 solely for 14 empty inventories in seven other pairs: Dirichlet units, smooth proper curves, Riemann–Roch for curves, residues/Serre duality, pure braids, Artin presentation, and Hörmander/Levi. No mislabeled batch-10 item, missing dependency or cycle was reported. Rerun after those suppliers are scaffolded. |

Step 3 should scrutinize the locally finite error/Fatou argument, $p=\infty$ half-space pasting and chart composition, and the two domain-sensitive counterexamples. This scaffold does not claim independent proof approval.

---

# Step 3b authoring record (alpha-high, pair smooth-approximation-and-sobolev-extension)

All 23 pair items are now authored on disk under `items/` (16 A, 7 B), together
with the two pages. Authoring order followed the dispatch's dependency-level
order; a later item was never cited by an earlier one. Checkpoints below name
the exact claim, deps, and checks actually run for each item.

## Level-0 to level-3 items (authored before this checkpoint)

`def-bounded-c-k-domain-and-boundary-charts`, `def-sobolev-extension-domain-and-extension-operator`,
`def-wkp-zero-as-a-sobolev-closure`, `lem-compact-support-zero-extension-in-wkp`,
`lem-mollification-commutes-with-weak-derivatives-in-the-interior`,
`cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump`,
`lem-zero-extension-from-w-one-p-zero`, `thm-local-smooth-approximation-in-wkp`,
`thm-wkp-extension-from-a-half-space`,
`cex-mollification-after-zero-extension-does-not-preserve-boundary-values`,
`cex-not-every-open-set-is-a-w-one-p-extension-domain`,
`ex-zero-extension-of-a-compactly-supported-sobolev-function`,
`lem-c-k-boundary-flattening-preserves-wkp-locally`,
`thm-meyers-serrin-density-on-an-arbitrary-open-set`,
`ex-reflection-extension-on-the-half-line`,
`cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
`rem-meyers-serrin-does-not-assert-density-for-p-infinity`,
`thm-extension-theorem-for-bounded-smooth-domains`.
Local repairs applied in this session: the A-page remark lost its forward
wikilink to the B-page example (it now describes the companion in words);
`cex-not-every-open-set-is-a-w-one-p-extension-domain` gained
`generation.role: counterexample` for its ai-generated statement.

## Level 4-5 items authored in this session

- `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` (A, level 4):
  conditional transfer $N_\Omega(u)\le C\|E\|\|u\|$ through a bounded extension
  operator, with the $L^q$ instance and the bounded-$C^k$-domain instantiation
  via the extension theorem; proof is a three-term norm chain; no future
  embedding theorem is cited.
- `thm-smooth-up-to-the-boundary-density-on-smooth-domains` (A, level 4):
  extension, whole-space mollification, derivative commutation, $L^p$
  approximate-identity convergence for $1\le p<\infty$, restriction contraction;
  $p=\infty$ excluded explicitly; unused scaffold deps not needed by this route
  remain declared.
- `ex-mollification-of-the-absolute-value` (B, level 4): $\|x\|$, even
  mollifier, $u_\varepsilon'=\rho_\varepsilon*\operatorname{sgn}$,
  $u_\varepsilon'(0)=0$ by oddness, continuity gives derivative error at least
  $1/2$ in $L^\infty$ across the corner, while finite-$p$ local convergence
  holds. The scaffold dep on the published B-homed
  `ex-absolute-value-has-a-weak-first-derivative` was dropped (b-leaf repair)
  and replaced by the A-page truncation calculus
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` plus
  `lem-classical-derivatives-are-weak-derivatives`.
- `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses` (A, level 5,
  proof-free): hypotheses of Meyers–Serrin, zero extension, the $C^k$
  chart/reflection construction, the excluded $p=\infty$ endpoint, and the
  non-claims about Lipschitz or all-order extensions.
- `cex-c-infinity-up-to-boundary-density-is-domain-sensitive` (B, level 5):
  slit disc, branch $u=\arg(x+iy)$; membership by $|\nabla u|=1/r$ and polar
  integration for $p<2$; non-density by the endpoint estimate on the two
  vertical strips, whose one-sided traces $0$ and $2\pi$ cannot both be matched
  by one globally smooth function.

## Step 3b close-out checkpoint (alpha-high)

- Proof contracts: `research/frontier-37-owner-30-batch-10.proof-contracts.json`
  now scopes all 23 pair items (22 proof-bearing plus the three definitions and
  two remarks, which carry boundary-only entries). Every fact->source link in
  every Facts block has an exact quote from a citable source section, every
  numbered step has a claim/inputs entry whose `uses`/`inputs` match the item
  text exactly, and all eight boundary axes are dispositioned per item.
- Contract batch battery: proof-contract `--strict` 0 errors / 0 warnings
  23/23; boundary-audit `--fail-on-template --fail-on-contradicted` clean on
  184 rows; citation-fidelity `--fail-on-missing-quote` clean on 139
  citations; finite-smoke 0 errors; risk-report 0 errors.
- Whole-batch battery: `author-check.mts frontier-37-owner-30 10` -> ok (precheck
  18/18, rendercheck 25 files, content-policy 23/0/0, strict contract); 
  coverage-checklist 39 results 0/0; source-fetch-check 3/3; manifest-deps
  23 items 0 errors; item-dependency-levels 810 items exit 0; validate-plan
  exit 0; fwdcheck/extcheck exit 0.
- Local scaffold repairs registered in manifest + contracts: mollifier-family
  definition added to deps of `thm-local-smooth-approximation-in-wkp` and
  `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`; weak
  derivative definition added to `lem-zero-extension-from-w-one-p-zero`.
  Dep-homing scan: 184 deps, all homed inside the pair closure, B->B only to
  earlier same-page items.
- Decisions recorded for all 23 items (16 accept, 7 repaired; confidence 1,
  examined deps = manifest dep arrays). `--phase final` shows zero work rows
  for this pair; `--phase scope` shows the pair's `sufficient` review current.
- Pre-splice findings naming this pair (2 b-leaf, 3 undeclared-prereq) are all
  resolved; the remaining prefix/intra-order findings in that snapshot belong
  to other pairs.
- Dispatch report:
  `research/frontier-37-owner-30-step3b-pair-smooth-approximation-and-sobolev-extension.md`.
  No escalations, no unpublished suppliers consumed, no published defects found.
- Next action if resumed: none for this pair; handoff to Step 4 splice. If any
  item/manifest byte changes, the affected item receipts go stale and must be
  re-recorded after the change is rechecked.

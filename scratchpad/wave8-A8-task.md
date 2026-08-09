# Wave 8 A8 — adjudicate exactly eight A7 rejections

You are the fresh, sole Audit-Alpha for Wave 8 step A8. Read `CLAUDE.md`,
`AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, your substituted prompt, the
complete Wave 8 A6 record, and the current files before acting. Recover the
durable prior-session Wave 8 record; do not trust this handoff without checking
disk. Do not ask for shell-command or edit permission. Do not start A9.

The A7 target receipt contains exactly 17 repaired item ids and the paired sweep
completed 34/34 real verdicts at matching frozen contexts. DeepSeek passed all
17. Terra passed nine and rejected the eight rows below. Adjudicate every row
from current disk; never comply mechanically with a judge.

## Binding A8 rule

A8 is fatal-only. Record one exact-hash row per rejection in
`research/audit/wave8-judge-adjudications.jsonl`, keyed by `id`, `model`, and
`context_sha256`, with `outcome` one of `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive`; include the pre-edit `item_sha256`
from the verdict and `defect_type` (`logic`, `dependency_citation`, or `other`)
for a fatal. Only a `confirmed_fatal` row licenses any content, frontmatter,
contract, impact, source, verification, or page mutation. A nonfatal or false
positive gets its ledger row and absolutely no edit. Fatal repairs are uncapped
but must be minimal.

The orchestrator already recorded the dedicated `pre-a8` snapshot in
`research/audit/wave8-touches.json`. Do not add a competing pre-edit snapshot.
After all licensed edits, run `tools/step8-guard.mjs` against `pre-a8`; it must
show zero nonfatal edits. Remove stale `verification.judge`/`verified` state
only on a fatal-repaired item, refresh its proof contract if proof-bearing,
update the published-repair and impact records, and arrange exact-final
independent Terra certification for every Alpha repair. If outbound transport
is unavailable, assemble complete hash-bound certifier task/index/runner files
for the orchestrator and stop short of manufacturing evidence.

Do not run or broaden a judge sweep. Report the exact item ids you actually
edited; that list alone is the targeted A8 rejudge set. Unchanged siblings and
consumers dispositioned `still-licensed` are not rejudged. Do not write final
judge stamps.

## Eight rejection rows

1. `thm-infinite-product-criterion` — Terra — context
   `758abfc228969b2ea954c97072d36b8a4bcdb9246edc7093b23db9dd11cdde43` —
   item `76262862432c1d9757e46e87a23864cf2b5771e7ccf54cbf56d6970825b5e583`.
   Allegation: `[L7]` asserts the triangle inequality, but its cited absolute-
   value lemma does not state it; steps 1.4 and 4.3 use that assertion.

2. `cex-cauchy-product-of-convergent-series-diverges` — Terra — context
   `c4a69a501d90076bd7fbba2ceee697175c09e82e847160708cf5f9ea94b76e48` —
   item `0e601b43ae73646f5a3aca81ff9621c05f94d8e0212252f764661253885a3eaf`.
   Allegation: step 2.2 needs an Archimedean reciprocal fact to show the lower
   bound eventually exceeds every real below 2, but L3/L4 do not supply one.

3. `fs-evt-holds-on-every-bounded-domain` — Terra — context
   `af098406d0660cb07c8efe4a231650c089948e94f644fcbab45bf8f431cccc06` —
   item `902d0650f650fb477a8f64a1c7b87b14479fe61736592623e22ab6d28541fb81`.
   Allegation: step 3.1 uses a two-element maximum without a listed Fact for
   its existence/membership properties.

4. `thm-continuous-image-of-a-compact-set-r` — Terra — context
   `434414bf9332825d9963055bf3753c8e4c264fa2dce4da64b10fc6854b6f2d76` —
   item `d46870f38f1423f0ef5473270dc48625a5038f14af0a54310d8b99bada322908`.
   Allegation: this Statement acknowledges duplication, contradicting
   `lem-real-and-metric-notions-agree` saying that lemma is the single place
   where duplication is acknowledged.

5. `lem-paracompact-hausdorff-cover-shrinking` — Terra — context
   `602d1e306532760f54b6c07170bc2f711bc331e54d94a9b7ede3fe9e4cdffadf` —
   item `55760f96650fadd4302ed753ecf4626d7830798a3509e26d1b46929082c1464b`.
   Allegation: F1 omits that the locally finite open refinement covers X, yet
   step 1.1 uses F1 to take a refining cover.

6. `lem-nondegenerate-interval-is-not-null` — Terra — context
   `44169a618efadb4fd877829e8f4e2b8e93fbcd27efdee5b91d663fea265ba306` —
   item `ad4ee697b22ebdedc41eb9c3f018206e79107236e122642b79e32815c64693dc`.
   Allegation: L6 asserts positivity of positive-base natural powers, but its
   cited sources do not state or derive that claim.

7. `cor-q-is-meager-and-not-g-delta` — Terra — context
   `6c8c857e5d4fe3bf46e1842f8ff940ad591b548ccef8a5459ae69f598c177a5f` —
   item `8dfaf08dc3d49e97498b13ecc81fda7bcf6c3037967d65b8e058c906aa066629`.
   Allegation: L1's claim that every at-most-countable family has an N-indexed
   presentation is not stated by `def-countable` and is false for the empty
   family as written.

8. `thm-mertens` — Terra — context
   `26dc82d1e0bf3f01d8567a56b6ebf0dbd19f0be6a666fc74b4361ae74827c436` —
   item `af80f286f77d5a0dad05c544e97da2becd3fd7e6f6f17f4652ea6bd4c4857835`.
   Allegation: L9 is a generic heading rather than a faithful statement of the
   cited limit theorem, but steps 1.3 and 6.1 rely on it.

## Required durable handoff

Append a complete A8 section to `research/audit/wave8-alpha.md` and write a
concise `research/audit/wave8-A8.md`. Include all eight outcomes and evidence,
the exact fatal-only edit list, contract/impact implications, independent-reader
status, required targeted rejudge ids, and any repeated-touch personal-audit
escalations. No deletion, id change, or reading-order mutation is authorized.

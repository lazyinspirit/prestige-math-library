# Four unchanged claims: actual publication provenance

The existing closeout path already supports these four claims. No new no-op schema or source edit is needed. Every current source still has `verification.repair` pointing to its corresponding `research/quantum-hopf-hecke-75-2026-10-15-owner/published-repairs/ID.json`.

`tools/run-commit-scope.mjs` first calls `recordedPublishedRepair` using that actual frontmatter path. A valid receipt is accepted without requiring its run to equal the later run's claim; its before archive and receipt become owned closeout inputs. The unchanged-publication fallback runs only if that validation fails.

All four prior receipts record genuine repairs at 2026-10-15 03:30:31–34 UTC, before the current run's claims at 03:36:26 UTC. Their stored content identities equal the corresponding later claim identities. Their before archives are byte-for-byte identical to actual earlier committed published sources:

- `def-metric-bounded-diameter`: commit `240fac2b619e8e68350605cca8658f8071693558`, prior owner-delegated publication verification dated 2026-08-02.
- `def-norm-and-normed-space`: commit `370dc1702803c0801aabe114c584f5c56dd4a4e6`, prior owner-delegated publication verification dated 2026-08-10.
- `def-p-norms-on-rn`: the same commit, prior audit dated 2026-07-29.
- `thm-sequential-criterion-for-continuity`: commit `60be95d7528f621ccaee384cf822df5cdba38e14`, prior owner-delegated publication verification dated 2026-08-09.

The mismatch with the current canonical sources is explained by the legitimate preclaim prior-run repairs, rather than dependency levels or frontmatter formatting alone. Those repairs removed remark dependencies, replaced corresponding convention commentary with actual supplier interfaces, and replaced prior verification blocks with their repair paths. Actual norm definitions, rational-p domain, and sequential theorem proof remain recorded under their prior repair dispositions. No new proof audit is asserted here.

The earlier `quantum-prerequisites-4-2026-10-15-step6-report.md` concerns eighteen new items and does not claim initial publication of these four; their appearances in its publication-readiness context do not replace the earlier committed publication and prior repair chain.

The native policy still requires exact current canonical identity, authentic published before bytes and their recorded identities, the prior run's matching unique pre-edit claim, prior publication audit or authenticated commit, exact canonical ledger evidence, and recorded successful local precheck/render evidence with valid chronology. Root should execute the actual scoped policy validation during closeout preparation. This investigation read those requirements and existing evidence only; it did not execute policy checks, compute hashes, run tests, or alter source, claims, receipts, native evidence, ledgers, or frozen Step-3 closure.

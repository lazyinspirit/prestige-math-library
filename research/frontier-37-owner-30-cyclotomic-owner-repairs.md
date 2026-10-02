# Cyclotomic owner repairs — frontier-37-owner-30

Date: 2026-10-01T11:26:58.433583+00:00

## Ownership and evidence

Read CLAUDE.md, README.md, and SCHEMA.md. Engine PID 1706 was running. Disk-derived status at 2026-10-01T11:23:36Z showed readers/refuters only; no Alpha5a-a writer. Processes and state were checked again immediately before each mutation phase and showed no Alpha writer. This lane edits six item files (five assigned carriers and the necessary direct consumer), six batch-4 proof-contract rows, and this record. No engine state, findings, decisions, gates, or certifications were changed.

Original findings remain intact in `research/frontier-37-owner-30-refute-4.json` (SHA-256 3cb1078052a31e5d6d5f0ff749242bee5604f3c344aa58c34a163353e95cb7c2). All six findings are recorded below; these repairs are local mathematical work, not independent adjudication.

## Findings and repairs

1. `cor-first-supplement-via-cyclotomic-frobenius`, F3, fatal false claim: removed the range assertion for the unreduced integer power. Euler criterion remains a congruence for every integer; its Legendre symbol has values -1, 0, 1. Proof 1.2 still uses a=-1 and equality of signs modulo an odd prime.
2. `cor-second-supplement-via-cyclotomic-frobenius`, Remark, fatal locator error: changed the Legendre comparison locator from nonexistent 2.2 to 3.1.
3. `ex-second-supplement-from-q-zeta-eight`, Example, fatal missing hypothesis: specifies zeta=exp(pi i/4) and the positive real square root, and carries the root choice into Given.
4. Same example, F2, fatal false equality: zeta^5=zeta^4 zeta=-zeta. Also corrected verification 2.1 to say the Frobenius action on t is induced by the power map on zeta.
5. `lem-monogenic-prime-factorisation-by-polynomial-reduction`, Statement, nonfatal ill-formed evaluation: defines coefficientwise integer lifts with coefficients 0,...,p-1, uses them in ideal generators throughout, and states independence of the lift since differences lie in p Z[t].
6. `thm-prime-factorisation-in-a-cyclotomic-field`, F3, nonfatal same issue: defines integer lifts and uses them in proof 4.1.

## Mathematical review and interface impact

Read all five assigned carriers fully, plus the arithmetic Frobenius lemma, the full published Euler-criterion item and the full published choice-free integral-ideal-factorisation item. Euler supplies the congruence used by both supplements. The Frobenius supplier supplies the arithmetic congruence at primes above odd q; t^2=2 permits cancellation for the second supplement, followed by equality of two signs modulo q. The four residue-class signs follow from zeta^4=-1. These checks establish the repaired local arguments without claiming a new literature audit.

The monogenic proof identifies primes via inverse images in O_K/p O_K; the integer lifts give exactly those preimages. Local nilpotency-index comparison supplies the multiplicities. The published ideal-factorisation proof explicitly establishes the discrete valuation calculation and residue-field layers in steps 4.1–7.1. Coefficientwise finite lifts need no choice principle.

The monogenic Statement changes notation and makes the existing claim well formed; its hypotheses, conclusions, dependencies and choice status retain the same mathematical strength. Its only direct item consumers are `thm-prime-factorisation-in-a-cyclotomic-field` and `lem-arithmetic-frobenius-on-a-cyclotomic-field`. The latter repeats the old expression in F5 and 1.2, so both now use the explicitly defined integer lift. Neither consumer Statement changes. The example claim chooses its root explicitly; it has no direct item consumers. The remaining three assigned carriers have no Statement change. No page placement or dependency edits were necessary.

Regenerated citations and derivations only for these six batch-4 contract rows, preserving all other row keys and all other rows. This refresh also carries the monogenic Statement quote into the two direct consumers.

## Focused validation

- Proof precheck: six items checked, zero failing.
- Rendering: six files passed YAML and real KaTeX parsing.
- Proof contracts: `--strict --items` for these six IDs, zero errors, zero warnings, 6/6 checked.
- The final wording adjustment to theorem 4.1 was followed by another theorem precheck/render pass and another six-row contract pass.

These are local checks, not independent audits or a Step-5 gate. Native Alpha adjudication and integration remain with the engine and root.

## Content hashes

| Item | Before SHA-256 | After SHA-256 |
| --- | --- | --- |
| cor-first-supplement-via-cyclotomic-frobenius | 65b6533faf40c725b43319f5b808d6c686c0d0d051706648adbe51a9e41f9e05 | d71e8fbe1fe0cd15952801ceb1b5fa2521237dfa1ca09cfdb077edf756b148f4 |
| cor-second-supplement-via-cyclotomic-frobenius | 15190b9f82d614c6cdfb03987307f06bf98515a5637c96468ad518e6cf283e3a | a37cced3d25dd4c566dbbb2d8ee135d1237883006649e467a0b37f89d730161f |
| ex-second-supplement-from-q-zeta-eight | 10c3326c33249a56076c0c4c2088cf01288e5a3ac4fe57a23ab53865d812c806 | 5425c72ca27f0cc099ae320d57aacb80657cce6e41387c1e35f1dffc6d0114e0 |
| lem-monogenic-prime-factorisation-by-polynomial-reduction | 1c2c8164d301ec18bac9e0ab55242d745baf0ecd8fdcae5540e728183696ba7e | b49dbbc1a8a1f917645b3b7bda76e6667660b10104a3e12c83da69fc20b444a5 |
| thm-prime-factorisation-in-a-cyclotomic-field | edba285d2d0afac6edb63a68fe7121ba7390a9db75c452686b569758d555e459 | 7412735a1ee6292cccdf8e806c34d10e01a2dd4fcc917043390dcea38423e536 |
| lem-arithmetic-frobenius-on-a-cyclotomic-field | 163f783c4b831ae41538cb14830f0ca9e86d4df689cafa8ebb2ce39839aee522 | 3577490c82f8c92aead0e40b2f5afaa8329eaab5bd80028ac4a40ba2c14f1e89 |

Batch-4 contract SHA-256: 641554491feb1a4ca1d7c1abdb66f80562ed020b86000311f52599e32e8a990e

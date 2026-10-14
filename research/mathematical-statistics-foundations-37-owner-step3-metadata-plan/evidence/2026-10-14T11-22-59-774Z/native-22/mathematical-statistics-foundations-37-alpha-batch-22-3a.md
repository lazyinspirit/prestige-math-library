# Batch 22 Step 3a adjudication

Run: mathematical-statistics-foundations-37. Group: batch-22.

Scope: four touched obligations, no page, reader or refuter obligations. Reader and refuter artifacts contain empty findings.

## Completed item review

### lem-parametric-qmd-score-has-mean-zero (level 3)

Reviewed the complete current proof, QMD definition and all four exact dependency statements. Normalized square-root densities, Cauchy–Schwarz and L1 linearity justify the expansion; coordinate rays in the open domain force centering. Zero/singular information and density zeros are harmless. No AC is used. Bartlett Lecture 22, PDF pp. 9–11 (https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf), matches the QMD and centering claims. Risk review complete; no routed decision or defect.

Next: definition at level 4, then regular-MLE theorem.

### def-wald-score-likelihood-ratio-statistics (level 4)

The reader clarification of global maximizers matches the defining global LR suprema; the local chart only supplies equality-null coordinates. Schur complements, empty nuisance blocks, QMD/pointwise-score compatibility, finite-sample singular-estimate fallback and AC density-selection scope are sound. All four supplier bodies were read. Risk review complete; historical comparison and final decision recorded below after consumer review.

### thm-regular-mle-asymptotic-linearity-and-normality (level 4)

All seven steps and thirteen supplier statements reviewed. In particular, the logarithm tail is controlled by the common L² Lipschitz envelope and o(||t||²) tail probability; Euclidean chaining supplies the local process bounds; finite-net variance and cell increments give bounded-h uniformity. Negative Hellinger drift and geometric shells localize both full and restricted consistent exact maximizers. Strict quadratic separation gives linearity; centering, CLT and Slutsky give normality. No hidden pointwise differentiability, ULLN or score-equation assumption is used. AC is inherited through CLT and Gaussian suppliers. Bartlett Lecture 23 PDF p.15 and Chen Chapter 3 Theorem 14, lines 181–190, support the stated hypotheses. Risk review complete, no defect, no routed decision.

Next: level-5 calibration and examples, then equivalence.

### thm-wald-score-likelihood-ratio-asymptotic-chi-square (level 5)

All six steps and exact suppliers checked. Block inversion and nuisance completion of squares give the common efficient-score quadratic form. Bounded-h uniform expansions and tight global maximizers justify random substitution; q=d uses consistency into the isolated local null. Finite inverse failures vanish in probability. Whitening gives the chi-square limit under AC. The definition clarification requires no consumer proof change. Reader contract quotation update is audit enrichment, with unchanged item pre/post bytes. Bartlett Lecture 26 PDF pp.12–17 and Chen Chapter 4 Wald/score sections checked. Chen line 38 contains an erroneous Hessian identity; the local proof does not use it. Risk review complete; reviewed_no_defect.

### cex-boundary-null-has-nonstandard-lr-limit (level 5)

All six steps and sixteen exact suppliers checked. The fourth-moment calculation gives ||q″||²=3/(16σ⁴); product measurability, FTC and the AC compact integral bridge justify the two integrated derivative bounds for QMD. Global maximizers give L_n=(Z_+)² exactly, with CDF Φ(√t) for t≥0, atom 1/2 at zero, and half-χ1² mixture. The true point is interior to the full space and boundary to the null. Bartlett Lecture 26 PDF p.20, printed slide19, matches this law.

Amended repair: Facts F2 incorrectly described the score as twice the square-root-density derivative divided by the density. The proof correctly uses s=2q′/q. Replaced F2 with the exact scalar QMD remainder and L² score condition, and regenerated the contract citation/derivation entries. No Statement, dependencies, manifest, or consumer interface changed; no judge record existed. Defect msf37-b22-qmd-citation-denominator is nonfatal and closed. Confidence 1. Risk review complete.

### ex-normal-mean-exact-likelihood-calibration (level 5)

All five steps and sixteen exact suppliers reviewed. The smooth square-root-density estimate proves QMD in both shift directions, with the stated product measurability and AC integral bridge. Completion of squares gives the global sample-mean MLE, and the explicitly chosen exact known-variance covariance/information estimates give equality of all three statistics. Characteristic functions give exact χ1² for every n≥1 and σ>0. The reader fixed contract locators (completion of squares at 4.1) and synchronized the definition quotation; source bytes are unchanged. Risk review complete; reviewed_no_defect, audit enrichment.

### cor-wald-score-lr-asymptotic-equivalence (level 6)

Both proof steps and the exact theorem/AC suppliers reviewed. Pairwise subtraction of the common T_n+o_P(1) expansions proves the differences vanish; identical weak limits alone are not used to infer equivalence. All regular-null and interior assumptions are inherited. Chen Chapter 4 lines73–76 agrees with equivalence, but its displayed likelihood-ratio normalization at line75 is erroneous and is not imported. Risk review complete, no defect and no routed decision.

## Consumer maintenance and owner alert

A repository item-reference search for def-wald-score-likelihood-ratio-statistics found exactly the calibration theorem, normal example and boundary counterexample. Each uses global full/null maximizers; the theorem only uses the chart after localization. None needs a Statement or proof repair, and there is no further consumer hop or outside supplier-first repair. The boundary Facts F2 correction changes no Statement or Definition and creates no new consumer obligation. Manifest claims/deps and provenance remain accurate; all carriers remain draft, and no verification.judge was present or added.

Owner alert (outside routed page obligations): library/mathematical-statistics/likelihood-asymptotics-wald-score-and-likelihood-ratio-examples.md, opening sentence says “the MLE and all three regular one-dimensional statistics coincide exactly.” This is false as written: n=1, σ=1, μ0=0, X1=2 gives MLE=2 and all three statistics=4. The items themselves correctly distinguish these quantities. Proposed surgical owner repair: “In the known-variance normal location model, the MLE is explicit and all three regular one-dimensional statistics coincide exactly”. Page left unchanged; no page decision added because pages_touched and page-only obligations are empty. No published item defect found.

## Historical comparison and sources

Before Alpha edits every item raw hash equaled its post-reader snapshot. Only the definition source differs pre/post. Replacing its current maximizer paragraph by the exact older “full local model” paragraph reconstructs SHA256 bf5990271fc18b107db7b2506f763390f84920f61bf263d735c032add026a1bc; the current definition matches post f1cbdd5dcc5bbbf6b4ec1ba1ee70a4b9b5e25d28753e0fd652785dda4eb612ea. There is no unknown historical delta. The three other routed carriers changed only contracts during reader work: exact definition quotations and example check locators. The final decisions are accepted_repair (definition), amended_repair (boundary), and reviewed_no_defect/audit_enrichment (calibration theorem and normal example). Two nonfatal closed defect rows are in research/defect-ledger.jsonl, referenced by decisions.

External sources actually opened: Bartlett Lectures 22, 23 and 26 at the URLs in the carriers; Chen Chapter 3 https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html (QMD and Theorem14, lines155–190); Chen Chapter4 https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html (Wald, score and equivalence sections). Stanford lecture-03.pdf and lecture-06.pdf returned viewer internal errors; neither was relied on. Source sign/normalization slips in Chen are not adopted; the local arguments were checked directly. Exact local dependency bodies and their contract citation statements were read, including the Gaussian moment supplier without any Brownian-process assumption. This is an item-local and supplier-interface review, not a transitive whole-library certification.

## Local checks

Initial risk-report without --require-reviewed routed seven HIGH/CRITICAL items; all seven now have specific complete risk_review entries. Reflow ran on the edited boundary item; precheck passed 1/1 and rendercheck passed 1/1. Initial strict contract check found an unanchored definition endpoints entry and two stale stochastic-order Definition quotations; these were synchronized in the owned contract, without mathematical edits or defect rows. Final checks are recorded below.

Final focused results: `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-22.proof-contracts.json --strict`: 8/8 checked, zero errors/warnings. `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-22.proof-contracts.json --require-reviewed`: 8 routed, zero errors. Final `node tools/proof-layout.mjs items/cex-boundary-null-has-nonstandard-lr-limit.md`: 1 item, 6 steps, zero defects. The two closed ledger rows were appended with the serialized defect-ledger tool and its generated view refreshed. No judge, stamp, engine transition or full gate battery was run.

Handoff: all four routed decisions and seven risk reviews complete. No item-level blocker or escalation. One unrouted page wording defect remains for owner routing as documented above.

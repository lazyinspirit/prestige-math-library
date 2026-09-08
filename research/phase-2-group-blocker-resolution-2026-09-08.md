# Phase-2 group-theory blocker resolution — batches 1 and 6

Date: 2026-09-08  
Run: `phase-2-wave-1`  
Owned batches: 1 (small cancellation and quantitative hyperbolic geometry) and 6 (Hall–Mal’cev/Bass–Guivarc’h)

## Outcome and scope boundary

All identified **direct** mathematical and source-reading objections in the owned batch-1/6 scaffolds have been resolved into explicit, locally reproducible proof contracts backed by fully read authoritative ranges. The obsolete DNS/fetch objections are closed with real fetch stamps.

Two stronger inherited obligations remain deliberately open:

- `B1-CLOSURE`: complete semantic certification of the 1,567-ID SC and 3,112-ID HG current transitive closures, including inherited/historical interfaces;
- `BG-CLOSURE`: complete semantic certification of the 2,540-ID Hall–Mal’cev/Bass–Guivarc’h transitive closure.

Direct-interface certification does not imply either stronger audit. Genuine inherited published-proof defects remain Phase 3 work. No published item/page, library file, canonical plan/central ledger, or engine state was edited. The archived run state at `.autopilot/phase-2-wave-1/state.json` remains stage `1-scaffold`, `paused: true`.

## Every objection and its disposition

| Objection | Disposition | Durable repair |
| --- | --- | --- |
| `B1-SC-SETUP` | Direct objection resolved | Van Kampen balloon/folding construction, cancellable-pair surgery, block-cut decomposition and end-block shell transfer are required locally. Singular diagrams are not silently treated as discs. |
| `B1-SC-TORSION` | Direct objection resolved | The Lipschutz periodic-word/common-root route replaces the defective shortening route, retains proper powers and uses Greendlinger only after the local singular-diagram setup. |
| `B1-HG-CONSTANTS` | Direct objection resolved | Reproduce the revised DK halfspace proof. For δ>0, 6δ-local arc-length geodesics are `(3,4δ)` quasi-geodesics; k≥6δ follows by restriction. For δ=0 require k>0 and use the tripod proof. |
| `B1-HG-MORSE` | Direct objection resolved | Arbitrary possibly discontinuous compact-interval maps are handled. The exact AFP interpolation and Morse proofs are reproduced locally, including supplied attained projections, the definition of K-quasiconvexity, auxiliary ρ greater than the product constant, limiting argument, optimized recurrence/constants, and both Hausdorff inclusions. |
| `B1-HG-FILLING` | Direct objection resolved | Reproduce the planar minsize inequality and the sublinear-minsize rescaling contradiction before deriving slim triangles; bigons alone are not used as a characterization. |
| `B1-HG-BOUNDARY` | Direct objection resolved | Sequence-boundary equivalence/topology is separated from the proper compact ray model. Properness appears only in compact-ball diagonal extraction and compactness. |
| `B1-HG-DYNAMICS` | Direct objection resolved | Canary's convergence-action theorem supplies uniform-on-compact subsequential convergence; Proposition 5.1 and an every-subsequence contradiction give full north–south inclusions. |
| `B1-HG-EXISTENCE` | Direct objection resolved | Hamann's torsion-allowed boundary trichotomy/shared-axis proof supplies independent loxodromics; no torsion-free subgroup corollary is used. |
| `B1-CLOSURE` | **Open** | Structural traversal is retained only as an index. The 1,567 SC and 3,112 HG inherited items were not all semantically reread; no dependency-closed publication claim is made. |
| Batch-6 torsion/lower-central concern | Direct objection resolved | The old draft's false torsion-free-factor implication is rejected. Finite torsion, torsion-free quotient and mixed coordinates are separated; the revised Heisenberg counterexample is recorded. |
| Batch-6 collection/carries concern | Direct objection resolved | Collection retains ambient lower-central weights, bounded finite-factor representatives, carries to deeper layers, inverse letters, basis replacements and a terminating phase recurrence. |
| Batch-6 distortion/growth circularity concern | Direct objection resolved | Only the last central term receives the pointwise compression conclusion; box inclusions precede counting; the final result is two-sided degree growth, not an exact leading coefficient. |
| `BG-FETCH` | Resolved | All three source records have fetched bodies and hashes; fetch verification is 3/3. |
| `BG-CLOSURE` | **Open** | Resolving 2,540 dependency identities does not semantically certify their statements/proofs. This exact stronger audit remains required. |

## Source-reading receipt

The following are the proof ranges actually read, not merely search hits or tables of contents.

### Small cancellation

- Nicholas Touikan, *An introduction to combinatorial and geometric group theory*, complete 80-page PDF: §3.1.1 pp.40–43, including the balloon construction, folding and van Kampen existence; §§3.4–3.5, including Euler curvature, Greendlinger shells/spurs, general singular diagrams and semi-exterior vertices.
- Touikan HTML §§3.4–3.5 were also read against the PDF for stable named locators.
- Lipschutz (1964), complete relevant §2 setup and §6 torsion proof, for the periodic-word/common-root alternative used by the torsion route.

### Quantitative hyperbolic geometry

- Druţu–Kapovich, corrected 837-page *Geometric Group Theory*: Theorem 11.45 and Lemma 11.46 pp.375–378 (complete halfspace/mesh local-geodesic proof); Proposition 9.104 pp.329–331 (complete minsize inequality); Definition 11.175, Proposition 11.176 and Lemma 11.177 pp.428–429 (complete sublinear-minsize proof); Theorem 11.181 pp.431–432 (filling-to-hyperbolicity conclusion).
- Gouëzel–Shchur, *A corrected quantitative version of the Morse lemma*, all ten pages. Important disposition: the paper states 92 and details a conservative 2460 proof, but expressly only summarizes the final optimization. It is not recorded as the complete exact-92 proof.
- Sébastien Gouëzel, official AFP `Gromov_Hyperbolicity` current release:
  - `Isometries.thy`, proposition `quasi_geodesic_made_lipschitz`, source lines 2321–3330: complete ε=0/empty/short/general cases, marked-point interpolation, upper and lower inequalities, 2/5 split, pointwise and both Hausdorff bounds;
  - `Morse_Gromov_Theorem.thy`, rendered source lines 450–2538: complete projection-halving induction, floor/block estimates, K-quasiconvex passage, optimized two-level recurrence in both orientations, `L=18ρ`, `D=55ρ`, `α=12/100`, strict-constant limit, reverse Hausdorff inclusion, discontinuous interpolation and short-endpoint cases.
- Hamann, complete 101-page *Geometric Group Theory*: cyclic undistortion and centralizer proofs pp.87–90; Remark 5.3.6 and Theorems 5.3.7–5.3.8 pp.91–94 through the independent-axis/free-subgroup argument.
- Canary, complete 181-page lecture notes: Proposition 5.1 pp.25–26; Theorem 5.7 pp.28–29 through the uniform-on-compact convergence proof; Theorem 7.3 pp.32–33.

### Hall–Mal’cev and Bass–Guivarc’h

- Clara Löh, complete 266-page lecture notes: the nilpotent polynomial-growth statement and relevant surrounding development; the explicitly omitted general proof is not used as proof evidence.
- Druţu–Kapovich, 585-page draft: complete relevant torsion and last-central-term compression proofs (not the defective lower-central quotient assertion).
- Druţu–Kapovich, corrected 837-page edition: Theorems 13.63–13.64, Proposition 13.65, Lemma 13.69, Corollary 13.70, Remark 13.83, Lemmas 14.17 and 14.21, Propositions 14.20 and 14.25, and Theorem 14.26 through the needed proofs. These are the torsion-aware coordinate, collection, weighted-box and growth arguments.

## Source fetch/read evidence

Owned coverage now contains 113 result dispositions across 14 source records: batch 1 has 57 rows/11 sources; batch 6 has 56 rows/3 sources.

Notable new body stamps:

- revised DK, 4,998,235 bytes, 837 pages, SHA-256 prefix `276f41abe46e9280`;
- Gouëzel–Shchur, 140,123 bytes, 10 pages, prefix `fa8de4ca01ade563`;
- AFP `Isometries.html`, 3,292,673 bytes, prefix `5ae80573760de943`;
- AFP `Morse_Gromov_Theorem.html`, 4,410,165 bytes, prefix `c48a886032891431`;
- Touikan complete PDF, 3,207,584 bytes, 80 pages, prefix `741b2f470a2c18c0`.

Batch-1 fetch verification is 11/11 and its URL sweep is 11/11 live. Batch-6 fetch verification is 3/3; its liveness sweep reports 2/2 active citation decisions because the old/revised DK relationship is represented by source supersession. Strict source backing passes for all included owned results.

## Item and identity accounting

- Batch 1: 55 items unchanged — SC A/B 17+4=21; HG A/B 29+5=34.
- Batch 6: 26 items unchanged — A/B 19+7.
- Owned total: 81 items, net change 0.
- Coverage: batch 1 changed from 33 rows/6 sources to 57 rows/11 sources; batch 6 remains 56 rows/3 sources.
- One unspliced identity/provenance rename, with no mathematical deletion:
  - old: `lem-hg-toolkit-exponential-detour-bound`
  - new: `lem-hg-toolkit-exponential-projection-contraction`
  - reason: the repaired statement is the precise corrected projection inequality needed by the exact Morse recurrence, not a generic detour cutoff. All live owned manifest, coverage and prose references use the new identity; there was no published consumer.

## Validation receipt

- coverage checklist: batch 1, 2 pages/57 rows, 0 errors/0 warnings; batch 6, 1 page/56 rows, 0 errors and the expected low-yield warning retained rather than padding results;
- manifest dependencies: 81 items, 0 normalized, 0 errors;
- content policy: 81 scoped items, 0 errors/0 warnings;
- source fetch: batch 1 11/11, batch 6 3/3;
- URL liveness: batch 1 11/11 active URLs, batch 6 2/2 active citation decisions;
- strict source backing: every included result in both owned coverage files remains backed.

The repaired files are safe inputs for mechanical drift regeneration. This receipt does not authorize an engine transition and does not certify `B1-CLOSURE` or `BG-CLOSURE`.

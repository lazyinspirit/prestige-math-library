# Frontier 32 — Step 6b group Alpha g

Run `frontier-32`; role `alpha`; dispatch `6b-g`; owned batch `13`.

## Outcome

All four routed obligations are closed: three touched carriers are accepted with Alpha amendments, and `refuter:13:1` is confirmed fatal and repaired. Alpha also found and repaired the same fatal complement-map defect in the owned supporting lemma, recorded as the supplemental gate obligation `gate:frontier-32-S6-g-path-run-complement-maps`. There are no page or reader-finding obligations, proposed withdrawals, or unresolved mathematical blockers.

The five exhaustive decisions, unique closed ledger references, and sealed current-carrier hashes are in `research/frontier-32-alpha-g-6b-decisions.json`.

## Repairs and evidence

- `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free` retains the reader's three necessary repairs: its statement now assumes the ambient graph is co-$E$-free; the $H_5$ lift uses eleven terminal blocks rather than six; and its YAML title parses. Purity of terminal block pairs preserves every adjacency and nonadjacency when representatives are chosen. Every ambient induced $H_5$ begins inside one overlap class and remains inside one terminal quotient block, while a lifted co-$E$ contradicts the explicit ambient hypothesis.
- The structural-partition theorem and singleton-family corollary retain their YAML repairs. The theorem's empty $X_i^0$ case is sound because a comb block is nonempty, so a singleton $X_i$ gives a pure one-block blockade and leaves an $H_5$-free, co-$E$-free $Y_i$. The corollary uses the special-vertex-local criterion exactly in its stated scope with the common family $\{H_5,\mathrm{co}\text{-}E\}$.
- `refuter:13:1` is confirmed fatal. In the first witness the former map required $ua$ to be a complement edge even though $ua$ is an edge; in the second it required the displayed path edge $dc$ to be a complement edge. Direct enumeration gives valid $E$-orders $(x,y,u,c,a,b)$ and $(c,a,d,u,y,b)$.
- The same invalid maps occurred in steps 2.1--2.2 of `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`. Those steps now list the exact complement nonedges $xy,yu,uc,ca,ub$ and $ca,ad,du,uy,db$. The maximal-run orientation also covers runs meeting either path endpoint; empty and singleton paths cannot satisfy mixedness.
- The reader's contract-completeness blocker is closed. The batch contract now covers all 15 proof-bearing items, including the six omitted A-items and all three examples. Mechanical `Facts & Assumptions`/`Proof` boundaries were added where needed; no defect rows were invented for those format-only repairs.

The mathematical source comparison used Huang, Ju, and Zhou, *Erdős-Hajnal beyond the five-vertex path*, HTML v2, Lemma 5.1 and Lemmas 6.1--6.4 with Claims 6.4.1--6.4.3. The current local statements preserve the source's special-vertex qualification and the quotient descent interfaces.

## Risk review

`tools/risk-report.mjs` was run on the owned batch before review. Specific `risk_review: complete` records now cover all nine HIGH/CRITICAL items reported by the completed contract: the Erdős–Hajnal induction; local property-$(*)$ criterion; path-run lemma; complete-nonedge $H_5$ purity; quotient termination; external-purity descent; terminal pattern; structural partition; and terminal-quotient example.

The principal checks were the $H_0$ through $H_5$ induction endpoints, the quantitative layer dichotomy, exact co-$E$ witness edges, exhaustive cyclic rim patterns, positive block-count descent, connected quotient descent, representative nonemptiness, the one-block pattern, and the empty $X_i^0$ branch. Re-running the risk report with `--require-reviewed` reports zero errors.

## Validation

- Canonical reflow was unchanged on all nine item files edited during adjudication; focused precheck passed `9/9`.
- Rendercheck passed all 17 batch items and both pages with real KaTeX and renderer YAML parsing.
- The batch proof contract passes strict validation `15/15`; risk review enforcement, boundary audit (`--fail-on-template --fail-on-contradicted`), and citation fidelity all pass.
- The batch-local finite-smoke diagnostic found no executable smoke obligations (`0/15`); this was recorded as a non-attestation, not turned into a defect row or a claimed green check.
- Content policy passes for 17 scoped items with zero errors and warnings; manifest dependencies pass for 17 items with zero errors; the coverage checklist passes with 37 harvested results and zero errors or warnings.
- Seven closed rows were appended through `tools/defect-ledger.mjs`, which refreshed the generated view; `defect-ledger validate --run frontier-32` reports zero errors.

The repository lifecycle status names an unrelated live `.autopilot` run, `frontier-23`. The exact user-dispatched frontier-32 scope, evidence, and carriers were present and internally consistent; no lifecycle transition was attempted.

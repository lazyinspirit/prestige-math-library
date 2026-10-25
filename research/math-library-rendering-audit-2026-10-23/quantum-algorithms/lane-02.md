# Quantum Algorithms rendering review — lane 02

## Scope and method

Reviewed all 72 assigned frozen snapshots, their titles and complete ItemBody renders. Opened all 119 receipt-listed PNG tiles individually at original resolution. Snapshot and HTML digests match the assignment manifest; every PNG digest matches its receipt. This is a local preview review and makes no production-route claim. No TikZ or source-authored diagram markup was present in the assigned item bodies.

## Confirmed rendering defects

1. `def-qa-16-nonnegative-adversary-bound`, Definition, source line 34: the two-row feasible-set subscript under `\max` visually collides with the ratio fraction in the standalone rendering. The matrix constraints and quotient denominator run together and are difficult to parse. The original tile is `screenshots/def-qa-16-nonnegative-adversary-bound--01.png`. Suggested repair: compact or separately align the constraint set, then recheck the rendered definition.

2. The resolved operator-norm linked title renders `max_{||v||=1} ||Tv||` as literal text with underscores and braces in eight assigned bodies: `def-qa-16-nonnegative-adversary-bound` line 47, `def-qa-24-pue-svd-data` line 68, `ex-qa-22-two-term-lcu` line 51, `lem-qa-18-symmetric-compressed-walk-bound` line 57, `lem-qa-27-supported-pseudoinverse-target` line 52, `lem-qa-36-jrs-finite-band-estimates` line 53, `thm-qa-23-certified-phase-approximation-correctness` line 75, and `thm-qa-26-hhl-query-cost` line 62. Each occurrence is bound to its first original-resolution screenshot and exact source line in `lane-02.json`. Suggested repair: typeset the formula in the linked title or use a title without raw math.

## Diagram candidates

These are editorial and uncertain candidates, not defects.

1. `alg-qa-11-grover-iterate`, source lines 35–37 — a circuit with address and response wires, X then H preparation of `|->`, one `U_f` query with phase kickback to `O_M`, and `R_s` on the address only. Show the response remaining in `|->` and keep one oracle query distinct from preparation and reflection costs.
2. `alg-qa-36-five-local-history-path`, source lines 42–43 and 49–50 — a unary-clock path `|c_0>, …, |c_N>` paired with successive data states, plus the interior transition `100 <-> 110` on clock bits `(l-1,l,l+1)` and its `U_l`/`U_l*` action. Mark the endpoint patterns separately and avoid depicting unary clock states as a single excitation.
3. `thm-qa-24-qsvt-singular-space-action`, source lines 46, 48, 52, 62, 64, and 84 — one singular plane with bases `(v_j,w_j)` and `(u_j,w_tilde_j)`, the signal matrix `W_R(sigma_j)`, ordered `Z(phi)` factors, and highlighted upper-left coefficient `P_Phi(sigma_j)`. Distinguish odd left-to-right and even right-space compressed actions; keep `sigma=0,1` as endpoint cases.

## Coverage and hashes

`lane-02.json` records all 72 items, the frozen title and body coverage, snapshot and HTML SHA-256 digests, every tile path and SHA-256 digest, and an `original` view attestation for each tile. It also binds the confirmed defect and diagram candidates to their source lines and tiles.

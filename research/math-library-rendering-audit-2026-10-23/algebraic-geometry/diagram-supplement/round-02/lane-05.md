# Algebraic Geometry diagram supplement: round 02, lane 05

## Finding

**`lem-blowup-intersection-matrix-at-smooth-point` — Statement and Proof, lines 88–100, 130, 134 (editorial candidate).** The statement and proof give the blowup intersection relations as formulas and prose, with no diagram in the rendered item. A diagram is warranted as a reader aid because the pairing table and total-transform decomposition make the orthogonality, sign, multiplicity, and residue-degree factor easy to compare at once. This is not a mathematical defect; the displayed formulas are consistent.

The relevant claims are (E^2=-r), (E\cdot\pi^*D=0), (pi^*D\cdot\pi^*D'=D\cdot D'), and, for a reduced curve (C\ni p) of multiplicity (m\ge1),
\[
\pi^*C=C'+mE,\qquad C'\cdot E=mr,\qquad (C')^2=C^2-m^2r,
\]
where (r=[\kappa(p):k]). The proof derives (C'\cdot E=mr) from (0=(\pi^*C)\cdot E=(C'+mE)\cdot E) and (E^2=-r), so the residue-degree factor and sign agree.

## Diagram details

Show the blowup map \(\pi:X'=\operatorname{Bl}_pX\to X\), with \(E=\pi^{-1}(p)\) over \(p\). For a curve \(C\) through \(p\), show \(C'\) as its strict transform and label the total transform \(\pi^*C=C'+mE\). Beside this, include the pairing block

| Classes on \(X'\) | Pairing |
|---|---|
| \(\pi^*D,\pi^*D'\) | \(D\cdot D'\) on \(X\) |
| \(\pi^*D,E\) | \(0\) |
| \(E,E\) | \(-r\), with \(r=[\kappa(p):k]\) |
| \(C',E\) | \(mr\) |

Use intersection products on \(X'\) for the displayed classes, retain multiplicity \(m\) in the total transform, and retain residue degree \(r\) in the exceptional and strict-transform pairings.

## Evidence and scope

- Reviewed the assignment-bound snapshot; its SHA256 matches `6da9b41f2a443c08a64b9de4dcdd050fe6bc447257ae6032e3c32316888c5c4d`.
- Viewed all four listed local screenshot tiles at original resolution: `lem-blowup-intersection-matrix-at-smooth-point--01.png` through `--04.png`.
- No item content or publication status was changed. No live website or external source was used.

# Diagram supplement, round 05, lane 04

## Finding

| Item | Finding | Severity | Assessment |
|---|---|---|---|
| `def-normal-surface-modification-and-normalized-point-blowup` | `optional-missing-diagram` | Editorial | A chain diagram could clarify the initial normalization, successive normalized point blowups, finiteness conditions, and regular terminal scheme. This is an optional aid, not a defect. |

Reviewed the assignment-bound snapshot at `snapshots/def-normal-surface-modification-and-normalized-point-blowup.md`; its SHA256 matches the assignment binding `6c131636f136df0d7e425059632f47f5df64f477c1dfa7bd44ccd69354cd0092`. The relevant statement is lines 90–109 and 117–125.

## Suggested diagram content

Show the chain

`S_n = X -> S_{n-1} -> ... -> S_1 -> S_0 = S^nu -> S`

with arrows directed toward `S`. Label `S^nu -> S` as the initial normalization and indicate that it must be finite. For each `i=0,...,n-1`, annotate the stage `S_{i+1} -> S_i` as

`Bl_{s_i}(S_i)^nu -> Bl_{s_i}(S_i) -> S_i`,

where `s_i` is a closed point with nonzero coherent point ideal. Mark each normalization morphism as finite, since this is the condition that makes the normalized point-blowup composite proper. The source calls each resulting `S_{i+1}->S_i` a modification; the composite is proper and birational, and the terminal `S_n` is regular.

Include two special cases:

- If `S` is normal, the initial normalization is an isomorphism, so the chain starts effectively at `S`.
- If `S` is regular, use `n=0`, `S_0=S^nu=S`; the resolution is the identity and has no point-blowup stage.

Keep the remarks about regular centres in a separate inset: blowing up a regular point on a regular surface is generally non-isomorphic with exceptional fibre `P^1`, while blowing up a closed point on a regular one-dimensional integral scheme is an isomorphism. The source says the latter need not hold on a singular curve. This distinction should not be merged into a general rule for all dimensions.

The source does not claim that every integral scheme admits such a resolution. Nor does it claim a normalized point blowup is proper when finiteness of its normalization has not been established (lines 90–93).

## Preview review

Viewed both assignment-listed local PNG tiles at original resolution:

- `screenshots/def-normal-surface-modification-and-normalized-point-blowup--01.png` shows the definition through the resolution-by-normalized-point-blowups paragraph.
- `screenshots/def-normal-surface-modification-and-normalized-point-blowup--02.png` shows the remainder of that paragraph and the remarks on regular centres, modifications, and the empty scheme.

No diagram is present. The chain directions and objects match the text, provided each stage is drawn from `S_{i+1}` to `S_i` and finiteness is marked where required. No mathematical inconsistency was found.

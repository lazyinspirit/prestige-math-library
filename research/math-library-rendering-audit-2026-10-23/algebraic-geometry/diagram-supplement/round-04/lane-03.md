# Round 04, lane 03: canonical resolution under smooth pullback

## Finding

**Warranted as an optional editorial aid; classification uncertain.** A stage ladder could make the local factorization, center pullbacks, and invariant comparisons easier to follow. It should distinguish the product sequence in the projection case from the extension relation after the étale pullback. The proof already establishes these claims, and no mathematical mismatch was found.

The bound snapshot hash matches the assignment source hash: `0dafe551c360feacbf153891babff00fd76e3fe54872bee3c794ae65214808ec`. Both listed local PNG tiles were inspected at original resolution.

## Diagram details and checks

- **Statement lines 41–44:** Start with `φ:X'→X`, smooth of relative dimension `n`. Locally factor it as `X' --ψ (étale)→ X×Aⁿ --π→ X`, with `φ=π∘ψ`. Projection pulls the original sequence to the product sequence `(X_i×Aⁿ)` and centers `C_i` to `C_i×Aⁿ`; then pull those centers and stages through the étale map.
- **Extension relation, line 44:** Show that the pulled-back resolution is an **extension of** the canonical resolution on `X'`. Do not draw the full general sequences as literally equal. Equality with the product sequence is the projection case; the general smooth case also uses the étale step.
- **Invariant claim, lines 45–46:** Draw induced stage maps `φ_i:X_i'→X_i` where defined. For each point `x'` in the stated support, label `inv_{X_i}(φ_i(x'))=inv_{X_i'}(x')`, and likewise for `ν` and `ρ`. The subscripts clarify which stage space carries each invariant.
- **Proof lines 54, 58–62, 66–70:** The local factorization, étale naturality, and projection product result support the ladder. The affine factor dimension `n` matches the assumed relative dimension. Keep the stated hypotheses nearby: `μ≥1`, generic nonvanishing on every irreducible component of smooth finite-type `X`, finite-type `X'`, and AC.

The arrows, stage-map direction, relative dimension, and support restriction are consistent. No signs or additional indices occur.

See `lane-03.json` for image hashes and the full proposed labels.

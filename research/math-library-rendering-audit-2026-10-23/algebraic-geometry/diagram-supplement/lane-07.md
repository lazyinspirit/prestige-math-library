# Diagram supplement lane 07

## Scope and evidence

Reviewed only `thm-grothendieck-riemann-roch-for-projective-morphisms`, as assigned. The bound snapshot hash matches the assignment: `831a22d2162e1ebf181b8cc45a8ebfe2fe5cf397581a95a52bfb3d12b571df5a`. Inspected the original-resolution local preview `screenshots/thm-grothendieck-riemann-roch-for-projective-morphisms--02.png` (SHA256 `8e27a845ecc606ed23aaaf4b60a25395b15c34733dc59f70b318112a3901f50d`). The preview shows the composition step as prose, without a displayed diagram.

## Review

A paired-square diagram is a warranted optional aid. Let `P=P^n_k×_kY`, `f=p∘i`, and for each smooth scheme `S` let `τ_S:K₀(S)→A*(S)_Q`. The first square compares `i_!:K₀(X)→K₀(P)` with Chow pushforward `i_*:A*(X)_Q→A*(P)_Q`; the second compares `p_!:K₀(P)→K₀(Y)` with `p_*:A*(P)_Q→A*(Y)_Q`. The shared middle scheme is `P`, so the squares paste.

For `α∈K₀(X)`, the upper composite followed by `τ_Y` is `τ_Y(p_!(i_!(α)))`. The lower composite after `τ_X` is `p_*(i_*(τ_X(α)))`. The two square identities equate these paths. Functoriality identifies `p_!∘i_!=f_!` and `p_*∘i_*=f_*`, giving `τ_Y∘f_!=f_*∘τ_X` with matching domains and codomains. No mathematical mismatch was found.

The source line writes `i_*` for the K-theory pushforward, while `i_*` also denotes Chow pushforward. That context-dependent notation is conventional, but a diagram should distinguish the maps as `i_!` and `i_*`. Classification remains `uncertain`: the diagram is useful for tracking the two theories and the pasting, but its absence is not a mathematical defect.

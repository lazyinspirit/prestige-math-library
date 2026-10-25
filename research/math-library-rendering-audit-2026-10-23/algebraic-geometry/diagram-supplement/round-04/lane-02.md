# Round 04, lane 02: separating curve components by blowups

**Item:** `thm-separation-of-regular-curve-components-by-point-blowups`  
**Finding:** An optional stage diagram is warranted as an editorial aid. The sequence and incidence claims are consistent; no mathematical inconsistency was found.

The bound snapshot SHA-256 matches the assignment (`3db39deac35640eb9e1a81ee24c8bf641d657ac240b3fb3e595ce78bfdda432b`). I viewed all three listed local screenshot tiles at original resolution. They render the statement, relevant facts, and complete proof excerpt clearly.

## Exact source claims

The assignment binds the statement excerpt at snapshot lines 26–31: for pairwise distinct integral one-dimensional closed subschemes `Y₁,…,Yᵣ` of a Noetherian scheme `X`, each with finite normalization, a finite sequence of blowups at closed points yields pairwise disjoint regular final strict transforms.

The bound excerpt at lines 35–45 gives the key supporting conditions: each curve can be regularized by finitely many point blowups; a blowup preserves regularity of an already regular curve; and the strict-transform behavior depends on whether the center lies on that curve. The snapshot's proof steps 1.1, 2.1, 3.1, 3.2, and 4.1 spell out the iteration:

1. Regularize all components while retaining the finite-normalization hypotheses.
2. Take the finite maximum of all pairwise intersection multiplicities.
3. Blow up centers attaining a maximum `n≥2`; all remaining pairwise multiplicities over each such center strictly decrease. Repeat until there are no intersections or the maximum is one.
4. Blow up the finitely many multiplicity-one contacts; each such pair becomes disjoint over that point.

The final maps have the direction `πⱼ:Xⱼ=Bl_{pⱼ}(Xⱼ₋₁)→Xⱼ₋₁`, with `pⱼ` a closed point of the current ambient space. The composite runs from the final ambient space to the original `X₀`. Each current strict transform `Yᵢ⁽ʲ⁾` lies in `Xⱼ`. Centers can lie on several current components, as the assignment notes.

## Diagram proposal and limits

A compact staged diagram could show the initial regularization phase, followed by the multiplicity-reduction phase and the multiplicity-one separation phase. Use schematic curve labels and point centers, and mark only the supported incidence change. At the end show `Yᵢ⁽ᵐ⁾∩Yⱼ⁽ᵐ⁾=∅` for `i≠j`, with each final transform regular.

Do not show all later centers as points of the original ambient space: each lies in the current space before its blowup. Do not suggest the final curves are disjoint from exceptional divisors; the theorem asserts pairwise disjointness among the named strict transforms. Avoid drawing a specific smooth surface or asserting simple-crossing geometry, since the hypothesis is only that `X` is Noetherian. The diagram should summarize the sequence while leaving the finite termination argument in the proof text.

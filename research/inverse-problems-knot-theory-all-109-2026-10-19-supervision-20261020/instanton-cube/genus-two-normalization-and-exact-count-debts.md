# Genus-two normalization: what the actual source count requires

New authoring evidence for the original nonvanishing chain; no mathematical acceptance, helper-review request, or change to an inherited cycle counter. Frozen accepted sources were not opened or checked.

The actual `dg-ga/9702004v1` Lemma 18, PDF12–13, determines the coefficient called `l` by two distinct geometric computations and one finite pairing calculation. Its convention is the Donaldson-oriented quotient sum, not the complex-symbol-positive quotient. The accompanying new orientation/gluing donor specifies this distinction and its factor-of-two normalization.

For `A=Σ₂×D²`, the four relative insertion vectors `e_i=φ(A,Σ^i)`, `0≤i≤3`, have pairing matrix

$$N=\begin{pmatrix}0&0&0&-1/2\\0&0&-1/2&0\\0&-1/2&0&-2\\-1/2&0&-2&0\end{pmatrix}.$$

The two entries now have explicit new geometric donor proofs, both author-stage:

- `lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half.md` constructs the six-dimensional zero-energy moduli by quaternion pants coordinates. The octahedral angle volume, the simultaneous central half-turn in the twist lattice, and the universal characteristic form give `∫µ(Σ)^3=1/2`. Its actual product ASD moduli is flat and regular, and the Donaldson orientation gives `−1/2`.
- `lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two.md` constructs the ten-dimensional ASD moduli near the explicit reducible wall as a projective rank-four bundle over the Jacobian. The universal extension gives `µ(Σ)=ζ/2+2θ`; fiber integration gives complex degree two, and the Donaldson sign gives `−2`. This uses a local ASD wall inverse and exhaustion, not an imported wall-crossing value or a general HYM existence assertion.

These prove the two ruled-surface count candidates needed for `N`. Their mathematical acceptance still belongs to the eventual complete original-facing chain; no helper-only review is requested.

For `B=K3#2 CPbar²`, the source next uses the blowup Donaldson series to obtain the dual coordinates

$$v=(1/2,0,2,0),\qquad u=(0,2,0,8).$$

Deriving these coordinates requires actual blowup relative-invariant/count identifications and their orientation normalization. A degree-two point insertion on the unblown K3 is an input toward that problem, not a proof of these two vectors.

Once these **geometric** data and the relative pairing are supplied, the remaining normalization is finite and exact:

$$N^{-1}u=(0,0,-4,0)^t,\qquad vN^{-1}u=-8.$$

The source's two extremal branches have their normalized witness coefficients `1/2`; its formula (5), evaluated on this witness, gives `D_C(Σ)=l/4`. Hence, once the actual blowup vectors and their relative pairing are also supplied, `l=−32`, and the opposite branch has coefficient `+32` with the source's parity convention. No additional factor of two comes from quotient transfer: its one-half pairing of orbit sums has already been canceled against the duplicated simultaneous lifts. Reapplying that half here would produce an incorrect normalization.

This completes the coefficient bookkeeping after the displayed data. The two ruled-surface evaluations have the concrete new donor proofs above; the K3 blowup vectors remain an actual separate count obligation. This note is not a logical supplier for `l=−32` before that obligation is supplied. The full original nonvanishing chain remains held at its actual enumerative and HYM inputs.

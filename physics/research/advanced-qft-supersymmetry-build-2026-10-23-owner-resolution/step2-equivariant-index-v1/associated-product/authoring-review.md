# Associated-bundle positive-order product

Owned item: `items/lem-equivariant-associated-symbol-product-index.md`.
This record concerns only the new draft source and this task's substantive
review. It supplies no acceptance, gate coverage, workflow transition or
publication authority. No existing item was edited by this task.

## Source reading

Read the complete local
`analytic-comparison/source-guided-construction-chain.md`, including its
independently proved final shrinking-cone estimate and corrected two-by-two
kernel formula. Read the searchable primary-source compilation's paper I,
§9, printed pp. 526–529, including the associated-bundle setup, order-one local
lift, compact-group averaging, displayed product matrix, both squares and
the vertical-kernel reduction. The source is
<https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf>.
The separate primary scan is
<https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf>.
The actual reading here used the searchable full text, not an invented visual
reading of the image-only scan. OCR signs and bundle positions were checked
against the domain and target of the locally reconstructed matrix.

The construction follows that source's mathematical organization. The cone
estimate, exact commutation domains, gluing-symbol correction, Sobolev closure
argument and finite-dimensional reduction are written out locally. A citation
does not replace these deductions.

## Verified construction details

The local order-one lift has symbol `psi(y) a(x,xi)`, extended by zero in its
leading homogeneous part when `xi=0`. It is approximated by cutting off a
shrinking cone around horizontal zero, with the high-frequency cutoff tied
to the cone radius. The error has output-derivative bounds
`C_alpha t <(xi,eta)>`; Fourier integration by parts and weighted
Cauchy–Schwarz give an `O(t)` bound from every integer `H^s` to `H^(s-1)`.
The proof does not assert uniform frequency derivatives for the errors.

The extension from classical base operators to the simultaneous Sobolev
closure is also supplied: joint positive Sobolev norms use finitely many
horizontal base norms and passive vertical derivatives; level zero uses the
negative horizontal weight bound; negative levels use formal-adjoint duality.
This supplies actual closure lifts rather than a formal order-zero tensor.

Local lifts act on the whole compact fiber. Fiber cutoffs are used only to
estimate them. Their construction does not insert a fiber cutoff that would
break commutation with `B` or `B*`.

Choose squared base partition cutoffs, lift the localized base operators, and
average over the acting compact group. Each local summand commutes exactly
with both the vertical operator and its adjoint. An invariant product density
and tensor metrics make the lifted formal adjoints the adjoints required in
the matrix. This proves four correctly typed operator identities on smooth
sections before passing to Fredholm kernels.

There is a coordinate subtlety in a literal reading of AS I §9: a
base-dependent principal-H transition changes a horizontal covariable by a
term linear in the vertical covariable. Accordingly the source does not claim
the patched leading symbol equals a chosen connection lift pointwise. It
identifies the common horizontal matrix `Q`, proves `Q=a` at vertical
covariable zero, and interpolates `Q` to the chosen connection lift. The
vertical symbol is invertible away from vertical zero, so the full product
matrix stays elliptic along the entire interpolation. This proves the exact
symbol-class identification needed for the index product.

The continuous invertible joint symbol is treated using the operator-norm
closure exact sequence, not a classical parametrix for a nonsmooth symbol.
At each Sobolev level its order-reduced inverse exists modulo compact
operators. The source derives the displayed Fredholm estimate from the
bounded parametrix and compact-remainder interpolation inequality. All-level
index constancy and monotonicity of kernel/cokernel dimensions give smooth
defects. The matrix energy identities may therefore be applied to every
actual Fredholm kernel vector.

The vertical kernels are finite-dimensional smooth H-times-T modules.
Their orthogonal projections have finite smooth fiber kernels, commute with
the horizontal lifts and their adjoints, and patch to the associated
finite-dimensional kernel bundles. This yields the representation-index
formula by four explicit kernel identifications. The independent-group
product and the compact-support external product follow by controlled
realization and excision. No analytic/topological comparison or
equivariant-K-localization theorem is an input.

## Supplier interfaces and review boundary

`lem-equivariant-finite-chart-symbol-calculus` was read in its actual authored
carrier through its final Proof 5.3. Its Statement and Proof 4.1–5.3 provide
the norm-closure exact sequence, all-integer order reduction,
closure-ellipticity, constant Sobolev index, smooth defects and compact-group
averaging used here. In particular, smooth defect regularity is not inferred
solely from approximation by elliptic operators.

`lem-equivariant-controlled-symbol-realization` is the second exact supplier
for symbol homotopy/index invariance and two-variable controlled excision.
Its actual source was read through its final Proof 5.2, and its writer's final
strengthening of Proof 1.1, 2.1 and 5.1 was then reread. The stable compression
rotates the two boundary-isomorphic B coordinates while keeping the local
complement fixed; its exterior endpoint no longer uses an exterior complement.
The two-cutoff controlled realization has nonlocal kernel supported in
`L times L` and is precisely the exterior identity outside L in either
variable, without assuming a global interior source-target isomorphism.
Proof 2.3 and 3.1–3.2 supply continuous homotopy smoothing and index invariance
for the continuous joint symbols used in this product. These exact interfaces
match every use in the authored product source. This is a focused dependency
review, not an independent whole-item acceptance stamp.

## Checks

The focused command actually run after the current source edit was:

`node tools/physics-support/proof-layout.mjs items/lem-equivariant-associated-symbol-product-index.md`

It returned exit zero and `proof-layout: 1 items, 13 steps, 0 defects`.
This is a layout check, not a native gate or mathematical acceptance.

Only the owned item and evidence directory were written. No manifests,
contracts, dependency levels, workflow state, verification stamps, hashes,
backups or commits were created or changed.

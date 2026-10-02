# Frontier 37 owner 30 — Minkowski lattice repair

**Date:** 2026-09-30  
**Scope:** def-minkowski-embedding-of-a-number-field and
thm-ring-of-integers-and-ideals-are-full-lattices only.

## Mathematical repairs

- The unscaled complex-coordinate block has Euclidean norm
  \(\sqrt{\sum_j|\tau_j(x)|^2}\). No \(\sqrt2\) factor is used.
- Injectivity follows because \(n=r_1+2r_2\ge1\), so at least one listed
  embedding exists. This covers \(r_2=0\).
- Injectivity of the \(\mathbb Q\)-linear embedding is no longer used to claim
  real linear independence. The all-embedding determinant theorem supplies
  the needed nonvanishing for every \(\mathbb Q\)-basis.
- For each complex-conjugate row pair, the transition from
  \((\operatorname{Re}\tau,\operatorname{Im}\tau)\) to
  \((\tau,\bar\tau)\) has determinant \(-2i\), of modulus \(2\). The real
  determinant is therefore \(2^{-r_2}\) times the absolute all-embedding
  determinant.
- In the lattice theorem, the ring-of-integers basis is shown
  \(\mathbb Q\)-independent by clearing a positive integer denominator, then
  is a \(\mathbb Q\)-basis because it has \(n=[K:\mathbb Q]\) elements.
- The generic PID-submodule corollary and its PID dependency were removed.
  The item proves locally by induction that a subgroup of \(\mathbb Z^m\)
  has a finite \(\mathbb Z\)-basis of at most \(m\) elements: project to
  \(d\mathbb Z\), use one lift when \(d>0\), and combine it with a basis of
  the kernel. Positive-denominator clearing then gives \(\mathbb Q\)-
  independence where the proof needs it. This preserves the no-Choice
  statement.
- Multiplication by a nonzero field element is real block diagonal: real
  blocks are nonzero scalars, and each complex block is
  \(\begin{pmatrix}a&-b\\b&a\end{pmatrix}\), of determinant
  \(a^2+b^2>0\). The proof now uses this form explicitly.

No further concrete mathematical defect was found in the two assigned items.

## Dependencies and supplier homes

def-minkowski-embedding-of-a-number-field now directly depends on:

- def-archimedean-embeddings-and-number-field-signature —
  number-fields-rings-of-integers-and-discriminants
- def-number-field — number-fields-rings-of-integers-and-discriminants
- thm-discriminant-as-an-embedding-determinant — added direct supplier,
  number-fields-rings-of-integers-and-discriminants

thm-ring-of-integers-and-ideals-are-full-lattices directly depends on:

- def-minkowski-embedding-of-a-number-field —
  minkowski-theory-and-number-field-class-groups (same batch A page)
- def-full-euclidean-lattice-and-covolume —
  minkowski-theory-and-number-field-class-groups (same batch A page)
- thm-discriminant-as-an-embedding-determinant —
  number-fields-rings-of-integers-and-discriminants
- thm-ring-of-integers-free-of-rank-degree —
  number-fields-rings-of-integers-and-discriminants
- lem-subgroups-of-z-are-cyclic — divisibility-gcd-and-bezout
- def-left-right-and-two-sided-ideal — ideals-and-quotient-rings
- def-fractional-ideal — dedekind-domains-and-ideal-classes
- def-number-field — number-fields-rings-of-integers-and-discriminants
- def-ring-of-integers-of-a-number-field —
  number-fields-rings-of-integers-and-discriminants

The theorem no longer directly depends on
thm-clearing-denominators-for-an-algebraic-number,
cor-submodules-of-finite-free-pid-modules-are-free, or
def-principal-ideal-domain. Its two repaired Facts and the exact cited
statements and proof-step uses are synchronized in the selected batch 2
contract. The corresponding page-manifest entries and the canonical
embedding-convention coverage row are synchronized.

## Local verification

- precheck.mts on both items: 1 proof-bearing item checked, 0 failing.
- rendercheck.mjs on both items: KaTeX and frontmatter pass.
- Strict selected proof contracts: 2 items checked, 0 errors, 0 warnings.
- manifest-deps.mjs on batch 2: 31 items, 0 missing dependency arrays,
  0 errors.
- content-policy.mjs on batch 2: 31 items, 0 errors, 0 warnings.
- Batch 2 dependency-level validation: 31 items; selected levels are 0 for
  the definition and 1 for the lattice theorem; item/manifest dependency
  arrays match.

The scaffold-only content-policy --manifest-only mode was also attempted.
It reported the expected “item already exists” error for all 31 authored
items; the regular batch content-policy check above is the applicable
post-authoring result.

## Stable hashes

These hashes identify the repaired inputs and selected batch artifacts:

- def-minkowski-embedding-of-a-number-field:
  8dec65b5412f9fc9e7daa957e4e74a59e829a7546d0e3bb474826c1a749e1121
- thm-ring-of-integers-and-ideals-are-full-lattices:
  440cd4802d04932ae221ee703d3ce47649c5d64d8af2cecf215135bee02a268a
- batch 2 pages manifest:
  ce5f368aadaf81aec8eb6f3b05da1dfedcf2c941561e0c1aeb7719cecc2514a3
- batch 2 proof contracts:
  d70b56423f0b1cf9ae0a14f35d99e149e54142d3ad73f05477ed61b99a3f8000
- batch 2 coverage:
  65347e2a224c7801cc57c78934fce98e859e0931bafce3778729bc24614c8e3b

No ordinary batch receipts, shared plans, ledgers, source notes, item files
outside the two assigned IDs, or commits were written.

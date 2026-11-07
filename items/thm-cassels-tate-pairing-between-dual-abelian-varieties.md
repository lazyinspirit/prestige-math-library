---
id: thm-cassels-tate-pairing-between-dual-abelian-varieties
kind: theorem
title: "Cassels–Tate pairing between dual abelian varieties"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-tate-shafarevich-group-of-abelian-variety
  - thm-global-flat-duality-number-field-finite-sheaves
  - thm-global-flat-duality-finite-constant-field-curves
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Chapter I, §6, Theorem 6.13"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Printed pp. 82–84: canonical primary-component pairing and the statement that its left and right kernels are the divisible subgroups."
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, §§3–5"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed pp. 7–11: cochain definition of the pairing, polarization obstruction class, and Theorem 5."
verification: {}
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a global field,
$A/K$ an abelian variety, and $A^\vee/K$ its dual. There is a canonical
bilinear Cassels–Tate pairing
$$
\langle\ ,\ \rangle_{CT}:\Sha(A/K)\times\Sha(A^\vee/K)
\longrightarrow\mathbb Q/\mathbb Z
$$
whose left kernel is the maximal divisible subgroup
$\Sha(A/K)_{\mathrm{div}}$ and whose right kernel is
$\Sha(A^\vee/K)_{\mathrm{div}}$.

## Statement references

[[def-tate-shafarevich-group-of-abelian-variety|Tate–Shafarevich group]]

[[thm-global-flat-duality-number-field-finite-sheaves|Global flat duality over number fields]]

[[thm-global-flat-duality-finite-constant-field-curves|Global flat duality over finite-constant-field curves]]

## Facts & Assumptions

**Given:** AC and DC, a global field $K$, an abelian variety $A/K$, its dual
$A^\vee/K$, and the fppf Tate–Shafarevich groups defined by localization.

[A1] AC and DC are the assumptions inherited by the global-place,
completion, and duality conventions. ([[def-axiom-of-choice]],
[[def-dependent-choice]],
[[def-tate-shafarevich-group-of-abelian-variety]])

[F1] The Tate–Shafarevich group is the kernel of localization from global
fppf $H^1$ to the product of local fppf $H^1$ groups.
([[def-tate-shafarevich-group-of-abelian-variety]])

[L1] Milne's Theorem I.6.13 gives a canonical pairing on the relevant
primary components and states that its two kernels are the divisible
subgroups. The theorem's proof passes through the global duality maps and
local Tate pairings. ([Milne, *Arithmetic Duality Theorems*, Chapter I, §6](https://www.jmilne.org/math/Books/ADTnot.pdf))

[L2] Poonen–Stoll construct the Cassels–Tate pairing using local invariant
maps and global reciprocity, and prove the polarization identity
$\langle a,\lambda a+c_\lambda\rangle=0$ in their Theorem 5.
([Poonen–Stoll, §§3–5](https://math.mit.edu/~poonen/papers/sha.pdf))

## Proof

**Proof technique:** construct the pairing from local invariant maps and
identify its kernels through global duality.

**Given:** [A1], [F1], [L1], [L2], and the current global-flat-duality
interfaces [thm-global-flat-duality-number-field-finite-sheaves] and
[thm-global-flat-duality-finite-constant-field-curves].

1.1 For classes locally trivial at every place, the Poonen–Stoll construction
chooses global cocycles and local trivializations, forms the associated
cup-product 2-cocycles, applies each local invariant
$\operatorname{Br}(K_v)\to\mathbb Q/\mathbb Z$, and sums over places. Global
reciprocity makes this finite sum independent of the choices and bilinear;
the source's complete construction is [L2]. [F1, L2, given]

1.2 The kernel assertion is obtained primary by primary from the global
duality map: local Tate duality identifies the local terms, and global
duality identifies the orthogonal complement with the image of the global
cohomology map. Milne's Theorem I.6.13 identifies the remaining left and
right kernels with the maximal divisible subgroups [L1]. [A1, F1, L1, L2,
step 1.1, algebra]

2.1 The actual number-field and function-field global-flat-duality carriers
still leave their boundary comparisons unresolved, and no in-run supplier
currently supplies local Tate duality for abelian varieties over all
completions. Their finite-flat local-duality carrier is a different theorem
and is itself escalated. Therefore the source construction and kernel
argument have not been reconciled with complete current item suppliers; the
pairing statement is escalated rather than recorded ready.
[F1, L1, L2, step 1.1, step 1.2]

## Unresolved prerequisites

- Missing supplier: local Tate duality for $A/K_v$ and $A^\vee/K_v$ over every local completion, with the real-place convention and characteristic-$p$ scope stated. The finite-flat local-duality item does not supply this abelian-variety theorem.
- `thm-global-flat-duality-number-field-finite-sheaves` leaves local-to-global boundary compatibility unfinished.
- `thm-global-flat-duality-finite-constant-field-curves` leaves the height-one pairing and completed-localization comparison unfinished.
- The conversion of the continuous-Galois obstruction class $c_\lambda$ used by Poonen–Stoll to the fppf $\Sha$ convention of the local definition is part of the unclosed smooth-cohomology comparison.

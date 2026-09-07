# Symmetric-group representation ownership seams

Reconciled 2026-09-07 between the symmetric-group and braid-group scaffold
leads. This is planning evidence only; it does not move an existing item or
publish a page.

## Existing representation-theory suppliers

- RG-8 through RG-11 retain partitions/Young diagrams, tableaux and Young
  permutation modules, characteristic-zero Specht construction and
  classification, ordinary branching/Young's rule/Schur--Weyl, and hook
  lengths/RSK. Every use in the SYMR scaffold names the exact inherited item
  ID and supplier page; no SYMR item restates those results.
- RG-13 retains the generic type-A Hecke algebra, standard basis,
  specializations and Tits deformation. SYMR begins with semisimplicity at an
  arbitrary field parameter, Murphy cellular structure, Hecke Specht modules,
  and root-of-unity simple-module theory.
- RL-8 retains polynomial-`GL_r` Schur characters, the LR-tableau definition,
  and the stable-rank Littlewood--Richardson tensor-product theorem. SYMR owns
  the outer induction product and restriction coproduct on
  `\bigoplus_n R(S_n)`, their Frobenius-characteristic dictionary, skew Specht
  characters, and restriction/induction consequences. It reuses
  `def-littlewood-richardson-tableau-and-coefficient` and
  `thm-littlewood-richardson-tensor-product-rule` rather than minting
  duplicates.

All these named RG/RL pages are registered with empty plan inventories and
absent from `library/` on the audit date. They are planned suppliers, not
published mathematics.

## Braid-group seam

The braid lead owns braid topology and geometric braid representations,
Hecke/Jones trace applications to closures, braid-specific categorical
actions, Soergel bimodules, Rouquier complexes and link homology. The SYMR
lead owns Hecke-module/cellular theory, cyclotomic Hecke--KLR representation
theory, level-one Fock/crystal theory, Ariki categorification and graded
decomposition numbers.

The braid Hecke/Jones and Soergel pages consume RG-13 directly and currently
need no SYMR page. No SYMR page depends on a braid page. Consequently the seam
has no cross-track cycle. A later integrator may add a braid-to-SYMR edge only
if a final braid proof actually consumes one of the new module-theoretic
results; it must not reverse that edge.

## Quantum-affine seam

RL-12 through RL-15 provide only classical Kac--Moody/affine Lie algebra
theory and are planned/unbuilt. They do not provide quantum groups, crystal
bases or global bases. The SYMR Fock-space page therefore develops only the
narrow presentation and level-one module/crystal machinery needed for
`U_v(\widehat{\mathfrak{sl}}_e)`. It does not claim that the classical RL
pages are a sufficient prerequisite and does not attempt a general quantum
group track.

## Dependency direction

The representation-theoretic direction is

`RG-8--RG-11 / RL-8 / RG-13 -> ordinary and modular SYMR -> Hecke/KLR and Fock
SYMR -> Ariki/graded decomposition`.

Kronecker coefficients, FI-modules/representation stability, and Plancherel
asymptotics form separate branches from the ordinary characteristic-zero
foundation. Their pages do not depend on the modular/categorification chain.
B companions are leaves throughout.

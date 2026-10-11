---
id: def-graded-module-and-projective-grothendieck-groups-for-klr-towers
kind: definition
title: "Graded module and projective Grothendieck groups of the KLR and Hecke towers"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [def-graded-grothendieck-group-shift-module-and-cartan-map,
       thm-graded-projective-and-simple-classes-have-shift-orbit-bases,
       def-finitely-generated-graded-projective-module,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       def-klr-grading-and-diagrammatic-composition,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism,
       thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.4-2.10, printed pp. 6-10: graded module categories, induction and restriction, duality, divided powers and categorification of the negative half; Section 4.1-4.5, printed pp. 30-34: cyclotomic quotient, Hecke block, Theorem 4.1 and the Hecke-KLR relations (4.10); Section 4.7-4.8, printed pp. 35-37: Theorems 4.9, 4.11, 4.12. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 2, printed pp. 6-17: cyclotomic Hecke and KLR conventions, weight idempotents and blocks; Section 9.1-9.5, printed pp. 39-46: categorification of f and V(Lambda). Complete passages read."
verification:
  precheck: pass
---

## Definition

Let $k$ be a field and let $R=\bigoplus_{\alpha\in Q_+}R_\alpha$ be a tower of
finite-dimensional unital $\mathbb Z$-graded $k$-algebras with local units
$e(\alpha)$: every finite root-supported element has a unit given by the sum of its finitely many sector units, each
$R_\alpha$ a direct summand and $R_0=k$. Define
$$K_0^{\rm gr}(R):=\bigoplus_{\alpha\in Q_+}K_0^{\rm gr}(R_\alpha),\qquad G_0^{\rm gr}(R):=\bigoplus_{\alpha\in Q_+}G_0^{\rm gr}(R_\alpha),$$
the restricted direct sums of the blockwise Grothendieck groups of
[[def-graded-grothendieck-group-shift-module-and-cartan-map]]:
$K_0^{\rm gr}(R_\alpha)$ of finitely generated graded left
$R_\alpha$-projectives modulo split exact sequences
([[def-finitely-generated-graded-projective-module]]) and
$G_0^{\rm gr}(R_\alpha)$ of finite-dimensional graded left $R_\alpha$-modules
modulo short exact sequences. Both are modules over
$A:=\mathbb Z[q,q^{-1}]$ by $q[M]:=[M\{1\}]$
([[def-graded-ring-module-bimodule-and-internal-shift]]), and inside each
finite-dimensional block the shift-orbit bases of
[[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]] hold. The
Cartan homomorphism $c:K_0^{\rm gr}(R)\to G_0^{\rm gr}(R)$, $[P]\mapsto[P]$, is
$A$-linear. The forgetful maps $\zeta$ to the ungraded groups $K_0(R)$,
$G_0(R)$ are additive and satisfy $\zeta(qm)=\zeta(m)$. The groups $K_0^{\rm gr}$ and
$G_0^{\rm gr}$ are DIFFERENT objects and are never identified.

**The two towers used below.** (i) For the standard homogeneous cyclotomic
quotient of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]] at the
level-one weight $\Lambda_0$ of
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]], put
$R^\Lambda_\alpha=R^\Lambda(\alpha)$; every block is finite dimensional and has
the homogeneous symmetrizing functional of
`thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`, with
grading shifts as in [[def-klr-grading-and-diagrammatic-composition]]. (ii) For
the cyclotomic Hecke tower $H^{\Lambda}:=\bigoplus_\alpha H^\Lambda_\alpha$ of
`def-affine-and-cyclotomic-type-a-hecke-algebras` with the block decomposition
of `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`, fix an
admissible local normalising series and transport the homogeneous KLR
decomposition through the blockwise isomorphism of
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`, as in
`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`; the induced
transport identifies $K_0^{\rm gr}(H^{\Lambda})\cong K_0^{\rm gr}(R^\Lambda)$
as $A$-modules and similarly for $G_0^{\rm gr}$, compatibly with $\zeta$ and
with the Cartan homomorphisms. Every class has finite root support, so the
direct sums are restricted.

No choice principle is used in this definition.

## Facts & Assumptions

**Given:** A field $k$, a tower $R=\bigoplus_\alpha R_\alpha$ of
finite-dimensional graded algebras with local units, together with the standard
cyclotomic tower $R^\Lambda$ at $\Lambda_0$ and the Hecke tower $H^\Lambda$ with an
admissible local normalising series. All modules are left modules and all maps
preserve degree.

[F1] For a finite-dimensional graded algebra $A$, the groups
$G_0^{\mathrm{gr}}(A)$ and $K_0^{\mathrm{gr}}(A)$, the shift action
$v^r[M]=[M\{r\}]$ and the graded Cartan homomorphism
$c_A^{\mathrm{gr}}:[P]\mapsto[P]$ are those of
[[def-graded-grothendieck-group-shift-module-and-cartan-map]]; shift is
invertible and composes by addition of degrees, and $c_A^{\mathrm{gr}}$ is
$\mathbb Z[v,v^{-1}]$-linear.

[F2] The graded-simple shift orbits and the classes of chosen graded
projective covers form $\mathbb Z[v,v^{-1}]$-bases of
$G_0^{\mathrm{gr}}(A)$ and $K_0^{\mathrm{gr}}(A)$ for every finite-dimensional
graded $k$-algebra $A$, with no positivity assumption
([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]).

[F3] Over a finite-dimensional algebra, a finite homogeneous generating
family gives a surjection from a finite sum of shifted regular modules, so
every finitely generated graded projective is finite dimensional
([[def-finitely-generated-graded-projective-module]]). Internal shift is
the degreewise operation $M\{r\}_d=M_{d-r}$ of
[[def-graded-ring-module-bimodule-and-internal-shift]].

[F4] The cyclotomic quotient $R^\Lambda(\beta)$ at a dominant integral weight
is the quotient of the KLR algebra $R(\beta)$ by the two-sided ideal generated
by the first-strand cyclotomic elements, with local units $e(\beta)$ acting as
the identity on their summand
([[def-cyclotomic-klr-quotient-at-a-dominant-weight]]), and its grading is the
diagrammatic grading of
[[def-klr-grading-and-diagrammatic-composition]].

[F5] Every block $R^\Lambda(\alpha)$ of the standard level-one cyclotomic
quotient is finite dimensional and carries a homogeneous symmetrizing
functional (the blockwise finite-dimensionality and symmetry statement of
`thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`), and
the blockwise isomorphism of
`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` matches each Hecke
block with its KLR block, the transported grading being supplied by
`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`.

[F6] For every content $\alpha$, including zero sectors,
$H^\Lambda_\alpha=0$ if and only if $R^\Lambda_\alpha=0$; this follows from
the explicit mutually inverse sector maps of
[[thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras]].

## Proof

**Proof technique:** direct.

1.1 **Restricted sums are A-modules.** Each summand $K_0^{\mathrm{gr}}(R_\alpha)$ is a module over $A$ by $q[P]=[P\{1\}]$, and shift by an integer $r$ sends a class concentrated in degree $\alpha$ to the same root degree $\alpha$, because internal shift changes only the internal grading and not the idempotent label [F1, F3]. Hence every finite $A$-combination of classes lives in finitely many root summands and the restricted direct sums are $A$-modules; the local units $e(\alpha)$ make each $R_\alpha$ a unital subalgebra and annihilate the other summands, so the restricted direct sum is well defined and no infinite-support class is introduced. [F1, F3]

1.2 **The maps c and zeta.** On each block the ungraded forgetful map sends a graded projective class to its underlying projective class and a graded module class to its underlying module class; it is additive, well defined on the defining relations, and satisfies $\zeta(q[M])=\zeta([M\{1\}])=[M]_{\rm ungr}=\zeta([M])$ [F1]. The graded Cartan homomorphism is the sum of the blockwise maps $[P]\mapsto[P]$, which are $A$-linear because including a projective into the module category commutes with internal shift; compatibility with $\zeta$ is immediate from the definitions. [F1]

1.3 **The KLR tower.** For the standard level-one cyclotomic quotient every block $R^\Lambda(\alpha)$ is finite dimensional and carries the homogeneous symmetrizing functional of [F5], so the shift-orbit bases of [F2] apply blockwise without any positivity hypothesis [F4, F5]. Since the root degree is additive, a finite combination of block classes has finite support and belongs to the restricted direct sum. [F2, F4, F5]

1.4 **Transport to the Hecke tower.** For each nonzero residue-content sector, [F5] gives an algebra isomorphism $\varphi_\alpha:H^\Lambda_\alpha\to R^\Lambda(\alpha)$ for the fixed admissible normalising series, homogeneous for the transported grading. Restriction of scalars along $\varphi_\alpha$ is an exact equivalence with exact inverse given by restriction along $\varphi_\alpha^{-1}$; it preserves finite-dimensional modules, projectives and internal shifts. For every zero Hecke sector, [F6] makes the corresponding KLR sector zero as well. A unital module over the zero algebra satisfies $m=1m=0m=0$, so both Grothendieck groups of either zero sector vanish. Summing the nonzero-sector isomorphisms and these zero-group identifications over finite root supports gives $K_0^{\mathrm{gr}}(H^\Lambda)\cong K_0^{\mathrm{gr}}(R^\Lambda)$ and $G_0^{\mathrm{gr}}(H^\Lambda)\cong G_0^{\mathrm{gr}}(R^\Lambda)$. These are $A$-linear since transport commutes with internal shift, and they intertwine the Cartan maps and the forgetful maps $\zeta$ with the ungraded identifications. [F1, F3, F5, F6]

2.1 **The groups remain distinct and no choice is used.** The identification $K_0^{\mathrm{gr}}(H^\Lambda)\cong K_0^{\mathrm{gr}}(R^\Lambda)$ of step 1.4 transports projective classes between the specified Hecke and KLR towers; it asserts no identification of the arbitrary tower $R$ with $R^\Lambda$. The Cartan homomorphism $c$ and the forgetful $\zeta$ are not inverted or identified, and no statement of the definition equates $K_0^{\mathrm{gr}}$ with $G_0^{\mathrm{gr}}$. All constructions use the finite block decompositions, the local units, and the explicit homogeneous algebra isomorphisms, so no choice principle is invoked. [F1, F5, given] ∎

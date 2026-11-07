---
id: lem-class-formation-relative-invariant-for-finite-quotients
kind: lemma
title: Relative invariant generators for finite quotients of a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- def-class-formation
- def-dependent-choice
- lem-relative-invariant-for-class-formations
justified_by: []
proof_strategy: direct
axiom_use: Both original DC and fully supplied ZF branches are preserved. The actual
  continuous normalizer/cochain proof uses only finite choices and no ordinary-to-continuous
  LHS substitution.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §§1 and 4
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: The class-formation axioms in §1, printed pp. 17–25, and the finite-quotient
      duality setup in §4, printed pp. 48–52.
verification:
  precheck: pass
---


## Statement

Assume either (i) Dependent Choice with the supplied continuous-cohomology and
Lyndon–Hochschild–Serre resolution conventions, or (ii) in ZF, fixed injective
resolutions and all comparison maps and homotopies required by the
Lyndon–Hochschild–Serre construction. Let $G$ be profinite and let $C$ be a
discrete abelian $G$-module with a class-formation structure. If
$U\triangleleft V\leq G$ are open subgroups, put $Q=V/U$ and $d=[V:U]$. Inflation identifies
$$
H^2(Q,C^U)\longrightarrow\ker\bigl(\operatorname{Res}^{V}_{U}:H^2(V,C)\to H^2(U,C)\bigr).
$$
Under the invariant $\operatorname{inv}_V$, this kernel corresponds to
$(\frac1d\mathbb Z)/\mathbb Z\subseteq\mathbb Q/\mathbb Z$. Consequently
$H^2(Q,C^U)$ is cyclic of order $d$, and there is a unique class whose relative
invariant $\operatorname{inv}_V(\operatorname{Inf}(u))$ is $1/d$ in
$\mathbb Q/\mathbb Z$; that class generates $H^2(Q,C^U)$.

## Statement references

[[def-dependent-choice]]

[[def-class-formation]]

[[thm-lyndon-hochschild-serre-spectral-sequence]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The original class formation, open $U\trianglelefteq V$,
$d=[V:U]$ and either of the two original data/choice branches.

[F1] Class-formation invariants are isomorphisms, open-subgroup $H^1$
vanishes, and restriction multiplies invariant by $d$.
[[def-class-formation]]

[F2] The direct continuous-cochain relative-invariant proof identifies the
inflation image with the restriction kernel. Its explicit Remark proves the
same cochain assertion in ZF with supplied comparison data, since only
finite coset and normalizer-lift choices are used.
[[lem-relative-invariant-for-class-formations]]

[A1] The original DC branch uses the supplied cohomology convention. The
original ZF branch supplies its own resolutions/comparisons/homotopies;
neither branch is silently strengthened to AC. [[def-dependent-choice]]

## Proof

**Proof technique:** use the actual continuous splitting/normalizer kernel
calculation, then read the finite invariant subgroup.

**Given:** The original data and either branch.

1.1 Apply the continuous-cochain assertion [F2] to $U\trianglelefteq V$.
In the DC branch it is the lemma's Statement; in the supplied ZF branch it
is its proved Remark. The proof takes a continuous cocycle with split
restriction, normalizes the $U$-splitting by $H^1(U,C)=0$, and forms its
normalizer modulo the splitting. The resulting finite $Q$-extension and
continuous comparison cochain give the actual inflation map and its exact
kernel. Thus inflation identifies $H^2(Q,C^U)$ with the restriction
kernel in either original branch. No ordinary-group LHS theorem is applied
to profinite continuous cohomology. [A1, F1, F2, given]

2.1 Under [F1], the restriction kernel has invariant subgroup
$\{x\in\mathbb Q/\mathbb Z:dx=0\}=(\frac1d\mathbb Z)/\mathbb Z$.
This is cyclic of order $d$, so its unique element of invariant $1/d$
has a unique preimage, which generates $H^2(Q,C^U)$. When $d=1$ this
is the zero group with its zero generator. [F1, F2, step 1.1, algebra] ∎

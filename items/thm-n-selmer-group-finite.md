---
id: thm-n-selmer-group-finite
kind: theorem
title: "Finiteness of the n-Selmer group over a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-n-selmer-group-of-abelian-variety
  - thm-local-flat-duality-for-finite-flat-group-schemes
  - thm-global-flat-duality-number-field-finite-sheaves
  - thm-global-flat-duality-finite-constant-field-curves
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - thm-multiplication-by-n-has-degree-n-to-2g
  - lem-abelian-variety-spreads-to-abelian-scheme-away-finitely-many-primes
  - lem-multiplication-by-n-on-abelian-scheme
  - lem-lang-neron-smooth-abelian-scheme-model
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-curves-function-fields-equivalence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Chapter I, §6, Theorem 6.13"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Printed pp. 82–84: kernels of the Cassels–Tate pairing on primary components are divisible; the proof uses global duality and Mordell–Weil input."
    - title: "J. S. Milne, Elliptic Curves, Chapter IV, §3"
      url: "https://www.jmilne.org/math/Books/EC2.pdf"
      locator: "Printed pp. 123–126, complete proof of Selmer finiteness for elliptic curves over number fields; this does not prove the all-abelian-variety, all-global-field statement here."
verification: {}
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a global field,
$A/K$ an abelian variety, and $n\ge2$. Then the fppf $n$-Selmer group
$\operatorname{Sel}_n(A/K)$ is finite, including when $n$ is divisible by
the characteristic of $K$.

## Statement references

[[def-n-selmer-group-of-abelian-variety|n-Selmer group]]

[[thm-local-flat-duality-for-finite-flat-group-schemes|Local flat duality over a Henselian DVR]]

[[thm-global-flat-duality-number-field-finite-sheaves|Global flat duality over number fields]]

[[thm-global-flat-duality-finite-constant-field-curves|Global flat duality over finite-constant-field curves]]

## Facts & Assumptions

**Given:** AC and DC, a global field $K$, an abelian variety $A/K$, and an
integer $n\ge2$.

[A1] AC and DC are inherited from the Kummer and duality routes in this
statement. ([[def-axiom-of-choice]], [[def-dependent-choice]],
[[def-n-selmer-group-of-abelian-variety]])

[F1] The Kummer kernel $A[n]$ is a finite flat commutative group scheme of
rank $n^{2g}$ for $g=\dim A$, and the local conditions defining
$\operatorname{Sel}_n(A/K)$ are the images of the local Kummer maps.
([[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme]],
[[thm-multiplication-by-n-has-degree-n-to-2g]],
[[def-n-selmer-group-of-abelian-variety]])

[F2] Over a number field, the stated global duality theorem gives perfect
pairings of finite groups for finite sheaves on an open integer-ring scheme,
provided the coefficient has its required finite-étale and finite-flat
models. ([[thm-global-flat-duality-number-field-finite-sheaves]])

[F3] Over a function field with finite exact constant field, the stated
global duality theorem identifies compact-support cohomology with the
continuous Pontryagin dual of ordinary fppf cohomology for a finite flat
group scheme on an open curve. ([[thm-global-flat-duality-finite-constant-field-curves]])

[F4] The local finite-flat duality input over a characteristic-zero
Henselian DVR with finite residue field is a perfect pairing of finite
groups. ([[thm-local-flat-duality-for-finite-flat-group-schemes]])

[F5] Over a number field, an abelian variety extends to an abelian scheme
on a nonempty open of the integer-ring scheme. For a finitely generated
extension of a relatively algebraically closed constant field, finite
separability over a rational function field gives a smooth affine base with
that function field and an abelian-scheme model. A finite field is perfect,
so a function field of transcendence degree one has a separating parameter
and a smooth proper geometrically integral curve model. On any locally
Noetherian base carrying an abelian scheme, its $n$-torsion is finite flat,
and is finite étale when $n$ is invertible.
([[lem-abelian-variety-spreads-to-abelian-scheme-away-finitely-many-primes]],
[[lem-lang-neron-smooth-abelian-scheme-model]],
[[thm-ag-separating-transcendence-basis-perfect-field]],
[[thm-curves-function-fields-equivalence]],
[[lem-multiplication-by-n-on-abelian-scheme]])

## Proof

**Proof technique:** reduce the Selmer conditions to cohomology of a finite
flat sheaf on a suitable open global scheme and apply global and local flat
duality.

**Given:** AC, DC, [F1]–[F5], and the global field $K$.

1.1 For a number field, choose an open subscheme $U\subseteq\operatorname{Spec}
\mathcal O_K$ that omits the primes of bad reduction and the primes above
$n$. By [F5], $A$ has an abelian-scheme model there and $A[n]$ has a
finite-étale model. For a function field, let $k$ be its finite exact constant field. It is
perfect and relatively algebraically closed in $K$. By [F5] choose a
separating parameter, a smooth proper curve $C/k$ with function field $K$,
and a smooth affine $k$-scheme $S$ with function field $K$ carrying an
abelian-scheme model of $A$. A nonempty affine chart of $C$ and $S$ have
isomorphic nonempty opens: identify their coordinate rings with finitely
generated $k$-subalgebras of $K$ and clear denominators in both directions.
Transport and restrict the model to such an open $Usubset C$. By [F5],
$A[n]$ has a finite-flat model on $U$, even when the characteristic divides
$n$. Applying [F3] on $U$ does not require extending this model across
the omitted places.
[F1, F2, F3, F5, construct]

1.2 At the places omitted from $U$, the Selmer condition is imposed by local
Kummer images. At the places in $U$, the route to finiteness requires that
these local images identify with the unramified subgroup in
$H^1(K_v,A[n])$, so that the Selmer group embeds in the corresponding
ordinary cohomology group over $U$. The unramified description here concerns
good reduction with $n$ invertible; it does not describe the characteristic-dividing
case. A separate global finiteness bound is required: the duality interfaces
[F2] and [F3] alone do not supply it. [F1, F2, F3, F4, step 1.1, algebra]

2.1 The current supplier bodies do not establish the local Kummer to
unramified comparison or finiteness of the function-field cohomology group
from the stated Pontryagin-duality interface. In addition, [F2] and [F3]
explicitly leave their boundary-comparison arguments unresolved. These gaps
prevent the finiteness conclusion from being proved from the actual current
inputs; this item is escalated for reconciliation.
[F2, F3, F4, step 1.1, step 1.2]

## Unresolved prerequisites

- The number-field global-duality carrier leaves its local-to-global boundary compatibility incomplete, and its local-flat input leaves the noncomplete Henselian trace comparison unresolved.
- The function-field global-duality carrier leaves the height-one pairing and completed-localization comparison unresolved. Its current statement is Pontryagin duality and does not by itself state that the cohomology group is finite.
- Missing local supplier needed by step 1.2: the Kummer image for an abelian variety with good reduction and $n$ invertible agrees with the unramified subgroup of $H^1(K_v,A[n])$.
- For characteristic-dividing $n$, replace the prime-to-characteristic unramified argument by a finite-flat local-condition argument and a finite global bound. Fppf $H^1(U,G)$ of a finite flat group scheme need not be finite merely because $U$ has finite constant field.

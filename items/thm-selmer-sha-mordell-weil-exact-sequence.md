---
id: thm-selmer-sha-mordell-weil-exact-sequence
kind: theorem
title: "Kummer exact sequence relating Mordell–Weil, Selmer, and Tate–Shafarevich groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-n-selmer-group-of-abelian-variety
  - def-tate-shafarevich-group-of-abelian-variety
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
  - cor-global-kummer-exact-sequence-for-abelian-variety
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Chapter I, §6"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Printed pp. 74–75, global Kummer and Selmer definitions."
    - title: "J. S. Milne, Elliptic Curves, Chapter IV, §2"
      url: "https://www.jmilne.org/math/Books/EC2.pdf"
      locator: "Printed pp. 118–121, Kummer exact sequence and Selmer group for elliptic curves."
verification: {}
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a global field,
$A/K$ an abelian variety, and $n\ge2$. The natural maps induced by the global
Kummer sequence give a short exact sequence of abelian groups
$$
0\longrightarrow A(K)/nA(K)\longrightarrow\operatorname{Sel}_n(A/K)
\longrightarrow\Sha(A/K)[n]\longrightarrow0,
$$
where $\Sha(A/K)[n]=\{x\in\Sha(A/K):nx=0\}$.

## Statement references

[[def-n-selmer-group-of-abelian-variety|n-Selmer group]]

[[def-tate-shafarevich-group-of-abelian-variety|Tate–Shafarevich group]]

[[cor-global-kummer-exact-sequence-for-abelian-variety|Global cohomological Kummer sequence]]

## Facts & Assumptions

**Given:** AC and DC, a global field $K$, an abelian variety $A/K$, and an
integer $n\ge2$.

[A1] AC and DC are the assumptions of the fppf Kummer and its cohomology
sequence. ([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-fppf-kummer-exact-sequence-for-abelian-variety]],
[[cor-global-kummer-exact-sequence-for-abelian-variety]])

[F1] The global Kummer sequence is
$0\to A(K)/nA(K)\xrightarrow{\delta}H^1(K,A[n])\xrightarrow{i_*}
H^1(K,A)[n]\to0$. ([[cor-global-kummer-exact-sequence-for-abelian-variety]])

[F2] $\operatorname{Sel}_n(A/K)$ consists exactly of the classes in
$H^1(K,A[n])$ whose localizations lie in the local Kummer images.
([[def-n-selmer-group-of-abelian-variety]])

[F3] $\Sha(A/K)$ is the kernel of the product of the local restriction maps
$H^1(K,A)\to\prod_vH^1(K_v,A)$. ([[def-tate-shafarevich-group-of-abelian-variety]])

## Proof

**Proof technique:** restrict the global Kummer sequence to the subgroup
satisfying all local Kummer conditions.

**Given:** The data above.

1.1 The map $A(K)/nA(K)\to H^1(K,A[n])$ in [F1] is injective. Its image
satisfies every local Kummer condition because localization carries the global
connecting class of a point $P\in A(K)$ to the local connecting class of the
same point viewed in $A(K_v)$. Thus its image lies in
$\operatorname{Sel}_n(A/K)$. [A1, F1, F2, given, algebra]

1.2 If $\xi\in\operatorname{Sel}_n(A/K)$ maps to zero under the map to
$H^1(K,A)$, [F1] places $\xi$ in the image of $A(K)/nA(K)$. This proves
exactness at the Selmer group. [F1, F2, step 1.1]

2.1 If $\xi\in\operatorname{Sel}_n(A/K)$, then its image $i_*\xi$ is
$n$-torsion by [F1]. At each place its localization is zero in
$H^1(K_v,A)$, since the local Kummer image maps to zero in that group by the
local cohomology sequence; [F2] therefore gives $i_*\xi\in\Sha(A/K)[n]$.
[F1, F2, F3, given]

2.2 Conversely, let $c\in\Sha(A/K)[n]$. Exactness in [F1] gives a class
$\xi\in H^1(K,A[n])$ mapping to $c$. For every place $v$, [F3] says
$c_v=0$; by exactness of the local Kummer sequence, the localized lift
$\xi_v$ lies in the local Kummer image. Hence [F2] gives
$\xi\in\operatorname{Sel}_n(A/K)$, proving surjectivity onto
$\Sha(A/K)[n]$. [A1, F1, F2, F3, step 2.1, algebra]

3.1 The injection and exactness at the middle term from steps 1.1–1.2, and
the surjectivity from step 2.2, give the displayed short exact sequence.
[step 1.1, step 1.2, step 2.2] ∎

---
id: def-global-idele-class-module-for-galois-group
kind: definition
title: "Discrete Galois module of direct-limit idèle classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-absolute-galois-group-of-a-global-field
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-global-field-completion-tensor-product-decomposition
  - lem-filtered-colimits-of-abelian-groups-are-exact
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice and DC are inherited from the place, completion,
  restricted-product, and cohomology conventions. The direct-limit Galois
  action adds no choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter VII, §5"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Direct-limit idèle-class module and its Galois action."
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §1, Example 1.6(c)"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The global-field idèle-class module as a discrete Galois module."
verification:
  precheck: n/a
---

## Definition

Assume AC, Countable Choice and Dependent Choice. Let $F$ be a global field, fix a
separable closure $F_s$, and put $G_F=\operatorname{Gal}(F_s/F)$. For every
finite intermediate field $E$, let $C_E=\mathbb A_E^\times/E^\times$ be its
idele class group as an abstract abelian group. If $E\subseteq E'$, send an
idele $a=(a_v)_v$ of $E$ to the idele of $E'$ whose component at each place
$w$ above $v$ is the image of $a_v$ under the canonical local embedding
$E_v\to E'_w$. This map sends principal ideles to principal ideles and so
induces a homomorphism $C_E\to C_{E'}$. These maps compose under field
inclusion. Define the abelian group
$$C_F^{\mathrm{disc}}:=\operatorname*{colim}_{E/F\subset F_s,\,[E:F]<\infty} C_E$$
with the discrete topology. For $g\in G_F$ and a class represented by
$c\in C_E$, let $g[c]$ be the class in $C_{gE}$ induced by the field
isomorphism $g:E\to gE$ and its maps on local completions. This action is
well defined on the direct limit and continuous because the open subgroup
$G_E$ fixes every class represented at level $E$. The resulting discrete
continuous $G_F$-module is the direct-limit idèle-class module. Define also
$$\mathbb I_F^{\mathrm{disc}}:=\operatorname*{colim}_{E/F\subset F_s,\,[E:F]<\infty}\mathbb A_E^\times$$
using the same extension-of-idèles maps and Galois transport. The natural maps
from $E^\times$ to $\mathbb A_E^\times$ and from $\mathbb A_E^\times$ to
$C_E$ induce an exact sequence of discrete $G_F$-modules
$$1\longrightarrow F_s^\times\longrightarrow\mathbb I_F^{\mathrm{disc}}
\longrightarrow C_F^{\mathrm{disc}}\longrightarrow1.$$

## Definition references

[[def-global-field]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[lem-filtered-colimits-of-abelian-groups-are-exact]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[Milne, *Class Field Theory*, Chapter VII, §5](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Milne, *Arithmetic Duality Theorems*, Chapter I, §1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The choice conventions above; a global field $F$; a separable closure $F_s$; finite intermediate fields $E\subseteq E'\subset F_s$; and an idele $a\in\mathbb A_E^\times$.

[A1] AC, Countable Choice and DC are the choice branches of the place/completion, restricted-product and continuous-cohomology interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] For all but finitely many finite places $v$ of $E$, an idele component $a_v$ lies in the local unit group. [[def-idele-group-of-a-global-field]]

[F2] A finite extension has only finitely many places above any fixed place, and its completion tensor decomposition supplies the canonical local embeddings that carry valuation-ring units to valuation-ring units. [[def-place-of-a-global-field]] [[def-completion-of-a-global-field-at-a-place]] [[thm-global-field-completion-tensor-product-decomposition]]

[F3] The idèle class group is the quotient of the idèle group by the diagonal image of the field's multiplicative group. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F4] The absolute Galois group acts on finite intermediate fields and their local completions by the induced field isomorphisms; $G_E$ is open in $G_F$. [[def-absolute-galois-group-of-a-global-field]]

[F5] Filtered colimits of abelian groups are exact, and every element of $F_s$ lies in a finite subextension; the colimit of the finite idèle exact sequences is therefore exact with left term $F_s^\times$. [[lem-filtered-colimits-of-abelian-groups-are-exact]] [[def-absolute-galois-group-of-a-global-field]]

## Proof

**Proof technique:** check the extension maps and Galois action on representatives, then use an open stabilizer for continuity.

**Given:** The data above.

1.1 For all but finitely many $v$, [F1] gives $a_v\in\mathcal O_{E_v}^\times$. For each such $v$ and every $w\mid v$, [F2] shows that its image in $E'_w$ remains a unit. Only finitely many $w$ lie over the exceptional finite set of $v$, so the family of images is an idèle of $E'$. [A1, F1, F2, given]

1.2 If $a$ is diagonal from $x\in E^\times$, its image at each $w$ is the diagonal component of the same element under $E\hookrightarrow E'\hookrightarrow E'_w$. Thus the extension map sends the diagonal subgroup into $E'^\times$, and [F3] gives a well-defined homomorphism $C_E\to C_{E'}$. The local field embeddings compose, so the induced class maps compose for every tower $E\subseteq E'\subseteq E''$. [F2, F3, step 1.1, algebra]

2.1 At each finite level the sequence $1\to E^\times\to\mathbb A_E^\times\to C_E\to1$ is exact by [F3]. Taking its filtered colimit preserves exactness by [F5], and $\operatorname*{colim}_E E^\times=F_s^\times$ because every separable element lies in some finite intermediate field. This gives the displayed short exact sequence. [F3, F5, given]

3.1 The field isomorphism $g:E\to gE$ permutes places and carries local components to their corresponding completions; it preserves the restricted-product condition because it carries units to units. The resulting maps on idèles and idèle classes are compatible with extension maps by composition of field and local embeddings. Thus Galois transport is well defined on both direct limits. [F2, F3, F4, step 1.2]

3.2 If an idèle or idèle class is represented at level $E$, every $g\in G_E$ acts trivially on that representative. By [F4], $G_E$ is open, so every element of either direct limit has an open stabilizer. This proves continuity of both discrete Galois actions and completes the construction. [F4, step 2.1, step 3.1] ∎

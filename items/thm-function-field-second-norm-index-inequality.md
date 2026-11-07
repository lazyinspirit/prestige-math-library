---
id: thm-function-field-second-norm-index-inequality
kind: theorem
title: Second norm-index inequality for finite Galois function-field extensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- thm-function-field-global-class-formation-finite-constants
- cor-class-formation-tate-nakayama-under-specified-choice
- lem-bar-first-integral-homology-is-the-abelianization
- def-axiom-of-choice
- def-dependent-choice
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- def-tate-cohomology-for-finite-groups
- thm-global-field-completion-tensor-product-decomposition
- thm-field-norm-and-trace-by-embeddings
- def-idele-class-group-of-a-global-field
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: The original Statement choice assumptions are retained. AC implies DC and Countable
  Choice when an invoked supplier states them; ordinary/complete-resolution data are used exactly
  in the untensored Tate–Nakayama application.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: AppendixA.7–A.11, printed131–135, full relevant passages read. Source assertions
      of cd2/global comparison are replaced by the explicit local reconstruction and the bound
      suppliers.
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterVII2 Propositions2.2–2.6, printed203–207, full actual finite-idelic/norm
      proofs read; ChapterII3 untensored Tate–Nakayama is used through its separately proved
      scoped library corollary. No global CFT theorem imported.
verification: {}
---

## Statement

Assume AC and DC.

Let $L/F$ be a finite Galois extension of global function fields. Then the
global norm subgroup has finite index and
$$[C_F:N_{L/F}C_L]\mid [L:F].$$

## Statement references

[[thm-function-field-global-class-formation-finite-constants]]

[[cor-class-formation-tate-nakayama-under-specified-choice]]

[[lem-bar-first-integral-homology-is-the-abelianization]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** AC and DC and the original finite Galois extension $L/F$, with $G=\operatorname{Gal}(L/F)$.

[F1] The actual discrete global idèle-class module of a function field with finite exact constants is a class formation, and its finite fixed module is $C_L$ with invariants $C_L^G=C_F$.
[[thm-function-field-global-class-formation-finite-constants]]
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[F2] For a finite quotient of a class formation, untensored Tate–Nakayama under DC and supplied ordinary/complete resolutions gives $\widehat H^r(G,\mathbb Z)\cong\widehat H^{r+2}(G,C_L)$ for every integer $r$.
[[cor-class-formation-tate-nakayama-under-specified-choice]]

[F3] The complete convention has $\widehat H^{-2}(G,\mathbb Z)=H_1(G,\mathbb Z)$ and $\widehat H^0(G,A)=A^G/N_GA$. The actual bar relations compute $H_1(G,\mathbb Z)=G^{\mathrm{ab}}$.
[[def-tate-cohomology-for-finite-groups]]
[[lem-bar-first-integral-homology-is-the-abelianization]]

[F4] Tensor-completion identifies places and decomposition groups; the local product over the stabilizer is the finite field norm, including ramified extensions.
[[thm-global-field-completion-tensor-product-decomposition]]
[[thm-field-norm-and-trace-by-embeddings]]
[[def-idele-class-group-of-a-global-field]]

[A1] AC and DC are retained. AC implies Countable Choice for [F1] and supplies the resolution data and a separable closure containing $L$.
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** untensored degree-minus-two Tate–Nakayama, followed by an explicit comparison of the group norm and the idelic field norm.

**Given:** The data above.

1.1 Under [A1] put $L$ in a separable closure of $F$ and apply [F1]. For its open normal subgroup $G_L$, the invariant module is exactly $C_L$ and the finite quotient is $G$. Taking $r=-2$ in [F2] and using [F3] gives an isomorphism $G^{\mathrm{ab}}\cong C_F/N_GC_L$. This asserts cardinality for the actual group-norm quotient; no reciprocity map is thereby identified. [A1, F1, F2, F3, given, algebra]

2.1 Check the norm dictionary explicitly. For an idèle $b=(b_w)_w$ of $L$, the $w_0$ component of $\prod_{\sigma\in G}\sigma b$ is $\prod_{\sigma\in G}\sigma(b_{\sigma^{-1}w_0})$. Regroup $\sigma$ according to $w=\sigma^{-1}w_0$. Each fibre is a coset of the stabilizer of $w_0$, and its product is the image in $L_{w_0}$ of $N_{L_w/F_v}(b_w)$, by [F4]. Consequently the component is the extension of $\prod_{w\mid v}N_{L_w/F_v}(b_w)$, which is exactly the $v$ component of the idelic norm. This equality holds for units as well and therefore for the actual restricted products. For a principal $b\in L^\times$ it is the global field norm, so it descends to class groups. The injection $C_F\to C_L^G$ of [F1] identifies $N_GC_L$ with the actual $N_{L/F}C_L$. [F1, F4, step 1.1, construct, algebra]

3.1 Steps1.1–2.1 give $[C_F:N_{L/F}C_L]=|G^{\mathrm{ab}}|$, a finite integer dividing $|G|=[L:F]$ by the finite quotient $G\to G^{\mathrm{ab}}$. This is the original Statement, with a stronger exact cardinality also proved. No separating-place theorem, adelic residue duality or global Artin map is an input. [F3, step 1.1, step 2.1, algebra] ∎

## Remark

The proof establishes the exact equality
$$[C_F:N_{L/F}C_L]=|\operatorname{Gal}(L/F)^{\mathrm{ab}}|.$$
It also identifies the actual idelic norm with the group norm under finite
class descent. For abelian $L/F$ this cardinality is $[L:F]$; the abstract
Tate–Nakayama isomorphism alone does not identify any product of local
Artin maps. The actual product must still be proved to kill principal
idèles and to be onto.

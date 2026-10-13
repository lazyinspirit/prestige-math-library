---
id: def-cyclotomic-klr-induction-and-restriction-functors
kind: definition
title: "Cyclotomic KLR induction and restriction functors"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-induction-and-restriction-bimodules,
       def-graded-balanced-tensor-product-and-homogeneous-hom,
       def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 4.2, equation (4.9): E^Lambda_i(N)=e(beta,i)N and F^Lambda_i(M)=R^Lambda(beta+alpha_i)e(beta,i) tensor M, with the adjunction Hom(F_iM,N) = Hom(M,E_iN)."
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.3, Definitions 1.5-1.6, Proposition 1.7 and Theorem 1.8: cyclotomic quotient, induction as extension of scalars along the right-append map, restriction with its grading shift, biadjointness up to shift."
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Sections 2.2-2.3, equations (2.2)-(2.3): Frobenius reciprocity Ind left adjoint to Res and co-induction as the right adjoint to restriction."
---

## Definition

Use the standard graded cyclotomic quotient of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]], and keep the conventions
fixed there: the cyclotomic relation is imposed on the FIRST strand and
cyclotomic induction appends strands on the RIGHT. Fix $\beta\in Q_+$ and a
color $i$; put
$$A:=R^\Lambda(\beta),\qquad B:=R^\Lambda(\beta+\alpha_i),\qquad e:=e(\beta,i),$$
where $e(\beta,i)=\sum_{\nu\in I^\beta}e(\nu i)\in R(\beta+\alpha_i)$ is the
idempotent of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]
supported on the sequences ending in $i$.

**The right-append corner homomorphism.** Right append defines a
$k$-algebra homomorphism
$$\iota_i:A\longrightarrow eBe,\qquad 1_A\longmapsto e,\quad e(\nu)\longmapsto e(\nu i),\quad x_a\longmapsto x_ae,\quad \tau_a\longmapsto\tau_ae ,$$
sending each old dot or crossing to the same-named generator multiplied by
the endpoint idempotent $e$, at the same position in the first $|\beta|$ strands of $R^\Lambda(\beta+\alpha_i)$ and
each old idempotent to the longer idempotent obtained by appending $i$. It is
a graded homomorphism of degree zero: each generic relation (1)-(7) of
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] is preserved
under right append, and the first-strand cyclotomic generator of $A$ maps to
the first-strand cyclotomic generator of $B$, so the cyclotomic relation is
preserved and $\iota_i$ is well defined on the quotient. The unit is sent to
the corner unit $e$, not to a global unit of $B$; it is **not** asserted that
$\iota_i$ is injective, and $e$ is allowed to be zero.

**The functors.** On graded left modules define
$$F_i^{\mathrm{basic}}(M):=Be\otimes_A M,\qquad E_i^{\mathrm{basic}}(N):=eN,$$
the tensor over the graded balanced tensor product of
[[def-graded-balanced-tensor-product-and-homogeneous-hom]] and the idempotent
restriction of the graded $B$-module $N$
([[def-graded-ring-module-bimodule-and-internal-shift]]). Both are additive
$k$-linear functors between the graded module categories, they preserve
degree-zero maps, and they extend to direct sums over the root degrees
$\beta\in Q_+$.

**Adjunction, weights and shifts.** Evaluation at $e$ identifies
$\operatorname{HOM}_B(Be,N)$ with $eN$ by the degree-zero tensor--Hom
adjunction, giving $F_i^{\mathrm{basic}}\dashv E_i^{\mathrm{basic}}$ with its
actual grading. The functor $F_i^{\mathrm{basic}}$ increases ROOT degree by
$\alpha_i$, taking modules at root $\beta$ to modules at root
$\beta+\alpha_i$, and decreases the module weight $\Lambda-\beta$ by
$\alpha_i$; restriction does the reverse. Both composites are endofunctors at
a fixed root degree. Grading shifts satisfy
$F_i^{\mathrm{basic}}(M\{r\})\cong F_i^{\mathrm{basic}}(M)\{r\}$ and
$E_i^{\mathrm{basic}}(N\{r\})\cong E_i^{\mathrm{basic}}(N)\{r\}$, using the
internal shifts of [[def-graded-ring-module-bimodule-and-internal-shift]].

**Ungraded monic deformations.** For a general monic
specialization $a_j(u)$ the quotient $R^\Lambda_a(\beta)$ of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]] carries no grading, and
the same formulas define the ungraded functors $F_i^{\mathrm{basic}}$ and
$E_i^{\mathrm{basic}}$; no graded statement is asserted on that branch.

**Status of further structure.** Exactness, preservation of projectives and a
shifted second adjunction are theorems below, not part of this definition; in
particular no unshifted right adjunction $E_i^{\mathrm{basic}}\dashv
F_i^{\mathrm{basic}}$ is asserted here, and the explicit shift of the second
adjunction is supplied by the coherent-biadjunction lemma of this page. This
definition uses no choice.

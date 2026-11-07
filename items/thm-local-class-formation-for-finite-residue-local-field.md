---
id: thm-local-class-formation-for-finite-residue-local-field
kind: theorem
title: A finite-residue local field gives a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- def-axiom-of-choice
- def-class-formation
- def-absolute-galois-group-of-a-local-field
- def-countable-choice
- def-dependent-choice
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- thm-hilbert-90-for-absolute-galois-group
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- thm-choice-implies-dependent-implies-countable-choice
- lem-local-unramified-degree-two-cohomology-and-inflation
- lem-local-invariant-restriction-scaling
- thm-fundamental-theorem-of-finite-galois-theory
- thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
proof_strategy: direct
axiom_use: AC supplies compactness of the profinite Galois groups in the direct-limit
  cohomology argument and implies Countable Choice for the unramified-extension supplier.
  DC is the supplied derived-cohomology convention.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter III §1, printed pp.97–101, and Chapter IV §§1–4, printed pp.123–141;
      locally reconstructed finite algebra/factor-set route to the unramified invariant.
verification:
  precheck: n/a
---

## Statement

Assume AC and Dependent Choice, and use the supplied continuous cohomology
convention. Let $K$ be a complete discretely valued field with
finite residue field, fix a separable closure $K_s$, and put
$G_K=\operatorname{Gal}(K_s/K)$. For each finite separable extension $L/K$
inside $K_s$, let $L^{\mathrm{ur}}$ be the union of its finite unramified
extensions in $K_s$, let $\Gamma_L=\operatorname{Gal}(L^{\mathrm{ur}}/L)$,
let $\operatorname{ord}_L:(L^{\mathrm{ur}})^\times\to\mathbb Z$ be the
extension of the normalized valuation, and let $\varphi_L\in\Gamma_L$ be the
element inducing $x\mapsto x^{|\kappa_L|}$ on the residue field. Write
$\delta_L:H^1_{\mathrm{cont}}(\Gamma_L,\mathbb Q/\mathbb Z)\to
H^2_{\mathrm{cont}}(\Gamma_L,\mathbb Z)$ for the connecting map associated
with $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$, and write
$\operatorname{ord}_L^*$ for the cohomology map induced by the valuation.
Then $\Gamma_L\cong\widehat{\mathbb Z}$, $\delta_L$ and
$\operatorname{ord}_L^*:H^2_{\mathrm{cont}}(\Gamma_L,(L^{\mathrm{ur}})^\times)
\to H^2_{\mathrm{cont}}(\Gamma_L,\mathbb Z)$ are isomorphisms, and inflation
$$\operatorname{Inf}_L:H^2_{\mathrm{cont}}(\Gamma_L,(L^{\mathrm{ur}})^\times)
\longrightarrow H^2_{\mathrm{cont}}(G_L,K_s^\times)$$
is an isomorphism. Define
$$\operatorname{inv}_{G_L}:=\operatorname{ev}_{\varphi_L}\circ\delta_L^{-1}
\circ\operatorname{ord}_L^*\circ\operatorname{Inf}_L^{-1},$$
where $\operatorname{ev}_{\varphi_L}$ evaluates a continuous character at
$\varphi_L$. The maps $\operatorname{inv}_{G_L}$ make
$(G_K,K_s^\times,(\operatorname{inv}_{G_L})_L)$ a class formation: for every
open subgroup $G_L\le G_K$, $H^1_{\mathrm{cont}}(G_L,K_s^\times)=0$,
$\operatorname{inv}_{G_L}$ is an isomorphism to $\mathbb Q/\mathbb Z$, and
restriction from $G_L$ to $G_M$ for $L\subseteq M$ multiplies the invariant
by $[M:L]$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-class-formation]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-hilbert-90-for-absolute-galois-group]]

[Milne, *Class Field Theory*, Chapter III, §§1–2](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC and DC, the local field, separable closure, and the conventions in the Statement.

[A1] AC supplies compactness of the profinite groups and implies the Countable Choice used in finite local-extension suppliers; DC supplies the declared cohomology convention. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

[F1] The topology of $G_K$ is the inverse-limit topology from finite Galois subextensions. [[def-absolute-galois-group-of-a-local-field]]

[F2] Hilbert 90 gives $H^1_{\mathrm{cont}}(G_L,K_s^\times)=0$ for every such $L$. [[thm-hilbert-90-for-absolute-galois-group]]

[F3] For every finite-residue complete discretely valued $L$, unramified inflation, valuation, and the connecting map in the Statement are isomorphisms. Arithmetic Frobenius evaluation identifies the resulting characters with $\mathbb Q/\mathbb Z$. [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F4] Under precisely this normalization, restriction for finite separable $M/L$ multiplies the invariant by $[M:L]$. [[lem-local-invariant-restriction-scaling]]

[F5] The class-formation axioms are open-subgroup $H^1$ vanishing, invariant isomorphisms in degree two, and index scaling of restriction. [[def-class-formation]]

[F6] For a finite Galois extension $E/K$, subgroups correspond to fixed intermediate fields and the subgroup index is the intermediate field degree. [[thm-fundamental-theorem-of-finite-galois-theory]]

[F7] Under AC, restriction from $G_K$ onto the Galois group of a finite Galois subextension is onto. [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

## Proof

**Proof technique:** construct the invariant by unramified inflation and verify all open-subgroup axioms.

**Given:** The data above.

1.1 If $H$ is an open subgroup of $G_K$, [F1] gives a finite Galois $E/K$ with $N=G_E\subseteq H$. By [F7], $G_K/N=\operatorname{Gal}(E/K)$. By [F6], the subgroup $H/N$ fixes an intermediate field $L$, and its full preimage is exactly $G_L$, so $H=G_L$. Conversely a finite separable $L/K$ has a finite Galois closure in $K_s$, so $G_L$ is open by the same argument. For $L\subseteq M$, choose a finite Galois extension containing $M$ and apply [F6] over $L$ to get $[G_L:G_M]=[M:L]$. Every finite separable $L/K$ is again complete discretely valued with finite residue field; use the finite local-extension interfaces under [A1]. Its unramified tower has cyclic finite levels and arithmetic Frobenius, hence $\Gamma_L=\widehat{\mathbb Z}$. Apply [F3] to this $L$. It proves both the valuation and inflation isomorphisms displayed in the Statement, as well as the connecting-map isomorphism. [A1, F1, F3, F6, F7, given]

1.2 Compose their inverses and Frobenius evaluation exactly as in the Statement. Each factor is an isomorphism by [F3], so $\operatorname{inv}_{G_L}$ is an isomorphism from $H^2_{\mathrm{cont}}(G_L,K_s^\times)$ to $\mathbb Q/\mathbb Z$. This construction is independent of a division representative or splitting choice: those appear only in [F3]'s proof of surjectivity, while the maps here are cochain inflation, valuation, connecting map, and evaluation. [F3, step 1.1, algebra]

2.1 By [F2], first cohomology vanishes for every open subgroup indexed in step 1.1. For every inclusion $L\subseteq M$, [F4] gives $\operatorname{inv}_{G_M}\circ\operatorname{Res}=[M:L]\operatorname{inv}_{G_L}$, and step 1.1 identifies $[M:L]$ with $[G_L:G_M]$. The identity inclusion and zero class are included. [F1, F2, F4, step 1.2]

2.2 Steps 1.2 and 2.1 prove every clause in [F5]. The proof uses no global reciprocity theorem, no general Brauer/H² comparison, and no ramified-unit vanishing assertion. The locally constructed invariant therefore makes the indicated data a class formation with the full stated scope. [F5, step 1.2, step 2.1] ∎

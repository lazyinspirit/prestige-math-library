---
id: lem-fixed-base-simplicial-cotangent-represents-derived-derivations
kind: lemma
title: "The fixed-base simplicial cotangent module represents derived derivations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - thm-model-structures-on-variable-simplicial-modules-and-algebras
  - lem-simplicial-algebra-cotangent-adjunctions-before-deriving
  - lem-replacement-invariant-derived-enriched-mapping-spaces
  - lem-standard-polynomial-resolution-admissibility
  - lem-cotangent-complex-resolution-independence
  - def-kahler-differentials-algebra
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-axiom-of-choice
  - def-cotangent-complex-of-a-ring-map
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Toen-Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications"
      url: "https://arxiv.org/pdf/math/0404373"
      locator: "Proposition 1.2.1.2 and Lemma 1.2.1.3, printed 26-27 (PDF 33-34), specialized to the fixed-A simplicial setting; strict proofs expanded locally"
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Section 92.4"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.3.2 (tag 08PN) and Section 92.4 (tags 08QF-08QH)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and fix a simplicial
commutative unital ring $A$
([[def-simplicial-object-and-simplicial-commutative-ring]]). For a simplicial
$A$-algebra $B$, use a free-cell cofibrant replacement $P\to B$ in
$A$-algebras augmented to $B$. The $B$-module
$$L^{\mathrm{fixed}}_{B/A}=Q\ker(B\otimes_AP\to B),$$
naturally isomorphic to $B\otimes_P\Omega_{P/A}$ with differentials computed
degreewise, represents relative derived derivations in the supplied fixed-$A$
enriched model:
$$\mathrm{RMap}_{B\text{-}\mathrm{Mod}}(L^{\mathrm{fixed}}_{B/A},M) \simeq\mathrm{RMap}_{A\text{-}\mathrm{alg}/B}(B,B\oplus M).$$
It is independent of the choice of cofibrant replacement $P$ of the fixed
augmented object $B$. Invariance under a weak change of the
coefficient/augmentation base is a separate interface. For constant ordinary
$A,B$ this agrees canonically with the ordinary cotangent complex via the
supplied polynomial-resolution comparison, and it does not by itself assert
invariance under weak replacement of $A$ or the global derived-scheme gluing
interface.

## Facts & Assumptions

**Given:** AC; a simplicial commutative ring $A$; a simplicial $A$-algebra $B$; a free-cell cofibrant replacement $P\to B$ in the augmented slice; $M$ a simplicial $B$-module.

[F1] The strict simplicial algebra adjunctions: $C\mapsto B\otimes_AC$ is left adjoint to restriction, $K(I)=B\oplus I$ with $(b,x)(c,y)=(bc,by+cx+xy)$ is left adjoint to $I(D)=\ker(D\to B)$ and is an equivalence of ordinary categories, and $Q(I)=I/(xy)$ is left adjoint to the zero-multiplication algebra $Z(M)$; the equivalence preserves and reflects weak equivalences ([[lem-simplicial-algebra-cotangent-adjunctions-before-deriving]]).

[F2] The fixed-$A$ simplicial model structures on modules and algebras exist, with fibrations the underlying horn-lifting maps and weak equivalences the normalized additive quasi-isomorphisms; derived mapping spaces are replacement invariant and enriched Quillen adjunctions induce derived mapping equivalences ([[thm-model-structures-on-variable-simplicial-modules-and-algebras]], [[lem-replacement-invariant-derived-enriched-mapping-spaces]]).

[F3] The standard polynomial resolution is admissible; every polynomial resolution whose augmentation is a trivial Kan fibration computes the ordinary cotangent complex, with canonical comparison to the standard resolution, using the normalized differential module $B\otimes_P\Omega_{P/A}$ ([[lem-standard-polynomial-resolution-admissibility]], [[lem-cotangent-complex-resolution-independence]], [[def-kahler-differentials-algebra]]).



## Proof

1.1 Cofibrancy in the slice and its kernel. Let $P\to B$ be a free-cell cofibrant replacement of $B$ in simplicial $A$-algebras augmented to $B$, and put $D=B\otimes_AP$ with its multiplication augmentation to $B$ and section from $B$. Extension and restriction along $A\to B$ are left and right Quillen because restriction creates fibrations and weak equivalences, so $D$ is cofibrant in the augmented $B$-algebra category. By [F1] the strict augmented and nonunital equivalences transport $D$ to the cofibrant nonunital $B$-algebra $I=\ker(D\to B)$, and $Q$ is left Quillen because $Z$ preserves underlying fibrations and weak equivalences; hence $Q(I)$ is a cofibrant simplicial $B$-module. [F1, F2, construct]

2.1 The chain of enriched adjunctions. For a $B$-module $M$, whose underlying additive object is fibrant in the model of [F2], the strict adjunctions of [F1] give natural isomorphisms $$\mathrm{Map}_{A\text{-}\mathrm{alg}/B}(P,B\oplus M)\cong\mathrm{Map}_{\mathrm{AugAlg}_B}(B\otimes_AP,B\oplus M)\cong\mathrm{Map}_{\mathrm{NUAlg}_B}(I,Z(M))\cong\mathrm{Map}_{\mathrm{Mod}_B}(Q(I),M).$$ All sources and targets are cofibrant and fibrant as required, so these are derived mapping spaces by [F2]; this proves that $L^{\mathrm{fixed}}_{B/A}=Q(I)$ represents relative derived derivations. [F1, F2, step 1.1]

3.1 The Kähler description. There is an elementwise natural isomorphism between $Q(I)$ and $B\otimes_P\Omega_{P/A}$: an augmented $B$-linear derivation of $D$ into $M$ is the same as an $A$-derivation of $P$ into $M$ through $P\to B$, and both are represented by the displayed modules; explicitly, one maps $p$ to the class of $1\otimes p$ minus its augmentation and verifies the Leibniz relation modulo the products $I^2$. The universal derivation corresponds to the identity of the representing module. [F1, F3, step 2.1]

3.2 Independence of the replacement. For two cell cofibrant replacements $P_1,P_2\to B$, lift $P_1\to P_2$ over $B$ against the trivial fibration $P_2\to B$; the lift is a weak equivalence by two-out-of-three. The mapping corner $\mathrm{Map}(P_1,P_2)\to\mathrm{Map}(P_1,B)$ has boundary lifting by [F2], so the fibre over the prescribed augmentation is contractible and all such lifts give the same homotopy class. Both $P_i$ are fibrant in the augmented slice because $P_i\to B$ is a trivial fibration, so the weak comparison is a simplicial homotopy equivalence by the replacement argument of [F2]. The composite enriched left adjoint (extension, kernel equivalence and indecomposables) preserves simplicial homotopies, hence sends that comparison to a simplicial homotopy equivalence of modules and therefore to a normalized quasi-isomorphism. Thus the representing modules are canonically compared in the model homotopy category. Hence $L^{\mathrm{fixed}}_{B/A}$ is independent of the choice of $P$. [F2, step 2.1]

4.1 Ordinary specialization and scope. For a discrete map $A\to B$, choose $P\to B$ by the actual $I$-cell factorization of the initial map in ordinary $A$-algebras: in each degree the generating map is a polynomial-ring inclusion on a subset of the simplex variables, a pushout adjoins complementary variables, and a sequential union of polynomial extensions is again a polynomial ring on the union of the variable sets. Hence each $P_k$ is polynomial over ordinary $A$ and its augmentation is a trivial Kan fibration; the ordinary comparison packet [F3] then identifies the fixed-base object with the ordinary cotangent complex of [[def-cotangent-complex-of-a-ring-map]] computed on the standard resolution. No invariance under weak replacement of $A$ and no global derived-scheme gluing is asserted here. [F3, step 3.1, step 3.2, discharge-construct] ∎


---
id: thm-global-artin-transfer-for-cm-fields
kind: theorem
title: Global Artin transfer and cyclotomic compatibility for CM fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-countable-choice
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- lem-canonical-local-reciprocity-is-compatible-with-field-norms
- thm-local-class-formation-for-finite-residue-local-field
- thm-restriction-corestriction-composite-is-multiplication-by-the-index
- def-global-artin-map-as-product-of-local-reciprocity-maps
- thm-global-artin-reciprocity-and-norm-index
- thm-local-artin-unramified-frobenius-normalization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication, arXiv:0705.3446
      url: https://arxiv.org/pdf/0705.3446
      locator: Proposition 4.6, printed p. 28, and Proposition 4.9, printed p. 29; the transfer/cyclotomic identity and inclusion-transfer/norm-restriction compatibility are stated and used there, and were read in the saved source copy.
verification: {}
---

## Statement

Assume AC, Countable Choice and Dependent Choice, and use the reciprocal global Artin convention in which a finite unramified uniformizer maps to inverse arithmetic Frobenius. Let $L/K$ be a finite extension of totally imaginary number fields. For every finite idèle $a\in\mathbb A_{f,K}^\times$ and $b\in\mathbb A_{f,L}^\times$, the reciprocal Artin maps satisfy
$$\operatorname{art}_L(a)=\operatorname{Ver}_{L/K}(\operatorname{art}_K(a)),\qquad \operatorname{art}_K(N_{L/K}b)=\operatorname{res}_{L/K}(\operatorname{art}_L(b)).$$
Here $a$ is diagonally included into the local factors of $L$, transfer is from the abelianization of the absolute Galois group of $K$ to that of $L$, and restriction is induced by inclusion in the other direction. These maps commute with field conjugation. If $E$ is a CM field and $\sigma\in\operatorname{Aut}(\mathbb C)$, then
$$\operatorname{art}_E(\chi_{cyc}(\sigma))=\operatorname{Ver}_{E/\mathbb Q}(\sigma).$$
No assertion about the number-field Hasse norm theorem or absolute Hodge tensors is made.

## Facts & Assumptions

**Given:** AC, CC, DC, the totally imaginary finite extension, CM field, idèles and reciprocity convention in the Statement.

[F1] The canonical local arithmetic Artin map is characterized by the normalized local invariant and finite-order character formula $\chi(\rho_K(a))=\operatorname{inv}_K(a\smile\delta\chi)$ ([[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]).

[F2] The local invariants are isomorphisms and restriction multiplies the invariant by the extension degree; restriction followed by corestriction gives multiplication by that degree ([[thm-local-class-formation-for-finite-residue-local-field]], [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]).

[F3] Canonical local reciprocity commutes with norm and inclusion of absolute Galois groups ([[lem-canonical-local-reciprocity-is-compatible-with-field-norms]]).

[F4] Global Artin is the product of the compatible local Artin maps; global reciprocity gives its norm-index quotient isomorphisms ([[def-global-artin-map-as-product-of-local-reciprocity-maps]], [[thm-global-artin-reciprocity-and-norm-index]]).

[F5] The unramified local Artin image of a uniformizer is the prescribed Frobenius element ([[thm-local-artin-unramified-frobenius-normalization]]).

## Proof

**Proof technique:** prove local inclusion/transfer from the character pairing, then sum over decomposition-group cosets and calculate the rational cyclotomic quotient.

1.1 Let $K_v$ be a finite residue local field and $L_w/K_v$ a finite separable extension. Write $G=G_{K_v}$, $H=G_{L_w}$ and $d=[L_w:K_v]$. For $\beta\in H^2(H,K_v^{sep,\times})$, choose $c\in\mathbb Q/\mathbb Z$ with $dc=\operatorname{inv}_{L_w}(\beta)$ and choose $\gamma$ with $\operatorname{inv}_{K_v}(\gamma)=c$. The invariant restriction formula of [F2] and injectivity of $\operatorname{inv}_{L_w}$ give $\operatorname{res}\gamma=\beta$. Therefore $\operatorname{inv}_{K_v}(\operatorname{cor}\beta)=\operatorname{inv}_{K_v}(d\gamma)=\operatorname{inv}_{L_w}(\beta)$. This uses divisibility of $\mathbb Q/\mathbb Z$, not cancellation by $d$. [F2, given, choose, construct, algebra]

1.2 For $\mathbb Q$, every idèle can be multiplied by a unique rational scalar and a positive real scalar to leave positive infinite component $1$ and all finite components units. Thus $\mathbb A_\mathbb Q^\times/(\mathbb Q^\times\mathbb R_{>0})\cong\widehat{\mathbb Z}^{\times}$. Global Artin kills $\mathbb R_{>0}$ by continuity into a profinite group and is surjective by [F4], first on finite abelian quotients and then on their inverse limit by compactness of $\widehat{\mathbb Z}^{\times}$. Its composite with the cyclotomic character is the identity: [F5] computes it on unramified prime Frobenius elements in every cyclotomic extension, and integers prime to the conductor generate the finite unit group. Thus the Artin map from $\widehat{\mathbb Z}^{\times}$ is injective as well as surjective, and the class of $\sigma$ in $G_\mathbb Q^{ab}$ equals $\operatorname{art}_\mathbb Q(\chi_{cyc}(\sigma))$. [F4, F5, given, construct, algebra]

2.1 For $a\in K_v^\times$ and a finite-order character $\chi$ of $H$, the finite-coset cochain formula gives $\operatorname{cor}(a\smile\delta\chi)=a\smile\delta(\operatorname{cor}\chi)$: $a$ is fixed by $G$, so every coefficient in the product is $a$; corestriction commutes with the Bockstein by naturality of the coefficient exact sequence. The same coset formula gives $(\operatorname{cor}\chi)(g)=\chi(\operatorname{Ver}_{G/H}(g))$. By [F1] and step 1.1, $$\chi(\rho_{L_w}(a))=\operatorname{inv}_{L_w}(a\smile\delta\chi)=\operatorname{inv}_{K_v}(a\smile\delta\operatorname{cor}\chi)=\chi(\operatorname{Ver}_{G/H}(\rho_{K_v}(a))).$$ Finite characters separate points of the profinite abelianization, so $\rho_{L_w}(a)=\operatorname{Ver}_{G/H}(\rho_{K_v}(a))$. Inverting both maps gives the same identity in reciprocal convention. [F1, given, step 1.1, construct, algebra]

3.1 For $L/K$ totally imaginary, work in a finite Galois closure $M/K$ large enough for a chosen finite abelian quotient of $G_L$; put $G=\operatorname{Gal}(M/K)$ and $H=\operatorname{Gal}(M/L)$. For each finite place $v$, partition the right cosets $H\backslash G$ into orbits under its decomposition group $D_v$. The orbit stabilizers are the conjugate decomposition groups for the places $w\mid v$. Writing the finite-group transfer product on these coset orbits shows that its restriction to $D_v$ is the product of the conjugate local transfers to $G_{L_w}^{ab}$, mapped into $H^{ab}$. Applying step 2.1 to each factor and multiplying over $v$ gives the displayed inclusion/transfer formula; at each finite quotient only finitely many local factors are nontrivial by [F4]. The norm/restriction formula follows from [F3] with the same decomposition-group product, and conjugation compatibility follows by transporting the local pairing, uniformizers and decomposition groups. All archimedean places are complex and contribute trivially. [F3, F4, given, step 2.1, construct, algebra]

4.1 Apply the same double-coset calculation as step 3.1 to $E/\mathbb Q$. All infinite places of the CM field $E$ are complex, so the local transfer from the real absolute Galois group contributes trivially. The diagonal inclusion of $\chi_{cyc}(\sigma)$ has the same finite components on both sides, and the real component used in step 1.2 is positive. Since transfer factors through $G_\mathbb Q^{ab}$, step 1.2 yields $$\operatorname{art}_E(\chi_{cyc}(\sigma))=\operatorname{Ver}_{E/\mathbb Q}(\operatorname{art}_\mathbb Q(\chi_{cyc}(\sigma)))=\operatorname{Ver}_{E/\mathbb Q}(\sigma).$$ This proves the special identity and completes the Statement. [F4, given, step 2.1, step 3.1, step 1.2, algebra] ∎

---
id: lem-local-hilbert-symbol-is-well-defined-and-bilinear
kind: lemma
title: "The local Hilbert symbol is well-defined and bilinear"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-local-hilbert-symbol-over-field-containing-roots-of-unity
  - def-local-artin-reciprocity-map
  - cor-finite-subgroups-of-units-in-a-domain-are-cyclic
proof_strategy: direct
axiom_use: "Choice-free proof with the separable closure and canonical map supplied as data; no existence theorem for that map is inferred."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §5.1"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "The root-independence argument and Proposition (5.1)(1), printed pp.143–144."
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 9 §9.3"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch09.html"
      locator: "Definition 9.3.2, Remark 9.3.3 and Proposition 9.3.4(a), lines 393–415."
verification: {}
---

## Statement

Let $K$ be a complete discretely valued field with finite residue field,
let $K_s$ be a separable closure, and let $K^{\mathrm{ab}}$ be its maximal
abelian extension in $K_s$. Let $n\ge1$, assume $p\nmid n$ if
$\operatorname{char}K=p>0$, and suppose the group $\mu_n$ of $n$-th roots
of unity in $K_s$ is contained in $K$. Write $\widehat{K^\times}$ for the
profinite completion of the multiplicative group $K^\times$, and let
$\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ be the supplied local Artin map, normalized so a uniformizer maps to
arithmetic Frobenius on every finite unramified extension. For $a\in K^\times$, let $\bar a$ denote its image in
$\widehat{K^\times}$. For $b\in K^\times$, choose $\beta\in K_s$ with
$\beta^n=b$ and define
$$
(a,b)_{K,n}=\frac{\operatorname{rec}_K(\bar a)(\beta)}{\beta}.
$$
Since $\mu_n\subseteq K$, the extension $K(\beta)/K$ is cyclic and hence
abelian, so this action is defined and the quotient lies in $\mu_n$. The
value is independent of the chosen $n$-th root of $b$. It is
bimultiplicative in $a$ and $b$, is unchanged when either argument is
multiplied by an $n$-th power, and therefore induces a pairing
$$
K^\times/K^{\times n}\times K^\times/K^{\times n}\longrightarrow\mu_n.
$$

## Statement references

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

## Facts & Assumptions

**Given:** Exactly the field, separable closure, integer, roots of unity and supplied canonical local Artin map in the unchanged Statement.

[F1] The symbol is the action on a chosen $n$th root of its second argument. [[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[F2] The supplied local Artin map is a homomorphism. Its distinguished canonical character property is part of the Definition; no existence assertion is proved here. [[def-local-artin-reciprocity-map]]

[F3] A finite subgroup of the multiplicative group of a field is cyclic. [[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]

## Proof

**Given:** The supplied data above.

1.1 The polynomial $T^n-1$ is separable under the characteristic hypothesis, so its roots in the supplied separable closure form a group $\mu_n$ of order exactly $n$; it is cyclic by [F3]. For $\beta^n=b$, all roots of $T^n-b$ are $\xi\beta$ with $\xi\in\mu_n\subset K$. Thus $L=K(\beta)$ is a finite Galois splitting field. The map $\sigma\mapsto\sigma(\beta)/\beta$ injects its Galois group into $\mu_n$ and is a homomorphism, because all $\mu_n$ are fixed. Consequently this group is cyclic of order dividing $n$, hence $L$ lies in the supplied maximal abelian extension and the action in [F1] is defined. The quotient is an $n$th root of unity, as required. This includes $n=1$. [F1, F3, given, algebra]

2.1 Any other $n$th root is $\beta'=\xi\beta$. Since the action fixes $\xi\in K$, its quotient on $\beta'$ equals its quotient on $\beta$. This proves root independence without any infinite family of root choices. [F1, F2, step 1.1, algebra]

3.1 For a fixed root $\beta$, the homomorphism law [F2] and fixedness of $\mu_n$ give $(a_1a_2,b)=(a_1,b)(a_2,b)$. For two chosen roots $\beta_i^n=b_i$, their product is a root of $b_1b_2$, so applying the action proves multiplicativity in the second argument. For $a$ multiplied by $c^n$, the extra action is the $n$th power of an automorphism of the cyclic extension in step 1.1, and is trivial because its order divides $n$. Multiplying $b$ by $c^n$ replaces the root by $c\beta$, whose quotient is unchanged. Thus both power subgroups are in the respective kernels and the pairing descends exactly as stated. All choices are of finitely many roots in the supplied closure; no AC/DC-only existence theorem is used in this unqualified supplied-data argument. [F1, F2, step 1.1, step 2.1, algebra] ∎


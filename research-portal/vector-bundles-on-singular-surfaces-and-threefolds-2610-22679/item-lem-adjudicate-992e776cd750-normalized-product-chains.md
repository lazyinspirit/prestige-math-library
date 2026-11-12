---
title: Normalized free chains preserve products of homology equivalences
status: published
research_item: lem-adjudicate-992e776cd750-normalized-product-chains
dependency_level: 0
sources:
  references:
    - title: "J. F. Jardine, Lectures on Homotopy Theory, Lecture 09: Bisimplicial
        abelian groups"
      url: https://math.sci.uwo.ca/~jardine/HomTh/lecture009a.pdf
      locator: Section 26, Theorem 26.1 and proof, printed pp. 23–25 (zero-based PDF
        pages 22–24); Moore product comparison explicitly stated on printed p.
        24
      statement: Natural inverse chain maps up to natural chain homotopies compare
        Moore chains of a product of simplicial sets with the tensor total of
        their Moore chains.
      hypotheses: Arbitrary simplicial sets; free integral Moore chains in nonnegative
        homological degrees; vertical differential has the horizontal-degree
        Koszul sign.
      reading_limits: "For this repair, read the author-hosted PDF extraction of §26,
        printed pp. 23–25, on 12 November 2026: grading, Theorem 26.1 and its
        proof, including the stated Moore product maps and homotopies. Import
        the Moore comparison as established input; its underlying
        Eilenberg–Zilber theorem is not reconstructed. Normalization and the
        application below are local compositions."
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion](https://alphabetamath.cc/item/lem-simplicial-normalization-prism-and-trivial-fibration-criterion)
- [math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms](https://alphabetamath.cc/item/lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms)
- [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations)
- [math:thm-projective-modules-are-flat](https://alphabetamath.cc/item/thm-projective-modules-are-flat)
- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)
- [math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)
- [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis)
- [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)
- [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)
- [math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy)
- [math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence)
- [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)
- [math:thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism](https://alphabetamath.cc/item/thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism)
- [math:prop-homology-respects-identities-and-composition](https://alphabetamath.cc/item/prop-homology-respects-identities-and-composition)
- [` J. F. Jardine, Lectures on Homotopy Theory, Lecture 09: Bisimplicial abelian groups · Section 26, Theorem 26.1 and proof, printed pp. 23–25 (zero-based PDF pages 22–24); Moore product comparison explicitly stated on printed p. 24 `](https://math.sci.uwo.ca/~jardine/HomTh/lecture009a.pdf)


## Statement
Assume the Axiom of Choice. For a simplicial set $T$, let $M(T)_n=\mathbb Z[T_n]$ with differential $\sum_{i=0}^n(-1)^id_i$, zero out of degree zero. Write $C(T)=N\mathbb Z[T]$ for its normalized free integral chains, where $N(A)_n=\bigcap_{i<n}\ker d_i$ and the normalized differential is $(-1)^nd_n$. A quasi-isomorphism is a chain map inducing isomorphisms on every homology group. There is a natural chain-homotopy equivalence, or equivalently its natural comparison zigzag,
$$C(T\times V)\simeq\operatorname{Tot}(C(T)\otimes_{\mathbb Z}C(V)).$$
Here the degree-$n$ total group is $\bigoplus_{p+q=n}C(T)_p\otimes C(V)_q$, and its differential on $a\otimes b$ is $da\otimes b+(-1)^pa\otimes db$. Thus if $f:T\to T'$ and $g:V\to V'$ induce integral chain quasi-isomorphisms, so does $f\times g$. No connectedness or finiteness condition on these simplicial sets is required.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion](https://alphabetamath.cc/item/lem-simplicial-normalization-prism-and-trivial-fibration-criterion)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis)

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy)

[math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence)

[math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)

## Facts & Assumptions
[A1] Choice is retained for the direct-summand-of-free implication in [F4]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Source reference 0 supplies the natural Moore product-chain comparison and its inverse up to natural chain homotopies, for arbitrary simplicial sets with the stated total signs.

[F2] The inclusion of normalized chains into Moore chains is a natural chain-homotopy equivalence. This interface is used for chain comparisons; the degreewise splitting needed below is verified locally in step 2.1. [math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion](https://alphabetamath.cc/item/lem-simplicial-normalization-prism-and-trivial-fibration-criterion)

[F3] Reindex a nonnegative chain complex by $E^a=E_{-a}$, with the same differential. It is bounded above as a cochain complex. The total differential and signs agree because $(-1)^{-p}=(-1)^p$. A bounded-above complex of flat modules preserves quasi-isomorphisms between bounded-above complexes, on either tensor side. [math:lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms](https://alphabetamath.cc/item/lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms)

[F4] Under Choice, a direct summand of a free module is projective, and every projective module over the commutative ring $\mathbb Z$ is flat. [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations) [math:thm-projective-modules-are-flat](https://alphabetamath.cc/item/thm-projective-modules-are-flat)

[F5] Simplicial sets have degreewise products, and their maps commute with all faces and degeneracies. Applying the free abelian group construction degreewise gives a simplicial abelian group. Use the concrete model $\mathbb Z[T_n]=\mathbb Z^{(T_n)}$ of finitely supported integral coefficients, with basis $[t]$; extension of a set map is $[t]\mapsto[f(t)]$. Finite linear extension gives its free abelian universal property, since any homomorphism is determined by these basis values. The simplicial identities hold after extension and make the Moore differential square to zero. [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration) [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group) [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis) [math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[F6] Chain differentials have degree $-1$, homology is cycles modulo boundaries, a chain homotopy $h$ has degree $+1$ with $u-v=dh+hd$, and a chain-homotopy equivalence has an inverse up to such homotopies. Every such equivalence induces homology isomorphisms, and homology respects identities and composition. [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category) [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex) [math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy) [math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence) [math:thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism](https://alphabetamath.cc/item/thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism) [math:prop-homology-respects-identities-and-composition](https://alphabetamath.cc/item/prop-homology-respects-identities-and-composition)

[F7] Tensor totals use direct sums and the Koszul differential displayed in the Statement; here each nonnegative degree diagonal is finite. On maps the tensor total sends $u,v$ to $a\otimes b\mapsto u(a)\otimes v(b)$, which respects the tensor relations and differential. [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)

## External input
Use only the natural Moore Eilenberg–Zilber product comparison at source reference 0. The normalized comparison, degreewise splitting and preservation assertion are local arguments using [F2]–[F7].

## Proof

**Goal:** Establish the statement under its stated hypotheses.
**Given:** Simplicial sets and maps as in the Statement, with integral chain quasi-isomorphisms for $f$ and $g$.

1.1 Apply [F1] directly to the Moore chains of $T,V$ constructed in [F5]. Use the natural inclusions of [F2] for $T,V,T\times V$. Tensoring a chain-homotopy equivalence with any complex remains a chain-homotopy equivalence: tensor its inverse as well, and for a homotopy $h$ use $h\otimes1$ in the first factor and $a\otimes b\mapsto(-1)^{\deg a}a\otimes h(b)$ in the second. Expanding $dH+Hd$ with [F7] cancels the cross terms and yields the tensored difference of maps, as required by [F6]. Thus the natural zigzag $C(T\times V)\to M(T\times V)\to\operatorname{Tot}(M(T)\otimes M(V))\leftarrow\operatorname{Tot}(C(T)\otimes C(V))$ consists of chain-homotopy equivalences. Its comparison is natural in both maps, and proves the claimed normalized equivalence. [F1, F2, F5, F6, F7, construct, algebra]

2.1 For a simplicial abelian group $A$, set $p_{n,0}=1$ and $p_{n,i+1}=(1-s_id_i)p_{n,i}$ for $0\leq i<n$. If $d_jx=0$ for $j<i$, then for $j<i$ the identities in [F5] give $d_j(1-s_id_i)x=d_jx-s_{i-1}d_{i-1}d_jx=0$; also $d_i(1-s_id_i)x=0$ since $d_is_i=1$. Consequently $p_{n,n}$ maps into $N(A)_n$ and is the identity on it. The empty product is the identity for $n=0$. This is a linear retraction, so $A_n=N(A)_n\oplus\ker p_{n,n}$, by $x=p_{n,n}x+(x-p_{n,n}x)$. For $A=\mathbb Z[T]$ and likewise for $T',V,V'$, [F5] makes the ambient term free; [A1] and [F4] therefore make every normalized term projective and flat. Apply [F3] first to $C(f)\otimes1_{C(V)}$ and then to $1_{C(T')}\otimes C(g)$, reindexed as stated. Both are quasi-isomorphisms; [F6] makes their composite $B=\operatorname{Tot}(C(f)\otimes C(g))$ one. Let $e_{T,V}$ be the homology isomorphism from the zigzag in step 1.1, in any degree. Naturality gives $e_{T',V'}H(C(f\times g))=H(B)e_{T,V}$. Thus $H(C(f\times g))=e_{T',V'}^{-1}H(B)e_{T,V}$ is an isomorphism in every degree. Only nonnegative chains, finite total diagonals and the supplied bounded-above tensor assertion were used; no connectedness or finiteness hypothesis on the simplicial sets was imposed. [A1, F3, F4, F5, F6, F7, step 1.1, construct, algebra] ∎

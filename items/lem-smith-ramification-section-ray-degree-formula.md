---
id: lem-smith-ramification-section-ray-degree-formula
kind: lemma
title: "Ray-extension degree from independent ramification sections"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-tame-inertia-structure-and-frobenius-action, lem-finite-number-field-extensions-bounded-degree-unramified-outside-s, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice apply to finiteness of the bounded-degree extensions;
  DC is included in the global section hypotheses in the application.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, proof of Proposition 3.17"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $E$ be a number field, $e\ge2$, and $S$ a finite set of places containing the archimedean places and the primes dividing $e$. Let $\mathfrak q_1,\ldots,\mathfrak q_r$ be distinct finite primes outside $S$, and write $N_i=\#(\mathcal O_E/\mathfrak q_i)$ and $m_i=\gcd(e,N_i-1)$. Put $C=\mathbb Z/e\mathbb Z$ with trivial Galois action, and let $H^1_S(E,C)$ be the classes unramified outside $S$. For each $i$, suppose the restriction-to-inertia map has a section
$$s_i:\operatorname{Hom}(I_{\mathfrak q_i},C)^{\operatorname{Frob}_{\mathfrak q_i}}\longrightarrow H^1_{S\cup\{\mathfrak q_i\}}(E,C).$$
Let $E(S)$ and $E(S\cup\{\mathfrak q_1,\ldots,\mathfrak q_r\})$ be the maximal abelian extensions of $E$ of exponent dividing $e$ unramified outside the indicated sets. They are finite, and
$$[E(S\cup\{\mathfrak q_1,\ldots,\mathfrak q_r\}):E(S)]=\prod_{i=1}^r m_i.$$
The inertia subgroups at the selected primes generate the relative Galois group, and the displayed section hypothesis is essential to this conclusion. This is the finite abelian degree ingredient in a symbol-realization argument; it does not itself prove symbol realization.

## Statement references

[[thm-tame-inertia-structure-and-frobenius-action]]

[[lem-finite-number-field-extensions-bounded-degree-unramified-outside-s]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, proof of Proposition 3.17](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the number field, integer, place sets and inertia-section maps of the Statement.

[F1] At a prime of residue characteristic prime to $e$, tame inertia is procyclic away from that characteristic, and arithmetic Frobenius acts by the residue-field cardinality. [[thm-tame-inertia-structure-and-frobenius-action]]

[F2] For a number field, a fixed degree bound and a fixed finite set of allowed ramified primes, there are only finitely many isomorphism classes of extensions. [[lem-finite-number-field-extensions-bounded-degree-unramified-outside-s]]

[F3] Finite abelian groups have elementary-divisor decompositions and their characters into a cyclic group of a common exponent separate points. [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

## Proof

1.1 Let $S'=S\cup\{\mathfrak q_1,\ldots,\mathfrak q_r\}$. For either $T=S$ or $T=S'$, each continuous character $G_E\to C$ unramified outside $T$ cuts out a cyclic extension of degree at most $e$ unramified outside $T$. By [F2], only finitely many such cyclic extensions occur inside a fixed algebraic closure; each has finitely many characters. Their compositum is therefore a finite abelian exponent-$e$ extension, and it contains every finite abelian exponent-$e$ extension unramified outside $T$ because the characters of a finite abelian group separate its elements by [F3]. Thus the two maximal fields in the Statement exist and are finite. [F2, F3, given, construct, algebra]

1.2 Because $C$ is trivial, $H^1(G_E,C)$ is the group of continuous characters. Their restrictions to inertia at $\mathfrak q_i$ factor through tame inertia and are Frobenius-invariant. By [F1], the $e$-torsion character group of tame inertia is cyclic of order $e$, and Frobenius acts by $N_i$; its invariant subgroup $T_i$ has order $m_i=\gcd(e,N_i-1)$. The restriction map $$H^1_{S'}(E,C)\longrightarrow\bigoplus_i T_i$$ has kernel $H^1_S(E,C)$. Each given $s_i$ is unramified at the other selected primes, so the sum of the $s_i$ is a right inverse. Therefore $$H^1_{S'}(E,C)/H^1_S(E,C)\cong\bigoplus_i T_i.$$ [F1, given, algebra]

2.1 By step 1.1, these two character groups are the complete $C$-valued character groups of $G'=\operatorname{Gal}(E(S')/E)$ and its quotient $G=\operatorname{Gal}(E(S)/E)$. The characters trivial on the relative kernel $H=\operatorname{Gal}(E(S')/E(S))$ are exactly the characters pulled back from $G$. By the elementary-divisor theorem [F3], restriction from $\operatorname{Hom}(G',C)$ to $\operatorname{Hom}(H,C)$ is surjective: a character of $H$ extends to the finite exponent-$e$ group $G'$. Hence the quotient in step 1.2 is dual to $H$ and has order $|H|$, yielding the displayed product. If the inertia subgroups at all $\mathfrak q_i$ generated a proper subgroup of $H$, [F3] would provide a nontrivial character of $H$ trivial on them. An extension of that character to $G'$ would be unramified outside $S$, and hence trivial on $H$, a contradiction. [F3, step 1.1, step 1.2, given, algebra] ∎

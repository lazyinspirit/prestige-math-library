---
id: thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
kind: theorem
title: Unitary representations of compact groups are discrete Hilbert sums of irreducibles
deps:
- def-hilbert-direct-sum-of-unitary-representations
- lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation
- def-unitary-dual-of-a-compact-group
- def-compact-group-isotypic-projection
- thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections
- thm-finite-dimensional-compact-group-representations-are-completely-reducible
- thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
- thm-zorn
- def-axiom-of-choice
- def-strongly-continuous-unitary-representation
- def-orthogonality-and-orthogonal-complement
- thm-orthogonal-decomposition-by-a-closed-subspace
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- def-hilbert-space
- lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
- thm-schurs-lemma-for-unitary-representations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-11.md"
      - "research/frontier-38-owner-30-alpha-batch-11-5a.md"
      - "research/frontier-38-owner-30-step5-hash-11-post-5a.json"
    content_sha256: "6c34d13cb956e0ce8b89654f3f8b93f9dac3bc68ab07669a9879ed1e38507d5a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Corollary 5.4.2 and its proof, printed pp. 230 and 234–235, with Lemma 5.4.7
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §19.7 and the surrounding discussion, printed p. 43
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Theorem 2.13, printed pp. 9–11
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $K$ be a compact Hausdorff group and let $\pi:K\to U(H)$ be a strongly continuous unitary representation on a complex Hilbert space $H$. For $\sigma\in\widehat K$ let $H_{(\sigma)}$ be the closed span of all closed $\pi(K)$-invariant subspaces of $H$ on which $\pi$ restricts to a representation unitarily equivalent to $\sigma$; equivalently $H_{(\sigma)}=\operatorname{range}(P_\sigma)$ for the isotypic projection of [[def-compact-group-isotypic-projection]] ([[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]]). Then:

1. $H=\widehat\bigoplus_{\sigma\in\widehat K}H_{(\sigma)}$ is a Hilbert direct sum of pairwise orthogonal closed invariant subspaces ([[def-hilbert-direct-sum-of-unitary-representations]]);
2. each nonzero $H_{(\sigma)}$ is a (possibly infinite) Hilbert direct sum of copies of the finite-dimensional irreducible $\sigma$; in particular every irreducible strongly continuous unitary representation of $K$ is finite dimensional;
3. the projections $P_\sigma$ are the orthogonal projections onto the summands $H_{(\sigma)}$.

## Facts & Assumptions

[F1] Every nonzero strongly continuous unitary representation of $K$ contains a nonzero finite-dimensional closed invariant subspace. ([[lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation]])

[F2] Every finite-dimensional continuous unitary representation of $K$ is a direct sum of finitely many irreducible subrepresentations, so each nonzero finite-dimensional invariant subspace contains a nonzero irreducible invariant subspace. ([[thm-finite-dimensional-compact-group-representations-are-completely-reducible]])

[F3] The orthogonal complement of a closed invariant subspace of a unitary representation is closed and invariant, and $H=M\oplus M^\perp$ for a closed subspace $M$. ([[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-orthogonality-and-orthogonal-complement]])

[F4] Zorn's lemma: a nonempty partially ordered set in which every chain has an upper bound has a maximal element. ([[thm-zorn]], [[def-axiom-of-choice]])

[F5] Every irreducible strongly continuous unitary representation of $K$ is finite dimensional, its class lies in the unitary dual $\widehat K$, and an irreducible subrepresentation of a copy of $\sigma$ is again a copy of $\sigma$. ([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], [[def-unitary-dual-of-a-compact-group]])

[F6] The isotypic projections: $P_\sigma$ is a bounded self-adjoint idempotent commuting with $\pi(K)$, its range is the $\sigma$-isotypic subspace $H_\sigma$, the closed span of all $\sigma$-copies, and ranges belonging to inequivalent classes are mutually orthogonal; a $\sigma$-copy is a closed invariant subspace on which $\pi$ restricts to a representation unitarily equivalent to $\sigma$. Consequently $P_\sigma$ is the orthogonal projection onto $H_\sigma$. ([[def-compact-group-isotypic-projection]], [[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]])

[F7] Hilbert direct sums: for a family of pairwise orthogonal closed invariant subspaces with closed linear span $H$, the representation is the Hilbert direct sum of the restrictions, and a direct sum of copies of a fixed representation is again a Hilbert direct sum of those subrepresentations. ([[def-hilbert-direct-sum-of-unitary-representations]])

[F8] Inequivalent irreducible subrepresentations have no nonzero bounded intertwiner, so their intersection is zero and their orthogonal projections onto one another vanish; equivalently, a nonzero bounded intertwiner between irreducible representations forces unitary equivalence. ([[thm-schurs-lemma-for-unitary-representations]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]])

## Proof

**Given:** AC, a compact Hausdorff group $K$, and a strongly continuous unitary representation $\pi$ of $K$ on $H$; if $H=\{0\}$ every $H_{(\sigma)}$ is $\{0\}$, every $P_\sigma=0$, and the assertions are immediate, so assume $H\ne\{0\}$.

1.1 Let $\mathcal S$ be the set of all sets $\mathcal F$ of pairwise orthogonal nonzero closed finite-dimensional $\pi(K)$-invariant subspaces $M\subseteq H$ on which $\pi$ restricts irreducibly, ordered by inclusion; $\mathcal S$ is nonempty because by [F1] $H$ contains a nonzero finite-dimensional closed invariant subspace, which by [F2] contains a nonzero irreducible invariant subspace. Every chain in $\mathcal S$ has the upper bound $\bigcup\mathcal C$, which lies in $\mathcal S$ because any two of its members lie in a common member of the chain and are therefore orthogonal, while none of them is zero; hence by Zorn [F4] there is a maximal $\mathcal M\in\mathcal S$. Its members are pairwise orthogonal closed invariant subspaces, so their closed linear span $N$ is their Hilbert direct sum and is $\pi(K)$-invariant, being the closed span of invariant subspaces. [F1, F2, F4, F7]

2.1 If $N\ne H$, then $N^\perp\ne\{0\}$ is a nonzero closed invariant subspace by [F3], and [F1] applied to $\pi|_{N^\perp}$ provides a nonzero finite-dimensional closed invariant subspace $W\subseteq N^\perp$; by [F2] $W$ contains a nonzero irreducible invariant subspace $M_0$, which is orthogonal to every member of $\mathcal M$ because it lies in $N^\perp$, so $\mathcal M\cup\{M_0\}$ is a strictly larger member of $\mathcal S$, contradicting maximality; hence $N=H$, that is, $H$ is the Hilbert direct sum of the family $\mathcal M$. Each member $M\in\mathcal M$ is an irreducible representation of $K$, hence finite dimensional with class $\sigma(M)\in\widehat K$ by [F5]; writing $\mathcal M_\sigma:=\{M\in\mathcal M:\sigma(M)=\sigma\}$ and $H_{(\sigma)}:=\overline{\operatorname{span}}\bigcup\mathcal M_\sigma$, the $H_{(\sigma)}$ are pairwise orthogonal closed invariant subspaces with closed linear span $H$, so $H=\widehat\bigoplus_{\sigma\in\widehat K}H_{(\sigma)}$ and each nonzero $H_{(\sigma)}$ is the Hilbert direct sum of the copies $\mathcal M_\sigma$ of $\sigma$; this proves (1) and the first clause of (2), while the finite-dimensionality of every irreducible representation of $K$ is [F5]. [F1, F2, F3, F5, F7, step 1.1]

3.1 The grouped subspace $H_{(\sigma)}$ from step 2.1 is contained in the closed span $H_\sigma$ of all $\sigma$-copies. Conversely, let $L$ be any $\sigma$-copy. For each $M\in\mathcal M$ of class $\tau\ne\sigma$, the orthogonal projection $p_M$ commutes with $\pi(K)$, because $M$ and $M^\perp$ are invariant [F3]. Thus $p_M|_L:L\to M$ is a bounded intertwiner between inequivalent irreducibles and is zero by [F8]. Hence $L$ is orthogonal to every such $M$, and therefore to their closed span. The orthogonal decomposition of step 2.1 implies that the complement of this closed span is exactly $H_{(\sigma)}$, so $L\subseteq H_{(\sigma)}$. Taking closed spans gives $H_\sigma=H_{(\sigma)}$. By [F6], $P_\sigma$ is the orthogonal projection onto this subspace, proving (3). AC is used in Zorn's lemma, the Haar-based projections and the cited suppliers. [F3, F6, F8, step 2.1] ∎
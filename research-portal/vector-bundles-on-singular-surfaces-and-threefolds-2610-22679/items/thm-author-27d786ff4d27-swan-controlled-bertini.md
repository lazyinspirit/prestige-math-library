---
id: thm-author-27d786ff4d27-swan-controlled-bertini
kind: theorem
title: External Swan finite controlling-family Bertini theorem
status: published
domain: mathematics
deps:
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-integral-scheme
  - math:def-base-change-morphism-schemes
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-localisation-of-a-module
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-ring
  - math:lem-quotient-spectrum-map-is-a-closed-immersion
dependency_roles:
  math:def-affine-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:lem-quotient-spectrum-map-is-a-closed-immersion: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Richard G. Swan, A cancellation theorem for projective modules in the
        metastable range, Invent. Math.27 (1974),23–43
      url: https://gdz.sub.uni-goettingen.de/id/PPN356556735_0027?tify=%7B%22pages%22:%5B32%5D%7D
      locator: Printed p. 23, variety convention; printed p. 26, order ideal and
        Theorems 1.3–1.4; controlling-set construction and proof, pp. 26–28. GDZ
        scans 29 and 32–34. Retained source qualifications concern Theorem 1.1,
        pp. 24–25, and the proof on pp. 27–28. DOI 10.1007/BF01389963.
      statement: On a smooth affine geometrically integral variety V=Spec A over an
        infinite field k, a finitely generated projective A-module Q of constant
        rank r has a finite controlling subset S, depending only on A and Q. For
        every finite subset T containing S and every unimodular (q,a) in Q
        direct-sum A, sufficiently general k-linear combinations y of T make
        Spec(A/O_Q(q+ay)) smooth of dimension dim(V)-r unless empty, and
        geometrically integral when nonempty and positive-dimensional. Here
        O_Q(w) is the ideal of values phi(w) for A-linear phi:Q→A. In the free
        case the displayed construction takes the frame elements and their
        products by coordinates of an affine embedding. The indexed-list
        extension is proved locally below, rather than attributed to the source.
      hypotheses: A is a finitely generated commutative unital k-algebra; V=Spec A is
        smooth and geometrically integral; k is infinite; Q is finitely
        generated projective of constant rank; (q,a) is unimodular, meaning
        O_Q(q)+Aa=A. The local application takes dim(V)=3, r=2 and (q,a)=(0,1).
        There is no characteristic-zero or Q-algebra hypothesis. Empty zero
        schemes are allowed. The downstream applications over an algebraically
        closed field must separately prove nonemptiness, avoidance and global
        gluing on their quasi-affine open.
      reading_limits: Freshly visually read the cached primary GDZ scans 29–34
        (printed pp. 23–28), and checked all six image hashes against the frozen
        source-access note. Read the variety convention, the order-ideal
        definition, Theorems 1.3–1.4 and their complete printed proof through
        the opening continuation on p. 28; also read Theorem 1.1, Lemma 1.2 and
        their adjacent proof context and the Corollary 1.6 statement. These
        readings check the imported statement, hypotheses and application, not a
        reconstruction or acceptance of the full Bertini foundations. Did not
        read the cited EGA/Seidenberg foundations, later sections of Swan, or
        KM82. Retain the existing source qualifications without generating a new
        prerequisite-source defect audit. Live GDZ image access failed in this
        sandbox; the actual readable sources were the unchanged cached primary
        images.
proof_strategy: direct
dependency_level: 0
formulation_deps:
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-integral-scheme
  - math:def-base-change-morphism-schemes
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-localisation-of-a-module
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-ring
  - math:lem-quotient-spectrum-map-is-a-closed-immersion
argument_deps:
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-integral-scheme
  - math:def-base-change-morphism-schemes
  - math:def-krull-dimension-of-a-ring
  - math:def-projective-module
  - math:def-localisation-of-a-module
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-ring
  - math:lem-quotient-spectrum-map-is-a-closed-immersion
---

## Statement
Let $k$ be an infinite field, let $A$ be a commutative unital $k$-algebra generated by finitely many elements, and let $V=\operatorname{Spec}A$ be smooth over $k$ with $\dim A=3$. Assume that $V$ is geometrically integral: for every field extension $K/k$, the base change $V_K=V\times_{\operatorname{Spec}k}\operatorname{Spec}K$ is integral. Smoothness over $k$ means smoothness of the structure morphism to $\operatorname{Spec}k$, and dimension of a nonempty affine scheme means Krull dimension of its coordinate ring.

Let $Q$ be a finitely generated projective $A$-module of constant rank two; explicitly, it has a finite list of module generators and $Q_{\mathfrak p}\cong A_{\mathfrak p}^{\,2}$ for every prime $\mathfrak p\subset A$, where localization is at $A\setminus\mathfrak p$. For $y\in Q$, define its order ideal and scheme-theoretic zero scheme by $I_Q(y)=(\varphi(y)\mid\varphi\in\operatorname{Hom}_A(Q,A))$ and $Z_Q(y)=\operatorname{Spec}(A/I_Q(y))$, with its map to $V$ induced by the quotient homomorphism. Here $\operatorname{Hom}_A(Q,A)$ is the set of $A$-linear maps; the parentheses mean the ideal generated by their displayed values. This specifies the full scheme structure, including nilpotents, rather than only the set of zeros.

There is a finite controlling subset $S\subset Q$, depending only on $A$ and $Q$, such that for every finite indexed list $T=(t_1,\ldots,t_m)$ whose set of values contains $S$, there is a nonempty Zariski-open set $G_T\subset k^m$ for which every $\lambda\in G_T$ gives $y_\lambda=\sum_{i=1}^m\lambda_i t_i$ with $Z_Q(y_\lambda)$ empty or a smooth geometrically integral one-dimensional $k$-scheme. In this coefficient space the Zariski-closed sets are the common zero sets of families of polynomials in $k[X_1,\ldots,X_m]$ evaluated on $k^m$. Thus openness refers to rational coefficient vectors over the stated infinite field. The list may have repetitions and arbitrary additional entries.

If $Q=Ae_1\oplus Ae_2$ is free and $x_1,\ldots,x_n$ generate $A$ as a $k$-algebra, one can take $S=\{e_1,e_2\}\cup\{x_\ell e_j\mid 1\leq\ell\leq n,\ 1\leq j\leq2\}$, the frame and its products by the coordinates of this affine embedding.

## Statement references
[[math:def-affine-scheme]]

[[math:def-smooth-morphism-schemes]]

[[math:def-integral-scheme]]

[[math:def-base-change-morphism-schemes]]

[[math:def-krull-dimension-of-a-ring]]

[[math:def-projective-module]]

[[math:def-localisation-of-a-module]]

[[math:def-module-homomorphism-kernel-image-and-cokernel]]

[[math:def-quotient-ring]]

[[math:lem-quotient-spectrum-map-is-a-closed-immersion]]

## Facts & Assumptions
**Given:** The ring, scheme and module hypotheses in the Statement, with the stated order-ideal zero scheme and rational coefficient topology.

**Goal:** Specialize the imported Swan theorem and justify the finite indexed-list extension, without claiming a local proof of the substantial Bertini premise.

[F1] Swan's Theorems 1.3–1.4, imported in the External input section, give a finite controlling subset for a finitely generated projective module of constant rank $r$ on a smooth affine geometrically integral variety over an infinite field. For a unimodular pair $(q,a)\in Q\oplus A$, meaning $I_Q(q)+Aa=A$, a sufficiently general linear combination $y$ of any finite subset containing it makes $\operatorname{Spec}(A/I_Q(q+ay))$ smooth of dimension $\dim V-r$ unless empty, and geometrically integral when nonempty and positive-dimensional. Their free-module construction uses the frame and its coordinate multiples.

[F2] [[math:lem-quotient-spectrum-map-is-a-closed-immersion]] supplies the closed immersion induced by a surjective homomorphism of commutative unital rings, with no choice hypothesis. Apply it to $A\to A/I_Q(y)$ for the zero scheme, and to the surjection $k[X_1,\ldots,X_n]\to A$ given by a finite set of algebra generators for the free-case affine embedding. A closed immersion is in particular locally closed, by taking the whole target as the intervening open subscheme.

## Proof

**Given:** The Statement's data and the explicitly imported premise [F1].

1.1 Apply [F1] with $r=2$ and $(q,a)=(0,1)$. This pair is unimodular because $I_Q(0)+A\cdot1=A$. Its zero scheme is exactly $Z_Q(y)$ by the specified quotient construction and [F2]. Since $\dim V-r=3-2=1>0$, every nonempty permitted zero scheme is smooth and geometrically integral of dimension one. This gives a controlling subset $S$ and the required nonempty open for every finite set of distinct module elements containing $S$. The free-module construction in [F1] gives the displayed $S$: by [F2] the chosen algebra generators give a closed, hence locally closed, affine embedding, as required by that construction. [F1, F2, given]

2.1 For an arbitrary indexed list $T$, enumerate its distinct values as $v_1,\ldots,v_s$ and apply step 1.1 to this finite set, obtaining a nonempty coefficient open $G\subset k^s$. Define $L:k^m\to k^s$ by $L(\lambda)_j=\sum_{i:t_i=v_j}\lambda_i$. This map is surjective: for each of the finitely many nonempty index groups, put any prescribed target coefficient at its least index and set the other coefficients in that group to zero. It is continuous in the stated topology, because substitution of its linear coordinate polynomials in any family of polynomial equations gives polynomial equations for the inverse image of the corresponding closed set. Hence $G_T=L^{-1}(G)$ is open and nonempty, and $\sum_i\lambda_i t_i=\sum_j L(\lambda)_jv_j$ gives the very same order ideal and zero scheme. This proves the assertion with repetitions and extra indexed vectors. Only finite enumerations are used in this reindexing argument. [step 1.1, algebra] ∎


The primary GDZ scans 29–34 (printed pp. 23–28) were inspected for the exact statement and printed proof. Theorem 1.1(1) prints an incorrect intersection dimension; for an input variety of dimension $d$ and a slicing affine linear subspace of dimension $r$ in affine $n$-space, the correct value is $d+r-n$, whereas the module dimension in Theorem 1.3 is correctly $\dim V-\operatorname{rank}Q$. The identification of all closed coefficient points with rational points in the proof of Theorem 1.1 needs the rational-point qualification over a non-algebraically-closed field.

At the end of the proof of Theorem 1.4, printed pp. 27–28, the fiber condition must be $\ne\varnothing$, not $=\varnothing$. Choose a point of the already nonempty open of coefficient pairs in that proof and fix its first coordinate; the resulting fiber is nonempty and open. The two retained finding IDs for this sign describe the same error.

The free-chart reduction also calls geometric integrality local, which is false on an arbitrary open cover. That printed inference is not imported as a lemma. The established theorem is used as an external input; its deep Bertini foundations are not reconstructed here. The current local application has separate common-core and gluing arguments, which are not replaced by that inference.


The substantial premise [F1] is imported from Richard G. Swan, A cancellation theorem for projective modules in the metastable range, Theorems 1.3–1.4, printed p. 26, with the controlling-set construction on pp. 26–27 and proof continuation on p. 28. The variety convention on p. 23 means geometrically integral and of finite type. Its exact statement, hypotheses, locator and reading limits are recorded in the six fields of the source reference. The deep Bertini input has literature-derived proof provenance at this citation leaf; the two-step specialization and reindexing argument above is locally authored.

The source is used only on smooth affine charts in the downstream application. The extension to the actual quasi-affine $U$, common-core nonemptiness, simultaneous avoidance, and global irreducibility are separate local arguments, not conclusions added to [F1]. No assertion that geometric integrality is local on arbitrary covers is imported as a premise.

## Source qualifications
The primary GDZ scans 29–34 (printed pp. 23–28) were inspected for the exact statement and printed proof. Theorem 1.1(1) prints an incorrect intersection dimension; for an input variety of dimension $d$ and a slicing affine linear subspace of dimension $r$ in affine $n$-space, the correct value is $d+r-n$, whereas the module dimension in Theorem 1.3 is correctly $\dim V-\operatorname{rank}Q$. The identification of all closed coefficient points with rational points in the proof of Theorem 1.1 needs the rational-point qualification over a non-algebraically-closed field.

At the end of the proof of Theorem 1.4, printed pp. 27–28, the fiber condition must be $\ne\varnothing$, not $=\varnothing$. Choose a point of the already nonempty open of coefficient pairs in that proof and fix its first coordinate; the resulting fiber is nonempty and open. The two retained finding IDs for this sign describe the same error.

The free-chart reduction also calls geometric integrality local, which is false on an arbitrary open cover. That printed inference is not imported as a lemma. The established theorem is used as an external input; its deep Bertini foundations are not reconstructed here. The current local application has separate common-core and gluing arguments, which are not replaced by that inference.

## External input
The substantial premise [F1] is imported from Richard G. Swan, A cancellation theorem for projective modules in the metastable range, Theorems 1.3–1.4, printed p. 26, with the controlling-set construction on pp. 26–27 and proof continuation on p. 28. The variety convention on p. 23 means geometrically integral and of finite type. Its exact statement, hypotheses, locator and reading limits are recorded in the six fields of the source reference. The deep Bertini input has literature-derived proof provenance at this citation leaf; the two-step specialization and reindexing argument above is locally authored.

The source is used only on smooth affine charts in the downstream application. The extension to the actual quasi-affine $U$, common-core nonemptiness, simultaneous avoidance, and global irreducibility are separate local arguments, not conclusions added to [F1]. No assertion that geometric integrality is local on arbitrary covers is imported as a premise.

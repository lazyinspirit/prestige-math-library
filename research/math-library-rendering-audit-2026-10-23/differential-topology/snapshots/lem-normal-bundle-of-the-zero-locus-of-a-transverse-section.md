---
id: lem-normal-bundle-of-the-zero-locus-of-a-transverse-section
kind: lemma
title: "Normal bundle of the zero locus of a transverse section"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [ "def-a-smooth-map-transverse-to-an-embedded-submanifold", "thm-transverse-preimage-theorem", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle", "prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles", "def-pullback-vector-bundle-as-a-fibre-product", "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle", "def-vector-bundle-map-over-a-smooth-base-map", "prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold", "prop-the-zero-section-is-a-smooth-embedding", "def-embedded-submanifold-and-slice-chart", "def-differential-of-a-smooth-map", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-countable-choice", "def-topological-manifold-without-boundary", "def-smooth-fibre-bundle-and-local-trivialization", "def-vector-bundle-map-section-subbundle-and-isomorphism" ]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-06
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/lem-normal-bundle-of-the-zero-locus-of-a-transverse-section.json
sources:
  references:
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $E\to M$ be a smooth real vector bundle of rank $r$ over a boundaryless smooth $n$-manifold $M$, with zero section $s_0$, and let $s:M\to E$ be a smooth section transverse to the embedded submanifold $s_0(M)\subseteq E$. Then $Z=s^{-1}(s_0(M))$ is closed. If $r\le n$, it is an embedded submanifold of dimension $n-r$ (possibly empty); if $r>n$, it is empty, without a negative-dimensional submanifold assertion. For every $r\ge0$, the vertical part of $ds$ induces a canonical isomorphism of smooth vector bundles over $Z$ $$\nu_Z=TM|_Z/TZ\;\cong\;E|_Z .$$ If $Z=\varnothing$, the displayed quotient and restriction are empty bundle sets and their isomorphism is the unique empty bundle map; the normal set may carry the specified rank-$r$ empty-bundle structure without a claim that $Z$ has dimension $n-r$ when $r>n$. If $M$ and the fibres of $E$ are $R$-oriented, orient $\nu_Z$ by transporting the fibre orientation of $E|_Z$ through this isomorphism, and orient $Z$ so that its tangent determinant followed by this normal determinant is the ambient determinant. Over $\mathbb F_2$ all these orientations are canonical.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth rank-$r$ real vector bundle $E\to M$ over a boundaryless smooth $n$-manifold, its zero section $s_0$ and a smooth section $s$ transverse to the embedded submanifold $s_0(M)\subseteq E$.

[F1] The zero section $0_M:M\to E$, $p\mapsto 0_p$, is a smooth embedding ([[prop-the-zero-section-is-a-smooth-embedding]]).

[F2] The normal-bundle set of an embedded submanifold is the fibrewise quotient of the ambient tangent bundle by the tangent bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

[F3] The fibrewise quotient of a smooth bundle by a smooth subbundle is a smooth vector bundle, and constant-rank kernels and images of bundle maps over one base are smooth subbundles ([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]], [[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[F4] A smooth rank-$r$ vector bundle has $r$-dimensional real fibres and local trivializations ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F5] Suppose $F:M^m\to N^n$ is smooth and transverse to an embedded submanifold $Z\subseteq N$ of codimension $c$. If $c\le m$, then $F^{-1}(Z)$ is an embedded submanifold of codimension $c$, possibly empty, with the stated tangent formula at each point; if $c>m$, then $F^{-1}(Z)=\varnothing$ ([[thm-transverse-preimage-theorem]]).

[F6] A smooth map $F:M\to N$ is transverse to an embedded submanifold $Z\subseteq N$ when $dF_p(T_pM)+T_{F(p)}Z=T_{F(p)}N$ for every $p\in F^{-1}(Z)$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F7] The pullback $f^*E$ of a smooth bundle along a smooth map is the fibre product $\{(q,e):f(q)=\pi(e)\}$ with fibre over $q$ canonically $E_{f(q)}$, and it is again a smooth vector bundle of the same rank ([[def-pullback-vector-bundle-as-a-fibre-product]], [[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]).

[F8] A vector bundle map over $f$ is a smooth map $\Phi:E\to F$ with $\pi_F\circ\Phi=f\circ\pi_E$ that is fibrewise linear ([[def-vector-bundle-map-over-a-smooth-base-map]]).

[F9] For an embedded submanifold, any two of the orientations of the ambient tangent bundle, the tangent bundle and the transverse normal bundle determine the third; in this pair the convention is that a positive tangent basis followed by a positive normal basis is positive in the ambient ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]).

[F10] The empty space is a smooth manifold of every nonnegative dimension; the empty projection has empty-cover local trivializations for every specified nonnegative rank, and its unique self-map gives the unique empty bundle isomorphism ([[def-topological-manifold-without-boundary]], [[def-smooth-fibre-bundle-and-local-trivialization]], [[def-vector-bundle-map-section-subbundle-and-isomorphism]]). The empty normal-bundle set is the empty coproduct of [F2], and the empty pullback is the fibre product of [F7].

## Proof

**Given:** The data and transversality hypotheses in the Statement; every asserted dimension is nonnegative, and the empty bundle case is interpreted as specified there.

**Proof technique:** identify the pullback of the normal exact sequence along $s$ with the normal sequence of the preimage.

1.1 The zero section $s_0:M\to E$ is a smooth embedding [F1], so by [F2] its normal bundle is the quotient $\nu_{s_0}=TE|_{s_0(M)}/T(s_0(M))$. The canonical splitting $TE|_{s_0(M)}\cong TM\oplus E$ along the zero section, whose vertical summand is the fibre direction, identifies this quotient with $E$ as smooth bundles over $M$ by [F3] and [F4]; moreover $s_0(M)$ is closed in $E$ because in every bundle chart its complement is the open set of nonzero vectors. [F1, F2, F3, F4, given]

2.1 The zero section has codimension $r$ by the bundle coordinates in step 1.1. Since $s$ is transverse to it by [F6], the $r>n$ branch of [F5] gives $Z=\varnothing$ in that range. Its two normal-bundle sets are then empty: the normal quotient is the empty coproduct and $E|_Z$ is the empty pullback. By [F10] their unique map is a smooth bundle isomorphism with the specified rank-$r$ empty-bundle model; use the empty zero-dimensional structure on $Z$ without asserting codimension $r$. The same empty-map conclusion holds if $Z=\varnothing$ for $r\le n$, now with its allowed dimension $n-r$. In either case $Z$ is closed and all pointwise tangent and orientation statements are vacuous. For $r=0$, the bundle has one zero vector in every fibre, so $s=s_0$, $Z=M$ and the normal identification is the canonical map between zero bundles. It remains to handle $1\le r\le n$ at actual zeros. [F1, F2, F4, F5, F6, F7, F10, step 1.1, cases, algebra]

3.1 In this dimension range, [F5] makes $Z=s^{-1}(s_0(M))$ an embedded submanifold of codimension $r$; it is closed because $s_0(M)$ is closed and $s$ is continuous, so $\dim Z=n-r$. The quotient map $D^vs:TM|_Z\to E|_Z$ has kernel $TZ$ by [F5] and is surjective by transversality. In bundle charts it is the derivative of the local section components at their zeros, hence smooth; it induces a smooth fibrewise isomorphism $TM|_Z/TZ\to E|_Z$, whose inverse is smooth by the inverse-matrix formula. Here $E|_Z$ is the pullback along the inclusion $Z\hookrightarrow M$, not along the section $s:M\to E$. Combining with step 1.1 gives the canonical isomorphism $\nu_Z\cong E|_Z$ of smooth bundles over $Z$. [F5, F6, F7, F8, step 1.1, step 2.1, given]

4.1 Orientation clause. If $Z$ is empty, the orientation data form the unique empty assignment, compatible with step 2.1. Otherwise the isomorphism of step 1.1 carries the orientation of $E$ to the normal orientation of $s_0(M)$ induced by the ambient $E$ and the zero-section orientation, by the third-orientation rule [F9] applied with the total-space orientation in which a positive tangent basis of $s_0(M)$ followed by a positive fibre basis is positive (the tangent-first convention of this pair). Pullback along $s$ preserves this ordered determinant-line comparison because $ds$ maps the normal directions of the transverse preimage isomorphically onto the normal directions of $s_0(M)$ by [F5] and [F8], and the induced orientation of $Z$ in $M$ is the one for which a positive tangent basis of $Z$ followed by a positive normal basis is positive in $M$ [F9]. Hence the orientation of $\nu_Z$ induced from $M$ and $Z$ corresponds to the supplied fibre orientation of $E|_Z$; over $\mathbb F_2$ the fibre orientation data at each actual point are canonical. No nonzero global generator is asserted over the empty base. [F5, F8, F9, F10, step 1.1, step 2.1, step 3.1, algebra] ∎


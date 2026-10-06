---
id: lem-normal-bundle-of-the-zero-locus-of-a-transverse-section
kind: lemma
title: "Normal bundle of the zero locus of a transverse section"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold, thm-transverse-preimage-theorem, def-normal-and-conormal-bundles-of-an-embedded-submanifold, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles, def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, def-vector-bundle-map-over-a-smooth-base-map, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, prop-the-zero-section-is-a-smooth-embedding, def-embedded-submanifold-and-slice-chart, def-differential-of-a-smooth-map, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
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

Assume $\mathrm{AC}_\omega$. Let $E\to M$ be a smooth real vector bundle of rank $r$ over a boundaryless smooth $n$-manifold $M$, with zero section $s_0$, and let $s:M\to E$ be a smooth section transverse to the embedded submanifold $s_0(M)\subseteq E$. Then $Z=s^{-1}(s_0(M))$ is a closed embedded submanifold of $M$ of dimension $n-r$ when nonempty (and empty if $r>n$), and the vertical part of $ds$ induces a canonical isomorphism of smooth vector bundles over $Z$ $$\nu_Z=TM|_Z/TZ\;\cong\;E|_Z .$$ If $M$ and the fibres of $E$ are $R$-oriented, orient $\nu_Z$ by transporting the fibre orientation of $E|_Z$ through this isomorphism, and orient $Z$ so that its tangent determinant followed by this normal determinant is the ambient determinant. Over $\mathbb F_2$ all these orientations are canonical.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth rank-$r$ real vector bundle $E\to M$ over a boundaryless smooth $n$-manifold, its zero section $s_0$ and a smooth section $s$ transverse to the embedded submanifold $s_0(M)\subseteq E$.

[F1] The zero section $0_M:M\to E$, $p\mapsto 0_p$, is a smooth embedding ([[prop-the-zero-section-is-a-smooth-embedding]]).

[F2] The normal-bundle set of an embedded submanifold is the fibrewise quotient of the ambient tangent bundle by the tangent bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

[F3] The fibrewise quotient of a smooth bundle by a smooth subbundle is a smooth vector bundle, and constant-rank kernels and images of bundle maps over one base are smooth subbundles ([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]], [[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[F4] A smooth rank-$r$ vector bundle has $r$-dimensional real fibres and local trivializations ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F5] If $F:M^m\to N^n$ is smooth and transverse to an embedded submanifold $Z\subseteq N$ of codimension $c$, then $F^{-1}(Z)$ is an embedded submanifold of $M$ of codimension $c$, with $T_pF^{-1}(Z)=\{v:dF_p(v)\in T_{F(p)}Z\}$ ([[thm-transverse-preimage-theorem]]).

[F6] A smooth map $F:M\to N$ is transverse to an embedded submanifold $Z\subseteq N$ when $dF_p(T_pM)+T_{F(p)}Z=T_{F(p)}N$ for every $p\in F^{-1}(Z)$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F7] The pullback $f^*E$ of a smooth bundle along a smooth map is the fibre product $\{(q,e):f(q)=\pi(e)\}$ with fibre over $q$ canonically $E_{f(q)}$, and it is again a smooth vector bundle of the same rank ([[def-pullback-vector-bundle-as-a-fibre-product]], [[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]).

[F8] A vector bundle map over $f$ is a smooth map $\Phi:E\to F$ with $\pi_F\circ\Phi=f\circ\pi_E$ that is fibrewise linear ([[def-vector-bundle-map-over-a-smooth-base-map]]).

[F9] For an embedded submanifold, any two of the orientations of the ambient tangent bundle, the tangent bundle and the transverse normal bundle determine the third; in this pair the convention is that a positive tangent basis followed by a positive normal basis is positive in the ambient ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]).

## Proof

**Proof technique:** identify the pullback of the normal exact sequence along $s$ with the normal sequence of the preimage.

1.1 The zero section $s_0:M\to E$ is a smooth embedding [F1], so by [F2] its normal bundle is the quotient $\nu_{s_0}=TE|_{s_0(M)}/T(s_0(M))$. The canonical splitting $TE|_{s_0(M)}\cong TM\oplus E$ along the zero section, whose vertical summand is the fibre direction, identifies this quotient with $E$ as smooth bundles over $M$ by [F3] and [F4]; moreover $s_0(M)$ is closed in $E$ because in every bundle chart its complement is the open set of nonzero vectors. [F1, F2, F3, F4, given]

2.1 The section $s$ is transverse to $s_0(M)$ in the sense of [F6], so [F5] makes $Z=s^{-1}(s_0(M))$ an embedded submanifold of $M$ of codimension $r$; it is closed because $s_0(M)$ is closed and $s$ is continuous, so $\dim Z=n-r$ when nonempty. The quotient map $D^vs:TM|_Z\to E|_Z$ has kernel $TZ$ by [F5] and is surjective by transversality. In bundle charts it is the derivative of the local section components at their zeros, hence smooth; it induces a smooth fibrewise isomorphism $TM|_Z/TZ\to E|_Z$, whose inverse is smooth by the inverse-matrix formula. Here $E|_Z$ is the pullback along the inclusion $Z\hookrightarrow M$, not along the section $s:M\to E$. Combining with step 1.1 gives the canonical isomorphism $\nu_Z\cong E|_Z$ of smooth bundles over $Z$. [F5, F6, F7, F8, step 1.1, given]

3.1 Orientation clause. The isomorphism of step 1.1 carries the orientation of $E$ to the normal orientation of $s_0(M)$ induced by the ambient $E$ and the zero-section orientation, by the third-orientation rule [F9] applied with the total-space orientation in which a positive tangent basis of $s_0(M)$ followed by a positive fibre basis is positive (the tangent-first convention of this pair). Pullback along $s$ preserves this ordered determinant-line comparison because $ds$ maps the normal directions of the transverse preimage isomorphically onto the normal directions of $s_0(M)$ by [F5] and [F8], and the induced orientation of $Z$ in $M$ is the one for which a positive tangent basis of $Z$ followed by a positive normal basis is positive in $M$ [F9]. Hence the orientation of $\nu_Z$ induced from $M$ and $Z$ corresponds to the supplied fibre orientation of $E|_Z$; over $\mathbb F_2$ both sides carry their unique nonzero generator. [F5, F8, F9, step 1.1, step 2.1, algebra] ∎


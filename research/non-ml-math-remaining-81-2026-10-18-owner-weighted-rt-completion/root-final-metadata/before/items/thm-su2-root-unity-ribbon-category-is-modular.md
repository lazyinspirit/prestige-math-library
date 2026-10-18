---
id: thm-su2-root-unity-ribbon-category-is-modular
kind: theorem
title: "The standard root-of-unity sl2 tilting ribbon quotient is modular"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-temperley-lieb-rank-one-lusztig-tilting-category, thm-temperley-lieb-rank-one-tilting-quotient-fusion-category, thm-temperley-lieb-root-negligible-quotient-is-semisimple, thm-temperley-lieb-rank-one-pivotal-ribbon-conversion, lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series, lem-su2-hopf-link-sine-data-from-truncated-fusion, lem-finite-sine-transform-orthogonality, def-modular-ribbon-category-and-hopf-link-data, lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations, lem-temperley-lieb-rank-one-tilting-character-and-dimension, lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §§1–5"
      url: "https://arxiv.org/pdf/math/0308281"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§3.3–3.4"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\ell\ge3$, $q=e^{\pi i/\ell}$, and let $\mathcal C_\ell$ be the standard ribbon semisimplification of finite-dimensional integrable type-1 tilting modules for Lusztig's divided-power $U_q(\mathfrak{sl}_2)$, using the positive-trace quantum ribbon convention. Then $\mathcal C_\ell$ is modular, with simples $a=0,\ldots,\ell-2$, dimensions $d_a=\sin((a+1)\pi/\ell)/\sin(\pi/\ell)$, twists $\theta_a=q^{a(a+2)/2}$, and

$$s_{ab}=\frac{\sin((a+1)(b+1)\pi/\ell)}{\sin(\pi/\ell)},\qquad S_{ab}=\sqrt{\frac2\ell}\sin\frac{(a+1)(b+1)\pi}{\ell}.$$

## Facts & Assumptions

**Given:** The standard divided-power tilting quotient at $q=e^{\pi i/\ell}$, $\ell\ge3$, with the positive-trace quantum ribbon convention.

[F1] If the actual quotient has the displayed truncated fusion coefficients, dimensions, and twists, then the balancing and finite-sine argument proves the displayed $s$, $S$, and nondegeneracy ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[F2] The full toral-character divided-power category, Weyl/dual-Weyl tensor filtrations, tilting classification and all-endomorphism negligible trace calculation are supplied by [[def-temperley-lieb-rank-one-lusztig-tilting-category]], [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]] and [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]]. The actual semisimple spherical ribbon quotient has precisely the retained labels and the stated truncated fusion rule by [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]].

[F3] The finite integral R-series gives the full braiding, ribbon identities and twists on the actual tiltings; the signed TL comparison with parity-corrected pivot gives positive dimensions and retains the exact root-path/trace-radical quotient and all-rank semisimplified centralizer. The unreduced boundary projector is nonzero ([[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]], [[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]], [[lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]], [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]]).

## Proof

1.1 By [F2], the full actual tilting category has its semisimple quotient with exactly the simple labels $0,\ldots,\ell-2$ and the complete truncated fusion multiplicities in [F1]. The all-endomorphism trace calculation kills every excluded indecomposable, not just its identity trace. Thus the quotient here is the actual category in the Statement, rather than a fusion ring substituted for it. [F1, F2, given, algebra]

2.1 By [F3], its full braiding and ribbon structure descend from the integral finite R-series, and the pivotal conversion gives $d_a=[a+1]_q=\sin((a+1)\pi/\ell)/\sin(\pi/\ell)$ and $\theta_a=s^{a(a+2)}=q^{a(a+2)/2}$ with $s=e^{\pi i/(2\ell)}$. The self-dual cup/cap loop is $-\delta$ and the positive pivotal trace uses the proved parity conversion; no equivalence with unmodified positive-loop pivotal diagrams is assumed. The actual category therefore satisfies every hypothesis of [F1], for all $\ell\ge3$, including even $\ell$. [F2, F3, step 1.1, algebra]

3.1 Apply [F1] to this actual spherical ribbon fusion category. It gives $s_{ab}=\sin((a+1)(b+1)\pi/\ell)/\sin(\pi/\ell)$ and $D^2=\ell/(2\sin^2(\pi/\ell))$. Choose its positive square root $D=\sqrt{\ell/2}/\sin(\pi/\ell)$; division gives exactly the displayed normalized $S$. Finite sine orthogonality gives $S^2=I$, so $S$ and $s$ are invertible. This establishes modularity of the actual quotient and all its stated data, without a source-only category premise or a TQFT assumption. [F1, step 2.1, algebra] ∎

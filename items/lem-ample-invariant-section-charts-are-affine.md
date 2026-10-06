---
id: lem-ample-invariant-section-charts-are-affine
kind: lemma
title: Nonvanishing charts of sections of an ample linearization are affine
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
justified_by: []
aliases: []
deps: [def-semistable-and-stable-points-for-a-linearization, thm-serre-vanishing, lem-linearizations-powers-and-equivariant-section-ring, lem-ample-linearization-power-equivariant-embedding, lem-standard-opens-proj-affine, def-projective-scheme-from-a-homogeneous-quotient, thm-closed-subschemes-projective-space-homogeneous-ideals, def-ample-invertible-sheaf, def-projective-variety-classical, lem-section-nonvanishing-affine-intersection, def-axiom-of-choice, thm-coherent-sheaves-abelian-noetherian-scheme, lem-closed-immersion-cohomology-pushforward, thm-long-exact-sequence-sheaf-cohomology, thm-cohomology-projective-space-twisting-sheaves]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, the charts used in the proof of Proposition 1.35, printed p. 12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Lemma 5.19 and the proof of Theorem 5.3"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapter 8.1, printed pp. 115-117"
---

## Statement

Assume AC inherited from the embedding suppliers. Let $X$ be a complex projective variety, let $L$ be an ample $G$-linearized invertible sheaf, and let $\sigma\in\Gamma(X,L^{\otimes n})$ be a global section with $n\ge1$. Then the nonvanishing locus $X_\sigma=\{x\in X:\sigma(x)\ne0\}$ is an affine open subset of $X$; if $\sigma$ is $G$-invariant, then $X_\sigma$ is $G$-stable. Consequently the charts $X_\sigma$, for $\sigma\in\Gamma(X,L^{\otimes n})^G$ and $n\ge1$, form an open cover of $X^{ss}(L)$ by affine $G$-stable subsets. Here, for any complex affine algebraic group $G$, $X^{ss}(L)$ denotes the union of these invariant nonvanishing loci; for reductive $G$ this agrees with [[def-semistable-and-stable-points-for-a-linearization]].

## Facts & Assumptions

**Given:** A complex projective variety $X$ with an algebraic action of the complex affine algebraic group $G$, an ample $G$-linearized invertible sheaf $L$ on $X$, a global section $\sigma\in\Gamma(X,L^{\otimes n})$, and a $G$-equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves for some $m\ge1$.

[F1] *Equivariant embedding.* There are $m\ge1$, a finite-dimensional rational $G$-module $V$ and a $G$-equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves, obtained from the complete linear system $|L^{\otimes m}|$; in particular $\Gamma(X,L^{\otimes mk})\cong\Gamma(X,(L^{\otimes m})^{\otimes k})$ for every $k\ge0$. ([[lem-ample-linearization-power-equivariant-embedding]], [[lem-linearizations-powers-and-equivariant-section-ring]])

[F2] *Projective charts and high-degree lifting.* A closed subscheme of projective space has affine standard charts $Y\cap D_+(F)$. The ideal sheaf is coherent by [[thm-coherent-sheaves-abelian-noetherian-scheme]] and [[lem-closed-immersion-cohomology-pushforward]]. The sequence $0\to\mathcal I_Y(k)\to\mathcal O_{\mathbf P(V)}(k)\to i_*\mathcal O_Y(k)\to0$ and [[thm-long-exact-sequence-sheaf-cohomology]] make restriction surjective when $H^1(\mathcal I_Y(k))=0$, which holds for large $k$ by Serre vanishing. The source space consists of homogeneous degree-$k$ forms by [[thm-cohomology-projective-space-twisting-sheaves]] (also for $\mathbf P^0$ and $k\ge0$). No surjectivity in every degree is assumed. ([[thm-serre-vanishing]], [[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[lem-standard-opens-proj-affine]])

[F3] *Nonvanishing loci.* For invertible sheaves the nonvanishing locus of a section is open, and intersecting with an affine open gives an affine open; for sections $\sigma,\tau$ one has $X_{\sigma\otimes\tau}=X_\sigma\cap X_\tau$. ([[lem-section-nonvanishing-affine-intersection]], [[def-ample-invertible-sheaf]])

## Proof

**Proof technique:** direct.

1.1 Fix the equivariant closed immersion of [F1], so that $L^{\otimes m}\cong i^*\mathcal O(1)$. For a local trivialization of $L$ in which $\sigma$ corresponds to a regular function $f$, the section $\sigma^{\otimes m}$ corresponds to $f^{m}$; hence $\sigma^{\otimes m}$ and $\sigma$ have the same nonvanishing locus, $X_{\sigma^{\otimes m}}=X_\sigma$ (this is the local computation of the nonvanishing locus, valid for arbitrary sections, not only invariant ones). [F3, algebra]

1.2 If $\sigma$ is $G$-invariant, then for every $g\in G$ the equality $g\cdot\sigma=\sigma$ means $\sigma(gx)=g\,\sigma(x)$ in the fibre of $L^{\otimes n}$ at $gx$; since the fibre map is a $\mathbb C$-linear isomorphism, $\sigma(x)=0$ if and only if $\sigma(gx)=0$. Hence $X_\sigma$ is $G$-stable. [F1, algebra]

2.1 Under the embedding of step 1.1, $\sigma^{\otimes m}$ is a section of $\mathcal O_X(n)$. For the coherent ideal sheaf $\mathcal I_X$ in $\mathbf P(V)$, Serre vanishing gives $H^1(\mathbf P(V),\mathcal I_X(nq))=0$ for sufficiently large $q$. The ideal-sheaf exact sequence then makes restriction of degree-$nq$ forms onto $H^0(X,\mathcal O_X(nq))$ surjective. Lift $\sigma^{\otimes mq}$ to such a form $F$. Its nonvanishing locus equals $X_\sigma$, since taking a positive power does not change vanishing in a line fibre. Hence $X_\sigma=X\cap D_+(F)$, a closed subscheme of the standard affine Proj chart, and is affine. No projective-normality assumption is used. [F1, F2, F3, step 1.1]

3.1 Every $x\in X^{ss}(L)$ has, by the invariant-section union specified in the Statement, an invariant section $\sigma\in\Gamma(X,L^{\otimes n})^G$ with $\sigma(x)\ne0$, hence lies in the affine $G$-stable chart $X_\sigma$ of steps 1.2 and 2.1; the charts therefore cover $X^{ss}(L)$. [step 2.1, step 1.2] ∎

## Remarks

- **Why the power is needed.** The affineness conclusion is obtained through the very ample power $L^{\otimes m}$ of [F1]; the section $\sigma$ itself is replaced by its power, which does not change the nonvanishing locus by step 1.1.
- **No separatedness hypothesis.** The argument uses only the closed-immersion presentation of a projective variety and the standard affine charts of projective space.

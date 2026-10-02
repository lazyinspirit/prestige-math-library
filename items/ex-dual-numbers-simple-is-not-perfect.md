---
id: "ex-dual-numbers-simple-is-not-perfect"
kind: "example"
title: "The simple module over dual numbers is not perfect"
deps: [def-perfect-complex-over-a-ring, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-tor-by-resolving-the-left-module, def-balanced-tor-bifunctor, def-derived-tensor-product-in-the-bounded-above-setting, prop-homology-of-the-derived-tensor-product-is-tor, lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms, def-tensor-product-total-complex-of-chain-complexes, prop-bounded-derived-localizations-embed-fully-faithfully]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Definition 15.76.1"
      url: "https://stacks.math.columbia.edu/tag/0656"
    - title: "Weibel, The K-book, Chapter II, Example 9.7.5"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume AC for the published balanced-Tor comparison. Let $k$ be a field,
$A=k[\varepsilon]/(\varepsilon^2)$ and $S=A/(\varepsilon)\cong k$. The periodic
free resolution

$$ \cdots\to A\xrightarrow{\ \varepsilon\ }A\xrightarrow{\ \varepsilon\ }A\xrightarrow{\ \pi\ }S\to0 $$

where $\pi(a+b\varepsilon)=a$ under $S\cong k$, has kernel and image
equal to $(\varepsilon)$ at every positive stage.
Therefore $\operatorname{Tor}_i^A(S,S)\cong k$ for every $i\geq0$, and $S[0]$
is not a perfect object of $D(A\text{-}\mathrm{Mod})$, although it is bounded
with finite-dimensional cohomology.

## Facts & Assumptions

**Given:** The Axiom of Choice; a field $k$; the ring
$A=k[\varepsilon]/(\varepsilon^2)$; the module $S=A/(\varepsilon)\cong k$; and
the displayed augmented sequence of copies of $A$, read with
$A$ on the left for the resolution and with $S$ as a right $A$-module for the
tensor computation.

[F1] An object of $D(A\text{-}\mathrm{Mod})$ is perfect when it is isomorphic
there to a bounded cochain complex of finitely generated projective left
$A$-modules, and a bounded complex of arbitrary modules is not thereby perfect
([[def-perfect-complex-over-a-ring]]).

[F3] AC selects from every family of nonempty sets, and AC implies DC
([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] For a specified projective resolution $P_\bullet\to M$ of the left module
$M$, the left-resolution construction is
$\operatorname{Tor}^{A,P}_n(N,M)=H_n(N\otimes_AP_\bullet)$
([[def-tor-by-resolving-the-left-module]]).

[F5] Under DC, balanced Tor is defined from supplied projective resolutions and
is independent of the supplied resolution up to a canonical identification
([[def-balanced-tor-bifunctor]]).

[F6] The bounded-above derived tensor is a bifunctor on the derived categories,
represented by $\operatorname{Tot}(N\otimes_RP_M)$ for a supplied projective
replacement $P_M\to M$ (equivalently by $\operatorname{Tot}(P_N\otimes_RM)$),
and independent of the supplied replacements up to the canonical comparison
quasi-isomorphisms ([[def-derived-tensor-product-in-the-bounded-above-setting]],
[[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F7] Under DC, with supplied projective resolutions,
$H^{-n}(N[0]\otimes_R^{\mathbf L}M[0])\cong\operatorname{Tor}_n^R(N,M)$
naturally in both variables ([[prop-homology-of-the-derived-tensor-product-is-tor]]).

[F8] The tensor total complex of a complex with a single nonzero row has that
row as its underlying graded object, with the Koszul sign absorbed into the
differential ([[def-tensor-product-total-complex-of-chain-complexes]]).

[F9] The canonical functor $D^-(\mathcal A)\to D(\mathcal A)$ is fully
faithful; thus an isomorphism in $D(\mathcal A)$ between bounded-above
complexes lifts to an isomorphism in $D^-(\mathcal A)$
([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

## Verification

**Proof technique:** direct.

1.1 For $a+b\varepsilon\in A$ one has $\varepsilon(a+b\varepsilon)=a\varepsilon$, so multiplication by $\varepsilon$ has $\ker(\varepsilon\cdot)=(\varepsilon)=\operatorname{im}(\varepsilon\cdot)$: the kernel consists exactly of the multiples of $\varepsilon$, and it equals the image. The quotient augmentation $\pi:A\to S$ is surjective with kernel $(\varepsilon)$, equal to the image of the differential into the degree-zero copy of $A$. Thus the sequence is exact at every copy of $A$ and at $S$, and is a free resolution $Q_\bullet\to S$ with every term $A$ finitely generated free. [construct, algebra]

2.1 Since $A$ is commutative, the resolution of step 1.1 supplies both a left and a right projective resolution of $S$. Applying $S\otimes_A(-)$ to its unaugmented complex $Q_\bullet$ gives a complex with $S\otimes_AA\cong S$ in every nonnegative degree and induced differentials equal to multiplication by $\varepsilon$ on $S$, which is zero because $\varepsilon S=0$; hence its homology is $S\cong k$ in every degree $i\geq0$. By [F4] the specified-resolution Tor is $\operatorname{Tor}^{A,Q}_i(S,S)\cong k$ for every $i\geq0$; under the DC supplied by AC [F3], the balanced bifunctor [F5] identifies this with $\operatorname{Tor}^A_i(S,S)\cong k$, and [F7] then gives $H^{-n}(S[0]\otimes_A^{\mathbf L}S[0])\cong\operatorname{Tor}^A_n(S,S)\cong k$ for every $n\geq0$, in particular $H^{-n}\neq0$ for all $n\geq0$. [F3, F4, F5, F7, step 1.1, algebra]

3.1 Suppose $S[0]$ were perfect; then [F1] supplies a bounded cochain complex $P$ of finitely generated projective left $A$-modules together with an isomorphism $P\cong S[0]$ in $D(A\text{-}\mathrm{Mod})$. Both $P$ and $S[0]$ are bounded above, so [F9] lifts this isomorphism to $D^-(A\text{-}\mathrm{Mod})$. Since the bounded-above derived tensor is a bifunctor in its second variable [F6], the lifted isomorphism gives $S[0]\otimes_A^{\mathbf L}S[0]\cong S[0]\otimes_A^{\mathbf L}P$. The identity $P\xrightarrow{\mathrm{id}}P$ is a quasi-isomorphism from a bounded-above complex of projective modules, so it is a supplied projective replacement as required by [F6]. Thus $S[0]\otimes_A^{\mathbf L}P$ is represented by $\operatorname{Tot}(S[0]\otimes_AP)$, which by [F8] is the bounded complex $S\otimes_AP$: its differential is $1\otimes d_P$ since the first factor is in degree zero, and it vanishes outside the finite support of $P$. Therefore $H^{-n}(S[0]\otimes_A^{\mathbf L}S[0])\cong H^{-n}(S\otimes_AP)=0$ for all sufficiently large $n$, contradicting step 2.1, which gives the nonzero $k$ in every degree $n\geq0$. Hence $S[0]$ is not perfect, and since it is a complex concentrated in degree $0$ with $H^0(S[0])=S\cong k$ finite dimensional over $k$ and all other cohomology zero, this failure of perfectness is not detected by boundedness or by finite-dimensional cohomology. [F1, F6, F8, F9, step 2.1, contradiction, algebra] ∎

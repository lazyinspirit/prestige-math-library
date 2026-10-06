---
id: "def-cotangent-complex-of-a-scheme-morphism"
kind: "definition"
title: "The cotangent complex of a morphism of schemes"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 11
justified_by: []
aliases: []
deps:
  - "def-cotangent-complex-of-a-ring-map"
  - "lem-cotangent-complex-resolution-independence"
  - "def-derived-scheme-and-cotangent-complex"
  - "def-quasi-coherent-module-scheme"
  - "def-morphism-of-schemes"
  - "def-scheme-over-base"
  - "def-affine-scheme"
  - "def-derived-category-of-an-abelian-category"
  - "def-quasi-isomorphism"
  - "def-axiom-of-choice"
  - "def-quasi-compact-and-quasi-separated-scheme"
  - "def-affine-morphism-schemes"
  - "def-diagonal-morphism-scheme"
  - "def-locally-noetherian-and-noetherian-scheme"
  - "def-canonical-truncation-of-a-complex"
  - "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"
  - "thm-affine-quasi-coherent-equivalence"
  - "def-distinguished-triangle"
  - "def-shift-of-a-chain-complex"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "n/a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.18.2 (08SS) and following functoriality construction; Lemma 92.18.3 (08SV), inverse image of the sheaf-ring complex; Lemma 92.20.3 (08T4), ringed-space transitivity; Definition 92.24.1 (08T2), scheme complex; Lemma 92.24.2 (08T3) and proof, affine comparison and QC cohomology; Lemma 92.24.3 (08V6), absolute case; Lemma 92.6.2 (08QQ), derived-pushout base change. Full statements and proofs read 2026-10-05."
    - title: "The Stacks Project, Proposition 36.7.5: the coherator for schemes with affine diagonal"
      url: "https://stacks.math.columbia.edu/tag/08DB"
      locator: "Full statement and proof: X quasi-compact with affine diagonal implies D(QCoh(O_X)) -> D_QCoh(O_X) is an equivalence; comparison criterion Lemma 36.7.4 and proof also read 2026-10-05."
    - title: "The Stacks Project, Proposition 36.8.3: the coherator for Noetherian schemes"
      url: "https://stacks.math.columbia.edu/tag/09T4"
      locator: "Full statement and proof: X Noetherian implies the same equivalence; Lemmas 36.8.1-36.8.2 and their proofs supply injective-QC flasqueness and derived-pushforward comparison. Read 2026-10-05."
---

## Definition

Assume the Axiom of Choice inherited from the ring-map resolution comparison
and affine quasi-coherent equivalence ([[def-axiom-of-choice]],
[[lem-cotangent-complex-resolution-independence]],
[[thm-affine-quasi-coherent-equivalence]]). Let $f\colon X\to S$ be a
morphism of schemes ([[def-morphism-of-schemes]], [[def-scheme-over-base]]).
For affine open subschemes $\operatorname{Spec}B=U\subseteq X$
([[def-affine-scheme]]) and $\operatorname{Spec}A=V\subseteq S$ with
$f(U)\subseteq V$ one has the ring-map cotangent complex $L_{B/A}$
([[def-cotangent-complex-of-a-ring-map]]), a complex of $B$-modules
concentrated in cohomological degrees $\le0$, hence bounded above. The
**cotangent complex** $L_{X/S}$ is the cotangent complex $L_{\mathcal O_X/f^{-1}\mathcal O_S}$ of the morphism of Zariski ringed spaces: resolve the sheaf $\mathcal O_X$ by the standard simplicial polynomial $f^{-1}\mathcal O_S$-algebra resolution, take its relative differentials, and extend coefficients to $\mathcal O_X$. This is Stacks Definition 24.1 (tag 08T2), using its sheaf-ring definition 18.2 (tag 08SS). The affine comparison of Lemma 24.2 (tag 08T3) identifies its restriction to $U$ with the associated sheaf complex of $L_{B/A}$, compatibly with smaller charts. Thus the chart complexes are restrictions of this one global complex; canonical isomorphisms in a derived category alone are not being used as a gluing construction. This also agrees with the discrete case of [[def-derived-scheme-and-cotangent-complex]]. It is well defined up to canonical
isomorphism in the derived category $D(\mathcal O_X)$
([[def-derived-category-of-an-abelian-category]], [[def-quasi-isomorphism]]),
and $L_{X/S}$ is a bounded-above complex of $\mathcal O_X$-modules. The
cohomology sheaves $H^i(L_{X/S})$ are quasi-coherent $\mathcal O_X$-modules,
and $L_{X/S}$ is a quasi-coherent derived $\mathcal O_X$-module
([[def-quasi-coherent-module-scheme]]). If $X$ is quasi-compact
([[def-quasi-compact-and-quasi-separated-scheme]]) with affine diagonal
([[def-diagonal-morphism-scheme]], [[def-affine-morphism-schemes]]), or if $X$ is
Noetherian ([[def-locally-noetherian-and-noetherian-scheme]]), then $L_{X/S}$
is represented by a complex of quasi-coherent sheaves concentrated in degrees
$\le0$, in particular bounded above. Functoriality: a commutative square of schemes
$$\begin{array}{ccc} X' & \xrightarrow{g'} & X \\ \downarrow & & \downarrow f \\ S' & \xrightarrow{g} & S \end{array}$$
gives a canonical comparison map $\mathbf Lg'^*L_{X/S}\to L_{X'/S'}$, which is an
isomorphism when the square is cartesian and tor-independent (for instance
a flat base change). For composable scheme morphisms $X\xrightarrow{f}S\to T$
there is a distinguished transitivity triangle
([[def-distinguished-triangle]], [[def-shift-of-a-chain-complex]])
$$\mathbf Lf^*L_{S/T}\longrightarrow L_{X/T}\longrightarrow L_{X/S}\longrightarrow (\mathbf Lf^*L_{S/T})[1].$$
The absolute case $S=\operatorname{Spec}k$ for a field $k$ is
written $L_{X/k}$.

## Remarks

- **Convention fixed.** The definition is the discrete case of Definition 24.1
  (tag 08T2) of Stacks, *The Cotangent Complex*: the cotangent complex of a
  morphism of ringed spaces, restricted to schemes. Lemma 24.2 (tag 08T3)
  supplies the canonical chart comparison $L_{B/A}\to L_{X/S}|_U$ that is an
  isomorphism in $D(\mathcal O_U)$, compatible with restrictions of the globally defined ringed-space complex. Quasi-coherent cohomology follows from this affine comparison; the additional global representative assertion uses the separate comparison theorems below. The absolute case is Lemma 24.3 (tag 08V6).
- **Choice.** The standing Axiom of Choice is inherited through the
  ring-map resolution comparison and the affine quasi-coherent equivalence: the standard
  resolution is itself constructed without choices, but the comparison of an
  arbitrary simplicial resolution with it uses the derived-tensor and
  resolution-independence suppliers declared in
  [[lem-cotangent-complex-resolution-independence]]. This inheritance is
  carried into every later item that computes with $L_{X/S}$. The representative
  argument also uses the affine equivalence to identify kernels of maps of
  quasi-coherent sheaves with kernels of module maps.
- **Construction route.** The affine ring-map and derived-scheme suppliers now carry their actual comparison statements. The global sheaf-ring standard resolution is applied from the exact cited Stacks definitions; affine derived isomorphisms alone are not treated as effective descent data.

- **Quasi-coherent representatives.** Under either stated hypothesis on $X$, Stacks Proposition 36.7.5 (08DB) or Proposition 36.8.3 (09T4) gives an equivalence $D(\mathrm{QCoh}(\mathcal O_X))\to D_{\mathrm{QCoh}}(\mathcal O_X)$, where the target consists of complexes with quasi-coherent cohomology. Apply it to $L_{X/S}$ to obtain a complex $K^\bullet$ of quasi-coherent sheaves. Since $H^i(K^\bullet)=0$ for $i>0$, the canonical truncation $\tau^{\le0}K^\bullet\to K^\bullet$ is a quasi-isomorphism ([[def-canonical-truncation-of-a-complex]], [[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]). Its degree-zero term is $\ker(d^0)$, which is quasi-coherent: on each affine open, the affine equivalence identifies this kernel with the associated sheaf of the kernel of the corresponding module map ([[thm-affine-quasi-coherent-equivalence]]). This gives the asserted bounded-above representative. The general global construction and quasi-coherent cohomology assertion impose no affine-diagonal or Noetherian hypothesis.
- **Base change and transitivity.** The standard sheaf-ring resolution is functorial in commutative squares of sheaf rings, and inverse image commutes with it (Stacks Section 92.18 and Lemma 92.18.3, 08SV), giving the displayed comparison for every commutative scheme square. For a cartesian square, take affine charts $U=\operatorname{Spec}B\to V=\operatorname{Spec}A$ and $V'=\operatorname{Spec}A'\to V$; their fibre product is $U'=\operatorname{Spec}(B\otimes_AA')$. Tor-independence means $\operatorname{Tor}_i^A(B,A')=0$ for all $i>0$ on such charts. Thus the derived-pushout criterion in [[lem-cotangent-complex-resolution-independence]] (Stacks 08QQ) makes the comparison an isomorphism on these charts, which cover $X'$; an affine-local quasi-isomorphism is a global quasi-isomorphism. Transitivity is Stacks Lemma 92.20.3 (08T4), applied to the underlying ringed spaces, as allowed by Definition 92.24.1 (08T2).

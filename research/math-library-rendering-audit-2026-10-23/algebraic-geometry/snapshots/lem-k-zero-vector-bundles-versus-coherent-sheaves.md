---
id: lem-k-zero-vector-bundles-versus-coherent-sheaves
kind: lemma
title: "Vector-bundle K-theory equals coherent K-theory on regular quasi-projective schemes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - cor-regular-local-residue-field-projective-dimension-dimension
  - thm-ag-standard-smooth-geometric-regularity
  - thm-jacobian-criterion-smooth-morphism
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-embedding-dimension-and-regular-local-ring
  - def-globally-generated-sheaf
  - def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-projective-morphism
  - lem-local-global-dimension-equals-residue-field-projective-dimension
  - lem-very-ample-implies-ample
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
  - thm-serre-criterion-ampleness
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §4 (Lemmas 8-14)"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Section 4, Lemmas 8-14: comparison of the Grothendieck groups of coherent and of locally free sheaves via resolutions"
    - title: "The Stacks Project, Chow Homology and Chern Classes, Appendix B (tag 0AYD)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Appendix 42.69: K_0 and K^0 and the resolution comparison"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
ample/global-generation and regular-local homological suppliers. Let $X$ be a
regular quasi-projective scheme of finite type over a field. Then the natural
map
$$K^0(X)\longrightarrow K_0(X),\qquad [\mathcal E]\longmapsto[\mathcal E]$$
is an isomorphism. Every coherent sheaf has a finite resolution by finite
locally free sheaves, and its class corresponds to the alternating sum of such
a resolution, independent of the resolution. Consequently this identification
applies to every smooth quasi-projective variety used in the Riemann-Roch
theorem of this page. Regularity alone is not asserted to supply a global
vector-bundle resolution on an arbitrary scheme.

## Facts & Assumptions

**Given:** the Axiom of Choice; a regular quasi-projective scheme $X$ of finite type over a field, with $n=\dim X$; a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] $X$ is Noetherian and every coherent $\mathcal O_X$-module is a quasi-coherent sheaf of finite type; kernels, images and cokernels of maps of coherent sheaves are coherent, and $\mathcal O_{X,x}$ is a regular local ring of dimension at most $n$ at every point ([[def-locally-noetherian-and-noetherian-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]], [[cor-regular-local-residue-field-projective-dimension-dimension]], [[def-embedding-dimension-and-regular-local-ring]]).

[F2] Because $X$ is quasi-projective over a field, the restriction $L=\mathcal O(1)|_X$ of the corresponding very ample invertible sheaf is ample ([[def-quasi-projective-morphism]], [[def-ample-invertible-sheaf]], [[lem-very-ample-implies-ample]]). For every coherent $\mathcal F$ there is $\nu_0$ such that $\mathcal F\otimes L^{\otimes\nu}$ is globally generated for all $\nu\ge\nu_0$ ([[thm-serre-criterion-ampleness]], [[def-globally-generated-sheaf]]).

[F3] A finitely generated module over a Noetherian local ring has finite projective dimension at most the dimension of the ring when the ring is regular: the global dimension of a regular local ring equals its dimension ([[lem-local-global-dimension-equals-residue-field-projective-dimension]], [[cor-regular-local-residue-field-projective-dimension-dimension]]). A finitely generated module over a Noetherian ring whose $n$-th syzygy is projective has projective dimension at most $n$ at the corresponding prime ([[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]). A finitely presented module over a local ring is free if and only if it is projective, and a coherent sheaf whose stalks are free is finite locally free ([[def-locally-free-sheaf-finite-rank]]).

[F4] $K_0(X)$ and $K^0(X)$ are the Grothendieck groups of coherent sheaves and of finite locally free sheaves, with the evident generating classes and exact-sequence relations, and the natural comparison map is additive on classes ([[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]).

[F5] A smooth finite type scheme over a field is regular; in particular the smooth quasi-projective varieties of the Riemann-Roch statement fall under the present hypotheses ([[thm-jacobian-criterion-smooth-morphism]], [[thm-ag-standard-smooth-geometric-regularity]]): a smooth chart is standard smooth, hence geometrically regular, and taking the original field shows its local rings are regular.

## Proof

**Proof technique:** direct; produce bounded locally free resolutions using amplitude and the homological dimension bound, compare two resolutions through a common refinement, and derive additivity from a short exact sequence of resolutions.

1.1 Surjections from locally free sheaves. By [F2] there is an integer $\nu$ with $\mathcal F\otimes L^{\otimes\nu}$ globally generated. Since $X$ is quasi-compact (finite type over a field) and quasi-separated, finitely many global sections $s_0,\dots,s_r$ generate $\mathcal F\otimes L^{\otimes\nu}$: the cokernel of the map $\bigoplus_{i=0}^r\mathcal O_X\to\mathcal F\otimes L^{\otimes\nu}$ defined by the $s_i$ vanishes on a neighbourhood of each point for a suitable finite selection, and finitely many such neighbourhoods cover $X$. Untwisting by $L^{-\nu}$ gives a surjection $E_0:=\bigoplus_{i=0}^rL^{-\nu}\twoheadrightarrow\mathcal F$ from a finite locally free sheaf. [F2, given, algebra]

2.1 Bounded locally free resolutions. Define coherent subsheaves $K_0=\mathcal F$ and $K_{i+1}=\ker(E_i\to K_i)$ for the surjections produced by step 1.1, so that $0\to K_{i+1}\to E_i\to K_i\to0$ is exact with $E_i$ finite locally free; all $K_i$ are coherent by [F1]. At a point $x$, the local ring $R=\mathcal O_{X,x}$ is regular of dimension at most $n$ by [F1], so $R$ has global dimension at most $n$ by [F3]; hence the $n$-th syzygy of the stalk $\mathcal F_x$ is projective over $R$, and therefore free, because a finitely generated projective module over a local ring is free by [F3]. Since this holds at every point, $K_n$ is a coherent sheaf with free stalks, hence finite locally free by [F3]. Thus $\mathcal F$ admits the finite locally free resolution $0\to K_n\to E_{n-1}\to\cdots\to E_0\to\mathcal F\to0$. [F1, F3, step 1.1, algebra]

3.1 Independence of the resolution. Let $E_\bullet,F_\bullet$ be bounded locally free resolutions of the same coherent sheaf $H$. Choose $N$ at least their lengths and $n$, padding by zero terms. Construct a resolution $G_\bullet$ with degreewise surjective maps to both. Start with $K_0(G)=K_0(E)=K_0(F)=H$. If $K_i(G)$ surjects onto $K_i(E),K_i(F)$, form the coherent sheaf $P_i=(E_i\times_{K_i(E)}K_i(G))\times_{K_i(G)}(F_i\times_{K_i(F)}K_i(G))$. Its projections onto $E_i,F_i,K_i(G)$ are surjective by local lifting through the given surjections. Cover $P_i$ by a finite locally free $G_i$ using step 1.1. Taking augmentation kernels gives surjections $K_{i+1}(G)\to K_{i+1}(E),K_{i+1}(F)$ by the kernel calculation in a diagram of short exact sequences. At degree $N$ use $G_N=K_N(G)$, locally free by the dimension bound in step 2.1, mapping onto the terminal syzygies $E_N,F_N$. The kernel complexes of $G_\bullet\to E_\bullet,F_\bullet$ are bounded acyclic complexes of locally free sheaves: degreewise surjections between locally free sheaves split locally. Such a complex has zero alternating class, because starting at its lowest degree its successive cycle sheaves are locally free and the resulting short exact sequences telescope. The alternating classes of $E_\bullet,F_\bullet,G_\bullet$ therefore agree. [F4, step 1.1, step 2.1, algebra]

4.1 Additivity. Given $0\to H'\to H\to H''\to0$, construct compatible resolutions term by term. Put $K_0'=H'$, $K_0=H$, $K_0''=H''$. Suppose $0\to K_i'\to K_i\to K_i''\to0$ is exact. Choose locally free covers $C_i\to K_i''$ and $A_i\to K_i\times_{K_i''}C_i$ by step 1.1. The composite $A_i\to C_i$ surjects, so its kernel $B_i$ is locally free; the induced $B_i\to K_i'$ also surjects, by local lifting. Taking the kernels of the three augmentations yields $0\to K_{i+1}'\to K_{i+1}\to K_{i+1}''\to0$. After $n$ stages all three syzygies are locally free by the dimension bound; take them as terminal terms. This produces a short exact sequence of bounded locally free resolutions of $H',H,H''$. Alternating classes add term by term, and independence in step 3.1 gives additivity for every choice of resolutions. [F1, F4, step 1.1, step 3.1, algebra]

5.1 The comparison isomorphism. Both maps are well defined and additive: the natural map $K^0(X)\to K_0(X)$ sends the class of a finite locally free sheaf to its class in $K_0(X)$ and respects the exact-sequence relations of [F4], while the assignment sending the class of a coherent sheaf $H$ to the alternating class of any bounded locally free resolution of $H$ is well defined by step 3.1 and additive by step 4.1, hence descends to a homomorphism $K_0(X)\to K^0(X)$. The composite $K^0(X)\to K_0(X)\to K^0(X)$ is the identity because a finite locally free sheaf is its own length-zero resolution, and the composite $K_0(X)\to K^0(X)\to K_0(X)$ is the identity because the alternating class of a resolution of $H$ maps to $[H]$ in $K_0(X)$ by the telescoping exact-sequence relations. Therefore the natural map is an isomorphism, and in particular it applies to every smooth quasi-projective variety over a field, which is regular and quasi-projective by [F5]. [F4, F5, step 3.1, step 4.1] ∎ 
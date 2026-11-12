---
id: lem-author-e216acade157-split-determinant-fiber
kind: lemma
title: The actual determinant fiber is a natural retract of the rank-zero K-space
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-rank-zero-stage
  - prop-motivic-weight-one
  - def-motivic-filtration
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  def-motivic-filtration: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-rank-zero-stage
  - prop-motivic-weight-one
  - def-motivic-filtration
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-rank-zero-stage
  - prop-motivic-weight-one
  - def-motivic-filtration
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
---

## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. On the Nisnevich site of qcqs schemes over a field, put $S=\Omega^\infty\operatorname{Fil}^1K$, $B=\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$ and $T=\Omega^\infty\operatorname{Fil}^2K$. The actual first projection $d:S\to B$ is determinant. Its actual pointed section $\kappa:B\to S$ sends a line to $[L]-1$. There is a natural equivalence of spaces over $B$, $T\times B\simeq S$, with map $(t,b)\mapsto i(t)+\kappa(b)$, and consequently a pointed retraction $r:S\to T$ of $i:T\to S$. On underlying K-classes, $r(s)=s-\kappa(d(s))$. For every qcqs $Y$, both $\pi_0T(Y)\to\pi_0S(Y)$ and $\pi_0S(Y)\to K_0(Y)$ are injective. The space $T$ is the actual homotopy fiber, retaining determinant-trivialization data.

## Facts & Assumptions

[A1] Assume [[math:def-axiom-of-choice]] and the fixed compatible nested universes and bounded sites required by the suppliers below; universe existence is a separate size assumption. Choice is retained for the actual perfect K-theory, determinant, motivic comparison and spectral realizations in steps 1.1 and 2.1. All objects, restriction diagrams and homotopies use these same bounds.

[F1] [[lem-author-ec13f1db88a5-global-picard-projection]] identifies the actual first graded projection with determinant as a pointed stack map. [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the natural pointed lift $a$ of $L\mapsto1-[L]$ and the actual weight-one comparison with the whole line-bundle stack. Put $\kappa=-a$. [[prop-motivic-weight-one]] gives the same comparison on arbitrary-field qcqs schemes by restriction from the prime field. These inputs supply the map $\kappa$, while its pointed section homotopy is established in step 1.1.

[F2] [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies the extended graded determinant with its enhanced cofiber and pullback coherence, its actual rank-zero stack map, and its frame-torsor interpretation on bundles and their morphisms. It also specifies the bounded big Nisnevich site: qcqs schemes and scheme morphisms, with étale covering families admitting residue-field-preserving lifts of every point. Quasi-compact means every open cover has a finite subcover; quasi-separated means intersections of two affine opens are quasi-compact. A perfect complex is locally equivalent to a bounded complex of finite locally free sheaves. The stack $B\mathbb G_m$ consists of line bundles and their isomorphisms, pointed by $\mathcal O$, rather than only their isomorphism classes. Tensor product is its addition. The determinant of the line-class functor, on objects and line isomorphisms, is the line functor itself.

[F3] [[def-motivic-filtration]] supplies the actual functorial tower and its augmentation to perfect K-theory. [[def-decreasing-filtered-spectrum]] defines $\operatorname{gr}^1K=\operatorname{cofib}(\operatorname{Fil}^2K\to\operatorname{Fil}^1K)$ with its cofiber projection. [[def-stable-spectra-interface]] supplies the stable pullback-pushout identification and the coherent meaning of fibers and cofibers. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]] supplies the pointed adjunction $\Sigma^\infty\dashv\Omega^\infty$ and the coherent loop-tower description. In particular the zeroth space is naturally a loop space with coherent multiplication, unit and reversal, and iterating the tower makes this addition homotopy commutative. Spectrum maps preserve these operations. These are the addition and subtraction used below, transported to $B\mathbb G_m$ by [F1].

[F4] [[lem-author-ec13f1db88a5-rank-zero-stage]] identifies $S$ with the actual rank-zero fiber over the discrete sheaf of locally constant integers, and gives the natural injection $\pi_0S(Y)\to K_0(Y)$ for every qcqs field-scheme $Y$. Here $K_0(Y)=\pi_0K(Y)$ is perfect-complex K-theory; $[L]$ is the class of a line bundle and $1=[\mathcal O_Y]$.

## Proof
**Given:** The actual tower and pointed maps of [F1]–[F4], with Choice and the compatible size bounds of [A1].

**Goal:** Construct the natural pointed splitting, including its determinant-trivialization paths, and prove the two injections.

1.1 The square defining the cofiber in [F3] is also a pullback, so $\operatorname{Fil}^2K\to\operatorname{Fil}^1K\to\operatorname{gr}^1K$ is a spectral fiber sequence, with its specified nullhomotopy. The right adjoint $\Omega^\infty$ preserves that pullback: mapping any pointed test space into its image gives, by the adjunction, the same mapping-space limit universal property. Apply this at each qcqs $Y$ to obtain $T(Y)\simeq S(Y)\times_{B(Y)}\{0\}$, naturally under every restriction; thus $T$ is the actual fiber with its path data. Under [F1], the augmentation of $\kappa$ is the pointed line-class map $L\mapsto[L]-[\mathcal O]$, on line bundles and their isomorphisms. By [F2], its determinant is naturally $L\otimes\mathcal O^{-1}\cong L$. On a line isomorphism $f:L\to M$ this identification sends the determinant morphism to $f$, because the top exterior power of a line and of its morphism is that same line and morphism, and the constant trivial-line term has identity morphism. The pullback and unit comparisons of [F2] make these identifications a natural isomorphism of line-bundle groupoid functors. At the trivial line use the unit identification $\mathcal O\otimes\mathcal O^{-1}\cong\mathcal O$, compatible with the pointing of the line-class map. Taking nerves and composing with the pointed lifting homotopy of [F1] therefore gives a homotopy $h:d\kappa\simeq\mathrm{id}_B$ in pointed maps, including its basepoint coherence. This establishes the section homotopy rather than inferring it from equality of Picard classes. [A1, F1, F2, F3, F4]

2.1 Define $\Phi(t,b)=i(t)+\kappa(b)$. The fiber path for $t$ and $h(b)$ identify its image under $d$ with $b$, so $\Phi$ is a map over $B$. Its inverse sends $s$ to $(r(s),d(s))$, where the underlying point of $r(s)$ is $s-\kappa(d(s))$ and its fiber path is $d(s)-d\kappa(d(s))\xrightarrow{h(d(s))}d(s)-d(s)\simeq0$. Addition and inverse here are the coherent loop operations of [F3]. On the fiber over any $b$, these two maps are translation by $\kappa(b)$ and its inverse, with the paths transported using the same $h(b)$; associativity, inverse cancellation and the unit homotopies identify their two composites with the identities, including the fiber paths. Thus they give $T\times B\simeq S$ over $B$, naturally on all restrictions. At $b=0$, the pointing of $\kappa$ and the pointed coherence of $h$ identify this translation and its fiber path with the identity of $T$; hence $ri\simeq\mathrm{id}_T$ as pointed maps. Passing to underlying K-classes gives the asserted subtraction formula. Evaluating this retraction at any qcqs $Y$ and taking components proves that $\pi_0T(Y)\to\pi_0S(Y)$ is injective. The second injection is exactly [F4]. Evaluation of $h$ also splits $\pi_1S(Y)\to\pi_1B(Y)$, as expected, but no additional exactness theorem is needed for these injections. No additivity of $\kappa$ or $r$, global bundle presentation of perfect classes, or preservation of a fiber by a plus map is used. [A1, F1, F2, F3, F4, step 1.1] ∎

---
id: lem-h2-classifying-map-is-surjective
kind: lemma
title: "Classifying maps are surjective on second homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-classifying-space-of-a-discrete-group-is-a-k-g-one
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-homological-serre-spectral-sequence
  - thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-diagonal-bar-coinvariants-compute-group-homology
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John McCleary, Nontrivial fundamental groups, §8bis.2"
      url: "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
      locator: "Theorem 8bis.10 and the following Hopf exact sequence, printed pp. 338–339 (PDF pp. 10–11)"
    - title: "Kenneth S. Brown, Lectures on the Cohomology of Groups"
      url: "https://pi.math.cornell.edu/~kbrown/papers/cohomology_hangzhou.pdf"
      locator: "Section 1, printed pp. 4–5 and 7: universal-cover cellular resolution (1.3), resolution comparison, Definition 1.4 and the following topological identification"
---

## Statement

Assume AC. Let $X$ be a path-connected CW complex and let $G=\pi_1(X,x_0)$.
For any based classifying map $c:X\to BG$ inducing the identity on fundamental
groups, the induced homomorphism
$$c_*:H_2(X;\mathbb Z)\longrightarrow H_2(BG;\mathbb Z)=H_2(G;\mathbb Z)$$
is surjective.

## Statement references

[McCleary, §8bis.2](https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf)

## Facts & Assumptions

**Given:** Full AC, a path-connected CW complex $X$, a basepoint $x_0$, and
$G=\pi_1(X,x_0)$, and an arbitrary prescribed based classifying map $c:X\to BG$ inducing the identity on $\pi_1$.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[L1] Full AC implies DC: apply AC to the family of nonempty successor sets of a serial relation, choose an initial element, and iterate the resulting choice function. [[def-dependent-choice]]

[F1] Under AC, $BG$ is a connected CW model with $\pi_1(BG)\cong G$ and
$\pi_k(BG)=0$ for $k>1$. [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]]

[F2] The long exact sequence of a Serre fibration computes the homotopy groups
of its fiber. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] The homological Serre spectral sequence gives the exact five-term sequence
for the homology of a fibration. [[thm-homological-serre-spectral-sequence]],
[[thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence]]

[F4] A simply connected path-connected space has zero first homology by the
degree-one Hurewicz theorem. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F5] Under AC there is a connected CW model $K(G,1)$. Under DC with supplied projective-resolution data, derived group homology is naturally identified with algebraic bar homology. [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]], [[lem-diagonal-bar-coinvariants-compute-group-homology]], [[def-dependent-choice]]

[F6] External input: for a connected CW $K(G,1)$, its universal cover $T$ is a contractible free $G$-CW complex. Its augmented cellular chains $C_*^{\mathrm{cell}}(T)\to\mathbb Z$ form a free left $\mathbb ZG$-resolution, and their coinvariants are the cellular chains of the base. Brown, §1, printed pp. 4–5 and 7, gives this construction and the resulting identification of derived group homology with the singular homology of the base. Only that comparison is imported here. [Brown, §1](https://pi.math.cornell.edu/~kbrown/papers/cohomology_hangzhou.pdf)

## Proof

**Given:** The data above and [A1].

1.1 Fix the arbitrary map $c$ in the statement, rather than selecting a special classifying map. By [F1], its target is a connected CW $K(G,1)$, so $\pi_2(BG)=0$ and $\pi_1(c)$ is an isomorphism. For the derived-homology comparison in [F5], supply resolutions explicitly: over $\mathbb ZG$, take the free module on the underlying set of a module $M$, map its basis element $[m]$ to $m$, and repeat the same free-module construction on each successive kernel. The augmentations are onto and each image is the preceding kernel, so this is an exact free, hence projective, resolution for every $M$. This specified construction supplies the resolution convention; [A1] and [L1] supply DC. [A1, L1, F1, F5, given, construct]

2.1 Apply the external comparison [F6] to this CW model $BG$. With $T$ its universal cover, put $P_*=C_*^{\mathrm{cell}}(T)$. Choosing an oriented lift of each cell, permitted by AC, exhibits $P_*$ as free over $\mathbb ZG$. Contractibility makes its augmentation exact. Thus $P_*$ is a supplied resolution of the trivial left module; its comparison with the resolution in step 1.1 identifies the same derived group homology. Projection to $BG$ identifies $\mathbb Z\otimes_{\mathbb ZG}P_*$ with $C_*^{\mathrm{cell}}(BG)$, including their differentials. Taking homology, and using cellular-to-singular homology comparison as in [F6], gives $H_n(G;\mathbb Z)\cong H_n(BG;\mathbb Z)$. [A1, L1, F1, F5, F6, step 1.1, construct, algebra]

2.2 Replace this prescribed $c$ by its mapping-path Serre fibration $p:E\to BG$, with $E\simeq X$ and $p$ corresponding to $c$. In [F2], the action on fiber components is transitive because $E$ is connected, and the component of the based fiber point has stabilizer all of $\pi_1(BG)$ because $\pi_1(c)$ is onto. Thus the fiber $F$ is path-connected. Since $\pi_2(BG)=0$ and $\pi_1(c)$ is injective, the same exact sequence gives $\pi_1(F)=1$. Hence $H_1(F;\mathbb Z)=0$ by [F4]. [F1, F2, F4, step 1.1, algebra]

3.1 Apply [F3] to $F\to E\to BG$. Since $F$ is path-connected, its $H_0$ local system is canonically the constant system $\mathbb Z$. The five-term sequence therefore has consecutive terms $$H_2(E;\mathbb Z)\longrightarrow H_2(BG;\mathbb Z) \longrightarrow H_0(BG;\mathcal H_1(F;\mathbb Z)).$$ The last group is zero by step 2.2. Exactness makes the first map, the edge homomorphism $p_*$, surjective. Under $E\simeq X$ this map is $c_*$, and step 2.1 identifies its target with $H_2(G;\mathbb Z)$, proving the assertion. [F3, step 2.1, step 2.2, algebra] ∎


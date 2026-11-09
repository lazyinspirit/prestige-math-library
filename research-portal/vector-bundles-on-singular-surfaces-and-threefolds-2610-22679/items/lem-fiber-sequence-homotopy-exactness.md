---
id: lem-fiber-sequence-homotopy-exactness
kind: lemma
title: Homotopy exactness of a spectral fiber sequence
status: published
domain: mathematics
deps:
  - def-stable-spectra-interface
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
proof_strategy: direct-proof
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement
For a fiber sequence $A\to B\to C$ of spectra there is a natural exact sequence of abelian groups

$$\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots.$$

If $\pi_iC=0$, then $\pi_iA\to\pi_iB$ is surjective; if also $\pi_{i+1}C=0$, it is an isomorphism. Exactness is asserted for these homotopy groups themselves, before taking images in another spectrum.

A fiber sequence here consists of maps $A\to B\to C$, a specified nullhomotopy of their composite, and an identification of $A$ with the homotopy pullback $B\times_C0$. For a spectrum $E$ and an integer $i$, $\pi_iE$ is the group of components of the mapping space from the $i$-fold suspension of the sphere spectrum to $E$. Exactness means that the image of each displayed homomorphism equals the kernel of the next.

## Facts & Assumptions

**Given:** A fiber sequence $A\to B\to C$ of spectra and an integer $i$.

**Goal:** Construct the natural long exact sequence and prove the stated consequences.

[F1] In the stable spectra interface, mapping spaces represent coherent maps and carry limits in the target to homotopy limits of spaces. Fiber sequences extend to cofiber triangles; pushout and pullback squares agree, and suspension is an equivalence with inverse desuspension. The groups are $\pi_iE=\pi_0\operatorname{Map}(\mathbb S[i],E)$, are abelian, and satisfy $\pi_i(E[1])\cong\pi_{i-1}E$ naturally. [[def-stable-spectra-interface]]

## Proof

**Proof technique:** Apply mapping spaces to rotated fiber squares and examine components of their homotopy fibers.

1.1 For any spectrum $T$, apply $\operatorname{Map}(T,-)$ to the defining pullback square for $A$. By its universal property, $\operatorname{Map}(T,A)$ is the homotopy fiber of $\operatorname{Map}(T,B)\to\operatorname{Map}(T,C)$ over the zero map. A point in this fiber is a map $T\to B$ together with a path from its composite with $B\to C$ to zero. Thus a component of $\operatorname{Map}(T,B)$ has zero image in $\pi_0\operatorname{Map}(T,C)$ exactly when it has a representative admitting such a path, equivalently when it lies in the image of $\pi_0\operatorname{Map}(T,A)$. This proves exactness at $\pi_0\operatorname{Map}(T,B)$. [F1, given]

2.1 The defining pullback square is also a pushout, so its cofiber triangle is $A\to B\to C\to A[1]$. The square exhibiting $C$ as the cofiber of $A\to B$ is also a pullback; hence $B\to C\to A[1]$ is a fiber sequence with the induced nullhomotopy. Repeating this rotation and applying inverse suspension produces a bi-infinite sequence of fiber sequences. Applying step 1.1 to each one gives exactness at every term of the resulting sequence of mapping-space component groups. [F1, step 1.1]

3.1 Take $T=\mathbb S[i]$. The first rotated terms are $\pi_iA\to\pi_iB\to\pi_iC\to\pi_i(A[1])$, and the natural suspension identification identifies the last group with $\pi_{i-1}A$. Applying the same identification to the other rotations gives the displayed long sequence. The connecting maps are induced by the cofiber-triangle maps, with these suspension identifications. The construction is natural for maps of fiber sequences, including their specified coherences, because it uses the universal properties of the fiber and cofiber squares. The displayed maps are homomorphisms under the abelian group structures of [F1]. [F1, step 2.1]

4.1 Exactness at $\pi_iB$ makes $\pi_iA\to\pi_iB$ surjective when $\pi_iC=0$. Exactness at $\pi_iA$ makes its kernel the image of $\pi_{i+1}C$, so it is also injective when that group vanishes. Hence it is an isomorphism in the latter case. These deductions concern the groups in the fiber sequence; no preservation of exactness after taking images in a further group is asserted. [step 3.1] ∎

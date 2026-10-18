---
id: thm-it-quantum-relative-entropy-channel-data-processing
kind: theorem
title: Channel data processing for finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [thm-it-quantum-relative-entropy-partial-trace-data-processing, lem-it-quantum-relative-entropy-isometric-invariance, def-qc-quantum-channel, def-qc-kraus-representation, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-qc-partial-trace, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 5.35"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, Theorem 11.8.1 and §12.5"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces, let $\Phi:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel ([[def-qc-quantum-channel]]), and let $A,B$ be non-negative operators on $H$. Then

$$D(\Phi(A)\|\Phi(B))\le D(A\|B).$$

## Facts & Assumptions

**Given:** The spaces, channel and non-negative operators in the Statement.

[F1] [[thm-qc-kraus-choi-equivalence]]: a finite-dimensional completely positive map has a finite Kraus representation.

[F2] [[def-qc-kraus-representation]]: a Kraus representation has the form $\Phi(X)=\sum_jK_jXK_j^*$ on the full operator space.

[F3] [[thm-qc-trace-preserving-kraus-normalization]]: trace preservation is equivalent to $\sum_jK_j^*K_j=I_H$.

[F4] [[thm-it-quantum-relative-entropy-partial-trace-data-processing]]: partial trace over a nonzero finite factor does not increase QRE.

[F5] [[lem-it-quantum-relative-entropy-isometric-invariance]]: simultaneous isometric conjugation preserves QRE.

[F6] [[def-qc-partial-trace]]: partial trace over the environment removes the matching diagonal Kraus blocks and retains the output operator.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Kx,Ky\rangle=\langle x,K^*Ky\rangle$ under the repository's inner-product convention.

[F8] [[def-qc-register-and-computational-basis]]: the standard register $E=\mathbb C^r$ has the specified ordered orthonormal basis $(f_j)$.

## Proof

1.1 By [F1]–[F2], choose a finite Kraus family $(K_j)_{j<r}$ for $\Phi$. Since $H\ne\{0\}$ and [F3] gives $\sum_jK_j^*K_j=I_H$, the family is nonempty. Let $E=\mathbb C^r$ with the ordered orthonormal basis $(f_j)$ from [F8], and define $V:H\to K\otimes E$ by $Vx:=\sum_{j<r}K_jx\otimes f_j$. For $x,y\in H$, orthonormality and [F3], [F7] give $\langle Vx,Vy\rangle=\sum_j\langle K_jx,K_jy\rangle=\langle x, (\sum_jK_j^*K_j)y\rangle=\langle x,y\rangle$; hence $V^*V=I_H$. [given, F1, F2, F3, F7, F8, construct]

2.1 Expanding in the environment basis [F8] gives $VXV^*=\sum_{j,k}K_jXK_k^*\otimes M_{jk}$, where $M_{jk}z=\langle z,f_k\rangle f_j$. The partial-trace formula [F6] keeps exactly the terms $j=k$, so $\operatorname{Tr}_E(VXV^*)=\sum_jK_jXK_j^*=\Phi(X)$ for every $X$. [given, F2, F6, F8, step 1.1, algebra]

3.1 Apply isometric invariance [F5] and then partial-trace data processing [F4] to the pair $(VAV^*,VBV^*)$ on $K\otimes E$. By step 2.1, $D(\Phi(A)\|\Phi(B))=D(\operatorname{Tr}_E(VAV^*)\|\operatorname{Tr}_E(VBV^*))\le D(VAV^*\|VBV^*)=D(A\|B)$. [given, F4, F5, step 2.1, algebra] ∎

## Remarks

The finite Stinespring dilation used in the proof is summarized by the following map diagram. It records the factor that is discarded by the partial trace; the proof relies on the Kraus and trace calculations above, not on the diagram.

```tikzcd
\mathcal L(H) \arrow[r,"X\mapsto VXV^*"] \arrow[rr,bend right=18,"\\Phi"'] & \mathcal L(K\otimes E) \arrow[r,"\\operatorname{Tr}_E"] & \mathcal L(K)
```


---
id: lem-arith-mumford-map-degree-is-euler-characteristic-square
kind: lemma
title: "The square degree of a Mumford map"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-abelian-variety-is-projective
  - thm-differentials-smooth-locally-free
  - def-abelian-variety-over-a-field
  - def-polarization-of-an-abelian-variety
  - lem-arith-dual-isogeny-kernel-and-abelian-biduality
  - lem-arith-poincare-cohomology-at-the-identity
  - lem-euler-characteristic-additive-short-exact
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-cohomology-and-base-change
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - cor-kunneth-over-a-field
  - thm-cup-product-graded-associative-natural
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 9.1-9.12 (Riemann-Roch and the square degree of a polarization)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "D. Mumford, Abelian Varieties (1970), III.13 and IV.2 (Fourier-Mukai and square degrees)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety of dimension $g$ over a field $k$ and let $\mathcal L$ be a nondegenerate invertible sheaf on $A$, that is, $K(\mathcal L)=\ker\varphi_{\mathcal L}$ is finite. Then
$$\deg\varphi_{\mathcal L}=\chi(A,\mathcal L)^2,$$
where $\deg\varphi_{\mathcal L}$ is the finite locally free rank of the isogeny $\varphi_{\mathcal L}$; the identity retains characteristic-dividing degrees and the full nonreduced scheme length of $K(\mathcal L)$. Consequently the degree of every polarization of $A$ ([[def-polarization-of-an-abelian-variety]]) is a perfect square.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ of dimension $g$ over a field $k$, a nondegenerate invertible sheaf $\mathcal L$ on $A$, and the Mumford map $\varphi_{\mathcal L}:A\to A^\vee$.

[F1] For the normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$ one has $R^ip_{2,*}\mathcal P=0$ for $i\ne g$ and $R^gp_{2,*}\mathcal P=k(0)$, the length-one skyscraper at the origin ([[lem-arith-poincare-cohomology-at-the-identity]]).

[F2] Nondegenerate $\mathcal L$ gives a finite flat isogeny $\varphi_{\mathcal L}:A\to A^\vee$ with $\deg\varphi_{\mathcal L}=\dim_k\mathcal O(K(\mathcal L))$, and $(\operatorname{id}\times\varphi_{\mathcal L})^*\mathcal P\cong\Lambda(\mathcal L)=m^*\mathcal L\otimes p_1^*\mathcal L^{-1}\otimes p_2^*\mathcal L^{-1}\otimes\pi^*e^*\mathcal L$ on $A\times_kA$ ([[def-polarization-of-an-abelian-variety]], [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F3] Cohomology of coherent sheaves on $A$ and on $A\times_kA$ is computed by Cech complexes, satisfies Kunneth over a field, vanishes above the dimension, and carries the Leray spectral sequence; Euler characteristics are additive in short exact sequences and multiplicative for external tensor products ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[cor-kunneth-over-a-field]], [[thm-noetherian-topological-space-dimension-vanishing]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[lem-euler-characteristic-additive-short-exact]], [[thm-cup-product-graded-associative-natural]]).

[F4] Flat base change for the proper flat family $A\times A^\vee\to A^\vee$ is supplied by the exact nonnegative universal cohomology complex: tensoring its kernel and cokernel descriptions by a flat base-change ring commutes with cohomology, and the natural comparisons are the geometric base-change maps ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-cohomology-and-base-change]]).

[F5] The abelian variety $A$ is projective by [[thm-abelian-variety-is-projective]]. Translation trivializes its cotangent bundle: a basis at the identity extends by translation to a basis everywhere, and taking its top exterior power trivializes the canonical bundle ([[thm-differentials-smooth-locally-free]]). Serre duality on this smooth projective variety gives $\chi(A,\mathcal L^{-1})=(-1)^g\chi(A,\mathcal L)$ and $h^i(A,\mathcal L)=h^{g-i}(A,\mathcal L^{-1}\otimes\omega_A)$; the canonical bundle of $A$ is trivial ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[def-abelian-variety-over-a-field]]).

## Proof

**Proof technique:** direct: pull back the Poincare cohomology theorem along the finite flat isogeny $\varphi_{\mathcal L}$, compute $\chi(\Lambda(\mathcal L))$ twice, and deduce the square-degree formula and its invariance under field extension.

1.1 Consider the Cartesian square with $\varphi=\varphi_{\mathcal L}$, the morphism $(\operatorname{id}\times\varphi):A\times_kA\to A\times_kA^\vee$, and projections $p_2:A\times_kA\to A$ and $p_2:A\times_kA^\vee\to A^\vee$. By flat base change [F4] applied to [F1] we have $Rp_{2,*}((\operatorname{id}\times\varphi)^*\mathcal P)\cong\varphi^*(Rp_{2,*}\mathcal P)\cong\varphi^*(k(0)[-g])\cong\mathcal O_{K(\mathcal L)}[-g]$, where $\varphi^{-1}(0)=K(\mathcal L)$ is finite of length $\deg\varphi$ by [F2]. Since $(\operatorname{id}\times\varphi)^*\mathcal P\cong\Lambda(\mathcal L)$ by [F2], the direct images of $\Lambda(\mathcal L)$ under $p_2$ vanish except in degree $g$, where they equal $\mathcal O_{K(\mathcal L)}$. [F1, F2, F4, construct]

2.1 The Leray spectral sequence of $p_2$ for $\Lambda(\mathcal L)$ has only the $q=g$ row, supported on the finite scheme $K(\mathcal L)$; hence $H^n(A\times_kA,\Lambda(\mathcal L))\cong H^{n-g}(K(\mathcal L),\mathcal O_{K(\mathcal L)})$, which is $k^{\deg\varphi}$ for $n=g$ and zero otherwise. Therefore $\chi(A\times_kA,\Lambda(\mathcal L))=(-1)^g\deg\varphi_{\mathcal L}$, with the full scheme length, including any characteristic-dividing part. [F2, F3, step 1.1, algebra]

2.2 We compute the same Euler characteristic by an automorphism. Let $\sigma=(m,p_1):A\times_kA\to A\times_kA$ be the automorphism $(x,y)\mapsto(x+y,x)$, with inverse $(x,y)\mapsto(y,x-y)$. Then $\Lambda(\mathcal L)\otimes p_2^*\mathcal L=\sigma^*(\mathcal L\boxtimes\mathcal L^{-1})\otimes\pi^*e^*\mathcal L$, where $\mathcal L\boxtimes\mathcal L^{-1}=p_1^*\mathcal L\otimes p_2^*\mathcal L^{-1}$ and $\pi^*e^*\mathcal L$ is the constant pullback of a line bundle from the base field; this is immediate from $\sigma^*(p_1^*\mathcal L\otimes p_2^*\mathcal L^{-1})=m^*\mathcal L\otimes p_1^*\mathcal L^{-1}$. Because $Rp_{2,*}\Lambda(\mathcal L)=\mathcal O_{K(\mathcal L)}[-g]$ is supported on the finite scheme $K(\mathcal L)$ [step 1.1], tensoring by the base-pulled line bundle $p_2^*\mathcal L$ does not change the Euler characteristic: it tensors the finite-length cohomology by the rank-one bundle $\mathcal L|_{K(\mathcal L)}$, preserving all lengths. Hence $\chi(\Lambda(\mathcal L)\otimes p_2^*\mathcal L)=\chi(\Lambda(\mathcal L))$. [F2, F3, step 1.1, algebra]

3.1 Since $\sigma$ is an automorphism and $\pi^*e^*\mathcal L$ is pulled back from the base, $\chi(\sigma^*(\mathcal L\boxtimes\mathcal L^{-1})\otimes\pi^*e^*\mathcal L)=\chi(\mathcal L\boxtimes\mathcal L^{-1})$, and by Kunneth multiplicativity for external tensor products [F3] this is $\chi(A,\mathcal L)\chi(A,\mathcal L^{-1})=(-1)^g\chi(A,\mathcal L)^2$, the last equality by Serre duality [F5]. Combining with steps 2.1 and 2.2 gives $(-1)^g\deg\varphi_{\mathcal L}=(-1)^g\chi(A,\mathcal L)^2$, hence $\deg\varphi_{\mathcal L}=\chi(A,\mathcal L)^2$. [F3, F5, step 2.1, step 2.2, algebra]

4.1 Finally let $\lambda:A\to A^\vee$ be a polarization. By definition $\lambda_{\bar k}=\varphi_{\mathcal L}$ for an ample invertible sheaf $\mathcal L$ on $A_{\bar k}$, and $\varphi_{\mathcal L}$ is an isogeny with $\deg\varphi_{\mathcal L}=\chi(A_{\bar k},\mathcal L)^2$ by step 3.1. Degree and Euler characteristic are unchanged by field extension (the degree is the rank of a finite locally free morphism, and coherent cohomology is compatible with flat field base change [F4]), so $\deg\lambda=\chi(A_{\bar k},\mathcal L)^2$ is a perfect square in $\mathbb Z$. [F2, F4, step 3.1, algebra] ∎


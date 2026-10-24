---
id: lem-arith-symmetric-homomorphism-is-a-mumford-map
kind: lemma
title: "Symmetric homomorphisms are Mumford maps"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - def-polarization-of-an-abelian-variety
  - lem-arith-dual-isogeny-kernel-and-abelian-biduality
  - lem-arith-theta-extension-splitting-and-isotropic-descent
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-arith-picard-representation-by-generic-quotient-and-translates
  - lem-nonempty-smooth-scheme-finite-separable-point
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-cohomology-and-base-change
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - lem-nonaffine-finite-field-descent-scheme-with-affine-orbits
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 11.1-11.2 (symmetric homomorphisms are Mumford maps over a finite separable extension)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 8.1 (rigidified Picard functor)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$, and let $\lambda:A\to A^\vee$ be a symmetric homomorphism, that is, $\lambda=\lambda^\vee\circ\kappa_A$ under the canonical biduality identification ([[lem-arith-dual-isogeny-kernel-and-abelian-biduality]], [[def-polarization-of-an-abelian-variety]]). Then there is a finite separable field extension $k'\supset k$ and an invertible sheaf $\mathcal L$ on $A_{k'}$ with $\lambda_{k'}=\varphi_{\mathcal L}$. In particular the conclusion holds over every separably closed field, including fields of characteristic two.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ over a field $k$ and a symmetric homomorphism $\lambda:A\to A^\vee$.

[F1] Dual isogenies, their Cartier-dual kernels, degrees and the canonical biduality $\kappa_A$ are constructed in [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]; the Poincare bundle is the universal normalized bundle ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]]).

[F2] For $\lambda:A\to A^\vee$ put $M=(\operatorname{id},\lambda)^*\mathcal P$; the biextension identities give $\varphi_M=\lambda+\lambda^\vee\circ\kappa_A$, so for symmetric $\lambda$ one has $\varphi_M=2\lambda$, and the commutator pairing $e_N$ of $N=M^2$ has values in $\mu_4$ on $A[4]$ ([[lem-arith-dual-isogeny-kernel-and-abelian-biduality]], [[lem-arith-theta-extension-splitting-and-isotropic-descent]]).

[F3] If $k$ is algebraically closed and $H\subseteq K(N)$ is finite with $e_N$ trivial on $H\times H$, then $N$ descends along $A\to A/H$: there is a line bundle $L$ with $N\cong[2]^*L$ when $H=A[2]$ ([[lem-arith-theta-extension-splitting-and-isotropic-descent]]).

[F4] Over an algebraically closed field the rigidified relative Picard functor is represented by a separated locally finite-type group scheme with a universal rigidified bundle; the Mumford map depends only on the class of the bundle modulo $\operatorname{Pic}^0$, and $\ker\varphi=\operatorname{Pic}^0$ as a sheaf ([[lem-arith-picard-representation-by-generic-quotient-and-translates]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F5] The locus where coherent equations vanish is represented by closed subschemes compatible with base change, projective twists of coherent ideals on a projective family are eventually globally generated, their cohomology is finite and vanishes in high degree, and finite-field scheme descent is effective when the finite descent orbits lie in affine opens ([[lem-nonaffine-finite-field-descent-scheme-with-affine-orbits]], [[lem-eventual-global-generation-coherent-twists]], [[lem-projective-coherent-cohomology-finite-and-vanishing]], [[thm-cohomology-and-base-change]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F6] Multiplication $[n]:A\to A$ is finite faithfully flat of rank $|n|^{2g}$ and $[2]:A[4]\to A[2]$ is an fppf epimorphism ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]); a nonempty smooth finite-type scheme over a field has a closed point with finite separable residue field ([[lem-nonempty-smooth-scheme-finite-separable-point]]).

## Proof

**Proof technique:** direct: realize a symmetric homomorphism over an algebraic closure by descending through the isotropic subgroup $A[2]$, then represent the locus of realizing bundles as a smooth torsor and apply the finite-separable-point theorem.

1.1 Work first over an algebraic closure $\bar k$ of $k$ and write $\lambda$ again for $\lambda_{\bar k}$. Put $M=(\operatorname{id},\lambda)^*\mathcal P$ and $N=M^2$. The Poincare biextension identities expand $P(x+y,\lambda(x+y))$ into $P(x,\lambda x)\otimes P(y,\lambda y)\otimes P(x,\lambda y)\otimes P(y,\lambda x)$. Thus the normalized square family of $M$ is the product of the two cross families. The first represents $\lambda$, and the switched second represents $\lambda^\vee\circ\kappa_A$ by the defining dual-pullback and biduality identities in [F2]. Hence $\varphi_M=\lambda+\lambda^\vee\circ\kappa_A=2\lambda$. Tensor multiplicativity gives $\varphi_N=4\lambda$, so $A[4]\subseteq K(N)$. [F2, given, algebra]

1.2 Now let $k$ be arbitrary and consider the fppf sheaf $Z$ on $k$-schemes whose $T$-points are the relative Picard classes of invertible sheaves $\mathcal L$ on $A_T$, normalized along the identity with $\varphi_{\mathcal L}=\lambda_T$. If $Z(T)\neq\emptyset$ and $\mathcal L\in Z(T)$, then $\mathcal L'\mapsto\mathcal L'\otimes\mathcal L^{-1}$ identifies $Z(T)$ with $\ker(\varphi)(T)=\operatorname{Pic}^0(A_T)=A^\vee(T)$ by [F4], so $Z$ is an $A^\vee$-torsor for the fppf topology. [F4, given, construct]

2.1 Restrict the alternating bilinear commutator pairing $e_N$ to $A[4]\times A[4]$, which is legitimate because $A[4]\subseteq K(N)$ by step 1.1. Its values lie in $\mu_4$: bilinearity gives $e_N(x',y')^4=e_N(4x',y')=1$. For $x,y\in A[2]$, lift fppf-locally to $x',y'\in A[4]$ with $x=2x'$ and $y=2y'$ by [F6]. Then $e_N(x,y)=e_N(x',y')^4=1$. Descent of equality proves isotropy on the full group scheme $A[2]\times A[2]$, including characteristic two. This uses $e_N$ on its actual domain and does not extend $e_M$ outside $K(M)$. [F6, F2, given, algebra]

3.1 Apply the isotropic descent of [F3] with $H=A[2]$ and the quotient morphism $[2]:A\to A$: since $e_N$ is trivial on $A[2]\times A[2]$, the line bundle $N$ descends through $[2]$, so there is an invertible sheaf $L$ on $A$ with $N\cong[2]^*L$. Then $4\lambda=\varphi_N=[2]^*\varphi_L=4\varphi_L$, using $\varphi_{[2]^*L}=[2]^*\circ\varphi_L\circ[2]=4\varphi_L$. Therefore $\lambda-\varphi_L$ is a homomorphism whose image lies in $\ker[4]=A^\vee[4]$, a finite group scheme; since $A$ is proper and geometrically integral, every map from $A$ to a finite affine scheme factors through $\Gamma(A,\mathcal O_A)=k$, so a pointed homomorphism to that finite scheme is zero, so $\lambda=\varphi_L$. [F3, F2, F6, step 1.1, step 2.1, algebra]

4.1 The realization over $\bar k$ in step 3.1 descends to a finite extension $K/k$: an invertible sheaf is described by finitely many generators and transition functions on a finite affine cover, and the equality of its Mumford morphism with $\lambda$ is described by finitely many equations on affine covers; all their algebraic coefficients lie in a finite extension. Call this realizing bundle $L_0$ on $A_K$. Tensoring $L_0$ with the universal Poincare bundle identifies $Z_K$ with $A^\vee_K$ on all tests by the kernel equality [F4]. In particular $Z$ is fppf-locally nonempty, as required in step 1.2, and $Z_K$ carries the canonical descent datum obtained from equality of its classifying functor over $K\otimes_kK$. This datum satisfies the cocycle by uniqueness of the functor identification. The scheme $Z_K$ is projective, since it is an abelian variety. Its finite descent orbits lie in affine opens: choose closed specializations of the finitely many orbit points and a sufficiently high very ample power; Serre vanishing and eventual generation in [F5] supply a section nonzero at each specialization, whose nonvanishing affine open contains the whole orbit. The finite-field descent theorem [F5] therefore descends $Z_K$ to a finite-type $k$-scheme representing $Z$, including inseparable $K/k$. This argument requires only the represented dual and its universal bundle and does not presume that the full Picard scheme has already been constructed over $k$. [F4, F5, step 1.2, construct]

5.1 The scheme $Z$ is smooth over $k$: it is an $A^\vee$-torsor by step 1.2, $A^\vee$ is smooth over $k$ by [F1], and smoothness is fppf-local. It is nonempty because after extending scalars to $\bar k$ the realization $\lambda=\varphi_L$ of step 3.1 gives a $\bar k$-point of $Z$. Since $Z$ is a nonempty smooth finite-type $k$-scheme, the finite-separable-point theorem [F6] provides a closed point $z\in Z$ whose residue field $k'$ is finite and separable over $k$; the tautological bundle at $z$ is an invertible sheaf $\mathcal L$ on $A_{k'}$ with $\varphi_{\mathcal L}=\lambda_{k'}$, as required. [F1, F6, step 3.1, step 1.2, step 4.1, algebra] ∎


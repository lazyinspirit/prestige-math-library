---
id: lem-arith-poincare-cohomology-at-the-identity
kind: lemma
title: "Poincare cohomology at the identity"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-regular-sequences-give-acyclic-koszul-complexes
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-enough-projectives-gives-projective-resolutions
  - thm-completion-as-extension-of-scalars
  - thm-nakayama-lemma
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-cohomology-and-base-change
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - cor-kunneth-over-a-field
  - thm-cup-product-graded-associative-natural
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object
  - lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions
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
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 9.1-9.6 (cohomology of the Poincare bundle)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "D. Mumford, Abelian Varieties (1970), III.13 and the Fourier-Mukai computation of Rp_2(P)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety of dimension $g$ over a field $k$, let $A^\vee$ be its dual and let $\mathcal P$ be the normalized Poincare bundle on $A\times_kA^\vee$, with second projection $p_2:A\times_kA^\vee\to A^\vee$. Then $R^ip_{2,*}\mathcal P=0$ for $i\ne g$, and $R^gp_{2,*}\mathcal P\cong k(0)$ is the length-one skyscraper sheaf at the origin of $A^\vee$. In particular the statement retains infinitesimal scheme lengths and does not replace the origin by its reduced point.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ of dimension $g$ over a field $k$, its dual $A^\vee$ with normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$ and second projection $p_2$.

[F1] The Poincare bundle is the universal rigidified line bundle; for every $b\in A^\vee$ the fibre $\mathcal P_b=\mathcal P|_{A\times\{b\}}$ is the corresponding degree-zero line bundle on $A$, and it is trivial exactly at $b=0$ ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F2] Every nontrivial homogeneous invertible sheaf on $A$ has vanishing cohomology in all degrees, and $\ker\varphi=\operatorname{Pic}^0$ for all tests ([[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F3] For a proper finite presentation flat family $f:X\to\operatorname{Spec}R$ there are an integer $r\ge0$ and a bounded complex $K$ of finite free $R$-modules concentrated in degrees $0,\dots,r$, together with a canonical isomorphism $H^q(K\otimes_RA')\cong H^q(X_{A'},\mathcal F_{A'})$ for every $R$-algebra $A'$; the sheaves $R^ip_{2,*}\mathcal P$ are coherent, and a coherent module on $\operatorname{Spec}R$ supported at the closed point has finite length ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-cohomology-and-base-change]]).

[F4] Cohomology of coherent sheaves on an abelian variety is computed by Cech complexes with Kunneth, Leray and cup-product structure, and vanishes above $g=\dim A$; $H^0(A,\mathcal O_A)=k$ and $H^g(A,\mathcal O_A)=k$ by Serre duality and triviality of the canonical bundle ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[cor-kunneth-over-a-field]], [[thm-cup-product-graded-associative-natural]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[thm-noetherian-topological-space-dimension-vanishing]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

[F5] Over a regular local ring $R$ of dimension $g$ with regular parameter system $x_1,\dots,x_g$, the powers $x_1^n,\dots,x_g^n$ form a regular sequence, so each Koszul complex $K(x_1^n,\dots,x_g^n)$ has no cohomology below degree $g$; filtered colimits of modules are exact, so the Cech complex $E$ on $x_1,\dots,x_g$ has $H^i(E)=0$ for $i<g$ ([[thm-regular-sequences-give-acyclic-koszul-complexes]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F6] Minimal finite free complexes over a local ring are obtained by splitting off contractible summands; their differentials vanish after reduction to the residue field, and a finite-length submodule of a free module over a domain of positive dimension is zero ([[thm-nakayama-lemma]], [[thm-completion-as-extension-of-scalars]]).

[F7] Two projective resolutions of the same module over a ring are homotopy equivalent, and chain maps between resolutions lift the identity; enough projectives and comparison lifts are available ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]], [[lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions]], [[thm-enough-projectives-gives-projective-resolutions]]).

## Proof

**Proof technique:** direct: reduce to the local ring at the origin, replace $Rp_{2,*}\mathcal P$ by a finite free universal cohomology complex, prove vanishing below degree $g$ by a Cech/Koszul finite-length argument, and identify the terminal cokernel with $k$ by the universal property and comparison with the Koszul resolution.

1.1 Put $B=A^\vee$ and $R=\mathcal O_{B,0}$, a regular local ring of dimension $g$. For $b\ne0$ the fibre $\mathcal P_b$ is a nontrivial degree-zero bundle on $A$, hence a nontrivial homogeneous bundle; by [F2] all its cohomology vanishes, so the formation of $R^ip_{2,*}\mathcal P$ is supported at the closed point $0\in B$, and by [F4] $R^ip_{2,*}\mathcal P=0$ for $i<0$ and $i>g$. [F1, F2, F4, given, construct]

1.2 **Local acyclicity claim.** Let $C$ be a bounded complex of finite free modules over the $g$-dimensional regular local ring $R$ with $C^i=0$ for $i<0$ and all $H^i(C)$ of finite length. Then $H^i(C)=0$ for $i<g$. For the proof choose a regular parameter system $x_1,\dots,x_g$ and let $E$ be the augmented Cech complex $R\to\bigoplus_iR[x_i^{-1}]\to\cdots\to R[(x_1\cdots x_g)^{-1}]$ in degrees $0,\dots,g$. By [F5] $E$ is the filtered colimit of the Koszul complexes on $x_1^n,\dots,x_g^n$, each with no cohomology below $g$, so $H^i(E)=0$ for $i<g$. Form the bounded double complex $C\otimes_RE$. Computing $E$ first, its $E_1$ page vanishes in degrees below $g$ because $E$ does and $C$ starts in degree $0$, so the total cohomology vanishes below $g$. Computing $C$ first, each $E^q$ is a direct sum of localizations and hence flat, so $E_2^{p,q}=H^p(C)\otimes_RE^q$; since $H^p(C)$ is finite length it is killed by a power of the maximal ideal, and $x_i$ lies in the maximal ideal, so every nonempty localization of $H^p(C)$ vanishes: $E_2^{p,q}=0$ for $q\ge1$ and $E_2^{p,0}=H^p(C)$. The second spectral sequence degenerates and identifies the total cohomology in degree $p$ with $H^p(C)$; comparing with the first computation gives $H^p(C)=0$ for $p<g$. [F5, F6, given, algebra]

2.1 Since $A\times B\to B$ is proper and $\mathcal P$ is flat over $B$, applying [F3] over $\operatorname{Spec}R$ produces a bounded finite free complex; cancel its contractible summands over the local ring $R$ to obtain a minimal complex $K$. Its reduction has zero differentials, and fibre cohomology vanishes above $g$, so its terms vanish above $g$. Thus $K$ lies in degrees $0,\dots,g$ with canonical isomorphisms $H^i(K\otimes_RA')\cong H^i(A_{A'},\mathcal P_{A'})$ for every $R$-algebra $A'$; in particular $H^i(K)\cong(R^ip_{2,*}\mathcal P)_0$ is a finite-length $R$-module by [F3] and step 1.1, and $H^i(K\otimes_Rk)=H^i(A,\mathcal O_A)$, with degree-zero and degree-$g$ dimensions one by [F4]; after minimalization these determine the endpoint ranks. [F3, F4, step 1.1, construct]

3.1 Apply the local acyclicity claim to $K$: $H^i(K)=0$ for $i<g$, so by step 1.1 the complex $K$ has cohomology only in degree $g$, where $H^g(K)$ is a finite-length $R$-module. Form the shifted dual complex $C=\operatorname{Hom}_R(K,R)[-g]$, so $C^i=\operatorname{Hom}_R(K^{g-i},R)$ with the usual dual signs; it is again a bounded complex of finite free modules in degrees $0,\dots,g$. Away from the closed point the finite-length cohomology of $K$ localizes to zero, so $K$ becomes split exact there and hence so does its dual $C$; therefore each $H^i(C)$ is supported at the closed point and has finite length. The local acyclicity claim applied to $C$ gives $H^i(C)=0$ for $i<g$. [step 2.1, step 1.2, construct]

4.1 If $g=0$, the smooth geometrically connected zero-dimensional pointed variety $A$ is $\operatorname{Spec}k$, as is its dual, so the conclusion is immediate. Suppose $g>0$. The minimal complex $K$ of step 2.1 has endpoint ranks one, since $H^0(A,\mathcal O_A)=H^g(A,\mathcal O_A)=k$. Thus $K^0\cong K^g\cong R$, and the dual complex $C$ has endpoint ranks one too. By step 3.1 its sole cohomology is the terminal cokernel $H^g(C)=R/J$, where $J$ is the ideal generated by the entries of its last differential, equivalently by the entries of the first differential $d_K^0:R\to K^1$. The module $R/J$ has finite length, and minimality ensures $J\subseteq\mathfrak m_R$. [F4, F6, step 2.1, step 3.1, algebra]

5.1 Tensor $K$ with $R/J$. Its first differential vanishes because all entries lie in $J$, and it has no negative terms, so $H^0(K\otimes_RR/J)=R/J$. The universal cohomology identification of [F3] turns the basis vector of $K^0$ into a section of $\mathcal P$ over $A\times_k\operatorname{Spec}R/J$. Its reduction is a nonzero section of $\mathcal O_A$, hence nowhere zero. Since the Artinian local scheme $\operatorname{Spec}R/J$ has the same underlying point as $\operatorname{Spec}k$, Nakayama makes this section a trivialization everywhere; normalize its value at the identity to give a rigidified trivialization. The universal property [F1] therefore makes the classifying map $\operatorname{Spec}R/J\to B$ factor through the origin. As this map is the natural map induced by $R=\mathcal O_{B,0}$, it follows that $\mathfrak m_R\subseteq J$. Hence $J=\mathfrak m_R$ and $H^g(C)\cong k$. [F1, F4, F6, step 4.1, construct]

6.1 Thus $C$ is a minimal finite free complex over $R$ concentrated in degrees $0,\dots,g$ with $H^i(C)=0$ for $i<g$ and $H^g(C)\cong k$; it is a minimal free resolution of $k$ shifted by $g$. Comparing it with the Koszul resolution of $k$ on a regular parameter system by chain lifting [F7] shows that the two complexes are homotopy equivalent, and dualizing back by $\operatorname{Hom}_R(-,R)[-g]$ (an exact anti-equivalence on finite free complexes, carrying the Koszul resolution to its dual) yields that $K$ is quasi-isomorphic to $k[-g]$: the dual Koszul complex has sole cohomology $k$ in degree $g$. Therefore $H^i(K)=0$ for $i\ne g$ and $H^g(K)\cong k$ as an $R$-module. [F7, step 3.1, step 5.1, algebra]

7.1 Translating step 6.1 back through the identification $H^i(K)=(R^ip_{2,*}\mathcal P)_0$ of step 2.1 gives $R^ip_{2,*}\mathcal P=0$ for $i\ne g$ and $R^gp_{2,*}\mathcal P$ a coherent sheaf supported at $0$ with stalk $k$, i.e. the length-one skyscraper $k(0)$; the identification is natural in the local ring, so the global statement follows. [step 1.1, step 2.1, step 6.1, algebra] ∎ 
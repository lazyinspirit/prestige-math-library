---
id: ex-hodge-and-polarization-of-a-point
kind: example
title: "Hodge decomposition and polarization of a point"
status: draft
origin: pipeline
dependency_level: 11
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Pierre Deligne, Théorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; (2.1.10)-(2.1.17) printed pp. 26-27 (Hodge structures, Tate twist, orientations, polarizations), (2.2.1) printed p. 27 (spectral sequence of a compact Kähler manifold), Lemma (4.2.3) printed p. 44"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Assume AC. The one-point space is a compact Kähler manifold of complex
dimension zero in the sense of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]. Its rational
cohomology is $H^0(\mathrm{pt};\mathbb Q)=\mathbb Q$ with the single Hodge type
$(0,0)$, all higher cohomology vanishes, and $Q(x,y)=xy$ is a rational
polarization. The hard-Lefschetz map $L^0$ in degree zero is the identity.

## Facts & Assumptions

**Given:** The Axiom of Choice and the one-point space $\mathrm{pt}$ with the dimension-zero conventions of [[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F1] For $n=0$ a complex manifold is a discrete space, compactness makes it a finite set of points, there are no tangent vectors and no forms of positive degree, $\omega=0$, and $L,\Lambda,\partial,\bar\partial,d,\partial^*,\bar\partial^*,d^*$ and all Laplacians are zero, with the Hodge star the identity on degree zero and $dV$ the counting measure; the same item defines rational pure Hodge structures, the Weil operator, polarizations (nondegenerate $\mathbb Q$-bilinear $Q$ with $Q(y,x)=(-1)^kQ(x,y)$, $Q(V^{p,q},V^{a,b})=0$ unless $(a,b)=(q,p)$, and $h(x,y)=Q(Cx,\bar y)$ positive definite Hermitian) and the Tate shift ([[def-compact-kahler-manifold-and-hodge-polarization-conventions]]).

[F2] For a compact Kähler manifold $X$, every de Rham class has a unique smooth harmonic representative and $H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X)$ with $\overline{H^{p,q}(X)}=H^{q,p}(X)$, where $H^{p,q}(X)$ is the set of classes with a $d$-closed smooth representative of type $(p,q)$ ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F3] Assume AC. For a compact smooth manifold the natural coefficient maps give $H^k(X;\mathbb Q)\otimes_{\mathbb Q}\mathbb C\cong H^k(X;\mathbb C)$ for every degree, with all groups finite-dimensional, and the isomorphisms are natural and unital ([[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]); AC is [[def-axiom-of-choice]].

## Verification

1.1 The one-point space is a compact complex manifold of complex dimension zero, so by [F1] it has no forms of positive degree and its complex of complex-valued forms is $\mathbb C$ in degree zero with zero differential; hence $H^0(\mathrm{pt};\mathbb C)=\mathbb C$ and $H^k(\mathrm{pt};\mathbb C)=0$ for $k>0$, and $\omega=0$ with all operators zero. By [F2] each degree-zero class $[\lambda]$ has the unique smooth harmonic representative equal to the function with value $\lambda$, and $H^0(\mathrm{pt};\mathbb C)=H^{0,0}(\mathrm{pt})$ is purely of type $(0,0)$ while both sides of the conjugation symmetry are this same space and all other Hodge pieces vanish. [F1, F2, given, algebra]

2.1 By [F3], whose AC hypothesis is the Given, the natural coefficient map $H^0(\mathrm{pt};\mathbb Q)\otimes_{\mathbb Q}\mathbb C\to H^0(\mathrm{pt};\mathbb C)=\mathbb C$ is an isomorphism, and its unitality sends the rational unit to the class of the function $1$; hence $H^0(\mathrm{pt};\mathbb Q)=\mathbb Q$ with rational structure spanning the type-$(0,0)$ piece, and $H^k(\mathrm{pt};\mathbb Q)=0$ for $k>0$ because the comparison is an isomorphism in every degree and the complex cohomology vanishes there. [step 1.1, F3, given, algebra]

3.1 By [F1] $L=\omega\wedge=0$ and $\Lambda=0$, so $L^0$ is the identity operator on the one-dimensional space $H^0(\mathrm{pt};\mathbb C)$, which is the asserted degree-zero hard-Lefschetz map. For the polarization, $Q(x,y)=xy$ on $V=\mathbb Q$ is $\mathbb Q$-bilinear and nondegenerate ($Q(1,1)=1$); it satisfies $Q(y,x)=Q(x,y)=(-1)^0Q(x,y)$; the type condition $Q(V^{p,q},V^{a,b})=0$ unless $(a,b)=(q,p)$ only involves the pair $(p,q)=(a,b)=(0,0)$, where $(0,0)=(q,p)$ holds, so it is satisfied; and the Weil operator of the weight-zero structure is $C=i^{0-0}=\mathrm{id}$, so $h(x,y)=Q(Cx,\bar y)=x\bar y$ is positive definite Hermitian on $V_{\mathbb C}=\mathbb C$. Therefore $Q$ is a rational polarization of the rational pure Hodge structure $H^0(\mathrm{pt};\mathbb Q)$, of weight zero, as claimed. [step 1.1, step 2.1, F1, given, algebra] ∎

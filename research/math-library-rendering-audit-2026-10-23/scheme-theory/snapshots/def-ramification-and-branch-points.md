---
id: def-ramification-and-branch-points
kind: definition
title: "Ramification points, branch points and unramifiedness"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dvr-is-a-pid
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - cor-contraction-of-maximal-ideals-integral-extension
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-finite-type-and-module-finite-algebras
  - def-integral-ring-extension
  - def-nonconstant-morphism-curves-degree
  - def-ramification-index-curve-map
  - def-sheaf-relative-differentials
  - def-unramified-morphism-finite-type
  - lem-curve-different-local-support-and-index-bound
  - lem-field-is-noetherian
  - thm-etale-equivalent-flat-unramified-fp
  - thm-integrality-and-finite-module-equivalences
  - thm-local-ring-smooth-curve-dvr
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-structure-theorem-for-artinian-rings
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.34–29.36 (étale morphisms; tag 02G4)"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
      locator: "The pointwise criterion for an étale morphism: locally of finite presentation and equivalent to flat plus unramified; pointwise unramifiedness is characterized by vanishing of the relative differentials."
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
verification:
  audited: 2026-10-02
---

## Definition

Assume the Axiom of Choice
([[def-axiom-of-choice]]). Let $k$ be any field and let $f:C\to D$ be a
nonconstant morphism of smooth proper geometrically integral curves over $k$.
Then $f$ is finite and surjective and has degree $\deg(f)$
([[def-nonconstant-morphism-curves-degree]],
[[thm-nonconstant-morphism-proper-curves-finite-surjective]]). For a closed
point $p\in C$ put $q=f(p)$ and let $e_p$ be the ramification index
([[def-ramification-index-curve-map]]).

The **index-ramification locus** of $f$ is the set of closed points
$$R^{\mathrm{ind}}(f)=\{p\in C:p\text{ is closed and }e_p>1\},$$
and its image $f(R^{\mathrm{ind}}(f))\subseteq D$ is the **index-branch
locus**; when the index convention is used one speaks of the ramification
locus and branch locus without further qualification. Independently, the
**differential-ramification locus** is
$$R^{\mathrm{diff}}(f)=\operatorname{Supp}(\Omega_{C/D}),$$
the support of the sheaf of relative differentials
([[def-sheaf-relative-differentials]]), and its image in $D$ is the
**differential branch locus**.

For every closed point $p$, the morphism $f$ is **unramified at $p$** exactly
when $\Omega_{C/D,p}=0$: a finite morphism is locally of finite type, and
pointwise formal unramifiedness is equivalent to vanishing of this stalk
([[def-unramified-morphism-finite-type]],
[[thm-etale-equivalent-flat-unramified-fp]]). In this curve-map setting it is
also étale at $p$. The finite presentation and flatness needed for this last
equivalence follow as follows.

Choose an affine neighborhood $V=\operatorname{Spec}(A_0)\subseteq D$ of
$q$ with $f^{-1}(V)=\operatorname{Spec}(S_0)$. Since $f$ is finite,
$S_0$ is a finite $A_0$-module ([[def-finite-morphism-schemes]]). The ring
$A_0$ is Noetherian: $k$ is Noetherian and $A_0$ is a finite-type
$k$-algebra ([[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). A finite
$A_0$-algebra is finite type as an algebra
([[def-finite-type-and-module-finite-algebras]]), so some presentation
$A_0[x_1,\ldots,x_m]\twoheadrightarrow S_0$ has finitely generated kernel:
the polynomial ring is Noetherian by
[[cor-finite-variable-polynomial-ring-noetherian]]. Thus $S_0$ is finitely
presented over $A_0$, and $f$ is locally of finite presentation at $p$.

For flatness, set $A=(A_0)_q$ and $S=S_0\otimes_{A_0}A$. The target local
ring $A=\mathcal O_{D,q}$ is a DVR
([[thm-local-ring-smooth-curve-dvr]]). Since $f$ is dominant and $C,D$ are
integral, $A\to S$ is injective and $S$ is a domain. The finite $A$-algebra
$S$ is integral over $A$
([[thm-integrality-and-finite-module-equivalences]],
[[def-integral-ring-extension]]), so every maximal ideal of $S$ contracts to
the maximal ideal of the local ring $A$
([[cor-contraction-of-maximal-ideals-integral-extension]]). Thus $S$ is
semilocal: its maximal ideals correspond to those of the closed fibre
$S/\mathfrak m_A S$, which is finite-dimensional, hence Artinian, over
$\kappa(q)$; it has finitely many maximal ideals
([[thm-structure-theorem-for-artinian-rings]]). Thus $S$ is a finite
torsion-free $A$-module. A DVR is a PID and every
finitely generated torsion-free module over a PID is free, so $S$ is free
and flat over $A$ ([[cor-dvr-is-a-pid]],
[[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]). Let
$P\subset S$ be the prime corresponding to $p$. Then
$\mathcal O_{C,p}=S_P$; localization of the flat $A$-algebra $S$ shows that
$\mathcal O_{C,p}$ is flat over $A$. This argument uses the finite affine
algebra $S$; the source local ring $\mathcal O_{C,p}$ itself need not be
finite over $A$.

The published pointwise criterion
[[thm-etale-equivalent-flat-unramified-fp]] says that a locally finitely
presented morphism is étale at $p$ exactly when it is flat and unramified at
$p$, the latter equivalent to $\Omega_{C/D,p}=0$. The preceding chart and
local-algebra arguments verify its finite-presentation and flatness
hypotheses here. All these statements hold over arbitrary $k$; no
perfectness, residue-separability, or characteristic restriction is imposed.

Assume now that the function-field extension $k(C)/k(D)$ is separable. Then
by [[lem-curve-different-local-support-and-index-bound]] the sheaf
$\Omega_{C/D}$ is coherent and torsion with finite support, and
$$R^{\mathrm{diff}}(f)=\{p\in C:p\text{ is closed and }(e_p>1\text{ or }\kappa(p)/\kappa(f(p))\text{ is inseparable})\}.$$
In particular, at a closed point whose residue extension
$\kappa(p)/\kappa(f(p))$ is separable, the two loci agree: $p\in
R^{\mathrm{diff}}(f)$ if and only if $e_p>1$, hence if and only if
$p\in R^{\mathrm{ind}}(f)$. If $k$ is perfect then every residue extension
is separable ([[lem-curve-different-local-support-and-index-bound]]), so
$R^{\mathrm{diff}}(f)=R^{\mathrm{ind}}(f)$ and the index and differential
branch loci coincide. Over an imperfect field a closed point with $e_p=1$
and inseparable residue extension lies in the differential support but not in
the index locus, so the two loci need not agree. If the function-field
extension $k(C)/k(D)$ is inseparable, neither the finite-support statement
nor any comparison of the two loci is asserted.

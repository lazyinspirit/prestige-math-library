---
id: def-complex-homotopy-and-contractibility-in-an-additive-category
kind: definition
title: Complexes, homotopies and contractibility in an additive category
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-additive-category, thm-the-category-of-complexes-in-an-additive-category-is-additive, def-chain-homotopy, def-contractible-complex]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 1, sections 1.1, 1.2, 1.4, printed pp. 2-5, 17-18"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

**Additive setting.** Fix an additive category $\mathcal A$
([[def-additive-category]]): every hom-set is an abelian group, finite
biproducts exist, and every object has an identity morphism. All morphisms below
are morphisms of $\mathcal A$, sums and negatives are taken in the hom-groups,
and $0$ denotes the zero morphism between the indicated objects.

**Cochain complexes.** A **cochain complex** $C^\bullet=(C^n,d^n)_{n\in\mathbb Z}$
consists of objects $C^n$ of $\mathcal A$ and morphisms $d^n:C^n\to C^{n+1}$
with
$$d^{n+1}d^n=0\qquad\text{for all }n\in\mathbb Z .$$
The morphisms $d^n$ are the **differentials** of $C^\bullet$. No boundedness,
finiteness or nonvanishing condition is imposed on the family of objects.

**Cochain maps.** A **cochain map** $f:C^\bullet\to D^\bullet$ is a family of
morphisms $f^n:C^n\to D^n$ with
$$f^{n+1}d^n_C=d^n_Df^n\qquad\text{for all }n\in\mathbb Z .$$
Identities and composites of cochain maps are cochain maps, so cochain complexes
and cochain maps form a category; this category is written
$\operatorname{Ch}^\bullet(\mathcal A)$ when the ambient category needs to be
recorded.

**Homotopies.** A **homotopy** $h:f\simeq g$ between cochain maps
$f,g:C^\bullet\to D^\bullet$ is a family of morphisms $h^n:C^n\to D^{n-1}$, one
in each degree, such that
$$f^n-g^n=d^{n-1}_Dh^n+h^{n+1}d^n_C\qquad\text{for all }n\in\mathbb Z .$$
Thus $h$ has degree $-1$, and the right-hand side is the $n$-th component of the
graded map
$$dh+hd:=(d^{n-1}_Dh^n+h^{n+1}d^n_C)_{n\in\mathbb Z},$$
written with $d$ on both sides. A **null
homotopy** of a cochain map $f:C^\bullet\to D^\bullet$ is a homotopy
$f\simeq0$ to the zero map with the same source and target; $D^\bullet$
need not be the zero complex. A map admitting such a homotopy is
**null-homotopic**.

**Homotopy equivalence.** A cochain map $f:C^\bullet\to D^\bullet$ is a
**homotopy equivalence** when there is a cochain map
$g:D^\bullet\to C^\bullet$ with $gf\simeq1_{C^\bullet}$ and
$fg\simeq1_{D^\bullet}$; the complexes are then **homotopy equivalent**. The maps
$f$ and $g$ are homotopy inverses of one another.

**Contractibility.** A cochain complex $C^\bullet$ is **contractible** when its
identity is null-homotopic, $1_{C^\bullet}\simeq0$: that is, when there is a
family of morphisms $h^n:C^n\to C^{n-1}$ with
$$1_{C^n}=d^{n-1}h^n+h^{n+1}d^n\qquad\text{for all }n\in\mathbb Z .$$
A complex is contractible exactly when it is homotopy equivalent to the zero
complex, since a homotopy equivalence onto the zero complex is a pair of
null-homotopies of the identities.

**Degreewise biproducts.** If $C^\bullet$ and $D^\bullet$ are cochain complexes,
then defining
$$(C\oplus D)^n:=C^n\oplus D^n,\qquad d^n_{C\oplus D}:=d^n_C\oplus d^n_D$$
gives a cochain complex, because
$(d^{n+1}_C\oplus d^{n+1}_D)(d^n_C\oplus d^n_D)=0\oplus0=0$. The degreewise
injections and projections are cochain maps, and the biproduct identities hold in
each degree and are therefore identities of cochain maps; hence $C\oplus D$ is a
biproduct of $C$ and $D$. Iterating, finite direct sums of cochain complexes are
formed degreewise, and finite direct sums of cochain maps and of homotopies are
formed degreewise as well. Under the reindexing below this is the additive
structure on complexes over an additive category recorded in
[[thm-the-category-of-complexes-in-an-additive-category-is-additive]].

**Dictionary with the published chain convention.** Reindex by
$C_n:=C^{-n}$ and $d_n:=d^{-n}$. Then $d_n:C_n\to C_{n-1}$ and
$$d_{n-1}d_n=d^{-(n-1)}d^{-n}=d^{-n+1}d^{-n}=0,$$
so $(C_\bullet,d_\bullet)$ is an ordinary chain complex. A cochain map $f$
becomes the chain map with components $f_n:=f^{-n}$, and a homotopy
$h:f\simeq g$ becomes the chain homotopy $s_n:=h^{-n}:C_n\to D_{n+1}$, because
substituting $n\mapsto-n$ into the displayed homotopy equation produces exactly
$$f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n .$$
Consequently, when $\mathcal A$ is abelian, these definitions restrict under this
dictionary to the published [[def-chain-homotopy]] and
[[def-contractible-complex]], which are stated for chain complexes in an abelian
category. Reindexing reverses the sign of the differential degree ($+1$ for
cochains, $-1$ for chains) and of the homotopy degree ($-1$ for cochains, $+1$
for chains), and introduces no further sign.

**What is not asserted.** The definitions use only zero morphisms, addition,
negatives, composition and identities. No kernel, cokernel, image, homology
object or exactness is assumed or defined, no linear structure on the hom-groups
beyond the additive one is used, and no homology object is attached to a complex
in an arbitrary additive category; contractibility is the existence of the
displayed family $h$, not the vanishing of homology.

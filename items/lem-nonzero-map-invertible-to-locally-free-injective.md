---
id: lem-nonzero-map-invertible-to-locally-free-injective
kind: lemma
title: Nonzero maps from an invertible sheaf to a locally free sheaf are injective
status: draft
origin: pipeline
deps:
  - def-affine-scheme-spectrum
  - def-integral-scheme
  - def-invertible-sheaf
  - def-irreducible-topological-space-and-subset
  - def-kernel-cokernel-image-sheaves
  - def-locally-free-sheaf-finite-rank
  - def-module-on-ringed-space
  - def-stalk-of-presheaf
  - lem-distinguished-open-refinement-at-a-point
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-morphisms-of-sheaves-determined-by-stalks
  - lem-spectrum-localization-open-immersion
  - prop-localisation-zero-equality-and-kernel-criteria
  - thm-exactness-of-sheaves-stalkwise
  - thm-sections-basic-open-affine-scheme
  - thm-sheaf-morphism-isomorphism-stalkwise
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $X$ be an integral scheme ([[def-integral-scheme]]), let $\mathcal L$ be an
invertible $\mathcal O_X$-module ([[def-invertible-sheaf]]) and let $\mathcal M$
be a locally free $\mathcal O_X$-module of finite rank
([[def-locally-free-sheaf-finite-rank]]). Then every nonzero morphism of
$\mathcal O_X$-modules $\varphi:\mathcal L\to\mathcal M$
([[def-module-on-ringed-space]]) is injective
([[def-kernel-cokernel-image-sheaves]]).

## Facts & Assumptions

**Given:** An integral scheme $X$, an invertible $\mathcal O_X$-module
$\mathcal L$, a locally free $\mathcal O_X$-module $\mathcal M$ of finite rank,
and a morphism $\varphi:\mathcal L\to\mathcal M$ with $\varphi\neq0$.

[F1] $X$ is nonempty, reduced and irreducible, and every nonempty affine open
subset of $X$ is the spectrum of a domain ([[def-integral-scheme]]).

[F2] A topological space is irreducible if and only if it is nonempty and every
two of its nonempty open subsets have nonempty intersection
([[def-irreducible-topological-space-and-subset]],
[[lem-irreducibility-criteria-and-open-subspaces]]).

[F3] $\mathcal L$ is locally free of rank $1$, so every point of $X$ has an open
neighbourhood on which $\mathcal L$ is isomorphic to the structure sheaf
([[def-invertible-sheaf]]), and $\mathcal M$ is locally free of finite rank, so
every point of $X$ has an open neighbourhood on which $\mathcal M$ is isomorphic
to $\mathcal O_U^{\,r}$ for some $r\ge0$
([[def-locally-free-sheaf-finite-rank]]).

[F4] For $f\in A$ the sections of $\mathcal O_{\operatorname{Spec}A}$ on the
distinguished open $D(f)$ are $A_f$ and restriction is the canonical
localisation map $A\to A_f$ ([[thm-sections-basic-open-affine-scheme]]); in a
localisation $\frac{r}{1}=0$ holds exactly when $ur=0$ for some $u$ in the
multiplicative set, and the localisation map of a commutative ring $R$ is
injective exactly when no element of the multiplicative set annihilates a
nonzero element ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F5] If $U=\operatorname{Spec}A$ is affine and $W\subseteq U$ is open with
$\mathfrak p\in W$, then there is $h\in A$ with
$\mathfrak p\in D(h)\subseteq W$
([[lem-distinguished-open-refinement-at-a-point]]), and the morphism induced by
$A\to A_h$ identifies $\operatorname{Spec}(A_h)$ with the open subscheme $D(h)$
of $U$, so $D(h)$ is affine with ring $A_h$
([[lem-spectrum-localization-open-immersion]]).

[F6] A sequence of sheaves of abelian groups is exact if and only if every
stalk sequence is exact ([[thm-exactness-of-sheaves-stalkwise]]), and the kernel
sheaf of a morphism is computed objectwise
([[def-kernel-cokernel-image-sheaves]]).

[F7] Two morphisms of sheaves with equal stalk maps are equal
([[lem-morphisms-of-sheaves-determined-by-stalks]]), so a morphism is zero if
and only if all of its stalk maps are zero, and a morphism that vanishes on
every member of an open cover is zero ([[def-stalk-of-presheaf]]).

[F8] The Axiom of Choice is not used: the arguments below select a chart
through each individual point and use only the localisation criteria of [F4];
no family of choices over an infinite index set is made.

## Proof

**Proof technique:** direct; reduce to affine charts, propagate vanishing of the morphism from one chart to all charts by irreducibility, then test injectivity on stalks.

1.1 Setup. By [F1] the scheme $X$ is nonempty and irreducible, so by [F2] any two nonempty open subsets of $X$ meet; by [F3] the open sets on which $\mathcal L$ is trivial and the open sets on which $\mathcal M$ is free form two open covers of $X$, so for a given $x\in X$ we may choose an affine open $U_0\ni x$, intersect it with such a trivialising and such a freeing open set, and apply [F5] to obtain a distinguished open $D(h)\subseteq U_0$ containing $x$ on which both $\mathcal L$ and $\mathcal M$ are free; $D(h)$ is affine with ring a domain by [F1]. The resulting adapted charts $U=\operatorname{Spec}A$, with $A$ a domain, $\mathcal L|_U\cong\mathcal O_U$ and $\mathcal M|_U\cong\mathcal O_U^{\,r}$, cover $X$. [F1, F2, F3, F5]

1.2 Chart dictionary. Fix an adapted chart $U=\operatorname{Spec}A$ and trivialisations $\mathcal L|_U\cong\mathcal O_U$, $\mathcal M|_U\cong\mathcal O_U^{\,r}$; these identify $\operatorname{Hom}_{\mathcal O_U}(\mathcal L|_U,\mathcal M|_U)$ with $\mathcal O_U(U)^{\,r}=A^{\,r}$, and $\varphi|_U$ corresponds to an element $m=(a_1,\dots,a_r)\in A^{\,r}$ acting by multiplication; thus $\varphi|_U=0$ if and only if $m=0$. If $m\neq0$, choose $i$ with $a_i\neq0$ and let $D(f)\subseteq U$ be distinguished; $A$ is a domain and $A\to A_f$ is injective when $f\neq0$ by [F4], so the image of $a_i$ in the domain $A_f$ is nonzero, and a section $s\in\mathcal O_U(D(f))=A_f$ with $s\cdot a_i=0$ must be $s=0$; as the distinguished opens cover every open subset of $U$, multiplication by $m$ is injective, that is, $\varphi|_U$ is injective. [F4]

2.1 Vanishing propagates. Suppose $\varphi|_{U_0}=0$ for one adapted chart $U_0$; let $V=\operatorname{Spec}B$ be any adapted chart and let $m_V\in B^{\,s}$ correspond to $\varphi|_V$ as in step 1.2. Since $V\cap U_0$ is nonempty by [F2], [F5] supplies a distinguished open $D(h)\subseteq V\cap U_0$; there $\varphi|_{D(h)}=0$, and restriction of the element $m_V$ to $D(h)$ is its image in $(B^{\,s})_h$ by [F4], so that image is zero; the zero criterion of [F4] gives $h^k m_V=0$ in $B^{\,s}$ for some $k\ge0$, and since $B$ is a domain and $D(h)\neq\varnothing$ forces $h\neq0$, this yields $m_V=0$ and hence $\varphi|_V=0$ by step 1.2. The adapted charts cover $X$, so $\varphi=0$ by [F7]. [F2, F4, F5, step 1.2]

3.1 Stalks are injective. Now suppose $\varphi\neq0$. By the contrapositive of step 2.1, $\varphi|_U\neq0$ for every adapted chart $U$; by step 1.2 the corresponding element $m$ is nonzero and $\varphi|_U$ is injective. Every point $x\in X$ lies in an adapted chart $U$, and the stalk map $\varphi_x$ is the stalk of $\varphi|_U$ at $x$, hence is injective. [step 1.2, step 2.1]

4.1 Conclusion. The kernel sheaf $\ker\varphi$ is the sheaf of abelian groups with $(\ker\varphi)_x=\ker(\varphi_x)$ by [F6]; all these stalks are zero by step 3.1, so every section of $\ker\varphi$ over every open set is zero and $\varphi$ is injective; the argument made no use of the Axiom of Choice beyond the fixed data recorded in [F8]. [F6, F8, step 3.1] ∎

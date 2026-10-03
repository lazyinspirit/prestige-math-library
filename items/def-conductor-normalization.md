---
id: def-conductor-normalization
kind: definition
title: The conductor of a normalization
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
justified_by: []
aliases: []
deps: [def-normalization-affine-variety, thm-normalization-glues-variety, cor-affine-normalization-is-finite, def-annihilator-and-torsion-of-a-module, lem-finite-normalization-compatible-with-principal-opens, def-classical-integral-affine-atlas-and-chartwise-morphism, lem-normalization-isomorphism-over-normal-locus, def-axiom-of-choice, def-principal-localisation, thm-support-and-annihilator-of-a-finite-module]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: the conductor of the normalization"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Definition

Assume the Axiom of Choice. Let $\nu\colon X^{\nu}\to X$ be the normalization of
an irreducible classical variety over an algebraically closed field
([[thm-normalization-glues-variety]]). Let $U\subseteq X$ be an affine chart
with coordinate ring $A=k[U]$, and let $B=k[\nu^{-1}(U)]$ be the coordinate ring
of its preimage, so that $A\subseteq B\subseteq k(X)$, $B$ is the integral
closure of $A$ in $k(X)$, and $B$ is a finite $A$-module
([[def-normalization-affine-variety]], [[cor-affine-normalization-is-finite]]).

The **conductor of the normalization over $U$** is the ideal
$$\mathfrak c_U:=\operatorname{Ann}_A(B/A)=\{a\in A: aB\subseteq A\}$$
of $A$ ([[def-annihilator-and-torsion-of-a-module]]).

**Compatibility.** For $0\ne f\in A$ and the principal open $D(f)\subseteq U$, the preimage
$\nu^{-1}(D(f))$ has coordinate ring $B_f$, the integral closure of $A_f$ in
$k(X)$ ([[lem-finite-normalization-compatible-with-principal-opens]]), and
$\mathfrak c_{D(f)}=\operatorname{Ann}_{A_f}(B_f/A_f)=(\mathfrak c_U)_f$,
because annihilators of finite modules commute with localization: if a localized scalar annihilates each of finitely many module generators, multiplying the finitely many denominator-clearing factors yields an element of the original annihilator. The reverse inclusion is immediate
([[def-annihilator-and-torsion-of-a-module]]). If $f=0$, then $D(f)$ and its
preimage are empty, $A_f=B_f=0$, and the conductor and its localized ideal are
both zero ([[def-principal-localisation]]); no integral closure inside $k(X)$
is asserted in this case. Since nonempty principal opens form a
basis and the chartwise ideals agree on overlaps under these identifications,
the ideals $\mathfrak c_U$ glue to an ideal sheaf $\mathfrak c\subseteq
\mathcal O_X$, the **conductor** of the normalization
([[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

**Support.** The support of $\mathcal O_X/\mathfrak c$, equivalently the closed locus defined by $\mathfrak c$, is exactly the non-normal locus of
$X$, equivalently the set of points at which $\nu$ is not an isomorphism. At a
point $x$ with maximal ideal $\mathfrak m$, the localisation $(B/A)_{\mathfrak
m}$ vanishes exactly when $B_{\mathfrak m}=A_{\mathfrak m}$, which is exactly
normality of $x$; and $\nu$ is an isomorphism over the normal locus
([[lem-normalization-isomorphism-over-normal-locus]]). Since $B/A$ is finite,
its support is $V(\operatorname{Ann}_A(B/A))=V(\mathfrak c_U)$
([[thm-support-and-annihilator-of-a-finite-module]]). Thus
$\mathfrak c\subseteq\mathcal O_X$ is an ideal sheaf whose quotient has support equal to the
non-normal locus, and $\mathfrak c=\mathcal O_X$ exactly when $\nu$ is already
an isomorphism.

---
id: def-multiplicity-plane-curve-point
kind: definition
title: Multiplicity of a plane curve at a point
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-germ-and-local-ring-classical-variety, def-localisation-at-a-prime-ideal, def-monomials-multidegree-and-total-degree, def-morphism-classical-varieties, def-plane-projective-curve, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-projective-coordinate-morphisms-well-defined, lem-projective-hypersurface-affine-pieces, lem-standard-projective-opens-are-affine-spaces, thm-affine-morphisms-coordinate-ring-anti-equivalence, thm-local-ring-affine-variety-localization, thm-localisation-at-a-prime-is-local]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Definition

Let $C=V(F)\subseteq\mathbf P^2$ be a plane projective curve over the algebraically closed field $k$ [[def-plane-projective-curve]] and let $p\in\mathbf P^2$. Let $D_+(x_i)$ be a standard chart containing $p$, identified with $\mathbf A^2$ by the ratio coordinates, and let $f$ be the dehomogenisation of $F$ in that chart [[lem-projective-hypersurface-affine-pieces]], [[lem-standard-projective-opens-are-affine-spaces]]. Choosing affine coordinates $(u,v)$ of $\mathbf A^2$ centred at $p$, expand the polynomial $f$ by total degree,

$$ f=f_m+f_{m+1}+\cdots+f_d,\qquad f_j\text{ homogeneous of degree }j,\quad f_m\ne0 .$$

The **multiplicity of $C$ at $p$** is

$$ m_p(C):=m,$$

the least degree of a term in such a centred expansion; we call $f_m$ a **lowest-degree part** of a local equation of $C$ at $p$. For $p\notin C$ set $m_p(C)=0$, and for $p\in C$ the number $m=m_p(C)\ge1$ is also characterised as

$$ m_p(C)=\max\{\,n\ge0: f\in\mathfrak m_p^{\,n}\,\},$$

where $\mathfrak m_p\subseteq\mathcal O_{\mathbf P^2,p}$ is the maximal ideal of the local ring of the plane at $p$ and $f$ is any local equation of $C$ at $p$ [[def-germ-and-local-ring-classical-variety]], [[thm-local-ring-affine-variety-localization]], [[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]].

## Remarks

- **Well-definedness.** Assume the Axiom of Choice for the cited classical-variety and defining-equation identifications [[def-axiom-of-choice]]. The naming formula for the order of a fixed local equation makes no choice. The number $m_p(C)$ does not depend on the chart, on the centred affine coordinates, or on the choice of the defining form $F$. The local ring $\mathcal O_{\mathbf P^2,p}$ is intrinsic to the point [[def-germ-and-local-ring-classical-variety]]; two charts containing $p$ give canonically isomorphic local rings and the two dehomogenisations of $F$ differ in $\mathcal O_{\mathbf P^2,p}$ by a unit, as do two defining forms of $C$, since $V(\lambda F)=V(F)$ and $F$ is square-free up to a scalar [[def-plane-projective-curve]], [[lem-standard-projective-opens-are-affine-spaces]]. Multiplication by a unit preserves $\max\{n:f\in\mathfrak m_p^n\}$, and an affine change of coordinates centred at $p$ induces an automorphism of the local ring preserving its maximal ideal [[thm-affine-morphisms-coordinate-ring-anti-equivalence]], [[thm-local-ring-affine-variety-localization]]. In centred coordinates write $O=k[u,v]_{(u,v)}$. The polynomial ideal $(u,v)^n$ consists exactly of polynomials with no terms of degree $<n$. If $f\in(u,v)^nO$, clearing denominators gives $sf\in(u,v)^n$ for some $s$ with $s(0)\ne0$; its lowest nonzero homogeneous part is $s(0)f_m$, so $m\ge n$. Conversely $m\ge n$ implies $f\in(u,v)^n$. Thus $f\in\mathfrak m_p^n$ exactly when $n\le m$, and the maximum such $n$ is $m$; this is the same number for every centred expansion, so the lowest-degree part $f_m$ is well defined up to the choice of coordinates and generates the same line of leading forms. A unit has order $0$, a local equation of a curve through $p$ has order $\ge1$, and $f\in\mathfrak m_p$ exactly when $f(p)=0$ [[def-polynomial-evaluation-and-root]]; hence $m_p(C)\ge1$ if and only if $p\in C$, and in particular $m_p(C)=0$ exactly for $p\notin C$.
- **Degree bound.** The centred expansion of a dehomogenised form of degree $d=\deg C$ has no terms beyond degree $d$, so $1\le m_p(C)\le d$ for $p\in C$ [[def-monomials-multidegree-and-total-degree]].
- **Multiplicativity for a union of curves.** Let $F_1,F_2$ be nonconstant square-free forms with no common factor, so that $F_1F_2$ is square-free and $V(F_1F_2)$ is again a plane projective curve with components those of $V(F_1)$ and $V(F_2)$ [[def-plane-projective-curve]]. If $f_1,f_2$ are local equations at $p$ with lowest-degree parts $f_{1,m_1},f_{2,m_2}$, then $f_1f_2$ is a local equation of $V(F_1F_2)$ and its lowest-degree part is the product $f_{1,m_1}f_{2,m_2}$, which is nonzero because a polynomial ring over a field is a domain [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. Hence, when both curves pass through $p$,
  $$ m_p(V(F_1F_2))=m_p(V(F_1))+m_p(V(F_2)).$$
  The hypothesis that $F_1,F_2$ have no common factor is necessary for this reading: if $F_1=F_2=x_0$ then $F_1F_2=x_0^2$ is not square-free, $V(F_1F_2)$ is the line $V(x_0)$ with $m_p=1$ at $p=[0:1:1]$, while the right-hand side is $2$. For the same reason the convention of the page forbids nonreduced defining forms, and the product formula is stated here only for unions of distinct square-free curves.

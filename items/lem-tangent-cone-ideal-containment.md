---
id: lem-tangent-cone-ideal-containment
kind: lemma
title: Coprime tangent cones force a power of the maximal ideal into the local ideal
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-dimension, def-embedding-dimension-and-regular-local-ring, def-homogeneous-polynomial-and-homogeneous-ideal, def-irreducible-and-prime-elements-in-a-domain, def-local-ring, def-module-homomorphism-kernel-image-and-cokernel, def-monomials-multidegree-and-total-degree, def-multiplicity-plane-curve-point, def-polynomial-evaluation-and-root, def-prime-and-maximal-ideals, def-tangent-lines-plane-curve-point, def-vector-space, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-local-intersection-length-finite, lem-projective-hypersurface-affine-pieces, lem-truncated-plane-local-length, thm-associated-graded-ring-of-a-regular-local-ring, thm-classical-affine-nullstellensatz-correspondence, thm-rank-nullity]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Statement

Assume the Axiom of Choice. Let $O$ be the local ring of $\mathbf A^2$ at the origin $p$ over an algebraically closed field $k$, with maximal ideal $\mathfrak m$, and let $f,g\in\mathfrak m$ have orders $m=\mathrm{ord}_p(f)$, $n=\mathrm{ord}_p(g)$. If the lowest-degree forms $f^*$ and $g^*$ have no common factor in $k[x,y]$ (equivalently their zero sets meet only at the origin), then $\mathfrak m^{t}\subseteq(f,g)O$ for every $t\ge m+n-1$. In particular $O/(f,g)O$ is a quotient of $O/\mathfrak m^{m+n-1}$, and the quotient map $O/(f,g)\twoheadrightarrow O/((f,g)+\mathfrak m^t)$ is an isomorphism for $t\ge m+n-1$.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, the local ring $O$ of $\mathbf A^2$ at the origin, its maximal ideal $\mathfrak m=(x,y)$, elements $f,g\in\mathfrak m$ with orders $m,n\ge1$, and their lowest-degree forms $f^*,g^*$ (the initial forms in the $\mathfrak m$-adic filtration).

[F1] $O$ is a two-dimensional regular local ring; its associated graded ring is $\operatorname{gr}_{\mathfrak m}O\cong k[X,Y]$ with standard grading, in particular a domain, so initial forms multiply: $(h_1h_2)^*=h_1^*h_2^*$ [[thm-associated-graded-ring-of-a-regular-local-ring]], [[def-embedding-dimension-and-regular-local-ring]], [[def-local-ring]], [[def-axiom-of-choice]].

[F2] $k[x,y]$ is a unique factorisation domain and every nonzero homogeneous form of degree $d$ in two variables has a $k$-basis of the $d+1$ monomials of total degree $d$, so $\dim_kk[x,y]_d=d+1$ [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-monomials-multidegree-and-total-degree]], [[def-dimension]], [[def-vector-space]].

[F3] For coprime forms $f^*,g^*$ of degrees $m,n$ the graded multiplication map $k[x,y]_{t-m}\oplus k[x,y]_{t-n}\to k[x,y]_t$, $(A,B)\mapsto Af^*+Bg^*$, is surjective whenever $t\ge m+n-1$. Indeed, if $Af^*+Bg^*=0$, then $f^*\mid B$ and $g^*\mid A$ by coprimality in the UFD, so $(A,B)=(g^*h,-f^*h)$ for $h\in k[x,y]_{t-m-n}$ when $t\ge m+n$, and there is no nonzero syzygy when $t=m+n-1$; by [F2] and rank-nullity the kernel has dimension $\max(0,t-m-n+1)$, while the domain has dimension $2t-m-n+2$ and the target has dimension $t+1$, so surjectivity follows for $t\ge m+n-1$ [[thm-rank-nullity]], [[def-module-homomorphism-kernel-image-and-cokernel]], [[def-dimension]].

[F4] Coprime lowest-degree forms force $f,g$ to be coprime in $O$: if a nonunit irreducible $h\in O$ divided both, then $h$ has order $\ge1$ and $h^*$ is a nonconstant form, and by [F1] $h^*\mid f^*$ and $h^*\mid g^*$, contradicting coprimality [[def-irreducible-and-prime-elements-in-a-domain]], [[def-prime-and-maximal-ideals]]. Clear the unit denominators of $f,g$ to apply [[lem-local-intersection-length-finite]] to polynomial numerators. Their ideal is $\mathfrak m$-primary; Proof 1.3 of that lemma gives $\mathfrak m^N\subseteq(f,g)O$ for some $N$.

[F5] AC is assumed; it enters through the associated-graded, Nullstellensatz and primarity suppliers [[def-axiom-of-choice]], [[thm-classical-affine-nullstellensatz-correspondence]]. The orders and initial forms are those of [[def-multiplicity-plane-curve-point]], [[def-tangent-lines-plane-curve-point]], [[lem-projective-hypersurface-affine-pieces]].

## Proof

1.1 By [F4] there is $N$ with $\mathfrak m^{N}\subseteq(f,g)O$. By [F3], for every $t\ge m+n-1$ and every form $h$ of degree $t$ there are forms $A,B$ of degrees $t-m,t-n$ with $h=Af^*+Bg^*$; lifting $A,B$, and using $f=f^*+f_{>m}$, $g=g^*+g_{>n}$ with $f_{>m},g_{>n}$ of order at least $m+1,n+1$, we find $Af+Bg=h+(\text{order}\ge t+1)$. Hence every element of $\mathfrak m^t$ is congruent modulo $\mathfrak m^{t+1}$ to an element of $(f,g)O$, i.e. $\mathfrak m^t\subseteq(f,g)O+\mathfrak m^{t+1}$ for all $t\ge m+n-1$. [F3, F4, algebra, given, F1, F2]

2.1 Fix $s=m+n-1$ and iterate the inclusion of step 1.1: $\mathfrak m^{s}\subseteq(f,g)O+\mathfrak m^{s+j}$ for every $j\ge0$, so choosing $j=\max(0,N-s)$ gives $\mathfrak m^{s}\subseteq(f,g)O+\mathfrak m^{N}\subseteq(f,g)O$ (if $N\le s$ then $\mathfrak m^s\subseteq\mathfrak m^N\subseteq(f,g)O$ directly). More generally the same argument with any $t\ge s$ in place of $s$ gives $\mathfrak m^t\subseteq(f,g)O$ for every $t\ge m+n-1$. [step 1.1, algebra, F5]

3.1 Consequently the quotient map $O\twoheadrightarrow O/(f,g)O$ factors through $O/\mathfrak m^{m+n-1}$, exhibiting $O/(f,g)O$ as a quotient of $O/\mathfrak m^{m+n-1}$, and for $t\ge m+n-1$ one has $(f,g)+\mathfrak m^t=(f,g)$, so the quotient map $O/(f,g)\twoheadrightarrow O/((f,g)+\mathfrak m^t)$ is an isomorphism. This is the asserted containment and its two consequences. [step 2.1, given] ∎ 
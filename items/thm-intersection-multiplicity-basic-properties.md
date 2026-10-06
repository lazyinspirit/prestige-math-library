---
id: thm-intersection-multiplicity-basic-properties
kind: theorem
title: Symmetry, additivity and local nature of intersection multiplicity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-length-is-additive-in-short-exact-sequences, def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-irreducible-and-prime-elements-in-a-domain, def-local-intersection-multiplicity-plane-curves, def-module-homomorphism-kernel-image-and-cokernel, def-quotient-ring, def-unique-factorisation-domain, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-intersection-multiplicity-independent-equations-coordinates, lem-local-intersection-length-finite, prop-iterated-localisation, thm-localisation-commutes-with-quotients]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) lecture notes, consolidated"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C,D$ be plane projective curves over the algebraically closed field $k$ and let $p\in\mathbf P^2$, with all local intersection multiplicities below assumed finite. Then:

1. $I_p(C,D)=I_p(D,C)$.
2. $I_p(C,D)=0$ iff $p\notin C\cap D$, and $I_p(C,D)\ge1$ iff $p\in C\cap D$.
3. If $G_1,G_2$ are square-free forms with no common factor, so that $V(G_1G_2)$ is again a plane projective curve, and if the three values are finite, then
$$ I_p(C,V(G_1G_2))=I_p(C,V(G_1))+I_p(C,V(G_2)).$$
4. If $G'$ is a form such that the local equation of $V(G')$ at $p$ differs from that of $D$ by a multiple of a local equation of $C$ — in particular if $G'=G+AF$ with $A$ a form of degree $\deg G-\deg F$ and $V(G')$ is a plane curve — then $I_p(C,V(G'))=I_p(C,D)$.
5. $I_p(C,D)$ depends only on the local branches of $C$ and $D$ through $p$.

## Facts & Assumptions

**Given:** AC, plane curves $C=V(F)$, $D=V(G)$ over the algebraically closed field $k$, a point $p$, a common local ring $O=\mathcal O_{\mathbf P^2,p}$ with maximal ideal $\mathfrak m_p$, and local equations $f,g$ of $C,D$ at $p$; $I_p(C,D)=\ell_O(O/(f,g))$ [[def-local-intersection-multiplicity-plane-curves]].

[F1] $O$ is the localisation of the polynomial UFD of the plane, hence a unique factorisation domain by the explicit factorisation argument in the finiteness lemma (Proof 1.3); two local equations have a common irreducible factor exactly when the curves share a local branch at $p$, and then the length is infinite, while $O/(f,g)$ has finite length exactly when $f,g$ are coprime in $O$ [[lem-local-intersection-length-finite]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-unique-factorisation-domain]], [[def-irreducible-and-prime-elements-in-a-domain]].

[F2] Length is additive in short exact sequences of $O$-modules, and the length of a module depends only on its isomorphism class [[cor-length-is-additive-in-short-exact-sequences]], [[def-composition-series-and-length-of-a-module]]. Kernels and images of module homomorphisms and quotients by ideals are the usual ones [[def-module-homomorphism-kernel-image-and-cokernel]], [[def-quotient-ring]].

[F3] $I_p$ is unchanged by replacing local equations by other generators of the same local ideal, by chart changes and by affine or projective coordinate changes [[lem-intersection-multiplicity-independent-equations-coordinates]], [[prop-iterated-localisation]], [[thm-localisation-commutes-with-quotients]].

[F4] AC is assumed; it enters through the finiteness and localisation suppliers [[def-axiom-of-choice]].

## Proof

1.1 Symmetry: $O/(f,g)=O/(g,f)$, so $I_p(C,D)=I_p(D,C)$. [F2, given]

1.2 Vanishing: if $p\notin C\cap D$, one of $f,g$ is a unit of $O$, so $(f,g)=O$ and $O/(f,g)=0$ has length $0$; if $p\in C\cap D$, then $f,g\in\mathfrak m_p$, so $(f,g)\subseteq\mathfrak m_p$ and the quotient $O/(f,g)$ maps onto $O/\mathfrak m_p\ne0$, hence has positive length. [F2, given, algebra]

1.3 Additivity: with $G_1,G_2$ square-free and coprime and all values finite, let $g_2$ be the local equation of $V(G_2)$. Since $I_p(C,V(G_2))$ is finite, [F1] shows $f$ and $g_2$ are coprime in $O$. Consider the sequence of $O$-modules $$ 0\longrightarrow O/(f,g_1)\xrightarrow{\ \cdot g_2\ }O/(f,g_1g_2)\xrightarrow{\ \pi\ }O/(f,g_2)\longrightarrow 0 .$$ The map $\pi$ is the natural reduction, and its kernel is $(f,g_2)/(f,g_1g_2)$, which is exactly the image of multiplication by $g_2$, so the sequence is exact at the middle; injectivity of multiplication by $g_2$ holds because $g_2z\in(f,g_1g_2)$ implies $f\mid g_2(z-bg_1)$ for some $b$, and coprimality of $f$ and $g_2$ gives $z\in(f,g_1)$. Length additivity in [F2] now gives the displayed identity. [F1, F2, algebra]

1.4 Invariance under adding a multiple: if $G'$ has local equation $g'=g+af$ at $p$, then $(f,g')=(f,g)$ as ideals of $O$, so $I_p(C,V(G'))=\ell_O(O/(f,g'))=\ell_O(O/(f,g))=I_p(C,D)$; for a form $G'=G+AF$ of the same degree as $G$ the local equation has exactly this shape by [F3]. [F2, F3, given, algebra]

1.5 Locality: the quotient $O/(f,g)$ is computed from the germs of local equations at $p$, so replacing $C,D$ by curves with the same local branches at $p$ leaves $f,g$ unchanged up to units in $O$ and leaves the length unchanged; this is the content of [F3]. [F1, F3, given]

2.1 Statements (1)–(5) are established in steps 1.1, 1.2, 1.3, 1.4 and 1.5. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, F4] ∎ 
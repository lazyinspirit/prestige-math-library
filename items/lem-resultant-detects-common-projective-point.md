---
id: lem-resultant-detects-common-projective-point
kind: lemma
title: The resultant detects finitely many common projective points
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-polynomial-and-homogeneous-ideal, def-plane-projective-curve, def-polynomial-degree-leading-coefficient-and-monic, def-projective-space-points, def-resultant-homogeneous-polynomials, def-sylvester-resultant-of-binary-forms, def-unique-factorisation-domain, lem-binary-resultant-scaling-specialization-and-dehomogenization, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, lem-standard-projective-opens-are-affine-spaces, thm-binary-resultant-zero-iff-common-geometric-projective-root, thm-projective-zariski-topology, thm-root-bound-for-polynomials-over-a-domain]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Statement

Let $F,G\in k[x_0,x_1,x_2]$ be nonzero homogeneous forms of positive degrees $d,e$ over the algebraically closed field $k$ with no common factor, and suppose the point $[0:0:1]$ lies on neither $C=V(F)$ nor $D=V(G)$; equivalently the coefficient of $x_2^{d}$ in $F$ and the coefficient of $x_2^{e}$ in $G$ are nonzero constants, so that $F(a,b,x_2)$ and $G(a,b,x_2)$ have exact degrees $d,e$ for every $(a,b)\neq(0,0)$. Then $\operatorname{Res}_{x_2}(F,G)\in k[x_0,x_1]$ is a nonzero form of degree $de$, and for $(a,b)\neq(0,0)$ one has $\operatorname{Res}_{x_2}(F,G)(a,b)=0$ if and only if there is $c\in k$ with $[a:b:c]\in C\cap D$. Consequently the projections $(x_0:x_1)$ of the common points of $C$ and $D$ are exactly the projective zeros of the resultant; over each such zero the fibre of common points is finite, of size at most $\min(d,e)$ when counted without multiplicity. In particular $C\cap D$ is finite.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, nonzero forms $F,G\in k[x_0,x_1,x_2]$ of positive degrees $d,e$ with no common factor and with nonzero constant $x_2^{d}$- and $x_2^{e}$-coefficients, $C=V(F)$, $D=V(G)$, and the resultant $\operatorname{Res}_{x_2}(F,G)\in k[x_0,x_1]$ of [[def-resultant-homogeneous-polynomials]] with $R=k[x_0,x_1]$.

[F1] $R=k[x_0,x_1]$ is a unique factorisation domain and $R[x_2]=k[x_0,x_1,x_2]$ is a unique factorisation domain in which every irreducible is prime [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-unique-factorisation-domain]]. In a UFD, an element of a polynomial ring that is primitive of positive degree is irreducible over the ring exactly when it is irreducible over the fraction field [[lem-gauss-lemma-over-a-ufd]].

[F2] $\operatorname{Res}_{x_2}(F,G)$ is the determinant of the Sylvester map $(A,B)\mapsto AF+BG$ on forms of nominated degrees, and for $(a,b)\ne(0,0)$ its value is the Sylvester resultant of the specialisations of nominated degrees $d,e$ [[def-resultant-homogeneous-polynomials]], [[def-sylvester-resultant-of-binary-forms]], [[lem-binary-resultant-scaling-specialization-and-dehomogenization]]. The Sylvester resultant of two binary forms of nominated positive degrees vanishes exactly when the two forms have a common zero in $\mathbf P^1$ over an algebraically closed field [[thm-binary-resultant-zero-iff-common-geometric-projective-root]], [[def-projective-space-points]].

[F3] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots [[thm-root-bound-for-polynomials-over-a-domain]]. Points of $\mathbf P^2$ have the form $[a:b:c]$, and the points with $(a,b)\ne(0,0)$ are exactly those lying in the two charts $D_+(x_0)\cup D_+(x_1)$, whose union contains neither-curve hypothesis excluded only $[0:0:1]$ [[def-projective-space-points]], [[lem-standard-projective-opens-are-affine-spaces]].

## Proof

1.1 Let $K=\operatorname{Frac}(R)$ and regard $F,G\in K[x_2]$. They have no common factor of positive $x_2$-degree in $K[x_2]$: if a polynomial $H\in K[x_2]$ of positive degree divided both, then clearing denominators and applying Gauss's lemma to the primitive parts produces a nonconstant common divisor of $F$ and $G$ in $R[x_2]=k[x_0,x_1,x_2]$, contradicting the hypothesis. [F1, given, algebra]

1.2 For each $(a,b)\ne(0,0)$ the specialised polynomials $F(a,b,x_2),G(a,b,x_2)\in k[x_2]$ have exact degrees $d$ and $e$, and $\operatorname{Res}_{x_2}(F,G)(a,b)=0$ if and only if they have a common root in $k$: the specialisation rule identifies the value with $\operatorname{Res}_{d,e}(F(a,b,x_2),G(a,b,x_2))$, and for binary forms of nominated positive degrees over the algebraically closed field $k$ the resultant vanishes exactly when a common zero in $\mathbf P^1_k$ exists. The point $[1:0]$ cannot be a common zero, since both specialised top coefficients are nonzero by hypothesis; thus the projective common zero is on the chart $[t:1]$ and is exactly a common finite root. [F2, F3, given]

2.1 $\operatorname{Res}_{x_2}(F,G)$ is a nonzero form of degree $de$. If it were the zero polynomial, then over the fraction field $K$ the Sylvester matrix would be singular, so there would be $A,B\in K[x_2]$, not both zero, with $\deg B\le d-1$, $\deg A\le e-1$ and $AF+BG=0$; then $F\mid BG$ in $K[x_2]$, and since $F$ and $G$ are coprime there by step 1.1 and $\deg B<d=\deg F$ (the top coefficient of $F$ in $x_2$ is a nonzero constant), this is impossible. Hence the determinant is nonzero, and the determinant-weight calculation in [[def-resultant-homogeneous-polynomials]] gives its total degree $de$ in $x_0,x_1$. [step 1.1, F2, given, algebra]

3.1 Let $Z$ be the zero set of $\operatorname{Res}_{x_2}(F,G)$ in $\mathbf P^1$. By step 1.2, for $(a,b)\ne(0,0)$ the point $[a:b]$ lies in $Z$ exactly when $[a:b:c]\in C\cap D$ for some $c\in k$; since $[0:0:1]\notin C\cup D$, every point of $C\cap D$ has $(a,b)\ne(0,0)$, so the projection $\pi:C\cap D\to\mathbf P^1$ has image exactly $Z$. By step 2.1 the resultant is a nonzero form of degree $de$, so $Z$ is finite, of at most $de$ points: after possibly renaming the variables its dehomogenisation $\operatorname{Res}(1,t)$ is a nonzero polynomial of degree at most $de$, whose roots give the points of $Z$ with first coordinate nonzero, If the remaining point $[0:1]$ is a zero, the coefficient of $x_1^{de}$ vanishes, so the dehomogenisation has degree at most $de-1$; hence including that point still gives at most $de$ zeros. For $[a:b]\in Z$ the fibre consists of common roots of $F(a,b,x_2)$ and $G(a,b,x_2)$, hence of roots of the nonzero polynomial $F(a,b,x_2)$ of degree $d$ and also of $G(a,b,x_2)$ of degree $e$, so it has at most $\min(d,e)$ points. Therefore $C\cap D$ is finite with the asserted fibre bound, and its projections are exactly the zeros of the nonzero resultant. [step 1.2, step 2.1, F3, given] ∎ 
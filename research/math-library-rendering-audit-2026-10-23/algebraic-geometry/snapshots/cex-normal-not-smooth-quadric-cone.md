---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-1.md"
      - "research/frontier-38-owner-30-alpha-batch-1-5a.md"
      - "research/frontier-38-owner-30-step5-hash-1-post-5a.json"
    content_sha256: "d9b18b412852fd2e05c7952b5da9342a94dd46c1699103d362caeebd6092f2c2"
id: cex-normal-not-smooth-quadric-cone
kind: counterexample
title: "A normal singular surface: the quadric cone"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-point-and-normal-variety, def-affine-variety-classical, def-coordinate-ring-affine-algebraic-set, def-singular-and-regular-loci-variety, thm-jacobian-criterion-affine-variety, thm-serre-normality-criterion, def-serre-r-k-and-s-k-conditions, cor-localisations-of-regular-local-rings-are-regular, thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-polynomial-ring-over-a-field-is-a-ufd, thm-irreducible-polynomials-over-a-field-are-prime, cor-strong-nullstellensatz-two-inclusions, def-axiom-of-choice, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, thm-affine-nullstellensatz-correspondence, cor-height-plus-quotient-dimension-affine-domain, thm-affine-variety-dimension-coordinate-ring, def-depth-with-respect-to-an-ideal, thm-krull-principal-ideal-theorem, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, cor-dimension-of-a-finite-polynomial-ring-over-a-field, def-normal-noetherian-ring]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Summary 8.13 and Aside 9.39: the cone z^2 = xy is normal but not factorial"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim: every normal classical variety over an algebraically closed field
is regular, hence nonsingular.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$ with $\operatorname{char}k\ne2$, the polynomial $f=xy-z^2\in k[x,y,z]$, the closed set $X=V(f)\subseteq\mathbf A^3_k$, and its coordinate ring $R=k[x,y,z]/(f)=k[X]$.

[F1] $k[x,y,z]$ is a unique factorisation domain in which every irreducible element is prime; $f$ is primitive of positive degree in $z$ over $k[x,y]$, and $xy$ is not a square in $k(x,y)$ because the $x$-adic valuation of $xy$ is odd, so $f$ is irreducible in $k(x,y)[z]$ and hence in $k[x,y,z]$ by Gauss's lemma ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[lem-gauss-lemma-over-a-ufd]], [[thm-polynomial-ring-over-a-field-is-a-ufd]], [[thm-irreducible-polynomials-over-a-field-are-prime]]).

[F2] For an affine algebraic set the closed subsets correspond to radical ideals and the nonempty irreducible ones to prime ideals, with $I(V(J))=\sqrt J$ ([[thm-affine-nullstellensatz-correspondence]], [[cor-strong-nullstellensatz-two-inclusions]]); points of a classical affine variety give its coordinate ring, a domain ([[def-affine-variety-classical]], [[def-coordinate-ring-affine-algebraic-set]]).

[F3] Jacobian criterion: for a reduced classical affine algebraic set over an algebraically closed field, a closed point is regular exactly when the Jacobian rank equals $n-\dim A_{\mathfrak m}$, and at a closed point $\dim A_{\mathfrak m}=\dim_xX$ ([[thm-jacobian-criterion-affine-variety]], [[def-singular-and-regular-loci-variety]]). AC is used here.

[F4] Serre's criterion: a Noetherian ring is normal if and only if it satisfies $(R_1)$ and $(S_2)$ ([[thm-serre-normality-criterion]], [[def-serre-r-k-and-s-k-conditions]]). AC is used here.

[F5] A regular local ring is a Cohen--Macaulay domain, and a localisation of a regular local ring at a prime is regular ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[cor-localisations-of-regular-local-rings-are-regular]]); depth is the supremum of lengths of regular sequences ([[def-depth-with-respect-to-an-ideal]]).

[F6] For a finite-type domain $A$ over a field and a prime $\mathfrak p$, $\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A$; a prime minimal over a principal ideal has height at most one; the polynomial ring in $r$ variables over a field has dimension $r$ and is Noetherian; and the geometric dimension of an affine variety equals the Krull dimension of its coordinate ring ([[cor-height-plus-quotient-dimension-affine-domain]], [[thm-krull-principal-ideal-theorem]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-affine-variety-dimension-coordinate-ring]]).

[F7] A Noetherian ring is normal when all its prime localisations are integrally closed domains, and a classical variety is normal when all its local rings are integrally closed domains ([[def-normal-noetherian-ring]], [[def-normal-point-and-normal-variety]]).

## Counterexample

1.1 By [F1] the element $f$ is prime, so $R=k[x,y,z]/(f)$ is a domain and $X=V(f)$ is an irreducible closed subset, hence a classical affine variety with coordinate ring $R$ [F2]; $R$ is Noetherian by [F6]. Since $(f)$ is a nonzero principal prime, $\operatorname{ht}(f)=1$ [F6]; the height formula [F6] then gives $\dim R=3-1=2$ and, for every point $x\in X$, $\dim_x X=\dim X=2$ [F6]. The Jacobian matrix of $f$ is the row $(y,x,-2z)$, so by [F3] a point $x\in X$ is regular exactly when that row has rank $3-2=1$, and singular exactly when $y=x=z=0$; as $\operatorname{char}k\ne2$ this is the origin and nothing else. Hence every point $x\ne(0,0,0)$ of $X$ is regular, and its local ring $R_{\mathfrak m_x}$ is a regular local ring. [F1, F2, F3, F6, given]

1.2 The sequence $x,y$ is a regular sequence in $R$: $x$ is a nonzerodivisor because $R$ is a domain, and $R/xR\cong k[y,z]/(z^2)$, in which $y$ is again a nonzerodivisor. Hence $\operatorname{depth}R_{\mathfrak m_0}\ge2=\dim R_{\mathfrak m_0}$, where $\mathfrak m_0=(x,y,z)$ is the maximal ideal of the origin [F5, F6]. [F5, F6, given]

2.1 $R$ satisfies condition $(R_1)$. Let $\mathfrak p$ be a prime with $\operatorname{ht}\mathfrak p\le1$. If $\mathfrak p=0$ then $R_{\mathfrak p}$ is a field, hence regular. If $\operatorname{ht}\mathfrak p=1$, the quotient $R/\mathfrak p$ has dimension $2-1=1$ by [F6], so the closed subvariety $V(\mathfrak p)\subseteq X$, whose coordinate ring is the domain $R/\mathfrak p$ [F2], has dimension $1$; a one-dimensional variety is not a single point, so $V(\mathfrak p)$ contains a point $x\ne(0,0,0)$. The corresponding maximal ideal $\mathfrak m_x$ contains $\mathfrak p$, and $R_{\mathfrak m_x}$ is regular by step 1.1, so $R_{\mathfrak p}=(R_{\mathfrak m_x})_{\mathfrak pR_{\mathfrak m_x}}$ is regular by [F5]. Thus $(R_1)$ holds. [F2, F5, F6, step 1.1]

2.2 The origin is singular. At the origin the Jacobian row $(y,x,-2z)$ is the zero row, of rank $0$, while $3-\dim_{\mathfrak m_0}R_{\mathfrak m_0}=3-2=1$; by the criterion [F3] the local ring $R_{\mathfrak m_0}$ is not regular, so the origin is a singular point of $X$. [F3, step 1.1]

3.1 $R$ satisfies condition $(S_2)$. Let $\mathfrak p$ be a prime. If $\mathfrak p=\mathfrak m_0$, step 1.2 gives $\operatorname{depth}R_{\mathfrak p}\ge2=\dim R_{\mathfrak p}$. If $\mathfrak p\ne\mathfrak m_0$ and $\operatorname{ht}\mathfrak p\le1$, then $R_{\mathfrak p}$ is regular by step 2.1 and therefore Cohen--Macaulay, so $\operatorname{depth}R_{\mathfrak p}=\dim R_{\mathfrak p}=\min\{2,\dim R_{\mathfrak p}\}$. If $\operatorname{ht}\mathfrak p=2$ then $\mathfrak p$ is maximal, hence $\mathfrak p=\mathfrak m_x$ for a point $x\ne(0,0,0)$, and $R_{\mathfrak p}$ is regular by step 1.1, so again $\operatorname{depth}R_{\mathfrak p}=2=\min\{2,\dim R_{\mathfrak p}\}$. Thus every prime satisfies $\operatorname{depth}R_{\mathfrak p}\ge\min\{2,\dim R_{\mathfrak p}\}$, that is, $(S_2)$ holds. [F5, step 1.1, step 1.2, step 2.1]

4.1 By steps 2.1 and 3.1 the ring $R$ satisfies $(R_1)$ and $(S_2)$, so $R$ is normal by Serre's criterion [F4]; consequently each prime localisation $R_{\mathfrak p}$, in particular each local ring $R_{\mathfrak m_x}$ at a point of $X$, is an integrally closed domain, and $X$ is a normal variety [F7]. By step 2.2 the origin is a singular point. Therefore $X=V(xy-z^2)$ is a normal classical variety that is singular at the origin: normal does not imply nonsingular in dimension two, and the characteristic hypothesis $\operatorname{char}k\ne2$ was used only to identify the singular locus with the origin. [F4, F7, step 2.2, step 3.1] ∎

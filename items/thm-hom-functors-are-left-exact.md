---
id: thm-hom-functors-are-left-exact
kind: theorem
title: "Covariant and contravariant $\\operatorname{Hom}$ are left exact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-hom-groups-and-induced-hom-maps, def-exact-and-short-exact-sequences-of-modules, thm-quotient-module-universal-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a left $R$-module.

1. If $0\to A\xrightarrow uB\xrightarrow vC$ is exact, then
$$0\to\operatorname{Hom}_R(X,A)\xrightarrow{u_*}\operatorname{Hom}_R(X,B)\xrightarrow{v_*}\operatorname{Hom}_R(X,C)$$
is exact.
2. If $A\xrightarrow uB\xrightarrow pC\to0$ is exact, then
$$0\to\operatorname{Hom}_R(C,X)\xrightarrow{p^*}\operatorname{Hom}_R(B,X)\xrightarrow{u^*}\operatorname{Hom}_R(A,X)$$
is exact.

Thus covariant and contravariant $\operatorname{Hom}$ are left exact.

## Facts & Assumptions

**Given:** The two exact sequences in the statement and a left $R$-module $X$.

[F1] Postcomposition and precomposition define the displayed homomorphisms on Hom groups ([[def-hom-groups-and-induced-hom-maps]]).

[F2] Exactness means equality of the incoming image and outgoing kernel; the zero endpoints make $u$ injective in the first sequence and $p$ surjective in the second ([[def-exact-and-short-exact-sequences-of-modules]]).

[L1] If a homomorphism $h:M\to P$ vanishes on a submodule $N$, it factors uniquely through $M/N$ ([[thm-quotient-module-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 If $u_*f=0$, then $u(f(x))=0$ for every $x$, and injectivity of $u$ gives $f=0$; hence $u_*$ is injective. [F1, F2]

1.2 Composability gives $v_*u_*=0$, so $\operatorname{im}u_*\le\ker v_*$. [F1, F2]

1.3 If $g:X\to B$ satisfies $v_*g=0$, then $g(x)\in\ker v=\operatorname{im}u$ for every $x$. Injectivity of $u$ gives a unique $f(x)\in A$ with $u(f(x))=g(x)$; uniqueness makes $f$ linear, so $g=u_*f$. [F1, F2]

1.4 If $p^*h=0$, surjectivity of $p$ gives $h=0$, so $p^*$ is injective; and $u^*p^*=0$ because $p\circ u=0$. [F1, F2]

1.5 If $g:B\to X$ satisfies $u^*g=g\circ u=0$, then $g$ vanishes on $\operatorname{im}u=\ker p$. By [L1] it factors uniquely through $B/\ker p$, and since $p$ is surjective the rule $\bar g(p(b))=g(b)$ gives the corresponding homomorphism $\bar g:C\to X$ with $g=\bar g\circ p=p^*(\bar g)$. [F1, F2, L1]

2.1 Steps 1.1 to 1.3 prove the covariant sequence exact, and steps 1.4 and 1.5 prove the contravariant sequence exact. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎

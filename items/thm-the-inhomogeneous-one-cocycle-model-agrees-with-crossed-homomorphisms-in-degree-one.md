---
id: thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one
kind: theorem
title: "The inhomogeneous one-cocycle model agrees with crossed homomorphisms in degree one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-cohomology-via-crossed-homomorphisms, def-first-group-cohomology-via-inhomogeneous-one-cocycles]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

For an abelian $G$-group $A$, the quotient defined by crossed homomorphisms
agrees canonically with the inhomogeneous degree-one cochain model:

$$H^1(G,A)\cong H^1_{\mathrm{inh}}(G,A).$$

## Facts & Assumptions

**Given:** A group $G$ acting on an abelian group $A$.

[L1] The crossed-homomorphism model is $H^1(G,A)=Z^1(G,A)/B^1(G,A)$
([[def-first-cohomology-via-crossed-homomorphisms]]).

[L2] The inhomogeneous degree-one model is $\ker d^1/\operatorname{im} d^0$
with
$$d^1(f)(g,h)=f(g)+g\cdot f(h)-f(gh),\qquad d^0(a)(g)=g\cdot a-a$$
([[def-first-group-cohomology-via-inhomogeneous-one-cocycles]]).

## Proof

**Proof technique:** direct.

1.1 A function $f:G\to A$ lies in $\ker d^1$ exactly when $0=d^1(f)(g,h)=f(g)+g\cdot f(h)-f(gh)$ for all $g,h\in G$, that is, exactly when $f(gh)=f(g)+g\cdot f(h)$. So the one-cocycles in the inhomogeneous complex are exactly the crossed homomorphisms of [L1]. [given, L1, L2]

2.1 A function lies in $\operatorname{im} d^0$ exactly when it has the form $g\mapsto g\cdot a-a$ for some $a\in A$. Those are precisely the principal crossed homomorphisms in [L1]. [L1, L2, step 1.1]

3.1 Steps 1.1 and 2.1 identify both the numerator and denominator of the two quotient constructions. Therefore the quotients themselves are canonically the same, giving the asserted isomorphism. [L1, L2, step 1.1, step 2.1] ∎

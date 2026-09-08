---
id: def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology
kind: definition
title: "Crossed homomorphisms and first cohomology"
status: draft
origin: pipeline
deps: [def-inhomogeneous-group-cochains, cor-normalized-cochains-compute-group-cohomology]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Definition

For a left G-module A (written additively), put
$$Z^1_{\rm cr}(G,A)=\{d:G\to A:d(gh)=d(g)+g d(h)\},\qquad B^1_{\rm cr}(G,A)=\{\delta a:g\mapsto ga-a\}.$$
Define $H^1_{\rm cr}=Z^1_{\rm cr}/B^1_{\rm cr}$. It agrees with normalized bar $H^1(G,A)$; comparison to derived cohomology retains the inherited DC and supplied-resolution convention. The crossed-homomorphism and bar quotient statements themselves require no choice axiom.

## Facts & Assumptions

**Given:** G a group and A a left G-module.

[F1] The inhomogeneous coboundary is the alternating multiplication formula ([[def-inhomogeneous-group-cochains]]).

[F2] Normalized inhomogeneous cochains compute group cohomology under its inherited conventions ([[cor-normalized-cochains-compute-group-cohomology]]).

## Proof

1.1 In degrees zero and one the differential reads $(\delta a)(g)=ga-a$ and $(\delta d)(g,h)=g d(h)-d(gh)+d(g)$. Thus $\delta d=0$ is exactly the crossed-homomorphism identity. Setting g=h=1 gives d(1)=0, so every crossed homomorphism is normalized. Also $(gh)a-a=(ga-a)+g(ha-a)$, so every principal map is crossed. Both sets are additive groups and the principal maps form a subgroup. [F1, given, algebra]

2.1 The cycles and boundaries of normalized degree one are therefore exactly the two groups in the Definition, so their quotient is bar H1 and hence, under the stated convention, the cohomology of F2. For trivial action the crossed identity is the homomorphism identity and every principal map is zero, giving $H^1(G,A)=\operatorname{Hom}(G,A)$. For G=1 or A=0 it is zero. [F2, step 1.1, algebra] ∎

---
id: lem-bar-two-cocycles-classify-abelian-kernel-extensions
kind: lemma
title: "Bar two-cocycles classify abelian-kernel extensions"
status: published
origin: pipeline
deps: [def-inhomogeneous-group-cochains, cor-normalized-cochains-compute-group-cohomology, def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Assume AC. For a group G and a fixed left G-module A, normalized bar $H^2(G,A)$ is in bijection with equivalence classes of extensions $0\to A\to E\to G\to1$ inducing the fixed action on A. The zero class corresponds exactly to extensions with a homomorphic section. The derived interpretation of bar cohomology retains its supplied-resolution comparison convention.

## Facts & Assumptions

**Given:** AC, G and A as stated; extension equivalences fix kernel and quotient.

[F1] The bar coboundary in degree two is the alternating action/multiplication formula ([[def-inhomogeneous-group-cochains]]).

[F2] Normalized cochains compute H2 under the inherited convention ([[cor-normalized-cochains-compute-group-cohomology]]).

[F3] Equivalence fixes the identified kernel and quotient ([[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]).

[F4] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

1.1 For an extension E, apply AC to the nonempty fibers of $E\to G$ and set $s(1)=1$. Unique kernel coordinates define f by $s(g)s(h)=i(f(g,h))s(gh)$. Then $f(1,g)=f(g,1)=0$. Associativity of $s(g)s(h)s(l)$ gives $f(g,h)+f(gh,l)=g f(h,l)+f(g,hl)$, exactly $\delta f=0$. The action term follows from $s(g)i(a)s(g)^{-1}=i(ga)$, the prescribed action. [F1, F4, given, algebra]

2.1 Conversely, for a normalized cocycle f define $E_f=A\times G$ with $(a,g)(b,h)=(a+gb+f(g,h),gh)$. The first coordinates of the two triple products differ by $f(g,h)+f(gh,l)-g f(h,l)-f(g,hl)=0$, so multiplication is associative. The identity is (0,1). The inverse is $(a,g)^{-1}=(-g^{-1}a-g^{-1}f(g,g^{-1}),g^{-1})$; the right product is the identity, and the left product is too since the cocycle identity gives $f(g^{-1},g)=g^{-1}f(g,g^{-1})$. Inclusion $a\mapsto(a,1)$ and projection to G are exact and conjugation induces ga. [F1, step 1.1, algebra]

3.1 A new normalized section $s_b(g)=i(b(g))s(g)$ changes f to $f_b=f+\delta b$, where $(\delta b)(g,h)=b(g)+gb(h)-b(gh)$. The map $E_f\to E_{f_b}$, $(a,g)\mapsto(a-b(g),g)$ is an isomorphism: substitution in the two multiplication laws gives first coordinate $a+gc+f(g,h)-b(gh)$ on both sides. It fixes A and G and has inverse adding b(g). If two normalized cocycles differ by a coboundary, the cochain b is normalized as well, since its coboundary at (1,g) equals b(1). [F1, F3, step 2.1, algebra]

4.1 The map $E_f\to E$, $(a,g)\mapsto i(a)s(g)$, is a homomorphism by the factor-set equation; unique kernel coordinates in each fiber make it a bijection fixing A and G. Conversely any equivalence carries a chosen section to a section and preserves its factor set. Thus the two constructions induce inverse bijections on the quotient by coboundaries and on extension classes. By F2 this quotient is the indicated H2. [F2, F3, step 1.1, step 3.1, algebra]

5.1 If the class is zero, choose a normalized b with $f+\delta b=0$; the section $s_b$ is then a homomorphism. A homomorphic section conversely has f=0 and hence zero class. For A=0 there is the unique extension G, and for G=1 the unique extension A; both have zero class. Only step 1.1 uses arbitrary choice; supplied sections suffice for an individual construction. [step 1.1, step 3.1, step 4.1, algebra] ∎

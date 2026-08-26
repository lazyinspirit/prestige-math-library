---
id: cex-a-symmetric-design-need-not-be-a-projective-plane
kind: counterexample
title: "The complementary $2$-$(7,4,2)$ design is symmetric but not a projective plane"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-skolems-construction-gives-the-fano-plane,
       cor-finite-projective-planes-are-symmetric-two-designs]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
---

## Statement refuted

Every symmetric $2$-design is a projective plane.

## Facts & Assumptions

**Given:** The seven Fano lines on $\mathbb Z/7$ from [[ex-skolems-construction-gives-the-fano-plane]].

[L1] Every projective plane of order $n$ is a symmetric $2$-$(n^2+n+1,n+1,1)$ design ([[cor-finite-projective-planes-are-symmetric-two-designs]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $\mathcal C$ be the family of complements of the seven Fano lines inside the seven-point set $\mathbb Z/7$. Each member of $\mathcal C$ has size $4$, and there are seven of them. [given, algebra]

1.2 Fix distinct points $a,b\in\mathbb Z/7$. Among the seven displayed Fano lines, exactly one contains both $a$ and $b$, and inspection of the list shows that each of $a$ and $b$ lies on exactly three lines. So exactly five lines meet $\{a,b\}$, and therefore exactly two Fano lines avoid both points. Hence exactly two members of $\mathcal C$ contain $\{a,b\}$, so $\mathcal C$ is a $2$-$(7,4,2)$ design. [given, algebra]

2.1 Since $\mathcal C$ has seven blocks on seven points, it is symmetric. If it were a projective plane, then [L1] would make it a symmetric $2$-$(7,4,1)$ design, contradicting step 1.2. Therefore this symmetric design is not a projective plane. [step 1.2, L1] ∎

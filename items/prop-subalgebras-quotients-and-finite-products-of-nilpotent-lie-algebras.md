---
id: prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras
kind: proposition
title: Subalgebras, quotients, and finite products of nilpotent Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-nilpotency-class-of-a-lie-algebra, def-quotient-lie-algebra, def-direct-product-and-direct-sum-of-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 2.5"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 2.5(b), printed p. 12"
---

## Statement

Subalgebras and quotients of nilpotent Lie algebras are nilpotent. A nonempty
finite direct product of nilpotent Lie algebras is nilpotent, and its class is
the maximum of the factor classes. The empty direct product is the zero Lie
algebra and has class $0$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, a subalgebra $\mathfrak h$, an ideal
$\mathfrak i$, and a finite family $(\mathfrak g_j)_{j\in J}$ of nilpotent Lie
algebras.

[L1] Nilpotence is termination of the lower central series
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] Nilpotency class is the least $c$ with $\gamma_{c+1}=0$, and the zero
algebra has class zero ([[def-nilpotency-class-of-a-lie-algebra]]).

[L3] The quotient map is a surjective Lie homomorphism
([[def-quotient-lie-algebra]]).

[L4] Direct products have componentwise brackets, and an empty product is the
zero Lie algebra ([[def-direct-product-and-direct-sum-of-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 Induction gives $\gamma_r(\mathfrak h)\subseteq\gamma_r(\mathfrak g)$ for all $r\geq1$, because $[\mathfrak h,A]\subseteq[\mathfrak g,A]$. Thus any lower-series term vanishing in $\mathfrak g$ also vanishes in $\mathfrak h$. [given, L1, algebra]

1.2 If $\pi:\mathfrak g\to\mathfrak g/\mathfrak i$ is the map in [L3], surjectivity and bracket preservation give $\gamma_r(\mathfrak g/\mathfrak i)=\pi(\gamma_r(\mathfrak g))$ by induction. Hence quotients inherit lower-series termination. [L1, L3, algebra]

2.1 Componentwise bracketing in [L4] gives $\gamma_r(\prod_{j\in J}\mathfrak g_j)=\prod_{j\in J}\gamma_r(\mathfrak g_j)$ for every $r\geq1$. If $J$ is nonempty, let $c=\max_{j\in J}\operatorname{cl}(\mathfrak g_j)$. For $c=0$ every factor, and hence the product, is zero. For $c\geq1$, the product's $(c+1)$st term is zero, while its $c$th term is nonzero in a factor attaining the maximum. Thus [L2] gives class exactly $c$ in either case. If $J$ is empty, [L4] identifies the product with zero and [L2] gives class zero. [L1, L2, L4, algebra] ∎

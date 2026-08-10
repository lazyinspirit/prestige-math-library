---
id: lem-gauss-content-lemma
kind: lemma
title: 'The product of primitive integer polynomials is primitive, and contents multiply'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-content-and-primitive-integer-polynomial, lem-content-divisibility-characterisation, cor-polynomial-ring-over-a-domain-is-a-domain, thm-universal-property-of-a-polynomial-ring, prop-canonical-quotient-ring-map, prop-integers-modulo-n-as-a-quotient-ring, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.14'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Statement

If $f,g\in\mathbb Z[x]$ are primitive, then $fg$ is primitive. More generally, for all nonzero $f,g\in\mathbb Z[x]$,

$$ \operatorname{cont}(fg)=\operatorname{cont}(f)\operatorname{cont}(g). $$

## Facts & Assumptions

**Given:** Nonzero integer polynomials $f,g$.

[L1] Content is the positive gcd of the coefficients, and primitive means content $1$ ([[def-content-and-primitive-integer-polynomial]]).

[L2] A polynomial is primitive exactly when no prime divides all of its coefficients ([[lem-content-divisibility-characterisation]]).

[L3] A polynomial ring over a domain is a domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L4] A ring homomorphism of coefficients extends to a homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

[L5] The canonical quotient map has its defining ideal as kernel ([[prop-canonical-quotient-ring-map]]).

[L6] The ring $\mathbb Z/p$ is the quotient $\mathbb Z/p\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L7] For prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose primitive $f,g$ had nonprimitive product; by [L2] some prime $p$ would divide every coefficient of $fg$, so [L4], [L5], and [L6] would give $\bar f\bar g=0$ in $(\mathbb Z/p)[x]$, while primitiveness makes both reductions nonzero; [L7] and [L3] contradict this. [assume-contra, given, L2, L3, L4, L5, L6, L7]

2.1 For general nonzero $f,g$, [L1] and [L2] allow $f=c(f)f_0$ and $g=c(g)g_0$ with primitive integer polynomials $f_0,g_0$; step 1.1 makes $f_0g_0$ primitive, and the universal divisibility characterization of [L2] then gives $\operatorname{cont}(fg)=c(f)c(g)$. [step 1.1, L1, L2, discharge-contradiction] ∎

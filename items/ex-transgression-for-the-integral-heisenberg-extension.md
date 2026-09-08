---
id: ex-transgression-for-the-integral-heisenberg-extension
kind: example
title: "The Heisenberg transgression and its sign"
status: published
origin: pipeline
deps: [def-low-degree-transgression-for-a-group-extension, lem-bar-two-cocycles-classify-abelian-kernel-extensions]
provenance:
  statement: ai-altered
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
---

## Example

Give $E=\mathbb Z^3$ the product $(a,b,c)(u,v,w)=(a+u,b+v,c+w+av)$. For the central extension $0\to\mathbb Z\to E\to\mathbb Z^2\to0$ and trivial coefficients $A=\mathbb Z$, the transgression of $d:\mathbb Z\to\mathbb Z$, $d(c)=c$, is represented by $F((a,b),(u,v))=-av$ and is nonzero. The displayed section and cochains suffice for this concrete calculation.

## Facts & Assumptions

**Given:** E, A and d are as in the example; use the DHW normalizer-quotient sign convention.

[F1] For invariant d and chosen alpha, eta the normalizer quotient has factor cocycle eta(q)+alpha(q)eta(r)-f(q,r)eta(qr)-d(f(q,r)); its construction works with supplied choices. ([[def-low-degree-transgression-for-a-group-extension]]).

[F2] The factor set of a supplied normalized section represents its extension; a normalized two-coboundary is b(q)+q b(r)-b(qr). ([[lem-bar-two-cocycles-classify-abelian-kernel-extensions]]).

## Verification

1.1 For triples with first two coordinates (a,b), (u,v), (x,y), the extra central terms in the two associative products are $av+(a+u)y$ and $uy+a(v+y)$, which are equal. The identity is (0,0,0) and the inverse of (a,b,c) is $(-a,-b,-c+ab)$ by multiplication on both sides. Projection onto the first two coordinates is an onto homomorphism with central kernel $N=\{(0,0,c)\}$. Thus these formulas really give the stated group extension. [algebra]

2.1 The action on A is trivial and N is central, so d is a crossed homomorphism and conjugation fixes it. Choose $\alpha(a,b)=(a,b,0)$ and $\eta(a,b)=0$. They are normalized and $\alpha(q)*d-d=0=\delta\eta(q)$. Multiplication gives $\alpha(a,b)\alpha(u,v)=(a+u,b+v,av)$, so the factor set, as an element of N identified with $\mathbb Z$, is $f((a,b),(u,v))=av$. F1 yields $F=-f$, not f. These explicit maps supply every choice required for this instance of F1 and F2. [F1, F2, step 1.1, algebra]

3.1 The cochain F vanishes if either input is zero. Its cocycle identity is $-uy+(a+u)y-a(v+y)+av=0$ for the three inputs in step 1.1. With trivial action on the abelian quotient, every coboundary has the form $b(q)+b(r)-b(q+r)$ and is symmetric in q,r. But $F((1,0),(0,1))=-1$, whereas $F((0,1),(1,0))=0$. Thus F is not a coboundary and its class is nonzero. [F2, step 2.1, algebra] ∎

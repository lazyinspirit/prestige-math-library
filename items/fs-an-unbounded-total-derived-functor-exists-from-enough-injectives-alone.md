---
id: "fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone"
kind: "false-statement"
deps: ["def-homotopically-injective-bounded-below-complex", "def-right-total-derived-functor-on-the-bounded-below-derived-category", "thm-baer-criterion-for-injective-modules"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Enough injectives alone licenses the unbounded right-derived-functor recipe using an arbitrary quasi-isomorphism into any termwise injective complex.

## Facts & Assumptions

**Given:** Enough injectives alone licenses the unbounded right-derived-functor recipe using an arbitrary quasi-isomorphism into any termwise injective complex.

[F1] K-injectivity requires vanishing of Hom from every acyclic source into the target shifts ([[def-homotopically-injective-bounded-below-complex]]).

[F2] The defined right total derived functor uses bounded-below injective replacements ([[def-right-total-derived-functor-on-the-bounded-below-derived-category]]).

[F3] Assuming AC, Baer characterizes injectives by extension of maps from all left ideals ([[thm-baer-criterion-for-injective-modules]]).

## Refutation

1.1 Assume AC and put $R=\mathbb Z/4$. Its ideals are $0,2R,R$. An $R$-map $2R\to R$ sends $2$ to $0$ or $2$, so it extends by multiplication by $0$ or $1$. Maps on $0$ and $R$ extend trivially. Baer's criterion therefore makes $R$ injective. The doubly infinite complex $I^i=R,d^i=2$ is termwise injective and acyclic since kernel and image of two both equal $2R$. [F3, algebra]

2.1 For $F=\operatorname{Hom}_R(R/2,-)$, each $F(I^i)$ is $2R\cong\mathbb Z/2$, and its differential is zero. Thus $F(I)$ is not acyclic. The quasi-isomorphism $0\to I$ is a termwise-injective replacement of the zero complex, but this recipe sends it to a nonzero derived object, while replacement by zero gives zero. The unbounded recipe is therefore not well defined. [step 1.1, algebra]

3.1 Indeed $I$ is not K-injective: if its identity were nullhomotopic, the degreewise equation would be $1=2a_i+2a_{i+1}$, impossible modulo two. An acyclic complex must have zero Hom into a K-injective target, so taking the source to be $I$ violates that condition. The bounded-below construction avoids this example through its boundedness hypothesis. This refutes the arbitrary-replacement assertion, not existence of unbounded derived functors by other methods. [F1, F2, step 1.1, algebra] ∎

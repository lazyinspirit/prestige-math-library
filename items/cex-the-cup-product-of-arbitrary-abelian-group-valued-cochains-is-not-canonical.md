---
id: "cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical"
kind: "counterexample"
title: "An additive coefficient group does not determine a cup multiplication"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §3.2 coefficient-ring warning
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

A bare abelian coefficient group determines a unital coefficient multiplication, and hence a unital cup multiplication on its cochains, without additional data.

## Facts & Assumptions

[F1] [[def-singular-cup-product-on-cochains]] uses multiplication of coefficient values in its front/back formula. For degree-zero cochains, its value on a vertex is that coefficient multiplication.

## Counterexample

**Given:** The additive group $G=\mathbb Z^2$. For $x=(a,b)$ and $y=(c,d)$ consider
$$x\cdot y=(ac,bd),\qquad x*y=(ac,ad+bc).$$

1.1 Both operations are bilinear and commutative. The first is associative coordinatewise and has unit $(1,1)$. For the second, if $z=(e,f)$, both $(x*y)*z$ and $x*(y*z)$ equal $(ace,acf+ade+bce)$; its unit is $(1,0)$. Thus these define commutative unital rings on the same additive group. They are respectively $\mathbb Z\times\mathbb Z$ and $\mathbb Z[\epsilon]/(\epsilon^2)$, with $(a,b)$ corresponding to $a+b\epsilon$ in the latter. [given, algebra]

1.2 More strongly, let $\mu:G\times G\to G$ be bilinear and invariant under every additive automorphism, meaning $f(\mu(x,y))=\mu(f(x),f(y))$. With $f=-\mathrm{id}$, bilinearity gives $-\mu(x,y)=\mu(-x,-y)=\mu(x,y)$. Thus $2\mu(x,y)=0$, and torsion-freeness of $\mathbb Z^2$ forces $\mu=0$. A zero multiplication cannot have a unit on a nonzero group, since $\mu(u,(1,0))=0\ne(1,0)$. Consequently no unital multiplication can be recovered in a manner invariant under all additive automorphisms. The zero bilinear pairing is indeed canonical; the refuted claim concerns a unital multiplication, not the existence of any pairing. [given, algebra]

2.1 In the first ring the idempotents are exactly $(0,0),(1,0),(0,1),(1,1)$, since an integer satisfies $a^2=a$ exactly when $a=0$ or $1$. In the second ring, an idempotent satisfies $a^2=a$ and $(2a-1)b=0$. For $a=0$ or $1$, the second equation forces $b=0$. There are exactly two idempotents. Any ring isomorphism bijects idempotents, so these two rings are not isomorphic. [step 1.1, algebra]

3.1 At the point space, degree-zero cochains with values in $G$ are just $G$, and [F1]'s formula multiplies their values. The two displayed ring structures therefore give different cup operations already there, and step 1.2 rules out a natural unital choice from additive data alone. For example $(1,0)\cdot(0,1)=0$, while $(1,0)*(0,1)=(0,1)$. This fixed nonempty, nonzero, degree-zero example has no endpoint or higher-simplex qualification. The zero coefficient group would not witness failure; neither would empty-space cochains. All operations, automorphism and idempotents used here are explicit, with no AC. [F1, step 1.1, step 2.1, step 1.2] ∎

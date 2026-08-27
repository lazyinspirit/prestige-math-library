---
id: lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses
kind: lemma
title: "Product-action wreath products are primitive under the standard hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, def-imprimitive-wreath-product-of-permutation-groups]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Let $H \le \operatorname{Sym}(\Delta)$ be primitive but not regular, let
$K \le S_\ell$ be transitive with $\ell \ge 2$, and let
$H \wr K$ act on $\Delta^\ell$ in its standard product action. Then this action
is primitive.

## Facts & Assumptions

**Given:** A primitive nonregular action of $H$ on $\Delta$, a transitive action of $K$ on $\{1,\dots,\ell\}$ with $\ell \ge 2$, and the induced product action of $H \wr K$ on $\Delta^\ell$.

[A1] In the standard product action, the base group $H^\ell$ acts coordinatewise
and the top group $K$ permutes the coordinates transitively.

[A2] In a faithful primitive nonregular action, distinct points have distinct
stabilizers.  Indeed, equality of point stabilizers is an invariant
equivalence relation; primitivity makes its classes singletons unless every
stabilizer is trivial, which is the regular case.

## Proof

**Proof technique:** direct.

1.1 Let $B \subseteq \Delta^\ell$ be a block containing distinct points $x$ and $y$, and choose a coordinate $i$ with $x_i\ne y_i$. By [A2], some $h\in H_{x_i}$ moves $y_i$. Let $a\in H^\ell$ act as $h$ in coordinate $i$ and trivially elsewhere. Then $a$ fixes $x$, so $aB\cap B\ne\varnothing$ and the block property gives $aB=B$. Hence $y,ay\in B$ are distinct and differ in exactly coordinate $i$. [A2, choose, algebra]

2.1 Fixing the other coordinates, the set of possible entries in coordinate $i$ among points of $B$ is a block for $H$.  It contains the two distinct entries from step 1.1, so primitivity of $H$ makes it all of $\Delta$. Thus $B$ contains the entire $i$-coordinate fibre through $y$. [step 1.1, algebra]

3.1 The stabilizer in $H\wr K$ of any point of $\Delta^\ell$ induces the transitive group $K$ on the coordinates: a coordinate permutation can be followed by coordinatewise elements of the transitive group $H$ to restore the point. Applying these point-stabilizer elements to the fibre in step 2.1 gives a full fibre in every coordinate. Independent coordinate changes then show that $B=\Delta^\ell$. Hence every block is a singleton or the whole set, so the product action is primitive. [A1, step 2.1, algebra] ∎

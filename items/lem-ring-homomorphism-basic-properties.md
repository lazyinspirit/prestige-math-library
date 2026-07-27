---
id: lem-ring-homomorphism-basic-properties
kind: lemma
title: "A ring homomorphism satisfies $f(0) = 0$, $f(-a) = -f(a)$ and $f(ma) = m f(a)$ for $m \\in \\mathbb{Z}$, carries units to units, and has a subring as its image; composites of ring homomorphisms are ring homomorphisms"
status: draft
origin: session
deps: [def-ring-homomorphism, def-ring, def-group-homomorphism, lem-group-homomorphism-basic-properties, def-subring, lem-subring-criterion, def-invertible-element, lem-inverse-unique, lem-ring-units-form-a-group, lem-integer-multiples-in-a-ring, def-group-power]
justified_by: []
aliases: []
landmark: false
short: "ring hom: basic properties"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ring homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_homomorphism"
pipeline_run: null
---

## Statement

Let $R$ and $S$ be rings ([[def-ring]]) and $f : R \to S$ a ring homomorphism
([[def-ring-homomorphism]]). Then:

1. $f(0_R) = 0_S$ and $f(-a) = -f(a)$ for every $a \in R$; consequently
   $f(a - b) = f(a) - f(b)$;
2. $f(ma) = m\,f(a)$ for every $a \in R$ and every $m \in \mathbb{Z}$, the
   multiples being those of [[lem-integer-multiples-in-a-ring]];
3. if $u \in R^{\times}$ then $f(u) \in S^{\times}$ and
   $f(u)^{-1} = f(u^{-1})$;
4. the image $f(R) = \{\, f(a) : a \in R \,\}$ is a subring of $S$
   ([[def-subring]]);
5. if $g : S \to T$ is a ring homomorphism then so is $g \circ f : R \to T$, and
   the identity map of $R$ is a ring homomorphism.

## Facts & Assumptions

**Given:** Rings $R$, $S$ with zeros $0_R$, $0_S$ and identities $1_R$, $1_S$, and a function $f : R \to S$ with $f(x+y) = f(x)+f(y)$, $f(xy) = f(x)f(y)$ and $f(1_R) = 1_S$ ([[def-ring-homomorphism]]).

[A1] $f(x+y) = f(x) + f(y)$ for all $x, y \in R$.

[A2] $f(xy) = f(x)f(y)$ for all $x, y \in R$.

[A3] $f(1_R) = 1_S$.

[L1] $(R,+,0_R)$ and $(S,+,0_S)$ are abelian groups, and by [A1] the map $f$ is a homomorphism of these groups in the sense of [[def-group-homomorphism]] ([[def-ring]]).

[L2] A group homomorphism $h$ satisfies $h(e) = e'$, $h(g^{-1}) = h(g)^{-1}$ and $h(g^{n}) = h(g)^{n}$ for every $n \in \mathbb{Z}$; read additively, $h(0) = 0$, $h(-a) = -h(a)$ and $h(na) = n\,h(a)$ ([[lem-group-homomorphism-basic-properties]], [[def-group-power]]).

[L3] The integer multiple $ma$ in a ring is the integer power of $a$ in its additive group, read additively ([[lem-integer-multiples-in-a-ring]], [[def-group-power]]).

[L4] A unit of a ring is an invertible element of its multiplicative monoid, its inverse is unique, and a single equation $vu = 1$ or $uv = 1$ determines it ([[def-invertible-element]], [[lem-inverse-unique]], [[lem-ring-units-form-a-group]]).

[L5] Subring criterion: $T \subseteq S$ is a subring exactly when $1_S \in T$ and $a - b \in T$ and $ab \in T$ for all $a, b \in T$ ([[lem-subring-criterion]], [[def-subring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the map $f$ is a homomorphism from the additive group of $R$ to the additive group of $S$, so [L2] applies to it. [A1, L1]

1.2 Claim 5: for $x, y \in R$, $(g \circ f)(x+y) = g(f(x)+f(y)) = g(f(x)) + g(f(y))$ and $(g\circ f)(xy) = g(f(x)f(y)) = g(f(x))g(f(y))$, while $(g \circ f)(1_R) = g(1_S) = 1_T$. The identity map satisfies the three conditions trivially. [A1, A2, A3]

1.3 Claim 3: let $u \in R^{\times}$ with inverse $u^{-1}$, so $u u^{-1} = 1_R = u^{-1}u$. Applying $f$ and using [A2] and [A3], $f(u)f(u^{-1}) = f(1_R) = 1_S = f(u^{-1})f(u)$. So $f(u)$ has the two-sided inverse $f(u^{-1})$ in $S$, hence $f(u) \in S^{\times}$, and $f(u)^{-1} = f(u^{-1})$ because inverses in a monoid are unique. [A2, A3, L4]

2.1 Claim 1: [L2] read additively gives $f(0_R) = 0_S$ and $f(-a) = -f(a)$; hence $f(a-b) = f(a + (-b)) = f(a) + f(-b) = f(a) - f(b)$. [step 1.1, A1, L2]

2.2 Claim 2: by [L3] the multiple $ma$ is the integer power of $a$ in $(R,+,0_R)$, and $m f(a)$ is the integer power of $f(a)$ in $(S,+,0_S)$; so the claim is the third part of [L2] read additively. [step 1.1, L2, L3]

3.1 Claim 4: $1_S = f(1_R) \in f(R)$ by [A3]; for $f(a), f(b) \in f(R)$ we have $f(a) - f(b) = f(a-b) \in f(R)$ by step 2.1 and $f(a)f(b) = f(ab) \in f(R)$ by [A2]. So $f(R)$ satisfies the subring criterion. [step 2.1, A2, A3, L5]

4.1 Claims 1 to 5 are established in steps 2.1, 2.2, 1.3, 3.1 and 1.2. [step 1.2, step 2.1, step 2.2, step 1.3, step 3.1] ∎

## Remarks

- **Claim 1 is free, claim 3 is not.** $f(0_R) = 0_S$ comes from additivity
  alone, because the additive structure is a group and cancellation is available
  there ([[lem-group-homomorphism-basic-properties]]). The multiplicative
  analogue would be $f(1_R) = 1_S$, and it is *not* free: it is axiom (RH3) of
  [[def-ring-homomorphism]], and the step proving claim 3 above uses it twice.

- **The image is a subring, not merely a non-unital one**, and that too rests on
  (RH3): without it the image would still be closed under subtraction and
  multiplication but might miss $1_S$, and the companion page's map
  $n \mapsto (n,0)$ has exactly that image.

- **Claim 2 is a dictionary entry, not new arithmetic.** The multiples on both
  sides are the additive powers of [[def-group-power]], so the statement is the
  power law of [[lem-group-homomorphism-basic-properties]] with additive
  notation; nothing is proved twice.

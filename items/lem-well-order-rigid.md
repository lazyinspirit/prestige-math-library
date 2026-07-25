---
id: lem-well-order-rigid
kind: lemma
title: "Rigidity of well-orders"
status: published
origin: session
deps: [def-well-order, def-order-isomorphism, thm-transfinite-induction, def-initial-segment]
justified_by: []
aliases: [lem-no-well-order-isomorphic-to-initial-segment]
landmark: false
short: "strictly increasing $f$ has $a\\le f(a)$; only automorphism is the identity"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-order"
    - title: "Order isomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_isomorphism"
pipeline_run: null
---

## Statement

Let $(W, <)$ be a well-order ([[def-well-order]]) and let $f : W \to W$ be
strictly increasing, that is $x < y \Rightarrow f(x) < f(y)$. Then:

**(a)** $a \le f(a)$ for every $a \in W$;

**(b)** $W$ is not order isomorphic ([[def-order-isomorphism]]) to any proper
initial segment $W_{<a}$ of itself ([[def-initial-segment]]);

**(c)** the identity is the only order isomorphism $W \to W$;

**(d)** for any two well-orders $V$ and $W$ there is **at most one** order
isomorphism $V \to W$.

This is a theorem of ZF; no choice principle is used.

## Facts & Assumptions

**Given:** A well-order $(W, <)$ and a strictly increasing function $f : W \to W$. The well-order $(W, <)$ and the map $f$ are arbitrary, so once claim (a) is proved it may be applied to any well-order and any strictly increasing self-map of it.

[A1] $x < y$ implies $f(x) < f(y)$, for all $x, y \in W$.

[L1] Every nonempty subset of $W$ has a least element, and the order is total, so failure of $f(a) < a$ is exactly $a \le f(a)$ ([[def-well-order]]).

[L2] $W_{<a} = \{x \in W : x < a\}$ is a proper initial segment of $W$ and is itself a well-order ([[def-initial-segment]]).

[L3] An order isomorphism between total orders is a strictly increasing bijection, its inverse is one, composites of order isomorphisms are order isomorphisms, and an order isomorphism carries the initial segment below $x$ onto the initial segment below its image ([[def-order-isomorphism]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $A = \{a \in W : f(a) < a\}$ and suppose, for contradiction, that $A \ne \emptyset$. [construct, assume-contra]

2.1 Being a nonempty subset of $W$, the set $A$ has a least element $m$, and $f(m) < m$ by the definition of $A$. [step 1.1, L1, choose]

3.1 Applying [A1] to $f(m) < m$ gives $f(f(m)) < f(m)$, so $f(m)$ itself lies in $A$. [step 2.1, A1]

4.1 Thus $f(m) \in A$ and $f(m) < m$, contradicting the minimality of $m$ in $A$; so $A = \emptyset$, and by totality $a \le f(a)$ for every $a \in W$, which is claim (a). [step 3.1, step 2.1, L1]

5.1 Claim (b) follows: if $g : W \to W_{<a}$ were an order isomorphism for some $a \in W$, then $g$ followed by the inclusion of $W_{<a}$ into $W$ would be a strictly increasing map $W \to W$, so claim (a) would give $a \le g(a)$, while $g(a) \in W_{<a}$ says $g(a) < a$, and trichotomy forbids both. [step 4.1, L2, L3]

5.2 Claim (c) follows: an order isomorphism $f : W \to W$ is strictly increasing and so is its inverse, so claim (a) gives $a \le f(a)$ and $a \le f^{-1}(a)$ for every $a$; applying $f$ to the second inequality gives $f(a) \le a$, and antisymmetry yields $f(a) = a$. [step 4.1, L3, L1]

6.1 Claim (d) follows: if $g, h : V \to W$ are order isomorphisms then $h^{-1} \circ g$ is an order isomorphism of the well-order $V$ onto itself, hence the identity by claim (c), so $g = h$. [step 5.2, L3]

7.1 The supposition of step 1.1 is therefore refuted, claim (a) holds, and claims (b), (c) and (d) were derived from it in steps 5.1, 5.2 and 6.1; the lemma holds in full. [step 4.1, step 5.1, step 5.2, step 6.1, discharge-contradiction] ∎

## Remarks

**Transfinite induction in disguise.** Steps 1.1 to 4.1 are exactly the proof of [[thm-transfinite-induction]] specialised to the set $S = \{a \in W : a \le f(a)\}$: if $x \le f(x)$ for all $x < a$ then $a \le f(a)$, because $f(a) < a$ would put $f(a)$ below $a$ with $f(f(a)) < f(a)$. The argument can therefore be run by citing that theorem instead of taking a least element by hand, and nothing changes.

**Rigidity is what makes order types well defined.** Claim (d) says a well-order has no room for a nontrivial symmetry, so "the" isomorphism between two isomorphic well-orders is unique and can be spoken of without choosing anything. That is precisely why no choice principle appears anywhere in the comparison of well-orders ([[lem-well-order-comparability]]) or in the assignment of order types ([[thm-mostowski-collapse]]).

**Totality is essential.** For a general poset every claim here fails. On the poset $\{a, b\}$ with $a$ and $b$ incomparable, the swap $a \mapsto b$, $b \mapsto a$ is a nonidentity order automorphism, and the strictly increasing condition is vacuous. It is the least element property, used once in step 2.1, that removes this freedom.

**Only one direction is available.** Claim (a) says $f$ never moves a point strictly down, and no bound in the other direction holds: on $(\mathbb{N}, \le)$ the map $n \mapsto 2n$ is strictly increasing and moves every nonzero point strictly up, as far up as one likes.

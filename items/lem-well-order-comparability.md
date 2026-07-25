---
id: lem-well-order-comparability
kind: lemma
title: "Comparability of well-orders"
status: draft
origin: session
deps: [lem-well-order-rigid, thm-transfinite-recursion, def-initial-segment, def-order-isomorphism, def-well-order]
justified_by: []
aliases: [lem-well-orders-comparable]
landmark: false
short: "one of two well-orders embeds onto an initial segment of the other"
proof_strategy: direct
verification:
  precheck: pass
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

Let $(V, <_V)$ and $(W, <_W)$ be well-orders ([[def-well-order]]). Then
**exactly one** of the following holds ([[def-order-isomorphism]],
[[def-initial-segment]]):

**(i)** $V \cong W$;

**(ii)** $V \cong W_{<b}$ for a unique $b \in W$;

**(iii)** $V_{<a} \cong W$ for a unique $a \in V$.

In particular any two well-orders are comparable: one of them is order
isomorphic to an initial segment of the other. **No choice principle is used**,
which is what makes this the choice-free substitute for cardinal comparability.

## Facts & Assumptions

**Given:** Two well-orders $(V, <_V)$ and $(W, <_W)$, and the axioms of ZF. Write $\cong$ for order isomorphism, and note that the defining condition below is symmetric in $V$ and $W$, so every argument may be repeated with their roles exchanged.

[A1] The axioms of ZF are available, in particular Separation applied to the set $V \times W$. No choice principle is assumed.

[L1] Every nonempty subset of a well-order has a least element and the order is total ([[def-well-order]]).

[L2] $V_{<v} = \{x \in V : x <_V v\}$ is a proper initial segment and is itself a well-order; $(V_{<v'})_{<v} = V_{<v}$ whenever $v <_V v'$; and a proper initial segment is $V_{<v}$ for a unique $v$ ([[def-initial-segment]]).

[L3] Order isomorphisms compose, invert, are strictly increasing, and carry the initial segment below a point onto the initial segment below its image ([[def-order-isomorphism]]).

[L4] No well-order is order isomorphic to a proper initial segment of itself ([[lem-well-order-rigid]]).

## Proof

**Proof technique:** direct.

1.1 By Separation applied to $V \times W$, the collection $f = \{(v, w) \in V \times W : V_{<v} \cong W_{<w}\}$ is a set. [A1, L2, L3, construct]

2.1 $f$ is a function: if $V_{<v} \cong W_{<w}$ and $V_{<v} \cong W_{<w'}$ with $w \ne w'$, say $w <_W w'$, then $W_{<w} = (W_{<w'})_{<w}$ is a proper initial segment of the well-order $W_{<w'}$ and $W_{<w'} \cong V_{<v} \cong W_{<w}$, contradicting [L4]; hence $w = w'$. [step 1.1, L2, L3, L4]

2.2 $f$ is injective: the same argument with the roles of $V$ and $W$ exchanged shows that $V_{<v} \cong W_{<w} \cong V_{<v'}$ forces $v = v'$. [step 1.1, L2, L3, L4]

3.1 Let $v <_V v'$ with $v' \in \mathrm{dom}(f)$, and let $g : V_{<v'} \to W_{<f(v')}$ be an order isomorphism; then $g$ carries $(V_{<v'})_{<v} = V_{<v}$ onto $(W_{<f(v')})_{<g(v)} = W_{<g(v)}$, so $V_{<v} \cong W_{<g(v)}$, whence $v \in \mathrm{dom}(f)$ with $f(v) = g(v)$, and $g(v) \in W_{<f(v')}$ gives $f(v) <_W f(v')$. [step 2.1, L2, L3]

4.1 Consequently $\mathrm{dom}(f)$ is an initial segment of $V$ and $f$ is strictly increasing on it. [step 3.1, L2]

4.2 By the same argument with the roles of $V$ and $W$ exchanged, applied to the transpose of $f$, which is a function because $f$ is injective, $\mathrm{ran}(f)$ is an initial segment of $W$. [step 3.1, step 2.2, L2]

5.1 $f$ is therefore a strictly increasing bijection from the initial segment $\mathrm{dom}(f)$ of $V$ onto the initial segment $\mathrm{ran}(f)$ of $W$, hence an order isomorphism between them. [step 4.1, step 4.2, step 2.2, L3]

6.1 $\mathrm{dom}(f)$ and $\mathrm{ran}(f)$ are not both proper: if $\mathrm{dom}(f) = V_{<a}$ and $\mathrm{ran}(f) = W_{<b}$ then step 5.1 gives $V_{<a} \cong W_{<b}$, so $(a, b) \in f$ and therefore $a \in \mathrm{dom}(f) = V_{<a}$, that is $a <_V a$, which is impossible. [step 5.1, step 1.1, L2]

7.1 Since every initial segment is either the whole set or of the form $V_{<a}$ respectively $W_{<b}$, exactly three configurations remain, and they give (i) $V \cong W$, (ii) $V \cong W_{<b}$, and (iii) $V_{<a} \cong W$ respectively. [step 5.1, step 6.1, L2]

8.1 The three are mutually exclusive: (i) with (ii) gives $W \cong W_{<b}$; (i) with (iii) gives $V \cong V_{<a}$; and (ii) with (iii) give an isomorphism $\varphi : V \to W_{<b}$ whose restriction carries $V_{<a}$ onto $W_{<\varphi(a)}$, so $W \cong V_{<a} \cong W_{<\varphi(a)}$; each conclusion contradicts [L4]. [step 7.1, L3, L4]

8.2 The witnesses are unique: $W_{<b} \cong V \cong W_{<b'}$ forces $b = b'$ by the argument of step 2.1, and $V_{<a} \cong W \cong V_{<a'}$ forces $a = a'$ by the argument of step 2.2. [step 7.1, L4, L2]

9.1 Exactly one of (i), (ii), (iii) holds, with a unique witness in cases (ii) and (iii). [step 7.1, step 8.1, step 8.2] ∎

## Remarks

**Where no choice enters.** The relation $f$ is carved out of $V \times W$ by Separation, and the isomorphisms witnessing $V_{<v} \cong W_{<w}$ are never selected: by rigidity ([[lem-well-order-rigid]]) there is at most one of them, so the definition of $f$ quantifies over them rather than picking one. That is the entire reason comparability of well-orders is a ZF theorem while comparability of arbitrary sets is not.

**An alternative proof by recursion.** One can instead define $f$ by transfinite recursion ([[thm-transfinite-recursion]]), sending $v$ to the least element of $W$ not already in the image of $V_{<v}$, and stopping when $W$ is exhausted. That route needs the recursion theorem and a little care about where the construction halts; the argument above needs only Separation and is recorded here for that reason.

**Comparability is not trichotomy of size.** The statement compares well-orders, not sets. Two sets need not be comparable in size in ZF at all; that they always are is equivalent to the Axiom of Choice. What survives choice-free is this lemma together with [[thm-hartogs]], and the ledger of what each costs is [[rem-choice-ledger]].

**Reading it as a linear order on order types.** Once every well-order is assigned an ordinal ([[thm-mostowski-collapse]]), case (ii) reads "the order type of $V$ is smaller than that of $W$" and case (iii) reads the reverse, so this lemma is the statement that the ordinals are linearly ordered, proved before ordinals are available.

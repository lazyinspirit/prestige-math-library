---
id: cex-additive-rationals-show-finiteness-is-essential
kind: counterexample
title: "The additive rationals do not decompose as a product of finite cyclic prime-power groups"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-rationals, def-group-power, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---
## Statement refuted

The additive group $(\mathbb Q,+)$ is abelian but is not a direct product of finite cyclic groups of prime-power order. This refutes the finite structure theorem after its finiteness hypothesis is deleted.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[L1] On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define $$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$ This is an equivalence relation (lem-rat-equivalence). The **rationals** are the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$. ([[def-rationals]]).

[L2] **Natural exponents, in a monoid.** Let $(M,\cdot,e)$ be a monoid (def-semigroup-and-monoid) and $g \in M$. By the recursion theorem (thm-recursion), applied with the set $M$, the element $e$ and the function $x \mapsto x \cdot g$ from $M$ to $M$, there is exactly one function $\mathbb{N} \to M$, written $n \mapsto g^{n}$, with $$g^{0} = e, \qquad g^{\sigma(n)} = g^{n} \cdot g \quad (n \in \mathbb{N}).$$ In particular $g^{0} = e$ for **every** $g$, including $g = e$, and $g^{1} = g^{\sigma(0)} = e \cdot g = g$. Since $\mathbb{N}$ contains $0$ (def-natural-numbers), the exponent $0$ is a genuine value of the definition and not a separate convention. **Integer exponents, in a group.** Let $G$ be a group (def-group) and $g \in G$. Write $\iota : \mathbb{N} \to \mathbb{Z}$ for the embedding $k = [(k,0)]$ of lem-nat-embeds-int, which is injective, preserves addition, multiplication and order, and has as image exactly the nonnegative integers. For $x \in \mathbb{Z}$ define - $g^{x} := g^{k}$, the natural power, when $0 \le x$ and $x = k$; - $g^{x} := (g^{k})^{-1}$ when $x < 0$ and $-x = k$. **Why this is well defined.** The order on $\mathbb{Z}$ is total and antisymmetric (thm-int-ordered-ring, def-int-order), so exactly one of $0 \le x$ and $x < 0$ holds and the two clauses never both apply. In the first clause $x$ is nonnegative, so $x = k$ for some $k \in \mathbb{N}$, and $k$ is unique because $\iota$ is injective. In the second clause $x < 0$ gives $0 = x + (-x) < 0 + (-x) = -x$ by compatibility of the order with addition (thm-int-ordered-ring, def-int-operations), so $-x$ is a positive integer and again $-x = k$ for a unique $k$. The inverse $(g^{k})^{-1}$ is a single determined element by lem-inverse-unique and def-invertible-element. Finally the two readings of $g^{k}$, as a natural power and as an integer power, agree by construction, so no ambiguity is introduced. **Abbreviation.** In an exponent we write $k$ for the integer $k$ when a natural number $k$ is used where an integer is expected; this is unambiguous because $\iota$ is injective and preserves the arithmetic and the order, and because the two readings of $g^{k}$ agree as just noted. **Additive notation.** When the group is written additively the same object is written $n g$ or $n \cdot g$ rather than $g^{n}$, with $0 g = 0$ and $\sigma(n) g = n g + g$; the definitions are identical, only the symbols differ. ([[def-group-power]]).

[L3] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

## Counterexample

**Proof technique:** direct.

1.1 If $q\in\mathbb Q$ is nonzero and $n>0$, then $nq\ne0$, so $(\mathbb Q,+)$ is nontrivial and torsion-free. [given, L1, L2, L3]

2.1 Any nontrivial product of nontrivial finite cyclic prime-power groups contains a nonzero element of finite order, obtained from a generator in one factor and identities elsewhere. [step 1.1]

3.1 Therefore no such product is isomorphic to $(\mathbb Q,+)$, while the finite theorem makes no claim about this infinite group. [step 2.1] ∎

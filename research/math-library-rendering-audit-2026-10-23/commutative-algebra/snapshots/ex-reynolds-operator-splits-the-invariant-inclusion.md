---
id: ex-reynolds-operator-splits-the-invariant-inclusion
kind: example
title: "When the group order is invertible the Reynolds operator retracts a ring onto its invariants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-subring-of-a-group-of-ring-automorphisms, lem-retract-of-a-noetherian-ring-is-noetherian, thm-noether-finiteness-theorem-for-invariants, def-group-action, def-group, def-ring, def-subring, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Example 5.13 and Proposition 5.11"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Example

Let $G$ be a finite group of order $N\ge1$ acting by ring automorphisms on a
commutative ring $S$ ([[def-invariant-subring-of-a-group-of-ring-automorphisms]]),
and suppose the element $u:=N\cdot1_S$, the $N$-fold sum of $1_S$ with itself, is
invertible in $S$. Define the **Reynolds operator**

$$\rho\colon S\longrightarrow S^{G},\qquad \rho(s):=u^{-1}\sum_{g\in G}g\cdot s .$$

Then $\rho$ takes values in $S^{G}$, is $S^{G}$-linear, and satisfies
$\rho(a)=a$ for every $a\in S^{G}$. So $\rho$ is a retraction of the inclusion
$S^{G}\subseteq S$ as a map of $S^{G}$-modules, and
[[lem-retract-of-a-noetherian-ring-is-noetherian]] gives: **if $S$ is Noetherian
then $S^{G}$ is Noetherian.**

This neither contains nor is contained in
[[thm-noether-finiteness-theorem-for-invariants]]. Noether's theorem needs a
Noetherian subring $A\subseteq S$, the finite-type hypothesis over $A$, and an
action by $A$-algebra automorphisms; this example drops the finite-type and
fixed-base-ring hypotheses, adds the hypothesis that $N$ be invertible, and
concludes only that $S^{G}$ is Noetherian rather than of finite type over a
specified base ring.

## Facts & Assumptions

**Given:** A finite group $G$ of order $N\ge1$ acting by ring automorphisms on a commutative ring $S$ in which $u=N\cdot1_S$ is invertible.

[L1] For an action of a group $G$ on a commutative ring $C$ by ring automorphisms, $C^{G}=\{c\in C:g\cdot c=c$ for every $g\in G\}$ is a subring of $C$, and each $g$ acts as a ring automorphism, so $g\cdot1_C=1_C$ ([[def-invariant-subring-of-a-group-of-ring-automorphisms]]).

[L2] A left action satisfies $e\cdot c=c$ and $(gh)\cdot c=g\cdot(h\cdot c)$ ([[def-group-action]]).

[L3] In a group every element has a two-sided inverse and the operation is associative ([[def-group]]).

[L4] In a ring, addition is associative and commutative, multiplication is associative, $1$ is a two-sided multiplicative identity, and multiplication distributes over addition on both sides ([[def-ring]]).

[L5] A subset $S$ of a ring is a **subring** when $1\in S$ and $S$ is closed under addition, additive inverses and multiplication ([[def-subring]]).

[L6] A function $f\colon M\to N$ between $R$-modules is an **$R$-module homomorphism** when $f(m+m')=f(m)+f(m')$ and $f(rm)=rf(m)$ for all $m,m'\in M$ and $r\in R$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L7] If $R'$ is a Noetherian commutative ring, $R\subseteq R'$ a subring, and $\rho\colon R'\to R$ is $R$-linear with $\rho(x)=x$ for every $x\in R$, then $R$ is Noetherian ([[lem-retract-of-a-noetherian-ring-is-noetherian]]).

[L8] For $A$ Noetherian, $C$ a commutative $A$-algebra of finite type with $A$ a subring of $C$, and $G$ a finite group acting on $C$ by $A$-algebra automorphisms, $C^{G}$ is of finite type over $A$ ([[thm-noether-finiteness-theorem-for-invariants]]).

## Verification

**Proof technique:** direct.

1.1 The element $u=N\cdot1_S$ is fixed by the action, and so is its inverse. Each $h\in G$ acts as a ring homomorphism, so it is additive and sends $1_S$ to $1_S$; applying it to the $N$-fold sum $1_S+\cdots+1_S$ gives $h\cdot u=u$. Applying $h$ to $uu^{-1}=1_S$ gives $u\,(h\cdot u^{-1})=1_S$; left-multiplying by $u^{-1}$ and using associativity, $u^{-1}u=1_S$, and $1_Sx=x$ yields $h\cdot u^{-1}=u^{-1}$. The formula $\rho(s)=u^{-1}\sum_{g\in G}g\cdot s$ therefore defines a function $S\to S$, the sum being over the finite set $G$. [L1, L4, given]

2.1 $\rho$ takes values in $S^{G}$. For $h\in G$, additivity of the action of $h$ and step 1.1 give $h\cdot\rho(s)=u^{-1}\sum_{g\in G}h\cdot(g\cdot s)=u^{-1}\sum_{g\in G}(hg)\cdot s$; and $g\mapsto hg$ is a bijection of $G$ onto itself, with inverse $g\mapsto h^{-1}g$, so it merely reindexes the sum and $h\cdot\rho(s)=\rho(s)$. [L1, L2, L3, step 1.1]

2.2 $\rho$ is $S^{G}$-linear. Additivity is additivity of each $g$ together with associativity and commutativity of addition. For $a\in S^{G}$ and $s\in S$, each $g$ is multiplicative and fixes $a$, so $g\cdot(as)=(g\cdot a)(g\cdot s)=a\,(g\cdot s)$; summing and using distributivity gives $\rho(as)=u^{-1}\,a\sum_{g}(g\cdot s)=a\,\rho(s)$, where $a$ and $u^{-1}$ commute because $S$ is commutative. [L1, L4, L6, step 1.1]

2.3 $\rho$ fixes $S^{G}$ pointwise. For $a\in S^{G}$ every term of the sum is $a$, so $\sum_{g\in G}g\cdot a$ is the $N$-fold sum of $a$, which by distributivity is $ua$; hence $\rho(a)=u^{-1}(ua)=a$. [L1, L4, step 1.1]

3.1 So $S^{G}$ is a subring of $S$ and $\rho\colon S\to S^{G}$ is $S^{G}$-linear with $\rho(a)=a$ for every $a\in S^{G}$: it is a retraction of the inclusion as a map of $S^{G}$-modules. If $S$ is Noetherian, the retraction lemma applies with $R'=S$ and $R=S^{G}$ and gives that $S^{G}$ is Noetherian. [L1, L5, L7, step 2.1, step 2.2, step 2.3]

4.1 The comparison with Noether's theorem, and the caveat. Noether's theorem needs a Noetherian subring $A\subseteq C$, the finite-type hypothesis over $A$, and an action by $A$-algebra automorphisms, and it concludes that $C^{G}$ is of finite type over $A$. The argument here uses none of the finite-type or fixed-base-ring hypotheses and concludes only that $S^{G}$ is Noetherian, at the cost of the invertibility of $u$. That cost is real: in $S=\mathbb F_2[x]$, the substitution $x\mapsto x+1$ defines an automorphism of order $2$, but for the resulting action of the order-two group one has $u=2\cdot1_S=0$, so $\rho$ is not defined. [L8, step 3.1, algebra] ∎

## Remarks

- **The operator is an averaging map, not a ring homomorphism.** It is $S^{G}$-linear and fixes $S^{G}$, but $\rho(st)$ and $\rho(s)\rho(t)$ differ in general. That is exactly why [[lem-retract-of-a-noetherian-ring-is-noetherian]] asks only for an $R$-linear retraction.

- **In the excluded characteristic the conclusion may still hold, by another route.** When $S$ is a finite-type algebra over a Noetherian ring $A$ and the action is by $A$-algebra automorphisms, [[thm-noether-finiteness-theorem-for-invariants]] applies with no hypothesis on the characteristic; what fails when $p$ divides $N$ is this averaging construction, not necessarily the Noetherian conclusion.

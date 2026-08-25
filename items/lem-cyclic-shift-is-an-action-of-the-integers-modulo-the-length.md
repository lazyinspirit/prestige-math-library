---
id: lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length
kind: lemma
title: "Cyclic shifting is an action of $\\mathbb{Z}/m$ on the words of length $m$ over a set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclic-shift-and-the-periodic-partial-sum-function, def-group-action, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-generalised-associativity, def-finite-cardinality, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and $m\ge1$, and let $X^{m}$ be the set of words of length $m$
over $X$, with the shifts $\sigma^{j}$ of
[[def-cyclic-shift-and-the-periodic-partial-sum-function]].

1. $\sigma^{0}$ is the identity of $X^{m}$, and
   $\sigma^{j}(\sigma^{k}a)=\sigma^{j+k}a$ for all $j,k\in\mathbb{Z}$ and
   $a\in X^{m}$.
2. $\sigma^{j}a=\sigma^{j'}a$ whenever $j\equiv j'\pmod m$. Hence
   $[j]_m\cdot a:=\sigma^{j}a$ is a well-defined left action of the additive
   group $\mathbb{Z}/m$ ([[def-integers-modulo-n]],
   [[thm-integers-modulo-n-basic-algebra]]) on $X^{m}$, in the sense of
   [[def-group-action]].
3. For every $x\in X$ the number of positions of $\sigma^{j}a$ carrying the
   letter $x$ equals the number of positions of $a$ carrying $x$. In particular,
   for a word of integers, $\lVert\sigma^{j}a\rVert=\lVert a\rVert$.

## Facts & Assumptions

**Given:** a set $X$, a natural number $m\ge1$, and words of length $m$ over $X$.

[F1] $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$ for $0\le i<m$, where $j\bmod m$ is the unique $r$ with $j=qm+r$ and $0\le r<m$; and $\lVert a\rVert=\sum_{i<m}a_i$ for a word of integers ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] A left action of a group $G$ with identity $e$ on a set $X$ is a function $G\times X\to X$ with $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for all $g,h\in G$ and $x\in X$ ([[def-group-action]]).

[L2] $[j]_m=[j']_m$ holds exactly when $j\equiv j'\pmod m$ ([[def-integers-modulo-n]]).

[L3] $\mathbb{Z}/m$ is a commutative ring under the induced operations, so in particular its addition makes it an abelian group with identity $[0]_m$ ([[thm-integers-modulo-n-basic-algebra]]).

[L4] For a commutative monoid $M$ and $g:\mathbb{N}\to M$, if $\pi$ is a permutation of the von Neumann natural $n$ and $h_i=g_{\pi(i)}$ for every $i<n$, then $\prod_{i<n}h_i=\prod_{i<n}g_i$ ([[thm-generalised-associativity]], clause 3).

[L5] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

[L6] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** direct.

1.1 For every integer $x$ and every $k\in\mathbb{Z}$ one has $((x\bmod m)+k)\bmod m=(x+k)\bmod m$, because $x-(x\bmod m)$ is a multiple of $m$ and adding a multiple of $m$ to the argument changes neither the remainder nor its defining inequalities. [F1, algebra]

2.1 The map $\pi_j:i\mapsto(i+j)\bmod m$ is a permutation of $\{0,\dots,m-1\}$: the map $i\mapsto(i-j)\bmod m$ is a two-sided inverse of it, since by step 1.1 both composites send $i$ to $i\bmod m$, which is $i$ for $0\le i<m$. [F1, L6, step 1.1]

2.2 Clause 1 holds: $(\sigma^{0}a)_i=a_{i\bmod m}=a_i$ for $0\le i<m$, and $(\sigma^{j}(\sigma^{k}a))_i=(\sigma^{k}a)_{(i+j)\bmod m}=a_{(((i+j)\bmod m)+k)\bmod m}=a_{(i+j+k)\bmod m}=(\sigma^{j+k}a)_i$ using step 1.1. [F1, step 1.1]

2.3 Clause 2 holds: if $j\equiv j'\pmod m$ then $(i+j)\bmod m=(i+j')\bmod m$ for every $i$, since the two arguments differ by a multiple of $m$, so $\sigma^{j}a=\sigma^{j'}a$; by [L2] the rule $[j]_m\cdot a:=\sigma^{j}a$ is therefore well defined on $\mathbb{Z}/m$, and by [L3] together with clause 1 it satisfies the two axioms of [L1] with $e=[0]_m$. [F1, L1, L2, L3, step 1.1]

3.1 Clause 3 holds: by step 2.1 the map $\pi_j$ is a permutation of the index set, and it carries the positions of $\sigma^{j}a$ carrying $x$ bijectively onto the positions of $a$ carrying $x$, since $(\sigma^{j}a)_i=x$ exactly when $a_{\pi_j(i)}=x$; so the two counts agree by [L5]. For a word of integers, [L4] applied with $\pi=\pi_j$ gives $\lVert\sigma^{j}a\rVert=\sum_{i<m}a_{\pi_j(i)}=\sum_{i<m}a_i=\lVert a\rVert$. [F1, L4, L5, step 2.1]

4.1 The three clauses are established. [step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **Why the acting group is $\mathbb{Z}/m$ and not $\mathbb{Z}$.** Both act, and
  the $\mathbb{Z}$-action factors through $\mathbb{Z}/m$ by clause 2. Taking the
  finite group is what makes the orbit and stabiliser counts below available, and
  it is the only reason the reduction is recorded.

- **Clause 3 is what confines the action to a level set.** The shift preserves the
  number of positions carrying each letter, so it acts on the words with a
  prescribed letter count and on the words of a prescribed weight. The cycle
  lemma is a statement about one such orbit.

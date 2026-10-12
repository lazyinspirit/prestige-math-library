---
id: ex-cm-bilateral-shift-finite-checks
kind: example
title: "Explicit mixing, periodic and sensitivity checks in the bilateral shift"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive, lem-cm-bilateral-shift-metric-and-sequential-compactness, def-cm-bilateral-shift-space-and-cylinders, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, def-metric-ball, def-metric-topology]
dependency_roles:
  thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics, Sections 2.6-2.7: cylinders, periodic sequences obtained by repeating blocks, and Theorem 2.7.1"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $X=\{0,1\}^{\mathbb Z}$ with the metric $d$ and the shift $\sigma$ of [[def-cm-bilateral-shift-space-and-cylinders]], and let cylinders be written $[w]_{p,q}$.

1. **A metric computation.** Let $x\in X$ be arbitrary and let $y$ agree with $x$ on the coordinates $-2,\dots,2$ and differ at coordinate $3$ only. Then $y\in[x]_{-2,2}$ and $d(x,y)=2^{-3}=1/8$, which is at most $2^{1-2}=1/2$, in accordance with $[x]_{F_m}\subseteq\overline B(x,2^{1-m})$.
2. **A periodic point in a prescribed cylinder.** The word $(1,0,1)$ on the coordinates $-1,0,1$ extends to the $3$-periodic sequence $s$ with $s_{-1}=1$, $s_0=0$, $s_1=1$ and $s_{k+3}=s_k$ for all $k$. Then $s\in[1,0,1]_{-1,1}$ and $\sigma^3(s)=s$.
3. **A sensitivity witness.** For every $x\in X$ and every $k\ge1$, let $y$ agree with $x$ except at coordinate $k$, where $y_k=1-x_k$. Then $d(x,y)=2^{-k}$ and $d(\sigma^k(x),\sigma^k(y))\ge1$.
4. **A mixing computation.** For the cylinders $U=[1,0]_{0,1}$ and $V=[0]_{-1,-1}$, one has $\sigma^n(U)\cap V\ne\emptyset$ for every $n\ge2$.

## Facts & Assumptions

**Given:** The shift space $(X,d)$, the shift $\sigma$ and the cylinder notation.

[L1] A cylinder $[w]_{p,q}$ is the set of sequences with prescribed finite block; $d$ is a metric; and $\sigma^n(x)_k=x_{k+n}$ ([[def-cm-bilateral-shift-space-and-cylinders]], [[lem-cm-bilateral-shift-metric-and-sequential-compactness]]).

[L2] The shift is topologically mixing, has dense periodic points and is sensitive with constant $1$ ([[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]], [[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]).

## Verification

**Proof technique:** direct; evaluate the definitions on the explicit sequences.

1.1 Since $y_j=x_j$ for $|j|\le2$, every term of $d(x,y)$ with $|j|\le2$ vanishes; the only nonzero term is the one with $j=3$, equal to $2^{-3}|x_3-y_3|=2^{-3}$. Hence $d(x,y)=1/8\le2^{1-2}$, which illustrates the second inclusion of [[lem-cm-bilateral-shift-metric-and-sequential-compactness]] on a concrete pair. [given, L1, algebra]

1.2 The displayed sequence $s$ is well defined because the prescription is periodic, it lies in the cylinder $[1,0,1]_{-1,1}$ by construction, and $\sigma^3(s)_k=s_{k+3}=s_k$ for every $k$, so $\sigma^3(s)=s$; thus $s$ is a periodic point of $\sigma$ and it lies in the prescribed cylinder, illustrating clause 3 of [L2] on an explicit block. [given, L1, L2, algebra]

1.3 For $y$ as in item 3, exactly one term of the defining sum of $d(x,y)$ is nonzero, so $d(x,y)=2^{-k}$. Moreover $\sigma^k(x)_0=x_k\ne y_k=\sigma^k(y)_0$, so the term with $j=0$ in the sum for $d(\sigma^k(x),\sigma^k(y))$ equals $1$ and all terms are nonnegative; hence $d(\sigma^k(x),\sigma^k(y))\ge1$. This realizes the sensitivity constant $1$ of [L2] with the pair $(x,y)$. [given, L1, L2, algebra]

2.1 Compute $\sigma^n(U)=\{z:z_{-n}=1,\ z_{1-n}=0\}$ and $V=\{z:z_{-1}=0\}$; the intersection is nonempty exactly when the three coordinate prescriptions are consistent, which they are as soon as no two of the coordinates $-n$, $1-n$, $-1$ coincide with conflicting values. For $n=1$ the prescriptions are $z_{-1}=1$ and $z_{-1}=0$, a contradiction, so $\sigma(U)\cap V=\emptyset$. For $n\ge2$: if $n=2$ the coordinates are $-2,-1,-1$ and the prescriptions are $z_{-2}=1$, $z_{-1}=0$, consistent; if $n\ge3$ the three coordinates are distinct, so a sequence with the prescribed values exists. Hence $\sigma^n(U)\cap V\ne\emptyset$ for every $n\ge2$, as claimed, and the mixing condition of [L2] holds on this pair of basic open sets with $N=2$. [given, L1, L2, algebra] ∎

## Remarks

- Item 4 is a finite check of the "all sufficiently large $n$" quantifier: the intersection fails at $n=1$ but succeeds for every $n\ge2$. This is exactly the distinction between mixing and the weaker open-set transitivity, and no uniformity over all pairs of cylinders is claimed by the computation.

- The example uses no measure on $X$; the statements verified are the topological ones of [[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]].

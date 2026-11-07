---
id: lem-artinian-top-layer-detection-removes-largest-cyclic-summand
kind: lemma
title: Top-layer detection removes a largest cyclic summand
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: []
proof_strategy: direct
axiom_use: Only a supplied finite decomposition and finitely many explicit module operations are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barry Mazur and Karl Rubin, Controlling Selmer groups in the higher core rank case
      url: https://arxiv.org/pdf/1312.4052v1
      locator: Section 8, Proposition 8.3, induction step, printed p. 18; the algebraic kernel calculation is expanded here.
verification: {}
---

## Statement

Let $R$ be a commutative principal Artinian local ring of composition length $k\ge1$, with maximal ideal $(\pi)$. Let a nonzero module $Q$ have a supplied decomposition
$$Q\cong\bigoplus_{i=1}^h R/(\pi^{e_i}),\qquad k\ge e_1\ge e_2\ge\cdots\ge e_h\ge1.$$
Put $e=e_1$. For an $R$-linear map $f:Q\to R$, the following conditions are equivalent: $f(\pi^{e-1}Q)\ne0$; the image of $f$ has length $e$; and $\operatorname{im}f=(\pi^{k-e})$. If these conditions hold, the surjection $Q\to\operatorname{im}f$ splits and
$$\ker f\cong\bigoplus_{i=2}^h R/(\pi^{e_i}).$$
Consequently, starting from this decomposition, any supplied sequence of $t\le h$ maps from successive kernels to $R$, each detecting the top nonzero power of its domain, leaves a kernel isomorphic to $\bigoplus_{i>t}R/(\pi^{e_i})$. This assertion does not supply such maps.

## Statement references

[Mazur–Rubin, Section 8, Proposition 8.3](https://arxiv.org/pdf/1312.4052v1)

## Facts & Assumptions

**Given:** The ring, finite decomposition and map in the Statement. In the last assertion the sequence of detecting maps is supplied. All isomorphisms are $R$-linear; length means composition length.

## Proof

1.1 The powers of $\pi$ eventually vanish. Indeed, the descending chain of their ideals stabilizes, and $\pi^jR=\pi^{j+1}R$ implies $\pi^j=\pi^{j+1}a$, whence $\pi^j=0$ because $1-\pi a$ is a unit. Every nonzero element is a unit times a power of $\pi$: choose its largest power-ideal membership before the vanishing power, write it as $\pi^j u$, and observe that $u$ cannot lie in $(\pi)$. Every nonzero ideal is therefore a power of $(\pi)$ by taking a member of least exponent. The nonzero successive power quotients of $R$ are one-dimensional over $R/(\pi)$, so there are exactly $k$ of them. In particular $\pi^k=0$, $\pi^{k-1}\ne0$, $\operatorname{ann}_R(\pi^a)=(\pi^{k-a})$ for $0\le a\le k$, and $\operatorname{length}_R(\pi^bR)=k-b$ for $0\le b\le k$. [given, algebra]

2.1 Since $\pi^eQ=0$, its image is an ideal killed by $\pi^e$ and is contained in $(\pi^{k-e})$. If nonzero, write it as $(\pi^b)$ with $k-e\le b\le k-1$. Then $f(\pi^{e-1}Q)=\pi^{e-1}\operatorname{im}f$ is nonzero exactly when $b+e-1<k$, hence exactly when $b=k-e$. By step 1.1 this is also exactly when the image has length $e$. A zero image satisfies none of the three conditions. This proves the equivalence. [given, step 1.1, algebra]

3.1 Suppose these conditions hold. Set $A=R/(\pi^e)$ and identify $A$ with $(\pi^{k-e})$ by $a\bmod\pi^e\mapsto\pi^{k-e}a$; step 1.1 proves that this map is well-defined and bijective. Regard $f$ through this identification as a surjection $g:Q\to A$. Let $x_i$ denote the supplied cyclic generators. Some $g(x_j)$ is a unit in $A$, since otherwise the finite set of images generates an ideal contained in the maximal ideal of $A$ and cannot generate $A$. Necessarily $e_j=e$, since $\pi^{e_j}g(x_j)=0$ and a unit in $A$ has annihilator $(\pi^e)$ in $R$. Write $b=g(x_j)$ and define $s:A\to Q$ by $s(a)=ab^{-1}x_j$. This is well-defined because $\pi^e x_j=0$, and $g\circ s$ is the identity. Thus the original surjection onto its image splits. [given, step 1.1, step 2.1, construct, algebra]

4.1 For $i\ne j$ put $z_i=x_i-s(g(x_i))$. These elements lie in $\ker g$ and satisfy $\pi^{e_i}z_i=0$, so they define a map $\theta:\bigoplus_{i\ne j}R/(\pi^{e_i})\to\ker g$. Projection of $Q$ onto the summands other than $j$ sends $z_i$ to $x_i$, and is therefore a left inverse to $\theta$. Conversely, for $y\in\ker g$ subtract from $y$ the image under $\theta$ of its projection. The difference lies in the $j$th summand and in $\ker g$; the restriction of $g$ to that summand is multiplication by the unit $b$, so this difference is zero. Hence $\theta$ is an isomorphism. Deleting index $j$ gives the displayed list with index $1$ deleted, since $e_j=e_1$. Also $\ker g=\ker f$. [given, step 3.1, construct, algebra]

5.1 Apply steps 2.1–4.1 to the first supplied detecting map and transport its kernel decomposition to the next map. Finite induction deletes the current largest exponent at each stage and gives the asserted tail after $t$ steps. The case $t=0$ is the supplied decomposition, and $t=h$ has zero kernel and no further detection condition. The cases $h=1$, $e=1$ and $e=k$ are already included: the target ideal is respectively treated by the same splitting, the socle ideal, and $R$ itself. [given, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source notes

This research draft expands the algebraic implication in the induction step of Proposition 8.3: nonzero localization of a class in the top nonzero power of the dual module gives a quotient of maximal cyclic length, and its kernel loses precisely one largest summand. The complete relevant argument in Section 8, including Propositions 8.3, 8.5 and 8.7 and Theorems 8.6 and 8.9, was read in the repository text extraction, lines 1404–1682. No arithmetic prime-selection theorem, local-condition comparison, or existence of a detecting localization map is asserted here. No supplier is installed by this draft.

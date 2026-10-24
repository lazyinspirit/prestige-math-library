---
id: cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake
kind: corollary
title: "The kernel-cokernel sequence of a composite is a snake"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abelian-category,
       thm-snake-lemma-in-an-abelian-category,
       thm-the-kernel-cokernel-sequence-of-a-composite]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

For composable morphisms $A \xrightarrow{f} B \xrightarrow{g} C$ in an abelian
category, the exact sequence of
[[thm-the-kernel-cokernel-sequence-of-a-composite]] is an instance of the snake
sequence.

## Facts & Assumptions

**Given:** Composable morphisms $A \xrightarrow{f} B \xrightarrow{g} C$.

[L1] The snake lemma gives an exact kernel-cokernel sequence for a morphism of short exact sequences ([[thm-snake-lemma-in-an-abelian-category]]).

[L2] The composite already has a kernel-cokernel exact sequence ([[thm-the-kernel-cokernel-sequence-of-a-composite]]).

[L3] An abelian category is additive and has finite biproducts ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Consider the canonical split short exact sequences $0\to A\xrightarrow{j_A}A\oplus B\xrightarrow{\pi_B}B\to0$ and $0\to B\xrightarrow{j_B}B\oplus C\xrightarrow{\pi_C}C\to0$, with vertical maps $f:A\to B$, $m:A\oplus B\to B\oplus C$, and $g:B\to C$, as illustrated in Remarks. Here $j_A,j_B$ are the first-summand injections, $\pi_B,\pi_C$ are the second-summand projections, and, in biproduct matrix notation, $$m=\begin{pmatrix}f&-1_B\\0&g\end{pmatrix},\qquad m(a,b)=(f(a)-b,g(b)).$$ The relations $m j_A=j_B f$ and $\pi_C m=g\pi_B$ show that the two squares commute, so [L1] applies. [L1, L3, given, construct]

2.1 The map $a\mapsto(a,f(a))$ identifies $\ker(gf)$ with $\ker(m)$: the equations $m(a,b)=0$ are exactly $b=f(a)$ and $gf(a)=0$. These coordinate equations hold for morphisms from every test object, so they establish the kernel universal property. Dually, let $q_{gf}:C\to Q_{gf}$ be a cokernel of $gf$. The map $$h:B\oplus C\longrightarrow Q_{gf},\qquad (b,c)\longmapsto q_{gf}(c+g(b))$$ is a cokernel of $m$: a map $t=(u,v):B\oplus C\to T$ annihilates $m$ exactly when $uf=0$ and $u=vg$, so $vgf=0$ and $t$ factors uniquely through $h$. Thus $h$ identifies $\operatorname{coker}(m)$ with $\operatorname{coker}(gf)$. [L1, L2, L3, step 1.1, algebra]

2.2 Write $k_g:\ker(g)\to B$ and $q_f:B\to\operatorname{coker}(f)$ for the chosen kernel and cokernel. With the positive identifications in step 2.1, the snake connecting morphism is $-q_f k_g$: the lift $(0,k_g):\ker(g)\to A\oplus B$ satisfies $m(0,k_g)=j_B(-k_g)$, and the connecting construction of [L1] applies $q_f$ to this first coordinate. The other snake arrows are the canonical comparison maps of [L2]. Transport the snake sequence by the identity on its three kernel objects and by $-1$ on its three cokernel objects. This changes the connecting arrow to $q_f k_g$, while the signs cancel on both arrows between cokernel objects. The resulting exact sequence is $$0\to\ker(f)\to\ker(gf)\to\ker(g)\xrightarrow{q_f k_g}\operatorname{coker}(f)\to\operatorname{coker}(gf)\to\operatorname{coker}(g)\to0.$$ [L1, L2, L3, step 1.1, step 2.1, algebra]

3.1 The maps in step 2.2 are the canonical comparison maps of [L2], so the kernel-cokernel sequence of a composite is a special case of the snake lemma, after the indicated isomorphisms of kernel and cokernel objects. [L2, step 2.2] ∎

## Remarks

The morphism of split short exact sequences used in step 1.1 is shown below. Its maps and the two commutativity relations are specified in that step; the proof establishes the identifications and the connecting-map sign independently of this figure.

```tikzcd
0 \arrow[r] & A \arrow[r, "j_A"] \arrow[d, "f"'] & A\oplus B \arrow[r, "\pi_B"] \arrow[d, "m"'] & B \arrow[r] \arrow[d, "g"'] & 0 \\
0 \arrow[r] & B \arrow[r, "j_B"'] & B\oplus C \arrow[r, "\pi_C"'] & C \arrow[r] & 0
```

---
id: ex-heisenberg-group-is-nilpotent-of-class-two
kind: example
title: "The integral Heisenberg group is nilpotent of class two"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Example

On $H=\mathbb Z^3$, define
$$(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab').$$
This is the integral Heisenberg group. Its commutator subgroup is $\{(0,0,c):c\in\mathbb Z\}$, which is central and nontrivial, so $H$ is nilpotent of class two.

## Facts & Assumptions

**Given:** The displayed operation on $H=\mathbb Z^3$.

[F1] A group operation must be associative and have an identity and inverses ([[def-group]]).

[F2] $\gamma_2(H)=[H,H]$ and $\gamma_3(H)=[H,\gamma_2(H)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] For $c=2$, the condition $\gamma_3(H)=1$ is equivalent to the existence of a central series of length two, and the least terminating index is the nilpotency class ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

## Verification

**Proof technique:** direct.

1.1 The element $(0,0,0)$ is an identity and $(a,b,c)^{-1}=(-a,-b,-c+ab)$. [given, algebra]

2.1 Both $(xy)z$ and $x(yz)$ have first two coordinates equal to the coordinate sums and third coordinate $c+c'+c''+ab'+ab''+a'b''$, so the operation is associative. Thus [F1] makes $H$ a group. [given, step 1.1, F1, algebra]

2.2 Direct use of step 1.1 gives $$[(a,b,c),(a',b',c')]=(0,0,ab'-a'b).$$ Hence every commutator lies in $C:=\{(0,0,c):c\in\mathbb Z\}$. [step 1.1, algebra]

3.1 Every element of $C$ commutes with every element of $H$, and $[(1,0,0),(0,c,0)]=(0,0,c)$; therefore $[H,H]=C\le Z(H)$. [step 2.2, algebra]

4.1 By [F2], $\gamma_3(H)=[H,C]=1$, while $(0,0,1)\in\gamma_2(H)$ is nonidentity. Thus [L1] gives nilpotency class exactly two. [step 3.1, F2, L1] ∎

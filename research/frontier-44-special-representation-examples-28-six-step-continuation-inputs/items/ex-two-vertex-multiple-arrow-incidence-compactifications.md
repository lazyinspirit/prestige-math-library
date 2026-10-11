---
id: ex-two-vertex-multiple-arrow-incidence-compactifications
kind: example
title: "Multiple-arrow incidence compactifications in dimension one at each vertex"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-axiom-of-choice,
       lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992v2, Sec. 1.1"
      url: "https://arxiv.org/pdf/0901.3992"
      locator: "the representation space $E_V$, the incidence variety of stable flags and the rank and dimension bookkeeping of the two-vertex case"
    - title: "T. Bozec, Quivers with loops and perverse sheaves, arXiv:1401.5302v4, Sec. 1.1"
      url: "https://arxiv.org/pdf/1401.5302"
      locator: "increasing flags $F_{i,a}$, the incidence of pairs $(x,W)$ with $x_h(W)\\subseteq W$, and the proper projection $\\pi_{i,a}$"
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Take
two vertices $i,j$, $h\ge0$ arrows $i\to j$, no other arrows, and
$\beta_i=\beta_j=1$. Then $E_V=\mathbb C^h$. For the increasing word $(i,j)$ the
stable incidence is the point $x=0$; for the word $(j,i)$ it is all of
$\mathbb C^h$.

## Verification

**Given:** the two-vertex loopless quiver with $h\ge0$ arrows $i\to j$ and
$\beta_i=\beta_j=1$, the two words $(i,j)$ and $(j,i)$, and the choice
assumption of the Example.

1.1 In either word the graded flag base is a single point, since the only full graded flag of $V=V_i\oplus V_j$ with one line in each color is $0\subset V_i\subset V$. There are no arrows other than $i\to j$, and $\operatorname{Hom}(V_i,V_j)=\mathbb C$, so $E_V=\mathbb C^h$, with coordinates the $h$ arrow entries. For the word $(i,j)$ the first line is $V_i$, and stability at $r=1$ forces $x_h(V_i)\subseteq F^1_j=0$, so every arrow coordinate vanishes and the subbundle rank is zero; for the word $(j,i)$ the first line is $V_j$, stability at $r=1$ reads $x_h(F^1_i)=x_h(0)=0\subseteq V_j$ and at $r=2$ reads $x_h(V_i)\subseteq V_j$, both automatic, so every arrow coordinate is free and the rank is $h$. These are the rank counts $\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ of the incidence lemma [[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]], namely $0$ for $(i,j)$ and $h$ for $(j,i)$. [given, algebra]

2.1 The lemma's compactification adjoins a trivial line to the incidence subbundle, so the line-projective sources are $\mathbb P_{\rm lines}(0\oplus\mathcal O)$, a point over the flag point, and $\mathbb P_{\rm lines}(\mathbb C^h\oplus\mathcal O)$, and the corresponding maps to $\mathbb P_{\rm lines}(\mathbb C^h\oplus\mathbb C)=\mathbb P^h$ are the point $[0:1]$ and the identity $\mathbb P^h\to\mathbb P^h$ respectively. The inverse image of the affine chart $t\ne0$ is, exactly as in the lemma, the total space of the subbundle over the flag point: the point $x=0$ in the first case and all of $\mathbb C^h$ in the second. For $h=0$ both words give the two point maps, so arbitrary multiplicity including the zero case is covered. [step 1.1, algebra] ∎

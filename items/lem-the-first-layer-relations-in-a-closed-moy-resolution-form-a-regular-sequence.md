---
id: lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence
kind: lemma
title: "The first-layer relations of a closed MOY resolution form a regular sequence"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex, def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-regular-sequence-on-a-module, def-koszul-complex-of-a-sequence-with-coefficients, thm-regular-sequences-give-acyclic-koszul-complexes, cor-koszul-complex-resolves-a-regular-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; Lemma 1 and its proof, printed pp. 7-8"
      url: "https://arxiv.org/pdf/math/0510265"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Keep the closed marked MOY resolution $D$, the ring
$\widetilde R=\mathbb Q[x_{i,j}:0\le i\le r,\,1\le j\le m]$ and the
$(r+1)m$-element sequence of
[[lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex]],
written in the layer order: at layer $1\le i\le r$, with the $i$-th wide edge at
positions $s,s+1$, the two relations
$$\beta_i=x_{i,s}+x_{i,s+1}-x_{i-1,s}-x_{i-1,s+1},\qquad \gamma_i=x_{i,s}x_{i,s+1}-x_{i-1,s}x_{i-1,s+1},$$
then the $m-2$ differences $x_{i,j}-x_{i-1,j}$ for $j\notin\{s,s+1\}$; the last
$m$ elements are the closure differences $x_{0,j}-x_{r,j}$ $(1\le j\le m)$.

Then the first $rm$ elements, taken in the layer order $i=1,\dots,r$ with the
displayed order inside each layer, form a regular sequence on $\widetilde R$
([[def-regular-sequence-on-a-module]]), and the Koszul complex of these $rm$
elements is a free resolution of the quotient
$$\widetilde R/(\text{first }rm)\cong B'(D)=\bigotimes_{j=1}^{r}B'_{s_j},$$
the unreduced tensor product of
[[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]],
identifying the quotient with the balanced tensor over the shared strand
variables. The last $m$ closure differences are excluded from this sequence;
they are not a regular sequence in general, and their Koszul homology is
computed by the diagonal Hochschild complex on the remaining closure elements.

## Facts & Assumptions

**Given:** a closed marked MOY resolution $D$ with $r$ wide edges and $m$ strands, the ring $\widetilde R$, and the layer-ordered sequence of the statement.

[L1] The sequence and its layer structure are those of [[lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex]]: at layer $i$ the wide edge occupies positions $s,s+1$, and the relations $\beta_i,\gamma_i$ together with the differences $x_{i,j}-x_{i-1,j}$ $(j\notin\{s,s+1\})$ are precisely the $m$ relations of that layer, the closure differences being listed last.

[L2] A sequence $u_1,\dots,u_N$ in a commutative unital ring $A$ is $A$-regular when $A/(u_1,\dots,u_{k-1})\ne0$ and multiplication by $u_k$ is injective on it for every $k$, and $A/(u_1,\dots,u_N)\ne0$ ([[def-regular-sequence-on-a-module]]).

[L3] A sequence of elements of $A[x_1,\dots,x_N]$ that can be matched bijectively with the variables so that the $k$-th element is monic of positive degree in the $k$-th variable after the previous elements have been divided out is a regular sequence: quotienting by a monic polynomial in one variable exhibits the quotient as a free module over the remaining ring, and a nonzerodivisor in $A$ stays a nonzerodivisor in $A[x]$; the resulting quotient is nonzero and free over $\mathbb Q$ in the cases below.

[L4] In the
two-variable polynomial ring $A=\mathbb Q[c,d]$ with symmetric subring
$B=\mathbb Q[c+d,cd]$, the assignment $y\mapsto1\otimes d$ induces an isomorphism of
graded $A$-modules
$$\mathbb Q[c,d][y]/(y^2-(c+d)y+cd)\cong A\otimes_BA,$$
both sides being free of rank two over $A$ on the classes of $1,y$ respectively
on $1\otimes1,1\otimes d$.

[L5] If $\mathbf u$ is $A$-regular then $K(\mathbf u;A)$ is a finite free resolution of $A/(\mathbf u)$ ([[thm-regular-sequences-give-acyclic-koszul-complexes]], [[cor-koszul-complex-resolves-a-regular-quotient]]), and $K(\mathbf u;A)$ is the Koszul complex of [[def-koszul-complex-of-a-sequence-with-coefficients]].



## Proof

**Proof technique:** direct.

1.1 Set $A_0:=\mathbb Q[x_{0,1},\dots,x_{0,m}]$, so that $\widetilde R=A_0[x_{1,1},\dots,x_{1,m}][x_{2,1},\dots,x_{2,m}]\cdots[x_{r,1},\dots,x_{r,m}]$, and let $Q_i$ be the quotient of the truncated polynomial ring $A_0[x_{k,j}:1\le k\le i]$ by the elements of the first $i$ layers. At every induction stage the unused later variables are polynomial extensions of this ring. We prove by induction on $i$ that the concatenation of the first $i$ layers is a regular sequence and that $Q_i$ is a free $\mathbb Q$-module, nonzero. [L1, given, algebra]

2.1 Assume $Q_{i-1}$ computed and nonzero, and consider layer $i$ in the ring $Q_{i-1}[x_{i,1},\dots,x_{i,m}]$. Write $c:=x_{i-1,s}$, $d:=x_{i-1,s+1}$. The first relation $\beta_i=x_{i,s}+x_{i,s+1}-c-d$ is monic of degree one in $x_{i,s}$ with coefficient $1$, so it is a nonzerodivisor and its quotient is free over $Q_{i-1}[x_{i,s+1},x_{i,j}(j\ne s,s+1)]$ with basis $\{1\}$. In that quotient, substituting $x_{i,s}=c+d-x_{i,s+1}$ turns the second relation into $-(x_{i,s+1}^2-(c+d)x_{i,s+1}+cd)$, which is monic of degree two in $x_{i,s+1}$ with leading coefficient $-1$; it is a nonzerodivisor. Each remaining difference $x_{i,j}-x_{i-1,j}$ is monic of degree one in the corresponding new variable $x_{i,j}$ and so is a nonzerodivisor on the successive quotients. Thus the $m$ elements of layer $i$ form a regular sequence on $Q_{i-1}[x_{i,1},\dots,x_{i,m}]$ with nonzero quotient free over $Q_{i-1}$. Concatenating with the induction hypothesis, the first $i$ layers form a regular sequence on $\widetilde R$, and $Q_i$ is nonzero and free over $\mathbb Q$. [L2, L3, step 1.1, algebra]

3.1 Identify $Q_r$ with $B'(D)$. At layer $i$, the quotient is the base change along $\mathbb Q[c,d]\to Q_{i-1}$ of $\mathbb Q[c,d][y]/(y^2-(c+d)y+cd)$, with $y=x_{i,s+1}$. By [L4] it is the corresponding base change of $A\otimes_BA$; explicitly $x_{i,s}\mapsto1\otimes c$ and $x_{i,s+1}\mapsto1\otimes d$, while the previous-layer variables act on the left. Both maps are inverse because $x_{i,s}=c+d-y$ and both modules have basis $1,y$; the differences at the other positions identify $x_{i,j}$ with the corresponding variable of the previous layer without changing the ring. Iterating over the layers, the surviving ring is generated by all layer variables subject to the displayed invariant-balancing relations and is the balanced tensor product over the shared strand variables of one two-variable balanced tensor $A\otimes_BA$ per wide edge; each such tensor is the two-variable case of the unreduced simple-reflection bimodule $B'_{s}$ of [[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]], and the iteration over layers is the balanced tensor product over the shared variables defining $B'(D)=\bigotimes_{j=1}^rB'_{s_j}$. [L4, step 2.1, algebra]

4.1 Conclude the resolution statement. By steps 1.1 and 2.1 the first $rm$ elements are $\widetilde R$-regular and their quotient is $B'(D)$, which is nonzero; since $K(\text{first }rm;\,\widetilde R)$ is a finite free complex by its definition and a regular sequence has acyclic positive Koszul homology, [L5] exhibits it as a finite free resolution of the quotient $B'(D)$. The closure differences are not included in the sequence and nothing is claimed about their regularity. [L2, L5, step 2.1, step 3.1] ∎ 
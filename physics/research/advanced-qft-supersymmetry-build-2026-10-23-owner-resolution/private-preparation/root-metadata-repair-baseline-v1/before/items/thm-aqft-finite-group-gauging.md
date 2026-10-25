---
id: thm-aqft-finite-group-gauging
kind: theorem
title: Finite cocycle-weighted groupoid gauging and gluing
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-aqft-background-gauging-data
  - def-qftx-finite-groupoid-integration
  - def-qftx-finite-homotopy-pullback
dependency_roles:
  def-aqft-background-gauging-data: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
  def-qftx-finite-homotopy-pullback: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: No choice principle is used; all groupoids, morphism sets, and sums are finite.
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: https://arxiv.org/pdf/2510.07408
      locator: "§§23.2–23.3, PDF pp. 92–99, for homotopy-pullback correspondences, finite pushforward, and the requirement to use homotopy cardinality for gluing."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
      locator: "§2, PDF pp. 8–11, Lemma 2.4 and Theorem 2.13, for automorphism-weighted finite sums and the cocycle-weighted gluing law."
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§§6.2 and 6.4–6.5, PDF pp. 22–30, for the finite 3D Dijkgraaf–Witten action and its ordered-triangulation conventions."
---

## Statement

Let $K=K_1\cup_\Sigma K_2$ be a finite ordered simplicial complex written as a union of two finite subcomplexes with common subcomplex $\Sigma$. Let $\mathcal F$, $\mathcal F_1$, $\mathcal F_2$, and $\mathcal S$ be finite background field groupoids for $K$, $K_1$, $K_2$, and $\Sigma$, with restriction functors $r_i:\mathcal F_i\to\mathcal S$. The homotopy pullback $\mathcal H=\mathcal F_2\times^h_{\mathcal S}\mathcal F_1$ has objects $(x_2,x_1,\alpha)$ with $\alpha:r_2(x_2)\overset{\cong}{\longrightarrow}r_1(x_1)$ and morphisms $(u_2,u_1)$ satisfying $r_1(u_1)\circ\alpha=\alpha'\circ r_2(u_2)$.

Assume that restriction induces an equivalence $J:\mathcal F\to\mathcal H$. Let $W,W_1,W_2$ be $U(1)$-valued cocycle/action weights on these groupoids, and assume that under $J$ the weight factors as $W(x_2,x_1,\alpha)=W_2(x_2)W_1(x_1)$. For each object $s$ of $\mathcal S$, define the homotopy fiber $(\mathcal F_i)_s$ to have objects $(x_i,\eta_i:r_i(x_i)\overset{\cong}{\longrightarrow}s)$ and morphisms $u_i$ satisfying $\eta'_i\circ r_i(u_i)=\eta_i$, and put

$$ Z_i(s):=\sum_{[(x_i,\eta_i)]\in\pi_0((\mathcal F_i)_s)} \frac{W_i(x_i)}{|\operatorname{Aut}_{(\mathcal F_i)_s}(x_i,\eta_i)|}. $$

Then the normalized gauging sums are finite, are invariant under replacement of a field by a gauge-isomorphic field, and satisfy

$$ Z_K(W)= \sum_{[s]\in\pi_0(\mathcal S)} \frac{Z_2(s)Z_1(s)}{|\operatorname{Aut}_{\mathcal S}(s)|}. $$

This is a finite groupoid theorem. A finite cocycle action is covered only when its evaluated weights obey the stated arrow-invariance and gluing-factorization hypotheses.

## Statement references

[[def-aqft-background-gauging-data]]

[[def-qftx-finite-groupoid-integration]]

[[def-qftx-finite-homotopy-pullback]]

## Facts & Assumptions

**Given:** The finite groupoids and restriction functors in the Statement, invariant phase weights $W,W_1,W_2$, an equivalence $J:\mathcal F\to\mathcal H$, and the stated factorization of weights under $J$.

[F1] [[def-aqft-background-gauging-data]]: a finite background field groupoid retains its automorphism groups; a cocycle/action weight is constant on every arrow; its gauging sum is the sum over isomorphism classes weighted by $1/|\operatorname{Aut}|$.

[F2] [[def-qftx-finite-groupoid-integration]]: for a finite groupoid, weighted integration sums over isomorphism classes with reciprocal automorphism weights; a homotopy fiber over $s$ consists of pairs $(x,\eta:p(x)\cong s)$ with arrows commuting with $\eta$.

[F3] [[def-qftx-finite-homotopy-pullback]]: a homotopy-pullback object consists of two source objects and an isomorphism between their images; its morphisms are compatible pairs of source arrows.

## Proof

1.1 Each $W_i$ is constant on gauge arrows by [F1]. It therefore descends to isomorphism classes, and the finite groupoid integrals defining $Z_K(W)$ and $Z_i(s)$ are finite by [F2]. [given, F1, F2, algebra]

1.2 An equivalence of groupoids induces a bijection on isomorphism classes and an isomorphism on each object's automorphism group. Since $J$ also preserves the weight by the factorization hypothesis, the normalized sum on $\mathcal F$ equals the weighted groupoid cardinality of $\mathcal H$. [given, F1, F2, construct]

1.3 Fix representatives $x_2\in\mathcal F_2$ and $x_1\in\mathcal F_1$. The finite set of possible third entries of homotopy-pullback objects represented by this pair is $\operatorname{Iso}_{\mathcal S}(r_2(x_2),r_1(x_1))$. The group $\operatorname{Aut}(x_2)\times\operatorname{Aut}(x_1)$ acts on it by $(u_2,u_1)\cdot\alpha=r_1(u_1)\circ\alpha\circ r_2(u_2)^{-1}$. Its orbits are exactly the isomorphism classes of triples with this pair of source classes, and the stabilizer of $\alpha$ is the automorphism group of $(x_2,x_1,\alpha)$ by the compatibility equation in [F3]. [given, F3, construct]

1.4 For a fixed boundary representative $s$, the automorphism group of $(x_i,\eta_i)$ in $(\mathcal F_i)_s$ is the subgroup of $\operatorname{Aut}_{\mathcal F_i}(x_i)$ preserving $\eta_i$. The action of $\operatorname{Aut}_{\mathcal F_i}(x_i)$ on the finite set $\operatorname{Iso}_{\mathcal S}(r_i(x_i),s)$ has these stabilizers. Orbit-stabilizer therefore gives $Z_i(s)=\sum_{[x_i]\in\pi_0(\mathcal F_i)}W_i(x_i)|\operatorname{Iso}_{\mathcal S}(r_i(x_i),s)|/|\operatorname{Aut}_{\mathcal F_i}(x_i)|$. [given, F2, algebra]

2.1 By orbit-stabilizer, summing the reciprocal stabilizer orders over the orbits in step 1.3 gives $\sum_{[\alpha]}1/|\operatorname{Aut}_{\mathcal H}(x_2,x_1,\alpha)|=|\operatorname{Iso}_{\mathcal S}(r_2(x_2),r_1(x_1))|/(|\operatorname{Aut}_{\mathcal F_2}(x_2)|\,|\operatorname{Aut}_{\mathcal F_1}(x_1)|)$. Multiplying by $W_2(x_2)W_1(x_1)$ and summing over $[x_2]$ and $[x_1]$ gives the weighted sum on $\mathcal H$. [F1, step 1.3, algebra]

3.1 Expanding $\sum_{[s]}Z_2(s)Z_1(s)/|\operatorname{Aut}_{\mathcal S}(s)|$ by step 1.4 reduces its coefficient for fixed $[x_2],[x_1]$ to $\sum_{[s]\in\pi_0(\mathcal S)}|\operatorname{Iso}(r_2(x_2),s)|\,|\operatorname{Iso}(r_1(x_1),s)|/|\operatorname{Aut}_{\mathcal S}(s)|$. If the two boundary objects are not isomorphic, every summand is zero. If they are isomorphic, there is exactly one contributing isomorphism class $[s]$; each isomorphism set in the numerator is a torsor for $\operatorname{Aut}_{\mathcal S}(s)$, so the displayed sum equals $|\operatorname{Aut}_{\mathcal S}(s)|$, which is also the cardinality of $\operatorname{Iso}_{\mathcal S}(r_2(x_2),r_1(x_1))$. This is the coefficient in step 2.1. [given, F2, step 1.4, step 2.1, algebra]

4.1 Steps 1.2, 2.1, and 3.1 identify the normalized sum on $\mathcal F$ with the stated boundary sum. Step 1.1 proves gauge invariance of every summand and finiteness of all sums. [given, F1, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Gluing diagram

The comparison functor $J$ sends a global background to its two restrictions and their boundary isomorphism. The displayed square is homotopy cartesian by the equivalence hypothesis in the Statement. The proof above uses the explicit homotopy-pullback objects and their automorphism groups, not the drawing.

~~~tikzcd
\mathcal F \arrow[r,"\mathrm{res}_2"] \arrow[d,"\mathrm{res}_1"'] &
\mathcal F_2 \arrow[d,"r_2"] \\
\mathcal F_1 \arrow[r,"r_1"'] &
\mathcal S
~~~

## Remarks

The theorem proves a finite weighted gluing law under an explicit groupoid-equivalence and cocycle-factorization hypothesis. It does not establish that a continuum gauge theory exists or that a proposed higher-group cochain model realizes a physical symmetry. The full finite two-group specialization retains vertex gauge-of-gauge transformations and uses the separate higher gauging theorem; the present ordinary-groupoid theorem remains valid with exactly its stated hypotheses.

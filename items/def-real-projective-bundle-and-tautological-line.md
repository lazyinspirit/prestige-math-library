---
id: def-real-projective-bundle-and-tautological-line
kind: definition
title: Real projective bundle and tautological line
status: published
origin: pipeline
deps: ["def-locally-trivial-fiber-bundle", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "def-real-and-complex-topological-vector-bundle", "thm-vector-bundles-glued-from-transition-cocycles", "thm-quotient-universal-property", "def-axiom-of-choice"]
axiom_strength: "ZF for the quotient construction and numerations; AC for the compact-fiber total-space consequence."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.1 projective bundles, printed pp.77–78"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 projective-bundle relation, printed pp.123–126"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§7 projective and flag constructions, printed pp.83–96"
verification:
  audited: 2026-09-22
---

## Definition

Let $E\to B$ be a numerable real vector bundle of rank $n\geq1$ over an
arbitrary topological base, with linear trivializing cover $(U_i)_{i\in I}$ and transition
functions $g_{ji}:U_i\cap U_j\to\operatorname{GL}_n(\mathbb R)$. Write
$\mathbb{RP}^{n-1}$ for the space of lines (one-dimensional linear subspaces)
of $\mathbb R^n$, and for a linear isomorphism $g$ let $[g]$ denote the induced
homeomorphism of $\mathbb{RP}^{n-1}$.

The **projective bundle** $P(E)\to B$ is the quotient
$$P(E)=\Bigl(\coprod_i U_i\times\mathbb{RP}^{n-1}\Bigr)\Big/\sim,\qquad (x,\ell)\sim\bigl(x,[g_{ji}(x)]\ell\bigr)\ \text{for }x\in U_i\cap U_j,$$
with the quotient topology, and $p:P(E)\to B$ induced by the first-coordinate
maps; here $P(E)$ is to be read as the chosen quotient model, whose identity as
a topological space over $B$ is checked in the Verification. Its fiber over
$b$ is $P(E_b)$, the projectivization of the fiber $E_b$, so it is a locally
trivial fiber bundle with fiber $\mathbb{RP}^{n-1}$ in the sense of
[[def-locally-trivial-fiber-bundle]], numerated by the same cover and partition
of unity that numerates $E$.

The **tautological line** $\gamma_E$ is the quotient
$$\gamma_E=\Bigl(\coprod_i U_i\times\gamma^{n-1}\Bigr)\Big/\sim,\qquad (x,\ell,v)\sim\bigl(x,\,[g_{ji}(x)]\ell,\,g_{ji}(x)v\bigr),$$
where $\gamma^{n-1}=\{(\ell,v)\in\mathbb{RP}^{n-1}\times\mathbb R^n:v\in\ell\}$
is the tautological line over $\mathbb{RP}^{n-1}$ and the equivalence is formed
on the overlap $U_i\cap U_j$. The coordinates $(x,\ell)$ give a map
$\gamma_E\to P(E)$ whose fiber over a point $(b,L)$ of $P(E)$ is recognized with
the line $L\subseteq E_b$ itself; it is a rank-one real vector bundle over
$P(E)$.

Assuming AC, by
[[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]],
$P(E)$ is again a paracompact Hausdorff CGWH space of CW type whenever $B$ is a
paracompact Hausdorff CGWH space of CW type, since
it is the total space of a numerable bundle with compact fiber
$\mathbb{RP}^{n-1}$; the Verification below records the same numeration
statement.

Two degenerate cases are fixed by convention. For $n=1$ the fiber
$\mathbb{RP}^0$ is a point, $P(E)\cong B$ over $B$, and $\gamma_E$ corresponds
to $E$ under this identification. For $n=0$ the projectivization of a
zero-dimensional space carries no line; we set $P(E)=\varnothing$ and let
$\gamma_E$ be the empty bundle over the empty space. For the empty base both
$P(E)$ and $\gamma_E$ are empty.

The projective and tautological quotient constructions and their supplied numerations below require no choice. AC is assumed only for the asserted paracompactness/CW-type consequence.

## Facts & Assumptions

**Given:** A numerable real rank-$n$ bundle $E\to B$ over an arbitrary topological base with a linear trivializing cover $(U_i)$ and transition functions $g_{ji}$, and the notation above.

[F1] Linear charts of $E$ have transition functions $g_{ji}:U_i\cap U_j\to\operatorname{GL}_n(\mathbb R)$ satisfying $g_{ii}=I$ and $g_{ki}=g_{kj}g_{ji}$, and a numeration consists of such charts together with a locally finite partition of unity subordinate to the cover ([[def-real-and-complex-topological-vector-bundle]]).

[F2] The quotient of $\coprod_iU_i\times\mathbb F^n$ by the cocycle relation is a vector bundle with charts $\Phi_i$, and every rank-$n$ bundle is recovered from the cocycle of any linear atlas ([[thm-vector-bundles-glued-from-transition-cocycles]]).

[F3] A locally trivial fiber bundle is a continuous projection together with fiber homeomorphisms $\theta_i:p^{-1}(U_i)\to U_i\times F$ over $U_i$, and its overlap changes are the corresponding homeomorphism-valued cocycles ([[def-locally-trivial-fiber-bundle]]).

[F4] A map out of a quotient is continuous exactly when its composite with the quotient map is continuous ([[thm-quotient-universal-property]]).

[A1] For the total-space consequence only, assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F5] Under AC, a numerable compact-Hausdorff-fiber bundle over a paracompact Hausdorff base has paracompact Hausdorff total space; if the base is CGWH, so is the total space, and if the base and fiber have CW homotopy type, so does the total space ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

## Verification
1.1 The projectivized transitions are well defined and obey the cocycle law. For $x\in U_i\cap U_j$ the linear isomorphism $g_{ji}(x)$ carries lines to lines and depends continuously on $x$, so the joint map $(x,\ell)\mapsto[g_{ji}(x)]\ell$ is continuous. Indeed on a projective coordinate chart choose the representative with a specified coordinate equal to one, apply the continuous matrix, and take its nonzero-vector projective quotient. The identities of [F1] give $[g_{ii}(x)]=\operatorname{id}$ and $[g_{ki}(x)]=[g_{kj}(x)][g_{ji}(x)]$ for $x\in U_i\cap U_j\cap U_k$, because projectivization is functorial for composition of linear isomorphisms. Reading the displayed relation on the overlaps, the cocycle law makes $\sim$ reflexive, symmetric and transitive: it is the same calculation as in [F2] with $[g_{ji}]$ in place of $g_{ji}$. Therefore the quotient $P(E)$ exists, and the induced projection $p:P(E)\to B$ is continuous by [F4], since its composite with the quotient map is the first-coordinate projection on each summand. [F1, F2, F4]

2.1 The quotient is a numerable fiber bundle with fiber $\mathbb{RP}^{n-1}$. Let $Q:\coprod_iU_i\times\mathbb{RP}^{n-1}\to P(E)$ be the quotient map. It is open: if $O$ is open in the disjoint union, then on the $j$-th summand the saturation $Q^{-1}Q(O)$ is the union, over $i$, of the images of $O\cap((U_i\cap U_j)\times\mathbb{RP}^{n-1})$ under the overlap homeomorphisms $(x,\ell)\mapsto(x,[g_{ji}(x)]\ell)$, and is therefore open. Thus $Q(O)$ is open by the definition of the quotient topology. It follows that the restrictions of $Q$ to the $i$-th summands are open onto $p^{-1}(U_i)$. The maps $$\Phi_i:p^{-1}(U_i)\longrightarrow U_i\times\mathbb{RP}^{n-1},\qquad \Phi_i[x,\ell,k]=\bigl(x,[g_{ik}(x)]\ell\bigr)$$ are well defined, continuous by [F4], and inverse over $U_i$ to the maps $(x,\ell)\mapsto[x,\ell,i]$; the latter maps are open by the preceding calculation. Hence they are homeomorphisms over $U_i$, so $P(E)$ is a locally trivial fiber bundle with fiber $\mathbb{RP}^{n-1}$ in the sense of [F3]. The given numerating cover and partition of unity of $E$ serve unchanged, since the chart domains are the same $U_i$ and their supports are already subordinate; hence $P(E)$ is numerable. [F1, F3, F4, step 1.1]

3.1 The tautological quotient has the local bundle descriptions $U_i\times\gamma^{n-1}$: the same open-saturation argument as in step 2.1 applies to the overlap homeomorphisms $(x,\ell,v)\mapsto(x,[g_{ji}(x)]\ell,g_{ji}(x)v)$. Inside each such description refine the base by $D_{i,a}=\{(x,\ell):v_a\ne0\text{ for }0\ne v\in\ell\}$, for $1\leq a\leq n$. The unique vector $w_a(\ell)\in\ell$ with coordinate $a$ equal to one is a continuous nonzero section. The map $(x,\ell,t)\mapsto(x,\ell,t w_a(\ell))$ and its inverse, which reads the $a$-th coordinate of the vector, are continuous linear bundle charts. Thus the tautological quotient is a rank-one real bundle with the asserted fiber, not generally trivial over all of $p^{-1}(U_i)$. [F1, F3, F4, step 1.1, step 2.1]

3.2 If $B$ is paracompact Hausdorff CGWH of CW type and AC is assumed, [F5] applies to the numerable projective bundle of step 2.1: the fiber is the compact Hausdorff finite CW space $\mathbb{RP}^{n-1}$. It follows directly that $P(E)$ is paracompact Hausdorff, CGWH, and of CW type, which is the asserted total-space consequence. [A1, F5, step 2.1]

4.1 An explicit refined numeration needs no choice. In chart $i$ put $s_{i,a}(\ell)=v_a^2/\sum_bv_b^2$, independent of the nonzero representative, and $d_{i,a}=\max(s_{i,a}-1/(2n),0)$. Since some $s_{i,a}\geq1/n$, the sum $D_i=\sum_a d_{i,a}$ is positive. Put $\theta_{i,a}=d_{i,a}/D_i$, and define $\psi_{i,a}=(\rho_i\circ p)\theta_{i,a}$ on $p^{-1}(U_i)$, extended by zero elsewhere. This extension is continuous since points outside $U_i$ have a neighborhood disjoint from the closed support of $\rho_i$. The family is locally finite, because the base family is locally finite and there are only $n$ coordinates for each $i$. Its sum is one. Its closed support lies in $p^{-1}(\operatorname{supp}\rho_i)$ and in the locus $s_{i,a}\geq1/(2n)$, hence inside $D_{i,a}$. It is therefore support-subordinate to the actual line charts of step 3.1, proving numerability of $\gamma_E$. [F1, step 2.1, step 3.1]

5.1 For $n=1$, the projective fiber is a point, so the displayed charts identify $P(E)$ with $B$ and $\gamma_E$ with $E$. Rank zero uses only the declared empty-space convention, not the formulas involving $1/(2n)$. An empty base gives empty quotients. Steps 1.1, 2.1, 3.1 and 4.1 use the supplied charts and partition and finite coordinate operations only; AC enters solely in step 3.2 through [F5]. [A1, F1, F5, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

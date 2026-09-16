---
id: def-real-projective-bundle-and-tautological-line
kind: definition
title: Real projective bundle and tautological line
status: draft
origin: pipeline
deps: ["def-real-and-complex-topological-vector-bundle", "def-locally-trivial-fiber-bundle", "thm-vector-bundles-glued-from-transition-cocycles", "thm-quotient-universal-property", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type"]
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
---

## Definition

Let $E\to B$ be a numerable real vector bundle of rank $n\geq1$ over an
admissible base, with linear trivializing cover $(U_i)_{i\in I}$ and transition
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
$$\gamma_E=\Bigl(\coprod_i U_i\times\gamma^{n-1}\Bigr)\Big/\sim,\qquad (x,v,\ell)\sim\bigl(x,\,g_{ji}(x)v,\,[g_{ji}(x)]\ell\bigr),$$
where $\gamma^{n-1}=\{(\ell,v)\in\mathbb{RP}^{n-1}\times\mathbb R^n:v\in\ell\}$
is the tautological line over $\mathbb{RP}^{n-1}$ and the equivalence is formed
on the overlap $U_i\cap U_j$. The first two coordinates give a map
$\gamma_E\to P(E)$ whose fiber over a point $(b,L)$ of $P(E)$ is recognized with
the line $L\subseteq E_b$ itself; it is a rank-one real vector bundle over
$P(E)$.

By
[[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]],
$P(E)$ is again a paracompact Hausdorff space of CW type whenever $B$ is, since
it is the total space of a numerable bundle with compact fiber
$\mathbb{RP}^{n-1}$; the Verification below records the same numeration
statement.

Two degenerate cases are fixed by convention. For $n=1$ the fiber
$\mathbb{RP}^0$ is a point, $P(E)\cong B$ over $B$, and $\gamma_E$ corresponds
to $E$ under this identification. For $n=0$ the projectivization of a
zero-dimensional space carries no line; we set $P(E)=\varnothing$ and let
$\gamma_E$ be the empty bundle over the empty space. For the empty base both
$P(E)$ and $\gamma_E$ are empty.

## Facts & Assumptions

**Given:** A numerable real rank-$n$ bundle $E\to B$ over an admissible base with a linear trivializing cover $(U_i)$ and transition functions $g_{ji}$, and the notation above.

[F1] Linear charts of $E$ have transition functions $g_{ji}:U_i\cap U_j\to\operatorname{GL}_n(\mathbb R)$ satisfying $g_{ii}=I$ and $g_{ki}=g_{kj}g_{ji}$, and a numeration consists of such charts together with a locally finite partition of unity subordinate to the cover ([[def-real-and-complex-topological-vector-bundle]]).

[F2] The quotient of $\coprod_iU_i\times\mathbb F^n$ by the cocycle relation is a vector bundle with charts $\Phi_i$, and every rank-$n$ bundle is recovered from the cocycle of any linear atlas; the proof uses only that a map out of the quotient is continuous exactly when its composite with the quotient map is continuous, and that the quotient map is open ([[thm-vector-bundles-glued-from-transition-cocycles]]).

[F3] A locally trivial fiber bundle is a continuous projection together with fiber homeomorphisms $\theta_i:p^{-1}(U_i)\to U_i\times F$ over $U_i$, and its overlap changes are the corresponding homeomorphism-valued cocycles ([[def-locally-trivial-fiber-bundle]]).

[F4] A map out of a quotient is continuous exactly when its composite with the quotient map is continuous ([[thm-quotient-universal-property]]).

## Verification
1.1 The projectivized transitions are well defined and obey the cocycle law. For $x\in U_i\cap U_j$ the linear isomorphism $g_{ji}(x)$ carries lines to lines and depends continuously on $x$, so $[g_{ji}]:U_i\cap U_j\to \operatorname{Homeo}(\mathbb{RP}^{n-1})$ is a continuous map, and $[g_{ji}(x)]\ell$ is a continuous function of $(x,\ell)$. The identities of [F1] give $[g_{ii}(x)]=\operatorname{id}$ and $[g_{ki}(x)]=[g_{kj}(x)][g_{ji}(x)]$ for $x\in U_i\cap U_j\cap U_k$, because projectivization is functorial for composition of linear isomorphisms. Reading the displayed relation on the overlaps, the cocycle law makes $\sim$ reflexive, symmetric and transitive: it is the same calculation as in [F2] with $[g_{ji}]$ in place of $g_{ji}$. Therefore the quotient $P(E)$ exists, and the induced projection $p:P(E)\to B$ is continuous by [F4], since its composite with the quotient map is the first-coordinate projection on each summand. [F1, F2, F4]

2.1 The quotient is a numerable fiber bundle with fiber $\mathbb{RP}^{n-1}$. By the openness argument of [F2], the quotient map is open and restrictable, so the maps $$\Phi_i:p^{-1}(U_i)\longrightarrow U_i\times\mathbb{RP}^{n-1},\qquad \Phi_i[x,\ell,k]=\bigl(x,[g_{ik}(x)]\ell\bigr)$$ are well defined, continuous by [F4], and inverse over $U_i$ to the maps $(x,\ell)\mapsto[x,\ell,i]$. They are homeomorphisms over $U_i$, so $P(E)$ is a locally trivial fiber bundle with fiber $\mathbb{RP}^{n-1}$ in the sense of [F3]. The given numerating cover and partition of unity of $E$ serve unchanged, since the chart domains are the same $U_i$ and their supports are already subordinate; hence $P(E)$ is numerable. [F2, F3, F4, step 1.1]

3.1 The tautological line is a rank-one bundle. The relation in $\gamma_E$ is defined by homeomorphisms: for $x\in U_i\cap U_j$, the map $(v,\ell)\mapsto(g_{ji}(x)v,[g_{ji}(x)]\ell)$ is a homeomorphism of $\gamma^{n-1}$ carrying the fiber $\ell$ linearly isomorphically onto $[g_{ji}(x)]\ell$, and the cocycle law of step 1.1 makes the relation an equivalence relation. The projection $[x,v,\ell]\mapsto[x,\ell,i]$ is well defined, continuous by [F4], and its fibers are the lines of $E$, so $\gamma_E\to P(E)$ is a real vector bundle of rank one in the sense of [[def-real-and-complex-topological-vector-bundle]]; it is numerable with the same cover. When $n=1$, $\mathbb{RP}^0$ is a single point, $[g]$ is the identity for every $g$, and the charts of steps 2.1 and 3.1 identify $P(E)\cong B$ and $\gamma_E\cong E$ over $B$. When $n=0$ the stated convention gives the empty bundle over the empty space. All constructions use the supplied cocycle and no choice principle. [F1, F2, F3, F4, step 1.1, step 2.1] ∎

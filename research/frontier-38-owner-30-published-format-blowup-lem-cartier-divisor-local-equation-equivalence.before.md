---
id: lem-cartier-divisor-local-equation-equivalence
kind: lemma
title: "Cartier divisor local equation equivalence"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-kernel-cokernel-image-sheaves
  - def-quotient-group
  - def-sheaf-on-topological-space
  - def-sheaf-total-quotient-rings
  - def-sheafification
  - def-stalk-of-presheaf
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-sheafification-preserves-stalks
  - thm-sheafification-universal-property
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
---

## Statement

Let $X$ be a scheme with sheaf of meromorphic functions $\mathcal K_X$ and
injective structure map $\mathcal O_X\to\mathcal K_X$
([[def-sheaf-total-quotient-rings]]), and let
$Q=\mathcal K_X^{\times}/\mathcal O_X^{\times}$ be the quotient sheaf of
Cartier divisors ([[def-cartier-divisor]]).

Call a **local-equation datum** on $X$ a family
$\{(U_i,f_i)\}_{i\in I}$, where $\{U_i\}$ is an open cover of $X$ and
$f_i\in\mathcal K_X^{\times}(U_i)$ satisfies
$f_i/f_j\in\mathcal O_X^{\times}(U_i\cap U_j)$ for all $i,j$. Then:

1. every local-equation datum determines a section $s\in Q(X)$ whose
   restriction to $U_i$ is the class of $f_i$;
2. every section $s\in Q(X)$ is induced by a local-equation datum;
3. if two local-equation data induce the same $s$, then, after passing to a
   common refinement $\{W_k\}$ and choosing indices with
   $W_k\subseteq U_i\cap V_j$, there exist units
   $u_k\in\mathcal O_X^{\times}(W_k)$ with
   $f_i|_{W_k}=u_k\,g_j|_{W_k}$.

In particular the sections of $Q$ are exactly the local-equation data modulo
refinement of the cover and multiplication of the equations by local units.

## Facts & Assumptions

**Given:** A scheme $X$ with meromorphic sheaf $\mathcal K_X$, the injective
structure map $\mathcal O_X\to\mathcal K_X$, and the quotient sheaf
$Q=\mathcal K_X^{\times}/\mathcal O_X^{\times}$ of
[[def-cartier-divisor]].

[F1] The quotient sheaf $\mathcal K_X^{\times}/\mathcal O_X^{\times}$ is
defined as the sheafification of the presheaf
$U\mapsto\mathcal K_X^{\times}(U)/\mathcal O_X^{\times}(U)$; local equations
whose ratios are units glue to a global section
([[def-cartier-divisor]]).

[F2] For a morphism of sheaves of abelian groups, the cokernel sheaf is the
sheafification of the cokernel presheaf, and the kernel sheaf is the
objectwise kernel ([[def-kernel-cokernel-image-sheaves]]).

[F3] Sheafification preserves stalks
([[thm-sheafification-preserves-stalks]]).

[F4] Every element of a presheaf stalk is represented by a section on a
neighbourhood of the point ([[def-stalk-of-presheaf]]).

[F5] The kernel of a quotient group homomorphism is the subgroup being
quotiented by ([[def-quotient-group]]).

[F6] The structure map $\mathcal O_X\to\mathcal K_X$ is injective on every
stalk, as proved in step 2.1 of
[[def-sheaf-total-quotient-rings]]. Hence
$\mathcal O_{X,x}^{\times}$ embeds in $\mathcal K_{X,x}^{\times}$.

[F7] A morphism of sheaves whose stalk maps are bijections is an isomorphism
([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F8] Two germs at a point are equal exactly when the representatives agree on
a common neighbourhood ([[def-stalk-of-presheaf]]).

[F9] Sections of a sheaf that agree on the members of an open cover glue
uniquely ([[def-sheaf-on-topological-space]]).

[F10] A morphism of sheaves of abelian groups is surjective if and only if
it is surjective on stalks, and surjectivity on a stalk is witnessed by
sections over a neighbourhood ([[def-sheafification]],
[[def-stalk-of-presheaf]]).

## Proof

1.1 The quotient sheaf $Q$ is the cokernel of the map of sheaves $\mathcal O_X^{\times}\to\mathcal K_X^{\times}$.
Indeed the cokernel sheaf is the sheafification of
$U\mapsto\operatorname{coker}(\mathcal O_X^{\times}(U)\to\mathcal K_X^{\times}(U))$,
which is exactly the quotient presheaf of [F1].
[F1, F2]

1.2 At every point $x\in X$ one has
$Q_x\cong\mathcal K_{X,x}^{\times}/\mathcal O_{X,x}^{\times}$.
Let $P(U)=\mathcal K_X^{\times}(U)/\mathcal O_X^{\times}(U)$, so
$Q=aP$ by [F1]. The map from
$\mathcal K_{X,x}^{\times}/\mathcal O_{X,x}^{\times}$ to $Q_x$ sends the
class of a germ represented by $f\in\mathcal K_X^{\times}(U)$ to the germ
of the sheafified class of $f$. It is surjective: [F3] identifies $Q_x$
with $P_x$, and by [F4] every element of $P_x$ is represented by a quotient
class $[f]\in P(U)$ on a neighbourhood $U$ of $x$. To see injectivity, suppose
the class of $f_x$ maps to the identity germ. By [F3] and [F8], after
shrinking to a neighbourhood $V$ of $x$, the quotient class $[f|_V]$ is the
identity class in $P(V)$. By [F5] this means $f|_V$ is a section of
$\mathcal O_X^{\times}(V)$, so $f_x$ belongs to
$\mathcal O_{X,x}^{\times}$. Conversely every germ from
$\mathcal O_X^{\times}$ maps to the identity. The subgroup embeds in
$\mathcal K_{X,x}^{\times}$ by [F6], giving the claimed quotient.
[F1, F3, F4, F5, F6, F8]

2.1 The quotient map $q\colon\mathcal K_X^{\times}\to Q$ has kernel exactly $\mathcal O_X^{\times}$.
For each $x$ the map $q_x$ is the quotient map
$\mathcal K_{X,x}^{\times}\to\mathcal K_{X,x}^{\times}/\mathcal O_{X,x}^{\times}$
by step 1.2, so its kernel is $\mathcal O_{X,x}^{\times}$. The kernel subsheaf
of $q$ therefore has the same stalks as $\mathcal O_X^{\times}$, and the
inclusion of subsheaves is an isomorphism by the stalkwise criterion.
[step 1.2, F7]

3.1 Every section of $Q$ is locally a class of a meromorphic unit.
Let $s\in Q(X)$ and $x\in X$. Because $q$ is a cokernel projection it is
surjective on stalks, so the germ $s_x$ is the image of some element of
$\mathcal K_{X,x}^{\times}$; that element is represented by a section $f$ of
$\mathcal K_X^{\times}$ over an open neighbourhood $V$ of $x$, and
$q(f)$ and $s$ have equal germs at $x$, hence agree on some neighbourhood of
$x$ contained in $V$.
[step 2.1, F8, F10]

3.2 Every local-equation datum determines a global section of $Q$.
On $U_i\cap U_j$ the ratio $f_i/f_j$ is a unit, so $q(f_i)$ and $q(f_j)$
have equal restriction because their difference is the class of a unit, which
vanishes in the quotient. The sections $q(f_i)\in Q(U_i)$ therefore agree on
all overlaps and glue by the sheaf axiom to a section $s\in Q(X)$ with
$s|_{U_i}=q(f_i)$.
[F1, F9, step 2.1]

4.1 Every section of $Q$ is induced by a local-equation datum.
Let $s\in Q(X)$ and take the set of all pairs $(V,f)$ with $V\subseteq X$
open, $f\in\mathcal K_X^{\times}(V)$, and $q(f)=s|_V$. By step 3.1, the
opens in these pairs cover $X$. For any two such pairs $(V,f)$ and $(W,g)$,
the equality of their images with the restrictions of $s$ gives
$q(f/g)=1$ on $V\cap W$. By step 2.1, $f/g$ is a unit there. Thus this
entire indexed family is a local-equation datum; no lift is selected
separately for each point.
[step 2.1, step 3.1, F5]

4.2 Two data inducing the same section differ by local units.
Let $\{(U_i,f_i)\}$ and $\{(V_j,g_j)\}$ induce the same $s$. The nonempty
intersections $W_{ij}=U_i\cap V_j$ form a common refinement. On each such
$W_{ij}$, the classes of $f_i$ and $g_j$ agree, so
$f_i/g_j$ lies in the kernel of $q$, that is, in
$\mathcal O_X^{\times}(W_{ij})$. Thus
$f_i|_{W_{ij}}=u_{ij}\,g_j|_{W_{ij}}$ for the unit
$u_{ij}=f_i/g_j$, and every unit multiple arises this way from another
datum.
[step 3.2, F5, algebra]

5.1 The sections of $Q$ are exactly the local-equation data modulo refinement and local units. [step 3.2, step 4.1, step 4.2] ∎

The proof uses no choice principle: in step 4.1 it uses the set of all local
lifts, and in step 4.2 it uses all pairwise intersections of the two covers.

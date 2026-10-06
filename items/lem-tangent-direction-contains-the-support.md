---
id: "lem-tangent-direction-contains-the-support"
kind: "lemma"
title: "The supports of a multiple test blow-up stay inside the strict transforms of a hypersurface of maximal contact"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 8
deps:
  - "def-maximal-order-and-tangent-directions"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-strict-transform-closed-subscheme"
  - "lem-derivative-ideals-have-the-same-support"
  - "lem-derivatives-commute-with-controlled-transform"
  - "lem-giraud-tangent-directions-and-controlled-transforms"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Statement

Let $u\in T(\mathcal I)(U)$ be a tangent direction of the maximal-order marked ideal $(\mathcal I,E,\mu)$ on $U$ ([[def-maximal-order-and-tangent-directions]]) and let $(U_i)$ be any multiple test blow-up of $(\mathcal I|_U,\mu)$ ([[def-multiple-test-blowup-and-controlled-transform]]).
Then for every $i$ the support of the induced marked ideal is contained in the strict transform $V(u)_i$ of the hypersurface $V(u)$:
$$\operatorname{supp}(\mathcal I_i,E_i,\mu)\subseteq V(u)_i.$$
If $u$ is transversal to $E$, so that the restricted boundary on $V(u)$ is SNC, the ambient sequence induces a multiple test blow-up of the restricted marked ideal on $V(u)$. Restriction is asserted under this boundary hypothesis; the support containment above does not require it.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,\mu)$ of maximal order on the smooth $K$-scheme $X$, a tangent direction $u\in T(\mathcal I)(U)$ of multiplicity one on an open $U$, and a multiple test blow-up $(U_i)$ of $(\mathcal I|_U,\mu)$ with controlled transforms $(\mathcal I_i,\mu)$.

[F1] [[def-maximal-order-and-tangent-directions]], [[lem-derivative-ideals-have-the-same-support]]: $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$, and in every characteristic $\operatorname{supp}(\mathcal I,\mu)\subseteq\operatorname{supp}(\mathcal D^{\mu-1}(\mathcal I),1)$; hence every section $u\in T(\mathcal I)$ vanishes on $\operatorname{supp}(\mathcal I,\mu)$. A tangent direction is such a section of multiplicity one.

[F2] [[lem-giraud-tangent-directions-and-controlled-transforms]]: along one blow-up of a center $C\subsetneq\operatorname{supp}(\mathcal I,\mu)$, the controlled transform $u'=y^{-1}\sigma^*(u)$ is again a tangent direction of multiplicity one with $V(u')$ the strict transform of $V(u)$; iterating, at every stage $i$ the section $u_i$ is a tangent direction of $(\mathcal I_i,\mu)$ and $V(u_i)$ is the strict transform $V(u)_i$.

[F3] [[def-multiple-test-blowup-and-controlled-transform]], [[def-strict-transform-closed-subscheme]]: the multiple test blow-up is a sequence of blow-ups of regular centers with SNC with $E$, with controlled transforms of the marked ideal; strict transforms of divisors are defined by saturation and commute with the iteration.

[F4] [[def-multiple-test-blowup-and-controlled-transform]], [[def-strict-transform-closed-subscheme]]: if a regular center $C\subseteq V(u)$ of codimension at least two has local equations $u,t_2,\ldots,t_c$ with $u$ a regular parameter, then on the blow-up chart indexed by $u$ the strict transform of $V(u)$ is empty, while on a chart indexed by $t_j$ it is cut out by $u/t_j$. This follows by saturating the chart pullback of $u$, which is respectively the exceptional equation or $t_j(u/t_j)$. A Cartier center has isomorphic blow-up.

[F5] [[lem-derivatives-commute-with-controlled-transform]]: if $C\subseteq\operatorname{supp}(\mathcal I,\mu)$ is any regular center with SNC boundary, then for every $0\le r\le\mu$ the controlled transform of $(\mathcal D^r(\mathcal I),\mu-r)$ is contained in $\mathcal D^r$ of the controlled transform of $(\mathcal I,\mu)$. The supplier's chartwise chain-rule proof applies to the non-strict containment, including $C=\operatorname{supp}(\mathcal I,\mu)$.

## Proof

1.1 Base case. By [F1], each point of $\operatorname{supp}(\mathcal I,\mu)$ lies in $\operatorname{supp}(\mathcal D^{\mu-1}(\mathcal I),1)$, so the section $u\in\mathcal D^{\mu-1}(\mathcal I)(U)$ vanishes there. Hence $\operatorname{supp}(\mathcal I,\mu)\subseteq V(u)$, which is the case $i=0$. [F1]

2.1 Inductive step. Assume $\operatorname{supp}(\mathcal I_i,\mu)\subseteq V(u_i)$. The next center satisfies $C_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)\subseteq V(u_i)$. If $C_i$ is Cartier, work locally near it with a regular centre equation $y$. Since $C_i$ is reduced and $u_i$ vanishes on it, $u_i=ay$; multiplicity one of $u_i$ along the centre makes $a$ a unit there. Although the blow-up is an isomorphism, the controlled transform divides by $y$: [F5] gives $u_i/y=a\in\mathcal D^{\mu-1}(\mathcal I_{i+1})$. Thus this derivative ideal is the unit ideal locally along the centre, and [F1] makes the new support empty. The strict transform of $V(u_i)$ is also empty there because $V(u_i)=C_i$ locally. Away from the centre, both transforms preserve the prior containment. If $C_i$ is not Cartier and is a proper subset of the support, [F2] gives a tangent direction $u_{i+1}$ whose zero scheme is the strict transform $V(u)_{i+1}$. In the remaining case, work componentwise where $C_i$ has codimension at least two. Since $u_i$ vanishes on $C_i$ and has order one, it is one of local regular parameters generating the ideal of $C_i$. On the chart indexed by $u_i$, the controlled transform $u_{i+1}=u_i/y$ is $1$, and [F4] says the strict transform of $V(u_i)$ is empty there. By [F5] with $r=\mu-1$, the controlled transform of $(\mathcal D^{\mu-1}(\mathcal I_i),1)$ is contained in $\mathcal D^{\mu-1}(\mathcal I_{i+1})$. Since $u_i\in\mathcal D^{\mu-1}(\mathcal I_i)$, its controlled transform $u_{i+1}=y^{-1}\sigma_i^*(u_i)$ lies in that derivative ideal; [F5] applies because $C_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)$, including when equality holds. On the chart indexed by $u_i$, $y=u_i$, so $u_{i+1}=1$; the derivative ideal is the unit ideal, and [F1] makes the transformed support empty there, as required by the empty strict-transform chart in [F4]. On a chart indexed by another center parameter $t_j$, $y=t_j$ and $u_{i+1}=u_i/t_j$ is a chart coordinate; [F5] places it in $\mathcal D^{\mu-1}(\mathcal I_{i+1})$, so [F1] puts the support in $V(u_{i+1})$, the strict transform by [F4]. This proves the containment for this center as well. Applying [F1] at stage $i+1$ closes the induction for all stages. For the restricted-sequence conclusion, assume $u$ transversal to the initial boundary. The distinct equations $u$ and the boundary parameters then form part of one regular parameter system. Since each regular center lies in $V(u_i)$ and has SNC with the boundary, its ideal can be generated by $u_i$ and further parameters compatible with the boundary restrictions. The nonempty charts in [F4] restricted to $V(u_i)$ are precisely the charts of its center blowup, the restricted exceptional equation is the same $y$, and division by $y^\mu$ commutes with restriction. These charts preserve SNC of the restricted boundary; where a component is deleted there is no stalk to check. Thus the restricted ideals and boundaries form the asserted multiple test blow-up. [F1, F2, F3, F4, F5, step 1.1] ∎ 

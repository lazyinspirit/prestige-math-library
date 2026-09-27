---
id: "lem-two-open-cover-cech-complex"
kind: "lemma"
title: "Čech complex for a two-open cover"
status: draft
origin: pipeline
deps: [def-sheaf-on-topological-space, def-cech-cochain-complex-open-cover, def-cech-cohomology-open-cover]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian
groups on $X$ and let $U,V\subseteq X$ be open subsets with $X=U\cup V$
([[def-sheaf-on-topological-space]]). Index the two-member family by
$I:=\{0,1\}$ with $0<1$ and put $U_0:=U$, $U_1:=V$, so that
$\mathcal U=(U_0,U_1)$ is an open cover of $X$ indexed by a linearly ordered set
with ordered Čech cochains $C^\bullet(\mathcal U,\mathcal F)$ and differential
$\delta^\bullet$ ([[def-cech-cochain-complex-open-cover]]). Then
$$C^0(\mathcal U,\mathcal F)=\mathcal F(U)\oplus\mathcal F(V),\quad C^1(\mathcal U,\mathcal F)=\mathcal F(U\cap V),\quad C^p(\mathcal U,\mathcal F)=0\ \ (p\ge2),$$
the only possibly nonzero component of the differential is
$$\delta^0:\mathcal F(U)\oplus\mathcal F(V)\longrightarrow\mathcal F(U\cap V),\qquad \delta^0(s_U,s_V)=s_V|_{U\cap V}-s_U|_{U\cap V},$$
and $\delta^1=0$. Consequently, with $\check H^p:=\check H^p(\mathcal U,\mathcal F)$
the Čech cohomology of the cover
([[def-cech-cohomology-open-cover]]),
$$\check H^0=\ker\delta^0,\qquad \check H^1=\mathcal F(U\cap V)\big/\operatorname{im}\delta^0,\qquad \check H^p=0\ (p\ge2).$$
The differential is the difference of the two restrictions, in the order of the
chosen linear order $0<1$; exchanging the roles of the two members changes its
sign and leaves $\ker\delta^0$, $\operatorname{im}\delta^0$ and all three
cohomology groups unchanged.

## Facts & Assumptions

[F1] The ordered Čech $p$-cochains are the product $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$ over increasing tuples, with the convention that an empty product is the zero group ([[def-cech-cochain-complex-open-cover]]).

[F2] The Čech differential is $(\delta^ps)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^js_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$, a sum of restrictions inside one section group ([[def-cech-cochain-complex-open-cover]]).

[F3] The cohomology of the fixed cover is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$, the cohomology of the cochain complex in degree $p$ ([[def-cech-cohomology-open-cover]]).

## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ on $X$ and open subsets $U,V\subseteq X$ with $X=U\cup V$, indexed as $U_0=U<U_1=V$.

1.1 The increasing tuples of the two-element linearly ordered set $\{0,1\}$ are: the two singletons $(0)$ and $(1)$ in degree $0$, the single pair $(0,1)$ in degree $1$, and none at all in degrees $p\ge2$. Evaluating the product formula of [F1] at these tuples gives $C^0(\mathcal U,\mathcal F)=\mathcal F(U_0)\times\mathcal F(U_1)=\mathcal F(U)\oplus\mathcal F(V)$, then $C^1(\mathcal U,\mathcal F)=\mathcal F(U_0\cap U_1)=\mathcal F(U\cap V)$, and then $C^p(\mathcal U,\mathcal F)=0$ for $p\ge2$ because the product over the empty set of tuples is the zero group by [F1]; the direct product of two groups is their direct sum. [F1]

1.2 For $(s_U,s_V)\in\mathcal F(U)\oplus\mathcal F(V)$ the differential formula of [F2] at the unique increasing pair $(0,1)$ reads $(\delta^0s)_{01}=\sum_{j=0}^{1}(-1)^js_{0\cdots\widehat{j}\cdots 1}=(+1)\,s_1|_{U_0\cap U_1}+(-1)\,s_0|_{U_0\cap U_1}=s_V|_{U\cap V}-s_U|_{U\cap V}$, the two restrictions being taken along $U_1\cap U_0\subseteq U_1$ and $U_0\cap U_1\subseteq U_0$; there are no other components in degree $0$ because $\delta^0$ has target $C^1(\mathcal U,\mathcal F)$, which has the single component $(0,1)$. Hence $\delta^0(s_U,s_V)=s_V|_{U\cap V}-s_U|_{U\cap V}$. [F2]

2.1 Since $C^2(\mathcal U,\mathcal F)=0$ by [step 1.1], the map $\delta^1:C^1\to C^2$ is the zero map, and the complex is $\mathcal F(U)\oplus\mathcal F(V)\xrightarrow{\ \delta^0\ }\mathcal F(U\cap V)\to0\to\cdots$. By the description of the cohomology of a fixed cover in [F3] this gives $\check H^0=\ker\delta^0$, $\check H^1=\mathcal F(U\cap V)/\operatorname{im}\delta^0$ and $\check H^p=0$ for $p\ge2$. Reversing the linear order interchanges the two summands of $C^0$ and multiplies $\delta^0$ by $-1$ in the sense that the new differential is the negative of the old one composed with the swap of the summands, which leaves kernel, image and cohomology unchanged. ∎ [F3, step 1.1, step 1.2]

---
id: "lem-flasque-kernel-lifts-quotient-sections"
kind: "lemma"
title: "Flasque kernel lifts quotient sections"
status: draft
origin: pipeline
deps: [def-flasque-sheaf, def-exact-sequence-sheaves, def-sheaf-on-topological-space, def-axiom-of-choice, thm-zorn, cor-ac-iff-zorn, def-kernel-cokernel-image-sheaves, thm-exactness-of-sheaves-stalkwise, def-stalk-of-presheaf, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a topological space and let
$$0\to\mathcal F\to\mathcal G\xrightarrow{\ \varphi\ }\mathcal H\to0$$
be a short exact sequence of abelian sheaves on $X$
([[def-exact-sequence-sheaves]]) in which $\mathcal F$ is flasque
([[def-flasque-sheaf]]).

1. For every open subset $U\subseteq X$ the map
   $\varphi_U:\mathcal G(U)\to\mathcal H(U)$ is surjective.
2. If moreover $\mathcal G$ is flasque, then $\mathcal H$ is flasque.

The Axiom of Choice is used exactly once, to apply Zorn's lemma in part 1
([[thm-zorn]], [[cor-ac-iff-zorn]]).

## Facts & Assumptions

[F1] A sequence of sheaves is exact at a term when the image sheaf of the incoming morphism equals the kernel sheaf of the outgoing morphism; thus exactness of $0\to\mathcal F\to\mathcal G\xrightarrow{\varphi}\mathcal H\to0$ says in particular that the image sheaf of $\varphi$ is the kernel of $\mathcal H\to0$, which is all of $\mathcal H$ ([[def-exact-sequence-sheaves]]).

[F2] The kernel sheaf of a morphism is computed objectwise: $\ker(\varphi)(W)=\ker(\varphi_W:\mathcal G(W)\to\mathcal H(W))$ ([[def-kernel-cokernel-image-sheaves]]).

[F3] $\mathcal F$ is flasque, so for open $O\subseteq W$ the restriction $\mathcal F(W)\to\mathcal F(O)$ is surjective ([[def-flasque-sheaf]]); likewise for $\mathcal G$ in part 2.

[F4] A sheaf satisfies the gluing axiom: if $s_i\in\mathcal F(W_i)$ on a cover $W=\bigcup_iW_i$ satisfy $s_i|_{W_i\cap W_j}=s_j|_{W_i\cap W_j}$ for all $i,j$, then there is $s\in\mathcal F(W)$ with $s|_{W_i}=s_i$ for all $i$, and by locality it is unique ([[def-sheaf-on-topological-space]]).

[F5] Assuming AC, Zorn's lemma holds: every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]), and over ZF the Axiom of Choice and Zorn's lemma are equivalent ([[cor-ac-iff-zorn]], [[def-axiom-of-choice]]).

[F6] A sequence of sheaves is exact if and only if all its stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]), and a germ of a sheaf at $x$ is represented by a section over a neighbourhood of $x$, two representatives being equal when they agree on a smaller neighbourhood ([[def-stalk-of-presheaf]]).

[F7] $\mathcal F(\varnothing)$ is the one-element group ([[lem-sheaf-section-over-empty-set-terminal]]); hence $0\in\mathcal G(\varnothing)$ is a section over the empty open lifting the empty section of $\mathcal H$.

## Proof

**Given:** The Axiom of Choice, the displayed short exact sequence with $\mathcal F$ flasque, an open $U\subseteq X$ and a section $s\in\mathcal H(U)$.

1.1 Let $S$ be the set of pairs $(W,t)$ with $W\subseteq U$ open and $t\in\mathcal G(W)$ such that $\varphi_W(t)=s|_W$, ordered by $(W,t)\le(W',t')$ when $W\subseteq W'$ and $t'|_W=t$. This is a partial order (reflexivity, antisymmetry by locality of restrictions, transitivity by the restriction identities). It is nonempty: the pair $(\varnothing,0)$ lies in $S$ by [F7], since $\mathcal G(\varnothing)$ and $\mathcal H(\varnothing)$ are one-element groups and $s|_\varnothing=0$. [F7, construct]

2.1 Every chain in $S$ has an upper bound. Let $\{(W_i,t_i)\}_{i\in I}$ be a chain, a set-indexed family of elements of $S$, and put $W:=\bigcup_iW_i$. For $i,j\in I$ the chain contains an element $(W_k,t_k)$ with $W_i\cup W_j\subseteq W_k$, so $t_i|_{W_i\cap W_j}=t_k|_{W_i\cap W_j}=t_j|_{W_i\cap W_j}$; the family is therefore compatible and [F4] glues it to a single $t\in\mathcal G(W)$ with $t|_{W_i}=t_i$ for all $i$. Then $\varphi_W(t)|_{W_i}=\varphi_{W_i}(t_i)=s|_{W_i}$ for every $i$, so $\varphi_W(t)=s|_W$ by the locality half of the sheaf condition [F4], and $(W,t)\in S$ is an upper bound of the chain. [F3, F4, step 1.1] [F4, step 1.1]

3.1 By [F5] the Axiom of Choice gives Zorn's lemma, so the nonempty poset $S$ of step 1.1, in which every chain has an upper bound by step 2.1, has a maximal element $(W,t)$. Suppose $W\ne U$ and choose $x\in U\setminus W$. Since the given sequence is exact at $\mathcal H$, the stalk map $\varphi_x:\mathcal G_x\to\mathcal H_x$ is surjective by [F1, F6]; the germ $s_x$ therefore has a preimage, which is represented by some $t_1\in\mathcal G(W_1)$ on an open neighbourhood $W_1\subseteq U$ of $x$ with $\varphi_{W_1}(t_1)=s|_{W_1}$ after shrinking $W_1$ if necessary (equality of germs is equality on a smaller neighbourhood, [F6]). Let $O:=W\cap W_1$; then $\varphi_O\bigl(t_1|_O-t|_O\bigr)=s|_O-s|_O=0$, so $u:=t_1|_O-t|_O$ lies in $\ker(\varphi_O)=\mathcal F(O)$ by [F2]. Since $\mathcal F$ is flasque, $u$ extends to some $\widetilde u\in\mathcal F(W_1)\subseteq\mathcal G(W_1)$ [F3]. Then $t_1-\widetilde u\in\mathcal G(W_1)$ still satisfies $\varphi_{W_1}(t_1-\widetilde u)=s|_{W_1}$, and on $O$ one has $(t_1-\widetilde u)|_O=t_1|_O-u=t|_O$. Hence $t$ on $W$ and $t_1-\widetilde u$ on $W_1$ are compatible and glue by [F4] to a section $t'\in\mathcal G(W\cup W_1)$ with $t'|_W=t$ and $t'|_{W_1}=t_1-\widetilde u$; since $W\cup W_1\supsetneq W$ and $\varphi_{W\cup W_1}(t')$ agrees with $s$ on the cover $\{W,W_1\}$, we get $(W\cup W_1,t')>(W,t)$ in $S$, contradicting maximality. [F1, F2, F3, F4, F5, F6, step 2.1] [F1, F2, F3, F4, F5, F6]

4.1 Therefore $W=U$, and the maximal element provides $t\in\mathcal G(U)$ with $\varphi_U(t)=s|_U=s$. As $s\in\mathcal H(U)$ was arbitrary, $\varphi_U$ is surjective; since $U$ was an arbitrary open subset, part 1 holds. [step 3.1, construct] [F7]

5.1 For part 2 assume in addition that $\mathcal G$ is flasque. Let $U\subseteq V$ be open and let $s\in\mathcal H(U)$. By step 4.1 there is $t\in\mathcal G(U)$ with $\varphi_U(t)=s$; since $\mathcal G$ is flasque, $t$ extends to some $t'\in\mathcal G(V)$ with $t'|_U=t$ [F3]. Then $\varphi_V(t')\in\mathcal H(V)$ restricts to $\varphi_U(t'|_U)=\varphi_U(t)=s$, because $\varphi$ is a morphism of sheaves and hence commutes with restrictions. So every section over $U$ extends to $V$ and $\mathcal H$ is flasque [F3]. [F3, step 4.1, given] ∎ [F3, given] ∎

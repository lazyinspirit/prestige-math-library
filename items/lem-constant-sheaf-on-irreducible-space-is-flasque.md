---
id: "lem-constant-sheaf-on-irreducible-space-is-flasque"
kind: "lemma"
title: "Constant sheaves on irreducible spaces are flasque and acyclic"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-topological-space, def-subspace-topology-top, lem-irreducibility-criteria-and-open-subspaces, def-irreducible-topological-space-and-subset, def-connected-space, def-presheaf-on-topological-space, def-sheafification, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-flasque-sheaf, lem-sheaf-section-over-empty-set-terminal, thm-flasque-sheaves-acyclic, def-sheaf-cohomology-derived-global-sections, thm-abelian-sheaves-form-abelian-category, def-section-restriction-and-global-section, def-sheaf-on-topological-space]
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
      locator: "Lemma 20.2 (tag 02UW)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be an
irreducible topological space ([[def-irreducible-topological-space-and-subset]]) and let
$A$ be an abelian group. Let $A_X$ be the constant sheaf with value $A$ on $X$,
that is, the sheafification of the constant presheaf with value $A$
([[def-sheafification]]), regarded as a sheaf of abelian groups through its
identification with the sheaf $\underline A_{\mathrm{loc}}$ of locally constant
$A$-valued functions
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]). Then $A_X$
is flasque ([[def-flasque-sheaf]]), and
$$H^q(X,A_X)=0$$
for every integer $q>0$, cohomology being that of
[[def-sheaf-cohomology-derived-global-sections]].

## Facts & Assumptions

[F1] The constant sheaf $A_X=aA_{\mathrm{pt}}$ is canonically isomorphic to the sheaf $\underline A_{\mathrm{loc}}$ of locally constant $A$-valued functions, the section of $\underline A_{\mathrm{loc}}$ corresponding to the class of $a\in A_{\mathrm{pt}}(U)=A$ being the constant function with value $a$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F2] If $X$ is irreducible and $U\subseteq X$ is a nonempty open subspace, then $U$ is irreducible, hence connected; in particular an irreducible space is connected ([[lem-irreducibility-criteria-and-open-subspaces]]).

[F3] $X$ is connected exactly when it admits no separation, that is, no pair $(U,V)$ of open, nonempty, disjoint subsets with $U\cup V=X$ ([[def-connected-space]]).

[F4] A sheaf of abelian groups is flasque when for all open $U\subseteq V\subseteq X$ the restriction map $\mathcal F(V)\to\mathcal F(U)$ is surjective ([[def-flasque-sheaf]]).

[F5] Assume the Axiom of Choice and let $\mathcal F$ be a flasque sheaf of abelian groups on a topological space $X$. Then $H^q(U,\mathcal F|_U)=0$ for every open $U\subseteq X$ and every $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F6] For a sheaf of sets $\mathcal F$ on a topological space, $\mathcal F(\varnothing)$ is a singleton ([[lem-sheaf-section-over-empty-set-terminal]]).

[F7] The Axiom of Choice is the hypothesis of the statement, and it is the hypothesis of the acyclicity theorem [F5]; the flasqueness verified below is choice-free ([[def-axiom-of-choice]]).

## Proof

**Given:** An irreducible topological space $X$, an abelian group $A$, the constant presheaf $A_{\mathrm{pt}}$ with value $A$, the constant sheaf $A_X=aA_{\mathrm{pt}}$ with its sheafification map $\eta$, and the identified sheaf $\underline A_{\mathrm{loc}}$ of locally constant functions of [F1].

1.1 For every open $U\subseteq X$ the isomorphism of [F1] identifies the group $A_X(U)$ with the group $\underline A_{\mathrm{loc}}(U)$ of locally constant functions $U\to A$, with pointwise addition, and identifies the section $\eta_U(a)$ with the constant function with value $a$; the restrictions of the two sheaves correspond under the identification, because the isomorphism is one of sheaves. [F1]

2.1 Let $U\subseteq X$ be a nonempty open subset. By [F2] the subspace $U$ is irreducible, hence connected. Let $f:U\to A$ be locally constant. Each fibre $f^{-1}(a)\subseteq U$ is open, because every point of it has an open neighbourhood on which $f$ is constant with value $a$; the fibres are pairwise disjoint and cover $U$. Since $U$ is nonempty there is a point $x\in U$, and I claim $f$ is the constant function with value $f(x)$. Indeed, if there were $y\in U$ with $f(y)\ne f(x)$, then $f^{-1}(f(x))$ and $U\setminus f^{-1}(f(x))$ would be open subsets of $U$: the first by local constancy, the second because it is the union of the open fibres $f^{-1}(a)$ over the values $a\ne f(x)$. Both are nonempty, they are disjoint, and their union is $U$, so $(f^{-1}(f(x)),U\setminus f^{-1}(f(x)))$ would be a separation of $U$, contradicting connectedness by [F3]. Hence $\underline A_{\mathrm{loc}}(U)$ consists of the constant functions, and the map $A\to\underline A_{\mathrm{loc}}(U)$, $a\mapsto(x\mapsto a)$, is a bijection: it is surjective by what was just proved and injective because two constant functions with distinct values differ at every point of the nonempty set $U$. [F1, F2, F3, step 1.1]

2.2 For $U=\varnothing$ the group $\underline A_{\mathrm{loc}}(\varnothing)$ is the set of functions $\varnothing\to A$, a singleton, and it is the zero group for the pointwise addition of [F1]; equivalently $A_X(\varnothing)$ is a singleton by [F6] applied to the sheaf $A_X$, hence the zero group as well. [F1, F6, step 1.1]

3.1 Let $U\subseteq V\subseteq X$ be open subsets. If $U=\varnothing$ then the restriction map $A_X(V)\to A_X(\varnothing)$ has zero target by [step 2.2] and is surjective. If $U\ne\varnothing$ then also $V\ne\varnothing$, and both $A_X(V)$ and $A_X(U)$ are identified, by [step 1.1] and [step 2.1], with $A$ through the constant functions, in such a way that the restriction map corresponds to the map sending the constant function with value $a$ on $V$ to its restriction on $U$, which is again the constant function with value $a$; so the restriction map is the identity of $A$, in particular surjective. Since $U\subseteq V$ were arbitrary open subsets, $A_X$ is flasque by [F4]. [F1, F4, step 2.1, step 2.2, step 1.1]

4.1 By [step 3.1] the sheaf $A_X$ of abelian groups on $X$ is flasque, so the acyclicity theorem [F5] applies with $U=X$ and gives $H^q(X,A_X)=0$ for every $q>0$. The Axiom of Choice is used at exactly this point, as the hypothesis [F7] of the acyclicity theorem; the computation of sections in [step 2.1] and the flasqueness in [step 3.1] use no choice principle, the identifications being those of the canonical isomorphism of [F1]. ∎ [F5, F7, step 2.1, step 3.1]

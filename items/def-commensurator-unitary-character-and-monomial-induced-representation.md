---
id: def-commensurator-unitary-character-and-monomial-induced-representation
kind: definition
title: Commensurator, unitary characters and monomial induced representations in the transversal model
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - def-covariant-function-model-of-unitary-induction
  - thm-unitary-induction-from-a-closed-subgroup
justified_by: []
aliases: []
dependency_level: 0
axiom_use: "AC is used to choose a representative in each left coset Ht, hence a right transversal T for arbitrary H; if a transversal is supplied, the constructions and proofs below are choice-free. For second-countable G and open H, the coset set is countable, so countable choice suffices for T."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.F, Definition 1.F.1 and Construction 1.F.4(2), printed pp. 47–49; the open-subgroup continuity argument, printed pp. 48–49; Chapter 1, Theorem 1.F.11 and Appendix A.E, Definitions A.E.5 and Proposition A.E.6, printed pp. 54–55 and 412–413"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice. Let $G$ be a topological group and $H\leq G$ an open subgroup. The **commensurator** of $H$ is
$$\operatorname{Comm}_G(H)=\{g\in G:[H:H\cap g^{-1}Hg]<\infty\text{ and }[g^{-1}Hg:H\cap g^{-1}Hg]<\infty\}.$$
A **unitary character** of $H$ is a continuous homomorphism $\chi:H\to\mathbb T$, where $\mathbb T=\{z\in\mathbb C:|z|=1\}$. Choose a right transversal $T\subseteq G$ for the left cosets of $H$, so $G=\bigsqcup_{t\in T}Ht$, and choose it with $e\in T$. For each $t\in T$ and $g\in G$, there are unique $\alpha(t,g)\in H$ and $t\cdot g\in T$ such that $tg=\alpha(t,g)(t\cdot g)$. The **monomial induced representation** $\operatorname{Ind}_H^G\chi$ acts on $\ell^2(T)$ by
$$\bigl(\pi(g)f\bigr)(t)=\chi\bigl(\alpha(t,g)\bigr)f(t\cdot g).$$
This is a strongly continuous unitary representation, and $\delta_e$ is cyclic. If $G$ is locally compact, this transversal model is unitarily equivalent to the quotient covariant-function model of [[def-covariant-function-model-of-unitary-induction]] and hence is the standard unitary induction of $\chi$ from $H$ ([[thm-unitary-induction-from-a-closed-subgroup]]). When $G$ is second-countable, $H\backslash G$ is countable and the transversal model is separable.

## Facts & Assumptions

**Given:** AC; a topological group $G$; an open subgroup $H\leq G$; a continuous unitary character $\chi:H\to\mathbb T$; and a right transversal $T$ with $e\in T$.

[F1] AC supplies a choice function for any family of nonempty sets ([[def-axiom-of-choice]]).

[F2] For a closed subgroup and a strongly continuous unitary representation of it, the covariant-function model and its quotient-norm completion are defined ([[def-covariant-function-model-of-unitary-induction]]).

[F3] For locally compact $G$ and closed $H$, this completed model with its induced action is the standard unitary induction; when the quotient measure is invariant, its density cocycle is $1$ ([[thm-unitary-induction-from-a-closed-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Define $K\sim L$ when $K\cap L$ has finite index in both subgroups. Reflexivity and symmetry are immediate. If $K\sim L$ and $L\sim M$, then $K\cap L\cap M$ has finite index in $K\cap L$ because $L\cap M$ has finite index in $L$; it therefore has finite index in $K$. The same argument, starting with $M\cap L$, shows it has finite index in $M$. Thus $\sim$ is transitive. Conjugation preserves finite indices and intersections. For $g,h\in\operatorname{Comm}_G(H)$, conjugating $H\sim g^{-1}Hg$ by $h^{-1}$ gives $h^{-1}Hh\sim h^{-1}g^{-1}Hgh$, while $H\sim h^{-1}Hh$; hence $H\sim(gh)^{-1}H(gh)$ and $gh\in\operatorname{Comm}_G(H)$. Conjugating $H\sim g^{-1}Hg$ by $g$ gives $gHg^{-1}\sim H$, so $g^{-1}\in\operatorname{Comm}_G(H)$. Every $h\in H$ satisfies $h^{-1}Hh=H$. Therefore the commensurator is a subgroup containing $H$. [algebra]

1.2 Uniqueness of $tg=\alpha(t,g)(t\cdot g)$ gives $(t\cdot g_1)\cdot g_2=t\cdot(g_1g_2)$ and $\alpha(t,g_1g_2)=\alpha(t,g_1)\alpha(t\cdot g_1,g_2)$. Substitution into the formula for $\pi$ yields $\pi(g_1)\pi(g_2)=\pi(g_1g_2)$. Right multiplication permutes $T$, and every multiplier $\chi(\alpha(t,g))$ has modulus $1$, so each $\pi(g)$ is unitary. [given, algebra]

1.3 Suppose now $G$ is locally compact. The open subgroup $H$ is also closed. Its right-coset space $G/H$ is discrete. Restrict a left Haar measure on $G$ to $H$; this is a left Haar measure on $H$, and partitioning $G$ into the cosets $t^{-1}H$ shows that the Weil quotient formula with constant $\rho=1$ gives counting measure on $G/H$. For the covariant model in [F2], define $UF(t)=F(t^{-1})$. Every finitely supported function on $T$ arises this way: on each open coset $t^{-1}H$ set $F(t^{-1}h)=\chi(h)^{-1}f(t)$, and set it to zero on cosets outside the finite support. This is continuous and covariant, so $U$ extends to a unitary from the completed model to $\ell^2(T)$. If $tg=\alpha(t,g)(t\cdot g)$, then $g^{-1}t^{-1}=(t\cdot g)^{-1}\alpha(t,g)^{-1}$ and covariance gives $F(g^{-1}t^{-1})=\chi(\alpha(t,g))F((t\cdot g)^{-1})$. Hence $U$ intertwines the covariant left action with $\pi$. By [F3], this is standard unitary induction. [F2, F3, construct, algebra]

2.1 For each $t\in T$, the subgroup $t^{-1}Ht$ is an open neighborhood of $e$. On it $t\cdot g=t$ and $\alpha(t,g)=tgt^{-1}$, so $\pi(g)\delta_t=\chi(tgt^{-1})\delta_t\to\delta_t$ as $g\to e$. Continuity follows on finite-support vectors by linearity. For arbitrary $f\in\ell^2(T)$, approximate by a finite-support $f_0$ and use $\|\pi(g)f-f\|\leq2\|f-f_0\|+\|\pi(g)f_0-f_0\|$; thus continuity holds at $e$ on all vectors, and the representation law gives it at every $g$. Since $\pi(t^{-1})\delta_e=\delta_t$ for every $t\in T$, $\delta_e$ is cyclic. [given, algebra, step 1.2]

3.1 If $G$ is second-countable, let $(B_n)_{n\in\mathbb N}$ be a countable base. Each left coset $C=Ht$ is nonempty and open, so let $n(C)$ be the least $n$ with $\varnothing\ne B_n\subseteq C$. Disjoint cosets have distinct such basis elements; thus $H\backslash G$ is countable. Under AC choose a representative from each coset, so $T$ is countable. Finite-support functions with rational real and imaginary parts form a countable dense subset of $\ell^2(T)$, proving separability. Once a transversal is given, all constructions and calculations above use no further choice. [F1, given, construct, algebra] ∎

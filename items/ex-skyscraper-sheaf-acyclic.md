---
id: "ex-skyscraper-sheaf-acyclic"
kind: "example"
title: "A skyscraper sheaf is flasque and acyclic"
status: draft
origin: pipeline
deps: [def-skyscraper-sheaf-abelian-group, def-flasque-sheaf, thm-flasque-sheaves-acyclic, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-sheaf-cohomology-derived-global-sections, def-sheaf-on-topological-space, def-section-restriction-and-global-section]
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

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $x\in X$ and let $A$ be an abelian group, with skyscraper
sheaf $i_{x,*}A$ at $x$ with value $A$
([[def-skyscraper-sheaf-abelian-group]]) and flasqueness as in
[[def-flasque-sheaf]]. Then $i_{x,*}A$ is flasque, and for every open subspace
$U\subseteq X$ and every integer $q>0$ the sheaf cohomology of the restriction
vanishes,
$$H^q(U,i_{x,*}A|_U)=0.$$
In particular $H^q(X,i_{x,*}A)=0$ for every $q>0$. If $X=\varnothing$ no point
$x\in X$ exists and the statement is vacuous.

## Facts & Assumptions

[F1] The skyscraper sheaf at $x$ with value $A$ has $(i_{x,*}A)(V)=A$ when $x\in V$ and $(i_{x,*}A)(V)=0$ when $x\notin V$; for $V'\subseteq V$ with $x$ in both the restriction is the identity on $A$, and if $x\notin V'$ the restriction to $0$ is the unique zero homomorphism ([[def-skyscraper-sheaf-abelian-group]]).

[F2] A sheaf of abelian groups $\mathcal F$ is flasque when all of its restriction maps $\rho^V_U:\mathcal F(V)\to\mathcal F(U)$, $U\subseteq V$ open, are surjective ([[def-flasque-sheaf]]).

[F3] Assume AC; if $\mathcal F$ is a flasque sheaf of abelian groups on $X$, then $H^q(U,\mathcal F|_U)=0$ for every open subspace $U\subseteq X$ and every $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F4] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F5] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Verification

**Given:** The Axiom of Choice, a topological space $X$, a point $x\in X$, an abelian group $A$ and the skyscraper sheaf $i_{x,*}A$ at $x$ with value $A$.

**Proof technique:** direct.

1.1 Let $U\subseteq V\subseteq X$ be open and consider the restriction map $\rho^V_U$ of $i_{x,*}A$. If $x\in U$ then $x\in V$, so by [F1] both groups are $A$ and $\rho^V_U$ is the identity of $A$, which is surjective. If $x\notin U$ then by [F1] the group $(i_{x,*}A)(U)$ is the zero group $0$, and any map into the zero group is surjective, indeed the only such map is the zero homomorphism; no hypothesis on $V$ is needed for this case. Since $x\in U$ or $x\notin U$, these two cases exhaust all pairs $U\subseteq V$ of open subsets, so every restriction map of $i_{x,*}A$ is surjective; by [F2] the sheaf $i_{x,*}A$ is flasque. [F1, F2]

2.1 By [step 1.1] the sheaf $i_{x,*}A$ on $X$ is flasque, so the vanishing theorem [F3] applies to it: for every open subspace $U\subseteq X$ and every integer $q>0$ the cohomology of the restriction vanishes, $$H^q(U,i_{x,*}A|_U)=0.$$ Taking $U=X$, where the restriction of $i_{x,*}A$ to $X$ is $i_{x,*}A$ itself, gives $H^q(X,i_{x,*}A)=0$ for every $q>0$. [F3, step 1.1]

3.1 The two conclusions are the flasqueness of $i_{x,*}A$ from [step 1.1] and the vanishing $H^q(U,i_{x,*}A|_U)=0$ for all open $U\subseteq X$ and all $q>0$ from [step 2.1], in particular $H^q(X,i_{x,*}A)=0$ for $q>0$; note that the flasqueness gives no information in degree zero, where $H^0(X,i_{x,*}A)=\Gamma(X,i_{x,*}A)=(i_{x,*}A)(X)=A$ because $x\in X$. The Axiom of Choice of [F4] enters exactly once, in [step 2.1]: the vanishing theorem [F3] is proved by applying a supplied functorial injective resolution datum, whose availability is obtained from the Axiom of Choice through the implication to Dependent Choice recorded in [F5]. No further choice is made in this example — the point $x$ is part of the given data, not selected — and the computations of [step 1.1] are case distinctions on whether $x\in U$. ∎ [F4, F5, step 2.1, step 1.1]

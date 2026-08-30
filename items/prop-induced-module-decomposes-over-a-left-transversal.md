---
id: prop-induced-module-decomposes-over-a-left-transversal
kind: proposition
title: "A left transversal identifies $\\operatorname{Ind}_H^G W$ with a direct sum of $[G:H]$ copies of $W$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coset, def-direct-sum-of-a-family-of-modules, def-induced-r-linear-g-module-by-h-covariant-functions]
justified_by: []
aliases: []
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.5.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Chapter 17"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $R$ be a commutative ring, let $G$ be a group, let $H\le G$, let $W$ be an
$R$-linear $H$-module, and let $T=\{t_1,\dots,t_n\}\subseteq G$ meet each left
coset $gH$ in exactly one point. Then evaluation on $T$ defines an
$R$-module isomorphism

$$ \operatorname{ev}_T:\operatorname{Ind}_H^G W\longrightarrow \bigoplus_{i=1}^n W, \qquad f\longmapsto (f(t_1),\dots,f(t_n)). $$

In particular $n=[G:H]$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a group $G$, a subgroup $H\le G$, an
$R$-linear $H$-module $W$, and a left transversal $T=\{t_1,\dots,t_n\}$ for
$G/H$.

[F1] The induced module consists of the functions $f:G\to W$ satisfying
$f(gh)=h^{-1}\cdot f(g)$, with pointwise $R$-module structure
([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] The left cosets of $H$ are the subsets $gH=\{gh:h\in H\}$ of $G$
([[def-coset]]).

[F3] For a finite index set, the direct sum is the module of tuples with
coordinatewise operations ([[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** constructive.

1.1 Because $T$ meets each left coset $gH$ in exactly one point, every $g\in G$ can be written uniquely as $g=t_i h$ with $t_i\in T$ and $h\in H$. [F2, given]

1.2 The map $\operatorname{ev}_T$ is $R$-linear because [F1] and [F3] define both module structures coordinatewise. [F1, F3, given]

2.1 Define $\Phi:\bigoplus_{i=1}^n W\longrightarrow \operatorname{Ind}_H^G W$ by $\Phi(w_1,\dots,w_n)(t_i h):=h^{-1}\cdot w_i$. Step 1.1 makes this well defined, and the displayed formula satisfies the covariance condition of [F1], so $\Phi(w_1,\dots,w_n)\in\operatorname{Ind}_H^G W$. [F1, step 1.1, construct]

3.1 The map $\Phi$ is $R$-linear because the $H$-action on $W$ is $R$-linear and the formula of step 2.1 is coordinatewise in the tuple entries. [F1, F3, step 2.1, algebra]

3.2 For $(w_1,\dots,w_n)\in\bigoplus_i W$, $\operatorname{ev}_T(\Phi(w_1,\dots,w_n))=(w_1,\dots,w_n)$ because $\Phi(w_1,\dots,w_n)(t_i)=w_i$. [step 2.1, algebra]

3.3 For $f\in\operatorname{Ind}_H^G W$ and $g=t_i h$ as in step 1.1, one has $\Phi(\operatorname{ev}_T(f))(g)=\Phi(f(t_1),\dots,f(t_n))(t_i h)=h^{-1}\cdot f(t_i)=f(t_i h)=f(g)$, where the third equality is the covariance condition from [F1]. Hence $\Phi(\operatorname{ev}_T(f))=f$. [F1, step 1.1, step 2.1, algebra]

4.1 Steps 3.2 and 3.3 show that $\Phi$ and $\operatorname{ev}_T$ are inverse $R$-module isomorphisms. Since $T$ has one element on each left coset, its cardinality is $[G:H]$. [F2, step 3.2, step 3.3, discharge-construct] ∎

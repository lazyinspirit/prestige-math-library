---
id: lem-union-of-a-chain-of-dominated-extensions
kind: lemma
title: "The union of a chain of dominated extensions is a well-defined dominated linear functional"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sublinear-functional, def-algebraic-dual-and-linear-functional,
       def-chain]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Theorem 4.13"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a real vector space and let $p:X \to \mathbb{R}$ be sublinear. Let
$\mathcal{C}$ be a nonempty chain, ordered by extension, of pairs $(N,g)$ such that
$N \subseteq X$ is a linear subspace and $g:N \to \mathbb{R}$ is linear with
$g(n) \le p(n)$ for every $n \in N$.

Put

$$U:=\bigcup_{(N,g) \in \mathcal{C}} N.$$

Then $U$ is a linear subspace of $X$, and the pointwise union
$G:U \to \mathbb{R}$ defined by $G(x)=g(x)$ whenever $x \in N$ is a well-defined
linear functional with $G(u) \le p(u)$ for every $u \in U$.

If every $(N,g) \in \mathcal{C}$ extends the same linear functional
$f:M \to \mathbb{R}$, then $G$ also extends $f$.

## Facts & Assumptions

**Given:** A real vector space $X$, a sublinear functional $p:X \to \mathbb{R}$,
and a nonempty chain $\mathcal{C}$ of dominated linear functionals ordered by extension.

[L1] A linear functional is additive and homogeneous over the scalar field
([[def-algebraic-dual-and-linear-functional]]).

[L2] A chain is a subset in which any two elements are comparable
([[def-chain]]).

## Proof

**Proof technique:** direct.

1.1 If $x \in N_1 \cap N_2$ for $(N_1,g_1),(N_2,g_2) \in \mathcal{C}$, then [L2] gives comparability. Suppose $N_1 \subseteq N_2$. Since the chain order is extension, $g_2|_{N_1}=g_1$, so $g_1(x)=g_2(x)$. The other inclusion case is the same. Therefore $G(x)$ is well defined on overlaps. [L2, given, construct]

1.2 Let $u,v \in U$ and $a \in \mathbb{R}$. Choose $(N_1,g_1),(N_2,g_2) \in \mathcal{C}$ with $u \in N_1$ and $v \in N_2$. By [L2], one of the domains contains the other; after relabeling, assume $N_1 \subseteq N_2$. Then $u,v \in N_2$, so $u+v \in N_2$ and $au \in N_2$ because $N_2$ is a linear subspace. Hence $u+v,au \in U$. Thus $U$ is a linear subspace. [L2, given, algebra]

2.1 With the same choice of $N_2$ as in step 1.2, one has $$G(u+v)=g_2(u+v)=g_2(u)+g_2(v)=G(u)+G(v),$$ and $$G(au)=g_2(au)=ag_2(u)=aG(u),$$ by [L1]. Therefore $G$ is linear. [step 1.1, step 1.2, L1]

3.1 If $u \in U$, choose $(N,g) \in \mathcal{C}$ with $u \in N$. Then $G(u)=g(u) \le p(u)$ by the defining property of the chain element, so $G$ is dominated by $p$. If every chain element extends the same $f:M \to \mathbb{R}$, then every $m \in M$ lies in each domain and all values there equal $f(m)$, so $G|_M=f$. [step 1.1, given] ∎

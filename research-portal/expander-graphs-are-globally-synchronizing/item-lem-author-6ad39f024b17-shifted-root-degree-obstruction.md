---
title: The original shifted roots impose a minimum degree above log n
status: draft
research_item: lem-author-6ad39f024b17-shifted-root-degree-obstruction
dependency_level: 8
---

## Prerequisites

- [def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [lem-expander-sync-lem-3-1](item-lem-expander-sync-lem-3-1)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)


## Statement

Let $G=(V,E)$ be a finite undirected graph on $n=|V|\ge2$ vertices with symmetric binary adjacency matrix $A$, allowing self-loops and counting each loop once in its vertex's degree. Write $d(x)=\sum_{y\in V}A_{xy}$, $D=\operatorname{diag}(d(x))$, $d_{\min}(G)=\min_{x\in V}d(x)$ and $d_{\max}(G)=\max_{x\in V}d(x)$. Let $I$ and $J$ be the identity and all-ones matrices on the vertex space.

Take the admissible original parameters $\gamma=2$, $\varepsilon=1/2$, and let $c^-<0<c^+$ be the original shifted roots, so $2h(c^--1/2)=2h(c^++1/2)=3/2$, where $h(x)=(1+x)\log(1+x)-x$ for $x>-1$. Then $-1/2<c^-<0$. Put $L=\log n$, $d^*=2L$, $\alpha=8/\sqrt{2L}$ and $p=2L/n$, so $pn=d^*$.

The degree target (6.9) for $G$ is the condition
$$ (1+c^-+\alpha)pn\le d_{\min}(G)\le d_{\max}(G)\le(1+c^+-\alpha)pn. $$
For every sufficiently large $n$, each of this degree target and the original $(n,d^*,\alpha,c^-,c^+)$-expander predicate for $G$ implies $d_{\min}(G)>L$. The latter predicate means all three inequalities
$$\|A-pJ\|\le\alpha d^*,\qquad c^-d^*I\preceq\Delta_L,\qquad\Delta_L\preceq c^+d^*I,$$
where $\Delta_L=D-A-d^*I+(d^*/n)J$, $\|\cdot\|$ is the operator norm on $\mathbb C^V$, and $\preceq$ is Hermitian quadratic-form order.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

[lem-expander-sync-lem-3-1](item-lem-expander-sync-lem-3-1)

[math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)

## Facts & Assumptions

[F1] The shifted-root definition requires positive logarithm arguments and the stated signs of the roots ([def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)).

[F2] Two-sided expansion is exactly the norm inequality and the two centered-Laplacian order inequalities ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F3] Every such expander has $d_{\min}(G)\ge(1+c^-)d^*-d^*/n$ ([lem-expander-sync-lem-3-1](item-lem-expander-sync-lem-3-1)).

[F4] The graph conventions give binary symmetric $A$, degrees as row sums with each loop counted once, the diagonal degree matrix $D$, and the degree extrema of the same finite nonempty graph $G$ ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F5] The natural logarithm is strictly increasing on $(0,\infty)$ and satisfies $\log 1=0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

## Proof

**Given:** The graph, parameters and shifted roots in the Statement; in each implication assume its stated condition on $G$.

**Goal:** Prove $-1/2<c^-<0$ and that each condition forces $d_{\min}(G)>L$ for sufficiently large $n$.

1.1 The graph and its degree extrema have the conventions in [F4]. Since $n\ge2>1$, [F5] gives $L=\log n>\log 1=0$, so $d^*=2L>0$ and $\alpha=8/\sqrt{2L}>0$. The parameter inequalities are $0<1/2<1$ and $1+1/2<2<1+(1/2)^{-2}=5$. Positivity of $1+c^--1/2$ in [F1] gives $c^->-1/2$, and [F1] also gives $c^-<0$. Therefore $\delta=1+2c^->0$ is a fixed positive number. If the full displayed degree target holds, its lower inequality and $pn=d^*=2L$ give $d_{\min}(G)\ge(1+c^-+\alpha)2L=L+(\delta+2\alpha)L>L$, using $L>0$ and $\alpha>0$. [F1, F4, F5, given, algebra]

2.1 If $G$ satisfies the expander predicate, [F2] gives precisely the displayed norm and order inequalities. The graph hypotheses in [F4] allow [F3] to be applied at $d^*=2L$, giving $d_{\min}(G)\ge L+(\delta-2/n)L>L$ whenever $n>2/\delta$. Together with step 1.1, this proves both implications for every sufficiently large $n$. [F2, F3, F4, step 1.1, algebra] ∎

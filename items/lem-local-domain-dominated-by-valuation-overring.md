---
id: lem-local-domain-dominated-by-valuation-overring
kind: lemma
title: A local domain has a dominating valuation overring
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-valuation-ring, def-local-ring, def-field-of-fractions, def-integral-element-and-algebraic-integer, def-axiom-of-choice, thm-zorn, cor-integral-elements-form-a-subring, thm-lying-over, thm-proper-ideal-contained-in-maximal-ideal, cor-maximal-ideals-are-prime]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Definition 10.50.1 and Lemmas 10.50.2-10.50.5 (tags 00I9, 00IA, 00IB, 00IC, 052K), printed p.117"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K$ be a field and let $A\subseteq K$ be a local
subring. Then there is a valuation ring $V\subseteq K$ with fraction field $K$
such that $V$ dominates $A$: that is, $A\subseteq V$ and
$\mathfrak m_A=A\cap\mathfrak m_V$.

## Facts & Assumptions

**Given:** A field $K$, a local subring $A\subseteq K$ with maximal ideal $\mathfrak m_A$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A subring $V\subseteq K$ of a field $K$ is a **valuation ring of $K$** if for every $x\in K^\times$ at least one of $x$, $x^{-1}$ lies in $V$. ([[def-valuation-ring]])

[F2] A **local ring** is a nonzero commutative ring with exactly one maximal ideal. ([[def-local-ring]])

[F3] The **field of fractions** of a domain $D$ is $(D\setminus\{0\})^{-1}D$. ([[def-field-of-fractions]])

[F4] Let $A\to A'$ be an integral ring map and let $\mathfrak m\subseteq A$ be a prime ideal with $\ker(A\to A')\subseteq\mathfrak m$. Then there is a prime $\mathfrak m'\subseteq A'$ with $\mathfrak m'\cap A=\mathfrak m$. ([[thm-lying-over]])

[F5] Assume AC. Let $P$ be a nonempty poset in which every chain has an upper bound. Then $P$ has a maximal element. ([[thm-zorn]])

[F6] An element $x$ of an $A$-algebra is **integral over $A$** when it satisfies a monic polynomial equation with coefficients in $A$. ([[def-integral-element-and-algebraic-integer]])

[F9] For a nonzero subring $A\subseteq K$ of a field, the elements of $K$ integral over $A$ form a subring. In particular, if $x$ is integral then this subring contains $A$ and $x$, hence contains $A[x]$; thus $A[x]$ is integral over $A$. ([[cor-integral-elements-form-a-subring]])

[F7] Assume AC. In a nonzero commutative ring, every proper ideal is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

[F8] Every maximal ideal of a commutative ring is prime. ([[cor-maximal-ideals-are-prime]])

## Proof

**Proof technique:** direct.

1.1 Let $S$ be the set of local subrings $B\subseteq K$ that dominate $A$, ordered by $B\le B'$ iff $A\subseteq B\subseteq B'$ and $B\cap\mathfrak m_{B'}=\mathfrak m_B$. Then $S$ is nonempty since $A\in S$. [F2, given]

2.1 If $B\le B'$ and $B'\le B''$ then $B\le B''$: indeed $\mathfrak m_B=B\cap\mathfrak m_{B'}=B\cap(B'\cap\mathfrak m_{B''})=B\cap\mathfrak m_{B''}$. So $\le$ is a partial order on $S$. [F2, step 1.1]

2.2 The empty chain has upper bound $A$. Every nonempty chain in $S$ has an upper bound: if $\{B_i\}$ is a chain, let $B=\bigcup_iB_i\subseteq K$, a subring of $K$. The union $\mathfrak n=\bigcup_i\mathfrak m_{B_i}$ is an ideal of $B$ (any two elements lie in a common $B_i$ by comparability), it is proper since $1\notin\mathfrak n$, and every $x\in B\setminus\mathfrak n$ lies in some $B_i\setminus\mathfrak m_{B_i}$, hence is a unit of $B_i$ and so of $B$. Therefore $B$ is local with maximal ideal $\mathfrak n$, it dominates each $B_i$, and it is an upper bound in $S$. [F2, step 1.1]

3.1 By [F5] the poset $S$ has a maximal element $V$. [F5, step 1.1, step 2.2]

4.1 We show $\operatorname{Frac}(V)=K$ by [F3]. Suppose first that some $t\in K$ is transcendental over $\operatorname{Frac}(V)$, so that $V[t]\subseteq K$ is a polynomial ring and $V[t]$ is a domain with $t\notin\operatorname{Frac}(V)$. The ideal $\mathfrak p=(t)+\mathfrak m_VV[t]$ of $V[t]$ is prime because its quotient is $V[t]/(t,\mathfrak m_V)\cong V/\mathfrak m_V$, a field, and it is proper; the localization $V[t]_{\mathfrak p}$ is a local ring whose maximal ideal $\mathfrak pV[t]_{\mathfrak p}$ pulls back to $\mathfrak p\cap V=\mathfrak m_V$, so it dominates $V$, while $t\in V[t]_{\mathfrak p}$ and $t\notin V$ (as $t$ is transcendental over $\operatorname{Frac}(V)$) make it distinct from $V$. Then $V[t]_{\mathfrak p}$ dominates $V$ and is strictly larger in $S$, contradicting maximality of $V$. [F2, F3, step 3.1]

4.2 Suppose next that some $t\in K$ is algebraic over $\operatorname{Frac}(V)$. Clearing denominators in a polynomial equation for $t$ over $\operatorname{Frac}(V)$ gives a nonzero $a\in V$ with $at$ integral over $V$ by [F6]. Then $A'=V[at]\subseteq K$ is integral over $V$ by [F9], and by [F4] (with $\ker(V\to A')=0$) there is a prime $\mathfrak m'$ of $A'$ with $\mathfrak m'\cap V=\mathfrak m_V$; the localization $A'_{\mathfrak m'}$ is a local ring dominating $V$. Since $t=(at)/a$ lies in $\operatorname{Frac}(A'_{\mathfrak m'})$, the ring $A'_{\mathfrak m'}$ is distinct from $V$ whenever $t\notin\operatorname{Frac}(V)$, again contradicting maximality. [F2, F4, F6, F9, step 3.1]

4.3 We show that $V$ is a valuation ring of $K$ by verifying [F1]. First, if $x\in K$ is integral over $V$, then $x\in V$: the ring $V[x]$ is integral over $V$ by [F9], so by [F4] there is a prime of $V[x]$ over $\mathfrak m_V$, whose localization dominates $V$ and hence equals $V$ by maximality; as $x\in V[x]$ lies in that localization, $x\in V$, and thus $V$ is integrally closed in $K$. [F4, F6, F9, step 3.1]

5.1 Step 4.2 applies to every $t\in K$ algebraic over $\operatorname{Frac}(V)$ and step 4.1 to every transcendental one; since each $t\in K\setminus\operatorname{Frac}(V)$ falls into one of the two cases and both contradict the maximality of $V$, no such $t$ exists, so $\operatorname{Frac}(V)=K$. [step 4.1, step 4.2]

5.2 Now let $x\in K^\times$ and suppose $x\notin V$; we show $x^{-1}\in V$. Let $A'=V[x]\subseteq K$, nonzero since $1\in V$, and suppose $\mathfrak m'$ is a prime of $A'$ lying over $\mathfrak m_V$, that is $\mathfrak m'\cap V=\mathfrak m_V$; then $A'_{\mathfrak m'}$ dominates $V$, so $A'_{\mathfrak m'}=V$ by maximality of $V$, and since $x\in A'$ this would give $x\in V$, a contradiction. Hence no prime of $A'$ lies over $\mathfrak m_V$. A prime $\mathfrak m'$ of $A'$ contains $\mathfrak m_VA'$ exactly when it lies over $\mathfrak m_V$: one implication is immediate, and conversely $\mathfrak m_VA'\subseteq\mathfrak m'$ gives $\mathfrak m_V\subseteq\mathfrak m'\cap V$, hence $\mathfrak m'\cap V=\mathfrak m_V$ because $\mathfrak m_V$ is maximal in $V$. So the set of primes of $A'$ containing $\mathfrak m_VA'$ is empty. If $\mathfrak m_VA'$ were a proper ideal of the nonzero ring $A'$, then [F7] would produce a maximal ideal of $A'$ containing it, which is prime by [F8] and would lie over $\mathfrak m_V$, a contradiction. Hence $\mathfrak m_VA'=A'$. [F2, F7, F8, step 3.1, step 4.3]

6.1 Thus $1=\sum_{i=0}^{d}t_ix^i$ for some $t_i\in\mathfrak m_V$ and $d\ge0$; note $t_0\in\mathfrak m_V$ so $1-t_0$ is a unit of $V$. Multiplying the relation by $x^{-d}$ gives $(1-t_0)x^{-d}=t_1x^{-(d-1)}+\dots+t_d$, hence, after dividing by the unit $1-t_0$, a monic polynomial equation for $x^{-1}$ with coefficients in $V$. So $x^{-1}$ is integral over $V$ by [F6], and step 4.3 gives $x^{-1}\in V$. [F6, step 5.2]

7.1 Since $x\in K^\times$ with $x\notin V$ was arbitrary, step 6.1 shows that for every $x\in K^\times$ at least one of $x$, $x^{-1}$ lies in $V$; this is the criterion [F1], so $V$ is a valuation ring of $K$ with $\operatorname{Frac}(V)=K$ by step 5.1, and it dominates $A$ because it dominates the intermediate rings down to $A$. [F1, step 5.1, step 6.1] ∎

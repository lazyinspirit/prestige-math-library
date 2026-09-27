---
id: lem-cichon-cross-and-bounding-inequalities
kind: lemma
title: Cross-ideal and bounding inequalities in Cichoń's diagram
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-null-and-meagre-cardinal-invariants, def-eventual-domination-bounding-and-dominating-numbers, cor-baire-sequence-space-is-homeomorphic-to-the-irrationals, def-product-topology, thm-lebesgue-measure-of-a-box-of-every-kind, lem-null-meagre-ideal-transfer-cantor-real, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Theorems 3.16–3.18, printed pp.11–12"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC,
$$\operatorname{cov}(\mathcal N)\le\operatorname{non}(\mathcal M), \qquad\operatorname{cov}(\mathcal M)\le\operatorname{non}(\mathcal N),$$
$$\operatorname{add}(\mathcal M)\le\mathfrak b \le\operatorname{non}(\mathcal M),\qquad \operatorname{cov}(\mathcal M)\le\mathfrak d \le\operatorname{cof}(\mathcal M).$$

## Facts & Assumptions

**Given:** The null and meagre ideals on $\mathbb R$, the eventual
domination numbers $\mathfrak b,\mathfrak d$, and ZFC.

[F1] The four ideal invariants have their usual witness minima, and
$\mathfrak b$ is the least size of an unbounded family in
$(\omega^\omega,\le^*)$, while $\mathfrak d$ is the least size of a
dominating family. ([[def-null-and-meagre-cardinal-invariants]],
[[def-eventual-domination-bounding-and-dominating-numbers]])

[F2] The irrationals are homeomorphic to Baire space $\omega^\omega$;
finite binary cylinders form a basis of Cantor space.
([[cor-baire-sequence-space-is-homeomorphic-to-the-irrationals]],
[[def-product-topology]])

[F3] Cantor-space and real-line meagre ideal invariants agree; interval
length gives Lebesgue measure of an interval.
([[lem-null-meagre-ideal-transfer-cantor-real]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] AC permits selecting witness families of the attained cardinal
minima and selecting one coded meagre cover for each member of a basis.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** translation, Baire-space bounds, and a chopped-cylinder witness.

1.1 Enumerate the rationals as $(q_i)_i$. For each $n$, choose open intervals around $q_i$ whose total length is $<2^{-n}$, and let $O_n$ be their union. Each $O_n$ is dense open and has measure $<2^{-n}$, so $B=\bigcap_nO_n$ is dense $G_\delta$ and null. Its complement $C=\bigcup_n(\mathbb R\setminus O_n)$ is meagre. Every translate of $B$ is null and comeagre; every translate of $C$ is meagre and conull. [F3]

1.2 For $g\in\omega^\omega$ put $B_g=\{x\in\omega^\omega:x\le^*g\}$. It is meagre: it is the union over $m$ of the closed nowhere-dense sets $\bigcap_{n\ge m}\{x:x(n)\le g(n)\}$. A family of size below $\mathfrak b$ is bounded by some $g$, so its image in Baire space is meagre. By [F2], a nonmeagre subset of $\mathbb R$ has a nonmeagre intersection with the irrationals, since the rationals are countable meagre. Consequently $\mathfrak b\le\operatorname{non}(\mathcal M)$. A dominating family $D$ of size $\mathfrak d$ gives the meagre cover $(B_g)_{g\in D}$ of Baire space; transport it to the irrationals and add the rational set to one cover member. Each transported member is meagre in $\mathbb R$, because the irrationals are a dense $G_\delta$ subspace with countable complement. Hence $\operatorname{cov}(\mathcal M)\le\mathfrak d$. [F1, F2, F4]

1.3 In Cantor space, for each $n$ list every clopen interval cylinder $$S^n_m=\{x:x\upharpoonright[n,k) =s\},\qquad k>n, s\in2^{[n,k)}.$$ For any dense open $D$, some listed $S^n_m$ lies in $D$: successively extend a common suffix while processing the finitely many length-$n$ prefixes, so all their concatenations land in $D$. Every listed interval cylinder meets every length-$n$ prefix cylinder. It follows that for any $f\in\omega^\omega$, each tail union $\bigcup_{n\ge r}S^n_{f(n)}$ is dense open, and $M_f=2^\omega\setminus\limsup_nS^n_{f(n)}$ is meagre. This family is inclusion-cofinal: if $A\subseteq\bigcup_jF_j$ with $F_j$ closed nowhere dense, choose $S^n_{f(n)}$ inside the dense open complement of $\bigcup_{j\le n}F_j$, making $A\subseteq M_f$. [F2]

2.1 If $X$ is nonmeagre and $y\in\mathbb R$, then $X$ cannot be contained in the meagre complement of $y-B$, so $y=x+b$ for some $x\in X,b\in B$. Thus the null translates $(x+B)_{x\in X}$ cover $\mathbb R$, giving $\operatorname{cov}(\mathcal N)\le|X|$. Take $|X|=\operatorname{non}(\mathcal M)$. Likewise, if $X$ is nonnull, it meets the conull translate $y-C$ for every $y$, so the meagre translates $(x+C)_{x\in X}$ cover $\mathbb R$ and give $\operatorname{cov}(\mathcal M)\le\operatorname{non}(\mathcal N)$. [step 1.1, F1, F4]

2.2 Let $k_f(n)>n$ be the right endpoint of $S^n_{f(n)}$. For a strictly increasing $g$ with $g(n)>n$, put $$E_g=\{x:\text{for all sufficiently large }n, \text{some }i\in[n,g(n))\text{ has }x(i)=1\}.$$ This is meagre: for every $r$, the union over $n\ge r$ of the zero-block cylinders $\{x:x\upharpoonright[n,g(n))=0\}$ is dense open, so its limsup is comeagre and its complement is $E_g$. [step 1.3]

3.1 We claim $E_g\subseteq M_f\Rightarrow g\le^*k_f$. If $g(n)>k_f(n)$ infinitely often, choose increasing $n_j$ from those indices with $g(n_j)<n_{j+1}$. Define $x$ to agree with the prescribed pattern $S^{n_j}_{f(n_j)}$ on $[n_j,k_f(n_j))$ and to equal $1$ elsewhere. The blocks are disjoint, so $x$ belongs to infinitely many $S^{n_j}_{f(n_j)}$ and hence $x\notin M_f$. Yet $x\in E_g$: outside the prescribed blocks $x(n)=1$; when $n$ lies inside the block starting at $n_j$, monotonicity gives $g(n)\ge g(n_j)>k_f(n_j)$, and the coordinate $k_f(n_j)$ is outside all prescribed blocks and has value $1$. Thus $E_g\not\subseteq M_f$, proving the claim. [step 2.2]

4.1 Choose an unbounded family $G$ of strictly increasing functions of size $\mathfrak b$; replacing an arbitrary witness by its strictly increasing running majorants preserves unboundedness. If $\bigcup_{g\in G}E_g$ were meagre, step 1.3 would put it in one $M_f$, and step 3.1 would make $k_f$ dominate every $g\in G$, a contradiction. Therefore $\operatorname{add}(\mathcal M_{2^\omega})\le\mathfrak b$. If $(A_i)_{i<\operatorname{cof}(\mathcal M_{2^\omega})}$ is an inclusion-cofinal meagre family, use [F4] to select $f_i$ with $A_i\subseteq M_{f_i}$. Every $E_g$ lies in some $A_i$, so step 3.1 says $g\le^*k_{f_i}$. The family $(k_{f_i})_i$ dominates, whence $\mathfrak d\le\operatorname{cof}(\mathcal M_{2^\omega})$. Transfer these two inequalities to $\mathbb R$ by [F3]. AC is used exactly for the cardinal witness families and indexed choices of $f_i$; the interval construction itself uses finite searches. ∎ [step 1.3, step 3.1, F1, F3, F4]

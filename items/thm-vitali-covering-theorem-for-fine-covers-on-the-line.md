---
id: thm-vitali-covering-theorem-for-fine-covers-on-the-line
kind: theorem
title: "The Vitali covering theorem for fine covers on the real line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dependent-choice, def-lebesgue-outer-measure, def-measure-zero-and-content-zero, def-vitali-cover-and-fine-cover-on-the-line, thm-finite-and-countable-subadditivity-of-measures, thm-heine-borel-characterisation-r, thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian S. Thomson, Vitali Coverings and Lebesgue's Differentiation Theorem, Section 4"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed., Mini-Vitali and Vitali covering sections"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Assume dependent choice ([[def-dependent-choice]]).

Let $E \subseteq \mathbb{R}$ with $\lambda^{*}(E) < \infty$, and let
$\mathcal V$ be a fine cover of $E$ by closed nondegenerate intervals
([[def-vitali-cover-and-fine-cover-on-the-line]], [[def-lebesgue-outer-measure]]).
Then there is a countable pairwise disjoint subfamily $(I_n)_{n \ge 1}$ of
$\mathcal V$ such that

$$
\lambda^{*}\!\left(E \setminus \bigcup_{n \ge 1} I_n\right) = 0.
$$

Moreover, for every $\varepsilon > 0$ there is a finite pairwise disjoint
subfamily $I_1,\dots,I_N$ from $\mathcal V$ such that

$$
\lambda^{*}\!\left(E \setminus \bigcup_{n=1}^{N} I_n\right) < \varepsilon.
$$

## Facts & Assumptions

**Given:** Dependent choice, the set $E \subseteq \mathbb{R}$ with $\lambda^{*}(E) < \infty$, and a fine interval cover $\mathcal V$ of $E$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Choose an open set $U \supseteq E$ with finite length and $\lambda(U) < \lambda^{*}(E)+1$. Because $\mathcal V$ is fine, every $x \in E$ lies in arbitrarily short intervals of $\mathcal V$, so after shrinking we may restrict to the subfamily $$\mathcal V_U := \{I \in \mathcal V : I \subseteq U\},$$ which is still a fine cover of $E$. Using dependent choice, choose a sequence $(I_n)_{n \ge 1}$ in $\mathcal V_U \cup \{\varnothing\}$ as follows: as long as there exists an interval of $\mathcal V_U$ disjoint from the previously chosen nonempty intervals, choose $I_n$ disjoint from those earlier nonempty intervals and with length at least half the supremum of the lengths of all such candidates; once no disjoint candidate remains, set $I_n=\varnothing$ and all later terms equal to $\varnothing$. [given, choose]

2.1 Let $M:=\{n \ge 1 : I_n \ne \varnothing\}$. The nonempty intervals $(I_n)_{n \in M}$ are pairwise disjoint and lie in the finite-open set $U$, so $$\sum_{n \in M}|I_n| \le \lambda(U) < \infty.$$ If $M$ is finite, write $M=\{1,\dots,N\}$ and let $R:=E \setminus \bigcup_{n=1}^{N} I_n$. If $x \in R$, then the finite union $\bigcup_{n=1}^{N}I_n$ is closed and does not contain $x$, so $d:=\operatorname{dist}(x,\bigcup_{n=1}^{N}I_n)>0$. Because $\mathcal V_U$ is a fine cover of $E$, choose $J \in \mathcal V_U$ with $x \in J$ and $|J|<d$. Then $J$ is disjoint from $I_1,\dots,I_N$, contradicting the terminal clause in step 1.1. Therefore $R=\varnothing$. In this finite-termination case the theorem already holds with the finite family $I_1,\dots,I_N$, and the finite $\varepsilon$-version is immediate as well. [step 1.1, algebra]

2.2 It remains to treat the case where $M$ is infinite. Then no $I_n$ is empty, because empties persist forever after the first one, so $\sum_{n \ge 1}|I_n|<\infty$ and therefore $|I_n| \to 0$. Let $R := E \setminus \bigcup_{n \ge 1} I_n$. Fix $x \in R$ and $m \ge 1$. Since $x$ does not lie in the finite union $I_1 \cup \cdots \cup I_{m-1}$, the distance $$d_m:=\operatorname{dist}\!\left(x,\bigcup_{n=1}^{m-1}I_n\right)$$ is positive. Also $$s_m:=\sup_{n \ge m}|I_n|>0,$$ because there are infinitely many nonempty intervals in the tail. Choose $J \in \mathcal V_U$ with $$x \in J, \qquad |J|<\min(d_m,s_m).$$ Then $J$ is disjoint from $I_1,\dots,I_{m-1}$. If $J$ were disjoint from every $I_n$ with $n \ge m$, then $J$ would remain a candidate at every later stage. The half-maximal choice would then give $|J| \le 2|I_n|$ for every $n \ge m$, contradicting $|I_n| \to 0$. So $J$ meets some $I_n$ with $n \ge m$; let $n$ be the least such index. Then $J$ is disjoint from $I_1,\dots,I_{n-1}$, so it is an admissible candidate at stage $n$, and the half-maximal choice gives $|J| \le 2|I_n|$. Intersecting intervals with comparable lengths satisfy $J \subseteq 5I_n$. Therefore $x \in \bigcup_{n \ge m} 5I_n$. Since $m$ was arbitrary, $$R \subseteq \bigcap_{m \ge 1} \bigcup_{n \ge m} 5I_n.$$ [step 1.1, algebra]

3.1 By countable subadditivity of outer measure and the interval formula for Lebesgue outer measure, $$\lambda^{*}(R) \le \inf_{m \ge 1} \lambda^{*}\!\left(\bigcup_{n \ge m} 5I_n\right) \le \inf_{m \ge 1} 5 \sum_{n \ge m} |I_n| = 0.$$ This proves the countable disjoint conclusion in the infinite case. For the finite version, choose $N$ so large that $5\sum_{n>N}|I_n| < \varepsilon$ and repeat the same estimate with $R_N := E \setminus \bigcup_{n=1}^{N} I_n$. [step 2.2, algebra]

4.1 Steps 1.1 through 4.1 prove both forms of the theorem. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

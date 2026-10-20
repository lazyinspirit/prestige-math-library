---
id: thm-reals-cauchy-complete
kind: theorem
title: "The reals are complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, lem-rat-embeds-dense, lem-rat-archimedean, thm-reals-ordered-field, def-real-numbers, def-rational-cauchy-sequence, def-real-order, thm-well-ordering-principle, lem-rat-positive-denominator, lem-nat-embeds-int, thm-int-ordered-ring, def-axiom-schema-of-separation, def-cartesian-product, def-complete-ordered-field, thm-recursion, thm-induction-principle]
aliases: []
landmark: true
short: "ℝ complete"
proof_strategy: direct
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-reals-cauchy-complete.json
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
    - title: "W. Aitken, Constructing the Real Numbers, Section 8, Lemma 30 and footnote 3"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch9RealNumbers.pdf"
pipeline_run: null
---

## Statement

Every Cauchy sequence of real numbers (Limits and Cauchy sequences of reals) converges to a real
number. Together with The reals form a totally ordered field, this completes the
construction: $\mathbb{R}$ is a complete totally ordered field.
The proof uses no form of the axiom of choice.

## Statement references

[[def-real-limit]]

[[thm-reals-ordered-field]]

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)_{k \ge 1}$ of reals.

[L1] Rational approximation: for any real $z$ and rational $\eta > 0$ there is $q$ with $|z - \hat q| < \hat\eta$ ([[lem-rat-embeds-dense]]).

[L2] Archimedean property: for rational $\varepsilon > 0$ there is $k$ with $1/k < \varepsilon$ ([[lem-rat-archimedean]]).

[L3] Cauchy definitions in $\mathbb{Q}$ and $\mathbb{R}$ ([[def-rational-cauchy-sequence]], [[def-real-limit]]).

[L4] The embedding preserves and reflects order and arithmetic; triangle inequality in $\mathbb{R}$ ([[lem-rat-embeds-dense]], [[thm-reals-ordered-field]], [[def-real-order]]).

[L5] Reals are classes of rational Cauchy sequences ([[def-real-numbers]]).

[L6] Every rational has a positive-denominator integer representative; the nonnegative integers are the embedded naturals, with compatible arithmetic and order ([[lem-rat-positive-denominator]], [[lem-nat-embeds-int]], [[thm-int-ordered-ring]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a unique least element ([[thm-well-ordering-principle]]). Cartesian products are sets ([[def-cartesian-product]]), and a uniquely specified subset of an existing set is formed by Separation ([[def-axiom-schema-of-separation]]).

[L8] Upper bounds, least upper bounds, and completeness mean the least-upper-bound property ([[def-complete-ordered-field]]).

[L9] A specified self-map of a set and an initial value define a unique sequence by recursion; natural-number induction proves its invariants ([[thm-recursion]], [[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For a fixed $k\ge1$, call a triple $(h,b,j)$ of naturals admissible when $h\ge1$, $1\le b\le h$, $0\le j\le2h$, and $|x_k-\widehat{(j-h)/b}|<\widehat{1/k}$. Here $j-h$ is an integer. Such a triple exists: [L1] supplies one approximating rational $a/b$; [L6] makes $b$ a positive natural, and either $a$ or $-a$ is a nonnegative integer. Thus some natural $h$ satisfies $h\ge b$ and $-h\le a\le h$. Then $j=a+h$ is a natural with $j\le2h$ and $(j-h)/b=a/b$. This proves nonemptiness separately for each $k$; it does not choose a family of witnesses. [L1, L6, construct]

1.2 To prove the least-upper-bound property, fix any nonempty $S\subseteq\mathbb{R}$ and any upper bound $U$. Fix one $t_0\in S$, and set $u_0=t_0-1$, $v_0=U$. Then $u_0$ is not an upper bound, $v_0$ is an upper bound, and $u_0<v_0$. For any pair $(u,v)\in\mathbb{R}^2$, put $m=(u+v)/2$ and send $(u,v)$ to $(u,m)$ if $m$ is an upper bound of $S$, and to $(m,v)$ otherwise. This specifies a single self-map; [L9] gives its unique iterated sequence $(u_k,v_k)_{k\ge0}$. Only one element $t_0$ and one upper bound are fixed; each later value is uniquely determined, so no choice axiom is used. [L4, L7, L8, L9, construct]

2.1 Let $h_k$ be the least first coordinate of an admissible triple; with $h_k$ fixed, let $b_k$ be the least admissible second coordinate; with both fixed, let $j_k$ be the least admissible third coordinate. Each minimum exists and is unique by [L7]. Define $q_k=(j_k-h_k)/b_k$. This unique rule defines the graph of $(q_k)$ as a subset of $\mathbb{N}_{\ge1}\times\mathbb{Q}$ by Separation. Consequently $|x_k-\hat q_k|<\widehat{1/k}$ for every $k$, without choosing representatives of all the $x_k$ or invoking any choice axiom. [step 1.1, L6, L7, construct]

2.2 Induction gives that $u_k$ is not an upper bound, $v_k$ is an upper bound, $u_k\le u_{k+1}\le v_{k+1}\le v_k$, and $v_k-u_k=(v_0-u_0)/2^k$. Here $2^0=1$ and $2^{k+1}=2\cdot2^k$, defined by recursion. Also $2^k\ge k+1$: the base case is equality, and $2(k+1)\ge k+2$ propagates the bound. Put $w=v_0-u_0>0$. By [L1] choose a rational $q$ with $|w-\hat q|<1$, and set $B=q+1$, so $0<w<\hat B$. Given rational $\varepsilon>0$, [L2] supplies $N\ge1$ with $1/N<\varepsilon/B$. For every $k\ge N$, $0<v_k-u_k=w/2^k<\widehat{B/(k+1)}\le\widehat{B/N}<\hat\varepsilon$. Thus the interval widths tend to zero, proved using only rational Archimedeanity. [step 1.2, L1, L2, L4, L9, algebra]

3.1 $(q_k)$ is Cauchy in $\mathbb{Q}$: given rational $\varepsilon > 0$, pick $k_0$ with $1/k_0 < \varepsilon/3$ and $K$ with $|x_k - x_l| < \widehat{\varepsilon/3}$ for $k, l \ge K$; then for $k, l \ge \max(k_0, K)$, $\widehat{|q_k - q_l|} \le |\hat q_k - x_k| + |x_k - x_l| + |x_l - \hat q_l| < \widehat{1/k} + \widehat{\varepsilon/3} + \widehat{1/l} \le 3\,\widehat{\varepsilon/3} = \hat\varepsilon$, and the embedding reflects order, so $|q_k - q_l| < \varepsilon$. [step 2.1, L2, L3, L4]

4.1 Set $x := [(q_k)] \in \mathbb{R}$, the class of this rational Cauchy sequence. [step 3.1, L5]

5.1 $x_k \to x$: given rational $\varepsilon > 0$, pick $k_1$ with $1/k_1 < \varepsilon/3$ and $K_2$ with $|q_k - q_l| < \varepsilon/3$ for $k, l \ge K_2$; for $k \ge \max(k_1, K_2)$, the difference $\hat q_k - x$ has representative $(q_k - q_l)_l$, whose absolute values $|q_k - q_l|$ are eventually below $\varepsilon/3$, so $|\hat q_k - x| \le \widehat{\varepsilon/3}$, and $|x_k - x| \le |x_k - \hat q_k| + |\hat q_k - x| < \widehat{1/k} + \widehat{\varepsilon/3} \le 2\,\widehat{\varepsilon/3} < \hat\varepsilon$. [step 2.1, step 3.1, step 4.1, L4]

6.1 Since the initial Cauchy sequence was arbitrary, every Cauchy sequence of reals converges in $\mathbb{R}$. [given, step 5.1]

7.1 For $j,l\ge k$, nestedness puts $u_j,u_l$ in $[u_k,v_k]$, so $|u_j-u_l|\le v_k-u_k$. Step 2.2 makes this less than any prescribed positive rational tolerance for all sufficiently large $k$; hence $(u_k)$ is Cauchy. By step 6.1 (reindexing by $k+1$), it converges to a real $s$. For every fixed $k$, nestedness gives $u_k\le u_j\le v_k$ for all $j\ge k$. If $s<u_k$, density supplies a rational $\eta>0$ with $\hat\eta<u_k-s$, and eventually $|u_j-s|<\hat\eta$ contradicts $u_j\ge u_k$. If $s>v_k$, use $0<\hat\eta<s-v_k$ instead. Thus $u_k\le s\le v_k$ for every $k$. In particular $0\le v_k-s\le v_k-u_k$, so step 2.2 also proves $v_k\to s$. [step 6.1, step 2.2, L1, L3, L4]

8.1 For every $t\in S$, $t\le v_k$ for all $k$. If $s<t$, choose a positive rational $\eta$ with $\hat\eta<t-s$; convergence $v_k\to s$ gives eventually $v_k<s+\hat\eta<t$, a contradiction. Hence $s$ is an upper bound of $S$. If $v$ is any upper bound, $u_k<v$ for every $k$: since $u_k$ is not an upper bound, some $t\in S$ satisfies $u_k<t\le v$. This is a separate existential implication for each $k$, with no sequence of witnesses chosen. If $v<s$, take $0<\hat\eta<s-v$ and use $u_k\to s$ to obtain eventually $u_k>s-\hat\eta>v$, a contradiction. Thus $s\le v$ for every upper bound $v$: $s$ is the least upper bound. [step 2.2, step 7.1, L1, L3, L4, L8]

9.1 Every Cauchy sequence of reals converges, and every nonempty bounded-above subset of $\mathbb{R}$ has a least upper bound. Together with its totally ordered field structure, $\mathbb{R}$ is a complete totally ordered field; neither construction uses any form of the axiom of choice. [step 6.1, step 8.1, L4, L8] ∎

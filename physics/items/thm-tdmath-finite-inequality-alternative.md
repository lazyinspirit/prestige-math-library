---
id: thm-tdmath-finite-inequality-alternative
kind: theorem
title: Finite inequality alternative by Fourier–Motzkin elimination
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-complete-ordered-field, def-vector-space, def-finite-sum, lem-finite-sum-laws, def-function-space, lem-finite-sum-reindexing-and-fubini, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, lem-nat-nonzero-is-successor]
dependency_roles:
  def-function-space: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-vector-space: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  thm-induction-principle: mathematical-premise
  def-natural-numbers: mathematical-premise
  lem-nat-nonzero-is-successor: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE464, Fourier–Motzkin Elimination lecture notes"
      url: "https://lall.stanford.edu/ee464/lectures/fourier_motzkin.pdf?download=1"
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Let $m,n\in\mathbb N$ be finite, let $c_j\in\mathbb R^n$ and $h_j\in\mathbb R$ for $0\le j<m$, where $\mathbb R^n$ is the function space on $\{0,\ldots,n-1\}$ with coordinatewise operations as in [[def-function-space]]. For $c,b\in\mathbb R^n$, define the dot product by $c\cdot b:=\sum_{k<n}c(k)b(k)$. A finite vector sum is coordinatewise: $(\sum_{j<m}\lambda_jc_j)(k):=\sum_{j<m}\lambda_jc_j(k)$ for each $k<n$. All sums use [[def-finite-sum]].

The finite system

$$c_j\cdot b\ge h_j\qquad(0\le j<m)$$

has a solution $b\in\mathbb R^n$ if and only if every $\lambda\in\mathbb R^m$ with $\lambda_j\ge0$ and $\sum_{j<m}\lambda_jc_j=0$ satisfies $\sum_{j<m}\lambda_jh_j\le0$. Dot products and sums are finite. This includes empty rows, empty variables, and an empty inequality family.

## Facts & Assumptions

[A1] The finite row data in the Statement: $m,n$ are nonnegative integers, and each row is $(c_j,h_j)$ with real coefficients.

[F1] [[def-complete-ordered-field]] supplies the complete ordered real field; [[def-function-space]] defines $\mathbb R^n$ as functions on $n=\{0,\ldots,n-1\}$ with pointwise coordinate operations, forming a vector space as in [[def-vector-space]], including the one-element zero space when $n=0$. The dot product and finite vector sums are exactly those defined in the Statement.

[F2] [[def-finite-sum]] and clauses 1 and 2 of [[lem-finite-sum-laws]] supply finite-sum additivity and scalar linearity. [[lem-finite-sum-reindexing-and-fubini]] supplies finite-set enumeration, bijective reindexing and interchange of finite iterated sums; applied to $\mathbb R$ and its pointwise function spaces, these laws justify collecting coordinates and coefficients in finite row combinations.

[F3] [[lem-of-sign-rules]]: a product of positive reals is positive, multiplying an inequality by a positive real preserves its direction, and multiplication by zero yields equality.

[F4] [[thm-induction-principle]]: a property of the natural-number length that holds at zero and passes from each length to its successor holds at every finite length.

[F5] [[lem-nat-nonzero-is-successor]]: each nonzero natural number $n$ has a predecessor $n'$ with $n=\sigma(n')$.

## Proof

**Given:** [A1]–[F5].

1.1 If $b$ solves the system and $\lambda_j\ge0$ with $\sum_j\lambda_jc_j=0$, multiply row $j$ by $\lambda_j$ and add the finitely many inequalities. By [F3] each row inequality is preserved under its nonnegative multiplier. By the coordinatewise definitions in the Statement and finite-sum distributivity with Fubini from [F2], $\sum_{j<m}\lambda_j(c_j\cdot b)=(\sum_{j<m}\lambda_jc_j)\cdot b=0$. Hence $0\ge\sum_{j<m}\lambda_jh_j$. This proves necessity. [A1, F1, F2, F3, algebra]

1.2 For sufficiency, prove by induction on $n$ the alternative: if the finite system has no solution, there is a nonnegative combination of its rows whose coefficient vector is zero and whose right side is positive. If $n=0$, every row has zero left side; infeasibility means some $h_j>0$, and that single row is the certificate. If $m=0$, the system is feasible, so this case cannot occur under the induction claim's antecedent. [A1, F1, F4]

1.3 Let $n>0$ and assume the alternative for $n'$ variables, where $n=\sigma(n')=n'\cup\{n'\}$ by [F5] and [[def-natural-numbers]]. For $c\in\mathbb R^n$ define $a\in\mathbb R^{n'}$ by $a(k):=c(k)$ for $k<n'$, and put $\alpha:=c(n')\in\mathbb R$; this separates its first $n'$ coordinates and its last coordinate. Conversely, each $u\in\mathbb R^{n'}$ and $t\in\mathbb R$ determine the unique $b\in\mathbb R^n$ with $b(k)=u(k)$ for $k<n'$ and $b(n')=t$. For every row $c_j$, define $a_j(k):=c_j(k)$ for $k<n'$ and $\alpha_j:=c_j(n')$. Partition the row indices into $P=\{j:\alpha_j>0\}$, $N=\{j:\alpha_j<0\}$, and $Z=\{j:\alpha_j=0\}$. Retain each row $(a_j,h_j)$ for $j\in Z$. For every $p\in P$ and $q\in N$, add the reduced row $((-\alpha_q)a_p+\alpha_p a_q,\;(-\alpha_q)h_p+\alpha_p h_q)$. Every multiplier used is positive, so these row combinations preserve the inequality directions by [F3]. [A1, F1, F3, F5, algebra]

2.1 The reduced system in $u\in\mathbb R^{n'}$ is feasible exactly when the original is, using the coordinate reconstruction in step 1.3. Indeed, a solution $(u,t)$ implies every retained inequality; adding row $p$ multiplied by $-\alpha_q>0$ to row $q$ multiplied by $\alpha_p>0$ cancels $t$ and gives each pair row. Conversely, if $u$ satisfies the reduced system, rows in $P$ impose finitely many lower bounds $t\ge L_p:=(h_p-a_p\cdot u)/\alpha_p$, and rows in $N$ impose finitely many upper bounds $t\le U_q:=(h_q-a_q\cdot u)/\alpha_q$. Each pair row is exactly $L_p\le U_q$. To justify the finite extrema, enumerate any nonempty finite list $\ell_0,\ldots,\ell_{k-1}$ of lower bounds and define $M_1=\ell_0$; for $1\le j<k$, recursively set $M_{j+1}=M_j$ if $M_j\ge\ell_j$, and $M_{j+1}=\ell_j$ otherwise. Totality of the real order makes $M_{j+1}$ the larger of $M_j$ and $\ell_j$; induction [F4] shows that $M_k$ is a member of the list and dominates every entry. Thus a finite nonempty list has a maximum. For an upper-bound list $v_0,\ldots,v_{\ell-1}$, define $m_1=v_0$ and, for $1\le j<\ell$, set $m_{j+1}=m_j$ if $m_j\le v_j$, and $m_{j+1}=v_j$ otherwise. The same totality and induction argument shows $m_\ell$ is a member no greater than any entry, so every finite nonempty list has a minimum. If both $P,N$ are nonempty, these extrema and all pair inequalities give $\max_{p\in P}L_p\le\min_{q\in N}U_q$, so choose $t=\max_{p\in P}L_p$. If only lower bounds occur choose their finite maximum; if only upper bounds occur choose their finite minimum; if neither occurs choose $t=0$. Thus the original system has a solution. [A1, F1, F2, F3, F4, F5, algebra]

3.1 If the original system is infeasible, step 2.1 makes the reduced system infeasible. By induction there are nonnegative multipliers on reduced rows with zero combined first $n'$ coordinates and positive combined right side. Lift each retained zero-row multiplier to its original row; lift each pair-row multiplier $\mu_{pq}$ to coefficients $-\alpha_q\mu_{pq}$ on row $p$ and $\alpha_p\mu_{pq}$ on row $q$. All lifted coefficients are nonnegative by [F3]. Every pair lift has last coordinate $(-\alpha_q)\alpha_p+\alpha_p\alpha_q=0$; the total first coordinates vanish by the reduced certificate, and its right side remains positive. This is the required certificate for the original system and completes the induction. [A1, F3, step 1.2, step 1.3, step 2.1, algebra]

4.1 If the stated multiplier condition holds, the certificate from step 3.1 cannot exist, because it would have zero combined left coefficient and positive combined right side. Therefore the system is feasible. Together with step 1.1 this proves both directions, including the empty-variable base case in step 1.2, the zero/positive/negative sign partition and bound reconstruction in steps 1.3–2.1, and the lifted certificate in step 3.1. [A1, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎

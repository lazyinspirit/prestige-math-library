---
id: thm-number-field-finite-weak-approximation-in-zf
kind: theorem
title: "Finite weak approximation in a number field in ZF"
status: draft
origin: session
deps: [lem-number-field-completion-tensor-and-norm-in-zf, thm-ring-of-integers-free-of-rank-degree, thm-number-field-integral-ideal-factorisation-in-zf, thm-discriminant-as-an-embedding-determinant, thm-chinese-remainder-theorem-for-comaximal-ideals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 7.20 and the completion-valued version immediately following it"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Work in ZF. Let $K$ be a number field. Its finite completions are the fields $K_P$ at nonzero prime ideals $P$ of $\mathcal O_K$, formed as fraction fields of completed DVRs; its archimedean coordinates are one copy of $\mathbb R$ for each real embedding and one copy of $\mathbb C$ for each conjugate pair of nonreal embeddings. For any finite set $V$ of distinct such places, the diagonal image of $K$ is dense in $\prod_{v\in V}K_v$.

Explicitly, for prescribed $a_v\in K_v$, positive real $\varepsilon_v$ at archimedean places, and integers $N_P$ at finite places, there exists $x\in K$ with
$$|v(x)-a_v|<\varepsilon_v\quad(v\text{ archimedean}),\qquad \operatorname{ord}_P(x-a_P)\ge N_P\quad(P\text{ finite}).$$
The same density holds with $x\ne0$ required, and with $K^r$ in the corresponding finite product of local $r$-dimensional spaces for any fixed finite $r$.

## Statement references

[[lem-number-field-completion-tensor-and-norm-in-zf]]

[[thm-discriminant-as-an-embedding-determinant]]

[[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Facts & Assumptions

**Given:** The finite set of places, targets and accuracies in the statement.

[F1] [[lem-number-field-completion-tensor-and-norm-in-zf]] constructs each $K_P$ as a complete discrete valuation field with dense subfield $K$ in ZF.

[F2] [[thm-ring-of-integers-free-of-rank-degree]] gives an integral basis $\omega_1,\ldots,\omega_n$ of $R=\mathcal O_K$, also a rational basis of $K$.

[F3] [[thm-discriminant-as-an-embedding-determinant]] says that the matrix of all complex embeddings on a rational basis is invertible. Replacing each conjugate pair of rows by real and imaginary parts multiplies its determinant by a nonzero scalar, so the images of this basis form a real basis in $H=\mathbb R^{r_1}\times\mathbb C^{r_2}\cong\mathbb R^n$.

[F4] [[thm-number-field-integral-ideal-factorisation-in-zf]] supplies the DVR valuations and finite factorisation of nonzero ideals. Distinct nonzero primes are maximal, hence comaximal; their positive powers remain comaximal, as follows by expanding $(a+b)^{s+t-1}=1$ when $a+b=1$ with $a,b$ in the respective primes.

[F5] [[thm-chinese-remainder-theorem-for-comaximal-ideals]] supplies a simultaneous representative for any finite list of residues modulo pairwise comaximal ideals.



## Proof

1.1 Fix the one basis from [F2], and let $\Sigma:K\to H$ be the embedding map with real and imaginary coordinates. By [F3], its basis images are a real basis of $H$. For a fixed positive integer $m$ and rational prime $\ell$, the subgroup $\bigcup_{j\ge0}m\ell^{-j}\Sigma(R)$ is dense in $H$. Indeed write a target $y\in H$ uniquely as $\sum_i t_i\Sigma(\omega_i)$ with $t_i\in\mathbb R$. At level $j$, take $c_i=\lfloor\ell^j t_i/m\rfloor\in\mathbb Z$. The error of $m\ell^{-j}\Sigma(\sum_i c_i\omega_i)$ in Euclidean norm is at most $m\ell^{-j}\sum_i\|\Sigma(\omega_i)\|$, which tends to zero. Thus a sufficiently large $j$ and these finitely many integers give any prescribed error bound. This proof is an explicit finite grid construction, not an appeal to compactness. [F2, F3, given, algebra]

1.2 Let $T$ be the finite set of selected finite primes. For each $P\in T$, [F1] supplies $b_P\in K$ with $\operatorname{ord}_P(b_P-a_P)\ge N_P$. There are only finitely many such choices. Clear the rational coordinates of this finite list in the basis of [F2], obtaining a positive integer $D$ such that $Db_P\in R$ for all $P\in T$. For each $P$ put $t_P=\max(1,N_P+\operatorname{ord}_P D)$. By [F4] and [F5] there exists $b\in R$ with $b\equiv Db_P\pmod{P^{t_P}}$ for every $P\in T$. If $T$ is empty take $D=1$, $b=0$. [F1, F2, F4, F5, given]

2.1 Let $q_1,\ldots,q_s$ be the distinct rational primes below the members of $T$. Choose one positive integer $M$ at least every $t_P$ and put $m=\prod_{i=1}^s q_i^M$, with empty product $1$. Since $\operatorname{ord}_P(q_i)\ge1$ when $P\mid q_i$, we have $\operatorname{ord}_P(m)\ge t_P$. Choose a rational prime $\ell$ different from all $q_i$: a prime divisor of $1+\prod_i q_i$ works, with $\ell=2$ if $s=0$. For every $c\in R$ and $j\ge0$, $\operatorname{ord}_P(m\ell^{-j}c)\ge t_P$ at each selected $P$. Consequently $$x=\frac{b+m\ell^{-j}c}{D}$$ satisfies $\operatorname{ord}_P(x-b_P)\ge t_P-\operatorname{ord}_P D\ge N_P$, and then the nonarchimedean triangle inequality gives $\operatorname{ord}_P(x-a_P)\ge N_P$. [F4, step 1.2, algebra]

3.1 Extend the selected archimedean target list to all coordinates of $H$ by assigning zero to the omitted coordinates, obtaining $a\in H$. Apply the grid in step 1.1 to the target $Da-\Sigma(b)$, with error less than $D\min_v\varepsilon_v$ over the selected archimedean places. It yields $j$ and $c\in R$ for which the $x$ of step 2.1 satisfies the required archimedean bounds: each real absolute value and each complex modulus is bounded by the full Euclidean error divided by $D$. If there are no selected archimedean places take $c=0$, $j=0$. Together with step 2.1 this proves existence and diagonal density. Empty $V$ is included, since any $x\in K$ then works. [step 1.1, step 2.1, algebra]

4.1 To require $x\ne0$, first obtain $x$ with stricter finite bounds $N_P+1$ and stricter archimedean bounds $\varepsilon_v/2$. Choose a nonzero integer $m_0$ with $\operatorname{ord}_P(m_0)\ge N_P+1$ for all selected $P$, by the rational-prime product construction of step 2.1, and choose $\ell$ avoiding those primes. The nonzero rational numbers $\delta_j=m_0\ell^{-j}$ have fixed sufficiently large orders at the selected finite primes and tend to zero at all archimedean coordinates. For some $j$ they satisfy $|\delta_j|<\varepsilon_v/2$ at all selected archimedean places. At most one of $x+\delta_j$ and $x+\delta_{j+1}$ is zero; both still satisfy the original inequalities, and choosing a nonzero one gives the asserted strengthening. For a finite vector dimension $r$, apply the proved scalar assertion to each of the finitely many coordinate target lists, using product neighborhoods. All remaining choices and witnesses above are finite, while the grid and perturbation indices can always be the least eligible natural numbers. Thus the entire result holds in ZF. [step 2.1, step 3.1, algebra] ∎

## Source notes

Milne proves weak approximation for arbitrary finite lists of inequivalent absolute values by a different finite construction. The proof here is specialized to number fields and uses only finite CRT and an explicit archimedean grid. No classification theorem for arbitrary absolute values is needed for this stated family of finite and archimedean places.

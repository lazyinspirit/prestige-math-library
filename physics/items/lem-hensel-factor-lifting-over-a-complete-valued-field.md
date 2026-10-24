---
id: lem-hensel-factor-lifting-over-a-complete-valued-field
title: "Hensel factor lifting over a complete valued field"
kind: lemma
status: published
origin: pipeline
deps: [def-multiplicative-absolute-value-on-a-field]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76, Theorem 6.5 and full proof, pp.12\u201313"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

Let F be complete nonarchimedean, A its valuation ring, and k its residue field. Suppose $g\in A[T]$ has nonzero reduction $\bar g=h_0H_0$, where $h_0\in k[T]$ is monic and $\gcd(h_0,H_0)=1$. Then $g=hH$ for $h,H\in A[T]$, with h monic of degree $\deg h_0$, $\bar h=h_0$, $\bar H=H_0$. No discreteness or monicity of g is assumed. In particular, a simple residue root of a monic polynomial lifts uniquely to a simple root in A.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-multiplicative-absolute-value-on-a-field]]: Let $F$ be a field. An **absolute value** on $F$ is a function $|\cdot| : F \to \mathbb R_{\ge 0}$ such that for all $x,y \in F$: $|x| = 0 \iff x = 0,\qquad |xy| = |x||y|,\qquad |x+y| \le |x| + |y|.$ It is **nonarchimedean** when it satisfies the stronger inequality $|x+y| \le \max\{|x|,|y|\}$ for all $x,y \in F$. It is **trivial** when $|x| = 1$ for every nonzero $x \in F$.

## Proof

1.1 If the valuation is trivial, A=k=F and the original factorization suffices. If $h_0=1$, take h=1 and H=g. Otherwise put $m=\deg h_0>0$, $N=\deg g$, lift $h_0$ to a monic $h_1$ of degree m and $H_0$ to $H_1$ of degree at most N-m. Lift a Bezout relation to polynomials r,s with $h_1r+H_1s\equiv1$ modulo the maximal ideal. Among the finitely many nonzero coefficients of $g-h_1H_1$ and $h_1r+H_1s-1$, choose one of maximum absolute value, or any element with value strictly between zero and one if both errors vanish. Denote it by pi. Then both errors lie in $I[T]$, where $I=(\pi)=\{x:|x|\le|\pi|\}$ and $0<|\pi|<1$. [F1, given]

2.1 Suppose $g-h_nH_n\in I^n[T]$, $h_n,H_n\equiv h_1,H_1$ modulo I, with the stated degree bounds. Put $e_n=(g-h_nH_n)/\pi^n\in A[T]$. Over A/I we need $qH_1+Qh_1=e_n$. Multiply the fixed Bezout relation by $e_n$; then divide $e_ns$ by the monic $h_1$, writing $e_ns=h_1u+q$, $\deg q<m$. Take $Q=e_nr+uH_1$. Modulo I, monicity of $h_1$ and $\deg(e_n-qH_1)\le N$ imply $\deg Q\le N-m$. Delete higher coefficients of Q, which lie in I. This explicitly solves the congruence with bounded degrees. [step 1.1, algebra]

3.1 Set $h_{n+1}=h_n+\pi^nq$ and $H_{n+1}=H_n+\pi^nQ$. Their product equals g modulo $I^{n+1}$, since $2n\ge n+1$, and all degree bounds persist. This deterministic correction uses only the initial finite lifts and polynomial division, so no new arbitrary residue representatives are chosen at successive stages. The finitely many coefficient sequences are Cauchy because $|\pi|^n\to0$. Completeness gives limits h,H in A[T], with h monic of degree m, and continuity of finite multiplication gives g=hH and the prescribed reductions. [step 2.1]

4.1 For a simple root $\bar a$ of monic $\bar f$, apply the factorization to $(T-\bar a)H_0$ with $H_0(\bar a)\ne0$. Write $f=(T-a)H$. Then $H(a)$ is a unit, so $f'(a)\ne0$. If b is another root with $\bar b=\bar a$, then $H(b)$ is a unit and $(b-a)H(b)=0$ forces b=a. This proves both existence and uniqueness of the simple-root lift. [step 3.1, algebra] ∎

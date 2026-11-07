---
id: lem-witt-residue-cohomology-injection-under-countable-choice
kind: lemma
title: Witt residue specialization injects on cohomology under countable choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-principal-colimit-specialization-injects-on-cohomology
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - lem-perfect-base-witt-teichmuller-expansions-and-units
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bhatt–Morrow–Scholze, Integral p-adic Hodge Theory, Lemma 4.16, printed p.38; bounded-free version with explicit choice assumption"
      url: https://arxiv.org/pdf/1602.03148v3.pdf
---

## Statement

Assume the Axiom of Countable Choice. Let $R$ be a perfect valuation domain of characteristic $p$ with a nontrivial real-valued valuation $v:\operatorname{Frac}(R)^\times\to\mathbb R$, such that $R=\{0\}\cup\{r:v(r)\geq0\}$. Let $\mathfrak m=\{0\}\cup\{r:v(r)>0\}$ and $k=R/\mathfrak m$. Fix $0\ne a\in\mathfrak m$, set $A=W_p(R)$, $x_n=[a^{1/p^n}]$, $F=A/\bigcup_{n\geq0}(x_n)$, and $S=W_p(k)$. The map $F\to S$ induced by residue reduction is surjective, and its kernel $Q$ has bijective multiplication by $p$. In particular $F/p^mF\cong S/p^mS$ for all $m\geq1$ and the $p$-adic completion of $F$ is $S$.

Let $P^\bullet$ be any bounded complex of finite free $A$-modules such that $H^j(P^\bullet)[1/p]$ is projective over $A[1/p]$ for all $j$. Then
$$H^i(P^\bullet)\otimes_A W_p(k)\longrightarrow H^i(P^\bullet\otimes_A W_p(k))$$
is injective, is an isomorphism after inverting $p$, and is an isomorphism integrally if $H^{i+1}(P^\bullet)$ has no $[a]$-torsion. All tensor products of the complex compute derived tensor products.

## Statement references

[[def-countable-choice]]

[[lem-principal-colimit-specialization-injects-on-cohomology]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

## Facts & Assumptions

**Given:** The prime, valued domain, element, rings, and complex in the Statement. Only countable choice is spent; the full-choice dependency records the schema's axiom bookkeeping and is not a stronger mathematical hypothesis.

[A1] The Axiom of Countable Choice, as in [[def-countable-choice]], is assumed to lift the countably many Teichmüller coefficients of one Witt vector of $k$ to $R$. No countable choice is used in finite truncations or in the subsequent algebra.

[F1] [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]] gives $p$-torsion-freeness, reduction modulo $p$, and $p$-adic completeness over a perfect ring.

[F2] [[lem-perfect-base-witt-teichmuller-expansions-and-units]] gives multiplicative Teichmüller representatives and unique expansions $\sum_{j\geq0}p^j[b_j]$, functorial under residue reduction.

[F3] [[lem-principal-colimit-specialization-injects-on-cohomology]] gives the cycle-map injection once the principal-quotient and kernel hypotheses are verified.

## Proof

1.1 The residue field $k$ is perfect: if $\bar r\in k$, the unique $p$th root of any lift $r\in R$ lies in $R$ by perfection; its residue is a $p$th root of $\bar r$, and Frobenius is injective on the field $k$. Thus [F1] and [F2] apply to both $R$ and $k$. Teichmüller multiplicativity gives $x_{n+1}^p=x_n$. Each $x_n$ is a non-zero-divisor in $A$: for $z=\sum_jp^j[b_j]$, the product $x_nz=\sum_jp^j[a^{1/p^n}b_j]$ vanishes only if every $b_j$ vanishes, since $R$ is a domain. [given, F1, F2, algebra]

2.1 Each quotient $A/(x_n)$ is $p$-torsion-free. In fact if $pz=x_nw$, reduction modulo $p$ gives $0=a^{1/p^n}\bar w$ in the domain $R$, so $w=pw'$ by [F1]; cancellation of $p$ then gives $z=x_nw'$. Since $F$ is the filtered colimit of these quotients, it too is $p$-torsion-free: a relation $pz=0$ holds in some later quotient and can be cancelled there. [F1, step 1.1, algebra]

2.2 Residue reduction kills every $x_n$, hence factors through $F$. Fix $m\geq1$. By the unique expansion of [F2], the kernel of $A/p^m\to S/p^m$ consists exactly of the truncated expansions $\sum_{j=0}^{m-1}p^j[b_j]$ with $b_j\in\mathfrak m$. Choose $n$ so large that $v(a)/p^n\leq v(b_j)$ for every nonzero coefficient among this finite list; this is possible because these are positive real numbers. Each $b_j/a^{1/p^n}$ then lies in $R$, so the expansion is divisible by $x_n$ in $A/p^m$. Conversely any such multiple reduces to zero in $S/p^m$. The map $A/p^m\to S/p^m$ is surjective by lifting its finitely many coefficients. Therefore its kernel is exactly the image of $\bigcup_n(x_n)$, proving $F/p^mF\cong S/p^mS$. [given, F2, step 1.1, algebra]

3.1 For an arbitrary $s=\sum_{j\geq0}p^j[c_j]\in S$, apply [A1] to the family of nonempty sets of lifts of $c_j$ along $R\to k$. The resulting $b_j\in R$ give $z=\sum_jp^j[b_j]\in A$ by [F1] and [F2], and $z$ maps to $s$. Thus $F\to S$ is surjective, with no appeal to surjectivity of an arbitrary map to a completion. The isomorphisms in step 2.2 are compatible with truncation, so taking inverse limits and using completeness of $S$ identifies the completion of $F$ with $S$. [A1, F1, F2, step 2.2, algebra]

4.1 Put $Q=\ker(F\to S)$. If $q\in Q$, the isomorphism $F/pF\cong S/pS$ shows that $q=pf$ for some $f\in F$. Since $0=p\bar f$ in the $p$-torsion-free ring $S$, necessarily $f\in Q$. Hence multiplication by $p$ on $Q$ is onto, and it is injective because $F$ is $p$-torsion-free. All hypotheses of [F3] now hold for the sequence $(x_n)$, the surjection $F\to S$, and $P^\bullet$. Its conclusions give the asserted integral injection, rational isomorphism, and integral isomorphism when $H^{i+1}(P^\bullet)[x_0]=0$. [F1, F3, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎

## Remarks

For $R=\mathcal O_C^\flat$, the intended application must still establish the perfect rank-one valuation-ring interface and produce the bounded free comparison complex with projective rational cohomology. This lemma constructs no $A\Omega$ complex and proves no crystalline or étale comparison. Its stated choice hypothesis must be carried into any application unless a separate choice-free lifting argument is supplied. It does not change the unqualified statement of the batch-89 comparison theorem.

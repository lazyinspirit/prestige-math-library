---
id: "lem-r-one-s-two-intersection-of-height-one-localisations"
kind: "lemma"
title: "r one s two intersection of height one localisations"
deps: ["def-serre-r-k-and-s-k-conditions", "thm-lasker-noether-primary-decomposition", "lem-associated-primes-from-a-minimal-primary-decomposition", "lem-depth-quotient-by-regular-element", "thm-depth-zero-associated-prime-criterion", "thm-associated-primes-localise", "thm-existence-of-associated-primes"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 8.41 proof, pp.57–58; Stacks 10.157.6(1)–(2)"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-serre-r-k-and-s-k-conditions]]: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

[F2] [[thm-lasker-noether-primary-decomposition]]: Assume Dependent Choice. Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. Every submodule $N \subseteq M$ has a finite primary decomposition. After deleting redundant components and combining equal radicals, one obtains a minimal primary decomposition. When $N=M$, the decomposition is the empty intersection, interpreted as $M$. In particular, every ideal of a Noetherian ring has a minimal primary decomposition.

[F3] [[lem-associated-primes-from-a-minimal-primary-decomposition]]: Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left $R$-module, and let $$ N=Q_1\cap\cdots\cap Q_r $$ be a minimal primary decomposition in which each $Q_i$ is $\mathfrak p_i$-primary. Assume each $\mathfrak p_i$ is a prime ideal. Then $$ \operatorname{Ass}_R(M/N)=\{\mathfrak p_1,\dots,\mathfrak p_r\}. $$

[F4] [[lem-depth-quotient-by-regular-element]]: Let $R$ be Noetherian, let $M$ be finite, let $I$ lie in the Jacobson radical, and let $x\in I$ be $M$-regular. Then $$\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1.$$

[F5] [[thm-depth-zero-associated-prime-criterion]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite $R$-module. Then $$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

[F6] [[thm-associated-primes-localise]]: Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left $R$-module, and let $S \subseteq R$ be multiplicative. Then $$ \operatorname{Ass}_{S^{-1}R}(S^{-1}M)=\{S^{-1}\mathfrak p : \mathfrak p \in \operatorname{Ass}_R(M),\ \mathfrak p \cap S=\varnothing\}. $$

[F7] [[thm-existence-of-associated-primes]]: Let $R$ be a Noetherian commutative ring and let $M$ be a nonzero left $R$-module. Then $\operatorname{Ass}_R(M)$ is nonempty.

## Proof

1.1 Let $0\ne a\in R$ be a nonunit. If $\mathfrak p\in\operatorname{Ass}(R/(a))$, localization and the depth-zero criterion make $R_{\mathfrak p}/aR_{\mathfrak p}$ depth zero. Since $a$ is regular, the depth formula gives $\operatorname{depth}R_{\mathfrak p}=1$. Condition $(S_2)$ forces $\operatorname{ht}\mathfrak p\le1$, and $a\in\mathfrak p$, $a\ne0$ force equality. [F6, F5, F4, F1]

2.1 Choose a minimal primary decomposition $(a)=\bigcap_iQ_i$, with radicals $\mathfrak p_i$. Those radicals are associated to $R/(a)$, hence have height one. If $b/a$ belongs to every height-one localization, then for each $i$ there is $s_i\notin\mathfrak p_i$ with $s_ib\in(a)\subseteq Q_i$. Primaryness gives $b\in Q_i$, hence $b\in(a)$ and $b/a\in R$. [F2, F3, step 1.1]

3.1 If $a$ is a unit, membership is immediate without a primary decomposition. The inclusion from $R$ into every localization is automatic. If the height-one family is empty, a nonzero nonunit would yield an associated prime of its nonzero quotient and hence a height-one prime by the preceding argument; thus $R$ is a field and the stipulated empty intersection is correct. [F7, step 1.1, step 2.1, algebra] ∎

---
id: "lem-serre-r-zero-s-one-characterises-reducedness"
kind: "lemma"
title: "serre r zero s one characterises reducedness"
deps: ["def-serre-r-k-and-s-k-conditions", "thm-depth-zero-associated-prime-criterion", "thm-zero-divisors-on-a-module", "thm-existence-of-associated-primes", "thm-noetherian-ring-has-finitely-many-minimal-primes", "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian", "thm-associated-primes-localise", "lem-finite-prime-avoidance", "thm-minimal-support-primes-are-associated"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.157.2–10.157.3"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a finite module $M$ over a commutative Noetherian ring, $(S_1)$ is equivalent to every associated prime being minimal in $\operatorname{Supp}M$. For the ring itself, this means no embedded associated primes. A commutative Noetherian ring is reduced if and only if it satisfies $(R_0)$ and $(S_1)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-serre-r-k-and-s-k-conditions]]: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

[F2] [[thm-depth-zero-associated-prime-criterion]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite $R$-module. Then $$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

[F3] [[thm-zero-divisors-on-a-module]]: Let $R$ be a Noetherian commutative ring and let $M$ be a left $R$-module. Then the set of zero divisors on $M$ is $$ \bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}\mathfrak p. $$ If $M$ is finitely generated, this is a finite union.

[F4] [[thm-existence-of-associated-primes]]: Let $R$ be a Noetherian commutative ring and let $M$ be a nonzero left $R$-module. Then $\operatorname{Ass}_R(M)$ is nonempty.

[F5] [[thm-noetherian-ring-has-finitely-many-minimal-primes]]: Let $R$ be a Noetherian commutative ring. Then $R$ has only finitely many minimal prime ideals. This theorem inherits only the dependent-choice cost already recorded in the cited Noetherian-induction corollary.

[F6] [[cor-radical-ideals-as-intersections-of-minimal-primes-noetherian]]: Assume Dependent Choice. Let $R$ be a Noetherian commutative ring and let $I \trianglelefteq R$ be a radical ideal. Then there exist finitely many prime ideals $\mathfrak p_1,\dots,\mathfrak p_m$ minimal over $I$ such that $$ I=\mathfrak p_1\cap\cdots\cap \mathfrak p_m. $$ When $I=R$, this is the empty intersection.

[F7] [[thm-associated-primes-localise]]: Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left $R$-module, and let $S \subseteq R$ be multiplicative. Then $$ \operatorname{Ass}_{S^{-1}R}(S^{-1}M)=\{S^{-1}\mathfrak p : \mathfrak p \in \operatorname{Ass}_R(M),\ \mathfrak p \cap S=\varnothing\}. $$

[F8] [[lem-finite-prime-avoidance]]: Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let $\mathfrak p_1,\dots,\mathfrak p_n$ be prime ideals with $n \ge 1$. If $$ I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n, $$ then $I\subseteq \mathfrak p_i$ for some $i$.

[F9] [[thm-minimal-support-primes-are-associated]]: Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. If $\mathfrak p$ is minimal in $\operatorname{Supp}_R(M)$, then $$ \mathfrak p \in \operatorname{Ass}_R(M). $$

## Proof

1.1 At a prime in the support, depth zero is equivalent to that prime being associated, by localization of associated primes and the local depth-zero criterion. Such an associated prime violates $(S_1)$ exactly when the localized support has positive dimension, namely when there is a strictly smaller support prime. Thus $(S_1)$ is equivalent to all associated primes being minimal in support. Minimal support primes are associated as well. For $M=0$ both conditions are vacuous. [F7, F2, F1, F9]

2.1 If $R$ is reduced, its minimal primes $\mathfrak p_1,\ldots,\mathfrak p_s$ are finite and have intersection zero. An element outside their union is a nonzerodivisor, since its product with $b$ being zero forces $b$ into every $\mathfrak p_i$. Conversely, for $a\in\mathfrak p_i$, choose $b\in\bigcap_{j\ne i}\mathfrak p_j\setminus\mathfrak p_i$ by taking a product of elements of $\mathfrak p_j\setminus\mathfrak p_i$. Then $b\ne0$ and $ab=0$. Thus zero divisors are exactly this finite union. An associated prime is contained in that union and hence in one minimal prime by prime avoidance; it must equal it. This proves $(S_1)$. [F5, F6, F3, F8, step 1.1]

3.1 At a minimal prime, localization of a reduced ring is reduced and has only one prime ideal. Its nilradical, the intersection of its primes, is therefore that maximal ideal and is zero. It is a field, so $(R_0)$ holds. Conversely suppose $(R_0)$ and $(S_1)$ hold. If the nilradical $N$ were nonzero, choose an associated prime of $N$; its annihilator witness in $N\subset R$ makes it associated to $R$, hence minimal by $(S_1)$. The witness survives there, but $(R_0)$ makes that localization a field and annihilates all nilpotents, a contradiction. Hence $N=0$. The zero ring satisfies the assertions vacuously. [F4, F1, step 1.1, step 2.1] ∎

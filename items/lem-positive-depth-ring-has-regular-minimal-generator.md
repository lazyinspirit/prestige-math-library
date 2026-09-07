---
id: "lem-positive-depth-ring-has-regular-minimal-generator"
kind: "lemma"
title: "positive depth ring has regular minimal generator"
deps: ["thm-depth-zero-associated-prime-criterion", "thm-finiteness-of-associated-primes", "thm-zero-divisors-on-a-module", "lem-finite-prime-avoidance", "thm-nakayama-lemma"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33 proof, p.123; Lemma 5.1 variant"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has positive depth, then some $x\in\mathfrak m\setminus\mathfrak m^2$ is a nonzerodivisor. The residue field need not be infinite.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-depth-zero-associated-prime-criterion]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite $R$-module. Then $$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

[F2] [[thm-finiteness-of-associated-primes]]: Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. Then $\operatorname{Ass}_R(M)$ is a finite set.

[F3] [[thm-zero-divisors-on-a-module]]: Let $R$ be a Noetherian commutative ring and let $M$ be a left $R$-module. Then the set of zero divisors on $M$ is $$ \bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}\mathfrak p. $$ If $M$ is finitely generated, this is a finite union.

[F4] [[lem-finite-prime-avoidance]]: Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let $\mathfrak p_1,\dots,\mathfrak p_n$ be prime ideals with $n \ge 1$. If $$ I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n, $$ then $I\subseteq \mathfrak p_i$ for some $i$.

[F5] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Proof

1.1 The associated primes are finite, none is $\mathfrak m$, and their union is the set of zero divisors. Discard primes contained in others to obtain an antichain $\mathfrak p_1,\ldots,\mathfrak p_s$. Prime avoidance chooses $a\in\mathfrak m$ outside their union (if the list is empty this restriction is vacuous). If $a\notin\mathfrak m^2$, take $x=a$. [F1, F2, F3, F4]

2.1 If $a\in\mathfrak m^2$, Nakayama and positive depth give $\mathfrak m\ne\mathfrak m^2$; choose $b\in\mathfrak m\setminus\mathfrak m^2$. If $b$ avoids every retained prime take $x=b$. Otherwise divide them into the nonempty class $T$ containing $b$ and the class $U$ not containing it. For each $\mathfrak p\in U$, antichain incomparability and prime avoidance give $c_{\mathfrak p}\in\mathfrak p$ outside all primes of $T$. Put $c=\prod_{\mathfrak p\in U}c_{\mathfrak p}$, with empty product $1$. [F5, F4, step 1.1]

3.1 Then $x=b+ac$ is outside $\mathfrak m^2$, since $ac\in\mathfrak m^2$. At a prime of $T$, $b$ lies in the prime and $ac$ does not. At a prime of $U$, $ac$ lies in the prime and $b$ does not. Thus $x$ avoids every associated prime and is a nonzerodivisor. No infinite-field argument was used. [F3, step 2.1, algebra] ∎

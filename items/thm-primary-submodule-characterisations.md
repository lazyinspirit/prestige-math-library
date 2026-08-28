---
id: thm-primary-submodule-characterisations
kind: theorem
title: "Primary submodules of finite modules are characterized by a singleton associated-prime set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-associated-prime-of-a-module, def-primary-submodule-and-primary-ideal, thm-zero-divisors-on-a-module, thm-support-and-annihilator-of-a-finite-module, thm-minimal-support-primes-are-associated, thm-noetherian-ring-quotients-and-localisations, thm-nilradical-of-a-noetherian-ring-is-nilpotent, thm-radical-as-intersection-of-primes, cor-support-is-union-of-closures-of-associated-primes]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.4)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Propositions 19.5 and 19.16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, let $Q \subsetneq M$ be a proper submodule, and let $\mathfrak p$ be
a prime ideal. Put $N=M/Q$. Then the following are equivalent:

1. $Q$ is $\mathfrak p$-primary.
2. $\operatorname{Ass}_R(N)=\{\mathfrak p\}$.
3. Every $a \notin \mathfrak p$ acts injectively on $N$, and there exists
   $n \ge 1$ with $\mathfrak p^nN=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a proper submodule $Q \subsetneq M$, a prime ideal $\mathfrak p$, and the quotient $N=M/Q$.

[L1] Zero divisors on a module over a Noetherian ring are exactly the elements lying in its associated primes ([[thm-zero-divisors-on-a-module]]).

[L2] For a finitely generated module, support is $V$ of the annihilator ([[thm-support-and-annihilator-of-a-finite-module]]).

[L3] Minimal primes in the support of a finite module are associated ([[thm-minimal-support-primes-are-associated]]).

[L4] A proper submodule is $\mathfrak p$-primary exactly when it is primary and $\sqrt{\operatorname{Ann}_R(N)}=\mathfrak p$ ([[def-primary-submodule-and-primary-ideal]]).

[L5] A localization or quotient of a Noetherian ring is Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L6] The nilradical of a Noetherian ring is nilpotent ([[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]).

[L7] The support of a finite module is the union of the $V(\mathfrak q)$ over its associated primes $\mathfrak q$ ([[cor-support-is-union-of-closures-of-associated-primes]]).

[L8] Assuming the Axiom of Choice, the radical of an ideal is the intersection of the primes containing it ([[thm-radical-as-intersection-of-primes]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Q$ is $\mathfrak p$-primary. Then [L4] gives $\sqrt{\operatorname{Ann}_R(N)}=\mathfrak p$, so every prime in $\operatorname{Supp}_R(N)=V(\operatorname{Ann}_R(N))$ contains $\mathfrak p$ by [L2] and [L8]. Let $\mathfrak q \in \operatorname{Ass}_R(N)$. Every $a \in \mathfrak q$ is a zero divisor on $N$, so primaryity makes $a$ act nilpotently on $N$ and hence some power of $a$ lies in $\operatorname{Ann}_R(N)$. Thus $a \in \sqrt{\operatorname{Ann}_R(N)}=\mathfrak p$, which proves $\mathfrak q \subseteq \mathfrak p$. Since $\mathfrak p$ is minimal in $V(\operatorname{Ann}_R(N))$, fact [L3] gives $\mathfrak p \in \operatorname{Ass}_R(N)$. Now every associated prime contains $\mathfrak p$ and is contained in $\mathfrak p$, so $\operatorname{Ass}_R(N)=\{\mathfrak p\}$. [L2, L3, L4, L8, given, algebra]

1.2 Assume $\operatorname{Ass}_R(N)=\{\mathfrak p\}$. By [L1], the zero divisors on $N$ are exactly the elements of $\mathfrak p$, so every $a \notin \mathfrak p$ acts injectively on $N$. Also [L7] gives $\operatorname{Supp}_R(N)=V(\mathfrak p)$. Combining this with [L2] shows $V(\operatorname{Ann}_R(N))=V(\mathfrak p)$, and then [L8] yields $\sqrt{\operatorname{Ann}_R(N)}=\mathfrak p$. Since $R/\operatorname{Ann}_R(N)$ is Noetherian by [L5], fact [L6] applied to that quotient ring shows that its nilradical $\mathfrak p/\operatorname{Ann}_R(N)$ is nilpotent. Hence $\mathfrak p^n \subseteq \operatorname{Ann}_R(N)$ for some $n \ge 1$, that is, $\mathfrak p^nN=0$. [L1, L2, L5, L6, L7, L8, given, algebra]

1.3 Assume condition 3. If $a$ is a zero divisor on $N$ and $a \notin \mathfrak p$, then multiplication by $a$ would be both noninjective and injective, impossible. So every zero divisor lies in $\mathfrak p$. Since $\mathfrak p^nN=0$, each $a \in \mathfrak p$ acts nilpotently on $N$, namely $a^nN=0$. Therefore $Q$ is primary. Also $\mathfrak p^nN=0$ gives $\mathfrak p \subseteq \sqrt{\operatorname{Ann}_R(N)}$. Conversely, if $a \in \sqrt{\operatorname{Ann}_R(N)}$, then some power of $a$ kills $N$. If $a \notin \mathfrak p$, multiplication by $a$ is injective, hence every power of $a$ is injective, so a nonzero power cannot annihilate the nonzero module $N$. Thus $a \in \mathfrak p$. Therefore $\sqrt{\operatorname{Ann}_R(N)}=\mathfrak p$, and [L4] shows that $Q$ is $\mathfrak p$-primary. [L4, given, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove the equivalence of the three conditions. [step 1.1, step 1.2, step 1.3] ∎

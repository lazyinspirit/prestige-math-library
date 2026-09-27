---
id: lem-height-theorem-first-generator-reduction
kind: lemma
title: "Choose the first generator's minimal prime inside the target prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-finite-prime-avoidance, lem-minimal-prime-over-an-ideal-exists, thm-krull-principal-ideal-theorem, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a Noetherian commutative ring, let $n\ge2$, let
$$ I=(x_1,\ldots,x_n), $$
and let $\mathfrak p$ be a prime ideal minimal over $I$. Let $\mathfrak p'_1,\ldots,\mathfrak p'_r$ be the minimal prime ideals over $(x_2,\ldots,x_n)$. If $\mathfrak p$ is not one of the $\mathfrak p'_i$ and if $d\ge1$ and
$$ \mathfrak p=\mathfrak p_d\supsetneq\mathfrak p_{d-1}\supsetneq\cdots\supsetneq\mathfrak p_0 $$
is a strict prime chain, then there exists a strict prime chain of the same length ending at $\mathfrak p$ whose prime $\mathfrak p_1$ (the first above $\mathfrak p_0$) is not contained in any $\mathfrak p'_i$. For such a chain one can choose
$$ b\in\mathfrak p_1\setminus\bigcup_{i=1}^r\mathfrak p'_i, $$
and then $\mathfrak p$ is minimal over $(b,x_2,\ldots,x_n)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, an integer $n\ge2$, the ideal $I=(x_1,\ldots,x_n)$, a prime ideal $\mathfrak p$ minimal over $I$, the minimal primes $\mathfrak p'_1,\ldots,\mathfrak p'_r$ over $(x_2,\ldots,x_n)$, and a strict chain $\mathfrak p=\mathfrak p_d\supsetneq\cdots\supsetneq\mathfrak p_0$ of length $d\ge1$.

[L1] Under the assumed Axiom of Choice, a Noetherian ring has finitely many minimal primes over any ideal, and the radical of the ideal is their intersection. AC supplies the minimal-prime existence premise and includes the Dependent Choice used by the finite decomposition ([[thm-noetherian-ring-has-finitely-many-minimal-primes]], [[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]], [[lem-minimal-prime-over-an-ideal-exists]]).

[L2] Finite prime avoidance lets us choose an element outside a finite union of prime ideals once the ambient ideal is not contained in that union ([[lem-finite-prime-avoidance]]).

[L3] Every prime minimal over a principal ideal has height at most $1$ ([[thm-krull-principal-ideal-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Write $J=(x_2,\ldots,x_n)$. By [L1], the family $\{\mathfrak p'_1,\ldots,\mathfrak p'_r\}$ is finite. Every $\mathfrak p'_i$ is minimal among primes containing $J$. Since $\mathfrak p$ contains $J$ but is not one of them, $\mathfrak p\nsubseteq\mathfrak p'_i$ for every $i$. Finite prime avoidance [L2] therefore supplies an element of $\mathfrak p$ outside their union. The given chain has $d\ge1$, so its $\mathfrak p_1$ exists. [L1, L2, given]

2.1 Starting at $j=d-1$ and descending to $j=1$, keep the current strict chain and the invariant that $\mathfrak p_{j+1}$ is contained in none of the $\mathfrak p'_i$. If $\mathfrak p_j$ already has this property, leave it unchanged. Otherwise choose $c\in\mathfrak p_{j+1}\setminus\bigcup_i\mathfrak p'_i$ by [L2]. Since $\mathfrak p_{j-1}\subsetneq\mathfrak p_j\subseteq\mathfrak p'_i$ for at least one $i$, the element $c$ is outside $\mathfrak p_{j-1}$. In the Noetherian quotient $A=R/\mathfrak p_{j-1}$, the radical of $(\bar c)$ is the finite intersection of its minimal primes by [L1]. The prime $\mathfrak p_{j+1}/\mathfrak p_{j-1}$ contains this intersection, so by primality it contains one of those minimal primes; call its inverse image $\mathfrak q$. Then $\mathfrak p_{j-1}\subsetneq\mathfrak q$ because $c\in\mathfrak q$ but $c\notin\mathfrak p_{j-1}$. By [L3] the selected prime has height at most $1$ in $A$, whereas $\mathfrak p_{j+1}/\mathfrak p_{j-1}$ has the two-step chain through $\mathfrak p_j/\mathfrak p_{j-1}$. Thus $\mathfrak q\subsetneq\mathfrak p_{j+1}$. It also contains $c$, so it is contained in none of the $\mathfrak p'_i$. Replacing $\mathfrak p_j$ by $\mathfrak q$ preserves the chain length and establishes the invariant one level lower. [L1, L2, L3, step 1.1, choose]

3.1 After the finite descent in step 2.1, $\mathfrak p_1$ is contained in none of the $\mathfrak p'_i$. When $d=1$, this says $\mathfrak p_1=\mathfrak p$, as already established in step 1.1. [step 1.1, step 2.1]

4.1 Since $\mathfrak p_1$ is not contained in the finite union $\bigcup_i\mathfrak p'_i$, [L2] gives $b\in\mathfrak p_1\setminus\bigcup_i\mathfrak p'_i$. In particular $b\in\mathfrak p$, so $\mathfrak p$ contains $(b,x_2,\ldots,x_n)$. [L2, step 3.1]

5.1 Let $\mathfrak q\subseteq\mathfrak p$ be prime minimal over $(b,x_2,\ldots,x_n)$. Because $\mathfrak q$ contains $(x_2,\ldots,x_n)$, it contains one of the minimal primes $\mathfrak p'_i$. By the choice of $b$, one has $b\notin\mathfrak p'_i$, so $\mathfrak q\neq\mathfrak p'_i$. If $\mathfrak q\neq\mathfrak p$, then $\mathfrak p\supsetneq\mathfrak q\supsetneq\mathfrak p'_i$ is a strict chain in the quotient ring $R/(x_2,\ldots,x_n)$, so the prime $\mathfrak p/(x_2,\ldots,x_n)$ has height at least $2$. But $\mathfrak p$ is minimal over $(x_1,\ldots,x_n)$, hence $\mathfrak p/(x_2,\ldots,x_n)$ is minimal over the principal ideal generated by the image of $x_1$, contradicting [L3]. Therefore $\mathfrak q=\mathfrak p$. [L3, step 4.1, given]

6.1 Hence $\mathfrak p$ is minimal over $(b,x_2,\ldots,x_n)$, with $b$ chosen from $\mathfrak p_1$ of a chain of the same length. [step 5.1] ∎

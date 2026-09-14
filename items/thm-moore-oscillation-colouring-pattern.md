---
id: thm-moore-oscillation-colouring-pattern
kind: theorem
title: The Moore colouring realizes finite binary patterns
status: draft
origin: pipeline
deps:
  - thm-moore-oscillation-block-lemma
  - def-oscillation-on-minimal-walk-lower-traces
  - def-minimal-walk-weights-and-coherent-functions
  - thm-chinese-remainder-theorem
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 5, Theorem 5.3 and proof, printed pp. 15–16"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

Define $o^*(\alpha,\beta)=*(o(\alpha,\beta))$ and the binary colouring

$$c(\alpha,\beta)=o(\alpha,\beta)\bmod 2\qquad(\alpha<\beta<\omega_1).$$

Let $1\leq k,l<\omega$, and let $A\subseteq[\omega_1]^k$ and
$B\subseteq[\omega_1]^l$ be uncountable pairwise-disjoint families.  For every
$\pi:k\to l$ and $\chi:k\to2$, some $a\in A$ and $b\in B$ satisfy $a<b$ and

$$o^*(a(i),b(\pi(i)))=\chi(i)$$

for all $i<k$.  The same pair has
$c(a(i),b(\pi(i)))=1-\chi(i)$; consequently $c$ realizes every prescribed
binary function on the graph $\{(i,\pi(i)):i<k\}$.

This is a functional-coordinate pattern.  It does not assert simultaneous
realization of an arbitrary binary matrix on all of $k\times l$.

## Facts & Assumptions

**Given:** ZFC, positive $k,l$, uncountable pairwise-disjoint $A,B$, and maps $\pi:k\to l$, $\chi:k\to2$.

[F1] [[thm-moore-oscillation-block-lemma]] supplies arbitrarily long common oscillation blocks whose new points all receive one prescribed continuous label $w$.

[F2] [[def-oscillation-on-minimal-walk-lower-traces]] defines $o$, the least-nondividing-prime transform $*$, and the evaluated labels.

[F3] [[def-minimal-walk-weights-and-coherent-functions]] supplies the fixed pairwise-distinct Cantor points $\langle z_\alpha:\alpha<\omega_1\rangle$ used to evaluate the labels.

[F4] [[thm-chinese-remainder-theorem]] solves a finite system of congruences with pairwise-coprime positive moduli, including its empty-list convention.

[F5] [[def-axiom-of-choice]] implies that a countable union of countable sets is countable and supports the uncountable thinning used below.

## Proof

**Proof technique:** direct modular coding.

1.1 Choose distinct primes $q_i>8$ for $i<k$.  For every $a\in A$, the finitely many distinct Cantor points $z_{a(i)}$ supplied by F3 have pairwise-disjoint clopen neighborhoods, so some continuous $w_a:2^\omega\to\omega$ satisfies $w_a(z_{a(i)})=q_i$ for all $i<k$.  There are only countably many continuous integer-valued maps on Cantor space.  By F5, one value $w$ occurs for an uncountable subfamily; replace $A$ by that subfamily. [F2, F3, F5, given]

2.1 Put $Q=\prod_{i<k}q_i$ and $N=6Q$.  Apply [F1] with this $w$ and block length $N$.  It gives $a\in A$, members $b_m\in B$, and marked points such that, relative to $b_0$, the evaluated label $q_i=w(z_{a(i)})$ occurs exactly $m$ additional times in the oscillation set for $(a(i),b_m(\pi(i)))$, while every other evaluated-label count is unchanged. [F1, step 1.1]

3.1 For each $i<k$, let $O_i=\operatorname{Osc}(a(i),b_0(\pi(i)))$ and $h_i=|\{\xi\in O_i:\mu(a(i),b_0(\pi(i));a(i))(\xi)=q_i\}|$.  For $s\neq0,q_i$ put $h_{i,s}=|\{\xi\in O_i:\mu(a(i),b_0(\pi(i));a(i))(\xi)=s\}|$, and set $r_i=\left(\sum_{s\neq0,q_i}(h_{i,s}\bmod s)\right)\bmod6$.  The sum has finite support by F2.  The primes $q_i$ are pairwise coprime, so F4 gives a residue $x$ modulo $Q$ satisfying $x+h_i\equiv6-r_i+2^{\chi(i)}\pmod{q_i}$ for every $i$.  Choose its representative $0\leq x<Q<N$ and put $b=b_x$. The right-hand side lies between $2$ and $8$, hence is already its least nonnegative residue modulo $q_i$. [F2, F4, step 2.1]

4.1 Fix $i<k$.  The block count from step 2.1 and the definition of $r_i$ give an integer $y$ such that $o(a(i),b(\pi(i)))=((x+h_i)\bmod q_i)+r_i+6y=2^{\chi(i)}+6(y+1)$.  If $\chi(i)=0$, this number is odd, so the least prime not dividing it is $2=p_0$.  If $\chi(i)=1$, it is even but is congruent to $2$ modulo $3$, so the least prime not dividing it is $3=p_1$.  Thus [F2] gives $o^*(a(i),b(\pi(i)))=\chi(i)$. [F2, step 2.1, step 3.1]

5.1 The same displayed formula is odd exactly when $\chi(i)=0$, so $c(a(i),b(\pi(i)))=1-\chi(i)$.  Given a desired binary pattern $\psi:k\to2$ for $c$, apply the proved assertion with $\chi=1-\psi$.  This proves every claimed functional pattern, including all coordinates at once, and makes no claim about two values in the same row of a nonfunctional matrix. [step 4.1]

6.1 Positivity of $k$ is part of the nonvacuous uncountable-family hypothesis; for a formal empty coordinate list F4 would supply the unique empty residue class and the conclusion would be vacuous.  Finite prime choice and the least representative require no further choice; the only new AC use is the uncountable thinning in step 1.1. [F4, F5, step 1.1, step 5.1] ∎

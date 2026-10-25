---
id: ex-continuity-contradiction-for-a-supported-boolean-algebra
kind: example
title: The finite Boolean expansion contradiction in the supported-ideal proof
status: published
origin: pipeline
deps: [def-boolean-algebra-for-stone-duality, def-boolean-ideals-filters-and-primality]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Miroslav Repický, A proof of the independence of the Axiom of Choice from the Boolean Prime Ideal Theorem, final calculation, pp.545-546", url: "https://im.saske.sk/~repicky/-r30.pdf"}
---

## Statement

Let $B$ be a Boolean algebra, let $I$ be a proper ideal of $B$, let $y$ be a finite set, and let $d:y\to B$. For $z\subseteq y$ define its truth-assignment atom by

$$e_z=\left(\bigwedge_{a\in z}d(a)\right)\wedge\left(\bigwedge_{a\in y\setminus z}\neg d(a)\right).$$

If $e_z\in I$ for every $z\subseteq y$, then the finite Boolean expansion of $1$ puts $1$ in $I$, contradicting propriety.

Here is the exact conditional clopen pattern used in the unary supported-ideal calculation. Let $K$ be a finite nonempty index set. For each $i\in K$, let $U_i$ contain pairwise disjoint cells $U_{i,j}$ indexed by a finite nonempty set $J_i$, with all the cells $U_{i,j}$ pairwise disjoint as $i,j$ vary. Suppose $y$ contains exactly one point of every $U_{i,j}$ and no other points. Assume

- whenever $z\subseteq y$ meets every $U_i$, one has $\bigwedge_{a\in z}d(a)\in I$; and
- for every $i\in K$, whenever $w\subseteq y$ meets every $U_{i,j}$ with $j\in J_i$, one has $\bigwedge_{a\in w}\neg d(a)\in I$.

Then every $e_z$ belongs to $I$, so the contradiction follows. These hypotheses isolate the final finite calculation; they do not assert that the unresolved A-page primality lemma has constructed such a clopen pattern.

## Facts & Assumptions

**Given:** The Boolean algebra, proper ideal, finite set, map, and, for the second assertion, the displayed finite clopen-incidence hypotheses.

[F1] [[def-boolean-algebra-for-stone-duality]] supplies distributivity, $b\vee\neg b=1$, and the conventions that the empty join is $0$ and the empty meet is $1$.

[F2] [[def-boolean-ideals-filters-and-primality]] says that an ideal is downward closed and closed under binary joins, and that propriety means $1\notin I$.

## Proof

**Proof technique:** induction on the finite set $y$.

1.1 If $y=\varnothing$, its only subset is empty, $e_\varnothing=1$ by the empty-meet convention, and therefore $\bigvee_{z\subseteq y}e_z=1$. [F1, base]

1.2 Suppose the expansion identity holds for a finite set $y_0$, take $a\notin y_0$, and put $y=y_0\cup\{a\}$. [ih, construct] Every subset of $y$ is uniquely either $w$ or $w\cup\{a\}$ for a subset $w\subseteq y_0$. With $e_w^0$ denoting the atom formed over $y_0$, the two corresponding atoms over $y$ are

$$e_w=(\neg d(a))\wedge e_w^0,\qquad e_{w\cup\{a\}}=d(a)\wedge e_w^0.$$

2.1 Finite distributivity and the induction hypothesis give the following identity. [F1, step 1.2, ih]

$$\begin{aligned}\bigvee_{z\subseteq y}e_z&=\bigvee_{w\subseteq y_0}\bigl((\neg d(a)\wedge e_w^0)\vee(d(a)\wedge e_w^0)\bigr)\\&=(\neg d(a)\vee d(a))\wedge\bigvee_{w\subseteq y_0}e_w^0\\&=1\wedge1=1.\end{aligned}$$

3.1 Steps 1.1 and 2.1 prove for every finite $y$ the exact identity below. [step 1.1, step 2.1]

$$1=\bigvee_{z\subseteq y}\left[\left(\bigwedge_{a\in z}d(a)\right)\wedge\left(\bigwedge_{a\in y\setminus z}\neg d(a)\right)\right].$$

4.1 With the identity of step 3.1 established, now assume the displayed clopen pattern and fix $z\subseteq y$. If $z$ meets every $U_i$, the first hypothesis puts $p_z=\bigwedge_{a\in z}d(a)$ in $I$, and $e_z\le p_z$ puts $e_z$ in $I$ by downward closure. Otherwise choose an $i\in K$ with $z\cap U_i=\varnothing$. The unique point of $y\cap U_{i,j}$ then lies in $y\setminus z$ for every $j\in J_i$, so the second hypothesis puts $n_z=\bigwedge_{a\in y\setminus z}\neg d(a)$ in $I$. Again $e_z\le n_z$ gives $e_z\in I$. These two cases are exhaustive, including $z=\varnothing$ and $z=y$. [F2, given, step 3.1, cases]

5.1 Thus every term in the finite join of step 3.1 lies in $I$. Repeated binary join closure, with the singleton case covering the empty $y$ boundary, puts their join $1$ in $I$. This contradicts the propriety condition $1\notin I$ and proves both assertions. [F2, step 3.1, step 4.1, discharge-induction] ∎

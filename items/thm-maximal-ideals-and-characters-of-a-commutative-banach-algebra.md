---
id: thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra
kind: theorem
title: Maximal ideals and characters of a commutative Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, lem-closed-ideal-quotient-is-a-banach-algebra, lem-neumann-series, thm-gelfand-mazur, thm-zorn, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice, def-prime-and-maximal-ideals, def-character-and-maximal-ideal-space, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Propositions 3.1.4, 3.1.7, 3.1.9, printed pp. 54–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.58, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Theorem 3.1, printed pp. 7–8"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
commutative unital complex Banach algebra
([[def-unital-banach-algebra]]) and let $I \subseteq A$ be a proper ideal.
Then:

1. $I$ is contained in a **closed** maximal ideal;
2. the maximal ideals of $A$ ([[def-prime-and-maximal-ideals]]) are exactly the
   kernels of the characters of $A$
   ([[def-character-and-maximal-ideal-space]]), and the map
   $\chi \mapsto \ker\chi$ is a bijection from $\Delta(A)$ onto the set of
   maximal ideals.

This is an implementation in ZFC: every proper ideal is extended by Zorn's
lemma, so the argument is not an equivalence between the existence of maximal
ideals and a weaker choice principle.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero commutative unital complex Banach algebra $A$, and a proper ideal $I$ of $A$.

[L1] $A$ is a complex vector space with an associative bilinear multiplication, a complete submultiplicative norm, a unit $1$ with $1a = a1 = a$ and $\|1\| = 1$, and $0 \ne 1$ ([[def-unital-banach-algebra]]).

[L2] An ideal of $A$ is a linear subspace closed under multiplication by elements of $A$; it is proper when it is not all of $A$; a maximal ideal is a maximal element of the poset of proper ideals under inclusion ([[def-prime-and-maximal-ideals]]).

[L3] If $\|y\| < 1$ then $1-y$ is invertible with inverse $\sum_{n\ge0}y^n$ ([[lem-neumann-series]]).

[L4] Under Countable Choice, a proper closed two-sided ideal $J$ of $A$ has $A/J$ a nonzero unital complex Banach algebra with unit of norm one ([[lem-closed-ideal-quotient-is-a-banach-algebra]]).

[L5] Under the Axiom of Choice every unital complex Banach division algebra is $\mathbb C\,1$ isometrically ([[thm-gelfand-mazur]]).

[L6] Under the Axiom of Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L7] In ZF, $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

[L8] Every character of $A$ is unital with $\chi(1) = 1$, is bounded of norm one, and satisfies $\chi(a) \in \sigma_A(a)$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

## Proof

**Proof technique:** direct.

1.1 If $J$ is a proper ideal and $x \in J$ is invertible with inverse $x^{-1}$, then $1 = x^{-1}x \in J$ and hence $a = a\cdot1 \in J$ for every $a$, so $J = A$; contrapositively a proper ideal contains no invertible element, and in particular $1 \notin J$. [L1, L2, algebra]

1.2 For every ideal $J$ the norm closure $\overline{J}$ is an ideal: it is a closed linear subspace, and for $a \in A$ the maps $x \mapsto ax$ and $x \mapsto xa$ are continuous, so $a\overline{J} \subseteq \overline{aJ} \subseteq \overline{J}$ and $\overline{J}a \subseteq \overline{J}$. [L1, L2]

1.3 If $\{J_k\}$ is a nonempty chain of ideals of $A$, then $J := \bigcup_k J_k$ is an ideal: it is a union of a nested family of linear subspaces and is closed under multiplication by $A$. The family $\mathcal{P}$ of proper ideals of $A$ containing $I$ is nonempty because $I \in \mathcal{P}$, and it is a poset under inclusion. [L2]

1.4 Character kernels are maximal ideals. If $\chi$ is a character then $\ker\chi$ is a proper ideal: it is a linear subspace closed under multiplication, and it is proper because $\chi \ne 0$ gives some $a$ with $\chi(a) \ne 0$. It is maximal: if $M' \supsetneq \ker\chi$ is an ideal and $a \in M' \setminus \ker\chi$, then for every $b \in A$ the element $b - (\chi(b)/\chi(a))a$ lies in $\ker\chi \subseteq M'$, hence $b \in M'$ and $M' = A$. [L2, algebra]

1.5 The assignment $\chi \mapsto \ker\chi$ is injective on $\Delta(A)$: if $\ker\chi = \ker\psi$ and $a \in A$, then $a - \chi(a)1 \in \ker\chi = \ker\psi$, so $0 = \psi(a - \chi(a)1) = \psi(a) - \chi(a)\psi(1) = \psi(a) - \chi(a)$ by [L8], whence $\chi = \psi$. [L8, algebra]

2.1 The union $J$ of a nonempty chain $\{J_k\} \subseteq \mathcal{P}$ is proper: if $1 \in J$ then $1 \in J_k$ for some $k$, and then $J_k = A$ by [step 1.1], contradicting $J_k \in \mathcal{P}$. So by [step 1.3] every chain in $\mathcal{P}$ has an upper bound in $\mathcal{P}$, and [L6], available under the standing Axiom of Choice [L7], supplies a maximal element $M \in \mathcal{P}$ with $I \subseteq M \subsetneq A$. [step 1.1, step 1.3, L2, L6, L7]

3.1 The maximal ideal $M$ of [step 2.1] is closed. By [step 1.2] $\overline{M}$ is an ideal containing $M$; if $\overline{M} = A$ then $1 \in \overline{M}$, so some $x \in M$ satisfies $\|1-x\| < 1$, and then $x = 1-(1-x)$ is invertible by [L3], contradicting [step 1.1] and the properness of $M$. Hence $\overline{M}$ is a proper ideal containing $M$, and maximality forces $\overline{M} = M$. [step 1.1, step 1.2, step 2.1, L3]

3.2 The quotient $A/M$ is a nonzero commutative unital complex Banach algebra by [L4], using $\mathrm{AC}_\omega$ from [L7], and it is a field: if $a \notin M$, the ideal $M + Aa$ strictly contains $M$ and hence equals $A$ by the maximality of $M$ in [step 2.1], so there are $m \in M$ and $b \in A$ with $m + ba = 1$, and then $(b+M)(a+M) = 1+M$ exhibits $a+M$ as invertible. [step 2.1, L2, L4, L7]

4.1 Consequently $A/M$ is a unital complex Banach division algebra, and [L5] provides an isometric algebra isomorphism $A/M \cong \mathbb C$; write $\pi : A \to A/M$ for the quotient map, a unital algebra homomorphism of norm one. [step 3.2, L5]

5.1 The composite of $\pi$ with the isomorphism of [step 4.1] is a nonzero complex-linear multiplicative map $\chi : A \to \mathbb C$ with $\chi(1) = 1$, that is, a character, and its kernel is exactly $M$; thus every proper ideal is contained in a closed maximal ideal which is the kernel of a character. [step 2.1, step 3.1, step 4.1, L2, algebra]

6.1 By [step 5.1] every proper ideal lies in a closed maximal ideal, proving claim 1; by [step 5.1] every maximal ideal containing a proper ideal is a character kernel, by [step 1.4] every character kernel is a maximal ideal, and by [step 1.5] the assignment is injective, so the maximal ideals are exactly the character kernels and $\chi \mapsto \ker\chi$ is a bijection, proving claim 2. [step 1.4, step 1.5, step 5.1] ∎

## Remarks

- **Where the Axiom of Choice is spent.** Exactly once, through Zorn's lemma in [1.3]; the Countable Choice used for the quotient is derived from AC by [L7], and Gelfand–Mazur spends AC through spectrum nonemptiness. The closedness argument [2.1], the field computation [2.2] and both direction computations [3.1]–[3.3] are choice-free.
- **Maximal ideals are automatically closed.** This is what makes the maximal ideal space a topological object: by [2.1] the word "closed" in claim 1 is redundant, but it is proved, not assumed.
- **No unit is assumed on the quotient.** The quotient unit is $1+M$, whose norm is one by [[lem-closed-ideal-quotient-is-a-banach-algebra]]; the nonzero hypothesis on $A$ is used only to know that the zero ideal is proper.

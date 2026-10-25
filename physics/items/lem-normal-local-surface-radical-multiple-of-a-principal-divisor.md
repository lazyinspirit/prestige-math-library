---
id: lem-normal-local-surface-radical-multiple-of-a-principal-divisor
kind: lemma
title: "Reduced Cartier multiples on a normal local surface"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - "cor-regular-quotient-cohen-macaulay-equivalence"
  - "def-axiom-of-choice"
  - "def-dependent-choice"
  - "lem-finite-prime-avoidance"
  - "lem-normal-domain-implies-s-two"
  - "lem-r-one-s-two-intersection-of-height-one-localisations"
  - "lem-ring-detected-at-associated-prime-localizations"
  - "thm-finiteness-of-associated-primes"
  - "thm-height-one-localisation-of-normal-noetherian-domain-is-dvr"
  - "thm-minimal-support-primes-are-associated"
  - "thm-krull-principal-ideal-theorem"
  - "thm-prime-filtration-of-a-finite-module"
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Algebra, radical-element and divides-radical proofs, with explicit prime-filtration bound"
      url: "https://stacks.math.columbia.edu/download/more-algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. If $A$ is a normal two-dimensional Noetherian local domain and $0\ne a\in\mathfrak m$, there is $c\in\mathfrak m$ such that $A/cA$ is reduced and $a\mid c^n$ for some positive integer $n$.

## Facts & Assumptions

**Given:** A normal two-dimensional Noetherian local domain $(A,\mathfrak m)$ and $0\ne a\in\mathfrak m$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *thm-finiteness-of-associated-primes.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. Then $\operatorname{Ass}_R(M)$ is a finite set. ([[thm-finiteness-of-associated-primes]])

[F4] *Minimal support primes are associated.* Assume AC. If $M$ is a finite module over a Noetherian ring and $\mathfrak p$ is minimal in $\operatorname{Supp}(M)$, then $\mathfrak p\in\operatorname{Ass}(M)$. ([[thm-minimal-support-primes-are-associated]])

[F5] *thm-prime-filtration-of-a-finite-module.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated left $R$-module. Then there exist submodules $ 0=M_0\subset M_1\subset\cdots\subset M_n=M $ such that each quotient $M_i/M_{i-1}$ is isomorphic to $R/\mathfrak p_i$ for some prime ideal $\mathfrak p_i$ of $R$. When $M=0$, this is the empty filtration with $n=0$. ([[thm-prime-filtration-of-a-finite-module]])

[F6] *cor-regular-quotient-cohen-macaulay-equivalence.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Under the hypotheses of `lem-regular-quotient-preserves-depth-dimension-gap`, $M$ is Cohen--Macaulay if and only if $M/xM$ is Cohen--Macaulay. ([[cor-regular-quotient-cohen-macaulay-equivalence]])

[F7] *lem-finite-prime-avoidance.* Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let $\mathfrak p_1,\dots,\mathfrak p_n$ be prime ideals with $n \ge 1$. If $ I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n, $ then $I\subseteq \mathfrak p_i$ for some $i$. ([[lem-finite-prime-avoidance]])

[F8] *thm-height-one-localisation-of-normal-noetherian-domain-is-dvr.* Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a discrete valuation ring. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]])

[F9] *lem-ring-detected-at-associated-prime-localizations.* Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring. The natural map $R\longrightarrow\prod_{\mathfrak q\in\operatorname{Ass}(R)}R_{\mathfrak q}$ is injective. For each $\mathfrak q\in\operatorname{Ass}(R)$, the local ring $R_{\mathfrak q}$ has a nonzero element annihilated by its maximal ideal $\mathfrak qR_{\mathfrak q}$; in particular it has depth zero. ([[lem-ring-detected-at-associated-prime-localizations]])

[F10] *lem-r-one-s-two-intersection-of-height-one-localisations.* Assume the Axiom of Choice. If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$. ([[lem-r-one-s-two-intersection-of-height-one-localisations]])

[F11] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F12] *Krull's principal ideal theorem.* Assume AC. If $R$ is Noetherian and $\mathfrak p$ is minimal over a principal ideal $(x)$, then $\operatorname{ht}(\mathfrak p)\le1$. ([[thm-krull-principal-ideal-theorem]])

## Proof

1.1 The minimal primes of $(a)$ are minimal in $\operatorname{Supp}(A/aA)$, hence associated by [F4] and finite by [F3]. By [F12] each has height at most one; since $A$ is a domain and $a\ne0$, each has height exactly one. Any height-one prime containing $a$ is one of these minimal primes, so list them as $\mathfrak p_1,\dots,\mathfrak p_r$. Choose nonzero $u_i\in\mathfrak p_i$ and put $f=\prod_i u_i\ne0$, so $f\in\bigcap_i\mathfrak p_i\subseteq\mathfrak m$. The minimal primes of $(f)$ are finite by [F3, F4] and have height one by [F12]. Since $\mathfrak m$ is not contained in any of them, finite prime avoidance [F7] gives $g\in\mathfrak m$ outside their union. If a prime contains $(f,g)$, it contains a minimal prime of $(f)$ and strictly contains it, so in the two-dimensional local ring it must be $\mathfrak m$. Thus $(f,g)$ is $\mathfrak m$-primary, and $\mathfrak m^{u}\subseteq(f,g)$ for some $u\ge1$. [F3, F4, F7, F12, given]

1.2 For every $h\in\mathfrak m^{u+1}$ the ideal $(f+h,g)$ equals $(f,g)$: writing $h=\alpha f+\beta g$ with $\alpha,\beta\in\mathfrak m$ gives $f+h=(1+\alpha)f+\beta g$, and $1+\alpha$ is a unit, so the two ideals coincide. Define the finite positive integer
$$\ell:=\operatorname{length}_A A/(f+h,g)=\operatorname{length}_A A/(f,g);$$
it is independent of $h$. [step 1.1]

2.1 For each $h\in\mathfrak m^{u+1}$ put $Q_h=A/(f+h)$. By step 1.2, $(f+h,g)$ is $\mathfrak m$-primary, so $f+h$ is nonzero; normality gives $A$ the $S_2$ property and hence Cohen--Macaulayness by [F11]. The element $f+h$ is regular in the domain $A$, so [F6] shows that $Q_h$ is a one-dimensional Cohen--Macaulay local ring. Its element $g$ is a parameter and therefore regular. Take a prime filtration of $Q_h$ itself, with factors $A/\mathfrak P_i$. For each factor put
$$\chi_g(A/\mathfrak P_i):=\operatorname{length}\bigl((A/\mathfrak P_i)/g(A/\mathfrak P_i)\bigr)-\operatorname{length}(0:_{A/\mathfrak P_i}g).$$
The kernel and cokernel have finite length, and the snake-lemma sequence for multiplication by $g$ shows that $\chi_g$ is additive along the filtration. If $\dim A/\mathfrak P_i=0$, multiplication by $g$ is an endomorphism of a finite-length module, so its kernel and cokernel have the same length and $\chi_g=0$. If $\dim A/\mathfrak P_i=1$, then $\mathfrak P_i$ is a minimal prime of $Q_h$ and $g\notin\mathfrak P_i$; hence $g$ is a nonzero divisor on the domain $A/\mathfrak P_i$ and $\chi_g=\operatorname{length}_A A/(\mathfrak P_i,g)\ge1$. Since $g$ is regular on $Q_h$, $\chi_g(Q_h)=\operatorname{length}_{Q_h}Q_h/gQ_h=\ell$. Every minimal prime of $Q_h$ occurs as a factor in the filtration after localizing at that prime. Thus the number of one-dimensional factors, and hence the number of minimal primes of $Q_h$, is at most $\ell$. [F5, F6, F11, step 1.2]

3.1 The perturbation set is nonempty: choose nonzero elements from the finitely many height-one primes $\mathfrak p_i$, multiply them, and then multiply by a nonzero element of $\mathfrak m^{u+1}$. Choose $h\in\mathfrak m^{u+1}\cap\mathfrak p_1\cap\dots\cap\mathfrak p_r$ for which the number $s$ of minimal primes of $Q_h$ is maximal; this is possible because the set of possible counts is a nonempty finite set of integers bounded by $\ell$. Replace $f$ by $f'=f+h$, and let $\mathfrak q_1,\dots,\mathfrak q_s$ be the height-one primes of $A/f'A$. Every original $\mathfrak p_i$ is one of these: $f'\in\mathfrak p_i$, so a minimal prime of $f'A$ lies inside $\mathfrak p_i$, and both have height one. [F12, step 1.2, step 2.1]

4.1 For each $j$ construct $a_j\in A$ with $v_{\mathfrak q_j}(a_j)=1$ and $a_j\notin\mathfrak q_i$ for $i\ne j$: the local ring $A_{\mathfrak q_j}$ is a discrete valuation ring, so choose $b_j\in\mathfrak q_j$ of valuation one, choose $c_j\in\mathfrak q_j$ outside all other $\mathfrak q_i$ by finite prime avoidance, and if $c_j$ does not have valuation one take $d_j$ in the product of the other $\mathfrak q_i$ and outside $\mathfrak q_j$; then $a_j=c_j^2+b_jd_j$ has valuation one at $\mathfrak q_j$ and is a unit modulo every other $\mathfrak q_i$. [F7, F8, step 3.1]

5.1 Let $h'$ be the product of $a_j^2$ over the indices with $v_{\mathfrak q_j}(f')=1$ and of $a_j$ over the indices with $v_{\mathfrak q_j}(f')>1$, multiplied by an element of $\mathfrak m^{u+1}$ lying outside every $\mathfrak q_j$, which exists by finite prime avoidance. Then $h'\in\mathfrak m^{u+1}$ and, because every original $\mathfrak p_i$ occurs among the $\mathfrak q_j$ by step 3.1, $h'\in\bigcap_i\mathfrak p_i$. The element $c:=f'+h'$ has valuation exactly one at each $\mathfrak q_j$. No new height-one prime occurs: such a prime would be an additional minimal prime of $A/(f'+h')$, contradicting the maximal $s$ in step 3.1 because $h'$ belongs to the same perturbation set. [F7, step 3.1, step 4.1]

6.1 We have $c\in\mathfrak m$; it is nonzero because $v_{\mathfrak q_j}(c)=1$ for each $j$. Normality gives $A$ the $S_2$ property by [F11], so $A$ is Cohen--Macaulay of dimension two; since $A$ is a domain, $c$ is regular. Thus $A/cA$ is a one-dimensional Cohen--Macaulay local ring by [F6]. Its associated primes are therefore exactly its minimal primes $\mathfrak q_1,\dots,\mathfrak q_s$; each localization $A_{\mathfrak q_j}/cA_{\mathfrak q_j}$ is a field because the valuation of $c$ there is one. By detection of a ring at its associated primes, $A/cA$ is reduced. [F6, F9, F11, step 3.1, step 5.1]

7.1 The height-one primes $\mathfrak p_i$ containing $a$ all occur among the $\mathfrak q_j$, because $f'\in\bigcap_i\mathfrak p_i$ shows $\mathfrak p_i\supseteq f'A$ and hence contains a minimal prime of $f'A$, and both have height one. Choosing $n\ge\max_i v_{\mathfrak p_i}(a)$ makes $c^n/a$ have nonnegative valuation at every height-one prime of $A$; by the $S_2$ intersection property of the normal domain $A$, an element of $\operatorname{Frac}(A)$ with nonnegative valuation at every height-one prime lies in $A$. Hence $a\mid c^n$. [F10, step 5.1, step 6.1]

8.1 The element $c\in\mathfrak m$ has $A/cA$ reduced by step 6.1 and $a\mid c^n$ by step 7.1; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited commutative-algebra suppliers, with no further choice used. [F1, F2, step 6.1, step 7.1] ∎

## Remarks

- The construction makes the divisor of $c$ contain every height-one prime through $a$ with multiplicity one; the maximality device in steps 3.1 and 5.1 prevents any further component from appearing.
- Normality is used twice: through the S2 intersection property and through the discreteness of height-one localizations; two-dimensionality is used to complete f to a parameter pair.

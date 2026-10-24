---
id: thm-pcf-has-no-holes-for-progressive-intervals
kind: theorem
title: Pcf has no holes for progressive intervals
status: published
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 3.1 p. 31 and Theorem 3.9 p. 35; coordinate transfer Lemma 2.3 pp. 12–13"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. A nonempty set $A$ of infinite regular cardinals is an **interval of regular cardinals** if every regular cardinal between two members of $A$ belongs to $A$. If $A$ is such an interval and is progressive, then

$$\operatorname{pcf}(A)=\{\lambda:\lambda\text{ is an infinite regular cardinal and }\min A\le\lambda\le\max\operatorname{pcf}(A)\}.$$

The following directed no-holes assertion is also proved: if $A$ is a progressive interval, $\lambda>\sup A$ is regular, $I$ is a proper ideal on $A$, and $\prod A/I$ is $\lambda$-directed, then $\lambda\in\operatorname{pcf}(A)$.

The interval hypothesis is essential; no conclusion that PCF fills every intervening regular cardinal is asserted for arbitrary progressive sets.

## Facts & Assumptions

**Given:** AC and the progressive interval $A$. In the directed assertion also fix the stated $\lambda$ and $I$.

[F1] PCF contains its coordinate set, is monotone, preserves finite unions and equals the coordinate set on finite sets. Coordinate cofinal enumerations and repeated-cardinal range reduction preserve true cofinality with their stated hypotheses, and a scale modulo a proper ideal yields a PCF witness ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] Cofinality ideals are defined by $J_{<\lambda}[A]=\{X\subseteq A:\operatorname{pcf}(X)\subseteq\lambda\}$ ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] The product modulo $J_{<\lambda}$ is $\lambda$-directed ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F4] Every nonempty progressive set has a maximum possible cofinality ([[thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals]]).

[F5] A directed product has a chain satisfying every eligible uncountable regular strong-increase property, with projection and exact-bound consequences when their cardinal inequalities hold ([[lem-directed-progressive-products-have-club-continuous-chains]]).

[F6] The exact bound is least, can be made positive and limit-valued, and each additional regular $\kappa$ projection property gives an ideal-small set of coordinates with cofinality below $\kappa$ ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F7] Cofinalities of limit ordinals are regular cardinals, and a cofinal subset bounds the cofinality by its size ([[thm-cofinality-basics]], (c)–(d)).

[F8] Successor cardinals are regular under AC ([[thm-regularity-of-the-alephs]], (b)).

[A1] AC supplies simultaneous choices of cofinal enumerations ([[def-axiom-of-choice]]).

## Proof

1.1 Begin with the directed assertion. Every singleton $\{a\}$ belongs to $I$: otherwise the family $(u_\xi)_{\xi<a}$ with $u_\xi(a)=\xi$ and $u_\xi(b)=0$ for $b\ne a$ has size $a<\lambda$, yet no weak bound $v$ in the product, since $u_{v(a)+1}(a)>v(a)$ and this failure singleton is positive. The index $v(a)+1<a$ because $a$ is an infinite cardinal. Directedness contradicts this. Let $\beta$ be the least ordinal for which $A_0=A\cap\beta$ is positive; it exists since $A=A\cap(\sup A+1)$ is positive. It is not a successor: its preceding initial segment and the possible newly added singleton would both be small. Nor can $A_0$ be bounded below $\beta$, for then an earlier initial segment would equal it. Thus $\beta=\sup A_0=\mu$ is a limit cardinal, as a supremum of unbounded cardinal coordinates, and $A_0$ has no last member. Every proper initial segment of $A_0$ is small. By F7, $\operatorname{cf}(\mu)\le|A_0|<\min A_0<\mu$, so $\mu$ is singular. Put $I_0=I\cap\mathcal P(A_0)$. It is proper, and directedness restricts: extend any small family of functions by zero outside $A_0$, take an $I$-bound and restrict it. In particular $A_0$ is infinite and progressive and remains an interval. [F7, given]

1.2 Independently, the proposed interval identity holds if $A$ is finite, since F1 gives $\operatorname{pcf}(A)=A$ and the interval condition includes exactly all regular cardinals from its minimum to its maximum. For every nonempty progressive $A$, F1 and F4 also give the easy inclusion: its possible cofinalities are regular, at least $\min A$ and at most $M=\max\operatorname{pcf}(A)$. [F1, F4, given]

2.1 Continue the directed assertion on $A_0$, with $\tau=|A_0|$. Since $\mu$ is a limit cardinal greater than $\tau$, $\tau^+<\mu\le\sup A<\lambda$. For each uncountable regular $\kappa<\mu$, $\kappa^{++}+1<\mu$, and hence $\{a\in A_0:a\le\kappa^{++}\}\in I_0$ by step 1.1. F5 applies to this restricted directed product with the constant zero prescribed family and supplies one strict $\lambda$-chain $f$ with every such $(*)_\kappa$. In particular $\tau^+$ is eligible and regular by F8. The exact-bound clause of F5 applies because $\lambda>\tau^+$, giving an exact bound $v$. Also $\kappa=\min A_0$ is uncountable, regular, greater than $\tau$ and below $\mu$, so F5 gives its projection property; F6 makes $\{a:\operatorname{cf}(v(a))<\min A_0\}$ small. First choose a positive limit representative using F6, and cap it at the identity: leastness gives $v\le_{I_0}(a\mapsto a)$, so $\min(v(a),a)$ is the same ideal class. Off a small set this has cofinality at least $\min A_0$; on the exceptional set replace its value by $a$. Denote the resulting bound by $h$. It remains exact, positive and limit-valued and satisfies $\min A_0\le c(a)=\operatorname{cf}(h(a))\le a$ for every $a$. The upper inequality follows because $h(a)\le a$ and a cofinal subset has size at most $|h(a)|\le a$. By F7 $c(a)$ is regular. The interval property, with endpoints $\min A_0$ and $a$, now gives $c(a)\in A_0$. This is the use of the interval hypothesis in the directed argument. [step 1.1, F5, F6, F7, F8]

3.1 For each $\xi$, $f_\xi<_{I_0}h$ because $f_\xi<_{I_0}f_{\xi+1}\le_{I_0}h$. Reset $f_\xi$ to zero on its individual small failure set to obtain $\tilde f_\xi\in\prod h$. These changes preserve strict comparisons. Exactness makes this chain cofinal in $\prod h/I_0$, so its true cofinality is $\lambda$ by F1. By F7 and A1 choose strictly increasing cofinal maps $e_a:c(a)\to h(a)$ for all $a$. F1 transfers true cofinality to $\prod_{a\in A_0}c(a)/I_0$. Put $C=\operatorname{ran}c\subseteq A_0$ and $J=\{E\subseteq C:c^{-1}[E]\in I_0\}$. Preimages preserve finite unions and subsets, and $c^{-1}[C]=A_0\notin I_0$, so $J$ is proper. Moreover $|A_0|<\min A_0\le\min C$, precisely the cardinal bound in F1's repetition transfer. Thus $\prod C/J$ has true cofinality $\lambda$, and F1 gives $\lambda\in\operatorname{pcf}(C)\subseteq\operatorname{pcf}(A_0)\subseteq\operatorname{pcf}(A)$. This proves the directed assertion. [step 1.1, step 2.1, F1, F7, A1]

4.1 Suppose now $A$ has no largest member. Its supremum $\mu$ is a limit cardinal and $\operatorname{cf}(\mu)\le|A|<\min A<\mu$ by F7, so it is singular. Each regular cardinal $\rho$ with $\min A\le\rho<\mu$ lies in $A$: choose a member of $A$ above $\rho$ and apply the interval property. It therefore belongs to PCF by F1. For a regular $\rho$ with $\mu<\rho\le M$, the ideal $J_{<\rho}[A]$ is proper by F2, since $M\in\operatorname{pcf}(A)$ is not below $\rho$. F3 gives $\rho$-directedness, so step 3.1 applied with $\lambda=\rho$ gives $\rho\in\operatorname{pcf}(A)$. There is no regular cardinal equal to singular $\mu$. Together with step 1.2's opposite inclusion this proves the interval identity when there is no last member. [step 1.2, step 3.1, F1, F2, F3, F7]

5.1 Finally let $A$ be infinite with a last member. The order type of $A$ is $\delta+n$ for a nonzero limit ordinal $\delta$ and a positive finite $n$. Indeed, repeatedly taking predecessors of a successor order type must reach a limit or zero after finitely many steps: failure would give an infinite descending sequence of ordinals, whose set of values has a least member followed by a smaller one. Reaching zero would make the original order type finite. Split off this finite terminal interval $F$ and let $A_0$ be the initial interval of order type $\delta$, with no maximum. Step 4.1 gives $\operatorname{pcf}(A_0)$ as the regular interval through $M_0=\max\operatorname{pcf}(A_0)$, and F1 gives $\operatorname{pcf}(A)=\operatorname{pcf}(A_0)\cup F$. There is no missing regular between the start of $A$ and $\max(M_0,\max F)$: a regular $\rho\le M_0$ is in the first interval; if $M_0<\rho\le\max F$, then $\rho>\sup A_0$ because $M_0\ge\sup A_0$ by F1, and the original interval condition puts $\rho\in A$, necessarily in $F$. The maximum of this union is $\max(M_0,\max F)$. This proves the identity in the remaining infinite case, while step 1.2 proves the finite case and step 3.1 proves the directed assertion. QED. [step 1.2, step 3.1, step 4.1, F1, F4]

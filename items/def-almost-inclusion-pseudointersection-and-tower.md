---
id: def-almost-inclusion-pseudointersection-and-tower
kind: definition
title: Almost inclusion, pseudointersections and towers
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-countable, def-natural-numbers, def-power-set, def-set-difference-and-symmetric-difference, def-finite-cardinality, def-partial-order, def-axiom-of-choice, thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, almost inclusion and the tower discussion, printed pp.1, 13-14"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "M. Malliaris and S. Shelah, Cofinality Spectrum Theorems, Definition 14.3, PDF pp.54-55"
      url: "https://math.uchicago.edu/~mem/Malliaris-Shelah-CST-new.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

The definitions in this item work in ZF. As usual $\mathbb N=\omega$ is the set of von Neumann naturals
([[def-natural-numbers]]), a set $A$ is finite when $A\approx n$ for some
$n\in\mathbb N$, and $A$ is infinite when it is not finite
([[def-countable]], [[def-finite-cardinality]]). An infinite $A\subseteq\omega$
has $\lvert A\rvert=\aleph_0$, but nothing below uses that. Write

$$[\omega]^{\omega}:=\{A\subseteq\omega:A\text{ is infinite}\}$$

for the set of infinite subsets of $\omega$; it is a set by Separation
([[def-power-set]]) and it is nonempty, for instance $\omega\in[\omega]^{\omega}$.
No cardinal comparison is needed to define the notions below.

**Almost inclusion.** For $A,B\subseteq\omega$ write

$$A\subseteq^{*}B\quad:\Longleftrightarrow\quad A\setminus B\text{ is finite},$$

and say that $A$ is *almost contained* in $B$. Here $A\setminus B$ is the set
difference ([[def-set-difference-and-symmetric-difference]]) and finiteness is
the notion of [[def-countable]]. Thus $A\subseteq^{*}B$ holds exactly when
$A\subseteq B\cup F$ for some finite $F\subseteq\omega$. Two sets are
*almost equal*, written $A=^{*}B$, when $A\subseteq^{*}B$ and
$B\subseteq^{*}A$; equivalently when the symmetric difference
$A\mathbin{\triangle}B$ is finite.

**Pseudointersections.** Let $\mathcal F\subseteq[\omega]^{\omega}$. A set
$X\in[\omega]^{\omega}$ is a *pseudointersection* of $\mathcal F$ when
$X\subseteq^{*}A$ for every $A\in\mathcal F$. The family $\mathcal F$ has the
*strong finite intersection property* (SFIP) when
$A_0\cap A_1\cap\cdots\cap A_{n-1}$ is infinite for every $n\in\mathbb N$ and
all $A_0,\dots,A_{n-1}\in\mathcal F$. Every finite subfamily of an SFIP family
has infinite intersection, and a finite family of infinite sets has the SFIP
exactly when its total intersection is infinite.

**Towers.** A *tower* is a family
$\langle A_{\alpha}:\alpha<\kappa\rangle$, indexed by an ordinal $\kappa$, of
infinite subsets of $\omega$ such that

$$A_{\beta}\supseteq^{*}A_{\alpha}\qquad\text{whenever }\beta<\alpha<\kappa,$$

that is, the family is decreasing in the almost-inclusion order $\supseteq^{*}$,
and such that the family $\{A_{\alpha}:\alpha<\kappa\}$ has **no**
pseudointersection.

*Removing repetitions.* Call $\alpha<\kappa$ **new** when
$A_{\alpha}\ne^{*}A_{\beta}$ for every $\beta<\alpha$, let $K\subseteq\kappa$
be the set of new indices, let $\theta$ be the order type of $K$ and list $K$
increasingly as $\langle\alpha_{\iota}:\iota<\theta\rangle$, and put
$B_{\iota}=A_{\alpha_{\iota}}$. Then:

- $\langle B_{\iota}:\iota<\theta\rangle$ is decreasing up to almost equality,
  and it is *strictly* decreasing: if $\iota<\eta<\theta$, then
  $\alpha_{\iota}<\alpha_{\eta}$ and $\alpha_{\eta}\in K$, so
  $B_{\eta}\ne^{*}B_{\iota}$;
- every member of the original family is almost equal to some $B_{\iota}$: if
  $\gamma<\kappa$ and $\alpha$ is the least $\beta\le\gamma$ with
  $A_{\beta}=^{*}A_{\gamma}$, then $\alpha\in K$, since $\delta<\alpha$ with
  $A_{\delta}=^{*}A_{\alpha}$ would give $A_{\delta}=^{*}A_{\gamma}$ and
  contradict the minimality of $\alpha$;
- consequently a pseudointersection of the $B_{\iota}$ is almost contained in
  every $A_{\gamma}$, hence is a pseudointersection of the original family, and
  therefore the $B_{\iota}$ have none and $\langle B_{\iota}:\iota<\theta\rangle$
  is itself a tower.

So every tower contains a strictly decreasing tower of order type $\theta\le
\kappa$. The map $\iota\mapsto[B_{\iota}]$ injects $\theta$ into
$\mathcal P(\omega)/\mathrm{fin}$. **For the following cardinal comparison
assume AC** ([[def-axiom-of-choice]]): choose one representative from each
almost-equality class to inject the quotient into $\mathcal P(\omega)$, which
has cardinality $2^{\aleph_0}$ by
[[thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero]]. Hence
$\lvert\theta\rvert\le\lvert\mathcal P(\omega)/\mathrm{fin}\rvert\le
2^{\aleph_0}$. This does not assert $\theta\le 2^{\aleph_0}$ as ordinals:
an ordinal may be longer than its initial cardinal.

There is a second normalization that preserves the lack of a
pseudointersection. If $C\subseteq\kappa$ is cofinal, meaning that for every
$\beta<\kappa$ some $\alpha\in C$ satisfies $\beta\le\alpha$, restrict the
tower to the indices in $C$ in increasing order. An infinite set almost
contained in every selected $A_{\alpha}$ would also be almost contained in
every original $A_{\beta}$: choose such an $\alpha\ge\beta$ and use
$A_{\alpha}\subseteq^{*}A_{\beta}$. Thus the restricted sequence is again a
tower, with length the **order type** of $C$, which need not equal its
cardinality. Removing repetitions also leaves unchanged the family of sets
almost contained in every member.

**The quotient $\mathcal P(\omega)/\mathrm{fin}$ and its forcing order.** Almost
equality is an equivalence relation on $\mathcal P(\omega)$, and the quotient
$\mathcal P(\omega)/\mathrm{fin}$ is the Boolean algebra of subsets of $\omega$
modulo finite symmetric difference; the class of an infinite set is called
*positive*, and every positive class contains an infinite subset of $\omega$,
namely any of its members. The associated forcing order is the relation

$$p\text{ is stronger than }q\quad:\Longleftrightarrow\quad p\subseteq^{*}q \qquad(p,q\in[\omega]^{\omega}),$$

which is reflexive and transitive on $[\omega]^{\omega}$ and is well defined on
almost-equality classes: if $p=^{*}p'$ and $q=^{*}q'$ then $p\subseteq^{*}q$
exactly when $p'\subseteq^{*}q'$. Thus smaller infinite sets are stronger
conditions, and the relation displayed by some sources as the weaker-than
order, $p\supseteq^{*}q$, is this same order read in the reverse direction;
the order is a partial order on classes ([[def-partial-order]]) and not a
partial order on the sets themselves, where $p\subseteq^{*}q\subseteq^{*}p$
holds for distinct but almost equal sets.

**Conventions for this page.** In the items below, when a family is written
$\langle A_{\alpha}:\alpha<\kappa\rangle$ together with the assertion that it is
decreasing, the assertion is always that
$A_{\beta}\supseteq^{*}A_{\alpha}$ for $\beta<\alpha$, as above. An
uncountable family is *displayed by an ordinal enumeration*; no well-order of a
general family is presupposed unless the item says so.

## Remarks

The negation of $A\subseteq^{*}B$ says that $A\setminus B$ is infinite, and for
infinite $A$ this is not the same as $B\subseteq^{*}A$: the disjoint sets $A=$ the even numbers and
$B=$ the odd numbers satisfy $A\not\subseteq^{*}B$ and
$B\not\subseteq^{*}A$. The
almost-inclusion order is therefore genuinely different from inclusion, and the
distinction is exactly what the diagonal constructions below exploit.

Monk states the relation $\subseteq^{*}$ and the pseudointersection property at
the opening of his notes and introduces towers as decreasing families with no
pseudointersection when he defines the tower number; Malliaris and Shelah
present $\mathcal P(\omega)/\mathrm{fin}$ with the reverse (weaker-than)
convention. A condition is a positive class; in the stronger-than convention
fixed above, strengthening passes to an almost subset. Reversing the symbol
used to display the order does not reverse which conditions are stronger. The conventions fixed above are the ones used on this page; no
mathematical content depends on which of the two display conventions is
chosen.

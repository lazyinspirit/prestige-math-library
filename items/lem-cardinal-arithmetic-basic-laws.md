---
id: lem-cardinal-arithmetic-basic-laws
kind: lemma
title: "Commutativity, associativity, distributivity and monotonicity of $\\oplus$ and $\\otimes$, the unit laws, the two exponent laws, and $\\kappa \\le \\lambda$ if and only if $\\kappa$ injects into $\\lambda$"
status: draft
origin: session
deps: [def-cardinal-arithmetic, lem-cardinal-operations-are-well-defined, lem-cardinality-of-a-well-orderable-set, def-equinumerous, def-injection-surjection-bijection, def-cardinal, lem-ordinal-trichotomy, lem-ordinal-basics, thm-schroder-bernstein, def-axiom-of-choice, thm-well-ordering-theorem]
justified_by: []
aliases: []
landmark: false
short: "the algebra of $\\oplus$, $\\otimes$ and $\\kappa^{\\lambda}$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\kappa$, $\lambda$, $\mu$ be cardinals ([[def-cardinal]]) and let
$\oplus$, $\otimes$, $\kappa^{\lambda}$ be as in [[def-cardinal-arithmetic]].
Clauses (a) to (e) are theorems of ZF; the clauses naming an exponential hold
whenever those exponentials are defined, in particular under the Axiom of Choice
([[def-axiom-of-choice]]).

**(a) Comparison.** $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$,
that is, if and only if there is an injection $\kappa \to \lambda$
([[def-equinumerous]]). More generally, if $A$ and $B$ are well-orderable and
$A \preceq B$ then $\lvert A \rvert \le \lvert B \rvert$.

**(b) Commutativity and associativity.**
$\kappa \oplus \lambda = \lambda \oplus \kappa$,
$\kappa \otimes \lambda = \lambda \otimes \kappa$,
$(\kappa \oplus \lambda) \oplus \mu = \kappa \oplus (\lambda \oplus \mu)$ and
$(\kappa \otimes \lambda) \otimes \mu = \kappa \otimes (\lambda \otimes \mu)$.

**(c) Distributivity.**
$\kappa \otimes (\lambda \oplus \mu) = (\kappa \otimes \lambda) \oplus (\kappa \otimes \mu)$.

**(d) Units.** $\kappa \oplus 0 = \kappa$, $\kappa \otimes 0 = 0$,
$\kappa \otimes 1 = \kappa$, and $\kappa^{0} = 1$, $\kappa^{1} = \kappa$,
$1^{\kappa} = 1$, together with $0^{\kappa} = 0$ for $\kappa \ne 0$. The four
exponential unit laws need no choice principle, because the function sets they
count are empty, a singleton, or a copy of $\kappa$.

**(e) Monotonicity.** If $\kappa \le \lambda$ then
$\kappa \oplus \mu \le \lambda \oplus \mu$ and
$\kappa \otimes \mu \le \lambda \otimes \mu$; and
$\kappa^{\mu} \le \lambda^{\mu}$, and $\mu^{\kappa} \le \mu^{\lambda}$ provided
$\mu \ne 0$.

**(f) The two exponent laws.**
$\kappa^{\lambda \oplus \mu} = \kappa^{\lambda} \otimes \kappa^{\mu}$ and
$(\kappa^{\lambda})^{\mu} = \kappa^{\lambda \otimes \mu}$.

**Each clause is an equality or an inequality of cardinals**, not merely of sizes: each side is
an ordinal, and the claim is that the two ordinals are the same.

## Facts & Assumptions

**Given:** Cardinals $\kappa, \lambda, \mu$, in ZF; the Axiom of Choice is assumed only where an exponential is written and is not one of the four unit cases.

[L1] For a well-orderable $X$, $\lvert X \rvert$ is the least ordinal equinumerous with $X$, it satisfies $X \approx \lvert X \rvert$, it is a cardinal, equinumerous sets receive the same one, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L2] $\sqcup$, $\times$ and ${}^{B}A$ respect $\approx$ in both arguments ([[lem-cardinal-operations-are-well-defined]], claim (a)).

[L3] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda \rvert$, $\kappa \otimes \lambda = \lvert \kappa \times \lambda \rvert$, $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, and these may be computed from any equinumerous representatives ([[def-cardinal-arithmetic]]).

[L4] If $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]]).

[L5] Ordinals are comparable, exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$ holds, $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$, and $\alpha \notin \alpha$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L6] A composition of bijections is a bijection, a map with a two-sided inverse is a bijection, and a subset inclusion is an injection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] An ordinal $\kappa$ is a cardinal when no $\alpha \in \kappa$ has $\alpha \approx \kappa$ ([[def-cardinal]]).

[L8] Assuming the Axiom of Choice every set is well-orderable, so every exponential written below is defined ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

## Proof

**Proof technique:** direct.

1.1 First half of (a): if $\kappa \le \lambda$ then $\kappa \subseteq \lambda$ by [L5] and the inclusion is an injection, so $\kappa \preceq \lambda$; conversely, if $\kappa \preceq \lambda$ and $\lambda \in \kappa$ then $\lambda \subseteq \kappa$ gives $\lambda \preceq \kappa$, so $\kappa \approx \lambda$ by [L4], contradicting [L7] since $\lambda \in \kappa$; trichotomy then leaves $\kappa \le \lambda$. [L4, L5, L6, L7]

1.2 The maps $(0,\xi) \mapsto (1,\xi)$, $(1,\eta) \mapsto (0,\eta)$ and $(\xi,\eta) \mapsto (\eta,\xi)$ are their own inverses up to relabelling, hence bijections $\kappa \sqcup \lambda \to \lambda \sqcup \kappa$ and $\kappa \times \lambda \to \lambda \times \kappa$. [L6]

1.3 The maps $(0,(0,\xi)) \mapsto (0,\xi)$, $(0,(1,\eta)) \mapsto (1,(0,\eta))$, $(1,\zeta) \mapsto (1,(1,\zeta))$ and $((\xi,\eta),\zeta) \mapsto (\xi,(\eta,\zeta))$ have evident two-sided inverses, hence are bijections $(\kappa \sqcup \lambda) \sqcup \mu \to \kappa \sqcup (\lambda \sqcup \mu)$ and $(\kappa \times \lambda) \times \mu \to \kappa \times (\lambda \times \mu)$. [L6]

1.4 The map $(\xi,(0,\eta)) \mapsto (0,(\xi,\eta))$, $(\xi,(1,\zeta)) \mapsto (1,(\xi,\zeta))$ is a bijection $\kappa \times (\lambda \sqcup \mu) \to (\kappa \times \lambda) \sqcup (\kappa \times \mu)$. [L6]

1.5 Unit computations: $\kappa \sqcup 0 = \{0\} \times \kappa \approx \kappa$; $\kappa \times 0 = \varnothing = 0$; $\kappa \times 1 = \kappa \times \{0\} \approx \kappa$; ${}^{0}\kappa = \{\varnothing\}$ has the empty function as its only element, so ${}^{0}\kappa \approx 1$; ${}^{1}\kappa \approx \kappa$ by $h \mapsto h(0)$; ${}^{\kappa}1$ has the constant function $0$ as its only element, so ${}^{\kappa}1 \approx 1$; and for $\kappa \ne 0$ there is no function $\kappa \to \varnothing$, so ${}^{\kappa}0 = \varnothing = 0$. [L6]

1.6 Two bijections of function spaces: $h \mapsto (\xi \mapsto h(0,\xi),\ \eta \mapsto h(1,\eta))$ is a bijection ${}^{\lambda \sqcup \mu}\kappa \to ({}^{\lambda}\kappa) \times ({}^{\mu}\kappa)$, with inverse gluing a pair back into one function; and $F \mapsto \big((\xi,\eta) \mapsto F(\eta)(\xi)\big)$ is a bijection ${}^{\mu}({}^{\lambda}\kappa) \to {}^{\lambda \times \mu}\kappa$, with inverse $f \mapsto \big(\eta \mapsto (\xi \mapsto f(\xi,\eta))\big)$. [L6]

1.7 Monotonicity injections, for $\kappa \subseteq \lambda$: $\kappa \sqcup \mu \subseteq \lambda \sqcup \mu$ and $\kappa \times \mu \subseteq \lambda \times \mu$ and ${}^{\mu}\kappa \subseteq {}^{\mu}\lambda$ are inclusions; and for $\mu \ne 0$, extending a function by the constant value $0 \in \mu$ on $\lambda \setminus \kappa$ is an injection ${}^{\kappa}\mu \to {}^{\lambda}\mu$, injective because restricting back to $\kappa$ recovers the original function. [L5, L6]

2.1 Second half of (a): if $A \preceq B$ with both well-orderable then $\lvert A \rvert \approx A \preceq B \approx \lvert B \rvert$ by [L1], so $\lvert A \rvert \preceq \lvert B \rvert$ by [L6], and step 1.1 applied to these two cardinals gives $\lvert A \rvert \le \lvert B \rvert$. [step 1.1, L1, L6]

2.2 Claims (b) and (c): by [L1] the sets $\kappa \oplus \lambda$ and $\kappa \sqcup \lambda$ are equinumerous, and likewise for $\otimes$, so [L2] lets every outer operation be computed on the untagged representatives; steps 1.2, 1.3 and 1.4 then equate the two underlying sets up to $\approx$, and [L1] gives the same least ordinal on both sides. [step 1.2, step 1.3, step 1.4, L1, L2, L3]

2.3 Claim (d) is step 1.5 read through [L3] and [L1]: each computed set is equinumerous with $\kappa$, with $1$, or with $0$, and its cardinality is the corresponding cardinal by [L1]. [step 1.5, L1, L3]

2.4 Claim (f): $\lambda \oplus \mu \approx \lambda \sqcup \mu$ and $\kappa^{\lambda} \approx {}^{\lambda}\kappa$ by [L1], so [L2] and step 1.6 give ${}^{\lambda \oplus \mu}\kappa \approx ({}^{\lambda}\kappa) \times ({}^{\mu}\kappa)$ and ${}^{\mu}(\kappa^{\lambda}) \approx {}^{\lambda \times \mu}\kappa$; taking cardinalities through [L1] and [L3] yields $\kappa^{\lambda \oplus \mu} = \kappa^{\lambda} \otimes \kappa^{\mu}$ and $(\kappa^{\lambda})^{\mu} = \kappa^{\lambda \otimes \mu}$. [step 1.6, L1, L2, L3, L8]

3.1 Claim (e): each map of step 1.7 is an injection between the underlying sets, so step 2.1 applied to it gives the corresponding inequality of cardinalities, which by [L3] is the stated inequality of cardinals. [step 1.7, step 2.1, L3, L8]

4.1 All six claims are established, in ZF except for the exponentials of clauses (e) and (f), which are read under the Axiom of Choice by [L8]. [step 2.1, step 2.2, step 2.3, step 2.4, step 3.1] ∎

## Remarks

**Why clause (a) is the workhorse.** Every other clause is proved by writing down a bijection or an injection between two concrete sets; clause (a) is what converts such a map into a statement about the *ordinals* $\kappa$ and $\lambda$, and it is the only clause whose proof uses [[thm-schroder-bernstein]]. Note the direction of the work there: $\kappa \le \lambda \Rightarrow \kappa \preceq \lambda$ is the trivial half, and the converse is where being a **cardinal** rather than an arbitrary ordinal is spent.

**No cancellation, and no strict monotonicity.** Clause (e) gives $\le$ and not $<$, and that is not a weakness of the proof. The companion page shows that $\kappa \oplus \mu = \lambda \oplus \mu$ does not force $\kappa = \lambda$, and that $\kappa < \lambda$ does not force $\kappa^{\mu} < \lambda^{\mu}$; both failures are already visible at $\aleph_0$.

**The exponent laws hold at every value, including the degenerate ones.** With $\lambda = \mu = 0$ the first law reads $\kappa^{0} = \kappa^{0} \otimes \kappa^{0}$, that is $1 = 1 \otimes 1$, and with $\kappa = 0$ and $\mu = 0$ the second reads $(0^{\lambda})^{0} = 0^{0} = 1$, both correct from clause (d). Nothing in the proof of clause (f) case-splits on whether an exponent is zero, because the bijections of step 1.6 are between sets of functions and remain bijections when one of the domains is empty.

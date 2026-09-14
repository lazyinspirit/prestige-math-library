---
id: lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness
kind: lemma
title: A non-hereditarily-Lindelof regular space yields an ideal witness
status: published
origin: pipeline
deps:
  - def-set-theoretic-l-and-s-spaces
  - def-simple-dichotomy-for-omega-one-generated-ideals
  - thm-positive-heredity-of-separation-axioms
  - lem-regularity-via-closed-neighbourhoods
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Abraham, Three applications of ideal dichotomy, slides 2–4"
      url: https://www.winterschool.eu/files/4-P-Ideal_Dichotomy_III.pdf
    - title: "Abraham, Lecture notes on the P-ideal dichotomy, Theorem 1.5 proof, rendered lines 208–226"
      url: https://paperzz.com/doc/7877075/lecture-notes-on-the-p-ideal-dichotomy
---

## Statement

Let $X$ be a regular Hausdorff space that is not hereditarily Lindelöf.  Then
$X$ has a right-separated subspace
$S=\{x_\alpha:\alpha<\omega_1\}$ and open sets $U_\alpha\subseteq S$ such that

$$x_\alpha\in U_\alpha\subseteq\overline{U_\alpha}^{,S}\subseteq\{x_\xi:\xi\leq\alpha\}.$$

The countable closed sets
$C_\alpha=\overline{U_\alpha}^{,S}$ generate modulo finite an
$\omega_1$-generated ideal $\mathcal I$ of countable subsets of $S$.  Every
uncountable subset of $S$ inside $\mathcal I$ is nonseparable, and every
uncountable subset outside $\mathcal I$ is discrete and hence nonseparable.

## Facts & Assumptions

**Given:** ZFC and the space $X$ in the statement.

[F1] [[def-set-theoretic-l-and-s-spaces]] gives hereditary Lindelöfness and separability their all-subspaces meanings.

[F2] Regularity and Hausdorffness pass to subspaces ([[thm-positive-heredity-of-separation-axioms]]).

[F3] In a regular space, if $x\in V$ and $V$ is open, there is open $U$ with $x\in U\subseteq\overline U\subseteq V$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F4] [[def-simple-dichotomy-for-omega-one-generated-ideals]] defines generation modulo finite and the inside and outside predicates.

[F5] [[def-axiom-of-choice]] supplies the length-$\omega_1$ recursive choices, the chosen cover members, and countable enumerations.  Hausdorffness supplies closed singletons, so removing finitely many points preserves openness.

## Proof

**Proof technique:** direct construction.

1.1 By [F1], some subspace $Y\subseteq X$ has an open cover $\mathcal V$ with no countable subcover.  Recursively for $\alpha<\omega_1$, the earlier chosen $V_\xi\in\mathcal V$ do not cover $Y$, so choose $$x_\alpha\in Y\setminus\bigcup_{\xi<\alpha}V_\xi$$ and then choose $V_\alpha\in\mathcal V$ containing $x_\alpha$.  This also makes the $x_\alpha$ distinct. [F1, F5, given]

2.1 Put $S=\{x_\alpha:\alpha<\omega_1\}$.  If $\beta>\alpha$, construction gives $x_\beta\notin V_\alpha$.  Hence $V_\alpha\cap S$ is a neighbourhood of $x_\alpha$ contained in the initial segment $S_\alpha=\{x_\xi:\xi\leq\alpha\}$.  The union of these neighbourhoods for $\xi\leq\alpha$ shows that every $S_\alpha$ is open in $S$, so $S$ is right-separated. [step 1.1]

3.1 By [F2], $S$ is regular and Hausdorff.  Apply [F3] inside $S$ to $x_\alpha\in S_\alpha$: choose open $U_\alpha$ with $x_\alpha\in U_\alpha\subseteq C_\alpha=\overline{U_\alpha}^{,S}\subseteq S_\alpha$.  The set $C_\alpha$ is closed in $S$ and countable because $\alpha<\omega_1$. [F2, F3, F5, step 2.1]

4.1 Let $\mathcal I$ be the ideal generated modulo finite by the $C_\alpha$.  Explicitly, a countable $a\subseteq S$ lies in $\mathcal I$ exactly when $a\subseteq^*\bigcup_{\alpha\in u}C_\alpha$ for some finite $u\subseteq\omega_1$.  The defining family consists of $\omega_1$ countable members, and the formula is downward closed, closed under finite unions, and contains every finite set. [F4, step 3.1]

5.1 Let $D\subseteq S$ be uncountable and inside $\mathcal I$, and let $E\subseteq D$ be countable.  By inside-ness and step 4.1, $$E\subseteq K=\bigcup_{\alpha\in u}C_\alpha\cup F$$ for some finite $u$ and finite $F\subseteq S$.  The set $K$ is countable and closed in the Hausdorff space $S$: the $C_\alpha$ are closed and the finite set $F$ is closed.  Choose $d\in D\setminus K$.  Then the nonempty open subset $D\setminus K$ of $D$ misses $E$, so $E$ is not dense in $D$.  Since this holds for every countable $E$, the space $D$ is nonseparable. [F4, F5, step 3.1, step 4.1]

5.2 Let instead $D\subseteq S$ be uncountable and outside $\mathcal I$.  For $x_\alpha\in D$, outside-ness gives $D\cap C_\alpha$ finite.  Remove from $U_\alpha$ the finite closed set $(D\cap C_\alpha)\setminus\{x_\alpha\}$.  The result is an open neighbourhood in $S$ whose intersection with $D$ is exactly $\{x_\alpha\}$, so $D$ is discrete.  Every dense subset of a discrete space is the whole space; because $D$ is uncountable, it is nonseparable. [F4, F5, step 3.1, step 4.1]

6.1 Steps 1.1–4.1 give the promised right-separated sequence, closed neighbourhoods, and generated ideal, while steps 5.1 and 5.2 prove both nonseparability conclusions.  The construction starts at $\alpha=0$ with no earlier cover members; every $S_\alpha$ and $C_\alpha$ is nonempty because it contains $x_\alpha$; finite generator lists and finite errors may be empty; and all nonempty recursive selections are the uses of AC recorded in [F5]. [F5, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2] ∎

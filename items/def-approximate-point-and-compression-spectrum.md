---
id: def-approximate-point-and-compression-spectrum
kind: definition
title: Approximate point and compression spectrum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, def-bounded-below-operator, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1 and Exercise 5.19-style presentation of the approximate point spectrum, printed pp. 219–221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $X$ be a
nonzero complex Banach space and let $T \in \mathcal B(X)$
([[def-bounded-linear-operator]]). Write $T-\lambda$ for $T-\lambda I_X$. The
**approximate point spectrum** of $T$ is

$$\sigma_{ap}(T) \;:=\; \{\,\lambda \in \mathbb C : T-\lambda \text{ is not bounded below}\,\},$$

bounded below meaning $\|(T-\lambda)x\| \ge c\|x\|$ for all $x$ and some real
$c > 0$ ([[def-bounded-below-operator]]), and the **compression spectrum** of
$T$ is

$$\sigma_{cp}(T) \;:=\; \{\,\lambda \in \mathbb C : \overline{\operatorname{ran}(T-\lambda)} \ne X\,\},$$

the set of $\lambda$ for which $T-\lambda$ does not have dense range.

**Sequential description of the approximate point spectrum.** Under Countable
Choice, $\lambda \in \sigma_{ap}(T)$ if and only if there is a sequence
$(x_n)$ of unit vectors in $X$ with
$$\|(T-\lambda)x_n\| \longrightarrow 0 .$$
Indeed, if $T-\lambda$ is not bounded below then for each $n$ the set
$\{x : \|x\| = 1,\ \|(T-\lambda)x\| < 1/(n+1)\}$ is nonempty, and Countable Choice
selects one unit vector $x_n$ for each $n$; the resulting sequence witnesses
the failure of the bound. Conversely a sequence of unit vectors with
$\|(T-\lambda)x_n\| \to 0$ rules out every constant $c > 0$ in the estimate.

## Remarks

- **The two sets are not spectral parts in the disjoint sense.** They may
  overlap each other and the classical parts: an eigenvalue is in
  $\sigma_{ap}$ but may also be a compression value. A value whose range is
  dense but not closed is not in $\sigma_{cp}$ and cannot be bounded below;
  indeed, under Countable Choice a convergent sequence of range points has
  Cauchy preimages under a lower bound, and completeness then puts its limit
  back in the range. Thus the value lies in $\sigma_{ap}$. The exact relations are proved in
  [[lem-relations-among-the-five-spectral-parts]]; no disjointness is claimed
  here.

- **The normalization of approximate eigenvectors matters.** The definition
  above demands unit vectors, so a sequence $x_n \to 0$ with
  $(T-\lambda)x_n \to 0$ is not evidence: without the normalization every
  bounded operator would qualify. The unit vectors may be chosen adaptively;
  the single use of Countable Choice is recorded in the display above.

- **Bounded below is exactly injectivity with closed range in the Banach
  setting.** That equivalence, proved under Dependent Choice in
  [[thm-bounded-below-iff-injective-with-closed-range]], is what makes
  $\sigma_{ap}$ and $\sigma_{cp}$ cover the spectrum
  ([[lem-relations-among-the-five-spectral-parts]]); the definition here does
  not assume it.

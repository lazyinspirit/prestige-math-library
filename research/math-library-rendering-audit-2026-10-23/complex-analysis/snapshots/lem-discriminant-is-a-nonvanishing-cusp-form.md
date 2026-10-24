---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u21.json"
    content_sha256: "d3565c23c39972c829cab07f9608ef43ad62fd7209bee6033245ef73713e9d7d"
id: lem-discriminant-is-a-nonvanishing-cusp-form
kind: lemma
title: "The discriminant is a nonvanishing cusp form of weight 12"
status: published
origin: pipeline
deps:
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-eisenstein-series
  - thm-level-one-valence-formula
  - cor-dimension-of-level-one-modular-forms
  - def-level-one-modular-form-and-cusp-form
  - def-divisor-power-sums-sigma-k
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 4.15 and Proposition 4.16(c), printed pp. 54–55; the discriminant expansion and Theorem 4.21, p. 57."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 7 and equation (23), printed p. 21; the valence-based nonvanishing argument, p. 22."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 101–103: the unique weight-12 cusp form and its nonvanishing."
---

## Statement

Define $\Delta:=(E_4^3-E_6^2)/1728$. Then $\Delta$ is a cusp form of weight $12$ whose $q$-expansion is
$$\Delta(\tau)=q-24q^2+O(q^3),\qquad q=e^{2\pi i\tau};$$
in particular $\Delta\ne0$ and $\operatorname{ord}_\infty(\Delta)=1$, and the valence formula gives $\Delta(\tau)\ne0$ for every $\tau\in\mathfrak H$. Moreover $E_4^3$ and $E_6^2$ are linearly independent in $M_{12}$, this space being two-dimensional with basis $\{E_4^3,E_6^2\}$.

## Facts & Assumptions

**Given:** $E_4\in M_4$ and $E_6\in M_6$ with $E_4=1+240q+2160q^2+O(q^3)$ and $E_6=1-504q-16632q^2+O(q^3)$ ([[thm-eisenstein-series-are-modular-forms]], [[def-level-one-eisenstein-series]], [[def-divisor-power-sums-sigma-k]]).

[F1] $M_{12}$ is a two-dimensional complex vector space. Multiplication adds weights, with $M_4M_4\subseteq M_8$, $M_8M_4\subseteq M_{12}$ and $M_6M_6\subseteq M_{12}$; the cusp forms are the kernel of the constant-term functional $f\mapsto f(\infty)$ ([[cor-dimension-of-level-one-modular-forms]], [[def-level-one-modular-form-and-cusp-form]]).

[F2] Valence formula: for even $k$ and $0\ne f\in M_k$, $\sum_{P\ne\infty}\operatorname{ord}_P(f)/\nu_P=k/12-\operatorname{ord}_\infty(f)$ ([[thm-level-one-valence-formula]]).

## Proof

1.1 $E_4^3\in M_{12}$ and $E_6^2\in M_{12}$ by [F1], hence $\Delta=(E_4^3-E_6^2)/1728\in M_{12}$. From the displayed expansions, $E_4^3=1+720q+(3\cdot2160+3\cdot240^2)q^2+O(q^3)=1+720q+179280q^2+O(q^3)$ and $E_6^2=1-1008q+(504^2-2\cdot16632)q^2+O(q^3)=1-1008q+220752q^2+O(q^3)$. Therefore $\Delta=\frac{1}{1728}\bigl(1728q-41472q^2+O(q^3)\bigr)=q-24q^2+O(q^3)$. In particular $\Delta\ne0$, $\Delta(\infty)=0$, so $\Delta$ is a cusp form, and $\operatorname{ord}_\infty(\Delta)=1$. [F1, given, algebra]

2.1 Applying the valence formula [F2] to $\Delta$ of weight $12$ gives $\sum_{P\ne\infty}\operatorname{ord}_P(\Delta)/\nu_P=12/12-1=0$; every summand is a nonnegative multiple of $1/\nu_P$, so all vanish and $\Delta$ has no zeros on $\mathfrak H$. Finally, if $aE_4^3+bE_6^2=0$ then comparing constant terms gives $a+b=0$ and comparing $q$-coefficients gives $720a-1008b=0$, whence $(720+1008)a=0$ and $a=b=0$; so $E_4^3,E_6^2$ are linearly independent in the two-dimensional space $M_{12}$ and therefore form a basis. [F1, F2, step 1.1, given, algebra] ∎

---
id: lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess
kind: lemma
title: "A finite-measure measurable set in $\\mathbb{R}^n$ has a compact core and a bounded open neighbourhood of arbitrarily small excess"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-continuity-from-below-for-measures, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-of-a-set-difference, thm-heine-borel-rn]
landmark: false
proof_strategy: "First truncate the set to a large bounded piece using its finite measure. Then apply outer regularity both to that bounded piece and to its complement inside the large closed ball to produce a compact core $K\\subseteq E$ and a bounded open neighbourhood $O\\supseteq K$ with both $E\\setminus K$ and $O\\setminus K$ arbitrarily small."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Assume the Axiom of Countable Choice.

Let $E \subseteq \mathbb{R}^n$ be Lebesgue measurable with
$\lambda_n(E) < \infty$. For every $\varepsilon > 0$ there exist a compact set
$K$ and a bounded open set $O$ such that

$$K \subseteq E,\qquad K \subseteq O,\qquad \lambda_n(E \setminus K) < \varepsilon,\qquad\text{and}\qquad \lambda_n(O \setminus K) < \varepsilon.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $n \ge 1$, a finite-measure measurable set $E \subseteq \mathbb{R}^n$, and $\varepsilon > 0$.

[L1] Outer regularity gives open supersets of arbitrarily small excess ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L2] Lebesgue measure is sigma-finite and finite on bounded sets ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[L3] Continuity from below applies to the exhaustion $E \cap \overline{B(0,R)} \uparrow E$ ([[thm-continuity-from-below-for-measures]]).

[L4] Set-difference measure obeys the usual subtraction and monotonicity rules ([[prop-measure-of-a-set-difference]], [[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose $R > 0$ so large that [L2, L3, given, choose] $$ \lambda_n(E \setminus \overline{B(0,R)}) < \varepsilon/3. $$ Put $E_R := E \cap \overline{B(0,R)}$. Then $E_R$ has finite measure and lies in a compact ball. [L2, L3, given, choose]

2.1 Apply [L1] to choose an open set $U \supseteq E_R$ with [L1, L4, step 1.1, choose, construct] $\lambda_n(U \setminus E_R) < \varepsilon/3$. Put $$ O := U \cap B(0,R+1). $$ Then $O$ is bounded and open, and it still contains $E_R$ because $E_R \subseteq \overline{B(0,R)} \subseteq B(0,R+1)$. Next choose an open set $V \supseteq \overline{B(0,R)} \setminus E$ with $$ \lambda_n\bigl(V \setminus (\overline{B(0,R)} \setminus E)\bigr) < \varepsilon/3. $$ Define $$ K := \overline{B(0,R)} \setminus V. $$ Then $K \subseteq E$ and $K$ is compact, being closed in the compact ball $\overline{B(0,R)}$. [L1, L4, step 1.1, choose, construct]

3.1 Because $K=\overline{B(0,R)}\setminus V$, one has [step 1.1, step 2.1, L4, algebra] $$ E\setminus K \subseteq \bigl(E\setminus\overline{B(0,R)}\bigr)\cup (E_R\cap V). $$ Also $$ E_R\cap V \subseteq V \setminus (\overline{B(0,R)}\setminus E), $$ so $$ \lambda_n(E\setminus K) < \varepsilon/3+\varepsilon/3<\varepsilon. $$ [step 1.1, step 2.1, L4, algebra]

4.1 Since $K \subseteq E_R \subseteq O$, one also has [step 2.1, L4, algebra] $$ O \setminus K \subseteq (O \setminus E_R) \cup (E_R \setminus K). $$ But $E_R \setminus K = E_R \cap V \subseteq V \setminus (\overline{B(0,R)} \setminus E)$, so $$ \lambda_n(O \setminus K) < \varepsilon/3 + \varepsilon/3 < \varepsilon. $$ Thus $K \subseteq E$, $K \subseteq O$, and both required excess bounds hold. [step 2.1, L4, algebra] ∎

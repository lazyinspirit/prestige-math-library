---
id: prop-qftx-anomaly-obstruction
kind: proposition
title: Wess–Zumino consistency is an obstruction class
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-brst-relative-local-cohomology
  - lem-qftx-brst-nilpotence-doublets
  - thm-qftx-scalar-eg-induction
justified_by: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-brst-relative-local-cohomology: mathematical-premise
  lem-qftx-brst-nilpotence-doublets: mathematical-premise
  thm-qftx-scalar-eg-induction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: Section 2.3, equation (2.23), and Section 12.3 on H^{1,n}(s|d) and anomalies.
    - title: Norbert Dragon and Friedemann Brandt, BRST Symmetry and Cohomology
      url: https://arxiv.org/pdf/1205.3293
      locator: Section 2.4, equations (2.62)–(2.66), on first-order breaking, nilpotent consistency, local anomaly density and counterterms.
    - title: Rudolf Schmid, Local cohomology in gauge theories, BRST transformations and anomalies
      url: https://deferentialgeometry.org/papers/localbrst.pdf
      locator: Section 3, equations for the descent and the Wess–Zumino condition in local BRST cohomology.
---

## Statement

Assume AC and Countable Choice, fix admissible flat scalar free data and a local scalar polynomial class under a scalar formal time-ordering theorem, and work conditionally in a time-ordering scheme satisfying that theorem's statement. Let $X$ be a ghost-number-zero element of the formal module of compactly supported local functional classes modulo total derivatives, and let $\mathcal W_\hbar=s+\sum_{j\ge1}\hbar^j\mathcal W_j$ be an odd ghost-number-one differential on that module, with $\mathcal W_\hbar^2=0$. Suppose the first possible breaking is
$$\mathcal W_\hbar X=\hbar^n\mathcal A+O(\hbar^{n+1}),\qquad n\ge1,\qquad \mathcal A=\int_{\mathbb R^4}a_4,$$
where $\hbar$ is a formal indeterminate, $O(\hbar^{n+1})$ means terms of formal degree at least $n+1$, every lower coefficient vanishes, and $a_4$ is a compactly supported local four-form of ghost number one. At order $n$, let $\mathcal K_n$ be the specified $s,d_H$-stable subcomplex of the compactly supported local-form spaces defined earlier, whose ghost-number-zero four-forms are exactly the allowed local counterterm densities, and assume $a_4\in\mathcal K_n^{1,4}$. Then $s a_4$ is $d_H$-exact. A counterterm shift $X\mapsto X-\hbar^n\int b_4$, with $b_4\in\mathcal K_n^{0,4}$, cancels the order-$n$ breaking if and only if
$$[a_4]=0\quad\text{in}\quad H^{1,4}(s|d_H;\mathcal K_n).$$
This is a conditional obstruction statement; locality of $a_4$, nilpotence of the formal Ward differential, and admissibility of the counterterm space are hypotheses, not conclusions about a quantum action principle.

## Statement references

[[def-qftx-brst-relative-local-cohomology]]

[[lem-qftx-brst-nilpotence-doublets]]

[[thm-qftx-scalar-eg-induction]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The relative local-form conventions, the Abelian nilpotent differential, and the conditional scalar time-ordering result.

[F1] [[lem-qftx-brst-nilpotence-doublets]]: the Abelian local differential $s$ is nilpotent.

[F2] [[def-qftx-brst-relative-local-cohomology]]: a ghost-number-one four-form $a_4$ is a relative cocycle when $s a_4$ is $d_H$-exact; its class vanishes exactly when $a_4=s b_4+d_Hc_3$ in the chosen local subcomplex. For compact support, $\int d_Hc_3=0$.

[F3] [[thm-qftx-scalar-eg-induction]]: assuming the Axiom of Choice and Countable Choice and fixing any admissible flat scalar free datum and local scalar polynomial class, there exists a sequence of symmetric multilinear maps $T_n$ satisfying the scalar time-ordering contract at every finite order, with finite graph scaling bounds and the stated local extension ambiguities. This supplier does not establish a BRST Ward identity, locality of an anomaly, a quantum action principle, or a positive physical Hilbert quotient.

[A3] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This is a hypothesis of [F3] and is carried here only through that conditional scalar-system supplier.

[A4] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. This is a hypothesis of [F3] and is carried here only through that conditional scalar-system supplier.

[A1] On the formal local-functional module, $\mathcal W_\hbar=s+O(\hbar)$ is an odd ghost-number-one operator with $\mathcal W_\hbar^2=0$, and $\mathcal W_\hbar X=\hbar^n\mathcal A+O(\hbar^{n+1})$ with all lower coefficients zero.

[A2] The order-$n$ anomaly density $a_4$ is local and compactly supported; the chosen $s,d_H$-stable subcomplex $\mathcal K_n$ contains it, and every element of $\mathcal K_n^{0,4}$ is an admissible counterterm for this formal scheme.

## Proof

**Given:** [F1], [F2], [F3], [A1], [A2], [A3] and [A4].

1.1 Under the hypotheses of [F3], including [A3] and [A4], the scalar time-ordering input exists as a formal coefficientwise scheme. Fix such a scheme as background. The additional operator $\mathcal W_\hbar$, its nilpotence, and the locality premise in [A1]–[A2] are separate hypotheses not supplied by [F3]. [given, F3, A1, A2, A3, A4]

1.2 Apply $\mathcal W_\hbar$ to the expansion in [A1]. Since $\mathcal W_\hbar^2X=0$, its order-$\hbar^n$ coefficient is the leading operator $s$ applied to $\mathcal A$; all terms from the positive powers of $\hbar$ in $\mathcal W_\hbar$ have order at least $n+1$. Hence $s\mathcal A=0$ as a local functional class modulo total derivatives. [A1, step 1.1, algebra]

1.3 Writing $\mathcal A=\int a_4$, the quotient by compactly supported total derivatives in [F2] turns this equality into the statement that $s a_4$ is $d_H$-exact. Thus $a_4$ is a cocycle in the specified relative local cohomology. [F1, F2, A2, step 1.2]

2.1 If $[a_4]=0$, the quotient definition in [F2], restricted to $\mathcal K_n$, supplies $b_4\in\mathcal K_n^{0,4}$ and $c_3\in\mathcal K_n^{1,3}$ such that $a_4=s b_4+d_Hc_3$. [F2, A2]

2.2 The counterterm $B=\int b_4$ is admissible by [A2]. Replacing $X$ by $X-\hbar^nB$ changes the order-$n$ breaking by $-\int s b_4$, because the leading term of $\mathcal W_\hbar$ is $s$. The remainder is $\int d_Hc_3=0$ by compact support and [F2], so the breaking is canceled. [F2, A1, A2, step 2.1, algebra]

2.3 Conversely, if an admissible local counterterm $B=\int b_4$ cancels the order-$n$ breaking, then $a_4-sb_4$ represents the zero integrated local functional. By the quotient definition in [F2], there is a compactly supported local three-form $c_3$ with $a_4=s b_4+d_Hc_3$. This is exactly the coboundary condition, so $[a_4]=0$. [F2, A2, algebra] ∎


---
id: ex-cyclic-fixed-point-detection-for-s3
kind: example
title: "The cyclic fixed-space data recovers an $S_3$ rational character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-cyclic-fixed-points-detect-rational-representations, def-g-fixed-subspace-of-a-representation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Theorem (4.5.3)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Tammo tom Dieck, Representation Theory, Section 4.4 Example (4.4.5)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Example

Let $1$, $\operatorname{sgn}$, and $\chi_{\mathrm{std}}$ be the usual rational
characters of $S_3$. Their fixed-space dimensions on the cyclic subgroups
$1$, $C_2$, and $A_3$ are

$$\begin{array}{c|ccc} & 1 & C_2 & A_3\\\hline 1 & 1 & 1 & 1\\ \operatorname{sgn} & 1 & 0 & 1\\ \chi_{\mathrm{std}} & 2 & 1 & 0 \end{array}.$$

Hence a character $a\cdot1+b\cdot\operatorname{sgn}+c\cdot\chi_{\mathrm{std}}$
is recovered uniquely from its cyclic fixed-space data.

## Facts & Assumptions

**Given:** The group $S_3$, its cyclic subgroups $1$, $C_2$, and $A_3$, and a rational character $x=a\cdot1+b\cdot\operatorname{sgn}+c\cdot\chi_{\mathrm{std}}$.

[F1] Cyclic fixed-space data determines a rational virtual character ([[cor-cyclic-fixed-points-detect-rational-representations]]).

[F2] For a representation $V$, the fixed subspace $V^H$ is the subspace of vectors fixed by every element of $H$ ([[def-g-fixed-subspace-of-a-representation]]).

[A1] On $S_3$, the one-dimensional sign representation acts trivially on $A_3$ and by $-1$ on a transposition, while the two-dimensional standard representation is fixed pointwise by the identity, has a one-dimensional fixed line for a transposition, and has no nonzero fixed vector for a $3$-cycle.

## Verification

**Proof technique:** direct.

1.1 By [F2] and [A1], the trivial representation has fixed-space dimensions $(1,1,1)$ on $(1,C_2,A_3)$, the sign representation has $(1,0,1)$, and the standard representation has $(2,1,0)$. This is exactly the displayed table. [F2, A1, given, algebra]

2.1 Therefore the cyclic fixed-space data of $x=a\cdot1+b\cdot\operatorname{sgn}+c\cdot\chi_{\mathrm{std}}$ is $\bigl(a+b+2c,\ a+c,\ a+b\bigr)$. The coefficient matrix $\begin{pmatrix} 1 & 1 & 2\\ 1 & 0 & 1\\ 1 & 1 & 0 \end{pmatrix}$ has determinant $2\ne0$, so these three numbers determine $a$, $b$, and $c$ uniquely. [step 1.1, algebra]

3.1 Thus the cyclic fixed-space data recovers the rational character $x$, which is the concrete $S_3$ instance of [F1]. [F1, step 2.1, algebra] ∎

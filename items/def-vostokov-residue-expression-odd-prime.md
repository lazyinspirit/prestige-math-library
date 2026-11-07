---
id: def-vostokov-residue-expression-odd-prime
kind: definition
title: "Odd-prime Vostokov residue expression"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter VI §2 and Chapter VII §§2.1–2.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Frobenius and special logarithm in VI.2, printed pp.215–217; residue pairing in VII.2.1–2.2, printed pp.241–245."
verification:
  precheck: n/a
---

## Definition

Let $p$ be an odd prime, let $n\ge1$, and let $F/\mathbb Q_p$ be a finite
extension containing a primitive $p^n$-th root of unity $\zeta$. Work in a
fixed algebraic closure of $\mathbb Q_p$, and let $\mathbb Q_p^{\mathrm{ur}}$
be its maximal unramified extension. Put
$F_0=F\cap\mathbb Q_p^{\mathrm{ur}}$, let $\mathcal O_0$ be the ring of
integers of $F_0$, and let $\widetilde{\mathcal O}$ be the ring of integers
of the completion of $\mathbb Q_p^{\mathrm{ur}}$. Let $\varphi$ be arithmetic
Frobenius on this unramified extension, so it induces $x\mapsto x^p$ on the
residue field. Fix a uniformizer $\pi$ of $F$, and choose
$z(X)\in1+X\mathcal O_0\llbracket X\rrbracket$ with $z(\pi)=\zeta$. Define the Frobenius
operator on Laurent series by
$$
\Delta\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{pi}.
$$
For a unit $f\in\widetilde{\mathcal O}((X))^\times$, set
$$
\ell(f)=\frac1p\log\left(\frac{f^p}{f^\Delta}\right),
$$
where $f^p/f^\Delta\in1+p\widetilde{\mathcal O}\llbracket X\rrbracket$ and $\log$ is
the convergent $p$-adic logarithm. Put
$s(X)=z(X)^{p^n}-1$ and $V(X)=\frac12+s(X)^{-1}$.
Write $\mathcal O_0\{\!\{X\}\!\}$ for the $p$-adic completion of
$\mathcal O_0((X))$: its elements are two-sided series
$\sum_{i\in\mathbb Z}a_iX^i$ with $a_i\in\mathcal O_0$ and
$a_i\to0$ $p$-adically as $i\to-\infty$. Multiplication uses $p$-adically
convergent coefficientwise convolution. The inverse $s^{-1}$ is taken in
this completed ring, and residues of products are their $X^{-1}$ coefficients. For units
$A,B\in\mathcal O_0((X))^\times$, define
$$
\Phi_{A,B}(X)=\frac{A'(X)}{A(X)}\ell(B(X)) -\ell(A(X))\frac{(B(X)^\Delta)'}{pB(X)^\Delta}.
$$
Here $'$ is formal differentiation with respect to $X$, and
$\operatorname{res}_X(g)$ is the coefficient of $X^{-1}$ in a Laurent
series $g$. The associated formal residue expression is
$$
R_{\pi,z}(A,B)=\operatorname{Tr}_{F_0/\mathbb Q_p} \operatorname{res}_X\bigl(\Phi_{A,B}(X)V(X)\bigr),
$$
where $\operatorname{Tr}_{F_0/\mathbb Q_p}$ is the field trace.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Remarks

The ring convention is essential: ordinary Laurent inversion over $F_0$
need not give the same residue. To see that the displayed expression is
well-defined, reduction modulo $p$ identifies the completed ring modulo $p$
with $k((X))$, where $k$ is the residue field of $F_0$. The series
$\bar z-1$ is nonzero: otherwise $z(\pi)-1\in p\pi\mathcal O_F$, whereas
a primitive $p^n$-th root satisfies
$v_F(\zeta-1)=v_F(p)/(p^{n-1}(p-1))$, since
$\Phi_{p^n}(1+T)$ is Eisenstein at $p$. Consequently
$\bar s=(\bar z-1)^{p^n}$ is nonzero. Lift its inverse in $k((X))$ and use a
$p$-adically convergent geometric series to invert $s$ in the completed ring.

For $f=X^m aU$ with $a$ a unit and $U\in1+X\widetilde{\mathcal O}\llbracket X\rrbracket$,
Frobenius modulo $p$ gives $f^p/f^\Delta\in1+p\widetilde{\mathcal O}\llbracket X\rrbracket$.
The logarithm divided by $p$ has integral coefficients because
$p^{j-1}/j\in\mathbb Z_p$ for $j\ge1$; it converges $p$-adically. The two
logarithmic derivatives in $\Phi_{A,B}$ lie in
$X^{-1}\mathcal O_0\llbracket X\rrbracket$. Hence $\Phi_{A,B}$ and $V$ belong to the
completed ring, so the residue belongs to $\mathcal O_0$ and its trace to
$\mathbb Z_p$. Independence of lifts and uniformizer, and the comparison
with the Hilbert symbol, remain separate theorem obligations.

## Remarks references

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter VII §§2.1–2.4](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

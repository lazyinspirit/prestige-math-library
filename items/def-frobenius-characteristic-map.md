---
id: def-frobenius-characteristic-map
kind: definition
title: "The Frobenius characteristic map"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-class-function-and-the-space-of-complex-class-functions
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
  - thm-centralizer-cardinality-from-cycle-type
  - cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
  - def-finite-symmetric-group-and-permutation-notation
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.2), printed p. 113"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §3.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§3.2, printed pp. 27–30"
---

## Definition

Fix $n\ge0$ and let $\mathrm{cf}(S_n)$ be the complex vector space of class
functions on $S_n$
([[def-class-function-and-the-space-of-complex-class-functions]]). For
$f\in\mathrm{cf}(S_n)$ and a partition $\rho\vdash n$ let $f(\rho)$ denote the
common value of $f$ on permutations of cycle type $\rho$, which is well defined
because cycle type determines the conjugacy class
([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]). Let

$$z_\rho:=\prod_{i\ge1}i^{m_i(\rho)}m_i(\rho)!,$$

where $m_i(\rho)$ is the number of parts of $\rho$ equal to $i$; this is the
order of the centralizer of an element of cycle type $\rho$
([[thm-centralizer-cardinality-from-cycle-type]]), so $z_\rho$ is a positive
integer. The **Frobenius characteristic** of $f$ is

$$\operatorname{ch}(f):=\sum_{\rho\vdash n}f(\rho)\,\frac{p_\rho}{z_\rho}\in\Lambda_{\mathbb C}^n,\qquad \Lambda_{\mathbb C}:=\mathbb C\otimes_{\mathbb Z}\Lambda .$$

The sum is finite and well defined because $\{p_\rho:\rho\vdash n\}$ is a
$\mathbb Q$-basis of $\Lambda_{\mathbb Q}^n$
([[prop-power-sums-form-a-rational-not-integral-stable-basis]]); equivalently
the family $\{p_\rho/z_\rho:\rho\vdash n\}$ is a $\mathbb Q$-basis of
$\Lambda_{\mathbb Q}^n$ and is orthogonal for the Hall form, with
$\langle p_\rho/z_\rho,p_\sigma/z_\sigma\rangle_H=\delta_{\rho\sigma}/z_\rho$
([[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]). The codomain is
$\Lambda_{\mathbb C}$, not $\Lambda_{\mathbb Q}$: for an arbitrary complex class
function the coefficients $f(\rho)/z_\rho$ are complex. If all values of $f$
lie in $\mathbb Q$, then $\operatorname{ch}(f)\in\Lambda_{\mathbb Q}^n$; the
dictionary theorems proved later on this page show that every virtual character
of $S_n$ is rational-valued, and in fact integral-valued, so that its
characteristic lies in the integral lattice $\Lambda^n$.

Writing $\mathrm{cf}_S:=\bigoplus_{n\ge0}\mathrm{cf}(S_n)$, the map
$\operatorname{ch}:\mathrm{cf}_S\to\Lambda_{\mathbb C}$ is defined degreewise by
the displayed formula on each $\mathrm{cf}(S_n)$. It is $\mathbb C$-linear on
each summand, because evaluation $f\mapsto f(\rho)$ and scalar multiplication
are linear. Its restriction to the character ring
$R_S=\bigoplus_{n\ge0}R(S_n)$ is the Frobenius characteristic dictionary
studied in the remaining items of this page. No choice principle is used.

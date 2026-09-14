---
id: def-minimal-walk-weights-and-coherent-functions
kind: definition
title: Minimal-walk weights, labelled lower traces, and the functions e-beta
status: draft
origin: pipeline
deps:
  - def-c-sequences-and-minimal-walk-traces-on-omega-one
  - thm-solovay-stationary-partition
  - thm-cantor-powerset
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 2, Facts 3--5 and preceding definitions, printed pp. 8--9"
      url: https://arxiv.org/pdf/math/0501524
---

## Definition

Work in ZFC and retain the fixed $C$-sequence and traces from
[[def-c-sequences-and-minimal-walk-traces-on-omega-one]].  Write $2^\omega$ for
Cantor space and $C(2^\omega,\omega)$ for the continuous maps from Cantor space
to discrete $\omega$.  Such a map has finite image by compactness and is
constant on the cells of a finite clopen partition.  Every clopen subset of
Cantor space is a finite union of basic cylinders, so there are only countably
many such maps.

Use [[thm-solovay-stationary-partition]] to partition $\omega_1$ into countably
many stationary sets and fix a sequence
$\langle w_\xi:\xi<\omega_1\rangle$ in which every member of
$C(2^\omega,\omega)$ occurs on a stationary set.  Cantor's theorem
[[thm-cantor-powerset]], together with AC's comparison of cardinals, gives an
injection $\omega_1\to2^\omega$; fix pairwise distinct
$\langle z_\alpha:\alpha<\omega_1\rangle$.  These two simultaneous selections,
and the stationary partition's ZFC proof, account for the
[[def-axiom-of-choice]] dependency.

Suppose $\alpha<\beta$ and write the walk and its running maxima as

$$\beta=\beta_0>\cdots>\beta_n=\alpha,\qquad m_0\leq\cdots\leq m_{n-1}.$$

For $\theta\in L(\alpha,\beta)$ let $i(\theta)$ be the least $i<n$ with
$m_i=\theta$.  The **labelled lower trace**

$$\mu(\alpha,\beta):L(\alpha,\beta)\longrightarrow C(2^\omega,\omega)$$

is defined by $\mu(\alpha,\beta)(\theta)=w_{\beta_{i(\theta)}}$.  Thus the label
at a repeated running maximum is the label from its first occurrence.  For
$\xi<\omega_1$, its evaluated form is the integer-valued function

$$\mu(\alpha,\beta;\xi)(\theta)=\mu(\alpha,\beta)(\theta)(z_\xi).$$

On the diagonal, $\mu(\alpha,\alpha)$ is the empty function.  In recursive
language, the new minimum of the lower trace receives label $w_\beta$, and all
strictly larger lower-trace points retain the labels from the next walk node.
Consequently, whenever traces concatenate under the separation hypothesis, the
labelled traces concatenate with the same restrictions; and for
$0<\xi<\delta$,

$$\mu(\xi,\delta)(\min L(\xi,\delta))=w_\delta.$$

For $\alpha\leq\beta$, the **maximal weight** is

$$\rho_1(\alpha,\alpha)=0,\qquad \rho_1(\alpha,\beta)=\max\{|C_\zeta\cap\alpha|:\zeta\in\operatorname{Tr}(\alpha,\beta)\}.$$

This is a natural number because the trace and every displayed intersection
are finite.  Equivalently, if
$\beta'=\min(C_\beta\setminus\alpha)$, then

$$\rho_1(\alpha,\beta)=\max\bigl(|C_\beta\cap\alpha|,\rho_1(\alpha,\beta')\bigr).$$

Finally define

$$e_\beta:\beta\longrightarrow\omega,\qquad e_\beta(\alpha)=\rho_1(\alpha,\beta).$$

The terms “coherent” and “finite-to-one” are conclusions of the next lemma,
not assumptions smuggled into this definition.

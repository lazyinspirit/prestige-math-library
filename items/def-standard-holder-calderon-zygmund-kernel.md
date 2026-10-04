---
id: def-standard-holder-calderon-zygmund-kernel
kind: definition
title: "Standard (Hölder) Calderón–Zygmund kernels"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.2, conditions (5.3.10)–(5.3.12) and the comparison sentence, printed p. 359"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§2, Definition 2.1 and Remarks 2.3, printed pp. 6–7"
---

## Definition

Let $k$ be a Calderón–Zygmund kernel with constants $A_1,A_2$ in the sense of
[[def-calderon-zygmund-kernel-and-principal-value-operator]]. Fix an exponent
$0<\delta\le1$. The kernel is **standard $\delta$-Hölder** with constant
$A_2'<\infty$ when
$$|k(x-y)-k(x)|\le A_2'\,\frac{|y|^\delta}{|x|^{n+\delta}}\qquad\text{whenever }|x|\ge2|y|>0. \qquad (1)$$
Condition (1) is a pointwise estimate on the first difference of $k$ at the
scale $|y|$; it is stated only on the regime $|x|\ge2|y|>0$, where the two
arguments $x$ and $x-y$ stay in the punctured space $\mathbb R^n\setminus\{0\}$
and at comparable distance from the origin. The exponent is kept explicit and may
be any number in $(0,1]$; the constant $A_2'$ may depend on $\delta$ and on
$k$. A Calderón–Zygmund operator whose kernel is standard $\delta$-Hölder is
called a **standard-kernel Calderón–Zygmund operator**.

The pointwise condition (1) is a sufficient hypothesis for Hörmander's integral
condition (2) of the base definition: the next item proves that every standard
$\delta$-Hölder kernel is a Calderón–Zygmund kernel in the sense of
[[def-calderon-zygmund-kernel-and-principal-value-operator]], with the integral
constant controlled by $A_2'$. No converse is claimed: a kernel satisfying
Hörmander's integral condition need not satisfy the pointwise estimate (1), and
the two hypotheses are recorded separately so that each theorem can invoke
exactly the one it uses. Likewise no $L^2$ boundedness, no principal-value
existence, and no cancellation of spherical means is asserted by this
definition. No choice principle is used.

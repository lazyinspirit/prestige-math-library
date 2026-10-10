---
id: lem-sr-dust-conservation-equivalence
kind: lemma
title: "Dust: conservation of rho n tensor n is equivalent to continuity and inertial flow"
status: draft
origin: pipeline
domain: mathematics
deps: [thm-sr-proper-time-and-observer-decomposition, def-ck-tensor-field-on-minkowski-space, def-flat-covariant-derivative-on-affine-minkowski-space, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model, cor-zero-derivative-implies-constant]
dependency_roles:
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $\Omega\subseteq A$ be open, let $\rho:\Omega\to\mathbb R$ be $C^1$ with $\rho>0$, let $n:\Omega\to V$ be a $C^1$ field which is future timelike and satisfies $\eta(n,n)=-1$ everywhere (a future unit timelike field, [[thm-sr-proper-time-and-observer-decomposition]]\,(c)), and set $T^{ab}:=\rho\,n^an^b$ (a $C^1$ symmetric $(2,0)$ field). Then, on $\Omega$, (a) $\partial_aT^{ab}=0$ if and only if both $\partial_a(\rho n^a)=0$ (continuity) and $n^a\partial_an^b=0$ (inertial flow); (b) if $\rho\ge0$ is allowed to vanish, the implication $\partial_aT^{ab}=0\Rightarrow n^a\partial_an^b=0$ is asserted only on the open set $\{\rho>0\}$, and no assertion is made where $\rho=0$; (c) Under the conservation hypothesis $\partial_aT^{ab}=0$ in (a), if $J$ is an interval and $x:J\to\Omega$ is a $C^2$ curve with $x'(s)=n(x(s))$ for all $s$ (an integral curve of $n$), then $x''(s)=0$: the flow lines of an inertial unit field are affine straight lines in the affine structure of $A$. For the nonnegative-density branch in (b), the same conclusion holds for an integral curve whose image lies in $\{\rho>0\}$, under conservation there. The lemma is the exact mathematical content of the dust equations; it asserts no matter model, no interaction and no empirical fact. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$ with fixed inertial chart $x$ and coordinate partial derivatives $\partial_a$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-directional-and-partial-derivatives]]), an open $\Omega\subseteq A$, $C^1$ fields $\rho:\Omega\to\mathbb R$ and $n:\Omega\to V$ with $\eta(n,n)=-1$; $n_a:=\eta_{ab}n^b$ and indices are raised and lowered with the constant $\eta$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(c)). For a $C^1$ field $n$ the expression $n^a\partial_an^b$ is the coordinate form of the flat covariant derivative $\nabla_nn$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]]). For a $C^1$ symmetric type-$(2,0)$ field $T$ one writes $f^b=\partial_aT^{ab}$ and calls $T$ conserved when $f=0$ ([[def-ck-tensor-field-on-minkowski-space]]).

[F1] Product rule for coordinate partial derivatives of products of $C^1$ functions: $\partial_a(\rho n^an^b)=(\partial_a\rho)n^an^b+\rho(\partial_an^a)n^b+\rho n^a\partial_an^b$. ([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]])

[F2] If $I\subseteq\mathbb R$ is an interval and $g:I\to\mathbb R$ is continuous on $I$ and differentiable at every interior point with $g'=0$ there, then $g$ is constant on $I$. ([[cor-zero-derivative-implies-constant]])

[F3] Chain rule: a $C^1$ curve composed with a $C^1$ field is $C^1$ and its derivative is obtained by composing the derivative of the field with the curve derivative; concretely $\frac{d}{ds}n^b(x(s))=\partial_an^b(x(s))\,x'^a(s)$. ([[thm-chain-rule-for-total-derivatives]])

## Proof

**Proof technique:** direct.

1.1 Algebraic identity. Since $\rho$ and $n$ are $C^1$, [F1] gives $\partial_aT^{ab}=\partial_a(\rho n^an^b)=C\,n^b+\rho\,n^a\partial_an^b$ with $C:=\partial_a(\rho n^a)$, the continuity expression. [F1, given]

1.2 Contraction identity. Because $n_bn^b=\eta(n,n)=-1$ is constant, its derivative vanishes: $0=\partial_a(n_bn^b)=2n_b\partial_an^b$, hence multiplying by $n^a$ and summing, $n^an_b\partial_an^b=0$; likewise $n_bC\,n^b=-C$ and $n_b\,n^a\partial_an^b=0$. [given]

2.1 Forward direction of (a) and clause (b). Assume $\partial_aT^{ab}=0$ on $\Omega$. Contracting the identity of step 1.1 with $n_b$ and using step 1.2 gives $0=C\,n_bn^b+\rho\,n_bn^a\partial_an^b=-C$, hence $C=0$. Substituting back gives $\rho\,n^a\partial_an^b=0$ for every $b$. If $\rho>0$ everywhere, division by $\rho$ gives $n^a\partial_an^b=0$ on $\Omega$; if only $\rho\ge0$ is assumed, the same conclusion holds on the open set $\{\rho>0\}$ and no claim is made where $\rho=0$. [step 1.1, step 1.2]

2.2 Reverse direction of (a). Conversely, if $C=\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$ on $\Omega$, then step 1.1 gives $\partial_aT^{ab}=0$ on $\Omega$. [step 1.1]

3.1 Clause (c). Let $x:J\to\Omega$ be a $C^2$ curve with $x'(s)=n(x(s))$. By [F3], $x''^b(s)=\partial_an^b(x(s))\,x'^a(s)=n^a\partial_an^b(x(s))$, which vanishes under the conservation hypothesis by step 2.1 (or, in the nonnegative-density branch, at every $s$ with $x(s)\in\{\rho>0\}$ by step 2.1 applied there). Hence every component $(x^b)'$ has zero derivative at every interior point of $J$, and [F2] gives that $(x^b)'$ is constant; applying [F2] to the function $s\mapsto x^b(s)-x^b(s_0)-(x^b)'(s_0)(s-s_0)$, whose derivative vanishes, gives $x^b(s)=x^b(s_0)+(x^b)'(s_0)(s-s_0)$ for all $s\in J$ and every $b$. Thus $x$ is an affine straight line and $x''=0$ on $J$. [F2, F3, step 2.1]

4.1 Steps 2.1 and 2.2 prove (a), step 2.1 proves the restricted implication (b), and step 3.1 proves (c) and its branch on $\{\rho>0\}$. The argument is a pointwise component computation with the product rule and the constancy of $\eta(n,n)$; it asserts no matter model, no interaction, no dynamics of $\rho$ beyond the displayed equations and no empirical fact, and it uses no choice principle. [step 2.1, step 2.2, step 3.1] ∎

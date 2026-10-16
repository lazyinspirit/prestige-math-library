---
id: thm-qc-solovay-kitaev-error-and-resource-bound
kind: theorem
title: Solovay–Kitaev Error and Resource Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-qc-inverse-closed-dense-su2-gate-set
  - alg-qc-solovay-kitaev-unitary-compiler
  - lem-qc-su2-balanced-commutator
  - lem-qc-commutator-error-cancellation
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-integer-part
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §§2–4, theorem and recurrence, PDF pp. 2–10
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29, finite-gate approximation
---

## Statement

For a fixed inverse-closed dense $G\subset SU(2)$ and a certified base net of
radius $0<\eta_0<64^{-2}$ and a target $U\in SU(2)$, the level recursion
$\operatorname{Compile}(U,J)$ of
[[alg-qc-solovay-kitaev-unitary-compiler]] returns, for every real
$0<\varepsilon\le\eta_0$, a word $W$ with
$\|U-W\|\le\varepsilon$, where $J$ is the least nonnegative integer
with $\eta_J\le\varepsilon$. For a real tolerance this means selecting
$J$ by ideal exact-real comparisons and calling the level subroutine
directly; the algorithm's top-level tolerance input is rational.
The level errors may be chosen as
$$\eta_j=64^{-2}(64^2\eta_0)^{(3/2)^j}.$$
The word length is at most $L_0 5^j$ at level $j$, hence
$O(\log^{\log_{3/2}5}(1/\varepsilon))=O(\log^{3.97}(1/\varepsilon))$.
With shared recursive words, the exact-real arithmetic count is
$O(\log^{\log_{3/2}3}(1/\varepsilon))=O(\log^{2.71}(1/\varepsilon))$;
printing the expanded word takes $O(\log^{3.97}(1/\varepsilon))$ time.
The latter are exact-real arithmetic bounds, not bit-complexity bounds.

## Facts & Assumptions

**Given:** The fixed gate package and base-net certificate, a target $U\in SU(2)$, and a real $0<\varepsilon\le\eta_0<64^{-2}$, with ideal exact-real comparisons for selecting the level.

[F1] The compiler uses a level-zero word within $\eta_0$ and at each later level uses one lower-level approximation to $U$ and two to the balanced commutator factors ([[alg-qc-solovay-kitaev-unitary-compiler]]).

[F2] If $\|D-I\|\le\eta\le1/16$, there are $V,W$ within $\sqrt\eta$ of $I$ whose commutator is within $40\eta^{3/2}$ of $D$ ([[lem-qc-su2-balanced-commutator]]).

[F3] Approximating each of $V,W$ within $\eta$ changes their commutator by at most $5\eta^{3/2}$ when both are within $\sqrt\eta$ of $I$ ([[lem-qc-commutator-error-cancellation]]).

[F4] Every compiled gate word is unitary because its letters lie in $G\subset SU(2)$ ([[def-qc-inverse-closed-dense-su2-gate-set]]). From the operator-norm definition ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]), left multiplication by a unitary preserves norm because it preserves vector norms, and right multiplication preserves norm because it maps the unit sphere bijectively to itself.

[F5] $\log$ denotes the natural logarithm, the inverse of the positive real exponential; it is strictly increasing, $\log1=0$, and it obeys the product and reciprocal laws. For $b>0$, $b\ne1$, set $\log_b x:=\log x/\log b$. For $x>0$ and real $t$, use $x^t:=\exp(t\log x)$; the logarithm product law and inverse relation imply $(xy)^t=x^ty^t$ and $(x^s)^t=x^{st}$ for positive $x,y$ and real $s,t$. Also $\lceil y\rceil:=-\lfloor-y\rfloor$, where $\lfloor\cdot\rfloor$ is the integer part ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[lem-integer-part]]).

## Proof


1.1 We prove by induction that level $j$ has error at most $\eta_j$. The base net gives error at most $\eta_0$ at level zero. Suppose the lower-level word $A$ has error at most $\eta_{j-1}$. Since $A$ is unitary, right multiplication by $A^*$ maps the unit sphere bijectively to itself; the operator-norm definition in [F4] therefore gives $\|D-I\|=\|(U-A)A^*\|=\|U-A\|\le\eta_{j-1}$. [F1, F4, given, algebra]

2.1 By [F2] choose $V,W$ within $\sqrt{\eta_{j-1}}$ of $I$ whose exact commutator differs from $D$ by at most $40\eta_{j-1}^{3/2}$. The level-$(j-1)$ words $B,C$ approximate $V,W$ within $\eta_{j-1}$, so [F3] bounds the additional commutator error by $5\eta_{j-1}^{3/2}$. The combined bound follows from the operator-norm triangle inequality, which follows from [F4] and the vector triangle inequality. If $C_0=BCB^*C^*A$, then $U-C_0=(D-BCB^*C^*)A$; right multiplication by the unitary $A$ preserves norm by [F4]. Thus the returned word approximates $U$ to at most $45\eta_{j-1}^{3/2}\le64\eta_{j-1}^{3/2}=\eta_j$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Set $q_j=64^2\eta_j$ and $q_0=64^2\eta_0\in(0,1)$. The recurrence gives $q_{j+1}=q_j^{3/2}$; with the positive-real-power convention in [F5], induction yields $q_j=q_0^{(3/2)^j}$ and hence the displayed error formula. Put $q_\varepsilon=64^2\varepsilon\in(0,q_0]$. Since $\log$ is strictly increasing and obeys the reciprocal law [F5], $\eta_j\le\varepsilon$ is equivalent to $$\left(\frac32\right)^j\ge\frac{\log(1/q_\varepsilon)}{\log(1/q_0)}.$$ The ratio is at least $1$, and $\log_{3/2}$ is increasing because $3/2>1$ and $\log$ is strictly increasing. Thus the least nonnegative integer level is $$J=\left\lceil\log_{3/2}\frac{\log(1/(64^2\varepsilon))}{\log(1/(64^2\eta_0))}\right\rceil,$$ with the ceiling convention in [F5]. [F5, step 2.1, algebra]

4.1 The recursive word contains two copies each of the level-$(j-1)$ words $B,C$ and one copy of $A$, so its length is at most $5L_{j-1}$ and hence at most $L_0 5^j$. The recursion tree has three recursive calls per node, so its shared-DAG arithmetic count is $O(3^j)$; expanding and printing the word takes at most $O(5^j)$. Since $j=O(\log\log(1/\varepsilon))$, these are respectively $O(\log^{\log_{3/2}3}(1/\varepsilon))$ and $O(\log^{\log_{3/2}5}(1/\varepsilon))$. [F1, step 3.1, algebra] ∎

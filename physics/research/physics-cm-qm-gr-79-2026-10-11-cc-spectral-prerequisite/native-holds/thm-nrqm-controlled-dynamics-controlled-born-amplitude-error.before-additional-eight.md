---
id: thm-nrqm-controlled-dynamics-controlled-born-amplitude-error
aliases: [nrqm-controlled-dynamics-controlled-born-amplitude-error]
kind: theorem
domain: mathematics
title: "Controlled Born amplitude error"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-l-two-kernels-give-hilbert-schmidt-operators, def-operator-norm, def-bounded-linear-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Born Approximation pp. 211-213 (first Born approximation and its validity condition)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (Neumann series for the scattering amplitude)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]]: real
$V$ bounded with $\operatorname{supp}V\subseteq B_R$, $k>0$, $d\in S^2$, the
compact operator $K_k$, and write $q:=\|K_k\|$. Then:

(a) *Neumann control.* If $q<1$ then $u=(I+K_k)^{-1}e_{\mathrm{inc}}$ satisfies
$$\bigl\|u-e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}\le\frac{q}{1-q}\, \bigl\|e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}.$$

(b) *First Born amplitude.* With
$f_B(\Omega):=-\frac1{4\pi}\int_{B_R}e^{ik(d-\Omega)\cdot y}V(y)\,dy$ one has,
uniformly in $\Omega\in S^2$,
$$\bigl|f_k(\Omega)-f_B(\Omega)\bigr|\le\frac{\|V\|_\infty|B_R|^{1/2}}{4\pi}\, \frac{q}{1-q}\,\bigl\|e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}.$$

(c) *Scaling form.* For $V_\eta:=\eta V$ with $|\eta|\,\|K_k\|<1$ the same
estimate holds with $q$ replaced by $|\eta|q$; therefore a sufficiently weak
coupling, measured by $\|K_k\|$ and not by vague smallness of $k$ or of $V$
alone, gives a controlled Born model.

## Facts & Assumptions

**Given:** the data of the stationary problem, the operator norm $q=\|K_k\|$, and $\Omega\in S^2$.

[F1] Neumann series: if $q<1$ then $(I+K_k)^{-1}=\sum_{n\ge0}(-K_k)^n$ with norm at most $(1-q)^{-1}$, so $u-e_{\mathrm{inc}}=-\sum_{n\ge1}(-K_k)^n e_{\mathrm{inc}}$ has norm at most $\frac q{1-q}\|e_{\mathrm{inc}}\|$ ([[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]], [[def-operator-norm]]).

[F2] Amplitude difference: by the definition of $f_k$ in [[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]] (b), $f_k(\Omega)-f_B(\Omega)=-\frac1{4\pi}\int e^{-ik\Omega\cdot y}V(y)(u-e_{\mathrm{inc}})(y)dy$, so by Cauchy–Schwarz and $|e^{-ik\Omega\cdot y}|=1$ the difference is at most $\frac{\|V\|_\infty|B_R|^{1/2}}{4\pi}\|u-e_{\mathrm{inc}}\|_{L^2(B_R)}$ ([[def-hilbert-space]], algebra).

## Proof

1.1 [Neumann bound] Step (a) is [F1]. [F1]

2.1 [Amplitude error] Inserting step 1.1 into [F2] gives the bound of (b). [step 1.1, F2, algebra]

3.1 [Coupling scaling] For $V_\eta=\eta V$ the kernel of $K_k$ scales linearly, so $\|K_{k,\eta}\|=|\eta|q$ and the Neumann condition reads $|\eta|q<1$; the bounds of steps 1.1 and 2.1 become uniform in $\Omega$ with the stated substitution. [step 2.1, F1, F2, algebra] ∎

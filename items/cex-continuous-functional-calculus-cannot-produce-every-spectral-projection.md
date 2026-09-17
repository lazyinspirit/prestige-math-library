---
id: cex-continuous-functional-calculus-cannot-produce-every-spectral-projection
kind: counterexample
title: Continuous functional calculus cannot produce every spectral projection
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, ex-pvm-of-a-multiplication-operator, ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function, thm-continuous-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, def-l-p-space-as-a-quotient-by-null-functions, def-spectrum-and-resolvent-of-a-bounded-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.7, printed pp.290–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4 and §5, pp.13–20"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement refuted

Assume AC. For $T=M_x$, multiplication by the coordinate on
$L^2([0,1],\lambda)$, there is a continuous $f:[0,1]\to\mathbb C$ with
$f(T)=E([0,\tfrac12])$, where $E$ is the spectral projection valued measure of
$T$.

## Facts & Assumptions

[A1] $T=M_x$ is bounded self-adjoint with $\sigma(T)=[0,1]$; its spectral projections act by $E(B)=M_{\mathbf 1_B}$, and $E([0,1/2])$ is the orthogonal projection onto the classes supported in $[0,1/2]$ ([[ex-pvm-of-a-multiplication-operator]], [[ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function]]).

[A2] The continuous calculus is the restriction of the Borel calculus to continuous functions: for continuous $f$ the operator $f(T)$ of [[thm-continuous-functional-calculus-for-bounded-normal-operators]] satisfies $f(T)=M_{f\circ x}$ ([[ex-pvm-of-a-multiplication-operator]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A3] Multiplication operators in $L^2$: $M_gh=0$ as a class exactly when $gh=0$ almost everywhere, and two continuous functions on $[0,1]$ that agree almost everywhere agree everywhere, because the complement of the closed set on which they agree is open and null ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A4] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** Lebesgue measure on $[0,1]$, the operator $T=M_x$ and the spectral projection $P:=E([0,1/2])=M_{\mathbf 1_{[0,1/2]}}$.

1.1 Suppose, for contradiction, that $f\in C([0,1])$ satisfies $M_{f\circ x}=f(T)=P=M_{\mathbf 1_{[0,1/2]}}$. [A1, A2]

2.1 Evaluating on $h:=\mathbf 1_{[0,1/2]}$, one gets $(f\circ x)h=\mathbf 1_{[0,1/2]}\cdot h=h$; subtracting, $(f-1)h=0$ almost everywhere, so $(f\circ x-1)=0$ almost everywhere on the set $\{h\ne0\}=[0,1/2]$ (modulo a null set), hence $f=1$ on $[0,1/2]$ by continuity. [step 1.1, A3]

2.2 Evaluating on the nonzeroth class $h':=\mathbf 1_{(1/2,1]}$, one gets $(f\circ x)h'=\mathbf 1_{[0,1/2]}\cdot h'=0$, so $f=0$ almost everywhere on $(1/2,1]$ and hence $f=0$ on $(1/2,1]$ by continuity, which forces $f(1/2)=0$. [step 1.1, A3]

3.1 The two evaluations give $f(1/2)=1$ and $f(1/2)=0$ simultaneously, a contradiction. [step 2.1, step 2.2]

4.1 No continuous function on $[0,1]$ can satisfy $f(T)=E([0,1/2])$ for $T=M_x$: the spectral projection of a Borel set with a jump in its indicator is not a continuous-calculus value of $T$. [step 3.1, A4] ∎

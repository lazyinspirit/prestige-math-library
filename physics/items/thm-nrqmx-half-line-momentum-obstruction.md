---
id: thm-nrqmx-half-line-momentum-obstruction
kind: theorem
title: A symmetric half-line momentum with no self-adjoint extension
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-nrqmx-extension-data
  - thm-nrqmx-von-neumann-extension
  - thm-algebra-of-derivatives
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-weak-derivative-ac-representative
  - lem-nrqm-intervals-integration-by-parts
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-weak-derivative-of-a-locally-integrable-function
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - thm-closable-iff-adjoint-domain-is-dense
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - thm-c1-lipschitz-ac-bv-hierarchy
  - def-absolutely-continuous-function
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-derivative-of-exponential
  - thm-chain-rule
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-nrqmx-extension-data: mathematical-premise
  thm-nrqmx-von-neumann-extension: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-closable-iff-adjoint-domain-is-dense: mathematical-premise
  cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives: mathematical-premise
  lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous: mathematical-premise
  thm-c1-lipschitz-ac-bv-hierarchy: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 2.6, Problem 2.27, printed p.84: exercise for A₀ = +iD on C_c^∞(0,∞); the sign change to this item's −iD is explained below"
    - title: "Ovidiu Costin, Functional Analysis and Elements of Resurgence Theory"
      url: "https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf"
      locator: "Section 11.3, Theorems 11.3.6–11.3.7 and the unequal-index obstruction, printed pp.82–84"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. On
$H=L^2(0,\infty;\mathbb C)$ let $S_c f=-iDf$ with domain
$D(S_c)=C_c^\infty(0,\infty)$. Its closure $\overline S_c$ has deficiency
indices $(n_+,n_-)=(1,0)$ at reference scale $E_*=1$, and therefore has no
self-adjoint extension on $H$.

## Statement references

[[def-nrqmx-extension-data]]

[[thm-nrqmx-von-neumann-extension]]

## Facts & Assumptions

**Given:** The half-line Hilbert space and operator in the Statement.

[A1] Countable Choice, the Axiom of Choice, and Dependent Choice are the
hypotheses of the interval Sobolev and integration-by-parts suppliers.
[[def-countable-choice]] [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] $H^1(0,\infty)$ consists of the $L^2$ classes with weak derivative in
$L^2$. On each bounded subinterval the class has the unique absolutely
continuous representative of
[[def-nrqm-intervals-hilbert-sobolev-spaces]] and
[[lem-nrqm-intervals-weak-derivative-ac-representative]]. Uniqueness makes
these representatives agree on overlaps, defining one locally absolutely
continuous representative on $(0,\infty)$. The half-line integration-by-parts
identity is clause (d) of [[lem-nrqm-intervals-integration-by-parts]].

[F2] The adjoint is characterized by
$\langle S_cf,g\rangle=\langle f,S_c^*g\rangle$ on the dense domain
$C_c^\infty(0,\infty)$; a densely defined symmetric operator is closable and
the adjoint of its closure equals its adjoint
([[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[thm-closable-iff-adjoint-domain-is-dense]]). The weak derivative convention
is the test-function identity of
[[def-weak-derivative-of-a-locally-integrable-function]].

[F3] Absolute continuity on a compact real interval means that small total
length of a finite family of pairwise interior-disjoint subintervals forces
small total endpoint increment; complex-valued absolute continuity is
componentwise ([[def-absolutely-continuous-function]],
[[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).
For real $x$, the complex exponential equals the real exponential, and the
complex entire theorem gives its derivative as itself
([[thm-complex-exponential-is-entire-with-derivative-itself]],
[[thm-complex-exponential-addition-and-real-extension]]). The real derivative
theorem and real chain rule give $(e^x)'=e^x$ and $(e^{-x})'=-e^{-x}$
([[thm-derivative-of-exponential]], [[thm-chain-rule]]). The $H^1$
representative's classical derivative equals
its weak derivative a.e., and its increments are the integrals of that
derivative, by the representative result cited above.
On each compact interval, the real exponential is $C^1$ with bounded
derivative, hence Lipschitz and absolutely continuous by
[[thm-c1-lipschitz-ac-bv-hierarchy]]. The exponential times the representative
is then absolutely continuous by
[[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]]
applied to real and imaginary parts. At every point where the representative
is differentiable, the real product rule from
[[thm-algebra-of-derivatives]] gives the derivative of that product; hence the
formula holds almost everywhere. For a real absolutely continuous function,
zero derivative almost everywhere implies constancy by the fundamental
theorem of calculus
([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]);
apply this to the real and imaginary parts for complex-valued products.

[F4] For a closed densely defined symmetric operator, a self-adjoint
extension exists exactly when its two deficiency indices agree
([[def-nrqmx-extension-data]], [[thm-nrqmx-von-neumann-extension]]).

[F5] $C_c^\infty(0,\infty)$ is dense in $L^2(0,\infty)$ by the smooth-test
density theorem on open subsets of $\mathbb R$
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

## Proof
**Given:** The hypotheses of the Statement.

1.1 By [F5], the test functions are dense in $L^2(0,\infty)$. For
$f,g\in C_c^\infty(0,\infty)$, integration by parts [F1] gives
$\langle S_cf,g\rangle=\langle f,S_cg\rangle$ with no endpoint terms.
Thus $S_c$ is symmetric, so it is closable by [F2], and
$\overline S_c^{\,*}=S_c^*$. [A1, F1, F2, F5]

2.1 If $g\in H^1(0,\infty)$, [F1] gives
$\langle S_cf,g\rangle=\langle f,-iDg\rangle$ for every test $f$, so
$g\in D(S_c^*)$ and $S_c^*g=-iDg$. Conversely, if $g\in D(S_c^*)$ and
$h=S_c^*g$, testing the adjoint identity against every
$f\in C_c^\infty(0,\infty)$ says distributionally $Dg=i h\in L^2$.
Together with $g\in L^2$ this is exactly $g\in H^1$. Hence
$D(S_c^*)=H^1(0,\infty)$ and $S_c^*=-iD$. [A1, F1, F2, step 1.1]

3.1 By step 2.1, $g\in N_+(\overline S_c;1)$ exactly when
$g\in H^1$ and $-iDg=ig$, that is, $Dg=-g$. Its absolutely continuous
representative satisfies
$(e^xg(x))'=e^x(g(x)+g'(x))=0$ almost everywhere by the product rule in
[F3] and $g'=-g$. On each bounded subinterval the absolutely continuous
fundamental theorem in [F3] makes $e^xg(x)$ constant; overlap consistency
makes it one constant $c$ on the whole half-line. Thus $g(x)=ce^{-x}$. Since
$\int_0^\infty e^{-2x}\,dx=1/2$, this is in $L^2$ for every $c$, and
its classical derivative $-ce^{-x}$ is also in $L^2$ and is its weak
derivative by [F1]. Thus every such function is
in $H^1$ and satisfies the kernel equation, so
$N_+=\{ce^{-x}:c\in\mathbb C\}$ is one-dimensional. [A1, F1, F3, step 2.1, algebra]

4.1 A vector $g\in N_-(\overline S_c;1)$ satisfies $Dg=g$ by step 2.1, so
$(e^{-x}g(x))'=e^{-x}(g'(x)-g(x))=0$ almost everywhere by [F3] and
$g'=g$. On each bounded subinterval the absolutely continuous fundamental
theorem in [F3] makes $e^{-x}g(x)$ constant; overlap consistency gives
one $c\in\mathbb C$ on the whole half-line, so $g(x)=ce^x$. If $c\ne0$,
$\int_0^R|ce^x|^2dx=|c|^2(e^{2R}-1)/2\to\infty$, contradicting
$g\in L^2(0,\infty)$. Hence $c=0$, $N_- =\{0\}$ and $n_-=0$.
Combining step 3.1's positive-deficiency calculation with this result and the
common adjoint from step 1.1 gives the closure's indices $(1,0)$.
[A1, F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 The indices are unequal, so [F4] implies that $\overline S_c$ has no
self-adjoint extension on $H$. This proves the Statement.
[A1, F4, step 3.1, step 4.1] ∎

## Remarks

Teschl's Problem 2.27 uses $A_0=+iD$ on the same test-function domain,
whereas $S_c=-A_0$. For the convention here,
$N_+(A;1)=\ker(A^*-iI)$ and $N_-(A;1)=\ker(A^*+iI)$. The adjoint
definition gives $S_c^*=-A_0^*$, so
$N_+(S_c;1)=N_-(A_0;1)$ and $N_-(S_c;1)=N_+(A_0;1)$. Thus negating the
operator swaps the two deficiency indices. The local kernel calculations in
steps 3.1 and 4.1 establish $(1,0)$ for $-iD$ directly; the exercise is a
locator for the related $+iD$ problem, not a substitute for this sign check.

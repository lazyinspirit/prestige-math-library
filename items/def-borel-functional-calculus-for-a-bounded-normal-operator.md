---
id: def-borel-functional-calculus-for-a-bounded-normal-operator
kind: definition
title: Borel functional calculus for a bounded normal operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-continuous-functional-calculus-produces-a-regular-pvm, thm-continuous-functional-calculus-properties, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, def-hilbert-space-adjoint, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, def-measurable-function-between-measurable-spaces, def-projection-valued-measure, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.75, printed pp.291–293"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Theorem 5.6, pp.17–20"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$ and let $E$ be its spectral projection valued measure on the Borel
$\sigma$-algebra of $\sigma(T)$, the unique regular projection valued measure
with $\int z\,dE(z)=T$
([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]). For a
**bounded Borel function** $f:\sigma(T)\to\mathbb C$, that is a bounded
$\Sigma$-measurable function on the Borel $\sigma$-algebra of $\sigma(T)$
([[def-measurable-function-between-measurable-spaces]]), define the **Borel
functional calculus** of $T$ at $f$ by

$$f(T):=\Phi_E(f)=\int_{\sigma(T)}f\,dE,$$

the bounded Borel integral of $f$ against $E$ from
[[thm-bounded-borel-pvm-integral]]. The map $f\mapsto f(T)$ from bounded Borel
functions on $\sigma(T)$ to $\mathcal B(H)$ is the **bounded Borel functional
calculus** of $T$.

**Well-definedness and consistency.** The operator $f(T)$ is well defined
because the spectral projection valued measure $E$ of $T$ is unique: if $E'$
were another regular projection valued measure with $\int z\,dE'=T$, then
$E'=E$. The construction agrees with the continuous calculus on continuous
functions, $\Phi_E(f)=f(T)$ for $f\in C(\sigma(T))$, by the displayed clause of
the spectral theorem. It inherits the algebraic behaviour of the projection
valued measure integral: $f(T)$ is complex-linear in $f$, unital with
$\mathbf 1(T)=I$, multiplicative, star-preserving with
$\overline f(T)=f(T)^*$, norm bounded by $\|f(T)\|\le\|f\|_\infty$, strongly
continuous for bounded Borel $f_n,f$ when $f_n\to f$ pointwise $E$-almost everywhere and
$\sup_n\|f_n\|_\infty<\infty$, as supplied by [[thm-pvm-integral-is-a-star-homomorphism]]. In particular
$\mathbf 1_B(T)=E(B)$ for every Borel set $B\subseteq\sigma(T)$, and the norm of
$f(T)$ is the $E$-essential supremum of $f$
([[thm-bounded-borel-pvm-integral]]).


**Commutation.** Every bounded $S$ commuting with $T$ and $T^*$ commutes
with every $f(T)$.  Write $\pi(g)=g(T)$ for the continuous calculus. The
construction in [[lem-continuous-functional-calculus-produces-a-regular-pvm]]
provides finite regular complex measures $\mu_{x,y}$ with
$\mu_{x,y}(B)=\langle E(B)x,y\rangle$ and
$\int g\,d\mu_{x,y}=\langle\pi(g)x,y\rangle$ for continuous $g$; its PVM
is the present $E$ by uniqueness. The continuous commutant property
([[thm-continuous-functional-calculus-properties]]) and the defining adjoint
identity ([[def-hilbert-space-adjoint]]) give
$$\int g\,d\mu_{Sx,y}=\langle\pi(g)Sx,y\rangle=\langle S\pi(g)x,y\rangle=\langle\pi(g)x,S^*y\rangle=\int g\,d\mu_{x,S^*y}.$$
Uniqueness of the finite regular complex representing measure on the compact
spectrum, where $C_0(\sigma(T))=C(\sigma(T))$, gives
$\mu_{Sx,y}=\mu_{x,S^*y}$
([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]).
For bounded Borel $f$, the bounded-integral pairing identity therefore yields
$$\langle f(T)Sx,y\rangle=\int f\,d\mu_{Sx,y}=\int f\,d\mu_{x,S^*y}=\langle Sf(T)x,y\rangle.$$
Testing the difference against itself proves $f(T)S=Sf(T)$. These properties are collected in
[[thm-borel-functional-calculus-for-bounded-normal-operators]].

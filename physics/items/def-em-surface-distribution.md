---
id: def-em-surface-distribution
kind: definition
title: "Surface distributions and interfacial jumps"
status: draft
origin: pipeline
domain: mathematics
deps: [def-distribution, def-test-function-space-d-of-an-open-set, def-fixed-support-test-function-frechet-space, thm-local-finite-order-characterization-of-distributions, def-regular-distribution-from-a-locally-integrable-function, def-surface-integral-on-a-compact-c-one-hypersurface, lem-surface-integral-is-independent-of-c-one-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-bounded-piecewise-c-one-euclidean-domain, def-embedded-submanifold-and-slice-chart, def-codimension-and-hypersurface, def-ck-euclidean-maps-and-diffeomorphisms, thm-graph-of-continuous-function-on-a-compact-set-has-content-zero, lem-c-one-images-of-content-zero-compact-sets-have-content-zero, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-compact-null-iff-content-zero-in-rn, def-countable-choice]
dependency_roles:
  def-distribution: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-codimension-and-hypersurface: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-graph-of-continuous-function-on-a-compact-set-has-content-zero: mathematical-premise
  lem-c-one-images-of-content-zero-compact-sets-have-content-zero: mathematical-premise
  def-null-and-content-zero-in-rn: mathematical-premise
  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions: mathematical-premise
  lem-compact-null-iff-content-zero-in-rn: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "S. Dyatlov, Lecture notes for 18.155 (MIT), Chapter 2 and Chapter 3"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014), §1.10, §1.12, §2.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Throughout, assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the surface integral of [[def-surface-integral-on-a-compact-c-one-hypersurface]] and the domains of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]] are developed under that convention.

Let $\Omega\subseteq\mathbb R^3$ be open. Let $S\subset\Omega$ be a compact embedded $C^2$ hypersurface ([[def-codimension-and-hypersurface]], [[def-embedded-submanifold-and-slice-chart]]): every $p\in S$ has an open neighbourhood $U\subseteq\mathbb R^3$ and a $C^2$ diffeomorphism $\varphi:U\to\varphi(U)$ onto an open subset of $\mathbb R^3$ with $\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^2\times\{0\})$, in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]. Such an $S$ is a compact embedded $C^1$ hypersurface, so the surface integral and the surface measure $S(A)=\int_S\mathbf 1_A\,dS$ of [[def-surface-integral-on-a-compact-c-one-hypersurface]] and [[lem-surface-integral-is-independent-of-c-one-boundary-charts]] apply; that measure is finite. The slice-chart definition has no manifold boundary; $S$ has no edge. If $S$ is empty, all surface functionals below are zero and the estimates are read separately without taking a supremum over the empty set.

A **two-sided presentation** of $S$ consists of a continuous unit normal field $n:S\to\mathbb R^3$ together with sides: $n(x)$ is orthogonal to $S$ at $x$ in the sense that $\langle n(x),\gamma'(0)\rangle=0$ for every $C^1$ path $\gamma:(-1,1)\to S$ with $\gamma(0)=x$ and $\lVert n(x)\rVert_2=1$; and $\Omega_-,\Omega_+\subseteq\Omega$ are open sets with

$$\Omega\setminus S=\Omega_-\cup\Omega_+,\qquad \Omega_-\cap\Omega_+=\varnothing,$$

such that for every $x\in S$ there is $\varepsilon=\varepsilon(x)>0$ with $x+sn(x)\in\Omega_+$ for all $0<s<\varepsilon$ and $x+sn(x)\in\Omega_-$ for all $-\varepsilon<s<0$. The normal $n$ points from the side $\Omega_-$ to the side $\Omega_+$; the orientation convention for normals is that of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]].

**The surface distribution $\delta_S$.** For $\psi\in\mathcal D(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]) define

$$\delta_S(\psi):=\int_S\psi\,dS,$$

where the right-hand side is the surface integral of the restriction of $\psi$ to $S$, taken in the sense of [[def-surface-integral-on-a-compact-c-one-hypersurface]]; complex-valued $\psi$ are integrated componentwise in real and imaginary parts. For a continuous **density** $a:S\to\mathbb R$ define

$$a\delta_S(\psi):=\int_S a\,\psi\,dS .$$

Both are complex-linear functionals on $\mathcal D(\Omega)$, and both are distributions: $\delta_S,a\delta_S\in\mathcal D'(\Omega)$ ([[def-distribution]]).

**Jumps across $S$.** Let $F:\Omega\setminus S\to\mathbb R^3$ be a field that is of class $C^1$ on $\Omega_-$ and on $\Omega_+$ separately and has one-sided continuous traces: there are continuous maps $F_+,F_-:S\to\mathbb R^3$ with

$$F_+(x)=\lim_{\substack{y\to x\\ y\in\Omega_+}}F(y),\qquad F_-(x)=\lim_{\substack{y\to x\\ y\in\Omega_-}}F(y)$$

for every $x\in S$, the limits taken in $\mathbb R^3$. The **jump of $F$ across $S$** is the continuous map

$$[F]:=F_+-F_-:S\to\mathbb R^3 .$$

No continuity of $F$ across $S$ is assumed or implied; $F$ need not even be defined on $S$, and the two traces may differ.

### Well-definedness and finite order

*The surface functionals are distributions.* Fix a compact $K\subseteq\Omega$ and $\psi\in\mathcal D_K=\{\psi\in\mathcal D(\Omega):\operatorname{supp}\psi\subseteq K\}$ with the seminorm $p_0(\psi)=\sup_K|\psi|$ of [[def-fixed-support-test-function-frechet-space]]. Since $\psi$ vanishes outside $K$ and is continuous, $\sup_S|\psi|\le p_0(\psi)$; and $\int_S|a\psi|\,dS\le\lVert a\rVert_{\infty,S}\sup_S|\psi|\,S(S)$ with $\lVert a\rVert_{\infty,S}<\infty$ by compactness of $S$ and continuity of $a$. Hence

$$|\delta_S(\psi)|\le S(S)\,p_0(\psi),\qquad |a\delta_S(\psi)|\le \lVert a\rVert_{\infty,S}\,S(S)\,p_0(\psi),$$

a finite-order estimate of order $0$ with constants independent of $K$; by the local finite-order characterization ([[thm-local-finite-order-characterization-of-distributions]]) both functionals are distributions. This is the sense in which boundedness on the compact interface and finiteness of the surface measure give continuity of finite order. Linearity is immediate from linearity of the integral; the pairing is complex bilinear with no conjugation, as in [[def-distribution]].

*The field has locally integrable components.* The hypersurface $S$ is a Lebesgue-null set of $\mathbb R^3$: by the slice-chart property it is covered by finitely many compact pieces each of which is, in suitable $C^2$ coordinates, a graph over a compact subset of a coordinate plane, hence has content zero ([[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]]), and each piece has content zero in the ambient coordinates because it is the image under the $C^1$ chart inverse of a compact content-zero set ([[lem-c-one-images-of-content-zero-compact-sets-have-content-zero]]); a finite union of compact content-zero sets is compact and null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]), hence has content zero ([[lem-compact-null-iff-content-zero-in-rn]]), so $S$ has content zero in the sense of [[def-null-and-content-zero-in-rn]]. Now $F$ is continuous on $\Omega\setminus S=\Omega_-\cup\Omega_+$. For each $x\in S$, the two one-sided limits are finite; hence there is a neighbourhood $U_x$ of $x$ on which $|F|$ is bounded on each side (use the defining limit with tolerance $1$ for each of $F_+(x)$ and $F_-(x)$). Away from $S$, continuity also gives a neighbourhood with a finite bound at every point. For a compact $K\subseteq\Omega$, these neighbourhoods cover $K$; take a finite subcover and the maximum of its finitely many bounds. This gives a finite $M_K$ such that $|F|\le M_K$ on $K\setminus S$. Extend $F$ by zero on the null closed set $S$; the extension is measurable because the two side restrictions are continuous, and

$$\int_K\lVert F\rVert_2\le M_K\lambda_3(K)<\infty,$$

the contributions from $K\cap S$ being null. Thus the components of $F$ are locally integrable on $\Omega$ in the sense of [[def-regular-distribution-from-a-locally-integrable-function]], and define a regular distribution; the trace condition is exactly what makes the boundary values $F_\pm$ well-defined continuous functions on $S$, so the jump $[F]$ is continuous and bounded on $S$.

### Conventions and exclusions

The sign convention is fixed by the normal: $n$ points from $\Omega_-$ to $\Omega_+$, so $[F]=F_+-F_-$ is measured in the direction of $n$. This convention is used by the interface-derivative lemma on this page, where $\operatorname{div}F$ and $\operatorname{curl}F$ acquire the surface terms $n\cdot[F]\,\delta_S$ and $n\times[F]\,\delta_S$; reversing $n$ reverses the signs of both sides consistently. The definition assumes a fixed stationary interface $S$: no time dependence of $S$ is part of the data, and the stationary jump formulas are not asserted for moving interfaces. The density $a$ is continuous, so $a\delta_S$ is defined by the displayed integral; no product of two arbitrary distributions, and no product of $\delta_S$ with a merely locally integrable field, is defined here. The definition is stated under $\mathrm{AC}_\omega$ because the surface measure it invokes is; the positivity of the surface measure of nonempty open pieces of $S$, and the finite-order estimates above, are its only uses here.

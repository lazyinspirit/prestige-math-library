---
id: thm-nrqmx-two-dimensional-exchange-holonomy
kind: theorem
domain: mathematics
library: mathematics
title: "Planar two-particle exchange characters and the full-winding phase"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - def-nrqmx-planar-two-particle-configuration-space
  - lem-nrqmx-planar-two-particle-config-fundamental-group
  - thm-nrqmx-schur-weyl-exchange-blocks
  - def-circle-as-real-line-mod-integers
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
  - lem-complex-conjugation-and-modulus-laws
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-quarter-turn-values-and-shift-formulas
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-nrqmx-planar-character-line-bundle
  - thm-nrqmx-planar-character-line-bundle
dependency_roles:
  def-nrqmx-planar-two-particle-configuration-space: mathematical-premise
  lem-nrqmx-planar-two-particle-config-fundamental-group: mathematical-premise
  thm-nrqmx-schur-weyl-exchange-blocks: mathematical-premise
  def-circle-as-real-line-mod-integers: mathematical-premise
  thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  def-column-antisymmetrizer-polytabloid-and-specht-module: mathematical-premise
  def-nrqmx-planar-character-line-bundle: mathematical-premise
  thm-nrqmx-planar-character-line-bundle: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Statement

Let $C_2(\mathbb R^2)$ be the quotient space of two ordered distinct points
in $\mathbb R^2$ by transposition, with basepoint
$q_0=\{(1,0),(-1,0)\}$. A **one-dimensional unitary character** means a group homomorphism
$$\chi:\pi_1(C_2(\mathbb R^2),q_0)\longrightarrow U(1),$$
where $U(1)$ is the multiplicative group of complex numbers of modulus one.
For every such character there is a unique angle modulo $2\pi$ with
$$\chi(n[\gamma])=e^{in\theta}:=\cos(n\theta)+i\sin(n\theta),\qquad n\in\mathbb Z,$$
where $\gamma(t)=\{(\cos\pi t,\sin\pi t),(-\cos\pi t,-\sin\pi t)\}$
is the counterclockwise exchange path and $[\gamma]$ its positive generator.
A full
counterclockwise turn of the relative direction is $2[\gamma]$ and has phase
$e^{2i\theta}$. The character factors through the permutation group
$S_2\cong\mathbb Z/2\mathbb Z$ exactly when $\theta\equiv0$ or $\pi$
modulo $2\pi$; these are the symmetric and antisymmetric exchange characters.
Both sectors occur in $(\mathbb C^2)^{\otimes2}$, but this theorem makes no
physical choice between them. The associated quotient $L_{\chi_\theta}$ is a
flat unitary complex line bundle whose monodromy is $e^{i\theta}$ around the
positive exchange and $e^{2i\theta}$ around a full relative winding.

## Statement references

[[lem-nrqmx-planar-two-particle-config-fundamental-group]]

[[thm-nrqmx-schur-weyl-exchange-blocks]]

[[def-nrqmx-planar-character-line-bundle]]

[[thm-nrqmx-planar-character-line-bundle]]

## Facts & Assumptions

**Given:** The based planar configuration space and its positive generator $[\gamma]$.

[F1] [[lem-nrqmx-planar-two-particle-config-fundamental-group]]: $\pi_1(C_2(\mathbb R^2),q_0)\cong\mathbb Z$ with $[\gamma]$ corresponding to $1$; one full relative turn corresponds to $2$.

[F2] [[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]: every point of the unit circle is $(\cos 2\pi t,\sin 2\pi t)$ for a unique $[t]\in\mathbb R/\mathbb Z$.

[F3] [[def-complex-numbers-and-arithmetic]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]: every $z=a+ib$ has unique real coordinates and $z\overline z=|z|^2=a^2+b^2$, so $|z|=1$ exactly when $(a,b)$ is on the Euclidean unit circle.

[F4] [[thm-sine-and-cosine-addition-formulas]]: the sine and cosine addition formulas hold for all real inputs.

[F5] [[cor-trigonometric-parity-and-pythagorean-identity]]: for real $x$, $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$.

[F6] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field, so $z^2=1$ implies $z=1$ or $z=-1$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos0=1$, $\sin0=0$, $\cos\pi=-1$, and $\sin\pi=0$.

[F8] [[thm-nrqmx-schur-weyl-exchange-blocks]]: on $(\mathbb C^2)^{\otimes2}$ the transposition acts on the Specht factor and as identity on the multiplicity factor; the collective $U(2)$ action acts on the multiplicity factor.

[F9] [[def-column-antisymmetrizer-polytabloid-and-specht-module]]: the $S_2$-Specht module of shape $(2)$ is the one-dimensional trivial module; the Specht module of shape $(1,1)$ is the one-dimensional sign module, by applying the column antisymmetrizer to a tableau of each shape.

[F10] [[thm-nrqmx-planar-character-line-bundle]]: for any character $\chi:\mathbb Z\to U(1)$, the associated quotient is a flat unitary complex line bundle, and a loop whose lift ends at deck translate $n$ has monodromy $\chi(n)$.

## Proof

1.1 Write $g=[\gamma]$. By [F1], every element of the fundamental group is uniquely $ng$ for $n\in\mathbb Z$. A homomorphism $\chi$ is therefore determined by $z:=\chi(g)$: the homomorphism law gives $\chi(ng)=z^n$, including negative $n$ because $z^{-1}$ is the group inverse in $U(1)$. Conversely, for any $z\in U(1)$ this formula preserves addition of integer exponents and defines a homomorphism. By [F3], the pair $(\operatorname{Re}z,\operatorname{Im}z)$ lies on the unit circle. By [F2] there is a unique $[t]\in\mathbb R/\mathbb Z$ for which $z=\cos(2\pi t)+i\sin(2\pi t)$. Put $\theta:=2\pi t$ modulo $2\pi$. Repeated application of [F4] gives $z^n=\cos(n\theta)+i\sin(n\theta)$ for $n\geq0$. If $n<0$, then [F3] gives $z\overline z=|z|^2=1$ because $z\in U(1)$, so $z^{-1}=\overline z$; by [F5], this is $\cos(-\theta)+i\sin(-\theta)$. Applying the same addition-formula induction to $z^{-1}$ proves the displayed formula for negative $n$. This proves the full character classification and the displayed formula. [F1, F2, F3, F4, F5, algebra]

1.2 Write $S_2=\{e,\tau\}$ with $\tau=(12)$ and $\tau^2=e$. The permutation quotient $q:\mathbb Z\to S_2$, $q(n)=\tau^n$, is onto and has kernel $2\mathbb Z$. A character factors through that quotient exactly when $z^2=1$, where $z=\chi(g)$. By [F6], this forces $z=1$ or $z=-1$. The parameterization [F2] is unique modulo $2\pi$; [F7] identifies these points with angles $0$ and $\pi$, respectively. The resulting generator values are $+1$ and $-1$. For shape $(2)$ any tableau has trivial column stabilizer, so its column antisymmetrizer is the identity and the one-dimensional Specht module is trivial; for shape $(1,1)$ the column antisymmetrizer is $1-(12)$, whose image is the sign line. This direct use of the Specht definition [F9] identifies the two factors. [F1, F2, F6, F7, F9, algebra]

2.1 By [F1], one full relative turn represents $2g$. The homomorphism law then gives $\chi(2g)=z^2=\cos(2\theta)+i\sin(2\theta)=e^{2i\theta}$ by [F4]. [F1, F4, step 1.1, algebra]

2.2 On $(\mathbb C^2)^{\otimes2}$ the swap fixes $|00\rangle$ and sends $|\omega\rangle=(|01\rangle-|10\rangle)/\sqrt2$ to $-|\omega\rangle$. Thus both exchange eigenspaces are nonzero. They are the $+1$ and $-1$ Specht factors in the Schur–Weyl decomposition [F8, F9], so the two permutation characters occur algebraically. This establishes occurrence only; it does not select a physical statistics sector. [F8, F9, step 1.2, algebra]

3.1 Apply [F10] to $\chi_\theta$. The positive exchange is the loop class $g$ from [F1], whose lift shifts the normalized angle coordinate by $1$; therefore its monodromy is $\chi_\theta(1)=e^{i\theta}$. A full relative turn shifts by $2$, so its monodromy is $\chi_\theta(2)=e^{2i\theta}$ by step 2.1. [F1, F10, step 2.1, algebra] ∎

## Remarks

The phase calculation concerns one-dimensional representations of the configuration-space fundamental group. It is a mathematical classification, not an experimental observation and not a claim that a particular material realizes a nonstandard phase. In three-dimensional configuration spaces the exchange group is the permutation group; the planar configuration space defined here has the different fundamental group computed above.

In the braid picture time runs upward and horizontal position is the first planar coordinate. The particle starting at the right follows the upper counterclockwise half-circle to the left, so its projected strand passes over the other at the crossing; this is the positive generator $g$ fixed by the explicit configuration path in [[lem-nrqmx-planar-two-particle-config-fundamental-group]]. Two consecutive exchanges give one full relative winding and represent $g^2$. The proof uses the configuration path and its lifted angle, not the crossing picture.

```tikz
\begin{tikzpicture}[baseline=-.5ex,scale=.8]
  \draw (0,0) .. controls (0,0.65) and (1,1.35) .. (1,2);
  \draw[white,line width=4pt] (1,0) .. controls (1,0.65) and (0,1.35) .. (0,2);
  \draw (1,0) .. controls (1,0.65) and (0,1.35) .. (0,2);
  \fill (0,0) circle (2pt); \fill (1,0) circle (2pt);
  \fill (0,2) circle (2pt); \fill (1,2) circle (2pt);
  \node[left] at (0,0) {$2$}; \node[right] at (1,0) {$1$};
  \node[left] at (0,2) {$1$}; \node[right] at (1,2) {$2$};
  \node[right] at (1.2,1) {time $\uparrow$};
\end{tikzpicture}
```

---
id: lem-fd-no-slip-lsix
kind: lemma
title: Elementary zero-boundary L6 and L4 interpolation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-fd-bounded-solenoidal-spaces, lem-fd-bounded-solenoidal-basis, def-fd-weak-time-continuity, def-axiom-of-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-holder-inequality-for-integrals, thm-first-fundamental-theorem-of-calculus-for-l-one, lem-fd-bounded-dual-separability, def-countable-choice]
dependency_roles:
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  lem-fd-bounded-solenoidal-basis: mathematical-premise
  def-fd-weak-time-continuity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-first-fundamental-theorem-of-calculus-for-l-one: mathematical-premise
  lem-fd-bounded-dual-separability: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§2.2, printed p. 5, inequality (4); the local proof derives the estimate directly."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.2, printed pp. 39–43, for the energy-space context."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^3$ be bounded and
open, and let $H,V$ be the closure spaces defined above. There is a constant $C$ independent of $\Omega$
and $a$ such that every $a\in H_0^1(\Omega;\mathbb R^3)$ satisfies
$$\|a\|_{L^6(\Omega)}\le C\|\nabla a\|_{L^2(\Omega)},\qquad \|a\|_{L^4(\Omega)}\le\|a\|_{L^2(\Omega)}^{1/4}\|a\|_{L^6(\Omega)}^{3/4}.$$
For $T>0$, if $u\in L^\infty(0,T;H)\cap L^2(0,T;V)$, then
$u\in L^{8/3}(0,T;L^4(\Omega))$. Here the time-dependent $L^p$ notation
means strong measurability and integrability of the displayed norm; the
continuous embedding $V\to L^4(\Omega)$ carries strongly measurable
$V$-valued maps to strongly measurable $L^4$-valued maps. Let $V^*$ be the
continuous real-linear dual of $V$ with its operator norm. Choose any strongly measurable representative $\widetilde u:(0,T)\to V$ of the $L^2(0,T;V)$ class of $u$; through the embedding $V\to H$, it represents the same $H$-valued class almost everywhere. For almost every $t\in(0,T)$ define
$$b_u(t)(\phi)=-\int_\Omega \widetilde u_i(t,x)\widetilde u_j(t,x)\partial_j\phi_i(x)dx,\qquad\phi\in V,$$
and assign $b_u(t)=0$ on any exceptional null set. Then $b_u(t)\in V^*$ for almost every $t$, $t\mapsto b_u(t)$ is strongly measurable, and its equivalence class is independent of the chosen representative $\widetilde u$. This class belongs to $L^{4/3}(0,T;V^*)$ and satisfies
$$\|b_u(t)\|_{V^*}\le\|\widetilde u(t)\|_{L^4(\Omega)}^2\quad\text{for almost every }t\in(0,T).$$

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §2.2, p. 5](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.2, pp. 39–43](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** The Axiom of Choice, a bounded open $\Omega\subset\mathbb R^3$, $a\in H_0^1(\Omega;\mathbb R^3)$, and $u\in L^\infty(0,T;H)\cap L^2(0,T;V)$ for the closure spaces defined above.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the basis/separability input below is used under this hypothesis.

[F1] [[def-fd-bounded-solenoidal-spaces]]: $H_0^1$ is the closure of compactly supported smooth fields in the $H^1$ norm; $V$ embeds continuously into $H_0^1$.

[F2] [[thm-holder-inequality-for-integrals]]: Hölder's inequality includes Cauchy–Schwarz for the integrable products below.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the coordinate-line integrals below may be iterated and reordered.

[F4] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: under Countable Choice, the indefinite integral of an $L^1$ function has derivative equal to its integrand almost everywhere. The smooth endpoint identity needed below is derived directly in step 1.1.

[F5] [[def-countable-choice]]: Countable Choice selects a Sobolev-approximating sequence from the closure definition of $H_0^1$.

[F6] [[lem-fd-bounded-solenoidal-basis]]: $V$ is a separable Hilbert space and its finite smooth solenoidal span is dense in $V$.

[F7] [[def-fd-weak-time-continuity]]: for a separable Hilbert target, $L^p(0,T;X)$ means strong measurability and an integrable $p$th-power norm.

[F8] [[lem-fd-bounded-dual-separability]]: the Riesz map is a surjective isometry from $V$ onto $V^*$, so $V^*$ is a separable Hilbert space and the Bochner convention in [F7] applies.

## Proof

1.1 For real $g\in C^1([a,b])$, put $G(t)=\int_a^t g'(s)ds$. The difference between its difference quotient at an interior $t$ and $g'(t)$ is bounded by $\sup_{|s-t|\le|h|}|g'(s)-g'(t)|$, which tends to zero. Hence $(G-g)'=0$ everywhere inside the interval; the mean value theorem and endpoint continuity give $g(b)-g(a)=\int_a^b g'$. For $h\in C_c^\infty(\mathbb R^3)$ define $A_1(x_2,x_3)=\int_{\mathbb R}|\partial_1h(x_1,x_2,x_3)|dx_1$, and define $A_2(x_1,x_3)$ and $A_3(x_1,x_2)$ analogously. Applying the endpoint identity along each coordinate line from a point outside the support gives $|h(x)|\le A_i(x_{\widehat i})$ for each $i$, hence $|h|^{3/2}\le(A_1A_2A_3)^{1/2}$. Put $B_2(x_3)=\int A_2(x_1,x_3)dx_1$ and $B_3(x_2)=\int A_3(x_1,x_2)dx_1$. Cauchy–Schwarz in $x_1$ gives $\int(A_2A_3)^{1/2}dx_1\le(B_2B_3)^{1/2}$; applying Cauchy–Schwarz in $(x_2,x_3)$ to the remaining $A_1^{1/2}(B_2B_3)^{1/2}$ gives
$$\int_{\mathbb R^3}|h|^{3/2}\le(\int_{\mathbb R^2}A_1)^{1/2}(\int_{\mathbb R}B_2)^{1/2}(\int_{\mathbb R}B_3)^{1/2}=\prod_{i=1}^3(\int_{\mathbb R^3}|\partial_i h|)^{1/2}.$$
The changes of integration order are justified by [F3]. Raising to the power $2/3$ yields $\|h\|_{3/2}\le\prod_i\|\partial_i h\|_1^{1/3}$. [given, F2, F3, F4, algebra]

2.1 For a smooth compactly supported vector field $w$, set $h=|w|^4$, which is smooth, and note $|\partial_i h|\le4|w|^3|\partial_iw|$. Hölder gives $\|\partial_i h\|_1\le4\|w\|_6^3\|\partial_iw\|_2$. Substitution into step 1.1 yields $\|w\|_6^4\le4\|w\|_6^3\prod_i\|\partial_iw\|_2^{1/3}\le4\|w\|_6^3\|\nabla w\|_2$. Divide when $\|w\|_6>0$; if it is zero the inequality is immediate. [given, F2, step 1.1]

3.1 By [F1] and [F5], choose $w_n\in C_c^\infty(\Omega;\mathbb R^3)$ converging to $a$ in $H^1$. The inequality of step 2.1 applied to differences makes $(w_n)$ Cauchy in $L^6$; on bounded $\Omega$, convergence in $L^6$ also implies convergence in $L^2$, so its $L^6$ limit is the given $L^2$ class $a$. Passing to the limit proves the first inequality. Finally, $\int|a|^4\le(\int|a|^2)^{1/2}(\int|a|^6)^{1/2}$ by Cauchy–Schwarz, which proves the interpolation inequality. For almost every $t$, raising it to power $8/3$ gives $\|u(t)\|_4^{8/3}\le\|u(t)\|_2^{2/3}\|u(t)\|_6^2\le C\|u(t)\|_H^{2/3}\|u(t)\|_V^2$. Integrating and using $u\in L^\infty_tH\cap L^2_tV$ proves the stated $L^{8/3}_tL^4_x$ bound. [given, F1, F2, F5, step 2.1]

4.1 Fix the strongly measurable representative $\widetilde u$ chosen in the Statement. For almost every time, Hölder gives $|b_u(t)(\phi)|\le\|\widetilde u(t)\|_4^2\|\nabla\phi\|_2$, so $b_u(t)\in V^*$ and its norm is at most $\|\widetilde u(t)\|_4^2$. The map $a\mapsto b_a$ is continuous from $L^4$ to $V^*$ because $\|b_a-b_c\|_{V^*}\le(\|a\|_4+\|c\|_4)\|a-c\|_4$. Composing simple-map approximations to $\widetilde u$ with the continuous embedding $V\to L^4$ and this map therefore gives strongly measurable $V^*$-valued $b_u$, up to the permitted null-set assignment; [F6,F8] provide the separable Hilbert target. Two representatives of the same $L^2_tV$ class agree in $V$ almost everywhere, hence agree in $L^4$ there and define the same $b_u$ almost everywhere. Thus its Bochner class is independent of the representative. Finally $\int_0^T\|b_u(t)\|_{V^*}^{4/3}dt\le\int_0^T\|\widetilde u(t)\|_4^{8/3}dt<\infty$ by step 3.1; [F7] gives $b_u\in L^{4/3}(0,T;V^*)$. [given, A1, F2, F6, F7, F8, step 3.1] ∎


---
id: lem-laplace-fundamental-solution-is-harmonic-off-its-pole
kind: lemma
title: The Laplace fundamental solution is harmonic off its pole
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-laplacian-of-a-c2-function, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives, thm-logarithm-derivative-and-integral, thm-induction-principle]
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.6.1, equations (2.14)–(2.15), printed p. 33"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.1 radial Laplacian formula and radial harmonic ODE, printed p. 12"
---

## Statement

Assume Countable Choice and $n\ge2$. The displayed $\Phi$ is smooth on $\mathbb R^n\setminus\{0\}$ and satisfies $\Delta\Phi=0$ there; for every pole $y$, $x\mapsto\Phi(x-y)$ is harmonic on $\mathbb R^n\setminus\{y\}$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, and the kernel $\Phi$ with the normalization fixed in [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]].

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is the assumption retained from the kernel convention ([[def-countable-choice]]). The differentiation argument below does not use choice.

[F1] For $n\ge3$, $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ away from zero; for $n=2$, $\Phi(x)=-(2\pi)^{-1}\log|x|$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] A scalar function is $C^k$ when all iterated coordinate derivatives through order $k$ exist and are continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] A Euclidean map is $C^k$ when each component is $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] Finite sums and products and compositions of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F5] The total chain rule gives $D(g\circ f)=Dg(f)\circ Df$ ([[thm-chain-rule-for-total-derivatives]]).

[F6] A total derivative's matrix gives the coordinate partial derivatives ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F7] For $t>0$, $(t^\alpha)'=\alpha t^{\alpha-1}$ for every real $\alpha$ ([[thm-real-power-continuity-and-derivatives]]).

[F8] For $t>0$, $\log'(t)=1/t$ ([[thm-logarithm-derivative-and-integral]]).

[F9] Sums, products and scalar multiples obey the derivative rules ([[thm-algebra-of-derivatives]]).

[F10] The Laplacian is the sum of the pure second coordinate partials ([[def-laplacian-of-a-c2-function]]).

[F11] A $C^2$ function whose Laplacian vanishes is harmonic ([[def-laplacian-of-a-c2-function]]).

[F12] Induction on the natural numbers proves a property once its base case and successor step hold ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For any real $\alpha$, induction on $j$ using [F12] and [F7] gives $(t^\alpha)^{(j)}=c_jt^{\alpha-j}$ on $(0,\infty)$, where $c_0=1$ and $c_{j+1}=c_j(\alpha-j)$. Each derivative is continuous by the real-power continuity in [F7], so $t^\alpha$ is smooth under [F2]. Also $\log'(t)=t^{-1}$ by [F8]; applying the same derivative calculation to $t^{-1}$ shows every higher derivative of $\log t$ exists and is continuous. Thus both radial profiles used in [F1] are smooth for $t>0$. [F2, F7, F8, F9, F12, induction, algebra]

2.1 On $U=\mathbb R^n\setminus\{0\}$, put $s(x)=\sum_{i=1}^n x_i^2$. Its coordinate functions and their finite sums and products are smooth by direct coordinate differentiation and [F2]–[F4]. Since $s(x)>0$ on $U$, the radius $r(x)=s(x)^{1/2}$ is smooth there by [F7], step 1.1, and closure under composition [F4]. Composing $r$ with the power profile for $n\ge3$ or the logarithm profile for $n=2$ proves that $\Phi$ is smooth on $U$. [F1, F2, F3, F4, F7, step 1.1, algebra]

3.1 For a smooth radial profile $q(r)$ and $r=|x|>0$, the chain rule [F5] and partial-derivative formula [F6] give $\partial_i q(r)=q'(r)x_i/r$. Differentiating again by the chain and product rules [F5], [F7] and [F9] gives $\partial_i^2q(r)=q''(r)x_i^2/r^2+q'(r)(1/r-x_i^2/r^3)$. Summing over $i$ and using $\sum_i x_i^2=r^2$ and the Laplacian definition [F10] yields $\Delta q(r)=q''(r)+(n-1)q'(r)/r$. The calculation is on $r>0$, where all derivatives used exist by steps 1.1 and 2.1. [F2, F5, F6, F7, F9, F10, step 1.1, step 2.1, algebra]

4.1 If $n\ge3$, set $q(r)=r^{2-n}/((n-2)\omega_{n-1})$. Then $q'(r)=-r^{1-n}/\omega_{n-1}$ and $q''(r)=(n-1)r^{-n}/\omega_{n-1}$ by [F7] and [F9], so step 3.1 gives $\Delta\Phi=0$. If $n=2$, set $q(r)=-(2\pi)^{-1}\log r$. Then $q'(r)=-(2\pi r)^{-1}$ by [F8]–[F9] and $q''(r)=(2\pi r^2)^{-1}$ by applying [F7] to $r^{-1}$; hence $q''+q'/r=0$. These cases exhaust $n\ge2$. [F1, F7, F8, F9, step 3.1, cases, algebra]

5.1 For fixed $y$, translation $x\mapsto x-y$ has affine coordinate functions, so direct differentiation gives its identity derivative and zero higher derivatives. The chain rule [F5] therefore gives $\Delta_x(\Phi(x-y))=(\Delta\Phi)(x-y)=0$ whenever $x\ne y$. The translated function is smooth there by [F4], hence is harmonic by [F11]. The assumption $\mathrm{AC}_\omega$ in [A1] is carried from the kernel convention but is not used in these pointwise derivative calculations. [A1, F4, F5, F11, step 2.1, step 4.1, algebra] ∎

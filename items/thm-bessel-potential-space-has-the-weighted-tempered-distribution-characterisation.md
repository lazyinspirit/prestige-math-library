---
id: thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation
kind: theorem
title: Weighted tempered-distribution characterization of H^s
status: draft
origin: pipeline
deps:
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-polynomial-growth-functions-define-tempered-distributions
  - def-tempered-distribution
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, Definition 12.3 and properties (1),(4), printed pp. 140–141; the completion bridge is proved locally"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, equation (4.14) and Proposition 4.8 proof, printed pp. 68–69; Fourier normalization converted"
---

## Statement

Assume Countable Choice. For every $n\ge1$ and $s\in\mathbb R$, define
$$M_s=\{u\in\mathcal S'(\mathbb R^n):\langle\xi\rangle^s\mathcal Fu=u_g\text{ in }\mathcal S'(\mathbb R^n)\text{ for some }g\in L^2(\mathbb R^n)\},$$
where $u_g(\phi)=\int_{\mathbb R^n}g(\xi)\phi(\xi)\,d\xi$ is the regular
tempered distribution. The canonical embedding $E_s$ restricts to a bijection
$$E_s:H^s(\mathbb R^n)\longrightarrow M_s.$$
Thus, after identifying $H^s$ with its image under $E_s$, it is exactly the
space described by the weighted tempered-distribution condition. The class
$g\in L^2$ is unique, and if $u=E_sU$ corresponds to $g$, then
$$\|u\|_{H^s}:=\|U\|_{H^s}=\|g\|_2.$$
The product $\langle\xi\rangle^s\mathcal Fu$ is multiplication of a tempered
distribution by the smooth Japanese-bracket multiplier, not an a priori
pointwise product.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, and the canonical
embedding $E_s:H^s(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$.

[A1] Countable Choice permits one selection from each nonempty set in a
countable family ([[def-countable-choice]]).

[F1] The multipliers $w_s(\xi)=\langle\xi\rangle^s$ and
$w_{-s}(\xi)=\langle\xi\rangle^{-s}$ act continuously and inversely on
$\mathcal S'$ ([[lem-japanese-bracket-powers-preserve-schwartz-space]]).

[F2] The map $J_s:H^s\to L^2$ is a surjective linear isometry, and
$E_sU=\mathcal F^{-1}(u_{w_{-s}J_sU})$ defines an injective canonical
embedding ([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F3] Fourier transformation is an automorphism of $\mathcal S'$ with inverse
$\mathcal F^{-1}$ ([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F4] Each complex $L^2$ class defines the regular tempered distribution
$u_g(\phi)=\int g\phi$ ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F5] Elements of $\mathcal S'$ are continuous complex-linear functionals on
$\mathcal S$, with bilinear test pairing ([[def-tempered-distribution]]).

## Proof

**Proof technique:** Cancel the inverse bracket weights and use the completed Fourier isometry.

1.1 Let $U\in H^s$ and put $g=J_sU$. By [F2], $E_sU=\mathcal F^{-1}(u_{w_{-s}g})$; Fourier inversion [F3] gives $\mathcal F(E_sU)=u_{w_{-s}g}$. [F2, F3, given]

2.1 For every $\phi\in\mathcal S$, the multiplier action [F1], bilinear pairing [F5], and [F2] give $\langle w_s\mathcal F(E_sU),\phi\rangle=\langle u_{w_{-s}g},w_s\phi\rangle=\int g\phi=\langle u_g,\phi\rangle$; hence $w_s\mathcal F(E_sU)=u_g$ in $\mathcal S'$, so $E_sU\in M_s$, and [F2] gives $\|U\|_{H^s}=\|g\|_2$. [F1, F2, F4, F5, step 1.1]

2.2 Conversely, let $u\in\mathcal S'$ and suppose $w_s\mathcal Fu=u_g$ for some $g\in L^2$. Countable Choice [A1] is the inherited hypothesis for [F2]; its bijection $J_s$ gives the unique $U=J_s^{-1}g$. For every $\phi\in\mathcal S$, the inverse multiplier action [F1] and bilinear pairing [F5] give $\langle\mathcal Fu,\phi\rangle=\langle w_{-s}(w_s\mathcal Fu),\phi\rangle=\langle w_{-s}u_g,\phi\rangle=\langle u_g,w_{-s}\phi\rangle=\int g w_{-s}\phi=\langle u_{w_{-s}g},\phi\rangle$. By [F2] and step 1.1 this is $\langle\mathcal F(E_sU),\phi\rangle$; Fourier injectivity [F3] yields $u=E_sU$. [A1, F1, F2, F3, F5, step 1.1]

3.1 If $h\in L^2$ also satisfies $w_s\mathcal Fu=u_h$, applying step 2.2 to both $g$ and $h$ gives $E_s(J_s^{-1}g)=u=E_s(J_s^{-1}h)$. Injectivity of $E_s$ [F2] yields $J_s^{-1}g=J_s^{-1}h$, hence $g=h$; the isometry [F2] gives $\|u\|_{H^s}=\|J_s^{-1}g\|_{H^s}=\|g\|_2$. This proves the claimed bijection and norm identity. [F2, step 2.2] ∎

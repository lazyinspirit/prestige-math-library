---
id: cor-sobolev-duality-from-the-fourier-pairing
kind: corollary
title: "Conjugate duality of H^s and H^{-s}"
status: published
origin: pipeline
deps:
  - def-real-order-bessel-potential-sobolev-space
  - thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - cor-bessel-potential-spaces-are-hilbert-and-complete
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - thm-riesz-representation-for-hilbert-space
  - lem-complex-lp-completeness-density-and-inner-product
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
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.2, Hilbert identification and weighted norm, printed p. 140 (the duality argument itself is completed locally)"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.2 and §2.5, Plancherel and dual Fourier conventions, printed pp. 113-114 and 154-155"
---

## Statement

Assume Countable Choice and use the first-variable-linear complex inner
product conventions. Let $n\ge1$, $s\in\mathbb R$, and let $H^s=H^s(\mathbb R^n)$
be the real-order Bessel-potential completion with canonical embedding
$E_s:H^s\to\mathcal S'(\mathbb R^n)$
([[def-real-order-bessel-potential-sobolev-space]],
[[thm-bessel-potential-completions-embed-in-tempered-distributions]]).
By [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]], for
$u\in H^s$ the distributional product
$\langle\xi\rangle^s\mathcal F(E_su)$ is the regular distribution of a unique
class $g\in L^2(\mathbb R^n)$, and $\|u\|_{H^s}=\|g\|_2$; likewise
$\langle\xi\rangle^{-s}\mathcal F(E_{-s}v)$ has a unique $L^2$ class $h$ for
$v\in H^{-s}$.

**The conjugate dual.** A functional $B:H^s\to\mathbb C$ is *conjugate-linear*
when $B(au+bw)=\overline aB(u)+\overline bB(w)$ for all $u,w\in H^s$ and
$a,b\in\mathbb C$. It is *bounded* when
$\|B\|:=\sup\{|B(u)|:\|u\|_{H^s}\le1\}<\infty$. The set $(H^s)^\dagger$ of
bounded conjugate-linear functionals, with this norm, is the conjugate dual of
$H^s$. The ordinary dual $(H^s)^*$ is the set of bounded complex-linear
functionals with the same norm.

**The pairing.** For $v\in H^{-s}$ and $u\in H^s$ let $g,h\in L^2$ be as above
and define
$$A_v(u)=\int_{\mathbb R^n}\overline{g(\xi)}\,h(\xi)\,d\xi .$$
This is the $L^2$ pairing of the weighted Fourier classes
$\langle\xi\rangle^s\mathcal F(E_su)$ and
$\langle\xi\rangle^{-s}\mathcal F(E_{-s}v)$; since
$\mathcal F(E_su)=u_{\langle\xi\rangle^{-s}g}$ and
$\mathcal F(E_{-s}v)=u_{\langle\xi\rangle^{s}h}$ are regular distributions, the
integrand is the pointwise product $\overline{\mathcal Fu}\,\mathcal Fv$ of
their densities, so the displayed integral is what
$\int_{\mathbb R^n}\overline{\mathcal F u(\xi)}\,\mathcal F v(\xi)\,d\xi$ means.

Then:

1. $A_v$ is a bounded conjugate-linear functional on $H^s$, the map
   $v\mapsto A_v$ is complex-linear, and it is isometric:
   $\|A_v\|=\|v\|_{H^{-s}}$.
2. $v\mapsto A_v$ is a bijection $H^{-s}\to(H^s)^\dagger$.
3. The ordinary linear dual is obtained by conjugating this pairing: with
$$C_v(u):=\overline{A_v(u)}=\int_{\mathbb R^n}g(\xi)\overline{h(\xi)}\,d\xi,$$
   the map $v\mapsto C_v$ is a conjugate-linear isometric bijection
   $H^{-s}\to(H^s)^*$.

This pairing is the weighted $L^2$ pairing of the two Fourier classes; it
extends the $L^2$ conjugate pairing on Schwartz tests and is not asserted as a
bilinear distribution action on arbitrary pairs of elements of $H^s$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, the completion $H^s$ and its conjugate dual $(H^s)^\dagger$.

[A1] Countable Choice permits one selection from each nonempty set in a countable family ([[def-countable-choice]]).

[F1] For every $\sigma\in\mathbb R$ the canonical embedding restricts to a bijection $E_\sigma:H^\sigma\to\mathcal W_\sigma$ onto the set of tempered distributions $u$ for which $\langle\xi\rangle^\sigma\mathcal Fu=u_G$ for a unique $G\in L^2$, with $\|U\|_{H^\sigma}=\|G\|_2$ ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F2] $H^s$ is a complex Hilbert space for the first-variable-linear inner product $(U,V)_{H^s}=\int_{\mathbb R^n}(J_sU)(\xi)\overline{(J_sV)(\xi)}\,d\xi$, whose induced norm is the defining completion norm ([[cor-bessel-potential-spaces-are-hilbert-and-complete]]).

[F3] The weighted Fourier map $J_\sigma:H^\sigma\to L^2$ is a surjective linear isometry with $E_\sigma([u_j])=\mathcal F^{-1}\bigl(u_{\langle\xi\rangle^{-\sigma}J_\sigma[u_j]}\bigr)$ ([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F4] For a bounded linear functional $B'$ on a complex Hilbert space $H$ there is a unique $w\in H$ with $B'(u)=(u,w)_H$ for all $u$, and $\|B'\|=\|w\|$ ([[thm-riesz-representation-for-hilbert-space]]).

[F5] The complex $L^2$ pairing $(f,j)\mapsto\int f\overline j$ is first-variable-linear and conjugate-symmetric on classes and satisfies Cauchy–Schwarz $|\int f\overline j\,|\le\|f\|_2\|j\|_2$ ([[lem-complex-lp-completeness-density-and-inner-product]]).

## Proof

**Proof technique:** transport the weighted $L^2$ pairing along the surjective Fourier isometries and conjugate the Riesz representation.

1.1 Well-definedness. Let $u\in H^s$, $v\in H^{-s}$, and let $g,h\in L^2$ be the unique classes of [F1], so $g=\langle\xi\rangle^s\mathcal F(E_su)$ and $h=\langle\xi\rangle^{-s}\mathcal F(E_{-s}v)$ in the sense of that statement. By [F5] the product $\overline gh$ is integrable, $|A_v(u)|\le\|g\|_2\|h\|_2$, and $A_v(u)$ depends only on the classes $g,h$. Moreover $\mathcal F(E_su)$ and $\mathcal F(E_{-s}v)$ are the regular distributions of $\langle\xi\rangle^{-s}g$ and $\langle\xi\rangle^{s}h$ by [F3] and [F1], and $\overline{\langle\xi\rangle^{-s}g}\;\langle\xi\rangle^{s}h=\overline gh$ pointwise, so the displayed integral is the density product $\overline{\mathcal Fu}\,\mathcal Fv$. [F1, F3, F5, given]

1.2 Sesquilinearity. If $u\mapsto u'=\lambda u$ then the class of [F1] is $\lambda g$, and $\int\overline{\lambda g}h=\overline\lambda A_v(u)$; hence $A_v$ is conjugate-linear in $u$. If $v\mapsto av+bv'$ then the class is $ah+bh'$ by linearity of $J_{-s}$ [F3], and $\int\overline g(ah+bh')=aA_v(u)+bA_{v'}(u)$; hence $v\mapsto A_v(u)$ is complex-linear for each fixed $u$. [F1, F3, F5, given]

2.1 The bound. For $u\in H^s$ and $v\in H^{-s}$, Cauchy–Schwarz [F5] and the norm identities [F1] give $$|A_v(u)|\le\|g\|_2\|h\|_2=\|u\|_{H^s}\|v\|_{H^{-s}} .$$ Hence $A_v$ is a bounded conjugate-linear functional and $\|A_v\|\le\|v\|_{H^{-s}}$; combined with step 1.2, $v\mapsto A_v$ maps $H^{-s}$ linearly into $(H^s)^\dagger$. [F1, F5, step 1.1, step 1.2]

3.1 Attainment and isometry. Let $v\ne0$ and put $h$ as above, so $h\ne0$; set $g:=h/\|h\|_2\in L^2$ and $u:=J_s^{-1}g\in H^s$, which exists and has $\|u\|_{H^s}=\|g\|_2=1$ by the surjective isometry property [F3], with $g$ the class of [F1]. Then $$A_v(u)=\int\overline{(h/\|h\|_2)}\,h=\frac{\|h\|_2^2}{\|h\|_2}=\|h\|_2=\|v\|_{H^{-s}} .$$ Thus $\|A_v\|\ge\|v\|_{H^{-s}}$, and with step 2.1, $\|A_v\|=\|v\|_{H^{-s}}$. If $v=0$ then $h=0$, $A_v=0$ and $\|A_v\|=0=\|v\|_{H^{-s}}$; the identity holds in all cases. [F1, F3, F5, step 2.1]

4.1 Injectivity. If $A_v=A_{v'}$ then step 1.2 gives $A_{v-v'}=A_v-A_{v'}=0$, so step 3.1 yields $\|v-v'\|_{H^{-s}}=\|A_{v-v'}\|=0$, hence $v=v'$. Thus $v\mapsto A_v$ is injective. [step 1.2, step 3.1]

4.2 Surjectivity and the conjugate dual. Let $B\in(H^s)^\dagger$ and define $B'(u):=\overline{B(u)}$. Then $B'$ is complex-linear and $|B'(u)|=|B(u)| \le\|B\|\,\|u\|_{H^s}$, so [F4] provides a unique $w\in H^s$ with $B'(u)=(u,w)_{H^s}$ for all $u$ and $\|w\|_{H^s}=\|B\|$. Put $h:=J_sw\in L^2$ and $v:=J_{-s}^{-1}h\in H^{-s}$, which exists by [F3] and has $\|v\|_{H^{-s}}=\|h\|_2=\|w\|_{H^s}$. For $u\in H^s$ with class $g=J_su$, [F2] gives $(u,w)_{H^s}=\int g\overline h$, so $$A_v(u)=\int\overline g h=\overline{\int g\overline h} =\overline{(u,w)_{H^s}}=\overline{B'(u)}=B(u).$$ Hence $B=A_v$, the map is onto $(H^s)^\dagger$, and step 3.1 gives $\|B\|=\|v\|_{H^{-s}}$. [F2, F3, F4, step 2.1, step 3.1]

5.1 The ordinary dual. Define $C_v(u):=\overline{A_v(u)}$. Conjugation $B\mapsto\overline B(\cdot)$ is an isometric bijection from $(H^s)^\dagger$ onto $(H^s)^*$, because it exchanges conjugate-linear and complex-linear functionals and preserves $|\,\cdot\,|$ pointwise; composing with the bijection $v\mapsto A_v$ of steps 4.1 and 4.2, the map $v\mapsto C_v$ is an isometric bijection $H^{-s}\to(H^s)^*$. It is conjugate-linear in $v$: by step 1.2, $C_{av+bv'}(u)=\overline{aA_v(u)+bA_{v'}(u)}=\overline a\,C_v(u)+\overline b\,C_{v'}(u)$. By the definition of $A_v$ in the Statement, $C_v(u)=\int g\overline h$, so $C_v$ is the weighted Fourier pairing of $u$ with $v$. [step 1.1, step 1.2, step 4.1, step 4.2]

6.1 Conclusion. Step 1.1 and step 1.2 establish well-definedness and sesquilinearity; step 3.1 gives $\|A_v\|=\|v\|_{H^{-s}}$; steps 4.1 and 4.2 make $v\mapsto A_v$ a bijection onto the conjugate dual; and step 5.1 transfers this to the ordinary dual with the conjugate-linear isometric dependence. This proves statements 1-3 for arbitrary $n\ge1$ and $s\in\mathbb R$. Countable Choice is the stated hypothesis [A1], used through the cited completion, characterization, and Riesz interfaces in those steps. [A1, step 1.1, step 1.2, step 3.1, step 4.1, step 4.2, step 5.1] ∎

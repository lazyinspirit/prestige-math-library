---
id: thm-primitive-dirichlet-l-analytic-continuation
kind: theorem
title: "Analytic continuation of primitive Dirichlet L-functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-completed-dirichlet-l-function, def-dirichlet-character-modulo-q, def-primitive-dirichlet-character-and-conductor, lem-fourier-transform-of-a-gaussian, thm-twisted-poisson-summation, thm-gamma-weierstrass-product]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorems 16.7-16.8"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

If primitive $\chi$ is nonprincipal, then $L(s,\chi)$ and $\Lambda(s,\chi)$
extend to entire functions. For the principal primitive character modulo $1$,
$L=\zeta$ is meromorphic with its unique simple pole at $s=1$, while
$\Lambda(s,\chi)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ is meromorphic with simple
poles at $s=0$ and $s=1$.

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q$ of parity $a$.

[F1] The Gaussian has the stated Fourier transform ([[lem-fourier-transform-of-a-gaussian]]).

[F2] Twisted Poisson summation has the displayed $q$-normalization ([[thm-twisted-poisson-summation]]).

[F4] The reciprocal $1/\Gamma(z)$ extends to an entire function ([[thm-gamma-weierstrass-product]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\chi$ is nonprincipal, so $q>1$ and $\chi(0)=0$. Put $\Theta_\chi(t)=\sum_{n\in\mathbb Z}\chi(n)n^a e^{-\pi n^2t/q}$ for $t>0$, with $n^0=1$ also at $n=0$. Since $\chi(-1)=(-1)^a$, the positive and negative terms pair. Termwise Mellin integration, absolutely valid for $\operatorname{Re}s>1$, gives $$\int_0^\infty\Theta_\chi(t)t^{(s+a)/2-1}\,dt=2\left(\frac q\pi\right)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)=2\Lambda(s,\chi).$$ The last equality is the exact normalization of [[def-completed-dirichlet-l-function]]. [given, algebra]

2.1 Apply [F2] to $x^ae^{-\pi tx^2/q}$. For $a=0$, [F1] gives its Fourier transform directly. For $a=1$, differentiating that transform with respect to frequency and using $\widehat{xf}(\xi)=-(2\pi i)^{-1}(\widehat f)'(\xi)$ gives the extra factor $-i q\xi/t$. Thus in both parity cases $$\Theta_\chi(t)=\frac{\tau(\chi)}{i^a\sqrt q}\,t^{-a-1/2}\Theta_{\bar\chi}(1/t).$$ The transformed character also has zero constant term because $q>1$. [F1, F2, step 1.1, algebra]

3.1 Split the Mellin integral of step 1.1 at $t=1$ and use step 2.1 on $(0,1)$, then substitute $u=1/t$. Writing $\epsilon_\chi=\tau(\chi)/(i^a\sqrt q)$ gives $$2\Lambda(s,\chi)=\int_1^\infty\Theta_\chi(t)t^{(s+a)/2-1}\,dt+\epsilon_\chi\int_1^\infty\Theta_{\bar\chi}(u)u^{(1-s+a)/2-1}\,du.$$ Both theta kernels and all their derivatives in the displayed complex powers decay exponentially as the real variable tends to infinity, since their zero terms vanish and their remaining summands are a fixed polynomial times a Gaussian. Uniform domination on every compact $s$-set makes both integrals entire in $s$. They therefore continue $\Lambda(s,\chi)$ entirely. Since $1/\Gamma((s+a)/2)$ is entire by [F4] and the other completion factor is entire and nonzero, $L(s,\chi)$ is entire too. [step 1.1, step 2.1, F4, algebra]

4.1 The only primitive principal character has $q=1$ ([[def-primitive-dirichlet-character-and-conductor]]). Now $a=0$ and $\Theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ has constant term $1$, with $\Theta(t)=t^{-1/2}\Theta(1/t)$ by [F1] and [F2]. For $\operatorname{Re}s>1$, $2\Lambda(s)=\int_0^\infty(\Theta(t)-1)t^{s/2-1}\,dt$. Splitting at $1$ and using $\Theta(t)-1=t^{-1/2}(\Theta(1/t)-1)+t^{-1/2}-1$ gives $$2\Lambda(s)=\int_1^\infty(\Theta(t)-1)t^{s/2-1}\,dt+\int_1^\infty(\Theta(t)-1)t^{(1-s)/2-1}\,dt+\frac{2}{s-1}-\frac{2}{s}.$$ The integrals are entire by Gaussian decay. Their boundary terms give exactly simple poles at $1$ and $0$, with nonzero residues $1$ and $-1$ for $\Lambda$. Multiplication by the entire reciprocal Gamma from [F4] cancels the pole at $0$ without introducing another pole, while its value at $1/2$ is nonzero by the product formula. Thus $L=\zeta$ has exactly one simple pole, at $1$. [F1, F2, F4, step 1.1, algebra] ∎

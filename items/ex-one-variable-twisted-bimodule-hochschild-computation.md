---
id: ex-one-variable-twisted-bimodule-hochschild-computation
kind: example
title: One-variable twisted bimodule Hochschild calculation
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, def-enveloping-algebra-and-bimodule-module-dictionary, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1.3 and Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Assume AC. Let $R=\mathbb Q[x]$ and let $M=R$ as a left $R$-module with
right action $m\cdot x=-xm$, extended to all polynomials by
$m\cdot f(x):=m f(-x)$. Then
$$
HH_0(R,M)\cong\mathbb Q,\qquad HH_1(R,M)=0,\qquad HH_j(R,M)=0\quad(j\geq2).
$$

## Facts & Assumptions

**Given:** AC, $R=\mathbb Q[x]$, the usual left $R$-module $M=R$, and the right action $m\cdot f(x)=mf(-x)$.

[F1] Under AC, for a $k$-central $R$-bimodule $M$, Hochschild homology is isomorphic to the homology of the coefficient Koszul complex, whose one-variable differential is $m\theta_1\mapsto xm-mx$ ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[F2] A $k$-central bimodule has commuting left and right actions and equal induced scalar actions ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F3] The assumed Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]); it licenses the AC-qualified polynomial Hochschild theorem used at step 2.1.

## Verification

**Proof technique:** direct.

1.1 Verify the twisted right action and the bimodule hypotheses. [F2, given]
Define $\sigma(f(x))=f(-x)$. Since $\sigma(fg)=\sigma(f)\sigma(g)$, $\sigma(1)=1$, and $\sigma^2=\operatorname{id}$, it is a unital ring automorphism of $R$. Put $m\cdot f=m\sigma(f)$. Then $m\cdot1=m$ and $(m\cdot f)\cdot g=m\sigma(f)\sigma(g)=m\sigma(fg)=m\cdot(fg)$, so this is a unital right action. In particular $m\cdot x=-mx=-xm$. For $r,f\in R$, $r(m\cdot f)=rm\sigma(f)=(rm)\cdot f$, using commutativity of $R$; hence the left and right actions commute. Since $\sigma(q)=q$ for $q\in\mathbb Q$, the two scalar actions agree. Thus $M$ is a $\mathbb Q$-central $R$-bimodule, as required by [F1]. [F2, given, algebra]

2.1 Write the one-variable coefficient complex and compute its map. [F1, F2, step 1.1, algebra] Under the AC premise [F3], [F1] computes $HH_\bullet(R,M)$ by the two-term complex $M\theta_1\xrightarrow{d}M$. Its differential is $d(m\theta_1)=xm-m\cdot x=xm-(-xm)=2xm$. There are no terms above degree one. [F1, F3, step 1.1, algebra]

3.1 Compute the kernel and cokernel of multiplication by $2x$. [F1, step 2.1, algebra]
If $0\ne f(x)=a_dx^d+\cdots$ with $a_d\ne0$, then $2xf(x)$ has leading coefficient $2a_d\ne0$ in $\mathbb Q$, so $d$ is injective. Because $2$ is a unit, its image is $2x\mathbb Q[x]=x\mathbb Q[x]$. Evaluation at zero $\varepsilon:\mathbb Q[x]\to\mathbb Q$ is surjective and has kernel $x\mathbb Q[x]$: a polynomial with zero constant coefficient is divisible by $x$. Thus $\operatorname{coker}d\cong\mathbb Q$ and $\ker d=0$, giving $HH_0(R,M)\cong\mathbb Q$ and $HH_1(R,M)=0$. The terms above degree one vanish, so $HH_j(R,M)=0$ for $j\geq2$. [F1, step 2.1, algebra]

4.1 Check grading, endpoints, and the exact AC use. [F1, F2, step 2.1, step 3.1, given]
If $\deg_{\mathrm{int}}x=2$, then $f(x)\mapsto f(-x)$ preserves degree, and the Koszul generator $\theta_1$ has internal degree $2$; hence the degree-one term is the corresponding shift of $M$ and $d$ has internal degree zero. Degree zero is the cokernel computed in step 3.1; degree one is the kernel, with no incoming term from degree two; all higher terms are zero. AC is used only to apply the polynomial Hochschild theorem in step 2.1. The action, leading-term injectivity, and evaluation quotient are explicit and use no choice. The example is a computation, not an equivalence. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] $\square$

## Source comparison

Weibel, *An Introduction to Homological Algebra*, §9.1.3 and Exercise 9.1.3, printed pp.302–304/PDF pp.2–4, gives the enveloping/bar framework and poses the polynomial Koszul computation as an exercise, but does not treat this twist. Khovanov, “Hochschild homology,” PDF p.1, lines 41–60, describes the polynomial Koszul complex and the coefficient maps $x_i m-mx_i$. The automorphism twist and its kernel/cokernel calculation are proved explicitly above.

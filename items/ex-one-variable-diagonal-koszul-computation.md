---
id: ex-one-variable-diagonal-koszul-computation
kind: example
title: One-variable diagonal Hochschild calculation
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, Exercise 9.1.3"
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

Assume AC. Let $k$ be a field and $R=k[x]$ with $\deg_{\mathrm{int}}x=2$,
regarded as its regular bimodule. Then, as graded $k$-vector spaces,
$$
HH_0(R,R)\cong R,\qquad HH_1(R,R)\cong R\{2\},\qquad HH_j(R,R)=0\quad(j\geq2).
$$

## Facts & Assumptions

**Given:** AC, a field $k$, the one-variable polynomial algebra $R=k[x]$, the regular bimodule, and $\deg_{\mathrm{int}}x=2$.

[F1] The diagonal complex has degree-$p$ terms free over $R^e$ on increasing wedge symbols, differential given by alternating deletion with coefficients $u_i=x_i^L-x_i^R$, and no terms above degree $n$ ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F2] Under AC, the polynomial Hochschild theorem identifies $HH_j(R,M)$ with the homology of the coefficient diagonal Koszul complex, naturally in $M$, and preserves the internal grading ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[F3] When $\deg_{\mathrm{int}}x_i=2$, each $\theta_i$ has internal degree $2$ and the degree-$p$ diagonal term has shift $\{2p\}$ ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F4] The assumed Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]); it licenses the AC-qualified polynomial Hochschild theorem used at step 1.1.

## Verification

**Proof technique:** direct.

1.1 Specialize the diagonal complex to one variable. [F1, F3, given]
It has the two terms $R^e\theta_1\cong R^e\{2\}$ in homological degree one and $R^e$ in degree zero, with differential $d(\theta_1)=u_1=x\otimes1-1\otimes x$ and augmentation $\mu:R^e\to R$. Thus the displayed augmented complex is $0\longrightarrow R^e\{2\}\xrightarrow{\,x\otimes1-1\otimes x\,}R^e\xrightarrow{\,\mu\,}R\longrightarrow0$. The polynomial Hochschild theorem applies to this diagonal complex under AC [F4]. [F1, F2, F4, given]

2.1 Tensor with the regular bimodule and compute the only differential. [F2, F3, step 1.1, algebra] The theorem gives the coefficient complex $R\{2\}\xrightarrow{d}R$. Writing the degree-one generator as $\theta_1$, for $m\in R$ its differential is $d(m\theta_1)=xm-mx=0$, since the left and right actions on the regular bimodule agree. This is a degree-zero map because $x$ and $\theta_1$ both have internal degree $2$. [F2, F3, step 1.1, algebra]

3.1 Read the homology of the two-term zero-differential complex. [F1, F2, step 2.1, algebra] There is no term above degree one. Since $d=0$, every degree-one element is a cycle and there are no degree-one boundaries, so $H_1=R\{2\}$. In degree zero, there are no degree-zero boundaries and all of $R$ is a cycle, so $H_0=R$. For $j\geq2$ the chain term is zero, giving $HH_j=0$. Applying [F2] gives the displayed Hochschild groups. [F1, F2, step 2.1, algebra]

4.1 Check the endpoints, shift, and exact use of AC. [F1, F2, F3, step 2.1, step 3.1, given] The empty wedge is the degree-zero basis and carries shift $\{0\}$; the top wedge $\theta_1$ has internal degree $2$ and gives $R\{2\}$. The outgoing degree-zero differential is zero by convention, the incoming degree-one map is zero by the explicit calculation, and there are no terms in degrees $j\geq2$. AC is used only to invoke the polynomial Hochschild theorem in step 1.1; the one-variable differential and homology calculation use no choice. The example is a computation, not an equivalence. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] $\square$

## Source comparison

Weibel, *An Introduction to Homological Algebra*, Exercise 9.1.3, printed p.304/PDF p.4, asks for the polynomial calculation with the Koszul resolution but does not supply its proof. Khovanov, “Hochschild homology,” PDF p.1, lines 33–60, states the polynomial diagonal Koszul complex and its coefficient differential. The displayed terms, zero map, and homology groups are calculated directly above.

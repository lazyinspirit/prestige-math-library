---
id: "lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities"
kind: "lemma"
title: "Complex l one functionals on finite measure spaces have bounded densities"
deps: ["lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities", "def-integrable-real-and-complex-functions-and-their-integrals", "def-axiom-of-choice", "thm-dominated-convergence", "thm-integral-triangle-inequality"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis; complete Chapter 7 reading recorded in batch coverage"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Choice. If $(X,\mathcal A,\mu)$ is a finite measure space and $\Lambda:L^1(\mu;\mathbb C)\to\mathbb C$ is bounded and complex-linear, then there is an essentially bounded complex measurable $g$ such that
$$\Lambda(f)=\int_X f g\,d\mu\qquad(f\in L^1(\mu;\mathbb C)).$$
One may take $\|g\|_\infty\le2\|\Lambda\|$. The pairing contains no conjugation. AC is used through the finite-measure real Radon–Nikodym representation supplier.

## Facts & Assumptions

[F1] Under AC a bounded real functional on finite-measure $L^p$, $1\le p<\infty$, has a real integrable density representing it on every bounded measurable representative ([[lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities]]).

[F2] Complex integration is defined through real and imaginary parts ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F3] The assumed axiom is [[def-axiom-of-choice]].

[F4] Dominated convergence yields $L^1$ convergence under an integrable majorant ([[thm-dominated-convergence]]).

[F5] $|\int h|\le\int|h|$ for integrable complex $h$ ([[thm-integral-triangle-inequality]]).

## Proof

**Given:** AC, the finite measure space and $\Lambda$; put $M=\|\Lambda\|$.

1.1 Restrict $\operatorname{Re}\Lambda$ and $\operatorname{Im}\Lambda$ to real $L^1$ classes. They are real-linear with norm at most $M$. F1 with $p=1$, under F3, gives real $h_1,h_2\in L^1$ representing them on bounded real measurable functions. [given, F1, F3]

2.1 Fix either density $h$ and its real functional $A$. For $k\ge1$, set $E_k=\{h>M+1/k\}$. Its indicator is in $L^1$ since the measure space is finite. Then $(M+1/k)\mu(E_k)\le\int_{E_k}h=A(1_{E_k})\le M\mu(E_k)$, so $\mu(E_k)=0$. Apply the same reasoning to $\{-h>M+1/k\}$ with the negative functional. Their countable union shows $|h|\le M$ almost everywhere. Define $g=h_1+ih_2$; it is measurable and $|g|\le2M$ almost everywhere. We may set it to zero on the explicitly determined null set where this bound fails. [step 1.1, F2, algebra]

3.1 For a bounded complex function $f=a+ib$ with real bounded $a,b$, complex linearity gives $\Lambda(f)=\Lambda(a)+i\Lambda(b)=\int a(h_1+ih_2)+i\int b(h_1+ih_2)=\int f g$, using F2. For arbitrary $f\in L^1$, let $f_N=f\min(1,N/|f|)$, with zero value at $f=0$. Then $f_N$ is bounded, $f_N\to f$ pointwise and $|f_N-f|\le|f|$, so F4 gives $\|f_N-f\|_1\to0$. Boundedness of $\Lambda$ gives $\Lambda(f_N)\to\Lambda(f)$, while step 2.1 and F5 give $|\int(f_N-f)g|\le2M\|f_N-f\|_1\to0$. Passing to the limit proves the formula for all $L^1$ classes. [step 2.1, step 1.1, F2, F4, F5]

4.1 If $M=0$, the same level-set argument gives $g=0$ almost everywhere; if $\mu(X)=0$, $L^1$ is the zero space and take $g=0$. Indicator tests were used only on a finite-measure space, and truncations were explicitly defined. The full AC use is precisely F1, not a presumed complex duality theorem. $\square$ [step 3.1, F1, F3]

---
id: lem-slobodeckij-seminorm-is-well-defined
kind: lemma
title: "Well-definedness of the Slobodeckij seminorm and norm"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-fractional-slobodeckij-space-on-euclidean-space, thm-minkowski-integral-inequality, thm-tonelli-and-fubini-for-completed-product-measures, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-lebesgue-measure-of-a-box-of-every-kind, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.1, printed p. 96: seminorm properties and the remark that $[f]_{W^{s,p}}=0$ for constants, so the $L^p$ term is added."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1 and the footnote on the equivalence of the local norms, printed pp. 286-289: the norm is taken on equivalence classes of boundary functions."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, printed p. 73: the range of the trace is described as a Besov space with the $L^p$ term included."
---

## Statement

Assume Countable Choice. Let $d\ge1$, $0<s<1$ and $1\le p<\infty$.

(i) If $g=h$ almost everywhere on $\mathbb R^d$, then
$[g]_{s,p}=[h]_{s,p}$, both possibly infinite.

(ii) The extended quantity $[\cdot]_{s,p}$ is a seminorm:
$[\lambda g]_{s,p}=|\lambda|\,[g]_{s,p}$ and
$[f+g]_{s,p}\le[f]_{s,p}+[g]_{s,p}$ for all measurable $f,g$ and all
$\lambda\in\mathbb K$.

(iii) If $g\in L^p(\mathbb R^d)$ and $[g]_{s,p}=0$, then $g=0$ almost
everywhere; hence $\|\cdot\|_{W^{s,p}}$ is a norm and
$W^{s,p}(\mathbb R^d)$ is a vector space. On a set of finite measure the
seminorm vanishes on constants, so it is only definite modulo constants
there; adding the $L^p$ term removes that ambiguity, and on $\mathbb R^d$ with
$p<\infty$ no nonzero constant is in $L^p$.

## Facts & Assumptions

**Given:** Countable Choice; $d\ge1$, $0<s<1$, $1\le p<\infty$; the seminorm $[g]_{s,p}$ of [[def-fractional-slobodeckij-space-on-euclidean-space]], an extended nonnegative integral over the completed product measure on $\mathbb R^d\times\mathbb R^d$ of the integrand $|g(x)-g(y)|^p|x-y|^{-d-sp}$, read as $0$ on the diagonal.

[F1] The seminorm is defined by the completed-product integral $\int_{\mathbb R^d}\int_{\mathbb R^d}|g(x)-g(y)|^p|x-y|^{-d-sp}dx\,dy$, raised to the power $1/p$; the diagonal is a null set and the integrand is measurable and nonnegative, so the integral is an element of $[0,\infty]$. ([[def-fractional-slobodeckij-space-on-euclidean-space]])

[F2] Assume Countable Choice. Tonelli's and Fubini's theorems hold for the completed product of sigma-finite measure spaces: for a nonnegative measurable $h$ the double integral equals both iterated integrals with the section integrals as in the statement, and the section-integral functions are measurable. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] For a nonnegative measurable $u$, $\int u\,d\mu=0$ if and only if $u=0$ almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F4] Minkowski's integral inequality: for sigma-finite $(X,\mu)$, $(Y,\nu)$, $1\le r<\infty$ and measurable $F:X\times Y\to\mathbb C$ with $\int_Y\|F(\cdot,y)\|_{L^r(X)}d\nu(y)<\infty$, the function $x\mapsto\int_Y|F(x,y)|d\nu(y)$ lies in $L^r(X)$ with norm at most $\int_Y\|F(\cdot,y)\|_{L^r(X)}d\nu(y)$. ([[thm-minkowski-integral-inequality]])

[F5] Every box between its open and closed forms is Lebesgue measurable with measure the product of the side lengths; in particular $\lambda_d([0,R]^d)=R^d$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F6] For $1\le p<\infty$ the quotient $L^p$ norm is well defined on classes and makes $L^p$ a normed space for real scalars, with $\|[f]\|_p=\|f\|_p$. ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F7] On any measure space, complex $L^p$ classes carry well-defined vector operations and the norm $\|[f]\|_p=N_p(f)$ satisfies the triangle inequality. ([[thm-complex-holder-minkowski-and-the-quotient-norm]])

## Proof

**Proof technique:** direct.

1.1 Representative independence (i). Let $g=h$ almost everywhere and let $N:=\{x:g(x)\ne h(x)\}$, a Lebesgue-null set. The difference $|g(x)-g(y)|^p-|h(x)-h(y)|^p$ vanishes whenever $x\notin N$ and $y\notin N$, so the two integrands differ at most on $E:=(N\times\mathbb R^d)\cup(\mathbb R^d\times N)$. Tonelli [F2] applied to the indicator of $N\times\mathbb R^d$ gives $(\lambda_d\times\lambda_d)(N\times\mathbb R^d)=\int_{\mathbb R^d}\lambda_d(\mathbb R^d)\mathbf 1_N(x)\,dx=0$, because $\mathbf 1_N$ vanishes off the null set $N$; the second piece is handled the same way, and $\lambda_d$ is sigma-finite. Hence $E$ is null and the two integrals coincide, possibly both infinite, so $[g]_{s,p}=[h]_{s,p}$. [F1, F2, algebra]

1.2 Homogeneity (ii). For $\lambda\in\mathbb K$ one has $|(\lambda g)(x)-(\lambda g)(y)|^p=|\lambda|^p|g(x)-g(y)|^p$ pointwise, so the integrals are related by the factor $|\lambda|^p$ and $[\lambda g]_{s,p}=|\lambda|[g]_{s,p}$; at $\lambda=0$ both sides are $0$ while for $[g]_{s,p}=+\infty$ and $\lambda\ne0$ both sides are $+\infty$. [F1, algebra]

1.3 Triangle inequality (ii). Put $\Delta_g(x,y):=g(x)-g(y)$. Then $[\Delta_{f+g}](x,y)=\Delta_f(x,y)+\Delta_g(x,y)$ pointwise, and $[\cdot]_{s,p}$ is the $L^p$ norm of $\Delta_\cdot$ on the sigma-finite measure space $(\mathbb R^d\times\mathbb R^d,\mu)$ with $d\mu=|x-y|^{-d-sp}dx\,dy$. If $[f]_{s,p}+[g]_{s,p}=+\infty$ the claim is trivial; otherwise Minkowski's integral inequality [F4] applied with $Y=\{1,2\}$ carrying counting measure and $F((x,y),1)=\Delta_f(x,y)$, $F((x,y),2)=\Delta_g(x,y)$ gives $[f+g]_{s,p}\le[f]_{s,p}+[g]_{s,p}$. [F1, F4, algebra]

1.4 Zero seminorm forces almost-everywhere constancy (iii). Assume $[g]_{s,p}=0$, so by [F1] the nonnegative integrand $u(x,y):=|g(x)-g(y)|^p|x-y|^{-d-sp}$ has integral $0$; by [F3] $u=0$ almost everywhere for the completed product measure, and since $|x-y|^{-d-sp}>0$ off the diagonal, $|g(x)-g(y)|=0$ for almost every pair $(x,y)$ in the product measure. Applying the Fubini clause of [F2] to the indicator of $E:=\{(x,y):g(x)\ne g(y)\}$, whose product integral is $0$, gives a Lebesgue-null set $M$ such that $E_x$ is null for every $x\notin M$. Fix $x_0\notin M$ with $g(x_0)$ finite, possible because $g\in L^p$ is finite almost everywhere; then $g(y)=g(x_0)$ for almost every $y$. [F1, F2, F3, algebra, given]

2.1 Conclusion (iii) and the norm. By step 1.4 there is $c\in\mathbb K$ with $g=c$ almost everywhere. If $c\ne0$, then $\int_{\mathbb R^d}|g|^p=|c|^p\lambda_d(\mathbb R^d)$, and $\lambda_d(\mathbb R^d)=+\infty$ because $\lambda_d(\mathbb R^d)\ge\lambda_d([0,R]^d)=R^d$ for every $R>0$ by [F5] and monotonicity of a measure; this contradicts $g\in L^p$. Hence $c=0$, and $[g]_{s,p}=0$ forces $g=0$ almost everywhere. Consequently $\|g\|_{W^{s,p}}=\|g\|_{L^p}+[g]_{s,p}$ vanishes only on the zero class, is homogeneous by step 1.2 and the homogeneity of the $L^p$ norm [F6, F7], and satisfies the triangle inequality by step 1.3, the triangle inequality of the $L^p$ norm [F6, F7], and addition of inequalities; $W^{s,p}(\mathbb R^d)$ is a vector space because sums and scalar multiples of classes with finite $L^p$ norm and finite seminorm again have $L^p$ norm and seminorm finite by steps 1.2 and 1.3. For the analogue over a finite-measure set $\Omega$ the integrand of a constant is identically zero, so the seminorm alone vanishes on constants and only the sum norm is definite; adding the $L^p$ term removes that ambiguity, as claimed. [F6, F7, step 1.2, step 1.3, step 1.4, algebra, given] ∎

## Source notes

Schikorra, printed p. 96, records the seminorm properties and the vanishing of
$[f]_{W^{s,p}}$ on constants; Gagliardo, printed pp. 286-289, takes the norm on
equivalence classes of boundary functions, which is the content of clause (i);
Hunter, printed p. 73, describes the trace range as a Besov space carrying the
$L^p$ term, the reason the sum norm is used. The proof of clause (iii) above
uses only the vanishing criterion for nonnegative integrals and Fubini.

---
id: lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes
kind: lemma
title: "The integral of the divergence of an integrable C1 field vanishes"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-countable-choice, def-divergence-and-curl-of-a-c1-vector-field, lem-smooth-bump-between-concentric-euclidean-balls, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-dominated-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-darboux-equals-riemann, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, def-l-one-of-a-measure, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-heine-borel-rn, thm-extreme-value-metric, thm-continuous-implies-integrable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§1.12, printed pp. 17-18, Theorem 1.46 (the divergence theorem used with the cutoff)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.1, printed pp. 289-290, (9.2.2)-(9.2.3): the divergence identity integrated against an arbitrary bounded domain; the unit-speed whole-space energy argument is the same cutoff computation"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and
let $F\in C^1(\mathbb R^n;\mathbb R^n)$ ([[def-divergence-and-curl-of-a-c1-vector-field]])
satisfy $|F|\in L^1(\lambda_n)$ (the meaning of vector integrability $F\in L^1$) and $\operatorname{div}F\in L^1(\lambda_n)$, where
$\lambda_n$ is $n$-dimensional Lebesgue measure
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-l-one-of-a-measure]]).
Then

$$\int_{\mathbb R^n}\operatorname{div}F\,d\lambda_n=0 .$$

Both integrability hypotheses are used: $F\in L^1$ is what dominates the cutoff
term $\langle D\chi_R,F\rangle$, and $\operatorname{div}F\in L^1$ is both
the integrand whose integral is computed and its own dominating function. The
conclusion fails if $F\in L^1$ is dropped (a compactly supported $C^1$ function
$h$ with $\int h=1$ has $F(x)=\int_{-\infty}^xh$, so $F\in C^1$ has
$F'=h\in L^1$ but $F\notin L^1$ and $\int_{\mathbb R}F'=1$), and without
$\operatorname{div}F\in L^1$ the displayed integral need not be defined. No decay of the flux is asserted beyond the two stated integrabilities.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; an integer $n\ge1$; a field $F\in C^1(\mathbb R^n;\mathbb R^n)$ with $|F|\in L^1(\lambda_n)$ (the meaning of vector integrability $F\in L^1$) and $\operatorname{div}F\in L^1(\lambda_n)$.

[F1] Divergence theorem: for $n\ge2$, a bounded $C^1$ domain $\Omega$ and $G\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}G\,d\lambda_n=\int_{\partial\Omega}G\cdot\nu\,dS$, under $\mathrm{AC}_\omega$. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F2] For every $0<r<R$ there is a smooth bump $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $\overline B_r(0)$ and $\operatorname{supp}\rho\subseteq B_R(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F3] For $C^1$ fields $F$ and a $C^1$ scalar $\varphi$, the product rule $\operatorname{div}(\varphi F)=\langle\nabla\varphi,F\rangle+\varphi\operatorname{div}F$ holds. ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]])

[F4] Chain rule: $D(G\circ\varphi)(a)=DG(\varphi(a))\circ D\varphi(a)$ for totally differentiable composites. ([[thm-chain-rule-for-total-derivatives]])

[F5] Dominated convergence: if $f_k\to f$ almost everywhere and $|f_k|\le g$ almost everywhere with $\int g\,d\mu<+\infty$, then $\int f_k\,d\mu\to\int f\,d\mu$. ([[thm-dominated-convergence]])

[F6] The second fundamental theorem: if $G$ is differentiable at every point of $[a,b]$ and $G'$ is integrable, then $\int_a^bG'=G(b)-G(a)$ (Darboux integral). ([[thm-ftc-second-part]])

[F7] On a closed bounded interval a bounded function is Darboux integrable exactly when it is Riemann integrable, with the same value. ([[thm-darboux-equals-riemann]])

[F8] A bounded Borel Riemann integrable $f$ on a closed interval $Q$ lies in $L^1(\lambda_1|_Q)$ and its Lebesgue and Riemann integrals over $Q$ agree (under $\mathrm{AC}_\omega$). ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F9] The nonnegative Lebesgue integral is additive over a measurable decomposition of the domain. ([[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F10] Closed bounded Euclidean sets are compact, and continuous real functions on nonempty compact sets are bounded. ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]])

[F11] A continuous real function on a closed bounded interval is bounded and Darboux integrable. ([[thm-continuous-implies-integrable]])

## Proof

1.1 Insert the cutoff: by [F2] with $r=1$, $R=2$ choose $\chi:\mathbb R^n\to[0,1]$ smooth with $\chi=1$ on $\overline B_1(0)$ and $\chi=0$ outside $B_2(0)$; for $R>0$ set $\chi_R(x):=\chi(x/R)$, so that $\chi_R$ is $C^1$ with $0\le\chi_R\le1$, $\chi_R=1$ on $\overline B_R(0)$ and $\chi_R=0$ outside $B_{2R}(0)$; the chain rule [F4] applied to the map $x\mapsto x/R$ gives $D\chi_R(x)=R^{-1}(D\chi)(x/R)$, so with $C_\chi:=\sup_{\mathbb R^n}|D\chi|<\infty$ by [F10] on $\overline B_2(0)$, since $D\chi=0$ off that ball one has $|D\chi_R(x)|\le C_\chi/R$ for every $x$ and every $R>0$. [choose, construct, F2, F4, F10]

2.1 The cutoff divergence integrates to zero: fix $R>0$; the field $\chi_RF$ is $C^1$ on $\mathbb R^n$ and vanishes outside the compact set $\overline B_{2R}(0)$; if $n\ge2$, apply [F1] on the open ball $\Omega=B_{3R}(0)$, a bounded $C^1$ domain whose closure contains $\operatorname{supp}(\chi_RF)$ in its interior, where the boundary term vanishes because $\chi_RF=0$ on $\partial\Omega$, so that $\int_\Omega\operatorname{div}(\chi_RF)\,d\lambda_n=0$ and hence, the integrand vanishing off $\Omega$, also $\int_{\mathbb R^n}\operatorname{div}(\chi_RF)\,d\lambda_n=0$; if $n=1$, put $g:=\chi_RF\in C^1(\mathbb R)$, so $g$ vanishes outside $(-2R,2R)$, and with $a:=-3R$, $b:=3R$ the derivative $g'$ is continuous on $[a,b]$, hence bounded and Darboux integrable, [F6] gives $\int_a^bg'=g(b)-g(a)=0$, [F7] makes this Darboux integral equal to the Riemann integral of $g'$ over $[a,b]$, [F8] applied on the box $Q=[a,b]$ makes that Riemann integral equal to the Lebesgue integral $\int_{[a,b]}g'\,d\lambda_1$, and $g'=0$ on $\mathbb R\setminus[a,b]$, so [F9] applied to the positive and negative parts gives $\int_{\mathbb R}g'\,d\lambda_1=\int_{[a,b]}g'\,d\lambda_1=0$; in both cases $\int_{\mathbb R^n}\operatorname{div}(\chi_RF)\,d\lambda_n=0$. [F1, F6, F7, F8, F9, step 1.1, F11]

3.1 Expand and let $R\to\infty$: by [F3] one has pointwise $\operatorname{div}(\chi_RF)=\langle D\chi_R,F\rangle+\chi_R\operatorname{div}F$, and each of the three functions lies in $L^1(\lambda_n)$, the left side because it is continuous with compact support, $\chi_R\operatorname{div}F$ because $|\chi_R\operatorname{div}F|\le|\operatorname{div}F|$, and $\langle D\chi_R,F\rangle$ because step 1.1 gives $|\langle D\chi_R,F\rangle|\le(C_\chi/R)|F|$; by linearity of the Lebesgue integral on $L^1(\lambda_n)$, $\int_{\mathbb R^n}\operatorname{div}(\chi_RF)\,d\lambda_n=\int_{\mathbb R^n}\chi_R\operatorname{div}F\,d\lambda_n+\int_{\mathbb R^n}\langle D\chi_R,F\rangle\,d\lambda_n$ for every $R>0$, with left-hand side $0$ by step 2.1; as $R\to\infty$ through positive integers (so $R\ge1$), the functions $\chi_R\operatorname{div}F$ converge pointwise to $\operatorname{div}F$ and are dominated by $|\operatorname{div}F|\in L^1(\lambda_n)$, while $\langle D\chi_R,F\rangle$ converge pointwise to $0$ and are dominated by $C_\chi|F|\in L^1(\lambda_n)$, so [F5] gives $\int_{\mathbb R^n}\chi_R\operatorname{div}F\,d\lambda_n\to\int_{\mathbb R^n}\operatorname{div}F\,d\lambda_n$ and $\int_{\mathbb R^n}\langle D\chi_R,F\rangle\,d\lambda_n\to0$; passing to the limit gives $0=\int_{\mathbb R^n}\operatorname{div}F\,d\lambda_n+0$, which is the claim. [step 1.1, step 2.1, F3, F5] ∎ 

## Remarks

The lemma supplies the vanishing flux integral in [[thm-conservation-of-total-wave-energy]](b).

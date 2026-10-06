---
id: ex-scaling-for-the-sobolev-conjugate
kind: example
title: "Dilations force the Sobolev conjugate"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-sobolev-conjugate-exponent, def-l-p-space-as-a-quotient-by-null-functions, thm-linear-change-of-variables-for-lebesgue-measure, thm-chain-rule-for-total-derivatives, def-countable-choice, cor-vector-valued-ftc-and-lipschitz-bound]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, the dilation computation opening the chapter, printed p. 61."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, the scaling discussion before Theorem 3.28, printed pp. 63-65."
---

## Example

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$, $1\le p<n$, and let $1\le q\le\infty$ and $u\in C_c^\infty(\mathbb R^n)\setminus\{0\}$; for $\lambda>0$ put $u_\lambda(x):=u(\lambda x)$. Then
$$\|u_\lambda\|_{L^q}=\lambda^{-n/q}\|u\|_{L^q},\qquad\|Du_\lambda\|_{L^p}=\lambda^{\,1-n/p}\|Du\|_{L^p}.$$
If the inequality $\|u_\lambda\|_{L^q}\le C\|Du_\lambda\|_{L^p}$ is to hold for all $\lambda>0$ with a constant $C$ independent of $\lambda$, then the two powers of $\lambda$ must balance:
$$-\frac nq-\Bigl(1-\frac np\Bigr)=0,\qquad\text{that is}\qquad 1-\frac np+\frac nq=0,$$
which is equivalent to $q=\frac{np}{n-p}=p^{*}$. The exponent $p^{*}$ is therefore forced by scaling alone.

## Facts & Assumptions

**Given:** Countable Choice; $1\le q\le\infty$; $n\ge2$; $1\le p<n$; a fixed nonzero $u\in C_c^\infty(\mathbb R^n)$; and $\lambda>0$.

[F1] The Sobolev conjugate is $p^{*}=np/(n-p)$ and satisfies $\frac1{p^{*}}=\frac1p-\frac1n$ ([[def-sobolev-conjugate-exponent]]).

[F2] An invertible linear map scales Lebesgue measure by $|\det|$: substituting $y=\lambda x$ gives $\int_{\mathbb R^n}g(\lambda x)\,dx=\lambda^{-n}\int_{\mathbb R^n}g(y)\,dy$; an $L^q$ class is determined up to null sets ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] The classical chain rule computes $D(u\circ T)$ for the linear map $T(x)=\lambda x$: $D(u_\lambda)(x)=\lambda\,(Du)(\lambda x)$ ([[thm-chain-rule-for-total-derivatives]]).

[F4] The fundamental theorem on smooth line segments ([[cor-vector-valued-ftc-and-lipschitz-bound]]) implies that a smooth function with zero gradient is constant.

## Verification

**Proof technique:** direct.

1.1 The norm scalings. For finite $q$, by [F2] with $y=\lambda x$, $\|u_\lambda\|_{L^q}^q=\int_{\mathbb R^n}|u(\lambda x)|^q\,dx=\lambda^{-n}\int_{\mathbb R^n}|u(y)|^q\,dy$, so $\|u_\lambda\|_{L^q}=\lambda^{-n/q}\|u\|_{L^q}>0$. For $q=\infty$, the superlevel sets scale in measure by $\lambda^{-n}$, so the essential supremum is unchanged; take $1/q=0$. By the chain rule [F3], $D(u_\lambda)(x)=\lambda\,(Du)(\lambda x)$, so $|Du_\lambda(x)|=\lambda|Du(\lambda x)|$ and $\|Du_\lambda\|_{L^p}^p=\lambda^p\lambda^{-n}\int_{\mathbb R^n}|Du(y)|^p\,dy=\lambda^{p-n}\|Du\|_{L^p}^p$, that is $\|Du_\lambda\|_{L^p}=\lambda^{1-n/p}\|Du\|_{L^p}>0$ (if this norm were zero, continuity would give $Du=0$ everywhere; [F4] would make $u$ constant, and compact support would force $u=0$). [F2, F3, F4, given, algebra]

2.1 The balance condition. Dividing the two identities of step 1.1, the proposed inequality reads $\lambda^{-n/q}\|u\|_{L^q}\le C\lambda^{1-n/p}\|Du\|_{L^p}$ for every $\lambda>0$; after multiplying by $\lambda^{n/q}$ this is $\|u\|_{L^q}\le C\lambda^{\,1-n/p+n/q}\|Du\|_{L^p}$. Since $\|u\|_{L^q}$ and $\|Du\|_{L^p}$ are fixed positive numbers, a finite $C$ satisfying this for all $\lambda>0$ exists exactly when the exponent vanishes, i.e. $1-\frac np+\frac nq=0$; solving, $\frac nq=\frac np-1=\frac{n-p}{p}$, so $q=\frac{np}{n-p}=p^{*}$ by [F1]. [F1, step 1.1, given, algebra] ∎

## Source notes

The computation is the dilation argument that opens Kinnunen's Chapter 3, printed p. 61, and the same scaling discussion precedes Hunter's Theorem 3.28. For $u_\lambda(x)=u(\lambda x)$ the conjugate exponent is selected by requiring the two sides to carry the same power of $\lambda$; the exponent $p^{*}$ arises from the balance $1-\frac np+\frac nq=0$. No optimality of constants beyond this power balance is claimed, and the example does not construct a counterexample for other exponents, which is done on the companion page by the opposite dilation convention.

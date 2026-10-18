---
id: thm-na-rademacher-euclidean
kind: theorem
title: "Rademacher differentiability in Euclidean space"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - lem-acl-representatives-reconstruct-weak-gradients-by-fubini
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-poincare-inequality-on-a-ball
  - thm-countable-union-of-null-is-null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and 3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
---

## Statement

Assume the Axiom of Choice. For every open $U\subseteq\mathbb R^n$ and locally Lipschitz $u:U\to\mathbb R^m$, $u$ is Frechet differentiable outside a Lebesgue null subset of $U$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] [[lem-acl-representatives-reconstruct-weak-gradients-by-fubini]].

[F2] [[thm-c1-lipschitz-ac-bv-hierarchy]].

[F3] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]].

[F4] [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]].

[F5] [[thm-poincare-inequality-on-a-ball]].

[F6] [[thm-countable-union-of-null-is-null]].

## Proof

1.1 Work first with one real component on a ball compactly contained in a neighborhood where its Lipschitz constant is $L$. Every coordinate section is Lipschitz, hence absolutely continuous; its derivative exists almost everywhere and has absolute value at most $L$. Define $g_i$ by the limit of the measurable coordinate difference quotients where this exists and by zero elsewhere. Fubini makes the exceptional set null. ACL reconstruction gives $D_i u=g_i$ weakly; in particular $u\in W^{1,\infty}_{\mathrm{loc}}$. Full AC supplies all choice hypotheses of these suppliers. [given, F1, F2, F3, construct]

1.2 Outside one null set, $x$ is a strong Lebesgue point of the vector $g=(g_i)$. To obtain the strong form from the stated differentiation supplier, apply it, locally, to each $|g_i-q|$, $q\in\mathbb Q$, and to $g_i$, and discard the countable union of exceptional sets. At a remaining $x$, the triangle inequality gives $\limsup_{r\downarrow0}\fint_{B(x,r)}|g_i(y)-g_i(x)|dy\le 2|q-g_i(x)|$; rational approximation makes this zero. Sum over coordinates. Localization uses zero extensions from slightly larger balls, and a countable rational-ball cover suffices. [F4, F6, step 1.1, construct]

2.1 Fix such $x$ and write $w_r(z)=[u(x+rz)-u(x)]/r-g(x)\cdot z$ on $B(0,1)$. These functions vanish at zero and have one common Lipschitz constant $M=L+|g(x)|$. Change of variables in the weak test identity gives $D w_r(z)=g(x+rz)-g(x)$. Thus the $p=1$ ball Poincare inequality yields $\int_{B(0,1)}|w_r-(w_r)_{B(0,1)}|\to0$. This uses no pointwise differentiability of $u$ in dimension $n$. [F5, step 1.1, step 1.2, algebra]

2.2 Set $v_r=w_r-(w_r)_{B(0,1)}$. Uniform Lipschitz continuity upgrades its vanishing $L^1$ norm to $\sup_{B(0,1/2)}|v_r|\to0$: if $|v_r(z)|\ge\varepsilon$ there, then on $B(z,\min(1/4,\varepsilon/(2M)))$ its absolute value is at least $\varepsilon/2$, contradicting the integral limit. If $M=0$ the claim is immediate. Since $w_r(0)=0$, the means also tend to zero, so $\sup_{B(0,1/2)}|w_r|\to0$. Taking $r=2|h|$ proves $u(x+h)-u(x)-g(x)\cdot h=o(|h|)$. [step 2.1, algebra]

3.1 A countable rational-ball cover and the finitely many real components of $u$ produce one null exceptional set. The component derivatives assemble into its Frechet derivative. Full AC is inherited from ACL, differentiation and Poincare; no lesser choice principle is asserted. [F6, step 2.2] ∎

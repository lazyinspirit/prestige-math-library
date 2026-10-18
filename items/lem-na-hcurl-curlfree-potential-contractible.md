---
id: lem-na-hcurl-curlfree-potential-contractible
kind: lemma
title: Weak curl-free fields on a contractible polyhedron are gradients
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-na-hcurl-space,
    lem-na-weak-local-potentials-and-continuation,
    lem-contractibility-implies-trivial-fundamental-group,
    lem-na-lipschitz-scalar-h1-h2-extension,
    thm-poincare-wirtinger-on-bounded-connected-extension-domains,
    thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions,
    thm-zero-weak-gradient-implies-componentwise-constancy,
    thm-fatou-lemma,
    thm-dominated-convergence,
    def-axiom-of-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector
        Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded connected contractible Lipschitz polyhedron. If $u\in H(\operatorname{curl};\Omega)$ has distributional curl zero, then there is $p\in H^1(\Omega)$ with $u=\nabla p$ almost everywhere; $p$ is unique up to an additive constant.

## Facts & Assumptions


**Given:** AC, the domain and the real curl-free field in the Statement. AC is used through the existing analytic suppliers and implies their CC assumptions.

[F1] [[lem-contractibility-implies-trivial-fundamental-group]] gives the loop-homotopy hypothesis of [[lem-na-weak-local-potentials-and-continuation]], which supplies a primitive $f\in H^1_{\mathrm{loc}}(\Omega)$.

[F2] [[lem-na-lipschitz-scalar-h1-h2-extension]] makes this bounded Lipschitz domain an $H^1$ extension domain, so [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]] applies to globally $H^1$ functions.

[F3] [[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]] applies on each relatively compact open subset and hence supplies the local chain rule. [[thm-zero-weak-gradient-implies-componentwise-constancy]] gives uniqueness.

## Proof


1.1 By [F1] choose $f\in H^1_{\mathrm{loc}}(\Omega)$ with $\nabla f=u$. It remains to prove global integrability; local weak exactness alone is insufficient. Fix a ball $B\Subset\Omega$. For $M>0$ let $f_M=\max(-M,\min(f,M))$. By [F3] locally, $f_M\in H^1_{\mathrm{loc}}$, $|\nabla f_M|\le|u|$, and $|f_M|\le M$. Since $\Omega$ has finite measure, these local derivative identities give global $H^1(\Omega)$ membership: the function is globally $L^2$, its locally specified derivatives are globally $L^2$, and every compactly supported test uses only finitely many local identities. Thus [F2] gives $\|f_M-(f_M)_\Omega\|_{L^2(\Omega)}\le C_\Omega\|u\|_2$. [F1, F2, F3, construct]

2.1 Put $a_M=(f_M)_\Omega$ and $b_M=(f_M)_B$. The preceding estimate gives $|a_M-b_M|\le |B|^{-1/2}C_\Omega\|u\|_2$. Therefore $\|f_M-b_M\|_{L^2(\Omega)}\le C_\Omega(1+|\Omega|^{1/2}|B|^{-1/2})\|u\|_2.$ On $B$, $f\in L^2$ and $|f_M|\le|f|$, so dominated convergence gives $b_M\to f_B$. Along the integers $M\to\infty$, $f_M\to f$ almost everywhere; Fatou's lemma applied to the displayed bound yields $f-f_B\in L^2(\Omega)$. Its weak gradient is $u\in L^2$, hence $p=f-f_B\in H^1(\Omega)$. If two such $p$ exist, their difference has zero weak gradient, and [F3] makes it constant on connected $\Omega$. This proves every original analytic and geometric clause. [F3, step 1.1, algebra] ∎

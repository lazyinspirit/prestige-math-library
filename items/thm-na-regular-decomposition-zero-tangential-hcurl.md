---
id: thm-na-regular-decomposition-zero-tangential-hcurl
kind: theorem
title: Regular decomposition of zero-tangential H(curl) fields
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-zero-tangential-hcurl,
    lem-na-full-dirichlet-hcurl-regular-decomposition,
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

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded contractible Lipschitz polyhedron with connected boundary. For every $u\in H_0(\operatorname{curl};\Omega)$ there are $z\in H_0^1(\Omega;\mathbb R^3)$ and $p\in H^1(\Omega)$ such that
$$u=z+\nabla p,\qquad \|z\|_{H^1(\Omega)}+\|p-p_\Omega\|_{H^1(\Omega)}\le C_\Omega\|u\|_{H(\operatorname{curl};\Omega)}.$$
Here $H_0(\operatorname{curl})$ is the closure definition of [[def-na-zero-tangential-hcurl]], and $p_\Omega=|\Omega|^{-1}\int_\Omega p$ fixes the additive constant. The constant may depend on the domain but not on a mesh.

## Facts & Assumptions


**Given:** AC and exactly the domain and zero-tangential field of the Statement. The stronger full Dirichlet supplier below applies to this domain without changing its stated hypotheses.

[F1] [[lem-na-full-dirichlet-hcurl-regular-decomposition]] gives $z\in H_0^1(\Omega;\mathbb R^3)$ and $q\in H_0^1(\Omega)$ with $u=z+\nabla q$ and $\|z\|_{H^1}+\|q\|_{H^1}\le C_\Omega\|u\|_{H(\operatorname{curl})}$.

## Proof


1.1 Apply [F1] and set $p=q$. This supplies the required vector and scalar spaces and the identity, with the original domain, topology, and connected-boundary clauses retained. The proof of [F1] uses only a scalar H2 extension and an explicitly proved Fourier split; it imports no H(curl) extension theorem and no smooth-to-weak cohomology identification. [F1, construct]

2.1 By Holder, $|p_\Omega||\Omega|^{1/2}\le\|p\|_2$, whence $\|p-p_\Omega\|_{H^1}\le2\|p\|_{H^1}$. Combine this with [F1] and absorb the numerical factor into $C_\Omega$ to obtain the asserted estimate. The construction in [F1] fixes $p\in H_0^1$; the present statement only requires $H^1$, so its complete original scalar freedom is retained. [F1, step 1.1, algebra] ∎

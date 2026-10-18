---
id: cex-na-canonical-edge-moments-not-bounded-on-hcurl
kind: counterexample
title: Canonical edge moments are not bounded on H(curl)
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-na-hcurl-space,
    def-na-lowest-order-whitney-de-rham-spaces,
    cor-vector-valued-ftc-and-lipschitz-bound,
    def-countable-choice,
    lem-smooth-bump-between-concentric-euclidean-balls
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
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

## Statement refuted

For a fixed tetrahedral edge $e$, the canonical edge-circulation functional $u\mapsto\int_eu\cdot t_e\,ds$ extends to a bounded linear functional on $H(\operatorname{curl};\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice for the weak-derivative uniqueness convention in [[def-na-hcurl-space]], the graph norm on $H(\operatorname{curl};\Omega)$, a fixed oriented mesh edge $e=[a,b]$, and its canonical circulation degree of freedom from [[def-na-lowest-order-whitney-de-rham-spaces]].

[A1] Countable Choice is the explicit assumption in the real H(curl) graph-space definition; the counterexample uses no stronger choice principle. ([[def-countable-choice]])

[F1] The graph norm is $\|u\|_{H(\operatorname{curl})}^2=\|u\|_2^2+\|\operatorname{curl}u\|_2^2$. ([[def-na-hcurl-space]])

[F2] The canonical edge degree of freedom is $\ell_e(u)=\int_eu\cdot t_e\,ds$ for smooth $u$. ([[def-na-lowest-order-whitney-de-rham-spaces]])

[F3] Along a $C^1$ parameterized segment, the integral of the derivative is the endpoint difference. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F4] For $0<r<R$, there is a smooth $[0,1]$-valued function equal to one on $\overline B_r(0)$ and supported in $B_R(0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Counterexample

1.1 By [F4] with $r=1/2$ and $R=1$, choose $\eta\in C_c^\infty(\mathbb R^3)$ with $\eta(0)=1$ and support in the unit ball. Choose $\varepsilon>0$ small enough that $b\notin a+\varepsilon\operatorname{supp}\eta$. Define $\psi_\varepsilon(x)=\eta((x-a)/\varepsilon)$ on $\Omega$ and $u_\varepsilon=\nabla\psi_\varepsilon$. Then $\operatorname{curl}u_\varepsilon=0$ distributionally because distributional mixed derivatives commute, so [F1] gives $\|u_\varepsilon\|_{H(\operatorname{curl})}=\|u_\varepsilon\|_2$. A change of variables on $\mathbb R^3$ bounds $\|u_\varepsilon\|_2^2\le\varepsilon\|\nabla\eta\|_{L^2(\mathbb R^3)}^2\to0$. [A1, F1, F4, construct, algebra]

2.1 By [F3] along $e$, $\ell_e(u_\varepsilon)=\psi_\varepsilon(b)-\psi_\varepsilon(a)=0-1=-1$ for every such $\varepsilon$. If a bounded extension existed, [F2] would give $|\ell_e(u_\varepsilon)|\le C\|u_\varepsilon\|_{H(\operatorname{curl})}$, which tends to zero by step 1.1, contradicting the fixed value $1$. Thus the edge moment is not bounded on the energy space; canonical interpolation cannot be applied to arbitrary H(curl) fields by these moments alone. [A1, F2, F3, step 1.1, contradiction] ∎


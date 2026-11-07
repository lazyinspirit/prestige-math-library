---
id: lem-azumaya-evaluation-locally-constant-on-characteristic-zero-local-fields
kind: lemma
title: "Local constancy of Azumaya evaluation over characteristic-zero local fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-azumaya-algebra-on-a-variety
  - thm-pgl-torsors-classify-azumaya-algebras
  - thm-classic-brauer-group-is-h2-galois-cohomology
  - thm-jacobian-criterion-smooth-morphism
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stated PGL, smooth-chart and Galois-cohomology suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Brauer evaluation on local points; the finite splitting-field and small-cocycle argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $K$ be $\mathbb R$, $\mathbb C$, or a finite extension of $\mathbb Q_p$, let $X$ be a finite-type $K$-scheme, and let $\mathcal A$ be an Azumaya algebra on $X$. Then the evaluation map
$$X(K)\longrightarrow\operatorname{Br}(K),\qquad x\longmapsto[\mathcal A_x],$$
is locally constant for the usual local-field topology. This result assumes an actual Azumaya representative; it does not assert that every cohomological Brauer class has one.

## Facts & Assumptions

**Given:** The characteristic-zero local field, finite-type scheme and actual Azumaya algebra in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] An Azumaya algebra is finite locally free and has the tensor-to-endomorphism isomorphism. [[def-azumaya-algebra-on-a-variety]]

[F2] Its splitting functor is a $\operatorname{PGL}_n$-torsor, and its class is the corresponding scalar connecting cocycle. [[thm-pgl-torsors-classify-azumaya-algebras]]

[F3] Algebraic Brauer classes over a field agree with the indicated Galois $H^2$ classes. [[thm-classic-brauer-group-is-h2-galois-cohomology]]

[F4] Smooth morphisms admit full-rank Jacobian charts, and an invertible real Jacobian has a local inverse. [[thm-jacobian-criterion-smooth-morphism]] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

## Proof

**Proof technique:** choose one finite splitting field near a point and contract sufficiently small scalar cocycles.

1.1 Fix $x_0\in X(K)$. A geometric fibre of the Azumaya algebra is a matrix algebra; a splitting matrix uses finitely many algebraic coefficients, so some finite Galois extension $L/K$ splits $\mathcal A_{x_0}$. By [F2], the splitting functor $P\to X$ is a $\operatorname{PGL}_n$-torsor and hence smooth. Choose an $L$-point of $P$ above $x_0$. In a smooth Jacobian chart [F4], the real inverse function theorem or, over a nonarchimedean field, the same inverse-linearization and contracting-iteration argument on a sufficiently small valuation ball gives a continuous local section over an $L$-neighborhood of $x_0$. Restrict it to a $K$-neighborhood $U$ of $x_0$. Thus the same $L$ splits every $\mathcal A_x$ for $x\in U$, with a continuous choice of splitting matrices. [A1, F1, F2, F4, given, choose, construct, algebra]

2.1 Let $\Gamma=\operatorname{Gal}(L/K)$. For each of its finitely many elements, compare the splitting with its conjugate; this gives a continuous $\operatorname{PGL}_n(L)$ transition. Near $x_0$, lift each transition continuously to $\operatorname{GL}_n(L)$ by fixing a nonzero matrix coordinate and scaling it to one. Their scalar triple-product defects give a continuous family of normalized cocycles $c_x:\Gamma^2\to L^\times$. By [F2] and [F3], $[c_x]$ is exactly $[\mathcal A_x]$ in $\operatorname{Br}(K)$. [F2, F3, step 1.1, choose, construct, algebra]

3.1 Shrink $U$ so all ratios $c_x(\sigma,\tau)c_{x_0}(\sigma,\tau)^{-1}$ lie in a fixed small Galois-stable neighborhood $V$ of $1$. In the nonarchimedean case, choose $V=1+\mathfrak m_L^m$ with $m$ large enough that logarithm and exponential give inverse homomorphisms between $V$ and $\mathfrak m_L^m$; in the real or complex case use a sufficiently small logarithm neighborhood. Choose $m$ deeper still, if necessary, so dividing the finitely many logarithms by $|\Gamma|$ stays in the domain of exponential. The difference cocycle then becomes an additive $2$-cocycle, and finite averaging by $|\Gamma|^{-1}$ is an explicit contracting homotopy: it is an additive coboundary. Exponentiating its $1$-cochain shows $c_x/c_{x_0}$ is a multiplicative coboundary. Thus $[\mathcal A_x]=[\mathcal A_{x_0}]$ throughout $U$. The complex case also follows with trivial Galois group. [step 2.1, construct, algebra] ∎

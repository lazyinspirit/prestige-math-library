---
id: thm-cheeger-gromov-uniform-rho-bound
kind: theorem
title: "Cheeger–Gromov uniform bound for rho invariants"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jeff Cheeger and Mikhael Gromov, “Bounds on the von Neumann dimension of L²-cohomology and the Gauss–Bonnet theorem for open manifolds”"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cheegergr.pdf"
      locator: "§4, eta-invariant variation and uniform bound"
---

## Statement

For every closed oriented 3-manifold M there exists a finite constant C_M such that for every discrete group Γ and every homomorphism φ:π₁(M)→Γ for which the rho invariant is defined, |ρ(M,φ)|≤C_M. The constant may depend on M but not on Γ or φ.

## Statement references

[Cheeger–Gromov, §4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cheegergr.pdf)

## Facts & Assumptions

**Given:** Full AC as in the coefficient Definition and a fixed closed oriented three-manifold $M$. First give $M$ a specified smooth structure and interpret rho by its independent smooth bounding defect.

[A1] Full AC is the standing coefficient convention. [[def-integral-half-solutions-strebel-and-l2-signatures]], [[def-axiom-of-choice]]

[F1] A rho invariant is called such only after bounding-defect independence is proved. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] The smooth group-signature theorem constructs one fixed smooth bound $W_M$ over an acyclic envelope of $\pi_1M$ and proves smooth defect independence for all representations and injective target enlargements. It also constructs a fixed finite-projective chain model and an idempotent presentation $E_2=eR^N$ for that bound. [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

## Proof

1.1 For smooth $M$, choose the one $W_M$ and degree-two presentation in [F2] before choosing a target or representation. For each $\phi:\pi_1M\to\Gamma$, functoriality of the acyclic envelope extends the representation over this same bound after the injective enlargement $\Gamma\hookrightarrow A(\Gamma)$. The actual coefficient chain-homotopy identities extend under the resulting ring homomorphism, so they still model its singular complex; no flatness of that homomorphism is needed. The extended degree-two term is the range of the same size-$N$ idempotent, of von Neumann dimension at most $N$. Its reduced homology and the positive and negative spectral subspaces have dimension at most $N$, hence $|\operatorname{sign}^{(2)}_{A(\Gamma)}W_M|\le N$. Ordinary augmentation gives $|\operatorname{sign}W_M|\le N$ too. Independence in [F2] therefore yields $|\rho_{\mathrm{sm}}(M,\phi)|\le2N$, uniformly over every target cardinality and every homomorphism, including nononto maps. For finitely many components sum these constants; the empty manifold has constant zero. [A1, F1, F2, given, construct, algebra]

2.1 Consequently the entire bound in the Statement is proved whenever the rho in question is the independent smooth bounding defect on the specified smooth $M$. The literal Statement does not specify smooth structures or bound category, so it also retains a nonsmooth TOP interpretation: comparing a TOP bounding defect to the value bounded in step 1.1 still needs the full TOP closed-index/realization interface recorded in the bordism-independence carrier. No heat-kernel or eta estimate is being imported as a proof of that interface. The smooth uniform bound is now unconditional in its actual scope, while that additional TOP comparison remains held. [F1, F2, step 1.1]

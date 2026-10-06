---
id: cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight
kind: counterexample
title: "Omitting the exterior root-weight shifts gives the wrong dot weight"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-axiom-of-choice, ex-kostant-n-cohomology-for-sl2, def-chevalley-eilenberg-cochains, def-lie-algebra-cohomology, def-special-linear-lie-algebra-sl-two, thm-root-sl-two-triple, def-weyl-vector-rho-for-a-chosen-positive-system, def-root-reflections-and-the-weyl-group-action, def-weight-and-weight-space-of-a-lie-algebra-representation]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Direct sl2 cochain-weight check against the sign conventions of the Chevalley–Eilenberg complex; this ai-generated row is not a dependency target for any item"
      locator: "direct rank-one computation"
---

## Statement refuted

**False claim.** The weight of the degree-one Kostant generator for $\mathfrak{sl}_2$ can be computed without the exterior root-weight contribution: taking only the extremal vector gives the weight $w\lambda=-m\omega$, and attaching the $\rho$-shift to the top weight gives the weight $\lambda-\alpha=(m-2)\omega$. In particular the exterior factor $\varepsilon_\alpha$ may be dropped from the generator, or the whole $\rho$-shift counted only once off the exterior part.

## Facts & Assumptions

**Given:** The Axiom of Choice, inherited from the cited Kostant example; $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$, $\lambda=m\omega$ with $m\in\mathbb Z_{\ge0}$, $\rho=\omega=\alpha/2$, $s\rho=-\rho$, the cochain $\varepsilon_\alpha\otimes v_{s\lambda}$ of weight $-\alpha+s\lambda$, and the alternative weights $-m\omega$ and $(m-2)\omega$.

[L1] In rank one, $s\alpha=-\alpha$, $s\rho=-\rho$, and the dot action is $s\cdot\lambda=s(\lambda+\rho)-\rho=-\lambda-2\rho=-(m+2)\omega$ ([[def-root-reflections-and-the-weyl-group-action]], [[def-weyl-vector-rho-for-a-chosen-positive-system]], [[def-special-linear-lie-algebra-sl-two]], [[thm-root-sl-two-triple]]).

[L2] The cochain $\varepsilon_\alpha\otimes v$ has weight $-\alpha+\mathrm{wt}(v)$; the space $V=L(m\omega)$ has the weight $s\lambda=-m\omega$ with multiplicity one ([[def-chevalley-eilenberg-cochains]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[ex-kostant-n-cohomology-for-sl2]]).

## Counterexample

**Proof technique:** compare the three candidate weights in rank one.

1.1 The correct weight is $-\alpha-m\omega=-2\omega-m\omega=-(m+2)\omega$, and by [L1] this equals $s\cdot\lambda$; the exterior factor contributes $s\rho-\rho=-2\rho=-\alpha$ and the vector factor contributes $s\lambda=-m\omega$, so the two shifts are distinct and both are needed. [L1, L2]

2.1 Dropping the exterior factor leaves the weight $s\lambda=-m\omega$, which differs from the correct weight by $2\omega$ for every $m\ge0$; since $\omega\ne0$, the difference never vanishes. Replacing the vector factor by the top weight and moving the whole shift to the exterior part would give $\lambda-\alpha=m\omega-2\omega=(m-2)\omega$, which differs from $-(m+2)\omega$ by $2m\omega$, vanishing exactly when $m=0$, so it differs for every $m\ge1$. [L1, L2, step 1.1]

3.1 The true degree-one cohomology weight is therefore $-(m+2)\omega$, and neither of the two listed modifications produces it uniformly in $m$: the exterior root-weight shift $s\rho-\rho=-\alpha$ must be added to the vector shift $s\lambda=-m\omega$, not dropped and not counted twice. [L1, step 2.1] ∎ 
---
id: fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms
kind: false-statement
title: "FALSE: every homomorphism carries the Frattini subgroup into the target Frattini subgroup"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-frattini-image-under-a-nonsurjective-homomorphism, def-frattini-subgroup-of-a-finite-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every homomorphism $f:G\to H$ between finite groups satisfies $f(\Phi(G))\le\Phi(H)$.

## Facts & Assumptions

**Given:** Finite groups and their Frattini subgroups ([[def-frattini-subgroup-of-a-finite-group]]).

[L1] The embedding $C_4\hookrightarrow S_5$ sending a generator to a $4$-cycle has $f(\Phi(C_4))\nleq\Phi(S_5)$ ([[cex-frattini-image-under-a-nonsurjective-homomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 The embedding in [L1] is a homomorphism for which the claimed inclusion fails, so it refutes the universal statement. [L1]

1.2 Surjectivity gives the valid replacement. If $f:G\to H$ is onto and $M$ is maximal in $H$, then $f^{-1}(M)$ is maximal in $G$: a subgroup $K$ properly containing it has $f(K)>M$, hence $f(K)=H$; for every $g\in G$, choose $k\in K$ with $f(k)=f(g)$, and then $gk^{-1}\in\ker f\le f^{-1}(M)\le K$, so $K=G$. Therefore every $x\in\Phi(G)$ lies in every $f^{-1}(M)$, and $f(x)$ lies in every maximal $M$, hence in $\Phi(H)$. [given, algebra]

2.1 Step 1.1 shows that nonsurjective homomorphisms need not satisfy the inclusion, while step 1.2 identifies the missing sufficient hypothesis. [step 1.1, step 1.2] ∎

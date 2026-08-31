---
id: fs-every-vector-bundle-is-globally-trivial
kind: false-statement
title: "Every vector bundle is globally trivial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-vector-bundle-construction-from-a-smooth-cocycle, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Every smooth vector bundle is globally trivial.

## Facts & Assumptions

**Given:** The displayed universal triviality claim.

[L1] A smooth cocycle defines a smooth vector bundle
([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

[L2] A smooth vector bundle is trivial if and only if it has a global frame
([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

## Refutation

**Proof technique:** direct.

1.1 Cover $S^1$ by the two standard arcs $U_0=S^1\setminus\{(-1,0)\}$ and $U_1=S^1\setminus\{(1,0)\}$. Their overlap has an upper and a lower component. Define a rank-one cocycle by $g_{10}=1$ on the upper overlap and $g_{10}=-1$ on the lower overlap. By [L1], this glues a smooth line bundle $L\to S^1$. [L1, given, construct]
2.1 If $L$ were trivial, then [L2] would give a nowhere-zero global frame. In local trivializations that would be given by nowhere-zero functions $f_0$ on $U_0$ and $f_1$ on $U_1$ with $f_1=f_0$ on the upper overlap and $f_1=-f_0$ on the lower overlap. Since $U_1$ is connected, a nowhere-zero continuous $f_1$ has constant sign, but the two overlap equations force opposite signs. This contradiction shows that $L$ is not trivial. [L2, step 1.1, contradiction] ∎
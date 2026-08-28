---
id: thm-chordal-limit-theorem-for-meromorphic-functions
kind: theorem
title: "A chordally locally uniform meromorphic limit is meromorphic or identically infinity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chordal-local-uniform-convergence-and-meromorphic-normality, def-meromorphic-function-riemann-sphere, thm-hurwitz-zero-free-limit, thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

Let $\Omega$ be a plane domain, and let $f_n:\Omega\to\widehat{\mathbb C}$ be
meromorphic functions converging chordally locally uniformly to a map
$f:\Omega\to\widehat{\mathbb C}$. Then $f$ is meromorphic or identically
$\infty$. If every $f_n$ is holomorphic, then $f$ is holomorphic or identically
$\infty$.

## Facts & Assumptions

**Given:** A plane domain $\Omega$ and a chordally locally uniformly convergent sequence $f_n\to f$ of meromorphic maps to $\widehat{\mathbb C}$.

[L1] Locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L2] A locally uniform limit of nowhere-zero holomorphic functions is either identically zero or nowhere zero ([[thm-hurwitz-zero-free-limit]]).

## Proof

**Proof technique:** direct.

1.1 A local uniform limit of continuous maps into the metric space $(\widehat{\mathbb C},\chi)$ is continuous, so $f$ is chordally continuous. If $f(a)\in\mathbb C$, choose a chordal neighbourhood $U$ of $f(a)$ whose closure misses $\infty$. On $U$ the chordal and Euclidean metrics are comparable, and continuity of $f$ together with chordal local uniform convergence gives a neighbourhood $V$ of $a$ with $f(V)\cup f_n(V)\subseteq U$ for all large $n$. On $V$ the maps $f_n$ have no poles, hence are holomorphic there, and [L1] makes the Euclidean local uniform limit $f$ holomorphic near $a$. [L1, given, choose, algebra]

1.2 If $f(a)=\infty$, choose a chordal neighbourhood $U$ of $\infty$ whose complement is a closed Euclidean disc. Continuity of $f$ and chordal local uniform convergence give a neighbourhood $V$ of $a$ with $f(V)\cup f_n(V)\subseteq U$ for all large $n$. The infinity-chart expressions $g=1/f$ and $g_n=1/f_n$ are then well-defined holomorphic maps on $V$, and the same metric comparison turns $g_n\to g$ into Euclidean local uniform convergence. Fact [L1] makes $g$ holomorphic, so $f$ is meromorphic at $a$. [L1, given, choose, algebra]

2.1 When every $f_n$ is holomorphic, the functions $g_n$ of step 1.2 are holomorphic and nowhere zero on $V$. By [L2], their limit $g$ is either identically $0$ on $V$ or nowhere zero. Because $g(a)=0$, one gets $g\equiv0$ on $V$, so $f\equiv\infty$ on $V$. Thus the $\infty$-value set of $f$ is open in the holomorphic-input case. [L2, step 1.2, given]

3.1 If $f$ takes some finite value, then steps 1.1 and 1.2 show that it is meromorphic at every point of $\Omega$; otherwise $f\equiv\infty$. In the holomorphic-input case, the finite-value set is open by step 1.1 and the $\infty$-value set is open by step 2.1, so connectedness leaves only the two possibilities: $f$ is holomorphic on all of $\Omega$, or $f\equiv\infty$. [step 1.1, step 1.2, step 2.1, given] ∎

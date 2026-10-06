---
id: cex-heat-equation-does-not-have-finite-propagation
kind: counterexample
title: "The heat equation has no finite propagation speed"
status: published
origin: pipeline
deps:
  - cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step5-hash-3-post-5a.json"
    content_sha256: "214510974d80b1c34c690b4a7e456e12c29fd4769f6f8c2438fa3998c6da377a"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, note after formula (6.38) (infinite propagation speed)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Remark 3.1.6(c), printed p. 105 (domain of dependence and infinite propagation speed)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Remark 1.1.4, printed p. 5"
---

## Statement refuted

The finite-propagation claim for the heat equation: there is a finite speed
$c\ge0$ such that for every compactly supported datum $g$ and every $t>0$ the
solution $H_tg$ vanishes outside the $ct$-neighbourhood of
$\operatorname{supp}g$, that is,
$\operatorname{supp}(H_tg)\subseteq\{x:\operatorname{dist}(x,\operatorname{supp}g)\le ct\}$.
This fails at every positive time for the indicator of an interval.

## Facts & Assumptions

**Given:** Countable Choice, $n=1$, the datum $f=\mathbf 1_{[-1,1]}$, $t>0$ and $x\in\mathbb R$.

[A1] Countable Choice is the hypothesis carried by the evolution and positivity suppliers below ([[def-countable-choice]]).

[F1] The indicator of a measurable set is measurable ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]), and $\operatorname{supp}(f)=[-1,1]$ for $f=\mathbf 1_{[-1,1]}$.

[F2] If $g\in L^1(\mathbb R)$ satisfies $g\ge0$ almost everywhere and $g\ne0$, then for every $t>0$ the everywhere-defined integral $H_tg(x)=\int_{\mathbb R}\Gamma(x-y,t)g(y)\,dy$ is strictly positive at every $x\in\mathbb R$ ([[cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class]]).

[F3] For $t>0$ the heat kernel is $\Gamma(z,t)=(4\pi t)^{-1/2}e^{-z^2/(4t)}>0$ with unit mass, and $H_t$ is the evolution of [[def-heat-evolution-of-initial-data]] ([[def-heat-kernel]]).



## Counterexample

**Proof technique:** direct.

1.1 The datum $f=\mathbf 1_{[-1,1]}$ is measurable by [F1], is nonnegative everywhere with $f=1$ on a set of measure $2$, is not the zero class, has $\int_{\mathbb R}|f|=2<\infty$, hence lies in $L^1(\mathbb R)$, and has compact support $[-1,1]$. [A1, F1, given, algebra]

2.1 Infinite propagation: since $f\in L^1(\mathbb R)$, $f\ge0$ and $f\ne0$, the infinite-propagation corollary [F2] gives $H_tf(x)>0$ at every $x\in\mathbb R$ and every $t>0$; consequently the set on which the solution is nonzero is all of $\mathbb R$, so $\operatorname{supp}(H_tf)=\mathbb R$ for every $t>0$. [F2, F3, step 1.1, given]

3.1 Fix any finite speed $c\ge0$ and any $t>0$. At $x=2+ct$ one has $\operatorname{dist}(x,[-1,1])=1+ct>ct$, but $H_tf(x)>0$ by step 2.1. Thus the required support inclusion fails for every proposed finite speed. [step 2.1, given, algebra]

4.1 Steps 1.1, 2.1 and 3.1 exhibit a nonzero nonnegative compactly supported $L^1$ datum whose heat flow is strictly positive at every point at every positive time, so the support of the solution is the whole line although the support of the datum is $[-1,1]$; the finite-propagation claim is refuted. [step 2.1, step 3.1, given] ∎

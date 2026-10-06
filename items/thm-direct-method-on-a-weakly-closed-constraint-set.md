---
id: "thm-direct-method-on-a-weakly-closed-constraint-set"
kind: "theorem"
title: "The direct method on a weakly closed constraint set"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 4
deps:
  - "def-dependent-choice"
  - "def-hahn-banach-extension-principle-relative"
  - "def-proper-coercive-and-weakly-lower-semicontinuous-functional"
  - "def-reflexive-banach-space"
  - "def-ultrafilter-extension-principle"
  - "def-weak-convergence-of-nets-and-sequences"
  - "thm-norm-closed-convex-iff-weakly-closed"
  - "thm-direct-method-in-a-reflexive-banach-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-303 (Lemma 13.5 and Theorem 13.6: the level set of a continuous functional on a compactly embedded space is weakly sequentially closed, so the direct method applies to the constraint)"
---

## Statement

Assume the ultrafilter lemma, DC and HB ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). Let $X$ be a real reflexive Banach space ([[def-reflexive-banach-space]]), let $A\subseteq X$ be nonempty and weakly sequentially closed ([[def-weak-convergence-of-nets-and-sequences]]), and let $I:X\to(-\infty,+\infty]$ be proper, coercive on $A$ and weakly sequentially lower semicontinuous on $A$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). Then $I$ attains its infimum on $A$: there is $u_0\in A$ with $I(u_0)=\inf_A I$. In particular, if $C\subseteq X$ is nonempty, convex and norm closed, and the restriction $I|_C$ is proper, coercive on $C$ and weakly sequentially lower semicontinuous on $C$, then $C$ is weakly sequentially closed and the conclusion holds for $A=C$.

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC and HB; a real reflexive Banach space $X$; a nonempty weakly sequentially closed set $A\subseteq X$; and a proper functional $I:X\to(-\infty,+\infty]$ that is coercive and weakly sequentially lower semicontinuous on $A$. For the second assertion, a nonempty convex norm-closed set $C\subseteq X$ such that $I|_C$ is proper, coercive and weakly sequentially lower semicontinuous on $C$.

[F1] [[thm-direct-method-in-a-reflexive-banach-space]]: under the ultrafilter lemma, DC and HB, for every real reflexive Banach space $X$, every nonempty weakly sequentially closed $A\subseteq X$ and every proper coercive weakly sequentially lower semicontinuous $I:X\to(-\infty,+\infty]$, there is $u_0\in A$ with $I(u_0)=\inf_AI$. In particular, a convex norm-closed set $C$ may be used as the admissible set when $I|_C$ is proper, coercive and weakly sequentially lower semicontinuous on $C$.

[F2] [[thm-norm-closed-convex-iff-weakly-closed]]: under the assumed HB, every convex norm-closed subset of a normed space is weakly closed and therefore weakly sequentially closed, so every weakly convergent sequence in it has its limit in the set.

[A1] [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]: the three hypotheses recorded in the statement, exactly as consumed by [F1].



## Proof

**Proof technique:** direct.

**Given:** The hypotheses of the statement, including a real reflexive Banach space $X$ and a nonempty weakly sequentially closed $A\subseteq X$, with $I$ proper, coercive on $A$ and weakly sequentially lower semicontinuous on $A$.

1.1 All hypotheses of [F1] are met: $X$ is a real reflexive Banach space, $A$ is nonempty and weakly sequentially closed, and $I$ is proper, coercive on $A$ and weakly sequentially lower semicontinuous on $A$; the ultrafilter lemma, DC and HB are assumed [A1]. Hence there is $u_0\in A$ with $I(u_0)=\inf_AI$. [given, A1, F1]

1.2 For the second assertion let $C\subseteq X$ be nonempty, convex and norm closed, and assume $I|_C$ is proper, coercive on $C$ and weakly sequentially lower semicontinuous on $C$. Then $C$ is weakly sequentially closed by [F2], and all hypotheses of [F1] hold with $A=C$; hence there is $u_0\in C$ with $I(u_0)=\inf_CI$. [F1, F2]

2.1 Step 1.1 proves the first assertion and step 1.2 the "in particular" clause; no convexity or smoothness of a general admissible set $A$ is claimed beyond what is stated, and the three hypotheses of the statement are used only through [F1]. [step 1.1, step 1.2, A1] ∎

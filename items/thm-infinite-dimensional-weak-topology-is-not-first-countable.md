---
id: "thm-infinite-dimensional-weak-topology-is-not-first-countable"
kind: "theorem"
title: "Infinite dimensional weak topology is not first countable"
deps: ["thm-continuous-dual-of-a-weak-topology", "lem-basic-weak-neighborhoods", "thm-banach-space-no-countably-infinite-hamel-basis", "thm-bounded-operator-space-is-banach", "cor-relative-hahn-banach-dual-norming", "def-hahn-banach-extension-principle-relative", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]) and Countable Choice ([[def-countable-choice]]). An infinite-dimensional real or complex normed space has no countable weak neighborhood base at zero.

## Facts & Assumptions

[F1] Weak neighborhoods admit finite-coordinate disk refinements ([[lem-basic-weak-neighborhoods]]).

[F2] The weakly continuous scalar-linear dual is precisely $X^*$ ([[thm-continuous-dual-of-a-weak-topology]]).

[F3] The bounded dual is Banach, since its scalar target is Banach ([[thm-bounded-operator-space-is-banach]]).

[F4] In ZF, a Banach space has no countably infinite Hamel basis ([[thm-banach-space-no-countably-infinite-hamel-basis]]).

[F5] Under HB, bounded functionals separate primal points ([[cor-relative-hahn-banach-dual-norming]]).

## Proof

**Given:** the stated axioms and an infinite-dimensional normed space $X$.

1.1 Suppose $(U_n)$ is a countable weak local base at zero. For each $n$ the set of finite lists of functionals and positive radii defining a basic neighborhood $V_n\subseteq U_n$ is nonempty. Apply Countable Choice once to these sets, fixing such finite lists. Enumerate their entries by pairs of natural numbers, padding each finite list with zero functionals. This gives a sequence $(h_k)$ containing every chosen functional. [given, F1]

2.1 Fix $f\in X^*$. It is weakly continuous by F2. Some $U_n$ lies inside $\{|f|<1\}$, so $V_n$ lies there too. Scaling shows that $f$ vanishes on the common kernel of its finite defining list. For its coordinate map $A$, the rule $\ell(Ax)=f(x)$ is well-defined by this kernel inclusion. Extend a finite basis of $A(X)$ to one of $\mathbb K^m$, and set $\ell=0$ on added basis vectors. If $c_j$ are the values of the extension on standard coordinate vectors, then $f(x)=\sum_jc_j(Ax)_j$. Hence $f$ is a finite linear combination of the defining list. Thus the algebraic span of $(h_k)$ is all of $X^*$. [step 1.1, F2]

3.1 Scan $(h_k)$ in order, retaining an entry precisely when it is outside the span of preceding retained entries. This deterministic rule gives either a finite basis or an infinite subsequence forming a countably infinite Hamel basis of $X^*$: every discarded entry is in the earlier retained span, while each retained entry preserves independence. The infinite outcome is impossible because $X^*$ is Banach and F4 is choice-free. Therefore $X^*$ has a finite basis $g_1,\ldots,g_d$. [step 2.1, F3, F4]

4.1 The map $x\mapsto(g_1(x),\ldots,g_d(x))$ is injective: a kernel vector is killed by every member of their span $X^*$ and is zero by HB separation. But $d+1$ independent vectors in $X$ would have dependent images in $\mathbb K^d$, contradicting injectivity. Such vectors exist by finite induction from infinite dimension. This contradiction excludes the supplied countable local base. Countable Choice was used only in step 1.1 and HB only in this step. $\square$ [step 3.1, F5, given]

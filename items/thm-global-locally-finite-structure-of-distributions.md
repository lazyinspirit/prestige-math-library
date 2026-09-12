---
id: "thm-global-locally-finite-structure-of-distributions"
kind: "theorem"
title: "Global locally finite structure of distributions"
deps: ["lem-compact-support-continuous-primitive-representation", "thm-distributions-form-a-sheaf", "lem-test-function-cutoffs-and-euclidean-localization", "def-axiom-of-choice", "thm-compactly-supported-distributions-have-global-finite-order", "def-multiplication-of-a-distribution-by-a-smooth-function"]
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
    - url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      title: "Razvan Gelca, Functional Analysis"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Every $u\in\mathcal D'(\Omega)$ has a representation $u=\sum_\alpha\partial^\alpha u_{g_\alpha}$ with continuous complex functions $g_\alpha$ on $\Omega$, such that every compact subset of $\Omega$ meets the supports of only finitely many $g_\alpha$. Thus each test evaluation of the sum is finite. If $u$ has global order at most $m$, the functions can be taken zero unless $\alpha_i\le m+2$ for every coordinate, so only finitely many multi-indices are needed. AC is used in the local representation supplier and to select its representations for the countably many localized pieces.

## Facts & Assumptions

[F1] A compactly supported distribution of order at most $m$ has a finite continuous-function derivative representation with coefficient supports in any prescribed open neighborhood, and coordinate exponents at most $m+2$, under AC ([[lem-compact-support-continuous-primitive-representation]]).

[F2] Restrictions of distributions compose, and compatible distributions on an arbitrary open cover glue uniquely ([[thm-distributions-form-a-sheaf]]).

[F3] There is an at most countable locally finite smooth partition of unity with compact supports on $\Omega$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] AC is assumed as in [[def-axiom-of-choice]].

[F5] Compactly supported distributions have global finite order ([[thm-compactly-supported-distributions-have-global-finite-order]]).

[F6] A smooth multiplier acts by test multiplication ([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

## Proof

**Given:** AC and $u\in\mathcal D'(\Omega)$.

1.1 Take a partition $(\eta_i)$ from F3, indexed by positive integers or a finite initial segment, and discard zero functions. Write $S_i=\operatorname{supp}\eta_i$. These nonempty compacts admit a locally finite family of relatively compact open neighborhoods $V_i$: set $\varepsilon_i=\min(1/i,1,\operatorname{dist}(S_i,\mathbb R^n\setminus\Omega)/2)$, interpreting distance to the empty set as infinity, and take $V_i=\{x:\operatorname{dist}(x,S_i)<\varepsilon_i\}$. Their closures are compact inside $\Omega$. To see local finiteness, fix a ball $B(x,2r)$ compactly inside $\Omega$. Its closure meets only finitely many $S_i$ by the given local finiteness and compactness. The remaining supports lie outside this ball; for all sufficiently large $i$, $\varepsilon_i<r$, so their $V_i$ miss $B(x,r)$. Only finitely many exceptions remain. [given, F3]

2.1 Define $u_i=\eta_i u$. By F6 its support is contained in $S_i$, so F5 gives it some global order $m_i$. F1 gives a finite representation $u_i=\sum_\alpha\partial^\alpha u_{g_{i,\alpha}}$ with continuous coefficient functions compactly supported in $V_i$. Use F4 to select one such finite representation for every index, including an order and its coefficient tuple; the sets of possible tuples are nonempty by F1 and F5. Set $g_{i,\alpha}=0$ outside its finite index set. [step 1.1, F1, F4, F5, F6]

3.1 Put $g_\alpha=\sum_i g_{i,\alpha}$. Step 1.1 makes these sums locally finite, hence continuous. A locally finite union of closed coefficient supports is closed: near any point only finitely many supports occur, and the complement of that finite union is open. Consequently $\operatorname{supp}g_\alpha$ is contained in the union of the corresponding coefficient supports. A compact $H$ meets only finitely many $V_i$, and each of those indices has only finitely many coefficients, so $H$ meets only finitely many $\operatorname{supp}g_\alpha$. [step 2.1, step 1.1]

4.1 Fix $\alpha$ and cover $\Omega$ by open balls whose compact closures lie in $\Omega$. Each closure meets only finitely many $V_i$, so on each ball the regular functional of $g_\alpha$ is the finite sum of the corresponding regular distributions $u_{g_{i,\alpha}}$. These local distributions agree on overlaps because both finite expressions integrate the same locally finite pointwise sum. F2 therefore glues them to a distribution on $\Omega$, and uniqueness identifies that distribution with the regular functional denoted $u_{g_\alpha}$. For a test $\varphi$, only finitely many partition supports meet its compact support, so the partition identity from F3 and linearity give $u(\varphi)=\sum_i u(\eta_i\varphi)=\sum_i u_i(\varphi)$. Insert the representations from step 2.1. The same compact meets only finitely many $V_i$, and all distribution derivatives of regular coefficients supported elsewhere vanish on the test. Thus both sums may be interchanged as finite sums, and finite linearity of the regular integral gives $u(\varphi)=\sum_\alpha(\partial^\alpha u_{g_\alpha})(\varphi)$. [step 3.1, step 2.1, F2, F3, F6]

5.1 If $u$ has global order at most $m$, every $u_i=\eta_i u$ has order at most $m$: on any fixed compact, the product rule bounds $p_m(\eta_i\varphi)$ by a finite constant times $p_m(\varphi)$, without increasing the order. Choose all representations in step 2.1 using this same $m$. Then F1 permits only the fixed finite index box $\alpha_i\le m+2$, proving the final assertion. Empty $\Omega$ or $u=0$ permits all coefficients zero. The partition and open enlargements use no choice; the representation selection and its supplier have the explicit AC use. $\square$ [step 4.1, step 2.1, F1, F4, F6]

---
id: thm-hardy-littlewood-maximal-inequality-for-balls
kind: theorem
title: "The centered Hardy-Littlewood maximal operator is weak type $(1,1)$"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, def-l-one-of-a-measure, prop-ball-average-is-continuous-in-centre-and-radius, thm-lebesgue-inner-regularity-by-closed-and-compact-sets, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: codex
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local witness-selection repair; no independent judge
    delegated_by: owner
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.6.20"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.17"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Theorem 7.4"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1(\mathbb{R}^n)$ and let $t>0$. Then
$$\lambda(\{x\in\mathbb{R}^n:Mf(x)>t\}) \le\frac{5^n}{t}\|f\|_1.$$
In particular, the centered maximal operator is of weak type $(1,1)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a function $f\in L^1(\mathbb{R}^n)$, and a real number $t>0$.

[L1] The centered maximal function is $$Mf(x)=\sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)|\,d\lambda(y).$$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[L2] For a locally integrable function, the ball-average map $$(x,r)\mapsto \frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)|\,d\lambda$$ is continuous on $\mathbb{R}^n\times(0,\infty)$. ([[prop-ball-average-is-continuous-in-centre-and-radius]])

[L3] Lebesgue measure on $\mathbb{R}^n$ is inner regular by compact sets on open sets. ([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]])

[L4] A finite family of balls admits a disjoint subfamily whose fivefold dilates cover the original union, with the measure estimate $$\lambda\!\left(\bigcup_j B_j\right)\le 5^n\sum_k\lambda(B_{i_k}).$$ ([[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]])

[L5] The $L^1$ norm is $$\|f\|_1=\int_{\mathbb{R}^n}|f|\,d\lambda.$$ ([[def-l-one-of-a-measure]])

## Proof

**Proof technique:** direct.

1.1 Put $E_t=\{x:Mf(x)>t\}$. For a fixed $x\in E_t$, [L1] supplies a radius $r>0$ with $\int_{B(x,r)}|f|>t\lambda(B(x,r))$. Continuity [L2] with this fixed radius makes the inequality persist in a neighbourhood of $x$, so $E_t$ is open. Let $K\subseteq E_t$ be compact. If $K=\varnothing$, the required bound for $\lambda(K)$ is immediate. Otherwise take the family of ALL balls $B(x,r)$ with $x\in K$, $r>0$ and the strict witness inequality. This family covers $K$, so it has a finite subcover $B(x_1,r_1),\ldots,B(x_m,r_m)$. No simultaneous choice of a radius for every point of $K$ is made. [L1, L2, given, construct]

2.1 Apply [L4] to that finite subcover. There are pairwise disjoint balls [step 1.1, L4, L5, algebra] $B_{i_1},\dots,B_{i_\ell}$ among $B(x_1,r_1),\dots,B(x_m,r_m)$ such that $$K\subseteq\bigcup_{j=1}^mB(x_j,r_j)\subseteq\bigcup_{k=1}^\ell5B_{i_k}$$ and therefore $$\lambda(K)\le5^n\sum_{k=1}^\ell\lambda(B_{i_k}).$$ Each chosen ball still satisfies the witness inequality from step 1.1, so $$t\sum_{k=1}^\ell\lambda(B_{i_k}) <\sum_{k=1}^\ell\int_{B_{i_k}}|f|\,d\lambda \le\int_{\mathbb{R}^n}|f|\,d\lambda=\|f\|_1,$$ because the chosen balls are pairwise disjoint. Hence $$\lambda(K)\le \frac{5^n}{t}\|f\|_1.$$ [step 1.1, L4, L5, algebra]

3.1 By [L3], $\lambda(E_t)$ is the supremum of $\lambda(K)$ over compact $K\subseteq E_t$. Step 2.1 gives the required upper bound for nonempty $K$, and step 1.1 handles the empty set. Hence $\lambda(E_t)\le(5^n/t)\|f\|_1$. The stated countable choice covers [L3] and the measure clause of [L4]; the finite-subcover argument introduces no stronger selection assumption. [step 1.1, step 2.1, L3, L4, algebra]

4.1 This is exactly the weak type $(1,1)$ estimate for the centered maximal [step 3.1] operator. [step 3.1] ∎

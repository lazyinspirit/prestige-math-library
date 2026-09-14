---
id: ex-prikry-bounded-name-fusion
kind: example
title: A bounded-name direct-extension fusion
status: published
origin: pipeline
deps:
  - thm-prikry-property
  - thm-prikry-forcing-adds-no-bounded-subsets
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-axiom-of-choice
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Let $U$ be a normal measure on $\kappa$, let $\gamma<\kappa$, and suppose

$$p=(s,A_0)\Vdash\dot x\subseteq\check\gamma.$$

Keeping the stem $s$ fixed, decide the membership questions
$\check\xi\in\dot x$ one at a time for $\xi<\gamma$. At limit stages,
intersect all earlier upper parts. The final intersection is still in $U$
because $\gamma<\kappa$, and the resulting direct extension decides
$\dot x$ to equal one ground-model subset of $\gamma$.

For the finite sample $\gamma=3$, a possible decision trace $+,-,+$ produces
the ground set $\{0,2\}$ and the final upper part
$A_0\cap A_1\cap A_2\cap A_3$.

## Facts & Assumptions

**Given:** The forcing-theorem setting over a transitive ZFC ground, with
$U,\kappa,\gamma,p,\dot x$ as above.

[F1] [[thm-prikry-property]]: Every membership sentence has a deciding direct
extension, so the next decision can be made without changing $s$.

[F2] [[thm-prikry-forcing-adds-no-bounded-subsets]]: A name forced to be a
subset of $\gamma<\kappa$ is decided by a direct extension to equal a
ground-model subset of $\gamma$.

[F3] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: The normal
measure $U$ is $\kappa$-complete, so the intersection of fewer than $\kappa$
members of $U$ remains in $U$.

[F4] [[def-axiom-of-choice]]: In the ZFC ground, a selector may be fixed for
the nonempty sets of direct deciding extensions.

## Verification

1.1 For every direct extension $r\le^*p$ and every $\xi<\gamma$, let $C(r,\xi)$ be the nonempty set of direct extensions of $r$ deciding “$\check\xi\in\dot x$.” Nonemptiness is F1. Use F4 once to choose $d(r,\xi)\in C(r,\xi)$ simultaneously for all such pairs. [F1, F4]

2.1 Define $p_\xi=(s,A_\xi)$ for $\xi\le\gamma$. Start with $p_0=p$. Given $p_\xi$, put $p_{\xi+1}=d(p_\xi,\xi)$. At a nonzero limit $\delta\le\gamma$, put $A_\delta=\bigcap_{\xi<\delta}A_\xi$ and $p_\delta=(s,A_\delta)$. Since $\delta\le\gamma<\kappa$, F3 keeps $A_\delta$ in $U$. Thus this is a direct-extension decreasing recursion, and $p_{\xi+1}$ decides the $\xi$th membership question. [F1, F3, step 1.1]

3.1 Put $B=\bigcap_{\xi\le\gamma}A_\xi$ and $q=(s,B)$. The family has cardinality below $\kappa$, so F3 gives $B\in U$ and $q\le^*p_\xi$ for every $\xi\le\gamma$. Define $$x=\{\xi<\gamma:p_{\xi+1}\Vdash\check\xi\in\dot x\}.$$ For each $\xi<\gamma$, the stronger condition $q$ preserves the decision of $p_{\xi+1}$; hence it forces membership exactly for the ordinals in $x$. Together with $q\le p$ and $p\Vdash\dot x\subseteq\check\gamma$, extensionality gives $q\Vdash\dot x=\check x$, the conclusion in F2. [F2, F3, step 2.1]

4.1 When $\gamma=3$, the recursion has $p_0,p_1,p_2,p_3$. If their three successive decisions are “$0\in\dot x$,” “$1\notin\dot x$,” and “$2\in\dot x$,” then the defining calculation in step 3.1 gives $x=\{0,2\}$ and $B=A_0\cap A_1\cap A_2\cap A_3$. For $\gamma=0$, there are no decisions, $x=\varnothing$, and the one-factor intersection returns $q=p$; for $\gamma=1$, there is exactly one deciding direct extension. [step 2.1, step 3.1] ∎

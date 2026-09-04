---
id: thm-centered-hardy-littlewood-maximal-function-is-borel-measurable
kind: theorem
title: "The centered Hardy-Littlewood maximal function is Borel measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, prop-ball-average-is-continuous-in-centre-and-radius]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., sentence after Lemma 3.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. Then the centered maximal
function $Mf:\mathbb{R}^n\to[0,\infty]$ is Borel measurable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a locally integrable function $f$ on $\mathbb{R}^n$.

[L1] The centered maximal function is $$Mf(x)=\sup_{r>0}A_r|f|(x).$$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[L2] For every locally integrable function $g$, the map $(x,r)\mapsto A_rg(x)$ on $\mathbb{R}^n\times(0,\infty)$ is continuous. ([[prop-ball-average-is-continuous-in-centre-and-radius]])

## Proof

**Proof technique:** direct.

1.1 Fix a real $t$. If $t<0$, then $\{Mf>t\}=\mathbb{R}^n$, which is open. [given] Assume from now on that $t\ge0$. [given]

1.2 Let $x\in\{Mf>t\}$. By [L1], there is $r>0$ with $A_r|f|(x)>t$. Apply [L1, L2, given, choose] to the locally integrable function $|f|$: continuity of $y\mapsto A_r|f|(y)$ at $x$ gives $\delta>0$ such that $$\|y-x\|_2<\delta\implies A_r|f|(y)>t.$$ Hence $B(x,\delta)\subseteq\{Mf>t\}$. [L1, L2, given, choose]

2.1 Step 1.2 shows that every point of $\{Mf>t\}$ is interior, so this [step 1.2] superlevel set is open. [step 1.2]

3.1 Every strict superlevel set of $Mf$ is open, so $Mf$ is Borel measurable. [step 1.1, step 2.1] [step 1.1, step 2.1] ∎

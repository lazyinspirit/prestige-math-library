---
id: thm-noetherianity-of-adic-completion
kind: theorem
title: "Completion of a Noetherian ring is Noetherian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-ring, thm-noetherian-ring-quotients-and-localisations, thm-noetherian-ring-ideal-characterisations, cor-finite-variable-polynomial-ring-noetherian, cor-completion-commutes-with-finite-quotients-and-submodules]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 22.30"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemmas 10.97.5-10.97.6"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring and let $I \subseteq R$ be an ideal. Then the
$I$-adic completion $\widehat R$ is a Noetherian ring.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, and an ideal $I \subseteq R$.

[L1] Quotients of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[L2] Every ideal of a Noetherian ring is finitely generated
([[thm-noetherian-ring-ideal-characterisations]]).

[L3] A finite-variable polynomial ring over a Noetherian ring is Noetherian
([[cor-finite-variable-polynomial-ring-noetherian]]).

[L4] For a finite module, completion commutes with quotients and ideal powers
([[cor-completion-commutes-with-finite-quotients-and-submodules]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose generators $f_1,\dots,f_r$ of $I$. The quotient $R/I$ is Noetherian by [L1], hence the polynomial ring $$(R/I)[T_1,\dots,T_r]$$ is Noetherian by [L3]. [L1, L2, L3, choose]

2.1 The graded ring $$\operatorname{gr}_I(R):=\bigoplus_{n\ge 0} I^n/I^{n+1}$$ is a quotient of $(R/I)[T_1,\dots,T_r]$ via $T_j \mapsto \overline{f_j}$, so $\operatorname{gr}_I(R)$ is Noetherian. [step 1.1, algebra]

3.1 By part 3 of [[cor-completion-commutes-with-finite-quotients-and-submodules]], $$\widehat R/I^n\widehat R \cong R/I^n$$ for every $n$, and part 2 identifies $I^n\widehat R$ with the completion of $I^n$. Therefore $$I^n\widehat R/I^{n+1}\widehat R \cong I^n/I^{n+1}$$ for all $n$, so the associated graded ring $$\operatorname{gr}_{I\widehat R}(\widehat R)$$ is canonically isomorphic to $\operatorname{gr}_I(R)$. Hence it is Noetherian. [L4, step 2.1]

4.1 Let $J \subseteq \widehat R$ be an ideal. Since $\operatorname{gr}_{I\widehat R}(\widehat R)$ is Noetherian, [L2] makes the graded ideal $$\operatorname{gr}(J):=\bigoplus_{n\ge 0}\frac{J \cap I^n\widehat R}{J \cap I^{n+1}\widehat R}$$ finitely generated. Taking homogeneous components of a finite generating set, choose homogeneous generators $\overline g_1,\dots,\overline g_m$, where $g_j \in J \cap I^{d_j}\widehat R$. [L2, step 3.1, choose, algebra]

5.1 We claim that $g_1,\dots,g_m$ generate $J$. Put $r_0=x\in J$. Inductively, suppose $r_n\in J\cap I^n\widehat R$. Express its degree-$n$ class in $\operatorname{gr}(J)$ as $$\overline r_n=\sum_{d_j\le n}\overline a_{j,n}\,\overline g_j,$$ with $\overline a_{j,n}$ homogeneous of degree $n-d_j$. Lift it to $a_{j,n}\in I^{n-d_j}\widehat R$, and put $a_{j,n}=0$ when $d_j>n$. Then $$r_{n+1}:=r_n-\sum_j a_{j,n}g_j\in J\cap I^{n+1}\widehat R.$$ The assumed Choice principle supports this countable recursion. Consequently, for every $N\ge0$, $$x-\sum_{n=0}^N\sum_j a_{j,n}g_j=r_{N+1}\in J\cap I^{N+1}\widehat R.$$ [step 4.1, induction, choose, algebra]

6.1 The completion ring $\widehat R$ is complete for the $I\widehat R$-adic topology because it is already the inverse limit of the quotients $R/I^n$ and step 3.1 identifies these with $\widehat R/I^n\widehat R$. For fixed $j$, step 5.1 has $a_{j,n}=0$ for $n<d_j$ and $a_{j,n}\in I^{n-d_j}\widehat R$ thereafter, so its partial sums are Cauchy and converge to some $A_j\in\widehat R$. For $N\ge d_j$, the tail satisfies $$A_j-\sum_{n=0}^N a_{j,n}\in I^{N+1-d_j}\widehat R.$$ Multiplying by $g_j\in I^{d_j}\widehat R$ and using step 5.1 gives $$x-\sum_j A_jg_j\in I^{N+1}\widehat R$$ for every sufficiently large $N$. Completeness includes separatedness, so the intersection of the powers is $0$ and therefore $x=\sum_j A_jg_j$. Thus $J=(g_1,\dots,g_m)$ is finitely generated. [step 3.1, step 5.1, algebra]

7.1 Every ideal $J \subseteq \widehat R$ is finitely generated, so $\widehat R$ is Noetherian by the ideal characterization. [L2, step 6.1] ∎

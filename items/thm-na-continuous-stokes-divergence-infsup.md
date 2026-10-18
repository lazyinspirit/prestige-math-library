---
id: thm-na-continuous-stokes-divergence-infsup
kind: theorem
title: "Continuous Stokes divergence inf-sup on a Lipschitz domain"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  [
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "thm-na-bounded-lipschitz-domain-divergence-right-inverse",
    "def-countable-choice",
    "cor-cauchy-schwarz-inequality-for-l-two"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. On the spaces $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$ of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], equipped with $\|v\|_V=\|\nabla v\|_2$, the form $b(v,q)=-\int_Dq\,\operatorname{div}v$ is bounded by $\sqrt d$. Its inf-sup constant satisfies
$$\inf_{q\ne0}\sup_{v\ne0}\frac{b(v,q)}{\|v\|_V\|q\|_2}\ge C_{\rm div}(D)^{-1}.$$

## Facts & Assumptions

**Given:** Bounded connected Lipschitz $D$, real $V,Q$, the stated $b$, and the bounded right inverse $B_D$.

[A1] Countable Choice is inherited from the bounded Lipschitz divergence right-inverse theorem. ([[def-countable-choice]])

[F1] $B_Dq\in H^1_0(D)^d$, $\operatorname{div}B_Dq=q$, and $\|\nabla B_Dq\|_2\le C_{\rm div}(D)\|q\|_2$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F2] The conventions are $b(v,q)=-\int_Dq\operatorname{div}v$ and $\|v\|_V=\|\nabla v\|_2$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F3] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 For any matrix $G\in\mathbb R^{d\times d}$, $|\operatorname{tr}G|\le\sqrt d|G|_F$ by Cauchy–Schwarz on its diagonal. Hence $|b(v,q)|\le\|q\|_2\|\operatorname{div}v\|_2\le\sqrt d\|q\|_2\|\nabla v\|_2$. [F2, F3]

2.1 For $q\ne0$, take $v=-B_Dq$. By [F1]–[F2], $b(v,q)=\|q\|_2^2$ and $\|v\|_V\le C_{\rm div}(D)\|q\|_2$. Thus $\sup_{v\ne0}b(v,q)/\|v\|_V\ge C_{\rm div}(D)^{-1}\|q\|_2$. Dividing by $\|q\|_2>0$ and taking the infimum over nonzero $q$ proves the bound. [A1, F1, F2, algebra, step 1.1] ∎

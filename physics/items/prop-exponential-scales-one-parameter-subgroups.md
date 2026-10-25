---
id: prop-exponential-scales-one-parameter-subgroups
kind: proposition
title: Exponential scales one-parameter subgroups
status: published
origin: pipeline
deps: ["def-countable-choice", "def-exponential-map-of-a-lie-group", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "def-one-parameter-subgroup-of-a-lie-group", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Note immediately following Definition 3.2 and Theorem 3.7(3), printed page 30
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group,
let $\mathfrak g=T_eG$, and let $\gamma_X$ denote the unique one-parameter
subgroup with initial velocity $X\in\mathfrak g$. Then, for every
$a\in\mathbb R$,

$$\gamma_X(a)=\exp_G(aX).$$

Consequently, for all $s,t\in\mathbb R$,

$$\exp_G((s+t)X)=\exp_G(sX)\exp_G(tX).$$

The countable-choice assumption is used exactly through the supplied
existence-and-uniqueness theorem for one-parameter subgroups.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with identity $e$, its Lie algebra $\mathfrak g=T_eG$, a vector $X\in\mathfrak g$, and real numbers $a,s,t$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The exponential map is defined by $\exp_G(Y)=\gamma_Y(1)$, where $\gamma_Y$ is the unique one-parameter subgroup with initial velocity $Y$. [[def-exponential-map-of-a-lie-group]].

[F3] Assuming $\mathrm{AC}_\omega$, every $Y\in\mathfrak g$ determines a unique one-parameter subgroup $\gamma_Y$ with $\gamma_Y'(0)=Y$. [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

[F4] A one-parameter subgroup $\gamma$ is smooth and satisfies $\gamma(u+v)=\gamma(u)\gamma(v)$ for all $u,v\in\mathbb R$. [[def-one-parameter-subgroup-of-a-lie-group]].

[F5] Differentials of smooth maps obey the chain rule. [[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\mathbb R$ and define $\delta_a(u)=\gamma_X(au)$. By [F4], $$\delta_a(u+v)=\gamma_X(a(u+v))=\gamma_X(au)\gamma_X(av)=\delta_a(u)\delta_a(v),$$ so $\delta_a$ is a one-parameter subgroup. By [F5], its initial velocity is $\delta_a'(0)=a\gamma_X'(0)=aX$. [F3, F4, F5, algebra]

2.1 Both $\delta_a$ and $\gamma_{aX}$ are one-parameter subgroups with initial velocity $aX$. Uniqueness in [F3] therefore gives $\delta_a=\gamma_{aX}$. Evaluating at $u=1$ and applying [F2], $$\gamma_X(a)=\delta_a(1)=\gamma_{aX}(1)=\exp_G(aX).$$ [F2, F3, step 1.1]

3.1 For $s,t\in\mathbb R$, [F4] and step 2.1 give $$\exp_G((s+t)X)=\gamma_X(s+t)=\gamma_X(s)\gamma_X(t)=\exp_G(sX)\exp_G(tX).$$ [F4, step 2.1, algebra]

4.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $X=0$ and all displayed curves are constant; in dimension one the proof is unchanged. Every curve has domain $\mathbb R$, so $a,s,t$ may be zero, negative, or any finite values without an endpoint issue. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2] and [F3]; fixing finitely many vectors and scalars adds no choice. The result consists of two identities, not a biconditional. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎

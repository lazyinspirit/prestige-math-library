---
id: lem-na-continuous-pressure-recovery-from-solenoidal-residual
kind: lemma
title: "Mean-zero pressure recovery from a solenoidal residual"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  [
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    thm-na-bounded-lipschitz-domain-divergence-right-inverse,
    lem-na-zero-mean-of-zero-boundary-divergence,
    thm-riesz-representation-for-hilbert-space,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "§§53.2–53.4, pressure gauge and the divergence right-inverse
        formulation; the annihilator argument is supplied locally."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2, inf-sup and pressure reconstruction."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and use the Stokes spaces $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$ of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]: $D\subset\mathbb R^d$ is nonempty, bounded, connected and Lipschitz, with $d\in\{2,3\}$. Fix $0<T<\infty$. If $1<s<\infty$ and $R\in L^s(0,T;V^*)$ satisfies $R(t)(v)=0$ for every $v\in V_\sigma=\ker(\operatorname{div}:V\to L^2_0(D))$ outside one common null set, then there is a unique $p\in L^s(0,T;L^2_0(D))$ such that $R(t)(v)=b(v,p(t))$ for every $v\in V$ almost everywhere. Moreover, $\|p\|_{L^sL^2}\le C_{\rm div}(D)\|R\|_{L^sV^*}$.

## Facts & Assumptions

**Given:** Countable Choice, $V=H^1_0(D)^d$, $Q=L^2_0(D)$, a bounded divergence right inverse $B_D:Q\to V$, and a Bochner functional $R\in L^s(0,T;V^*)$ annihilating $V_\sigma$.

[F1] Every $q\in Q$ has $B_Dq\in V$ with $\operatorname{div}B_Dq=q$ and $\|B_Dq\|_V\le C_{\rm div}(D)\|q\|_2$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F2] Every $v\in V$ has $\operatorname{div}v\in Q$. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

[F3] The pressure gauge is $Q=L^2_0(D)$ and $b(v,p)=-\int_Dp\,\operatorname{div}v$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F4] Every bounded linear functional on the real Hilbert space $Q$ is represented by a unique $L^2$ inner-product vector. ([[thm-riesz-representation-for-hilbert-space]])

[A1] Countable Choice is assumed by the divergence-lift and Hilbert Riesz suppliers, including the Bochner measurability of the represented pressure. ([[def-countable-choice]], [[thm-na-bounded-lipschitz-domain-divergence-right-inverse]], [[thm-riesz-representation-for-hilbert-space]])

## Proof

1.1 For almost every $t$, define a bounded linear functional $\ell_t$ on $Q$ by $\ell_t(q)=R(t)(B_Dq)$. From [F1], $\|\ell_t\|_{Q^*}\le C_{\rm div}(D)\|R(t)\|_{V^*}$. By [F4], there is a unique $\widehat p(t)\in Q$ such that $(\widehat p(t),q)_{L^2}=\ell_t(q)$ for all $q\in Q$. The map $R(t)\mapsto\widehat p(t)$ is bounded linear, so $\widehat p\in L^s(0,T;Q)$ with the corresponding norm bound. [A1, F1, F4, given, construct]

2.1 For $v\in V$, put $q=\operatorname{div}v\in Q$ by [F2]. Then $v-B_Dq\in V_\sigma$, so the annihilator assumption gives $R(t)(v)=R(t)(B_Dq)=(\widehat p(t),q)_{L^2}=-b(v,\widehat p(t)).$ Set $p=-\widehat p$ to obtain $R(t)(v)=b(v,p(t))$. [F1, F2, F3, step 1.1, algebra]

3.1 If $p_1,p_2\in Q$ both represent the same residual, then $b(B_Dq,p_1-p_2)=0$ for every $q\in Q$. By [F1], $\operatorname{div}B_Dq=q$, so $(p_1-p_2,q)_{L^2}=0$ for all $q\in Q$; choosing $q=p_1-p_2$ proves equality. This also confirms uniqueness in the zero-mean gauge. [F1, F3, step 2.1, algebra] ∎

---
id: thm-hilbert-schmidt-operators-form-a-two-sided-ideal
kind: theorem
title: Hilbert Schmidt operators form a two sided ideal
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, thm-cauchy-schwarz-in-an-inner-product-space, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, lem-composition-operator-norm-inequality, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemmas 3.23–3.25 (printed pp. 93–97)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Proposition 2.8"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$, $K$
and $L$ be real or complex Hilbert spaces and let $E$ be a Hilbert basis of $H$
(supplied as data), with $s_E(T)=\sum_{e\in E}\|Te\|^2$ the Hilbert–Schmidt
square-sum and $\|T\|_{HS,E}$ the Hilbert–Schmidt norm of
[[def-hilbert-schmidt-operator]]. Then:

1. if $S,T\in\mathcal B(H,K)$ are Hilbert–Schmidt relative to $E$, then so is
   $aS+bT$ for all scalars $a,b$, and
   $$\|aS+bT\|_{HS,E}\le|a|\,\|S\|_{HS,E}+|b|\,\|T\|_{HS,E};$$
2. if $T\in\mathcal B(H,K)$ is Hilbert–Schmidt relative to $E$, then for every
   Hilbert basis $F$ of $K$ the adjoint $T^*$ is Hilbert–Schmidt relative to $F$
   and
   $$\|T^*\|_{HS,F}=\|T\|_{HS,E};$$
3. if $T\in\mathcal B(H,K)$ is Hilbert–Schmidt relative to $E$ and
   $A\in\mathcal B(K,L)$, $B\in\mathcal B(H_0,H)$ are bounded with $E_0$ a
   Hilbert basis of $H_0$ and $F$ a supplied Hilbert basis of $K$, then
   $AT\in\mathcal B(H,L)$ is Hilbert–Schmidt relative to $E$ and
   $TB\in\mathcal B(H_0,K)$ is Hilbert–Schmidt relative to $E_0$, with
   $$\|AT\|_{HS,E}\le\|A\|\,\|T\|_{HS,E},\qquad \|TB\|_{HS,E_0}\le\|T\|_{HS,E}\,\|B\|,$$
   and consequently
   $$\|ATB\|_{HS,E_0}\le\|A\|\,\|T\|_{HS,E}\,\|B\| .$$

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $H,H_0,K,L$, a Hilbert basis $E$ of $H$, Hilbert–Schmidt operators $S,T$ relative to $E$, and bounded operators $A\in\mathcal B(K,L)$, $B\in\mathcal B(H_0,H)$.

For claim 3, Hilbert bases $E_0$ of $H_0$ and $F$ of $K$ are supplied as additional data; their existence is not inferred from Countable Choice.

[A1] **Hilbert–Schmidt data.** For a Hilbert basis $E$ of $H$, $s_E(T)=\sum_{e\in E}\|Te\|^2$ is the supremum of the finite subsums, $T$ is Hilbert–Schmidt relative to $E$ when $s_E(T)<+\infty$, and then $\|T\|_{HS,E}=s_E(T)^{1/2}$; the finite-subset supremum splits as $\sum_{e\in E}\|Te\|^2=\sum_{e\in F}\|Te\|^2+\sum_{e\in E\setminus F}\|Te\|^2$ for finite $F$ ([[def-hilbert-schmidt-operator]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] **Adjoint invariance.** For every Hilbert basis $E'$ of $H$ and $F$ of $K$ one has $s_{E'}(T)=s_E(T)=s_F(T^*)$, and membership and norms agree across all such bases ([[thm-hilbert-schmidt-norm-is-basis-independent]], [[def-hilbert-space]]).

[A3] **Bounds.** $\|Sv\|\le\|S\|\|v\|$ and $\|UV\|\le\|U\|\|V\|$ for bounded operators, and $\|B^*\|=\|B\|$ ([[def-operator-norm]], [[def-bounded-linear-operator]], [[lem-composition-operator-norm-inequality]], [[thm-hilbert-adjoint-properties]]).

[A5] **Minkowski in finite dimension.** For finitely many vectors $v_1,\dots,v_m$ of an inner-product space, $\|\sum_kv_k\|\le\sum_k\|v_k\|$; for finitely many pairs of nonnegative reals the Cauchy–Schwarz inequality gives $\bigl(\sum_k(a_k+b_k)^2\bigr)^{1/2}\le\bigl(\sum_ka_k^2\bigr)^{1/2}+\bigl(\sum_kb_k^2\bigr)^{1/2}$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the Hilbert spaces and bases above, Hilbert–Schmidt $S,T$ relative to $E$, and bounded $A,B$.

1.1 **Vector space.** For every finite $F\subseteq E$, [A3] and [A5] give $\bigl(\sum_{e\in F}\|(aS+bT)e\|^2\bigr)^{1/2}\le|a|\bigl(\sum_{F}\|Se\|^2\bigr)^{1/2}+|b|\bigl(\sum_F\|Te\|^2\bigr)^{1/2}\le|a|\|S\|_{HS,E}+|b|\|T\|_{HS,E}$, so the finite subsums for $aS+bT$ are bounded by the square of the last quantity [A1] and $aS+bT$ is Hilbert–Schmidt relative to $E$ with the asserted norm bound. [A1, A3, A5, algebra]

1.2 **Adjoint.** For every Hilbert basis $F$ of $K$, $s_F(T^*)=s_E(T)$ by [A2], so $T^*$ is Hilbert–Schmidt relative to $F$ and $\|T^*\|_{HS,F}=\|T\|_{HS,E}$. [A1, A2]

1.3 **Left multiplication.** For finite $F\subseteq E$, [A3] gives $\sum_{e\in F}\|ATe\|^2\le\|A\|^2\sum_{e\in F}\|Te\|^2\le\|A\|^2\|T\|^2_{HS,E}$, so $AT$ is Hilbert–Schmidt relative to $E$ with $\|AT\|_{HS,E}\le\|A\|\|T\|_{HS,E}$. [A1, A3, algebra]

2.1 **Right multiplication.** Let $E_0$ and $F$ be the supplied Hilbert bases of $H_0$ and $K$, respectively, and put $U:=TB\in\mathcal B(H_0,K)$, so $U^*=B^*T^*$ by [A3]. By [step 1.2], $T^*$ is Hilbert–Schmidt relative to $F$, and [step 1.3] applied to the left multiplication $B^*T^*$ gives that $U^*$ is Hilbert–Schmidt relative to $F$ with $$ \|U^*\|_{HS,F}\le\|B^*\|\|T^*\|_{HS,F} =\|B\|\|T\|_{HS,E}. $$ Now apply [step 1.2] to the Hilbert–Schmidt operator $U^*:K\to H_0$, using $F$ as its domain basis and $E_0$ as its codomain basis. It follows that $(U^*)^*=U^{**}$ is Hilbert–Schmidt relative to $E_0$ and has Hilbert–Schmidt norm $\|U^*\|_{HS,F}$. Since $U^{**}=U$ by [A3], $U=TB$ is Hilbert–Schmidt relative to $E_0$ and $$ \|TB\|_{HS,E_0}=\|U^*\|_{HS,F} \le\|T\|_{HS,E}\|B\|. $$ [step 1.2, step 1.3, A2, A3]

3.1 **Both-sided bound.** Combining [step 1.3] with $TB$ in place of $T$ and [step 2.1], $ATB=(AT)B$ is Hilbert–Schmidt relative to $E_0$ with $\|ATB\|_{HS,E_0}\le\|A\|\|TB\|_{HS,E_0}\le\|A\|\|T\|_{HS,E}\|B\|$. [step 1.3, step 2.1]

4.1 **Conclusion.** Claim 1 is [step 1.1], claim 2 is [step 1.2] and claim 3 is the combination of [step 1.3], [step 2.1] and [step 3.1]; no Hilbert basis is assumed to exist, since $E$, $E_0$ and $F$ are supplied as data and only the finite-subset supremum definition of [A1] and the invariance theorem [A2] are used. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, A2] ∎

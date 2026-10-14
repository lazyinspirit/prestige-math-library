---
id: thm-mixture-of-null-supermartingales
kind: theorem
title: Mixtures of null test supermartingales
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-nonnegative-test-supermartingale
  - thm-optional-sampling-for-bounded-stopping-times
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Lemma 2 and Appendix A.3"
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §§2.3-2.4"
      url: https://arxiv.org/pdf/2210.01948
---

## Statement

Assume AC. Let $(\Lambda,\mathcal A,\pi)$ be a probability space and let
$\mathcal P_0$ be a family of laws on a common discrete filtered measurable
space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0})$. For each
$\lambda\in\Lambda$, let $E^\lambda=(E_t^\lambda)_{t\ge0}$ be a nonnegative
test supermartingale for $\mathcal P_0$. Suppose that, for every $t$, the map
$(\lambda,\omega)\mapsto E_t^\lambda(\omega)$ is measurable with respect to
$\mathcal A\otimes\mathcal F_t$. Before mixing, take its pointwise
nonnegative version $E_t^{\lambda,+}(\omega)=\max\{E_t^\lambda(\omega),0\}$,
and define
$$\overline E_t(\omega)=\int_\Lambda E_t^{\lambda,+}(\omega)\,\pi(d\lambda),\qquad \widetilde E_t(\omega)=\begin{cases}\overline E_t(\omega),&\overline E_t(\omega)<\infty,\\0,&\overline E_t(\omega)=\infty.\end{cases}$$
Then $\widetilde E=(\widetilde E_t)_{t\ge0}$ is a nonnegative test
supermartingale for $\mathcal P_0$. The modification on the infinite-integral
set makes a real-valued version common to all null laws.

## Facts & Assumptions

**Given:** Assume AC. Let $\pi$, $\mathcal P_0$, and the product-measurable
family of component test supermartingales satisfy the Statement. If
$\mathcal P_0$ is empty, its lawwise conclusion is vacuous; otherwise fix any
$P\in\mathcal P_0$ when checking the test-supermartingale conditions.

[F1] [[def-nonnegative-test-supermartingale]]: under each $P\in\mathcal P_0$, every component is nonnegative, adapted, integrable, a supermartingale, and has initial expectation at most one.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function, section integrals are measurable and the product integral equals either iterated integral.

[F3] [[thm-optional-sampling-for-bounded-stopping-times]]: under AC, bounded stopping of a supermartingale gives a downward expectation inequality; deterministic times are bounded stopping times.

[F4] [[def-conditional-expectation-as-an-ae-class]]: under AC, the conditional-expectation class exists and is represented by conditional-expectation versions.

[F5] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is measurable and has the same integral as the original variable on every event in the conditioning sigma-algebra.

[A1] [[def-axiom-of-choice]]: AC supplies conditional-expectation classes used in the supermartingale and optional-sampling clauses.

## Proof

1.1 Fix $P\in\mathcal P_0$ and $t\ge0$. For every $\lambda$, $P(E_t^\lambda\ge0)=1$, so $E_t^{\lambda,+}=E_t^\lambda$ $P$-almost surely and has the same expectation. Apply F3 at the deterministic times $0$ and $t$ to get $\mathbb E_P E_t^{\lambda,+}=\mathbb E_P E_t^\lambda\le\mathbb E_P E_0^\lambda=\mathbb E_P E_0^{\lambda,+}\le1$. The pointwise nonnegative map $(\lambda,\omega)\mapsto E_t^{\lambda,+}(\omega)$ is product-measurable; Tonelli F2 makes $\overline E_t$ $\mathcal F_t$-measurable and gives $\mathbb E_P\overline E_t=\int_\Lambda\mathbb E_P E_t^{\lambda,+}\,\pi(d\lambda)\le1$. Hence $N_t=\{\overline E_t=\infty\}\in\mathcal F_t$ is null under every $P\in\mathcal P_0$. The common modification $\widetilde E_t=\overline E_t$ off $N_t$ and $0$ on $N_t$ is finite, adapted, nonnegative and integrable under every null law, with $\mathbb E_P\widetilde E_0\le1$. [F1, F2, F3, A1]

2.1 Fix $P\in\mathcal P_0$, $t\ge1$, and $A\in\mathcal F_{t-1}$. Since $E_s^{\lambda,+}=E_s^\lambda$ $P$-almost surely for $s=t-1,t$, the component supermartingale condition and the event-integral identity F5 give $\int_A E_t^{\lambda,+}\,dP=\int_A E_t^\lambda\,dP\le\int_A E_{t-1}^\lambda\,dP=\int_A E_{t-1}^{\lambda,+}\,dP$ for every $\lambda$. Tonelli F2 integrates these inequalities over $\pi$; since $N_t$ and $N_{t-1}$ are $P$-null, replacing the mixtures by $\widetilde E_t$ and $\widetilde E_{t-1}$ does not change these integrals. Thus $\int_A\widetilde E_t\,dP\le\int_A\widetilde E_{t-1}\,dP$. [F1, F2, F4, F5, A1, step 1.1]

3.1 Let $U=\mathbb E_P[\widetilde E_t\mid\mathcal F_{t-1}]$, which exists by F4 and AC A1. For every $A\in\mathcal F_{t-1}$, the event-integral identity F5 and step 2.1 give $\int_A(U-\widetilde E_{t-1})\,dP\le0$. Take $A=\{U>\widetilde E_{t-1}\}$. If $P(A)>0$, then for some integer $m\ge1$ the subset where $U-\widetilde E_{t-1}\ge1/m$ has positive measure, making that integral strictly positive, a contradiction. Therefore $U\le\widetilde E_{t-1}$ almost surely. As $P$ and $t$ were arbitrary, $\widetilde E$ is a test supermartingale for $\mathcal P_0$. [F4, F5, A1, step 2.1] ∎

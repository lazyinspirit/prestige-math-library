---
id: prop-weyl-vector-is-the-sum-of-fundamental-weights
kind: proposition
title: The Weyl vector in fundamental coordinates
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-vector-rho, def-fundamental-weights, def-reduced-crystallographic-euclidean-root-system, def-positive-system-and-base-of-simple-roots, def-weyl-group-of-a-root-system, def-coroot-and-dual-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
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
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§7.5"
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^+$, base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ and Weyl vector
$\rho$ ([[def-weyl-vector-rho]]). Then
$$(\rho,\alpha_i^\vee)=1\qquad(i=1,\dots,r),$$
and therefore
$$\rho=\sum_{i=1}^r\omega_i ,$$
where $\omega_1,\dots,\omega_r$ are the fundamental weights
([[def-fundamental-weights]]).

## Facts & Assumptions

**Given:** Such a root system $\Phi\subseteq E$, its positive system $\Phi^+$ with base $\Delta=\{\alpha_1,\dots,\alpha_r\}$, the Weyl vector $\rho$ and the fundamental weights $\omega_i$.

[L1] The reflection $s_i=s_{\alpha_i}$ acts by $s_i(x)=x-(x,\alpha_i^\vee)\alpha_i$ with $\alpha_i^\vee=2\alpha_i/(\alpha_i,\alpha_i)$, and $s_i(\alpha_i)=-\alpha_i$ ([[def-weyl-group-of-a-root-system]], [[def-coroot-and-dual-root-system]]).

[L2] Every positive root is a nonnegative integral combination of the simple roots, and these coefficients are unique; $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-reduced-crystallographic-euclidean-root-system]]).

[L3] The fundamental weights are the vectors dual to the simple coroots, $(\omega_i,\alpha_j^\vee)=\delta_{ij}$, and they form a basis of the weight lattice; the simple coroots form a basis of $E$ ([[def-fundamental-weights]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha\in\Phi^+$ with $\alpha\ne\alpha_i$; writing $\alpha=\sum_jn_j\alpha_j$ with $n_j\ge0$ by [L2], some $n_j$ with $j\ne i$ is positive, since otherwise $\alpha=n_i\alpha_i$ and reducedness with $\alpha$ a positive root forces $n_i=1$ and $\alpha=\alpha_i$; hence $s_i(\alpha)$ has the positive coefficient $n_j>0$ at position $j\ne i$, and since $s_i(\alpha)$ is a root its coefficient vector has one sign by [L2], so $s_i(\alpha)\in\Phi^+$; moreover $s_i(\alpha)\ne\alpha_i$ because $s_i(\alpha_i)=-\alpha_i$ and $s_i$ is an involution; thus $s_i$ maps $\Phi^+\setminus\{\alpha_i\}$ onto itself. [L1, L2]

2.1 Using step 1.1 and $s_i(\alpha_i)=-\alpha_i$, $s_i(2\rho)=\sum_{\alpha\in\Phi^+}s_i(\alpha)=\sum_{\alpha\ne\alpha_i}\alpha-\alpha_i=2\rho-2\alpha_i$, hence $s_i(\rho)=\rho-\alpha_i$. [L1, step 1.1]

3.1 On the other hand $s_i(\rho)=\rho-(\rho,\alpha_i^\vee)\alpha_i$ by [L1]; comparing with step 2.1 and using that $\alpha_i\ne0$ gives $(\rho,\alpha_i^\vee)=1$ for every $i$. [L1, step 2.1]

4.1 The difference $\rho-\sum_j\omega_j$ satisfies $(\rho-\sum_j\omega_j,\alpha_i^\vee)=1-1=0$ for every $i$ by [L3] and step 3.1; since the simple coroots form a basis of $E$ and the inner product is nondegenerate, $\rho-\sum_j\omega_j=0$, that is, $\rho=\sum_j\omega_j$. [L3, step 3.1]

5.1 Both assertions are proved. [step 3.1, step 4.1] ∎

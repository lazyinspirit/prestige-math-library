---
id: thm-riesz-spectral-projection-properties
kind: theorem
title: Riesz spectral projection properties
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-riesz-spectral-projection, thm-holomorphic-spectral-mapping, thm-complemented-subspace-iff-range-of-a-bounded-projection, def-axiom-of-choice, thm-holomorphic-functional-calculus-homomorphism, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-bounded-linear-operator, def-holomorphic-functional-calculus, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.25(vi), printed p. 228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 48–50"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a nonzero
complex Banach space, let $T \in \mathcal B(X)$, and let $E \subseteq \sigma(T)$
be clopen in the spectrum, with Riesz projection
$P := P_E \in \mathcal B(X)$ ([[def-riesz-spectral-projection]]). Then:

1. $P^2 = P$ and $PT = TP$; consequently the range and the kernel of $P$ are
   closed $T$-invariant subspaces and
   $$X = \operatorname{ran}(P) \oplus \ker(P);$$
2. if $\operatorname{ran}(P) \ne \{0\}$, then the restriction
   $T|_{\operatorname{ran}(P)}$ has spectrum $E$;
3. if $\ker(P) \ne \{0\}$, then the restriction
   $T|_{\ker(P)}$ has spectrum $\sigma(T)\setminus E$;
4. if one of these spectral parts is empty, the corresponding summand is the
   zero subspace and **no spectrum is assigned** to the zero operator on it
   under the normalized nonzero-algebra convention of
   [[def-unital-banach-algebra]].

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero complex Banach space $X$, a bounded operator $T \in \mathcal B(X)$, a clopen subset $E$ of the spectrum $\sigma(T) = \sigma_{\mathcal B(X)}(T)$, the locally constant germ $\chi_E$, and $P = \chi_E(T)$.

[L1] The calculus is linear, multiplicative and unital: $(fg)(T) = f(T)g(T)$, $1(T) = 1$, $\mathrm{id}(T) = T$, and for nowhere vanishing $h$, $h(T)^{-1} = (1/h)(T)$ ([[thm-holomorphic-functional-calculus-homomorphism]], [[def-holomorphic-functional-calculus]]).

[L2] $\chi_E^2 = \chi_E$ and $\chi_E\cdot\mathrm{id} = \mathrm{id}\cdot\chi_E$ as germs near $\sigma(T)$ ([[def-riesz-spectral-projection]]).

[L3] For a bounded idempotent $P$ on a normed space the range and kernel are closed and $X = \operatorname{ran}(P)\oplus\ker(P)$ ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

[L4] The spectrum $\sigma_{\mathcal B(X)}(T)$ consists exactly of those $\mu \in \mathbb C$ for which $T - \mu 1$ is not invertible in $\mathcal B(X)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 Idempotence and commutation: $P^2 = \chi_E(T)\chi_E(T) = (\chi_E\cdot\chi_E)(T) = \chi_E(T) = P$ by [L1] and [L2]; $PT = \chi_E(T)\,\mathrm{id}(T) = (\chi_E\cdot\mathrm{id})(T) = (\mathrm{id}\cdot\chi_E)(T) = \mathrm{id}(T)\chi_E(T) = TP$ by [L1] and [L2]. [L1, L2]

2.1 The splitting: by [step 1.1] the operator $P$ is a bounded projection, so [L3] gives that $\operatorname{ran}(P)$ and $\ker(P)$ are closed with $X = \operatorname{ran}(P)\oplus\ker(P)$; since $T$ commutes with $P$, both summands are $T$-invariant. [step 1.1, L3]

2.2 Range spectrum, exclusion: assume $\operatorname{ran}(P)\ne\{0\}$, as in claim 2, so its operator spectrum is defined. Let $\mu \notin E$. Choose the neighbourhoods $U_1 \supseteq E$, $U_0 \supseteq \sigma(T)\setminus E$ of the definition so that $\mu \notin U_1$ (possible since $\mu \notin E$ and $E$ is compact). Then the germ $h := \chi_E/(\mathrm{id}-\mu)$ is holomorphic near $\sigma(T)$: on $U_1$ it is $1/(z-\mu)$ with $\mu \notin U_1$, and on $U_0$ it is $0$. By [L1], $P=(T-\mu)h(T)=h(T)(T-\mu)$. The operator $h(T)$ commutes with $P$, so it preserves $\operatorname{ran}(P)$; on that nonzero summand its restriction is a two-sided inverse of $T-\mu$. Hence $\mu \notin \sigma(T|_{\operatorname{ran}(P)})$. [step 1.1, L1]

2.3 Kernel spectrum, exclusion: assume $\ker(P)\ne\{0\}$, as in claim 3, so its operator spectrum is defined. Let $\mu \notin \sigma(T)\setminus E$, that is, $\mu \in E$ or $\mu \notin \sigma(T)$. Choose $U_0,U_1$ with $\mu \notin U_0$ when $\mu \in E$, and define $q := (1-\chi_E)/(\mathrm{id}-\mu)$ on the complement part. Then $1-P=(1-\chi_E)(T)$, and the same computation with $1-\chi_E$ in place of $\chi_E$ shows that $T-\mu$ has the restriction of $q(T)$ as a two-sided inverse on $\ker(P)$. Hence $\mu \notin \sigma(T|_{\ker(P)})$. [step 1.1, L1]

3.1 Range spectrum, inclusion: continue under $\operatorname{ran}(P)\ne\{0\}$. Let $\mu \in E$ and suppose that $T|_{\operatorname{ran}(P)} - \mu$ were invertible on $\operatorname{ran}(P)$, with inverse $S$. Put $H := \frac{1-\chi_E}{\mathrm{id}-\mu}(T)$, a bounded operator because the germ is holomorphic near $\sigma(T)$ (its numerator vanishes on $U_1 \supseteq E$ and $\mu \notin \sigma(T)\setminus E$), and put $V := H + S\,P$ on $X = \operatorname{ran}(P)\oplus\ker(P)$. Then $(T-\mu)V=(1-P)+P=1$ and $V(T-\mu)=1$ by the same multiplicativity computation, so $T-\mu$ would be invertible on $X$, contradicting $\mu \in E \subseteq \sigma(T)$. Hence $\mu \in \sigma(T|_{\operatorname{ran}(P)})$. [step 2.1, step 2.2, L1, L4]

3.2 Kernel spectrum, inclusion: continue under $\ker(P)\ne\{0\}$. Symmetrically, if $\mu \in \sigma(T)\setminus E$ and $T|_{\ker(P)}-\mu$ were invertible with inverse $S$, then the germ $\frac{\chi_E}{\mathrm{id}-\mu}$, read as $\frac{1}{z-\mu}$ on a neighbourhood of $E$ avoiding $\mu$ and as $0$ on a neighbourhood of $\sigma(T)\setminus E$, is holomorphic near $\sigma(T)$. The operator $V := \bigl(\frac{\chi_E}{\mathrm{id}-\mu}\bigr)(T)+S(1-P)$ would be a two-sided inverse of $T-\mu$ on $X$, contradicting $\mu\in\sigma(T)$. Hence $\mu \in \sigma(T|_{\ker(P)})$. [step 2.1, step 2.3, L1, L4]

4.1 Claims 2 and 3 follow from [step 2.2], [step 3.1] and [step 2.3], [step 3.2] respectively; claim 1 was proved in [step 1.1] and [step 2.1]; claim 4 is the convention recorded in the statement, applied to an empty spectral part, and no spectrum is claimed for the zero operator. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2] ∎

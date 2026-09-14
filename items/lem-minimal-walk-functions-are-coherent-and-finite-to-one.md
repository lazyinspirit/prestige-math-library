---
id: lem-minimal-walk-functions-are-coherent-and-finite-to-one
kind: lemma
title: The minimal-walk functions are coherent and finite-to-one
status: draft
origin: pipeline
deps:
  - lem-minimal-walk-trace-concatenation-and-limit-control
  - def-minimal-walk-weights-and-coherent-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 2, Fact 5 and proof, printed p. 9"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

For every $\beta<\omega_1$, the function $e_\beta:\beta\to\omega$ is
finite-to-one.  If $\beta\leq\beta'<\omega_1$, then

$$\{\alpha<\beta:e_\beta(\alpha)\neq e_{\beta'}(\alpha)\}$$

is finite.  Thus $\langle e_\beta:\beta<\omega_1\rangle$ is coherent on the
common domains of its members.

## Facts & Assumptions

**Given:** Ordinals $\beta\leq\beta'<\omega_1$ and the fixed minimal-walk data.

[F1] [[def-minimal-walk-weights-and-coherent-functions]] identifies
$e_\beta(\alpha)$ with the maximum of the finite local weights
$|C_\zeta\cap\alpha|$ over $\zeta\in\operatorname{Tr}(\alpha,\beta)$.

[F2] [[lem-minimal-walk-trace-concatenation-and-limit-control]] proves trace
concatenation once the finite initial intersections above the splice have
stabilized.

## Proof

**Proof technique:** direct.

1.1 Fix $n<\omega$ and set $D=\{\alpha<\beta:e_\beta(\alpha)\leq n\text{ or }e_\beta(\alpha)\neq e_{\beta'}(\alpha)\}$.  We prove that $D$ has no limit point at or below $\beta$. [given]

1.2 Let $0<\delta\leq\beta$ be a limit ordinal.  The two traces $\operatorname{Tr}(\delta,\beta)$ and $\operatorname{Tr}(\delta,\beta')$ are finite.  Local finiteness makes each $C_\zeta\cap\delta$ finite for a trace node $\zeta>\delta$.  Choose $\delta_0<\delta$ above every member of all these intersections, and let $N$ be the maximum of $n$ and their finitely many cardinalities.  Cofinality of $C_\delta$ permits enlarging $\delta_0$ so that $|C_\delta\cap\alpha|>N$ whenever $\delta_0<\alpha<\delta$. [F1, given]

2.1 For $\delta_0<\alpha<\delta$, no trace node above $\delta$ has a $C$-point in $[\alpha,\delta)$.  Hence the walks toward $\alpha$ first follow the walks toward $\delta$ and then the walk from $\delta$ to $\alpha$; this is the same splice calculation as [F2].  Moreover, every local weight on either upper segment is its stabilized value $|C_\zeta\cap\delta|\leq N$, whereas the lower segment contains the weight $|C_\delta\cap\alpha|>N$. [F1, F2, step 1.2]

3.1 Taking the maxima in [F1] therefore gives $e_\beta(\alpha)=e_\delta(\alpha)=e_{\beta'}(\alpha)>n$ for every $\delta_0<\alpha<\delta$.  Such $\alpha$ is not in $D$, so $\delta$ is not a limit point of $D$.  Zero and successor ordinals are not limit points from below, so $D$ has no limit point at or below $\beta$. [F1, step 2.1]

4.1 If $D$ were infinite, its well-order would recursively give a strictly increasing $\omega$-sequence from $D$.  Its supremum is a nonzero limit ordinal $\delta\leq\beta$ and every final segment below $\delta$ meets $D$, contradicting step 3.1.  Hence $D$ is finite. [step 1.1, step 3.1]

5.1 The set $\{\alpha<\beta:e_\beta(\alpha)=n\}$ lies in $D$, so every fiber of $e_\beta$ is finite.  Taking, for example, $n=0$, the disagreement set between $e_\beta$ and $e_{\beta'}\restriction\beta$ also lies in $D$ and is finite. [step 1.1, step 4.1]

6.1 Step 5.1 proves finite-to-one behavior and coherence simultaneously.  It also covers $\beta=0$, where the domain and disagreement set are empty, and $\beta=\beta'$, where disagreement is empty. [step 5.1] ∎

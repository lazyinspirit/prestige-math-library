---
id: "ex-likelihood-ratio-martingale"
kind: "example"
title: "Likelihood ratio martingale"
deps: ["lem-conditional-expectation-process-is-a-martingale", "thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality", "def-conditional-expectation-as-an-ae-class", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "def-axiom-of-choice", "thm-finite-and-countable-subadditivity-of-measures"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: "draft"
origin: "pipeline"
---

## Example

Assume AC. Let $N\in\mathbb N_0$, let $P,Q$ be probability measures on $(\Omega,\mathcal F_N)$ with $Q\ll P$, and let $\mathcal F_0\subseteq\cdots\subseteq\mathcal F_N$. With $L=dQ/dP$, set $Z_n=E_P[L\mid\mathcal F_n]$ for $0\le n\le N$. This is a nonnegative $P$-martingale and $Z_n$ is a density of $Q|_{\mathcal F_n}$ relative to $P|_{\mathcal F_n}$. If $\mathcal F_0$ is trivial, $Z_0=1$ a.s.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Under AC, a finite absolutely continuous measure dominated by a sigma-finite measure has a real integrable density; here the dominating probability P is sigma-finite. [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]].

[F2] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F3] Conditioning one fixed integrable terminal variable gives a martingale. [[lem-conditional-expectation-process-is-a-martingale]].

[F4] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F5] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F6] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

[F7] Countable unions of measurable null sets are null [[thm-finite-and-countable-subadditivity-of-measures]].

## Verification

**Proof technique:** direct.

1.1 Repair first the integral foundation inherited by RN. Augment any finite disjoint display of a nonnegative simple function by the complement with coefficient $0$. Pairwise intersections of two augmented displays partition the whole space and have equal coefficients on nonempty cells; finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants and the sets $\{f_j\ge cs\}$, $0<c<1$, give monotone convergence; increasing simple approximations give nonnegative additivity, and positive/negative plus real/imaginary decompositions give finite $L^1$ linearity. With these facts substituted for the affected foundation, the cited RN proof applies. Apply it to $\mu=P,\nu=Q$ with the constant exhaustion $X_j=\Omega$. Both masses and the total variation of the positive $Q$ are one. Thus $L$ is real measurable, integrable and $\int_A L\,dP=Q(A)$ for every $A\in\mathcal F_N$. It is nonnegative a.s.: for each positive integer $j$, put $B_j=\{L\le-1/j\}$. Then $0\le Q(B_j)=\int_{B_j}L\,dP\le-P(B_j)/j$, so each $B_j$ is null, and $\bigcup_{j\ge1}B_j=\{L<0\}$. Testing $\Omega$ gives $E_PL=1$. [given, F1, F7, construct]

2.1 Extend the filtration constantly after $N$ to apply [F3]; up to $N$, it makes $Z$ a martingale. Conditional positivity gives $Z_n\ge0$ a.s. For every $A\in\mathcal F_n$, the defining event identity gives $\int_AZ_n\,dP=\int_A L\,dP=Q(A)$, exactly the restricted density assertion. At $n=N$ known-variable conditioning gives $Z_N=L$. If $\mathcal F_0$ is trivial, the constant one has the same integrals as $L$ on its two events, so it is the conditional class $Z_0$. AC covers RN and CE existence and the finite choice of versions. [F2, F3, F4, F5, F6, step 1.1]

3.1 For instance let $N=1$, $\Omega=\{a,b\}$, $P(a)=P(b)=1/2$, $Q(a)=3/4$, $Q(b)=1/4$, and $\mathcal F_0$ trivial. Then $L(a)=3/2$, $L(b)=1/2$, and $Z_0=1$, $Z_1=L$. The average $(3/2+1/2)/2=1$ verifies the martingale equality, and $(1/2)(3/2)=3/4$ verifies the restricted density on $\{a\}$. [step 1.1, step 2.1] ∎

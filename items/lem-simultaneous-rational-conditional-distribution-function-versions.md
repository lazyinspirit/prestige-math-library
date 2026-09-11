---
id: "lem-simultaneous-rational-conditional-distribution-function-versions"
kind: "lemma"
title: "Simultaneous rational conditional distribution function versions"
deps: ["def-integral-of-a-nonnegative-simple-function", "def-nonnegative-lebesgue-integral", "def-integral-over-a-measurable-set", "def-measure", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-hahn-decomposition-for-signed-measures", "thm-continuity-from-below-for-measures", "def-axiom-of-choice", "thm-rationals-countable", "thm-finite-and-countable-subadditivity-of-measures", "thm-product-of-countable", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X:\Omega\to\mathbb R$ be measurable on a probability space $(\Omega,\mathcal F,P)$ and $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra. There are real $\mathcal G$-measurable versions $G_q$ of $P(X\le q\mid\mathcal G)$ for every $q\in\mathbb Q$ and one $N\in\mathcal G$, $P(N)=0$, such that outside $N$, simultaneously,

$$0\le G_q\le1,\qquad q<r\Longrightarrow G_q\le G_r,\qquad G_n\longrightarrow1,\quad G_{-n}\longrightarrow0,\quad G_{q+1/n}\longrightarrow G_q.$$

Here $n=1,2,\ldots$ and the final assertion holds for every rational $q$. The versions may moreover be filled on $N$ by $G_q=\mathbf1_{\{q\ge0\}}$, so all these properties hold everywhere.

The proof also establishes the restricted integral interface used here and below: arbitrary nonnegative simple displays give the same integral after zero-complement refinement; the resulting nonnegative integral is monotone, additive, positively homogeneous, has $\int0=0$ as a separate zero-scalar clause, and satisfies monotone convergence. On a finite measure space, bounded decreasing convergence follows. Under AC, every event has a bounded conditional-density version, unique almost surely, and these versions preserve inclusion, constants, and monotone event limits.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The simple and nonnegative integrals are respectively the finite coefficient sum with $0\cdot(+\infty)=0$ and the supremum over nonnegative simple minorants. [[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]], [[def-integral-over-a-measurable-set]].

[F2] Every nonnegative measurable function has prescribed increasing simple approximants. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F3] Hahn decomposition applies to the finite signed measures used in the density construction. [[thm-hahn-decomposition-for-signed-measures]].

[F4] Measures are countably additive and continuous from below. [[def-measure]], [[thm-continuity-from-below-for-measures]].

[F5] AC selects maximizing sequences, Hahn decompositions and the rational family of densities. [[def-axiom-of-choice]].

[F6] The rationals and their finite products are countable. [[thm-rationals-countable]], [[thm-product-of-countable]].

[F7] A specified countable union of measurable null sets is null. [[thm-finite-and-countable-subadditivity-of-measures]].

[F8] Limsup, liminf and convergence sets of measurable functions are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

## Proof

**Proof technique:** direct.

1.1 We first repair the integral interface. Given two finite disjoint simple displays $s=\sum_i c_i\mathbf1_{E_i}=\sum_jd_j\mathbf1_{F_j}$, adjoin $E_0=\Omega\setminus\bigcup_iE_i$ and $F_0=\Omega\setminus\bigcup_jF_j$, both with coefficient zero. The intersections $E_i\cap F_j$, now including indices zero, form a finite measurable partition of all of $\Omega$. On every nonempty cell the two coefficients agree, so finite additivity gives equal coefficient sums. This includes infinite-measure zero cells because both corresponding products are the stipulated $0\cdot(+\infty)=0$. Thus the simple integral in [F1] is representation-independent. A common zero-complement refinement now proves monotonicity and additivity for simple functions. For a scalar $a>0$, termwise multiplication proves positive homogeneity; for $a=0$, the zero display gives $\int0=0$ directly, without forming $0\cdot(+\infty)$. [F1, F4, construct]

2.1 The supremum definition in [F1] therefore gives monotonicity of the nonnegative integral and agreement with the simple integral. Multiplication by $a>0$ bijects the simple minorants of $f$ and $af$, giving positive homogeneity; again $\int0=0$ is separate. If $0\le f_n\uparrow f$, let $L=\sup_n\int f_n$. For a simple $s\le f$ and $0<a<1$, put $A_n=\{f_n\ge as\}$. Then $A_n\uparrow\Omega$. The formula $A\mapsto\int_A s$ is a measure by the finite partition formula from step 1.1, so [F4] gives $\int_{A_n}s\uparrow\int s$. Since $as\mathbf1_{A_n}\le f_n$, positive homogeneity gives $a\int_{A_n}s\le L$; let first $n$ and then $a\uparrow1$ to obtain $\int s\le L$. Taking the supremum over $s$ proves monotone convergence. Using the approximants in [F2], simple additivity and monotone convergence give $\int(f+g)=\int f+\int g$. Consequently $A\mapsto\int_A f$ is a measure: apply monotone convergence to finite unions of a disjoint sequence. If the ambient measure is finite and $0\le f_n\downarrow f\le M$, then $M-f_n\uparrow M-f$; additivity in the finite identity $f_n+(M-f_n)=M$ proves bounded decreasing convergence. [step 1.1, F1, F2, F4]

3.1 We next construct conditional densities without importing a conditional-expectation theorem. For an event $C\in\mathcal F$, set $\nu_C(A)=P(A\cap C)$ on $\mathcal G$. Let $\mathscr H$ be the nonnegative measurable $h$ satisfying $\int_Ah\,dP\le\nu_C(A)$ for every $A\in\mathcal G$, and let $M=\sup_{h\in\mathscr H}\int h\,dP\le1$. The maximum of two members remains in $\mathscr H$: split each test event over $\{h\ge k\}$ and its complement and use step 2.1. By [F5] choose $h_j\in\mathscr H$ with integrals tending to $M$, and put $f_j=\max_{i\le j}h_i\uparrow f$. By F8 the supremum f is measurable. Step 2.1 gives $f\in\mathscr H$ and $\int f=M$. The set function $\rho(A)=\nu_C(A)-\int_Af\,dP$ is a finite positive measure. If it were not singular to $P|_{\mathcal G}$, choose by [F3] a positive set $Q_m$ for $\rho-P/m$ for every $m\ge1$. If every $P(Q_m)=0$, their union is null by [F7], and on its complement $\rho(A)\le P(A)/m$ for every $m$, so $\rho$ is concentrated on a $P$-null set, a contradiction. Hence some $Q_m$ has positive $P$-measure, and $f+m^{-1}\mathbf1_{Q_m}\in\mathscr H$ has integral greater than $M$, again a contradiction. Thus $\rho\perp P$. Since $0\le\rho\le\nu_C\le P$, it is also absolutely continuous, so its singular carrier immediately gives $\rho=0$. We have proved $\nu_C(A)=\int_Af\,dP$ for all $A\in\mathcal G$. [step 2.1, F3, F5, F7, F8, assume-contra, contradiction: maximality, discharge-contradiction]

4.1 Since $\int f\le1$, the sets $\{f\ge n\}$ show that $f<\infty$ almost surely. Comparing $\nu_C\le P$ on $\{f\ge1+1/m\}$ shows that $f\le1$ almost surely. Changing $f$ on the measurable union of these null sets gives a real $[0,1]$-valued density. If $f,g$ represent $\nu_C,\nu_D$ and $C\subseteq D$, then on $A_m=\{f\ge g+1/m\}$, step 2.1 gives $$\int_{A_m}f\ge\int_{A_m}g+P(A_m)/m,$$ whereas the representation identities give $\int_{A_m}f\le\int_{A_m}g$. Hence $P(A_m)=0$ for every $m$, so $f\le g$ almost surely. Taking $C=D$ in both directions proves uniqueness; $C=\varnothing,\Omega$ proves the constant-zero and constant-one assertions. For $C_j\uparrow C$, set all selected densities to zero on the countable union of their order failures and put $u=\lim_jf_j$. Step 2.1 and [F4] give $\int_Au=\lim_jP(A\cap C_j)=P(A\cap C)$, so uniqueness identifies $u$ with the density of $C$. Decreasing event limits follow by applying this to complements and using $\int_A(1-f)=P(A)-\int_Af$, an instance of the finite additivity from step 2.1. This proves every restricted conditional-density assertion in the statement. [step 2.1, step 3.1, F4, F7]

5.1 Apply step 3.1 to $C_q=\{X\le q\}$ and use [F5] to select one real $\mathcal G$-measurable density $G_q$ for each rational $q$. The selection is countable by [F6]. Step 4.1 gives $0\le G_q\le1$ almost surely and $G_q\le G_r$ almost surely whenever $q<r$. Since $C_n\uparrow\Omega$, $C_{-n}\downarrow\varnothing$, and $C_{q+1/n}\downarrow C_q$, the event-limit clause of step 4.1 gives the two tail limits and every rational right-limit almost surely. [step 3.1, step 4.1, F5, F6]

6.1 Form the union $N$ of the failure sets for the bounds, rational order comparisons, two tail limits, and the right-limit assertion for each rational $q$. They belong to $\mathcal G$ by rational-cut descriptions and [F8], and they are null by step 5.1. There are countably many by [F6], so [F7] gives $P(N)=0$. Replace each $G_q$ on $N$ by $\mathbf1_{\{q\ge0\}}$. Pasting preserves measurability. A bounded difference supported on N has absolute value at most a constant times $\mathbf1_N$, whose integral is zero by step 2.1, so all event integrals are unchanged and the functions remain versions. The filler is increasing, has the required tails, and satisfies the right-limit property also at $q=0$. [step 2.1, step 5.1, F6, F7, F8] ∎

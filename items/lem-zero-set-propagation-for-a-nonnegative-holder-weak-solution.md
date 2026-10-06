---
id: lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution
kind: lemma
title: "Zero-set propagation for a nonnegative Holder weak solution"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [thm-de-giorgi-nash-interior-holder-regularity, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, thm-weak-harnack-inequality-for-nonnegative-supersolutions, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, def-connected-space, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qz/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "The consequences list of Theorems 1-2, the strong maximum principle applications, printed pp. 1-3 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 1, printed p. 211: local Harnack for homogeneous nonnegative solutions; the zero-set conclusion is derived here using the local weak-Harnack supplier"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge3$, let $\Omega\subseteq\mathbb R^n$ be connected and open, let $A,L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $u\in H^1(\Omega;\mathbb R)$ with $u\ge0$ a.e. be a weak solution of $L_0u=0$. Let $u^*$ be a continuous representative of $u$ on $\Omega$ (such a representative exists by [[thm-de-giorgi-nash-interior-holder-regularity]]) and let $x_0\in\Omega$ with $u^*(x_0)=0$.
Then $u^*\equiv0$ on $\Omega$; equivalently the zero set $\{u^*=0\}$ is both relatively open and relatively closed in $\Omega$. The same argument shows: if $u\in H^1(\Omega)$ is merely a nonnegative weak supersolution of $L_0u\ge0$ and a representative of $u$ is continuous at a point $x_0$ with value $0$, then $u=0$ a.e. on a neighbourhood of $x_0$; the global conclusion then needs a continuous representative on all of $\Omega$.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a connected open set $\Omega\subseteq\mathbb R^n$, $n\ge3$; uniformly elliptic measurable symmetric coefficients $A$ with constants $\theta,M_a$; the principal operator $L_0u=-D_i(a^{ij}D_ju)$ with form $a_0$; a nonnegative weak solution $u\in H^1(\Omega;\mathbb R)$ of $L_0u=0$; a continuous representative $u^*$ of $u$; a point $x_0\in\Omega$ with $u^*(x_0)=0$.

[F1] Assume the Axiom of Choice. Weak Harnack inequality at $p=1$: for every ball $B_S(y)$ with $B_{2S}(y)\Subset\Omega$ one has $S^{-n}\|w\|_{L^1(B_S(y))}\le C_1(\operatorname{ess\,inf}_{B_{S/2}(y)}w+S^{2-n/q}\|F\|_{L^q(B_{2S}(y))})$ for every nonnegative supersolution $w$ of $L_0w=-F$ with $F\in L^q_{\mathrm{loc}}$, $q>n/2$, with $C_1=C_1(n,q,\theta,M_a)$ ([[thm-weak-harnack-inequality-for-nonnegative-supersolutions]]).

[F2] Assume the Axiom of Choice. A class in $H^1$ with $\int_{B}|w|\,dx=0$ on an open ball $B$ vanishes a.e. on $B$; and the essential infimum of a nonnegative class over a ball is the infimum of any continuous representative over that ball, so that $\operatorname{ess\,inf}_{B_{S/2}(z)}u\le u^*(x_0)=0$ whenever $x_0\in B_{S/2}(z)$ and $u\ge0$ a.e. ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-ball-average-operator-on-r-n]], [[def-essential-supremum-with-respect-to-a-measure]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F3] Assume the Axiom of Choice. Continuity and connectedness: the zero set of a continuous function is relatively closed, and a nonempty subset of a connected topological space that is both relatively open and relatively closed is the whole space ([[def-connected-space]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F4] Assume the Axiom of Choice. Supersolution and subsolution vocabulary: a weak solution of $L_0u=0$ is in particular a nonnegative weak supersolution of $L_0u\ge0$, and $L_0u=0$ weakly means $a_0(u,v)=0$ for every $v\in H^1_0(\Omega)$ ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[def-uniformly-elliptic-divergence-form-operator]]).

## Proof

**Proof technique:** direct; the weak Harnack inequality with $p=1$ turns the vanishing of $u^*$ at a point into the vanishing of $u$ on a whole ball, which makes the zero set relatively open, while continuity makes it relatively closed; connectedness then forces the zero set to be all of $\Omega$.

1.1 The zero set is relatively open. Fix a radius $S>0$ with $B_{2S}(x_0)\Subset\Omega$; such an $S$ exists because $\Omega$ is open and $x_0\in\Omega$. Apply the weak Harnack inequality [F1] to $u$ on the ball $B_S(x_0)$ with $p=1$ and $F=0$: $S^{-n}\int_{B_S(x_0)}u\,dx\le C_1\operatorname{ess\,inf}_{B_{S/2}(x_0)}u$. Since $x_0\in B_{S/2}(x_0)$ and $u\ge0$ a.e. with continuous representative $u^*$ vanishing at $x_0$, [F2] gives $\operatorname{ess\,inf}_{B_{S/2}(x_0)}u\le u^*(x_0)=0$; hence $\int_{B_S(x_0)}u\,dx=0$ and therefore $u=0$ a.e. on $B_S(x_0)$ by [F2]. Since $u^*$ is continuous and agrees with $u$ a.e. on the ball $B_S(x_0)$, the set where $u^*\ne0$ is open and of measure zero in $B_S(x_0)$; it must be empty, so $u^*=0$ on all of $B_S(x_0)$. [given, F1, F2]

2.1 The zero set is relatively closed and the second assertion. The set $Z:=\{x\in\Omega:u^*(x)=0\}$ is the preimage of the closed set $\{0\}$ under the continuous map $u^*$, hence relatively closed in $\Omega$ by [F3]. For the second assertion, suppose only that $u\in H^1(\Omega)$ is a nonnegative weak supersolution of $L_0u\ge0$ and that a representative is continuous at $x_0$ with value $0$; then the same computation with $F=0$ and the continuity of the representative at the single point $x_0$ gives $\int_{B_S(x_0)}u\,dx=0$ for some $S>0$, hence $u=0$ a.e. on $B_S(x_0)$, which is the local conclusion; the global conclusion needs a representative continuous on all of $\Omega$ so that [F3] applies to the whole zero set. [step 1.1, F1, F2, F3, F4]

3.1 Conclusion by connectedness. The set $Z$ is nonempty (it contains $x_0$), relatively open by step 1.1 and relatively closed by step 2.1; since $\Omega$ is connected, [F3] gives $Z=\Omega$, that is $u^*\equiv0$ on $\Omega$, which is the assertion. All arguments use Countable Choice and the Axiom of Choice only through the suppliers named above. [step 2.1, F3] ∎

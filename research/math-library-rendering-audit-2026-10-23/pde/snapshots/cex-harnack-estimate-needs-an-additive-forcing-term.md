---
id: cex-harnack-estimate-needs-an-additive-forcing-term
kind: counterexample
title: "The Harnack estimate needs an additive forcing term"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-harnack-inequality-for-nonnegative-weak-solutions, thm-weak-harnack-inequality-for-nonnegative-supersolutions, def-local-weak-solution-for-a-divergence-form-operator, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, def-ball-average-operator-on-r-n, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorems 1-2 with the additive source terms R^{1-n/q}||f||_{L^q} and R^{2-2n/q}||g||_{L^{q/2}}, printed pp. 1-2 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorems 1-2 with the additive forcing terms and the delta-rescaling, printed pp. 211-213 (read in full)"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted.** For every $n\ge1$, every nonnegative weak solution $u\in H^1(B_1(0)\subset\mathbb R^n)$ of $-\Delta u=f$ with $f\in L^\infty(B_1(0))$ satisfies the forcing-free comparison $\sup_{B_{1/2}(0)}u\le C\inf_{B_{1/2}(0)}u$ with a constant $C$ independent of $f$ and $u$.

**Counterexample.** For any $n\ge1$, define $u(x)=|x|^2/(2n)$ and $f\equiv-1$ on $\Omega=B_3(0)\subset\mathbb R^n$, and restrict them to $B_1(0)$ for the refuted estimate. Then $-\Delta u=f$ classically, $u\ge0$, and on $B_{1/2}(0)$ the infimum is $0$ while the supremum $1/(8n)>0$ is approached as $|x|\uparrow1/2$. Hence the forcing-free comparison fails for every constant $C$; the additive term in [[thm-harnack-inequality-for-nonnegative-weak-solutions]] and [[thm-weak-harnack-inequality-for-nonnegative-supersolutions]] cannot be omitted.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an integer $n\ge1$; $\Omega=B_3(0)\subset\mathbb R^n$; the function $u(x)=|x|^2/(2n)$; and the constant source $f\equiv-1$.

[F1] Elementary differentiation: $D_iu=x_i/n$ and $\Delta u=2n/(2n)=1$, so $-\Delta u=-1=f$ classically on $B_3(0)$; the Laplacian is the operator $-\Delta$ with $a^{ij}=\delta^{ij}$, $b=c=0$ in the convention of [[def-uniformly-elliptic-divergence-form-operator]] ([[def-local-weak-solution-for-a-divergence-form-operator]]).

[F2] On the open half-ball $B_{1/2}(0)$, $u$ has infimum $0$ attained at the origin, while its supremum $1/(8n)$ is approached along $x_j=(1/2-1/j)e_0$ for $j>2$ and is not attained; continuity makes this equal to the essential supremum ([[def-ball-average-operator-on-r-n]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F3] For $n\ge2$, the displayed Harnack statements carry the forcing additively: $\operatorname{ess\,sup}_{B_{R/2}}u\le C(\operatorname{ess\,inf}_{B_{R/2}}u+R^{2-n/q}\|F\|_{L^q(B_{2R})})$ for weak solutions of $L_0u=-F$, and the analogous bound with the same additive structure holds for nonnegative supersolutions ([[thm-harnack-inequality-for-nonnegative-weak-solutions]], [[thm-weak-harnack-inequality-for-nonnegative-supersolutions]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]). The polynomial counterexample itself is valid in every $n\ge1$ by [F1]-[F2].

## Counterexample

1.1 The function solves the equation and is nonnegative. By [F1], $u$ is smooth on $B_3(0)$ with $-\Delta u=-1=f$, so its restriction to $B_1(0)$ is a weak solution in the local sense; $u\ge0$ and $f\equiv-1$ is bounded. [given, F1]

2.1 The extrema on the half ball. By [F2], $\inf_{B_{1/2}(0)}u=0$ and $\sup_{B_{1/2}(0)}u=1/(8n)>0$; hence for every real constant $C$ one has $\sup_{B_{1/2}(0)}u=1/(8n)>0=C\cdot0=C\inf_{B_{1/2}(0)}u$, so the forcing-free comparison $\sup\le C\inf$ fails for every $C$. [step 1.1, F2]

3.1 For $n\ge2$, the additive term repairs the estimate and cannot be dropped. With $F=-f=1$, the solution is defined on $\Omega=B_3(0)$, so the doubled ball $B_2(0)\Subset\Omega$ is admissible in [F3]. Its source norm is $\|F\|_{L^q(B_2)}=|B_2|^{1/q}$, and the estimate with $R=1$ has the nonzero additive term $|B_2|^{1/q}$; the polynomial still has zero infimum and positive supremum on $B_{1/2}$. Thus no finite constant can replace the additive term by $C\inf$. Steps 1.1–2.1 already verify the forcing-free failure for every $n\ge1$, independently of invoking [F3]. All verifications use the explicit polynomial and the cited statements, with no choice principle beyond the declared Axiom of Choice and Countable Choice. [step 2.1, F3] ∎

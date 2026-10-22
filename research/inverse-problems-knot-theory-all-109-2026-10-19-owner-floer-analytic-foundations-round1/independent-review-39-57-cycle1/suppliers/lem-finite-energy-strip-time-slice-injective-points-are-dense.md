---
id: lem-finite-energy-strip-time-slice-injective-points-are-dense
kind: lemma
title: "Time-slice injective points of a finite-energy strip are open and dense"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-euclidean-inverse-function-theorem
  - lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation
  - lem-finite-energy-transverse-strip-end-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Floer, Hofer and Salamon, Transversality in elliptic Morse theory for the symplectic action"
      url: "https://doi.org/10.1215/S0012-7094-95-08010-7"
      locator: "Regular-point theorem; an independent fixed-time strip proof under CC is supplied here. Publisher metadata verified; inaccessible publisher fulltext is not claimed as a proof reading."
    - title: "Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry"
      url: "https://arxiv.org/pdf/1011.1690"
      locator: "The full similarity/unique-continuation proofs in2.7–2.8 read; the time-slice partner/Baire argument is supplied locally"
---

## Statement

Assume countable choice. Let $X$ be compact with a fixed smooth metric, $J_t$ a smooth family of almost complex structures, and $u:\mathbb R\times[0,1]\to X$ a smooth nonconstant solution of
$$u_s+J_t(u)u_t=0$$
with finite Dirichlet energy and uniform limits $x_-,x_+$ as $s\to-\infty,+\infty$. Let $K\subset X$ be any finite set containing these limits. Then the set
$$\mathcal R(u)=\{(s,t)\in\mathbb R\times(0,1):u_s(s,t)\ne0,\ u(s,t)\notin K,\ u(s',t)=u(s,t)\Rightarrow s'=s\}$$
is open and dense in the interior strip.

In particular this applies to actual finite-energy strips with compact totally real boundary submanifolds of finite transverse intersection and fixed longitudinally independent boundary structures: their uniform ends exist by the transverse-end-convergence theorem. The conclusion concerns injectivity at a fixed time coordinate. It does not assert global injectivity of $u$ or ensure that a point of $\mathcal R(u)$ lies outside a prescribed closed region of allowed almost-complex perturbations.

## Statement references

[[def-countable-choice]]

[[thm-euclidean-inverse-function-theorem]]

[[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]]

[[lem-finite-energy-transverse-strip-end-convergence]]

## Facts & Assumptions

**Given:** The actual smooth strip, longitudinally independent family $J_t$, finite energy, uniform ends and finite set $K$ in the statement.

[F1] [[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]] gives isolated finite-order zeros for a nonzero solution of a smooth variable-principal real Cauchy–Riemann linear equation. Two smooth parametrized solutions of the same almost-complex equation agreeing on an open set agree everywhere on their connected source.

[F2] [[thm-euclidean-inverse-function-theorem]] gives a local embedding when an indicated pair of coordinate derivatives has invertible two-by-two derivative.

[F3] [[lem-finite-energy-transverse-strip-end-convergence]] proves the stated uniform ends for the actual totally real finite-intersection boundary setting, without presupposing regularity or gluing.

## Proof

1.1 Differentiate the actual equation in $s$. The section $\eta=u_s$ satisfies $$\eta_s+J_t(u)\eta_t+(d_xJ_t)_u[\eta]u_t=0.$$ In target charts this is precisely the smooth variable-principal linear equation of [F1]. It cannot vanish identically: if $u_s=0$, the equation forces $u_t=0$ and the map is constant. Thus its zero set $Z$ is discrete in the interior. For any fixed $a\in K$, comparison with the constant solution $u\equiv a$ in [F1] likewise shows $u^{-1}(a)$ is discrete, since $u$ is nonconstant. Consequently $Z\cup u^{-1}(K)$ is locally finite and has empty interior. Its complement is open: these are zeros of continuous sections and a finite union of closed point-preimages. [F1, given, construct, algebra]

1.2 We supply the elementary Baire fact needed below without importing a theorem assuming dependent choice. A nonempty Euclidean open rectangle cannot be a countable union of relatively closed sets with empty interior. Otherwise start with a closed rational ball compactly inside it. Enumerate rational balls once and, at stage $n$, take the first one whose closure lies in the preceding ball's interior minus the $n$th closed set, with radius less than $2^{-n}$. Such a ball exists because the excluded set has empty interior and rational balls form a base. This rule is deterministic, so recursion needs no dependent choice. The nested centers are Cauchy; completeness gives a point lying in every closed ball and outside every listed set, a contradiction. A discrete subset of the interior strip is countable as well: assign each point the first rational basis rectangle containing it but no other point of the set. Different points receive different rectangles, so this is an injection into a countable set. [given, construct, algebra]

2.1 Put $F(s,t)=(t,u(s,t))\in(0,1)\times X$. Off $Z$ this is an immersion and locally an embedding. Indeed some coordinate component $u_j$ has $(u_j)_s\ne0$, and the derivative of $(s,t)\mapsto(t,u_j(s,t))$ is invertible. Apply [F2]; the remaining target coordinates are then graphs over these two. Fix a small open rectangle $U$ with compact closure in the regular complement from step 1.1, on which $F$ is an embedding, and a smaller nonempty open rectangle $U_0$ compactly inside $U$. The values $u(\overline U_0)$ have positive distance from $K$, and its time coordinates stay in a compact subinterval of $(0,1)$. Uniform end convergence therefore gives $S<\infty$ such that every partner $q$ with $F(q)=F(p)$, $p\in U_0$, lies in the fixed compact strip rectangle $[-S,S]\times[\epsilon,1-\epsilon]$. A distinct partner cannot lie in $U$, by its embedding property. [F2, step 1.1, construct, algebra]

3.1 Suppose $\mathcal R(u)$ were not dense. Choose $U,U_0$ as in step 2.1 inside an open set without points of $\mathcal R(u)$. Every $p\in U_0$ has a distinct partner. Critical partners belong to the countable set $Z$ by the discrete-zero observation and countability argument above; their contributions are contained in the countably many horizontal lines $t=t(q)$, which are relatively closed sets with empty interior in $U_0$. For regular partners use all closed rational rectangles $C_j$ disjoint from $U_0$ and compactly contained in a regular coordinate-embedding neighborhood of step 2.1. They form a countable collection covering every regular point outside $U$: each has a smaller rational rectangle inside its embedding neighborhood and outside $\overline U_0$. The sets $$E_j=\{p\in U_0:F(p)\in F(C_j)\}$$ are relatively closed, since $F(C_j)$ is compact in the Hausdorff target. Together with the critical-partner horizontal lines they cover $U_0$. Step 1.2 implies one $E_j$ has nonempty interior $W$. Shrink $W$ to a connected open rectangle. [step 1.1, step 2.1, step 1.2, construct, algebra]

4.1 On $W$ there is a unique smooth partner $q=H(p)$ in that $C_j$. The inverse on $F(C_j)$ is continuous because $C_j$ is compact and the target is Hausdorff. Smoothness then follows locally from the local inverse to the two coordinate components in step 2.1 on its embedding neighborhood; composition with those components of $F(p)$ gives the inverse also at boundary points of $C_j$. Since its first target component is $t$, write $H(s,t)=(\sigma(s,t),t)$. Equality of the maps gives $$u_s(p)=u_s(q)\sigma_s,\qquad u_t(p)=u_s(q)\sigma_t+u_t(q).$$ Both points solve the same equation with the same $t$ and target value. Subtracting yields $$u_s(q)(\sigma_s-1)+J_t(u(q))u_s(q)\sigma_t=0.$$ The two displayed real vectors are independent: a nonzero vector and its image under a real complex structure cannot be real dependent. Thus $\sigma_s=1$ and $\sigma_t=0$, so $\sigma=s+c$ for one constant $c\ne0$. The constant is nonzero because $C_j\cap U_0=\varnothing$. Hence $u(s+c,t)=u(s,t)$ on $W$. By [F1], the shifted map is the same solution on the entire connected interior strip; continuity extends this to the physical edges. [F1, step 2.1, step 3.1, construct, algebra]

5.1 This nonzero longitudinal period is impossible. The energy density is periodic with period $|c|$. Its integral on a single period times the whole physical interval is either positive, giving infinite total energy by summing disjoint periods, or zero. In the latter case the smooth nonnegative density is zero everywhere, forcing the map constant. Both alternatives contradict the hypotheses. Thus the assumed open set without $\mathcal R(u)$ cannot exist, and density is proved. [step 4.1, given, algebra]

6.1 Finally $\mathcal R(u)$ is open. If $p_n\to p\in\mathcal R(u)$ but $p_n$ has a distinct same-time partner $q_n$, uniform ends and $u(p)\notin K$ bound their longitudinal coordinates as in step 2.1. Their time coordinates stay interior, so a subsequence converges to a point $q$ with $F(q)=F(p)$. Injectivity at $p$ gives $q=p$. For large $n$ both $p_n,q_n$ then lie in one embedding neighborhood of $F$ at $p$, a contradiction. The other two defining conditions persist by continuity. This proves openness. The actual boundary-setting application follows from [F3] and the just proved argument; no boundary regularity or universal surjectivity was silently added. All partner lists, nested-ball recursion and local arguments use at most countable choice. [F2, F3, step 1.1, step 2.1, step 5.1, construct, algebra] ∎

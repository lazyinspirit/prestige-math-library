---
id: ex-cm-regular-lagrangians-need-not-be-hyperregular
kind: example
title: "Regular versus hyperregular: the bounded-gradient Lagrangian $\\sqrt{1+v^2}$ and the degenerate zero Lagrangian"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-legendre-map-in-a-time-dependent-chart, lem-cm-legendre-map-local-invertibility, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-monotonicity-from-the-derivative, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-invertible-euclidean-linear-map, def-linear-map, def-abs-value, def-interval]
dependency_roles:
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-abs-value: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2 (Legendre Transformation between Lagrangian and Hamiltonian mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.1 (the convexity requirement on the Legendre transform), printed pages 82-83"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Take $n=1$, $J=U=\mathbb R$, and consider the three fibre-full $C^2$ Lagrangians
$\mathcal L_1(v)=\sqrt{1+v^2}$, $\mathcal L_2(v)=0$ and $\mathcal L_3(v)=\tfrac12v^2$ on
$J\times U\times\mathbb R$ ([[def-cm-legendre-map-in-a-time-dependent-chart]]). Then:

1. $\mathcal L_1$ is regular on the chart but **not** hyperregular: its velocity Hessian is
   $(1+v^2)^{-3/2}>0$ at every $v$, while the fibre Legendre map
   $v\mapsto\mathcal L_1'(v)=v/\sqrt{1+v^2}$ has range $(-1,1)$, so it is not surjective onto
   $\mathbb R$;
2. $\mathcal L_2$ is neither regular nor hyperregular: $\mathcal L_2'\equiv0$ and
   $\mathcal L_2''\equiv0$, so the velocity Hessian is singular everywhere and the fibre map is
   constant, hence not injective;
3. $\mathcal L_3$ is both regular and hyperregular: $\mathcal L_3''\equiv1$ and the fibre map
   $v\mapsto v$ is a $C^\infty$ bijection of $\mathbb R$ onto itself.

Thus regularity does not imply hyperregularity, and neither condition is automatic.

## Facts & Assumptions

**Given:** The three $C^2$ Lagrangians $\mathcal L_1(v)=\sqrt{1+v^2}$, $\mathcal L_2(v)=0$, $\mathcal L_3(v)=\tfrac12v^2$, their fibre maps $v\mapsto\mathcal L_j'(v)$, and their second derivatives.

[F1] Power rule and chain rule ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-abs-value]], [[def-interval]]): $\mathcal L_1'(v)=\tfrac12(1+v^2)^{-1/2}\cdot2v=v(1+v^2)^{-1/2}$ and $\mathcal L_1''(v)=(1+v^2)^{-3/2}>0$ for every real $v$; $\mathcal L_2'=\mathcal L_2''=0$; $\mathcal L_3'(v)=v$ and $\mathcal L_3''(v)=1$.

[F2] Monotonicity and injectivity ([[thm-monotonicity-from-the-derivative]], [[cor-zero-derivative-implies-constant]], [[def-invertible-euclidean-linear-map]], [[def-linear-map]]): since $\mathcal L_1''>0$ on $\mathbb R$, the function $\varphi_1:=\mathcal L_1'$ is strictly increasing, hence injective; since $\mathcal L_2'\equiv0$ is constant, it is not injective; since $\varphi_3=\mathrm{id}$ is the identity, it is bijective with inverse itself.

[F3] Elementary estimates: $0<\sqrt{1+v^2}$ and $\bigl|v(1+v^2)^{-1/2}\bigr|=|v|/\sqrt{1+v^2}<1$ for every real $v$, because $|v|<\sqrt{1+v^2}$ follows from squaring; in particular $p=1$ is not in the range of $\varphi_1$, since $v/\sqrt{1+v^2}=1$ would give $v\ge0$ and $v^2=1+v^2$, i.e. $0=1$.

## Verification

**Proof technique:** direct; compute the derivatives, compare the ranges with $\mathbb R$, and check regularity and hyperregularity against the definition.

1.1 By [F1] the three Lagrangians are $C^2$, and the velocity Hessians at $v$ are $(1+v^2)^{-3/2}$, $0$ and $1$ respectively. Hence $\mathcal L_1$ and $\mathcal L_3$ are regular on the chart, while $\mathcal L_2$ is regular at no point, because regularity means a nonsingular one-by-one velocity Hessian ([[def-cm-legendre-map-in-a-time-dependent-chart]], [[lem-cm-legendre-map-local-invertibility]]). [F1, algebra]

2.1 By [F2], $\varphi_1$ is injective and $\varphi_3$ is bijective $\mathbb R\to\mathbb R$, while $\varphi_2$ is constant. Moreover, by [F3] the range of $\varphi_1$ is contained in $(-1,1)$ and omits $p=1$; for every $p\in(-1,1)$, setting $v=p/\sqrt{1-p^2}$ gives $1+v^2=1/(1-p^2)$ and $v/\sqrt{1+v^2}=p$. Thus the range is exactly $(-1,1)$, and $\varphi_1$ is not surjective onto $\mathbb R$. Therefore $\mathcal L_1$ is regular but not hyperregular, $\mathcal L_3$ is hyperregular, and $\mathcal L_2$ fails hyperregularity by non-injectivity (and fails regularity as well). [F2, F3, step 1.1]

3.1 The three clauses of the Example are proved: clause 1 by the regularity of $\mathcal L_1$ from step 1.1 and the failure of surjectivity from step 2.1; clause 2 by the vanishing Hessian and constancy from steps 1.1 and 2.1; clause 3 by the invertibility of the identity map and the nonvanishing Hessian. [step 1.1, step 2.1] ∎

## Remarks

- The first example is the standard witness that global hyperregularity is a genuine extra hypothesis: the local inverse branch exists near every velocity by [[lem-cm-legendre-map-local-invertibility]], but no global momentum variable can be solved over the whole fibre. The third example is the model case supplied by [[prop-cm-mechanical-chart-lagrangian-is-hyperregular]] with constant positive definite $G$, and the second is the degenerate case used in [[rem-cm-scope-of-the-legendre-map]].

- The choice $\mathcal L_1=\sqrt{1+v^2}$ is a mathematical example, not a claim about any physical Lagrangian; no interpretation of the velocities or of the momentum variable is asserted.

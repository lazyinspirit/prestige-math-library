---
id: "thm-mapping-path-factorization"
kind: "theorem"
title: "Mapping path factorization"
deps: ["def-mapping-path-space-replacement-of-a-map", "def-hurewicz-and-serre-fibrations", "lem-interval-exponential-law-and-quotient-homotopies", "lem-continuity-is-local-and-pastes"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every continuous $f:X\to Y$ factors as $f=p_fj_f$, where $j_f:X\to E_f$ is a homotopy equivalence and $p_f:E_f\to Y$ is a Hurewicz fibration. This holds for all ordinary spaces and, with the specified kified constructions, in CGWH. No surjectivity onto components disjoint from $f(X)$ is asserted. The result is choice-free.

## Facts & Assumptions

[F1] $E_f$, $j_f$, $r_f$ and $p_f$ are the continuous mapping-path maps. [[def-mapping-path-space-replacement-of-a-map]]

[F2] Hurewicz HLP means a jointly continuous lift with its exact initial map. [[def-hurewicz-and-serre-fibrations]]

[F3] Interval evaluation and transposition preserve continuity, ordinarily and after the stated kification. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F4] Continuous maps agreeing on a finite closed cover paste continuously. [[lem-continuity-is-local-and-pastes]]

## Proof

**Given:** The map $f$ and F1 constructions; for HLP, initial map $v:Z\to E_f$, $v(z)=(x(z),\gamma_z)$, and $H:Z\times I\to Y$ with $H(z,0)=\gamma_z(1)$.

1.1 Direct evaluation gives $p_fj_f=f$ and $r_fj_f=\mathrm{id}_X$. The formula $D((x,\gamma),t)=(x,s\mapsto\gamma((1-t)s))$ is continuous by F3 applied to its adjoint. It remains in $E_f$ because its path starts at $f(x)$, begins at $(x,\gamma)$ and ends at $j_fr_f(x,\gamma)$. It fixes every constant path. Thus $j_f$ and $r_f$ are homotopy inverses, even with a strong deformation retraction onto $j_f(X)$. [F1, F3]

1.2 For the given HLP problem define $\eta_{z,t}:I\to Y$ by $\eta_{z,t}(s)=\gamma_z((1+t)s)$ if $(1+t)s\le1$, and $\eta_{z,t}(s)=H(z,(1+t)s-1)$ if $(1+t)s\ge1$. Both domains are closed and cover $Z\times I\times I$. At their intersection the values are $\gamma_z(1)=H(z,0)$, so F3–F4 prove the joint continuity of the adjoint. All arguments of $H$ lie in $[0,t]$. In particular no division by $t$ occurs at $t=0$. [F3, F4, given]

2.1 Transpose step 1.2 and put $\widetilde H(z,t)=(x(z),\eta_{z,t})$. The path begins at $\gamma_z(0)=f(x(z))$, so this lands continuously in $E_f$. At $t=0$ it is exactly $(x(z),\gamma_z)$, and $p_f\widetilde H(z,t)=\eta_{z,t}(1)=H(z,t)$, including $t=0$ by compatibility. Hence F2 holds for every parameter space, and the same adjoint formulas establish the CG version. [F1, F2, F3, step 1.2]

3.1 Empty $X$ makes all initial-map test domains empty. A one-point $X$ gives the usual based path space; a one-point $Y$ reduces the deformation to the identity of $X$. Both deformation endpoints and both path endpoints were checked above. Existence of a path in $E_f$ forces its final point into a component meeting $f(X)$, explaining the absence of a surjectivity claim. Every operation was a formula, not a path selection. Together steps 1.1 and 2.1 establish the factorization. [step 1.1, step 2.1] ∎

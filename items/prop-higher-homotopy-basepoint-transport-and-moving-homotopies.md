---
id: prop-higher-homotopy-basepoint-transport-and-moving-homotopies
kind: proposition
title: Higher homotopy basepoint transport and moving homotopies
deps: ["def-higher-homotopy-group-by-based-cubes", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant", "lem-continuity-is-local-and-pastes"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a path $\gamma:x_0\to x_1$ and n≥1, radial-shell transport defines an isomorphism $\beta_\gamma:\pi_n(X,x_1)\to\pi_n(X,x_0)$ depending only on the endpoint-fixed path class. Its inverse is transport by the reversed path, and $\beta_{\gamma*\eta}=\beta_\gamma\beta_\eta$ when γ is traversed first. If $H:f\simeq g$ has basepoint track γ, then $f_*=\beta_\gamma g_*$. In degree one $\beta_\gamma[a]=[\gamma*a*\bar\gamma]$.

## Facts & Assumptions

[F1] Cubical maps fix all boundary faces. [[def-higher-homotopy-group-by-based-cubes]]

[F2] Boundary-fixed reparametrizations and reversal give the cubical group laws. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]

[F3] Based postcomposition induces maps on cubical classes. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[F4] Continuous maps agreeing on finitely many closed pieces paste. [[lem-continuity-is-local-and-pastes]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Use the centered cube $[-1,1]^n$, r=||z||∞. For a cube a based at x1, set $T_\gamma a(z)=a(2z)$ for r≤1/2 and $\gamma(2-2r)$ for r≥1/2. At r=1/2 both give x1, and at r=1 the value is x0. Closed pasting proves continuity. The identical formula with a homotopy of a or an endpoint-fixed homotopy of γ proves independence of both representatives. [F1, F4]

2.1 Two successive transports have a core of radius 1/4 and two nested shells tracing η then γ as the radius increases. A positive piecewise-linear change of radial variable matches these breakpoints with those for transport by γ*η, and interpolation of that change with the identity gives a boundary-fixed homotopy; its core is scaled by the same positive factor. A constant shell can similarly be shrunk to width zero, since all its values equal the boundary value. Finally γ followed by its reverse contracts rel endpoints by the explicit retracing formula $\gamma(2s(1-t))$ on the first half and $\gamma(2(1-s)(1-t))$ on the second. Applying step 1.1 to this path homotopy gives $\beta_{\bar\gamma}\beta_\gamma=\mathrm{id}$ and the reverse identity. [F2, F4, step 1.1]

3.1 More generally let $F(z,t)$ be a homotopy of cubes whose boundary value is γ(t). Define $K(z,t)=F(2z,t)$ on r≤1/2 and $K(z,t)=\gamma(t(2-2r))$ on r≥1/2. The seam values are γ(t) and the outer boundary is x0. Thus K is a based homotopy from F(-,0) with a constant shell to $T_\gamma F(-,1)$. Removing the constant shell by step 2.1 proves $[F(-,0)]=\beta_\gamma[F(-,1)]$. Apply this to F(z,t)=H(a(z),t) to obtain $f_*=\beta_\gamma g_*$. [F1, F3, F4, step 1.1, step 2.1]

4.1 For a based at x1, the homotopy with fixed core a(2z) and shell $\gamma(1-t+t(2-2r))$ has moving boundary $\bar\gamma(t)$, starts at a with a constant shell and ends at $T_\gamma a$. Paste this homotopy for a and b on the two coordinate-1 half-cubes: their common face has the same value $\bar\gamma(t)$, so it is a continuous moving-boundary homotopy from a*b to $T_\gamma a*T_\gamma b$, up to the removable constant shells. Step 3.1 gives $[a*b]=\beta_{\bar\gamma}([T_\gamma a*T_\gamma b])$; applying the inverse identity of step 2.1 proves multiplicativity of βγ. Hence it is a group isomorphism. [F1, F2, F4, step 1.1, step 2.1, step 3.1]

5.1 In dimension one, increasing the centered coordinate from -1 to 1 traverses the left shell from γ(0) to γ(1), then a, then the right shell from γ(1) to γ(0). Positive reparametrization gives exactly $[\gamma*a*\bar\gamma]$. This verifies the first-loop-first convention. [F2, step 1.1, step 4.1] ∎

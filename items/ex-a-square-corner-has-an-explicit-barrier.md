---
id: ex-a-square-corner-has-an-explicit-barrier
kind: example
title: "A square corner carries an explicit power-barrier"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-exterior-disc-and-exterior-cone-points-are-regular, def-barrier-and-regular-boundary-point]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Example

For the unit square $Q=(0,1)^2$, the corner $0$ has the explicit barrier
$$b(z)=-\operatorname{Re}(z^{2/3}),$$
where the branch of $z^{2/3}$ is taken on the first quadrant.

## Facts & Assumptions

**Given:** The unit square $Q=(0,1)^2$ and its corner $0$.

[L1] Exterior-cone points are regular because an explicit power-map barrier exists there ([[thm-exterior-disc-and-exterior-cone-points-are-regular]]).

[L2] A barrier is a negative subharmonic function tending to $0$ at the marked boundary point and staying uniformly below a negative constant away from it ([[def-barrier-and-regular-boundary-point]]).

## Verification

**Proof technique:** direct.

1.1 On the first quadrant one may choose the holomorphic branch of $z^{2/3}$. If $z=re^{it}$ with $0<t<\pi/2$, then [given, algebra]
$$z^{2/3}=r^{2/3}e^{2it/3}$$
has argument in $(0,\pi/3)$, so $\operatorname{Re}(z^{2/3})>0$. Therefore
$b(z)=-\operatorname{Re}(z^{2/3})<0$ on $Q$ near the corner, and
$b(z)\to0$ as $z\to0$. [given, algebra]

2.1 On any set in the square that stays a positive distance from $0$, the quantity $\operatorname{Re}(z^{2/3})$ has a positive minimum, so $b$ stays uniformly below a negative constant there. Thus $b$ has exactly the shape required in [L2], and it is the concrete barrier predicted abstractly by [L1]. [L1, L2, step 1.1] ∎

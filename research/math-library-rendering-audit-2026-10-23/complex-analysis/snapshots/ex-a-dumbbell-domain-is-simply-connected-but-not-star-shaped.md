---
id: ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped
kind: example
title: "A dumbbell-shaped plane domain can be simply connected without being star-shaped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-spherical-complement-characterization-of-plane-simple-connectivity]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Example

Assume the Axiom of Choice. Let

$$\Omega=B(-2,1)\cup([-2,2]\times(-\tfrac14,\tfrac14))\cup B(2,1),$$

the union of two unit discs joined by a thin horizontal corridor. Then
$\Omega$ is simply connected, but $\Omega$ is not star-shaped.

## Facts & Assumptions

**Given:** The Axiom of Choice and the dumbbell domain $\Omega$ displayed above.

[L1] Assuming the Axiom of Choice, a complex domain is simply connected exactly when its spherical complement is connected ([[cor-spherical-complement-characterization-of-plane-simple-connectivity]]).

## Verification

**Proof technique:** direct.

1.1 The set $\Omega$ is open and connected by construction. Its spherical complement is connected: outside the two discs and corridor one can move continuously around the exterior, and the slits cut out by the corridor attach to the same unbounded exterior region instead of creating a hole. Therefore [L1] makes $\Omega$ simply connected. [given, L1]

1.2 The domain is not star-shaped. Set $$u_\pm=(\pm2,\tfrac34),\qquad \ell_\pm=(\pm2,-\tfrac34),$$ which all lie in $\Omega$. Let $z_0=(x_0,y_0)\in\Omega$. If $x_0\le0$ and $y_0\ge0$, then along the segment from $z_0$ to $u_+$ the point with $x$-coordinate $1$ has $y$-coordinate at least $\tfrac38>\tfrac14$, so it lies above the corridor and also outside the right unit disc because its distance to $(2,0)$ exceeds $1$. Hence that segment leaves $\Omega$. If $x_0\le0$ and $y_0<0$, the same argument with $\ell_+$ gives a point at $x=1$ with $y\le-\tfrac38<-\tfrac14$, again outside $\Omega$. By symmetry, if $x_0\ge0$ then one of the segments from $z_0$ to $u_-$ or $\ell_-$ leaves $\Omega$. Thus no point of $\Omega$ sees all of $\Omega$ by straight segments, so $\Omega$ is not star-shaped. [given, algebra]

2.1 Steps 1.1 and 1.2 give the required witness: simply connected need not imply star-shaped. [step 1.1, step 1.2] ∎

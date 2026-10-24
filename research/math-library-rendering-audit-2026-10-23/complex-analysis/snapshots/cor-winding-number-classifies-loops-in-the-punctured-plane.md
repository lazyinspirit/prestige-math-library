---
id: cor-winding-number-classifies-loops-in-the-punctured-plane
kind: corollary
title: "Winding number identifies the fundamental group of C times with the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-winding-number-equals-circle-degree,
       cor-geometric-unit-circle-has-fundamental-group-z,
       thm-punctured-rn-deformation-retracts-onto-the-sphere,
       prop-retracts-inject-fundamental-groups]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 4.1.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "A. Hatcher, Algebraic Topology, Theorem 1.7"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

For a based loop $\gamma:[0,1]\to\mathbb C^\times$ at $1$, let
$r(z)=z/|z|$ and define

$$W([\gamma]):=\deg(r\circ\gamma).$$

Then $W$ is the standard isomorphism

$$\pi_1(\mathbb C^\times,1)\cong(\mathbb Z,+).$$

If $\gamma$ is rectifiable, then

$$W([\gamma])=n(\gamma,0).$$

Thus the analytic winding number of any rectifiable representative is the
integer classifying its loop class.

## Facts & Assumptions

**Given:** A based loop $\gamma:[0,1]\to\mathbb C^\times$ at $1$.

[L1] For a rectifiable based loop, the winding number about $0$ equals the degree of its normalized circle loop ([[thm-winding-number-equals-circle-degree]]).

[L2] Radial normalization is a deformation retraction of $\mathbb R^2\setminus\{0\}=\mathbb C^\times$ onto the unit circle ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L3] A deformation retract induces mutually inverse fundamental-group isomorphisms between the retract and the ambient space ([[prop-retracts-inject-fundamental-groups]]).

[L4] The unit circle has fundamental group $\mathbb Z$ with the standard trigonometric generator ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

## Proof

**Proof technique:** direct.

1.1 Let $C=\{z\in\mathbb C:|z|=1\}\subseteq\mathbb C^\times$ and let $r:\mathbb C^\times\to C$ be radial normalization, $r(z)=z/|z|$. Specializing [L2] to $n=2$ and applying [L3], the induced map $$r_*:\pi_1(\mathbb C^\times,1)\longrightarrow\pi_1(C,1)$$ is an isomorphism. For the given loop $\gamma$, its image under $r_*$ is the class of the normalized circle loop $\alpha(t)=\gamma(t)/|\gamma(t)|$. [given, L2, L3]

2.1 Fact [L4] identifies the class of $\alpha$ in $\pi_1(C,1)$ with the integer $\deg(\alpha)$. Hence $W([\gamma])=\deg(r\circ\gamma)$ is exactly the composite of the isomorphism $r_*$ from step 1.1 with the standard identification $\pi_1(C,1)\cong\mathbb Z$, and is therefore the standard isomorphism $$\pi_1(\mathbb C^\times,1)\cong(\mathbb Z,+).$$ If $\gamma$ is rectifiable, [L1] gives $W([\gamma])=\deg(\alpha)=n(\gamma,0)$. [step 1.1, L1, L4] ∎

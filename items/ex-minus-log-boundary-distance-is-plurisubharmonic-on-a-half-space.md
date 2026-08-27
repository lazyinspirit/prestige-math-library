---
id: ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space
kind: example
title: "Minus log boundary distance is plurisubharmonic on a half-space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity,
       thm-c-two-levi-criterion-for-plurisubharmonicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 8"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

For the half-space

$$H=\{z\in\mathbb C^m: \operatorname{Re}z_1>0\},$$

one has

$$\delta_H(z)=\operatorname{Re}z_1,\qquad -\log\delta_H(z)=-\log(\operatorname{Re}z_1),$$

and this function is plurisubharmonic on $H$.

## Facts & Assumptions

**Given:** The half-space $H=\{\operatorname{Re}z_1>0\}$.

[L1] Hartogs pseudoconvexity is defined through the function $-\log\delta_H$
([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[L2] A $C^2$ function is plurisubharmonic exactly when its Levi form is
semipositive ([[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

## Verification

**Proof technique:** direct.

1.1 The equal-radius polydisc about $z$ stays in the half-space exactly while its first-coordinate radius is smaller than $\operatorname{Re}z_1$, so $\delta_H(z)=\operatorname{Re}z_1$. The function $u(z)=-\log(\operatorname{Re}z_1)$ is $C^2$ on $H$ and satisfies $$\frac{\partial^2u}{\partial z_1\partial\overline z_1}(z)=\frac{1}{4(\operatorname{Re}z_1)^2},\qquad \frac{\partial^2u}{\partial z_j\partial\overline z_k}(z)=0\text{ for }(j,k)\ne(1,1).$$ [L1, given, algebra]

2.1 Hence the Levi form of $u$ is $$\mathcal L_u(z;v)=\frac{|v_1|^2}{4(\operatorname{Re}z_1)^2}\ge0.$$ By [L2], $u=-\log\delta_H$ is plurisubharmonic on $H$. [L2, step 1.1] ∎

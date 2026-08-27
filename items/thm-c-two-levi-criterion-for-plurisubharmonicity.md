---
id: thm-c-two-levi-criterion-for-plurisubharmonicity
kind: theorem
title: "The C^2 Levi criterion for plurisubharmonicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       def-levi-form-and-strict-plurisubharmonicity,
       thm-c-two-characterization-of-plane-subharmonicity]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.4"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4 and §3.3.1"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be open and let $u\in C^2(\Omega,\mathbb R)$.
Then $u$ is plurisubharmonic on $\Omega$ if and only if

$$\mathcal L_u(a;v)\ge0\qquad\text{for every }a\in\Omega\text{ and every }v\in\mathbb C^m.$$

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb C^m$ and a function
$u\in C^2(\Omega,\mathbb R)$.

[L1] Plurisubharmonicity is defined by subharmonicity of the restriction to
every affine complex line ([[def-plurisubharmonic-function]]).

[L2] The Levi form is the Hermitian form built from the mixed
$z_j\overline z_k$ second derivatives
([[def-levi-form-and-strict-plurisubharmonicity]]).

[L3] A $C^2$ real-valued function of one complex variable is subharmonic exactly
when its Laplacian is nonnegative
([[thm-c-two-characterization-of-plane-subharmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\Omega$ and $v\in\mathbb C^m$, and define $\phi_{a,v}(\lambda)=a+\lambda v$ on a small disc about $0$ whose image lies in $\Omega$. By the chain rule, $$\frac{\partial^2}{\partial\lambda\,\partial\overline\lambda}(u\circ\phi_{a,v})(0)=\sum_{j=1}^m\sum_{k=1}^m \frac{\partial^2u}{\partial z_j\partial\overline z_k}(a)\,v_j\overline{v_k}=\mathcal L_u(a;v).$$ Since $\Delta=4\,\partial_\lambda\partial_{\overline\lambda}$ in one complex variable, [L3] says that $u\circ\phi_{a,v}$ is subharmonic exactly when $\mathcal L_u(a;v)\ge0$. [L2, L3, given, algebra]

2.1 If $u$ is plurisubharmonic, then every line restriction is subharmonic by [L1], so step 1.1 gives $\mathcal L_u(a;v)\ge0$ for every $a$ and $v$. Conversely, if the Levi form is semipositive everywhere, then step 1.1 and [L3] show that every affine-line restriction is subharmonic. Applying [L1] again, $u$ is plurisubharmonic on $\Omega$. [L1, step 1.1] ∎

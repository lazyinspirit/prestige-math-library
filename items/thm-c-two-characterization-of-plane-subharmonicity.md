---
id: thm-c-two-characterization-of-plane-subharmonicity
kind: theorem
title: "A C^2 function is subharmonic exactly when its Laplacian is nonnegative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-harmonic-majorant-characterization-of-plane-subharmonicity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open and let $u\in C^2(\Omega,\mathbb R)$.
Then $u$ is subharmonic on $\Omega$ if and only if
$$\Delta u=u_{xx}+u_{yy}\ge0$$
throughout $\Omega$.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb C$ and a function $u\in C^2(\Omega,\mathbb R)$.

[L1] Subharmonicity on a domain is equivalent to harmonic comparison on every compactly contained disc ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $u$ is subharmonic. Fix $a\in\Omega$ and choose $r>0$ with $\overline{D(a,r)}\subseteq\Omega$. For $0<\rho<r$, Taylor's formula in the direction $e^{it}$ gives [L1, given, algebra] $$u(a+\rho e^{it})=u(a)+\rho\,\nabla u(a)\!\cdot\! e^{it}+\frac{\rho^2}{2}\,e^{it}\!{}^T(D^2u(a))e^{it}+o(\rho^2).$$ Averaging over $t$ kills the linear term and averages the quadratic term to $\frac{\rho^2}{4}\Delta u(a)$, so the submean inequality yields $$0\le\frac1{2\pi}\int_0^{2\pi}u(a+\rho e^{it})\,dt-u(a)=\frac{\rho^2}{4}\Delta u(a)+o(\rho^2).$$ Dividing by $\rho^2$ and letting $\rho\downarrow0$ gives $\Delta u(a)\ge0$. [L1, given, algebra]

2.1 Assume now that $\Delta u\ge0$ on $\Omega$. Fix a closed disc $\overline{D(a,r)}\subseteq\Omega$, and let $h$ be continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, and satisfy $h\ge u$ on $\partial D(a,r)$. Put $w=u-h$. Then $w$ is continuous on $\overline{D(a,r)}$, belongs to $C^2(D(a,r))$, satisfies $\Delta w=\Delta u\ge0$ on $D(a,r)$, and has $w\le0$ on $\partial D(a,r)$. If some point $p\in D(a,r)$ had $w(p)>0$, choose $0<\varepsilon<w(p)/r^2$ and define $w_\varepsilon(z):=w(z)+\varepsilon|z-a|^2$. On the boundary one has $w_\varepsilon\le\varepsilon r^2<w(p)\le w_\varepsilon(p)$, so $w_\varepsilon$ attains its maximum at an interior point $q\in D(a,r)$. The second-derivative test there gives $\Delta w_\varepsilon(q)\le0$, but $$\Delta w_\varepsilon=\Delta w+4\varepsilon\ge4\varepsilon>0,$$ a contradiction. Therefore $w\le0$ on $D(a,r)$, so $u\le h$ on the whole disc. Since the disc and the harmonic boundary majorant $h$ were arbitrary, [L1] shows that $u$ is subharmonic on $\Omega$. [L1, algebra] ∎

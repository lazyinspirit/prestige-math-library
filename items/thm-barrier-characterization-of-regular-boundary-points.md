---
id: thm-barrier-characterization-of-regular-boundary-points
kind: theorem
title: "A boundary point is regular exactly when it admits a barrier"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barrier-and-regular-boundary-point, def-perron-family-for-the-plane-dirichlet-problem, def-perron-envelope-for-the-plane-dirichlet-problem, lem-perron-family-is-nonempty-and-bounded, thm-upper-envelope-theorem-for-plane-subharmonic-functions, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-maximum-principle-for-plane-subharmonic-functions, thm-c-two-characterization-of-plane-subharmonicity]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$. Then $\zeta$ is regular if and only if $\Omega$ admits
a barrier at $\zeta$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a boundary point $\zeta\in\partial\Omega$.

[L1] The Perron lower family and its pointwise supremum $U_\varphi$ define $H_\varphi=U_\varphi^*$ ([[def-perron-family-for-the-plane-dirichlet-problem]], [[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[L2] The Perron family is nonempty and bounded above for continuous boundary data; its regularized envelope is subharmonic ([[lem-perron-family-is-nonempty-and-bounded]], [[thm-upper-envelope-theorem-for-plane-subharmonic-functions]]).

[L3] A barrier at $\zeta$ is a negative subharmonic function that tends to $0$ at $\zeta$ and stays uniformly below a negative constant on the rest of the boundary ([[def-barrier-and-regular-boundary-point]]).

[L4] The $C^2$ function $q(z)=|z-\zeta|^2$ is subharmonic because $\Delta q=4\ge0$ ([[thm-c-two-characterization-of-plane-subharmonicity]]).

[L5] Positive sums of subharmonic functions are subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]). A subharmonic function on a bounded domain whose boundary limsup is everywhere at most $0$ is at most $0$, by the subharmonic maximum principle ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $b$ is a barrier at $\zeta$, and fix a continuous boundary datum $\varphi$ and $\varepsilon>0$. Choose a neighbourhood $V$ of $\zeta$ such that $|\varphi(\eta)-\varphi(\zeta)|<\varepsilon$ for $\eta\in V\cap\partial\Omega$. By [L3] there is $c_V<0$ bounding the boundary limsup of $b$ on $\partial\Omega\setminus V$. Since $\varphi$ is bounded on the compact boundary, choose $A>0$ large enough that, on this complement, both $\varphi(\zeta)-\varepsilon+A c_V\le\varphi(\eta)$ and $\varphi(\eta)+A c_V\le\varphi(\zeta)+\varepsilon$ hold. If the complement is empty, any $A>0$ suffices. [L3, given]

1.2 Conversely suppose $\zeta$ is regular. Set $\psi(\eta)=-|\eta-\zeta|^2$ on $\partial\Omega$ and $B=H_\psi$. By [L2], $B$ is subharmonic, and regularity gives $B(z)\to\psi(\zeta)=0$ as $z\to\zeta$. For any $v\in\mathcal P(\psi,\Omega)$, [L4] and [L5] make $v(z)+q(z)$ subharmonic, with boundary limsup at most $\psi(\eta)+q(\eta)=0$ at every $\eta\in\partial\Omega$. The maximum principle in [L5] gives $v\le-q$. Taking the supremum and regularizing preserves this bound because $q$ is continuous: $B\le-q<0$ on $\Omega$. For any neighbourhood $V$ of $\zeta$ with nonempty boundary complement, the compact set $\partial\Omega\setminus V$ has $\delta_V=\min_{\eta\in\partial\Omega\setminus V}|\eta-\zeta|^2>0$, so the boundary limsup of $B$ there is at most $-\delta_V$. The empty-complement case is vacuous. Thus $B$ is a barrier at $\zeta$. [L1, L2, L3, L4, L5, given]

2.1 The function $\ell(z)=\varphi(\zeta)-\varepsilon+A b(z)$ is subharmonic by [L5]. Near $\zeta$ its boundary limsup is at most $\varphi(\zeta)-\varepsilon\le\varphi(\eta)$; away from $\zeta$ the first inequality in step 1.1 gives the same bound. Thus $\ell\in\mathcal P(\varphi,\Omega)$ by [L1], and $H_\varphi\ge U_\varphi\ge\ell$. Since $b(z)\to0$ at $\zeta$, this proves $\liminf_{z\to\zeta}H_\varphi(z)\ge\varphi(\zeta)-\varepsilon$. [L1, L3, L5, step 1.1]

3.1 Let $v\in\mathcal P(\varphi,\Omega)$ be arbitrary. The subharmonic function $s=v+A b-\varphi(\zeta)-\varepsilon$ has boundary limsup at most $0$: on $V\cap\partial\Omega$ use $\limsup v\le\varphi(\eta)<\varphi(\zeta)+\varepsilon$ and $b<0$; on the complement use the second inequality in step 1.1. By [L5], $s\le0$ throughout $\Omega$. Taking the supremum over all $v$ gives $U_\varphi(z)\le\varphi(\zeta)+\varepsilon-A b(z)$. For any $\delta>0$, the barrier limit gives a neighbourhood $W$ of $\zeta$ on which $b> -\delta$, hence $U_\varphi<\varphi(\zeta)+\varepsilon+A\delta$ on $W\cap\Omega$. Its upper-semicontinuous regularization satisfies the same weak upper bound on a smaller neighbourhood of $\zeta$. Letting $\delta\downarrow0$ yields $\limsup_{z\to\zeta}H_\varphi(z)\le\varphi(\zeta)+\varepsilon$. Together with step 2.1 and arbitrary $\varepsilon$, this proves regularity. [L1, L3, L5, step 1.1, step 2.1]

4.1 Steps 1.1–3.1 establish both implications. [step 3.1, step 1.2] ∎

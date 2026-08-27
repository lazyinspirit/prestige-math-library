---
id: thm-barrier-characterization-of-regular-boundary-points
kind: theorem
title: "A boundary point is regular exactly when it admits a barrier"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barrier-and-regular-boundary-point, thm-perron-envelope-is-harmonic, thm-maximum-principle-for-plane-subharmonic-functions, thm-c-two-characterization-of-plane-subharmonicity]
proof_strategy: direct
verification:
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

[L1] For every continuous boundary datum, the regularized Perron envelope is harmonic on $\Omega$ ([[thm-perron-envelope-is-harmonic]]).

[L2] A subharmonic function with a finite interior maximum is constant on the connected domain ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

[L3] A barrier at $\zeta$ is a negative subharmonic function that tends to $0$ at $\zeta$ and stays uniformly below a negative constant on the rest of the boundary ([[def-barrier-and-regular-boundary-point]]).

[L4] The $C^2$ function $q(z)=|z-\zeta|^2$ is subharmonic because $\Delta q=4\ge0$ ([[thm-c-two-characterization-of-plane-subharmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $b$ is a barrier at $\zeta$, and let $\varphi\in C(\partial\Omega)$. Put $H=H_\varphi$, which is harmonic by [L1]. Fix $\varepsilon>0$. Choose a boundary neighbourhood $V$ of $\zeta$ with $|\varphi(\eta)-\varphi(\zeta)|<\varepsilon$ on $V\cap\partial\Omega$, and choose $A>0$ so large that the negative boundary bound from [L3] forces both [L3, given, choose] $$\varphi(\eta)-\varphi(\zeta)-\varepsilon+A\,\limsup b(\eta)\le0,\qquad -\varphi(\eta)+\varphi(\zeta)-\varepsilon+A\,\limsup b(\eta)\le0$$ for $\eta\in\partial\Omega\setminus V$. [L3, given, choose]

1.2 Assume conversely that $\zeta$ is regular, and define a continuous boundary datum on $\partial\Omega$ by $\psi(\eta)=-|\eta-\zeta|^2$. Let $B=H_\psi$, which is harmonic on $\Omega$ by [L1]. Regularity gives $B(z)\to\psi(\zeta)=0$ as $z\to\zeta$. Now let $v$ be any member of the Perron family for $\psi$. By [L4], the function $q(z)=|z-\zeta|^2$ is subharmonic on $\Omega$, so $v+q$ is subharmonic there. For every boundary point $\eta\in\partial\Omega$, the defining Perron inequality gives $$\limsup_{\substack{z\to\eta\\ z\in\Omega}}\bigl(v(z)+q(z)\bigr)\le \psi(\eta)+|\eta-\zeta|^2=0.$$ If $v+q$ were positive somewhere in $\Omega$, then upper semicontinuity and boundedness of $\Omega$ would produce a positive interior maximum, contradicting [L2]. Hence $v(z)\le-|z-\zeta|^2$ on $\Omega$ for every lower function $v$. Taking the supremum over the Perron family and then upper-semicontinuous regularizing yields $$B(z)\le-|z-\zeta|^2<0\qquad(z\in\Omega).$$ Now let $V$ be any neighbourhood of $\zeta$. The compact set $\partial\Omega\setminus V$ has $$\delta_V:=\min_{\eta\in\partial\Omega\setminus V}|\eta-\zeta|^2>0,$$ so the displayed inequality gives $$\limsup_{\substack{z\to\eta\\ z\in\Omega}}B(z)\le-\delta_V\qquad(\eta\in\partial\Omega\setminus V).$$ Thus $B$ is negative on $\Omega$, tends to $0$ at $\zeta$, and stays uniformly below a negative constant away from $\zeta$. Hence $B$ is a barrier at $\zeta$. [L1, L2, L4, given]

2.1 The functions [L2, step 1.1] $$s_+(z)=H(z)-\varphi(\zeta)-\varepsilon+A\,b(z),\qquad s_-(z)=-H(z)+\varphi(\zeta)-\varepsilon+A\,b(z)$$ are subharmonic on $\Omega$ because $H$ and $-H$ are harmonic and $b$ is subharmonic. Step 1.1 shows that both have boundary limsup at most $0$. If either had a positive value in the interior, upper semicontinuity would produce a positive interior maximum, contradicting [L2]. Hence $s_\pm\le0$ on $\Omega$. [L2, step 1.1]

3.1 Step 2.1 gives [step 2.1, L3] $$\varphi(\zeta)-\varepsilon+A\,b(z)\le H(z)\le\varphi(\zeta)+\varepsilon-A\,b(z).$$ Letting $z\to\zeta$ inside $\Omega$ and using $b(z)\to0$ gives $$\varphi(\zeta)-\varepsilon\le\liminf_{\Omega\ni z\to\zeta}H(z)\le\limsup_{\Omega\ni z\to\zeta}H(z)\le\varphi(\zeta)+\varepsilon.$$ Since $\varepsilon$ is arbitrary, $H(z)\to\varphi(\zeta)$. Thus $\zeta$ is regular. [step 2.1, L3]

4.1 Steps 1.1 through 4.1 prove both directions, so $\zeta$ is regular exactly when it admits a barrier. [step 3.1, step 1.2] ∎

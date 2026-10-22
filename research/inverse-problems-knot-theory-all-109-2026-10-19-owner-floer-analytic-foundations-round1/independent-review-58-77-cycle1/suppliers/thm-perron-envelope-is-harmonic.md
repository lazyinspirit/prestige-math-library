---
id: thm-perron-envelope-is-harmonic
kind: theorem
title: "The regularized Perron envelope is harmonic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perron-envelope-for-the-plane-dirichlet-problem, lem-perron-family-is-nonempty-and-bounded, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-upper-envelope-theorem-for-plane-subharmonic-functions, thm-maximum-principle-for-plane-subharmonic-functions, def-poisson-integral-on-the-disc, lem-poisson-kernel-properties-on-the-disc, thm-harnack-inequality-on-a-disc, thm-mean-value-property-for-plane-harmonic-functions, thm-converse-mean-value-property-for-plane-functions]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\varphi:\partial\Omega\to\mathbb R$ be continuous. Then the regularized Perron
envelope $H_\varphi$ is harmonic on $\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a continuous boundary datum $\varphi:\partial\Omega\to\mathbb R$.

[L1] The Perron family is nonempty, every lower function is bounded above by $M=\max_{\partial\Omega}\varphi$, and the envelope satisfies $m\le U_\varphi\le M$ for $m=\min_{\partial\Omega}\varphi$ ([[lem-perron-family-is-nonempty-and-bounded]]). The envelope regularization is the local limsup of $U_\varphi$ ([[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[L2] Poisson modification of a lower function on an interior disc stays subharmonic, is harmonic on that disc, majorizes the original lower function, and remains in the Perron family because it is unchanged near $\partial\Omega$ ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]], [[def-poisson-modification-of-a-subharmonic-function]]).

[L3] Finite maxima and positive finite sums preserve subharmonicity; in particular finite maxima of Perron lower functions remain in the Perron family ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L4] The Poisson integral of continuous circle data uses the positive Poisson kernel. The Poisson modification is the infimum of the Poisson integrals of any decreasing continuous boundary approximation, independent of that approximation ([[def-poisson-integral-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-modification-preserves-subharmonicity-and-majorizes]]).

[L5] If a nonnegative harmonic function is defined on a neighbourhood of a closed disc, its value on a smaller concentric disc is at most a Harnack factor times its center value; the factor tends to $1$ as the smaller radius tends to $0$ ([[thm-harnack-inequality-on-a-disc]]).

[L6] The upper-semicontinuous regularization of a locally bounded-above subharmonic supremum is subharmonic ([[thm-upper-envelope-theorem-for-plane-subharmonic-functions]]).

[L7] Every harmonic function has the circle mean-value property, and a continuous function with that local property is harmonic ([[thm-mean-value-property-for-plane-harmonic-functions]], [[thm-converse-mean-value-property-for-plane-functions]]).

[L8] A subharmonic function that attains a finite interior maximum is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** directed-supremum argument using finite witnesses.

1.1 By [L1], the Perron family $\mathcal P(\varphi,\Omega)$ is nonempty and locally bounded above. Applying [L6] shows that $H_\varphi$ is finite-valued and subharmonic on $\Omega$, with $m\le U_\varphi\le H_\varphi\le M$. [L1, L6]

2.1 Fix $a\in\Omega$ and a disc $D=D(a,R)$ with $\overline D\Subset\Omega$. For each $v\in\mathcal P(\varphi,\Omega)$ write $h_v=(P_Dv)|_D$. By [L2], $h_v$ is harmonic on $D$, the globally defined $P_Dv$ is again a Perron lower function, and $v\le h_v\le U_\varphi\le H_\varphi\le M$ on $D$. The family of these lifts is nonempty; the constant lower function $m$ gives $h_m=m$. [L1, L2, step 1.1]

3.1 The Poisson modification is order preserving: if $v\le w$ are two lower functions, take any decreasing continuous boundary approximations $\alpha_n\downarrow v|_{\partial D}$ and $\beta_n\downarrow w|_{\partial D}$ supplied by [L4]. The finite minima $\gamma_n:=\min(\alpha_n,\beta_n)$ are continuous, decrease to $v|_{\partial D}$, and satisfy $\gamma_n\le\beta_n$. Positivity of the Poisson kernel in [L4] makes the harmonic Poisson integrals satisfy $P[\gamma_n]\le P[\beta_n]$ on $D$. Taking their decreasing limits in the intrinsic definition of Poisson modification yields $h_v\le h_w$. This uses two witnesses and their finite minima, with no countable family of choices. [L4, step 2.1]

4.1 Given $v,w$ in the Perron family, $t=\max(v,w)$ belongs to the family by [L3], and step 3.1 gives $h_t\ge h_v,h_w$. Thus the lifted family is upward directed. Define $h(z):=\sup_v h_v(z)$ on $D$; by step 2.1 and the constant member $h_m=m$, it is finite and satisfies $m\le h\le H_\varphi$. [L1, L3, step 2.1, step 3.1]

5.1 We prove that $h$ is harmonic without choosing a sequence of lifts. Fix $b\in D$ and a closed disc $\overline{D(b,R_b)}\subset D$. For any $\epsilon>0$, the supremum defining $h(b)$ gives one lift $h_v$ with $h_v(b)>h(b)-\epsilon$. For any other lift $h_w$, step 4.1 gives a common upper lift $h_t\ge h_v,h_w$. The difference $h_t-h_v$ is nonnegative harmonic on $D$ and has value less than $\epsilon$ at $b$. Apply [L5] to $h_t-h_v+\delta$ and let $\delta\downarrow0$: for every $r<R_b$ there is a finite constant $C_{b,r}$, independent of $v,w,t$, such that $0\le h_t(z)-h_v(z)\le C_{b,r}\epsilon$ on $\overline{D(b,r)}$. Hence $0\le h(z)-h_v(z)\le C_{b,r}\epsilon$ there after taking the supremum over $w$. One harmonic lift therefore approximates $h$ uniformly on each smaller disc to any prescribed error, using only one existential witness per error. [L5, step 4.1]

5.2 We show $h(a)=H_\varphi(a)$. Step 4.1 already gives $h(a)\le H_\varphi(a)$. Fix $\epsilon>0$. By [L1], $m\le H_\varphi(a)\le M$. Choose a radius $r>0$ small enough that $\overline{D(a,r)}\subset D$ and the Harnack upper factor $C(r)$ from [L5] for the larger disc $D$ satisfies $(C(r)-1)(M-m+\epsilon)<\epsilon/2$. The limsup definition in [L1] gives one point $z\in D(a,r)$ with $U_\varphi(z)>H_\varphi(a)-\epsilon/4$, and the supremum defining $U_\varphi(z)$ gives one lower function $v$ with $v(z)>U_\varphi(z)-\epsilon/4$. By step 2.1, $h_v(z)\ge v(z)>H_\varphi(a)-\epsilon/2$. The function $M-h_v$ is nonnegative harmonic on $D$; [L5], applied to $M-h_v+\delta$ and then with $\delta\downarrow0$, gives $M-h_v(a)\le C(r)(M-h_v(z))$. Since $M-h_v(z)<M-m+\epsilon/2$, rearrangement gives $h_v(a)>H_\varphi(a)-\epsilon$. Consequently $h(a)\ge h_v(a)>H_\varphi(a)-\epsilon$ for every $\epsilon>0$, so $h(a)=H_\varphi(a)$. The point and lower function are chosen only for this one $\epsilon$; no countable choice is used. [L1, L2, L5, step 2.1, step 4.1]

6.1 The uniform approximation in step 5.1 makes $h$ continuous: given a tolerance, choose one harmonic $h_v$ uniformly close on a neighbourhood, then use continuity of that $h_v$ and the triangle inequality. On any circle whose closed disc lies in $D$, approximate $h$ uniformly on that closed disc by one $h_v$, use the circle mean-value identity for $h_v$ from [L7], and let the error tend to $0$. Thus $h$ has the local circle mean-value property. By the converse in [L7], $h$ is harmonic on $D$. This epsilon proof does not assemble the individual witnesses into a sequence. [L7, step 5.1]

7.1 The difference $H_\varphi-h$ is subharmonic on $D$: $H_\varphi$ is subharmonic by step 1.1, $-h$ is harmonic and hence subharmonic by step 6.1, and [L3] preserves the sum. It is nonpositive by step 4.1 and vanishes at the interior point $a$ by step 5.2. The maximum principle [L8] forces it to be identically zero on $D$. Therefore $H_\varphi=h$ on $D$ and is harmonic near $a$. Since $a$ was arbitrary, $H_\varphi$ is harmonic on $\Omega$. The empty-family case is excluded by [L1], $m$ handles the constant lower bound, and every approximation uses only finite existential choices; no choice axiom has been added to the theorem. [L1, L3, L8, step 1.1, step 4.1, step 6.1, step 5.2] ∎

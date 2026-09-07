---
id: "cor-one-critical-point-cell-attachment-homotopy-type"
kind: "corollary"
title: "One critical point cell attachment homotopy type"
deps: ["thm-one-critical-point-handle-attachment", "cor-unstable-disk-is-the-handle-core", "prop-deformation-lemma-for-a-critical-point-free-slab", "lem-local-critical-value-lowering-preserves-the-upper-sublevel"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
status: "draft"
origin: "pipeline"
proof_strategy: "modified sublevel and explicit retraction"
---

## Statement

Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses. Then $M^b$ is homotopy equivalent to $M^a$ with one $k$-cell attached along the transported attaching sphere. The comparison respects the lower sublevel up to homotopy of pairs.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

[F2] [[cor-unstable-disk-is-the-handle-core]]: Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses. For the adapted descending field used in the handle construction, the disk consisting of $p$ and its outgoing trajectories down to $M_a$ is the handle core; its boundary is the attaching sphere. Here the disk is defined by the local backward limit to $p$ and continuation down to $a$. No assertion about a global unstable-set closure is made.

[F3] [[prop-deformation-lemma-for-a-critical-point-free-slab]]: Assume $\mathrm{AC}_\omega$. Under the compact regular closed-band hypothesis with $a<b$, the formula $H(s,x)=\Phi_{-s\max(f(x)-a,0)}(x)$, for $(s,x)\in[0,1]\times M^b$, is a strong deformation retraction onto $M^a$. Here $\Phi$ is the complete normalized ascending cutoff flow.

[F4] [[lem-local-critical-value-lowering-preserves-the-upper-sublevel]]: Assume $\mathrm{AC}_\omega$. In a Morse chart $f=c-|u|^2+|v|^2$ containing the closed ball $|u|^2+|v|^2\le2\varepsilon$, choose a smooth $\mu:[0,\infty)\to[0,\infty)$ supported in $[0,2\varepsilon)$ with $\mu(0)>\varepsilon$ and $-1<\mu^{\prime}\le0$. Set $F=f-\mu(|u|^2+2|v|^2)$ in the chart and $F=f$ outside. This is smooth, has the same critical points as $f$, lowers $p$ below $c-\varepsilon$, and satisfies $\{F\le c+\varepsilon\}=\{f\le c+\varepsilon\}$. If $f^{-1}([c-\varepsilon,c+\varepsilon])$ is compact with only the critical point $p$, the corresponding closed band of $F$ is compact and regular.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 First work between $c-\varepsilon$ and $c+\varepsilon$ and put $A=\{f\le c-\varepsilon\}$, $B=\{F\le c-\varepsilon\}$. The lowering lemma and regular deformation lemma strongly retract $\{f\le c+\varepsilon\}$ onto $B$, fixing $A\subseteq B$. In the chart put $x=|u|^2$, $y=|v|^2$, and $E=\{v=0,x\le\varepsilon\}$. Since $x+\mu(x)\ge\mu(0)>\varepsilon$, $E\subset B$. [F3, F4, algebra]

2.1 Define a homotopy on $B$ by fixing $A$ and fixing all points outside the chart. At remaining chart points replace $v$ by $(1-t)v$ if $x\le\varepsilon$; if $x>\varepsilon$ and $y>x-\varepsilon$, replace it by $((1-t)+t\sqrt{(x-\varepsilon)/y})v$. Keep $u$ fixed. In both regions the squared positive radius decreases; $\partial F/\partial y=1-2\mu^{\prime}>0$, so the homotopy stays in $B$. [step 1.1, algebra]

3.1 At $y=x-\varepsilon$ the second multiplier is one, matching the identity on $A$. At $x=\varepsilon$ it matches the first formula whenever $y>0$. At $v=0$ continuity follows from the bound on the moved vector norm by $|v|$, even if the quotient is not defined there; define that vector to be zero. Outside the perturbation support $B=A$, and the displacement tends to zero on its boundary, so the chart formula glues continuously to the identity. At $t=1$ the image is $A\cup E$, and this set is fixed for every $t$. Thus this is a strong deformation retraction. [step 2.1, algebra]

4.1 The disk $E$ meets $A$ exactly in its boundary, so $A\cup E$ is the adjunction of a $k$-cell; its quotient topology agrees with the subspace topology because the disk is compact and attached along a closed subset of the Hausdorff space. The transported core gives the attaching map on $M_a$. The regular outer collars and the handle comparison extend this equivalence to $(M^b,M^a)$, preserving the lower part up to the collar homotopies. If $k=0$ then $E$ is a disjoint point; if $k=n$ the positive block is absent and the chart already lies in $A\cup E$. [F1, F2, step 3.1] ∎

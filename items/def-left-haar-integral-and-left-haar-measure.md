---
id: def-left-haar-integral-and-left-haar-measure
kind: definition
title: Left Haar integral and left Haar measure
deps: [def-group, def-locally-compact-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-positive-linear-functional-on-c-c, def-radon-measure-on-an-lch-space]
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
---

## Definition

Let $G$ be a group with a Hausdorff locally compact topology for which multiplication $G\times G\to G$ and inversion $G\to G$ are continuous. The identity $e$ belongs to $G$, so $G$ is nonempty. Use [[def-group]], [[def-locally-compact-space]] and [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]. Set $L_af(x)=f(a^{-1}x)$ and $R_af(x)=f(xa)$.

A **left Haar integral** is a nonzero positive real-linear functional $I:C_c(G;\mathbb R)\to\mathbb R$ such that $I(L_af)=I(f)$ for every $a,f$; positivity has the meaning in [[def-positive-linear-functional-on-c-c]]. A **left Haar measure** is a nonzero Borel measure $\mu$ with $\mu(aE)=\mu(E)$ for all Borel $E$ and all $a$, finite on compact sets, outer regular on Borel sets and inner regular on open sets, exactly as in [[def-radon-measure-on-an-lch-space]]. Right Haar replaces left translations by right translations. These are independent definitions; existence and their correspondence are established later. Complexification means $I(u+iv)=I(u)+iI(v)$ for real $u,v$. No countability assumption on $G$ is imposed.

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.

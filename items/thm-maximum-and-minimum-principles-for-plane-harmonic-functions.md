---
id: thm-maximum-and-minimum-principles-for-plane-harmonic-functions
kind: theorem
title: "Maximum and minimum principles for plane harmonic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-harmonic-function, thm-local-holomorphic-potential-for-harmonic-functions,
       cor-maximum-principle-real-part-holomorphic-function, def-complex-domain,
       thm-heine-borel-rn, thm-compactness-under-continuous-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a complex domain and let $u:\Omega\to\mathbb R$ be harmonic.

1. If $u$ has an interior local maximum or an interior local minimum, then $u$
   is constant on $\Omega$.
2. If $\Omega$ is bounded and $u$ extends continuously to $\overline{\Omega}$,
   then
   $$\sup_{\overline{\Omega}}u=\sup_{\partial\Omega}u,\qquad \inf_{\overline{\Omega}}u=\inf_{\partial\Omega}u.$$

## Facts & Assumptions

**Given:** A harmonic function $u$ on a complex domain $\Omega$.

[L1] Near every point of $\Omega$, the function $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]).

[L2] If the real part of a holomorphic function has an interior local maximum, then the holomorphic function is constant ([[cor-maximum-principle-real-part-holomorphic-function]]).

[L3] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L4] Closed and bounded subsets of $\mathbb R^2$ are compact ([[thm-heine-borel-rn]]).

[L5] A continuous real-valued function on a nonempty compact space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]], claim 2).

## Proof

**Proof technique:** direct.

1.1 Suppose $u$ has an interior local maximum at $a\in\Omega$, with value $M=u(a)$. By [L1], some disc $D\subseteq\Omega$ and some holomorphic $F$ on $D$ satisfy $\operatorname{Re}F=u$ on $D$; the real part of $F$ has a local maximum at $a$, so [L2] makes $F$ constant on $D$, and therefore $u\equiv M$ on $D$. [L1, L2]

2.1 Let $S:=\{\,z\in\Omega : u\equiv M \text{ on some neighbourhood of } z\,\}$. Step 1.1 gives $a\in S$, and $S$ is open by definition. If $b\in\overline{S}$, choose a disc $D_b\subseteq\Omega$ and a holomorphic $G$ on $D_b$ with $\operatorname{Re}G=u$ there by [L1]; since $S\cap D_b$ contains a nonempty open set on which $\operatorname{Re}G=M$, both $\operatorname{Re}(G-M)$ and $\operatorname{Re}(M-G)$ have local maxima there, so [L2] makes $G$ constant on $D_b$, hence $u\equiv M$ on $D_b$ and $b\in S$. Thus $S$ is closed in $\Omega$. [step 1.1, L1, L2]

3.1 Because $\Omega$ is connected by [L3], the nonempty set $S$ that is open and closed in $\Omega$ must equal $\Omega$. Thus a local interior maximum forces $u$ to be constant on $\Omega$. Applying the same argument to $-u$, which is harmonic because $(-u)_{xx}+(-u)_{yy}=-(u_{xx}+u_{yy})=0$, gives the local minimum statement as well. [step 2.1, L3, algebra]

4.1 Now assume $\Omega$ is bounded and $u$ is continuous on $\overline{\Omega}$. The closure $\overline{\Omega}$ is nonempty, closed and bounded in $\mathbb R^2$, hence compact by [L4], so [L5] says that the continuous extension of $u$ attains a maximum and a minimum there. If either extremum were attained at an interior point and $u$ were nonconstant, step 3.1 would force $u$ to be constant. Therefore both extremal values are realized on $\partial\Omega$, and the displayed equalities follow. [step 3.1, L4, L5] ∎

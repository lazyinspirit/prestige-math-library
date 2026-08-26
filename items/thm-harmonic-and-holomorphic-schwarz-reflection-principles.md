---
id: thm-harmonic-and-holomorphic-schwarz-reflection-principles
kind: theorem
title: "Harmonic and holomorphic Schwarz reflection across the real axis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-poisson-integral-solves-the-disc-dirichlet-problem, cor-uniqueness-for-the-bounded-plane-dirichlet-problem, thm-harmonic-conjugate-on-homologically-simply-connected-domains, cor-real-valued-holomorphic-function-is-constant, prop-star-shaped-plane-domains-are-homologically-simply-connected]
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Write

$$\mathbb D^+:=\{\,z\in\mathbb C:|z|<1,\ \operatorname{Im}z>0\,\}.$$

1. If $u$ is harmonic on $\mathbb D^+$, continuous on $\overline{\mathbb D^+}$,
   and $u(x)=0$ for every $x\in(-1,1)$, then the odd reflection
   $$U(z):=\begin{cases}u(z),&\operatorname{Im}z\ge0,\\-u(\overline z),&\operatorname{Im}z<0,\end{cases}$$
   is harmonic on the full unit disc.
2. If $f$ is holomorphic on $\mathbb D^+$, continuous on $\overline{\mathbb D^+}$,
   and real-valued on $(-1,1)$, then the reflected function
   $$F(z):=\begin{cases}f(z),&\operatorname{Im}z\ge0,\\ \overline{f(\overline z)},&\operatorname{Im}z<0,\end{cases}$$
   is holomorphic on the full unit disc.

## Facts & Assumptions

**Given:** The upper half-disc $\mathbb D^+$.

[L1] The Poisson integral gives the unique continuous harmonic extension of continuous boundary data on a closed disc, and uniqueness holds on bounded domains with fixed boundary values ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]], [[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

[L2] On a star-shaped domain, every harmonic function has a harmonic conjugate, and a real-valued holomorphic function on a domain is constant ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-harmonic-conjugate-on-homologically-simply-connected-domains]], [[cor-real-valued-holomorphic-function-is-constant]]).

## Proof

**Proof technique:** direct.

1.1 For the harmonic statement, let $u$ satisfy the hypotheses, and define continuous boundary data $\Phi$ on the unit circle by taking the upper semicircle values of $u$ and extending them oddly across the real axis. By [L1], $\Phi$ has a harmonic Poisson extension $H$ to the full unit disc. On the upper half-disc, $H$ and $u$ are continuous harmonic functions with the same boundary values on the upper semicircle and on the diameter $(-1,1)$, so [L1] makes them equal there. By the odd construction of $\Phi$, the same harmonic function satisfies $H(z)=-u(\overline z)$ on the lower half-disc. Thus $H$ is exactly the reflected function $U$, so $U$ is harmonic. [L1]

2.1 For the holomorphic statement, write $f=u+iv$ on $\mathbb D^+$. Since $f$ is real-valued on $(-1,1)$, one has $v=0$ there; applying step 1.1 to $v$ gives a harmonic function $V$ on the full disc that equals $v$ above the axis and $-v(\overline z)$ below it. Because the disc is star-shaped, [L2] gives a harmonic conjugate $W$ of $V$, so $V+iW$ is holomorphic. Multiplying by $i$ shows that $G:=-W+iV$ is holomorphic and has imaginary part $V$. [step 1.1, L2, algebra]

3.1 On $\mathbb D^+$, the holomorphic functions $G$ and $f$ have the same imaginary part $v$, so their difference is real-valued and holomorphic; [L2] makes $G-f$ a real constant there. Subtracting that constant from $G$, we may assume $G=f$ on $\mathbb D^+$. [step 2.1, L2]

4.1 For $\operatorname{Im}z<0$, the functions $G(z)$ and $\overline{f(\overline z)}$ have the same imaginary part $-v(\overline z)$. Their difference is therefore real-valued and holomorphic on the lower half-disc, hence constant by [L2]; continuity across the diameter, where both functions equal the same real boundary values, forces that constant to be $0$. So $G(z)=\overline{f(\overline z)}$ below the axis, and the reflected function $F$ is holomorphic on the full disc. [step 3.1, L2] ∎

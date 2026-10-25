---
id: fs-every-continuous-self-map-of-the-circle-is-nullhomotopic
kind: false-statement
title: "FALSE: every continuous self-map of the circle is nullhomotopic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nullhomotopic-map-and-contractible-space, def-circle-as-real-line-mod-integers, thm-real-line-covers-real-line-mod-integers, thm-homotopy-lifting-for-covering-maps, thm-path-lifting-for-covering-maps, def-standard-integer-loops-in-the-circle, thm-algebra-of-continuous-functions]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

**False claim:** every continuous map
$f:\mathbb R/\mathbb Z\to\mathbb R/\mathbb Z$ is nullhomotopic.

The identity map is a counterexample.

## Facts & Assumptions

**Given:** The identity map of $S^1=\mathbb R/\mathbb Z$.

[A1] A map $f:X\to Y$ is nullhomotopic if it is homotopic to a constant map $c_{y_0}:X\to Y$ for some $y_0\in Y$ ([[def-nullhomotopic-map-and-contractible-space]]).

[L1] $p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map ([[thm-real-line-covers-real-line-mod-integers]]).

[L2] A homotopy $H:Y\times I\to B$ through a covering has a unique lift extending any prescribed lift of $H(-,0)$ ([[thm-homotopy-lifting-for-covering-maps]]).

[L3] A path through a covering has a unique lift once its initial point is prescribed ([[thm-path-lifting-for-covering-maps]]).

[L4] The standard loop $\omega_1$ is $t\mapsto[t]$ ([[def-standard-integer-loops-in-the-circle]]).

[L5] For the quotient projection, $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$, and $p(x+n)=p(x)$ for every integer $n$ ([[def-circle-as-real-line-mod-integers]]).

[L6] Constant functions, the identity, finite sums, and scalar multiples are continuous on real intervals ([[thm-algebra-of-continuous-functions]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the identity is nullhomotopic. By [A1], there are $c\in\mathbb R/\mathbb Z$ and a homotopy $H$ with $H(y,0)=y$ and $H(y,1)=c$. Reverse its time coordinate to obtain $K(y,t)=H(y,1-t)$, so $K(y,0)=c$ and $K(y,1)=y$. [A1, assume-contra]

2.1 Since $p$ is surjective, choose $a\in\mathbb R$ with $p(a)=c$. The constant map $y\mapsto a$ lifts $K(-,0)$, so [L1] and [L2] give a lift $\widetilde K:(\mathbb R/\mathbb Z)\times I\to\mathbb R$. Define $s(y)=\widetilde K(y,1)$. Then $s$ is continuous and $p(s(y))=K(y,1)=y$, so $p\circ s$ is the identity: $s$ is a section of $p$. [step 1.1, L1, L2, choose]

3.1 The path $s\circ\omega_1$ is a lift of $\omega_1$ because $p\circ s$ is the identity, and it is closed because $\omega_1(0)=\omega_1(1)=[0]$. Put $m=s([0])\in\mathbb Z$ by [L5]. The path $t\mapsto m+t$ is another lift of $\omega_1$ starting at $m$, since [L4] and [L5] give $p(m+t)=[t]$; it is continuous by [L6]. Uniqueness in [L3] forces $s(\omega_1(t))=m+t$, whose endpoint is $m+1\ne m$, contradicting that $s\circ\omega_1$ is closed. [step 2.1, L3, L4, L5, L6]

4.1 The contradiction discharges the assumption of step 1.1. Hence the identity is not nullhomotopic, and the universal claim is false. [step 1.1, step 2.1, step 3.1, discharge-contradiction] ∎

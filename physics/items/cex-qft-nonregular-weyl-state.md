---
id: cex-qft-nonregular-weyl-state
kind: counterexample
title: Positive Weyl state without a continuous field generator
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 3
deps: [thm-qft-algebraic-gns-domain]
dependency_roles:
  thm-qft-algebraic-gns-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, lecture notes, arXiv:1904.04051v2 (2019), §4.2 Exercise 17"
      url: "https://arxiv.org/html/1904.04051"
      locator: "§4.2, printed p. 18: the tracial Weyl state defined by delta at the zero vector and its square-summable-function GNS representation."
---

## Statement refuted

Assume Countable Choice, the hypothesis used to form the Hilbert completion in [[thm-qft-algebraic-gns-domain]]. The claim that positivity and the Weyl relations alone make every GNS one-parameter unitary group $t\mapsto\pi(W(tv))$ strongly continuous for every $v\ne0$ is false, even for the algebraic Weyl algebra of the standard symplectic plane.

## Facts & Assumptions

**Given:** Countable Choice, $S=\mathbb R^2$, the displayed nondegenerate alternating form $\sigma$, and the algebraic Weyl relations above.

[F1] [[thm-qft-algebraic-gns-domain]]: under Countable Choice, a positive normalized state on a unital complex star algebra has a Hilbert-space GNS representation on a common invariant dense domain, with cyclic unit vector and state recovery.

[A1] The form $\sigma$ is real-bilinear and alternating: $\sigma(f,g)=-\sigma(g,f)$ and $\sigma(f,f)=0$ for every $f,g\in S$.

## Example data

Let $S=\mathbb R^2$ with standard symplectic form $\sigma((q,p),(q',p')):=qp'-pq'$. Define $A_W$ to be the complex vector space of finite linear combinations of formal basis elements $W(f)$, $f\in S$, with bilinear multiplication and involution specified on basis elements by

$$W(f)W(g):=e^{-i\sigma(f,g)/2}W(f+g),\qquad W(f)^*:=W(-f),\qquad 1:=W(0).$$

For the false claim, a positive normalized functional is a complex-linear $\omega:A_W\to\mathbb C$ with $\omega(1)=1$ and $\omega(a^*a)\ge0$ for every $a$. Define

$$\omega(W(f)):=\begin{cases}1,&f=0,\\0,&f\ne0,\end{cases}$$

and extend linearly to finite sums. This Weyl algebra is algebraic: its vectors have finite support, and no norm or topology on $A_W$ is assumed. The Hilbert-space strong continuity considered below is norm continuity of each GNS orbit $t\mapsto\pi(W(tv))\xi$.

## Counterexample

**Proof technique:** direct.

1.1 Bilinearity of $\sigma$ gives $\sigma(f,g)+\sigma(f+g,h)=\sigma(g,h)+\sigma(f,g+h)$, so the phase factors in $(W(f)W(g))W(h)$ and $W(f)(W(g)W(h))$ agree. Also $(W(f)W(g))^*=e^{i\sigma(f,g)/2}W(-f-g)=W(-g)W(-f)$ by alternation, and $W(0)$ is a two-sided unit. Thus the displayed operations define a unital complex star algebra. [given, A1, algebra]

1.2 For $a=\sum_{f\in F}c_fW(f)$ with finite support $F\subset S$, the Weyl relation gives $a^*a=\sum_{f,g\in F}\overline{c_f}c_g e^{i\sigma(f,g)/2}W(g-f)$. Only the terms $g=f$ contribute to $\omega(a^*a)$, and $\sigma(f,f)=0$, so $\omega(a^*a)=\sum_{f\in F}|c_f|^2\ge0$; also $\omega(W(0))=1$. Hence $\omega$ is a positive normalized state. [given, A1, algebra]

2.1 By [F1], its GNS quotient has dense span of the classes $[W(f)]$. For $f,g\in S$, $([W(f)],[W(g)])_\omega=\omega(W(g)^*W(f))$ is $1$ if $f=g$ and $0$ otherwise; these classes are an orthonormal family with dense span. Left multiplication satisfies $\pi(W(h))[W(f)]=e^{-i\sigma(h,f)/2}[W(h+f)]$, so it permutes this orthonormal family with unit-modulus phases and extends to a unitary on the Hilbert completion, with inverse $\pi(W(-h))$. [F1, given, step 1.2]

3.1 Fix $v\in S\setminus\{0\}$ and put $U(t):=\pi(W(tv))$ for $t\in\mathbb R$. Since $\sigma(tv,sv)=ts\sigma(v,v)=0$, the Weyl relation gives $U(t)U(s)=U(t+s)$ and $U(0)=I$. For every $t\ne0$, $U(t)\Omega=[W(tv)]$ is orthogonal to $\Omega=[W(0)]$, and both are unit vectors; thus $\|U(t)\Omega-\Omega\|=\sqrt2$. This orbit is not continuous at $0$, so $U$ is not strongly continuous. [A1, step 2.1, algebra]

4.1 Suppose a dense linear subspace $E$ had a norm derivative $\lim_{t\to0}(U(t)\xi-\xi)/t$ for every $\xi\in E$. Each such orbit would be continuous at $0$. For any $x\in H_\omega$ and $\varepsilon>0$, choose $\xi\in E$ with $\|x-\xi\|<\varepsilon/3$; unitarity gives $\|U(t)x-x\|\le2\|x-\xi\|+\|U(t)\xi-\xi\|$, so continuity on $E$ would imply continuity at $0$ for every $x$, contradicting step 3.1 at $x=\Omega$. Therefore no dense domain supports a norm-differentiable generator for this unitary group. The example is purely algebraic and asserts no physical preparation or relativistic vacuum. [step 3.1, algebra] ∎

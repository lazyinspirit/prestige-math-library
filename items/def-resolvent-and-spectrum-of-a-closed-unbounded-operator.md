---
id: def-resolvent-and-spectrum-of-a-closed-unbounded-operator
kind: definition
title: "Resolvent and spectrum of a closed operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-densely-defined-closed-and-closable-operator, def-hilbert-space, def-bounded-linear-operator, def-unbounded-linear-operator-domain-and-graph, def-linear-map, def-spectrum-and-resolvent-of-a-bounded-operator]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Definition 7.26, Remark 7.27 and Definition 7.29, pp.34-35"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.4, (2.69)-(2.71), p.83"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.9 and Lemmas 6.10-6.12, Sec. 6.1.2"
---

## Definition

Let $T$ be a linear operator on $H$ with domain $D(T)$. The **resolvent set**
of $T$ is
$$\rho(T):=\{z\in\mathbb C:\ z-T:D(T)\to H\text{ is bijective and }(z-T)^{-1}\in\mathcal B(H)\},$$
where $\mathcal B(H)$ is the space of bounded everywhere defined operators on
$H$ ([[def-bounded-linear-operator]]); the **spectrum** is
$\sigma(T):=\mathbb C\setminus\rho(T)$. For $z\in\rho(T)$ the bounded operator
$$R_T(z):=(z-T)^{-1}\in\mathcal B(H)$$
is the **resolvent** of $T$ at $z$. This is the library convention used
throughout the page, matching the bounded resolvent of
[[def-spectrum-and-resolvent-of-a-bounded-operator]]: the parameter appears
with a plus sign in front of $T$.

**The resolvent determines $T$ back.** If $z\in\rho(T)$ and $R:=R_T(z)$, then
$D(T)=\operatorname{ran}R$, $Tx=z\,Rx-x$ for $x\in D(T)$; equivalently
$T=zI-R^{-1}$ with $D(T)=\operatorname{ran}R$, and $R(z-T)x=x$ for
$x\in D(T)$, $(z-T)Ry=y$ for $y\in H$.

**Nonempty resolvent set forces closedness, without the closed graph
theorem.** Assume $\rho(T)\ne\varnothing$ and fix $z\in\rho(T)$ with
$R:=R_T(z)$. Since $R$ is bounded, its graph is closed: if $y_n\to y$ and
$Ry_n\to w$, then $w=\lim Ry_n=Ry$ by continuity. Because
$D(T)=\operatorname{ran}R$ and $(z-T)Rx=x$ for $x\in D(T)$, the graph of $T$ is
$$\Gamma(T)=\{(x,Tx):x\in D(T)\}=\{(Rv,zRv-v):v\in H\}=\Phi(\Gamma(R)),$$
where $\Phi(v,w):=(w,zw-v)$ is a linear bijection of $H\oplus H$ with
continuous inverse $\Psi(u,v)=(zu-v,u)$, since $\Phi(\Psi(u,v))=(u,z u-(zu-v))=(u,v)$
and $\Psi(\Phi(v,w))=\Psi(w,zw-v)=(v,w)$. A homeomorphism carries closed sets
to closed sets, so $\Gamma(T)$ is closed and $T$ is closed.
No closed graph theorem and hence no choice principle is used here.

---
id: thm-csm-examples-flow-fine-entropy
kind: theorem
title: "Fine entropy under a specified incompressible periodic flow"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-csm-examples-smooth-flow-jacobian
  - thm-change-of-variables-for-compact-jordan-sets
dependency_roles:
  lem-csm-examples-smooth-flow-jacobian: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1 and Chapter 4, §4.5"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "David Tong, Statistical Physics, §1.2, entropy as a functional of a specified state"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathbb T^n:=\mathbb R^n/\Lambda$ be a flat translation torus, where $\Lambda$ is a full-rank lattice, and let $\mu=c\,da$ be its fixed translation-invariant volume measure in dimensionless translation coordinates, with $c>0$. Let $I\subseteq\mathbb R$ be an open interval containing $0$. Suppose $\chi_t:\mathbb T^n\to\mathbb T^n$ is a jointly $C^2$ family of diffeomorphisms with $\chi_0=\operatorname{id}$ and $C^1$ velocity field $b$ satisfying $\operatorname{div}b=0$ in local translation charts. Let $f_0\in C^1(\mathbb T^n)$ satisfy $0<m\le f_0\le M<\infty$ and $\int f_0\,d\mu=1$, and define $f_t:=f_0\circ\chi_t^{-1}$. Then $f_t$ is a probability density for every $t\in I$, the integral $H(f_t):=-\int_{\mathbb T^n}f_t\log f_t\,d\mu$ is finite, and $H(f_t)=H(f_0)$. Here $H$ is the dimensionless fine entropy of this density; multiplication by a physical constant such as $k_B$ is a separate interpretation.

## Facts & Assumptions

**Given:** The flat torus, fixed measure $\mu=c\,da$, jointly $C^2$ diffeomorphisms $\chi_t$, divergence-free velocity, and positive $C^1$ probability density $f_0$ bounded above and below as in the Statement.

[F1] [[lem-csm-examples-smooth-flow-jacobian]]: for the supplied diffeomorphic family with $\chi_0=\operatorname{id}$, its Jacobian satisfies $\partial_tJ=J\operatorname{div}b$, is positive, and equals $1$ when $\operatorname{div}b=0$; the lemma's periodic version is in local translation charts.

[F2] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative on an open neighborhood of a compact Jordan set obeys the Riemann change-of-variables formula for bounded integrable functions.

## Proof
1.1 Apply [F1] to the given family. Its hypotheses are exactly the supplied $C^2$ diffeomorphisms, identity initial map and $C^1$ divergence-free velocity, so every local translation-chart Jacobian is $J_t=1$. [given, F1]



2.1 For fixed $t$, around each point choose a source chart and a smaller coordinate neighborhood whose closure maps under $\chi_t$ into a target chart. Continuity and compactness give finitely many closed coordinate boxes $Q_j$ with interiors covering the torus and with each $\chi_t(Q_j)$ inside a target chart. Put $E_1=Q_1$ and $E_j=Q_j\setminus\bigcup_{i<j}\operatorname{int}(Q_i)$; each $E_j$ is compact, the pieces cover the torus, and any overlap lies on one of the box faces. Each $E_j$ is Jordan because its boundary lies in a finite union of coordinate faces, which are compact $C^1$ hypersurface patches. A $C^1$ graph patch has bounded slope on a compact subpatch, so its mesh-$h$ box cover has total $n$-volume $O(h)$ and hence content zero. On compact chart neighborhoods $\chi_t$ has bounded derivative, so it maps these zero-content boundaries to zero-content boundaries. Each compact piece and its image therefore have Jordan boundaries and lie in source and target charts; [F2] applies there. Summing over the pieces, overlaps do not affect the integrals, translation chart changes preserve $da$, and the constant $c$ is the same on both sides. Thus for every continuous $\varphi$ on the torus, $\int\varphi\circ\chi_t\,d\mu=\int\varphi J_t\,d\mu=\int\varphi\,d\mu$. [given, F1, F2, step 1.1]



3.1 The function $f_t=f_0\circ\chi_t^{-1}$ is positive and continuous. The substitution of step 2.1 with $\varphi=f_t$ gives $\int f_t\,d\mu=\int f_0\,d\mu=1$, so $f_t$ is normalized. [given, step 2.1]



4.1 The bounds $m\le f_0\le M$ also hold for $f_t$, so $f_t\log f_t$ is bounded and continuous on the compact torus and its integral is finite. Applying step 2.1 to $\varphi=f_t\log f_t$ gives $\int f_t\log f_t\,d\mu=\int (f_t\log f_t)\circ\chi_t\,d\mu=\int f_0\log f_0\,d\mu$, since $f_t\circ\chi_t=f_0$. Negating proves $H(f_t)=H(f_0)$. [given, step 2.1, algebra] ∎

## Remarks

This is a statement about supplied smooth mathematical flow data. It does not assert existence of a flow for a vector field, Hamiltonian structure, relaxation, mixing, ergodicity, monotonicity of coarse entropy, or a physical entropy interpretation.

---
id: rem-se-endpoint-compatibility
kind: remark
domain: mathematics
title: Necessary endpoint compatibility for boundary controls
status: published
deps:
  - def-se-geometry
  - def-se-boundary-state-space
  - def-se-cubic-boundary-system
  - def-se-foundation-time-function-spaces
  - lem-se-collar-traces-and-partial-extension
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-boundary-state-space: mathematical-premise
  def-se-cubic-boundary-system: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-collar-traces-and-partial-extension: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 4, Theorem 1.1 and Remark 2
      statement: For the solution and control of Theorem 1.1, the endpoint traces
        satisfy the stated compatibility identities; the article says its
        constructed control satisfies them, with arbitrary positive control time
        and no star-shapedness assumption.
      hypotheses: Smooth nonempty non-trapping obstacle with connected exterior; n in
        {2,3}; s in {1,2}; T positive; endpoints and solution/control regularity
        as in Theorem 1.1.
      reading_limits: The theorem statement and Remark 2 in the frozen article text
        were read. This citation attributes the article's claims; the
        conditional endpoint argument below uses the declared mathematical
        suppliers and does not prove existence of the control.
dependency_level: 14
---

## Statement

Assume the Axiom of Choice. In the truncated smooth obstacle geometry, let $n\in\{2,3\}$, $s\in\{1,2\}$ and $T>0$. Suppose $u\in C([0,T];H^s(\Omega_0))$ has endpoints $u(0)=u_0$ and $u(T)=u_1$, and $h\in C([0,T];H^{s-1/2}(\Gamma_1))$. If the outer Dirichlet control conditions $\gamma_{\Gamma_1}u(t)=h(t)$ and $\gamma_{\Gamma_2}u(t)=0$ hold for every $0<t<T$, then necessarily $\gamma_{\Gamma_2}u_0=\gamma_{\Gamma_2}u_1=0$, $h(0)=\gamma_{\Gamma_1}u_0$ and $h(T)=\gamma_{\Gamma_1}u_1$. These are equalities in the corresponding boundary Sobolev spaces.

The article states that the control constructed in its proof, obtained as the outer trace of the extended solution, satisfies these identities. Its Theorem 1.1 permits every $T>0$ and does not require $\Theta$ to be star-shaped.

## Facts & Assumptions

**Given:** The geometry, spaces, path regularity, endpoint values and interior-time trace identities in the Statement.

[F1] [[def-se-geometry]] fixes the smooth truncated domain and its disjoint outer and obstacle boundary pieces. [[def-se-cubic-boundary-system]] identifies the stated conditions as the outer Dirichlet control formulation.

[F2] With the Axiom of Choice [[math:def-axiom-of-choice]], [[lem-se-collar-traces-and-partial-extension]] supplies bounded linear value traces $\gamma_{\Gamma_j}:H^s(\Omega_0)\to H^{s-1/2}(\Gamma_j)$ for $j=1,2$ and the stated orders. The finite-atlas boundary Sobolev convention and $X^s$ as the kernel of the obstacle trace are specified in [[def-se-boundary-state-space]].

[F3] [[def-se-foundation-time-function-spaces]] defines $C([0,T];X)$ using continuity in the norm of $X$, including one-sided continuity at the endpoints.

## Proof

**Given:** The geometry, spaces, path regularity, endpoint values and interior-time trace identities in the Statement.

[F1] [[def-se-geometry]] fixes the smooth truncated domain and its disjoint outer and obstacle boundary pieces. [[def-se-cubic-boundary-system]] identifies the stated conditions as the outer Dirichlet control formulation.

[F2] With the Axiom of Choice [[math:def-axiom-of-choice]], [[lem-se-collar-traces-and-partial-extension]] supplies bounded linear value traces $\gamma_{\Gamma_j}:H^s(\Omega_0)\to H^{s-1/2}(\Gamma_j)$ for $j=1,2$ and the stated orders. The finite-atlas boundary Sobolev convention and $X^s$ as the kernel of the obstacle trace are specified in [[def-se-boundary-state-space]].

[F3] [[def-se-foundation-time-function-spaces]] defines $C([0,T];X)$ using continuity in the norm of $X$, including one-sided continuity at the endpoints.



**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the four endpoint trace identities.

1.1 For either boundary piece, bounded linearity of $\gamma_{\Gamma_j}$ gives $\|\gamma_{\Gamma_j}u(t)-\gamma_{\Gamma_j}u(t_0)\|\leq C_j\|u(t)-u(t_0)\|_{H^s(\Omega_0)}$. Thus the trace path is norm-continuous on $[0,T]$. Here the boundary norm on the left is that of $H^{s-1/2}(\Gamma_j)$. [F1, F2, F3, given]

2.1 Let $t$ approach $0$ and then $T$ from within $(0,T)$. Continuity of both $h$ and the outer trace path carries $\gamma_{\Gamma_1}u(t)=h(t)$ to the endpoints; the endpoint equalities for $u$ give $h(0)=\gamma_{\Gamma_1}u_0$ and $h(T)=\gamma_{\Gamma_1}u_1$. The same limits applied to the zero obstacle trace give $\gamma_{\Gamma_2}u_0=\gamma_{\Gamma_2}u_1=0$. Equivalently both endpoints belong to $X^s(\Omega_0)$. [F2, F3, given, step 1.1] ∎

## Source notes

The original article is cited for the attribution in the second paragraph of the Statement. The proof above is a conditional consequence of bounded traces and norm continuity; it neither establishes the article's control construction nor uses the article's assertion as a premise. No star-shapedness or non-trapping assumption is needed for this conditional endpoint deduction.

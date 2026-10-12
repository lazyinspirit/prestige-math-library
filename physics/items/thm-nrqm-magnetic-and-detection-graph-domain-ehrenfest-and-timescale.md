---
id: thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale
aliases: [nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale]
kind: theorem
domain: mathematics
title: "Graph-domain Ehrenfest identities and the conditional timescale bound"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-weak-form-robertson-uncertainty, thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-inner-product-space, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-weak-form-robertson-uncertainty: mathematical-premise
  thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 pp. 55-57 and Section 6.5 pp. 155-158 (Ehrenfest identities on operator domains)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics' pp. 10-20 (Ehrenfest theorem and the time-energy relation)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathcal H$ be a complex Hilbert space ([[def-inner-product-space]],
[[def-hilbert-space]]), let $K,A$ be self-adjoint operators on $\mathcal H$,
let $I\subseteq\mathbb R$ be a nonempty open interval, fix $\hbar>0$ and let
$\psi:I\to\mathcal H$ satisfy, for every $t\in I$:

1. $\psi(t)\in D(A)$, and the curve is $C^1$ **into $D(A)$ with the graph
   norm** of $A$ ([[def-unbounded-linear-operator-domain-and-graph]],
   [[def-densely-defined-closed-and-closable-operator]]), meaning that both
   $t\mapsto\psi(t)$ and $t\mapsto A\psi(t)$ are $C^1$ into $\mathcal H$;
2. $K\psi(t)\in D(A)$, that is $\psi(t)\in D(AK)$; the additional condition
   $A\psi(t)\in D(K)$ (that is $\psi(t)\in D(KA)$) is imposed only in the
   clauses that state it;
3. $\psi'(t)=-\frac i\hbar K\psi(t)$ in $\mathcal H$.

Then, writing $f(t):=\langle A\psi(t),\psi(t)\rangle$ and
$(KA-AK)\psi:=K(A\psi)-A(K\psi)$ for $\psi\in D(AK)\cap D(KA)$:

(a) if hypotheses 1 and 3 and $K\psi(t)\in D(A)$ for all $t$ hold (that is,
$\psi(t)\in D(AK)$), then $f$ is $C^1$ on $I$ and
$$f'(t)=-\frac2\hbar\operatorname{Im}\bigl\langle A\psi(t),K\psi(t)\bigr\rangle ;$$
if moreover $A\psi(t)\in D(K)$ for all $t$ (that is, $\psi(t)\in D(KA)$), then
also $f'(t)=\frac i\hbar\langle(KA-AK)\psi(t),\psi(t)\rangle$;

(b) if $(A_t)_{t\in I}$ is a family of bounded self-adjoint operators that is
$C^1$ in operator norm and $\psi$ satisfies 1 and 3 above (no product-domain
hypothesis), then $g(t):=\langle A_t\psi(t),\psi(t)\rangle$ is $C^1$ with
$$g'(t)=\langle A'_t\psi(t),\psi(t)\rangle -\frac2\hbar\operatorname{Im}\bigl\langle A_t\psi(t),K\psi(t)\bigr\rangle ;$$
if in addition $A_t\psi(t)\in D(K)$ and $K\psi(t)\in D(A_t)$ for all $t$,
then this equals
$\langle A'_t\psi(t),\psi(t)\rangle+\frac i\hbar\langle[K,A_t]\psi(t),\psi(t)\rangle$;

(c) if moreover $\|\psi(t)\|=1$ for all $t$ and for a fixed self-adjoint $A$
as in (a) one has $f'(t_0)\ne0$ at some $t_0\in I$, then with the preparation
spreads
$$\Delta K(t_0):=\bigl\|(K-\langle K\psi(t_0),\psi(t_0)\rangle)\psi(t_0)\bigr\|, \qquad \Delta A(t_0):=\bigl\|(A-f(t_0))\psi(t_0)\bigr\|,$$
and the timescale $\tau_A(t_0):=\Delta A(t_0)/|f'(t_0)|$, the bound
$$\Delta K(t_0)\,\tau_A(t_0)\ge\frac\hbar2$$
holds;

(d) if $f'(t_0)=0$ then the definition of $\tau_A(t_0)$ supplies no timescale,
and no universal time operator, apparatus error or energy-time observable is
asserted by (a)-(c).

## Facts & Assumptions

**Given:** self-adjoint $K,A$ on a complex Hilbert space $\mathcal H$, an open interval $I$, a curve $\psi$ satisfying hypotheses 1-3 with $K\psi(t)\in D(A)$ (and $A\psi(t)\in D(K)$ where a clause states it), the function $f(t)=\langle A\psi(t),\psi(t)\rangle$ and the notation $(KA-AK)\psi=K(A\psi)-A(K\psi)$.

[F1] A self-adjoint operator is closed and symmetric; $T^*=T$, $D(T)=D(T^*)$, and $\langle Tv,w\rangle=\langle v,Tw\rangle$ for $v,w\in D(T)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-densely-defined-closed-and-closable-operator]]).

[F2] Hypotheses 1 and 2: $t\mapsto\psi(t)$ and $t\mapsto A\psi(t)$ are $C^1$ into $\mathcal H$, and $K\psi(t),A\psi(t)\in D(A)\cap D(K)$ in the combinations appearing below. Because $A$ is closed and $t\mapsto\psi(t)$ is $C^1$ into $D(A)$, the derivative of $t\mapsto A\psi(t)$ is $A\psi'(t)$: the graph-norm difference quotients converge to $\psi'(t)$, and applying the closed operator $A$ to the limit gives $(A\psi)'(t)=A\psi'(t)$ ([[def-unbounded-linear-operator-domain-and-graph]], [[def-densely-defined-closed-and-closable-operator]]).

[F3] The weak-form Robertson lemma of [[lem-nrqm-composites-weak-form-robertson-uncertainty]]: for symmetric $K,A$, a unit $u\in D(K)\cap D(A)$ with $u\in D(KA)\cap D(AK)$ satisfies $\Delta K\,\Delta A\ge\frac12|\langle[K,A]u,u\rangle|$, where $[K,A]u=KAu-AKu$ (clause (c)); the covariance form of the same bound is [[thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]] clause (d).

## Proof

1.1 [Differentiability of $f$] By [F2], $(A\psi)'(t)=A\psi'(t)$ and both factors $A\psi(t)$ and $\psi(t)$ are $C^1$ into $\mathcal H$; the product rule for the inner product gives $f'(t)=\langle(A\psi)'(t),\psi(t)\rangle+\langle A\psi(t),\psi'(t)\rangle=\langle A\psi'(t),\psi(t)\rangle+\langle A\psi(t),\psi'(t)\rangle$. [given, F2, algebra]

1.2 [Bounded time-dependent observable] Let $A_t$ be a bounded self-adjoint family, $C^1$ in operator norm, and $g(t)=\langle A_t\psi(t),\psi(t)\rangle$. By the product rule for the three $C^1$ factors, $g'=\langle A'_t\psi,\psi\rangle+\langle A_t\psi',\psi\rangle+\langle A_t\psi,\psi'\rangle$; self-adjointness of $A_t$ combines the last two terms into $2\operatorname{Re}\langle A_t\psi',\psi\rangle=2\operatorname{Re}\bigl(-\frac i\hbar q\bigr)$ with $q:=\langle A_tK\psi,\psi\rangle$, and for $q=x+iy$ one has $-\frac i\hbar q=\frac{y-ix}\hbar$, so $2\operatorname{Re}(-\frac i\hbar q)=\frac{2y}\hbar=\frac2\hbar\operatorname{Im}q$. Since $A_t$ is self-adjoint, $q=\langle A_tK\psi,\psi\rangle=\langle K\psi,A_t\psi\rangle=\overline{\langle A_t\psi,K\psi\rangle}$, hence $\operatorname{Im}q=-\operatorname{Im}\langle A_t\psi,K\psi\rangle$ and $g'=\langle A'_t\psi,\psi\rangle-\frac2\hbar\operatorname{Im}\langle A_t\psi,K\psi\rangle$. If in addition $A_t\psi\in D(K)$ and $K\psi\in D(A_t)$, then $\langle KA_t\psi,\psi\rangle=\langle A_t\psi,K\psi\rangle$ and $\langle A_tK\psi,\psi\rangle=\langle K\psi,A_t\psi\rangle=\overline{\langle A_t\psi,K\psi\rangle}$, so $\langle[K,A_t]\psi,\psi\rangle=2i\operatorname{Im}\langle A_t\psi,K\psi\rangle$ and $-\frac2\hbar\operatorname{Im}\langle A_t\psi,K\psi\rangle=\frac i\hbar\langle[K,A_t]\psi,\psi\rangle$, completing (b). [given, F1, algebra]

2.1 [The commutator form] Since $\psi'(t)\in D(A)$ by hypothesis 1 and $A$ is symmetric [F1], $\langle A\psi'(t),\psi(t)\rangle=\langle\psi'(t),A\psi(t)\rangle$, so $f'(t)=2\operatorname{Re}\langle\psi'(t),A\psi(t)\rangle$. Substituting $\psi'=-\frac i\hbar K\psi$ and writing $z:=\langle A\psi(t),K\psi(t)\rangle$, we get $f'=2\operatorname{Re}\bigl(-\frac i\hbar\langle K\psi,A\psi\rangle\bigr)=2\operatorname{Re}\bigl(-\frac i\hbar\overline z\bigr)$; since $\operatorname{Re}(-\frac i\hbar\overline z)=\operatorname{Re}\bigl(-\frac i\hbar(\operatorname{Re}z-i\operatorname{Im}z)\bigr)=-\frac1\hbar\operatorname{Im}z$, this gives $f'=-\frac2\hbar\operatorname{Im}\langle A\psi,K\psi\rangle$. [given, step 1.1, F1, algebra]

3.1 [The commutator pairing] Assume in addition $A\psi(t)\in D(K)$. Then the pairings $\langle KA\psi,\psi\rangle=\langle A\psi,K\psi\rangle$ (symmetry of $K$ with $A\psi(t)\in D(K)$) and $\langle AK\psi,\psi\rangle=\langle K\psi,A\psi\rangle=\overline{\langle A\psi,K\psi\rangle}$ (symmetry of $A$ with $K\psi(t)\in D(A)$) are defined, so $\langle(KA-AK)\psi,\psi\rangle=z-\overline z=2i\operatorname{Im}z$ with $z$ as in step 2.1, and $\frac i\hbar(z-\overline z)=\frac i\hbar\cdot2i\operatorname{Im}z=-\frac2\hbar\operatorname{Im}z$, which is the second displayed form of $f'$. This proves (a). [given, step 2.1, F1, algebra]

4.1 [Timescale bound] Let $\|\psi(t)\|=1$, $t_0\in I$ with $f'(t_0)\ne0$ and suppose hypotheses 1-3 hold (so $\psi(t_0)\in D(K)\cap D(A)$, $K\psi(t_0)\in D(A)$ and $A\psi(t_0)\in D(K)$). Applying [F3] with $u=\psi(t_0)$ gives $\Delta K(t_0)\Delta A(t_0)\ge\frac12|\langle(KA-AK)\psi(t_0),\psi(t_0)\rangle|=\frac\hbar2|f'(t_0)|$ by (a); dividing by $|f'(t_0)|>0$ gives $\Delta K(t_0)\tau_A(t_0)\ge\frac\hbar2$. [given, step 3.1, F3, algebra]

5.1 [Scope and vanishing derivative] If $f'(t_0)=0$, the quotient $\tau_A(t_0)=\Delta A(t_0)/|f'(t_0)|$ is undefined, so no timescale is supplied; and nothing in the argument produces a time operator, a measurement error or an energy-time observable, since all quantities were formed from the specified curve and the two operators. This is (d). [given, step 4.1, algebra] ∎
